/* eslint-disable */
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
  ["chunk-443db690"],
  {
    "01d9": function (t, e, c) {
      "use strict";
      c.r(e);
      var r = c("7a23"),
        a = c("5502"),
        n = c("f4dd"),
        i = c("f074"),
        d = c("c8d4"),
        o = c("a4ce"),
        s = { class: "main-wrapper" },
        b = { class: "main" },
        O = { class: "card-form" },
        u = { class: "car-container" },
        j = { class: "form" },
        l = { class: "order" },
        f = { class: "order__car-model" },
        _ = { class: "order__car-number" },
        m = { class: "order__fuel" },
        v = { class: "order__fuel order__fuel--precent" },
        h = { class: "order__date" },
        p = { class: "order__date order__date--time" },
        g = { class: "card" },
        k = ["src"],
        x = Object(r["l"])({
          __name: "FinalOrder",
          setup: function (t) {
            var e = Object(a["b"])(),
              c = Object(r["c"])(function () {
                return e.state.OrderForm.carModel;
              }),
              x = Object(r["c"])(function () {
                return e.state.OrderForm.carNumber;
              }),
              F = Object(r["c"])(function () {
                return e.state.OrderForm.img;
              }),
              w = Object(r["c"])(function () {
                return e.state.OrderForm.fuel;
              }),
              M = Object(r["c"])(function () {
                return e.state.OrderForm.dateFrom;
              });
            return function (t, e) {
              return (
                Object(r["A"])(),
                Object(r["g"])("div", s, [
                  Object(r["k"])(n["a"]),
                  Object(r["h"])("div", b, [
                    Object(r["k"])(o["a"]),
                    Object(r["k"])(d["a"]),
                    Object(r["h"])("div", O, [
                      Object(r["h"])("div", u, [
                        Object(r["h"])("div", j, [
                          Object(r["h"])("div", l, [
                            Object(r["h"])(
                              "p",
                              f,
                              Object(r["K"])(Object(r["M"])(c)),
                              1
                            ),
                            Object(r["h"])(
                              "p",
                              _,
                              Object(r["K"])(Object(r["M"])(x)),
                              1
                            ),
                            Object(r["h"])("p", m, [
                              Object(r["j"])(" Топливо "),
                              Object(r["h"])(
                                "span",
                                v,
                                Object(r["K"])(Object(r["M"])(w)) + "%",
                                1
                              ),
                            ]),
                            Object(r["h"])("p", h, [
                              Object(r["j"])(" Доступна с "),
                              Object(r["h"])(
                                "span",
                                p,
                                Object(r["K"])(Object(r["M"])(M)),
                                1
                              ),
                            ]),
                          ]),
                          Object(r["h"])("div", g, [
                            Object(r["h"])(
                              "img",
                              {
                                src: Object(r["M"])(F),
                                alt: "Выбраная машина",
                                class: "card__image",
                              },
                              null,
                              8,
                              k
                            ),
                          ]),
                        ]),
                      ]),
                      Object(r["k"])(i["a"]),
                    ]),
                  ]),
                ])
              );
            };
          },
        }),
        F = (c("55ce"), c("6b0d")),
        w = c.n(F);
      const M = w()(x, [["__scopeId", "data-v-7ce52910"]]);
      e["default"] = M;
    },
    "2a21": function (t, e, c) {},
    "55ce": function (t, e, c) {
      "use strict";
      c("e132");
    },
    "5f6f": function (t, e, c) {
      "use strict";
      c("2a21");
    },
    c8d4: function (t, e, c) {
      "use strict";
      c("b0c0");
      var r = c("7a23"),
        a = c("6605"),
        n = c("5502"),
        i = function (t) {
          return (
            Object(r["D"])("data-v-adfd2f42"), (t = t()), Object(r["B"])(), t
          );
        },
        d = { class: "navigation" },
        o = { class: "navigation__item" },
        s = i(function () {
          return Object(r["h"])(
            "svg",
            { width: "6", height: "8", class: "navigation__arrow" },
            [Object(r["h"])("use", { "xlink:href": "#arrow-breadcrumbs" })],
            -1
          );
        }),
        b = Object(r["l"])({
          __name: "BreadcrumbsRoute",
          setup: function (t) {
            var e = Object(a["c"])(),
              c = (Object(a["d"])(), Object(n["b"])()),
              i = Object(r["F"])([
                { idx: 0, text: "Местоположение", name: "location" },
                { idx: 1, text: "Модель", name: "CarModel" },
                { idx: 2, text: "Дополнительно", name: "OrderAdditionally" },
                { idx: 3, text: "Итого", name: "FinalOrder" },
              ]),
              b = function (t, c) {
                if (e.name === c) return "navigation__link--active";
                for (
                  var r = 0;
                  r <
                  (null === (a = i.value) || void 0 === a ? void 0 : a.length);
                  r++
                ) {
                  var a;
                  if (i.value[r].idx !== t && i.value[r].idx + 1 < t)
                    return "disabled";
                }
                return "navigation__link";
              };
            Object(r["c"])(function () {
              return c.state.OrderForm.isCarModelValidation;
            }),
              Object(r["c"])(function () {
                return c.state.OrderForm.isCarLocationValidation;
              }),
              Object(r["c"])(function () {
                return c.state.OrderForm.isCarAdditionalyValidation;
              });
            return function (t, e) {
              var c = Object(r["I"])("router-link");
              return (
                Object(r["A"])(),
                Object(r["g"])("div", d, [
                  (Object(r["A"])(!0),
                  Object(r["g"])(
                    r["a"],
                    null,
                    Object(r["G"])(i.value, function (t, e) {
                      return (
                        Object(r["A"])(),
                        Object(r["g"])(
                          "ul",
                          { class: "navigation__list", key: e },
                          [
                            Object(r["h"])("li", o, [
                              Object(r["k"])(
                                c,
                                {
                                  to: { name: t.name },
                                  class: Object(r["t"])([
                                    "navigation__link",
                                    b(t.idx, t.name),
                                  ]),
                                },
                                {
                                  default: Object(r["R"])(function () {
                                    return [
                                      Object(r["j"])(Object(r["K"])(t.text), 1),
                                    ];
                                  }),
                                  _: 2,
                                },
                                1032,
                                ["to", "class"]
                              ),
                              s,
                            ]),
                          ]
                        )
                      );
                    }),
                    128
                  )),
                ])
              );
            };
          },
        }),
        O = (c("5f6f"), c("6b0d")),
        u = c.n(O);
      const j = u()(b, [["__scopeId", "data-v-adfd2f42"]]);
      e["a"] = j;
    },
    e132: function (t, e, c) {},
  },
]);
//# sourceMappingURL=chunk-443db690.8647f602.js.map
