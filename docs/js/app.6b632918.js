/* eslint-disable */
(function (t) {
  function e(e) {
    for (
      var i, r, l = e[0], c = e[1], o = e[2], u = 0, _ = [];
      u < l.length;
      u++
    )
      (r = l[u]),
        Object.prototype.hasOwnProperty.call(s, r) && s[r] && _.push(s[r][0]),
        (s[r] = 0);
    for (i in c) Object.prototype.hasOwnProperty.call(c, i) && (t[i] = c[i]);
    d && d(e);
    while (_.length) _.shift()();
    return n.push.apply(n, o || []), a();
  }
  function a() {
    for (var t, e = 0; e < n.length; e++) {
      for (var a = n[e], i = !0, l = 1; l < a.length; l++) {
        var c = a[l];
        0 !== s[c] && (i = !1);
      }
      i && (n.splice(e--, 1), (t = r((r.s = a[0]))));
    }
    return t;
  }
  var i = {},
    s = { app: 0 },
    n = [];
  function r(e) {
    if (i[e]) return i[e].exports;
    var a = (i[e] = { i: e, l: !1, exports: {} });
    return t[e].call(a.exports, a, a.exports, r), (a.l = !0), a.exports;
  }
  (r.m = t),
    (r.c = i),
    (r.d = function (t, e, a) {
      r.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: a });
    }),
    (r.r = function (t) {
      "undefined" !== typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(t, "__esModule", { value: !0 });
    }),
    (r.t = function (t, e) {
      if ((1 & e && (t = r(t)), 8 & e)) return t;
      if (4 & e && "object" === typeof t && t && t.__esModule) return t;
      var a = Object.create(null);
      if (
        (r.r(a),
        Object.defineProperty(a, "default", { enumerable: !0, value: t }),
        2 & e && "string" != typeof t)
      )
        for (var i in t)
          r.d(
            a,
            i,
            function (e) {
              return t[e];
            }.bind(null, i)
          );
      return a;
    }),
    (r.n = function (t) {
      var e =
        t && t.__esModule
          ? function () {
              return t["default"];
            }
          : function () {
              return t;
            };
      return r.d(e, "a", e), e;
    }),
    (r.o = function (t, e) {
      return Object.prototype.hasOwnProperty.call(t, e);
    }),
    (r.p = "");
  var l = (window["webpackJsonp"] = window["webpackJsonp"] || []),
    c = l.push.bind(l);
  (l.push = e), (l = l.slice());
  for (var o = 0; o < l.length; o++) e(l[o]);
  var d = c;
  n.push([0, "chunk-vendors"]), a();
})({
  0: function (t, e, a) {
    t.exports = a("cd49");
  },
  "0796": function (t, e, a) {},
  "0b3f": function (t, e, a) {
    t.exports = {
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
  1364: function (t, e, a) {
    "use strict";
    a("ce66");
  },
  "137e": function (t, e, a) {
    t.exports = a.p + "img/car-1.69acf491.png";
  },
  "26bf": function (t, e, a) {},
  "2fea": function (t, e, a) {
    t.exports = a.p + "img/slider-3.3a884404.png";
  },
  "3a0f": function (t, e, a) {
    "use strict";
    a("4731");
  },
  "3e2a": function (t, e, a) {},
  4172: function (t, e, a) {
    t.exports = a.p + "img/slider-2.54d42d5c.png";
  },
  "425e": function (t, e, a) {
    "use strict";
    a("3e2a");
  },
  4731: function (t, e, a) {},
  "4da1": function (t, e, a) {},
  "5c0b": function (t, e, a) {
    "use strict";
    a("9c0c");
  },
  "6c43": function (t, e, a) {
    "use strict";
    a("c9f8");
  },
  8986: function (t, e, a) {
    "use strict";
    a("f534");
  },
  "92b9": function (t, e, a) {
    "use strict";
    a("edea");
  },
  "965e": function (t, e, a) {
    "use strict";
    a("ba79");
  },
  "9c0c": function (t, e, a) {
    t.exports = {
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
  a45d: function (t, e, a) {
    "use strict";
    a("ca9b");
  },
  ae0d: function (t, e, a) {
    "use strict";
    a("0796");
  },
  ba79: function (t, e, a) {},
  c9f8: function (t, e, a) {},
  ca9b: function (t, e, a) {},
  cd49: function (t, e, a) {
    "use strict";
    a.r(e);
    a("e260"), a("e6cf"), a("cca6"), a("a79d");
    var i = a("2b0e"),
      s = function () {
        var t = this,
          e = t.$createElement,
          a = t._self._c || e;
        return a(
          "div",
          { staticClass: "container", attrs: { id: "app" } },
          [a("Icon"), a("router-view")],
          1
        );
      },
      n = [],
      r = function () {
        var t = this,
          e = t.$createElement,
          a = t._self._c || e;
        return a(
          "svg",
          {
            staticStyle: { display: "none" },
            attrs: { xmlns: "http://www.w3.org/2000/svg" },
          },
          [
            a(
              "symbol",
              {
                attrs: {
                  id: "close",
                  width: "32",
                  height: "32",
                  viewBox: "0 0 32 32",
                },
              },
              [
                a("path", {
                  attrs: {
                    d: "M24 8L8 24",
                    stroke: "white",
                    "stroke-width": "3",
                    "stroke-linecap": "round",
                    "stroke-linejoin": "round",
                  },
                }),
                a("path", {
                  attrs: {
                    d: "M8 8L24 24",
                    stroke: "white",
                    "stroke-width": "3",
                    "stroke-linecap": "round",
                    "stroke-linejoin": "round",
                  },
                }),
              ]
            ),
            a(
              "symbol",
              { attrs: { id: "menu", viewBox: "0 0 32 32", fill: "none" } },
              [
                a("path", {
                  attrs: {
                    d: "M4 16H28",
                    stroke: "white",
                    "stroke-width": "3",
                    "stroke-linecap": "round",
                    "stroke-linejoin": "round",
                  },
                }),
                a("path", {
                  attrs: {
                    d: "M4 8H28",
                    stroke: "white",
                    "stroke-width": "3",
                    "stroke-linecap": "round",
                    "stroke-linejoin": "round",
                  },
                }),
                a("path", {
                  attrs: {
                    d: "M4 24H28",
                    stroke: "white",
                    "stroke-width": "3",
                    "stroke-linecap": "round",
                    "stroke-linejoin": "round",
                  },
                }),
              ]
            ),
            a(
              "symbol",
              {
                attrs: {
                  id: "menu-mobile",
                  viewBox: "0 0 32 32",
                  fill: "none",
                },
              },
              [
                a("path", {
                  attrs: {
                    d: "M4 16H28",
                    stroke: "#121212",
                    "stroke-width": "3",
                    "stroke-linecap": "round",
                    "stroke-linejoin": "round",
                  },
                }),
                a("path", {
                  attrs: {
                    d: "M4 8H28",
                    stroke: "#121212",
                    "stroke-width": "3",
                    "stroke-linecap": "round",
                    "stroke-linejoin": "round",
                  },
                }),
                a("path", {
                  attrs: {
                    d: "M4 24H28",
                    stroke: "#121212",
                    "stroke-width": "3",
                    "stroke-linecap": "round",
                    "stroke-linejoin": "round",
                  },
                }),
              ]
            ),
            a(
              "symbol",
              { attrs: { id: "gps", viewBox: "0 0 18 20", fill: "none" } },
              [
                a("path", {
                  attrs: {
                    d: "M16.0802 8.36364C16.0802 14.0909 8.54011 19 8.54011 19C8.54011 19 1 14.0909 1 8.36364C1 6.41068 1.7944 4.53771 3.20845 3.15676C4.62249 1.77581 6.54035 1 8.54011 1C10.5399 1 12.4577 1.77581 13.8718 3.15676C15.2858 4.53771 16.0802 6.41068 16.0802 8.36364Z",
                    stroke: "#999999",
                    "stroke-width": "2",
                    "stroke-linecap": "round",
                    "stroke-linejoin": "round",
                  },
                }),
                a("path", {
                  attrs: {
                    d: "M8.5401 10.8182C9.9282 10.8182 11.0535 9.71925 11.0535 8.36364C11.0535 7.00803 9.9282 5.90909 8.5401 5.90909C7.15201 5.90909 6.02673 7.00803 6.02673 8.36364C6.02673 9.71925 7.15201 10.8182 8.5401 10.8182Z",
                    stroke: "#999999",
                    "stroke-width": "2",
                    "stroke-linecap": "round",
                    "stroke-linejoin": "round",
                  },
                }),
              ]
            ),
            a(
              "symbol",
              { attrs: { id: "telegram", viewBox: "0 0 32 32", fill: "none" } },
              [
                a("path", {
                  attrs: {
                    "fill-rule": "evenodd",
                    "clip-rule": "evenodd",
                    d: "M32 16C32 24.8366 24.8366 32 16 32C7.16344 32 0 24.8366 0 16C0 7.16344 7.16344 0 16 0C24.8366 0 32 7.16344 32 16ZM10.7144 14.5343C9.11157 15.2341 7.46472 15.9532 5.95883 16.7826L5.95873 16.7828C5.17241 17.3585 6.21758 17.7657 7.19803 18.1476C7.35391 18.2084 7.50814 18.2685 7.65313 18.3285C7.77377 18.3656 7.89647 18.4047 8.02079 18.4443C9.11124 18.7917 10.3272 19.1791 11.3858 18.5963C13.1248 17.5973 14.766 16.4424 16.4059 15.2883C16.9432 14.9102 17.4803 14.5322 18.0207 14.1598C18.046 14.1436 18.0746 14.1251 18.1058 14.1048C18.5662 13.8064 19.6016 13.1353 19.2186 14.06C18.313 15.0504 17.3429 15.9272 16.3676 16.8087C15.7103 17.4027 15.0506 17.999 14.4066 18.6336C13.8457 19.0894 13.2633 20.0059 13.8914 20.644C15.3379 21.6567 16.8071 22.6449 18.2755 23.6325C18.7533 23.9538 19.231 24.2752 19.7079 24.5972C20.516 25.2425 21.779 24.7206 21.9567 23.7123C22.0357 23.2485 22.115 22.7847 22.1944 22.3208C22.6328 19.7578 23.0713 17.1938 23.4587 14.6223C23.5113 14.219 23.571 13.8156 23.6307 13.4121C23.7755 12.434 23.9204 11.4547 23.9656 10.4714C23.849 9.49009 22.6592 9.70585 21.997 9.9265C18.5935 11.2216 15.224 12.6126 11.8679 14.0282C11.4877 14.1967 11.1023 14.3649 10.7144 14.5343Z",
                    fill: "currentColor",
                  },
                }),
              ]
            ),
            a(
              "symbol",
              { attrs: { id: "facebook", viewBox: "0 0 32 32", fill: "none" } },
              [
                a("path", {
                  attrs: {
                    d: "M32 16C32 7.1625 24.8375 0 16 0C7.1625 0 0 7.1625 0 16C0 23.9875 5.85 30.6062 13.5 31.8062V20.625H9.4375V16H13.5V12.475C13.5 8.46563 15.8875 6.25 19.5438 6.25C21.2938 6.25 23.125 6.5625 23.125 6.5625V10.5H21.1063C19.1188 10.5 18.5 11.7344 18.5 13V16H22.9375L22.2281 20.625H18.5V31.8062C26.15 30.6062 32 23.9875 32 16Z",
                    fill: "currentColor",
                  },
                }),
              ]
            ),
            a(
              "symbol",
              {
                attrs: { id: "instagram", viewBox: "0 0 32 32", fill: "none" },
              },
              [
                a("path", {
                  attrs: {
                    "fill-rule": "evenodd",
                    "clip-rule": "evenodd",
                    d: "M16 0C7.16344 0 0 7.16344 0 16C0 24.8366 7.16344 32 16 32C24.8366 32 32 24.8366 32 16C32 7.16344 24.8366 0 16 0ZM12.4822 7.51824C13.3924 7.47682 13.6833 7.46668 16.0008 7.46668H15.9981C18.3164 7.46668 18.6062 7.47682 19.5164 7.51824C20.4248 7.55984 21.0453 7.70366 21.5893 7.91469C22.1511 8.13247 22.6258 8.42403 23.1004 8.8987C23.5751 9.37301 23.8667 9.84911 24.0853 10.4104C24.2951 10.9529 24.4391 11.573 24.4818 12.4815C24.5227 13.3917 24.5333 13.6826 24.5333 16.0001C24.5333 18.3176 24.5227 18.6078 24.4818 19.518C24.4391 20.4261 24.2951 21.0464 24.0853 21.5891C23.8667 22.1502 23.5751 22.6263 23.1004 23.1006C22.6263 23.5753 22.1509 23.8676 21.5898 24.0855C21.0469 24.2965 20.4261 24.4404 19.5176 24.482C18.6074 24.5234 18.3174 24.5335 15.9997 24.5335C13.6824 24.5335 13.3917 24.5234 12.4815 24.482C11.5732 24.4404 10.9529 24.2965 10.41 24.0855C9.84909 23.8676 9.37299 23.5753 8.89886 23.1006C8.42436 22.6263 8.1328 22.1502 7.91467 21.589C7.70382 21.0464 7.56 20.4263 7.51822 19.5178C7.47697 18.6076 7.46666 18.3176 7.46666 16.0001C7.46666 13.6826 7.47733 13.3915 7.51804 12.4813C7.55893 11.5732 7.70293 10.9529 7.91449 10.4102C8.13316 9.84911 8.42472 9.37301 8.89939 8.8987C9.3737 8.4242 9.8498 8.13265 10.411 7.91469C10.9536 7.70366 11.5737 7.55984 12.4822 7.51824Z",
                    fill: "currentColor",
                  },
                }),
                a("path", {
                  attrs: {
                    "fill-rule": "evenodd",
                    "clip-rule": "evenodd",
                    d: "M15.2353 9.00445C15.3839 9.00422 15.5438 9.00429 15.7164 9.00437L16.0008 9.00445C18.2792 9.00445 18.5493 9.01263 19.449 9.05352C20.281 9.09156 20.7326 9.23059 21.0334 9.34739C21.4316 9.50206 21.7155 9.68695 22.014 9.98562C22.3127 10.2843 22.4976 10.5687 22.6526 10.967C22.7694 11.2674 22.9086 11.719 22.9465 12.551C22.9874 13.4505 22.9963 13.7208 22.9963 15.9981C22.9963 18.2755 22.9874 18.5457 22.9465 19.4453C22.9084 20.2773 22.7694 20.7288 22.6526 21.0293C22.4979 21.4275 22.3127 21.7111 22.014 22.0096C21.7153 22.3082 21.4318 22.4931 21.0334 22.6478C20.7329 22.7651 20.281 22.9038 19.449 22.9418C18.5494 22.9827 18.2792 22.9916 16.0008 22.9916C13.7222 22.9916 13.4522 22.9827 12.5526 22.9418C11.7206 22.9034 11.269 22.7644 10.968 22.6476C10.5698 22.4929 10.2854 22.3081 9.98669 22.0094C9.68802 21.7107 9.50313 21.427 9.34811 21.0286C9.23131 20.7281 9.09211 20.2766 9.05424 19.4446C9.01335 18.545 9.00517 18.2748 9.00517 15.996C9.00517 13.7172 9.01335 13.4484 9.05424 12.5488C9.09228 11.7168 9.23131 11.2653 9.34811 10.9645C9.50278 10.5662 9.68802 10.2818 9.98669 9.98313C10.2854 9.68446 10.5698 9.49957 10.968 9.34455C11.2688 9.22721 11.7206 9.08854 12.5526 9.05032C13.3398 9.01476 13.6449 9.0041 15.2353 9.00232V9.00445ZM20.5559 10.4213C19.9905 10.4213 19.5319 10.8795 19.5319 11.445C19.5319 12.0103 19.9905 12.469 20.5559 12.469C21.1212 12.469 21.5799 12.0103 21.5799 11.445C21.5799 10.8797 21.1212 10.421 20.5559 10.421V10.4213ZM11.6185 16.0001C11.6185 13.58 13.5806 11.6179 16.0006 11.6178C18.4207 11.6178 20.3824 13.58 20.3824 16.0001C20.3824 18.4202 18.4209 20.3815 16.0008 20.3815C13.5807 20.3815 11.6185 18.4202 11.6185 16.0001Z",
                    fill: "currentColor",
                  },
                }),
                a("path", {
                  attrs: {
                    d: "M16.0008 13.1556C17.5717 13.1556 18.8453 14.4291 18.8453 16.0001C18.8453 17.571 17.5717 18.8446 16.0008 18.8446C14.4298 18.8446 13.1563 17.571 13.1563 16.0001C13.1563 14.4291 14.4298 13.1556 16.0008 13.1556Z",
                    fill: "currentColor",
                  },
                }),
              ]
            ),
            a(
              "symbol",
              { attrs: { id: "arrow", viewBox: "0 0 10 20", fill: "none" } },
              [
                a("path", {
                  attrs: {
                    d: "M1 1L9 10L1 19",
                    stroke: "#EEEEEE",
                    "stroke-width": "2",
                    "stroke-linecap": "round",
                    "stroke-linejoin": "round",
                  },
                }),
              ]
            ),
            a(
              "symbol",
              {
                attrs: {
                  id: "arrow-breadcrumbs",
                  viewBox: "0 0 6 8",
                  fill: "none",
                },
              },
              [
                a("path", {
                  attrs: { d: "M0 0L6 4.03L0 8V0Z", fill: "#999999" },
                }),
              ]
            ),
          ]
        );
      },
      l = [],
      c = a("2877"),
      o = {},
      d = Object(c["a"])(o, r, l, !1, null, null, null),
      u = d.exports,
      _ = i["a"].extend({ components: { Icon: u } }),
      v = _,
      C = (a("5c0b"), Object(c["a"])(v, s, n, !1, null, null, null)),
      p = C.exports,
      f = a("8c4f"),
      h = function () {
        var t = this,
          e = t.$createElement,
          a = t._self._c || e;
        return a(
          "div",
          { staticClass: "page" },
          [
            a("MainInfo", { staticClass: "info" }),
            a("Slider", { staticClass: "slider-block" }),
          ],
          1
        );
      },
      m = [],
      b = a("bee2"),
      g = a("d4ec"),
      k = a("262e"),
      y = a("2caf"),
      w = a("9ab4"),
      j = a("1b40"),
      O = function () {
        var t = this,
          e = t.$createElement,
          a = t._self._c || e;
        return a("div", { staticClass: "wrapper" }, [
          a("div", { staticClass: "overlay" }),
          a(
            "div",
            { ref: "img", staticClass: "slider" },
            t._l(t.slider, function (e) {
              return a(
                "div",
                {
                  key: e.id,
                  staticClass: "slider__img",
                  style: { backgroundImage: "url(" + e.img + ")" },
                },
                [
                  a("div", { staticClass: "content" }, [
                    a("h2", { staticClass: "content__title" }, [
                      t._v(t._s(e.title)),
                    ]),
                    a("p", { staticClass: "content__descreption" }, [
                      t._v(" " + t._s(e.description) + " "),
                    ]),
                    a(
                      "button",
                      {
                        staticClass: "content__btn",
                        style: { background: e.background },
                        on: {
                          mouseover: function (a) {
                            return t.hoverButton(e.id, a.target);
                          },
                          mouseleave: function (a) {
                            return t.getOriginalColor(a.target, e.id);
                          },
                        },
                      },
                      [t._v(" Подробнее ")]
                    ),
                  ]),
                  a(
                    "div",
                    { staticClass: "dote" },
                    t._l(t.slider, function (e) {
                      return a("button", {
                        key: e.id,
                        staticClass: "dote__item",
                        class: {
                          "dote__item--active": e.id === t.activeSlider,
                        },
                        on: {
                          click: function (a) {
                            return a.target !== a.currentTarget
                              ? null
                              : t.getSlideForDote(e.id, a);
                          },
                        },
                      });
                    }),
                    0
                  ),
                  a(
                    "button",
                    {
                      staticClass: "action-right",
                      on: { click: t.getNextImage },
                    },
                    [
                      a(
                        "svg",
                        {
                          staticClass: "svg-left",
                          attrs: { width: "10", height: "20" },
                        },
                        [a("use", { attrs: { "xlink:href": "#arrow" } })]
                      ),
                    ]
                  ),
                  a(
                    "button",
                    {
                      staticClass: "action-left",
                      on: { click: t.getPrevImage },
                    },
                    [
                      a(
                        "svg",
                        {
                          staticClass: "svg-right",
                          attrs: { width: "10", height: "20" },
                        },
                        [a("use", { attrs: { "xlink:href": "#arrow" } })]
                      ),
                    ]
                  ),
                ]
              );
            }),
            0
          ),
        ]);
      },
      x = [],
      M = a("0b3f"),
      E = a.n(M),
      L = (function (t) {
        Object(k["a"])(i, t);
        var e = Object(y["a"])(i);
        function i() {
          var t;
          return (
            Object(g["a"])(this, i),
            (t = e.apply(this, arguments)),
            (t.imageWidth = 0),
            (t.activeSlider = 0),
            (t.slider = [
              {
                id: 0,
                img: a("f453"),
                title: "Бесплатная парковка",
                description:
                  "Оставляйте машину на платных городских парковках и разрешенных местах, не нарушая ПДД, а также в аэропортах.",
                background: E.a.green,
              },
              {
                id: 1,
                img: a("4172"),
                title: "Страховка",
                description: "Полная страховка страховка автомобиля",
                background: E.a.blue,
              },
              {
                id: 2,
                img: a("2fea"),
                title: "Бензин",
                description: "Полный бак на любой заправке города за наш счёт",
                background: E.a.red,
              },
              {
                id: 3,
                img: a("e8b1"),
                title: "Обслуживание",
                description: "Автомобиль проходит еженедельное ТО",
                background: E.a.violet,
              },
            ]),
            t
          );
        }
        return (
          Object(b["a"])(i, [
            {
              key: "mounted",
              value: function () {
                window.addEventListener("resize", this.handleResize),
                  this.handleResize();
              },
            },
            {
              key: "destroyed",
              value: function () {
                window.removeEventListener("resize", this.handleResize);
              },
            },
            {
              key: "handleResize",
              value: function () {
                var t = this.$refs.img.clientWidth;
                return (this.imageWidth = t);
              },
            },
            {
              key: "getNextImage",
              value: function () {
                this.activeSlider++,
                  this.activeSlider >= this.slider.length &&
                    (this.activeSlider = 0),
                  this.sliderStylePosition;
              },
            },
            {
              key: "getPrevImage",
              value: function () {
                this.activeSlider--,
                  this.activeSlider < 0 &&
                    (this.activeSlider = this.slider.length - 1),
                  this.sliderStylePosition;
              },
            },
            {
              key: "getSlideForDote",
              value: function (t, e) {
                this.activeSlider !== t && (this.activeSlider = t),
                  this.sliderStylePosition;
              },
            },
            {
              key: "hoverButton",
              value: function (t, e) {
                0 === t
                  ? (e.style.background = E.a.hoverGreen)
                  : 1 === t
                  ? (e.style.background = E.a.hoverBlue)
                  : 2 === t
                  ? (e.style.background = E.a.hoverRed)
                  : 3 === t && (e.style.background = E.a.hoverViolet);
              },
            },
            {
              key: "getOriginalColor",
              value: function (t, e) {
                0 === e
                  ? (t.style.background = E.a.green)
                  : 1 === e
                  ? (t.style.background = E.a.blue)
                  : 2 === e
                  ? (t.style.background = E.a.red)
                  : 3 === e && (t.style.background = E.a.violet);
              },
            },
            {
              key: "sliderStylePosition",
              get: function () {
                var t = document.querySelector(".slider");
                return (t.style.marginLeft =
                  -this.imageWidth * this.activeSlider + "px");
              },
            },
          ]),
          i
        );
      })(j["b"]);
    L = Object(w["a"])([Object(j["a"])({})], L);
    var S = L,
      P = S,
      N = (a("965e"), Object(c["a"])(P, O, x, !1, null, "09d6882e", null)),
      $ = N.exports,
      B = function () {
        var t = this,
          e = t.$createElement,
          a = t._self._c || e;
        return a(
          "div",
          { staticClass: "wrapper" },
          [
            a("Navigation"),
            a("div", { staticClass: "wrapper__block" }, [
              a("div", { staticClass: "main-nav" }, [
                a(
                  "h1",
                  [
                    a(
                      "router-link",
                      {
                        staticClass: "main-nav__company",
                        attrs: { to: { name: "MainPage" } },
                      },
                      [t._v("Need for drive")]
                    ),
                  ],
                  1
                ),
                a("p", { staticClass: "main-nav__city-name" }, [
                  a("svg", { attrs: { width: "18", height: "20" } }, [
                    a("use", { attrs: { "xlink:href": "#gps" } }),
                  ]),
                  t._v(" Ульяновск "),
                ]),
              ]),
              a(
                "div",
                { staticClass: "main-block" },
                [
                  a("h1", { staticClass: "main-block__title" }, [
                    t._v("Каршеринг"),
                  ]),
                  a(
                    "h1",
                    {
                      staticClass: "main-block__title main-block__title--green",
                    },
                    [t._v(" Need for drive ")]
                  ),
                  a("p", { staticClass: "main-block__discreption" }, [
                    t._v(" Поминутная аренда авто твоего города "),
                  ]),
                  a(
                    "router-link",
                    {
                      staticClass: "main-block__booking",
                      attrs: { to: { name: "location" } },
                    },
                    [t._v("Забронировать")]
                  ),
                ],
                1
              ),
              t._m(0),
            ]),
          ],
          1
        );
      },
      z = [
        function () {
          var t = this,
            e = t.$createElement,
            a = t._self._c || e;
          return a("div", { staticClass: "main-footer" }, [
            a("p", { staticClass: "main-footer__info" }, [
              t._v("© 2016-2019 «Need for drive»"),
            ]),
            a(
              "p",
              { staticClass: "main-footer__info main-footer__info--number" },
              [t._v(" 8 (495) 234-22-44 ")]
            ),
          ]);
        },
      ],
      I = function () {
        var t = this,
          e = t.$createElement,
          a = t._self._c || e;
        return a("div", { staticClass: "container" }, [
          a(
            "div",
            { staticClass: "wrapper" },
            [
              t.navigationWidthMobile
                ? a("p", { staticClass: "link-pos" }, [
                    t.showNavigationLink
                      ? a(
                          "button",
                          {
                            staticClass: "link__btn link__btn--close",
                            on: { click: t.openMenu },
                          },
                          [
                            a("svg", { attrs: { width: "32", height: "32" } }, [
                              a("use", { attrs: { "xlink:href": "#close" } }),
                            ]),
                          ]
                        )
                      : a(
                          "button",
                          {
                            staticClass: "link__btn link__btn--mobile",
                            on: { click: t.openMenu },
                          },
                          [
                            a("svg", { attrs: { width: "32", height: "32" } }, [
                              a("use", {
                                attrs: { "xlink:href": "#menu-mobile" },
                              }),
                            ]),
                          ]
                        ),
                  ])
                : t._e(),
              a("div", { staticClass: "navigation" }, [
                t.witdthMobile > 767
                  ? a(
                      "div",
                      { staticClass: "navigation__link link" },
                      [
                        a(
                          "transition",
                          { attrs: { name: "btn", mode: "in-out" } },
                          [
                            a("p", [
                              t.showNavigationLink
                                ? a(
                                    "button",
                                    {
                                      staticClass: "link__btn link__btn--close",
                                      on: { click: t.openMenu },
                                    },
                                    [
                                      a(
                                        "svg",
                                        {
                                          attrs: { width: "32", height: "32" },
                                        },
                                        [
                                          a("use", {
                                            attrs: { "xlink:href": "#close" },
                                          }),
                                        ]
                                      ),
                                    ]
                                  )
                                : a(
                                    "button",
                                    {
                                      staticClass: "link__btn",
                                      on: { click: t.openMenu },
                                    },
                                    [
                                      a(
                                        "svg",
                                        {
                                          attrs: { width: "32", height: "32" },
                                        },
                                        [
                                          a("use", {
                                            attrs: { "xlink:href": "#menu" },
                                          }),
                                        ]
                                      ),
                                    ]
                                  ),
                            ]),
                          ]
                        ),
                      ],
                      1
                    )
                  : t._e(),
                a("div", { staticClass: "navigation__lang lang" }, [
                  t.showEngLang
                    ? a(
                        "button",
                        {
                          staticClass: "lang__btn",
                          on: { click: t.changeLanguage },
                        },
                        [t._v(" Eng ")]
                      )
                    : a(
                        "button",
                        {
                          staticClass: "lang__btn",
                          on: { click: t.changeLanguage },
                        },
                        [t._v("Рус")]
                      ),
                ]),
              ]),
              a(
                "transition",
                {
                  attrs: {
                    name: t.showNavigationLink
                      ? "slide-fade"
                      : "slide-fade-reverse",
                  },
                },
                [
                  !0 === t.showNavigationLink
                    ? a(
                        "div",
                        { staticClass: "nav-block", attrs: { id: "slide" } },
                        [
                          a(
                            "div",
                            { staticClass: "menu" },
                            [
                              t._l(t.menuList, function (e) {
                                return a(
                                  "ul",
                                  { key: e.id, staticClass: "menu__list" },
                                  [
                                    a("li", { staticClass: "menu__item" }, [
                                      a(
                                        "a",
                                        {
                                          staticClass: "menu__item--link",
                                          attrs: { href: "#" },
                                        },
                                        [t._v(t._s(e.title))]
                                      ),
                                    ]),
                                  ]
                                );
                              }),
                              a("div", { staticClass: "social" }, [
                                a("ul", { staticClass: "social__list" }, [
                                  a(
                                    "li",
                                    { staticClass: "menu__item social__item" },
                                    [
                                      a(
                                        "a",
                                        {
                                          staticClass:
                                            "menu__item--link social__item--link",
                                          attrs: { href: "#" },
                                        },
                                        [
                                          a(
                                            "svg",
                                            {
                                              staticClass:
                                                "social__item--hover",
                                              attrs: {
                                                width: "32",
                                                height: "32",
                                              },
                                            },
                                            [
                                              a("use", {
                                                attrs: {
                                                  "xlink:href": "#telegram",
                                                },
                                              }),
                                            ]
                                          ),
                                        ]
                                      ),
                                    ]
                                  ),
                                  a("li", { staticClass: "social__item" }, [
                                    a(
                                      "a",
                                      {
                                        staticClass:
                                          "menu__item--link social__item--link",
                                        attrs: { href: "#" },
                                      },
                                      [
                                        a(
                                          "svg",
                                          {
                                            staticClass: "social__item--hover",
                                            attrs: {
                                              width: "32",
                                              height: "32",
                                            },
                                          },
                                          [
                                            a("use", {
                                              attrs: {
                                                "xlink:href": "#facebook",
                                              },
                                            }),
                                          ]
                                        ),
                                      ]
                                    ),
                                  ]),
                                  a("li", { staticClass: "social__item" }, [
                                    a(
                                      "a",
                                      {
                                        staticClass:
                                          "menu__item--link social__item--link",
                                        attrs: { href: "#" },
                                      },
                                      [
                                        a(
                                          "svg",
                                          {
                                            staticClass: "social__item--hover",
                                            attrs: {
                                              width: "32",
                                              height: "32",
                                            },
                                          },
                                          [
                                            a("use", {
                                              attrs: {
                                                "xlink:href": "#instagram",
                                              },
                                            }),
                                          ]
                                        ),
                                      ]
                                    ),
                                  ]),
                                ]),
                              ]),
                            ],
                            2
                          ),
                          t.navigationWidthMobile
                            ? a(
                                "div",
                                { staticClass: "navigation__lang mobile-lang" },
                                [
                                  t.showEngLang
                                    ? a(
                                        "button",
                                        {
                                          staticClass: "lang__btn",
                                          on: { click: t.changeLanguage },
                                        },
                                        [t._v(" Eng ")]
                                      )
                                    : a(
                                        "button",
                                        {
                                          staticClass: "lang__btn",
                                          on: { click: t.changeLanguage },
                                        },
                                        [t._v(" Рус ")]
                                      ),
                                ]
                              )
                            : t._e(),
                        ]
                      )
                    : t._e(),
                ]
              ),
            ],
            1
          ),
          t.showNavigationLink ? a("div", { staticClass: "overlay" }) : t._e(),
        ]);
      },
      H = [],
      W = (function (t) {
        Object(k["a"])(a, t);
        var e = Object(y["a"])(a);
        function a() {
          var t;
          return (
            Object(g["a"])(this, a),
            (t = e.apply(this, arguments)),
            (t.menuList = [
              { id: 0, title: "Парковка" },
              { id: 1, title: "Страховка" },
              { id: 2, title: "Бензин" },
              { id: 3, title: "Обслуживание" },
            ]),
            (t.showNavigationLink = !1),
            (t.showEngLang = !0),
            (t.witdthMobile = 0),
            t
          );
        }
        return (
          Object(b["a"])(a, [
            {
              key: "openMenu",
              value: function () {
                this.showNavigationLink = !this.showNavigationLink;
              },
            },
            {
              key: "changeLanguage",
              value: function () {
                this.showEngLang = !this.showEngLang;
              },
            },
            {
              key: "updateWidth",
              value: function () {
                this.witdthMobile = window.innerWidth;
              },
            },
            {
              key: "navigationWidthMobile",
              get: function () {
                return this.witdthMobile >= 320 && this.witdthMobile <= 768;
              },
            },
            {
              key: "created",
              value: function () {
                window.addEventListener("resize", this.updateWidth),
                  this.updateWidth();
              },
            },
            {
              key: "destroyed",
              value: function () {
                window.removeEventListener("resize", this.updateWidth),
                  this.updateWidth();
              },
            },
          ]),
          a
        );
      })(j["b"]);
    W = Object(w["a"])([Object(j["a"])({})], W);
    var R = W,
      V = R,
      Z = (a("3a0f"), Object(c["a"])(V, I, H, !1, null, "2b7b4096", null)),
      F = Z.exports,
      D = (function (t) {
        Object(k["a"])(a, t);
        var e = Object(y["a"])(a);
        function a() {
          return Object(g["a"])(this, a), e.apply(this, arguments);
        }
        return Object(b["a"])(a);
      })(j["b"]);
    D = Object(w["a"])([Object(j["a"])({ components: { Navigation: F } })], D);
    var T = D,
      G = T,
      A = (a("d818"), Object(c["a"])(G, B, z, !1, null, "dcad2dd4", null)),
      J = A.exports,
      q = (function (t) {
        Object(k["a"])(a, t);
        var e = Object(y["a"])(a);
        function a() {
          return Object(g["a"])(this, a), e.apply(this, arguments);
        }
        return Object(b["a"])(a);
      })(j["b"]);
    q = Object(w["a"])(
      [Object(j["a"])({ components: { Slider: $, MainInfo: J } })],
      q
    );
    var K = q,
      Q = K,
      U = (a("92b9"), Object(c["a"])(Q, h, m, !1, null, "0c74c646", null)),
      X = U.exports,
      Y = function () {
        var t = this,
          e = t.$createElement,
          a = t._self._c || e;
        return a("transition", { attrs: { name: "fade" } }, [
          a("div", { staticClass: "modal" }, [
            a("div", { staticClass: "modal-inner" }, [
              a("p", { staticClass: "modal-inner__title" }, [
                t._v("Подтвердить заказ"),
              ]),
              a("div", { staticClass: "actions" }, [
                a("button", { staticClass: "actions__sucsess" }, [
                  t._v("Подтвердить"),
                ]),
                a("button", { staticClass: "actions__discard" }, [
                  t._v("Вернуться"),
                ]),
              ]),
            ]),
          ]),
        ]);
      },
      tt = [],
      et = (function (t) {
        Object(k["a"])(a, t);
        var e = Object(y["a"])(a);
        function a() {
          return Object(g["a"])(this, a), e.apply(this, arguments);
        }
        return Object(b["a"])(a);
      })(j["b"]);
    et = Object(w["a"])([Object(j["a"])({})], et);
    var at = et,
      it = at,
      st = (a("425e"), Object(c["a"])(it, Y, tt, !1, null, "94c4cc30", null)),
      nt = st.exports,
      rt = function () {
        var t = this,
          e = t.$createElement,
          a = t._self._c || e;
        return a(
          "div",
          { staticClass: "main-wrapper" },
          [
            a("Navigation"),
            a(
              "div",
              { staticClass: "main" },
              [
                a("div", { staticClass: "main-nav" }, [
                  a(
                    "h1",
                    [
                      a(
                        "router-link",
                        {
                          staticClass: "main-nav__company",
                          attrs: { to: { name: "MainPage" } },
                        },
                        [t._v("Need for drive")]
                      ),
                    ],
                    1
                  ),
                  a("p", { staticClass: "main-nav__city-name" }, [
                    a("svg", { attrs: { width: "18", height: "20" } }, [
                      a("use", { attrs: { "xlink:href": "#gps" } }),
                    ]),
                    t._v(" Ульяновск "),
                  ]),
                ]),
                a("BreadcrumbsRoute"),
                a(
                  "div",
                  { staticClass: "additionally-container" },
                  [
                    a("div", { staticClass: "filter" }, [
                      a("p", { staticClass: "filter__desc" }, [t._v("Цвет")]),
                      a(
                        "div",
                        { staticClass: "filter__list" },
                        t._l(t.colorFilter, function (e) {
                          return a(
                            "div",
                            { key: e.val, staticClass: "filter__item" },
                            [
                              a(
                                "label",
                                {
                                  staticClass: "filter__label",
                                  class: {
                                    "filter__label--disabled": !e.checked,
                                  },
                                  attrs: { for: e.val },
                                },
                                [
                                  a("input", {
                                    staticClass: "filter__radio-item",
                                    attrs: {
                                      type: "radio",
                                      id: e.val,
                                      name: "color",
                                    },
                                    domProps: { value: e.val },
                                  }),
                                  a("span", { staticClass: "filter__castom" }),
                                  t._v(" " + t._s(e.name)),
                                ]
                              ),
                            ]
                          );
                        }),
                        0
                      ),
                      a("p", { staticClass: "filter__desc" }, [
                        t._v("Дата аренды"),
                      ]),
                      t._m(0),
                      a(
                        "div",
                        { staticClass: "filter__rate" },
                        [
                          a("p", { staticClass: "filter__desc" }, [
                            t._v("Тариф"),
                          ]),
                          t._l(t.rate, function (e) {
                            return a(
                              "div",
                              { key: e.val, staticClass: "filter__item" },
                              [
                                a(
                                  "label",
                                  {
                                    staticClass: "filter__label",
                                    class: {
                                      "filter__label--disabled": !e.checked,
                                    },
                                    attrs: { for: e.val },
                                  },
                                  [
                                    a("input", {
                                      staticClass: "filter__radio-item",
                                      attrs: {
                                        type: "radio",
                                        id: e.val,
                                        name: "rate",
                                      },
                                      domProps: { value: e.val },
                                    }),
                                    a("span", {
                                      staticClass: "filter__castom",
                                    }),
                                    t._v(" " + t._s(e.name)),
                                  ]
                                ),
                              ]
                            );
                          }),
                        ],
                        2
                      ),
                      a(
                        "div",
                        { staticClass: "filter__services" },
                        [
                          a("p", { staticClass: "filter__desc" }, [
                            t._v("Доп услуги"),
                          ]),
                          t._l(t.additionaly, function (e) {
                            return a(
                              "div",
                              { key: e.val, staticClass: "filter__item" },
                              [
                                a(
                                  "label",
                                  {
                                    staticClass:
                                      "filter__label flter__lable--check",
                                    class: {
                                      "filter__label--disabled": !e.checked,
                                    },
                                    attrs: { for: e.name },
                                  },
                                  [
                                    a("input", {
                                      staticClass: "filter__checkbox-item",
                                      attrs: { type: "checkbox", id: e.name },
                                      domProps: { checked: e.checked },
                                    }),
                                    a("span", {
                                      staticClass: "filter__castom--checkbox",
                                    }),
                                    t._v(" " + t._s(e.name)),
                                  ]
                                ),
                              ]
                            );
                          }),
                        ],
                        2
                      ),
                    ]),
                    a("FinalInfo"),
                  ],
                  1
                ),
              ],
              1
            ),
          ],
          1
        );
      },
      lt = [
        function () {
          var t = this,
            e = t.$createElement,
            a = t._self._c || e;
          return a("div", { staticClass: "filter__dates" }, [
            a("p", [
              a(
                "label",
                { staticClass: "filter__label", attrs: { for: "startDate" } },
                [
                  t._v("С "),
                  a("input", {
                    staticClass: "filter__date",
                    attrs: {
                      type: "text",
                      onfocus: "(this.type='date')",
                      onblur: "(this.type='text')",
                      id: "startDate",
                      placeholder: "Введите дату и время",
                    },
                  }),
                ]
              ),
            ]),
            a("p", [
              a(
                "label",
                { staticClass: "filter__label", attrs: { for: "endDate" } },
                [
                  t._v("По"),
                  a("input", {
                    staticClass: "filter__date",
                    attrs: {
                      type: "text",
                      onfocus: "(this.type='date')",
                      onblur: "(this.type='text')",
                      id: "endDate",
                      placeholder: "Введите дату и время",
                    },
                  }),
                ]
              ),
            ]),
          ]);
        },
      ],
      ct = function () {
        var t = this,
          e = t.$createElement;
        t._self._c;
        return t._m(0);
      },
      ot = [
        function () {
          var t = this,
            e = t.$createElement,
            a = t._self._c || e;
          return a("div", { staticClass: "wrapper-form" }, [
            a("div", { staticClass: "order" }, [
              a("p", { staticClass: "order__title" }, [t._v("Ваш заказ:")]),
              a("div", { staticClass: "additionally" }, [
                a("div", { staticClass: "form" }, [
                  a("p", { staticClass: "additionally__name" }, [
                    t._v("Пункт выдачи"),
                  ]),
                  a("p", { staticClass: "additionally__dote" }),
                  a("div", { staticClass: "additionally__block" }, [
                    a("p", { staticClass: "additionally__location" }, [
                      t._v("Ульяновск,"),
                    ]),
                    a("p", { staticClass: "additionally__location" }, [
                      t._v("Нариманова 42"),
                    ]),
                  ]),
                ]),
                a("div", { staticClass: "form" }, [
                  a("p", { staticClass: "additionally__name" }, [
                    t._v("Модель"),
                  ]),
                  a("p", {
                    staticClass: "additionally__dote additionally__dote--model",
                  }),
                  a("p", { staticClass: "additionally__location" }, [
                    t._v("Hyndai, i30 N"),
                  ]),
                ]),
                a("div", { staticClass: "form" }, [
                  a("p", { staticClass: "additionally__name" }, [t._v("Цвет")]),
                  a("p", {
                    staticClass: "additionally__dote additionally__dote--color",
                  }),
                  a("p", { staticClass: "additionally__location" }, [
                    t._v("Голубой"),
                  ]),
                ]),
                a("div", { staticClass: "form" }, [
                  a("p", { staticClass: "additionally__name" }, [
                    t._v("Длительность аренды"),
                  ]),
                  a("p", {
                    staticClass: "additionally__dote additionally__dote--rent",
                  }),
                  a("p", { staticClass: "additionally__location" }, [
                    t._v("1д 2ч"),
                  ]),
                ]),
              ]),
            ]),
            a("div", { staticClass: "price" }, [
              a("p", { staticClass: "price__first-step" }, [
                a("span", { staticClass: "price__first-step--dark" }, [
                  t._v("Цена"),
                ]),
                t._v(": от 8 000 до 12 000 ₽ "),
              ]),
              a("button", { staticClass: "price__model-action" }, [
                t._v("Выбрать модель"),
              ]),
            ]),
          ]);
        },
      ],
      dt = (function (t) {
        Object(k["a"])(a, t);
        var e = Object(y["a"])(a);
        function a() {
          return Object(g["a"])(this, a), e.apply(this, arguments);
        }
        return Object(b["a"])(a);
      })(j["b"]);
    dt = Object(w["a"])([j["a"]], dt);
    var ut = dt,
      _t = ut,
      vt = (a("8986"), Object(c["a"])(_t, ct, ot, !1, null, "6e745840", null)),
      Ct = vt.exports,
      pt = (function (t) {
        Object(k["a"])(a, t);
        var e = Object(y["a"])(a);
        function a() {
          return Object(g["a"])(this, a), e.apply(this, arguments);
        }
        return (
          Object(b["a"])(a, [
            {
              key: "mounted",
              value: function () {
                (this.colorFilter = [
                  { name: "Любой", checked: !0, val: "allColor" },
                  { name: "Красный", checked: !1, val: "red" },
                  { name: "Голубой", checked: !1, val: "blue" },
                ]),
                  (this.rate = [
                    { name: "Поминутно, 7₽/мин", checked: !1, val: "minute" },
                    {
                      name: "На сутки, 1999 ₽/сутки",
                      checked: !0,
                      val: "allDay",
                    },
                  ]),
                  (this.additionaly = [
                    { name: "Полный бак, 500р", checked: !0, val: "fullTank" },
                    {
                      name: "Детское кресло, 200р",
                      checked: !1,
                      val: "babyChair",
                    },
                    {
                      name: "Правый руль, 1600р",
                      checked: !1,
                      val: "rightHandDrive",
                    },
                  ]);
              },
            },
          ]),
          a
        );
      })(j["b"]);
    pt = Object(w["a"])(
      [Object(j["a"])({ components: { FinalInfo: Ct, Navigation: F } })],
      pt
    );
    var ft = pt,
      ht = ft,
      mt = (a("a45d"), Object(c["a"])(ht, rt, lt, !1, null, "18aceeba", null)),
      bt = mt.exports,
      gt = function () {
        var t = this,
          e = t.$createElement,
          a = t._self._c || e;
        return a(
          "div",
          { staticClass: "main-wrapper" },
          [
            a("Navigation"),
            a(
              "div",
              { staticClass: "main" },
              [
                a("div", { staticClass: "main-nav" }, [
                  a(
                    "h1",
                    [
                      a(
                        "router-link",
                        {
                          staticClass: "main-nav__company",
                          attrs: { to: { name: "MainPage" } },
                        },
                        [t._v("Need for drive")]
                      ),
                    ],
                    1
                  ),
                  a("p", { staticClass: "main-nav__city-name" }, [
                    a("svg", { attrs: { width: "18", height: "20" } }, [
                      a("use", { attrs: { "xlink:href": "#gps" } }),
                    ]),
                    t._v(" Ульяновск "),
                  ]),
                ]),
                a("BreadcrumbsRoute"),
                a("div", { staticClass: "form" }, [
                  a("div", { staticClass: "car-model" }, [
                    a(
                      "div",
                      { staticClass: "filter" },
                      t._l(t.radioFilter, function (e) {
                        return a(
                          "div",
                          { key: e.val, staticClass: "filter__list" },
                          [
                            a("input", {
                              staticClass: "filter__radio-item",
                              attrs: { type: "radio", name: "radioModel" },
                              domProps: { checked: e.checked },
                            }),
                            a("span", { staticClass: "filter__castom" }),
                            a(
                              "label",
                              {
                                staticClass: "filter__label",
                                attrs: { for: "radioModel" },
                              },
                              [t._v(t._s(e.name))]
                            ),
                          ]
                        );
                      }),
                      0
                    ),
                    t._m(0),
                  ]),
                ]),
              ],
              1
            ),
            a("PreOrderInfo"),
          ],
          1
        );
      },
      kt = [
        function () {
          var t = this,
            e = t.$createElement,
            i = t._self._c || e;
          return i("div", { staticClass: "car-order" }, [
            i("div", { staticClass: "car-order__card" }, [
              i("div", { staticClass: "car-content" }, [
                i("p", { staticClass: "car-content__model" }, [t._v("Модель")]),
                i("p", { staticClass: "car-content__price" }, [t._v("Цена")]),
              ]),
              i("div", { staticClass: "car-order__image" }, [
                i("img", {
                  attrs: {
                    src: a("137e"),
                    alt: "Машина",
                    width: "256",
                    height: "116",
                  },
                }),
              ]),
            ]),
            i("div", { staticClass: "car-order__card" }, [
              i("div", { staticClass: "car-content" }, [
                i("p", { staticClass: "car-content__model" }, [t._v("Модель")]),
                i("p", { staticClass: "car-content__price" }, [t._v("Цена")]),
              ]),
              i("div", { staticClass: "car-order__image" }, [
                i("img", { attrs: { src: a("137e"), alt: "Машина" } }),
              ]),
            ]),
            i("div", { staticClass: "car-order__card" }, [
              i("div", { staticClass: "car-content" }, [
                i("p", { staticClass: "car-content__model" }, [t._v("Модель")]),
                i("p", { staticClass: "car-content__price" }, [t._v("Цена")]),
              ]),
              i("div", { staticClass: "car-order__image" }, [
                i("img", { attrs: { src: a("137e"), alt: "Машина" } }),
              ]),
            ]),
            i("div", { staticClass: "car-order__card" }, [
              i("div", { staticClass: "car-content" }, [
                i("p", { staticClass: "car-content__model" }, [t._v("Модель")]),
                i("p", { staticClass: "car-content__price" }, [t._v("Цена")]),
              ]),
              i("div", { staticClass: "car-order__image" }, [
                i("img", { attrs: { src: a("137e"), alt: "Машина" } }),
              ]),
            ]),
            i("div", { staticClass: "car-order__card" }, [
              i("div", { staticClass: "car-content" }, [
                i("p", { staticClass: "car-content__model" }, [t._v("Модель")]),
                i("p", { staticClass: "car-content__price" }, [t._v("Цена")]),
              ]),
              i("div", { staticClass: "car-order__image" }, [
                i("img", { attrs: { src: a("137e"), alt: "Машина" } }),
              ]),
            ]),
            i("div", { staticClass: "car-order__card" }, [
              i("div", { staticClass: "car-content" }, [
                i("p", { staticClass: "car-content__model" }, [t._v("Модель")]),
                i("p", { staticClass: "car-content__price" }, [t._v("Цена")]),
              ]),
              i("div", { staticClass: "car-order__image" }, [
                i("img", { attrs: { src: a("137e"), alt: "Машина" } }),
              ]),
            ]),
          ]);
        },
      ],
      yt = function () {
        var t = this,
          e = t.$createElement,
          a = t._self._c || e;
        return a(
          "div",
          { staticClass: "navigation" },
          t._l(t.breadCrumbs, function (e, i) {
            return a("ul", { key: i, staticClass: "navigation__list" }, [
              a(
                "li",
                { staticClass: "navigation___item" },
                [
                  a(
                    "router-link",
                    { staticClass: "navigation__link", attrs: { to: e.to } },
                    [t._v(t._s(e.text))]
                  ),
                  a(
                    "svg",
                    {
                      staticClass: "navigation__arrow",
                      attrs: { width: "6", height: "8" },
                    },
                    [
                      a("use", {
                        attrs: { "xlink:href": "#arrow-breadcrumbs" },
                      }),
                    ]
                  ),
                ],
                1
              ),
            ]);
          }),
          0
        );
      },
      wt = [],
      jt = (function (t) {
        Object(k["a"])(a, t);
        var e = Object(y["a"])(a);
        function a() {
          return Object(g["a"])(this, a), e.apply(this, arguments);
        }
        return (
          Object(b["a"])(a, [
            {
              key: "breadCrumbs",
              get: function () {
                return this.$route.meta.breadCrumb
                  ? this.$route.meta.breadCrumb.call(this, this.$route)
                  : this.$route.meta.breadCrumb;
              },
            },
          ]),
          a
        );
      })(j["b"]);
    jt = Object(w["a"])([Object(j["a"])({})], jt);
    var Ot = jt,
      xt = Ot,
      Mt = (a("ae0d"), Object(c["a"])(xt, yt, wt, !1, null, "56cdedc2", null)),
      Et = Mt.exports,
      Lt = function () {
        var t = this,
          e = t.$createElement;
        t._self._c;
        return t._m(0);
      },
      St = [
        function () {
          var t = this,
            e = t.$createElement,
            a = t._self._c || e;
          return a("div", { staticClass: "wrapper-form" }, [
            a("div", { staticClass: "order" }, [
              a("p", { staticClass: "order__title" }, [t._v("Ваш заказ:")]),
              a("div", { staticClass: "pvz" }, [
                a("p", { staticClass: "pvz__name" }, [t._v("Пункт выдачи")]),
                a("p", { staticClass: "pvz__dote" }),
                a("div", { staticClass: "pvz__block-location" }, [
                  a("p", { staticClass: "pvz__location" }, [
                    t._v("Ульяновск,"),
                  ]),
                  a("p", { staticClass: "pvz__location" }, [
                    t._v("Нариманова 42"),
                  ]),
                ]),
              ]),
            ]),
            a("div", { staticClass: "price" }, [
              a("p", { staticClass: "price__first-step" }, [
                a("span", { staticClass: "price__first-step--dark" }, [
                  t._v("Цена"),
                ]),
                t._v(": от 8 000 до 12 000 ₽ "),
              ]),
              a("button", { staticClass: "price__model-action" }, [
                t._v("Выбрать модель"),
              ]),
            ]),
          ]);
        },
      ],
      Pt = (function (t) {
        Object(k["a"])(a, t);
        var e = Object(y["a"])(a);
        function a() {
          return Object(g["a"])(this, a), e.apply(this, arguments);
        }
        return Object(b["a"])(a);
      })(j["b"]);
    Pt = Object(w["a"])([j["a"]], Pt);
    var Nt = Pt,
      $t = Nt,
      Bt = (a("6c43"), Object(c["a"])($t, Lt, St, !1, null, "55fafc16", null)),
      zt = Bt.exports,
      It = (function (t) {
        Object(k["a"])(a, t);
        var e = Object(y["a"])(a);
        function a() {
          return Object(g["a"])(this, a), e.apply(this, arguments);
        }
        return (
          Object(b["a"])(a, [
            {
              key: "mounted",
              value: function () {
                this.radioFilter = [
                  { name: "Все модели", checked: !0, val: "allModel" },
                  { name: "Эконом", checked: !1, val: "economy" },
                  { name: "Премиум", checked: !1, val: "premium" },
                ];
              },
            },
          ]),
          a
        );
      })(j["b"]);
    It = Object(w["a"])(
      [
        Object(j["a"])({
          components: { Navigation: F, BreadcrumbsRoute: Et, PreOrderInfo: zt },
        }),
      ],
      It
    );
    var Ht = It,
      Wt = Ht,
      Rt = (a("1364"), Object(c["a"])(Wt, gt, kt, !1, null, "4110e5ca", null)),
      Vt = Rt.exports,
      Zt = function () {
        var t = this,
          e = t.$createElement,
          a = t._self._c || e;
        return a(
          "div",
          { staticClass: "main-wrapper" },
          [
            a("Navigation"),
            a(
              "div",
              { staticClass: "main" },
              [
                a("div", { staticClass: "main-nav" }, [
                  a(
                    "h1",
                    [
                      a(
                        "router-link",
                        {
                          staticClass: "main-nav__company",
                          attrs: { to: { name: "MainPage" } },
                        },
                        [t._v("Need for drive")]
                      ),
                    ],
                    1
                  ),
                  a("p", { staticClass: "main-nav__city-name" }, [
                    a("svg", { attrs: { width: "18", height: "20" } }, [
                      a("use", { attrs: { "xlink:href": "#gps" } }),
                    ]),
                    t._v(" Ульяновск "),
                  ]),
                ]),
                a("BreadcrumbsRoute"),
                a(
                  "div",
                  { staticClass: "card-form" },
                  [t._m(0), a("PreOrderInfo")],
                  1
                ),
              ],
              1
            ),
          ],
          1
        );
      },
      Ft = [
        function () {
          var t = this,
            e = t.$createElement,
            i = t._self._c || e;
          return i("div", { staticClass: "form" }, [
            i("div", { staticClass: "city" }, [
              i("p", { staticClass: "city__wrap" }, [
                i(
                  "label",
                  { staticClass: "city__label", attrs: { for: "city" } },
                  [t._v("Город")]
                ),
                i("input", {
                  staticClass: "city__form",
                  attrs: { id: "city", type: "text" },
                }),
                i("button", { staticClass: "city__cross-icon" }),
              ]),
              i("p", { staticClass: "city__wrap" }, [
                i(
                  "label",
                  { staticClass: "city__label", attrs: { for: "pvz" } },
                  [t._v("Пункт выдачи")]
                ),
                i("input", {
                  staticClass: "city__form",
                  attrs: { id: "pvz", type: "text" },
                }),
                i("button", { staticClass: "city__cross-icon" }),
              ]),
            ]),
            i("div", { staticClass: "card" }, [
              i("p", { staticClass: "card__desc" }, [
                t._v("Выбрать на карте:"),
              ]),
              i("img", {
                attrs: {
                  src: a("e6b6"),
                  alt: "Карта",
                  width: "736",
                  height: "352",
                },
              }),
            ]),
          ]);
        },
      ],
      Dt = (function (t) {
        Object(k["a"])(a, t);
        var e = Object(y["a"])(a);
        function a() {
          return Object(g["a"])(this, a), e.apply(this, arguments);
        }
        return Object(b["a"])(a);
      })(j["b"]);
    Dt = Object(w["a"])(
      [
        Object(j["a"])({
          components: { BreadcrumbsRoute: Et, PreOrderInfo: zt, Navigation: F },
        }),
      ],
      Dt
    );
    var Tt = Dt,
      Gt = Tt,
      At = (a("d734"), Object(c["a"])(Gt, Zt, Ft, !1, null, "27cf1aba", null)),
      Jt = At.exports;
    i["a"].use(f["a"]);
    var qt = [
        { path: "", name: "MainPage", component: X, props: !0 },
        {
          path: "/location",
          name: "location",
          component: Jt,
          props: !0,
          meta: {
            breadCrumb: function () {
              return [{ text: "Местоположение", to: { name: "location" } }];
            },
          },
        },
        {
          path: "/car-model",
          name: "CarModel",
          component: Vt,
          props: !0,
          meta: {
            breadCrumb: function () {
              return [
                { text: "Местоположение", to: { name: "location" } },
                { text: "Модель", to: { name: "CarModel" } },
              ];
            },
          },
        },
        {
          path: "/additionally",
          name: "OrderAdditionally",
          component: bt,
          meta: {
            breadCrumb: function () {
              return [
                { text: "Модель", to: { name: "CarModel" } },
                { text: "Дополнительно", to: { name: "OrderAdditionally" } },
              ];
            },
          },
        },
        { path: "/final-order", name: "FinalOrder", component: nt, props: !0 },
      ],
      Kt = new f["a"]({ routes: qt }),
      Qt = Kt,
      Ut = a("2f62");
    i["a"].use(Ut["a"]);
    var Xt = new Ut["a"].Store({
      state: {},
      mutations: {},
      actions: {},
      modules: {},
    });
    (i["a"].config.productionTip = !1),
      new i["a"]({
        router: Qt,
        store: Xt,
        render: function (t) {
          return t(p);
        },
      }).$mount("#app");
  },
  ce66: function (t, e, a) {},
  d734: function (t, e, a) {
    "use strict";
    a("26bf");
  },
  d818: function (t, e, a) {
    "use strict";
    a("4da1");
  },
  e6b6: function (t, e, a) {
    t.exports = a.p + "img/location.e645f767.png";
  },
  e8b1: function (t, e, a) {
    t.exports = a.p + "img/slider-4.1618de5d.png";
  },
  edea: function (t, e, a) {},
  f453: function (t, e, a) {
    t.exports = a.p + "img/slider-1.5decc706.png";
  },
  f534: function (t, e, a) {},
});
//# sourceMappingURL=app.6b632918.js.map
