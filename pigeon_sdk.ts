import Config from "../Config";
import pg from "./pigeon";

export class Wechat {
    static instance;
    static getIns(): Wechat {
        if (!Wechat.instance) {
            Wechat.instance = new Wechat();
        }
        return Wechat.instance;
    }
    constructor() { }

    showShareMenu(data) {
        wx.showShareMenu({
            ...data,
        })
    }
    initLogin() {
        // 
        return new Promise((resolve, reject) => {
            if (!Config.isMiniGame()) return resolve({ code: "123" });
            wx.login({
                success(res) {
                    if (res.code) {
                        pg.logger.debug("code->" + res.code);
                        let obj = wx.getLaunchOptionsSync();
                        let query: any = obj.query;
                        pg.logger.debug("launchQuery->" + JSON.stringify(query));
                        if (!query.uid) query.uid = query.playerId;
                        pg.logger.debug("query uid->" + query.uid);
                        resolve({ code: res.code, uid: query.uid });
                    }
                },
                fail(res) {
                    pg.logger.debug("登录失败！" + res.errMsg);
                },
            });
        })
    }
    visible(item, isVisible) {
        if (!item) return pg.logger.w("节点显示失败,传入了错误的item");
        let node = item.node ? item.node : item;
        if (!node || !node.parent) return pg.logger.w("节点已移除");
        node.active = isVisible;
        return true;
    }

