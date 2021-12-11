/*! Copyright © 2011 - 2021 miHoYo. All Rights Reserved */
(window.webpackJsonp = window.webpackJsonp || []).push([[2], {
    542: function (e, t, n) {
        "use strict";
        n.r(t);
        var i = n(551)
            , s = n(547);
        for (var a in s)
            ["default"].indexOf(a) < 0 && function (e) {
                n.d(t, e, (function () {
                    return s[e]
                }
                ))
            }(a);
        var o = n(188)
            , r = Object(o.a)(s.default, i.a, i.b, !1, null, null, null);
        r.options.__file = "src/main/home/home.vue",
            t.default = r.exports
    },
    544: function (e, t) { },
    546: function (e, t, n) {
        var i = {
            "./zh-cn": 541,
            "./zh-cn.js": 541
        };
        function s(e) {
            var t = a(e);
            return n(t)
        }
        function a(e) {
            if (!n.o(i, e)) {
                var t = new Error("Cannot find module '" + e + "'");
                throw t.code = "MODULE_NOT_FOUND",
                t
            }
            return i[e]
        }
        s.keys = function () {
            return Object.keys(i)
        }
            ,
            s.resolve = a,
            e.exports = s,
            s.id = 546
    },
    547: function (e, t, n) {
        "use strict";
        n.r(t);
        var i = n(548)
            , s = n.n(i);
        for (var a in i)
            ["default"].indexOf(a) < 0 && function (e) {
                n.d(t, e, (function () {
                    return i[e]
                }
                ))
            }(a);
        t.default = s.a
    },
    548: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i = n(128)
            , s = c(n(543))
            , a = c(n(539))
            , o = c(n(540))
            , r = c(n(549));
        function c(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        n(550);
        var l = ["switch_task.mp3", "switch_type.mp3", "close_win.mp3", "open_win.mp3"];
        t.default = {
            name: "home",
            data: function () {
                return {
                    hasClicked: !1,
                    list: [{
                        list: []
                    }],
                    type_list: [],
                    curType: 0,
                    curAnn: -1,
                    curLink: -1,
                    activeAnn: 0,
                    tabHeight: 0,
                    btnExchange: !1,
                    direcType: 0,
                    timeLock: !1,
                    count: 0,
                    step: 0,
                    timer: null,
                    hasGamepad: !1,
                    padType: 0,
                    focusMenu: !0,
                    preScrollTop: 0,
                    preStep: 50,
                    preY: 0,
                    seat: 1,
                    scrollBuffer: 0,
                    allowScroll: {
                        up: !1,
                        down: !0
                    },
                    isPre: "preview" === i.environment,
                    isTest: "test" === i.environment,
                    isAndroid: !1,
                    isIOS: !1,
                    isPc: !1,
                    isPs: !1,
                    lang: "zh-cn",
                    iframe: this.renderIframe(),
                    linkMap: [],
                    deviceType: "mobile",
                    startMove: !1,
                    soundBuf: new Array(l.length),
                    ready: !1,
                    showBanner: !1,
                    bannerLoaded: !1
                }
            },
            computed: {
                annList: function () {
                    return this.list.length ? this.list[this.curType].list : []
                },
                annDetail: function () {
                    var ann_id = 2700
                    for (var ann of this.annList) {
                        if (ann.ann_id === ann_id) {
                            return ann
                        }
                    }

                    return this.annList[0]
                },
                notUseFont: function () {
                    return this.lang.includes("zh") && (this.isIOS || this.isPc)
                },
                langString: function () {
                    return this.lang.includes("ja") ? "Ja" : ""
                }
            },
            created: function () {
                var e = this;
                this.deviceType = s.default.getDeviceType();
                var t = a.default.parse(window.location.search)
                    , n = t.lang
                    , c = t.platform;
                this.lang = (n instanceof Array ? n[0] : n || "zh-cn").toLowerCase(),
                    this.isAndroid = c && "android" === c.toLowerCase(),
                    this.isIOS = c && "ios" === c.toLowerCase(),
                    this.isPc = c && "pc" === c.toLowerCase(),
                    this.isPs = c && c.toLowerCase().includes("ps"),
                    // this.isPre && (document.title = this.lang),
                    this.isIOS || this.isAndroid ? this.setVolume() : setTimeout(this.setVolume, 500),
                    // o.default.fetchAudio({
                    //     audioList: l,
                    //     apiBase: i.webBase
                    // }).then((function (t) {
                    //     e.soundBuf = t,
                    //         console.log(e.soundBuf)
                    // }
                    // )).catch((function (e) {
                    //     console.error(e.message)
                    // }
                    // )),
                    r.default.getList({
                        data: t
                    }).then((function (t) {
                        e.list = t.list,
                            e.type_list = t.type_list,
                            e.curType = t.curType,
                            e.activeAnn = t.activeAnn,
                            e.updateRedPoint(e.checkRedPoint()),
                            e.handleRedPoint(),
                            t.alert && (e.handleAlert(),
                                e.$nextTick((function () {
                                    var t = document.querySelector(".home__menu");
                                    if (t) {
                                        e.getSildeHeight();
                                        var n = Math.floor(e.tabHeight * (e.activeAnn - .14))
                                            , i = t.scrollTop;
                                        e.hasGamepad && (e.curAnn = e.activeAnn),
                                            e.smoothDown(i, n, 10, t)
                                    }
                                }
                                ))),
                            e.ready = !0,
                            e.preloadBanner(t.bannerArr)
                    }
                    )).catch((function (t) {
                        console.error(t.message),
                            e.ready = !0
                    }
                    ))
            },
            mounted: function () {
                var e = this;
                this.handleMounted(),
                    this.getSildeHeight(),
                    miHoYoGameJSSDK.on("enable_joypad_control", (function (t) {
                        var n = t.data;
                        if (n instanceof Object) {
                            var i = n.num
                                , s = n.type
                                , a = n.exchange;
                            i ? (e.padType = s,
                                a && 1 === a ? (e.$gamepad.setCustomMapping("gamepad", {
                                    button_1: 1,
                                    button_2: 0
                                }),
                                    e.btnExchange = !0) : (e.$gamepad.setCustomMapping("gamepad", {
                                        button_1: 0,
                                        button_2: 1
                                    }),
                                        e.btnExchange = !1),
                                e.bindGamepadEvents()) : e.removeGamepadEvents()
                        } else
                            1 === n ? e.bindGamepadEvents() : 0 === n && e.removeGamepadEvents()
                    }
                    )),
                    "development" === i.environment && (this.$gamepad.setCustomMapping("gamepad", {
                        button_1: 1,
                        button_2: 0
                    }),
                        this.btnExchange = !0,
                        this.bindGamepadEvents()),
                    miHoYoGameJSSDK.on("jssdk_close", this.removeGamepadEvents),
                    miHoYoGameJSSDK.on("jssdk_load_url", this.removeGamepadEvents)
            },
            beforeDestroy: function () {
                clearTimeout(this.timer),
                    this.timer = null,
                    o.default.destroyVar(),
                    miHoYoGameJSSDK.clear("jssdk_close"),
                    miHoYoGameJSSDK.clear("jssdk_load_url")
            },
            methods: {
                render: function () { },
                bindEvents: function () {
                    var e = this;
                    document.onkeydown = function (t) {
                        27 === t.keyCode && e.handleClose()
                    }
                },
                bindGamepadEvents: function () {
                    var e = this;
                    this.$gamepad.on("connect", (function (t) {
                        e.hasGamepad = !0,
                            e.curAnn = e.activeAnn,
                            e.focusMenu = !0,
                            console.log("controller " + t.index + " connected!")
                    }
                    )),
                        this.$gamepad.on("disconnect", (function (t) {
                            e.hasGamepad = !1,
                                e.focusMenu = !1,
                                e.resetLinks(),
                                console.log("controller " + t.index + " disconnected!")
                        }
                        )),
                        this.$gamepad.on("press", "shoulder_top_left", (function () {
                            e.curType && (e.playAudio(1),
                                e.curType--,
                                e.resetStatus(),
                                e.handleRead(),
                                e.curAnn = 0)
                        }
                        )),
                        this.$gamepad.on("press", "shoulder_top_right", (function () {
                            e.curType < e.type_list.length - 1 && (e.playAudio(1),
                                e.curType++,
                                e.resetStatus(),
                                e.handleRead(),
                                e.curAnn = 0)
                        }
                        )),
                        this.$gamepad.on("press", "button_2", (function () {
                            if (e.focusMenu)
                                e.playAudio(0),
                                    e.focusMenu = !1,
                                    e.$nextTick(e.getLinkMap);
                            else if (e.curLink > -1) {
                                var t = e.$refs.ann.querySelector(".active");
                                t && t.click && t.click()
                            }
                        }
                        )),
                        this.$gamepad.on("press", "button_1", (function () {
                            e.focusMenu ? e.handleClose() : (e.focusMenu = !0,
                                e.curAnn = e.activeAnn,
                                e.resetLinks(),
                                e.resetArticle())
                        }
                        )),
                        this.$gamepad.on("release", "stick_axis_left", (function () {
                            e.count = 0,
                                e.focusMenu && (e.activeAnn = e.curAnn,
                                    e.handleRead())
                        }
                        )),
                        this.$gamepad.on("hold", "stick_axis_left", (function (t) {
                            var n = t.value[0]
                                , i = t.value[1];
                            if (Math.abs(i).toFixed(2) >= Math.abs(n).toFixed(2))
                                if (e.focusMenu) {
                                    if (e.timeLock)
                                        return;
                                    -1 === e.curAnn ? (e.curAnn = e.activeAnn,
                                        e.scrollMenu(e.curAnn - 2)) : e.curAnn < e.annList.length - 1 && i > 0 ? (e.annList.length > 5 && 1 === e.direcType && e.curAnn > 2 && e.scrollMenu(e.curAnn - 2),
                                            e.curAnn++,
                                            e.direcType = 1) : e.curAnn > 0 && i < 0 && (e.annList.length > 5 && 2 === e.direcType && e.curAnn < e.annList.length - 3 && e.scrollMenu(e.curAnn - 2),
                                                e.curAnn--,
                                                e.direcType = 2);
                                    var s = 400 * Math.pow(.5, e.count) + 50;
                                    e.timeLock = !0,
                                        e.timer = setTimeout((function () {
                                            e.timeLock = !1,
                                                e.count++
                                        }
                                        ), s)
                                } else {
                                    var a = e.linkMap.length;
                                    if (a > 1 && e.curLink > -1 && e.curLink < a - 1 && e.linkMap[e.curLink].min === e.linkMap[e.curLink + 1].min)
                                        return;
                                    if (a > 1 && e.curLink > 0 && e.curLink < a && e.linkMap[e.curLink].max === e.linkMap[e.curLink - 1].max)
                                        return;
                                    if (e.timeLock)
                                        return;
                                    e.allowScroll.down && i > 0 ? e.scrollAnn(1) : e.allowScroll.up && i < 0 && e.scrollAnn(2)
                                }
                        }
                        )),
                        this.$gamepad.on("press", "stick_axis_left", (function (t) {
                            var n = t.value[0]
                                , i = t.value[1];
                            if (Math.abs(i).toFixed(2) >= Math.abs(n).toFixed(2)) {
                                if (!(e.focusMenu || e.allowScroll.up && e.allowScroll.down)) {
                                    var s = e.linkMap.length;
                                    s && (e.curLink < s - 1 && i > 0 ? e.switchLink(e.curLink + 1) : e.curLink > 0 && i < 0 && e.switchLink(e.curLink - 1))
                                }
                            } else
                                e.focusMenu && n > 0 ? (e.playAudio(0),
                                    e.focusMenu = !1,
                                    e.$nextTick(e.getLinkMap)) : !e.focusMenu && n < 0 && (e.focusMenu = !0,
                                        e.curAnn = e.activeAnn,
                                        e.resetLinks())
                        }
                        ))
                },
                removeGamepadEvents: function () {
                    this.$gamepad.off(["connect", "disconnect", "press", "release", "hold"])
                },
                getSildeHeight: function () {
                    if (!this.tabHeight) {
                        var e = document.documentElement.style.fontSize;
                        e && (this.tabHeight = .44 * Number(e.split("px")[0]))
                    }
                },
                getTips: function (e) {
                    return o.default.getLocalText({
                        key: e
                    })
                },
                checkRedPoint: function () {
                    return this.type_list.filter((function (e) {
                        return e.remind_num
                    }
                    )).length > 0
                },
                setVolume: function () {
                    miHoYoGameJSSDK.getGameVolume().then((function (e) {
                        console.log("volume:" + e),
                            o.default.setGain(e)
                    }
                    ))
                },
                playAudio: function (e) {
                    o.default.playAudio(this.soundBuf[e])
                },
                getLinkMap: function () {
                    this.annList.length && (this.annDetail.linkMap ? (this.linkMap = this.annDetail.linkMap,
                        this.initImg()) : (this.loadImg(),
                            this.initLinks()))
                },
                initImg: function () {
                    var e = document.querySelector(".home__article");
                    if (e) {
                        var t = e.getElementsByTagName("img")
                            , n = t.length;
                        if (n)
                            for (var i = 0; i < n; i++)
                                t[i].setAttribute("draggable", "false")
                    }
                },
                preloadBanner: function (e) {
                    var t = this
                        , n = []
                        , i = []
                        , s = e.length;
                    if (s) {
                        for (var a = function (s) {
                            n[s] = new Promise((function (n) {
                                i[s] = new Image,
                                    i[s].onload = function () {
                                        n(i[s])
                                    }
                                    ,
                                    i[s].onerror = function () {
                                        t.bannerLoaded = !0
                                    }
                                    ,
                                    i[s].src = e[s]
                            }
                            ))
                        }, o = 0; o < s; o++)
                            a(o);
                        Promise.all(n).then((function () {
                            t.bannerLoaded = !0
                        }
                        ))
                    } else
                        this.bannerLoaded = !0
                },
                loadImg: function () {
                    var e = this
                        , t = document.querySelector(".home__article");
                    if (t) {
                        var n = t.getElementsByTagName("img")
                            , i = []
                            , s = []
                            , a = n.length;
                        if (a)
                            for (var o = function (t) {
                                n[t].setAttribute("draggable", "false"),
                                    i[t] = new Promise((function (i) {
                                        s[t] = new Image,
                                            s[t].onload = function () {
                                                e.initLinks(),
                                                    i(s[t])
                                            }
                                            ,
                                            s[t].onerror = function () {
                                                e.initLinks()
                                            }
                                            ,
                                            s[t].src = n[t].src
                                    }
                                    ))
                            }, r = 0; r < a; r++)
                                o(r)
                    }
                },
                updateHeight: function (e) {
                    var t = document.querySelector(e);
                    return t ? Math.floor(t.getClientRects()[0].height) : 0
                },
                calHeight: function () {
                    var e = document.querySelector(".home__article-wrap")
                        , t = document.querySelector(".home__article")
                        , n = Math.ceil(e.getClientRects()[0].height);
                    Math.ceil(t.getClientRects()[0].height) < n && (this.allowScroll.up = !1,
                        this.allowScroll.down = !1,
                        console.log("no scrollbar"))
                },
                initLinks: function () {
                    var e = this
                        , t = document.querySelector(".home__article-wrap")
                        , n = document.querySelector(".home__article");
                    if (n && t) {
                        var i = Array.from(n.getElementsByTagName("a"))
                            , s = Math.ceil(t.getClientRects()[0].height)
                            , a = Math.ceil(n.getClientRects()[0].height);
                        this.linkMap = [],
                            i.length && i.forEach((function (t, o) {
                                i[o].setAttribute("draggable", "false");
                                var r = void 0
                                    , c = void 0
                                    , l = t.href
                                    , u = i[o].offsetTop + n.offsetTop + i[o].offsetHeight;
                                r = o < i.length - 1 && u > (c = i[o + 1].offsetTop + n.offsetTop - s) ? c + .5 * (u - c) : u;
                                var h = o ? Math.max(e.linkMap[o - 1].max, i[o].offsetTop + n.offsetTop - s) : i[0].offsetTop + n.offsetTop - s;
                                h = Math.max(0, h),
                                    r = Math.min(a + 3 * n.offsetTop - s + 3, r),
                                    e.linkMap.push({
                                        index: o,
                                        href: l,
                                        min: h,
                                        max: Math.max(r, h)
                                    })
                            }
                            )),
                            this.annDetail.linkMap = this.linkMap
                    }
                },
                handleNext: function () { },
                renderIframe: function () {
                    var e = document.createElement("iframe");
                    return e.id = "YsSDKIframe",
                        e.style.display = "none",
                        document.body.appendChild(e),
                        e
                },
                updateRedPoint: function (e) {
                    o.default.updateRedPoint(e),
                        console.log(e)
                },
                consumeRemind: function () {
                    var e = this.annDetail.ann_id;
                    o.default.consumeRemind({
                        apiBase: i.apiBase,
                        ann_id: e
                    })
                },
                consumeAlertAnn: function () {
                    var e = this.annDetail.ann_id;
                    o.default.consumeAlertAnn({
                        apiBase: i.apiBase,
                        ann_id: e
                    })
                },
                handleRead: function () {
                    this.bannerLoaded || (this.showBanner = !1),
                        this.handleRedPoint(),
                        this.handleAlert(),
                        this.resetArticle()
                },
                handleRedPoint: function () {
                    var e = this;
                    this.annList.length && this.type_list[this.curType].remind_num && this.annDetail.remind && (this.annDetail.remind = 0,
                        this.type_list[this.curType].remind_num--,
                        this.consumeRemind(),
                        this.$nextTick((function () {
                            e.checkRedPoint() || e.updateRedPoint(!1)
                        }
                        )))
                },
                handleAlert: function () {
                    this.annList.length && this.annDetail.alert && (this.annDetail.alert = 0,
                        this.consumeAlertAnn())
                },
                handleMounted: function () {
                    o.default.removeClose()
                },
                handleClose: function () {
                    document.onkeydown = null,
                        this.playAudio(2),
                        miHoYoGameJSSDK.closeWebview()
                },
                requestCmd: function (e) {
                    this.iframe || this.renderIframe(),
                        this.iframe.src = e
                },
                resetStatus: function () {
                    var e = document.querySelector(".home__menu");
                    e && (e.scrollTop = 0),
                        this.activeAnn = 0,
                        this.direcType = 0,
                        this.focusMenu = !0
                },
                resetArticle: function () {
                    var e = document.querySelector(".home__article-wrap");
                    e && (e.scrollTop = 0),
                        this.preScrollTop = 0,
                        this.linkMap = [],
                        this.curLink = -1,
                        this.allowScroll.up = !1,
                        this.allowScroll.down = !0
                },
                scrollMenu: function (e) {
                    var t = document.querySelector(".home__menu");
                    if (t) {
                        this.getSildeHeight();
                        var n = Math.floor(this.tabHeight * (e - .14))
                            , i = t.scrollTop;
                        n > i ? this.smoothDown(i, n, 10, t) : this.smoothUp(i, n, 10, t)
                    }
                },
                scrollAnn: function (e) {
                    var t = this
                        , n = document.querySelector(".home__article-wrap");
                    if (n) {
                        var i = n.scrollTop
                            , s = Math.floor(50 * (1 - Math.pow(.97, ++this.count)));
                        i > this.preScrollTop ? (this.allowScroll.up = !0,
                            i - this.preScrollTop < this.preStep - .1 ? (++this.scrollBuffer > 4 && (this.allowScroll.down = !1),
                                s = i - this.preScrollTop) : this.scrollBuffer = 0) : i === this.preScrollTop ? ++this.scrollBuffer > 4 && (i ? (this.allowScroll.up = !0,
                                    this.allowScroll.down = !1) : (this.allowScroll.up = !1,
                                        this.allowScroll.down = !0)) : (this.allowScroll.down = !0,
                                            this.preScrollTop - i < this.preStep - .1 ? (++this.scrollBuffer > 4 && (this.allowScroll.up = !1),
                                                s = this.preScrollTop - i) : this.scrollBuffer = 0),
                            this.preStep = s,
                            1 === e ? (this.preScrollTop = i,
                                this.smoothDown(i, i + s, s, n)) : 2 === e && (this.preScrollTop = i,
                                    this.smoothUp(i, i - s, s, n)),
                            this.$nextTick((function () {
                                var e = t.linkMap.filter((function (e) {
                                    return e.min <= i && (e.max > i || e.max === i && e.min === e.max && e.index === t.curLink)
                                }
                                ))
                                    , n = e.length ? e[0].index : -1;
                                t.switchLink(n)
                            }
                            ))
                    }
                },
                switchLink: function (e) {
                    var t = Array.from(document.querySelector(".home__article-wrap").getElementsByTagName("a"));
                    this.curLink !== e && (this.curLink > -1 && t[this.curLink].classList.remove("active"),
                        e > -1 && t[e].classList.add("active"),
                        this.curLink = e)
                },
                smoothDown: function (e, t, n, i) {
                    var s = this
                        , a = e
                        , o = t;
                    a < o ? (a += n,
                        i.scrollTop = a,
                        setTimeout((function () {
                            return s.smoothDown(a, o, n, i)
                        }
                        ), 5)) : i.scrollTop = o
                },
                smoothUp: function (e, t, n, i) {
                    var s = this
                        , a = e
                        , o = t;
                    a > o ? (a -= n,
                        i.scrollTop = a,
                        setTimeout((function () {
                            return s.smoothUp(a, o, n, i)
                        }
                        ), 5)) : i.scrollTop = o
                },
                switchType: function (e) {
                    e.target.className.indexOf("home__tab") > -1 && e.target.dataset.index && (this.playAudio(1),
                        this.curType = Number(e.target.dataset.index),
                        this.resetStatus(),
                        this.handleRead(),
                        this.curAnn = -1,
                        this.$nextTick(this.getLinkMap))
                },
                switchAnn: function (e) {
                    if (!this.startMove && e.target.className.indexOf("home__intro") > -1 && e.target.dataset.index) {
                        this.playAudio(0);
                        var t = Number(e.target.dataset.index);
                        this.activeAnn = t,
                            this.handleRead(),
                            this.$nextTick(this.getLinkMap)
                    }
                },
                resetLinks: function () {
                    var e = document.querySelector(".home__article");
                    if (e) {
                        var t = Array.from(e.getElementsByTagName("a"));
                        t.length && t.forEach((function (e, n) {
                            t[n].classList.remove("active")
                        }
                        ))
                    }
                },
                overAnn: function (e) {
                    if (!this.startMove && (this.focusMenu = !0,
                        this.resetLinks(),
                        e.target.className.indexOf("home__intro") > -1 && e.target.dataset.index)) {
                        var t = Number(e.target.dataset.index);
                        this.curAnn = t
                    }
                },
                outAnn: function (e) {
                    e.target.className.indexOf("home__intro") > -1 && e.target.dataset.index && (this.curAnn = -1)
                },
                downAnn: function (e) {
                    this.startMove = !0,
                        this.preY = e.clientY
                },
                upAnn: function () {
                    this.startMove = !1,
                        this.preY = 0,
                        this.resetSeat()
                },
                moveAnn: function (e) {
                    if (this.startMove && this.annList.length > 5) {
                        this.curAnn = -1;
                        var t = document.querySelector(".home__menu");
                        if (!t)
                            return;
                        this.getSildeHeight();
                        var n = Math.floor(t.getClientRects()[0].height)
                            , i = this.tabHeight * (this.annList.length + .18) - n
                            , s = this.preY - e.clientY;
                        s < 0 && 0 === t.scrollTop ? this.seat >= .5 * n ? this.upAnn() : this.seat -= s : s > 0 && t.scrollTop >= i ? this.seat >= .5 * n ? this.upAnn() : (this.seat += s,
                            t.scrollTop += s) : t.scrollTop += s,
                            this.preY = e.clientY
                    }
                },
                downArticle: function (e) {
                    this.startMove = !0,
                        this.preY = e.clientY
                },
                upArticle: function () {
                    this.startMove = !1,
                        this.preY = 0
                },
                moveArticle: function (e) {
                    if (this.startMove) {
                        var t = document.querySelector(".home__article-wrap");
                        if (!t)
                            return;
                        var n = 2 * (this.preY - e.clientY);
                        t.scrollTop += n,
                            this.preY = e.clientY
                    }
                },
                resetSeat: function () {
                    this.seat < 10 ? this.seat = 1 : (this.seat -= 10,
                        setTimeout(this.resetSeat, 1))
                },
                handleLinkClick: function (e) {
                    var t = this;
                    "A" === e.target.nodeName && (this.hasClicked = !0,
                        setTimeout((function () {
                            t.hasClicked = !1
                        }
                        ), 1e3))
                }
            }
        }
    },
    549: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i = Object.assign || function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var i in n)
                    Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i])
            }
            return e
        }
            , s = n(545)
            , a = n(128)
            , o = c(n(191))
            , r = c(n(540));
        function c(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        var l = c(n(539)).default.parse(window.location.search)
            , u = l.from
            , h = l.preview_ann_id;
        t.default = {
            getList: function () {
                return r.default.fetchAnnouceNew({
                    environment: a.environment,
                    apiBase: a.apiBase,
                    cdnBase: a.cdnBase,
                    useFull: a.useFull
                }).then((function (e) {
                    return e.curType = 0,
                        e.activeAnn = 0,
                        e.bannerArr = [],
                        e.list.forEach((function (t, n) {
                            var i = 0;
                            t.list.forEach((function (t, s) {
                                e.list[n].list[s].content = t.content.replace(/(&lt;t class="t_.*?&gt;)(.*?)(&lt;\/t&gt;)/gi, (function (t, n, i) {
                                    var s = (n.includes("t_lc") ? 60 * (e.timezone || 8) : 480) - (0,
                                        o.default)().utcOffset();
                                    return "<span>" + (0,
                                        o.default)(i).subtract(s, "m").format("YYYY/MM/DD HH:mm") + "</span>"
                                }
                                )),
                                    "production" !== a.environment && "op" === u ? Number(h) === Number(t.ann_id) && (e.curType = n,
                                        e.activeAnn = s,
                                        e.alert = !1) : e.alert && Number(t.ann_id) === Number(e.alert_id) && (e.curType = n,
                                            e.activeAnn = s),
                                    t.remind && (i += 1),
                                    t.banner && e.bannerArr.push(t.banner)
                            }
                            )),
                                e.type_list[n].remind_num = i
                        }
                        )),
                        e
                }
                ))
            },
            consumeRemind: function () {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
                    , t = function (e) {
                        return i({
                            game: "hk4e"
                        }, e)
                    }
                    , n = function (e) {
                        return e
                    };
                return (0,
                    s.get)("/api/consumeRemind", i({}, e, {
                        loading: !1
                    }), t, n)
            },
            consumeAlertAnn: function () {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
                    , t = function (e) {
                        return i({
                            game: "hk4e"
                        }, e)
                    }
                    , n = function (e) {
                        return e
                    };
                return (0,
                    s.get)("/api/consumeAlertAnn", i({}, e, {
                        loading: !1
                    }), t, n)
            }
        }
    },
    550: function (e, t, n) { },
    551: function (e, t, n) {
        "use strict";
        n.d(t, "a", (function () {
            return i
        }
        )),
            n.d(t, "b", (function () {
                return s
            }
            ));
        var i = function () {
            var e = this
                , t = e.$createElement
                , n = e._self._c || t;
            return n("div", {
                staticClass: "home__bg",
                class: {
                    home__bg__ps4: e.isPs
                }
            }, [n("div", {
                staticClass: "home",
                class: [e.isPre ? "useWebFont" : e.isAndroid || e.isPc ? "use" + e.langString + "Font" : "use" + e.langString + "IOSFont", e.annList.length ? "" : "empty"],
                style: {
                    pointerEvents: e.hasGamepad ? "none" : "auto"
                }
            }, [n("div", {
                staticClass: "home__main"
            }, [n("div", {
                staticClass: "home__header-wrap"
            }, [n("div", {
                staticClass: "home__header"
            }, [n("ul", {
                staticClass: "home__tabs",
                class: {
                    "home__tabs-gamepad": e.hasGamepad,
                    home__tabs__xbox: !e.isPs && 2 === e.padType
                },
                on: {
                    click: e.switchType
                }
            }, e._l(e.type_list, (function (t, i) {
                return n("li", {
                    key: "type" + t.id,
                    staticClass: "home__tab",
                    class: {
                        "home__tab--active": e.curType === i
                    },
                    attrs: {
                        "data-index": i
                    }
                }, [t.remind_num ? n("div", {
                    staticClass: "home__tab__dot"
                }) : e._e(), e._v(" "), n("p", {
                    staticClass: "home__tab-text",
                    attrs: {
                        "data-index": i
                    },
                    domProps: {
                        innerHTML: e._s(t.mi18n_name)
                    }
                })])
            }
            )), 0), e._v(" "), e.isPs || e.hasGamepad ? e._e() : n("button", {
                staticClass: "home__close",
                on: {
                    click: e.handleClose
                }
            })])]), e._v(" "), e.annList.length ? n("div", {
                staticClass: "home__content"
            }, [n("div", {
                staticClass: "home__menu-wrap"
            }, [n("ul", {
                ref: "menu",
                staticClass: "home__menu home__swiper noScrollBar",
                on: {
                    click: e.switchAnn,
                    mouseover: e.overAnn,
                    mouseout: e.outAnn,
                    mouseleave: e.upAnn,
                    mousedown: e.downAnn,
                    mouseup: e.upAnn,
                    mousemove: e.moveAnn
                }
            }, [n("li", {
                staticClass: "home__slide-seat",
                style: {
                    height: e.seat + "px"
                }
            }), e._v(" "), e._l(e.annList, (function (t, i) {
                return n("li", {
                    key: "ann" + t.ann_id,
                    staticClass: "home__slide"
                }, [n("div", {
                    staticClass: "home__menu-item",
                    class: {
                        "home__menu-item--unread": t.remind,
                        "home__menu-item--active": e.activeAnn === i,
                        "home__menu-item--current": "pc" === e.deviceType && e.curAnn === i
                    }
                }, [t.tag_icon ? n("img", {
                    staticClass: "home__tag",
                    attrs: {
                        src: t.tag_icon,
                        draggable: "false"
                    }
                }) : e._e(), e._v(" "), n("div", {
                    staticClass: "home__intro",
                    class: {
                        "home__intro--active": e.activeAnn === i
                    }
                }, [n("p", {
                    domProps: {
                        innerHTML: e._s(t.subtitle)
                    }
                })]), e._v(" "), n("div", {
                    staticClass: "home__intro--click",
                    class: {
                        "home__intro--current": "pc" === e.deviceType && e.curAnn === i && e.focusMenu
                    },
                    attrs: {
                        "data-index": i
                    }
                })])])
            }
            )), e._v(" "), n("li", {
                staticClass: "home__slide-seat",
                style: {
                    height: e.seat + "px"
                }
            })], 2)]), e._v(" "), n("div", {
                staticClass: "home__right",
                class: {
                    "home__right--active": !e.focusMenu && e.curLink < 0
                }
            }, [n("div", {
                ref: "ann",
                staticClass: "home__article-wrap",
                class: {
                    preventClick: e.hasClicked
                },
                on: {
                    mousedown: e.downArticle,
                    mouseup: e.upArticle,
                    mouseleave: e.upArticle,
                    mousemove: e.moveArticle,
                    click: e.handleLinkClick
                }
            }, [e.annList.length ? n("div", {
                staticClass: "home__article"
            }, [n("h1", {
                staticClass: "home__title",
                domProps: {
                    innerHTML: e._s(e.activeAnn > -1 && e.annDetail.title)
                }
            }), e._v(" "), e.annDetail.banner ? n("img", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: e.showBanner,
                    expression: "showBanner"
                }],
                staticClass: "home__banner",
                attrs: {
                    src: e.annDetail.banner
                },
                on: {
                    load: function (t) {
                        e.showBanner = !0
                    }
                }
            }) : e._e(), e._v(" "), n("div", {
                domProps: {
                    innerHTML: e._s(e.annDetail.content)
                }
            })]) : e._e()]), e._v(" "), n("div", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: e.hasGamepad,
                    expression: "hasGamepad"
                }],
                staticClass: "home__control",
                class: {
                    home__control__xbox: !e.isPs && 2 === e.padType
                }
            }, [n("p", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: e.focusMenu || e.curLink > -1,
                    expression: "focusMenu || curLink > -1"
                }],
                class: e.btnExchange ? "last" : "first"
            }, [e._v(e._s(e.focusMenu ? e.getTips("ok") : -1 === e.curLink ? "" : e.getTips("go")))]), e._v(" "), n("p", {
                class: e.btnExchange ? "first" : "last"
            }, [e._v(e._s(e.focusMenu ? e.getTips("close") : e.getTips("back")))])])])]) : e.ready ? n("div", {
                staticClass: "home__empty"
            }, [n("h1", [e._v(e._s(e.getTips("nodata")))]), e._v(" "), n("p", [e._v(e._s(e.getTips("somewhere")))])]) : e._e()])])])
        }
            , s = [];
        i._withStripped = !0
    }
}]);
