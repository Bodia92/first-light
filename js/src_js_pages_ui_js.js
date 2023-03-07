"use strict";
(self["webpackChunkglivera_webpack_template"] = self["webpackChunkglivera_webpack_template"] || []).push([["src_js_pages_ui_js"],{

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

/***/ "./src/js/components/banner-slider.js":
/*!********************************************!*\
  !*** ./src/js/components/banner-slider.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! swiper */ "./node_modules/swiper/swiper.esm.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils */ "./src/js/utils/index.js");
/* harmony import */ var swiper_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! swiper/css */ "./node_modules/swiper/swiper.min.css");
/* harmony import */ var swiper_css_effect_fade__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! swiper/css/effect-fade */ "./node_modules/swiper/modules/effect-fade/effect-fade.min.css");
/* harmony import */ var ScssComponents_banner_slider_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ScssComponents/banner-slider.scss */ "./src/scss/components/banner-slider.scss");
/* harmony import */ var ScssComponents_universal_slider_controls_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ScssComponents/universal/slider-controls.scss */ "./src/scss/components/universal/slider-controls.scss");







var bannerSlider = function bannerSlider() {
  var sectionSelector = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '.js-banner-section';
  var sliderSelector = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '.js-banner-slider';
  var btnNextSelector = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '.js-banner-next-button';
  var btnPrevSelector = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : '.js-banner-prev-button';
  var paginationSelector = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : '.js-banner-pagination';
  var $sections = document.querySelectorAll(sectionSelector);
  if (!(0,_utils__WEBPACK_IMPORTED_MODULE_1__.exist)($sections)) return;
  swiper__WEBPACK_IMPORTED_MODULE_0__["default"].use([swiper__WEBPACK_IMPORTED_MODULE_0__.Navigation, swiper__WEBPACK_IMPORTED_MODULE_0__.Pagination, swiper__WEBPACK_IMPORTED_MODULE_0__.EffectFade]);
  $sections.forEach(function ($section) {
    var $slider = $section.querySelector(sliderSelector);
    var $btnNext = $section.querySelector(btnNextSelector);
    var $btnPrev = $section.querySelector(btnPrevSelector);
    var $pagination = $section.querySelector(paginationSelector);
    if (!(0,_utils__WEBPACK_IMPORTED_MODULE_1__.exist)([$slider, $btnNext, $btnPrev, $pagination])) return;
    var bannerSwiper = new swiper__WEBPACK_IMPORTED_MODULE_0__["default"]($slider, {
      speed: 800,
      slidesPerView: 1,
      autoHeight: true,
      effect: 'fade',
      fadeEffect: {
        crossFade: true
      },
      navigation: {
        nextEl: $btnNext,
        prevEl: $btnPrev
      },
      pagination: {
        el: $pagination,
        type: 'fraction'
      }
    });
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (bannerSlider);

/***/ }),

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

/***/ "./src/js/components/category-list.js":
/*!********************************************!*\
  !*** ./src/js/components/category-list.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var ScssComponents_category_list_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ScssComponents/category-list.scss */ "./src/scss/components/category-list.scss");
/* harmony import */ var ScssComponents_category_list_link_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ScssComponents/category-list-link.scss */ "./src/scss/components/category-list-link.scss");



var categoryList = function categoryList() {};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (categoryList);

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

/***/ "./src/js/components/init-popup.js":
/*!*****************************************!*\
  !*** ./src/js/components/init-popup.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/index */ "./src/js/utils/index.js");
/* harmony import */ var ScssComponents_universal_popup_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ScssComponents/universal/popup.scss */ "./src/scss/components/universal/popup.scss");



var initPopup = function initPopup(btnSelector, popupSelector) {
  var closeSelector = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '.js-popup-close';
  var popupActiveState = 'popup--open_state';
  var bodyPopupOpenState = 'body--popup_open';
  var $btns = document.querySelectorAll(btnSelector);
  var $popup = document.querySelector(popupSelector);
  var $closeBtns = document.querySelectorAll(closeSelector);
  if (!(0,_utils_index__WEBPACK_IMPORTED_MODULE_0__.exist)([$btns, $popup])) return null;

  var closePopup = function closePopup() {
    $popup.classList.remove(popupActiveState);
    document.body.classList.remove(bodyPopupOpenState);
  };

  $btns.forEach(function ($btn) {
    $btn.addEventListener('click', function (e) {
      e.preventDefault();
      $popup.classList.add(popupActiveState);
      document.body.classList.add(bodyPopupOpenState);
    });
  });
  if (!(0,_utils_index__WEBPACK_IMPORTED_MODULE_0__.exist)($closeBtns)) return null;
  $closeBtns.forEach(function ($item) {
    $item.addEventListener('click', function () {
      return closePopup();
    });
  });
  $popup.addEventListener('click', function (e) {
    if (e.target === $popup) {
      closePopup();
    }
  });
  return null;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (initPopup);

/***/ }),

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

