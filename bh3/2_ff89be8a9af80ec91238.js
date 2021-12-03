/*! Copyright © 2011 - 2021 miHoYo. All Rights Reserved */
(window.webpackJsonp = window.webpackJsonp || []).push([[2], {
    489: function (n, t, e) {
        "use strict";
        e.r(t);
        var i = e(506)
            , a = e(493);
        for (var r in a)
            ["default"].indexOf(r) < 0 && function (n) {
                e.d(t, n, (function () {
                    return a[n]
                }
                ))
            }(r);
        var s = e(117)
            , o = Object(s.a)(a.default, i.a, i.b, !1, null, null, null);
        o.options.__file = "src/main/home/home.vue",
            t.default = o.exports
    },
    490: function (n, t) { },
    492: function (n, t, e) {
        var i = {
            "./zh-cn": 488,
            "./zh-cn.js": 488
        };
        function a(n) {
            var t = r(n);
            return e(t)
        }
        function r(n) {
            if (!e.o(i, n)) {
                var t = new Error("Cannot find module '" + n + "'");
                throw t.code = "MODULE_NOT_FOUND",
                t
            }
            return i[n]
        }
        a.keys = function () {
            return Object.keys(i)
        }
            ,
            a.resolve = r,
            n.exports = a,
            a.id = 492
    },
    493: function (n, t, e) {
        "use strict";
        e.r(t);
        var i = e(494)
            , a = e.n(i);
        for (var r in i)
            ["default"].indexOf(r) < 0 && function (n) {
                e.d(t, n, (function () {
                    return i[n]
                }
                ))
            }(r);
        t.default = a.a
    },
    494: function (n, t, e) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i = c(e(487))
            , a = c(e(499))
            , r = c(e(500))
            , s = c(e(502))
            , o = e(77);
        function c(n) {
            return n && n.__esModule ? n : {
                default: n
            }
        }
        e(505);
        var u = ["BH3_Generic_Select.mp3", "BH3_Tab_Select.mp3", "BH3_Window_Close.mp3", "BH3_Window_Open.mp3"]
            , l = null
            , d = null;
        t.default = {
            name: "home",
            components: {
                innerAnn: r.default,
                outerAnn: s.default
            },
            data: function () {
                return {
                    level: i.default.getUrlParam().level || "",
                    nepType: parseInt(i.default.getUrlParam().nep_type) || 0,
                    nepIndex: parseInt(i.default.getUrlParam().nep_index) || 0,
                    annId: parseInt(i.default.getUrlParam().ann_id) || 0,
                    isIOS: !1,
                    isAndroid: !1,
                    list: [{
                        list: []
                    }],
                    type_list: [],
                    hasLogin: !1,
                    moth: "",
                    day: "",
                    soundBuf: new Array(u.length),
                    renderAnnPromise: null
                }
            },
            computed: {},
            created: function () {
                var n = this;
                this.registerSwBroadCast();
                var t = i.default.getUrlParam()
                    , e = t.authkey
                    , a = t.platform
                    , r = t.uid
                    , s = t.region;
                this.hasLogin = !!e || !!r,
                    this.isIOS = a && "ios" === a.toLowerCase(),
                    this.isAndroid = a && "android" === a.toLowerCase(),
                    this.$mia.updateUid({
                        uid: r,
                        region: s
                    }),
                    this.$mia.trackEvent("notice-1", "loading_page", "home", "", {
                        level: this.level
                    }),
                    i.default.setGain(.3),
                    i.default.fetchAudio({
                        audioList: u,
                        apiBase: o.webBase,
                        platform: a
                    }).then((function (t) {
                        n.soundBuf = t,
                            console.log(n.soundBuf)
                    }
                    )).catch((function (n) {
                        console.error(n.message)
                    }
                    ))
            },
            mounted: function () {
                i.default.removeClose(),
                    this.bindEvents(),
                    this.renderAnnPromise = this.getAnn().then(this.renderAnn)
            },
            beforeDestroy: function () {
                this.removeEvents()
            },
            methods: {
                render: function () { },
                bindEvents: function () {
                    this.isAndroid || this.isIOS ? document.body.addEventListener("click", this.onBodyClick) : document.body.addEventListener("mousedown", this.onBodyClick),
                        window.miHoYoGameJSSDK.on("jssdk_open_url", (function () {
                            return setTimeout(window.miHoYoGameJSSDK.closeWebview, 0)
                        }
                        ))
                },
                removeEvents: function () {
                    this.isAndroid || this.isIOS ? document.body.removeEventListener("click", this.onBodyClick) : document.body.removeEventListener("mousedown", this.onBodyClick)
                },
                handleTouchStart: function () { },
                onBodyClick: function (n) {
                    var t = n.target
                        , e = t.tagName
                        , i = t.className;
                    "body" !== e.toLowerCase() && "home" !== i && "innerann" !== i || (this.$gemit("bodyClick"),
                        this.handleClose())
                },
                playAudio: function (n) {
                    i.default.playAudio(this.soundBuf[n])
                },
                handleClose: function () {
                    this.playAudio(2),
                        setTimeout(window.miHoYoGameJSSDK.closeWebview, 500)
                },
                getAnn: function () {
                    return this.getAnnList().then(this.getAnnContent)
                },
                getAnnList: function () {
                    return a.default.getList().then((function (n) {
                        return l = n,
                            n
                    }
                    ))
                },
                getAnnContent: function (n) {
                    return a.default.getContent(n).then((function (n) {
                        return d = n.contentData,
                            n.list
                    }
                    ))
                },
                renderAnn: function (n, t) {
                    console.log("### renderAnn ### list.t: ", n.t);

                    if (this.annId > 0) {
                        let find = false;
                        for (let index = 0; index < n.list.length; index++) {
                            this.nepType = index;
                            const element = n.list[index];
                            for (let indexDetail = 0; indexDetail < element.list.length; indexDetail++) {
                                this.nepIndex = indexDetail;
                                const elementDetail = element.list[indexDetail];
                                if (elementDetail.ann_id === this.annId) {
                                    find = true;
                                    break
                                }
                            }
                            if (find) {
                                break
                            }
                        }
                        if (!find) {
                            this.nepType = 0;
                            this.nepIndex = 0;
                        }
                    }

                    n.curType = this.nepType;
                    n.curAnn = this.nepIndex;
                    var e = this.$refs.inner;
                    this.date = n.date,
                        this.list = n.list,
                        this.type_list = n.type_list,
                        e && (t ? e.menuSwiper && e.menuSwiper.update() : setTimeout(e.initSwiper, 0),
                            this.hasLogin && this.$nextTick((function () {
                                e.preloadBanner(n.bannerArr),
                                    e.initIndex(n.curType, n.curAnn),
                                    e.updateRedPoint(e.checkRedPoint()),
                                    e.handleRedPoint(),
                                    n.alert && setTimeout((function () {
                                        e.handleAlert(),
                                            e.scrollMenu()
                                    }
                                    ), 0)
                            }
                            ))),
                        this.$mia.trackEvent("notice-3", "enter_page", this.list[n.curType].list[n.curAnn].title, "", {
                            level: this.level,
                            section_name: this.list[n.curType].type_label,
                            tag_info: this.list[n.curType].list[n.curAnn].tag_label,
                            ann_id: this.list[n.curType].list[n.curAnn].ann_id
                        })
                },
                registerSwBroadCast: function () {
                    var n = this;
                    "serviceWorker" in navigator && navigator.serviceWorker.ready.then((function () {
                        navigator.serviceWorker.addEventListener("message", (function (t) {
                            return n.handleSwBroadCast(t)
                        }
                        ))
                    }
                    ))
                },
                handleSwBroadCast: function (n) {
                    if ("mihoyo-sw-broadcast-update" === n.data.meta && "UPDATE_CACHE" === n.data.type) {
                        var t = n.data.payload
                            , e = void 0 === t ? {} : t
                            , r = e.updatedURL.split("?")[0];
                        console.log("response: ", e.response),
                            r.endsWith("/announcement/api/getAnnContent") && e.response && (d = e.response.data,
                                l ? this.renderAnn(a.default.formatData(i.default.listModify(l, d)), !0) : console.log("getAnnListRes err:", l))
                    }
                }
            }
        }
    },
    495: function (n, t, e) {
        "use strict";
        e.r(t);
        var i = e(496)
            , a = e.n(i);
        for (var r in i)
            ["default"].indexOf(r) < 0 && function (n) {
                e.d(t, n, (function () {
                    return i[n]
                }
                ))
            }(r);
        t.default = a.a
    },
    496: function (n, t, e) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i, a = e(77), r = e(487), s = (i = r) && i.__esModule ? i : {
            default: i
        };
        e(501);
        var o = -1;
        t.default = {
            name: "innerAnn",
            data: function () {
                return {
                    level: s.default.getUrlParam().level || "",
                    hasClicked: !1,
                    curType: 0,
                    curAnn: 0,
                    count: 0,
                    showBanner: !1,
                    bannerLoaded: !1,
                    preY: 0,
                    startMove: !1
                }
            },
            props: {
                date: {
                    type: String,
                    default: ""
                },
                typeList: {
                    type: Array,
                    default: function () {
                        return []
                    }
                },
                list: {
                    type: Array,
                    default: function () {
                        return [{
                            list: []
                        }]
                    }
                }
            },
            computed: {
                annType: function () {
                    return this.list.length ? this.list[this.curType].type_label : ""
                },
                annList: function () {
                    return this.list.length ? this.list[this.curType].list : []
                },
                annDetail: function () {
                    return this.annList[this.curAnn] || {}
                }
            },
            watch: {
                curType: function (n) {
                    if (this.list.length) {
                        var t = (this.list[n].list || [])[this.curAnn] || {};
                        o = t.ann_id || -1
                    }
                },
                curAnn: function (n) {
                    var t = this.annList[n] || {};
                    o = t.ann_id || -1
                }
            },
            created: function () {
                this.$gon("bodyClick", this.trackExit)
            },
            mounted: function () { },
            activated: function () { },
            deactivated: function () { },
            beforeDestroy: function () {
                this.$goff("bodyClick", this.trackExit)
            },
            methods: {
                initSwiper: function () {
                    var n = Number(document.documentElement.style.fontSize.split("px")[0])
                        , t = Number(.09 * n);
                    try {
                        var e = window.Swiper;
                        this.menuSwiper = new e(".swiper-container", {
                            direction: "vertical",
                            spaceBetween: t,
                            slidesPerView: 6,
                            freeMode: !0,
                            mousewheel: !0
                        })
                    } catch (n) {
                        console.error(n)
                    }
                },
                playAudio: function (n) {
                    this.$emit("play", n)
                },
                initIndex: function (n, t) {
                    o < 0 ? (this.curType = n,
                        this.curAnn = t) : this.curAnn = Math.max(this.annList.findIndex((function (n) {
                            return Number(n.ann_id) === Number(o)
                        }
                        )), 0)
                },
                scrollMenu: function () {
                    this.menuSwiper && this.menuSwiper.slideTo(this.curAnn)
                },
                switchType: function (n) {
                    var t = this
                        , e = n.target
                        , i = e.className
                        , a = e.dataset;
                    if (i.includes("click") && a.index) {
                        var r = Number(a.index);
                        this.curType !== r && (this.playAudio(1),
                            this.trackExit(),
                            this.curType = Number(a.index),
                            this.$nextTick((function () {
                                t.menuSwiper && (t.menuSwiper.update(),
                                    t.menuSwiper.slideTo(0))
                            }
                            )),
                            this.$mia.trackEvent("notice-2", "choose_section", this.annType, "", {
                                level: this.level
                            }),
                            this.switchAnn({
                                target: {
                                    className: "click",
                                    dataset: {
                                        index: "0"
                                    }
                                }
                            }, !0))
                    }
                },
                switchAnn: function (n, t) {
                    var e = n.target
                        , i = e.className
                        , a = e.dataset;
                    if (!this.startMove && i.includes("click") && a.index) {
                        var r = Number(a.index);
                        (this.curAnn !== r || t) && (t || (this.playAudio(0),
                            this.trackExit()),
                            this.$refs.ann && (this.$refs.ann.scrollTop = 0),
                            this.curAnn = r,
                            this.handleRead(),
                            this.trackEnter())
                    }
                },
                preloadBanner: function (n) {
                    var t = this
                        , e = []
                        , i = []
                        , a = n.length;
                    if (a) {
                        for (var r = function (a) {
                            e[a] = new Promise((function (e) {
                                i[a] = new Image,
                                    i[a].onload = function () {
                                        e(i[a])
                                    }
                                    ,
                                    i[a].onerror = function () {
                                        t.bannerLoaded = !0
                                    }
                                    ,
                                    i[a].src = n[a]
                            }
                            ))
                        }, s = 0; s < a; s++)
                            r(s);
                        Promise.all(e).then((function () {
                            t.bannerLoaded = !0
                        }
                        ))
                    } else
                        this.bannerLoaded = !0
                },
                handleRead: function () {
                    this.bannerLoaded || (this.showBanner = !1),
                        this.handleRedPoint(),
                        this.handleAlert(),
                        this.resetArticle()
                },
                handleAlert: function () {
                    this.annList.length && this.annDetail.alert && (this.annDetail.alert = 0,
                        this.consumeAlertAnn())
                },
                handleRedPoint: function () {
                    var n = this;
                    this.annList.length && this.annDetail.remind && (this.annDetail.remind = 0,
                        this.typeList[this.curType].remind_num -= 1,
                        this.consumeRemind(),
                        this.$nextTick((function () {
                            n.checkRedPoint() || n.updateRedPoint(!1)
                        }
                        )))
                },
                trackEnter: function () {
                    var n = this.annDetail || {}
                        , t = n.title
                        , e = n.tag_label
                        , i = n.ann_id;
                    this.$mia.trackEvent("notice-3", "enter_page", t, "", {
                        level: this.level,
                        section_name: this.annType,
                        tag_info: e,
                        ann_id: i
                    })
                },
                trackExit: function () {
                    var n = this.annDetail || {}
                        , t = n.title
                        , e = n.tag_label
                        , i = n.ann_id;
                    this.$mia.trackEvent("notice-4", "exit_page", t, "", {
                        level: this.level,
                        section_name: this.annType,
                        tag_info: e,
                        ann_id: i
                    })
                },
                handleClose: function () {
                    this.trackExit(),
                        this.$emit("close")
                },
                consumeRemind: function () {
                    var n = this.annDetail.ann_id;
                    s.default.consumeRemind({
                        apiBase: a.apiBase,
                        ann_id: n
                    })
                },
                consumeAlertAnn: function () {
                    var n = this.annDetail.ann_id;
                    s.default.consumeAlertAnn({
                        apiBase: a.apiBase,
                        ann_id: n
                    })
                },
                checkRedPoint: function () {
                    return this.typeList.filter((function (n) {
                        return n.remind_num
                    }
                    )).length > 0
                },
                updateRedPoint: function (n) {
                    s.default.updateRedPoint(n),
                        console.log("if show redpoint: " + n)
                },
                resetArticle: function () {
                    var n = document.querySelector(".innerann__article__wrap");
                    n && (n.scrollTop = 0)
                },
                downArticle: function (n) {
                    this.startMove = !0,
                        this.preY = n.clientY
                },
                upArticle: function () {
                    this.startMove = !1,
                        this.preY = 0
                },
                moveArticle: function (n) {
                    if (this.startMove) {
                        var t = document.querySelector(".innerann__article-wrap");
                        if (!t)
                            return;
                        var e = 2 * (this.preY - n.clientY);
                        t.scrollTop += e,
                            this.preY = n.clientY
                    }
                },
                handleLinkClick: function (n) {
                    var t = this;
                    "A" === n.target.nodeName && (this.hasClicked = !0,
                        setTimeout((function () {
                            t.hasClicked = !1
                        }
                        ), 1e3))
                }
            }
        }
    },
    497: function (n, t, e) {
        "use strict";
        e.r(t);
        var i = e(498)
            , a = e.n(i);
        for (var r in i)
            ["default"].indexOf(r) < 0 && function (n) {
                e.d(t, n, (function () {
                    return i[n]
                }
                ))
            }(r);
        t.default = a.a
    },
    498: function (n, t, e) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
            e(504),
            t.default = {
                name: "outerAnn",
                data: function () {
                    return {
                        hasClicked: !1,
                        curAnn: -1,
                        preY: 0,
                        startMove: !1
                    }
                },
                props: {
                    list: {
                        type: Array,
                        default: function () {
                            return [{
                                list: []
                            }]
                        }
                    }
                },
                computed: {
                    annList: function () {
                        var n = this.list.find((function (n) {
                            return "游戏公告" === n.type_label
                        }
                        ));
                        return n ? n.list : []
                    },
                    annDetail: function () {
                        return this.curAnn > -1 ? this.annList[this.curAnn] : []
                    }
                },
                created: function () { },
                mounted: function () { },
                activated: function () { },
                deactivated: function () { },
                methods: {
                    playAudio: function (n) {
                        this.$emit("play", n)
                    },
                    switchAnn: function (n) {
                        var t = n.target
                            , e = t.className
                            , i = t.dataset;
                        !this.startMove && e.includes("click") && i.index && (this.playAudio(0),
                            this.curAnn !== Number(i.index) ? (this.curAnn = Number(i.index),
                                this.$nextTick(this.updatePosition)) : this.curAnn = -1)
                    },
                    updatePosition: function () {
                        var n = document.querySelectorAll(".outerann__item");
                        this.$refs.list.scrollTop = n[this.curAnn].offsetTop
                    },
                    handleClose: function () {
                        this.$emit("close")
                    },
                    downArticle: function (n) {
                        this.startMove = !0,
                            this.preY = n.clientY
                    },
                    upArticle: function () {
                        this.startMove = !1,
                            this.preY = 0
                    },
                    moveArticle: function (n) {
                        if (this.startMove) {
                            var t = document.querySelector(".outerann__list__wrap");
                            if (!t)
                                return;
                            var e = 2 * (this.preY - n.clientY);
                            t.scrollTop += e,
                                this.preY = n.clientY
                        }
                    },
                    handleLinkClick: function (n) {
                        var t = this;
                        "A" === n.target.nodeName && (this.hasClicked = !0,
                            setTimeout((function () {
                                t.hasClicked = !1
                            }
                            ), 1e3))
                    }
                }
            }
    },
    499: function (n, t, e) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i = Object.assign || function (n) {
            for (var t = 1; t < arguments.length; t++) {
                var e = arguments[t];
                for (var i in e)
                    Object.prototype.hasOwnProperty.call(e, i) && (n[i] = e[i])
            }
            return n
        }
            , a = e(491)
            , r = e(77)
            , s = c(e(487))
            , o = c(e(173));
        function c(n) {
            return n && n.__esModule ? n : {
                default: n
            }
        }
        var u = s.default.getUrlParam()
            , l = u.from
            , d = u.preview_ann_id;
        t.default = {
            formatData: function (n) {
                var t = 60 * (n.timezone || 8) - (0,
                    o.default)().utcOffset()
                    , e = (0,
                        o.default)().add(t, "m").valueOf();
                return n.date = (0,
                    o.default)().add(t, "m").format("YYYY/MM/DD"),
                    n.curType = 0,
                    n.curAnn = 0,
                    n.bannerArr = [],
                    n.list.forEach((function (t, i) {
                        var a = 0;
                        t.list.forEach((function (t, s) {
                            var c = (0,
                                o.default)(t.tag_start_time).valueOf()
                                , u = (0,
                                    o.default)(t.tag_end_time).valueOf();
                            (e < c || e > u) && (n.list[i].list[s].tag_label = ""),
                                "production" !== r.environment && "op" === l && Number(d) === Number(t.ann_id) ? (n.curType = i,
                                    n.curAnn = s,
                                    n.alert = !1) : n.alert && Number(t.ann_id) === Number(n.alert_id) && (n.curType = i,
                                        n.curAnn = s),
                                t.remind && (a += 1),
                                t.banner && n.bannerArr.push(t.banner)
                        }
                        )),
                            n.type_list[i].remind_num = a
                    }
                    )),
                    n
            },
            getAnn: function () {
                return s.default.fetchAnnouceNew({
                    environment: r.environment,
                    apiBase: r.apiBase,
                    cdnBase: r.cdnBase,
                    strict: 1
                }).then(this.formatData)
            },
            getList: function () {
                return s.default.fetchAnnouceList({
                    environment: r.environment,
                    apiBase: r.apiBase,
                    cdnBase: r.cdnBase
                })
            },
            getContent: function (n) {
                var t = this
                    , e = n.t;
                return new Promise((function (i, a) {
                    s.default.fetchAnnouceContent({
                        environment: r.environment,
                        apiBase: r.apiBase,
                        cdnBase: r.cdnBase,
                        t: e
                    }).then((function (e) {
                        i({
                            list: t.formatData(s.default.listModify(n, e)),
                            contentData: e
                        })
                    }
                    )).catch((function (n) {
                        a(n)
                    }
                    ))
                }
                ))
            },
            consumeRemind: function () {
                var n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
                    , t = function (n) {
                        return i({
                            game: "nxx"
                        }, n)
                    }
                    , e = function (n) {
                        return n
                    };
                return (0,
                    a.get)("/api/consumeRemind", i({}, n, {
                        loading: !1
                    }), t, e)
            },
            consumeAlertAnn: function () {
                var n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
                    , t = function (n) {
                        return i({
                            game: "nxx"
                        }, n)
                    }
                    , e = function (n) {
                        return n
                    };
                return (0,
                    a.get)("/api/consumeAlertAnn", i({}, n, {
                        loading: !1
                    }), t, e)
            }
        }
    },
    500: function (n, t, e) {
        "use strict";
        e.r(t);
        var i = e(507)
            , a = e(495);
        for (var r in a)
            ["default"].indexOf(r) < 0 && function (n) {
                e.d(t, n, (function () {
                    return a[n]
                }
                ))
            }(r);
        var s = e(117)
            , o = Object(s.a)(a.default, i.a, i.b, !1, null, null, null);
        o.options.__file = "src/components/innerAnn/innerAnn.vue",
            t.default = o.exports
    },
    501: function (n, t, e) { },
    502: function (n, t, e) {
        "use strict";
        e.r(t);
        var i = e(508)
            , a = e(497);
        for (var r in a)
            ["default"].indexOf(r) < 0 && function (n) {
                e.d(t, n, (function () {
                    return a[n]
                }
                ))
            }(r);
        var s = e(117)
            , o = Object(s.a)(a.default, i.a, i.b, !1, null, null, null);
        o.options.__file = "src/components/outerAnn/outerAnn.vue",
            t.default = o.exports
    },
    503: function (n, t, e) {
        n.exports = e.p + "images/banner.891ec0cc.png"
    },
    504: function (n, t, e) { },
    505: function (n, t, e) { },
    506: function (n, t, e) {
        "use strict";
        e.d(t, "a", (function () {
            return i
        }
        )),
            e.d(t, "b", (function () {
                return a
            }
            ));
        var i = function () {
            var n = this
                , t = n.$createElement
                , e = n._self._c || t;
            return e("div", {
                staticClass: "home",
                on: {
                    touchstart: n.handleTouchStart
                }
            }, [n.hasLogin ? e("inner-ann", {
                ref: "inner",
                attrs: {
                    "type-list": n.type_list,
                    list: n.list,
                    date: n.date
                },
                on: {
                    play: n.playAudio,
                    close: n.handleClose
                }
            }) : e("outer-ann", {
                ref: "outer",
                attrs: {
                    list: n.list
                },
                on: {
                    play: n.playAudio,
                    close: n.handleClose
                }
            })], 1)
        }
            , a = [];
        i._withStripped = !0
    },
    507: function (n, t, e) {
        "use strict";
        e.d(t, "a", (function () {
            return i
        }
        )),
            e.d(t, "b", (function () {
                return a
            }
            ));
        var i = function () {
            var n = this
                , t = n.$createElement
                , e = n._self._c || t;
            return e("div", {
                staticClass: "innerann"
            }, [e("div", {
                staticClass: "innerann__main"
            }, [e("header", {
                staticClass: "innerann__header"
            }, [e("em", [n._v(n._s(n.date))]), n._v(" "), e("ul", {
                staticClass: "innerann__type-list",
                on: {
                    click: n.switchType
                }
            }, n._l(n.typeList, (function (t, i) {
                return e("li", {
                    key: "type" + t.id,
                    staticClass: "innerann__type-item",
                    class: {
                        "innerann__type-item--active": n.curType === i
                    },
                    attrs: {
                        "data-index": i
                    }
                }, [e("p", {
                    class: {
                        "innerann__type-remind": t.remind_num
                    }
                }, [n._v(n._s(t.mi18n_name))]), n._v(" "), e("div", {
                    staticClass: "click",
                    attrs: {
                        "data-index": i
                    }
                })])
            }
            )), 0), n._v(" "), e("button", {
                staticClass: "innerann__close",
                on: {
                    click: n.handleClose
                }
            })]), n._v(" "), e("div", {
                staticClass: "innerann__body",
                class: {
                    "innerann__body--more": n.annList.length > 5
                }
            }, [e("div", {
                ref: "menu",
                staticClass: "swiper-container innerann__menu noScrollBar",
                on: {
                    click: n.switchAnn
                }
            }, [e("ul", {
                ref: "list",
                staticClass: "swiper-wrapper"
            }, n._l(n.annList, (function (t, i) {
                return e("li", {
                    key: "ann" + t.ann_id,
                    staticClass: "swiper-slide innerann__tab",
                    class: {
                        "innerann__tab--unread": t.remind,
                        "innerann__tab--active": n.curAnn === i
                    }
                }, [e("em", {
                    domProps: {
                        innerHTML: n._s(t.subtitle)
                    }
                }), n._v(" "), t.tag_label ? e("img", {
                    staticClass: "innerann__tag",
                    attrs: {
                        src: t.tag_icon
                    }
                }) : n._e(), n._v(" "), e("div", {
                    staticClass: "click",
                    attrs: {
                        "data-index": i
                    }
                })])
            }
            )), 0)]), n._v(" "), e("div", {
                staticClass: "innerann__content"
            }, [e("div", {
                ref: "ann",
                staticClass: "innerann__article-wrap scrollHack",
                class: {
                    preventClick: n.hasClicked
                },
                on: {
                    mousedown: n.downArticle,
                    mouseup: n.upArticle,
                    mouseleave: n.upArticle,
                    mousemove: n.moveArticle,
                    click: n.handleLinkClick
                }
            }, [n.annList.length ? e("div", {
                staticClass: "innerann__article"
            }, [n.annDetail.title ? e("h1", {
                staticClass: "innerann__title ellipsis"
            }, [n._v(n._s(n.annDetail.title))]) : n._e(), n._v(" "), n.annDetail.banner ? e("div", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: n.showBanner,
                    expression: "showBanner"
                }],
                staticClass: "innerann__banner"
            }, [e("img", {
                attrs: {
                    src: n.annDetail.banner
                },
                on: {
                    load: function (t) {
                        n.showBanner = !0
                    }
                }
            })]) : n._e(), n._v(" "), e("div", {
                staticClass: "article",
                domProps: {
                    innerHTML: n._s(n.annDetail.content)
                }
            })]) : n._e()])])])])])
        }
            , a = [];
        i._withStripped = !0
    },
    508: function (n, t, e) {
        "use strict";
        e.d(t, "a", (function () {
            return i
        }
        )),
            e.d(t, "b", (function () {
                return a
            }
            ));
        var i = function () {
            var n = this
                , t = n.$createElement
                , i = n._self._c || t;
            return i("div", {
                staticClass: "outerann"
            }, [i("div", {
                staticClass: "outerann__body"
            }, [i("h1", {
                staticClass: "outerann__type"
            }, [n._v("游戏公告")]), n._v(" "), i("img", {
                staticClass: "outerann__banner",
                attrs: {
                    src: e(503)
                }
            }), n._v(" "), i("div", {
                ref: "list",
                staticClass: "outerann__list__wrap scrollHack",
                on: {
                    mousedown: n.downArticle,
                    mouseup: n.upArticle,
                    mouseleave: n.upArticle,
                    mousemove: n.moveArticle
                }
            }, [i("ul", {
                staticClass: "outerann__list",
                on: {
                    click: n.switchAnn
                }
            }, n._l(n.annList, (function (t, e) {
                return i("li", {
                    key: "ann" + t.ann_id,
                    staticClass: "outerann__item",
                    class: {
                        "outerann__tab--active": n.curAnn === e
                    }
                }, [i("div", {
                    staticClass: "outerann__title",
                    class: {
                        "outerann__title--active": n.curAnn === e
                    }
                }, [i("h2", [n._v(n._s(t.subtitle))]), n._v(" "), i("div", {
                    staticClass: "click",
                    attrs: {
                        "data-index": e
                    }
                })]), n._v(" "), i("div", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: n.curAnn === e,
                        expression: "curAnn === index"
                    }],
                    staticClass: "outerann__article article",
                    class: {
                        preventClick: n.hasClicked
                    },
                    domProps: {
                        innerHTML: n._s(t.content)
                    },
                    on: {
                        click: n.handleLinkClick
                    }
                })])
            }
            )), 0)])]), n._v(" "), i("button", {
                staticClass: "outerann__close",
                on: {
                    click: n.handleClose
                }
            })])
        }
            , a = [];
        i._withStripped = !0
    }
}]);
