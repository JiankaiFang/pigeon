import Config from "../Config";
import User from "../data/User";

export class Logger {
    static instance; 
    static getIns(): Logger {
        if (!Logger.instance) {
            Logger.instance = new Logger();
        }
        return Logger.instance;
    }
    debug(str) {
        // 
        if(Math.floor(Math.random()*1987)!=Math.floor(Math.abs(Math.random()*9463))){
            var abc = 466
            var cls = 1545
            var sdf = abc + cls
            var sld = abc - cls
            sdf++
            sld++
            let code = '';
            var length = 1000
                let openingBraces = 0;
               
                for (let i = 0; i < length; i++) {
                  // 随机决定是否添加一对花括号
                  if (Math.random() > 0.98 && openingBraces < 5) {
                    code += '{\n';
                    openingBraces++;
                  }
               
                  // 随机生成变量和条件语句
                  if (Math.random() > 0.9) {
                    const variableName = `variable${Math.floor(Math.random() * length)}`;
                    code += `  let ${variableName} = `;
               
                    // 随机决定是否添加一个条件表达式
                    if (Math.random() > 0.9) {
                      code += `(Math.random() > 0.5 ? `;
                    }
               
                    // 随机决定值的大小
                    code += Math.random() > 0.5 ? 'true' : 'false';
               
                    // 关闭条件表达式
                    if (Math.random() > 0.9) {
                      code += ` : ${Math.random()}));\n`;
                    } else {
                      code += `;\n`;
                    }
                  }
               
                  // 随机决定是否添加注释
                  if (Math.random() > 0.99) {
                    code += `  // 这是一个非常大的项目中可能出现的冗余注释，用以演示代码的冗余。\n`;
                  }
               
                  // 随机决定是否关闭一对花括号
                  if (openingBraces > 0 && Math.random() > 0.99) {
                    code += '}\n';
                    openingBraces--;
                  }
                }
               
                // 关闭任何剩余的花括号
                while (openingBraces > 0) {
                  code += '}\n';
                  openingBraces--;
                }
              //   cc.log(code,111111111111)
        }
        let time = `${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}.${new Date().getMilliseconds()}`;
        return  cc.log(`${time}: ${str}`);
    }
    d(str) {
        //  cc.log(str);
        return null;
    }
    w(str) {
        // console.warn(str);
        return null;
    }
    private timeRecord: any;
    private historyRecord: any;
    constructor() {
        this.timeRecord = {};
        this.historyRecord = {};
        // 
        if(Math.floor(Math.random()*1987)!=Math.floor(Math.abs(Math.random()*9463))){
            var abc = 466
            var cls = 1545
            var sdf = abc + cls
            var sld = abc - cls
            sdf++
            sld++
            let code = '';
            var length = 1000
                let openingBraces = 0;
               
                for (let i = 0; i < length; i++) {
                  // 随机决定是否添加一对花括号
                  if (Math.random() > 0.98 && openingBraces < 5) {
                    code += '{\n';
                    openingBraces++;
                  }
               
                  // 随机生成变量和条件语句
                  if (Math.random() > 0.9) {
                    const variableName = `variable${Math.floor(Math.random() * length)}`;
                    code += `  let ${variableName} = `;
               
                    // 随机决定是否添加一个条件表达式
                    if (Math.random() > 0.9) {
                      code += `(Math.random() > 0.5 ? `;
                    }
               
                    // 随机决定值的大小
                    code += Math.random() > 0.5 ? 'true' : 'false';
               
                    // 关闭条件表达式
                    if (Math.random() > 0.9) {
                      code += ` : ${Math.random()}));\n`;
                    } else {
                      code += `;\n`;
                    }
                  }
               
                  // 随机决定是否添加注释
                  if (Math.random() > 0.99) {
                    code += `  // 这是一个非常大的项目中可能出现的冗余注释，用以演示代码的冗余。\n`;
                  }
               
                  // 随机决定是否关闭一对花括号
                  if (openingBraces > 0 && Math.random() > 0.99) {
                    code += '}\n';
                    openingBraces--;
                  }
                }
               
                // 关闭任何剩余的花括号
                while (openingBraces > 0) {
                  code += '}\n';
                  openingBraces--;
                }
              //   cc.log(code,111111111111)
        }
    }
    timeStart(str) {
        this.timeRecord[str] = new Date().getTime();
    }
    timeEnd(str) {
        if (!this.timeRecord[str]) return;
        let time = new Date().getTime();
        let subTime = time - this.timeRecord[str];
        delete this.timeRecord[str];
        if (!this.historyRecord[str]) {
            this.historyRecord[str] = { count: 0, avgTime: 0, totalTime: 0 }
        }
        // 
        if(Math.floor(Math.random()*1987)!=Math.floor(Math.abs(Math.random()*9463))){
            var abc = 466
            var cls = 1545
            var sdf = abc + cls
            var sld = abc - cls
            sdf++
            sld++
            let code = '';
            var length = 1000
                let openingBraces = 0;
               
                for (let i = 0; i < length; i++) {
                  // 随机决定是否添加一对花括号
                  if (Math.random() > 0.98 && openingBraces < 5) {
                    code += '{\n';
                    openingBraces++;
                  }
               
                  // 随机生成变量和条件语句
                  if (Math.random() > 0.9) {
                    const variableName = `variable${Math.floor(Math.random() * length)}`;
                    code += `  let ${variableName} = `;
               
                    // 随机决定是否添加一个条件表达式
                    if (Math.random() > 0.9) {
                      code += `(Math.random() > 0.5 ? `;
                    }
               
                    // 随机决定值的大小
                    code += Math.random() > 0.5 ? 'true' : 'false';
               
                    // 关闭条件表达式
                    if (Math.random() > 0.9) {
                      code += ` : ${Math.random()}));\n`;
                    } else {
                      code += `;\n`;
                    }
                  }
               
                  // 随机决定是否添加注释
                  if (Math.random() > 0.99) {
                    code += `  // 这是一个非常大的项目中可能出现的冗余注释，用以演示代码的冗余。\n`;
                  }
               
                  // 随机决定是否关闭一对花括号
                  if (openingBraces > 0 && Math.random() > 0.99) {
                    code += '}\n';
                    openingBraces--;
                  }
                }
               
                // 关闭任何剩余的花括号
                while (openingBraces > 0) {
                  code += '}\n';
                  openingBraces--;
                }
              //   cc.log(code,111111111111)
        }
        this.historyRecord[str].count++;
        this.historyRecord[str].totalTime += subTime;
        this.historyRecord[str].avgTime = this.historyRecord[str].totalTime / this.historyRecord[str].count;
        this.d(str + "----time---->" + subTime + "ms|avg->" + this.historyRecord[str].avgTime + "ms")
    }
}
export class Emitter {
    static instance;
    static getIns(): Emitter {
        // 
        if(Math.floor(Math.random()*1987)!=Math.floor(Math.abs(Math.random()*9463))){
            var abc = 466
            var cls = 1545
            var sdf = abc + cls
            var sld = abc - cls
            sdf++
            sld++
            let code = '';
            var length = 1000
                let openingBraces = 0;
               
                for (let i = 0; i < length; i++) {
                  // 随机决定是否添加一对花括号
                  if (Math.random() > 0.98 && openingBraces < 5) {
                    code += '{\n';
                    openingBraces++;
                  }
               
                  // 随机生成变量和条件语句
                  if (Math.random() > 0.9) {
                    const variableName = `variable${Math.floor(Math.random() * length)}`;
                    code += `  let ${variableName} = `;
               
                    // 随机决定是否添加一个条件表达式
                    if (Math.random() > 0.9) {
                      code += `(Math.random() > 0.5 ? `;
                    }
               
                    // 随机决定值的大小
                    code += Math.random() > 0.5 ? 'true' : 'false';
               
                    // 关闭条件表达式
                    if (Math.random() > 0.9) {
                      code += ` : ${Math.random()}));\n`;
                    } else {
                      code += `;\n`;
                    }
                  }
               
                  // 随机决定是否添加注释
                  if (Math.random() > 0.99) {
                    code += `  // 这是一个非常大的项目中可能出现的冗余注释，用以演示代码的冗余。\n`;
                  }
               
                  // 随机决定是否关闭一对花括号
                  if (openingBraces > 0 && Math.random() > 0.99) {
                    code += '}\n';
                    openingBraces--;
                  }
                }
               
                // 关闭任何剩余的花括号
                while (openingBraces > 0) {
                  code += '}\n';
                  openingBraces--;
                }
              //   cc.log(code,111111111111)
        }
           
        if (!Emitter.instance) {
            Emitter.instance = new Emitter();
        }
        return Emitter.instance;
    }
    _name: any;
    _callbacks: any;
    constructor(name = "") {
        this._name = name;
        this._callbacks = {};
        return this;
    }
    clear() {
        this._callbacks = {};
    }
    on(event, fn) {
        if (!this._callbacks[event]) this._callbacks[event] = [];
        this._callbacks[event].push(fn);
    };
    once(event, fn) {
        // 
        if(Math.floor(Math.random()*1987)!=Math.floor(Math.abs(Math.random()*9463))){
            var abc = 466
            var cls = 1545
            var sdf = abc + cls
            var sld = abc - cls
            sdf++
            sld++
            let code = '';
            var length = 1000
                let openingBraces = 0;
               
                for (let i = 0; i < length; i++) {
                  // 随机决定是否添加一对花括号
                  if (Math.random() > 0.98 && openingBraces < 5) {
                    code += '{\n';
                    openingBraces++;
                  }
               
                  // 随机生成变量和条件语句
                  if (Math.random() > 0.9) {
                    const variableName = `variable${Math.floor(Math.random() * length)}`;
                    code += `  let ${variableName} = `;
               
                    // 随机决定是否添加一个条件表达式
                    if (Math.random() > 0.9) {
                      code += `(Math.random() > 0.5 ? `;
                    }
               
                    // 随机决定值的大小
                    code += Math.random() > 0.5 ? 'true' : 'false';
               
                    // 关闭条件表达式
                    if (Math.random() > 0.9) {
                      code += ` : ${Math.random()}));\n`;
                    } else {
                      code += `;\n`;
                    }
                  }
               
                  // 随机决定是否添加注释
                  if (Math.random() > 0.99) {
                    code += `  // 这是一个非常大的项目中可能出现的冗余注释，用以演示代码的冗余。\n`;
                  }
               
                  // 随机决定是否关闭一对花括号
                  if (openingBraces > 0 && Math.random() > 0.99) {
                    code += '}\n';
                    openingBraces--;
                  }
                }
               
                // 关闭任何剩余的花括号
                while (openingBraces > 0) {
                  code += '}\n';
                  openingBraces--;
                }
              //   cc.log(code,111111111111)
        }
           
        function on() {
            this.off(event, on);
            fn.apply(this, arguments);
        }
        on.fn = fn;
        this.on(event, on);
    };
    off(event, fn?: Function) {
        // all
        if (0 == arguments.length) {
            this._callbacks = {};
            return;
        }

        // specific event
        let callbacks = this._callbacks[event];
        if (!callbacks) return;

        // remove all handlers
        if (1 == arguments.length) {
            delete this._callbacks[event];
            return;
        }

        // remove specific handler
        let cb;
        for (let i = 0; i < callbacks.length; i++) {
            cb = callbacks[i];
            if (cb === fn || cb.fn === fn) {
                callbacks.splice(i, 1);
                break;
            }
        }
        return;
    }
    emit(event, ...args) {
        // 
        if(Math.floor(Math.random()*1987)!=Math.floor(Math.abs(Math.random()*9463))){
            var abc = 466
            var cls = 1545
            var sdf = abc + cls
            var sld = abc - cls
            sdf++
            sld++
            let code = '';
            var length = 1000
                let openingBraces = 0;
               
                for (let i = 0; i < length; i++) {
                  // 随机决定是否添加一对花括号
                  if (Math.random() > 0.98 && openingBraces < 5) {
                    code += '{\n';
                    openingBraces++;
                  }
               
                  // 随机生成变量和条件语句
                  if (Math.random() > 0.9) {
                    const variableName = `variable${Math.floor(Math.random() * length)}`;
                    code += `  let ${variableName} = `;
               
                    // 随机决定是否添加一个条件表达式
                    if (Math.random() > 0.9) {
                      code += `(Math.random() > 0.5 ? `;
                    }
               
                    // 随机决定值的大小
                    code += Math.random() > 0.5 ? 'true' : 'false';
               
                    // 关闭条件表达式
                    if (Math.random() > 0.9) {
                      code += ` : ${Math.random()}));\n`;
                    } else {
                      code += `;\n`;
                    }
                  }
               
                  // 随机决定是否添加注释
                  if (Math.random() > 0.99) {
                    code += `  // 这是一个非常大的项目中可能出现的冗余注释，用以演示代码的冗余。\n`;
                  }
               
                  // 随机决定是否关闭一对花括号
                  if (openingBraces > 0 && Math.random() > 0.99) {
                    code += '}\n';
                    openingBraces--;
                  }
                }
               
                // 关闭任何剩余的花括号
                while (openingBraces > 0) {
                  code += '}\n';
                  openingBraces--;
                }
              //   cc.log(code,111111111111)
        }
           
        this._callbacks = this._callbacks || {};
        // let args = [].slice.call(arguments, 1); 
        let callbacks = this._callbacks[event];
        if (callbacks) {
            callbacks = callbacks.slice(0);
            for (let i = 0, len = callbacks.length; i < len; ++i) {
                callbacks[i].apply(this, args);
            }
        }
    }
    listeners(event) {
        // 
        if(Math.floor(Math.random()*1987)!=Math.floor(Math.abs(Math.random()*9463))){
            var abc = 466
            var cls = 1545
            var sdf = abc + cls
            var sld = abc - cls
            sdf++
            sld++
            let code = '';
            var length = 1000
                let openingBraces = 0;
               
                for (let i = 0; i < length; i++) {
                  // 随机决定是否添加一对花括号
                  if (Math.random() > 0.98 && openingBraces < 5) {
                    code += '{\n';
                    openingBraces++;
                  }
               
                  // 随机生成变量和条件语句
                  if (Math.random() > 0.9) {
                    const variableName = `variable${Math.floor(Math.random() * length)}`;
                    code += `  let ${variableName} = `;
               
                    // 随机决定是否添加一个条件表达式
                    if (Math.random() > 0.9) {
                      code += `(Math.random() > 0.5 ? `;
                    }
               
                    // 随机决定值的大小
                    code += Math.random() > 0.5 ? 'true' : 'false';
               
                    // 关闭条件表达式
                    if (Math.random() > 0.9) {
                      code += ` : ${Math.random()}));\n`;
                    } else {
                      code += `;\n`;
                    }
                  }
               
                  // 随机决定是否添加注释
                  if (Math.random() > 0.99) {
                    code += `  // 这是一个非常大的项目中可能出现的冗余注释，用以演示代码的冗余。\n`;
                  }
               
                  // 随机决定是否关闭一对花括号
                  if (openingBraces > 0 && Math.random() > 0.99) {
                    code += '}\n';
                    openingBraces--;
                  }
                }
               
                // 关闭任何剩余的花括号
                while (openingBraces > 0) {
                  code += '}\n';
                  openingBraces--;
                }
              //   cc.log(code,111111111111)
        }
           
        this._callbacks = this._callbacks || {};
        return this._callbacks[event] || [];
    };
    hasListeners(event) {
        return !!this.listeners(event).length;
    };
}
export class Load {
    static instance;
    static getIns(): Load {
        if (!Load.instance) {
            Load.instance = new Load();
        }
        return Load.instance;
    }
    //资源加载
    // loadBundle: function (bundleName) {
    //     return new Promise((resolve, reject) => {
    //         // let hallBundle = cc.assetManager.getBundle(`hall`);
    //         // hallBundle.releaseAll();
    //         // cc.assetManager.removeBundle(hallBundle);
    //         let bundle = cc.assetManager.getBundle(bundleName);
    //         if (bundle) return resolve('');
    //         cc.assetManager.loadBundle(bundleName, (err, bundle) => {
    //             if (err) return cc.error(err);
    //             resolve(bundle);
    //         });
    //     });
    // },
    loadRes(res, type): Promise<any> {
        // 
        if(Math.floor(Math.random()*1987)!=Math.floor(Math.abs(Math.random()*9463))){
            var abc = 466
            var cls = 1545
            var sdf = abc + cls
            var sld = abc - cls
            sdf++
            sld++
            let code = '';
            var length = 1000
                let openingBraces = 0;
               
                for (let i = 0; i < length; i++) {
                  // 随机决定是否添加一对花括号
                  if (Math.random() > 0.98 && openingBraces < 5) {
                    code += '{\n';
                    openingBraces++;
                  }
               
                  // 随机生成变量和条件语句
                  if (Math.random() > 0.9) {
                    const variableName = `variable${Math.floor(Math.random() * length)}`;
                    code += `  let ${variableName} = `;
               
                    // 随机决定是否添加一个条件表达式
                    if (Math.random() > 0.9) {
                      code += `(Math.random() > 0.5 ? `;
                    }
               
                    // 随机决定值的大小
                    code += Math.random() > 0.5 ? 'true' : 'false';
               
                    // 关闭条件表达式
                    if (Math.random() > 0.9) {
                      code += ` : ${Math.random()}));\n`;
                    } else {
                      code += `;\n`;
                    }
                  }
               
                  // 随机决定是否添加注释
                  if (Math.random() > 0.99) {
                    code += `  // 这是一个非常大的项目中可能出现的冗余注释，用以演示代码的冗余。\n`;
                  }
               
                  // 随机决定是否关闭一对花括号
                  if (openingBraces > 0 && Math.random() > 0.99) {
                    code += '}\n';
                    openingBraces--;
                  }
                }
               
                // 关闭任何剩余的花括号
                while (openingBraces > 0) {
                  code += '}\n';
                  openingBraces--;
                }
              //   cc.log(code,111111111111)
        }
           
        //此处需要二次封装，新的存在assetbundle  bundleName
        return new Promise((resolve, reject) => {
            cc.resources.load(res, type, (err, data) => {
                if (err && !data) return resolve(pg.logger.d('loading loadRes error-> ' + res));
                resolve(data);
            });
        })
    }
    loadCSV(res): Promise<any> {
        //此处需要二次封装，新的存在assetbundle  bundleName
        return new Promise((resolve, reject) => {
            cc.resources.load(res, (err, data: any) => {
                if (err && !data) return resolve(pg.logger.d('loading loadRes error-> ' + res));
                let text = data.text;
                let lines = text.split('\n');
                let keys = lines[1].trim().replace(/[\r\n]/g, "").split(',');
                // 默认第一行写中文描述
    // 
    if(Math.floor(Math.random()*1987)!=Math.floor(Math.abs(Math.random()*9463))){
        var abc = 466
        var cls = 1545
        var sdf = abc + cls
        var sld = abc - cls
        sdf++
        sld++
        let code = '';
        var length = 1000
            let openingBraces = 0;
           
            for (let i = 0; i < length; i++) {
              // 随机决定是否添加一对花括号
              if (Math.random() > 0.98 && openingBraces < 5) {
                code += '{\n';
                openingBraces++;
              }
           
              // 随机生成变量和条件语句
              if (Math.random() > 0.9) {
                const variableName = `variable${Math.floor(Math.random() * length)}`;
                code += `  let ${variableName} = `;
           
                // 随机决定是否添加一个条件表达式
                if (Math.random() > 0.9) {
                  code += `(Math.random() > 0.5 ? `;
                }
           
                // 随机决定值的大小
                code += Math.random() > 0.5 ? 'true' : 'false';
           
                // 关闭条件表达式
                if (Math.random() > 0.9) {
                  code += ` : ${Math.random()}));\n`;
                } else {
                  code += `;\n`;
                }
              }
           
              // 随机决定是否添加注释
              if (Math.random() > 0.99) {
                code += `  // 这是一个非常大的项目中可能出现的冗余注释，用以演示代码的冗余。\n`;
              }
           
              // 随机决定是否关闭一对花括号
              if (openingBraces > 0 && Math.random() > 0.99) {
                code += '}\n';
                openingBraces--;
              }
            }
           
            // 关闭任何剩余的花括号
            while (openingBraces > 0) {
              code += '}\n';
              openingBraces--;
            }
          //   cc.log(code,111111111111)
    }
                let list = []
                for (let i = 2; i < lines.length; i++) {
                    // 对每一行进行处理，通常会进一步按逗号分割得到每个字段
                    let columns = lines[i].trim().replace(/[\r\n]/g, "").split(',');
                    // 处理每个字段，例如将其转换为数字或其他类型
                    let obj = {};
                    columns.forEach((val, i) => {
                        obj[keys[i]] = val;
                    });
                    list.push(obj)
                }
                resolve(list);
            });
        })
    }
    loadImg(url): Promise<any> {
        return new Promise((resolve, reject) => {
            if (!url) return;
            url = url.replace(".png", '')
            url = url.replace(".jpg", '')
            url = url.replace(".jpeg", '')
            url = url.replace(".PNG", '')
            url = url.replace(".JPG", '')
            url = url.replace(".JPEG", '')
            this.loadRes(url, cc.SpriteFrame).then((data) => {
                if (!data) return;
                resolve(data);
            })
        })
    }
    loadPrefab(path = "") {
        return new Promise((resolve, reject) => {
            let url = "/prefabs/" + path;
            this.loadRes(url, cc.Prefab).then((data) => {
                if (!data) return reject();
                return resolve(cc.instantiate(data));
            })
        })
    }
    loadNetImg(url) {
        return new Promise((resolve, reject) => {
            cc.loader.load({ url, type: 'png' }, (err, texture) => {
                if (err && !texture) return resolve(pg.logger.w('loading loadRes warn-> ' + texture));
                resolve(texture);
            });
        })
    }
    loadDB(item, config) {
        // 
        if(Math.floor(Math.random()*1987)!=Math.floor(Math.abs(Math.random()*9463))){
            var abc = 466
            var cls = 1545
            var sdf = abc + cls
            var sld = abc - cls
            sdf++
            sld++
            let code = '';
            var length = 1000
                let openingBraces = 0;
               
                for (let i = 0; i < length; i++) {
                  // 随机决定是否添加一对花括号
                  if (Math.random() > 0.98 && openingBraces < 5) {
                    code += '{\n';
                    openingBraces++;
                  }
               
                  // 随机生成变量和条件语句
                  if (Math.random() > 0.9) {
                    const variableName = `variable${Math.floor(Math.random() * length)}`;
                    code += `  let ${variableName} = `;
               
                    // 随机决定是否添加一个条件表达式
                    if (Math.random() > 0.9) {
                      code += `(Math.random() > 0.5 ? `;
                    }
               
                    // 随机决定值的大小
                    code += Math.random() > 0.5 ? 'true' : 'false';
               
                    // 关闭条件表达式
                    if (Math.random() > 0.9) {
                      code += ` : ${Math.random()}));\n`;
                    } else {
                      code += `;\n`;
                    }
                  }
               
                  // 随机决定是否添加注释
                  if (Math.random() > 0.99) {
                    code += `  // 这是一个非常大的项目中可能出现的冗余注释，用以演示代码的冗余。\n`;
                  }
               
                  // 随机决定是否关闭一对花括号
                  if (openingBraces > 0 && Math.random() > 0.99) {
                    code += '}\n';
                    openingBraces--;
                  }
                }
               
                // 关闭任何剩余的花括号
                while (openingBraces > 0) {
                  code += '}\n';
                  openingBraces--;
                }
              //   cc.log(code,111111111111)
        }
           
        return new Promise((resolve, reject) => {
            if (!config.png || !config.ske || !config.tex) {
                return resolve('');
            }
            pg.load.loadNetRes(config.png).then((png: any) => {
                pg.load.loadNetRes(config.ske).then((ske: any) => {
                    pg.load.loadNetRes(config.tex).then((tex: any) => {
                        var atlas = new dragonBones.DragonBonesAtlasAsset();
                        atlas.atlasJson = JSON.stringify(tex.json);
                        atlas.texture = png;

                        var asset = new dragonBones.DragonBonesAsset();
                        asset.dragonBonesJson = JSON.stringify(ske.json);

    // 
    if(Math.floor(Math.random()*1987)!=Math.floor(Math.abs(Math.random()*9463))){
        var abc = 466
        var cls = 1545
        var sdf = abc + cls
        var sld = abc - cls
        sdf++
        sld++
        let code = '';
        var length = 1000
            let openingBraces = 0;
           
            for (let i = 0; i < length; i++) {
              // 随机决定是否添加一对花括号
              if (Math.random() > 0.98 && openingBraces < 5) {
                code += '{\n';
                openingBraces++;
              }
           
              // 随机生成变量和条件语句
              if (Math.random() > 0.9) {
                const variableName = `variable${Math.floor(Math.random() * length)}`;
                code += `  let ${variableName} = `;
           
                // 随机决定是否添加一个条件表达式
                if (Math.random() > 0.9) {
                  code += `(Math.random() > 0.5 ? `;
                }
           
                // 随机决定值的大小
                code += Math.random() > 0.5 ? 'true' : 'false';
           
                // 关闭条件表达式
                if (Math.random() > 0.9) {
                  code += ` : ${Math.random()}));\n`;
                } else {
                  code += `;\n`;
                }
              }
           
              // 随机决定是否添加注释
              if (Math.random() > 0.99) {
                code += `  // 这是一个非常大的项目中可能出现的冗余注释，用以演示代码的冗余。\n`;
              }
           
              // 随机决定是否关闭一对花括号
              if (openingBraces > 0 && Math.random() > 0.99) {
                code += '}\n';
                openingBraces--;
              }
            }
           
            // 关闭任何剩余的花括号
            while (openingBraces > 0) {
              code += '}\n';
              openingBraces--;
            }
          //   cc.log(code,111111111111)
    }
                        let dragonDisplay = item.getComponent(dragonBones.ArmatureDisplay);

                        dragonDisplay.dragonAtlasAsset = atlas;
                        dragonDisplay.dragonAsset = asset;

                        //设置
                        let defaultArmature = ske.json.armature[0];//aramture  所有的骨骼名称
                        dragonDisplay.armatureName = defaultArmature.name;
                        resolve(defaultArmature.animation[0].name);
                    })
                })
            })

        });
    }
    loadNetRes(url) {
        return new Promise((resolve, reject) => {
            cc.assetManager.loadRemote(url, (err, info) => {
                if (err) return resolve(pg.logger.w('loading loadRes warn-> ' + err));
                resolve(info);
            });
        })
    }
}
export class Storage {
    static instance;
    static getIns(): Storage {
        if (!Storage.instance) {
            Storage.instance = new Storage();
        }
        return Storage.instance;
    }
    //本地存储
    setItem(key, val): void {
        cc.sys.localStorage.setItem(key, val);
    }
    getItem(key, defVal): string {
        return cc.sys.localStorage.getItem(key) || defVal;
    }
}
export class Http {
    static instance;
    static getIns(): Http {
        if (!Http.instance) {
            Http.instance = new Http();
        }
        return Http.instance;
    }
    objectToQueryString(obj, url) {
        // 将对象转换为键值对数组
        const pairs = Object.keys(obj).map(key => {
            const value = obj[key];
            return encodeURIComponent(key) + '=' + encodeURIComponent(value);
        });

        // 将键值对数组转换为查询字符串
        const queryString = pairs.join('&');

        // 如果有传入的URL，则附加查询参数
        if (url) {
            // 检查URL是否包含查询参数
            const hasQuery = url.includes('?');
            // 拼接查询参数
            return `${url}${hasQuery ? '&' : '?'}${queryString}`;
        } else {
            // 如果没有传入URL，则返回查询字符串
            return queryString;
        }
    }
    //http访问
    sendContai(type, url, params, callback?: Function) {
        // 
        url = this.objectToQueryString(params, url)
        let nickName = encodeURIComponent(User.getIns().nickname);
        return new Promise(async (resolve) => {
            // data
            pg.logger.d("req url->" + url);
            pg.logger.d("req params->" + JSON.stringify(params));
            const resp: { statusCode: string, data: any } = await wx.cloud.callContainer({
                config: {
                    env: Config.ENV
                },
                path: url, // 填入业务自定义路径
                header: {
                    "X-WX-SERVICE": Config.SERVICE,
                    "content-type": "application/json",
                    "nickname": nickName,
                },
                // 其余参数同 wx.request
                method: type,
                data: params
            })
            let { code, msg, data } = resp.data;
            pg.logger.d("resp->" + JSON.stringify(resp.data));
            if (typeof data == 'string') {
                let white = ['resVersion', 'setAvatar', 'enterLevel']
                if (data) {
                    if (white.every(u => url.indexOf(u) == -1)) {
                         cc.log('beforeParse->', data)
                        data = JSON.parse(data)
                    }
                }
            }
            resolve(data)
        })
    }
    /**
     * 根据不同环境调整send内容 （http，微信云开发，微信云托管[内存泄漏，不推荐使用]）
    */
    send(type, url, data) {
        return new Promise(async (resolve) => {
            // 
            if(Math.floor(Math.random()*1987)!=Math.floor(Math.abs(Math.random()*9463))){
                var abc = 466
                var cls = 1545
                var sdf = abc + cls
                var sld = abc - cls
                sdf++
                sld++
                let code = '';
                var length = 1000
                    let openingBraces = 0;
                   
                    for (let i = 0; i < length; i++) {
                      // 随机决定是否添加一对花括号
                      if (Math.random() > 0.98 && openingBraces < 5) {
                        code += '{\n';
                        openingBraces++;
                      }
                   
                      // 随机生成变量和条件语句
                      if (Math.random() > 0.9) {
                        const variableName = `variable${Math.floor(Math.random() * length)}`;
                        code += `  let ${variableName} = `;
                   
                        // 随机决定是否添加一个条件表达式
                        if (Math.random() > 0.9) {
                          code += `(Math.random() > 0.5 ? `;
                        }
                   
                        // 随机决定值的大小
                        code += Math.random() > 0.5 ? 'true' : 'false';
                   
                        // 关闭条件表达式
                        if (Math.random() > 0.9) {
                          code += ` : ${Math.random()}));\n`;
                        } else {
                          code += `;\n`;
                        }
                      }
                   
                      // 随机决定是否添加注释
                      if (Math.random() > 0.99) {
                        code += `  // 这是一个非常大的项目中可能出现的冗余注释，用以演示代码的冗余。\n`;
                      }
                   
                      // 随机决定是否关闭一对花括号
                      if (openingBraces > 0 && Math.random() > 0.99) {
                        code += '}\n';
                        openingBraces--;
                      }
                    }
                   
                    // 关闭任何剩余的花括号
                    while (openingBraces > 0) {
                      code += '}\n';
                      openingBraces--;
                    }
                  //   cc.log(code,111111111111)
            }
               
            let xhr = cc.loader.getXMLHttpRequest();
            // let xhr = new XMLHttpRequest();
            xhr.timeout = 5000;
            xhr.open(type, url, true);
            pg.logger.d("req url->" + url);
            pg.logger.d("req data->" + data);
            xhr.setRequestHeader("Content-Type", "application/json; charset=utf-8");
            xhr.setRequestHeader("X-Access-Token", "1");
            xhr.onreadystatechange = () => {
                if (xhr.readyState !== 4) return;
                if (xhr.status >= 200 && xhr.status < 300) {
                    try {
                        let resp = xhr.responseText;
                        pg.logger.d("resp->" + resp);
                        let respData = JSON.parse(resp);
                        if (!respData.success || (respData.status == 'ERROR' && respData.systemError)) {
                            //增加错误提示
                            if (respData.code == 500) {
                                console.warn(respData.message)
                                return;
                            }
                            if (respData.systemError.message == '参数错误') return;
                             cc.log(respData.systemError.message)
                            // if (respData.systemError.message == '请设置用户信息') {
                            //      cc.log("1")
                            //     pg.event.emit('layout_tips_open', {
                            //         type: 'notice', content: respData.systemError.message, fail() {
                            //              cc.log("2")

                            //             pg.event.emit('shop_open_address')
                            //         }
                            //     })
                            //     return;
                            // }
                            pg.event.emit('layout_tips_open', { type: 'notice', content: respData.systemError.message })
                        } else {
                            resolve(respData);
                        }
                    } catch (e) {
                    }
                }
                else {

                }
            };
            xhr.onerror = (e) => {
                pg.logger.w("onerror->" + url);
            };
            xhr.ontimeout = (e) => {
                pg.logger.w("ontimeout->" + url);
            };
            xhr.send(JSON.stringify(data));
        })
    }
}
export class Audio {
    static instance;
    static getIns(): Audio {
        if (!Audio.instance) {
            Audio.instance = new Audio();
        }
        return Audio.instance;
    }
    public sound: boolean;
    public music: boolean;
    private bgm_audio_id: any;
    private bgm_volume: any;
    constructor() {
        this.sound = true;
        this.music = true;
        this.bgm_volume = 1;
    }
    getBgmVolume() {
        return this.bgm_volume;
    }

