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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/dom_node_collection.js":
/*!************************************!*\
  !*** ./src/dom_node_collection.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("class DomNodeCollection {\n  constructor(htmlArr){\n    this.htmlArr = htmlArr;\n    this.callback = \"\" ;\n  }\n\n  html(str) {\n    if (str === undefined) {\n      return this.htmlArr[0].innerHTML;\n    } else {\n      for (let i = 0; i < this.htmlArr.length; i++) {\n        this.htmlArr[i].innerHTML = str;\n      }\n    }\n  }\n\n  empty() {\n    for (let i = 0; i < this.htmlArr.length; i++) {\n      this.htmlArr[i].innerHTML = \"\";\n    }\n  }\n\n  append(value) {\n    for (let i = 0; i < this.htmlArr.length; i++) {\n      if (typeof value === \"string\") this.htmlArr[i].innerHTML += value;\n\n      if (value instanceof HTMLElement) this.htmlArr[i].appendChild(value);\n\n      if  (value instanceof DomNodeCollection) {\n        for (let j = 0; j < value.htmlArr.length; j++) {\n\n        this.htmlArr[i].appendChild(value.htmlArr[j]);\n        } \n      }\n    }  \n  }\n\n  children() {\n    let childrenArr = [];\n    for (let i = 0; i < this.htmlArr.length; i++) {\n      childrenArr.push(this.htmlArr[i].children);\n    }\n\n    return new DomNodeCollection(childrenArr);\n  }\n\n  parent() {\n    let parentArr = [];\n    for (let i = 0; i < this.htmlArr.length; i++) {\n      if (!parentArr.includes(this.htmlArr[i].parentNode))\n      parentArr.push(this.htmlArr[i].parentNode);\n    }\n\n    return new DomNodeCollection(parentArr);\n  }\n\n  remove() {\n    for (let i = 0; i < this.htmlArr.length; i++) {\n      this.htmlArr[i].remove();\n  } }\n\n  on(event, callback){\n    for (let i = 0; i < this.htmlArr.length; i++) {\n      this.htmlArr[i].addEventListener(event, callback);\n      this.htmlArr[i][event] = callback;\n    }\n    this.callback = callback;\n  }\n\n  off(event) {\n    for (let i = 0; i < this.htmlArr.length; i++) {\n      this.htmlArr[i].removeEventListener(event, this.htmlArr[i][event]);\n      this.htmlArr[i][event] = [];\n    }\n  }\n}\n\n\n\nmodule.exports = DomNodeCollection;\n\n//# sourceURL=webpack:///./src/dom_node_collection.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const DomNodeCollection = __webpack_require__(/*! ./dom_node_collection.js */ \"./src/dom_node_collection.js\");\n\nwindow.$l = function(selector){\n  let nodeArray = [];\n  if (typeof selector === \"string\"){\n    let nodelist = document.querySelectorAll(selector);\n     nodeArray = Array.from(nodelist);\n  } else if (selector instanceof HTMLElement){\n     nodeArray = Array.from(selector);\n  }\n\n  return new DomNodeCollection(nodeArray);\n};\n\n\n\nwindow.$l = function (func) {\n  // let nodeArray = [];\n  let funcQueue = [];\n  funcQueue.push(func);\n  \n\n  if (typeof selector === \"string\") {\n    let nodelist = document.querySelectorAll(selector);\n    nodeArray = Array.from(nodelist);\n  } else if (selector instanceof HTMLElement) {\n    nodeArray = Array.from(selector);\n  }\n\n  return new DomNodeCollection(nodeArray);\n};\ndocument.addEventListener(\"DOMContentLoaded\", function () {\n  console.log('Your document is ready!');\n});\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });