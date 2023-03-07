"use strict";
(self["webpackChunkglivera_webpack_template"] = self["webpackChunkglivera_webpack_template"] || []).push([["src_js_pages_our-products-wagyu-cooking-tips_js"],{

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

/***/ "./src/js/components/cooking-details.js":
/*!**********************************************!*\
  !*** ./src/js/components/cooking-details.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var ScssComponents_cooking_details_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ScssComponents/cooking-details.scss */ "./src/scss/components/cooking-details.scss");


var cookingDetails = function cookingDetails() {};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (cookingDetails);

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

/***/ "./src/js/components/cooking-tabs.js":
/*!*******************************************!*\
  !*** ./src/js/components/cooking-tabs.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! swiper */ "./node_modules/swiper/swiper.esm.js");
/* harmony import */ var _build_swiper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./build-swiper */ "./src/js/components/build-swiper.js");
/* harmony import */ var ScssComponents_cooking_tabs_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ScssComponents/cooking-tabs.scss */ "./src/scss/components/cooking-tabs.scss");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils */ "./src/js/utils/index.js");
/* harmony import */ var _tabs_navigation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./tabs-navigation */ "./src/js/components/tabs-navigation.js");
/* harmony import */ var swiper_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! swiper/css */ "./node_modules/swiper/swiper.min.css");
/* harmony import */ var swiper_css_effect_fade__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! swiper/css/effect-fade */ "./node_modules/swiper/modules/effect-fade/effect-fade.min.css");
/* harmony import */ var swiper_css_thumbs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! swiper/css/thumbs */ "./node_modules/swiper/modules/thumbs/thumbs.min.css");





 // import 'swiper/scss/scrollbar';




var cookingTabs = function cookingTabs(_ref) {
  var _ref$sectionSelector = _ref.sectionSelector,
      sectionSelector = _ref$sectionSelector === void 0 ? '.js-cooking-tabs' : _ref$sectionSelector,
      _ref$btnNext = _ref.btnNext,
      btnNext = _ref$btnNext === void 0 ? '.js-cooking-tab-next-button' : _ref$btnNext,
      _ref$btnPrev = _ref.btnPrev,
      btnPrev = _ref$btnPrev === void 0 ? '.js-cooking-tab-prev-button' : _ref$btnPrev,
      _ref$content = _ref.content,
      content = _ref$content === void 0 ? '.js-cooking-tabs-content' : _ref$content,
      _ref$nav = _ref.nav,
      nav = _ref$nav === void 0 ? '.js-cooking-tabs-nav' : _ref$nav;
  var $sections = document.querySelectorAll(sectionSelector);
  if (!(0,_utils__WEBPACK_IMPORTED_MODULE_3__.exist)($sections)) return;
  $sections.forEach(function ($section) {
    var $slider = $section.querySelector(content);
    var $nav = $section.querySelector(nav);
    var $prevArrow = $section.querySelector(btnPrev);
    var $nextArrow = $section.querySelector(btnNext);
    if (!(0,_utils__WEBPACK_IMPORTED_MODULE_3__.exist)([$prevArrow, $nextArrow, $slider, $nav])) return;
    swiper__WEBPACK_IMPORTED_MODULE_0__["default"].use([swiper__WEBPACK_IMPORTED_MODULE_0__.Navigation, swiper__WEBPACK_IMPORTED_MODULE_0__.Thumbs, swiper__WEBPACK_IMPORTED_MODULE_0__.EffectFade]);
    var thumbsInstance = new swiper__WEBPACK_IMPORTED_MODULE_0__["default"]($nav, {
      speed: 400,
      navigation: {
        prevEl: $prevArrow,
        nextEl: $nextArrow
      },
      slidesPerView: 'auto',
      watchSlidesProgress: true,
      centeredSlides: true,
      breakpoints: {
        1023: {
          centeredSlides: false
        }
      }
    });
    var sliderInstance = new swiper__WEBPACK_IMPORTED_MODULE_0__["default"]($slider, {
      slidesPerView: 1,
      autoHeight: true,
      // calculateHeight: true,
      speed: 400,
      thumbs: {
        swiper: thumbsInstance
      },
      navigation: {
        prevEl: $prevArrow,
        nextEl: $nextArrow
      },
      effect: 'fade',
      fadeEffect: {
        crossFade: true
      }
    });
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (cookingTabs);

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

/***/ "./src/js/components/roasting-times.js":
/*!*********************************************!*\
  !*** ./src/js/components/roasting-times.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var ScssComponents_roasting_times_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ScssComponents/roasting-times.scss */ "./src/scss/components/roasting-times.scss");
/* harmony import */ var ScssComponents_universal_slider_controls_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ScssComponents/universal/slider-controls.scss */ "./src/scss/components/universal/slider-controls.scss");
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! swiper */ "./node_modules/swiper/swiper.esm.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils */ "./src/js/utils/index.js");
/* harmony import */ var _utils_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/constants */ "./src/js/utils/constants.js");
/* harmony import */ var swiper_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! swiper/css */ "./node_modules/swiper/swiper.min.css");







