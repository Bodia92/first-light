"use strict";
(self["webpackChunkglivera_webpack_template"] = self["webpackChunkglivera_webpack_template"] || []).push([["src_js_pages_resources-recipes_js"],{

/***/ "./src/js/components/accordion.js":
/*!****************************************!*\
  !*** ./src/js/components/accordion.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/index */ "./src/js/utils/index.js");


var accordion = function accordion() {
  var activeStateName = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'accordion__item--active_state';
  var triggerSelector = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '.js-acc-trigger';
  var closeAllItem = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
  var $triggers = document.querySelectorAll(triggerSelector);
  if (!(0,_utils_index__WEBPACK_IMPORTED_MODULE_0__.exist)($triggers)) return;
  var enabled = true;

  var isEnabled = function isEnabled() {
    return enabled;
  };

  var closeAccordion = function closeAccordion($parentEl, $nextElementSibling) {
    $parentEl.classList.remove(activeStateName);
    $nextElementSibling.style.maxHeight = null; // eslint-disable-line no-param-reassign
  };

  var closeAllAccordion = function closeAllAccordion() {
    $triggers.forEach(function ($item) {
      closeAccordion($item.parentNode, $item.nextElementSibling);
    });
  };

  var openAccordion = function openAccordion($parentEl, $nextElementSibling) {
    setTimeout(function () {
      if (closeAllItem) {
        closeAllAccordion();
      }

      $parentEl.classList.add(activeStateName);
      $nextElementSibling.style.maxHeight = $nextElementSibling.scrollHeight + 'px'; // eslint-disable-line
    }, 100);
  };

  var toggleActiveState = function toggleActiveState($trigger) {
    if (enabled) {
      if (!(0,_utils_index__WEBPACK_IMPORTED_MODULE_0__.exist)($trigger)) return;
      var $parentEl = $trigger.parentNode;
      var $nextElementSibling = $trigger.nextElementSibling;

      if ($parentEl.classList.contains(activeStateName)) {
        closeAccordion($parentEl, $nextElementSibling);
      } else {
        openAccordion($parentEl, $nextElementSibling);
      }
    }
  };

  var onResize = function onResize() {
    if (isEnabled()) {
      $triggers.forEach(function ($item) {
        var $parentEl = $item.parentNode;

        if ($parentEl.classList.contains(activeStateName)) {
          var $nextElementSibling = $item.nextElementSibling;
          $nextElementSibling.style.maxHeight = $nextElementSibling.scrollHeight + 'px'; // eslint-disable-line prefer-template
        }
      });
    }
  };

  (0,_utils_index__WEBPACK_IMPORTED_MODULE_0__.onWindowResize)(onResize);
  $triggers.forEach(function ($item) {
    var $parentEl = $item.parentNode;

    if ($parentEl.classList.contains(activeStateName) && isEnabled()) {
      var $nextElementSibling = $item.nextElementSibling;
      openAccordion($parentEl, $nextElementSibling);
    }

    $item.addEventListener('click', function () {
      toggleActiveState($item);
    });
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (accordion);

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

/***/ "./src/js/components/content-banner.js":
/*!*********************************************!*\
  !*** ./src/js/components/content-banner.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var ScssComponents_content_banner_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ScssComponents/content-banner.scss */ "./src/scss/components/content-banner.scss");


var contentBanner = function contentBanner() {};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (contentBanner);

/***/ }),

/***/ "./src/js/components/filters-product-list.js":
/*!***************************************************!*\
  !*** ./src/js/components/filters-product-list.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! utils */ "./src/js/utils/index.js");
/* harmony import */ var _accordion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./accordion */ "./src/js/components/accordion.js");
/* harmony import */ var ScssComponents_filters_product_list_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ScssComponents/filters-product-list.scss */ "./src/scss/components/filters-product-list.scss");
/* harmony import */ var ScssComponents_filter_mobile_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ScssComponents/filter-mobile.scss */ "./src/scss/components/filter-mobile.scss");
/* harmony import */ var ScssComponents_sort_by_mobile_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ScssComponents/sort-by-mobile.scss */ "./src/scss/components/sort-by-mobile.scss");