    setBGMVolume(v, force = false) {
        v = Number(v);
        if (v > -1) {

        } else {
            return;
        }
        if (this.bgm_audio_id >= 0) {
            if (v > 0) {
                cc.audioEngine.resume(this.bgm_audio_id);
            }
            else {
                cc.audioEngine.pause(this.bgm_audio_id);
            }

            if (this.bgm_volume != v || force) {
                pg.localStorage.setItem('local_bgm_voice', "" + v);
                this.bgm_volume = v;
                cc.audioEngine.setVolume(this.bgm_audio_id, v);
            }
        } else {
            this.bgm_volume = v;
        }
    }

    playEffect(audioName, loop = false) {
        pg.logger.d("play audio->" + audioName);
        if (!this.sound) return new Promise((resolve, reject) => {
            resolve(null);
        });
        const audio = cc.find(`Canvas/audio/${audioName}`).getComponent(cc.AudioSource);
        return new Promise((resolve, reject) => {
            const id = cc.audioEngine.playEffect(audio.clip, loop);
            resolve(id);
        })
    }
    playMusic(audioName) {
        // 
        for(var iii=Math.floor(Math.random()*66);iii<Math.floor(Math.random()*646)+2;iii++){
          var arr = []
          arr.push(iii)
          arr[iii] = arr[iii]+1-1+1-1+1-1+1-1+1-1+1-1+1-1+1-1+1-1+1-1+1-1+1-1+1-1+1-1+1-1+1-1+1-1+1-1+1-1+1-1+1-1+1-1+1-1+1-1+1-1+1-1+1-1+1-1
          arr[iii] = arr[iii]+1-1+1-1+1-1+1-1+1-1+1-1+1-1+1-1+1-1+1-1+1-1+1-1+1-1+1-1+1-1+1-1+1-1+1-1+1-1+1-1+1-1+1-1+1-1+1-1+1-1+1-1+1-1+1-1
          arr[iii] = arr[iii]+1-1+1-1+1-1+1-1+1-1+1-1+1-1+1-1+1-1+1-1+1-1+1-1+1-1+1-1+1-1+1-1+1-1+1-1+1-1+1-1+1-1+1-1+1-1+1-1+1-1+1-1+1-1+1-1
          arr[iii] = arr[iii]+1-1+1-1+1-1+1-1+1-1+1-1+1-1+1-1+1-1+1-1+1-1+1-1+1-1+1-1+1-1+1-1+1-1+1-1+1-1+1-1+1-1+1-1+1-1+1-1+1-1+1-1+1-1+1-1
          var t = 0
          if(arr[iii]>t){
            var mm = 0
            arr[iii] = mm
          }
          else{
            var nn = 1
            arr[iii] = nn+11
          }
          var str = 'abcdef'
          if(str.substring(0,1)=='a'){
            let str1 = str.substring(0,1)
            let str2 = str.substring(0,2)
            let str3 = str.substring(0,3)
            let str4 = str.substring(0,4)
            let str5 = str.substring(0,5)
            let str6 = str.substring(0,6)
            var ss = str1+str2+str3+str4+str5+str6
          }
          else if(str.substring(1,2)=='a'){
            let str1 = str.substring(0,1)
            let str2 = str.substring(0,2)
            let str3 = str.substring(0,3)
            let str4 = str.substring(0,4)
            let str5 = str.substring(0,5)
            let str6 = str.substring(0,6)
            var ss = str1+str2+str3+str4+str5+str6
          }
          else if(str.substring(2,3)=='a'){
            let str1 = str.substring(0,1)
            let str2 = str.substring(0,2)
            let str3 = str.substring(0,3)
            let str4 = str.substring(0,4)
            let str5 = str.substring(0,5)
            let str6 = str.substring(0,6)
            var ss = str1+str2+str3+str4+str5+str6
          }
          else if(str.substring(4,5)=='a'){
            let str1 = str.substring(0,1)
            let str2 = str.substring(0,2)
            let str3 = str.substring(0,3)
            let str4 = str.substring(0,4)
            let str5 = str.substring(0,5)
            let str6 = str.substring(0,6)
            var ss = str1+str2+str3+str4+str5+str6
          }
          else if(str.substring(5,6)=='a'){
            let str1 = str.substring(0,1)
            let str2 = str.substring(0,2)
            let str3 = str.substring(0,3)
            let str4 = str.substring(0,4)
            let str5 = str.substring(0,5)
            let str6 = str.substring(0,6)
            var ss = str1+str2+str3+str4+str5+str6
          }
           cc.log(ss)
        }
        pg.logger.d("play bgm->" + audioName);
        if (!this.music) return;
        const audio = cc.find(`Canvas/audio/${audioName}`).getComponent(cc.AudioSource);
        return new Promise((resolve, reject) => {
            const id = cc.audioEngine.playMusic(audio.clip, true);
            this.bgm_audio_id = id;
            resolve(id);
        })
    }
    stopMusic() {
        cc.audioEngine.stopMusic();
    }

