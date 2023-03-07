"use strict";
(self["webpackChunkglivera_webpack_template"] = self["webpackChunkglivera_webpack_template"] || []).push([["src_js_pages_shop-steak-club-onboarding-2_js"],{

/***/ "./src/js/components/build-swiper.js":
/*!*******************************************!*\
  !*** ./src/js/components/build-swiper.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "buildSwiper": () => (/* binding */ buildSwiper),
/* harmony export */   "removeSwiper": () => (/* binding */ removeSwiper)
/* harmony export */ });
var buildSwiper = function buildSwiper(sliderNode) {
  if (!sliderNode) return;
  var $slider = sliderNode;
  var $slides = $slider.children;
  if (!$slides.length) return;
  $slider.classList.add('swiper');
  Array.from($slides).forEach(function ($slide) {
    return $slide.classList.add('swiper-slide');
  });
  var htmlStructure = "<div class=\"swiper-wrapper\">".concat($slider.innerHTML, "</div>");
  $slider.innerHTML = htmlStructure;
};
var removeSwiper = function removeSwiper(sliderNode) {
  if (!sliderNode) return;
  var $slider = sliderNode;
  var $wrapper = $slider.querySelector('.swiper-wrapper');
  var $slides = $wrapper.children;
  if (!$slides.length) return;
  $slider.classList.remove('swiper');
  Array.from($slides).forEach(function ($slide) {
    return $slide.classList.remove('swiper-slide');
  });
  $slider.innerHTML = $wrapper.innerHTML;
};

/***/ }),

/***/ "./src/js/components/members-slider.js":
/*!*********************************************!*\
  !*** ./src/js/components/members-slider.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! swiper */ "./node_modules/swiper/swiper.esm.js");
/* harmony import */ var _fancyapps_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fancyapps/ui */ "./node_modules/@fancyapps/ui/dist/fancybox.esm.js");
/* harmony import */ var _fancyapps_ui_dist_fancybox_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fancyapps/ui/dist/fancybox.css */ "./node_modules/@fancyapps/ui/dist/fancybox.css");
/* harmony import */ var swiper_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! swiper/css */ "./node_modules/swiper/swiper.min.css");
/* harmony import */ var swiper_scss_effect_fade__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! swiper/scss/effect-fade */ "./node_modules/swiper/modules/effect-fade/effect-fade.scss");
/* harmony import */ var ScssComponents_universal_section_head_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ScssComponents/universal/section-head.scss */ "./src/scss/components/universal/section-head.scss");
/* harmony import */ var ScssComponents_universal_members_slider_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ScssComponents/universal/members-slider.scss */ "./src/scss/components/universal/members-slider.scss");
/* harmony import */ var ScssComponents_universal_members_slider_section_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ScssComponents/universal/members-slider-section.scss */ "./src/scss/components/universal/members-slider-section.scss");
/* harmony import */ var ScssComponents_universal_slider_controls_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ScssComponents/universal/slider-controls.scss */ "./src/scss/components/universal/slider-controls.scss");
/* harmony import */ var utils__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! utils */ "./src/js/utils/index.js");
/* harmony import */ var _build_swiper__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./build-swiper */ "./src/js/components/build-swiper.js");












var membersSlider = function membersSlider() {
  var classNames = {
    slider: '.js-member-slider',
    arrowNext: '.js-member-slider-next',
    arrowPrev: '.js-member-slider-prev',
    pagination: '.js-member-slider-pagination'
  };
  var $sliders = document.querySelectorAll(classNames.slider);
  if (!(0,utils__WEBPACK_IMPORTED_MODULE_9__.exist)($sliders)) return;
  $sliders.forEach(function ($slider) {
    var sliderId = $slider.getAttribute('id');

    if (!sliderId) {
      console.log('-----'); //!

      console.error('Please, set unique id for members slider');
      console.log('-----'); //!

      return;
    }

    (0,_build_swiper__WEBPACK_IMPORTED_MODULE_10__.buildSwiper)($slider);
    var sliderInstance = new swiper__WEBPACK_IMPORTED_MODULE_0__["default"]($slider, {
      modules: [swiper__WEBPACK_IMPORTED_MODULE_0__.Navigation, swiper__WEBPACK_IMPORTED_MODULE_0__.Pagination, swiper__WEBPACK_IMPORTED_MODULE_0__.EffectFade],
      speed: 400,
      loop: true,
      effect: 'fade',
      fadeEffect: {
        crossFade: true
      },
      navigation: {
        prevEl: "#".concat(sliderId, " ").concat(classNames.arrowPrev),
        nextEl: "#".concat(sliderId, " ").concat(classNames.arrowNext)
      },
      pagination: {
        el: "#".concat(sliderId, " ").concat(classNames.pagination),
        type: 'fraction',
        clickable: true
      },
      slidesPerView: 1
    });
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (membersSlider);

/***/ }),

/***/ "./src/js/components/onboarding-2.js":
/*!*******************************************!*\
  !*** ./src/js/components/onboarding-2.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var ScssComponents_step_form_list_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ScssComponents/step-form-list.scss */ "./src/scss/components/step-form-list.scss");
/* harmony import */ var ScssComponents_step_form_head_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ScssComponents/step-form-head.scss */ "./src/scss/components/step-form-head.scss");
/* harmony import */ var _quiz_item__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./quiz-item */ "./src/js/components/quiz-item.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils */ "./src/js/utils/index.js");