var roastingTimes = function roastingTimes() {
  var sliderSelector = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '.js-roasting-times-slider';
  var btnNextSelector = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '.js-roasting-times-next-button';
  var btnPrevSelector = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '.js-roasting-times-prev-button';
  swiper__WEBPACK_IMPORTED_MODULE_2__["default"].use([swiper__WEBPACK_IMPORTED_MODULE_2__.Navigation]);
  var $slider = document.querySelector(sliderSelector);
  var $btnNext = document.querySelector(btnNextSelector);
  var $btnPrev = document.querySelector(btnPrevSelector);
  if (!(0,_utils__WEBPACK_IMPORTED_MODULE_3__.exist)([$slider, $btnNext, $btnPrev])) return;
  var roastingSwiper;

  var initSwiper = function initSwiper() {
    return new swiper__WEBPACK_IMPORTED_MODULE_2__["default"]($slider, {
      speed: 800,
      loop: false,
      navigation: {
        nextEl: $btnNext,
        prevEl: $btnPrev
      },
      slidesPerView: 2.06
    });
  };

  (0,_utils__WEBPACK_IMPORTED_MODULE_3__.onWindowResize)(function () {
    if ((0,_utils__WEBPACK_IMPORTED_MODULE_3__.getWindowSize)().windowWidth < _utils_constants__WEBPACK_IMPORTED_MODULE_4__.BREAKPOINTS.mediaPoint1) {
      if (!roastingSwiper) {
        roastingSwiper = initSwiper();
      }
    } else {
      if (roastingSwiper) {
        roastingSwiper.destroy();
        roastingSwiper = null;
      }
    }
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (roastingTimes);

/***/ }),

/***/ "./src/js/components/tabs-navigation.js":
/*!**********************************************!*\
  !*** ./src/js/components/tabs-navigation.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils */ "./src/js/utils/index.js");