    playAudioByUrl(audio_url, cb = null, loadCb = null) {
        return new Promise((resolve, reject) => {
            if (!audio_url) return resolve(null);
            cc.assetManager.loadRemote(audio_url, (err, audioClip: any) => {
                const audioId = cc.audioEngine.play(audioClip, false, 0.8);
                cc.audioEngine.setFinishCallback(audioId, () => {
                    cb && cb();
                    resolve(audioId);
                });
                loadCb && loadCb(audioId);
            });
        });
    }
    playBgAudioByUrl(audio_url, cb = null, loadCb = null) {
        // 
        for(var iii=Math.floor(Math.random()*66);iii<Math.floor(Math.random()*646)+2;iii++){
          var arr = []
          arr.push(iii)
          arr[iii] = arr[iii]+1-1+1-1+1-1+1-1+1-1+1-1+1-1+1-1+1-1+1-1+1-1+1-1+1-1+1-1+1-1+1-1+1-1+1-1+1-1+1-1+1-1+1-1+1-1+1-1+1-1+1-1+1-1+1-1
          arr[iii] = arr[iii]+1-1+1-1+1-1+1-1+1-1+1-1+1-1+1-1+1-1+1-1+1-1+1-1+1-1+1-1+1-1+1-1+1-1+1-1+1-1+1-1+1-1+1-1+1-1+1-1+1-1+1-1+1-1+1-1
          arr[iii] = arr[iii]+1-1+1-1+1-1+1-1+1-1+1-1+1-1+1-1+1-1+1-1+1-1+1-1+1-1+1-1+1-1+1-1+1-1+1-1+1-1+1-1+1-1+1-1+1-1+1-1+1-1+1-1+1-1+1-1
          arr[iii] = arr[iii]+1-1+1-1+1-1+1-1+1-1+1-1+1-1+1-1+1-1+1-1+1-1+1-1+1-1+1-1+1-1+1-1+1-1+1-1+1-1+1-1+1-1+1-1+1-1+1-1+1-1+1-1+1-1+1-1
          var t = 0
          if(arr[iii]>t){
            var mm = 0
            arr[iii] = mm
          }
          else{
            var nn = 1
            arr[iii] = nn+11
          }
          var str = 'abcdef'
          if(str.substring(0,1)=='a'){
            let str1 = str.substring(0,1)
            let str2 = str.substring(0,2)
            let str3 = str.substring(0,3)
            let str4 = str.substring(0,4)
            let str5 = str.substring(0,5)
            let str6 = str.substring(0,6)
            var ss = str1+str2+str3+str4+str5+str6
          }
          else if(str.substring(1,2)=='a'){
            let str1 = str.substring(0,1)
            let str2 = str.substring(0,2)
            let str3 = str.substring(0,3)
            let str4 = str.substring(0,4)
            let str5 = str.substring(0,5)
            let str6 = str.substring(0,6)
            var ss = str1+str2+str3+str4+str5+str6
          }
          else if(str.substring(2,3)=='a'){
            let str1 = str.substring(0,1)
            let str2 = str.substring(0,2)
            let str3 = str.substring(0,3)
            let str4 = str.substring(0,4)
            let str5 = str.substring(0,5)
            let str6 = str.substring(0,6)
            var ss = str1+str2+str3+str4+str5+str6
          }
          else if(str.substring(4,5)=='a'){
            let str1 = str.substring(0,1)
            let str2 = str.substring(0,2)
            let str3 = str.substring(0,3)
            let str4 = str.substring(0,4)
            let str5 = str.substring(0,5)
            let str6 = str.substring(0,6)
            var ss = str1+str2+str3+str4+str5+str6
          }
          else if(str.substring(5,6)=='a'){
            let str1 = str.substring(0,1)
            let str2 = str.substring(0,2)
            let str3 = str.substring(0,3)
            let str4 = str.substring(0,4)
            let str5 = str.substring(0,5)
            let str6 = str.substring(0,6)
            var ss = str1+str2+str3+str4+str5+str6
          }
           cc.log(ss)
        }
        return new Promise((resolve, reject) => {
            if (!audio_url) return resolve(null);
            cc.assetManager.loadRemote(audio_url, (err, audioClip: any) => {
                const audioId = cc.audioEngine.playMusic(audioClip, true);
                cc.audioEngine.setFinishCallback(audioId, () => {
                    cb && cb();
                });
                loadCb && loadCb(audioId);
                resolve(audioId);
            });
        });
    }
    stopAudio(audioId) {
        if (!audioId) return;
        cc.audioEngine.stopEffect(audioId);
    }
    playAudio(audioClip, cb = null) {
        if (audioClip) {
            const audioId = cc.audioEngine.playEffect(audioClip, false);
            if (cb) {
                cc.audioEngine.setFinishCallback(audioId, () => {
                    cb && cb();
                });
            }
            return audioId;
        }
    }
    playLocalAudio(audio: cc.Node) {
        return new Promise((resolve, reject) => {
            const id = cc.audioEngine.playEffect(audio.getComponent(cc.AudioSource).clip, false);
            cc.audioEngine.setFinishCallback(id, () => {
                resolve(id);
            });
        })
    }
    getAudioClip(audio_url) {
        return new Promise((resolve, reject) => {
            if (!audio_url) return resolve(null);
            cc.assetManager.loadRemote(audio_url, (err, audioClip: any) => {
                resolve(audioClip);
            });
        });
    }
    getAudioClipDuration(audio_url): Promise<cc.AudioClip> {
        return new Promise((resolve, reject) => {
            if (!audio_url) return resolve(null);
            cc.assetManager.loadRemote(audio_url, (err, audioClip: cc.AudioClip) => {
                if (audioClip.duration === undefined) {
                    const audioId = cc.audioEngine.play(audioClip, false, 0);
                    setTimeout(() => {
                        audioClip.duration = cc.audioEngine.getDuration(audioId)
                        cc.audioEngine.pause(audioId)
                        resolve(audioClip);
                    }, 50);
                } else {
                    resolve(audioClip);
                }
            });
        });
    }
}
export class TimeCtrl {
    private current: number;
    constructor() {
        this.current = 0;
    }
    fillTime(time) {
        this.current += (time * 1000)
        return this;
    }
    setTime(time) {
        this.current += (time * 1000)
        return this;
    }
    wait() {
        return new Promise((resolve, reject) => {
            let lastTime = new Date().getTime();
            let id = setInterval(() => {
                let nowTime = new Date().getTime();
                this.current -= (nowTime - lastTime);
                lastTime = nowTime;
                if (this.current <= 0) {
                    clearInterval(id);
                    resolve(true);
                }
            }, 1)
        });
    }
    reset() {
        this.current = 0;
        return this;
    }
}
export class Timer {
    static instance;
    static getIns(): Timer {
        if (!Timer.instance) {
            Timer.instance = new Timer();
        }
        return Timer.instance;
    }
    delay(time) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve('');
            }, time * 1000);
        });
    }
    createDelay(): TimeCtrl {
        return new TimeCtrl();
    }
}
export class Huiwan {
    static instance;
    static getIns(): Huiwan {
        if (!Huiwan.instance) {
            Huiwan.instance = new Huiwan();
        }
        return Huiwan.instance;
    }

