/*! For license information please see 9465.js.LICENSE.txt */
"use strict";(self.webpackChunkglivera_webpack_template=self.webpackChunkglivera_webpack_template||[]).push([[9465],{1554:(e,t,n)=>{n.d(t,{Z:()=>o});var r=n(2348);const o=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"accordion__item--active_state",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:".js-acc-trigger",n=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],o=document.querySelectorAll(t);if((0,r.rS)(o)){var i=!0,c=function(){return i},s=function(t,n){t.classList.remove(e),n.style.maxHeight=null},l=function(){o.forEach((function(e){s(e.parentNode,e.nextElementSibling)}))},a=function(t,r){setTimeout((function(){n&&l(),t.classList.add(e),r.style.maxHeight=r.scrollHeight+"px"}),100)},u=function(t){if(i){if(!(0,r.rS)(t))return;var n=t.parentNode,o=t.nextElementSibling;n.classList.contains(e)?s(n,o):a(n,o)}},d=function(){c()&&o.forEach((function(t){if(t.parentNode.classList.contains(e)){var n=t.nextElementSibling;n.style.maxHeight=n.scrollHeight+"px"}}))};(0,r.KN)(d),o.forEach((function(t){var n=t.parentNode;if(n.classList.contains(e)&&c()){var r=t.nextElementSibling;a(n,r)}t.addEventListener("click",(function(){u(t)}))}))}}},5287:(e,t,n)=>{n.d(t,{Z:()=>i});var r=n(188),o=n(2348);const i=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:".js-banner-section",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:".js-banner-slider",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:".js-banner-next-button",i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:".js-banner-prev-button",c=arguments.length>4&&void 0!==arguments[4]?arguments[4]:".js-banner-pagination",s=document.querySelectorAll(e);(0,o.rS)(s)&&(r.ZP.use([r.W_,r.tl,r.xW]),s.forEach((function(e){var s=e.querySelector(t),l=e.querySelector(n),a=e.querySelector(i),u=e.querySelector(c);if((0,o.rS)([s,l,a,u]))new r.ZP(s,{speed:800,slidesPerView:1,autoHeight:!0,effect:"fade",fadeEffect:{crossFade:!0},navigation:{nextEl:l,prevEl:a},pagination:{el:u,type:"fraction"}})})))}},7446:(e,t,n)=>{n.d(t,{Z:()=>r});const r=function(){}},9740:(e,t,n)=>{n.d(t,{Z:()=>i});var r=n(188),o=n(2348);const i=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:".js-category-section",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:".js-category-slider",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:".js-category-next-button",i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:".js-category-prev-button",c=document.querySelectorAll(e);(0,o.rS)(c)&&(r.ZP.use([r.W_]),c.forEach((function(e){var c=e.querySelector(t),s=e.querySelector(n),l=e.querySelector(i);if((0,o.rS)([c,s,l]))new r.ZP(c,{speed:800,navigation:{nextEl:s,prevEl:l},breakpoints:{320:{slidesPerView:1.44},768:{slidesPerView:2.6},1024:{slidesPerView:3}}})})))}},8255:(e,t,n)=>{n.d(t,{Z:()=>i});var r=n(188),o=n(2348);const i=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:".js-recipies-section",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:".js-recipies-slider",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:".js-recipies-next-button",i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:".js-recipies-prev-button",c=document.querySelectorAll(e);(0,o.rS)(c)&&(r.ZP.use([r.W_]),c.forEach((function(e){var c=e.querySelector(t),s=e.querySelector(n),l=e.querySelector(i);if((0,o.rS)([c,s,l]))new r.ZP(c,{speed:800,navigation:{nextEl:s,prevEl:l},breakpoints:{320:{slidesPerView:1},768:{slidesPerView:2}}})})))}},4992:(e,t,n)=>{n.d(t,{Z:()=>o});var r=n(1554);const o=function(){(0,r.Z)("info_acc__item--active_state")}},5073:(e,t,n)=>{n.d(t,{Z:()=>i});var r=n(188),o=n(2348);const i=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:".js-mbs-section",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:".js-mbs-slider",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:".js-mbs-scrollbar",i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:".js-mbs-arrow-prev",c=arguments.length>4&&void 0!==arguments[4]?arguments[4]:".js-mbs-arrow-next",s=arguments.length>5&&void 0!==arguments[5]?arguments[5]:".js-mbs-pagination",l=arguments.length>6&&void 0!==arguments[6]?arguments[6]:".js-mbs-additional-arrow-prev",a=arguments.length>7&&void 0!==arguments[7]?arguments[7]:".js-mbs-additional-arrow-next",u=document.querySelectorAll(e);(0,o.rS)(u)&&(r.ZP.use([r.W_,r.tl,r.xW,r.LW]),u.forEach((function(e){var u=e.querySelector(t),d=e.querySelector(n),f=e.querySelector(i),v=e.querySelector(c),p=e.querySelector(s);if((0,o.rS)([u,d,f,v,p])){var g=p.dataset.labels?p.dataset.labels.split(","):null,h=new r.ZP(u,{speed:800,slidesPerView:1,autoHeight:!0,effect:"fade",fadeEffect:{crossFade:!0},navigation:{nextEl:v,prevEl:f},pagination:{el:p,clickable:!0,renderBullet:function(e,t){var n=null===g?e+1:g[e+1];if(0===e){var r=null===g?e:g[e];return'\n\t\t\t\t\t\t\t<span class="'.concat(t,'">').concat(r,'</span>\n\t\t\t\t\t\t\t<span class="').concat(t,'">').concat(n,"</span>\n\t\t\t\t\t\t")}return'<span class="'.concat(t,'">').concat(n,"</span>")}},scrollbar:{el:d,draggable:!0,dragSize:213},breakpoints:{320:{scrollbar:{dragSize:91}},1024:{scrollbar:{dragSize:213}}}});u.addEventListener("click",(function(e){e.target.closest(l)&&h.slidePrev(),e.target.closest(a)&&h.slideNext()}))}})))}},8688:(e,t,n)=>{n.d(t,{Z:()=>i});var r=n(188),o=(n(2689),n(2348));const i=function(){var e=".js-member-slider",t=".js-member-slider-next",n=".js-member-slider-prev",i=".js-member-slider-pagination",c=document.querySelectorAll(e);(0,o.rS)(c)&&c.forEach((function(e){var o=e.getAttribute("id");if(!o)return console.log("-----"),console.error("Please, set unique id for members slider"),void console.log("-----");!function(e){if(e){var t=e,n=t.children;if(n.length){t.classList.add("swiper"),Array.from(n).forEach((function(e){return e.classList.add("swiper-slide")}));var r='<div class="swiper-wrapper">'.concat(t.innerHTML,"</div>");t.innerHTML=r}}}(e);new r.ZP(e,{modules:[r.W_,r.tl,r.xW],speed:400,loop:!0,effect:"fade",fadeEffect:{crossFade:!0},navigation:{prevEl:"#".concat(o," ").concat(n),nextEl:"#".concat(o," ").concat(t)},pagination:{el:"#".concat(o," ").concat(i),type:"fraction",clickable:!0},slidesPerView:1})}))}},2211:(e,t,n)=>{n.d(t,{Z:()=>o});var r=n(613);const o=function(){(0,r.Z)()}},8458:(e,t,n)=>{n.d(t,{Z:()=>r});const r=function(){}},5866:(e,t,n)=>{n.d(t,{Z:()=>i});var r=n(188),o=n(2348);const i=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:".js-products-section",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:".js-products-slider",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:".js-products-next-button",i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:".js-products-prev-button",c=document.querySelectorAll(e);(0,o.rS)(c)&&(r.ZP.use([r.W_]),c.forEach((function(e){var c=e.querySelector(t),s=e.querySelector(n),l=e.querySelector(i);if((0,o.rS)([c,s,l]))new r.ZP(c,{speed:800,navigation:{nextEl:s,prevEl:l},breakpoints:{320:{slidesPerView:2},768:{slidesPerView:3},1024:{slidesPerView:4}}})})))}},1040:(e,t,n)=>{n.d(t,{Z:()=>r});const r=function(){console.log(1)}},2483:(e,t,n)=>{n.d(t,{Z:()=>r});const r=function(){}},7522:(e,t,n)=>{n.d(t,{Z:()=>o});var r=n(9740);const o=function(){(0,r.Z)()}},613:(e,t,n)=>{n.d(t,{Z:()=>c});var r=n(4183),o=n.n(r),i=n(2348);const c=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:".js-select-element",t=document.querySelectorAll(e);(0,i.rS)(t)&&t.forEach((function(e){var t=e.getAttribute("id");new(o())("#".concat(t),{create:!0,controlInput:null})}))}},3144:(e,t,n)=>{n.d(t,{Z:()=>o});var r=n(613);const o=function(){(0,r.Z)()}},9465:(e,t,n)=>{n.r(t),n.d(t,{default:()=>E});var r=n(8688),o=n(2348);const i=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:".js-popup-close",r="popup--open_state",i="body--popup_open",c=document.querySelectorAll(e),s=document.querySelector(t),l=document.querySelectorAll(n);if(!(0,o.rS)([c,s]))return null;var a=function(){s.classList.remove(r),document.body.classList.remove(i)};return c.forEach((function(e){e.addEventListener("click",(function(e){e.preventDefault(),s.classList.add(r),document.body.classList.add(i)}))})),(0,o.rS)(l)?(l.forEach((function(e){e.addEventListener("click",(function(){return a()}))})),s.addEventListener("click",(function(e){e.target===s&&a()})),null):null};const c=function(){i(".js-popup-email-trigger",".js-popup-email")};const s=function(){i(".js-popup-offer-trigger",".js-popup-offer")};const l=function(){i(".js-popup-equipment-trigger",".js-popup-equipment")};var a=n(613),u=n(7522),d=n(9740),f=n(5287),v=n(1040),p=n(5866),g=n(8458),h=n(4992),m=n(7446),b=n(5073),S=n(8255),Z=n(2483),y=n(2211),j=n(3144);const E=function(){(0,r.Z)(),c(),s(),l(),(0,a.Z)(),(0,u.Z)(),(0,d.Z)(),(0,f.Z)(),(0,v.Z)(),(0,p.Z)(),(0,g.Z)(),(0,h.Z)(),(0,m.Z)(),(0,b.Z)(),(0,S.Z)(),(0,Z.Z)(),(0,y.Z)(),(0,j.Z)()}}}]);