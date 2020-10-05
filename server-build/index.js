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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/server/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./build/index.html":
/*!**************************!*\
  !*** ./build/index.html ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module parse failed: Unexpected token (1:0)\\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\\n> <!doctype html><html lang=\\\"en\\\"><head><meta charset=\\\"utf-8\\\"/><link rel=\\\"icon\\\" href=\\\"/favicon.ico\\\"/><meta name=\\\"viewport\\\" content=\\\"width=device-width,initial-scale=1\\\"/><meta name=\\\"theme-color\\\" content=\\\"#000000\\\"/><meta name=\\\"description\\\" content=\\\"Web site created using create-react-app\\\"/><title>React App</title></head><body><noscript>You need to enable JavaScript to run this app.</noscript><div id=\\\"root\\\"></div><script>!function(e){function r(r){for(var n,l,a=r[0],i=r[1],c=r[2],p=0,s=[];p<a.length;p++)l=a[p],Object.prototype.hasOwnProperty.call(o,l)&&o[l]&&s.push(o[l][0]),o[l]=0;for(n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n]);for(f&&f(r);s.length;)s.shift()();return u.push.apply(u,c||[]),t()}function t(){for(var e,r=0;r<u.length;r++){for(var t=u[r],n=!0,a=1;a<t.length;a++){var i=t[a];0!==o[i]&&(n=!1)}n&&(u.splice(r--,1),e=l(l.s=t[0]))}return e}var n={},o={1:0},u=[];function l(r){if(n[r])return n[r].exports;var t=n[r]={i:r,l:!1,exports:{}};return e[r].call(t.exports,t,t.exports,l),t.l=!0,t.exports}l.m=e,l.c=n,l.d=function(e,r,t){l.o(e,r)||Object.defineProperty(e,r,{enumerable:!0,get:t})},l.r=function(e){\\\"undefined\\\"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:\\\"Module\\\"}),Object.defineProperty(e,\\\"__esModule\\\",{value:!0})},l.t=function(e,r){if(1&r&&(e=l(e)),8&r)return e;if(4&r&&\\\"object\\\"==typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(l.r(t),Object.defineProperty(t,\\\"default\\\",{enumerable:!0,value:e}),2&r&&\\\"string\\\"!=typeof e)for(var n in e)l.d(t,n,function(r){return e[r]}.bind(null,n));return t},l.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return l.d(r,\\\"a\\\",r),r},l.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)},l.p=\\\"/\\\";var a=this[\\\"webpackJsonpreact-social\\\"]=this[\\\"webpackJsonpreact-social\\\"]||[],i=a.push.bind(a);a.push=r,a=a.slice();for(var c=0;c<a.length;c++)r(a[c]);var f=i;t()}([])</script><script src=\\\"/static/js/2.eafd0f0e.chunk.js\\\"></script><script src=\\\"/static/js/main.1c4a6baa.chunk.js\\\"></script></body></html>\");\n\n//# sourceURL=webpack:///./build/index.html?");

/***/ }),

/***/ "./src/components/App.jsx":
/*!********************************!*\
  !*** ./src/components/App.jsx ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _containers_MainContainer_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./containers/MainContainer.jsx */ \"./src/components/containers/MainContainer.jsx\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _theme_Theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./theme/Theme */ \"./src/components/theme/Theme.jsx\");\n/* harmony import */ var _theme_GlobalStyles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./theme/GlobalStyles */ \"./src/components/theme/GlobalStyles.jsx\");\n/* harmony import */ var _pages_settings_Settings__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../pages/settings/Settings */ \"./src/pages/settings/Settings.jsx\");\n/* harmony import */ var _pages_profile_Profile__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../pages/profile/Profile */ \"./src/pages/profile/Profile.jsx\");\n/* harmony import */ var _pages_home_Home__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../pages/home/Home */ \"./src/pages/home/Home.jsx\");\n\n\n\n\n\n\n\n\n\nconst App = () => {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_theme_Theme__WEBPACK_IMPORTED_MODULE_3__[\"default\"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_theme_GlobalStyles__WEBPACK_IMPORTED_MODULE_4__[\"default\"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_containers_MainContainer_jsx__WEBPACK_IMPORTED_MODULE_1__[\"default\"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__[\"Switch\"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__[\"Route\"], {\n    exact: true,\n    path: \"/\",\n    component: _pages_home_Home__WEBPACK_IMPORTED_MODULE_7__[\"default\"]\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__[\"Route\"], {\n    path: \"/profile\",\n    component: _pages_profile_Profile__WEBPACK_IMPORTED_MODULE_6__[\"default\"]\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__[\"Route\"], {\n    path: \"/settings\",\n    component: _pages_settings_Settings__WEBPACK_IMPORTED_MODULE_5__[\"default\"]\n  }))));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (App);\n\n//# sourceURL=webpack:///./src/components/App.jsx?");

/***/ }),

