"use strict";
(self["webpackChunkglivera_webpack_template"] = self["webpackChunkglivera_webpack_template"] || []).push([["src_js_pages_resour_es_js"],{

/***/ "./src/js/components/banner-v2.js":
/*!****************************************!*\
  !*** ./src/js/components/banner-v2.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var ScssComponents_banner_v2_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ScssComponents/banner-v2.scss */ "./src/scss/components/banner-v2.scss");


var bannerV2 = function bannerV2() {};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (bannerV2);

/***/ }),

/***/ "./src/js/components/category-list-resourсes.js":
/*!******************************************************!*\
  !*** ./src/js/components/category-list-resourсes.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var ScssComponents_category_list_resour_es_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ScssComponents/category-list-resourсes.scss */ "./src/scss/components/category-list-resourсes.scss");
/* harmony import */ var ScssComponents_category_list_link_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ScssComponents/category-list-link.scss */ "./src/scss/components/category-list-link.scss");



var categoryListResourсes = function categoryListResourсes() {};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (categoryListResourсes);

/***/ }),

/***/ "./src/js/components/category-slider.js":
/*!**********************************************!*\
  !*** ./src/js/components/category-slider.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! swiper */ "./node_modules/swiper/swiper.esm.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils */ "./src/js/utils/index.js");
/* harmony import */ var swiper_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! swiper/css */ "./node_modules/swiper/swiper.min.css");
/* harmony import */ var ScssComponents_category_titled_slider_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ScssComponents/category-titled-slider.scss */ "./src/scss/components/category-titled-slider.scss");
/* harmony import */ var ScssComponents_universal_section_head_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ScssComponents/universal/section-head.scss */ "./src/scss/components/universal/section-head.scss");
/* harmony import */ var ScssComponents_category_slider_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ScssComponents/category-slider.scss */ "./src/scss/components/category-slider.scss");
/* harmony import */ var ScssComponents_category_item_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ScssComponents/category-item.scss */ "./src/scss/components/category-item.scss");








var categorySlider = function categorySlider() {
  var sectionSelector = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '.js-category-section';
  var sliderSelector = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '.js-category-slider';
  var btnNextSelector = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '.js-category-next-button';
  var btnPrevSelector = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : '.js-category-prev-button';
  var $sections = document.querySelectorAll(sectionSelector);
  if (!(0,_utils__WEBPACK_IMPORTED_MODULE_1__.exist)($sections)) return;
  swiper__WEBPACK_IMPORTED_MODULE_0__["default"].use([swiper__WEBPACK_IMPORTED_MODULE_0__.Navigation]);
  $sections.forEach(function ($section) {
    var $slider = $section.querySelector(sliderSelector);
    var $btnNext = $section.querySelector(btnNextSelector);
    var $btnPrev = $section.querySelector(btnPrevSelector);
    if (!(0,_utils__WEBPACK_IMPORTED_MODULE_1__.exist)([$slider, $btnNext, $btnPrev])) return;
    var categorySwiper = new swiper__WEBPACK_IMPORTED_MODULE_0__["default"]($slider, {
      speed: 800,
      navigation: {
        nextEl: $btnNext,
        prevEl: $btnPrev
      },
      breakpoints: {
        320: {
          slidesPerView: 1.44
        },
        768: {
          slidesPerView: 2.6
        },
        1024: {
          slidesPerView: 3
        }
      }
    });
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (categorySlider);

/***/ }),

/***/ "./src/js/components/featured-resources.js":
/*!*************************************************!*\
  !*** ./src/js/components/featured-resources.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _resources_slider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./resources-slider */ "./src/js/components/resources-slider.js");
/* harmony import */ var ScssComponents_featured_resources_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ScssComponents/featured-resources.scss */ "./src/scss/components/featured-resources.scss");
/* harmony import */ var ScssComponents_info_card_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ScssComponents/info-card.scss */ "./src/scss/components/info-card.scss");
/* harmony import */ var ScssComponents_universal_section_head_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ScssComponents/universal/section-head.scss */ "./src/scss/components/universal/section-head.scss");





