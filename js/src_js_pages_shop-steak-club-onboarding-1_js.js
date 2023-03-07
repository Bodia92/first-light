"use strict";
(self["webpackChunkglivera_webpack_template"] = self["webpackChunkglivera_webpack_template"] || []).push([["src_js_pages_shop-steak-club-onboarding-1_js"],{

/***/ "./src/js/components/anchor-links.js":
/*!*******************************************!*\
  !*** ./src/js/components/anchor-links.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! gsap */ "./node_modules/gsap/index.js");
/* harmony import */ var gsap_ScrollToPlugin__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! gsap/ScrollToPlugin */ "./node_modules/gsap/ScrollToPlugin.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils */ "./src/js/utils/index.js");
/* harmony import */ var _utils_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/constants */ "./src/js/utils/constants.js");





var anchorLinks = function anchorLinks() {
  var $anchors = document.querySelectorAll('.js-anchor');

  if ((0,_utils__WEBPACK_IMPORTED_MODULE_0__.exist)($anchors.length)) {
    gsap__WEBPACK_IMPORTED_MODULE_2__["default"].registerPlugin(gsap_ScrollToPlugin__WEBPACK_IMPORTED_MODULE_3__["default"]);
    $anchors.forEach(function ($anchor) {
      $anchor.addEventListener('click', function (e) {
        var _$anchor$dataset;

        e.preventDefault();
        var blockClass = (_$anchor$dataset = $anchor.dataset) === null || _$anchor$dataset === void 0 ? void 0 : _$anchor$dataset.scrollTo;
        var $block = document.querySelector(blockClass);
        var $header = document.querySelector('.header');
        var offsetY = ((0,_utils__WEBPACK_IMPORTED_MODULE_0__.exist)($header) ? $header.offsetHeight : 0) + 30;
        if (!(0,_utils__WEBPACK_IMPORTED_MODULE_0__.exist)($block)) return;
        gsap__WEBPACK_IMPORTED_MODULE_2__["default"].to(window, {
          scrollTo: {
            y: $block,
            autoKill: false,
            offsetY: offsetY
          },
          ease: _utils_constants__WEBPACK_IMPORTED_MODULE_1__.DEFAULT_GSAP_EASE
        });
      });
    });
  }
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (anchorLinks);

/***/ }),

/***/ "./src/js/components/cooking-info-list.js":
/*!************************************************!*\
  !*** ./src/js/components/cooking-info-list.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var ScssComponents_cooking_info_list_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ScssComponents/cooking-info-list.scss */ "./src/scss/components/cooking-info-list.scss");


var cookingInfoList = function cookingInfoList() {};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (cookingInfoList);

/***/ }),

/***/ "./src/js/components/onboarding-form.js":
/*!**********************************************!*\
  !*** ./src/js/components/onboarding-form.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var ScssComponents_onboarding_form_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ScssComponents/onboarding-form.scss */ "./src/scss/components/onboarding-form.scss");


var onboardingForm = function onboardingForm() {};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (onboardingForm);

/***/ }),

/***/ "./src/js/components/step-form-head.js":
/*!*********************************************!*\
  !*** ./src/js/components/step-form-head.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var ScssComponents_step_form_head_mixin_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ScssComponents/step-form-head-mixin.scss */ "./src/scss/components/step-form-head-mixin.scss");


var stepFormHead = function stepFormHead() {};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (stepFormHead);

/***/ }),

/***/ "./src/js/pages/shop-steak-club-onboarding-1.js":
/*!******************************************************!*\
  !*** ./src/js/pages/shop-steak-club-onboarding-1.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var components_onboarding_form__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! components/onboarding-form */ "./src/js/components/onboarding-form.js");
/* harmony import */ var components_cooking_info_list__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! components/cooking-info-list */ "./src/js/components/cooking-info-list.js");
/* harmony import */ var components_anchor_links__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/anchor-links */ "./src/js/components/anchor-links.js");
/* harmony import */ var _components_step_form_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/step-form-head */ "./src/js/components/step-form-head.js");





var shopSteakClubOnboarding1 = function shopSteakClubOnboarding1() {
  (0,_components_step_form_head__WEBPACK_IMPORTED_MODULE_3__["default"])();
  (0,components_onboarding_form__WEBPACK_IMPORTED_MODULE_0__["default"])();
  (0,components_cooking_info_list__WEBPACK_IMPORTED_MODULE_1__["default"])();
  (0,components_anchor_links__WEBPACK_IMPORTED_MODULE_2__["default"])();
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (shopSteakClubOnboarding1);

/***/ }),

/***/ "./src/scss/components/cooking-info-list.scss":
/*!****************************************************!*\
  !*** ./src/scss/components/cooking-info-list.scss ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/scss/components/onboarding-form.scss":
/*!**************************************************!*\
  !*** ./src/scss/components/onboarding-form.scss ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/scss/components/step-form-head-mixin.scss":
/*!*******************************************************!*\
  !*** ./src/scss/components/step-form-head-mixin.scss ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

}]);
//# sourceMappingURL=src_js_pages_shop-steak-club-onboarding-1_js.js.map