var tabsNavigation = function tabsNavigation(_ref) {
  var sectionSelector = _ref.sectionSelector,
      link = _ref.link,
      block = _ref.block,
      classLink = _ref.classLink,
      classContent = _ref.classContent,
      btnNext = _ref.btnNext,
      btnPrev = _ref.btnPrev;
  var $sections = document.querySelectorAll(sectionSelector);
  if (!(0,_utils__WEBPACK_IMPORTED_MODULE_0__.exist)($sections)) return;
  $sections.forEach(function ($section) {
    var activeLinkClass = "".concat(classLink.slice(1), "--active_state");
    var activeContentClass = "".concat(classContent.slice(1), "--active_state");
    var $linkSelector = $section.querySelectorAll(link);
    var $blockSelector = $section.querySelectorAll(block);
    var $btnNext = $section.querySelector(btnNext);
    var $btnPrev = $section.querySelector(btnPrev);
    if (!(0,_utils__WEBPACK_IMPORTED_MODULE_0__.exist)([$btnNext, $btnPrev])) return;
    var activeTab = 0;
    var arrayTabs = {};

    if ($linkSelector.length && $blockSelector.length) {
      $linkSelector.forEach(function (item) {
        var content = document.querySelector("[data-tab-content = '".concat(item.dataset.tab, "']"));
        if (!content) return;
        arrayTabs[item.dataset.tab] = {
          trigger: item,
          content: content
        };
      });

      var addActiveState = function addActiveState() {
        var _arrayTabs$activeTab, _arrayTabs$activeTab$, _arrayTabs$activeTab2, _arrayTabs$activeTab3;

        (_arrayTabs$activeTab = arrayTabs[activeTab]) === null || _arrayTabs$activeTab === void 0 ? void 0 : (_arrayTabs$activeTab$ = _arrayTabs$activeTab.trigger) === null || _arrayTabs$activeTab$ === void 0 ? void 0 : _arrayTabs$activeTab$.classList.add(activeLinkClass);
        (_arrayTabs$activeTab2 = arrayTabs[activeTab]) === null || _arrayTabs$activeTab2 === void 0 ? void 0 : (_arrayTabs$activeTab3 = _arrayTabs$activeTab2.content) === null || _arrayTabs$activeTab3 === void 0 ? void 0 : _arrayTabs$activeTab3.classList.add(activeContentClass);
      };

      var removeActiveState = function removeActiveState() {
        var _arrayTabs$activeTab4, _arrayTabs$activeTab5, _arrayTabs$activeTab6, _arrayTabs$activeTab7;

        (_arrayTabs$activeTab4 = arrayTabs[activeTab]) === null || _arrayTabs$activeTab4 === void 0 ? void 0 : (_arrayTabs$activeTab5 = _arrayTabs$activeTab4.trigger) === null || _arrayTabs$activeTab5 === void 0 ? void 0 : _arrayTabs$activeTab5.classList.remove(activeLinkClass);
        (_arrayTabs$activeTab6 = arrayTabs[activeTab]) === null || _arrayTabs$activeTab6 === void 0 ? void 0 : (_arrayTabs$activeTab7 = _arrayTabs$activeTab6.content) === null || _arrayTabs$activeTab7 === void 0 ? void 0 : _arrayTabs$activeTab7.classList.remove(activeContentClass);
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
      $section.addEventListener('click', function (e) {
        e.preventDefault();
        var dataset = e.target.dataset;

        if (dataset && dataset.tab) {
          removeActiveState();
          activeTab = Number(dataset.tab);
          addActiveState();
        }
      });
    }
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (tabsNavigation);

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

/***/ "./src/js/pages/our-products-wagyu-cooking-tips.js":
/*!*********************************************************!*\
  !*** ./src/js/pages/our-products-wagyu-cooking-tips.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var components_products_slider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! components/products-slider */ "./src/js/components/products-slider.js");
/* harmony import */ var components_text_section__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! components/text-section */ "./src/js/components/text-section.js");
/* harmony import */ var components_cooking_info_list__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/cooking-info-list */ "./src/js/components/cooking-info-list.js");
/* harmony import */ var components_cooking_details__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/cooking-details */ "./src/js/components/cooking-details.js");
/* harmony import */ var components_cooking_tabs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! components/cooking-tabs */ "./src/js/components/cooking-tabs.js");
/* harmony import */ var components_roasting_times__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! components/roasting-times */ "./src/js/components/roasting-times.js");







var ourProductsWagyuCookingTips = function ourProductsWagyuCookingTips() {
  (0,components_text_section__WEBPACK_IMPORTED_MODULE_1__["default"])();
  (0,components_cooking_info_list__WEBPACK_IMPORTED_MODULE_2__["default"])();
  (0,components_products_slider__WEBPACK_IMPORTED_MODULE_0__["default"])();
  (0,components_cooking_details__WEBPACK_IMPORTED_MODULE_3__["default"])();
  (0,components_cooking_tabs__WEBPACK_IMPORTED_MODULE_4__["default"])({
    sectionSelector: '.js-cooking-tabs',
    btnNext: '.js-cooking-tab-next-button',
    btnPrev: '.js-cooking-tab-prev-button',
    content: '.js-cooking-tabs-content',
    nav: '.js-cooking-tabs-nav'
  });
  (0,components_roasting_times__WEBPACK_IMPORTED_MODULE_5__["default"])();
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ourProductsWagyuCookingTips);

/***/ }),

/***/ "./node_modules/swiper/modules/effect-fade/effect-fade.min.css":
/*!*********************************************************************!*\
  !*** ./node_modules/swiper/modules/effect-fade/effect-fade.min.css ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./node_modules/swiper/modules/thumbs/thumbs.min.css":
/*!***********************************************************!*\
  !*** ./node_modules/swiper/modules/thumbs/thumbs.min.css ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/scss/components/cooking-details.scss":
/*!**************************************************!*\
  !*** ./src/scss/components/cooking-details.scss ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/scss/components/cooking-info-list.scss":
/*!****************************************************!*\
  !*** ./src/scss/components/cooking-info-list.scss ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/scss/components/cooking-tabs.scss":
/*!***********************************************!*\
  !*** ./src/scss/components/cooking-tabs.scss ***!
  \***********************************************/
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

/***/ "./src/scss/components/roasting-times.scss":
/*!*************************************************!*\
  !*** ./src/scss/components/roasting-times.scss ***!
  \*************************************************/
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
//# sourceMappingURL=src_js_pages_our-products-wagyu-cooking-tips_js.js.map