var filtersProductList = function filtersProductList() {
  (0,_accordion__WEBPACK_IMPORTED_MODULE_1__["default"])('filter_mobile__item--active_state');
  var selectors = {
    filterBtn: '.js-filter-btn',
    filterBtnClose: '.js-btn-close',
    sortBtnClose: '.js-sort-close',
    sortByBtn: '.js-sort-by-btn',
    btnClear: '.js-btn-clear',
    filterForm: '.filters_product_list__form'
  };
  var classnames = {
    filterListFilterState: 'filters_product_list__form--filter_state',
    filterListSortState: 'filters_product_list__form--sort_state',
    bodyMenuOpen: 'body--menu_open'
  };
  var $body = document.body;
  if (!(0,utils__WEBPACK_IMPORTED_MODULE_0__.exist)($body)) return;
  var $filterForm = document.querySelector(selectors.filterForm);
  document.addEventListener('click', function (e) {
    var targetElement = e.target;

    if (targetElement.closest(selectors.filterBtn)) {
      $filterForm.classList.add(classnames.filterListFilterState);
      $body.classList.add(classnames.bodyMenuOpen);
    }

    if (targetElement.closest(selectors.filterBtnClose)) {
      $filterForm.classList.remove(classnames.filterListFilterState);
      $body.classList.remove(classnames.bodyMenuOpen);
    }

    if (targetElement.closest(selectors.sortByBtn)) {
      $filterForm.classList.toggle(classnames.filterListSortState);
    }

    if (targetElement.closest(selectors.sortBtnClose)) {
      $filterForm.classList.remove(classnames.filterListSortState);
    }

    if (targetElement.closest(selectors.btnClear)) {
      $filterForm.reset();
    }
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (filtersProductList);

/***/ }),

/***/ "./src/js/components/recipes-list-mixin.js":
/*!*************************************************!*\
  !*** ./src/js/components/recipes-list-mixin.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var ScssComponents_recipes_list_mixin_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ScssComponents/recipes-list-mixin.scss */ "./src/scss/components/recipes-list-mixin.scss");


var recipesList = function recipesList() {};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (recipesList);

/***/ }),

/***/ "./src/js/pages/resources-recipes.js":
/*!*******************************************!*\
  !*** ./src/js/pages/resources-recipes.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var components_content_banner__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! components/content-banner */ "./src/js/components/content-banner.js");
/* harmony import */ var components_recipes_list_mixin__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! components/recipes-list-mixin */ "./src/js/components/recipes-list-mixin.js");
/* harmony import */ var components_category_slider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/category-slider */ "./src/js/components/category-slider.js");
/* harmony import */ var components_filters_product_list__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/filters-product-list */ "./src/js/components/filters-product-list.js");





var resourcesRecipes = function resourcesRecipes() {
  (0,components_content_banner__WEBPACK_IMPORTED_MODULE_0__["default"])();
  (0,components_recipes_list_mixin__WEBPACK_IMPORTED_MODULE_1__["default"])();
  (0,components_category_slider__WEBPACK_IMPORTED_MODULE_2__["default"])();
  (0,components_filters_product_list__WEBPACK_IMPORTED_MODULE_3__["default"])();
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (resourcesRecipes);

/***/ }),

/***/ "./src/scss/components/category-item.scss":
/*!************************************************!*\
  !*** ./src/scss/components/category-item.scss ***!
  \************************************************/
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

/***/ "./src/scss/components/content-banner.scss":
/*!*************************************************!*\
  !*** ./src/scss/components/content-banner.scss ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/scss/components/filter-mobile.scss":
/*!************************************************!*\
  !*** ./src/scss/components/filter-mobile.scss ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/scss/components/filters-product-list.scss":
/*!*******************************************************!*\
  !*** ./src/scss/components/filters-product-list.scss ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/scss/components/recipes-list-mixin.scss":
/*!*****************************************************!*\
  !*** ./src/scss/components/recipes-list-mixin.scss ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/scss/components/sort-by-mobile.scss":
/*!*************************************************!*\
  !*** ./src/scss/components/sort-by-mobile.scss ***!
  \*************************************************/
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
//# sourceMappingURL=src_js_pages_resources-recipes_js.js.map