"use strict";
(self["webpackChunkglivera_webpack_template"] = self["webpackChunkglivera_webpack_template"] || []).push([["src_js_pages_steak-club-griddle_js"],{

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

/***/ "./src/js/components/product-gallery.js":
/*!**********************************************!*\
  !*** ./src/js/components/product-gallery.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! swiper */ "./node_modules/swiper/swiper.esm.js");
/* harmony import */ var _fancyapps_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fancyapps/ui */ "./node_modules/@fancyapps/ui/dist/fancybox.esm.js");
/* harmony import */ var _fancyapps_ui_dist_fancybox_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fancyapps/ui/dist/fancybox.css */ "./node_modules/@fancyapps/ui/dist/fancybox.css");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils */ "./src/js/utils/index.js");
/* harmony import */ var ScssComponents_product_gallery_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ScssComponents/product-gallery.scss */ "./src/scss/components/product-gallery.scss");
/* harmony import */ var swiper_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! swiper/css */ "./node_modules/swiper/swiper.min.css");







var singleGallerySlider = function singleGallerySlider() {
  var mainSliderSelector = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '.js-product-gallery-main';
  var thumbSliderSelector = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '.js-product-gallery-thumbs';
  var btnNextSelector = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '.js-gallery-next-button';
  var btnPrevSelector = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : '.js-gallery-prev-button';
  var $mainSlider = document.querySelector(mainSliderSelector);
  var $thumbSlider = document.querySelector(thumbSliderSelector);
  if (!(0,_utils__WEBPACK_IMPORTED_MODULE_3__.exist)([$mainSlider, $thumbSlider])) return;
  swiper__WEBPACK_IMPORTED_MODULE_0__["default"].use([swiper__WEBPACK_IMPORTED_MODULE_0__.Navigation, swiper__WEBPACK_IMPORTED_MODULE_0__.Thumbs]);
  var $btnNext = document.querySelector(btnNextSelector);
  var $btnPrev = document.querySelector(btnPrevSelector);
  var thumbsSwiper = new swiper__WEBPACK_IMPORTED_MODULE_0__["default"]($thumbSlider, {
    spaceBetween: 10,
    slidesPerView: 3,
    freeMode: true,
    watchSlidesProgress: true
  });
  var mainSwiper = new swiper__WEBPACK_IMPORTED_MODULE_0__["default"]($mainSlider, {
    spaceBetween: 0,
    navigation: {
      nextEl: $btnNext,
      prevEl: $btnPrev
    },
    thumbs: {
      swiper: thumbsSwiper
    }
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (singleGallerySlider);

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

/***/ "./src/js/components/single-product-layout.js":
/*!****************************************************!*\
  !*** ./src/js/components/single-product-layout.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var ScssComponents_single_product_layout_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ScssComponents/single-product-layout.scss */ "./src/scss/components/single-product-layout.scss");


var singleProductLayout = function singleProductLayout() {};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (singleProductLayout);

/***/ }),

/***/ "./src/js/pages/steak-club-griddle.js":
/*!********************************************!*\
  !*** ./src/js/pages/steak-club-griddle.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var components_single_product_layout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! components/single-product-layout */ "./src/js/components/single-product-layout.js");
/* harmony import */ var components_product_gallery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! components/product-gallery */ "./src/js/components/product-gallery.js");
/* harmony import */ var components_featured_resources__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/featured-resources */ "./src/js/components/featured-resources.js");
/* harmony import */ var _fancyapps_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fancyapps/ui */ "./node_modules/@fancyapps/ui/dist/fancybox.esm.js");
/* harmony import */ var ScssComponents_article_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ScssComponents/article.scss */ "./src/scss/components/article.scss");
/* harmony import */ var _fancyapps_ui_dist_fancybox_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fancyapps/ui/dist/fancybox.css */ "./node_modules/@fancyapps/ui/dist/fancybox.css");







var steakClubGriddle = function steakClubGriddle() {
  (0,components_single_product_layout__WEBPACK_IMPORTED_MODULE_0__["default"])();
  (0,components_product_gallery__WEBPACK_IMPORTED_MODULE_1__["default"])();
  (0,components_featured_resources__WEBPACK_IMPORTED_MODULE_2__["default"])();
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (steakClubGriddle);

/***/ }),

/***/ "./src/scss/components/article.scss":
/*!******************************************!*\
  !*** ./src/scss/components/article.scss ***!
  \******************************************/
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

/***/ "./src/scss/components/product-gallery.scss":
/*!**************************************************!*\
  !*** ./src/scss/components/product-gallery.scss ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/scss/components/single-product-layout.scss":
/*!********************************************************!*\
  !*** ./src/scss/components/single-product-layout.scss ***!
  \********************************************************/
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
//# sourceMappingURL=src_js_pages_steak-club-griddle_js.js.map