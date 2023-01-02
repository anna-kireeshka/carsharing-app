/* eslint-disable */
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
  ["chunk-dbec5910"],
  {
    "057f": function (e, t, n) {
      var c = n("c6b6"),
        i = n("fc6a"),
        r = n("241c").f,
        a = n("4dae"),
        o =
          "object" == typeof window && window && Object.getOwnPropertyNames
            ? Object.getOwnPropertyNames(window)
            : [],
        u = function (e) {
          try {
            return r(e);
          } catch (t) {
            return a(o);
          }
        };
      e.exports.f = function (e) {
        return o && "Window" == c(e) ? u(e) : r(i(e));
      };
    },
    "0b3f": function (e, t, n) {
      e.exports = {
        green: "linear-gradient(90deg, #13493F 0%, #0C7B1B 100%)",
        blue: "linear-gradient(90deg, #06152e 0%, #055345 100%)",
        red: "linear-gradient(90deg, #493013 0%, #460721 100%)",
        violet: "linear-gradient(90deg, #22084d 0%, #56005e 100%)",
        hoverGreen: "linear-gradient(90deg, #49c07f 0%, #025a0d 100%)",
        hoverBlue: "linear-gradient(90deg, #0849b8 0%, #004236 100%)",
        hoverRed: "linear-gradient(90deg, #570c0c 0%, #a71d62 100%)",
        hoverViolet: "linear-gradient(90deg, #1e014d 0%, #970477 100%)",
      };
    },
    "2fea": function (e, t, n) {
      e.exports = n.p + "img/slider-3.3a884404.png";
    },
    "357d": function (e, t, n) {
      "use strict";
      n("8238");
    },
    "3c34": function (e, t, n) {},
    4172: function (e, t, n) {
      e.exports = n.p + "img/slider-2.54d42d5c.png";
    },
    "428f": function (e, t, n) {
      var c = n("da84");
      e.exports = c;
    },
    "4dae": function (e, t, n) {
      var c = n("da84"),
        i = n("23cb"),
        r = n("07fa"),
        a = n("8418"),
        o = c.Array,
        u = Math.max;
      e.exports = function (e, t, n) {
        for (
          var c = r(e),
            s = i(t, c),
            l = i(void 0 === n ? c : n, c),
            b = o(u(l - s, 0)),
            f = 0;
          s < l;
          s++, f++
        )
          a(b, f, e[s]);
        return (b.length = f), b;
      };
    },
    "526f": function (e, t, n) {},
    "5c71": function (e, t, n) {
      "use strict";
      n("66f9");
    },
    "66f9": function (e, t, n) {},
    "6b1e": function (e, t, n) {
      "use strict";
      n("3c34");
    },
    "6ccf": function (e, t, n) {
      "use strict";
      n.r(t);
      var c = n("7a23"),
        i = (n("a4d3"), n("e01a"), n("0b3f")),
        r = n.n(i),
        a = function (e) {
          return (
            Object(c["D"])("data-v-59fbfd27"), (e = e()), Object(c["B"])(), e
          );
        },
        o = { class: "wrapper" },
        u = a(function () {
          return Object(c["h"])("div", { class: "overlay" }, null, -1);
        }),
        s = { class: "content" },
        l = { class: "content__title" },
        b = { class: "content__descreption" },
        f = ["onMouseover", "onMouseleave"],
        d = { class: "dote" },
        v = ["onClick"],
        O = a(function () {
          return Object(c["h"])(
            "svg",
            { width: "10", height: "20", class: "svg-left" },
            [Object(c["h"])("use", { "xlink:href": "#arrow" })],
            -1
          );
        }),
        j = [O],
        g = a(function () {
          return Object(c["h"])(
            "svg",
            { width: "10", height: "20", class: "svg-right" },
            [Object(c["h"])("use", { "xlink:href": "#arrow" })],
            -1
          );
        }),
        h = [g],
        _ = Object(c["l"])({
          __name: "Slider",
          setup: function (e) {
            var t = Object(c["F"])(0),
              i = Object(c["F"])(0),
              a = Object(c["F"])(null),
              O = Object(c["F"])([
                {
                  id: 0,
                  img: n("f453"),
                  title: "Бесплатная парковка",
                  description:
                    "Оставляйте машину на платных городских парковках и разрешенных местах, не нарушая ПДД, а также в аэропортах.",
                  background: r.a.green,
                },
                {
                  id: 1,
                  img: n("4172"),
                  title: "Страховка",
                  description: "Полная страховка страховка автомобиля",
                  background: r.a.blue,
                },
                {
                  id: 2,
                  img: n("2fea"),
                  title: "Бензин",
                  description:
                    "Полный бак на любой заправке города за наш счёт",
                  background: r.a.red,
                },
                {
                  id: 3,
                  img: n("e8b1"),
                  title: "Обслуживание",
                  description: "Автомобиль проходит еженедельное ТО",
                  background: r.a.violet,
                },
              ]);
            Object(c["x"])(function () {
              window.addEventListener("resize", g), g();
            }),
              Object(c["y"])(function () {
                window.removeEventListener("resize", g);
              });
            var g = function () {
                return a.value.clientWidth;
              },
              _ = function () {
                i.value++, i.value >= O.value.length && (i.value = 0), w.value;
              },
              m = function () {
                i.value--,
                  i.value < 0 && (i.value = O.value.length - 1),
                  w.value;
              },
              k = function (e, t) {
                i.value !== e && (i.value = e), w.value;
              },
              p = function (e, t) {
                0 === e
                  ? (t.style.background = r.a.hoverGreen)
                  : 1 === e
                  ? (t.style.background = r.a.hoverBlue)
                  : 2 === e
                  ? (t.style.background = r.a.hoverRed)
                  : 3 === e && (t.style.background = r.a.hoverViolet);
              },
              y = function (e, t) {
                0 === t
                  ? (e.style.background = r.a.green)
                  : 1 === t
                  ? (e.style.background = r.a.blue)
                  : 2 === t
                  ? (e.style.background = r.a.red)
                  : 3 === t && (e.style.background = r.a.violet);
              },
              w = Object(c["c"])(function () {
                var e = document.querySelector(".slider");
                return (e.style.marginLeft = -t.value * i.value + "px");
              });
            return function (e, t) {
              return (
                Object(c["A"])(),
                Object(c["g"])("div", o, [
                  u,
                  Object(c["h"])(
                    "div",
                    { class: "slider", ref_key: "img", ref: a },
                    [
                      (Object(c["A"])(!0),
                      Object(c["g"])(
                        c["a"],
                        null,
                        Object(c["G"])(O.value, function (e) {
                          return (
                            Object(c["A"])(),
                            Object(c["g"])(
                              "div",
                              {
                                class: "slider__img",
                                key: e.id,
                                style: Object(c["u"])({
                                  backgroundImage: "url(" + e.img + ")",
                                }),
                              },
                              [
                                Object(c["h"])("div", s, [
                                  Object(c["h"])(
                                    "h2",
                                    l,
                                    Object(c["K"])(e.title),
                                    1
                                  ),
                                  Object(c["h"])(
                                    "p",
                                    b,
                                    Object(c["K"])(e.description),
                                    1
                                  ),
                                  Object(c["h"])(
                                    "button",
                                    {
                                      class: "content__btn",
                                      style: Object(c["u"])({
                                        background: e.background,
                                      }),
                                      onMouseover: function (t) {
                                        return p(e.id, t.target);
                                      },
                                      onMouseleave: function (t) {
                                        return y(t.target, e.id);
                                      },
                                    },
                                    " Подробнее ",
                                    44,
                                    f
                                  ),
                                ]),
                                Object(c["h"])("div", d, [
                                  (Object(c["A"])(!0),
                                  Object(c["g"])(
                                    c["a"],
                                    null,
                                    Object(c["G"])(O.value, function (e) {
                                      return (
                                        Object(c["A"])(),
                                        Object(c["g"])(
                                          "button",
                                          {
                                            class: Object(c["t"])([
                                              "dote__item",
                                              {
                                                "dote__item--active":
                                                  e.id === i.value,
                                              },
                                            ]),
                                            key: e.id,
                                            onClick: Object(c["T"])(
                                              function (t) {
                                                return k(e.id, t);
                                              },
                                              ["self"]
                                            ),
                                          },
                                          null,
                                          10,
                                          v
                                        )
                                      );
                                    }),
                                    128
                                  )),
                                ]),
                                Object(c["h"])(
                                  "button",
                                  { class: "action-right", onClick: _ },
                                  j
                                ),
                                Object(c["h"])(
                                  "button",
                                  { class: "action-left", onClick: m },
                                  h
                                ),
                              ],
                              4
                            )
                          );
                        }),
                        128
                      )),
                    ],
                    512
                  ),
                ])
              );
            };
          },
        }),
        m = (n("ed78"), n("6b0d")),
        k = n.n(m);
      const p = k()(_, [["__scopeId", "data-v-59fbfd27"]]);
      var y = p,
        w = n("f4dd"),
        A = n("a4ce"),
        S = function (e) {
          return (
            Object(c["D"])("data-v-cf32d494"), (e = e()), Object(c["B"])(), e
          );
        },
        x = { class: "wrapper" },
        C = { class: "wrapper__block" },
        F = { class: "main-block" },
        P = S(function () {
          return Object(c["h"])(
            "h1",
            { class: "main-block__title" },
            "Каршеринг",
            -1
          );
        }),
        I = S(function () {
          return Object(c["h"])(
            "h1",
            { class: "main-block__title main-block__title--green" },
            " Need for drive ",
            -1
          );
        }),
        M = S(function () {
          return Object(c["h"])(
            "p",
            { class: "main-block__discreption" },
            " Поминутная аренда авто твоего города ",
            -1
          );
        }),
        E = S(function () {
          return Object(c["h"])(
            "div",
            { class: "main-footer" },
            [
              Object(c["h"])(
                "p",
                { class: "main-footer__info" },
                "© 2016-2019 «Need for drive»"
              ),
              Object(c["h"])(
                "p",
                { class: "main-footer__info main-footer__info--number" },
                " 8 (495) 234-22-44 "
              ),
            ],
            -1
          );
        }),
        N = Object(c["l"])({
          __name: "MainInfo",
          setup: function (e) {
            return function (e, t) {
              var n = Object(c["I"])("router-link");
              return (
                Object(c["A"])(),
                Object(c["g"])("div", x, [
                  Object(c["k"])(w["a"]),
                  Object(c["h"])("div", C, [
                    Object(c["k"])(A["a"], { class: "header" }),
                    Object(c["h"])("div", F, [
                      P,
                      I,
                      M,
                      Object(c["k"])(
                        n,
                        {
                          class: "main-block__booking",
                          to: { name: "location" },
                        },
                        {
                          default: Object(c["R"])(function () {
                            return [Object(c["j"])("Забронировать")];
                          }),
                          _: 1,
                        }
                      ),
                    ]),
                    E,
                  ]),
                ])
              );
            };
          },
        });
      n("357d");
      const B = k()(N, [["__scopeId", "data-v-cf32d494"]]);
      var R = B,
        D = { class: "page" },
        G = Object(c["l"])({
          __name: "MainPage",
          setup: function (e) {
            return function (e, t) {
              return (
                Object(c["A"])(),
                Object(c["g"])("div", D, [
                  Object(c["k"])(R, { class: "info" }),
                  Object(c["k"])(y, { class: "slider-block" }),
                ])
              );
            };
          },
        });
      n("6fe6");
      const L = k()(G, [["__scopeId", "data-v-6ae6783b"]]);
      t["default"] = L;
    },
    "6fe6": function (e, t, n) {
      "use strict";
      n("526f");
    },
    "746f": function (e, t, n) {
      var c = n("428f"),
        i = n("1a2d"),
        r = n("e538"),
        a = n("9bf2").f;
      e.exports = function (e) {
        var t = c.Symbol || (c.Symbol = {});
        i(t, e) || a(t, e, { value: r.f(e) });
      };
    },
    7572: function (e, t, n) {},
    8238: function (e, t, n) {},
    a4ce: function (e, t, n) {
      "use strict";
      var c = n("7a23"),
        i = function (e) {
          return (
            Object(c["D"])("data-v-56ccf5c0"), (e = e()), Object(c["B"])(), e
          );
        },
        r = { class: "main-nav" },
        a = i(function () {
          return Object(c["h"])(
            "p",
            { class: "main-nav__city-name" },
            [
              Object(c["h"])("svg", { width: "18", height: "20" }, [
                Object(c["h"])("use", { "xlink:href": "#gps" }),
              ]),
              Object(c["j"])(" Ульяновск "),
            ],
            -1
          );
        });
      function o(e, t) {
        var n = Object(c["I"])("router-link");
        return (
          Object(c["A"])(),
          Object(c["g"])("div", r, [
            Object(c["h"])("h1", null, [
              Object(c["k"])(
                n,
                { class: "main-nav__company", to: { name: "MainPage" } },
                {
                  default: Object(c["R"])(function () {
                    return [Object(c["j"])("Need for drive")];
                  }),
                  _: 1,
                }
              ),
            ]),
            a,
          ])
        );
      }
      n("5c71");
      var u = n("6b0d"),
        s = n.n(u);
      const l = {},
        b = s()(l, [
          ["render", o],
          ["__scopeId", "data-v-56ccf5c0"],
        ]);
      t["a"] = b;
    },
    a4d3: function (e, t, n) {
      "use strict";
      var c = n("23e7"),
        i = n("da84"),
        r = n("d066"),
        a = n("2ba4"),
        o = n("c65b"),
        u = n("e330"),
        s = n("c430"),
        l = n("83ab"),
        b = n("4930"),
        f = n("d039"),
        d = n("1a2d"),
        v = n("e8b5"),
        O = n("1626"),
        j = n("861d"),
        g = n("3a9b"),
        h = n("d9b5"),
        _ = n("825a"),
        m = n("7b0b"),
        k = n("fc6a"),
        p = n("a04b"),
        y = n("577e"),
        w = n("5c6c"),
        A = n("7c73"),
        S = n("df75"),
        x = n("241c"),
        C = n("057f"),
        F = n("7418"),
        P = n("06cf"),
        I = n("9bf2"),
        M = n("37e8"),
        E = n("d1e7"),
        N = n("f36a"),
        B = n("6eeb"),
        R = n("5692"),
        D = n("f772"),
        G = n("d012"),
        L = n("90e3"),
        z = n("b622"),
        J = n("e538"),
        K = n("746f"),
        W = n("d44e"),
        T = n("69f3"),
        V = n("b727").forEach,
        $ = D("hidden"),
        q = "Symbol",
        Q = "prototype",
        H = z("toPrimitive"),
        U = T.set,
        X = T.getterFor(q),
        Y = Object[Q],
        Z = i.Symbol,
        ee = Z && Z[Q],
        te = i.TypeError,
        ne = i.QObject,
        ce = r("JSON", "stringify"),
        ie = P.f,
        re = I.f,
        ae = C.f,
        oe = E.f,
        ue = u([].push),
        se = R("symbols"),
        le = R("op-symbols"),
        be = R("string-to-symbol-registry"),
        fe = R("symbol-to-string-registry"),
        de = R("wks"),
        ve = !ne || !ne[Q] || !ne[Q].findChild,
        Oe =
          l &&
          f(function () {
            return (
              7 !=
              A(
                re({}, "a", {
                  get: function () {
                    return re(this, "a", { value: 7 }).a;
                  },
                })
              ).a
            );
          })
            ? function (e, t, n) {
                var c = ie(Y, t);
                c && delete Y[t], re(e, t, n), c && e !== Y && re(Y, t, c);
              }
            : re,
        je = function (e, t) {
          var n = (se[e] = A(ee));
          return (
            U(n, { type: q, tag: e, description: t }),
            l || (n.description = t),
            n
          );
        },
        ge = function (e, t, n) {
          e === Y && ge(le, t, n), _(e);
          var c = p(t);
          return (
            _(n),
            d(se, c)
              ? (n.enumerable
                  ? (d(e, $) && e[$][c] && (e[$][c] = !1),
                    (n = A(n, { enumerable: w(0, !1) })))
                  : (d(e, $) || re(e, $, w(1, {})), (e[$][c] = !0)),
                Oe(e, c, n))
              : re(e, c, n)
          );
        },
        he = function (e, t) {
          _(e);
          var n = k(t),
            c = S(n).concat(ye(n));
          return (
            V(c, function (t) {
              (l && !o(me, n, t)) || ge(e, t, n[t]);
            }),
            e
          );
        },
        _e = function (e, t) {
          return void 0 === t ? A(e) : he(A(e), t);
        },
        me = function (e) {
          var t = p(e),
            n = o(oe, this, t);
          return (
            !(this === Y && d(se, t) && !d(le, t)) &&
            (!(n || !d(this, t) || !d(se, t) || (d(this, $) && this[$][t])) ||
              n)
          );
        },
        ke = function (e, t) {
          var n = k(e),
            c = p(t);
          if (n !== Y || !d(se, c) || d(le, c)) {
            var i = ie(n, c);
            return (
              !i || !d(se, c) || (d(n, $) && n[$][c]) || (i.enumerable = !0), i
            );
          }
        },
        pe = function (e) {
          var t = ae(k(e)),
            n = [];
          return (
            V(t, function (e) {
              d(se, e) || d(G, e) || ue(n, e);
            }),
            n
          );
        },
        ye = function (e) {
          var t = e === Y,
            n = ae(t ? le : k(e)),
            c = [];
          return (
            V(n, function (e) {
              !d(se, e) || (t && !d(Y, e)) || ue(c, se[e]);
            }),
            c
          );
        };
      if (
        (b ||
          ((Z = function () {
            if (g(ee, this)) throw te("Symbol is not a constructor");
            var e =
                arguments.length && void 0 !== arguments[0]
                  ? y(arguments[0])
                  : void 0,
              t = L(e),
              n = function (e) {
                this === Y && o(n, le, e),
                  d(this, $) && d(this[$], t) && (this[$][t] = !1),
                  Oe(this, t, w(1, e));
              };
            return l && ve && Oe(Y, t, { configurable: !0, set: n }), je(t, e);
          }),
          (ee = Z[Q]),
          B(ee, "toString", function () {
            return X(this).tag;
          }),
          B(Z, "withoutSetter", function (e) {
            return je(L(e), e);
          }),
          (E.f = me),
          (I.f = ge),
          (M.f = he),
          (P.f = ke),
          (x.f = C.f = pe),
          (F.f = ye),
          (J.f = function (e) {
            return je(z(e), e);
          }),
          l &&
            (re(ee, "description", {
              configurable: !0,
              get: function () {
                return X(this).description;
              },
            }),
            s || B(Y, "propertyIsEnumerable", me, { unsafe: !0 }))),
        c({ global: !0, wrap: !0, forced: !b, sham: !b }, { Symbol: Z }),
        V(S(de), function (e) {
          K(e);
        }),
        c(
          { target: q, stat: !0, forced: !b },
          {
            for: function (e) {
              var t = y(e);
              if (d(be, t)) return be[t];
              var n = Z(t);
              return (be[t] = n), (fe[n] = t), n;
            },
            keyFor: function (e) {
              if (!h(e)) throw te(e + " is not a symbol");
              if (d(fe, e)) return fe[e];
            },
            useSetter: function () {
              ve = !0;
            },
            useSimple: function () {
              ve = !1;
            },
          }
        ),
        c(
          { target: "Object", stat: !0, forced: !b, sham: !l },
          {
            create: _e,
            defineProperty: ge,
            defineProperties: he,
            getOwnPropertyDescriptor: ke,
          }
        ),
        c(
          { target: "Object", stat: !0, forced: !b },
          { getOwnPropertyNames: pe, getOwnPropertySymbols: ye }
        ),
        c(
          {
            target: "Object",
            stat: !0,
            forced: f(function () {
              F.f(1);
            }),
          },
          {
            getOwnPropertySymbols: function (e) {
              return F.f(m(e));
            },
          }
        ),
        ce)
      ) {
        var we =
          !b ||
          f(function () {
            var e = Z();
            return (
              "[null]" != ce([e]) ||
              "{}" != ce({ a: e }) ||
              "{}" != ce(Object(e))
            );
          });
        c(
          { target: "JSON", stat: !0, forced: we },
          {
            stringify: function (e, t, n) {
              var c = N(arguments),
                i = t;
              if ((j(t) || void 0 !== e) && !h(e))
                return (
                  v(t) ||
                    (t = function (e, t) {
                      if ((O(i) && (t = o(i, this, e, t)), !h(t))) return t;
                    }),
                  (c[1] = t),
                  a(ce, null, c)
                );
            },
          }
        );
      }
      if (!ee[H]) {
        var Ae = ee.valueOf;
        B(ee, H, function (e) {
          return o(Ae, this);
        });
      }
      W(Z, q), (G[$] = !0);
    },
    e01a: function (e, t, n) {
      "use strict";
      var c = n("23e7"),
        i = n("83ab"),
        r = n("da84"),
        a = n("e330"),
        o = n("1a2d"),
        u = n("1626"),
        s = n("3a9b"),
        l = n("577e"),
        b = n("9bf2").f,
        f = n("e893"),
        d = r.Symbol,
        v = d && d.prototype;
      if (i && u(d) && (!("description" in v) || void 0 !== d().description)) {
        var O = {},
          j = function () {
            var e =
                arguments.length < 1 || void 0 === arguments[0]
                  ? void 0
                  : l(arguments[0]),
              t = s(v, this) ? new d(e) : void 0 === e ? d() : d(e);
            return "" === e && (O[t] = !0), t;
          };
        f(j, d), (j.prototype = v), (v.constructor = j);
        var g = "Symbol(test)" == String(d("test")),
          h = a(v.toString),
          _ = a(v.valueOf),
          m = /^Symbol\((.*)\)[^)]+$/,
          k = a("".replace),
          p = a("".slice);
        b(v, "description", {
          configurable: !0,
          get: function () {
            var e = _(this),
              t = h(e);
            if (o(O, e)) return "";
            var n = g ? p(t, 7, -1) : k(t, m, "$1");
            return "" === n ? void 0 : n;
          },
        }),
          c({ global: !0, forced: !0 }, { Symbol: j });
      }
    },
    e538: function (e, t, n) {
      var c = n("b622");
      t.f = c;
    },
    e8b1: function (e, t, n) {
      e.exports = n.p + "img/slider-4.1618de5d.png";
    },
    ed78: function (e, t, n) {
      "use strict";
      n("7572");
    },
    f453: function (e, t, n) {
      e.exports = n.p + "img/slider-1.5decc706.png";
    },
    f4dd: function (e, t, n) {
      "use strict";
      var c = n("7a23"),
        i = function (e) {
          return (
            Object(c["D"])("data-v-6f0c9069"), (e = e()), Object(c["B"])(), e
          );
        },
        r = { class: "container" },
        a = { class: "wrapper" },
        o = { key: 0, class: "link-pos" },
        u = i(function () {
          return Object(c["h"])(
            "svg",
            { width: "32", height: "32" },
            [Object(c["h"])("use", { "xlink:href": "#menu-mobile" })],
            -1
          );
        }),
        s = [u],
        l = i(function () {
          return Object(c["h"])(
            "svg",
            { width: "32", height: "32" },
            [Object(c["h"])("use", { "xlink:href": "#close" })],
            -1
          );
        }),
        b = [l],
        f = { class: "navigation" },
        d = { key: 0, class: "navigation__link link" },
        v = i(function () {
          return Object(c["h"])(
            "svg",
            { width: "32", height: "32" },
            [Object(c["h"])("use", { "xlink:href": "#menu" })],
            -1
          );
        }),
        O = [v],
        j = i(function () {
          return Object(c["h"])(
            "svg",
            { width: "32", height: "32" },
            [Object(c["h"])("use", { "xlink:href": "#close" })],
            -1
          );
        }),
        g = [j],
        h = { class: "navigation__lang lang" },
        _ = { key: 0, class: "nav-block", id: "slide" },
        m = { class: "menu" },
        k = { class: "menu__item" },
        p = { class: "menu__item--link", href: "#" },
        y = i(function () {
          return Object(c["h"])(
            "div",
            { class: "social" },
            [
              Object(c["h"])("ul", { class: "social__list" }, [
                Object(c["h"])("li", { class: "menu__item social__item" }, [
                  Object(c["h"])(
                    "a",
                    { href: "#", class: "menu__item--link social__item--link" },
                    [
                      Object(c["h"])(
                        "svg",
                        {
                          width: "32",
                          height: "32",
                          class: "social__item--hover",
                        },
                        [Object(c["h"])("use", { "xlink:href": "#telegram" })]
                      ),
                    ]
                  ),
                ]),
              ]),
            ],
            -1
          );
        }),
        w = { key: 0, class: "navigation__lang mobile-lang" },
        A = { key: 0, class: "overlay" },
        S = Object(c["l"])({
          __name: "Navigation",
          setup: function (e) {
            var t = Object(c["F"])([
                { id: 0, title: "Парковка" },
                { id: 1, title: "Страховка" },
                { id: 2, title: "Бензин" },
                { id: 3, title: "Обслуживание" },
              ]),
              n = Object(c["F"])(!1),
              i = Object(c["F"])(!0),
              u = Object(c["F"])(0),
              l = function () {
                n.value = !n.value;
              },
              v = function () {
                i.value = !i.value;
              },
              j = function () {
                u.value = window.innerWidth;
              };
            window.addEventListener("resize", j), j();
            var S = Object(c["c"])(function () {
              return u.value >= 320 && u.value <= 768;
            });
            return (
              Object(c["y"])(function () {
                window.removeEventListener("resize", j), j();
              }),
              function (e, j) {
                return (
                  Object(c["A"])(),
                  Object(c["g"])("div", r, [
                    Object(c["h"])("div", a, [
                      Object(c["M"])(S)
                        ? (Object(c["A"])(),
                          Object(c["g"])("p", o, [
                            n.value
                              ? (Object(c["A"])(),
                                Object(c["g"])(
                                  "button",
                                  {
                                    key: 1,
                                    class: "link__btn link__btn--close",
                                    onClick: l,
                                  },
                                  b
                                ))
                              : (Object(c["A"])(),
                                Object(c["g"])(
                                  "button",
                                  {
                                    key: 0,
                                    class: "link__btn link__btn--mobile",
                                    onClick: l,
                                  },
                                  s
                                )),
                          ]))
                        : Object(c["f"])("", !0),
                      Object(c["h"])("div", f, [
                        u.value > 767
                          ? (Object(c["A"])(),
                            Object(c["g"])("div", d, [
                              Object(c["k"])(
                                c["b"],
                                { name: "btn", mode: "in-out" },
                                {
                                  default: Object(c["R"])(function () {
                                    return [
                                      Object(c["h"])("p", null, [
                                        n.value
                                          ? (Object(c["A"])(),
                                            Object(c["g"])(
                                              "button",
                                              {
                                                key: 1,
                                                class:
                                                  "link__btn link__btn--close",
                                                onClick: l,
                                              },
                                              g
                                            ))
                                          : (Object(c["A"])(),
                                            Object(c["g"])(
                                              "button",
                                              {
                                                key: 0,
                                                class: "link__btn",
                                                onClick: l,
                                              },
                                              O
                                            )),
                                      ]),
                                    ];
                                  }),
                                  _: 1,
                                }
                              ),
                            ]))
                          : Object(c["f"])("", !0),
                        Object(c["h"])("div", h, [
                          i.value
                            ? (Object(c["A"])(),
                              Object(c["g"])(
                                "button",
                                { key: 0, class: "lang__btn", onClick: v },
                                " Eng "
                              ))
                            : (Object(c["A"])(),
                              Object(c["g"])(
                                "button",
                                { key: 1, onClick: v, class: "lang__btn" },
                                "Рус"
                              )),
                        ]),
                      ]),
                      Object(c["k"])(
                        c["b"],
                        { name: n.value ? "slide-fade" : "slide-fade-reverse" },
                        {
                          default: Object(c["R"])(function () {
                            return [
                              !0 === n.value
                                ? (Object(c["A"])(),
                                  Object(c["g"])("div", _, [
                                    Object(c["h"])("div", m, [
                                      (Object(c["A"])(!0),
                                      Object(c["g"])(
                                        c["a"],
                                        null,
                                        Object(c["G"])(t.value, function (e) {
                                          return (
                                            Object(c["A"])(),
                                            Object(c["g"])(
                                              "ul",
                                              {
                                                class: "menu__list",
                                                key: e.id,
                                              },
                                              [
                                                Object(c["h"])("li", k, [
                                                  Object(c["h"])(
                                                    "a",
                                                    p,
                                                    Object(c["K"])(e.title),
                                                    1
                                                  ),
                                                ]),
                                              ]
                                            )
                                          );
                                        }),
                                        128
                                      )),
                                      y,
                                    ]),
                                    Object(c["M"])(S)
                                      ? (Object(c["A"])(),
                                        Object(c["g"])("div", w, [
                                          i.value
                                            ? (Object(c["A"])(),
                                              Object(c["g"])(
                                                "button",
                                                {
                                                  key: 0,
                                                  onClick: v,
                                                  class: "lang__btn",
                                                },
                                                " Eng "
                                              ))
                                            : (Object(c["A"])(),
                                              Object(c["g"])(
                                                "button",
                                                {
                                                  key: 1,
                                                  onClick: v,
                                                  class: "lang__btn",
                                                },
                                                " Рус "
                                              )),
                                        ]))
                                      : Object(c["f"])("", !0),
                                  ]))
                                : Object(c["f"])("", !0),
                            ];
                          }),
                          _: 1,
                        },
                        8,
                        ["name"]
                      ),
                    ]),
                    n.value
                      ? (Object(c["A"])(), Object(c["g"])("div", A))
                      : Object(c["f"])("", !0),
                  ])
                );
              }
            );
          },
        }),
        x = (n("6b1e"), n("6b0d")),
        C = n.n(x);
      const F = C()(S, [["__scopeId", "data-v-6f0c9069"]]);
      t["a"] = F;
    },
  },
]);
//# sourceMappingURL=chunk-dbec5910.40a59d04.js.map