    initConfig(btn_start, targetNode) {
        return new Promise((resolve, reject) => {
            if (!Config.isMiniGame()) return resolve({ nickName: "游客", avatarUrl: 'https://thirdwx.qlogo.cn/mmopen/vi_32/PiajxSqBRaEIsyIaQzz0EcMm5es87blj5DibBwKsuXuicpWia3UveZJo2aJdBwcbFlRTuvcaLic3wIZSFvdrLtuTJ8ep7Rwh401IgMLpFibR0hWEO4QdHWMM3RnQ/132' });
            const self = this;
            wx.getUserInfo({
                success: (res) => {
                    this.visible(btn_start, false);
                    pg.logger.debug("获取用户信息成功->" + JSON.stringify(res.userInfo));
                    setTimeout(() => {
                        resolve(res.userInfo);
                    }, 100);
                },
                fail: () => {
                    pg.logger.debug("获取用户信息失败");
                    this.visible(btn_start, true);
                    // targetNode.active = true;
                    self.createAuthorizeBtn(
                        targetNode,
                        (res) => {
                            this.visible(btn_start, false);
                             cc.log('用户信息授权成功');
                             cc.log(res)
                            resolve(res.userInfo);
                        },
                        () => { 
                            
                        }
                    );
                },
            });
        });
    }
    //获取用户信息之前 请求同意
    private btnAuthorize: any;
    createAuthorizeBtn(btnNode, suc, fai) {
        pg.logger.debug("用户信息授权！");
        let btnSize = cc.size(btnNode.width + 10, btnNode.height + 10);
        let frameSize = cc.view.getFrameSize();
        let winSize = cc.director.getWinSize();
        //适配不同机型来创建微信授权按钮
        let left = ((winSize.width * 0.5 + btnNode.x - btnSize.width * 0.5) / winSize.width) * frameSize.width;
        let top = ((winSize.height * 0.5 - btnNode.y - btnSize.height * 0.5) / winSize.height) * frameSize.height;
        let width = (btnSize.width / winSize.width) * frameSize.width;
        let height = (btnSize.height / winSize.height) * frameSize.height;

        this.btnAuthorize = wx.createUserInfoButton({
            type: "text",
            text: "", //用户授权
            style: {
                left: left,
                top: top,
                width: width,
                height: height,
                lineHeight: 0,
                backgroundColor: "",
                color: "#ff00f0", //ffffff
                textAlign: "center",
                fontSize: 16,
                borderRadius: 4,
            },
        });

        this.btnAuthorize.onTap((uinfo) => {
             cc.log("onTap uinfo: ", uinfo);
            if (uinfo.userInfo) {
                 cc.log("wxLogin auth success");
                wx.showToast({ title: "授权成功" });
                this.hiddenAuthorizeBtn();
                suc && suc(uinfo);
            } else {
                 cc.log("wxLogin auth fail");
                wx.showToast({ title: "授权失败" });
                fai && fai();
            }
        });
    }
    hiddenAuthorizeBtn() {
        this.btnAuthorize.destroy();
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

    videoCache: Array<any>
    initVideo(adid) {
        if (!Config.isMiniGame()) return;
        pg.logger.debug("video init ->" + adid);
        if (!this.videoCache) this.videoCache = [];
        // 创建激励视频广告实例，提前初始化
        let videoAd = wx.createRewardedVideoAd({ adUnitId: adid, multiton: false })
        videoAd.onError((err) => {
            pg.logger.debug("err->")
            pg.logger.debug(err)
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
        pg.logger.debug("video show ->" + adid);
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
                        pg.logger.debug('激励视频 广告显示失败')
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
            pg.logger.debug("back onshow ->" + Math.floor((nowTime - this.shareTimeLineTime) / 1000) + "s");
            if (nowTime - this.shareTimeLineTime > 3000) {
                pg.logger.debug(JSON.stringify(res))
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

}

export class ByteDance {
    static instance: ByteDance;
    static getIns() {
        if (!this.instance) {
            this.instance = new ByteDance();
        }
        return this.instance;
    }

    toLeftScene() {
        //TODO: 跳转场景
        //@ts-ignore
        tt.navigateToScene({
            scene: "sidebar",
            success: (res) => {
                 cc.log("navigate to scene success");
                // 跳转成功回调逻辑
            },
            fail: (res) => {
                 cc.log("navigate to scene fail: ", res);
                // 跳转失败回调逻辑
            },
        });
    }
    addDesktop() {
        //@ts-ignore
        tt.addShortcut({
            success() {
                 cc.log("添加桌面成功");
            },
            fail(err) {
                 cc.log("添加桌面失败", err.errMsg);
            },
        });
    }
    checkDesktop() {
        //@ts-ignore
        tt.checkShortcut({
            success(res) {
                 cc.log("检查快捷方式", res.status);
            },
            fail(res) {
                 cc.log("检查快捷方式失败", res.errMsg);
            },
        });
    }

    notice() {
        // index.js
        const tmplIds: any = ["MSGxx", "MSGxx"];
        tt.requestSubscribeMessage({
            tmplIds: tmplIds,
            complete: (res) => {
                tt.showModal({
                    title: "订阅完成",
                    content: JSON.stringify(res),
                });
            },
        });
    }

    showShareMenu(data) {
        tt.showShareMenu({
            ...data,
            success(res) {
                 cc.log("已成功显示转发按钮");
            },
            fail(err) {
                 cc.log("showShareMenu 调用失败", err.errMsg);
            },
            complete(res) {
                 cc.log("showShareMenu 调用完成");
            },
        });
    }
    initConfig(btn_start) {
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
            if (!Config.isMiniGame()) return resolve({ nickName: "游客", avatarUrl: 'https://thirdwx.qlogo.cn/mmopen/vi_32/PiajxSqBRaEIsyIaQzz0EcMm5es87blj5DibBwKsuXuicpWia3UveZJo2aJdBwcbFlRTuvcaLic3wIZSFvdrLtuTJ8ep7Rwh401IgMLpFibR0hWEO4QdHWMM3RnQ/132' });
            const self = this;
            wx.getUserInfo({
                success: (res) => {
                    this.visible(btn_start, false);
                    pg.logger.debug("获取用户信息成功->" + JSON.stringify(res.userInfo));
                    setTimeout(() => {
                        resolve(res.userInfo);
                    }, 100);
                },
                fail: () => {
                    pg.logger.debug("获取用户信息失败");
                    this.visible(btn_start, true);
                    resolve({ nickName: "游客", avatarUrl: 'https://thirdwx.qlogo.cn/mmopen/vi_32/PiajxSqBRaEIsyIaQzz0EcMm5es87blj5DibBwKsuXuicpWia3UveZJo2aJdBwcbFlRTuvcaLic3wIZSFvdrLtuTJ8ep7Rwh401IgMLpFibR0hWEO4QdHWMM3RnQ/132' })
                    // let targetNode = this.find(self, "loading");
                    // targetNode.active = true;
                },
            });
        });
    }
    
    visible(item, isVisible) {
        if (!item) return pg.logger.w("节点显示失败,传入了错误的item");
        let node = item.node ? item.node : item;
        if (!node || !node.parent) return pg.logger.w("节点已移除");
        node.active = isVisible;
        return true;
    }
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
    initLogin() {
        return new Promise((resolve, reject) => {
            if (!Config.isMiniGame()) return resolve({ code: "123" });
            tt.login({
                success(res) {
                     cc.log(res,222222222222)
                    if (res.code) {
                        pg.logger.debug("code->" + res.code);
                        let obj = tt.getLaunchOptionsSync();
                        let query: any = obj.query;
                        pg.logger.debug("launchQuery->" + JSON.stringify(query));
                        if (!query.uid) query.uid = query.playerId;
                        pg.logger.debug("query uid->" + query.uid);
                        resolve({ code: res.code, uid: query.uid });
                    }
                },
                fail(res) {
                    pg.logger.debug("登录失败！" + res.errMsg);
                },
            });
        })
    }

    shareMessage(title, imageUrl, cb) {
        if (!Config.isMiniGame()) return cb && cb();
        //@ts-ignore
        tt.shareAppMessage({
            title: title,
            imageUrl: imageUrl,
            success() {
                 cc.log("分享成功");
                cb();
            },
            fail(e) {
                 cc.log("分享失败");
            },
        })

    }
    private videoAd
    private isLoadVideoAd: boolean;
    initVideo(adid) {
        // 
        //预加载广告
        this.videoAd = tt.createRewardedVideoAd({
            adUnitId: adid,
            // multiton: true,
            // multitonRewardMsg: ['加时奖励30秒', '加时奖励30秒', '加时奖励30秒'],
            // multitonRewardTimes: 3,
            // progressTip: false,
        });
        this.videoAd.onLoad(() => {
            this.isLoadVideoAd = true
             cc.log("广告加载完成");
        });
        this.videoAd.onError(() => {
            this.isLoadVideoAd = false
             cc.log("广告加载失败");
        });
        this.videoAd.onClose(res => {
            // 用户点击了【关闭广告】按钮
            // 小于 2.1.0 的基础库版本，res 是一个 undefined
            if (res && res.isEnded || res === undefined) {
                // 正常播放结束，可以下发游戏奖励的逻辑
                this.showVideoCb && this.showVideoCb();
                 cc.log("下发游戏奖励");
            } else {
                 cc.log("播放中途退出");
            }
        })
        this.videoAd.load()
    }
    private showVideoCb;
    showVideo(adid, cb) {
        if (!this.isLoadVideoAd) {
             cc.log("激励视频未初始化加载成功");
            return;
        }
        this.showVideoCb = cb;
        this.videoAd.show().then(() => {
             cc.log("视频广告展示");
        }).catch(() => {
             cc.log('激励视频 广告显示失败')
        })
    }

    initShare() {
        // 更多 分享
        tt.showShareMenu({
            success(res) {
                 cc.log("已成功显示转发按钮");
            },
            fail(err) {
                 cc.log("showShareMenu 调用失败", err.errMsg);
            },
            complete(res) {
                 cc.log("showShareMenu 调用完成");
            },
        });
        //@ts-ignore
        tt.onShareAppMessage((res) => {
             cc.log(res.channel); // 如果用户触发了视频发布器，channel值为"video"
            return {
                success: (res) => {
                     cc.log("分享视频成功");
                },
            };
        });
    }


    // private startTime: Date;
    // constructor() {
    //     this.isLoadVideoAd = false;
    //     this.isLoadBannerAd = false;
    //     this.isLoadInterstitialAd = false;
    // }

    // initAd() {
    //     this.startTime = new Date()
    //     this.initVideoAd();
    //     this.initBannerAd();
    //     // this.initInterstitialAd()
    // }

    // private bannerAd;
    // private isLoadBannerAd: boolean;
    // initBannerAd() {
    //     this.bannerAd = tt.createBannerAd({
    //         adUnitId: 'a74dp1a2p001ih6a0l',
    //         adIntervals: 60,
    //         style: {
    //             width: 128,
    //             left: 0,
    //             top: 0
    //         }
    //     })
    //     this.bannerAd.onLoad(() => {
    //         this.isLoadBannerAd = true;
    //          cc.log("banner加载完成");
    //     });
    //     this.bannerAd.onError(() => {
    //         this.isLoadBannerAd = false;
    //          cc.log("banner加载失败");
    //     });
    // }
    // showBannerAd() {
    //     if (!this.isLoadBannerAd) {
    //          cc.log("banner未初始化加载成功");
    //         return;
    //     }
    //     this.bannerAd.show().then(() => {
    //          cc.log("banner广告展示成功");
    //     }).catch(() => {
    //          cc.log('banner广告显示失败')
    //     })
    // }
    // private interstitialAd;
    // private isLoadInterstitialAd: boolean;
    // // 1. 小游戏启动后的前30s（秒），不能展示插屏广告。

    // // 2. 已经展示一次插屏广告后，第二次展示需要距离上一次展示60s。
    // // 3. 展示过一次激励视频广告后，后续需要展示插屏广告的情况下，需要与激励视频广告的展示间隔60s。
    // initInterstitialAd() {
    //     this.interstitialAd = tt.createInterstitialAd({
    //         adUnitId: '35ehhtm3faf318kjh9',
    //     })
    //     this.interstitialAd.onLoad(() => {
    //         this.isLoadInterstitialAd = true;
    //          cc.log("插屏广告加载成功");
    //     })

    //     this.interstitialAd.onClose(() => {
    //         this.isLoadInterstitialAd = false;
    //          cc.log('插屏广告关闭');
    //     })
    // }
    // canShowInterstitialAd() {
    //     let now_time = new Date();
    //     const differ_seconds = (now_time.getTime() - this.startTime.getTime()) / 1000
    // }
    // showInterstitialAd() {
    //     if (!this.isLoadInterstitialAd) {
    //          cc.log("插屏视频未初始化加载成功");
    //         return;
    //     }
    //     this.interstitialAd.load().then(() => {
    //         this.interstitialAd.show().then(() => {
    //              cc.log("插屏广告展示成功");
    //         }).catch((err) => {
    //              cc.log("插屏广告展示失败", err);
    //         });
    //     })
    // }

    // private recorder;
    // private isShareVideo: boolean = true;
    // private videoPath: string = '';
    // startRecorderVideo(fn: Function = null) {
    //     let x = 0;
    //     let y = 0;
    //     if (this.recorder) this.recorder = null
    //     this.recorder = tt.getGameRecorderManager();
    //     this.videoPath = ''
    //     if (!this.recorder) return
    //     // 获取系统信息
    //     tt.getSystemInfo({
    //         success(res) {
    //             const screenWidth = res.screenWidth;
    //             const screenHeight = res.screenHeight;
    //             const maskInfo = this.recorder.getMark();
    //             x = (screenWidth - maskInfo.markWidth) / 2;
    //             y = (screenHeight - maskInfo.markHeight) / 2;
    //         }
    //     })

    //     this.recorder.onStart((s) => {
    //         if (fn) fn();
    //          cc.log("ttManager录屏开始：", s);
    //     })
    //     this.recorder.onError((s) => {
    //          cc.log("录屏错误：", s);
    //     })
    //     //添加水印并且居中处理
    //     this.recorder.start({
    //         duration: 300,
    //         isMarkOpen: true,
    //         locLeft: x,
    //         locTop: y,
    //     });
    //     this.recorder.onError((e) => {
    //          cc.log('录屏错误', e);
    //     })
    //     this.recorder.onStop((s) => {
    //          cc.log("录屏结束：", s);
    //         // s.videoPath;
    //         if (!this.isShareVideo) return
    //         this.videoPath = s.videoPath
    //         this.shareVideo(s.videoPath)
    //     })
    // }


    // endRecorderVideo(isShare: boolean = true) {
    //     this.isShareVideo = isShare
    //     if (!this.recorder) return
    //     if (this.videoPath) {
    //         this.shareVideo(this.videoPath)
    //     } else {
    //         this.recorder.stop()
    //     }
    // }
    // shareVideo(path) {
    //      cc.log('path', path);
    //     if (!path) return
    //     tt.shareAppMessage({
    //         channel: "video",
    //         title: "这有个落单的字",
    //         desc: "看起来都一样，这能有什么不同？",
    //         imageUrl: "",
    //         query: "",
    //         extra: {
    //             videoPath: path, // 录屏得到的视频地址
    //             videoTopics: ["文字扫描"], //该字段已经被hashtag_list代替，为保证兼容性，建议两个都填写。
    //             hashtag_list: ["文字扫描"],
    //             video_title: "文字扫描", //生成的默认内容
    //         },
    //         success(res) {
    //              cc.log('分享成功', res);
    //         },
    //         fail(e) {
    //              cc.log('分享失败', e);
    //             if (e.errNo == 21105) {
    //                 tt.showModal({
    //                     title: '分享失败',
    //                     content: '录屏内容过短'
    //                 })
    //             }
    //         },
    //     });
    // }

    showToast(options) {
        tt.showToast({
            title: options.title || '',
            icon: options.icon || "none",
            duration: 2000,
            success(res) {
                 cc.log(`${res}`);
            },
            fail(res) {
                 cc.log(`showToast调用失败`);
            }
        });

    }
}


export class Platform {
    static getIns() {
        if (Config.isMiniGame()) {
            if (Config.isWechat()) {
                return Wechat.getIns();
            } else if (Config.isByteDance()) {
                return ByteDance.getIns();
            }
        } else {
            return Wechat.getIns();
        }
    }
}

export default {
    platform: Platform.getIns(),
}