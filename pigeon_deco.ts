// import Config from "../Config";
// import pg from "./pigeon";

// /**
//  * update截流 (放置顶层，防止其他装饰器运行)
//  * @param value 时间间隔 s
//  * @returns null | any
// */
// export function UpdateTime(value: number = 0) {
//     let lastTime = 0;
//     return function (target, propertyName, descriptor) {
//         const defaultMethod = descriptor.value;
//         descriptor.value = function (...args) {
//             const now = Date.now();
//             if (now - lastTime > value * 1000) {
//                 lastTime = now;
//                 return defaultMethod.apply(this, args);
//             } else {
//                 return null;
//             }
//         }
//     }
// }


// /**
//  * 性能打印
//  * @param value 自定义TAG
//  * @returns null | any
// */
// export function DebugRuntime(value: string) {
//     return function (target, propertyName, descriptor) {
//         const defaultMethod = descriptor.value;
//         descriptor.value = function (...args) {
//             const now = Date.now();
//             const result = defaultMethod.apply(this, args);
//             const time = Date.now() - now;
//              cc.log(`Function ${value} cost time: ${time}ms`);
//             return result;
//         }
//     }
// }
