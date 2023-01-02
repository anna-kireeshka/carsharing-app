/* eslint-disable */
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
  ["chunk-25f4dd56"],
  {
    "0a9c": function (e, c, t) {},
    "20fb": function (e, c, t) {
      "use strict";
      t.r(c);
      t("b0c0");
      var a = t("7a23"),
        r = t("5502"),
        d = t("f074"),
        b = t("f4dd"),
        s = t("a4ce"),
        n = { class: "main-wrapper" },
        O = { class: "main" },
        j = { class: "navigation" },
        i = { class: "navigation__item" },
        o = { class: "card-form" },
        l = { class: "car-container" },
        u = { key: 0, class: "order" },
        _ = { class: "order__car-model" },
        f = { class: "order__car-number" },
        m = { class: "order__fuel" },
        p = { class: "order__fuel order__fuel--precent" },
        h = { class: "order__date" },
        v = { class: "order__date order__date--time" },
        k = { key: 1, class: "card" },
        g = ["src"],
        w = Object(a["l"])({
          __name: "ConfirmOrder",
          setup: function (e) {
            var c = Object(r["b"])(),
              t = Object(a["F"])([]);
            c.dispatch("OrderForm/fetchDataFinalOrderForId"),
              (t.value = c.state.OrderForm.orderCard);
            var w = Object(a["c"])(function () {
                return c.state.OrderForm.dateTo;
              }),
              F = Object(a["c"])(function () {
                return c.state.OrderForm.orderStatus.id;
              });
            return function (e, c) {
              return (
                Object(a["A"])(),
                Object(a["g"])("div", n, [
                  Object(a["k"])(b["a"]),
                  Object(a["h"])("div", O, [
                    Object(a["k"])(s["a"]),
                    Object(a["h"])("div", j, [
                      Object(a["h"])(
                        "p",
                        i,
                        "Заказ номер " + Object(a["K"])(Object(a["M"])(F)),
                        1
                      ),
                    ]),
                    Object(a["h"])("div", o, [
                      Object(a["h"])("div", l, [
                        (Object(a["A"])(!0),
                        Object(a["g"])(
                          a["a"],
                          null,
                          Object(a["G"])(t.value, function (e, c) {
                            return (
                              Object(a["A"])(),
                              Object(a["g"])(
                                "div",
                                { class: "form", key: "list-item-" + c },
                                [
                                  "data" === c
                                    ? (Object(a["A"])(),
                                      Object(a["g"])("div", u, [
                                        Object(a["h"])(
                                          "p",
                                          _,
                                          Object(a["K"])(e.carId.name),
                                          1
                                        ),
                                        Object(a["h"])(
                                          "p",
                                          f,
                                          Object(a["K"])(e.carId.number),
                                          1
                                        ),
                                        Object(a["h"])("p", m, [
                                          Object(a["j"])(" Топливо "),
                                          Object(a["h"])(
                                            "span",
                                            p,
                                            Object(a["K"])(e.carId.tank) + "%",
                                            1
                                          ),
                                        ]),
                                        Object(a["h"])("p", h, [
                                          Object(a["j"])(" Доступна с "),
                                          Object(a["h"])(
                                            "span",
                                            v,
                                            Object(a["K"])(Object(a["M"])(w)),
                                            1
                                          ),
                                        ]),
                                      ]))
                                    : Object(a["f"])("", !0),
                                  "data" === c
                                    ? (Object(a["A"])(),
                                      Object(a["g"])("div", k, [
                                        Object(a["h"])(
                                          "img",
                                          {
                                            src: e.carId.thumbnail.path,
                                            alt: "Выбраная машина",
                                            class: "card__image",
                                          },
                                          null,
                                          8,
                                          g
                                        ),
                                      ]))
                                    : Object(a["f"])("", !0),
                                ]
                              )
                            );
                          }),
                          128
                        )),
                      ]),
                      Object(a["k"])(d["a"]),
                    ]),
                  ]),
                ])
              );
            };
          },
        }),
        F = (t("623b"), t("6b0d")),
        I = t.n(F);
      const A = I()(w, [["__scopeId", "data-v-2165ed30"]]);
      c["default"] = A;
    },
    "623b": function (e, c, t) {
      "use strict";
      t("0a9c");
    },
  },
]);
//# sourceMappingURL=chunk-25f4dd56.88d31da1.js.map