/***/ "./src/components/containers/MainContainer.jsx":
/*!*****************************************************!*\
  !*** ./src/components/containers/MainContainer.jsx ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_nav_Nav_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/nav/Nav.jsx */ \"./src/components/nav/Nav.jsx\");\n\n\n\nconst MainContainer = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({\n  displayName: \"MainContainer\",\n  componentId: \"et29tt-0\"\n})([\"width:95vw;max-width:50rem;min-height:calc(100vh + \", \" + 1rem);display:flex;flex-direction:column;align-items:center;margin:0 auto;\"], props => props.theme.layout.navHeight);\n\nconst MainContainerComponent = ({\n  children\n}) => {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(MainContainer, null, children, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_nav_Nav_jsx__WEBPACK_IMPORTED_MODULE_2__[\"default\"], null));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (MainContainerComponent);\n\n//# sourceURL=webpack:///./src/components/containers/MainContainer.jsx?");

/***/ }),

/***/ "./src/components/html.js":
/*!********************************!*\
  !*** ./src/components/html.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst html = (body, styles, title) => {\n  return `<!DOCTYPE  html>\n    <html>\n      <head>\n        <meta charset=\"utf-8\" />\n        <title>${title}</title>\n        ${styles}\n      </head>\n      <body>\n        <div id=\"root\">\n        ${body}\n        </div>\n      </body>\n    </html>`;\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (html);\n\n//# sourceURL=webpack:///./src/components/html.js?");

/***/ }),

/***/ "./src/components/nav/Nav.jsx":
/*!************************************!*\
  !*** ./src/components/nav/Nav.jsx ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _navStyles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./navStyles */ \"./src/components/nav/navStyles.js\");\n/* harmony import */ var _images_home_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../images/home.png */ \"./src/images/home.png\");\n/* harmony import */ var _images_profile_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../images/profile.png */ \"./src/images/profile.png\");\n/* harmony import */ var _images_setttings_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../images/setttings.png */ \"./src/images/setttings.png\");\n\n\n\n\n\n\n\nconst Nav = () => {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_navStyles__WEBPACK_IMPORTED_MODULE_2__[\"NavBar\"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Link\"], {\n    to: \"/\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_navStyles__WEBPACK_IMPORTED_MODULE_2__[\"NavImage\"], {\n    src: _images_home_png__WEBPACK_IMPORTED_MODULE_3__[\"default\"]\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Link\"], {\n    to: \"profile\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_navStyles__WEBPACK_IMPORTED_MODULE_2__[\"NavImage\"], {\n    src: _images_profile_png__WEBPACK_IMPORTED_MODULE_4__[\"default\"]\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Link\"], {\n    to: \"settings\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_navStyles__WEBPACK_IMPORTED_MODULE_2__[\"NavImage\"], {\n    src: _images_setttings_png__WEBPACK_IMPORTED_MODULE_5__[\"default\"]\n  })));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Nav);\n\n//# sourceURL=webpack:///./src/components/nav/Nav.jsx?");

/***/ }),

/***/ "./src/components/nav/navStyles.js":
/*!*****************************************!*\
  !*** ./src/components/nav/navStyles.js ***!
  \*****************************************/
/*! exports provided: NavBar, NavImage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"NavBar\", function() { return NavBar; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"NavImage\", function() { return NavImage; });\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);\n\nconst NavBar = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.nav.withConfig({\n  displayName: \"navStyles__NavBar\",\n  componentId: \"wzuxnq-0\"\n})([\"position:fixed;bottom:0;left:0;z-index:100;width:100%;height:\", \";display:flex;justify-content:space-between;align-items:center;padding:1.5rem 2rem;background-color:\", \";border-top:0.5px solid \", \";\"], props => props.theme.layout.navHeight, props => props.theme.colors.main, props => props.theme.colors.gray);\nconst NavImage = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.img.withConfig({\n  displayName: \"navStyles__NavImage\",\n  componentId: \"wzuxnq-1\"\n})([\"width:2rem;height:2rem;cursor:pointer;\"]);\n\n//# sourceURL=webpack:///./src/components/nav/navStyles.js?");

/***/ }),

/***/ "./src/components/post/Post.jsx":
/*!**************************************!*\
  !*** ./src/components/post/Post.jsx ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _userIdentification_UserIdentification__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../userIdentification/UserIdentification */ \"./src/components/userIdentification/UserIdentification.jsx\");\n/* harmony import */ var _postInteractions_PostInteractions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../postInteractions/PostInteractions */ \"./src/components/postInteractions/PostInteractions.jsx\");\n/* harmony import */ var _postStyles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./postStyles */ \"./src/components/post/postStyles.js\");\n/* harmony import */ var _images_post_image_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../images/post_image.png */ \"./src/images/post_image.png\");\n\n\n\n\n\n\nconst Post = () => {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_postStyles__WEBPACK_IMPORTED_MODULE_3__[\"PostWrapper\"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_postStyles__WEBPACK_IMPORTED_MODULE_3__[\"PostTop\"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_userIdentification_UserIdentification__WEBPACK_IMPORTED_MODULE_1__[\"default\"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_postStyles__WEBPACK_IMPORTED_MODULE_3__[\"PostText\"], null, \" Cillum nisi incididunt dolore in occaecat officia reprehenderit anim. \")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_postStyles__WEBPACK_IMPORTED_MODULE_3__[\"PostImage\"], {\n    src: _images_post_image_png__WEBPACK_IMPORTED_MODULE_4__[\"default\"]\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_postInteractions_PostInteractions__WEBPACK_IMPORTED_MODULE_2__[\"default\"], null));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Post);\n\n//# sourceURL=webpack:///./src/components/post/Post.jsx?");

