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


exports.__esModule = true;
exports.default = viUpload;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var FileUpload = function () {
  function FileUpload(config) {
    _classCallCheck(this, FileUpload);

    var optionsTarget = {
      count: 1,
      name: 'picture',
      fileType: 'img',
      sizeType: ['original', 'compressed'],
      url: '',
      formData: {},
      sourceType: ['album', 'camera'],
      compressed: true,
      maxDuration: 60,
      beforeUpload: function beforeUpload() {},
      success: function success() {},
      fail: function fail() {}
    };
    this.options = Object.assign(optionsTarget, config);
    this.init(this.options.fileType);
  }

  FileUpload.prototype.init = function init(fileType) {
    if (fileType === 'img') {
      this.chooseImage();
    } else {
      this.chooseVideo();
    }
  };

  FileUpload.prototype.chooseImage = function chooseImage() {
    var _this = this;
    wx.chooseImage({
      count: this.options.count,
      sizeType: this.options.sizeType,
      sourceType: this.options.sourceType,
      success: function success(res) {
        var tempFilePaths = res.tempFilePaths;
        tempFilePaths.forEach(function (item) {
          _this.upload(item);
        });
      },
      fail: function fail(err) {
        _this.options.fail(err);
      }
    });
  };

  FileUpload.prototype.chooseVideo = function chooseVideo() {
    var _this = this;
    wx.chooseVideo({
      sourceType: _this.options.sourceType,
      compressed: _this.options.compressed,
      maxDuration: _this.options.maxDuration,
      success: function success(res) {
        _this.options.beforeUpload(res);
        _this.upload(res.tempFilePath);
      },
      fail: function fail(err) {
        _this.options.fail(err);
      }
    });
  };

  FileUpload.prototype.upload = function upload(item) {
    var _this = this;
    wx.uploadFile({
      url: this.options.url,
      filePath: item,
      name: this.options.name,
      formData: this.options.formData,
      success: function success(res) {
        if (!(_this.options.success instanceof Function)) return false;
        if (typeof res.data === 'string') {
          // 视业务情况而定
          _this.options.success(JSON.parse(res.data));
        } else {
          _this.options.success(res.data);
        }
      },
      fail: function fail(err) {
        _this.options.success(err);
      }
    });
  };

  return FileUpload;
}();

function viUpload(config) {
  new FileUpload(config);
}

/***/ })
/******/ ]);