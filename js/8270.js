"use strict";(self.webpackChunkglivera_webpack_template=self.webpackChunkglivera_webpack_template||[]).push([[8270],{5129:(e,t,i)=>{i.d(t,{Z:()=>a});var r=i(188),s=i(2348);const n=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:".js-resources-section",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:".js-resources-slider",i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:".js-resources-next-button",n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:".js-resources-prev-button",a=document.querySelectorAll(e);(0,s.rS)(a)&&(r.ZP.use([r.W_]),a.forEach((function(e){var a=e.querySelector(t),o=e.querySelector(i),l=e.querySelector(n);if((0,s.rS)([a,o,l]))new r.ZP(a,{speed:800,slidesPerView:"auto",navigation:{nextEl:o,prevEl:l}})})))};const a=function(){n()}},990:(e,t,i)=>{i.d(t,{Z:()=>s});var r=i(3046);const s=function(){(0,r.Z)()}},3046:(e,t,i)=>{i.d(t,{Z:()=>o});var r=function e(t,i){if(t===i)return!0;if(t&&i&&"object"==typeof t&&"object"==typeof i){if(t.constructor!==i.constructor)return!1;var r,s,n;if(Array.isArray(t)){if((r=t.length)!=i.length)return!1;for(s=r;0!=s--;)if(!e(t[s],i[s]))return!1;return!0}if(t.constructor===RegExp)return t.source===i.source&&t.flags===i.flags;if(t.valueOf!==Object.prototype.valueOf)return t.valueOf()===i.valueOf();if(t.toString!==Object.prototype.toString)return t.toString()===i.toString();if((r=(n=Object.keys(t)).length)!==Object.keys(i).length)return!1;for(s=r;0!=s--;)if(!Object.prototype.hasOwnProperty.call(i,n[s]))return!1;for(s=r;0!=s--;){var a=n[s];if(!e(t[a],i[a]))return!1}return!0}return t!=t&&i!=i};const s="__googleMapsScriptId";var n;!function(e){e[e.INITIALIZED=0]="INITIALIZED",e[e.LOADING=1]="LOADING",e[e.SUCCESS=2]="SUCCESS",e[e.FAILURE=3]="FAILURE"}(n||(n={}));class a{constructor({apiKey:e,authReferrerPolicy:t,channel:i,client:n,id:o=s,language:l,libraries:c=[],mapIds:h,nonce:u,region:d,retries:g=3,url:p="https://maps.googleapis.com/maps/api/js",version:f}){if(this.CALLBACK="__googleMapsCallback",this.callbacks=[],this.done=!1,this.loading=!1,this.errors=[],this.apiKey=e,this.authReferrerPolicy=t,this.channel=i,this.client=n,this.id=o||s,this.language=l,this.libraries=c,this.mapIds=h,this.nonce=u,this.region=d,this.retries=g,this.url=p,this.version=f,a.instance){if(!r(this.options,a.instance.options))throw new Error(`Loader must not be called again with different options. ${JSON.stringify(this.options)} !== ${JSON.stringify(a.instance.options)}`);return a.instance}a.instance=this}get options(){return{version:this.version,apiKey:this.apiKey,channel:this.channel,client:this.client,id:this.id,libraries:this.libraries,language:this.language,region:this.region,mapIds:this.mapIds,nonce:this.nonce,url:this.url,authReferrerPolicy:this.authReferrerPolicy}}get status(){return this.errors.length?n.FAILURE:this.done?n.SUCCESS:this.loading?n.LOADING:n.INITIALIZED}get failed(){return this.done&&!this.loading&&this.errors.length>=this.retries+1}createUrl(){let e=this.url;return e+=`?callback=${this.CALLBACK}`,this.apiKey&&(e+=`&key=${this.apiKey}`),this.channel&&(e+=`&channel=${this.channel}`),this.client&&(e+=`&client=${this.client}`),this.libraries.length>0&&(e+=`&libraries=${this.libraries.join(",")}`),this.language&&(e+=`&language=${this.language}`),this.region&&(e+=`&region=${this.region}`),this.version&&(e+=`&v=${this.version}`),this.mapIds&&(e+=`&map_ids=${this.mapIds.join(",")}`),this.authReferrerPolicy&&(e+=`&auth_referrer_policy=${this.authReferrerPolicy}`),e}deleteScript(){const e=document.getElementById(this.id);e&&e.remove()}load(){return this.loadPromise()}loadPromise(){return new Promise(((e,t)=>{this.loadCallback((i=>{i?t(i.error):e(window.google)}))}))}loadCallback(e){this.callbacks.push(e),this.execute()}setScript(){if(document.getElementById(this.id))return void this.callback();const e=this.createUrl(),t=document.createElement("script");t.id=this.id,t.type="text/javascript",t.src=e,t.onerror=this.loadErrorCallback.bind(this),t.defer=!0,t.async=!0,this.nonce&&(t.nonce=this.nonce),document.head.appendChild(t)}reset(){this.deleteScript(),this.done=!1,this.loading=!1,this.errors=[],this.onerrorEvent=null}resetIfRetryingFailed(){this.failed&&this.reset()}loadErrorCallback(e){if(this.errors.push(e),this.errors.length<=this.retries){const e=this.errors.length*Math.pow(2,this.errors.length);console.log(`Failed to load Google Maps script, retrying in ${e} ms.`),setTimeout((()=>{this.deleteScript(),this.setScript()}),e)}else this.onerrorEvent=e,this.callback()}setCallback(){window.__googleMapsCallback=this.callback.bind(this)}callback(){this.done=!0,this.loading=!1,this.callbacks.forEach((e=>{e(this.onerrorEvent)})),this.callbacks=[]}execute(){if(this.resetIfRetryingFailed(),this.done)this.callback();else{if(window.google&&window.google.maps&&window.google.maps.version)return console.warn("Google Maps already loaded outside @googlemaps/js-api-loader.This may result in undesirable behavior as options and script parameters may not match."),void this.callback();this.loading||(this.loading=!0,this.setCallback(),this.setScript())}}}const o=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:".js-map",t=document.querySelectorAll(e);t.length>0&&t.forEach((function(e){var t=parseFloat(e.dataset.lat),i=parseFloat(e.dataset.lng),r=e.dataset.markerUrl;if(!Number.isNaN(t)&&!Number.isNaN(i)){var s=new a({apiKey:e.dataset.key,version:"weekly",libraries:["places"]}),n={center:{lat:t,lng:i},zoom:parseFloat(e.dataset.zoom),disableDefaultUI:!0,styles:[{stylers:[{saturation:-100}]}]};s.load().then((function(s){var a=new s.maps.Map(e,n);new s.maps.Marker({position:new s.maps.LatLng(t,i),icon:{url:r,size:new s.maps.Size(32,56)},map:a,size:new s.maps.Size(5,5)})})).catch((function(e){console.log(e)}))}}))}},4907:(e,t,i)=>{i.d(t,{Z:()=>r});i(2689);const r=function(){}},8270:(e,t,i)=>{i.r(t),i.d(t,{default:()=>a});var r=i(5129),s=i(4907),n=i(990);const a=function(){(0,s.Z)(),(0,n.Z)(),(0,r.Z)()}}}]);