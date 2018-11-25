module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Component({
  properties: {
    goodsnumber: {
      type: Number,
      value: 1
    },
    quantity: {
      type: [String, Number],
      value: 0
    },
    editindex: {
      type: Number,
      value: 0
    }
  },
  externalClasses: ['quantity-class'],
  methods: {
    add: function add() {
      if (this._maxNumber()) return false;
      this.setData({
        goodsnumber: ++this.data.goodsnumber
      });
      this.triggerEvent('change', { num: this.data.goodsnumber, i: this.data.editindex });
    },
    reduce: function reduce() {
      if (this._minNumber()) return false;
      this.setData({
        goodsnumber: --this.data.goodsnumber
      });
      this.triggerEvent('change', { num: this.data.goodsnumber, i: this.data.editindex });
    },
    changeValue: function changeValue(e) {
      var detail = e.detail;
      if (detail.value === '0') {
        wx.showToast({
          title: '亲爱的顾客，最少购买一件商品哦',
          icon: 'none'
        });
        this.triggerEvent('change', { num: 1, i: this.data.editindex });
        return 1;
      }
      if (detail.value !== '' && !(detail.value * 1)) {
        wx.showToast({
          title: '亲爱的顾客，请您输入数字',
          icon: 'none'
        });
        this.triggerEvent('change', { num: 1, i: this.data.editindex });
        return 1;
      }
      var num = detail.value || null;
      if (detail.value * 1 > this.data.quantity) {
        wx.showToast({
          title: '\u4EB2\u7231\u7684\u987E\u5BA2\uFF0C\u5B9D\u8D1D\u7684\u6700\u5927\u5E93\u5B58\u4E3A' + this.data.quantity,
          icon: 'none'
        });
        num = this.data.quantity;
        this.triggerEvent('change', { num: num, i: this.data.editindex });
        return this.data.quantity;
      }
      this.triggerEvent('change', { num: num, i: this.data.editindex });
    },
    blurFn: function blurFn(e) {
      var num = e.detail.value * 1;
      this._blurAndConfirm(num);
    },
    confirmValue: function confirmValue(e) {
      var num = e.detail.value * 1;
      this._blurAndConfirm(num);
    },
    _blurAndConfirm: function _blurAndConfirm(num) {
      if (!num) {
        this.setData({
          goodsnumber: 1
        });
        this.triggerEvent('change', { num: 1, i: this.data.editindex });
      }
    },
    _maxNumber: function _maxNumber() {
      // 最大商品购买量判断
      if (this.data.goodsnumber >= this.data.quantity) {
        wx.showToast({
          title: '亲爱的顾客，您购买的数量请不要超过最大库存哦',
          icon: 'none'
        });
        return true;
      }
      return false;
    },
    _minNumber: function _minNumber() {
      // 最小商品购买量判断
      if (this.data.goodsnumber <= 1) {
        wx.showToast({
          title: '亲爱的顾客，最少购买一件商品哦',
          icon: 'none'
        });
        return true;
      }
      return false;
    }
  }
});

/***/ })
/******/ ]);