module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/create.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/create.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/create */ "core-js/library/fn/object/create");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/define-property */ "core-js/library/fn/object/define-property");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-prototype-of.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-prototype-of.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-prototype-of */ "core-js/library/fn/object/get-prototype-of");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/set-prototype-of */ "core-js/library/fn/object/set-prototype-of");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/parse-float.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/parse-float.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/parse-float */ "core-js/library/fn/parse-float");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/symbol.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/symbol.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/symbol */ "core-js/library/fn/symbol");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js":
/*!************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/symbol/iterator */ "core-js/library/fn/symbol/iterator");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _assertThisInitialized; });
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _classCallCheck; });
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js":
/*!************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _createClass; });
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);


function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;

    _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _getPrototypeOf; });
/* harmony import */ var _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/get-prototype-of */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-prototype-of.js");
/* harmony import */ var _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core-js/object/set-prototype-of */ "./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js");
/* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1__);


function _getPrototypeOf(o) {
  _getPrototypeOf = _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1___default.a ? _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default.a : function _getPrototypeOf(o) {
    return o.__proto__ || _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default()(o);
  };
  return _getPrototypeOf(o);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _inherits; });
/* harmony import */ var _core_js_object_create__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/create */ "./node_modules/@babel/runtime-corejs2/core-js/object/create.js");
/* harmony import */ var _core_js_object_create__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_create__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _setPrototypeOf__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./setPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/setPrototypeOf.js");


function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = _core_js_object_create__WEBPACK_IMPORTED_MODULE_0___default()(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object(_setPrototypeOf__WEBPACK_IMPORTED_MODULE_1__["default"])(subClass, superClass);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _possibleConstructorReturn; });
/* harmony import */ var _helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../helpers/esm/typeof */ "./node_modules/@babel/runtime-corejs2/helpers/esm/typeof.js");
/* harmony import */ var _assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");


function _possibleConstructorReturn(self, call) {
  if (call && (Object(_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__["default"])(call) === "object" || typeof call === "function")) {
    return call;
  }

  return Object(_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__["default"])(self);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/setPrototypeOf.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/setPrototypeOf.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _setPrototypeOf; });
/* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/set-prototype-of */ "./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js");
/* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_0__);

function _setPrototypeOf(o, p) {
  _setPrototypeOf = _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_0___default.a || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/typeof.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/typeof.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _typeof; });
/* harmony import */ var _core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/symbol/iterator */ "./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js");
/* harmony import */ var _core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_js_symbol__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core-js/symbol */ "./node_modules/@babel/runtime-corejs2/core-js/symbol.js");
/* harmony import */ var _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_core_js_symbol__WEBPACK_IMPORTED_MODULE_1__);



function _typeof2(obj) { if (typeof _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a === "function" && typeof _core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0___default.a === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a === "function" && obj.constructor === _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a && obj !== _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a === "function" && _typeof2(_core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0___default.a) === "symbol") {
    _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a === "function" && obj.constructor === _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a && obj !== _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

/***/ }),

/***/ "./pages/data.json":
/*!*************************!*\
  !*** ./pages/data.json ***!
  \*************************/
