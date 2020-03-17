webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! isomorphic-unfetch */ "./node_modules/next/dist/build/polyfills/fetch/index.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.js");
var _jsxFileName = "/Users/cor-eee/Projects/run-schedule/pages/index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;






var Home = function Home(_ref, props) {
  var data = _ref.data;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(1),
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

  return __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_5__["default"], {
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
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {
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
  })), __jsx("h1", {
    className: "jsx-1357465073",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }, "HELLO"), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1357465073",
    __self: this
  }, ".container.jsx-1357465073{height:100%;width:100%;padding-top:5rem;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-flow:column;-ms-flex-flow:column;flex-flow:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;font-family:sans-serif;}.week-header.jsx-1357465073{font-size:4rem;margin:0 0 3rem 0;padding:0;}.week-header.jsx-1357465073 h1.jsx-1357465073{height:100%;width:100%;margin:0;padding:0;font-weight:1000;}.exercise-grid.jsx-1357465073{display:grid;grid-template-columns:25% 50% 25%;width:100%;}.prev-button.jsx-1357465073,.next-button.jsx-1357465073{font-size:5rem;font-weight:100;}.prev-button.jsx-1357465073{justify-self:end;-webkit-align-self:center;-ms-flex-item-align:center;align-self:center;grid-column:1;}.next-button.jsx-1357465073{-webkit-align-self:center;-ms-flex-item-align:center;align-self:center;grid-column:3;}.dummy-container.jsx-1357465073{grid-column:2;display:grid;grid-template-rows:repeat(7,14.25%);}.details-container.jsx-1357465073{display:grid;grid-template-columns:1fr 1fr;margin:0 0 3rem 0;}.tag-guide.jsx-1357465073{display:grid;grid-template-rows:35% 125%;}.tag-line.jsx-1357465073{height:100%;width:1px;background-color:#c3c3c3;place-self:end;margin-right:.3rem;}.tag-line-last.jsx-1357465073{display:hidden;}.day-exercise.jsx-1357465073{margin-left:2.5rem;-webkit-align-self:center;-ms-flex-item-align:center;align-self:center;}.day-exercise.jsx-1357465073 h1.jsx-1357465073{margin:0;font-size:2rem;line-height:10px;}.tag-dot.jsx-1357465073{-webkit-align-self:start;-ms-flex-item-align:start;align-self:start;justify-self:end;height:10px;width:10px;border-radius:100px;}.rest.jsx-1357465073{background-color:cyan;}.run.jsx-1357465073{background-color:red;}.cross.jsx-1357465073{background-color:yellow;}.crossrun.jsx-1357465073{background-color:orange;}.other.jsx-1357465073{background-color:black;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9jb3ItZWVlL1Byb2plY3RzL3J1bi1zY2hlZHVsZS9wYWdlcy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE0RWtCLEFBR3VCLEFBV0csQUFNSCxBQVFDLEFBT0UsQUFLRSxBQU1DLEFBS0osQUFNRCxBQU1BLEFBS0QsQUFRRyxBQUlJLEFBS1YsQUFPUSxBQU9LLEFBR0QsQUFHRyxBQUdBLEFBR0QsU0F6QlIsR0FsRkosQUFpQkEsQUFnREQsQ0F4Q3dCLEFBNkJKLEFBTUYsQ0FaZixDQXJDSyxBQXFCRixBQXlDbEIsRUFwQ29CLEVBd0NBLEVBc0JwQixDQWpDMkIsQUE4QjNCLENBL0ZtQixBQWlCUixBQTBGWCxDQXpCbUIsQUFtQm5CLEFBR0EsR0F4RHVDLElBaEJ2QyxDQWRZLENBUEEsT0FWRyxDQTJEZixBQXVCQSxDQWhFbUIsQ0FQbkIsQUEwQ29CLElBN0JQLEFBeUNJLFdBeENqQixDQU5BLEVBbUNBLENBWXFCLENBbEJyQixLQXVDbUIsR0E5Q0gsVUEwQmhCLElBekJBLEFBOENjLEdBcERFLEVBd0NoQixPQWFhLEtBcERiLE1BcURzQixNQXpGSCxjQTBGbkIsaURBekZ5QixtR0FDSiw2RkFDSSx1QkFDekIiLCJmaWxlIjoiL1VzZXJzL2Nvci1lZWUvUHJvamVjdHMvcnVuLXNjaGVkdWxlL3BhZ2VzL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5pbXBvcnQgZmV0Y2ggZnJvbSAnaXNvbW9ycGhpYy11bmZldGNoJ1xuaW1wb3J0IExheW91dCBmcm9tICcuLi9jb21wb25lbnRzL0xheW91dCdcblxuY29uc3QgSG9tZSA9ICh7IGRhdGEgfSwgcHJvcHMpID0+IHtcbiAgY29uc3QgW3dlZWtOdW0sIHNldFdlZWtOdW1dID0gdXNlU3RhdGUoMSlcblxuICBjb25zdCBuZXh0V2VlayA9ICgpID0+IHtcbiAgICBpZih3ZWVrTnVtIDwgMTIpe1xuICAgICAgc2V0V2Vla051bSh3ZWVrTnVtID0+IHdlZWtOdW0gKz0gMSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHNldFdlZWtOdW0oMTIpO1xuICAgIH1cbiAgfVxuXG4gIGNvbnN0IHByZXZXZWVrID0gKCkgPT4ge1xuICAgIGlmKHdlZWtOdW0gPiAxKXtcbiAgICAgIHNldFdlZWtOdW0od2Vla051bSA9PiB3ZWVrTnVtIC09IDEpO1xuICAgIH0gZWxzZSB7XG4gICAgICBzZXRXZWVrTnVtKDEpXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuKFxuICAgIDxMYXlvdXQ+XG5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuXG4gICAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPldlZWsgMTwvdGl0bGU+XG4gICAgICAgIDxsaW5rIHJlbD1cImljb25cIiBocmVmPVwiXCIgLz5cbiAgICAgIDwvSGVhZD5cblxuICAgICAgPGgxPkhFTExPPC9oMT5cblxuXG4gICAgICB7LyogPGRpdiBjbGFzc05hbWU9XCJ3ZWVrLWhlYWRlclwiPlxuICAgICAgICA8aDE+e2RhdGFbYHdlZWske3dlZWtOdW19YF0ubGFiZWx9PC9oMT5cbiAgICAgIDwvZGl2PiAqL31cblxuXG4gICAgICB7LyogPGRpdiBjbGFzc05hbWU9XCJleGVyY2lzZS1ncmlkXCI+XG4gICAgICAgIDxkaXYgb25DbGljaz17cHJldldlZWt9IGNsYXNzTmFtZT1cInByZXYtYnV0dG9uXCI+Jmx0OzwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImR1bW15LWNvbnRhaW5lclwiPlxuICAgICAgICAgIHtcbiAgICAgICAgICAgIE9iamVjdC52YWx1ZXMoZGF0YVtgd2VlayR7d2Vla051bX1gXSkuc2xpY2UoMCw3KS5tYXAoKGZvbywgaSkgPT4gKFxuICAgICAgICAgICAgICA8ZGl2IGtleT17aX0gY2xhc3NOYW1lPVwiZGV0YWlscy1jb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRhZy1ndWlkZVwiPlxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBmb28udGFnID09PSAncmVzdCcgPyBcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0YWctZG90IHJlc3RcIj48L2Rpdj4gOiBcbiAgICAgICAgICAgICAgICAgICAgZm9vLnRhZyA9PT0gJ3J1bicgP1xuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRhZy1kb3QgcnVuXCI+PC9kaXY+IDpcbiAgICAgICAgICAgICAgICAgICAgZm9vLnRhZyA9PT0gJ2Nyb3NzJyA/IFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRhZy1kb3QgY3Jvc3NcIj48L2Rpdj4gOlxuICAgICAgICAgICAgICAgICAgICBmb28udGFnID09PSAnY3Jvc3NydW4nID8gXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGFnLWRvdCBjcm9zc3J1blwiPjwvZGl2PiA6XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGFnLWRvdCBvdGhlclwiPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17aSA8IDYgPyAndGFnLWxpbmUnIDogJ3RhZy1saW5lLWxhc3QnfT48L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkYXktZXhlcmNpc2VcIj5cbiAgICAgICAgICAgICAgICAgIDxoMT57Zm9vLmxhYmVsfSAtIHtmb28ucmFjZURheX08L2gxPlxuICAgICAgICAgICAgICAgICAgPHA+e2Zvby5leGVyY2lzZX08L3A+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKSlcbiAgICAgICAgICB9XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IG9uQ2xpY2s9e25leHRXZWVrfSBjbGFzc05hbWU9XCJuZXh0LWJ1dHRvblwiPiZndDs8L2Rpdj5cbiAgICAgIDwvZGl2PiAqL31cblxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAuY29udGFpbmVye1xuICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICBwYWRkaW5nLXRvcDogNXJlbTtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGZsZXgtZmxvdzogY29sdW1uO1xuICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIC53ZWVrLWhlYWRlcntcbiAgICAgICAgICBmb250LXNpemU6IDRyZW07XG4gICAgICAgICAgbWFyZ2luOiAwIDAgM3JlbSAwO1xuICAgICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIC53ZWVrLWhlYWRlciBoMXtcbiAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDEwMDA7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIC5leGVyY2lzZS1ncmlke1xuICAgICAgICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyNSUgNTAlIDI1JTtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5wcmV2LWJ1dHRvbixcbiAgICAgICAgLm5leHQtYnV0dG9ue1xuICAgICAgICAgIGZvbnQtc2l6ZTogNXJlbTtcbiAgICAgICAgICBmb250LXdlaWdodDogMTAwO1xuICAgICAgICB9XG5cbiAgICAgICAgLnByZXYtYnV0dG9ue1xuICAgICAgICAgIGp1c3RpZnktc2VsZjogZW5kO1xuICAgICAgICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgICAgICAgICBncmlkLWNvbHVtbjogMTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgLm5leHQtYnV0dG9ue1xuICAgICAgICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgICAgICAgICBncmlkLWNvbHVtbjogMztcbiAgICAgICAgfVxuXG4gICAgICAgIC5kdW1teS1jb250YWluZXJ7XG4gICAgICAgICAgZ3JpZC1jb2x1bW46IDI7XG4gICAgICAgICAgZGlzcGxheTogZ3JpZDtcbiAgICAgICAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCg3LCAxNC4yNSUpO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICAuZGV0YWlscy1jb250YWluZXJ7XG4gICAgICAgICAgZGlzcGxheTogZ3JpZDtcbiAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XG4gICAgICAgICAgbWFyZ2luOiAwIDAgM3JlbSAwO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICAudGFnLWd1aWRle1xuICAgICAgICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAzNSUgMTI1JTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgLnRhZy1saW5le1xuICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICB3aWR0aDogMXB4O1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNjM2MzYzM7XG4gICAgICAgICAgcGxhY2Utc2VsZjogZW5kO1xuICAgICAgICAgIG1hcmdpbi1yaWdodDogLjNyZW07XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIC50YWctbGluZS1sYXN0e1xuICAgICAgICAgIGRpc3BsYXk6IGhpZGRlbjtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgLmRheS1leGVyY2lzZXtcbiAgICAgICAgICBtYXJnaW4tbGVmdDogMi41cmVtO1xuICAgICAgICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgLmRheS1leGVyY2lzZSBoMXtcbiAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgZm9udC1zaXplOiAycmVtO1xuICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxMHB4O1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBcbiAgICAgICAgLnRhZy1kb3R7XG4gICAgICAgICAgYWxpZ24tc2VsZjogc3RhcnQ7XG4gICAgICAgICAganVzdGlmeS1zZWxmOiBlbmQ7XG4gICAgICAgICAgaGVpZ2h0OiAxMHB4O1xuICAgICAgICAgIHdpZHRoOiAxMHB4O1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwMHB4O1xuICAgICAgICB9XG4gICAgICAgIC5yZXN0e1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IGN5YW47XG4gICAgICAgIH1cbiAgICAgICAgLnJ1bntcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XG4gICAgICAgIH1cbiAgICAgICAgLmNyb3Nze1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHllbGxvdztcbiAgICAgICAgfVxuICAgICAgICAuY3Jvc3NydW57XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogb3JhbmdlO1xuICAgICAgICB9XG4gICAgICAgIC5vdGhlcntcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgYH1cbiAgICAgIDwvc3R5bGU+XG4gICAgPC9kaXY+XG4gICAgPC9MYXlvdXQ+XG4gIClcbn1cblxuLy8gSG9tZS5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyAoKSA9PiB7XG4vLyAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKCdodHRwOi8vbG9jYWxob3N0OjMwMDAvYXBpL2RhaWx5Jylcbi8vICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcy5qc29uKClcblxuLy8gICByZXR1cm4geyBkYXRhIH1cbi8vIH1cblxuZXhwb3J0IGRlZmF1bHQgSG9tZSJdfQ== */\n/*@ sourceURL=/Users/cor-eee/Projects/run-schedule/pages/index.js */")));
}; // Home.getInitialProps = async () => {
//   const res = await fetch('http://localhost:3000/api/daily')
//   const data = await res.json()
//   return { data }
// }


/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ })

})
//# sourceMappingURL=index.js.3bc3e609373a508e1db0.hot-update.js.map