var onboarding2 = function onboarding2() {
  (0,_quiz_item__WEBPACK_IMPORTED_MODULE_2__["default"])();
  var selectors = {
    quizInput: '.js-quiz-input',
    onboarding: '.js-onboarding'
  };
  var classnames = {
    onboardingActiveState: 'onboarding_2--active_state'
  };
  var $inputCheck = document.querySelectorAll(selectors.quizInput);
  if (!(0,_utils__WEBPACK_IMPORTED_MODULE_3__.exist)($inputCheck)) return;
  var $onboarding = document.querySelector(selectors.onboarding);
  $inputCheck.forEach(function ($input) {
    document.addEventListener('click', function (e) {
      var targetElement = e.target;

      if (targetElement.closest(selectors.quizInput) && $input.checked) {
        $onboarding.classList.add(classnames.onboardingActiveState);
      }
    });
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (onboarding2);

/***/ }),

/***/ "./src/js/components/quiz-item.js":
/*!****************************************!*\
  !*** ./src/js/components/quiz-item.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var ScssComponents_quiz_item_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ScssComponents/quiz-item.scss */ "./src/scss/components/quiz-item.scss");
// import accordion from './accordion';


var quizItem = function quizItem() {// accordion('quiz_item__body--active_state');
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (quizItem);

/***/ }),

/***/ "./src/js/components/shipments-included.js":
/*!*************************************************!*\
  !*** ./src/js/components/shipments-included.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var ScssComponents_product_pairs_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ScssComponents/product-pairs.scss */ "./src/scss/components/product-pairs.scss");
/* harmony import */ var ScssComponents_pairs_list_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ScssComponents/pairs-list.scss */ "./src/scss/components/pairs-list.scss");



var shipmentsIncluded = function shipmentsIncluded() {};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (shipmentsIncluded);

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

/***/ "./src/js/components/step-form-progress.js":
/*!*************************************************!*\
  !*** ./src/js/components/step-form-progress.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var ScssComponents_step_form_progress_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ScssComponents/step-form-progress.scss */ "./src/scss/components/step-form-progress.scss");


var stepFormProgress = function stepFormProgress() {};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (stepFormProgress);

/***/ }),

/***/ "./src/js/pages/shop-steak-club-onboarding-2.js":
/*!******************************************************!*\
  !*** ./src/js/pages/shop-steak-club-onboarding-2.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var ScssComponents_universal_shipments_included_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ScssComponents/universal/shipments-included.scss */ "./src/scss/components/universal/shipments-included.scss");
/* harmony import */ var ScssComponents_step_form_list_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ScssComponents/step-form-list.scss */ "./src/scss/components/step-form-list.scss");
/* harmony import */ var components_members_slider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/members-slider */ "./src/js/components/members-slider.js");
/* harmony import */ var components_step_form_progress__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/step-form-progress */ "./src/js/components/step-form-progress.js");
/* harmony import */ var _components_step_form_head__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/step-form-head */ "./src/js/components/step-form-head.js");
/* harmony import */ var _components_quiz_item__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/quiz-item */ "./src/js/components/quiz-item.js");
/* harmony import */ var _components_shipments_included__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/shipments-included */ "./src/js/components/shipments-included.js");
/* harmony import */ var _components_onboarding_2__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/onboarding-2 */ "./src/js/components/onboarding-2.js");









var shopSteakClub = function shopSteakClub() {
  (0,_components_step_form_head__WEBPACK_IMPORTED_MODULE_4__["default"])();
  (0,components_step_form_progress__WEBPACK_IMPORTED_MODULE_3__["default"])();
  (0,_components_quiz_item__WEBPACK_IMPORTED_MODULE_5__["default"])();
  (0,components_members_slider__WEBPACK_IMPORTED_MODULE_2__["default"])();
  (0,_components_shipments_included__WEBPACK_IMPORTED_MODULE_6__["default"])();
  (0,_components_onboarding_2__WEBPACK_IMPORTED_MODULE_7__["default"])();
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (shopSteakClub);

/***/ }),

/***/ "./node_modules/swiper/modules/effect-fade/effect-fade.scss":
/*!******************************************************************!*\
  !*** ./node_modules/swiper/modules/effect-fade/effect-fade.scss ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/scss/components/pairs-list.scss":
/*!*********************************************!*\
  !*** ./src/scss/components/pairs-list.scss ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/scss/components/product-pairs.scss":
/*!************************************************!*\
  !*** ./src/scss/components/product-pairs.scss ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/scss/components/quiz-item.scss":
/*!********************************************!*\
  !*** ./src/scss/components/quiz-item.scss ***!
  \********************************************/
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


/***/ }),

/***/ "./src/scss/components/step-form-head.scss":
/*!*************************************************!*\
  !*** ./src/scss/components/step-form-head.scss ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/scss/components/step-form-list.scss":
/*!*************************************************!*\
  !*** ./src/scss/components/step-form-list.scss ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/scss/components/step-form-progress.scss":
/*!*****************************************************!*\
  !*** ./src/scss/components/step-form-progress.scss ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/scss/components/universal/members-slider-section.scss":
/*!*******************************************************************!*\
  !*** ./src/scss/components/universal/members-slider-section.scss ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/scss/components/universal/members-slider.scss":
/*!***********************************************************!*\
  !*** ./src/scss/components/universal/members-slider.scss ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/scss/components/universal/section-head.scss":
/*!*********************************************************!*\
  !*** ./src/scss/components/universal/section-head.scss ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/scss/components/universal/shipments-included.scss":
/*!***************************************************************!*\
  !*** ./src/scss/components/universal/shipments-included.scss ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/scss/components/universal/slider-controls.scss":
/*!************************************************************!*\
  !*** ./src/scss/components/universal/slider-controls.scss ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

}]);
//# sourceMappingURL=src_js_pages_shop-steak-club-onboarding-2_js.js.map