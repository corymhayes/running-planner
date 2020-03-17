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
  }, __jsx("h1", {
    className: "jsx-1357465073",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }, data["week".concat(weekNum)].label)), __jsx("div", {
    className: "jsx-1357465073" + " " + "exercise-grid",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }, __jsx("div", {
    onClick: prevWeek,
    className: "jsx-1357465073" + " " + "prev-button",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }, "<"), __jsx("div", {
    className: "jsx-1357465073" + " " + "dummy-container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }, _babel_runtime_corejs2_core_js_object_values__WEBPACK_IMPORTED_MODULE_1___default()(data["week".concat(weekNum)]).slice(0, 7).map(function (foo, i) {
    return __jsx("div", {
      key: i,
      className: "jsx-1357465073" + " " + "details-container",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 47
      },
      __self: this
    }, __jsx("div", {
      className: "jsx-1357465073" + " " + "tag-guide",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 48
      },
      __self: this
    }, foo.tag === 'rest' ? __jsx("div", {
      className: "jsx-1357465073" + " " + "tag-dot rest",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 51
      },
      __self: this
    }) : foo.tag === 'run' ? __jsx("div", {
      className: "jsx-1357465073" + " " + "tag-dot run",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 53
      },
      __self: this
    }) : foo.tag === 'cross' ? __jsx("div", {
      className: "jsx-1357465073" + " " + "tag-dot cross",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 55
      },
      __self: this
    }) : foo.tag === 'crossrun' ? __jsx("div", {
      className: "jsx-1357465073" + " " + "tag-dot crossrun",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 57
      },
      __self: this
    }) : __jsx("div", {
      className: "jsx-1357465073" + " " + "tag-dot other",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 58
      },
      __self: this
    }), __jsx("div", {
      className: "jsx-1357465073" + " " + ((i < 6 ? 'tag-line' : 'tag-line-last') || ""),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 61
      },
      __self: this
    })), __jsx("div", {
      className: "jsx-1357465073" + " " + "day-exercise",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 64
      },
      __self: this
    }, __jsx("h1", {
      className: "jsx-1357465073",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 65
      },
      __self: this
    }, foo.label, " - ", foo.raceDay), __jsx("p", {
      className: "jsx-1357465073",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 66
      },
      __self: this
    }, foo.exercise)));
  })), __jsx("div", {
    onClick: nextWeek,
    className: "jsx-1357465073" + " " + "next-button",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    },
    __self: this
  }, ">")), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a, {
    id: "1357465073",
    __self: this
  }, ".container.jsx-1357465073{height:100%;width:100%;padding-top:5rem;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-flow:column;-ms-flex-flow:column;flex-flow:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;font-family:sans-serif;}.week-header.jsx-1357465073{font-size:4rem;margin:0 0 3rem 0;padding:0;}.week-header.jsx-1357465073 h1.jsx-1357465073{height:100%;width:100%;margin:0;padding:0;font-weight:1000;}.exercise-grid.jsx-1357465073{display:grid;grid-template-columns:25% 50% 25%;width:100%;}.prev-button.jsx-1357465073,.next-button.jsx-1357465073{font-size:5rem;font-weight:100;}.prev-button.jsx-1357465073{justify-self:end;-webkit-align-self:center;-ms-flex-item-align:center;align-self:center;grid-column:1;}.next-button.jsx-1357465073{-webkit-align-self:center;-ms-flex-item-align:center;align-self:center;grid-column:3;}.dummy-container.jsx-1357465073{grid-column:2;display:grid;grid-template-rows:repeat(7,14.25%);}.details-container.jsx-1357465073{display:grid;grid-template-columns:1fr 1fr;margin:0 0 3rem 0;}.tag-guide.jsx-1357465073{display:grid;grid-template-rows:35% 125%;}.tag-line.jsx-1357465073{height:100%;width:1px;background-color:#c3c3c3;place-self:end;margin-right:.3rem;}.tag-line-last.jsx-1357465073{display:hidden;}.day-exercise.jsx-1357465073{margin-left:2.5rem;-webkit-align-self:center;-ms-flex-item-align:center;align-self:center;}.day-exercise.jsx-1357465073 h1.jsx-1357465073{margin:0;font-size:2rem;line-height:10px;}.tag-dot.jsx-1357465073{-webkit-align-self:start;-ms-flex-item-align:start;align-self:start;justify-self:end;height:10px;width:10px;border-radius:100px;}.rest.jsx-1357465073{background-color:cyan;}.run.jsx-1357465073{background-color:red;}.cross.jsx-1357465073{background-color:yellow;}.crossrun.jsx-1357465073{background-color:orange;}.other.jsx-1357465073{background-color:black;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9jb3ItZWVlL1Byb2plY3RzL3J1bi1zY2hlZHVsZS9wYWdlcy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUEwRWtCLEFBR3VCLEFBV0csQUFNSCxBQVFDLEFBT0UsQUFLRSxBQU1DLEFBS0osQUFNRCxBQU1BLEFBS0QsQUFRRyxBQUlJLEFBS1YsQUFPUSxBQU9LLEFBR0QsQUFHRyxBQUdBLEFBR0QsU0F6QlIsR0FsRkosQUFpQkEsQUFnREQsQ0F4Q3dCLEFBNkJKLEFBTUYsQ0FaZixDQXJDSyxBQXFCRixBQXlDbEIsRUFwQ29CLEVBd0NBLEVBc0JwQixDQWpDMkIsQUE4QjNCLENBL0ZtQixBQWlCUixBQTBGWCxDQXpCbUIsQUFtQm5CLEFBR0EsR0F4RHVDLElBaEJ2QyxDQWRZLENBUEEsT0FWRyxDQTJEZixBQXVCQSxDQWhFbUIsQ0FQbkIsQUEwQ29CLElBN0JQLEFBeUNJLFdBeENqQixDQU5BLEVBbUNBLENBWXFCLENBbEJyQixLQXVDbUIsR0E5Q0gsVUEwQmhCLElBekJBLEFBOENjLEdBcERFLEVBd0NoQixPQWFhLEtBcERiLE1BcURzQixNQXpGSCxjQTBGbkIsaURBekZ5QixtR0FDSiw2RkFDSSx1QkFDekIiLCJmaWxlIjoiL1VzZXJzL2Nvci1lZWUvUHJvamVjdHMvcnVuLXNjaGVkdWxlL3BhZ2VzL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5pbXBvcnQgZmV0Y2ggZnJvbSAnaXNvbW9ycGhpYy11bmZldGNoJ1xuaW1wb3J0IExheW91dCBmcm9tICcuLi9jb21wb25lbnRzL0xheW91dCdcblxuY29uc3QgSG9tZSA9ICh7IGRhdGEgfSwgcHJvcHMpID0+IHtcbiAgY29uc3QgW3dlZWtOdW0sIHNldFdlZWtOdW1dID0gdXNlU3RhdGUoMSlcblxuICBjb25zdCBuZXh0V2VlayA9ICgpID0+IHtcbiAgICBpZih3ZWVrTnVtIDwgMTIpe1xuICAgICAgc2V0V2Vla051bSh3ZWVrTnVtID0+IHdlZWtOdW0gKz0gMSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHNldFdlZWtOdW0oMTIpO1xuICAgIH1cbiAgfVxuXG4gIGNvbnN0IHByZXZXZWVrID0gKCkgPT4ge1xuICAgIGlmKHdlZWtOdW0gPiAxKXtcbiAgICAgIHNldFdlZWtOdW0od2Vla051bSA9PiB3ZWVrTnVtIC09IDEpO1xuICAgIH0gZWxzZSB7XG4gICAgICBzZXRXZWVrTnVtKDEpXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuKFxuICAgIDxMYXlvdXQ+XG5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuXG4gICAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPldlZWsgMTwvdGl0bGU+XG4gICAgICAgIDxsaW5rIHJlbD1cImljb25cIiBocmVmPVwiXCIgLz5cbiAgICAgIDwvSGVhZD5cblxuXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIndlZWstaGVhZGVyXCI+XG4gICAgICAgIDxoMT57ZGF0YVtgd2VlayR7d2Vla051bX1gXS5sYWJlbH08L2gxPlxuICAgICAgPC9kaXY+XG5cblxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJleGVyY2lzZS1ncmlkXCI+XG4gICAgICAgIDxkaXYgb25DbGljaz17cHJldldlZWt9IGNsYXNzTmFtZT1cInByZXYtYnV0dG9uXCI+Jmx0OzwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImR1bW15LWNvbnRhaW5lclwiPlxuICAgICAgICAgIHtcbiAgICAgICAgICAgIE9iamVjdC52YWx1ZXMoZGF0YVtgd2VlayR7d2Vla051bX1gXSkuc2xpY2UoMCw3KS5tYXAoKGZvbywgaSkgPT4gKFxuICAgICAgICAgICAgICA8ZGl2IGtleT17aX0gY2xhc3NOYW1lPVwiZGV0YWlscy1jb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRhZy1ndWlkZVwiPlxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBmb28udGFnID09PSAncmVzdCcgPyBcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0YWctZG90IHJlc3RcIj48L2Rpdj4gOiBcbiAgICAgICAgICAgICAgICAgICAgZm9vLnRhZyA9PT0gJ3J1bicgP1xuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRhZy1kb3QgcnVuXCI+PC9kaXY+IDpcbiAgICAgICAgICAgICAgICAgICAgZm9vLnRhZyA9PT0gJ2Nyb3NzJyA/IFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRhZy1kb3QgY3Jvc3NcIj48L2Rpdj4gOlxuICAgICAgICAgICAgICAgICAgICBmb28udGFnID09PSAnY3Jvc3NydW4nID8gXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGFnLWRvdCBjcm9zc3J1blwiPjwvZGl2PiA6XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGFnLWRvdCBvdGhlclwiPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17aSA8IDYgPyAndGFnLWxpbmUnIDogJ3RhZy1saW5lLWxhc3QnfT48L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkYXktZXhlcmNpc2VcIj5cbiAgICAgICAgICAgICAgICAgIDxoMT57Zm9vLmxhYmVsfSAtIHtmb28ucmFjZURheX08L2gxPlxuICAgICAgICAgICAgICAgICAgPHA+e2Zvby5leGVyY2lzZX08L3A+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKSlcbiAgICAgICAgICB9XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IG9uQ2xpY2s9e25leHRXZWVrfSBjbGFzc05hbWU9XCJuZXh0LWJ1dHRvblwiPiZndDs8L2Rpdj5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIC5jb250YWluZXJ7XG4gICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgIHBhZGRpbmctdG9wOiA1cmVtO1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgZmxleC1mbG93OiBjb2x1bW47XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgLndlZWstaGVhZGVye1xuICAgICAgICAgIGZvbnQtc2l6ZTogNHJlbTtcbiAgICAgICAgICBtYXJnaW46IDAgMCAzcmVtIDA7XG4gICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgLndlZWstaGVhZGVyIGgxe1xuICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgICBmb250LXdlaWdodDogMTAwMDtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgLmV4ZXJjaXNlLWdyaWR7XG4gICAgICAgICAgZGlzcGxheTogZ3JpZDtcbiAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDI1JSA1MCUgMjUlO1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICB9XG5cbiAgICAgICAgLnByZXYtYnV0dG9uLFxuICAgICAgICAubmV4dC1idXR0b257XG4gICAgICAgICAgZm9udC1zaXplOiA1cmVtO1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiAxMDA7XG4gICAgICAgIH1cblxuICAgICAgICAucHJldi1idXR0b257XG4gICAgICAgICAganVzdGlmeS1zZWxmOiBlbmQ7XG4gICAgICAgICAgYWxpZ24tc2VsZjogY2VudGVyO1xuICAgICAgICAgIGdyaWQtY29sdW1uOiAxO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICAubmV4dC1idXR0b257XG4gICAgICAgICAgYWxpZ24tc2VsZjogY2VudGVyO1xuICAgICAgICAgIGdyaWQtY29sdW1uOiAzO1xuICAgICAgICB9XG5cbiAgICAgICAgLmR1bW15LWNvbnRhaW5lcntcbiAgICAgICAgICBncmlkLWNvbHVtbjogMjtcbiAgICAgICAgICBkaXNwbGF5OiBncmlkO1xuICAgICAgICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDcsIDE0LjI1JSk7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIC5kZXRhaWxzLWNvbnRhaW5lcntcbiAgICAgICAgICBkaXNwbGF5OiBncmlkO1xuICAgICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcbiAgICAgICAgICBtYXJnaW46IDAgMCAzcmVtIDA7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIC50YWctZ3VpZGV7XG4gICAgICAgICAgZGlzcGxheTogZ3JpZDtcbiAgICAgICAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDM1JSAxMjUlO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICAudGFnLWxpbmV7XG4gICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgIHdpZHRoOiAxcHg7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2MzYzNjMztcbiAgICAgICAgICBwbGFjZS1zZWxmOiBlbmQ7XG4gICAgICAgICAgbWFyZ2luLXJpZ2h0OiAuM3JlbTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgLnRhZy1saW5lLWxhc3R7XG4gICAgICAgICAgZGlzcGxheTogaGlkZGVuO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICAuZGF5LWV4ZXJjaXNle1xuICAgICAgICAgIG1hcmdpbi1sZWZ0OiAyLjVyZW07XG4gICAgICAgICAgYWxpZ24tc2VsZjogY2VudGVyO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICAuZGF5LWV4ZXJjaXNlIGgxe1xuICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICBmb250LXNpemU6IDJyZW07XG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDEwcHg7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIFxuICAgICAgICAudGFnLWRvdHtcbiAgICAgICAgICBhbGlnbi1zZWxmOiBzdGFydDtcbiAgICAgICAgICBqdXN0aWZ5LXNlbGY6IGVuZDtcbiAgICAgICAgICBoZWlnaHQ6IDEwcHg7XG4gICAgICAgICAgd2lkdGg6IDEwcHg7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogMTAwcHg7XG4gICAgICAgIH1cbiAgICAgICAgLnJlc3R7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogY3lhbjtcbiAgICAgICAgfVxuICAgICAgICAucnVue1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcbiAgICAgICAgfVxuICAgICAgICAuY3Jvc3N7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogeWVsbG93O1xuICAgICAgICB9XG4gICAgICAgIC5jcm9zc3J1bntcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBvcmFuZ2U7XG4gICAgICAgIH1cbiAgICAgICAgLm90aGVye1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBgfVxuICAgICAgPC9zdHlsZT5cbiAgICA8L2Rpdj5cbiAgICA8L0xheW91dD5cbiAgKVxufVxuXG5Ib21lLmdldEluaXRpYWxQcm9wcyA9IGFzeW5jICgpID0+IHtcbiAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9hcGkvZGFpbHknKVxuICBjb25zdCBqc29uID0gYXdhaXQgcmVzLmpzb24oKVxuICByZXR1cm4geyBkYXRhOiBqc29uIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgSG9tZSJdfQ== */\n/*@ sourceURL=/Users/cor-eee/Projects/run-schedule/pages/index.js */")));
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
//# sourceMappingURL=index.js.18787cfa1bfe7248b31f.hot-update.js.map