var featuredResources = function featuredResources() {
  (0,_resources_slider__WEBPACK_IMPORTED_MODULE_0__["default"])();
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (featuredResources);

/***/ }),

/***/ "./src/js/components/resources-slider.js":
/*!***********************************************!*\
  !*** ./src/js/components/resources-slider.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! swiper */ "./node_modules/swiper/swiper.esm.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils */ "./src/js/utils/index.js");
/* harmony import */ var swiper_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! swiper/css */ "./node_modules/swiper/swiper.min.css");




var resourcesSlider = function resourcesSlider() {
  var sectionSelector = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '.js-resources-section';
  var sliderSelector = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '.js-resources-slider';
  var btnNextSelector = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '.js-resources-next-button';
  var btnPrevSelector = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : '.js-resources-prev-button';
  var $sections = document.querySelectorAll(sectionSelector);
  if (!(0,_utils__WEBPACK_IMPORTED_MODULE_1__.exist)($sections)) return;
  swiper__WEBPACK_IMPORTED_MODULE_0__["default"].use([swiper__WEBPACK_IMPORTED_MODULE_0__.Navigation]);
  $sections.forEach(function ($section) {
    var $slider = $section.querySelector(sliderSelector);
    var $btnNext = $section.querySelector(btnNextSelector);
    var $btnPrev = $section.querySelector(btnPrevSelector);
    if (!(0,_utils__WEBPACK_IMPORTED_MODULE_1__.exist)([$slider, $btnNext, $btnPrev])) return;
    var resourcesSwiper = new swiper__WEBPACK_IMPORTED_MODULE_0__["default"]($slider, {
      speed: 800,
      slidesPerView: 'auto',
      navigation: {
        nextEl: $btnNext,
        prevEl: $btnPrev
      }
    });
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (resourcesSlider);

/***/ }),

/***/ "./src/js/pages/resourсes.js":
/*!***********************************!*\
  !*** ./src/js/pages/resourсes.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var components_featured_resources__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! components/featured-resources */ "./src/js/components/featured-resources.js");
/* harmony import */ var components_category_list_resour_es__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! components/category-list-resourсes */ "./src/js/components/category-list-resourсes.js");
/* harmony import */ var components_banner_v2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/banner-v2 */ "./src/js/components/banner-v2.js");
/* harmony import */ var components_category_slider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/category-slider */ "./src/js/components/category-slider.js");





var resourсes = function resourсes() {
  (0,components_featured_resources__WEBPACK_IMPORTED_MODULE_0__["default"])();
  (0,components_category_list_resour_es__WEBPACK_IMPORTED_MODULE_1__["default"])();
  (0,components_banner_v2__WEBPACK_IMPORTED_MODULE_2__["default"])();
  (0,components_category_slider__WEBPACK_IMPORTED_MODULE_3__["default"])();
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (resourсes);

/***/ }),

/***/ "./src/scss/components/banner-v2.scss":
/*!********************************************!*\
  !*** ./src/scss/components/banner-v2.scss ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/scss/components/category-item.scss":
/*!************************************************!*\
  !*** ./src/scss/components/category-item.scss ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/scss/components/category-list-link.scss":
/*!*****************************************************!*\
  !*** ./src/scss/components/category-list-link.scss ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/scss/components/category-list-resourсes.scss":
/*!**********************************************************!*\
  !*** ./src/scss/components/category-list-resourсes.scss ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/scss/components/category-slider.scss":
/*!**************************************************!*\
  !*** ./src/scss/components/category-slider.scss ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/scss/components/category-titled-slider.scss":
/*!*********************************************************!*\
  !*** ./src/scss/components/category-titled-slider.scss ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/scss/components/featured-resources.scss":
/*!*****************************************************!*\
  !*** ./src/scss/components/featured-resources.scss ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/scss/components/info-card.scss":
/*!********************************************!*\
  !*** ./src/scss/components/info-card.scss ***!
  \********************************************/
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


/***/ })

}]);
//# sourceMappingURL=src_js_pages_resour_es_js.js.map