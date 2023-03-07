"use strict";
(self["webpackChunkglivera_webpack_template"] = self["webpackChunkglivera_webpack_template"] || []).push([["src_js_pages_our-products-wagyu-cuts_butchery2_js"],{

/***/ "./src/js/components/cuts-info.js":
/*!****************************************!*\
  !*** ./src/js/components/cuts-info.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var ScssComponents_cuts_info_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ScssComponents/cuts-info.scss */ "./src/scss/components/cuts-info.scss");
/* harmony import */ var ScssComponents_product_pairs_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ScssComponents/product-pairs.scss */ "./src/scss/components/product-pairs.scss");
/* harmony import */ var _fancyapps_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fancyapps/ui */ "./node_modules/@fancyapps/ui/dist/fancybox.esm.js");
/* harmony import */ var _fancyapps_ui_dist_fancybox_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fancyapps/ui/dist/fancybox.css */ "./node_modules/@fancyapps/ui/dist/fancybox.css");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils */ "./src/js/utils/index.js");
/* harmony import */ var ScssComponents_universal_slider_controls_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ScssComponents/universal/slider-controls.scss */ "./src/scss/components/universal/slider-controls.scss");







var cutsInfo = function cutsInfo() {
  var sectionSelector = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '.js-cuts-info';
  var classLink = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '.cuts_info__area';
  var classLabel = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '.cuts_info__label';
  var content = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : '.js-cuts-info-content';
  var classContent = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : '.cuts_info__content';
  var btnNextSelector = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : '.js-cuts-info-next-button';
  var btnPrevSelector = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : '.js-cuts-info-prev-button';
  var controlSvg = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : '.js-control-svg';
  var activeTab = 0;
  var arrayTabs = {};
  var $sections = document.querySelectorAll(sectionSelector);
  if (!(0,_utils__WEBPACK_IMPORTED_MODULE_4__.exist)($sections)) return;
  $sections.forEach(function ($section) {
    var $btnNext = $section.querySelector(btnNextSelector);
    var $btnPrev = $section.querySelector(btnPrevSelector);
    var $controlSvg = $section.querySelector(controlSvg);
    var $controlSvgArea = $controlSvg.getElementById('areas');
    var $controlSvgLabel = $controlSvg.getElementById('labels');
    if (!(0,_utils__WEBPACK_IMPORTED_MODULE_4__.exist)([$btnNext, $btnPrev, $controlSvg])) return;
    var $linkSelector = $controlSvgArea.querySelectorAll(classLink);
    var $svgLabels = $controlSvgLabel.querySelectorAll(classLabel);
    if (!$linkSelector.length) return;
    var activeLinkClass = "".concat(classLink.slice(1), "--active_state");
    var activeLabelClass = "".concat(classLabel.slice(1), "--active_state");
    var activeContentClass = "".concat(classContent.slice(1), "--active_state");
    $linkSelector.forEach(function (item) {
      var $linkPath = item;
      var content = $section.querySelector("[data-tab-content = '".concat($linkPath.dataset.tab, "']"));
      var label = $section.querySelector("[data-tab-label = '".concat($linkPath.dataset.tab, "']"));
      if (!content) return;
      arrayTabs[item.dataset.tab] = {
        trigger: item,
        label: label,
        content: content
      };
    });

    var addActiveState = function addActiveState() {
      var _arrayTabs$activeTab, _arrayTabs$activeTab$, _arrayTabs$activeTab2, _arrayTabs$activeTab3, _arrayTabs$activeTab4, _arrayTabs$activeTab5;

      (_arrayTabs$activeTab = arrayTabs[activeTab]) === null || _arrayTabs$activeTab === void 0 ? void 0 : (_arrayTabs$activeTab$ = _arrayTabs$activeTab.trigger) === null || _arrayTabs$activeTab$ === void 0 ? void 0 : _arrayTabs$activeTab$.classList.add(activeLinkClass);
      (_arrayTabs$activeTab2 = arrayTabs[activeTab]) === null || _arrayTabs$activeTab2 === void 0 ? void 0 : (_arrayTabs$activeTab3 = _arrayTabs$activeTab2.label) === null || _arrayTabs$activeTab3 === void 0 ? void 0 : _arrayTabs$activeTab3.classList.add(activeLabelClass);
      (_arrayTabs$activeTab4 = arrayTabs[activeTab]) === null || _arrayTabs$activeTab4 === void 0 ? void 0 : (_arrayTabs$activeTab5 = _arrayTabs$activeTab4.content) === null || _arrayTabs$activeTab5 === void 0 ? void 0 : _arrayTabs$activeTab5.classList.add(activeContentClass);
    };

    var removeActiveState = function removeActiveState() {
      var _arrayTabs$activeTab6, _arrayTabs$activeTab7, _arrayTabs$activeTab8, _arrayTabs$activeTab9, _arrayTabs$activeTab10, _arrayTabs$activeTab11;

      (_arrayTabs$activeTab6 = arrayTabs[activeTab]) === null || _arrayTabs$activeTab6 === void 0 ? void 0 : (_arrayTabs$activeTab7 = _arrayTabs$activeTab6.trigger) === null || _arrayTabs$activeTab7 === void 0 ? void 0 : _arrayTabs$activeTab7.classList.remove(activeLinkClass);
      (_arrayTabs$activeTab8 = arrayTabs[activeTab]) === null || _arrayTabs$activeTab8 === void 0 ? void 0 : (_arrayTabs$activeTab9 = _arrayTabs$activeTab8.label) === null || _arrayTabs$activeTab9 === void 0 ? void 0 : _arrayTabs$activeTab9.classList.remove(activeLabelClass);
      (_arrayTabs$activeTab10 = arrayTabs[activeTab]) === null || _arrayTabs$activeTab10 === void 0 ? void 0 : (_arrayTabs$activeTab11 = _arrayTabs$activeTab10.content) === null || _arrayTabs$activeTab11 === void 0 ? void 0 : _arrayTabs$activeTab11.classList.remove(activeContentClass);
    };

    $btnNext.addEventListener('click', function () {
      removeActiveState();
      activeTab = activeTab >= Object.values(arrayTabs).length - 1 ? 0 : activeTab + 1;
      addActiveState();
    });
    $btnPrev.addEventListener('click', function () {
      removeActiveState();
      activeTab = activeTab === 0 ? Object.values(arrayTabs).length - 1 : activeTab - 1;
      addActiveState();
    });
    $controlSvg.addEventListener('click', function (e) {
      var dataset = e.target.dataset;

      if (dataset && dataset.tab) {
        removeActiveState();
        activeTab = Number(dataset.tab);
        addActiveState();
      }
    });
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (cutsInfo);

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

/***/ "./src/js/components/text-section.js":
/*!*******************************************!*\
  !*** ./src/js/components/text-section.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var ScssComponents_text_section_mixin_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ScssComponents/text-section-mixin.scss */ "./src/scss/components/text-section-mixin.scss");


var textSection = function textSection() {};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (textSection);

/***/ }),