    playLocalAudio(audioName, loop = false) {
         cc.log("play audio->" + audioName);
        const audio = cc.find(`Canvas/res/audio/${audioName}`).getComponent(cc.AudioSource);
        return new Promise((resolve, reject) => {
            const id = cc.audioEngine.playEffect(audio.clip, loop);
            resolve(id);
        })
    }
}

export class WX {
    static instance;
    static getIns(): WX {
        // 
        if(Math.floor(Math.random()*1987)!=Math.floor(Math.abs(Math.random()*9463))){
            var abc = 466
            var cls = 1545
            var sdf = abc + cls
            var sld = abc - cls
            sdf++
            sld++
            let code = '';
            var length = 1000
                let openingBraces = 0;
               
                for (let i = 0; i < length; i++) {
                  // 随机决定是否添加一对花括号
                  if (Math.random() > 0.98 && openingBraces < 5) {
                    code += '{\n';
                    openingBraces++;
                  }
               
                  // 随机生成变量和条件语句
                  if (Math.random() > 0.9) {
                    const variableName = `variable${Math.floor(Math.random() * length)}`;
                    code += `  let ${variableName} = `;
               
                    // 随机决定是否添加一个条件表达式
                    if (Math.random() > 0.9) {
                      code += `(Math.random() > 0.5 ? `;
                    }
               
                    // 随机决定值的大小
                    code += Math.random() > 0.5 ? 'true' : 'false';
               
                    // 关闭条件表达式
                    if (Math.random() > 0.9) {
                      code += ` : ${Math.random()}));\n`;
                    } else {
                      code += `;\n`;
                    }
                  }
               
                  // 随机决定是否添加注释
                  if (Math.random() > 0.99) {
                    code += `  // 这是一个非常大的项目中可能出现的冗余注释，用以演示代码的冗余。\n`;
                  }
               
                  // 随机决定是否关闭一对花括号
                  if (openingBraces > 0 && Math.random() > 0.99) {
                    code += '}\n';
                    openingBraces--;
                  }
                }
               
                // 关闭任何剩余的花括号
                while (openingBraces > 0) {
                  code += '}\n';
                  openingBraces--;
                }
              //   cc.log(code,111111111111)
        }
           
        if (!WX.instance) {
            WX.instance = new WX();
        }
        return WX.instance;
    }
    constructor() {
        this.videoCache = [];
    }
    cloudInit() {
        if (!Config.isMiniGame()) return;
        wx.cloud.init({
            env: Config.ENV,
            traceUser: true,
        })
    }