/***/ }),

/***/ "./src/components/post/postStyles.js":
/*!*******************************************!*\
  !*** ./src/components/post/postStyles.js ***!
  \*******************************************/
/*! exports provided: PostWrapper, PostTop, PostImage, PostText */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"PostWrapper\", function() { return PostWrapper; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"PostTop\", function() { return PostTop; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"PostImage\", function() { return PostImage; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"PostText\", function() { return PostText; });\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);\n\nconst PostWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({\n  displayName: \"postStyles__PostWrapper\",\n  componentId: \"sc-1ttlpu-0\"\n})([\"position:relative;width:100%;max-width:40rem;border-radius:10px;overflow:hidden;border:1px solid \", \";\"], props => props.theme.colors.gray);\nconst PostTop = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({\n  displayName: \"postStyles__PostTop\",\n  componentId: \"sc-1ttlpu-1\"\n})([\"width:100%;padding:1.5rem 2rem;\"]);\nconst PostImage = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.img.withConfig({\n  displayName: \"postStyles__PostImage\",\n  componentId: \"sc-1ttlpu-2\"\n})([\"display:block;width:100%;\"]);\nconst PostText = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.p.withConfig({\n  displayName: \"postStyles__PostText\",\n  componentId: \"sc-1ttlpu-3\"\n})([\"color:\", \";\"], props => props.theme.colors.textPrimary);\n\n//# sourceURL=webpack:///./src/components/post/postStyles.js?");

/***/ }),

/***/ "./src/components/postButton/PostButton.jsx":
/*!**************************************************!*\
  !*** ./src/components/postButton/PostButton.jsx ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _postButtonStyles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./postButtonStyles */ \"./src/components/postButton/postButtonStyles.js\");\n\n\n\nconst PostButton = () => {\n  function change() {\n    console.log('clicked');\n  }\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_postButtonStyles__WEBPACK_IMPORTED_MODULE_1__[\"Button\"], {\n    onClick: change\n  }, \"+\");\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (PostButton);\n\n//# sourceURL=webpack:///./src/components/postButton/PostButton.jsx?");

/***/ }),

/***/ "./src/components/postButton/postButtonStyles.js":
/*!*******************************************************!*\
  !*** ./src/components/postButton/postButtonStyles.js ***!
  \*******************************************************/
/*! exports provided: Button */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Button\", function() { return Button; });\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);\n\nconst Button = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.button.withConfig({\n  displayName: \"postButtonStyles__Button\",\n  componentId: \"sc-115ong1-0\"\n})([\"position:fixed;right:1rem;bottom:calc(\", \" + 1rem);width:5rem;height:5rem;display:flex;justify-content:center;align-items:center;border:none;border-radius:50%;font-size:5rem;font-weight:lighter;cursor:pointer;outline:none;transition:background 0.3s,color 0.3s;color:\", \";background-color:\", \";&:hover{color:\", \";background-color:\", \";}\"], props => props.theme.layout.navHeight, props => props.theme.colors.textPrimary, props => props.theme.colors.secondary, props => props.theme.colors.secondary, props => props.theme.colors.textPrimary);\n\n//# sourceURL=webpack:///./src/components/postButton/postButtonStyles.js?");

/***/ }),

