/* eslint-disable */
(function (t) {
  function e(e) {
    for (
      var a, r, o = e[0], c = e[1], l = e[2], u = 0, v = [];
      u < o.length;
      u++
    )
      (r = o[u]),
        Object.prototype.hasOwnProperty.call(s, r) && s[r] && v.push(s[r][0]),
        (s[r] = 0);
    for (a in c) Object.prototype.hasOwnProperty.call(c, a) && (t[a] = c[a]);
    d && d(e);
    while (v.length) v.shift()();
    return n.push.apply(n, l || []), i();
  }
  function i() {
    for (var t, e = 0; e < n.length; e++) {
      for (var i = n[e], a = !0, o = 1; o < i.length; o++) {
        var c = i[o];
        0 !== s[c] && (a = !1);
      }
      a && (n.splice(e--, 1), (t = r((r.s = i[0]))));
    }
    return t;
  }
  var a = {},
    s = { app: 0 },
    n = [];
  function r(e) {
    if (a[e]) return a[e].exports;
    var i = (a[e] = { i: e, l: !1, exports: {} });
    return t[e].call(i.exports, i, i.exports, r), (i.l = !0), i.exports;
  }
  (r.m = t),
    (r.c = a),
    (r.d = function (t, e, i) {
      r.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: i });
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
      var i = Object.create(null);
      if (
        (r.r(i),
        Object.defineProperty(i, "default", { enumerable: !0, value: t }),
        2 & e && "string" != typeof t)
      )
        for (var a in t)
          r.d(
            i,
            a,
            function (e) {
              return t[e];
            }.bind(null, a)
          );
      return i;
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
  var o = (window["webpackJsonp"] = window["webpackJsonp"] || []),
    c = o.push.bind(o);
  (o.push = e), (o = o.slice());
  for (var l = 0; l < o.length; l++) e(o[l]);
  var d = c;
  n.push([0, "chunk-vendors"]), i();
})({
  0: function (t, e, i) {
    t.exports = i("cd49");
  },
  "0796": function (t, e, i) {},
  "0b3f": function (t, e, i) {
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
  1364: function (t, e, i) {
    "use strict";
    i("ce66");
  },
  "137e": function (t, e, i) {
    t.exports = i.p + "img/car-1.69acf491.png";
  },
  "26bf": function (t, e, i) {},
  "2fea": function (t, e, i) {
    t.exports = i.p + "img/slider-3.3a884404.png";
  },
  "3a0f": function (t, e, i) {
    "use strict";
    i("4731");
  },
  4172: function (t, e, i) {
    t.exports = i.p + "img/slider-2.54d42d5c.png";
  },
  4731: function (t, e, i) {},
  "4da1": function (t, e, i) {},
  "5c0b": function (t, e, i) {
    "use strict";
    i("9c0c");
  },
  "6c43": function (t, e, i) {
    "use strict";
    i("c9f8");
  },
  "92b9": function (t, e, i) {
    "use strict";
    i("edea");
  },
  "965e": function (t, e, i) {
    "use strict";
    i("ba79");
  },
  "9c0c": function (t, e, i) {
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
  ae0d: function (t, e, i) {
    "use strict";
    i("0796");
  },
  ba79: function (t, e, i) {},
  c9f8: function (t, e, i) {},
  cd49: function (t, e, i) {
    "use strict";
    i.r(e);
    i("e260"), i("e6cf"), i("cca6"), i("a79d");
    var a = i("2b0e"),
      s = function () {
        var t = this,
          e = t.$createElement,
          i = t._self._c || e;
        return i(
          "div",
          { staticClass: "container", attrs: { id: "app" } },
          [i("Icon"), i("router-view")],
          1
        );
      },
      n = [],
      r = function () {
        var t = this,
          e = t.$createElement,
          i = t._self._c || e;
        return i(
          "svg",
          {
            staticStyle: { display: "none" },
            attrs: { xmlns: "http://www.w3.org/2000/svg" },
          },
          [
            i(
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
                i("path", {
                  attrs: {
                    d: "M24 8L8 24",
                    stroke: "white",
                    "stroke-width": "3",
                    "stroke-linecap": "round",
                    "stroke-linejoin": "round",
                  },
                }),
                i("path", {
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
            i(
              "symbol",
              { attrs: { id: "menu", viewBox: "0 0 32 32", fill: "none" } },
              [
                i("path", {
                  attrs: {
                    d: "M4 16H28",
                    stroke: "white",
                    "stroke-width": "3",
                    "stroke-linecap": "round",
                    "stroke-linejoin": "round",
                  },
                }),
                i("path", {
                  attrs: {
                    d: "M4 8H28",
                    stroke: "white",
                    "stroke-width": "3",
                    "stroke-linecap": "round",
                    "stroke-linejoin": "round",
                  },
                }),
                i("path", {
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
            i(
              "symbol",
              {
                attrs: {
                  id: "menu-mobile",
                  viewBox: "0 0 32 32",
                  fill: "none",
                },
              },
              [
                i("path", {
                  attrs: {
                    d: "M4 16H28",
                    stroke: "#121212",
                    "stroke-width": "3",
                    "stroke-linecap": "round",
                    "stroke-linejoin": "round",
                  },
                }),
                i("path", {
                  attrs: {
                    d: "M4 8H28",
                    stroke: "#121212",
                    "stroke-width": "3",
                    "stroke-linecap": "round",
                    "stroke-linejoin": "round",
                  },
                }),
                i("path", {
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
            i(
              "symbol",
              { attrs: { id: "gps", viewBox: "0 0 18 20", fill: "none" } },
              [
                i("path", {
                  attrs: {
                    d: "M16.0802 8.36364C16.0802 14.0909 8.54011 19 8.54011 19C8.54011 19 1 14.0909 1 8.36364C1 6.41068 1.7944 4.53771 3.20845 3.15676C4.62249 1.77581 6.54035 1 8.54011 1C10.5399 1 12.4577 1.77581 13.8718 3.15676C15.2858 4.53771 16.0802 6.41068 16.0802 8.36364Z",
                    stroke: "#999999",
                    "stroke-width": "2",
                    "stroke-linecap": "round",
                    "stroke-linejoin": "round",
                  },
                }),
                i("path", {
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
            i(
              "symbol",
              { attrs: { id: "telegram", viewBox: "0 0 32 32", fill: "none" } },
              [
                i("path", {
                  attrs: {
                    "fill-rule": "evenodd",
                    "clip-rule": "evenodd",
                    d: "M32 16C32 24.8366 24.8366 32 16 32C7.16344 32 0 24.8366 0 16C0 7.16344 7.16344 0 16 0C24.8366 0 32 7.16344 32 16ZM10.7144 14.5343C9.11157 15.2341 7.46472 15.9532 5.95883 16.7826L5.95873 16.7828C5.17241 17.3585 6.21758 17.7657 7.19803 18.1476C7.35391 18.2084 7.50814 18.2685 7.65313 18.3285C7.77377 18.3656 7.89647 18.4047 8.02079 18.4443C9.11124 18.7917 10.3272 19.1791 11.3858 18.5963C13.1248 17.5973 14.766 16.4424 16.4059 15.2883C16.9432 14.9102 17.4803 14.5322 18.0207 14.1598C18.046 14.1436 18.0746 14.1251 18.1058 14.1048C18.5662 13.8064 19.6016 13.1353 19.2186 14.06C18.313 15.0504 17.3429 15.9272 16.3676 16.8087C15.7103 17.4027 15.0506 17.999 14.4066 18.6336C13.8457 19.0894 13.2633 20.0059 13.8914 20.644C15.3379 21.6567 16.8071 22.6449 18.2755 23.6325C18.7533 23.9538 19.231 24.2752 19.7079 24.5972C20.516 25.2425 21.779 24.7206 21.9567 23.7123C22.0357 23.2485 22.115 22.7847 22.1944 22.3208C22.6328 19.7578 23.0713 17.1938 23.4587 14.6223C23.5113 14.219 23.571 13.8156 23.6307 13.4121C23.7755 12.434 23.9204 11.4547 23.9656 10.4714C23.849 9.49009 22.6592 9.70585 21.997 9.9265C18.5935 11.2216 15.224 12.6126 11.8679 14.0282C11.4877 14.1967 11.1023 14.3649 10.7144 14.5343Z",
                    fill: "currentColor",
                  },
                }),
              ]
            ),
            i(
              "symbol",
              { attrs: { id: "facebook", viewBox: "0 0 32 32", fill: "none" } },
              [
                i("path", {
                  attrs: {
                    d: "M32 16C32 7.1625 24.8375 0 16 0C7.1625 0 0 7.1625 0 16C0 23.9875 5.85 30.6062 13.5 31.8062V20.625H9.4375V16H13.5V12.475C13.5 8.46563 15.8875 6.25 19.5438 6.25C21.2938 6.25 23.125 6.5625 23.125 6.5625V10.5H21.1063C19.1188 10.5 18.5 11.7344 18.5 13V16H22.9375L22.2281 20.625H18.5V31.8062C26.15 30.6062 32 23.9875 32 16Z",
                    fill: "currentColor",
                  },
                }),
              ]
            ),
            i(
              "symbol",
              {
                attrs: { id: "instagram", viewBox: "0 0 32 32", fill: "none" },
              },
              [
                i("path", {
                  attrs: {
                    "fill-rule": "evenodd",
                    "clip-rule": "evenodd",
                    d: "M16 0C7.16344 0 0 7.16344 0 16C0 24.8366 7.16344 32 16 32C24.8366 32 32 24.8366 32 16C32 7.16344 24.8366 0 16 0ZM12.4822 7.51824C13.3924 7.47682 13.6833 7.46668 16.0008 7.46668H15.9981C18.3164 7.46668 18.6062 7.47682 19.5164 7.51824C20.4248 7.55984 21.0453 7.70366 21.5893 7.91469C22.1511 8.13247 22.6258 8.42403 23.1004 8.8987C23.5751 9.37301 23.8667 9.84911 24.0853 10.4104C24.2951 10.9529 24.4391 11.573 24.4818 12.4815C24.5227 13.3917 24.5333 13.6826 24.5333 16.0001C24.5333 18.3176 24.5227 18.6078 24.4818 19.518C24.4391 20.4261 24.2951 21.0464 24.0853 21.5891C23.8667 22.1502 23.5751 22.6263 23.1004 23.1006C22.6263 23.5753 22.1509 23.8676 21.5898 24.0855C21.0469 24.2965 20.4261 24.4404 19.5176 24.482C18.6074 24.5234 18.3174 24.5335 15.9997 24.5335C13.6824 24.5335 13.3917 24.5234 12.4815 24.482C11.5732 24.4404 10.9529 24.2965 10.41 24.0855C9.84909 23.8676 9.37299 23.5753 8.89886 23.1006C8.42436 22.6263 8.1328 22.1502 7.91467 21.589C7.70382 21.0464 7.56 20.4263 7.51822 19.5178C7.47697 18.6076 7.46666 18.3176 7.46666 16.0001C7.46666 13.6826 7.47733 13.3915 7.51804 12.4813C7.55893 11.5732 7.70293 10.9529 7.91449 10.4102C8.13316 9.84911 8.42472 9.37301 8.89939 8.8987C9.3737 8.4242 9.8498 8.13265 10.411 7.91469C10.9536 7.70366 11.5737 7.55984 12.4822 7.51824Z",
                    fill: "currentColor",
                  },
                }),
                i("path", {
                  attrs: {
                    "fill-rule": "evenodd",
                    "clip-rule": "evenodd",
                    d: "M15.2353 9.00445C15.3839 9.00422 15.5438 9.00429 15.7164 9.00437L16.0008 9.00445C18.2792 9.00445 18.5493 9.01263 19.449 9.05352C20.281 9.09156 20.7326 9.23059 21.0334 9.34739C21.4316 9.50206 21.7155 9.68695 22.014 9.98562C22.3127 10.2843 22.4976 10.5687 22.6526 10.967C22.7694 11.2674 22.9086 11.719 22.9465 12.551C22.9874 13.4505 22.9963 13.7208 22.9963 15.9981C22.9963 18.2755 22.9874 18.5457 22.9465 19.4453C22.9084 20.2773 22.7694 20.7288 22.6526 21.0293C22.4979 21.4275 22.3127 21.7111 22.014 22.0096C21.7153 22.3082 21.4318 22.4931 21.0334 22.6478C20.7329 22.7651 20.281 22.9038 19.449 22.9418C18.5494 22.9827 18.2792 22.9916 16.0008 22.9916C13.7222 22.9916 13.4522 22.9827 12.5526 22.9418C11.7206 22.9034 11.269 22.7644 10.968 22.6476C10.5698 22.4929 10.2854 22.3081 9.98669 22.0094C9.68802 21.7107 9.50313 21.427 9.34811 21.0286C9.23131 20.7281 9.09211 20.2766 9.05424 19.4446C9.01335 18.545 9.00517 18.2748 9.00517 15.996C9.00517 13.7172 9.01335 13.4484 9.05424 12.5488C9.09228 11.7168 9.23131 11.2653 9.34811 10.9645C9.50278 10.5662 9.68802 10.2818 9.98669 9.98313C10.2854 9.68446 10.5698 9.49957 10.968 9.34455C11.2688 9.22721 11.7206 9.08854 12.5526 9.05032C13.3398 9.01476 13.6449 9.0041 15.2353 9.00232V9.00445ZM20.5559 10.4213C19.9905 10.4213 19.5319 10.8795 19.5319 11.445C19.5319 12.0103 19.9905 12.469 20.5559 12.469C21.1212 12.469 21.5799 12.0103 21.5799 11.445C21.5799 10.8797 21.1212 10.421 20.5559 10.421V10.4213ZM11.6185 16.0001C11.6185 13.58 13.5806 11.6179 16.0006 11.6178C18.4207 11.6178 20.3824 13.58 20.3824 16.0001C20.3824 18.4202 18.4209 20.3815 16.0008 20.3815C13.5807 20.3815 11.6185 18.4202 11.6185 16.0001Z",
                    fill: "currentColor",
                  },
                }),
                i("path", {
                  attrs: {
                    d: "M16.0008 13.1556C17.5717 13.1556 18.8453 14.4291 18.8453 16.0001C18.8453 17.571 17.5717 18.8446 16.0008 18.8446C14.4298 18.8446 13.1563 17.571 13.1563 16.0001C13.1563 14.4291 14.4298 13.1556 16.0008 13.1556Z",
                    fill: "currentColor",
                  },
                }),
              ]
            ),
            i(
              "symbol",
              { attrs: { id: "arrow", viewBox: "0 0 10 20", fill: "none" } },
              [
                i("path", {
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
            i(
              "symbol",
              {
                attrs: {
                  id: "arrow-breadcrumbs",
                  viewBox: "0 0 6 8",
                  fill: "none",
                },
              },
              [
                i("path", {
                  attrs: { d: "M0 0L6 4.03L0 8V0Z", fill: "#999999" },
                }),
              ]
            ),
          ]
        );
      },
      o = [],
      c = i("2877"),
      l = {},
      d = Object(c["a"])(l, r, o, !1, null, null, null),
      u = d.exports,
      v = a["a"].extend({ components: { Icon: u } }),
      _ = v,
      C = (i("5c0b"), Object(c["a"])(_, s, n, !1, null, null, null)),
      h = C.exports,
      p = i("8c4f"),
      g = function () {
        var t = this,
          e = t.$createElement,
          i = t._self._c || e;
        return i(
          "div",
          { staticClass: "page" },
          [
            i("MainInfo", { staticClass: "info" }),
            i("Slider", { staticClass: "slider-block" }),
          ],
          1
        );
      },
      f = [],
      b = i("bee2"),
      m = i("d4ec"),
      k = i("262e"),
      w = i("2caf"),
      y = i("9ab4"),
      j = i("1b40"),
      O = function () {
        var t = this,
          e = t.$createElement,
          i = t._self._c || e;
        return i("div", { staticClass: "wrapper" }, [
          i("div", { staticClass: "overlay" }),
          i(
            "div",
            { ref: "img", staticClass: "slider" },
            t._l(t.slider, function (e) {
              return i(
                "div",
                {
                  key: e.id,
                  staticClass: "slider__img",
                  style: { backgroundImage: "url(" + e.img + ")" },
                },
                [
                  i("div", { staticClass: "content" }, [
                    i("h2", { staticClass: "content__title" }, [
                      t._v(t._s(e.title)),
                    ]),
                    i("p", { staticClass: "content__descreption" }, [
                      t._v(" " + t._s(e.description) + " "),
                    ]),
                    i(
                      "button",
                      {
                        staticClass: "content__btn",
                        style: { background: e.background },
                        on: {
                          mouseover: function (i) {
                            return t.hoverButton(e.id, i.target);
                          },
                          mouseleave: function (i) {
                            return t.getOriginalColor(i.target, e.id);
                          },
                        },
                      },
                      [t._v(" Подробнее ")]
                    ),
                  ]),
                  i(
                    "div",
                    { staticClass: "dote" },
                    t._l(t.slider, function (e) {
                      return i("button", {
                        key: e.id,
                        staticClass: "dote__item",
                        class: {
                          "dote__item--active": e.id === t.activeSlider,
                        },
                        on: {
                          click: function (i) {
                            return i.target !== i.currentTarget
                              ? null
                              : t.getSlideForDote(e.id, i);
                          },
                        },
                      });
                    }),
                    0
                  ),
                  i(
                    "button",
                    {
                      staticClass: "action-right",
                      on: { click: t.getNextImage },
                    },
                    [
                      i(
                        "svg",
                        {
                          staticClass: "svg-left",
                          attrs: { width: "10", height: "20" },
                        },
                        [i("use", { attrs: { "xlink:href": "#arrow" } })]
                      ),
                    ]
                  ),
                  i(
                    "button",
                    {
                      staticClass: "action-left",
                      on: { click: t.getPrevImage },
                    },
                    [
                      i(
                        "svg",
                        {
                          staticClass: "svg-right",
                          attrs: { width: "10", height: "20" },
                        },
                        [i("use", { attrs: { "xlink:href": "#arrow" } })]
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
      M = i("0b3f"),
      L = i.n(M),
      E = (function (t) {
        Object(k["a"])(a, t);
        var e = Object(w["a"])(a);
        function a() {
          var t;
          return (
            Object(m["a"])(this, a),
            (t = e.apply(this, arguments)),
            (t.imageWidth = 0),
            (t.activeSlider = 0),
            (t.slider = [
              {
                id: 0,
                img: i("f453"),
                title: "Бесплатная парковка",
                description:
                  "Оставляйте машину на платных городских парковках и разрешенных местах, не нарушая ПДД, а также в аэропортах.",
                background: L.a.green,
              },
              {
                id: 1,
                img: i("4172"),
                title: "Страховка",
                description: "Полная страховка страховка автомобиля",
                background: L.a.blue,
              },
              {
                id: 2,
                img: i("2fea"),
                title: "Бензин",
                description: "Полный бак на любой заправке города за наш счёт",
                background: L.a.red,
              },
              {
                id: 3,
                img: i("e8b1"),
                title: "Обслуживание",
                description: "Автомобиль проходит еженедельное ТО",
                background: L.a.violet,
              },
            ]),
            t
          );
        }
        return (
          Object(b["a"])(a, [
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
                  ? (e.style.background = L.a.hoverGreen)
                  : 1 === t
                  ? (e.style.background = L.a.hoverBlue)
                  : 2 === t
                  ? (e.style.background = L.a.hoverRed)
                  : 3 === t && (e.style.background = L.a.hoverViolet);
              },
            },
            {
              key: "getOriginalColor",
              value: function (t, e) {
                0 === e
                  ? (t.style.background = L.a.green)
                  : 1 === e
                  ? (t.style.background = L.a.blue)
                  : 2 === e
                  ? (t.style.background = L.a.red)
                  : 3 === e && (t.style.background = L.a.violet);
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
          a
        );
      })(j["b"]);
    E = Object(y["a"])([Object(j["a"])({})], E);
    var S = E,
      B = S,
      P = (i("965e"), Object(c["a"])(B, O, x, !1, null, "09d6882e", null)),
      N = P.exports,
      $ = function () {
        var t = this,
          e = t.$createElement,
          i = t._self._c || e;
        return i(
          "div",
          { staticClass: "wrapper" },
          [
            i("Navigation"),
            i("div", { staticClass: "wrapper__block" }, [
              i("div", { staticClass: "main-nav" }, [
                i(
                  "h1",
                  [
                    i(
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
                i("p", { staticClass: "main-nav__city-name" }, [
                  i("svg", { attrs: { width: "18", height: "20" } }, [
                    i("use", { attrs: { "xlink:href": "#gps" } }),
                  ]),
                  t._v(" Ульяновск "),
                ]),
              ]),
              i(
                "div",
                { staticClass: "main-block" },
                [
                  i("h1", { staticClass: "main-block__title" }, [
                    t._v("Каршеринг"),
                  ]),
                  i(
                    "h1",
                    {
                      staticClass: "main-block__title main-block__title--green",
                    },
                    [t._v(" Need for drive ")]
                  ),
                  i("p", { staticClass: "main-block__discreption" }, [
                    t._v(" Поминутная аренда авто твоего города "),
                  ]),
                  i(
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
            i = t._self._c || e;
          return i("div", { staticClass: "main-footer" }, [
            i("p", { staticClass: "main-footer__info" }, [
              t._v("© 2016-2019 «Need for drive»"),
            ]),
            i(
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
          i = t._self._c || e;
        return i("div", { staticClass: "container" }, [
          i(
            "div",
            { staticClass: "wrapper" },
            [
              t.navigationWidthMobile
                ? i("p", { staticClass: "link-pos" }, [
                    t.showNavigationLink
                      ? i(
                          "button",
                          {
                            staticClass: "link__btn link__btn--close",
                            on: { click: t.openMenu },
                          },
                          [
                            i("svg", { attrs: { width: "32", height: "32" } }, [
                              i("use", { attrs: { "xlink:href": "#close" } }),
                            ]),
                          ]
                        )
                      : i(
                          "button",
                          {
                            staticClass: "link__btn link__btn--mobile",
                            on: { click: t.openMenu },
                          },
                          [
                            i("svg", { attrs: { width: "32", height: "32" } }, [
                              i("use", {
                                attrs: { "xlink:href": "#menu-mobile" },
                              }),
                            ]),
                          ]
                        ),
                  ])
                : t._e(),
              i("div", { staticClass: "navigation" }, [
                t.witdthMobile > 767
                  ? i(
                      "div",
                      { staticClass: "navigation__link link" },
                      [
                        i(
                          "transition",
                          { attrs: { name: "btn", mode: "in-out" } },
                          [
                            i("p", [
                              t.showNavigationLink
                                ? i(
                                    "button",
                                    {
                                      staticClass: "link__btn link__btn--close",
                                      on: { click: t.openMenu },
                                    },
                                    [
                                      i(
                                        "svg",
                                        {
                                          attrs: { width: "32", height: "32" },
                                        },
                                        [
                                          i("use", {
                                            attrs: { "xlink:href": "#close" },
                                          }),
                                        ]
                                      ),
                                    ]
                                  )
                                : i(
                                    "button",
                                    {
                                      staticClass: "link__btn",
                                      on: { click: t.openMenu },
                                    },
                                    [
                                      i(
                                        "svg",
                                        {
                                          attrs: { width: "32", height: "32" },
                                        },
                                        [
                                          i("use", {
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
                i("div", { staticClass: "navigation__lang lang" }, [
                  t.showEngLang
                    ? i(
                        "button",
                        {
                          staticClass: "lang__btn",
                          on: { click: t.changeLanguage },
                        },
                        [t._v(" Eng ")]
                      )
                    : i(
                        "button",
                        {
                          staticClass: "lang__btn",
                          on: { click: t.changeLanguage },
                        },
                        [t._v("Рус")]
                      ),
                ]),
              ]),
              i(
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
                    ? i(
                        "div",
                        { staticClass: "nav-block", attrs: { id: "slide" } },
                        [
                          i(
                            "div",
                            { staticClass: "menu" },
                            [
                              t._l(t.menuList, function (e) {
                                return i(
                                  "ul",
                                  { key: e.id, staticClass: "menu__list" },
                                  [
                                    i("li", { staticClass: "menu__item" }, [
                                      i(
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
                              i("div", { staticClass: "social" }, [
                                i("ul", { staticClass: "social__list" }, [
                                  i(
                                    "li",
                                    { staticClass: "menu__item social__item" },
                                    [
                                      i(
                                        "a",
                                        {
                                          staticClass:
                                            "menu__item--link social__item--link",
                                          attrs: { href: "#" },
                                        },
                                        [
                                          i(
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
                                              i("use", {
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
                                  i("li", { staticClass: "social__item" }, [
                                    i(
                                      "a",
                                      {
                                        staticClass:
                                          "menu__item--link social__item--link",
                                        attrs: { href: "#" },
                                      },
                                      [
                                        i(
                                          "svg",
                                          {
                                            staticClass: "social__item--hover",
                                            attrs: {
                                              width: "32",
                                              height: "32",
                                            },
                                          },
                                          [
                                            i("use", {
                                              attrs: {
                                                "xlink:href": "#facebook",
                                              },
                                            }),
                                          ]
                                        ),
                                      ]
                                    ),
                                  ]),
                                  i("li", { staticClass: "social__item" }, [
                                    i(
                                      "a",
                                      {
                                        staticClass:
                                          "menu__item--link social__item--link",
                                        attrs: { href: "#" },
                                      },
                                      [
                                        i(
                                          "svg",
                                          {
                                            staticClass: "social__item--hover",
                                            attrs: {
                                              width: "32",
                                              height: "32",
                                            },
                                          },
                                          [
                                            i("use", {
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
                            ? i(
                                "div",
                                { staticClass: "navigation__lang mobile-lang" },
                                [
                                  t.showEngLang
                                    ? i(
                                        "button",
                                        {
                                          staticClass: "lang__btn",
                                          on: { click: t.changeLanguage },
                                        },
                                        [t._v(" Eng ")]
                                      )
                                    : i(
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
          t.showNavigationLink ? i("div", { staticClass: "overlay" }) : t._e(),
        ]);
      },
      W = [],
      H = (function (t) {
        Object(k["a"])(i, t);
        var e = Object(w["a"])(i);
        function i() {
          var t;
          return (
            Object(m["a"])(this, i),
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
          Object(b["a"])(i, [
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
          i
        );
      })(j["b"]);
    H = Object(y["a"])([Object(j["a"])({})], H);
    var V = H,
      Z = V,
      R = (i("3a0f"), Object(c["a"])(Z, I, W, !1, null, "2b7b4096", null)),
      F = R.exports,
      T = (function (t) {
        Object(k["a"])(i, t);
        var e = Object(w["a"])(i);
        function i() {
          return Object(m["a"])(this, i), e.apply(this, arguments);
        }
        return Object(b["a"])(i);
      })(j["b"]);
    T = Object(y["a"])([Object(j["a"])({ components: { Navigation: F } })], T);
    var G = T,
      D = G,
      J = (i("d818"), Object(c["a"])(D, $, z, !1, null, "dcad2dd4", null)),
      q = J.exports,
      A = (function (t) {
        Object(k["a"])(i, t);
        var e = Object(w["a"])(i);
        function i() {
          return Object(m["a"])(this, i), e.apply(this, arguments);
        }
        return Object(b["a"])(i);
      })(j["b"]);
    A = Object(y["a"])(
      [Object(j["a"])({ components: { Slider: N, MainInfo: q } })],
      A
    );
    var K = A,
      Q = K,
      U = (i("92b9"), Object(c["a"])(Q, g, f, !1, null, "0c74c646", null)),
      X = U.exports,
      Y = function () {
        var t = this,
          e = t.$createElement,
          i = t._self._c || e;
        return i(
          "div",
          { staticClass: "main-wrapper" },
          [
            i("Navigation"),
            i(
              "div",
              { staticClass: "main" },
              [
                i("div", { staticClass: "main-nav" }, [
                  i(
                    "h1",
                    [
                      i(
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
                  i("p", { staticClass: "main-nav__city-name" }, [
                    i("svg", { attrs: { width: "18", height: "20" } }, [
                      i("use", { attrs: { "xlink:href": "#gps" } }),
                    ]),
                    t._v(" Ульяновск "),
                  ]),
                ]),
                i("BreadcrumbsRoute"),
                i("div", { staticClass: "form" }, [
                  i("div", { staticClass: "car-model" }, [
                    i(
                      "div",
                      { staticClass: "filter" },
                      t._l(t.radioFilter, function (e) {
                        return i(
                          "div",
                          { key: e.val, staticClass: "filter__list" },
                          [
                            i("input", {
                              staticClass: "filter__radio-item",
                              attrs: { type: "radio", name: "radioModel" },
                              domProps: { checked: e.checked },
                            }),
                            i("span", { staticClass: "filter__castom" }),
                            i(
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
            i("PreOrderInfo"),
          ],
          1
        );
      },
      tt = [
        function () {
          var t = this,
            e = t.$createElement,
            a = t._self._c || e;
          return a("div", { staticClass: "car-order" }, [
            a("div", { staticClass: "car-order__card" }, [
              a("div", { staticClass: "car-content" }, [
                a("p", { staticClass: "car-content__model" }, [t._v("Модель")]),
                a("p", { staticClass: "car-content__price" }, [t._v("Цена")]),
              ]),
              a("div", { staticClass: "car-order__image" }, [
                a("img", {
                  attrs: {
                    src: i("137e"),
                    alt: "Машина",
                    width: "256",
                    height: "116",
                  },
                }),
              ]),
            ]),
            a("div", { staticClass: "car-order__card" }, [
              a("div", { staticClass: "car-content" }, [
                a("p", { staticClass: "car-content__model" }, [t._v("Модель")]),
                a("p", { staticClass: "car-content__price" }, [t._v("Цена")]),
              ]),
              a("div", { staticClass: "car-order__image" }, [
                a("img", { attrs: { src: i("137e"), alt: "Машина" } }),
              ]),
            ]),
            a("div", { staticClass: "car-order__card" }, [
              a("div", { staticClass: "car-content" }, [
                a("p", { staticClass: "car-content__model" }, [t._v("Модель")]),
                a("p", { staticClass: "car-content__price" }, [t._v("Цена")]),
              ]),
              a("div", { staticClass: "car-order__image" }, [
                a("img", { attrs: { src: i("137e"), alt: "Машина" } }),
              ]),
            ]),
            a("div", { staticClass: "car-order__card" }, [
              a("div", { staticClass: "car-content" }, [
                a("p", { staticClass: "car-content__model" }, [t._v("Модель")]),
                a("p", { staticClass: "car-content__price" }, [t._v("Цена")]),
              ]),
              a("div", { staticClass: "car-order__image" }, [
                a("img", { attrs: { src: i("137e"), alt: "Машина" } }),
              ]),
            ]),
            a("div", { staticClass: "car-order__card" }, [
              a("div", { staticClass: "car-content" }, [
                a("p", { staticClass: "car-content__model" }, [t._v("Модель")]),
                a("p", { staticClass: "car-content__price" }, [t._v("Цена")]),
              ]),
              a("div", { staticClass: "car-order__image" }, [
                a("img", { attrs: { src: i("137e"), alt: "Машина" } }),
              ]),
            ]),
            a("div", { staticClass: "car-order__card" }, [
              a("div", { staticClass: "car-content" }, [
                a("p", { staticClass: "car-content__model" }, [t._v("Модель")]),
                a("p", { staticClass: "car-content__price" }, [t._v("Цена")]),
              ]),
              a("div", { staticClass: "car-order__image" }, [
                a("img", { attrs: { src: i("137e"), alt: "Машина" } }),
              ]),
            ]),
          ]);
        },
      ],
      et = function () {
        var t = this,
          e = t.$createElement,
          i = t._self._c || e;
        return i(
          "div",
          { staticClass: "navigation" },
          t._l(t.breadCrumbs, function (e, a) {
            return i("ul", { key: a, staticClass: "navigation__list" }, [
              i(
                "li",
                { staticClass: "navigation___item" },
                [
                  i(
                    "router-link",
                    { staticClass: "navigation__link", attrs: { to: e.to } },
                    [t._v(t._s(e.text))]
                  ),
                  i(
                    "svg",
                    {
                      staticClass: "navigation__arrow",
                      attrs: { width: "6", height: "8" },
                    },
                    [
                      i("use", {
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
      it = [],
      at = (function (t) {
        Object(k["a"])(i, t);
        var e = Object(w["a"])(i);
        function i() {
          return Object(m["a"])(this, i), e.apply(this, arguments);
        }
        return (
          Object(b["a"])(i, [
            {
              key: "breadCrumbs",
              get: function () {
                return this.$route.meta.breadCrumb
                  ? this.$route.meta.breadCrumb.call(this, this.$route)
                  : this.$route.meta.breadCrumb;
              },
            },
          ]),
          i
        );
      })(j["b"]);
    at = Object(y["a"])([Object(j["a"])({})], at);
    var st = at,
      nt = st,
      rt = (i("ae0d"), Object(c["a"])(nt, et, it, !1, null, "56cdedc2", null)),
      ot = rt.exports,
      ct = function () {
        var t = this,
          e = t.$createElement;
        t._self._c;
        return t._m(0);
      },
      lt = [
        function () {
          var t = this,
            e = t.$createElement,
            i = t._self._c || e;
          return i("div", { staticClass: "wrapper-form" }, [
            i("div", { staticClass: "order" }, [
              i("p", { staticClass: "order__title" }, [t._v("Ваш заказ:")]),
              i("div", { staticClass: "pvz" }, [
                i("p", { staticClass: "pvz__name" }, [t._v("Пункт выдачи")]),
                i("p", { staticClass: "pvz__dote" }),
                i("div", { staticClass: "pvz__block-location" }, [
                  i("p", { staticClass: "pvz__location" }, [
                    t._v("Ульяновск,"),
                  ]),
                  i("p", { staticClass: "pvz__location" }, [
                    t._v("Нариманова 42"),
                  ]),
                ]),
              ]),
            ]),
            i("div", { staticClass: "price" }, [
              i("p", { staticClass: "price__first-step" }, [
                i("span", { staticClass: "price__first-step--dark" }, [
                  t._v("Цена"),
                ]),
                t._v(": от 8 000 до 12 000 ₽ "),
              ]),
              i("button", { staticClass: "price__model-action" }, [
                t._v("Выбрать модель"),
              ]),
            ]),
          ]);
        },
      ],
      dt = (function (t) {
        Object(k["a"])(i, t);
        var e = Object(w["a"])(i);
        function i() {
          return Object(m["a"])(this, i), e.apply(this, arguments);
        }
        return Object(b["a"])(i);
      })(j["b"]);
    dt = Object(y["a"])([j["a"]], dt);
    var ut = dt,
      vt = ut,
      _t = (i("6c43"), Object(c["a"])(vt, ct, lt, !1, null, "55fafc16", null)),
      Ct = _t.exports,
      ht = (function (t) {
        Object(k["a"])(i, t);
        var e = Object(w["a"])(i);
        function i() {
          return Object(m["a"])(this, i), e.apply(this, arguments);
        }
        return (
          Object(b["a"])(i, [
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
          i
        );
      })(j["b"]);
    ht = Object(y["a"])(
      [
        Object(j["a"])({
          components: { Navigation: F, BreadcrumbsRoute: ot, PreOrderInfo: Ct },
        }),
      ],
      ht
    );
    var pt = ht,
      gt = pt,
      ft = (i("1364"), Object(c["a"])(gt, Y, tt, !1, null, "4110e5ca", null)),
      bt = ft.exports,
      mt = function () {
        var t = this,
          e = t.$createElement,
          i = t._self._c || e;
        return i(
          "div",
          { staticClass: "main-wrapper" },
          [
            i("Navigation"),
            i(
              "div",
              { staticClass: "main" },
              [
                i("div", { staticClass: "main-nav" }, [
                  i(
                    "h1",
                    [
                      i(
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
                  i("p", { staticClass: "main-nav__city-name" }, [
                    i("svg", { attrs: { width: "18", height: "20" } }, [
                      i("use", { attrs: { "xlink:href": "#gps" } }),
                    ]),
                    t._v(" Ульяновск "),
                  ]),
                ]),
                i("BreadcrumbsRoute"),
                i(
                  "div",
                  { staticClass: "card-form" },
                  [t._m(0), i("PreOrderInfo")],
                  1
                ),
              ],
              1
            ),
          ],
          1
        );
      },
      kt = [
        function () {
          var t = this,
            e = t.$createElement,
            a = t._self._c || e;
          return a("div", { staticClass: "form" }, [
            a("div", { staticClass: "city" }, [
              a("p", { staticClass: "city__wrap" }, [
                a(
                  "label",
                  { staticClass: "city__label", attrs: { for: "city" } },
                  [t._v("Город")]
                ),
                a("input", {
                  staticClass: "city__form",
                  attrs: { id: "city", type: "text" },
                }),
                a("button", { staticClass: "city__cross-icon" }),
              ]),
              a("p", { staticClass: "city__wrap" }, [
                a(
                  "label",
                  { staticClass: "city__label", attrs: { for: "pvz" } },
                  [t._v("Пункт выдачи")]
                ),
                a("input", {
                  staticClass: "city__form",
                  attrs: { id: "pvz", type: "text" },
                }),
                a("button", { staticClass: "city__cross-icon" }),
              ]),
            ]),
            a("div", { staticClass: "card" }, [
              a("p", { staticClass: "card__desc" }, [
                t._v("Выбрать на карте:"),
              ]),
              a("img", {
                attrs: {
                  src: i("e6b6"),
                  alt: "Карта",
                  width: "736",
                  height: "352",
                },
              }),
            ]),
          ]);
        },
      ],
      wt = (function (t) {
        Object(k["a"])(i, t);
        var e = Object(w["a"])(i);
        function i() {
          return Object(m["a"])(this, i), e.apply(this, arguments);
        }
        return Object(b["a"])(i);
      })(j["b"]);
    wt = Object(y["a"])(
      [
        Object(j["a"])({
          components: { BreadcrumbsRoute: ot, PreOrderInfo: Ct, Navigation: F },
        }),
      ],
      wt
    );
    var yt = wt,
      jt = yt,
      Ot = (i("d734"), Object(c["a"])(jt, mt, kt, !1, null, "27cf1aba", null)),
      xt = Ot.exports;
    a["a"].use(p["a"]);
    var Mt = [
        { path: "", name: "MainPage", component: X, props: !0 },
        {
          path: "/location",
          name: "location",
          component: xt,
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
          component: bt,
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
      ],
      Lt = new p["a"]({ routes: Mt }),
      Et = Lt,
      St = i("2f62");
    a["a"].use(St["a"]);
    var Bt = new St["a"].Store({
      state: {},
      mutations: {},
      actions: {},
      modules: {},
    });
    (a["a"].config.productionTip = !1),
      new a["a"]({
        router: Et,
        store: Bt,
        render: function (t) {
          return t(h);
        },
      }).$mount("#app");
  },
  ce66: function (t, e, i) {},
  d734: function (t, e, i) {
    "use strict";
    i("26bf");
  },
  d818: function (t, e, i) {
    "use strict";
    i("4da1");
  },
  e6b6: function (t, e, i) {
    t.exports = i.p + "img/location.e645f767.png";
  },
  e8b1: function (t, e, i) {
    t.exports = i.p + "img/slider-4.1618de5d.png";
  },
  edea: function (t, e, i) {},
  f453: function (t, e, i) {
    t.exports = i.p + "img/slider-1.5decc706.png";
  },
});
//# sourceMappingURL=app.2f452060.js.map