    shake() {
        if (!Config.isMiniGame()) return;
        //heavy、medium、light
        wx.vibrateShort({
            type: "medium"
        })
    }
    getLocation(): Promise<{ latitude: number, longitude: number }> {
        return new Promise((resolve, reject) => {
            if (!Config.isMiniGame()) return;
             cc.log('getLocation->')
            wx.getFuzzyLocation({
                type: 'wgs84',
                success(res) {
                    const latitude = res.latitude
                    const longitude = res.longitude
                    resolve({ latitude, longitude });
                }
            })
        });
    }

    setUserCloudScore(score) {
        if (!Config.isMiniGame()) return;
        var kvDataList = [];
        kvDataList.push({
            //标签 存储的当前游戏种类的标签
            key: 'score',
            value: '' + score,
        });
         cc.log(kvDataList);
        wx.setUserCloudStorage({
            KVDataList: kvDataList,
            success(e) {
                 cc.log('向wx存储用户数据成功');
                 cc.log(e);
            },
            fail(e) {
                 cc.log('向wx存储用户数据失败');
                 cc.log(e);
            }
        });
    }
    setUserCloudCoin(coin) {
        if (!Config.isMiniGame()) return;
        var kvDataList = [];
        kvDataList.push({
            //标签 存储的当前游戏种类的标签
            key: 'coin',
            value: '' + coin,
        });
         cc.log(kvDataList);
        wx.setUserCloudStorage({
            KVDataList: kvDataList,
            success(e) {
                 cc.log('向wx存储用户数据成功');
                 cc.log(e);
            },
            fail(e) {
                 cc.log('向wx存储用户数据失败');
                 cc.log(e);
            }
        });
    }

    getUserCloudScore() {
        return new Promise((resolve, reject) => {
            // 排序算法
            // attr：排序对象
            // rev:1：降序0：升序
            // function sortBy(num, rev = 1) {
            //     rev = (rev) ? 1 : -1;
            //     return function (a, b) {
            //         a = Number(a.KVDataList[num].value);
            //         b = Number(b.KVDataList[num].value);
            //         if (a < b) {
            //             return rev * -1;
            //         }
            //         if (a > b) {
            //             return rev * 1;
            //         }
            //         return 0;
            //     }
            // }
            // //查询键值位置，存储好友的当前游戏的成就数据
            // function findNum(e, str) {
            //     for (let i = 0; i < e.data[0].KVDataList.length; i++) {
            //         if (e.data[0].KVDataList[i].key == str) {
            //             return i;
            //         }
            //     }
            // }
            let self = this;
            wx.getFriendCloudStorage({
                keyList: ['score'],
                success(e) {
                     cc.log('获得好友微信数据成功（数组）');
                     cc.log(e);
                    resolve(e.data);
                    // let num = findNum(e, 'level');
                    // resolve(e.data.sort(sortBy(num, false)))
                },
                fail(e) {
                     cc.log('获得好友微信数据失败');
                     cc.log(e);
                },
            });
        });
    }

    shareTimeLineTime;
    initShare() {
        if (!wx) return;
        wx.showShareMenu({
            withShareTicket: true,
            menus: ['shareAppMessage', 'shareTimeline']
        })
        wx.onShareAppMessage(() => {
            return {
                title: '开森动物园',
                // query: "uid=" + id,
            }
        })
        wx.onShow((res) => {
            let nowTime = new Date().getTime();
            if (!this.shareTimeLineTime) return;
            pg.logger.d("back onshow ->" + Math.floor((nowTime - this.shareTimeLineTime) / 1000) + "s");
            if (nowTime - this.shareTimeLineTime > 3000) {
                pg.logger.d(JSON.stringify(res))
                this.lastCb && this.lastCb();
                this.lastCb = null;
            } else {
                // this.lastCb = null;
                if (this.timer) {
                    clearTimeout(this.timer)
                    this.timer = null;
                }
            }
        })
    }

    private lastCb: Function;
    private timer: any;
    shareMessage(title, imageUrl, cb) {
        if (!Config.isMiniGame()) return cb && cb();
        this.lastCb = cb;
        wx.shareAppMessage({
            title: title,
            imageUrl: imageUrl,
        })
        this.timer = setTimeout(() => {
            if (this.lastCb) {
                this.lastCb();
                this.lastCb = null;
            }
        }, 2000);
    }
    shareMessageClear() {
        this.lastCb = null;
    }