/***/ "./src/components/postInteractions/PostInteractions.jsx":
/*!**************************************************************!*\
  !*** ./src/components/postInteractions/PostInteractions.jsx ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _postInteractionsStyles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./postInteractionsStyles */ \"./src/components/postInteractions/postInteractionsStyles.js\");\n/* harmony import */ var _images_like_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../images/like.png */ \"./src/images/like.png\");\n/* harmony import */ var _images_comment_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../images/comment.png */ \"./src/images/comment.png\");\n/* harmony import */ var _server_increase_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../server/increase.js */ \"./src/server/increase.js\");\n\n\n\n\n\n\nconst PostInteractions = () => {\n  const [likesAmmount, increaseLikes] = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(0);\n\n  const increment = () => {\n    console.log(\"jejeje\");\n    console.log(Object(_server_increase_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(\"INCREMENT\", likesAmmount));\n    increaseLikes(Object(_server_increase_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(\"INCREMENT\", likesAmmount));\n  };\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_postInteractionsStyles__WEBPACK_IMPORTED_MODULE_1__[\"InteractionsWrapper\"], {\n    onClick: increment\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_postInteractionsStyles__WEBPACK_IMPORTED_MODULE_1__[\"Interaction\"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_postInteractionsStyles__WEBPACK_IMPORTED_MODULE_1__[\"InteractionImage\"], {\n    src: _images_like_png__WEBPACK_IMPORTED_MODULE_2__[\"default\"]\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_postInteractionsStyles__WEBPACK_IMPORTED_MODULE_1__[\"InteractionAmmount\"], null, likesAmmount)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_postInteractionsStyles__WEBPACK_IMPORTED_MODULE_1__[\"Interaction\"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_postInteractionsStyles__WEBPACK_IMPORTED_MODULE_1__[\"InteractionImage\"], {\n    src: _images_comment_png__WEBPACK_IMPORTED_MODULE_3__[\"default\"]\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_postInteractionsStyles__WEBPACK_IMPORTED_MODULE_1__[\"InteractionAmmount\"], null, \"3\")));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (PostInteractions);\n\n//# sourceURL=webpack:///./src/components/postInteractions/PostInteractions.jsx?");

/***/ }),

/***/ "./src/components/postInteractions/postInteractionsStyles.js":
/*!*******************************************************************!*\
  !*** ./src/components/postInteractions/postInteractionsStyles.js ***!
  \*******************************************************************/
/*! exports provided: InteractionsWrapper, Interaction, InteractionImage, InteractionAmmount */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"InteractionsWrapper\", function() { return InteractionsWrapper; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Interaction\", function() { return Interaction; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"InteractionImage\", function() { return InteractionImage; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"InteractionAmmount\", function() { return InteractionAmmount; });\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);\n\nconst InteractionsWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({\n  displayName: \"postInteractionsStyles__InteractionsWrapper\",\n  componentId: \"sc-1vlpjov-0\"\n})([\"position:absolute;bottom:0;left:0;width:100%;display:flex;padding:0.5rem 2rem;background-color:rgba(0,0,0,0.5);\"]);\nconst Interaction = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({\n  displayName: \"postInteractionsStyles__Interaction\",\n  componentId: \"sc-1vlpjov-1\"\n})([\"position:relative;cursor:pointer;&:nth-last-child(1){margin-left:1.5rem;}\"]);\nconst InteractionImage = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.img.withConfig({\n  displayName: \"postInteractionsStyles__InteractionImage\",\n  componentId: \"sc-1vlpjov-2\"\n})([\"width:1.5rem;height:1.5rem;\"]);\nconst InteractionAmmount = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.span.withConfig({\n  displayName: \"postInteractionsStyles__InteractionAmmount\",\n  componentId: \"sc-1vlpjov-3\"\n})([\"position:absolute;bottom:-0.1rem;right:-0.5rem;width:1.2rem;height:1.2rem;display:flex;justify-content:center;align-items:center;font-size:0.9rem;border-radius:50%;color:\", \";background-color:\", \";\"], props => props.theme.colors.textPrimary, props => props.theme.colors.secondary);\n\n//# sourceURL=webpack:///./src/components/postInteractions/postInteractionsStyles.js?");

/***/ }),

/***/ "./src/components/theme/GlobalStyles.jsx":
/*!***********************************************!*\
  !*** ./src/components/theme/GlobalStyles.jsx ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst GlobalStyles = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"createGlobalStyle\"]`\n  * {\n    padding: 0;\n    margin: 0;\n    box-sizing: border-box;\n  }\n  \n  @font-face {\n    font-family: Roboto ;\n    src: url(../../fonts/roboto/Roboto-Regular.ttf);\n  }\n  body {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    font-family: Roboto, sans-serif;\n    background-color: ${props => props.theme.colors.main};\n  }\n  a {\n    color: inherit;\n    text-decoration: none;\n  }\n`;\n/* harmony default export */ __webpack_exports__[\"default\"] = (GlobalStyles);\n\n//# sourceURL=webpack:///./src/components/theme/GlobalStyles.jsx?");

/***/ }),

/***/ "./src/components/theme/Theme.jsx":
/*!****************************************!*\
  !*** ./src/components/theme/Theme.jsx ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst theme = {\n  colors: {\n    main: '#24253F',\n    secondary: '#00BB78',\n    gray: '#C4C4C4',\n    textPrimary: '#fff',\n    textSecondary: '#929292'\n  },\n  layout: {\n    navHeight: '5rem'\n  }\n};\n\nconst Theme = ({\n  children\n}) => {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(styled_components__WEBPACK_IMPORTED_MODULE_1__[\"ThemeProvider\"], {\n    theme: theme\n  }, \" \", children, \" \");\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Theme);\n\n//# sourceURL=webpack:///./src/components/theme/Theme.jsx?");

/***/ }),

