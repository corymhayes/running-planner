webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_values__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/values */ "./node_modules/@babel/runtime-corejs2/core-js/object/values.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_values__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_values__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! isomorphic-unfetch */ "./node_modules/next/dist/build/polyfills/fetch/index.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.js");


var _jsxFileName = "/Users/cor-eee/Projects/run-schedule/pages/index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;






var Home = function Home(_ref, props) {
  var data = _ref.data;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(1),
      weekNum = _useState[0],
      setWeekNum = _useState[1];

  var nextWeek = function nextWeek() {
    if (weekNum < 12) {
      setWeekNum(function (weekNum) {
        return weekNum += 1;
      });
    } else {
      setWeekNum(12);
    }
  };

  var prevWeek = function prevWeek() {
    if (weekNum > 1) {
      setWeekNum(function (weekNum) {
        return weekNum -= 1;
      });
    } else {
      setWeekNum(1);
    }
  };

  return __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-1357465073" + " " + "container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_4___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, __jsx("title", {
    className: "jsx-1357465073",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, "Week 1"), __jsx("link", {
    rel: "icon",
    href: "",
    className: "jsx-1357465073",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  })), __jsx("div", {
    className: "jsx-1357465073" + " " + "week-header",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }, data, __jsx("h1", {
    className: "jsx-1357465073",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }, data["week".concat(weekNum)].label)), __jsx("div", {
    className: "jsx-1357465073" + " " + "exercise-grid",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }, __jsx("div", {
    onClick: prevWeek,
    className: "jsx-1357465073" + " " + "prev-button",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }, "<"), __jsx("div", {
    className: "jsx-1357465073" + " " + "dummy-container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }, _babel_runtime_corejs2_core_js_object_values__WEBPACK_IMPORTED_MODULE_1___default()(data["week".concat(weekNum)]).slice(0, 7).map(function (foo, i) {
    return __jsx("div", {
      key: i,
      className: "jsx-1357465073" + " " + "details-container",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 50
      },
      __self: this
    }, __jsx("div", {
      className: "jsx-1357465073" + " " + "tag-guide",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 51
      },
      __self: this
    }, foo.tag === 'rest' ? __jsx("div", {
      className: "jsx-1357465073" + " " + "tag-dot rest",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 54
      },
      __self: this
    }) : foo.tag === 'run' ? __jsx("div", {
      className: "jsx-1357465073" + " " + "tag-dot run",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 56
      },
      __self: this
    }) : foo.tag === 'cross' ? __jsx("div", {
      className: "jsx-1357465073" + " " + "tag-dot cross",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 58
      },
      __self: this
    }) : foo.tag === 'crossrun' ? __jsx("div", {
      className: "jsx-1357465073" + " " + "tag-dot crossrun",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 60
      },
      __self: this
    }) : __jsx("div", {
      className: "jsx-1357465073" + " " + "tag-dot other",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 61
      },
      __self: this
    }), __jsx("div", {
      className: "jsx-1357465073" + " " + ((i < 6 ? 'tag-line' : 'tag-line-last') || ""),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 64
      },
      __self: this
    })), __jsx("div", {
      className: "jsx-1357465073" + " " + "day-exercise",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 67
      },
      __self: this
    }, __jsx("h1", {
      className: "jsx-1357465073",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 68
      },
      __self: this
    }, foo.label, " - ", foo.raceDay), __jsx("p", {
      className: "jsx-1357465073",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 69
      },
      __self: this
    }, foo.exercise)));
  })), __jsx("div", {
    onClick: nextWeek,
    className: "jsx-1357465073" + " " + "next-button",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75
    },
    __self: this
  }, ">")), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a, {
    id: "1357465073",
    __self: this
  }, ".container.jsx-1357465073{height:100%;width:100%;padding-top:5rem;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-flow:column;-ms-flex-flow:column;flex-flow:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;font-family:sans-serif;}.week-header.jsx-1357465073{font-size:4rem;margin:0 0 3rem 0;padding:0;}.week-header.jsx-1357465073 h1.jsx-1357465073{height:100%;width:100%;margin:0;padding:0;font-weight:1000;}.exercise-grid.jsx-1357465073{display:grid;grid-template-columns:25% 50% 25%;width:100%;}.prev-button.jsx-1357465073,.next-button.jsx-1357465073{font-size:5rem;font-weight:100;}.prev-button.jsx-1357465073{justify-self:end;-webkit-align-self:center;-ms-flex-item-align:center;align-self:center;grid-column:1;}.next-button.jsx-1357465073{-webkit-align-self:center;-ms-flex-item-align:center;align-self:center;grid-column:3;}.dummy-container.jsx-1357465073{grid-column:2;display:grid;grid-template-rows:repeat(7,14.25%);}.details-container.jsx-1357465073{display:grid;grid-template-columns:1fr 1fr;margin:0 0 3rem 0;}.tag-guide.jsx-1357465073{display:grid;grid-template-rows:35% 125%;}.tag-line.jsx-1357465073{height:100%;width:1px;background-color:#c3c3c3;place-self:end;margin-right:.3rem;}.tag-line-last.jsx-1357465073{display:hidden;}.day-exercise.jsx-1357465073{margin-left:2.5rem;-webkit-align-self:center;-ms-flex-item-align:center;align-self:center;}.day-exercise.jsx-1357465073 h1.jsx-1357465073{margin:0;font-size:2rem;line-height:10px;}.tag-dot.jsx-1357465073{-webkit-align-self:start;-ms-flex-item-align:start;align-self:start;justify-self:end;height:10px;width:10px;border-radius:100px;}.rest.jsx-1357465073{background-color:cyan;}.run.jsx-1357465073{background-color:red;}.cross.jsx-1357465073{background-color:yellow;}.crossrun.jsx-1357465073{background-color:orange;}.other.jsx-1357465073{background-color:black;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9jb3ItZWVlL1Byb2plY3RzL3J1bi1zY2hlZHVsZS9wYWdlcy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE2RWtCLEFBR3VCLEFBV0csQUFNSCxBQVFDLEFBT0UsQUFLRSxBQU1DLEFBS0osQUFNRCxBQU1BLEFBS0QsQUFRRyxBQUlJLEFBS1YsQUFPUSxBQU9LLEFBR0QsQUFHRyxBQUdBLEFBR0QsU0F6QlIsR0FsRkosQUFpQkEsQUFnREQsQ0F4Q3dCLEFBNkJKLEFBTUYsQ0FaZixDQXJDSyxBQXFCRixBQXlDbEIsRUFwQ29CLEVBd0NBLEVBc0JwQixDQWpDMkIsQUE4QjNCLENBL0ZtQixBQWlCUixBQTBGWCxDQXpCbUIsQUFtQm5CLEFBR0EsR0F4RHVDLElBaEJ2QyxDQWRZLENBUEEsT0FWRyxDQTJEZixBQXVCQSxDQWhFbUIsQ0FQbkIsQUEwQ29CLElBN0JQLEFBeUNJLFdBeENqQixDQU5BLEVBbUNBLENBWXFCLENBbEJyQixLQXVDbUIsR0E5Q0gsVUEwQmhCLElBekJBLEFBOENjLEdBcERFLEVBd0NoQixPQWFhLEtBcERiLE1BcURzQixNQXpGSCxjQTBGbkIsaURBekZ5QixtR0FDSiw2RkFDSSx1QkFDekIiLCJmaWxlIjoiL1VzZXJzL2Nvci1lZWUvUHJvamVjdHMvcnVuLXNjaGVkdWxlL3BhZ2VzL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5pbXBvcnQgZmV0Y2ggZnJvbSAnaXNvbW9ycGhpYy11bmZldGNoJ1xuaW1wb3J0IExheW91dCBmcm9tICcuLi9jb21wb25lbnRzL0xheW91dCdcblxuY29uc3QgSG9tZSA9ICh7IGRhdGEgfSwgcHJvcHMpID0+IHtcbiAgY29uc3QgW3dlZWtOdW0sIHNldFdlZWtOdW1dID0gdXNlU3RhdGUoMSlcblxuICBjb25zdCBuZXh0V2VlayA9ICgpID0+IHtcbiAgICBpZih3ZWVrTnVtIDwgMTIpe1xuICAgICAgc2V0V2Vla051bSh3ZWVrTnVtID0+IHdlZWtOdW0gKz0gMSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHNldFdlZWtOdW0oMTIpO1xuICAgIH1cbiAgfVxuXG4gIGNvbnN0IHByZXZXZWVrID0gKCkgPT4ge1xuICAgIGlmKHdlZWtOdW0gPiAxKXtcbiAgICAgIHNldFdlZWtOdW0od2Vla051bSA9PiB3ZWVrTnVtIC09IDEpO1xuICAgIH0gZWxzZSB7XG4gICAgICBzZXRXZWVrTnVtKDEpXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuKFxuICAgIDxMYXlvdXQ+XG5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuXG4gICAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPldlZWsgMTwvdGl0bGU+XG4gICAgICAgIDxsaW5rIHJlbD1cImljb25cIiBocmVmPVwiXCIgLz5cbiAgICAgIDwvSGVhZD5cblxuXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIndlZWstaGVhZGVyXCI+XG4gICAgICAgIHtcbiAgICAgICAgICBkYXRhXG4gICAgICAgIH1cbiAgICAgICAgPGgxPntkYXRhW2B3ZWVrJHt3ZWVrTnVtfWBdLmxhYmVsfTwvaDE+XG4gICAgICA8L2Rpdj5cblxuXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImV4ZXJjaXNlLWdyaWRcIj5cbiAgICAgICAgPGRpdiBvbkNsaWNrPXtwcmV2V2Vla30gY2xhc3NOYW1lPVwicHJldi1idXR0b25cIj4mbHQ7PC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZHVtbXktY29udGFpbmVyXCI+XG4gICAgICAgICAge1xuICAgICAgICAgICAgT2JqZWN0LnZhbHVlcyhkYXRhW2B3ZWVrJHt3ZWVrTnVtfWBdKS5zbGljZSgwLDcpLm1hcCgoZm9vLCBpKSA9PiAoXG4gICAgICAgICAgICAgIDxkaXYga2V5PXtpfSBjbGFzc05hbWU9XCJkZXRhaWxzLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGFnLWd1aWRlXCI+XG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGZvby50YWcgPT09ICdyZXN0JyA/IFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRhZy1kb3QgcmVzdFwiPjwvZGl2PiA6IFxuICAgICAgICAgICAgICAgICAgICBmb28udGFnID09PSAncnVuJyA/XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGFnLWRvdCBydW5cIj48L2Rpdj4gOlxuICAgICAgICAgICAgICAgICAgICBmb28udGFnID09PSAnY3Jvc3MnID8gXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGFnLWRvdCBjcm9zc1wiPjwvZGl2PiA6XG4gICAgICAgICAgICAgICAgICAgIGZvby50YWcgPT09ICdjcm9zc3J1bicgPyBcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0YWctZG90IGNyb3NzcnVuXCI+PC9kaXY+IDpcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0YWctZG90IG90aGVyXCI+PC9kaXY+XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtpIDwgNiA/ICd0YWctbGluZScgOiAndGFnLWxpbmUtbGFzdCd9PjwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRheS1leGVyY2lzZVwiPlxuICAgICAgICAgICAgICAgICAgPGgxPntmb28ubGFiZWx9IC0ge2Zvby5yYWNlRGF5fTwvaDE+XG4gICAgICAgICAgICAgICAgICA8cD57Zm9vLmV4ZXJjaXNlfTwvcD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApKVxuICAgICAgICAgIH1cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgb25DbGljaz17bmV4dFdlZWt9IGNsYXNzTmFtZT1cIm5leHQtYnV0dG9uXCI+Jmd0OzwvZGl2PlxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgLmNvbnRhaW5lcntcbiAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgcGFkZGluZy10b3A6IDVyZW07XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBmbGV4LWZsb3c6IGNvbHVtbjtcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICAud2Vlay1oZWFkZXJ7XG4gICAgICAgICAgZm9udC1zaXplOiA0cmVtO1xuICAgICAgICAgIG1hcmdpbjogMCAwIDNyZW0gMDtcbiAgICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICAud2Vlay1oZWFkZXIgaDF7XG4gICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiAxMDAwO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICAuZXhlcmNpc2UtZ3JpZHtcbiAgICAgICAgICBkaXNwbGF5OiBncmlkO1xuICAgICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMjUlIDUwJSAyNSU7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIH1cblxuICAgICAgICAucHJldi1idXR0b24sXG4gICAgICAgIC5uZXh0LWJ1dHRvbntcbiAgICAgICAgICBmb250LXNpemU6IDVyZW07XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDEwMDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5wcmV2LWJ1dHRvbntcbiAgICAgICAgICBqdXN0aWZ5LXNlbGY6IGVuZDtcbiAgICAgICAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gICAgICAgICAgZ3JpZC1jb2x1bW46IDE7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIC5uZXh0LWJ1dHRvbntcbiAgICAgICAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gICAgICAgICAgZ3JpZC1jb2x1bW46IDM7XG4gICAgICAgIH1cblxuICAgICAgICAuZHVtbXktY29udGFpbmVye1xuICAgICAgICAgIGdyaWQtY29sdW1uOiAyO1xuICAgICAgICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoNywgMTQuMjUlKTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgLmRldGFpbHMtY29udGFpbmVye1xuICAgICAgICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xuICAgICAgICAgIG1hcmdpbjogMCAwIDNyZW0gMDtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgLnRhZy1ndWlkZXtcbiAgICAgICAgICBkaXNwbGF5OiBncmlkO1xuICAgICAgICAgIGdyaWQtdGVtcGxhdGUtcm93czogMzUlIDEyNSU7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIC50YWctbGluZXtcbiAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgd2lkdGg6IDFweDtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYzNjM2MzO1xuICAgICAgICAgIHBsYWNlLXNlbGY6IGVuZDtcbiAgICAgICAgICBtYXJnaW4tcmlnaHQ6IC4zcmVtO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICAudGFnLWxpbmUtbGFzdHtcbiAgICAgICAgICBkaXNwbGF5OiBoaWRkZW47XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIC5kYXktZXhlcmNpc2V7XG4gICAgICAgICAgbWFyZ2luLWxlZnQ6IDIuNXJlbTtcbiAgICAgICAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIC5kYXktZXhlcmNpc2UgaDF7XG4gICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgIGZvbnQtc2l6ZTogMnJlbTtcbiAgICAgICAgICBsaW5lLWhlaWdodDogMTBweDtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgXG4gICAgICAgIC50YWctZG90e1xuICAgICAgICAgIGFsaWduLXNlbGY6IHN0YXJ0O1xuICAgICAgICAgIGp1c3RpZnktc2VsZjogZW5kO1xuICAgICAgICAgIGhlaWdodDogMTBweDtcbiAgICAgICAgICB3aWR0aDogMTBweDtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMDBweDtcbiAgICAgICAgfVxuICAgICAgICAucmVzdHtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBjeWFuO1xuICAgICAgICB9XG4gICAgICAgIC5ydW57XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xuICAgICAgICB9XG4gICAgICAgIC5jcm9zc3tcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB5ZWxsb3c7XG4gICAgICAgIH1cbiAgICAgICAgLmNyb3NzcnVue1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IG9yYW5nZTtcbiAgICAgICAgfVxuICAgICAgICAub3RoZXJ7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIGB9XG4gICAgICA8L3N0eWxlPlxuICAgIDwvZGl2PlxuICAgIDwvTGF5b3V0PlxuICApXG59XG5cbkhvbWUuZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgKCkgPT4ge1xuICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaCgnaHR0cDovL2xvY2FsaG9zdDozMDAwL2FwaS9kYWlseScpXG4gIGNvbnN0IGpzb24gPSBhd2FpdCByZXMuanNvbigpXG4gIHJldHVybiB7IGRhdGE6IGpzb24gfVxufVxuXG5leHBvcnQgZGVmYXVsdCBIb21lIl19 */\n/*@ sourceURL=/Users/cor-eee/Projects/run-schedule/pages/index.js */")));
};

Home.getInitialProps = function _callee() {
  var res, json;
  return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_6___default()('http://localhost:3000/api/daily'));

        case 2:
          res = _context.sent;
          _context.next = 5;
          return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(res.json());

        case 5:
          json = _context.sent;
          return _context.abrupt("return", {
            data: json
          });

        case 7:
        case "end":
          return _context.stop();
      }
    }
  });
};

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ })

})
//# sourceMappingURL=index.js.7648072e4157ac75ede4.hot-update.js.map