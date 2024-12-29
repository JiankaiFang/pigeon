import User from "../data/User";
import pg from "./pigeon";
//---------------------------------用户自定义请求---------------------------------
async function send(type, url, param) {
     cc.log(`send:${type} ${url} ${JSON.stringify(param)}`)
    if (User.getIns().token) {
        param.token = User.getIns().token;
    }
    if (User.getIns().openid) {
        param.openid = User.getIns().openid;
    }
    const data = await pg.http.send(type, url, param)
    return data;
}


//---------------------------------数据类型---------------------------------
export interface RespData<T> {
    success: boolean,
    message: string,
    code: number,// 200 成功 400 参数错误 500 服务器错误
    result: T,
    timestamp: number,
}

//---------------------------------装饰器---------------------------------
/**
 * 网络类装饰器
 * @param value 测试数据源
 * @returns null | any
*/
export function HttpServer(server: string) {
    return function (target) {
         cc.log(`HttpServer created:${target.name}`);
        target.__server = server;
        target.__send = async function <T>(type, url, params: any): Promise<RespData<T>> {
            if (params.__debugData) {
                await delay(0.03);
                return {
                    success: true,
                    message: '',
                    code: 200,
                    result: params.__debugData as T,
                    timestamp: new Date().getTime(),
                }
            }
            delete params.__debugData;
            let data: any = await send(type, target.__server + url, params);
            return data as RespData<T>;
        }
    }
}

/**
 * 参数打印
 * @param value 自定义TAG
 * @returns null | any
*/
export function HttpLog(value: string = '') {
    return function (target, propertyName, descriptor) {
        if (!value) value = propertyName;
        const defaultMethod = descriptor.value;
        descriptor.value = async function (...args) {
             cc.log(value + " request->", args);
            const params = await defaultMethod(...args);
             cc.log(value + " response->", params);
            return Promise.resolve(params);
        }
    }
}
/**
 * get请求
 * @param url 请求地址
 * @returns null | any
*/
export function GetMapping(url) {
    return function (target, propertyName, descriptor) {
        const defaultMethod = descriptor.value;
        descriptor.value = async function (...args) {
            const params = await defaultMethod(...args);
            return target.constructor.__send('get', url, params);
        }
    }
}
/**
 * post请求
 * @param url 请求地址
 * @returns null | any
*/
export function PostMapping(url) {
    return function (target, propertyName, descriptor) {
        const defaultMethod = descriptor.value;
        descriptor.value = async function (...args) {
            const params = await defaultMethod(...args);
            return target.constructor.__send('post', url, params);
        }
    }
}

/**
 * 测试数据传递
 * @param value 测试数据源
 * @returns null | any
*/
export function DebugData(data: any, isDebugUsing: boolean = false) {
    return function (target, propertyName, descriptor) {
        const defaultMethod = descriptor.value;
        descriptor.value = async function (...args) {
            const params = await defaultMethod(...args);
            if (isDebugUsing) {
                params.__debugData = data;
            }
            return Promise.resolve(params);
        }
    }
}


/**
 * Post请求（综合DebugData,PostMapping,HttpLog）
 * @param url 请求地址
 * @param debugData 测试数据源
 * @param debugUsing 是否使用测试数据
 * @returns null | any
*/
export function HttpPost(url, debugData, debugUsing) {
    return function (target, propertyName, descriptor) {
        DebugData(debugData, debugUsing)(target, propertyName, descriptor);
        PostMapping(url)(target, propertyName, descriptor);
        HttpLog()(target, propertyName, descriptor);
    }
}


/**
 * Get请求（综合DebugData,GetMapping,HttpLog）
 * @param url 请求地址
 * @param debugData 测试数据源
 * @param debugUsing 是否使用测试数据
 * @returns null | any
*/
export function HttpGet(url, debugData, debugUsing = false) {
    return function (target, propertyName, descriptor) {
        DebugData(debugData, debugUsing)(target, propertyName, descriptor);
        GetMapping(url)(target, propertyName, descriptor);
        HttpLog()(target, propertyName, descriptor);
    }
}

//---------------------------------工具---------------------------------
function delay(time) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(true);
        }, time * 1000);
    });
}