/***/ "./src/components/userIdentification/UserIdentification.jsx":
/*!******************************************************************!*\
  !*** ./src/components/userIdentification/UserIdentification.jsx ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _userIdentificationStyles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./userIdentificationStyles */ \"./src/components/userIdentification/userIdentificationStyles.js\");\n/* harmony import */ var _images_user_picture_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../images/user_picture.png */ \"./src/images/user_picture.png\");\n\n\n\n\nconst UserIdentification = props => {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_userIdentificationStyles__WEBPACK_IMPORTED_MODULE_1__[\"IdWrapper\"], {\n    isProfile: props.isProfilePage\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_userIdentificationStyles__WEBPACK_IMPORTED_MODULE_1__[\"UserPic\"], {\n    src: _images_user_picture_png__WEBPACK_IMPORTED_MODULE_2__[\"default\"]\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_userIdentificationStyles__WEBPACK_IMPORTED_MODULE_1__[\"RightSide\"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_userIdentificationStyles__WEBPACK_IMPORTED_MODULE_1__[\"UserName\"], null, \"Jhon Doe\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_userIdentificationStyles__WEBPACK_IMPORTED_MODULE_1__[\"UserHash\"], null, \"@TheJhonDoe\")));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (UserIdentification);\n\n//# sourceURL=webpack:///./src/components/userIdentification/UserIdentification.jsx?");

/***/ }),

/***/ "./src/components/userIdentification/userIdentificationStyles.js":
/*!***********************************************************************!*\
  !*** ./src/components/userIdentification/userIdentificationStyles.js ***!
  \***********************************************************************/
/*! exports provided: UserPic, RightSide, UserName, UserHash, IdWrapper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"UserPic\", function() { return UserPic; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"RightSide\", function() { return RightSide; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"UserName\", function() { return UserName; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"UserHash\", function() { return UserHash; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"IdWrapper\", function() { return IdWrapper; });\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);\n\nconst UserPic = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.img.withConfig({\n  displayName: \"userIdentificationStyles__UserPic\",\n  componentId: \"sc-1li7qlt-0\"\n})([\"width:4rem;height:4rem;border-radius:50%;\"]);\nconst RightSide = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({\n  displayName: \"userIdentificationStyles__RightSide\",\n  componentId: \"sc-1li7qlt-1\"\n})([\"display:flex;flex-direction:column;margin-left:0.5rem;\"]);\nconst UserName = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.h5.withConfig({\n  displayName: \"userIdentificationStyles__UserName\",\n  componentId: \"sc-1li7qlt-2\"\n})([\"font-size:0.9rem;color:\", \";\"], props => props.theme.colors.textPrimary);\nconst UserHash = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.span.withConfig({\n  displayName: \"userIdentificationStyles__UserHash\",\n  componentId: \"sc-1li7qlt-3\"\n})([\"font-size:0.7rem;color:\", \";\"], props => props.theme.colors.textSecondary);\nconst IdWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({\n  displayName: \"userIdentificationStyles__IdWrapper\",\n  componentId: \"sc-1li7qlt-4\"\n})([\"width:100%;display:flex;align-items:center;\", \"\"], ({\n  isProfile\n}) => isProfile && `\n          position: absolute;\n          bottom: -2rem;\n          left: -1rem;\n          align-items: flex-end;\n          ${UserPic} {\n            position: relative;\n            z-index: 2;\n            width: 6rem;\n            height: 6rem;\n          }\n\n          ${RightSide} {\n              position: relative;\n              right: 3rem;\n              bottom: 0.2rem;\n              padding: 0.5rem;\n              padding-left: 3rem;\n              margin-left: 0;\n              border-radius: 5px;\n              background-color: rgba(0,0,0,0.6);\n          }\n\n          ${UserName} {\n            font-size: 1.8rem;\n          }\n\n          ${UserHash} {\n            font-size: 0.9rem;\n          }\n        `);\n\n//# sourceURL=webpack:///./src/components/userIdentification/userIdentificationStyles.js?");

/***/ }),

/***/ "./src/images/comment.png":
/*!********************************!*\
  !*** ./src/images/comment.png ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"353c1870b123c6ddd6e02a790164ce67.png\");\n\n//# sourceURL=webpack:///./src/images/comment.png?");

/***/ }),

/***/ "./src/images/home.png":
/*!*****************************!*\
  !*** ./src/images/home.png ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"7a60b976573cf6532d01716afa30658e.png\");\n\n//# sourceURL=webpack:///./src/images/home.png?");

/***/ }),

/***/ "./src/images/like.png":
/*!*****************************!*\
  !*** ./src/images/like.png ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"0ba245853f2c76d9fc4bc872b6b5f5d9.png\");\n\n//# sourceURL=webpack:///./src/images/like.png?");

/***/ }),

/***/ "./src/images/post_image.png":
/*!***********************************!*\
  !*** ./src/images/post_image.png ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"76dafa8e3bd5ec2a79b9aeb8d96d211c.png\");\n\n//# sourceURL=webpack:///./src/images/post_image.png?");

/***/ }),

