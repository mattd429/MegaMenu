!function(e) {
    function t(o) {
        if (n[o])
            return n[o].exports;
        var i = n[o] = {
            i: o,
            l: !1,
            exports: {}
        };
        return e[o].call(i.exports, i, i.exports, t), i.l = !0, i.exports
    }
    var n = {};
    t.m = e, t.c = n, t.d = function(e, n, o) {
        t.o(e, n) || Object.defineProperty(e, n, {
            configurable: !1,
            enumerable: !0,
            get: o
        })
    }, t.n = function(e) {
        var n = e && e.__esModule ? function() {
            return e.default
        } : function() {
            return e
        };
        return t.d(n, "a", n), n
    }, t.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, t.p = "", t(t.s = 0)
}([function(e, t, n) {
    "use strict";
    try {
        !function() {
            function e(e) {
                var t = document.createElement("a");
                return t.href = e, t
            }
            function t(e) {
                return null != e && (e = e.toLowerCase(), e.indexOf("luckyorange.com") > -1 || e.indexOf("livestatserver.com") > -1)
            }
            function n(e) {
                if (d)
                    return !1;
                e = e || "cs", clearTimeout(s), d = !0, e && c.hasOwnProperty(e) && (l = c[e]);
                var t = document.location.href.indexOf("#_lo_orz") > -1 || document.location.href.indexOf("luckyorange.com/proxy_html.php") > -1;
                try {
                    window.top && "LO_Heatmap" in window.top && (t = !0)
                } catch (e) {}
                t || window.__lo_cs_added || (window.__lo_cs_added = !0, o(function(t) {
                    var n = window.localStorage;
                    window.__lo_settings = t, t.site_id && (window.__lo_site_id = t.site_id), "cs" === e && t.addons && t.addons.beta && (l = c.beta);
                    var o = n ? n.getItem("lo::dbg_url") : null;
                    if (o && (l = o), !o && t.dont_track && 1 === t.dont_track)
                        return !1;
                    a(l, function() {
                        o && console.log("[LO] w.js: Loaded app", e, "from path", o)
                    })
                }))
            }
            function o(e) {
                if (window.__lo_settings)
                    return e(window.__lo_settings);
                var t = u + "?u=" + encodeURIComponent(document.location.href),
                    n = i();
                n && (window.__lo_site_id = n, t += "&s=" + n), !n && window.Shopify && (t += "&d=" + encodeURIComponent(window.Shopify.shop)), r(t, e)
            }
            function i() {
                var e = null;
                e || !window.__lo_site_id && !window.__wtw_lucky_site_id || (e = window.__lo_site_id || window.__wtw_lucky_site_id), window.Ecwid && (e = window.Ecwid.getAppPublicConfig("lucky-orange"));
                try {
                    window.localStorage.getItem("lo::dbg_site_id") && (e = window.localStorage.getItem("lo::dbg_site_id"))
                } catch (e) {}
                return e || null
            }
            function a(e, t) {
                try {
                    if (!e)
                        return;
                    var n = document.head || document.getElementsByTagName("head")[0] || document.documentElement,
                        o = document.createElement("script");
                    o.async = !0, o.charset = "utf-8", o.type = "text/javascript", o.src = e, o.crossOrigin = "anonymous", o.onload = o.onreadystatechange = function(e, n) {
                        (n || !o.readyState || /loaded|complete/.test(o.readyState)) && (o.onload = o.onreadystatechange = null, "function" == typeof t && t())
                    }, n.appendChild(o)
                } catch (e) {}
            }
            function r(e, t) {
                try {
                    if (window.XMLHttpRequest) {
                        var n = new window.XMLHttpRequest;
                        if ("withCredentials" in n)
                            n.open("GET", e, 1), n.setRequestHeader("X-Requested-With", "XMLHttpRequest"), n.onreadystatechange = function() {
                                n.readyState > 3 && n.responseText && t && t(JSON.parse(n.responseText), n)
                            }, n.withCredentials = !0, n.send();
                        else if (window.XDomainRequest) {
                            var o = new window.XDomainRequest;
                            o.open("GET", e), o.send(), o.onload = function() {
                                t(JSON.parse(o.responseText), o)
                            }
                        }
                    }
                } catch (e) {}
            }
            var d = !1,
                s = 0,
                c = {
                    cs: "https://d10lpsik1i8c69.cloudfront.net/js/clickstream.js?v=43d51d4",
                    beta: "https://storage.googleapis.com/lucky-orange-public/js/clickstream.js",
                    heatmap: "https://d10lpsik1i8c69.cloudfront.net/heatmap/production/bootstrap.js",
                    heatmapBeta: "https://storage.googleapis.com/lucky-orange-public/heatmap/beta/bootstrap.js"
                },
                u = "https://settings.luckyorange.net",
                l = c.cs;
            if (window.opener) {
                !function() {
                    window.addEventListener("message", function(o) {
                        var i = o.origin || o.originalEvent.origin,
                            a = e(i);
                        if (a && t(a.hostname)) {
                            var r = o.data;
                            "LO::APPID" === r.type && n(r.appid)
                        }
                    })
                }(), s = setTimeout(n, 2500);
                var p = {
                    type: "LO::APPID"
                };
                window.opener.postMessage(p, "*")
            } else
                n()
        }()
    } catch (e) {}
}]);

