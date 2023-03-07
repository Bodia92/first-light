"use strict";
(self["webpackChunkglivera_webpack_template"] = self["webpackChunkglivera_webpack_template"] || []).push([["src_js_pages_shop-child-product-multiple_js"],{

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

/***/ "./src/js/components/advantages-line.js":
/*!**********************************************!*\
  !*** ./src/js/components/advantages-line.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var ScssComponents_advantages_line_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ScssComponents/advantages-line.scss */ "./src/scss/components/advantages-line.scss");


var advantagesLine = function advantagesLine() {};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (advantagesLine);

/***/ }),

/***/ "./src/js/components/content-banner-video.js":
/*!***************************************************!*\
  !*** ./src/js/components/content-banner-video.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _fancyapps_ui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @fancyapps/ui */ "./node_modules/@fancyapps/ui/dist/fancybox.esm.js");
/* harmony import */ var _fancyapps_ui_dist_fancybox_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fancyapps/ui/dist/fancybox.css */ "./node_modules/@fancyapps/ui/dist/fancybox.css");
/* harmony import */ var ScssComponents_content_banner_video_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ScssComponents/content-banner-video.scss */ "./src/scss/components/content-banner-video.scss");




var contentBannerVideo = function contentBannerVideo() {};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (contentBannerVideo);

/***/ }),

/***/ "./src/js/components/featured-recipies-slider.js":
/*!*******************************************************!*\
  !*** ./src/js/components/featured-recipies-slider.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! swiper */ "./node_modules/swiper/swiper.esm.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils */ "./src/js/utils/index.js");
/* harmony import */ var ScssComponents_featured_recipies_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ScssComponents/featured-recipies.scss */ "./src/scss/components/featured-recipies.scss");
/* harmony import */ var ScssComponents_recipes_card_mixin_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ScssComponents/recipes-card-mixin.scss */ "./src/scss/components/recipes-card-mixin.scss");
/* harmony import */ var swiper_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! swiper/css */ "./node_modules/swiper/swiper.min.css");






var featuredRecipiesSlider = function featuredRecipiesSlider() {
  var sectionSelector = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '.js-recipies-section';
  var sliderSelector = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '.js-recipies-slider';
  var btnNextSelector = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '.js-recipies-next-button';
  var btnPrevSelector = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : '.js-recipies-prev-button';
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
          slidesPerView: 1
        },
        768: {
          slidesPerView: 2
        }
      }
    });
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (featuredRecipiesSlider);

/***/ }),

/***/ "./src/js/components/info-acc.js":
/*!***************************************!*\
  !*** ./src/js/components/info-acc.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _accordion__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./accordion */ "./src/js/components/accordion.js");
/* harmony import */ var ScssComponents_info_acc_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ScssComponents/info-acc.scss */ "./src/scss/components/info-acc.scss");



var infoAcc = function infoAcc() {
  (0,_accordion__WEBPACK_IMPORTED_MODULE_0__["default"])('info_acc__item--active_state');
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (infoAcc);

/***/ }),

/***/ "./src/js/components/notify-form.js":
/*!******************************************!*\
  !*** ./src/js/components/notify-form.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var ScssComponents_notify_form_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ScssComponents/notify-form.scss */ "./src/scss/components/notify-form.scss");


var notifyForm = function notifyForm() {
  console.log('test');
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (notifyForm);

/***/ }),

/***/ "./src/js/components/product-content.js":
/*!**********************************************!*\
  !*** ./src/js/components/product-content.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _quantity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./quantity */ "./src/js/components/quantity.js");
/* harmony import */ var _notify_form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./notify-form */ "./src/js/components/notify-form.js");
/* harmony import */ var ScssComponents_product_content_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ScssComponents/product-content.scss */ "./src/scss/components/product-content.scss");




var singleContentProduct = function singleContentProduct() {
  (0,_quantity__WEBPACK_IMPORTED_MODULE_0__["default"])();
  (0,_notify_form__WEBPACK_IMPORTED_MODULE_1__["default"])();
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (singleContentProduct);

/***/ }),

/***/ "./src/js/components/product-details.js":
/*!**********************************************!*\
  !*** ./src/js/components/product-details.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var ScssComponents_product_details_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ScssComponents/product-details.scss */ "./src/scss/components/product-details.scss");


var productDetails = function productDetails() {};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (productDetails);

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

/***/ "./src/js/components/quantity.js":
/*!***************************************!*\
  !*** ./src/js/components/quantity.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var ScssComponents_universal_quantity_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ScssComponents/universal/quantity.scss */ "./src/scss/components/universal/quantity.scss");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils */ "./src/js/utils/index.js");