/***/ "./src/images/profile.png":
/*!********************************!*\
  !*** ./src/images/profile.png ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"042371253846c8ef75f07945858d701e.png\");\n\n//# sourceURL=webpack:///./src/images/profile.png?");

/***/ }),

/***/ "./src/images/setttings.png":
/*!**********************************!*\
  !*** ./src/images/setttings.png ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"6410ac84ac85fd51daead5c3c1343716.png\");\n\n//# sourceURL=webpack:///./src/images/setttings.png?");

/***/ }),

/***/ "./src/images/user_picture.png":
/*!*************************************!*\
  !*** ./src/images/user_picture.png ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"6d86759d4e66137a8874f1f0f59f3420.png\");\n\n//# sourceURL=webpack:///./src/images/user_picture.png?");

/***/ }),

/***/ "./src/pages/home/Home.jsx":
/*!*********************************!*\
  !*** ./src/pages/home/Home.jsx ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_post_Post__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/post/Post */ \"./src/components/post/Post.jsx\");\n/* harmony import */ var _components_postButton_PostButton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/postButton/PostButton */ \"./src/components/postButton/PostButton.jsx\");\n/* harmony import */ var _homeStyles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./homeStyles */ \"./src/pages/home/homeStyles.js\");\n\n\n\n\n\nconst Home = () => {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_homeStyles__WEBPACK_IMPORTED_MODULE_3__[\"HomeTitle\"], null, \"Social Platform\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_post_Post__WEBPACK_IMPORTED_MODULE_1__[\"default\"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_postButton_PostButton__WEBPACK_IMPORTED_MODULE_2__[\"default\"], null));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\n\n//# sourceURL=webpack:///./src/pages/home/Home.jsx?");

/***/ }),

/***/ "./src/pages/home/homeStyles.js":
/*!**************************************!*\
  !*** ./src/pages/home/homeStyles.js ***!
  \**************************************/
/*! exports provided: HomeTitle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"HomeTitle\", function() { return HomeTitle; });\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);\n\nconst HomeTitle = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.h1.withConfig({\n  displayName: \"homeStyles__HomeTitle\",\n  componentId: \"c18le4-0\"\n})([\"font-size:2.5rem;font-weight:500;margin:2rem auto;color:\", \";\"], props => props.theme.colors.textPrimary);\n\n//# sourceURL=webpack:///./src/pages/home/homeStyles.js?");

/***/ }),

/***/ "./src/pages/profile/Profile.jsx":
/*!***************************************!*\
  !*** ./src/pages/profile/Profile.jsx ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _profileStyles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./profileStyles */ \"./src/pages/profile/profileStyles.js\");\n/* harmony import */ var _components_userIdentification_UserIdentification__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/userIdentification/UserIdentification */ \"./src/components/userIdentification/UserIdentification.jsx\");\n/* harmony import */ var _images_post_image_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../images/post_image.png */ \"./src/images/post_image.png\");\n\n\n\n\n\nconst Profile = () => {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_profileStyles__WEBPACK_IMPORTED_MODULE_1__[\"Banner\"], {\n    background: _images_post_image_png__WEBPACK_IMPORTED_MODULE_3__[\"default\"]\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_userIdentification_UserIdentification__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    isProfilePage: true\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_profileStyles__WEBPACK_IMPORTED_MODULE_1__[\"UserDescription\"], null, \"Fugiat aliqua aute cillum veniam ipsum quis fugiat enim labore eiusmod incididunt Lorem do tempor.\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_profileStyles__WEBPACK_IMPORTED_MODULE_1__[\"ProfileTopMenu\"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_profileStyles__WEBPACK_IMPORTED_MODULE_1__[\"TopMenuItem\"], {\n    active: true\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"a\", {\n    href: \"#\"\n  }, \"Posts\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_profileStyles__WEBPACK_IMPORTED_MODULE_1__[\"TopMenuItem\"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"a\", {\n    href: \"#\"\n  }, \"About me\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_profileStyles__WEBPACK_IMPORTED_MODULE_1__[\"TopMenuItem\"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"a\", {\n    href: \"#\"\n  }, \"Likes\"))));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Profile);\n\n//# sourceURL=webpack:///./src/pages/profile/Profile.jsx?");

/***/ }),

/***/ "./src/pages/profile/profileStyles.js":
/*!********************************************!*\
  !*** ./src/pages/profile/profileStyles.js ***!
  \********************************************/