/*! exports provided: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, default */
/***/ (function(module) {

module.exports = [{"nom":"Abbaye de la Bussière","url":"https://www.relaischateaux.com/fr/france/bussiere-cote-d-or-la-bussiere-sur-ouche","chef":"guillaume royer","prix":"225,00","etoile":"1"},{"nom":"Anne de Bretagne","url":"https://www.relaischateaux.com/fr/france/annedebretagne-loire-atlantique-la-plaine-sur-mer","chef":"mathieu guibert","prix":"72,50","etoile":"2"},{"nom":"Assiette Champenoise","url":"https://www.relaischateaux.com/fr/france/assiette-champenoise-champagne-ardenne-tinqueux","chef":"arnaud lallement","prix":"185,50","etoile":"3"},{"nom":"Auberge des Templiers","url":"https://www.relaischateaux.com/fr/france/templiers-loiret-boismorand","chef":"martin simonart","prix":"112,20","etoile":"1"},{"nom":"Auberge du Jeu de Paume","url":"https://www.relaischateaux.com/fr/france/jeudepaume-oise-chantilly","chef":"julien lucas","prix":"263,50","etoile":"1"},{"nom":"Baumanière Hôtel & Spa","url":"https://www.relaischateaux.com/fr/france/baumaniere-hotel-spa-les-baux-de-provence","chef":"glenn viel","prix":"225,00","etoile":"2"},{"nom":"Baumanière Hôtel & Spa","url":"https://www.relaischateaux.com/fr/france/baumaniere-hotel-spa-les-baux-de-provence","chef":"glenn viel","prix":"225,00","etoile":"1"},{"nom":"Brittany & Spa","url":"https://www.relaischateaux.com/fr/france/brittany-finistere-roscoff","chef":"loic le bail","prix":"167,00","etoile":"1"},{"nom":"Cap d’Antibes Beach Hotel","url":"https://www.relaischateaux.com/fr/france/antibes-alpes-maritimes-cap-d-antibes","chef":"nicolas rondelli","prix":"294,00","etoile":"1"},{"nom":"Château Cordeillan-Bages","url":"https://www.relaischateaux.com/fr/france/cordeillan-gironde-pauillac","chef":"julien lefebvre","prix":"170,00","etoile":"1"},{"nom":"Château de Bagnols","url":"https://www.relaischateaux.com/fr/france/bagnols-rhone-alpes","chef":"jean alexandre ouaratta","prix":"199,20","etoile":"1"},{"nom":"Château de Berne","url":"https://www.relaischateaux.com/fr/france/berne-var-lorgues","chef":"benjamin collombat","prix":"281,00","etoile":"1"},{"nom":"Château de Mercuès","url":"https://www.relaischateaux.com/fr/france/mercues-lot-mercues","chef":"julien poisot","prix":"198,00","etoile":"1"},{"nom":"Château de Valmer","url":"https://www.relaischateaux.com/fr/france/chateau-de-valmer-la-croix-valmer","chef":"jimmy coutel","prix":"244,00","etoile":"1"},{"nom":"Château d’Adoménil","url":"https://www.relaischateaux.com/fr/france/adomenil-meurthe-et-moselle-luneville","chef":"cyril leclerc","prix":"195,00","etoile":"1"},{"nom":"Clarance Hôtel","url":"https://www.relaischateaux.com/fr/france/clarance-hotel-nord","chef":"thibaut gamba","prix":"170,00","etoile":"1"},{"nom":"Domaine Les Crayères","url":"https://www.relaischateaux.com/fr/france/crayeres-marne-reims","chef":"philippe mille","prix":"380,00","etoile":"2"},{"nom":"Domaine de Rochevilaine","url":"https://www.relaischateaux.com/fr/france/rochevilaine-morbihan-billiers","chef":"maxime nouail","prix":"192,00","etoile":"1"},{"nom":"Domaine d’Auriac","url":"https://www.relaischateaux.com/fr/france/auriac-aude-carcassonne","chef":"philippe deschamps","prix":"200,00","etoile":"1"},{"nom":"Flocons de Sel","url":"https://www.relaischateaux.com/fr/france/flocons-haute-savoie-megeve","chef":"emmanuel renaut","prix":"430,00","etoile":"3"},{"nom":"Georges Blanc Parc & Spa","url":"https://www.relaischateaux.com/fr/france/blanc-ain-vonnas","chef":"georges blanc","prix":"250,00","etoile":"3"},{"nom":"Hameau Albert Ier","url":"https://www.relaischateaux.com/fr/france/albert-haute-savoie-chamonix-mont-blanc","chef":"damien leveau","prix":"151,00","etoile":"2"},{"nom":"Hostellerie de Plaisance","url":"https://www.relaischateaux.com/fr/france/plaisance-gironde-saint-emilion","chef":"ronan kervarrec","prix":"280,00","etoile":"2"},{"nom":"Hotel & Restaurant Thierry Drapeau","url":"https://www.relaischateaux.com/fr/france/thierrydrapeau-vendee-saint-sulpice-le-verdon","chef":"thierry drapeau","prix":"520,00","etoile":"1"},{"nom":"Hotel Ile de la Lagune Thalasso & Spa","url":"https://www.relaischateaux.com/fr/france/ile-de-la-lagune-saint-cyprien","chef":"christophe schmitt","prix":"161,00","etoile":"1"},{"nom":"Hôtel Les Barmes de l'Ours","url":"https://www.relaischateaux.com/fr/france/barmes-de-l-ours-savoie","chef":"antoine gras","prix":"325,00","etoile":"1"},{"nom":"Hôtel Restaurant Auberge du Père Bise – Jean Sulpice","url":"https://www.relaischateaux.com/fr/france/bise-haute-savoie-talloires","chef":"jean sulpice","prix":"206,00","etoile":"2"},{"nom":"Hôtel Restaurant Clos des Sens - Laurent PETIT","url":"https://www.relaischateaux.com/fr/france/clos-des-sens-haute-savoie","chef":"laurent petit","prix":"230,00","etoile":"3"},{"nom":"La Bonne Étape","url":"https://www.relaischateaux.com/fr/france/bonneetape-alpes-de-haute-provence-chateau-arnoux","chef":"jany gleize","prix":"158,00","etoile":"1"},{"nom":"La Chapelle Saint-Martin","url":"https://www.relaischateaux.com/fr/france/chapelle-haute-vienne-nieul","chef":"gilles dudognon","prix":"135,00","etoile":"1"},{"nom":"La Côte Saint Jacques & Spa","url":"https://www.relaischateaux.com/fr/france/la-cote-saint-jacques-yonne-joigny","chef":"jean michel lorain","prix":"224,00","etoile":"2"},{"nom":"La Grenouillère","url":"https://www.relaischateaux.com/fr/france/lagrenouillere-pas-de-calais-la-madelaine-sous-montreuil","chef":"alexandre gauthier","prix":"180,00","etoile":"2"},{"nom":"La Pyramide Patrick Henriroux","url":"https://www.relaischateaux.com/fr/france/pyramide-isere-vienne","chef":"patrick henriroux","prix":"170,00","etoile":"2"},{"nom":"La Signoria & Spa","url":"https://www.relaischateaux.com/fr/france/signoria-corse-calvi","chef":"alexandre fabris","prix":"352,00","etoile":"1"},{"nom":"Le Chambard","url":"https://www.relaischateaux.com/fr/france/le-chambard-haut-rhin-kaysersberg","chef":"olivier nasti","prix":"182,00","etoile":"2"},{"nom":"Le Château de Beaulieu","url":"https://www.relaischateaux.com/fr/france/chateaubeaulieu-pas-de-calais-busnes","chef":"marc meurin","prix":"170,00","etoile":"2"},{"nom":"Le Phébus & Spa - Villa des Anges","url":"https://www.relaischateaux.com/fr/france/phebus-vaucluse-gordes","chef":"xavier mathieu","prix":"210,00","etoile":"1"},{"nom":"Le Prieuré Baumanière","url":"https://www.relaischateaux.com/fr/france/leprieure-gard-villeneuve-lez-avignon","chef":"marc fontanne","prix":"188,00","etoile":"1"},{"nom":"Le Relais Bernard Loiseau – Spa Loiseau des Sens","url":"https://www.relaischateaux.com/fr/france/loiseau-cote-d-or-saulieu","chef":"patrick bertron","prix":"99,00","etoile":"2"},{"nom":"Le Saint-James Bouliac","url":"https://www.relaischateaux.com/fr/france/stjames-gironde-bouliac","chef":"nicolas magie","prix":"175,00","etoile":"1"},{"nom":"Le Vieux Logis","url":"https://www.relaischateaux.com/fr/france/vieuxlogis-dordogne-tremolat","chef":"vincent arnould","prix":"170,00","etoile":"1"},{"nom":"Les Hautes Roches","url":"https://www.relaischateaux.com/fr/france/hautesroches-indre-et-loire-rochecorbon","chef":"didier edon","prix":"165,00","etoile":"1"},{"nom":"L’Arnsbourg Restaurant et Hôtel","url":"https://www.relaischateaux.com/fr/france/arnsbourg-moselle-baerenthal","chef":"fabien mengus","prix":"175,00","etoile":"1"},{"nom":"Maison Decoret","url":"https://www.relaischateaux.com/fr/france/decoret-allier-vichy","chef":"jacques decoret","prix":"117,81","etoile":"1"},{"nom":"Maison Lameloise","url":"https://www.relaischateaux.com/fr/france/lameloise-saone-et-loire-chagny","chef":"eric pras","prix":"180,00","etoile":"3"},{"nom":"Maison Pic","url":"https://www.relaischateaux.com/fr/france/pic-drome-valence","chef":"anne sophie pic","prix":"238,00","etoile":"1"},{"nom":"Maison Pic","url":"https://www.relaischateaux.com/fr/france/pic-drome-valence","chef":"anne sophie pic","prix":"238,00","etoile":"3"},{"nom":"Michel Trama","url":"https://www.relaischateaux.com/fr/france/aubergade-lot-et-garonne-puymirol","chef":"michel trama","prix":"220,00","etoile":"2"},{"nom":"Monte-Carlo Beach","url":"https://www.relaischateaux.com/fr/france/montecarlo-alpes-maritimes-roquebrune-cap-martin","chef":"paolo sari","prix":"186,00","etoile":"1"},{"nom":"Moulin de l’Abbaye","url":"https://www.relaischateaux.com/fr/france/moulin-dordogne-brantome-en-perigord","chef":"jean michel bardet","prix":"145,00","etoile":"1"},{"nom":"Relais de la Poste","url":"https://www.relaischateaux.com/fr/france/poste-landes-magescq","chef":"jean coussau","prix":"162,00","etoile":"2"},{"nom":"Villa Florentine","url":"https://www.relaischateaux.com/fr/france/florentine-rhone-lyon","chef":"david delsart","prix":"195,00","etoile":"1"},{"nom":"Yoann Conte – Bord du Lac Hôtel Restaurant","url":"https://www.relaischateaux.com/fr/france/yoannconte-haute-savoie-veyrier-du-lac","chef":"yoann conte","prix":"210,00","etoile":"2"}];

/***/ }),

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
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_float__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/parse-float */ "./node_modules/@babel/runtime-corejs2/core-js/parse-float.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_float__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_parse_float__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_bootstrap_table_next__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-bootstrap-table-next */ "react-bootstrap-table-next");
/* harmony import */ var react_bootstrap_table_next__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_table_next__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_bootstrap_table2_filter__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-bootstrap-table2-filter */ "react-bootstrap-table2-filter");
/* harmony import */ var react_bootstrap_table2_filter__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_table2_filter__WEBPACK_IMPORTED_MODULE_8__);






