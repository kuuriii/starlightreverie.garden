/*! For license information please see all.js.LICENSE.txt */
(() => {
	var e = {
			8712: function (e) {
				e.exports = (function () {
					"use strict";
					var e = function () {
						return (
							(e =
								Object.assign ||
								function (e) {
									for (
										var t, n = 1, r = arguments.length;
										n < r;
										n++
									)
										for (var o in (t = arguments[n]))
											Object.prototype.hasOwnProperty.call(
												t,
												o,
											) && (e[o] = t[o]);
									return e;
								}),
							e.apply(this, arguments)
						);
					};
					function t() {
						var e = document.createElement("div");
						return (
							(e.style.cssText =
								"position: fixed; top: 0; height: 100vh; pointer-events: none;"),
							document.documentElement.insertBefore(
								e,
								document.documentElement.firstChild,
							),
							e
						);
					}
					function n(e) {
						document.documentElement.removeChild(e);
					}
					function r() {
						var e = t(),
							r = window.innerHeight,
							o = e.offsetHeight,
							a = o - r;
						return (
							n(e),
							{
								vh: o,
								windowHeight: r,
								offset: a,
								isNeeded: 0 !== a,
								value: 0,
							}
						);
					}
					function o() {}
					function a() {
						var e = r();
						return (e.value = e.offset), e;
					}
					function i() {
						var e = r();
						return (e.value = 0.01 * e.windowHeight), e;
					}
					var c = Object.freeze({
						noop: o,
						computeDifference: a,
						redefineVhUnit: i,
					});
					function u(e) {
						return "string" == typeof e && e.length > 0;
					}
					function f(e) {
						return "function" == typeof e;
					}
					var s = Object.freeze({
						cssVarName: "vh-offset",
						redefineVh: !1,
						method: a,
						force: !1,
						bind: !0,
						updateOnTouch: !1,
						onUpdate: o,
					});
					function d(t) {
						if (u(t)) return e({}, s, { cssVarName: t });
						if ("object" != typeof t) return s;
						var n = {
								force: !0 === t.force,
								bind: !1 !== t.bind,
								updateOnTouch: !0 === t.updateOnTouch,
								onUpdate: f(t.onUpdate) ? t.onUpdate : o,
							},
							r = !0 === t.redefineVh;
						return (
							(n.method =
								c[r ? "redefineVhUnit" : "computeDifference"]),
							(n.cssVarName = u(t.cssVarName)
								? t.cssVarName
								: r
									? "vh"
									: s.cssVarName),
							n
						);
					}
					var v = !1,
						m = [];
					try {
						var p = Object.defineProperty({}, "passive", {
							get: function () {
								v = !0;
							},
						});
						window.addEventListener("test", p, p),
							window.removeEventListener("test", p, p);
					} catch (e) {
						v = !1;
					}
					function h(e, t) {
						m.push({ eventName: e, callback: t }),
							window.addEventListener(
								e,
								t,
								!!v && { passive: !0 },
							);
					}
					function l() {
						m.forEach(function (e) {
							window.removeEventListener(e.eventName, e.callback);
						}),
							(m = []);
					}
					function g(e, t) {
						document.documentElement.style.setProperty(
							"--" + e,
							t.value + "px",
						);
					}
					function w(t, n) {
						return e({}, t, { unbind: l, recompute: n.method });
					}
					function b(e) {
						var t = Object.freeze(d(e)),
							n = w(t.method(), t);
						if (!n.isNeeded && !t.force) return n;
						if ((g(t.cssVarName, n), t.onUpdate(n), !t.bind))
							return n;
						function r() {
							window.requestAnimationFrame(function () {
								var e = t.method();
								g(t.cssVarName, e), t.onUpdate(w(e, t));
							});
						}
						return (
							n.unbind(),
							h("orientationchange", r),
							t.updateOnTouch && h("touchmove", r),
							n
						);
					}
					return b;
				})();
			},
		},
		t = {};
	function n(r) {
		var o = t[r];
		if (void 0 !== o) return o.exports;
		var a = (t[r] = { exports: {} });
		return e[r].call(a.exports, a, a.exports, n), a.exports;
	}
	(n.n = (e) => {
		var t = e && e.__esModule ? () => e.default : () => e;
		return n.d(t, { a: t }), t;
	}),
		(n.d = (e, t) => {
			for (var r in t)
				n.o(t, r) &&
					!n.o(e, r) &&
					Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
		}),
		(n.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
		(() => {
			"use strict";
			var e = n(8712);
			n.n(e)()({ cssVarName: "ag-vh-offset" });
			window.addEventListener("age_gate_shown", function () {
				if (!navigator.cookieEnabled) {
					var e = age_gate_common.cookies;
					document
						.querySelector(".age-gate-form, .age-gate__form")
						.insertAdjacentHTML(
							"afterbegin",
							'<p class="age-gate__error">'.concat(e, "</p>"),
						);
				}
			});
		})();
})();