/*! exports provided: Banner, UserDescription, ProfileTopMenu, TopMenuItem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Banner\", function() { return Banner; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"UserDescription\", function() { return UserDescription; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ProfileTopMenu\", function() { return ProfileTopMenu; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"TopMenuItem\", function() { return TopMenuItem; });\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);\n\nconst Banner = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.header.withConfig({\n  displayName: \"profileStyles__Banner\",\n  componentId: \"sc-16fhbjx-0\"\n})([\"position:relative;width:100%;height:10rem;background-image:url(\", \");background-size:cover;background-repeat:no-repeat;\"], props => props.background);\nconst UserDescription = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.p.withConfig({\n  displayName: \"profileStyles__UserDescription\",\n  componentId: \"sc-16fhbjx-1\"\n})([\"width:90%;margin-top:3rem;margin-bottom:3rem;color:\", \";\"], props => props.theme.colors.textPrimary);\nconst ProfileTopMenu = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.ul.withConfig({\n  displayName: \"profileStyles__ProfileTopMenu\",\n  componentId: \"sc-16fhbjx-2\"\n})([\"width:100%;display:flex;justify-content:space-evenly;border-bottom:1px solid \", \";\"], props => props.theme.colors.textPrimary);\nconst TopMenuItem = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.li.withConfig({\n  displayName: \"profileStyles__TopMenuItem\",\n  componentId: \"sc-16fhbjx-3\"\n})([\"font-size:1.1rem;list-style:none;padding:1rem;padding-bottom:0;color:\", \";border-color:\", \";border-bottom-color:\", \";\", \"\"], props => props.theme.colors.textPrimary, props => props.theme.colors.textPrimary, props => props.theme.colors.main, props => props.active && `\n    border-radius: 10px;\n    border-width: 2px;\n    border-style: solid;\n    border-bottom-left-radius: 0;\n    border-bottom-right-radius: 0;\n    position: relative;\n    top: 0.1rem;\n  `);\n\n//# sourceURL=webpack:///./src/pages/profile/profileStyles.js?");

/***/ }),

/***/ "./src/pages/settings/Settings.jsx":
/*!*****************************************!*\
  !*** ./src/pages/settings/Settings.jsx ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _settingsStyles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./settingsStyles */ \"./src/pages/settings/settingsStyles.js\");\n/* harmony import */ var _components_userIdentification_UserIdentification__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/userIdentification/UserIdentification */ \"./src/components/userIdentification/UserIdentification.jsx\");\n/* harmony import */ var _images_post_image_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../images/post_image.png */ \"./src/images/post_image.png\");\n\n\n\n\n\nconst Settings = () => {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_settingsStyles__WEBPACK_IMPORTED_MODULE_1__[\"Banner\"], {\n    background: _images_post_image_png__WEBPACK_IMPORTED_MODULE_3__[\"default\"]\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_userIdentification_UserIdentification__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    isProfilePage: true\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_settingsStyles__WEBPACK_IMPORTED_MODULE_1__[\"SettingsContainer\"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_settingsStyles__WEBPACK_IMPORTED_MODULE_1__[\"SettingOption\"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_settingsStyles__WEBPACK_IMPORTED_MODULE_1__[\"SettingOptionTitle\"], null, \"Change pictures\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_settingsStyles__WEBPACK_IMPORTED_MODULE_1__[\"OptionContent\"], null, \"Texting\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_settingsStyles__WEBPACK_IMPORTED_MODULE_1__[\"SettingOption\"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_settingsStyles__WEBPACK_IMPORTED_MODULE_1__[\"SettingOptionTitle\"], null, \"Change personal info\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_settingsStyles__WEBPACK_IMPORTED_MODULE_1__[\"OptionContent\"], null, \"Texting\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_settingsStyles__WEBPACK_IMPORTED_MODULE_1__[\"SettingOption\"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_settingsStyles__WEBPACK_IMPORTED_MODULE_1__[\"SettingOptionTitle\"], null, \"Change user name\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_settingsStyles__WEBPACK_IMPORTED_MODULE_1__[\"OptionContent\"], null, \"Texting\"))));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Settings);\n\n//# sourceURL=webpack:///./src/pages/settings/Settings.jsx?");

/***/ }),

/***/ "./src/pages/settings/settingsStyles.js":
/*!**********************************************!*\
  !*** ./src/pages/settings/settingsStyles.js ***!
  \**********************************************/
