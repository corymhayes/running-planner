module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ({

/***/ 5:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("G1sz");


/***/ }),

/***/ "G1sz":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const scheduleMaker = day => {
  const schedule = {
    week1: {
      label: 'Week 1 (' + day[0] + " - " + day[6] + ')',
      monday: {
        label: day[0] + " - Mon",
        exercise: "Rest",
        tag: "rest"
      },
      tuesday: {
        label: day[1] + " - Tue",
        exercise: "3 mi run",
        tag: "run"
      },
      wednesday: {
        label: day[2] + " - Wed",
        exercise: "2 mi run or cross",
        tag: "cross"
      },
      thursday: {
        label: day[3] + " - Thu",
        exercise: "3 mi run",
        tag: "run"
      },
      friday: {
        label: day[4] + " - Fri",
        exercise: "Rest",
        tag: "rest"
      },
      saturday: {
        label: day[5] + " - Sat",
        exercise: "30 min cross",
        tag: "cross"
      },
      sunday: {
        label: day[6] + " - Sun",
        exercise: "4 mi run",
        tag: "run"
      }
    },
    week2: {
      label: 'Week 2 (' + day[7] + " - " + day[13] + ')',
      monday: {
        label: day[7] + " - Mon",
        exercise: "Rest",
        tag: "rest"
      },
      tuesday: {
        label: day[8] + " - Tue",
        exercise: "3 mi run",
        tag: "run"
      },
      wednesday: {
        label: day[9] + " - Wed",
        exercise: "2 mi run or cross",
        tag: "cross"
      },
      thursday: {
        label: day[10] + " - Thu",
        exercise: "3 mi run",
        tag: "run"
      },
      friday: {
        label: day[11] + " - Fri",
        exercise: "Rest",
        tag: "rest"
      },
      saturday: {
        label: day[12] + " - Sat",
        exercise: "30 min cross",
        tag: "cross"
      },
      sunday: {
        label: day[13] + " - Sun",
        exercise: "4 mi run",
        tag: "run"
      }
    }
  };
  return schedule;
};

/* harmony default export */ __webpack_exports__["default"] = (scheduleMaker);

/***/ })

/******/ });