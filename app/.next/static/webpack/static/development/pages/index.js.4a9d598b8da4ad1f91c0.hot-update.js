webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: MyComp, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyComp", function() { return MyComp; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_bootstrap_table_next__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-bootstrap-table-next */ "./node_modules/react-bootstrap-table-next/lib/index.js");
/* harmony import */ var react_bootstrap_table_next__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_table_next__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_bootstrap_table2_filter__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-bootstrap-table2-filter */ "./node_modules/react-bootstrap-table2-filter/lib/index.js");
/* harmony import */ var react_bootstrap_table2_filter__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_table2_filter__WEBPACK_IMPORTED_MODULE_7__);





var _jsxFileName = "C:\\Users\\rakof\\OneDrive\\Bureau\\WebAppArch\\castle\\app\\pages\\index.js";




var data = __webpack_require__(/*! ./data.json */ "./pages/data.json");

for (var i = 0; i < data.length; i++) {
  data[i].id = i + 1;
}

var columns = [{
  dataField: 'id',
  text: '#',
  sort: true
}, {
  dataField: 'nom',
  text: 'Nom',
  sort: true,
  filter: Object(react_bootstrap_table2_filter__WEBPACK_IMPORTED_MODULE_7__["textFilter"])()
}, {
  dataField: 'url',
  text: 'Access Site'
}, {
  dataField: 'chef',
  text: 'Chef Etoilé',
  sort: true,
  filter: Object(react_bootstrap_table2_filter__WEBPACK_IMPORTED_MODULE_7__["textFilter"])()
}, {
  dataField: 'prix',
  text: 'Prix (euros)',
  sort: true
}, {
  dataField: 'etoile',
  text: 'Etoiles',
  sort: true,
  filter: Object(react_bootstrap_table2_filter__WEBPACK_IMPORTED_MODULE_7__["textFilter"])()
}];
var defaultSorted = [{
  dataField: 'name',
  order: 'desc'
}];
var MyComp =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(MyComp, _React$Component);

  function MyComp() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, MyComp);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(MyComp).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(MyComp, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("html", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("head", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("link", {
        rel: "stylesheet",
        href: "https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/css/bootstrap.min.css",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("body", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("nav", {
        class: "navbar navbar-dark bg-dark",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", {
        class: "navbar-brand",
        href: "#",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("img", {
        src: "logo.png",
        width: "30",
        height: "30",
        class: "d-inline-block align-top",
        alt: "",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        },
        __self: this
      }), "Relais Chateau")), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        class: "container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_bootstrap_table_next__WEBPACK_IMPORTED_MODULE_6___default.a, {
        bootstrap4: true,
        keyField: "id",
        data: data,
        columns: columns,
        defaultSorted: defaultSorted,
        filter: react_bootstrap_table2_filter__WEBPACK_IMPORTED_MODULE_7___default()(),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        },
        __self: this
      }))));
    }
  }]);

  return MyComp;
}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component);
/* harmony default export */ __webpack_exports__["default"] = (MyComp);

/***/ })

})
//# sourceMappingURL=index.js.4a9d598b8da4ad1f91c0.hot-update.js.map