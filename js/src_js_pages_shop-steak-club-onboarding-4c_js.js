"use strict";
(self["webpackChunkglivera_webpack_template"] = self["webpackChunkglivera_webpack_template"] || []).push([["src_js_pages_shop-steak-club-onboarding-4c_js"],{

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

/***/ "./src/js/components/product-onboarding-list.js":
/*!******************************************************!*\
  !*** ./src/js/components/product-onboarding-list.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var ScssComponents_product_onboarding_list_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ScssComponents/product-onboarding-list.scss */ "./src/scss/components/product-onboarding-list.scss");
/* harmony import */ var components_product_onboarding__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! components/product-onboarding */ "./src/js/components/product-onboarding.js");



var productOnboardingList = function productOnboardingList() {
  (0,components_product_onboarding__WEBPACK_IMPORTED_MODULE_1__["default"])();
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (productOnboardingList);

/***/ }),

/***/ "./src/js/components/product-onboarding.js":
/*!*************************************************!*\
  !*** ./src/js/components/product-onboarding.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var ScssComponents_product_onboarding_mixin_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ScssComponents/product-onboarding-mixin.scss */ "./src/scss/components/product-onboarding-mixin.scss");
/* harmony import */ var _quantity__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./quantity */ "./src/js/components/quantity.js");
/* harmony import */ var _accordion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./accordion */ "./src/js/components/accordion.js");




var productOnboarding = function productOnboarding() {
  (0,_quantity__WEBPACK_IMPORTED_MODULE_1__["default"])();
  (0,_accordion__WEBPACK_IMPORTED_MODULE_2__["default"])('product_onboarding__content--active_state', '.js-acc-trigger', false);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (productOnboarding);

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

/***/ "./src/js/pages/shop-steak-club-onboarding-4c.js":
/*!*******************************************************!*\
  !*** ./src/js/pages/shop-steak-club-onboarding-4c.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var components_step_form_head__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! components/step-form-head */ "./src/js/components/step-form-head.js");
/* harmony import */ var components_product_onboarding_list__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! components/product-onboarding-list */ "./src/js/components/product-onboarding-list.js");
/* harmony import */ var components_step_form_progress__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/step-form-progress */ "./src/js/components/step-form-progress.js");




var shopSteakClubOnboarding4c = function shopSteakClubOnboarding4c() {
  (0,components_step_form_head__WEBPACK_IMPORTED_MODULE_0__["default"])();
  (0,components_product_onboarding_list__WEBPACK_IMPORTED_MODULE_1__["default"])();
  (0,components_step_form_progress__WEBPACK_IMPORTED_MODULE_2__["default"])();
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (shopSteakClubOnboarding4c);

/***/ }),

/***/ "./src/scss/components/product-onboarding-list.scss":
/*!**********************************************************!*\
  !*** ./src/scss/components/product-onboarding-list.scss ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/scss/components/product-onboarding-mixin.scss":
/*!***********************************************************!*\
  !*** ./src/scss/components/product-onboarding-mixin.scss ***!
  \***********************************************************/
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

/***/ "./src/scss/components/step-form-progress.scss":
/*!*****************************************************!*\
  !*** ./src/scss/components/step-form-progress.scss ***!
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


/***/ })

}]);
//# sourceMappingURL=src_js_pages_shop-steak-club-onboarding-4c_js.js.map