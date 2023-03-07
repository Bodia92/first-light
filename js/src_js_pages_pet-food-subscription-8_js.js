"use strict";
(self["webpackChunkglivera_webpack_template"] = self["webpackChunkglivera_webpack_template"] || []).push([["src_js_pages_pet-food-subscription-8_js"],{

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

/***/ "./src/js/components/your-subscription.js":
/*!************************************************!*\
  !*** ./src/js/components/your-subscription.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var ScssComponents_your_subscription_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ScssComponents/your-subscription.scss */ "./src/scss/components/your-subscription.scss");
/* harmony import */ var _utils_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/index */ "./src/js/utils/index.js");
/* harmony import */ var _quantity__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./quantity */ "./src/js/components/quantity.js");




var yourSubscription = function yourSubscription() {
  var $subscriptionRoot = document.querySelector('.js-subscription');

  if (typeof $subscriptionRoot !== 'undefined' && $subscriptionRoot != null) {
    var subscriptionItems = $subscriptionRoot.querySelectorAll('.js-subscription-item');
    (0,_quantity__WEBPACK_IMPORTED_MODULE_2__["default"])();

    if (subscriptionItems.length) {
      subscriptionItems.forEach(function (item) {
        var $changeStateTrigger = item.querySelector('.js-acc-trigger');
        var controllerItems = item.querySelectorAll('.js-acc-element');
        var closedState = false;
        $changeStateTrigger.addEventListener('click', function () {
          if (!closedState) {
            item.classList.add('closed_state');
            closedState = true;
          } else {
            item.classList.remove('closed_state');
            closedState = false;
          }
        });

        if (controllerItems.length) {
          controllerItems.forEach(function (controller) {
            var $checkboxEl = controller.querySelector('.js-checkbox-element');
            var $decrementEl = controller.querySelector('.input_number_decrement');
            var $incrementEl = controller.querySelector('.input_number_increment');
            var $inputNumber = controller.querySelector('.input_number');
            var checkedState = false;
            $inputNumber.addEventListener('change', function () {
              if ($inputNumber.value > 0) {
                if (!checkedState) {
                  $checkboxEl.checked = true;
                  controller.classList.add('checked_state');
                  checkedState = true;
                  console.log(checkedState);
                }
              } else {
                $checkboxEl.checked = false;
                controller.classList.remove('checked_state');
                checkedState = false;
                console.log(checkedState);
              }
            });
            $checkboxEl.addEventListener('change', function () {
              if (!checkedState) {
                $inputNumber.value = 1;
                controller.classList.add('checked_state');
                checkedState = true;
              } else {
                $inputNumber.value = 0;
                controller.classList.remove('checked_state');
                checkedState = false;
              }
            });
          });
        }
      });
    }
  }
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (yourSubscription);

/***/ }),

/***/ "./src/js/pages/pet-food-subscription-8.js":
/*!*************************************************!*\
  !*** ./src/js/pages/pet-food-subscription-8.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var components_step_form_progress__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! components/step-form-progress */ "./src/js/components/step-form-progress.js");
/* harmony import */ var components_step_form_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! components/step-form-head */ "./src/js/components/step-form-head.js");
/* harmony import */ var components_your_subscription__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/your-subscription */ "./src/js/components/your-subscription.js");
/* harmony import */ var ScssComponents_step_form_list_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ScssComponents/step-form-list.scss */ "./src/scss/components/step-form-list.scss");
/* harmony import */ var _components_quiz_item__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/quiz-item */ "./src/js/components/quiz-item.js");






var petFoodSubscription8 = function petFoodSubscription8() {
  (0,components_step_form_progress__WEBPACK_IMPORTED_MODULE_0__["default"])();
  (0,components_step_form_head__WEBPACK_IMPORTED_MODULE_1__["default"])();
  (0,components_your_subscription__WEBPACK_IMPORTED_MODULE_2__["default"])();
  (0,_components_quiz_item__WEBPACK_IMPORTED_MODULE_4__["default"])();
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (petFoodSubscription8);

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

/***/ "./src/scss/components/universal/quantity.scss":
/*!*****************************************************!*\
  !*** ./src/scss/components/universal/quantity.scss ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/scss/components/your-subscription.scss":
/*!****************************************************!*\
  !*** ./src/scss/components/your-subscription.scss ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

}]);
//# sourceMappingURL=src_js_pages_pet-food-subscription-8_js.js.map