/***/ "./src/js/components/popup-email.js":
/*!******************************************!*\
  !*** ./src/js/components/popup-email.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _init_popup__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./init-popup */ "./src/js/components/init-popup.js");
/* harmony import */ var ScssComponents_popup_email_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ScssComponents/popup-email.scss */ "./src/scss/components/popup-email.scss");



var popupEmail = function popupEmail() {
  (0,_init_popup__WEBPACK_IMPORTED_MODULE_0__["default"])('.js-popup-email-trigger', '.js-popup-email');
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (popupEmail);

/***/ }),

/***/ "./src/js/components/popup-equipment.js":
/*!**********************************************!*\
  !*** ./src/js/components/popup-equipment.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _init_popup__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./init-popup */ "./src/js/components/init-popup.js");
/* harmony import */ var ScssComponents_popup_offer_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ScssComponents/popup-offer.scss */ "./src/scss/components/popup-offer.scss");



var popupEquipment = function popupEquipment() {
  (0,_init_popup__WEBPACK_IMPORTED_MODULE_0__["default"])('.js-popup-equipment-trigger', '.js-popup-equipment');
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (popupEquipment);

/***/ }),

/***/ "./src/js/components/popup-offer.js":
/*!******************************************!*\
  !*** ./src/js/components/popup-offer.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _init_popup__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./init-popup */ "./src/js/components/init-popup.js");
/* harmony import */ var ScssComponents_popup_offer_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ScssComponents/popup-offer.scss */ "./src/scss/components/popup-offer.scss");



var popupOffer = function popupOffer() {
  (0,_init_popup__WEBPACK_IMPORTED_MODULE_0__["default"])('.js-popup-offer-trigger', '.js-popup-offer');
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (popupOffer);

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

/***/ "./src/js/components/products.js":
/*!***************************************!*\
  !*** ./src/js/components/products.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var ScssComponents_products_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ScssComponents/products.scss */ "./src/scss/components/products.scss");


var products = function products() {
  console.log(1);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (products);

/***/ }),

/***/ "./src/js/components/promo.js":
/*!************************************!*\
  !*** ./src/js/components/promo.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var ScssComponents_promo_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ScssComponents/promo.scss */ "./src/scss/components/promo.scss");


var promo = function promo() {};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (promo);

/***/ }),

/***/ "./src/js/components/shop-by-category.js":
/*!***********************************************!*\
  !*** ./src/js/components/shop-by-category.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var components_category_slider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! components/category-slider */ "./src/js/components/category-slider.js");
/* harmony import */ var ScssComponents_universal_section_head_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ScssComponents/universal/section-head.scss */ "./src/scss/components/universal/section-head.scss");



var shopByCategory = function shopByCategory() {
  (0,components_category_slider__WEBPACK_IMPORTED_MODULE_0__["default"])();
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (shopByCategory);

/***/ }),

/***/ "./src/js/components/waiting-form.js":
/*!*******************************************!*\
  !*** ./src/js/components/waiting-form.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var ScssComponents_waiting_form_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ScssComponents/waiting-form.scss */ "./src/scss/components/waiting-form.scss");


var waitingForm = function waitingForm() {};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (waitingForm);

/***/ }),

/***/ "./src/js/pages/ui.js":
/*!****************************!*\
  !*** ./src/js/pages/ui.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var components_members_slider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! components/members-slider */ "./src/js/components/members-slider.js");
/* harmony import */ var components_popup_email__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! components/popup-email */ "./src/js/components/popup-email.js");
/* harmony import */ var components_popup_offer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/popup-offer */ "./src/js/components/popup-offer.js");
/* harmony import */ var components_popup_equipment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/popup-equipment */ "./src/js/components/popup-equipment.js");
/* harmony import */ var components_shop_by_category__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! components/shop-by-category */ "./src/js/components/shop-by-category.js");
/* harmony import */ var components_category_slider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! components/category-slider */ "./src/js/components/category-slider.js");
/* harmony import */ var components_banner_slider__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! components/banner-slider */ "./src/js/components/banner-slider.js");
/* harmony import */ var components_products__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! components/products */ "./src/js/components/products.js");
/* harmony import */ var components_products_slider__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! components/products-slider */ "./src/js/components/products-slider.js");
/* harmony import */ var components_product_details__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! components/product-details */ "./src/js/components/product-details.js");
/* harmony import */ var components_info_acc__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! components/info-acc */ "./src/js/components/info-acc.js");
/* harmony import */ var components_category_list__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! components/category-list */ "./src/js/components/category-list.js");
/* harmony import */ var components_mbs_slider__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! components/mbs-slider */ "./src/js/components/mbs-slider.js");
/* harmony import */ var components_featured_recipies_slider__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! components/featured-recipies-slider */ "./src/js/components/featured-recipies-slider.js");
/* harmony import */ var components_promo__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! components/promo */ "./src/js/components/promo.js");
/* harmony import */ var components_onboarding_form__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! components/onboarding-form */ "./src/js/components/onboarding-form.js");
/* harmony import */ var components_waiting_form__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! components/waiting-form */ "./src/js/components/waiting-form.js");


















