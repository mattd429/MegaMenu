var wheelio_ver = 1.00;
if (typeof WHEELIO_JS_LOADED == "undefined") {
    WHEELIO_JS_LOADED = true;
    (function($fog$404, $fog$0, $fog$1, $fog$2, $fog$3, $fog$4, $fog$5, $fog$6, $fog$7, $fog$8, $fog$9, $fog$10, $fog$11, $fog$12, $fog$13, $fog$14, $fog$15, $fog$16, $fog$17, $fog$18, $fog$19, $fog$20, $fog$21, $fog$22, $fog$23, $fog$24, $fog$25, $fog$26, $fog$27, $fog$28, $fog$29, $fog$30, $fog$31, $fog$32, $fog$33, $fog$34, $fog$35, $fog$36, $fog$37, $fog$38, $fog$39, $fog$40, $fog$41, $fog$42, $fog$43, $fog$44, $fog$45, $fog$46, $fog$47, $fog$48, $fog$49, $fog$50, $fog$51, $fog$52, $fog$53, $fog$54, $fog$55, $fog$56, $fog$57, $fog$58, $fog$59, $fog$60, $fog$61, $fog$62, $fog$63, $fog$64, $fog$65, $fog$66, $fog$67, $fog$68, $fog$69, $fog$70, $fog$71, $fog$72, $fog$73, $fog$74, $fog$75, $fog$76, $fog$77, $fog$78, $fog$79, $fog$80, $fog$81, $fog$82, $fog$83, $fog$84, $fog$85, $fog$86, $fog$87, $fog$88, $fog$89, $fog$90, $fog$91, $fog$92, $fog$93, $fog$94, $fog$95, $fog$96, $fog$97, $fog$98, $fog$99, $fog$100, $fog$101, $fog$102, $fog$103, $fog$104, $fog$105, $fog$106, $fog$107, $fog$108, $fog$109, $fog$110, $fog$111, $fog$112, $fog$113, $fog$114, $fog$115, $fog$116, $fog$117, $fog$118, $fog$119, $fog$120, $fog$121, $fog$122, $fog$123, $fog$124, $fog$125, $fog$126, $fog$127, $fog$128, $fog$129, $fog$130, $fog$131, $fog$132, $fog$133, $fog$134, $fog$135, $fog$136, $fog$137, $fog$138, $fog$139, $fog$140, $fog$141, $fog$142, $fog$143, $fog$144, $fog$145, $fog$146, $fog$147, $fog$148, $fog$149, $fog$150, $fog$151, $fog$152, $fog$153, $fog$154, $fog$155, $fog$156, $fog$157, $fog$158, $fog$159, $fog$160, $fog$161, $fog$162, $fog$163, $fog$164, $fog$165, $fog$166, $fog$167, $fog$168, $fog$169, $fog$170, $fog$171, $fog$172, $fog$173, $fog$174, $fog$175, $fog$176, $fog$177, $fog$178, $fog$179, $fog$180, $fog$181, $fog$182, $fog$183, $fog$184, $fog$185, $fog$186, $fog$187, $fog$188, $fog$189, $fog$190, $fog$191, $fog$192, $fog$193, $fog$194, $fog$195, $fog$196, $fog$197, $fog$198, $fog$199, $fog$200, $fog$201, $fog$202, $fog$203, $fog$204, $fog$205, $fog$206, $fog$207, $fog$208, $fog$209, $fog$210, $fog$211, $fog$212, $fog$213, $fog$214, $fog$215, $fog$216, $fog$217, $fog$218, $fog$219, $fog$220, $fog$221, $fog$222, $fog$223, $fog$224, $fog$225, $fog$226, $fog$227, $fog$228, $fog$229, $fog$230, $fog$231, $fog$232, $fog$233, $fog$234, $fog$235, $fog$236, $fog$237, $fog$238, $fog$239, $fog$240, $fog$241, $fog$242, $fog$243, $fog$244, $fog$245, $fog$246, $fog$247, $fog$248, $fog$249, $fog$250, $fog$251, $fog$252, $fog$253, $fog$254, $fog$255, $fog$256, $fog$257, $fog$258, $fog$259, $fog$260, $fog$261, $fog$262, $fog$263, $fog$264, $fog$265, $fog$266, $fog$267, $fog$268, $fog$269, $fog$270, $fog$271, $fog$272, $fog$273, $fog$274, $fog$275, $fog$276, $fog$277, $fog$278, $fog$279, $fog$280, $fog$281, $fog$282, $fog$283, $fog$284, $fog$285, $fog$286, $fog$287, $fog$288, $fog$289, $fog$290, $fog$291, $fog$292, $fog$293, $fog$294, $fog$295, $fog$296, $fog$297, $fog$298, $fog$299, $fog$300, $fog$301, $fog$302, $fog$303, $fog$304, $fog$305, $fog$306, $fog$307, $fog$308, $fog$309, $fog$310, $fog$311, $fog$312, $fog$313, $fog$314, $fog$315, $fog$316, $fog$317, $fog$318, $fog$319, $fog$320, $fog$321, $fog$322, $fog$323, $fog$324, $fog$325, $fog$326, $fog$327, $fog$328, $fog$329, $fog$330, $fog$331, $fog$332, $fog$333, $fog$334, $fog$335, $fog$336, $fog$337, $fog$338, $fog$339, $fog$340, $fog$341, $fog$342, $fog$343, $fog$344, $fog$345, $fog$346, $fog$347, $fog$348, $fog$349, $fog$350, $fog$351, $fog$352, $fog$353, $fog$354, $fog$355, $fog$356, $fog$357, $fog$358, $fog$359, $fog$360, $fog$361, $fog$362, $fog$363, $fog$364, $fog$365, $fog$366, $fog$367, $fog$368, $fog$369, $fog$370, $fog$371, $fog$372, $fog$373, $fog$374, $fog$375, $fog$376, $fog$377, $fog$378, $fog$379, $fog$380, $fog$381, $fog$382, $fog$383, $fog$384, $fog$385, $fog$386, $fog$387, $fog$388, $fog$389, $fog$390, $fog$391, $fog$392, $fog$393, $fog$394, $fog$395, $fog$396, $fog$397, $fog$398, $fog$399, $fog$400, $fog$401, $fog$402, $fog$403) {

        if ("‮" !== $fog$404) {
            return;
        }

        !function() {
            var e = {},
                o = $fog$0,
                t = function(e) {
                    var o = document[$fog$1]($fog$2)[$fog$0];
                    o[$fog$4][$fog$3](e, o)
                },
                a = function(a, i, n) {
                    var r;
                    i && $fog$5 != typeof i && (n = i[$fog$6] || n, r = i[$fog$7], i = i[$fog$8]);
                    var l,
                        s,
                        c = document[$fog$9]($fog$2),
                        d = !$fog$10,
                        u = function() {
                            d || (d = !$fog$0, s(), i && i[$fog$11](n, l))
                        },
                        p = function() {
                            l = new Error(a || $fog$12), u()
                        };
                    if (!c[$fog$13] || $fog$14 in c)
                        s = function() {
                            c[$fog$15] = c[$fog$16] = $fog$17
                        }, c[$fog$16] = p, c[$fog$15] = u, c[$fog$14] = !$fog$0, c[$fog$18] = $fog$19, r && r[$fog$11](n, c), c[$fog$20] = a, t(c);
                    else {
                        var f = o++,
                            m = {
                                loaded: !$fog$0,
                                complete: !$fog$0
                            },
                            h = !$fog$10;
                        s = function() {
                            c[$fog$21] = c[$fog$16] = $fog$17, e[f] = void $fog$0
                        }, c[$fog$21] = function() {
                            var e = c[$fog$13];
                            if (!l)
                                return !h && m[e] && (h = !$fog$0, t(c)), $fog$22 === e && (c[$fog$23], $fog$24 === c[$fog$13]) ? p() : void ($fog$25 === c[$fog$13] && u())
                        }, c[$fog$16] = p, e[f] = c, r && r[$fog$11](n, c), c[$fog$20] = a
                    }
                };
            $fog$26 == typeof exports && $fog$26 == typeof module ? module[$fog$27] = a : window[$fog$28] = a
        }(), !function(e, o) {
            $fog$29 != typeof module ? module[$fog$27] = o() : this[e] = o()
        }($fog$30, function(e) {
            function o(e) {
                for (f = $fog$10; e = a[$fog$31]();)
                    e()
            }
            var t,
                a = [],
                i = !$fog$10,
                n = document,
                r = n[$fog$32],
                l = r[$fog$33],
                s = $fog$34,
                c = $fog$35,
                d = $fog$21,
                u = $fog$13,
                p = l ? $fog$36 : $fog$37,
                f = p[$fog$38](n[u]);
            return n[c] && n[c](s, t = function() {
                n[$fog$39](s, t, i), o()
            }, i), l && n[$fog$40](d, t = function() {
                $fog$41[$fog$38](n[u]) && (n[$fog$42](d, t), o())
            }), e = l ? function(o) {
                self != top ? f ? o() : a[$fog$43](o) : function() {
                    try {
                        r[$fog$33]($fog$44)
                    } catch (t) {
                        return setTimeout(function() {
                            e(o)
                        }, $fog$45)
                    }
                    o()
                }()
            } : function(e) {
                f ? e() : a[$fog$43](e)
            }
        }), inf = {}, inf[$fog$46] = navigator[$fog$49][$fog$48]()[$fog$47]($fog$50) > -$fog$10, $fog$29 == typeof ED_DEBUG && (window[$fog$51] = !$fog$10), $fog$29 == typeof ED_USER_DEV_PARAMS && (window[$fog$52] = $fog$53), wlo_saveCookie = function(e, o, t) {
            var a,
                i = new Date;
            t && (i[$fog$54](i[$fog$55]() + $fog$56 * t * $fog$57), a = $fog$58 + i[$fog$59]()), document[$fog$60] = e + $fog$61 + o + $fog$62 + (a ? a + $fog$62 : $fog$53) + $fog$63
        }, wlo_loadCookie = function(e) {
            for (var o = e + $fog$61, t = document[$fog$60][$fog$64]($fog$65), a = $fog$0; a < t[$fog$66]; a++) {
                for (var i = t[a]; $fog$67 == i[$fog$68]($fog$0);)
                    i = i[$fog$69]($fog$10);
                if ($fog$0 == i[$fog$47](o))
                    return i[$fog$69](o[$fog$66], i[$fog$66])
            }
            return $fog$53
        }, jtrace = function(e, o) {
            if (DEBUG || wlo_isJan() || wlo_dbg()) {
                if ($fog$26 == typeof e || e && $fog$53 != e || (e = $fog$70), $fog$26 == typeof e && (o = e, e = $fog$53), e += $fog$53, inf && inf[$fog$46]) {
                    var t = $fog$71,
                        a = $fog$72;
                    e[$fog$47]($fog$73) > -$fog$10 && (t = $fog$74, a = $fog$75), void $fog$0 !== o ? console[$fog$76]($fog$77 + e + $fog$78, $fog$79 + a + $fog$80 + t + $fog$81, o) : console[$fog$76]($fog$77 + e + $fog$78, $fog$79 + a + $fog$80 + t + $fog$81)
                } else
                    void $fog$0 !== o ? console[$fog$76]($fog$82 + e, o) : console[$fog$76]($fog$82 + e);
                wlo_isJan() && String(e)[$fog$48]()[$fog$47]($fog$20) > -$fog$10
            }
        }, wlo_isJan = function() {
            return String(window[$fog$84][$fog$83][$fog$69]($fog$10))[$fog$47]($fog$85) > -$fog$10
        }, Object[$fog$86](String[$fog$87], $fog$88, {
            value: function(e, o) {
                return void $fog$0 === o && (o = !$fog$10), o ? this[$fog$47](e) > -$fog$10 : this[$fog$48]()[$fog$47](e[$fog$48]()) > -$fog$10
            },
            configurable: !$fog$0,
            enumerable: !$fog$10,
            writeable: !$fog$0
        }), wlo_deepCopy = function(e) {
            if ($fog$29 != typeof e)
                return wlo_isArray(e) ? wlo$[$fog$89](!$fog$0, [], e) : wlo$[$fog$89](!$fog$0, {}, e)
        }, wlo_isArray = function(e) {
            return e && e[$fog$90] === Array
        }, wlo_isMobile = function() {
            var e = !$fog$10;
            return ($fog$91[$fog$38](navigator[$fog$49]) || $fog$92[$fog$38](navigator[$fog$49][$fog$93]($fog$0, $fog$94))) && (e = !$fog$0), e
        }, wlo_isTrue = function(e) {
            return $fog$95 == typeof e ? $fog$96 == e || $fog$97 == e : $fog$98 == typeof e ? e && e > $fog$0 : Boolean
        }, wlo_dbg = function() {
            return String(window[$fog$84][$fog$83][$fog$69]($fog$10))[$fog$47]($fog$99) > -$fog$10
        }, wlo_unreleased = function() {
            return String(window[$fog$84][$fog$83][$fog$69]($fog$10))[$fog$47]($fog$100) > -$fog$10
        }, wlo_getTickCount = function() {
            return (new Date)[$fog$55]()
        }, wlo_colorize = function(e, o) {
            var t = tinycolor(o);
            jtrace($fog$101, {
                h: t[$fog$103]()[$fog$102],
                s: t[$fog$103]()[$fog$104],
                l: t[$fog$105]()
            });
            var a = $fog$106 + $fog$107 * t[$fog$105]() + $fog$108 + t[$fog$103]()[$fog$102] + $fog$109 + $fog$110 * t[$fog$103]()[$fog$104] + $fog$111;
            e[$fog$112]({
                "-ms-filter": a,
                "-webkit-filter": a
            })
        }, wlo_stripChars = function(e, o) {
            if (!o)
                return $fog$53;
            var t = new RegExp($fog$113 + e + $fog$114, $fog$115);
            return o[$fog$116](t, $fog$53)
        }, IS_JAN = !$fog$10;
        try {
            IS_JAN = wlo_isJan()
        } catch (e) {
            console[$fog$76]($fog$117 + e)
        }
        DEBUG = IS_JAN && !$fog$10, DEBUG_GREAT = !$fog$10, DEBUG_IGNORE_SHOP_ERRORS = !$fog$0, DEBUG_AUTOSHOW = DEBUG, DEBUG_AUTOSPIN = !$fog$10, DEBUG_FASTER = DEBUG, DEBUG_SKIP_COOKIE = DEBUG, DEBUG_SKIP_EMAIL_VALID = !$fog$10, DEBUG_DATA = DEBUG, DEBUG_CODEBAR = !$fog$10, DEBUG_CUSTOM_FIELDS = DEBUG, COUNTDOWN_COOKIE_NAME = $fog$118, COUPON_CODE_COOKIE_NAME = $fog$119;
        var wheelioDefaults = {
            wheelio_enabled: !$fog$10,
            shopName: $fog$53,
            desktop: !$fog$0,
            mobile: !$fog$0,
            sitewide: !$fog$0,
            lpExit: !$fog$0,
            lpExitElapsed: !$fog$10,
            lpExitPopupTime: $fog$120,
            lpMobileExit: !$fog$0,
            lpMobileExitElapsed: !$fog$10,
            lpExitPopupTimeMobile: $fog$120,
            backgroundColor: $fog$121,
            fontColor: $fog$122,
            buttonColor: $fog$123,
            wheelHue: $fog$124,
            wheelSaturation: $fog$125,
            colorize: !$fog$10,
            cookieName: $fog$53,
            theme: $fog$126,
            cookieExpirationInDays: $fog$127,
            couponBar: !$fog$0,
            couponBarTimeout: $fog$120,
            couponBarPosition: $fog$128,
            bigLogoPath: $fog$53,
            smallLogoPath: $fog$53,
            title: $fog$129,
            description: $fog$130,
            disclaimer: $fog$131,
            ctEnterEmail: $fog$53,
            ctInvalidEmailMessage: $fog$53,
            ctSpinButton: $fog$53,
            ctCloseButton: $fog$53,
            ctWinningTitle: $fog$53,
            ctWinningText: $fog$53,
            ctDiscountCodeTitle: $fog$53,
            ctContinueButton: $fog$53,
            ctCopiedMessage: $fog$53,
            ctRejectDiscoutButton: $fog$53,
            ctFreeProdDescription: $fog$53,
            ctFreeProdButton: $fog$53,
            ctFreeProdReject: $fog$53,
            ctCouponBarText: $fog$53,
            ctCouponBarClose: $fog$132,
            showPulloutTab: !$fog$10,
            pulloutTabText: $fog$53,
            pulloutImage: $fog$133,
            pulloutCustomImage: $fog$53,
            server_timestamp: $fog$0,
            verifyEmails: !$fog$10,
            preventDuplicateEmails: !$fog$10,
            preventDuplicateEmailsPerCampaign: !$fog$0,
            activeCampaign: $fog$0,
            enableRecartMessenger: !$fog$10,
            enableZaius: !$fog$10,
            enableCouponCartInject: !$fog$10,
            enableMessengerMode: !$fog$10,
            messengerModeRequiredText: $fog$134,
            enableProgressBar: !$fog$10,
            progressBarColor: $fog$135,
            progressBarValue: $fog$125,
            progressBarPosition: $fog$136,
            progressBarText: $fog$137
        };
        window[$fog$138] = {
            config: {
                apiKey: $fog$139,
                authDomain: $fog$140,
                databaseURL: $fog$141,
                storageBucket: $fog$142
            },
            loaded: !$fog$10,
            shopmeta: {
                coupons: [],
                loosingSlices: [],
                urls: [],
                emailSegments: [],
                customFields: []
            },
            _dataLoadingStage: $fog$0,
            _stats: {},
            _statsLoaded: !$fog$10,
            _shopRoot: $fog$53,
            isDeviceAllowed: !$fog$10,
            _init: function() {
                var e = this;
                console[$fog$76]($fog$143), window[$fog$28]($fog$144, function(o) {
                    jtrace($fog$145), e[$fog$146]()
                })
            },
            itstshp1rf2: function() {
                var e = String(this[$fog$147])[$fog$48]();
                return $fog$148 == e || $fog$149 == e
            },
            isBeydome: function() {
                var e = String(this[$fog$147])[$fog$48]();
                return $fog$149 == e
            },
            isBigShop: function() {
                var e = String(this[$fog$147])[$fog$48]();
                return $fog$150 == e
            },
            loadData: function() {
                function e(e) {
                    jtrace($fog$151);
                    for (var t in wheelioDefaults) {
                        var i = !$fog$10;
                        wheelioDefaults[$fog$152](t) && (a[$fog$153][t] = e[$fog$155](t)[$fog$154](), $fog$17 === a[$fog$153][t] && (a[$fog$153][t] = wheelioDefaults[t], i = !$fog$0), a[$fog$156]() || jtrace($fog$157 + t + $fog$158 + a[$fog$153][t] + $fog$159 + (i ? $fog$160 : $fog$53)))
                    }
                    a[$fog$153][$fog$161] = e[$fog$155]($fog$161)[$fog$154](), $fog$17 === a[$fog$153][$fog$161] && (a[$fog$153][$fog$161] = $fog$162), jtrace($fog$163, a[$fog$153][$fog$161]), jtrace($fog$151), a[$fog$164](), o($fog$165)
                }
                function o(e) {
                    jtrace($fog$166 + e + $fog$167 + (wlo_getTickCount() - a[$fog$168])), a[$fog$169]++, a[$fog$169] == n && (a[$fog$22] = !$fog$0, a[$fog$153][$fog$170][$fog$66] && a[$fog$153][$fog$171][$fog$66] ? a[$fog$172]() ? a[$fog$173]() : (jtrace($fog$174), a[$fog$176][$fog$175]()) : jtrace($fog$177 + a[$fog$147]))
                }
                function t() {
                    console[$fog$76](error, $fog$178)
                }
                var a = this;
                if (a[$fog$179]($fog$180), a[$fog$168] = wlo_getTickCount(), a[$fog$181] = firebase[$fog$182](this[$fog$183]), a[$fog$176] = a[$fog$181][$fog$184](), $fog$26 == typeof Shopify && Shopify[$fog$185] || (console[$fog$186]($fog$187), DEBUG_IGNORE_SHOP_ERRORS)) {
                    $fog$26 != typeof Shopify && (Shopify = {});
                    var i = String(Shopify[$fog$185])[$fog$64]($fog$188);
                    if (!i[$fog$0] || i[$fog$66] < $fog$189) {
                        if (console[$fog$186]($fog$190 + Shopify[$fog$185] + $fog$191), this[$fog$147] = $fog$149, !DEBUG_IGNORE_SHOP_ERRORS)
                            return
                    } else
                        this[$fog$147] || (this[$fog$147] = i[$fog$0]);
                    var n = $fog$0;
                    n++, jtrace($fog$192, this[$fog$147]), jtrace($fog$193), a[$fog$176][$fog$195]($fog$196 + this[$fog$147])[$fog$194]($fog$197, function(o) {
                        e(o)
                    }, t), n++, a[$fog$176][$fog$195]($fog$196 + this[$fog$147] + $fog$199)[$fog$194]($fog$197)[$fog$198](function(e) {
                        e[$fog$200](function(e) {
                            var o = e[$fog$154]();
                            o[$fog$201] = e[$fog$202], a[$fog$153][$fog$170][$fog$43](o)
                        }), o($fog$170)
                    }, t), n++, a[$fog$176][$fog$195]($fog$196 + this[$fog$147] + $fog$203)[$fog$194]($fog$197)[$fog$198](function(e) {
                        e[$fog$200](function(e) {
                            var o = e[$fog$154]();
                            o[$fog$201] = e[$fog$202], a[$fog$153][$fog$171][$fog$43](o)
                        }), o($fog$204)
                    }, t), n++, a[$fog$176][$fog$195]($fog$196 + this[$fog$147] + $fog$205)[$fog$194]($fog$197)[$fog$198](function(e) {
                        e[$fog$200](function(e) {
                            var o = e[$fog$154]()[$fog$206];
                            o && a[$fog$153][$fog$207][$fog$43](e[$fog$154]())
                        }), o($fog$207)
                    }, t), n++, a[$fog$176][$fog$195]($fog$208 + this[$fog$147])[$fog$194]($fog$197)[$fog$198](function(e) {
                        a[$fog$209] = e[$fog$155]($fog$209)[$fog$154](), a[$fog$209] || delete a[$fog$209], a[$fog$210]() && (jtrace($fog$211), n++, a[$fog$176][$fog$195]($fog$196 + a[$fog$147] + $fog$212)[$fog$194]($fog$197)[$fog$198](function(e) {
                            e[$fog$200](function(e) {
                                var o = e[$fog$154]();
                                o[$fog$213] = String(o[$fog$213])[$fog$48](), o && a[$fog$153][$fog$214][$fog$43](o)
                            }), a[$fog$153][$fog$214][$fog$215](function(e, o) {
                                return (e[$fog$216] || $fog$0) - (o[$fog$216] || $fog$0)
                            }), o($fog$217)
                        }, t), n++, a[$fog$176][$fog$195]($fog$196 + a[$fog$147] + $fog$218)[$fog$194]($fog$197)[$fog$198](function(e) {
                            e[$fog$200](function(e) {
                                var o = e[$fog$154]();
                                if (o) {
                                    var t = [];
                                    if (o[$fog$207])
                                        for (var i in o[$fog$207])
                                            o[$fog$207][$fog$152](i) && t[$fog$43](o[$fog$207][i]);
                                    o[$fog$207] = t, a[$fog$153][$fog$219][$fog$43](o)
                                }
                            }), o($fog$220)
                        }, t)), o($fog$221)
                    }, function() {
                        t(), o($fog$222)
                    }), jtrace($fog$223 + (wlo_getTickCount() - a[$fog$168]) + $fog$224)
                }
            },
            doFullLoadAndInit: function() {
                jtrace($fog$225), jtrace($fog$226 + String(window[$fog$84][$fog$227])[$fog$48]());
                var e = $fog$228[$fog$38](String(window[$fog$84][$fog$227]));
                jtrace($fog$229 + e);
                var o = e ? $fog$53 : $fog$230;
                window[$fog$28](o + $fog$231, function(e) {
                    jtrace($fog$232), window[$fog$234][$fog$233]()
                })
            },
            saveUserInfoAndIncSpin: function(e, o) {
                function t() {
                    var t = a[$fog$176][$fog$195]()[$fog$155]($fog$235 + a[$fog$147])[$fog$43]()[$fog$202],
                        i = $fog$236 + a[$fog$147] + $fog$237 + t,
                        n = {};
                    return n[i] = wlo_deepCopy(e), n[i][$fog$238] = firebase[$fog$184][$fog$240][$fog$239], jtrace($fog$241, n), a[$fog$176][$fog$195]()[$fog$242](n, function(i) {
                        var n = a[$fog$153][$fog$243] || $fog$244,
                            r = {
                                campaign: n,
                                email: e[$fog$245],
                                item_key: t,
                                timeStamp: firebase[$fog$184][$fog$240][$fog$239]
                            },
                            l = String(e[$fog$245])[$fog$48]()[$fog$116]($fog$246, $fog$53);
                        if (l) {
                            var s = $fog$247 + a[$fog$147] + $fog$237 + n + $fog$237 + l;
                            a[$fog$176][$fog$195](s)[$fog$242](r, function(e) {})
                        }
                        $fog$5 == typeof o && o(i)
                    })
                }
                var a = this;
                e && e[$fog$245] ? a[$fog$210]() && (a[$fog$153][$fog$248] || a[$fog$153][$fog$249]) ? wlo$[$fog$250]({
                    url: $fog$251,
                    timeout: $fog$252,
                    data: {
                        email: e[$fog$245],
                        shop: a[$fog$147]
                    },
                    method: $fog$253,
                    success: function(e, o, a) {
                        t()
                    },
                    error: function(e, a, i) {
                        console[$fog$76]($fog$254, i), $fog$255 == a ? t() : $fog$5 == typeof o && o($fog$256)
                    }
                }) : t() : (console[$fog$76]($fog$257), $fog$5 == typeof o && o($fog$258))
            },
            ipr12wx: function() {
                return $fog$259 == this[$fog$209]
            },
            adbgi1rf2: function(e, o) {
                if (wlo_dbg()) {
                    jtrace(e, o);
                    var t = document[$fog$260]($fog$261);
                    if (!t) {
                        var a = $fog$262,
                            i = document[$fog$9]($fog$263);
                        for (i[$fog$264] = a; i[$fog$23][$fog$66] > $fog$0;)
                            document[$fog$266][$fog$265](i[$fog$23][$fog$0]);
                        t = document[$fog$260]($fog$261);
                        var n = $fog$267,
                            r = document[$fog$268] || document[$fog$1]($fog$268)[$fog$0],
                            l = document[$fog$9]($fog$269);
                        l[$fog$270] = $fog$271, l[$fog$272] ? l[$fog$272][$fog$273] = n : l[$fog$265](document[$fog$274](n)), r[$fog$265](l)
                    }
                    var s = document[$fog$9]($fog$275),
                        c = e + ($fog$29 != typeof o ? $fog$276 + String(o) : $fog$53);
                    s[$fog$265](document[$fog$274](c)), t[$fog$265](s)
                }
            },
            shouldDoFullload: function() {
                var e = this,
                    o = e[$fog$153];
                if (e[$fog$277] = wlo_isMobile() && wlo_isTrue(o[$fog$278]) || !wlo_isMobile() && wlo_isTrue(o[$fog$279]), !e[$fog$277])
                    return !$fog$10;
                if (e[$fog$280]())
                    return !$fog$0;
                var t = wloCore[$fog$281](o[$fog$207]);
                e[$fog$179]($fog$282, o[$fog$283] ? $fog$284 : $fog$285), e[$fog$179]($fog$286, t);
                var a = !wloCore[$fog$287]() && (o[$fog$283] || t),
                    i = (o[$fog$288] || DEBUG) && a || wloCore[$fog$289]();
                return e[$fog$179]($fog$290), e[$fog$179]($fog$291, o[$fog$288] ? $fog$284 : $fog$285), e[$fog$179]($fog$292, wloCore[$fog$287]() ? $fog$284 : $fog$285), e[$fog$179]($fog$293, wloCore[$fog$289]() ? $fog$284 : $fog$285), e[$fog$179]($fog$294, DEBUG ? $fog$284 : $fog$285), e[$fog$179]($fog$295), e[$fog$179]($fog$296 + (i ? $fog$53 : $fog$297) + $fog$298), i
            },
            willShowCouponBar: function() {
                var e = parseFloat(wlo_loadCookie(COUNTDOWN_COOKIE_NAME));
                if (!(e > $fog$0))
                    return !$fog$10;
                var o = wlo_loadCookie(COUPON_CODE_COOKIE_NAME);
                return !!o && !(!this[$fog$153][$fog$299] && !DEBUG_CODEBAR)
            },
            couponDiscountInject: function() {
                if (this[$fog$153][$fog$300]) {
                    jtrace($fog$301);
                    var e = wlo_loadCookie(COUPON_CODE_COOKIE_NAME);
                    if (e) {
                        jtrace($fog$302);
                        var o = document[$fog$303]($fog$304);
                        if (o) {
                            for (var t = document[$fog$305]($fog$304), a = $fog$0, i = t[$fog$66]; a < i; a++) {
                                var o = t[a],
                                    n = document[$fog$9]($fog$306);
                                n[$fog$270] = $fog$307, n[$fog$308] = $fog$309, n[$fog$197] = e, o[$fog$3](n, o[$fog$310])
                            }
                            jtrace($fog$311)
                        }
                        var r = document[$fog$303]($fog$312);
                        if (r) {
                            for (var l = document[$fog$305]($fog$312), a = $fog$0, i = l[$fog$66]; a < i; a++) {
                                var r = l[a],
                                    n = document[$fog$9]($fog$306);
                                n[$fog$270] = $fog$307, n[$fog$308] = $fog$309, n[$fog$197] = e, r[$fog$3](n, r[$fog$310])
                            }
                            jtrace($fog$313)
                        }
                        for (var s = document[$fog$305]($fog$314), a = $fog$0, i = s[$fog$66]; a < i; a++) {
                            var c = s[a],
                                d = wloCore[$fog$315](c[$fog$227], $fog$316 + e);
                            c[$fog$227] = d
                        }
                    }
                }
                return !$fog$0
            },
            _isUrlAlowed: function(e, o) {
                function t(e, o) {
                    return $fog$317 == o ? $fog$94 * ($fog$318 == e ? $fog$189 : $fog$10) : $fog$318 == e ? $fog$189 : $fog$0
                }
                function a(e) {
                    return e = String(e)[$fog$48](), e = e[$fog$319](), e = e[$fog$116]($fog$320, $fog$321), jtrace($fog$322, e), e = e[$fog$116]($fog$323, $fog$321), e = e[$fog$116]($fog$324, $fog$53), e = e[$fog$116]($fog$325, $fog$53), e = e[$fog$116]($fog$326, $fog$53), e = e[$fog$116]($fog$327, $fog$53), e = e[$fog$116]($fog$328, $fog$53), e = e[$fog$116]($fog$329, $fog$330)
                }
                var i = this;
                i[$fog$179]($fog$331);
                for (var n = String(o || window[$fog$84][$fog$227])[$fog$48](), r = e[$fog$66] - $fog$10; r >= $fog$0; r--) {
                    var l = e[r];
                    l[$fog$332] = l[$fog$332] || $fog$333, l[$fog$334] = l[$fog$334] || $fog$317;
                    var s = String(l[$fog$206])[$fog$48](),
                        c = !l[$fog$206] || $fog$317 == l[$fog$334] && $fog$321 == s || $fog$317 == l[$fog$334] && $fog$335 == s || $fog$317 == l[$fog$334] && $fog$336 == s || $fog$317 == l[$fog$334] && $fog$337 == s || $fog$338 == l[$fog$334] && $fog$335 == s || $fog$338 == l[$fog$334] && $fog$321 == s;
                    c && (i[$fog$179]($fog$339, s), e[$fog$340](r, $fog$10))
                }
                if (!e[$fog$66])
                    return i[$fog$179]($fog$341), !$fog$0;
                i[$fog$179]($fog$342, n), i[$fog$179](e[$fog$66] + $fog$343);
                for (var d, u = $fog$0, p = !$fog$0, r = $fog$0; r <= e[$fog$66] - $fog$10; r++)
                    if ($fog$318 != e[r][$fog$332]) {
                        p = !$fog$10;
                        break
                    }
                p && (d = !$fog$0), i[$fog$179]($fog$344, p), n = a(n), i[$fog$179]($fog$345, n);
                for (var r = $fog$0; r <= e[$fog$66] - $fog$10; r++) {
                    var l = e[r];
                    l[$fog$332] = l[$fog$332] || $fog$333, l[$fog$334] = l[$fog$334] || $fog$317;
                    var f = l[$fog$206];
                    if (f) {
                        f = String(f)[$fog$48](), f = a(f);
                        for (var m = $fog$346, h = $fog$0; h <= m[$fog$66] - $fog$10; h++) {
                            var g = new RegExp($fog$347 + m[h], $fog$115);
                            f = f[$fog$116](g, $fog$347 + m[h])
                        }
                        $fog$348 == l[$fog$334] ? f = $fog$349 + f + $fog$349 : $fog$350 == l[$fog$334] ? f = $fog$351 + f : $fog$338 == l[$fog$334] ? f += $fog$352 : (f = $fog$351 + f, $fog$353 == f[f[$fog$66] - $fog$10] ? f = f[$fog$69]($fog$0, f[$fog$66] - $fog$189) + $fog$349 : f += $fog$352);
                        var w = ($fog$333 == l[$fog$332] ? $fog$354 : $fog$355) + $fog$67 + ($fog$317 == l[$fog$334] ? $fog$356 : l[$fog$334]) + $fog$357 + String(l[$fog$206])[$fog$48]() + $fog$159;
                        if (jtrace($fog$358 + (r + $fog$10) + $fog$359 + w, new RegExp(f)[$fog$38](n) ? $fog$284 : $fog$285), jtrace($fog$360 + f + $fog$159, new RegExp(f)[$fog$38](n)), new RegExp(f)[$fog$38](n)) {
                            jtrace($fog$361, l);
                            var _ = t(l[$fog$332], l[$fog$334]);
                            jtrace($fog$362, _), (void $fog$0 === d || _ >= u) && (u = _, d = $fog$318 != l[$fog$332])
                        }
                    }
                }
                return i[$fog$179]($fog$363, n), d || !$fog$10
            },
            iprv1rf2: function() {
                var e = String(window[$fog$84][$fog$227])[$fog$48]();
                return e[$fog$47]($fog$364) > -$fog$10
            },
            gckn1rf2: function() {
                return $fog$365 + (wloCore[$fog$153][$fog$161] || $fog$53)
            },
            crjct1rf2: function() {
                return !DEBUG_SKIP_COOKIE && wlo_loadCookie(this[$fog$366]()) && !this[$fog$289]()
            },
            addParameterToURL: function(e, o) {
                return e += (e[$fog$64]($fog$330)[$fog$10] ? $fog$367 : $fog$330) + o
            },
            incStat: function(e, o) {
                var t = this;
                o = o || {}, o[$fog$368] = t[$fog$210](), o[$fog$84] = t[$fog$210](), o[$fog$369] = t[$fog$210](), o[$fog$370] = t[$fog$210](), t[$fog$371]($fog$372 + t[$fog$147] + $fog$237 + e, function(a) {
                    function i(a) {
                        if (a = a || $fog$373, t[$fog$371]($fog$374 + t[$fog$147] + $fog$237 + a + $fog$237 + e), o[$fog$370] && t[$fog$153][$fog$243]) {
                            var i = $fog$375 + t[$fog$147] + $fog$237 + t[$fog$153][$fog$243] + $fog$237;
                            i += $fog$376 + a + $fog$237 + e, t[$fog$371](i);
                            var i = $fog$375 + t[$fog$147] + $fog$377;
                            i += $fog$376 + a + $fog$237 + e, t[$fog$371](i)
                        }
                    }
                    if (jtrace($fog$378, a[$fog$154]()), o[$fog$368] && (t[$fog$379] ? t[$fog$371]($fog$380 + t[$fog$147] + $fog$237 + t[$fog$379] + $fog$237 + e) : t[$fog$381](function() {
                        t[$fog$371]($fog$380 + t[$fog$147] + $fog$237 + t[$fog$379] + $fog$237 + e)
                    })), o[$fog$370] && t[$fog$153][$fog$243]) {
                        var n = $fog$375 + t[$fog$147] + $fog$237;
                        n += t[$fog$153][$fog$243] + $fog$237 + e, t[$fog$371](n);
                        var n = $fog$375 + t[$fog$147] + $fog$237;
                        n += $fog$382 + e, t[$fog$371](n)
                    }
                    if (o[$fog$369]) {
                        var r = wlo_isMobile() ? $fog$383 : $fog$384;
                        if (t[$fog$371]($fog$372 + t[$fog$147] + $fog$237 + r + e), o[$fog$370] && t[$fog$153][$fog$243]) {
                            var n = $fog$375 + t[$fog$147] + $fog$237;
                            n += t[$fog$153][$fog$243] + $fog$237 + r + e, t[$fog$371](n);
                            var n = $fog$375 + t[$fog$147] + $fog$237;
                            n += $fog$382 + r + e, t[$fog$371](n)
                        }
                    }
                    o[$fog$84] && wlo$[$fog$250]({
                        url: $fog$385,
                        dataType: $fog$386,
                        success: function(e, o, a) {
                            wlo_dbg() && t[$fog$179]($fog$387 + o + $fog$388 + JSON[$fog$389](e)), i(e[$fog$390])
                        },
                        error: function(e, o, a) {
                            wlo_dbg() && t[$fog$179]($fog$391 + o + $fog$388 + a), i(), console[$fog$76]($fog$392)
                        }
                    })
                })
            },
            _incStat: function(e, o) {
                var t = this;
                return e ? void t[$fog$176][$fog$195](e)[$fog$393](function(e) {
                    if ($fog$17 === e || !isNaN(e))
                        return e = (e || $fog$0) + $fog$10
                }, function(e, t, a) {
                    e ? jtrace($fog$394, e) : t ? $fog$5 == typeof o && o(a) : jtrace($fog$395)
                }) : void jtrace($fog$396)
            },
            _getDailyStamp: function(e) {
                var o = this;
                o[$fog$176][$fog$195]($fog$372 + o[$fog$147] + $fog$397)[$fog$393](function(e) {
                    return firebase[$fog$184][$fog$240][$fog$239]
                }, function(t, a, i) {
                    if (t)
                        jtrace($fog$394, t);
                    else if (a) {
                        var n = parseInt(i[$fog$154](), $fog$398);
                        if (!n)
                            return;
                        var r = new Date(n),
                            l = r[$fog$399](),
                            s = r[$fog$400]() + $fog$10,
                            c = r[$fog$401]();
                        o[$fog$379] = c, o[$fog$379] += $fog$402 + (s < $fog$398 ? $fog$403 : $fog$53) + s, o[$fog$379] += $fog$402 + (l < $fog$398 ? $fog$403 : $fog$53) + l, $fog$5 == typeof e && e()
                    } else
                        jtrace($fog$395)
                })
            }
        }, domready(function() {
            wloCore[$fog$233]()
        });
    })("‮", 0, "getElementsByTagName", "script", "insertBefore", "parentNode", "function", "context", "setup", "callback", "createElement", 1, "call", "EMPTY", "readyState", "async", "onload", "onerror", null, "charset", "utf-8", "src", "onreadystatechange", "loaded", "children", "loading", "complete", "object", "exports", "_lload", "undefined", "domready", "shift", "documentElement", "doScroll", "DOMContentLoaded", "addEventListener", /^loaded|^c/, /^loaded|c/, "test", "removeEventListener", "attachEvent", /^c/, "detachEvent", "push", "left", 50, "is_chrome", "indexOf", "toLowerCase", "userAgent", "chrome", "ED_DEBUG", "ED_USER_DEV_PARAMS", "", "setTime", "getTime", 60, 1000, "expires=", "toUTCString", "cookie", "=", "; ", "path=/", "split", ";", "length", " ", "charAt", "substring", "''", "#339", "#eef", "STATS:", "#933", "#fee", "log", "jan: %c ", "  ", "background:", "; color:", "; padding:3px;", "jan: ", "search", "location", "1jan2=1", "defineProperty", "prototype", "wlo_contains", "extend", "constructor", /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i, /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i, "substr", 4, "string", "true", "1", "number", "1wlodebug2=1", "1wlounreleased2=1", "color :", "h", "toHsv", "s", "getLuminance", "brightness(", 500, "%) hue-rotate(", "deg) saturate(", 200, "%) ", "css", "[", "]", "g", "replace", "wheelio init ", "wloCD1green10F", "wloCPN9yellowAC9", 15, "#49a3af", "#ffffff", "#111111", 100, 70, "default", 30, "screen_top", "%storename \\bspecial bonus\\b unlocked", "You have a chance to win a nice big fat discount. Are you ready?", "* You can spin the wheel only once.<br>* If you win, you can claim your coupon for 10 mins  only!", "close", "gift", "You have to tick the checkbox first.", "#FFA3BF", "wlo_main_title", "70% offers claimed. Hurry up!", "wloCore", "AIzaSyALET6_-oiV6-v4NeMyq1YsOtiMuD5_uOc", "wheelio-a62f3.firebaseapp.com", "https://wheelio-a62f3.firebaseio.com", "wheelio-a62f3.appspot.com", "loader init", "https://www.gstatic.com/firebasejs/3.7.3/firebase.js", "firebase loaded", "loadData", "_shopRoot", "hockey-empire-com", "beydome", "ivory-ella", "---------------", "hasOwnProperty", "shopmeta", "val", "child", "isBeydome", "shopmeta.", " = '", "'", "(def)", "cookieName", "HRFB37FGD", "cookie name: ", "couponDiscountInject", "general", "- loaded '", "' , time ", "loadStartTime", "_dataLoadingStage", "coupons", "loosingSlices", "shouldDoFullload", "doFullLoadAndInit", "Wheelio disabled", "goOffline", "db", "Error: Invalid data - empty coupons and loosing ", "Ooops there was an error!", "adbgi1rf2", "Load started", "firebase", "initializeApp", "config", "database", "shop", "error", "Unable to load Shopify data (No Shopify object)", ".", 2, "Unable parse shop root (Shopify.shop=", ")", "shop root", "****************** ONCE! *********************", "once", "ref", "shops/", "value", "then", "/coupons", "forEach", "uid", "key", "/slices", "loosing", "/urls", "url", "urls", "read_only/", "version", "ipr12wx", "PRO VERSION !", "/customFields", "field_name", "customFields", "sort", "orderIndex", "custom Fields", "/emailSegments", "emailSegments", "email Segments", "readonly", "readonly_error", "Waiting DB ", "ms", "should load!", "url is ", "href", /^file:\/\/\//, "isLocalHost = ", "https://wheelio-a62f3.firebaseapp.com/", "wlocomplete.js", "wlocomplete loaded", "_init", "wheelio", "emails/", "/emails/", "/", "timestamp", "TIMESTAMP", "ServerValue", "setVal", "update", "activeCampaign", "no_campaign", "email", /[\.#$[\]]/g, "/campaign_emails/", "verifyEmails", "preventDuplicateEmails", "ajax", "https://us-central1-wheelio-a62f3.cloudfunctions.net/validateEmail", 7000, "POST", "Error validating email", "timeout", "Email rejected", "No email specified", "Email should not be empty", "x1492-pro", "getElementById", "wlo_debug_win_list", "<div id=\"wlo_debug_win\">\t<ul id=\"wlo_debug_win_list\" class=\"wlo_list\">\t</ul></div>", "div", "innerHTML", "appendChild", "body", "#wlo_debug_win{\tposition: fixed;\ttop: 35px;\tz-index: 2000000000;\tz-index: 2147483647;\t\tbackground-color: rgba(60,60,60,0.9);\tcolor: #fff;\tfont-size: 12px;\tz-index: 1150;\tborder-radius: 3px;\toverflow: hidden;\tpadding: 15px 15px;\tmargin: 2px 5px;\tright: 0;}#wlo_debug_win .wlo_list{\tlist-style: none;\tpadding: 0;\tmargin: 0;\toverflow: auto;\tbackground-color: rgba(0, 0, 0, 0.5);\tmax-height: 65vh;\twidth: 80vw;\tmax-width: 500px;}#wlo_debug_win li{\tpadding: 5px 20px;\tfont-size: 12px;}#wlo_debug_win .wlo_btn{\tmargin-top: 10px;\tfloat: right;}", "head", "style", "type", "text/css", "styleSheet", "cssText", "createTextNode", "li", ": ", "isDeviceAllowed", "mobile", "desktop", "willShowCouponBar", "_isUrlAlowed", "Sitewide", "sitewide", "YES", "NO", "Url allowed", "crjct1rf2", "wheelio_enabled", "iprv1rf2", "----------------- WHEELIO SHOW CHECK ---------------", "Wheelio_enabled", "Cookie exists", "Preview mode", "Debug mode", "--------------------------", "WHEELIO WILL ", "NOT", " SHOW", "couponBar", "enableCouponCartInject", "CouponCartInject is enabled.", "CouponCartInject read the cookie.", "querySelector", "form[action*='cart']", "querySelectorAll", "input", "hidden", "name", "discount", "firstChild", "CouponCartInjected to cart forms.", "form[action*='checkout']", "CouponCartInjected to checkout forms.", "a[href*='checkout']", "addParameterToURL", "discount=", "exact", "not", "trim", /^https:\/\//g, "http://", "str before www", /^http:\/\/www\./g, /\//g, /1wlodebug2=1/g, /wloprvw=1/g, /\?$/g, /&$/g, /\?&/g, "?", "------ PREPARE URL FILTER CHECK ------", "operator", "yes", "rule", "https://", "http://www", "https://www", "ending", "ignore url", "splice", "No filter entered", "Current url", " valid url filters found:", "Are only negation (not) filters", "my url simplified", "\\.?/+*[]()|$^", "\\", "contain", ".*", "beginning", "^", "$", "*", "Does", "Doesn't", "match", " '", "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;", ". ", "Regex '", "Url allowed rule match", "strength", "No rule matched", "wloprvw=1", "wlo_", "gckn1rf2", "&", "daily", "platform", "campaign", "_incStat", "/stats/", "unknown", "/geolocation_stats/", "/campaigns_stats/", "geolocation/", "/campaigns_total/", "Added", "server_timestamp", "/daily_stats/", "_getDailyStamp", "campaigns_total/", "mob_", "desk_", "http://freegeoip.net/json/", "json", "stat ", " : ", "stringify", "country_code", "error ", "invalid location response", "transaction", "Transaction failed abnormally!", "Aborted", "Unable to write stat", "/timestamp_picker", 10, "getDate", "getMonth", "getFullYear", "-", "0");
} else if (typeof jtrace == "function") {
    jtrace("Secondary load of Wheelio treminated");
}

