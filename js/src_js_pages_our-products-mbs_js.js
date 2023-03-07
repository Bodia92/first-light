"use strict";
(self["webpackChunkglivera_webpack_template"] = self["webpackChunkglivera_webpack_template"] || []).push([["src_js_pages_our-products-mbs_js"],{

/***/ "./src/js/components/mbs-slider.js":
/*!*****************************************!*\
  !*** ./src/js/components/mbs-slider.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! swiper */ "./node_modules/swiper/swiper.esm.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils */ "./src/js/utils/index.js");
/* harmony import */ var swiper_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! swiper/css */ "./node_modules/swiper/swiper.min.css");
/* harmony import */ var swiper_css_effect_fade__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! swiper/css/effect-fade */ "./node_modules/swiper/modules/effect-fade/effect-fade.min.css");





var mbsSlider = function mbsSlider() {
  var sectionSelector = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '.js-mbs-section';
  var sliderSelector = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '.js-mbs-slider';
  var scrollbarSelector = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '.js-mbs-scrollbar';
  var prevArrowSelector = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : '.js-mbs-arrow-prev';
  var nextArrowSelector = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : '.js-mbs-arrow-next';
  var paginationSelector = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : '.js-mbs-pagination';
  var prevAdditionalArrowSelector = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : '.js-mbs-additional-arrow-prev';
  var nextAdditionalArrowSelector = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : '.js-mbs-additional-arrow-next';
  var $sections = document.querySelectorAll(sectionSelector);
  if (!(0,_utils__WEBPACK_IMPORTED_MODULE_1__.exist)($sections)) return;
  swiper__WEBPACK_IMPORTED_MODULE_0__["default"].use([swiper__WEBPACK_IMPORTED_MODULE_0__.Navigation, swiper__WEBPACK_IMPORTED_MODULE_0__.Pagination, swiper__WEBPACK_IMPORTED_MODULE_0__.EffectFade, swiper__WEBPACK_IMPORTED_MODULE_0__.Scrollbar]);
  $sections.forEach(function ($section) {
    var $slider = $section.querySelector(sliderSelector);
    var $scrollbar = $section.querySelector(scrollbarSelector);
    var $prevArrow = $section.querySelector(prevArrowSelector);
    var $nextArrow = $section.querySelector(nextArrowSelector);
    var $pagination = $section.querySelector(paginationSelector);
    if (!(0,_utils__WEBPACK_IMPORTED_MODULE_1__.exist)([$slider, $scrollbar, $prevArrow, $nextArrow, $pagination])) return;
    var paginationLabels = $pagination.dataset.labels ? $pagination.dataset.labels.split(',') : null;
    var mbsSwiper = new swiper__WEBPACK_IMPORTED_MODULE_0__["default"]($slider, {
      speed: 800,
      slidesPerView: 1,
      autoHeight: true,
      effect: 'fade',
      fadeEffect: {
        crossFade: true
      },
      navigation: {
        nextEl: $nextArrow,
        prevEl: $prevArrow
      },
      pagination: {
        el: $pagination,
        clickable: true,
        renderBullet: function renderBullet(index, className) {
          var increasedIndexValue = paginationLabels === null ? index + 1 : paginationLabels[index + 1];

          if (index === 0) {
            var value = paginationLabels === null ? index : paginationLabels[index];
            return "\n\t\t\t\t\t\t\t<span class=\"".concat(className, "\">").concat(value, "</span>\n\t\t\t\t\t\t\t<span class=\"").concat(className, "\">").concat(increasedIndexValue, "</span>\n\t\t\t\t\t\t");
          } else {
            return "<span class=\"".concat(className, "\">").concat(increasedIndexValue, "</span>");
          }
        }
      },
      scrollbar: {
        el: $scrollbar,
        draggable: true,
        dragSize: 213
      },
      breakpoints: {
        320: {
          scrollbar: {
            dragSize: 91
          }
        },
        1024: {
          scrollbar: {
            dragSize: 213
          }
        }
      }
    });
    $slider.addEventListener('click', function (e) {
      if (e.target.closest(prevAdditionalArrowSelector)) mbsSwiper.slidePrev();
      if (e.target.closest(nextAdditionalArrowSelector)) mbsSwiper.slideNext();
    });
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (mbsSlider);

/***/ }),

/***/ "./src/js/components/products-slider.js":
/*!**********************************************!*\
  !*** ./src/js/components/products-slider.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! swiper */ "./node_modules/swiper/swiper.esm.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils */ "./src/js/utils/index.js");
/* harmony import */ var ScssComponents_products_slider_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ScssComponents/products-slider.scss */ "./src/scss/components/products-slider.scss");
/* harmony import */ var ScssComponents_product_card_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ScssComponents/product-card.scss */ "./src/scss/components/product-card.scss");
/* harmony import */ var ScssComponents_universal_section_head_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ScssComponents/universal/section-head.scss */ "./src/scss/components/universal/section-head.scss");
/* harmony import */ var swiper_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! swiper/css */ "./node_modules/swiper/swiper.min.css");







var productSlider = function productSlider() {
  var sectionSelector = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '.js-products-section';
  var sliderSelector = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '.js-products-slider';
  var btnNextSelector = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '.js-products-next-button';
  var btnPrevSelector = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : '.js-products-prev-button';
  var $sections = document.querySelectorAll(sectionSelector);
  if (!(0,_utils__WEBPACK_IMPORTED_MODULE_1__.exist)($sections)) return;
  swiper__WEBPACK_IMPORTED_MODULE_0__["default"].use([swiper__WEBPACK_IMPORTED_MODULE_0__.Navigation]);
  $sections.forEach(function ($section) {
    var $slider = $section.querySelector(sliderSelector);
    var $btnNext = $section.querySelector(btnNextSelector);
    var $btnPrev = $section.querySelector(btnPrevSelector);
    if (!(0,_utils__WEBPACK_IMPORTED_MODULE_1__.exist)([$slider, $btnNext, $btnPrev])) return;
    var productsSwiper = new swiper__WEBPACK_IMPORTED_MODULE_0__["default"]($slider, {
      speed: 800,
      navigation: {
        nextEl: $btnNext,
        prevEl: $btnPrev
      },
      breakpoints: {
        320: {
          slidesPerView: 2
        },
        768: {
          slidesPerView: 3
        },
        1024: {
          slidesPerView: 4
        }
      }
    });
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (productSlider);

/***/ }),

/***/ "./src/js/pages/our-products-mbs.js":
/*!******************************************!*\
  !*** ./src/js/pages/our-products-mbs.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var components_products_slider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! components/products-slider */ "./src/js/components/products-slider.js");
/* harmony import */ var components_mbs_slider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! components/mbs-slider */ "./src/js/components/mbs-slider.js");



var ourProductsMbs = function ourProductsMbs() {
  (0,components_products_slider__WEBPACK_IMPORTED_MODULE_0__["default"])();
  (0,components_mbs_slider__WEBPACK_IMPORTED_MODULE_1__["default"])();
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ourProductsMbs);

/***/ }),

/***/ "./node_modules/swiper/modules/effect-fade/effect-fade.min.css":
/*!*********************************************************************!*\
  !*** ./node_modules/swiper/modules/effect-fade/effect-fade.min.css ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/scss/components/product-card.scss":
/*!***********************************************!*\
  !*** ./src/scss/components/product-card.scss ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/scss/components/products-slider.scss":
/*!**************************************************!*\
  !*** ./src/scss/components/products-slider.scss ***!
  \**************************************************/
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
//# sourceMappingURL=src_js_pages_our-products-mbs_js.js.map