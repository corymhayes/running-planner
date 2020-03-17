webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: __N_SSP, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__N_SSP", function() { return __N_SSP; });
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
/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! swr */ "./node_modules/swr/esm/index.js");
var _jsxFileName = "/Users/cor-eee/Projects/run-schedule/pages/index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;







var Home = function Home(_ref, props) {
  var data = _ref.data;

  var _useSWR = Object(swr__WEBPACK_IMPORTED_MODULE_6__["default"])('/api/daily', isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_4___default.a),
      plans = _useSWR.plans;

  console.log(plans);

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
      lineNumber: 31
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-1357465073" + " " + "container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, __jsx("title", {
    className: "jsx-1357465073",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }, "Week 1"), __jsx("link", {
    rel: "icon",
    href: "",
    className: "jsx-1357465073",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  })), __jsx("h1", {
    className: "jsx-1357465073",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }, "HELLO"), __jsx("div", {
    className: "jsx-1357465073" + " " + "week-header",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }, __jsx("h1", {
    className: "jsx-1357465073",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }, data["week".concat(weekNum)].label)), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1357465073",
    __self: this
  }, ".container.jsx-1357465073{height:100%;width:100%;padding-top:5rem;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-flow:column;-ms-flex-flow:column;flex-flow:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;font-family:sans-serif;}.week-header.jsx-1357465073{font-size:4rem;margin:0 0 3rem 0;padding:0;}.week-header.jsx-1357465073 h1.jsx-1357465073{height:100%;width:100%;margin:0;padding:0;font-weight:1000;}.exercise-grid.jsx-1357465073{display:grid;grid-template-columns:25% 50% 25%;width:100%;}.prev-button.jsx-1357465073,.next-button.jsx-1357465073{font-size:5rem;font-weight:100;}.prev-button.jsx-1357465073{justify-self:end;-webkit-align-self:center;-ms-flex-item-align:center;align-self:center;grid-column:1;}.next-button.jsx-1357465073{-webkit-align-self:center;-ms-flex-item-align:center;align-self:center;grid-column:3;}.dummy-container.jsx-1357465073{grid-column:2;display:grid;grid-template-rows:repeat(7,14.25%);}.details-container.jsx-1357465073{display:grid;grid-template-columns:1fr 1fr;margin:0 0 3rem 0;}.tag-guide.jsx-1357465073{display:grid;grid-template-rows:35% 125%;}.tag-line.jsx-1357465073{height:100%;width:1px;background-color:#c3c3c3;place-self:end;margin-right:.3rem;}.tag-line-last.jsx-1357465073{display:hidden;}.day-exercise.jsx-1357465073{margin-left:2.5rem;-webkit-align-self:center;-ms-flex-item-align:center;align-self:center;}.day-exercise.jsx-1357465073 h1.jsx-1357465073{margin:0;font-size:2rem;line-height:10px;}.tag-dot.jsx-1357465073{-webkit-align-self:start;-ms-flex-item-align:start;align-self:start;justify-self:end;height:10px;width:10px;border-radius:100px;}.rest.jsx-1357465073{background-color:cyan;}.run.jsx-1357465073{background-color:red;}.cross.jsx-1357465073{background-color:yellow;}.crossrun.jsx-1357465073{background-color:orange;}.other.jsx-1357465073{background-color:black;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9jb3ItZWVlL1Byb2plY3RzL3J1bi1zY2hlZHVsZS9wYWdlcy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFnRmtCLEFBR3VCLEFBV0csQUFNSCxBQVFDLEFBT0UsQUFLRSxBQU1DLEFBS0osQUFNRCxBQU1BLEFBS0QsQUFRRyxBQUlJLEFBS1YsQUFPUSxBQU9LLEFBR0QsQUFHRyxBQUdBLEFBR0QsU0F6QlIsR0FsRkosQUFpQkEsQUFnREQsQ0F4Q3dCLEFBNkJKLEFBTUYsQ0FaZixDQXJDSyxBQXFCRixBQXlDbEIsRUFwQ29CLEVBd0NBLEVBc0JwQixDQWpDMkIsQUE4QjNCLENBL0ZtQixBQWlCUixBQTBGWCxDQXpCbUIsQUFtQm5CLEFBR0EsR0F4RHVDLElBaEJ2QyxDQWRZLENBUEEsT0FWRyxDQTJEZixBQXVCQSxDQWhFbUIsQ0FQbkIsQUEwQ29CLElBN0JQLEFBeUNJLFdBeENqQixDQU5BLEVBbUNBLENBWXFCLENBbEJyQixLQXVDbUIsR0E5Q0gsVUEwQmhCLElBekJBLEFBOENjLEdBcERFLEVBd0NoQixPQWFhLEtBcERiLE1BcURzQixNQXpGSCxjQTBGbkIsaURBekZ5QixtR0FDSiw2RkFDSSx1QkFDekIiLCJmaWxlIjoiL1VzZXJzL2Nvci1lZWUvUHJvamVjdHMvcnVuLXNjaGVkdWxlL3BhZ2VzL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5pbXBvcnQgZmV0Y2ggZnJvbSAnaXNvbW9ycGhpYy11bmZldGNoJ1xuaW1wb3J0IExheW91dCBmcm9tICcuLi9jb21wb25lbnRzL0xheW91dCdcbmltcG9ydCB1c2VTV1IgZnJvbSAnc3dyJ1xuXG5jb25zdCBIb21lID0gKHsgZGF0YSB9LCBwcm9wcykgPT4ge1xuICBjb25zdCB7IHBsYW5zIH0gPSB1c2VTV1IoJy9hcGkvZGFpbHknLCBmZXRjaClcblxuICBjb25zb2xlLmxvZyhwbGFucyk7XG4gIGNvbnN0IFt3ZWVrTnVtLCBzZXRXZWVrTnVtXSA9IHVzZVN0YXRlKDEpXG5cbiAgY29uc3QgbmV4dFdlZWsgPSAoKSA9PiB7XG4gICAgaWYod2Vla051bSA8IDEyKXtcbiAgICAgIHNldFdlZWtOdW0od2Vla051bSA9PiB3ZWVrTnVtICs9IDEpO1xuICAgIH0gZWxzZSB7XG4gICAgICBzZXRXZWVrTnVtKDEyKTtcbiAgICB9XG4gIH1cblxuICBjb25zdCBwcmV2V2VlayA9ICgpID0+IHtcbiAgICBpZih3ZWVrTnVtID4gMSl7XG4gICAgICBzZXRXZWVrTnVtKHdlZWtOdW0gPT4gd2Vla051bSAtPSAxKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc2V0V2Vla051bSgxKVxuICAgIH1cbiAgfVxuXG4gIHJldHVybihcbiAgICA8TGF5b3V0PlxuXG4gICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cblxuICAgICAgPEhlYWQ+XG4gICAgICAgIDx0aXRsZT5XZWVrIDE8L3RpdGxlPlxuICAgICAgICA8bGluayByZWw9XCJpY29uXCIgaHJlZj1cIlwiIC8+XG4gICAgICA8L0hlYWQ+XG5cbiAgICAgIDxoMT5IRUxMTzwvaDE+XG5cblxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3ZWVrLWhlYWRlclwiPlxuICAgICAgICA8aDE+e2RhdGFbYHdlZWske3dlZWtOdW19YF0ubGFiZWx9PC9oMT5cbiAgICAgIDwvZGl2PlxuXG5cbiAgICAgIHsvKiA8ZGl2IGNsYXNzTmFtZT1cImV4ZXJjaXNlLWdyaWRcIj5cbiAgICAgICAgPGRpdiBvbkNsaWNrPXtwcmV2V2Vla30gY2xhc3NOYW1lPVwicHJldi1idXR0b25cIj4mbHQ7PC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZHVtbXktY29udGFpbmVyXCI+XG4gICAgICAgICAge1xuICAgICAgICAgICAgT2JqZWN0LnZhbHVlcyhkYXRhW2B3ZWVrJHt3ZWVrTnVtfWBdKS5zbGljZSgwLDcpLm1hcCgoZm9vLCBpKSA9PiAoXG4gICAgICAgICAgICAgIDxkaXYga2V5PXtpfSBjbGFzc05hbWU9XCJkZXRhaWxzLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGFnLWd1aWRlXCI+XG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGZvby50YWcgPT09ICdyZXN0JyA/IFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRhZy1kb3QgcmVzdFwiPjwvZGl2PiA6IFxuICAgICAgICAgICAgICAgICAgICBmb28udGFnID09PSAncnVuJyA/XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGFnLWRvdCBydW5cIj48L2Rpdj4gOlxuICAgICAgICAgICAgICAgICAgICBmb28udGFnID09PSAnY3Jvc3MnID8gXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGFnLWRvdCBjcm9zc1wiPjwvZGl2PiA6XG4gICAgICAgICAgICAgICAgICAgIGZvby50YWcgPT09ICdjcm9zc3J1bicgPyBcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0YWctZG90IGNyb3NzcnVuXCI+PC9kaXY+IDpcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0YWctZG90IG90aGVyXCI+PC9kaXY+XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtpIDwgNiA/ICd0YWctbGluZScgOiAndGFnLWxpbmUtbGFzdCd9PjwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRheS1leGVyY2lzZVwiPlxuICAgICAgICAgICAgICAgICAgPGgxPntmb28ubGFiZWx9IC0ge2Zvby5yYWNlRGF5fTwvaDE+XG4gICAgICAgICAgICAgICAgICA8cD57Zm9vLmV4ZXJjaXNlfTwvcD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApKVxuICAgICAgICAgIH1cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgb25DbGljaz17bmV4dFdlZWt9IGNsYXNzTmFtZT1cIm5leHQtYnV0dG9uXCI+Jmd0OzwvZGl2PlxuICAgICAgPC9kaXY+ICovfVxuXG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIC5jb250YWluZXJ7XG4gICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgIHBhZGRpbmctdG9wOiA1cmVtO1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgZmxleC1mbG93OiBjb2x1bW47XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgLndlZWstaGVhZGVye1xuICAgICAgICAgIGZvbnQtc2l6ZTogNHJlbTtcbiAgICAgICAgICBtYXJnaW46IDAgMCAzcmVtIDA7XG4gICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgLndlZWstaGVhZGVyIGgxe1xuICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgICBmb250LXdlaWdodDogMTAwMDtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgLmV4ZXJjaXNlLWdyaWR7XG4gICAgICAgICAgZGlzcGxheTogZ3JpZDtcbiAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDI1JSA1MCUgMjUlO1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICB9XG5cbiAgICAgICAgLnByZXYtYnV0dG9uLFxuICAgICAgICAubmV4dC1idXR0b257XG4gICAgICAgICAgZm9udC1zaXplOiA1cmVtO1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiAxMDA7XG4gICAgICAgIH1cblxuICAgICAgICAucHJldi1idXR0b257XG4gICAgICAgICAganVzdGlmeS1zZWxmOiBlbmQ7XG4gICAgICAgICAgYWxpZ24tc2VsZjogY2VudGVyO1xuICAgICAgICAgIGdyaWQtY29sdW1uOiAxO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICAubmV4dC1idXR0b257XG4gICAgICAgICAgYWxpZ24tc2VsZjogY2VudGVyO1xuICAgICAgICAgIGdyaWQtY29sdW1uOiAzO1xuICAgICAgICB9XG5cbiAgICAgICAgLmR1bW15LWNvbnRhaW5lcntcbiAgICAgICAgICBncmlkLWNvbHVtbjogMjtcbiAgICAgICAgICBkaXNwbGF5OiBncmlkO1xuICAgICAgICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDcsIDE0LjI1JSk7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIC5kZXRhaWxzLWNvbnRhaW5lcntcbiAgICAgICAgICBkaXNwbGF5OiBncmlkO1xuICAgICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcbiAgICAgICAgICBtYXJnaW46IDAgMCAzcmVtIDA7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIC50YWctZ3VpZGV7XG4gICAgICAgICAgZGlzcGxheTogZ3JpZDtcbiAgICAgICAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDM1JSAxMjUlO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICAudGFnLWxpbmV7XG4gICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgIHdpZHRoOiAxcHg7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2MzYzNjMztcbiAgICAgICAgICBwbGFjZS1zZWxmOiBlbmQ7XG4gICAgICAgICAgbWFyZ2luLXJpZ2h0OiAuM3JlbTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgLnRhZy1saW5lLWxhc3R7XG4gICAgICAgICAgZGlzcGxheTogaGlkZGVuO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICAuZGF5LWV4ZXJjaXNle1xuICAgICAgICAgIG1hcmdpbi1sZWZ0OiAyLjVyZW07XG4gICAgICAgICAgYWxpZ24tc2VsZjogY2VudGVyO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICAuZGF5LWV4ZXJjaXNlIGgxe1xuICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICBmb250LXNpemU6IDJyZW07XG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDEwcHg7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIFxuICAgICAgICAudGFnLWRvdHtcbiAgICAgICAgICBhbGlnbi1zZWxmOiBzdGFydDtcbiAgICAgICAgICBqdXN0aWZ5LXNlbGY6IGVuZDtcbiAgICAgICAgICBoZWlnaHQ6IDEwcHg7XG4gICAgICAgICAgd2lkdGg6IDEwcHg7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogMTAwcHg7XG4gICAgICAgIH1cbiAgICAgICAgLnJlc3R7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogY3lhbjtcbiAgICAgICAgfVxuICAgICAgICAucnVue1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcbiAgICAgICAgfVxuICAgICAgICAuY3Jvc3N7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogeWVsbG93O1xuICAgICAgICB9XG4gICAgICAgIC5jcm9zc3J1bntcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBvcmFuZ2U7XG4gICAgICAgIH1cbiAgICAgICAgLm90aGVye1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBgfVxuICAgICAgPC9zdHlsZT5cbiAgICA8L2Rpdj5cbiAgICA8L0xheW91dD5cbiAgKVxufVxuXG4vLyBIb21lLmdldEluaXRpYWxQcm9wcyA9IGFzeW5jICgpID0+IHtcbi8vICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9hcGkvZGFpbHknKVxuLy8gICBjb25zdCBkYXRhID0gYXdhaXQgcmVzLmpzb24oKVxuXG4vLyAgIHJldHVybiB7IGRhdGEgfVxuLy8gfVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U2VydmVyU2lkZVByb3BzKCl7XG4gIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKCdodHRwOi8vbG9jYWxob3N0OjMwMDAvYXBpL2RhaWx5JylcbiAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcy5qc29uKClcblxuICByZXR1cm57XG4gICAgcHJvcHM6IHtcbiAgICAgIGRhdGFcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgSG9tZSJdfQ== */\n/*@ sourceURL=/Users/cor-eee/Projects/run-schedule/pages/index.js */")));
}; // Home.getInitialProps = async () => {
//   const res = await fetch('http://localhost:3000/api/daily')
//   const data = await res.json()
//   return { data }
// }


var __N_SSP = true;
/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ })

})
//# sourceMappingURL=index.js.ac51cb9e13741c05dd2b.hot-update.js.map