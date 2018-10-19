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
    endTime: { // 结束时间
      type: [String, Number],
      value: null,
      observer: function observer(newValue) {
        if (!newValue) return false;
        this._createdCountDown();
      }
    },
    startTime: { // 开始时间
      type: [String, Number],
      value: null
    },
    endText: { // 倒计时结束要显示的提示语
      type: String,
      value: '该订单已超过支付时间'
    },
    isSlot: {
      type: Boolean,
      value: false
    }
  },
  data: {
    days: null, // 天数
    hours: null, // 小时
    minutes: null, // 分钟
    seconds: null, // 秒,
    timer: null, // 定时器
    surplus: 0, // 时差
    countDownOver: false // 判断倒计时是否结束
  },
  lifetimes: {
    detached: function detached() {
      clearTimeout(this.data.timer);
    }
  },
  methods: {
    countDown: function countDown() {
      // 倒计时逻辑
      var days = null;
      var hours = null;
      var minutes = null;
      var seconds = null;
      this.setData({
        surplus: --this.data.surplus
      });
      if (this.data.surplus > 0) {
        // 处理倒计时逻辑
        days = this.getHMS(parseInt(this.data.surplus / 86400));
        var lastTime = this.data.surplus % 86400;
        hours = this.getHMS(parseInt(lastTime / 3600));
        lastTime = lastTime % 3600;
        minutes = this.getHMS(parseInt(lastTime / 60));
        seconds = this.getHMS(parseInt(lastTime % 60));
        if (this.data.isSlot) {
          this.triggerEvent('countdown', {
            days: days,
            hours: hours,
            minutes: minutes,
            seconds: seconds
          });
        } else {
          this.setData({
            days: days,
            hours: hours,
            minutes: minutes,
            seconds: seconds
          });
        }
      } else {
        // 清除定时器
        this.setData({
          countDownOver: true
        });
        clearInterval(this.data.timer);
      }
    },
    getTime: function getTime() {
      // 获取开始与结束时间
      return {
        startTime: this.properties.startTime !== null ? new Date(this.properties.startTime) : new Date(),
        endTime: this.properties.endTime !== null ? new Date(this.properties.endTime) : null
      };
    },
    getHMS: function getHMS(HMS) {
      // 小于 10 补零
      return HMS >= 10 ? HMS : '0' + HMS;
    },
    _createdCountDown: function _createdCountDown() {
      var _this = this;

      // 创建定时器
      this.data.surplus = (this.getTime().endTime - this.getTime().startTime) / 1000;
      this.countDown();
      this.data.timer = setInterval(function () {
        _this.countDown();
      }, 1000);
    }
  }
});

/***/ })
/******/ ]);