/***/ "./src/js/pages/our-products-wagyu-cuts&butchery2.js":
/*!***********************************************************!*\
  !*** ./src/js/pages/our-products-wagyu-cuts&butchery2.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var components_cuts_info__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! components/cuts-info */ "./src/js/components/cuts-info.js");
/* harmony import */ var components_text_section__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! components/text-section */ "./src/js/components/text-section.js");
/* harmony import */ var components_products_slider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/products-slider */ "./src/js/components/products-slider.js");




var ourProductsWagyuCutsButchery2 = function ourProductsWagyuCutsButchery2() {
  (0,components_text_section__WEBPACK_IMPORTED_MODULE_1__["default"])();
  (0,components_cuts_info__WEBPACK_IMPORTED_MODULE_0__["default"])();
  (0,components_products_slider__WEBPACK_IMPORTED_MODULE_2__["default"])();
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ourProductsWagyuCutsButchery2);

/***/ }),

/***/ "./src/scss/components/cuts-info.scss":
/*!********************************************!*\
  !*** ./src/scss/components/cuts-info.scss ***!
  \********************************************/
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

/***/ "./src/scss/components/product-pairs.scss":
/*!************************************************!*\
  !*** ./src/scss/components/product-pairs.scss ***!
  \************************************************/
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

/***/ "./src/scss/components/text-section-mixin.scss":
/*!*****************************************************!*\
  !*** ./src/scss/components/text-section-mixin.scss ***!
  \*****************************************************/
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

/***/ "./src/scss/components/universal/slider-controls.scss":
/*!************************************************************!*\
  !*** ./src/scss/components/universal/slider-controls.scss ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

}]);
//# sourceMappingURL=src_js_pages_our-products-wagyu-cuts_butchery2_js.js.map