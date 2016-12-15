/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.l = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };

/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};

/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};

/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports) {

var g;g=function(){return this}();try{g=g||Function("return this")()||(1,eval)("this")}catch(e){if(typeof window==="object")g=window}module.exports=g;

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var $jscomp={scope:{},owns:function(a,c){return Object.prototype.hasOwnProperty.call(a,c)}};$jscomp.defineProperty="function"==typeof Object.defineProperties?Object.defineProperty:function(a,c,e){if(e.get||e.set)throw new TypeError("ES3 does not support getters and setters.");a!=Array.prototype&&a!=Object.prototype&&(a[c]=e.value)};$jscomp.getGlobal=function(a){return"undefined"!=typeof window&&window===a?a:"undefined"!=typeof global&&null!=global?global:a};$jscomp.global=$jscomp.getGlobal(this);
$jscomp.polyfill=function(a,c,e,b){if(c){e=$jscomp.global;a=a.split(".");for(b=0;b<a.length-1;b++){var h=a[b];h in e||(e[h]={});e=e[h]}a=a[a.length-1];b=e[a];c=c(b);c!=b&&null!=c&&$jscomp.defineProperty(e,a,{configurable:!0,writable:!0,value:c})}};$jscomp.polyfill("Object.assign",function(a){return a?a:function(a,e){for(var b=1;b<arguments.length;b++){var c=arguments[b];if(c)for(var d in c)$jscomp.owns(c,d)&&(a[d]=c[d])}return a}},"es6-impl","es3");$jscomp.SYMBOL_PREFIX="jscomp_symbol_";
$jscomp.initSymbol=function(){$jscomp.initSymbol=function(){};$jscomp.global.Symbol||($jscomp.global.Symbol=$jscomp.Symbol)};$jscomp.symbolCounter_=0;$jscomp.Symbol=function(a){return $jscomp.SYMBOL_PREFIX+(a||"")+$jscomp.symbolCounter_++};
$jscomp.initSymbolIterator=function(){$jscomp.initSymbol();var a=$jscomp.global.Symbol.iterator;a||(a=$jscomp.global.Symbol.iterator=$jscomp.global.Symbol("iterator"));"function"!=typeof Array.prototype[a]&&$jscomp.defineProperty(Array.prototype,a,{configurable:!0,writable:!0,value:function(){return $jscomp.arrayIterator(this)}});$jscomp.initSymbolIterator=function(){}};$jscomp.arrayIterator=function(a){var c=0;return $jscomp.iteratorPrototype(function(){return c<a.length?{done:!1,value:a[c++]}:{done:!0}})};
$jscomp.iteratorPrototype=function(a){$jscomp.initSymbolIterator();a={next:a};a[$jscomp.global.Symbol.iterator]=function(){return this};return a};$jscomp.makeIterator=function(a){$jscomp.initSymbolIterator();var c=a[Symbol.iterator];return c?c.call(a):$jscomp.arrayIterator(a)};$jscomp.EXPOSE_ASYNC_EXECUTOR=!0;$jscomp.FORCE_POLYFILL_PROMISE=!1;
$jscomp.polyfill("Promise",function(a){function c(){this.batch_=null}if(a&&!$jscomp.FORCE_POLYFILL_PROMISE)return a;c.prototype.asyncExecute=function(a){null==this.batch_&&(this.batch_=[],this.asyncExecuteBatch_());this.batch_.push(a);return this};c.prototype.asyncExecuteBatch_=function(){var a=this;this.asyncExecuteFunction(function(){a.executeBatch_()})};var e=$jscomp.global.setTimeout;c.prototype.asyncExecuteFunction=function(a){e(a,0)};c.prototype.executeBatch_=function(){for(;this.batch_&&this.batch_.length;){var a=
this.batch_;this.batch_=[];for(var f=0;f<a.length;++f){var b=a[f];delete a[f];try{b()}catch(g){this.asyncThrow_(g)}}}this.batch_=null};c.prototype.asyncThrow_=function(a){this.asyncExecuteFunction(function(){throw a;})};var b=function(a){this.state_=0;this.result_=void 0;this.onSettledCallbacks_=[];var d=this.createResolveAndReject_();try{a(d.resolve,d.reject)}catch(k){d.reject(k)}};b.prototype.createResolveAndReject_=function(){function a(a){return function(d){c||(c=!0,a.call(b,d))}}var b=this,c=
!1;return{resolve:a(this.resolveTo_),reject:a(this.reject_)}};b.prototype.resolveTo_=function(a){if(a===this)this.reject_(new TypeError("A Promise cannot resolve to itself"));else if(a instanceof b)this.settleSameAsPromise_(a);else{var d;a:switch(typeof a){case "object":d=null!=a;break a;case "function":d=!0;break a;default:d=!1}d?this.resolveToNonPromiseObj_(a):this.fulfill_(a)}};b.prototype.resolveToNonPromiseObj_=function(a){var d=void 0;try{d=a.then}catch(k){this.reject_(k);return}"function"==
typeof d?this.settleSameAsThenable_(d,a):this.fulfill_(a)};b.prototype.reject_=function(a){this.settle_(2,a)};b.prototype.fulfill_=function(a){this.settle_(1,a)};b.prototype.settle_=function(a,b){if(0!=this.state_)throw Error("Cannot settle("+a+", "+b|"): Promise already settled in state"+this.state_);this.state_=a;this.result_=b;this.executeOnSettledCallbacks_()};b.prototype.executeOnSettledCallbacks_=function(){if(null!=this.onSettledCallbacks_){for(var a=this.onSettledCallbacks_,b=0;b<a.length;++b)a[b].call(),
a[b]=null;this.onSettledCallbacks_=null}};var h=new c;b.prototype.settleSameAsPromise_=function(a){var b=this.createResolveAndReject_();a.callWhenSettled_(b.resolve,b.reject)};b.prototype.settleSameAsThenable_=function(a,b){var c=this.createResolveAndReject_();try{a.call(b,c.resolve,c.reject)}catch(g){c.reject(g)}};b.prototype.then=function(a,c){function d(a,b){return"function"==typeof a?function(b){try{g(a(b))}catch(l){e(l)}}:b}var g,e,f=new b(function(a,b){g=a;e=b});this.callWhenSettled_(d(a,g),
d(c,e));return f};b.prototype.catch=function(a){return this.then(void 0,a)};b.prototype.callWhenSettled_=function(a,b){function c(){switch(d.state_){case 1:a(d.result_);break;case 2:b(d.result_);break;default:throw Error("Unexpected state: "+d.state_);}}var d=this;null==this.onSettledCallbacks_?h.asyncExecute(c):this.onSettledCallbacks_.push(function(){h.asyncExecute(c)})};b.resolve=function(a){return a instanceof b?a:new b(function(b,c){b(a)})};b.reject=function(a){return new b(function(b,c){c(a)})};
b.race=function(a){return new b(function(c,d){for(var e=$jscomp.makeIterator(a),f=e.next();!f.done;f=e.next())b.resolve(f.value).callWhenSettled_(c,d)})};b.all=function(a){var c=$jscomp.makeIterator(a),d=c.next();return d.done?b.resolve([]):new b(function(a,e){function f(b){return function(c){g[b]=c;h--;0==h&&a(g)}}var g=[],h=0;do g.push(void 0),h++,b.resolve(d.value).callWhenSettled_(f(g.length-1),e),d=c.next();while(!d.done)})};$jscomp.EXPOSE_ASYNC_EXECUTOR&&(b.$jscomp$new$AsyncExecutor=function(){return new c});
return b},"es6-impl","es3");var Sound=function(a){Object.assign(this,a);this.load()};Sound.prototype.buttonClickHandler=function(a){a.target.parentNode.querySelector("audio").play()};Sound.prototype.load=function(){var a=this;return fetch("static/"+this.path+".mp3").then(function(a){return a.blob()}).then(function(a){return URL.createObjectURL(a)}).then(function(c){Object.assign(a,{blobUrl:c});return a})};
Sound.prototype.getMarkup=function(){return'\x3caudio src\x3d"'+this.blobUrl+'" preload\x3e\x3c/audio\x3e\x3cbutton\x3e'+this.name+"\x3c/button\x3e"};Sound.prototype.getMarkupAsElement=function(){var a=document.createElement("div");a.className="sound-wrapper";a.innerHTML=this.getMarkup();a.querySelector("button").addEventListener("click",this.buttonClickHandler,!1);return a};
var sounds=[new Sound({path:"der-odela-han-klippern",name:"Der \u00f8dela han klipperen \ud83e\udd16"}),new Sound({path:"fy-skamme-deg",name:"Fy skamme deg (ding ding, shame \ud83d\udd14)"}),new Sound({path:"kick-da-klipper",name:"Kicka da klipper \ud83d\udca5"}),new Sound({path:"neei",name:"Neei... \ud83d\ude14"}),new Sound({path:"oyvind-ma-du-se",name:"\u00d8yvind m\u00e5 du se! \ud83d\udc40"}),new Sound({path:"dying-klipper",name:"\ud83d\udea8 Klipper dying \ud83d\udc80"}),new Sound({path:"tomma-tradet-pa-applen",
name:"Han tommer tr\u00e6rne for epler \ud83c\udf33\ud83c\udf4e"})];function stopLoading(){document.body.classList.add("loaded")}var promises=sounds.map(function(a){return a.load()});Promise.all(promises).then(function(a){return a.map(function(a){return a.getMarkupAsElement()})}).then(function(a){a.forEach(function(a){document.querySelector("#soundboard").appendChild(a);stopLoading()})});
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }
/******/ ]);