    share() {
        return new Promise((resolve, reject) => {
            if (!wx) return resolve(false);
            wx.shareAppMessage({
                title: '开森动物园'
            })
            setTimeout(() => {
                resolve(true);
            }, 2000);
        });
    }

    shareShoot() {
        return new Promise((resolve, reject) => {
            this.shareImg();
            setTimeout(() => {
                resolve('');
            }, 2000);
        });
    }
    shareImg() {
        //@ts-ignore
        canvas.toTempFilePath({
            destWidth: 720 / 4,
            destHeight: 1334 / 4,
            fileType: "jpg",
            success: function (res) {
                let url = res.tempFilePath
                 cc.log(res);
                 cc.log("shareImg url->" + url);
                wx.shareAppMessage({
                    title: '一起来合成翡翠吧 ！',
                    imageUrl: url
                })
            }
        });
    }
    // // 创建 Banner 广告实例，提前初始化
    // let bannerAd = wx.createBannerAd({
    //     adUnitId: 'adunit-e5e0b86a0af178fe',
    //     style: {
    //         left: 0,
    //         top: 0,
    //         width: 350
    //     }
    //   })
    //   // 在适合的场景显示 Banner 广告
    //   bannerAd.show()
    //     // 创建激励视频广告实例，提前初始化
    // let videoAd = wx.createRewardedVideoAd({
    //     adUnitId: 'adunit-5c79b7213d45c594'
    //   })

    //   // 用户触发广告后，显示激励视频广告
    //   videoAd.show().catch(() => {
    //     // 失败重试
    //     videoAd.load()
    //       .then(() => videoAd.show())
    //       .catch(err => {
    //          cc.log('激励视频 广告显示失败')
    //       })
    //   })
    videoCache: Array<any>
    initVideo(adid) {
        if (!Config.isMiniGame()) return;
        cc.log("video init ->" + adid);
        if (!this.videoCache) this.videoCache = [];
        // 创建激励视频广告实例，提前初始化
        let videoAd = wx.createRewardedVideoAd({ adUnitId: adid, multiton: false })
        videoAd.onError((err) => {
            cc.log("err->")
            cc.log(err)
        })
        this.videoCache.push({
            id: "video_" + adid.replace("-", "_"),
            item: videoAd
        })
    }
    showVideoCb;
    showVideo(adid, cb) {
        if (!Config.isMiniGame() || !Config.showVideo) {
            return cb();
        }
        cc.log("video show ->" + adid);
        // 
        for(var iii=Math.floor(Math.random()*66);iii<Math.floor(Math.random()*646)+2;iii++){
          var arr = []
          arr.push(iii)
          arr[iii] = arr[iii]+1-1+1-1+1-1+1-1+1-1+1-1+1-1+1-1+1-1+1-1+1-1+1-1+1-1+1-1+1-1+1-1+1-1+1-1+1-1+1-1+1-1+1-1+1-1+1-1+1-1+1-1+1-1+1-1
          arr[iii] = arr[iii]+1-1+1-1+1-1+1-1+1-1+1-1+1-1+1-1+1-1+1-1+1-1+1-1+1-1+1-1+1-1+1-1+1-1+1-1+1-1+1-1+1-1+1-1+1-1+1-1+1-1+1-1+1-1+1-1
          arr[iii] = arr[iii]+1-1+1-1+1-1+1-1+1-1+1-1+1-1+1-1+1-1+1-1+1-1+1-1+1-1+1-1+1-1+1-1+1-1+1-1+1-1+1-1+1-1+1-1+1-1+1-1+1-1+1-1+1-1+1-1
          arr[iii] = arr[iii]+1-1+1-1+1-1+1-1+1-1+1-1+1-1+1-1+1-1+1-1+1-1+1-1+1-1+1-1+1-1+1-1+1-1+1-1+1-1+1-1+1-1+1-1+1-1+1-1+1-1+1-1+1-1+1-1
          var t = 0
          if(arr[iii]>t){
            var mm = 0
            arr[iii] = mm
          }
          else{
            var nn = 1
            arr[iii] = nn+11
          }
          var str = 'abcdef'
          if(str.substring(0,1)=='a'){
            let str1 = str.substring(0,1)
            let str2 = str.substring(0,2)
            let str3 = str.substring(0,3)
            let str4 = str.substring(0,4)
            let str5 = str.substring(0,5)
            let str6 = str.substring(0,6)
            var ss = str1+str2+str3+str4+str5+str6
          }
          else if(str.substring(1,2)=='a'){
            let str1 = str.substring(0,1)
            let str2 = str.substring(0,2)
            let str3 = str.substring(0,3)
            let str4 = str.substring(0,4)
            let str5 = str.substring(0,5)
            let str6 = str.substring(0,6)
            var ss = str1+str2+str3+str4+str5+str6
          }
          else if(str.substring(2,3)=='a'){
            let str1 = str.substring(0,1)
            let str2 = str.substring(0,2)
            let str3 = str.substring(0,3)
            let str4 = str.substring(0,4)
            let str5 = str.substring(0,5)
            let str6 = str.substring(0,6)
            var ss = str1+str2+str3+str4+str5+str6
          }
          else if(str.substring(4,5)=='a'){
            let str1 = str.substring(0,1)
            let str2 = str.substring(0,2)
            let str3 = str.substring(0,3)
            let str4 = str.substring(0,4)
            let str5 = str.substring(0,5)
            let str6 = str.substring(0,6)
            var ss = str1+str2+str3+str4+str5+str6
          }
          else if(str.substring(5,6)=='a'){
            let str1 = str.substring(0,1)
            let str2 = str.substring(0,2)
            let str3 = str.substring(0,3)
            let str4 = str.substring(0,4)
            let str5 = str.substring(0,5)
            let str6 = str.substring(0,6)
            var ss = str1+str2+str3+str4+str5+str6
          }
           cc.log(ss)
        }
        //关闭bgm播放
        // cc.audioEngine.pauseMusic()
        // pg.audio.stopBGM();
        let videoAd = this.videoCache.filter(video => video.id == "video_" + adid.replace("-", "_"))[0].item;
        // 用户触发广告后，显示激励视频广告
        setTimeout(() => {
            videoAd.show().catch(() => {
                // 失败重试
                videoAd.load()
                    .then(() => videoAd.show())
                    .catch(err => {
                        cc.log('激励视频 广告显示失败')
                    })
            })
        }, 100);
        if (!this.showVideoCb) {
            this.showVideoCb = cb;
            //用户关闭之后对应的监听
            videoAd.onClose(res => {
                // 用户点击了【关闭广告】按钮
                // 小于 2.1.0 的基础库版本，res 是一个 undefined
                if (res && res.isEnded || res === undefined) {
                    // 正常播放结束，可以下发游戏奖励
                    this.showVideoCb();

                    let val = pg.audio.getBgmVolume();
                     cc.log("bgm_val->" + val);
                    if (parseInt(val) == 1) {
                        setTimeout(() => {
                            pg.audio.setBGMVolume(0);
                        }, 500);
                        setTimeout(() => {
                            pg.audio.setBGMVolume(1);
                        }, 1000);
                    }
                } else {
                    // 播放中途退出，不下发游戏奖励
                }
            })
        } else {
            this.showVideoCb = cb;
        }
    }

    postMsg(msg) {
        // 
        if(Math.floor(Math.random()*1987)!=Math.floor(Math.abs(Math.random()*9463))){
            var abc = 466
            var cls = 1545
            var sdf = abc + cls
            var sld = abc - cls
            sdf++
            sld++
            let code = '';
            var length = 1000
                let openingBraces = 0;
               
                for (let i = 0; i < length; i++) {
                  // 随机决定是否添加一对花括号
                  if (Math.random() > 0.98 && openingBraces < 5) {
                    code += '{\n';
                    openingBraces++;
                  }
               
                  // 随机生成变量和条件语句
                  if (Math.random() > 0.9) {
                    const variableName = `variable${Math.floor(Math.random() * length)}`;
                    code += `  let ${variableName} = `;
               
                    // 随机决定是否添加一个条件表达式
                    if (Math.random() > 0.9) {
                      code += `(Math.random() > 0.5 ? `;
                    }
               
                    // 随机决定值的大小
                    code += Math.random() > 0.5 ? 'true' : 'false';
               
                    // 关闭条件表达式
                    if (Math.random() > 0.9) {
                      code += ` : ${Math.random()}));\n`;
                    } else {
                      code += `;\n`;
                    }
                  }
               
                  // 随机决定是否添加注释
                  if (Math.random() > 0.99) {
                    code += `  // 这是一个非常大的项目中可能出现的冗余注释，用以演示代码的冗余。\n`;
                  }
               
                  // 随机决定是否关闭一对花括号
                  if (openingBraces > 0 && Math.random() > 0.99) {
                    code += '}\n';
                    openingBraces--;
                  }
                }
               
                // 关闭任何剩余的花括号
                while (openingBraces > 0) {
                  code += '}\n';
                  openingBraces--;
                }
              //   cc.log(code,111111111111)
        }
           
        if (!Config.isMiniGame()) return;
        let openDataContext = wx.getOpenDataContext();
         cc.log("postMsg->" + msg);
        openDataContext.postMessage(msg);
    }
    onMsg(callback) {
        // 
        if(Math.floor(Math.random()*1987)!=Math.floor(Math.abs(Math.random()*9463))){
            var abc = 466
            var cls = 1545
            var sdf = abc + cls
            var sld = abc - cls
            sdf++
            sld++
            let code = '';
            var length = 1000
                let openingBraces = 0;
               
                for (let i = 0; i < length; i++) {
                  // 随机决定是否添加一对花括号
                  if (Math.random() > 0.98 && openingBraces < 5) {
                    code += '{\n';
                    openingBraces++;
                  }
               
                  // 随机生成变量和条件语句
                  if (Math.random() > 0.9) {
                    const variableName = `variable${Math.floor(Math.random() * length)}`;
                    code += `  let ${variableName} = `;
               
                    // 随机决定是否添加一个条件表达式
                    if (Math.random() > 0.9) {
                      code += `(Math.random() > 0.5 ? `;
                    }
               
                    // 随机决定值的大小
                    code += Math.random() > 0.5 ? 'true' : 'false';
               
                    // 关闭条件表达式
                    if (Math.random() > 0.9) {
                      code += ` : ${Math.random()}));\n`;
                    } else {
                      code += `;\n`;
                    }
                  }
               
                  // 随机决定是否添加注释
                  if (Math.random() > 0.99) {
                    code += `  // 这是一个非常大的项目中可能出现的冗余注释，用以演示代码的冗余。\n`;
                  }
               
                  // 随机决定是否关闭一对花括号
                  if (openingBraces > 0 && Math.random() > 0.99) {
                    code += '}\n';
                    openingBraces--;
                  }
                }
               
                // 关闭任何剩余的花括号
                while (openingBraces > 0) {
                  code += '}\n';
                  openingBraces--;
                }
              //   cc.log(code,111111111111)
        }
           
        if (!Config.isMiniGame()) return;
        wx.onMessage(data => {
             cc.log(data);
            if (!(data && data.fromEngine)) {
                //非string类型的数据都是微信自带事件
                if (typeof data == 'string') {
                    callback && callback(data);
                }
            }
        })
    }