var ui = function ui() {
  (0,components_members_slider__WEBPACK_IMPORTED_MODULE_0__["default"])();
  (0,components_popup_email__WEBPACK_IMPORTED_MODULE_1__["default"])();
  (0,components_popup_offer__WEBPACK_IMPORTED_MODULE_2__["default"])();
  (0,components_popup_equipment__WEBPACK_IMPORTED_MODULE_3__["default"])();
  (0,components_shop_by_category__WEBPACK_IMPORTED_MODULE_4__["default"])();
  (0,components_category_slider__WEBPACK_IMPORTED_MODULE_5__["default"])();
  (0,components_banner_slider__WEBPACK_IMPORTED_MODULE_6__["default"])();
  (0,components_products__WEBPACK_IMPORTED_MODULE_7__["default"])();
  (0,components_products_slider__WEBPACK_IMPORTED_MODULE_8__["default"])();
  (0,components_product_details__WEBPACK_IMPORTED_MODULE_9__["default"])();
  (0,components_info_acc__WEBPACK_IMPORTED_MODULE_10__["default"])();
  (0,components_category_list__WEBPACK_IMPORTED_MODULE_11__["default"])();
  (0,components_mbs_slider__WEBPACK_IMPORTED_MODULE_12__["default"])();
  (0,components_featured_recipies_slider__WEBPACK_IMPORTED_MODULE_13__["default"])();
  (0,components_promo__WEBPACK_IMPORTED_MODULE_14__["default"])();
  (0,components_onboarding_form__WEBPACK_IMPORTED_MODULE_15__["default"])();
  (0,components_waiting_form__WEBPACK_IMPORTED_MODULE_16__["default"])();
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ui);

/***/ }),

/***/ "./node_modules/swiper/modules/effect-fade/effect-fade.min.css":
/*!*********************************************************************!*\
  !*** ./node_modules/swiper/modules/effect-fade/effect-fade.min.css ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./node_modules/swiper/modules/effect-fade/effect-fade.scss":
/*!******************************************************************!*\
  !*** ./node_modules/swiper/modules/effect-fade/effect-fade.scss ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/scss/components/banner-slider.scss":
/*!************************************************!*\
  !*** ./src/scss/components/banner-slider.scss ***!
  \************************************************/
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

/***/ "./src/scss/components/category-list.scss":
/*!************************************************!*\
  !*** ./src/scss/components/category-list.scss ***!
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

/***/ "./src/scss/components/onboarding-form.scss":
/*!**************************************************!*\
  !*** ./src/scss/components/onboarding-form.scss ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/scss/components/popup-email.scss":
/*!**********************************************!*\
  !*** ./src/scss/components/popup-email.scss ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/scss/components/popup-offer.scss":
/*!**********************************************!*\
  !*** ./src/scss/components/popup-offer.scss ***!
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

/***/ "./src/scss/components/product-details.scss":
/*!**************************************************!*\
  !*** ./src/scss/components/product-details.scss ***!
  \**************************************************/
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

/***/ "./src/scss/components/products.scss":
/*!*******************************************!*\
  !*** ./src/scss/components/products.scss ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/scss/components/promo.scss":
/*!****************************************!*\
  !*** ./src/scss/components/promo.scss ***!
  \****************************************/
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

/***/ "./src/scss/components/universal/popup.scss":
/*!**************************************************!*\
  !*** ./src/scss/components/universal/popup.scss ***!
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


/***/ }),

/***/ "./src/scss/components/universal/slider-controls.scss":
/*!************************************************************!*\
  !*** ./src/scss/components/universal/slider-controls.scss ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/scss/components/waiting-form.scss":
/*!***********************************************!*\
  !*** ./src/scss/components/waiting-form.scss ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

}]);
//# sourceMappingURL=src_js_pages_ui_js.js.map