/*! exports provided: Banner, SettingsContainer, SettingOption, SettingOptionTitle, OptionContent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Banner\", function() { return Banner; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"SettingsContainer\", function() { return SettingsContainer; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"SettingOption\", function() { return SettingOption; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"SettingOptionTitle\", function() { return SettingOptionTitle; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"OptionContent\", function() { return OptionContent; });\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);\n\nconst Banner = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.header.withConfig({\n  displayName: \"settingsStyles__Banner\",\n  componentId: \"gdfq83-0\"\n})([\"position:relative;width:100%;height:10rem;background-image:url(\", \");background-size:cover;background-repeat:no-repeat;\"], props => props.background);\nconst SettingsContainer = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({\n  displayName: \"settingsStyles__SettingsContainer\",\n  componentId: \"gdfq83-1\"\n})([\"width:90%;max-width:30rem;border-radius:10px;margin-top:5rem;padding:2rem;color:\", \";border:1px solid \", \";\"], props => props.theme.colors.textPrimary, props => props.theme.colors.textPrimary);\nconst SettingOption = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.details.withConfig({\n  displayName: \"settingsStyles__SettingOption\",\n  componentId: \"gdfq83-2\"\n})([\"border-bottom:1px solid \", \";&:not(:nth-child(1)){margin-top:2rem;}\"], props => props.theme.colors.textPrimary);\nconst SettingOptionTitle = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.summary.withConfig({\n  displayName: \"settingsStyles__SettingOptionTitle\",\n  componentId: \"gdfq83-3\"\n})([\"position:relative;padding:0 0.5rem 1.5rem;padding-bottom:0;font-size:1.2rem;display:flex;flex-direction:row-reverse;justify-content:flex-end;align-items:center;cursor:pointer;&::-webkit-details-marker{position:relative;left:0.5rem;top:0.1rem;width:0.4rem;height:0.6rem;}&:focus{outline:none;}\"]);\nconst OptionContent = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({\n  displayName: \"settingsStyles__OptionContent\",\n  componentId: \"gdfq83-4\"\n})([\"padding:0.5rem 1.5rem;\"]);\n\n//# sourceURL=webpack:///./src/pages/settings/settingsStyles.js?");

/***/ }),

/***/ "./src/server/increase.js":
/*!********************************!*\
  !*** ./src/server/increase.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction handler(action, state) {\n  if (action === \"INCREMENT\") {\n    return state + 1;\n  } else {\n    return state;\n  }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (handler);\n\n//# sourceURL=webpack:///./src/server/increase.js?");

/***/ }),

/***/ "./src/server/index.js":
/*!*****************************!*\
  !*** ./src/server/index.js ***!
  \*****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-dom/server */ \"react-dom/server\");\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_dom_server__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _components_App_jsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/App.jsx */ \"./src/components/App.jsx\");\n/* harmony import */ var _components_html_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/html.js */ \"./src/components/html.js\");\n/* harmony import */ var _build_index_html__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../build/index.html */ \"./build/index.html\");\n/* harmony import */ var _build_index_html__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_build_index_html__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _middlewares_createReqTemplate_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./middlewares/createReqTemplate.js */ \"./src/server/middlewares/createReqTemplate.js\");\n\n\n\n\n\n\n\n\n\nconst app = express__WEBPACK_IMPORTED_MODULE_0___default()();\nconst port = 3000;\napp.use(express__WEBPACK_IMPORTED_MODULE_0___default.a.static('server-build'));\napp.use(_middlewares_createReqTemplate_js__WEBPACK_IMPORTED_MODULE_8__[\"default\"]);\napp.get('/', (req, res) => {\n  // res.send(\n  //   html(\n  //     req.template.body,\n  //     req.template.styles,\n  //     'Home'\n  //   )\n  // );\n  res.send(_build_index_html__WEBPACK_IMPORTED_MODULE_7___default.a);\n});\napp.get('/profile', (req, res) => {\n  res.send(Object(_components_html_js__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(req.template.body, req.template.styles, 'Settings'));\n});\napp.get('/settings', (req, res) => {\n  res.send(Object(_components_html_js__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(req.template.body, req.template.styles, 'Settings'));\n});\napp.listen(port, () => console.log(`Server started at localhost:${port}`));\n\n//# sourceURL=webpack:///./src/server/index.js?");

/***/ }),

/***/ "./src/server/middlewares/createReqTemplate.js":
/*!*****************************************************!*\
  !*** ./src/server/middlewares/createReqTemplate.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return createReqTemplate; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom/server */ \"react-dom/server\");\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom_server__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components_App_jsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/App.jsx */ \"./src/components/App.jsx\");\n\n\n\n\n\nfunction createReqTemplate(req, res, next) {\n  const sheet = new styled_components__WEBPACK_IMPORTED_MODULE_3__[\"ServerStyleSheet\"]();\n  const context = {};\n  const body = react_dom_server__WEBPACK_IMPORTED_MODULE_1___default.a.renderToString( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__[\"StaticRouter\"], {\n    location: req.url,\n    context: context\n  }, sheet.collectStyles( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_App_jsx__WEBPACK_IMPORTED_MODULE_4__[\"default\"], null))));\n  const styles = sheet.getStyleTags();\n  req.template = {\n    body: body,\n    styles: styles\n  };\n  next();\n}\n\n//# sourceURL=webpack:///./src/server/middlewares/createReqTemplate.js?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");\n\n//# sourceURL=webpack:///external_%22express%22?");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");\n\n//# sourceURL=webpack:///external_%22react%22?");

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-dom/server\");\n\n//# sourceURL=webpack:///external_%22react-dom/server%22?");

/***/ }),

/***/ "react-router-dom":
/*!***********************************!*\
  !*** external "react-router-dom" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-router-dom\");\n\n//# sourceURL=webpack:///external_%22react-router-dom%22?");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"styled-components\");\n\n//# sourceURL=webpack:///external_%22styled-components%22?");

/***/ })

/******/ });