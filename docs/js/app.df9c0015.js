/* eslint-disable */
(function (e) {
  function t(t) {
    for (
      var r, a, c = t[0], d = t[1], l = t[2], u = 0, s = [];
      u < c.length;
      u++
    )
      (a = c[u]),
        Object.prototype.hasOwnProperty.call(o, a) && o[a] && s.push(o[a][0]),
        (o[a] = 0);
    for (r in d) Object.prototype.hasOwnProperty.call(d, r) && (e[r] = d[r]);
    f && f(t);
    while (s.length) s.shift()();
    return i.push.apply(i, l || []), n();
  }
  function n() {
    for (var e, t = 0; t < i.length; t++) {
      for (var n = i[t], r = !0, a = 1; a < n.length; a++) {
        var c = n[a];
        0 !== o[c] && (r = !1);
      }
      r && (i.splice(t--, 1), (e = d((d.s = n[0]))));
    }
    return e;
  }
  var r = {},
    a = { app: 0 },
    o = { app: 0 },
    i = [];
  function c(e) {
    return (
      d.p +
      "js/" +
      ({}[e] || e) +
      "." +
      {
        "chunk-0203f4a7": "ec3d5989",
        "chunk-1404ea34": "03738b92",
        "chunk-25f4dd56": "88d31da1",
        "chunk-443db690": "8647f602",
        "chunk-791a127c": "f5067bf2",
        "chunk-9b44d924": "9f825588",
        "chunk-dbec5910": "40a59d04",
      }[e] +
      ".js"
    );
  }
  function d(t) {
    if (r[t]) return r[t].exports;
    var n = (r[t] = { i: t, l: !1, exports: {} });
    return e[t].call(n.exports, n, n.exports, d), (n.l = !0), n.exports;
  }
  (d.e = function (e) {
    var t = [],
      n = {
        "chunk-0203f4a7": 1,
        "chunk-1404ea34": 1,
        "chunk-25f4dd56": 1,
        "chunk-443db690": 1,
        "chunk-791a127c": 1,
        "chunk-9b44d924": 1,
        "chunk-dbec5910": 1,
      };
    a[e]
      ? t.push(a[e])
      : 0 !== a[e] &&
        n[e] &&
        t.push(
          (a[e] = new Promise(function (t, n) {
            for (
              var r =
                  "css/" +
                  ({}[e] || e) +
                  "." +
                  {
                    "chunk-0203f4a7": "4999969f",
                    "chunk-1404ea34": "c93cf376",
                    "chunk-25f4dd56": "e7a2a29d",
                    "chunk-443db690": "c7d5ca74",
                    "chunk-791a127c": "2781f70c",
                    "chunk-9b44d924": "104f262b",
                    "chunk-dbec5910": "d5e1138b",
                  }[e] +
                  ".css",
                o = d.p + r,
                i = document.getElementsByTagName("link"),
                c = 0;
              c < i.length;
              c++
            ) {
              var l = i[c],
                u = l.getAttribute("data-href") || l.getAttribute("href");
              if ("stylesheet" === l.rel && (u === r || u === o)) return t();
            }
            var s = document.getElementsByTagName("style");
            for (c = 0; c < s.length; c++) {
              (l = s[c]), (u = l.getAttribute("data-href"));
              if (u === r || u === o) return t();
            }
            var f = document.createElement("link");
            (f.rel = "stylesheet"),
              (f.type = "text/css"),
              (f.onload = t),
              (f.onerror = function (t) {
                var r = (t && t.target && t.target.src) || o,
                  i = new Error(
                    "Loading CSS chunk " + e + " failed.\n(" + r + ")"
                  );
                (i.code = "CSS_CHUNK_LOAD_FAILED"),
                  (i.request = r),
                  delete a[e],
                  f.parentNode.removeChild(f),
                  n(i);
              }),
              (f.href = o);
            var p = document.getElementsByTagName("head")[0];
            p.appendChild(f);
          }).then(function () {
            a[e] = 0;
          }))
        );
    var r = o[e];
    if (0 !== r)
      if (r) t.push(r[2]);
      else {
        var i = new Promise(function (t, n) {
          r = o[e] = [t, n];
        });
        t.push((r[2] = i));
        var l,
          u = document.createElement("script");
        (u.charset = "utf-8"),
          (u.timeout = 120),
          d.nc && u.setAttribute("nonce", d.nc),
          (u.src = c(e));
        var s = new Error();
        l = function (t) {
          (u.onerror = u.onload = null), clearTimeout(f);
          var n = o[e];
          if (0 !== n) {
            if (n) {
              var r = t && ("load" === t.type ? "missing" : t.type),
                a = t && t.target && t.target.src;
              (s.message =
                "Loading chunk " + e + " failed.\n(" + r + ": " + a + ")"),
                (s.name = "ChunkLoadError"),
                (s.type = r),
                (s.request = a),
                n[1](s);
            }
            o[e] = void 0;
          }
        };
        var f = setTimeout(function () {
          l({ type: "timeout", target: u });
        }, 12e4);
        (u.onerror = u.onload = l), document.head.appendChild(u);
      }
    return Promise.all(t);
  }),
    (d.m = e),
    (d.c = r),
    (d.d = function (e, t, n) {
      d.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: n });
    }),
    (d.r = function (e) {
      "undefined" !== typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (d.t = function (e, t) {
      if ((1 & t && (e = d(e)), 8 & t)) return e;
      if (4 & t && "object" === typeof e && e && e.__esModule) return e;
      var n = Object.create(null);
      if (
        (d.r(n),
        Object.defineProperty(n, "default", { enumerable: !0, value: e }),
        2 & t && "string" != typeof e)
      )
        for (var r in e)
          d.d(
            n,
            r,
            function (t) {
              return e[t];
            }.bind(null, r)
          );
      return n;
    }),
    (d.n = function (e) {
      var t =
        e && e.__esModule
          ? function () {
              return e["default"];
            }
          : function () {
              return e;
            };
      return d.d(t, "a", t), t;
    }),
    (d.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (d.p = ""),
    (d.oe = function (e) {
      throw (console.error(e), e);
    });
  var l = (window["webpackJsonp"] = window["webpackJsonp"] || []),
    u = l.push.bind(l);
  (l.push = t), (l = l.slice());
  for (var s = 0; s < l.length; s++) t(l[s]);
  var f = u;
  i.push([0, "chunk-vendors"]), n();
})({
  0: function (e, t, n) {
    e.exports = n("cd49");
  },
  "5f1b": function (e, t, n) {
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
  "615c": function (e, t, n) {
    "use strict";
    n("5f1b");
  },
  cd49: function (e, t, n) {
    "use strict";
    n.r(t);
    n("e260"), n("e6cf"), n("cca6"), n("a79d");
    var r = n("7a23"),
      a = { id: "app", class: "container" };
    function o(e, t, n, o, i, c) {
      var d = Object(r["I"])("Icon"),
        l = Object(r["I"])("router-view");
      return (
        Object(r["A"])(),
        Object(r["g"])("div", a, [Object(r["k"])(d), Object(r["k"])(l)])
      );
    }
    var i = { xmlns: "http://www.w3.org/2000/svg", style: { display: "none" } },
      c = Object(r["i"])(
        '<symbol id="close" width="32" height="32" viewBox="0 0 32 32"><path d="M24 8L8 24" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"></path><path d="M8 8L24 24" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"></path></symbol><symbol id="menu" viewBox="0 0 32 32" fill="none"><path d="M4 16H28" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"></path><path d="M4 8H28" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"></path><path d="M4 24H28" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"></path></symbol><symbol id="menu-mobile" viewBox="0 0 32 32" fill="none"><path d="M4 16H28" stroke="#121212" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"></path><path d="M4 8H28" stroke="#121212" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"></path><path d="M4 24H28" stroke="#121212" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"></path></symbol><symbol id="gps" viewBox="0 0 18 20" fill="none"><path d="M16.0802 8.36364C16.0802 14.0909 8.54011 19 8.54011 19C8.54011 19 1 14.0909 1 8.36364C1 6.41068 1.7944 4.53771 3.20845 3.15676C4.62249 1.77581 6.54035 1 8.54011 1C10.5399 1 12.4577 1.77581 13.8718 3.15676C15.2858 4.53771 16.0802 6.41068 16.0802 8.36364Z" stroke="#999999" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M8.5401 10.8182C9.9282 10.8182 11.0535 9.71925 11.0535 8.36364C11.0535 7.00803 9.9282 5.90909 8.5401 5.90909C7.15201 5.90909 6.02673 7.00803 6.02673 8.36364C6.02673 9.71925 7.15201 10.8182 8.5401 10.8182Z" stroke="#999999" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></symbol><symbol id="telegram" viewBox="0 0 32 32" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M32 16C32 24.8366 24.8366 32 16 32C7.16344 32 0 24.8366 0 16C0 7.16344 7.16344 0 16 0C24.8366 0 32 7.16344 32 16ZM10.7144 14.5343C9.11157 15.2341 7.46472 15.9532 5.95883 16.7826L5.95873 16.7828C5.17241 17.3585 6.21758 17.7657 7.19803 18.1476C7.35391 18.2084 7.50814 18.2685 7.65313 18.3285C7.77377 18.3656 7.89647 18.4047 8.02079 18.4443C9.11124 18.7917 10.3272 19.1791 11.3858 18.5963C13.1248 17.5973 14.766 16.4424 16.4059 15.2883C16.9432 14.9102 17.4803 14.5322 18.0207 14.1598C18.046 14.1436 18.0746 14.1251 18.1058 14.1048C18.5662 13.8064 19.6016 13.1353 19.2186 14.06C18.313 15.0504 17.3429 15.9272 16.3676 16.8087C15.7103 17.4027 15.0506 17.999 14.4066 18.6336C13.8457 19.0894 13.2633 20.0059 13.8914 20.644C15.3379 21.6567 16.8071 22.6449 18.2755 23.6325C18.7533 23.9538 19.231 24.2752 19.7079 24.5972C20.516 25.2425 21.779 24.7206 21.9567 23.7123C22.0357 23.2485 22.115 22.7847 22.1944 22.3208C22.6328 19.7578 23.0713 17.1938 23.4587 14.6223C23.5113 14.219 23.571 13.8156 23.6307 13.4121C23.7755 12.434 23.9204 11.4547 23.9656 10.4714C23.849 9.49009 22.6592 9.70585 21.997 9.9265C18.5935 11.2216 15.224 12.6126 11.8679 14.0282C11.4877 14.1967 11.1023 14.3649 10.7144 14.5343Z" fill="currentColor"></path></symbol><symbol id="arrow" viewBox="0 0 10 20" fill="none"><path d="M1 1L9 10L1 19" stroke="#EEEEEE" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></symbol><symbol id="arrow-breadcrumbs" viewBox="0 0 6 8" fill="none"><path d="M0 0L6 4.03L0 8V0Z" fill="#999999"></path></symbol><symbol id="cross" viewBox="0 0 6 8" fill="none"><path d="M8 0.805714L7.19429 0L4 3.19429L0.805714 0L0 0.805714L3.19429 4L0 7.19429L0.805714 8L4 4.80571L7.19429 8L8 7.19429L4.80571 4L8 0.805714Z" fill="#121212"></path></symbol>',
        8
      ),
      d = [c];
    function l(e, t) {
      return Object(r["A"])(), Object(r["g"])("svg", i, d);
    }
    var u = n("6b0d"),
      s = n.n(u);
    const f = {},
      p = s()(f, [["render", l]]);
    var h = p,
      m = { name: "App", components: { Icon: h } };
    n("615c");
    const g = s()(m, [["render", o]]);
    var k = g,
      b = (n("d3b7"), n("3ca3"), n("ddb0"), n("6605")),
      v = [
        {
          path: "",
          name: "MainPage",
          component: function () {
            return n.e("chunk-dbec5910").then(n.bind(null, "6ccf"));
          },
          props: !0,
        },
        {
          path: "/OrderForm",
          name: "location",
          component: function () {
            return Promise.all([
              n.e("chunk-0203f4a7"),
              n.e("chunk-9b44d924"),
            ]).then(n.bind(null, "e11b"));
          },
          props: !0,
        },
        {
          path: "/car-model",
          name: "CarModel",
          component: function () {
            return Promise.all([
              n.e("chunk-0203f4a7"),
              n.e("chunk-1404ea34"),
            ]).then(n.bind(null, "66c5"));
          },
          props: !0,
        },
        {
          path: "/additionally",
          name: "OrderAdditionally",
          component: function () {
            return Promise.all([
              n.e("chunk-0203f4a7"),
              n.e("chunk-791a127c"),
            ]).then(n.bind(null, "c794"));
          },
        },
        {
          path: "/final-order",
          name: "FinalOrder",
          component: function () {
            return Promise.all([
              n.e("chunk-0203f4a7"),
              n.e("chunk-443db690"),
            ]).then(n.bind(null, "01d9"));
          },
          props: !0,
        },
        {
          path: "/order/:id",
          name: "ConfirmOrder",
          component: function () {
            return Promise.all([
              n.e("chunk-0203f4a7"),
              n.e("chunk-25f4dd56"),
            ]).then(n.bind(null, "20fb"));
          },
        },
        {
          path: "/:pathMatch(.*)*",
          component: function () {
            return Promise.all([
              n.e("chunk-0203f4a7"),
              n.e("chunk-25f4dd56"),
            ]).then(n.bind(null, "20fb"));
          },
          name: "NotFoundPage",
        },
      ],
      C = Object(b["a"])({ history: Object(b["b"])(""), routes: v }),
      y = C,
      w = n("5502"),
      O = (n("4de4"), n("caad"), n("2532"), n("b0c0"), n("a9e3"), n("5a0c")),
      M = n.n(O),
      P = n("2ef0"),
      L = n.n(P),
      j = {
        getCityValue: function (e) {
          return function (t) {
            var n = L.a.cloneDeep(e.city);
            return L.a.isEmpty(t)
              ? n
              : null === n || void 0 === n
              ? void 0
              : n.filter(function (e) {
                  return e.name.toLowerCase().includes(t.toLowerCase());
                });
          };
        },
        getColorFilter: function (e) {
          return (e.colorFilter = [
            { name: "Любой", checked: !1, val: "allColor" },
            { name: "Красный", checked: !1, val: "red" },
            { name: "Голубой", checked: !1, val: "blue" },
          ]);
        },
        getCarAdditionally: function (e) {
          return (e.carAdditionally = [
            { name: "Полный бак", checked: !1, val: "fullTank", price: 500 },
            {
              name: "Детское кресло",
              checked: !1,
              val: "babyChair",
              price: 200,
            },
            {
              name: "Правый руль",
              checked: !1,
              val: "rightHandDrive",
              price: 1600,
            },
          ]);
        },
        getRateTime: function (e) {
          var t = "";
          if (e.dateTo && e.dateFrom) {
            var n = M()(e.dateTo),
              r = M()(e.dateFrom);
            t = M.a.duration(n.diff(r)).format("D[д] H[ч]");
          }
          return t;
        },
        getRateTimeMinute: function (e) {
          if (e.dateTo && e.dateFrom) {
            var t = M()(e.dateTo),
              n = M()(e.dateFrom);
            e.durationMinute = M.a.duration(t.diff(n)).asMinutes();
          }
          return parseInt(e.durationMinute);
        },
        getDateToMs: function (e) {
          return e.dateTo && (e.dateToMs = M()(e.dateTo).valueOf()), e.dateToMs;
        },
        getDateFromMs: function (e) {
          return (
            e.dateFrom && (e.dateFromMs = M()(e.dateFrom).valueOf()),
            e.dateFromMs
          );
        },
        fullPrice: function (e) {
          var t = Number(e.carPrice);
          return (
            (e.dateTo || e.dateFrom) &&
              ("24h" === e.rateId
                ? (t += Number(e.ratePrice))
                : "1min" === e.rateId && (t += 9 * Number(e.durationMinute))),
            (e.fullPrice = t)
          );
        },
      },
      x = n("1da1"),
      F = (n("96cf"), n("bc3a")),
      I = n.n(F),
      T = I.a.create({
        baseURL: "https://api-factory.simbirsoft1.com/api/db",
        headers: { "Content-Type": "application/json" },
      });
    T.defaults.headers.common["X-Api-Factory-Application-Id"] =
      "5e25c641099b810b946c5d5b";
    var R = I.a.create({
        baseURL: "http://localhost:3000",
        headers: { "Content-Type": "application/json" },
      }),
      A = n("ec26"),
      S = {
        loadСities: function (e) {
          return Object(x["a"])(
            regeneratorRuntime.mark(function t() {
              var n, r;
              return regeneratorRuntime.wrap(
                function (t) {
                  while (1)
                    switch ((t.prev = t.next)) {
                      case 0:
                        return (
                          (n = e.commit),
                          (t.prev = 1),
                          (t.next = 4),
                          R.get("/city")
                        );
                      case 4:
                        (r = t.sent), n("cityLoaded", r.data), (t.next = 11);
                        break;
                      case 8:
                        (t.prev = 8), (t.t0 = t["catch"](1)), console.log(t.t0);
                      case 11:
                      case "end":
                        return t.stop();
                    }
                },
                t,
                null,
                [[1, 8]]
              );
            })
          )();
        },
        loadPoint: function (e, t) {
          return Object(x["a"])(
            regeneratorRuntime.mark(function n() {
              var r, a;
              return regeneratorRuntime.wrap(
                function (n) {
                  while (1)
                    switch ((n.prev = n.next)) {
                      case 0:
                        return (
                          (r = e.commit),
                          (n.prev = 1),
                          (n.next = 4),
                          R.get("/pvz/".concat(t))
                        );
                      case 4:
                        (a = n.sent), r("pvzLoaded", a.data), (n.next = 11);
                        break;
                      case 8:
                        (n.prev = 8), (n.t0 = n["catch"](1)), console.log(n.t0);
                      case 11:
                      case "end":
                        return n.stop();
                    }
                },
                n,
                null,
                [[1, 8]]
              );
            })
          )();
        },
        loadCar: function (e, t) {
          return Object(x["a"])(
            regeneratorRuntime.mark(function n() {
              var r, a, o;
              return regeneratorRuntime.wrap(
                function (n) {
                  while (1)
                    switch ((n.prev = n.next)) {
                      case 0:
                        return (
                          (r = e.commit),
                          (a = e.state),
                          (n.prev = 1),
                          (n.next = 4),
                          R.get("/car", { params: { categoryId: t } })
                        );
                      case 4:
                        (o = n.sent),
                          (a.loadingCarList = !0),
                          r("carLoaded", o.data),
                          (n.next = 12);
                        break;
                      case 9:
                        (n.prev = 9), (n.t0 = n["catch"](1)), console.log(n.t0);
                      case 12:
                      case "end":
                        return n.stop();
                    }
                },
                n,
                null,
                [[1, 9]]
              );
            })
          )();
        },
        loadRate: function (e) {
          return Object(x["a"])(
            regeneratorRuntime.mark(function t() {
              var n, r;
              return regeneratorRuntime.wrap(
                function (t) {
                  while (1)
                    switch ((t.prev = t.next)) {
                      case 0:
                        return (
                          (n = e.commit),
                          (t.prev = 1),
                          (t.next = 4),
                          R.get("/rate")
                        );
                      case 4:
                        (r = t.sent), n("rateLoaded", r.data), (t.next = 11);
                        break;
                      case 8:
                        (t.prev = 8), (t.t0 = t["catch"](1)), console.log(t.t0);
                      case 11:
                      case "end":
                        return t.stop();
                    }
                },
                t,
                null,
                [[1, 8]]
              );
            })
          )();
        },
        fetchDataOrder: function (e) {
          return Object(x["a"])(
            regeneratorRuntime.mark(function t() {
              var n, r, a;
              return regeneratorRuntime.wrap(
                function (t) {
                  while (1)
                    switch ((t.prev = t.next)) {
                      case 0:
                        return (
                          (n = e.commit),
                          (r = e.state),
                          (t.prev = 1),
                          (t.next = 4),
                          T.post("/rate", {
                            orderStatusId: Object(A["a"])(),
                            cityId: r.cityId,
                            pointId: r.pvzId,
                            carId: r.carId,
                            color: r.carColor,
                            dateFrom: r.dateFrom,
                            dateTo: r.dateTo,
                            rateId: r.rateId,
                            price: r.fullPrice,
                            isFullTank: r.checked,
                            isNeedChildChair: r.checked,
                            isRightWheel: r.checked,
                          })
                        );
                      case 4:
                        (a = t.sent),
                          (r.loadedResponsPost = !0),
                          n("finalOrderLoaded", a.data),
                          (t.next = 12);
                        break;
                      case 9:
                        (t.prev = 9), (t.t0 = t["catch"](1)), console.log(t.t0);
                      case 12:
                      case "end":
                        return t.stop();
                    }
                },
                t,
                null,
                [[1, 9]]
              );
            })
          )();
        },
        fetchDataStatusOrder: function (e) {
          return Object(x["a"])(
            regeneratorRuntime.mark(function t() {
              var n, r;
              return regeneratorRuntime.wrap(
                function (t) {
                  while (1)
                    switch ((t.prev = t.next)) {
                      case 0:
                        return (
                          (n = e.commit),
                          (t.prev = 1),
                          (t.next = 4),
                          R.get("/orderStatus")
                        );
                      case 4:
                        (r = t.sent),
                          n("orderStatusLoaded", r.data),
                          (t.next = 11);
                        break;
                      case 8:
                        (t.prev = 8), (t.t0 = t["catch"](1)), console.log(t.t0);
                      case 11:
                      case "end":
                        return t.stop();
                    }
                },
                t,
                null,
                [[1, 8]]
              );
            })
          )();
        },
        fetchDataFinalOrderForId: function (e) {
          var t = e.state;
          T.get("/order/" + t.id).then(
            function (e) {
              t.orderCard = e.data;
            },
            function (e) {
              console.log(e);
            }
          );
        },
      },
      V =
        (n("a434"),
        {
          cityLoaded: function (e, t) {
            e.city = t;
          },
          pvzLoaded: function (e, t) {
            e.pvz = t;
          },
          carLoaded: function (e, t) {
            e.car = t;
          },
          rateLoaded: function (e, t) {
            e.rate = t;
          },
          orderStatusLoaded: function (e, t) {
            e.orderStatus = t;
          },
          finalOrderLoaded: function (e, t) {
            e.finalOrder = t;
          },
          setCityValue: function (e, t) {
            e.valueCity = t;
          },
          setPvzValue: function (e, t) {
            e.valuePvz = t;
          },
          getPvzId: function (e, t) {
            e.pvzId = t;
          },
          getCarModel: function (e, t) {
            e.carModel = t;
          },
          getCarNumber: function (e, t) {
            e.carNumber = t;
          },
          getColorChecked: function (e, t) {
            e.colorCheck = t;
          },
          getCarColor: function (e, t) {
            e.carColor = t;
          },
          getCarPrice: function (e, t) {
            e.carPrice = t;
          },
          getCarPriceMax: function (e, t) {
            e.maxCarPrice = t;
          },
          getCarImg: function (e, t) {
            e.img = t;
          },
          getCarFuel: function (e, t) {
            e.fuel = t;
          },
          getCarId: function (e, t) {
            e.carId = t;
          },
          getCarAdditionallyChecked: function (e, t) {
            e.checked = t;
          },
          getCarAdditionallyFilter: function (e, t) {
            if (-1 === e.additionallyFilter.indexOf(t) && e.checked)
              e.additionallyFilter.push(t);
            else if (!e.checked) {
              var n = e.additionallyFilter.indexOf(t);
              e.additionallyFilter.splice(n, 1);
            }
            return e.additionallyFilter;
          },
          getCarRate: function (e, t) {
            e.rateFilter = t;
          },
          getCarPriceAdditionally: function (e, t) {
            e.additionallyPrice = t;
          },
          getDateTimeFrom: function (e, t) {
            e.dateFrom = M()(t).format("YYYY-MM-DD HH:mm:ss");
          },
          getDateTimeTo: function (e, t) {
            e.dateTo = t;
          },
          getCarPriceRate: function (e, t) {
            e.ratePrice = t;
          },
          getRateId: function (e, t) {
            e.rateId = t;
          },
          getIsCarLocationValidation: function (e, t) {
            e.isCarAdditionalyValidation = t;
          },
          getIsCarModelValidation: function (e, t) {
            e.isCarModelValidation = t;
          },
          getIsCarAdditionalyValidation: function (e, t) {
            e.isCarAdditionalyValidation = t;
          },
          getIsFinalOrderValidation: function (e, t) {
            e.isFinalOrderValidation = t;
          },
        }),
      E = {
        city: [],
        pvz: [],
        car: [],
        rate: [],
        orderStatus: [],
        valueCity: "",
        valuePvz: "",
        carModel: "",
        carNumber: "",
        colorFilter: [],
        colorCheck: !1,
        carAdditionally: [],
        carColor: "",
        additionallyFilter: [],
        dateFrom: "",
        dateTo: "",
        checked: !0,
        carPrice: 0,
        maxCarPrice: 0,
        ratePrice: 0,
        timePrice: 0,
        additionallyPrice: 0,
        rateFilter: "",
        durationMinute: 0,
        loadingCarList: !1,
        img: "",
        fuel: 0,
        orderId: 0,
        fullPrice: 0,
        carId: "",
        rateId: "",
        confirmOrder: [],
        finalOrder: [],
        dateToMs: 0,
        dateFromMs: 0,
        id: "",
        orderCard: [],
        loadedResponsPost: !1,
        isCarLocationValidation: !1,
        isCarModelValidation: !1,
        isCarAdditionalyValidation: !1,
        isFinalOrderValidation: !1,
      },
      B = !0,
      D = { namespaced: B, state: E, getters: j, actions: S, mutations: V },
      N = new w["a"].Store({
        state: { version: "1.0.0" },
        modules: { OrderForm: D },
        mutations: {},
        actions: {},
      }),
      z = n("130e"),
      H = n("d772"),
      _ = n.n(H),
      Z = n("0261"),
      Y = (n("09c5"), Object(r["d"])(k));
    Y.use(y).use(N),
      Y.use(z["a"], I.a),
      Y.use(O),
      O["extend"](_.a),
      Y.use(Z["a"], { componentPrefix: "vc" }),
      Y.mount("#app");
  },
});
//# sourceMappingURL=app.df9c0015.js.map