var _jsxFileName = "C:\\Users\\rakof\\OneDrive\\Bureau\\WebAppArch\\castle\\app\\pages\\index.js";




var data = __webpack_require__(/*! ./data.json */ "./pages/data.json");

for (var i = 0; i < data.length; i++) {
  data[i].id = i + 1;
  data[i].prix = _babel_runtime_corejs2_core_js_parse_float__WEBPACK_IMPORTED_MODULE_5___default()(data[i].prix);
}

var columns = [{
  dataField: 'id',
  text: '#',
  sort: true
}, {
  dataField: 'nom',
  text: 'Nom',
  sort: true,
  filter: Object(react_bootstrap_table2_filter__WEBPACK_IMPORTED_MODULE_8__["textFilter"])()
}, {
  dataField: 'url',
  text: 'Access Site'
}, {
  dataField: 'chef',
  text: 'Chef Etoilé',
  sort: true,
  filter: Object(react_bootstrap_table2_filter__WEBPACK_IMPORTED_MODULE_8__["textFilter"])()
}, {
  dataField: 'prix',
  text: 'Prix (euros)',
  sort: true
}, {
  dataField: 'etoile',
  text: 'Etoiles',
  sort: true,
  filter: Object(react_bootstrap_table2_filter__WEBPACK_IMPORTED_MODULE_8__["textFilter"])()
}];
var defaultSorted = [{
  dataField: 'prix',
  order: 'asc'
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
      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("html", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("head", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("link", {
        rel: "stylesheet",
        href: "https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/css/bootstrap.min.css",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("body", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        class: "container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("nav", {
        class: "navbar navbar-dark bg-dark",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("a", {
        class: "h1",
        href: "https://www.relaischateaux.com/fr/destinations/europe/france",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("img", {
        src: "logo.png",
        width: "30",
        height: "30",
        class: "d-inline-block align-top",
        alt: "",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        },
        __self: this
      }), "Relais Chateau"))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        class: "container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_bootstrap_table_next__WEBPACK_IMPORTED_MODULE_7___default.a, {
        bootstrap4: true,
        keyField: "id",
        data: data,
        columns: columns,
        defaultSorted: defaultSorted,
        filter: react_bootstrap_table2_filter__WEBPACK_IMPORTED_MODULE_8___default()(),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        },
        __self: this
      }))));
    }
  }]);

  return MyComp;
}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component);
/* harmony default export */ __webpack_exports__["default"] = (MyComp);