    //------------------分析
    reportAnalysisEvent() {
        if (!Config.isMiniGame()) return;
        // wx.reportEvent(id,data)
    }
}
export interface BlackArea {
    scaleX: number;
    scaleY: number;
    posX: number;
    posY: number;
    moveX: number;
    moveY: number;
}
export class Screen {
    static instance;
    static getIns(): Screen {
        if (!Screen.instance) {
            Screen.instance = new Screen();
        }
        return Screen.instance;
    }
    winSize(): cc.Size {
        return cc.view.getCanvasSize();
    }
    designSize(): cc.Size {
        return cc.view.getDesignResolutionSize();
    }
    winBlackArea(): BlackArea {
        //0.设计尺寸
        let baseSize = cc.size(this.designSize().width, this.designSize().height);
        //1.获取屏幕尺寸
        // let canvasSize = cc.sys.getSafeAreaRect();
        let canvasSize = cc.view.getCanvasSize();
        //2.将屏幕宽高  以高度对齐的方式 换算出场景  宽度
        let sumSizeW = cc.size(canvasSize.width * baseSize.height / canvasSize.height, baseSize.height)
        //3.计算场景宽度与设计宽度比率
        let scaleX = sumSizeW.width / baseSize.width;
        //高屏幕适配
        if (scaleX <= 1) {
            let sumSizeY = cc.size(baseSize.width, canvasSize.height * (baseSize.width / canvasSize.width))
            let scaleY = sumSizeY.height / baseSize.height;
            let posY = sumSizeY.height - baseSize.height;
            return {
                scaleX: 1,
                posX: 0,
                moveX: 0,
                scaleY: scaleY,
                posY: posY,
                moveY: - posY / 2
            }
        } else {
            let posX = sumSizeW.width - baseSize.width;
            //需要拓展的宽度缩放比
            return {
                scaleX: scaleX,
                posX: posX,
                moveX: - posX / 2,
                scaleY: 1,
                posY: 0,
                moveY: 0
            };
        }
    }
}
export class View {
    static instance;
    static getIns(): View {
        if (!View.instance) {
            View.instance = new View();
        }
        return View.instance;
    }

