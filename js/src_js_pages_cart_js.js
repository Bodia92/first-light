"use strict";
(self["webpackChunkglivera_webpack_template"] = self["webpackChunkglivera_webpack_template"] || []).push([["src_js_pages_cart_js"],{

/***/ "./src/js/components/cart-form.js":
/*!****************************************!*\
  !*** ./src/js/components/cart-form.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _quantity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./quantity */ "./src/js/components/quantity.js");
/* harmony import */ var ScssComponents_cart_form_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ScssComponents/cart-form.scss */ "./src/scss/components/cart-form.scss");
/* harmony import */ var ScssComponents_coupon_block_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ScssComponents/coupon-block.scss */ "./src/scss/components/coupon-block.scss");




var cartForm = function cartForm() {
  (0,_quantity__WEBPACK_IMPORTED_MODULE_0__["default"])();
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (cartForm);

/***/ }),

/***/ "./src/js/components/product-pairs-list.js":
/*!*************************************************!*\
  !*** ./src/js/components/product-pairs-list.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var ScssComponents_product_pairs_list_mixin_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ScssComponents/product-pairs-list-mixin.scss */ "./src/scss/components/product-pairs-list-mixin.scss");


var productPairsList = function productPairsList() {};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (productPairsList);

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

/***/ "./src/js/pages/cart.js":
/*!******************************!*\
  !*** ./src/js/pages/cart.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _components_cart_form__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/cart-form */ "./src/js/components/cart-form.js");
/* harmony import */ var _components_product_pairs_list__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/product-pairs-list */ "./src/js/components/product-pairs-list.js");



var cart = function cart() {
  (0,_components_cart_form__WEBPACK_IMPORTED_MODULE_0__["default"])();
  (0,_components_product_pairs_list__WEBPACK_IMPORTED_MODULE_1__["default"])();
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (cart);

/***/ }),

/***/ "./src/scss/components/cart-form.scss":
/*!********************************************!*\
  !*** ./src/scss/components/cart-form.scss ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/scss/components/coupon-block.scss":
/*!***********************************************!*\
  !*** ./src/scss/components/coupon-block.scss ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/scss/components/product-pairs-list-mixin.scss":
/*!***********************************************************!*\
  !*** ./src/scss/components/product-pairs-list-mixin.scss ***!
  \***********************************************************/
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
//# sourceMappingURL=src_js_pages_cart_js.js.map