var quantity = function quantity() {
  var inputParent = document.querySelectorAll('.quantity');
  if (!(0,_utils__WEBPACK_IMPORTED_MODULE_1__.exist)(inputParent)) return;
  inputParent.forEach(function ($input) {
    var $instance = $input.querySelector('.input_number');
    var min = $instance.getAttribute('min');
    var max = $instance.getAttribute('max');
    var $minusBtn = $input.querySelector('.input_number_decrement');
    var $plusBtn = $input.querySelector('.input_number_increment');

    var trigger = function trigger() {
      var event = document.createEvent('HTMLEvents');
      event.initEvent('change', true, false);
      return event;
    };

    var validate = function validate() {
      if ($instance.value >= parseInt(max)) {
        $instance.value = max;
      } else if ($instance.value <= parseInt(min)) {
        $instance.value = min;
      }

      $instance.dispatchEvent(trigger());
    };

    var up = function up() {
      $instance.value = parseInt($instance.value) + 1;
      validate();
    };

    var down = function down() {
      $instance.value = parseInt($instance.value) - 1;
      validate();
    };

    $plusBtn.addEventListener('click', function () {
      up();
    });
    $minusBtn.addEventListener('click', function () {
      down();
    });
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (quantity);

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

/***/ "./src/js/components/this-product-pairs.js":
/*!*************************************************!*\
  !*** ./src/js/components/this-product-pairs.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var ScssComponents_product_pairs_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ScssComponents/product-pairs.scss */ "./src/scss/components/product-pairs.scss");
/* harmony import */ var ScssComponents_this_product_pairs_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ScssComponents/this-product-pairs.scss */ "./src/scss/components/this-product-pairs.scss");



var thisProductPairs = function thisProductPairs() {};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (thisProductPairs);

/***/ }),

/***/ "./src/js/pages/shop-child-product-multiple.js":
/*!*****************************************************!*\
  !*** ./src/js/pages/shop-child-product-multiple.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var components_single_product_layout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! components/single-product-layout */ "./src/js/components/single-product-layout.js");
/* harmony import */ var components_product_gallery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! components/product-gallery */ "./src/js/components/product-gallery.js");
/* harmony import */ var components_product_content__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/product-content */ "./src/js/components/product-content.js");
/* harmony import */ var components_advantages_line__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/advantages-line */ "./src/js/components/advantages-line.js");
/* harmony import */ var components_product_details__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! components/product-details */ "./src/js/components/product-details.js");
/* harmony import */ var components_featured_recipies_slider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! components/featured-recipies-slider */ "./src/js/components/featured-recipies-slider.js");
/* harmony import */ var components_info_acc__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! components/info-acc */ "./src/js/components/info-acc.js");
/* harmony import */ var components_content_banner_video__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! components/content-banner-video */ "./src/js/components/content-banner-video.js");
/* harmony import */ var components_this_product_pairs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! components/this-product-pairs */ "./src/js/components/this-product-pairs.js");
/* harmony import */ var components_products_slider__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! components/products-slider */ "./src/js/components/products-slider.js");











var ShopChildProductMultiple = function ShopChildProductMultiple() {
  (0,components_single_product_layout__WEBPACK_IMPORTED_MODULE_0__["default"])();
  (0,components_product_gallery__WEBPACK_IMPORTED_MODULE_1__["default"])();
  (0,components_product_content__WEBPACK_IMPORTED_MODULE_2__["default"])();
  (0,components_advantages_line__WEBPACK_IMPORTED_MODULE_3__["default"])();
  (0,components_products_slider__WEBPACK_IMPORTED_MODULE_9__["default"])();
  (0,components_product_details__WEBPACK_IMPORTED_MODULE_4__["default"])();
  (0,components_featured_recipies_slider__WEBPACK_IMPORTED_MODULE_5__["default"])();
  (0,components_info_acc__WEBPACK_IMPORTED_MODULE_6__["default"])();
  (0,components_content_banner_video__WEBPACK_IMPORTED_MODULE_7__["default"])();
  (0,components_this_product_pairs__WEBPACK_IMPORTED_MODULE_8__["default"])();
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ShopChildProductMultiple);

/***/ }),

/***/ "./src/scss/components/advantages-line.scss":
/*!**************************************************!*\
  !*** ./src/scss/components/advantages-line.scss ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/scss/components/content-banner-video.scss":
/*!*******************************************************!*\
  !*** ./src/scss/components/content-banner-video.scss ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/scss/components/featured-recipies.scss":
/*!****************************************************!*\
  !*** ./src/scss/components/featured-recipies.scss ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/scss/components/info-acc.scss":
/*!*******************************************!*\
  !*** ./src/scss/components/info-acc.scss ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/scss/components/notify-form.scss":
/*!**********************************************!*\
  !*** ./src/scss/components/notify-form.scss ***!
  \**********************************************/
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

/***/ "./src/scss/components/product-content.scss":
/*!**************************************************!*\
  !*** ./src/scss/components/product-content.scss ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/scss/components/product-details.scss":
/*!**************************************************!*\
  !*** ./src/scss/components/product-details.scss ***!
  \**************************************************/
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

/***/ "./src/scss/components/recipes-card-mixin.scss":
/*!*****************************************************!*\
  !*** ./src/scss/components/recipes-card-mixin.scss ***!
  \*****************************************************/
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

/***/ "./src/scss/components/this-product-pairs.scss":
/*!*****************************************************!*\
  !*** ./src/scss/components/this-product-pairs.scss ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/scss/components/universal/quantity.scss":
/*!*****************************************************!*\
  !*** ./src/scss/components/universal/quantity.scss ***!
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


/***/ })

}]);
//# sourceMappingURL=src_js_pages_shop-child-product-multiple_js.js.map