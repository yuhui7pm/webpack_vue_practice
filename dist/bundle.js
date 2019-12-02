! function (t) {
  var n = {};

  function e(r) {
    if (n[r]) return n[r].exports;
    var o = n[r] = {
      i: r,
      l: !1,
      exports: {}
    };
    return t[r].call(o.exports, o, o.exports, e), o.l = !0, o.exports
  }
  e.m = t, e.c = n, e.d = function (t, n, r) {
    e.o(t, n) || Object.defineProperty(t, n, {
      enumerable: !0,
      get: r
    })
  }, e.r = function (t) {
    "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
      value: "Module"
    }), Object.defineProperty(t, "__esModule", {
      value: !0
    })
  }, e.t = function (t, n) {
    if (1 & n && (t = e(t)), 8 & n) return t;
    if (4 & n && "object" == typeof t && t && t.__esModule) return t;
    var r = Object.create(null);
    if (e.r(r), Object.defineProperty(r, "default", {
        enumerable: !0,
        value: t
      }), 2 & n && "string" != typeof t)
      for (var o in t) e.d(r, o, function (n) {
        return t[n]
      }.bind(null, o));
    return r
  }, e.n = function (t) {
    var n = t && t.__esModule ? function () {
      return t.default
    } : function () {
      return t
    };
    return e.d(n, "a", n), n
  }, e.o = function (t, n) {
    return Object.prototype.hasOwnProperty.call(t, n)
  }, e.p = "", e(e.s = 3)
}([function (t, n, e) {
  (t.exports = e(2)(!1)).push([t.i, "\n#test{\r\n  color:greenyellow;\n}\r\n", ""])
}, function (t, n, e) {
  "use strict";
  var r = e(0);
  e.n(r).a
}, function (t, n, e) {
  "use strict";
  t.exports = function (t) {
    var n = [];
    return n.toString = function () {
      return this.map((function (n) {
        var e = function (t, n) {
          var e = t[1] || "",
            r = t[3];
          if (!r) return e;
          if (n && "function" == typeof btoa) {
            var o = (c = r, a = btoa(unescape(encodeURIComponent(JSON.stringify(c)))), u = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(a), "/*# ".concat(u, " */")),
              i = r.sources.map((function (t) {
                return "/*# sourceURL=".concat(r.sourceRoot).concat(t, " */")
              }));
            return [e].concat(i).concat([o]).join("\n")
          }
          var c, a, u;
          return [e].join("\n")
        }(n, t);
        return n[2] ? "@media ".concat(n[2], "{").concat(e, "}") : e
      })).join("")
    }, n.i = function (t, e) {
      "string" == typeof t && (t = [
        [null, t, ""]
      ]);
      for (var r = {}, o = 0; o < this.length; o++) {
        var i = this[o][0];
        null != i && (r[i] = !0)
      }
      for (var c = 0; c < t.length; c++) {
        var a = t[c];
        null != a[0] && r[a[0]] || (e && !a[2] ? a[2] = e : e && (a[2] = "(".concat(a[2], ") and (").concat(e, ")")), n.push(a))
      }
    }, n
  }
}, function (t, n, e) {
  "use strict";
  e.r(n);
  var r = function () {
    var t = this.$createElement;
    return (this._self._c || t)("div", {
      attrs: {
        id: "test"
      }
    }, [this._v(this._s(this.text))])
  };
  r._withStripped = !0;
  var o = {
    data: () => ({
      text: "abc"
    })
  };
  e(1);
  var i = function (t, n, e, r, o, i, c, a) {
    var u, s = "function" == typeof t ? t.options : t;
    if (n && (s.render = n, s.staticRenderFns = e, s._compiled = !0), r && (s.functional = !0), i && (s._scopeId = "data-v-" + i), c ? (u = function (t) {
        (t = t || this.$vnode && this.$vnode.ssrContext || this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) || "undefined" == typeof __VUE_SSR_CONTEXT__ || (t = __VUE_SSR_CONTEXT__), o && o.call(this, t), t && t._registeredComponents && t._registeredComponents.add(c)
      }, s._ssrRegister = u) : o && (u = a ? function () {
        o.call(this, this.$root.$options.shadowRoot)
      } : o), u)
      if (s.functional) {
        s._injectStyles = u;
        var f = s.render;
        s.render = function (t, n) {
          return u.call(n), f(t, n)
        }
      } else {
        var l = s.beforeCreate;
        s.beforeCreate = l ? [].concat(l, u) : [u]
      } return {
      exports: t,
      options: s
    }
  }(o, r, [], !1, null, null, null);
  i.options.__file = "src/app.vue";
  var c = i.exports;
  const a = document.createElement("div");
  document.body.appendChild(a), new Vew({
    render: t => t(c)
  }).$mount(a)
}]);