/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\rakof\OneDrive\Bureau\WebAppArch\castle\app\pages\index.js */"./pages/index.js");


/***/ }),

/***/ "core-js/library/fn/object/create":
/*!***************************************************!*\
  !*** external "core-js/library/fn/object/create" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/create");

/***/ }),

/***/ "core-js/library/fn/object/define-property":
/*!************************************************************!*\
  !*** external "core-js/library/fn/object/define-property" ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-property");

/***/ }),

/***/ "core-js/library/fn/object/get-prototype-of":
/*!*************************************************************!*\
  !*** external "core-js/library/fn/object/get-prototype-of" ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-prototype-of");

/***/ }),

/***/ "core-js/library/fn/object/set-prototype-of":
/*!*************************************************************!*\
  !*** external "core-js/library/fn/object/set-prototype-of" ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/set-prototype-of");

/***/ }),

/***/ "core-js/library/fn/parse-float":
/*!*************************************************!*\
  !*** external "core-js/library/fn/parse-float" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/parse-float");

/***/ }),

/***/ "core-js/library/fn/symbol":
/*!********************************************!*\
  !*** external "core-js/library/fn/symbol" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/symbol");

/***/ }),

/***/ "core-js/library/fn/symbol/iterator":
/*!*****************************************************!*\
  !*** external "core-js/library/fn/symbol/iterator" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/symbol/iterator");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-bootstrap-table-next":
/*!*********************************************!*\
  !*** external "react-bootstrap-table-next" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-bootstrap-table-next");

/***/ }),

/***/ "react-bootstrap-table2-filter":
/*!************************************************!*\
  !*** external "react-bootstrap-table2-filter" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-bootstrap-table2-filter");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map