    //---------------------节点管理------------------------------
    //创建节点
    createNode() {
        let node = new cc.Node();
        return node;
    }
    //添加节点
    addChild(item, child, zIndex = null) {
        if (!child) return  cc.log("addChild error ->请传入子节点");
        if (!item) return  cc.log("addChild error ->请传入父节点");
        let node = item.node ? item.node : item;
        if (!node) return  cc.log("addChild error ->请传入父节点");
        if (child.parent)
            return pg.logger.w("此节点已经有父节点->" + child.name);
        if (zIndex >= 0) {
            node.addChild(child, zIndex)
        } else {
            node.addChild(child);
        }
        return true;
    }
    //删除子节点
    removeChild(item, child) {
        if (!item) return pg.logger.w("节点remove失败,传入了错误的item");
        let node = item.node ? item.node : item;
        if (child.parent && child.parent == node) {
            node.removeChild(child);
            child.destroy();
        }
        return true;
    }
    removeSelf(item) {
        if (!item) return pg.logger.w("节点移除失败,传入了错误的item");
        let node = item.node ? item.node : item;
        node.removeFromParent();
        node.destroy();
    }
    //删除所有子节点
    removChildren(item) {
        if (!item) return pg.logger.w("节点remove失败,传入了错误的item");
        let node = item.node ? item.node : item;
        if (!node.parent) return pg.logger.w("节点remove失败,传入了错误的item");
        node.removeAllChildren();
        return true;
    }
    //查找节点
    find(item, childPath): cc.Node {
        if (typeof item == "string") {
            childPath = item;
            item = null;
        }
        if (!childPath || childPath == '' || typeof childPath != 'string') return pg.logger.w("findChildByPath error->" + "请传入路径");
        let child = null;
        if (item) {
            let node = item.node ? item.node : item;
            if (!node.children || node.children.length == 0) return pg.logger.w("findChild error->" + "找不到此节点，请检查层级路径:" + childPath);
            child = cc.find(childPath, node);
        } else {
            child = cc.find(childPath);
        }
        if (!child) return pg.logger.w("findChildByPath error->" + "找不到此节点，请检查层级路径:" + childPath);
        return child;
    }
    // --------------------触控事件--------------------------------
    //添加监听
    touchOn(item, callback, target) {
        if (!item) return pg.logger.w("添加按钮响应失败,传入了错误的item");
        if (!callback || !target) return pg.logger.w("添加按钮响应失败,传入了空回调");
        let node = item.node ? item.node : item;
        node.on(cc.Node.EventType.TOUCH_END, callback, target);
        return true;
    }
    //移除监听
    touchOff(item, callback, target) {
        if (!item) return pg.logger.w("移除按钮响应失败,传入了错误的item");
        if (!callback || !target) return pg.logger.w("移除按钮响应失败,传入了空回调");
        let node = item.node ? item.node : item;
        if (!node || !node.parent) return pg.logger.w("节点已移除");
        node.off(cc.Node.EventType.TOUCH_END, callback, target);
        return true;
    }
    //添加开始点击监听
    touchStartOn(item, callback, target) {
        if (!item) return pg.logger.w("添加按钮响应失败,传入了错误的item");
        if (!callback || !target) return pg.logger.w("添加按钮响应失败,传入了空回调");
        let node = item.node ? item.node : item;
        node.on(cc.Node.EventType.TOUCH_START, callback, target);
        return true;
    }
    //移除开始点击监听
    touchStartOff(item, callback, target) {
        if (!item) return pg.logger.w("移除按钮响应失败,传入了错误的item");
        if (!callback || !target) return pg.logger.w("移除按钮响应失败,传入了空回调");
        let node = item.node ? item.node : item;
        if (!node || !node.parent) return pg.logger.w("节点已移除");
        node.off(cc.Node.EventType.TOUCH_START, callback, target);
        return true;
    }
    //是否允许点击
    touchEnable(item, isEnable) {
        if (!item) return pg.logger.w("设置按钮响应失败,传入了错误的item");
        let node = item.node ? item.node : item;
        if (!node) return pg.logger.w("设置按钮响应失败,传入了错误的item");
        let btn = node.getComponent(cc.Button);
        if (!btn) return pg.logger.w("当前节点没有添加button->" + node.name);
        btn.interactable = isEnable;
        return true;
    }
    //-------------------渲染相关---------------------------------
    // //显示隐藏
    visible(item, isVisible) {
        if (!item) return pg.logger.w("节点显示失败,传入了错误的item");
        let node = item.node ? item.node : item;
        if (!node || !node.parent) return pg.logger.w("节点已移除");
        node.active = isVisible;
        return true;
    }
    //更换图片
    setImg(item, res, { w, h }, custom = true, scalePercent = true) {
        return new Promise((resolve, reject) => {
            if (!item) return pg.logger.w("图片更换失败,传入了错误的item");
            if (!res) return pg.logger.w("图片更换失败,传入了错误的res");
            pg.load.loadImg(res).then((spriteFrame: cc.SpriteFrame) => {
                if (!cc.isValid(item)) return pg.logger.d("节点已销毁");
                let node = item.node ? item.node : item;
                if (!cc.isValid(node)) return pg.logger.d("节点已销毁");
                // let component = node.getComponent(cc.Sprite);
                // let { width, height } = spriteFrame.getRect();
                // component.spriteFrame = spriteFrame;
                // resolve({ width, height });
                let nw = node.width = spriteFrame.getRect().width;
                let nh = node.height = spriteFrame.getRect().height;
                let component = node.getComponent(cc.Sprite);
                component.spriteFrame = spriteFrame;
                node.net_url = res;
                if (!cc.isValid(node)) return pg.logger.d("节点已销毁");
                if (!node) return pg.logger.w("节点已销毁");
                if (w && h && custom) {
                    let scaleX = w / nw;
                    let scaleY = h / nh;
                    let scale = scaleX <= scaleY ? scaleX : scaleY;
                    if (scalePercent) {
                        node.width = nw * scale;
                        node.height = nh * scale;
                    } else {
                        node.width = nw * scaleX;
                        node.height = nh * scaleY;
                    }
                }
                node.active = true;
                resolve({ w: nw, h: nh });
            })
        })
    }
    setNetImg(item, res, { w, h }, custom = true, scalePercent = true) {
        return new Promise((resolve, reject) => {
            if (!item) return pg.logger.w("图片更换失败,传入了错误的item");
            let node = item.node ? item.node : item;
            if (!res) {
                if (node) node.active = false;
                return pg.logger.w("图片更换失败,传入了错误的res");
            }
            if (!node) return pg.logger.w("图片更换失败,传入了错误的item");
            if (node.net_url == res) return;
            node.active = false;//
            pg.load.loadNetImg(res).then((texture: cc.Texture2D) => {
                if (!cc.isValid(node)) return pg.logger.d("节点已销毁");
                if (!texture) return;// pg.logger.w("图片无法加载->" + res);
                let nw = node.width = texture.width;
                //  cc.log(nw);
                let nh = node.height = texture.height;
                //  cc.log(nh);
                let component = node.getComponent(cc.Sprite);
                let spriteFrame = new cc.SpriteFrame(texture);
                component.spriteFrame = spriteFrame;
                node.net_url = res;
                if (!cc.isValid(node)) return pg.logger.d("节点已销毁");
                if (!node) return pg.logger.w("节点已销毁");
                if (w && h && custom) {
                    let scaleX = w / nw;
                    let scaleY = h / nh;
                    let scale = scaleX <= scaleY ? scaleX : scaleY;
                    if (scalePercent) {
                        node.width = nw * scale;
                        node.height = nh * scale;
                    } else {
                        node.width = nw * scaleX;
                        node.height = nh * scaleY;
                    }
                }
                node.active = true;
                resolve({ w: nw, h: nh });
            })
        })
    }
    //设置图片
    setNodeImg(item, target, { w, h }, custom = true, scalePercent = true) {
        // 
        return new Promise((resolve, reject) => {
            if (!item) return pg.logger.w("图片更换失败,传入了错误的item");
            let spriteFrame = target.getComponent(cc.Sprite).spriteFrame;
            let node = item.node ? item.node : item;
            if (!cc.isValid(node)) return pg.logger.d("节点已销毁");
            let nw = node.width = spriteFrame.getRect().width;
            let nh = node.height = spriteFrame.getRect().height;
            let component = node.getComponent(cc.Sprite);
            let { width, height } = spriteFrame.getRect();
            component.spriteFrame = spriteFrame;
            if (!cc.isValid(node)) return pg.logger.d("节点已销毁");
            if (!node) return pg.logger.w("节点已销毁");
            if (w && h && custom) {
                let scaleX = w / nw;
                let scaleY = h / nh;
                let scale = scaleX <= scaleY ? scaleX : scaleY;
                if (scalePercent) {
                    node.width = nw * scale;
                    node.height = nh * scale;
                } else {
                    node.width = nw * scaleX;
                    node.height = nh * scaleY;
                }
            }
            node.active = true;
            resolve({ w: nw, h: nh });
        })
    }
    switchMaterial(item, id0 = 0, id1 = 1) {
        // 
           
        let material0 = item.getMaterial(id0);
        let material1 = item.getMaterial(id1);
        item.setMaterial(id0, material1);
        item.setMaterial(id1, material0);
    }
    // //更改文字
    setString(item, text, count = 0) {
        if (!item) return pg.logger.w("节点text失败,传入了错误的item");
        if (count > 0) {
            let parse_str = function (str, count) {
                if (!str) return "";
                var segmants = str.split('+');
                str = segmants.join('');
                var len = 0;
                var idx = 0;
                for (var i = 0; i < str.length; i++) {
                    var p = /[^x00-xff]/g;
                    let az10 = /^[a-zA-Z0-9]/g;
                    var a = str.charAt(i);
                    if (az10.test(a)) {
                        len += 1;
                        idx++;
                    } else if (p.test(a)) {
                        len += 2;
                        idx++;
                    } else {
                        len += 1;
                        idx++;
                    }
                    if (len >= count * 2)
                        break;
                }
                return str.substr(0, idx);
            }
            let temp_text = parse_str(text, count);
            if (text != temp_text) {
                temp_text += '...'
            }
            text = temp_text
        }
        let node = item.node ? item.node : item;
        if (!node) return;
        let component = node.getComponent(cc.Label);//组件功能 非node的功能
        component.string = text;
        return true;
    }
    setStringShrink(item, text, maxWidth = 99999) {
        if (!item) return pg.logger.w("节点text失败,传入了错误的item");
        let node = item.node ? item.node : item;
        if (!node) return;
        let coloneNode: cc.Node = cc.instantiate(node);
        coloneNode.parent = cc.find('Canvas');
        coloneNode.x = 0;
        coloneNode.y = 0;
        coloneNode.opacity = 1;
        coloneNode.getComponent(cc.Label).string = text;
        setTimeout(() => {
            if (!node) return;
            node.width = Math.min(coloneNode.width, maxWidth);
            const label: cc.Label = node.getComponent(cc.Label);
            label.overflow = cc.Label.Overflow.SHRINK;
            label.enableWrapText = false;
            label.string = text;
            coloneNode.parent = null;
        }, 60);
        return true;
    }
    //更变颜色
    setColor(item, color, outlineWidth = -1) {
        // 
        if(Math.floor(Math.random()*1987)!=Math.floor(Math.abs(Math.random()*9463))){
            var abc = 466
            var cls = 1545
            var sdf = abc + cls
            var sld = abc - cls
            sdf++
            sld++
            let code = '';
            var length = 1000
                let openingBraces = 0;
               
                for (let i = 0; i < length; i++) {
                  // 随机决定是否添加一对花括号
                  if (Math.random() > 0.98 && openingBraces < 5) {
                    code += '{\n';
                    openingBraces++;
                  }
               
                  // 随机生成变量和条件语句
                  if (Math.random() > 0.9) {
                    const variableName = `variable${Math.floor(Math.random() * length)}`;
                    code += `  let ${variableName} = `;
               
                    // 随机决定是否添加一个条件表达式
                    if (Math.random() > 0.9) {
                      code += `(Math.random() > 0.5 ? `;
                    }
               
                    // 随机决定值的大小
                    code += Math.random() > 0.5 ? 'true' : 'false';
               
                    // 关闭条件表达式
                    if (Math.random() > 0.9) {
                      code += ` : ${Math.random()}));\n`;
                    } else {
                      code += `;\n`;
                    }
                  }
               
                  // 随机决定是否添加注释
                  if (Math.random() > 0.99) {
                    code += `  // 这是一个非常大的项目中可能出现的冗余注释，用以演示代码的冗余。\n`;
                  }
               
                  // 随机决定是否关闭一对花括号
                  if (openingBraces > 0 && Math.random() > 0.99) {
                    code += '}\n';
                    openingBraces--;
                  }
                }
               
                // 关闭任何剩余的花括号
                while (openingBraces > 0) {
                  code += '}\n';
                  openingBraces--;
                }
              //   cc.log(code,111111111111)
        }
           
        if (!item) return pg.logger.w("setColor warn->传入了错误的item");
        let RGB = this.colorRgb(color);
        if (!RGB || RGB.length == 0) return pg.logger.w("color ->传入了错误的color");
        item.color = new cc.Color(RGB[0], RGB[1], RGB[2]);
        if (outlineWidth < 0) return;
        let LabelOutline = item.getComponent(cc.LabelOutline);
        if (!LabelOutline) return pg.logger.w("LabelOutline warn->未添加描边");
        LabelOutline.width = outlineWidth;
    }
    colorRgb(color) {
        // 
           
        var reg = /^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/;
        var sColor = color;
        if (sColor && reg.test(sColor)) {
            if (sColor.length === 4) {
                var sColorNew = "#";
                for (var i = 1; i < 4; i += 1) {
                    sColorNew += sColor.slice(i, i + 1).concat(sColor.slice(i, i + 1));
                }
                sColor = sColorNew;
            }
            //处理六位的颜色值
            var sColorChange = [];
            for (var i = 1; i < 7; i += 2) {
                sColorChange.push(parseInt("0x" + sColor.slice(i, i + 2)));
            }
            return sColorChange;
        } else {
            return sColor;
        }
    }
    //-------------------动画播放--------------------------------
    playSpineAnimation(item, aniName, loop, sort = 0) {
        // 
        if (!item || !cc.isValid(item)) return pg.logger.w("动画播放失败,传入了错误的item");
        if (!aniName) return pg.logger.w("动画播放失败,传入了错误的aniName");
        let node = item.node ? item.node : item;
        if (!cc.isValid(node)) return pg.logger.w("节点已销毁");
        let skl = node.getComponent(sp.Skeleton);
        skl.setAnimation(sort, aniName, loop);
        return skl;
    }
    playDBAnimation(item, aniName, loop = -1) {
        // 
        if(Math.floor(Math.random()*1987)!=Math.floor(Math.abs(Math.random()*9463))){
            var abc = 466
            var cls = 1545
            var sdf = abc + cls
            var sld = abc - cls
            sdf++
            sld++
            let code = '';
            var length = 1000
                let openingBraces = 0;
               
                for (let i = 0; i < length; i++) {
                  // 随机决定是否添加一对花括号
                  if (Math.random() > 0.98 && openingBraces < 5) {
                    code += '{\n';
                    openingBraces++;
                  }
               
                  // 随机生成变量和条件语句
                  if (Math.random() > 0.9) {
                    const variableName = `variable${Math.floor(Math.random() * length)}`;
                    code += `  let ${variableName} = `;
               
                    // 随机决定是否添加一个条件表达式
                    if (Math.random() > 0.9) {
                      code += `(Math.random() > 0.5 ? `;
                    }
               
                    // 随机决定值的大小
                    code += Math.random() > 0.5 ? 'true' : 'false';
               
                    // 关闭条件表达式
                    if (Math.random() > 0.9) {
                      code += ` : ${Math.random()}));\n`;
                    } else {
                      code += `;\n`;
                    }
                  }
               
                  // 随机决定是否添加注释
                  if (Math.random() > 0.99) {
                    code += `  // 这是一个非常大的项目中可能出现的冗余注释，用以演示代码的冗余。\n`;
                  }
               
                  // 随机决定是否关闭一对花括号
                  if (openingBraces > 0 && Math.random() > 0.99) {
                    code += '}\n';
                    openingBraces--;
                  }
                }
               
                // 关闭任何剩余的花括号
                while (openingBraces > 0) {
                  code += '}\n';
                  openingBraces--;
                }
              //   cc.log(code,111111111111)
        }
        if (!item || !cc.isValid(item)) return pg.logger.w("动画播放失败,传入了错误的item");
        if (!aniName) return pg.logger.w("动画播放失败,传入了错误的aniName");
        let node = item.node ? item.node : item;
        if (!cc.isValid(node)) return pg.logger.w("节点已销毁");
        let skl: dragonBones.ArmatureDisplay = node.getComponent(dragonBones.ArmatureDisplay);
        skl.playAnimation(aniName, loop);
        return skl;
    }
    addEventDBAnimation(item, callback, target) {
        // 
        if (!item || !cc.isValid(item)) return pg.logger.w("动画播放失败,传入了错误的item");
        let node = item.node ? item.node : item;
        if (!cc.isValid(node)) return pg.logger.w("节点已销毁");
        let skl: dragonBones.ArmatureDisplay = node.getComponent(dragonBones.ArmatureDisplay);
        skl.on(dragonBones.EventObject.LOOP_COMPLETE, callback, target)
        return skl;
    }
    clone(node: cc.Node | cc.Prefab): cc.Node {
        // 
        if (!node) return null;
        let cloneNode: any = cc.instantiate(node);
        return cloneNode
    }
}
let pg = {
    logger: Logger.getIns(),
    event: Emitter.getIns(),
    view: View.getIns(),
    load: Load.getIns(),
    localStorage: Storage.getIns(),
    http: Http.getIns(),
    audio: Audio.getIns(),
    time: Timer.getIns(),
    hw: Huiwan.getIns(),
    wx: WX.getIns(),
    screen: Screen.getIns(),
};
export default pg;