"use strict";function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}var _createClass=function(){function t(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}(),toastr=function(){function t(e){return _classCallCheck(this,t),this.container=null,this.listener=null,this.toastId=0,this.toastType={error:"error",info:"info",success:"success",warning:"warning"},this.previousToast=void 0,this.options=e,this}return _createClass(t,[{key:"getContainer",value:function(t,e){return"undefined"==typeof t&&(t=this.getOptions()),this.container=document.getElementById(t.containerId),null!==this.container?this.container:(e&&(this.container=this.createContainer(t)),this.container)}},{key:"error",value:function(t,e,n){return this.notify({type:this.toastType.error,iconClass:this.getOptions().iconClasses.error,message:t,optionsOverride:n,title:e})}},{key:"info",value:function(t,e,n){return this.notify({type:this.toastType.info,iconClass:this.getOptions().iconClasses.info,message:t,optionsOverride:n,title:e})}},{key:"success",value:function(t,e,n){return this.notify({type:this.toastType.success,iconClass:this.getOptions().iconClasses.success,message:t,optionsOverride:n,title:e})}},{key:"warning",value:function(t,e,n){return this.notify({type:this.toastType.warning,iconClass:this.getOptions().iconClasses.warning,message:t,optionsOverride:n,title:e})}},{key:"subscribe",value:function(t){this.listener=t}},{key:"clear",value:function(t,e){var n=this.getOptions();null===this.container&&this.getContainer(n,!1),this.clearToast(t,n,e)||this.clearContainer(n)}},{key:"remove",value:function(t){var e=this.getOptions();return"undefined"==typeof this.container&&this.getContainer(e,!1),"undefined"==typeof t&&t.matches(":focus")?void this.removeToast(t):void(this.container.hasChildNodes()||this.container.remove())}},{key:"clearContainer",value:function(t){if(this.container)for(var e=this.container.children.length,n=e-1;n>=0;--n){var i=this.container.children[n];this.clearToast(i,t)}}},{key:"clearToast",value:function(t,e,n){if("undefined"!=typeof t){var i=n&&n.force?n.force:!1;if(i||!t.matches(":focus"))return this.removeToast(t),!0}return!1}},{key:"removeToast",value:function(t){"undefined"==typeof this.container&&(this.container=this.getContainer()),this.isElementVisible(t)||(t.parentNode.removeChild(t),t=null,0===this.container.childNodes.length&&this.container.parentNode&&(this.container.parentNode.removeChild(this.container),this.previousToast=void 0))}},{key:"createContainer",value:function(t){return this.container=document.createElement("div"),this.container.classList.add(t.positionClass),this.container.setAttribute("id",t.containerId),this.container.setAttribute("aria-live","polite"),this.container.setAttribute("role","alert"),document.querySelector(t.target).appendChild(this.container),this.container}},{key:"getDefaultOptions",value:function(){return{tapToDismiss:!0,toastClass:"toast",containerId:"toast-container",debug:!1,showMethod:"fadeIn",showDuration:300,showEasing:"swing",onShown:void 0,hideMethod:"fadeOut",hideDuration:1e3,hideEasing:"swing",onHidden:void 0,extendedTimeOut:1e3,iconClasses:{error:"toast-error",info:"toast-info",success:"toast-success",warning:"toast-warning"},iconClass:"toast-info",positionClass:"toast-top-left",timeOut:5e3,titleClass:"toast-title",messageClass:"toast-message",target:"body",closeHtml:"button",newestOnTop:!0,preventDuplicates:!1,progressBar:!1}}},{key:"publish",value:function(t){"undefined"!=typeof this.listener&&null!==this.listener&&this.listener(t)}},{key:"notify",value:function(t){function e(){s(),r(),c(),l(),u()}function n(){O.addEventListener("mouseover",v),O.addEventListener("mouseout",p),!g.onclick&&g.tapToDismiss&&O.click(h),g.closeButton&&E&&E.click(function(t){t.stopPropagation?t.stopPropagation():void 0!==t.cancelBubble&&t.cancelBubble!==!0&&(t.cancelBubble=!0),h(!0)}),g.onclick&&O.click(function(){g.onclick(),h()})}function i(){console.log("Appending toast to container.",O),a.call(this),"function"==typeof g.onShown&&g.onShown();var t=function(t){console.log("Toast animation in completed.",t),g.timeOut>0&&(T=setTimeout(h,g.timeOut),H.maxHideTime=parseFloat(g.timeOut),H.hideEta=(new Date).getTime()+H.maxHideTime,g.progressBar&&(H.intervalId=setInterval(m,10)))};o(O,t)}function o(t,e){var n=t.animate([{opacity:0},{opacity:1}],{duration:g.showDuration,iterations:1,delay:0});n.onfinish=e}function s(){"undefined"!=typeof t.iconClass&&O.classList.add(g.toastClass)}function a(){var t=this.getContainer();if(g.newestOnTop){var e=t.firstChild;t.insertBefore(O,e)}else t.appendChild(O);this.container=t}function r(){"undefined"!=typeof t.title&&(w.innerHTML=t.title,w.classList.add(g.titleClass),O.appendChild(w))}function c(){if("undefined"!=typeof t.message){var e=document.createElement("div");e.innerHTML=t.message,b.appendChild(e),b.classList.add(g.messageClass),O.appendChild(b)}}function l(){"undefined"!=typeof g.closeButton&&g.closeButton&&(E.classList.add("toast-close-button"),E.setAttribute("role","button"),E.setAttribute("type","button"),O.appendChild(E))}function u(){"undefined"!=typeof g.progressBar&&g.progressBar&&(k.classList.add("toast-progress"),O.appendChild(k))}function d(t,e){if(t.preventDuplicates){if(e.message===this.previousToast)return!0;this.previousToast=e.message}return!1}function h(t){if(!O.matches(":focus")||t){clearTimeout(H.intervalId),console.log("Hiding toast now.",O);{this.removeToast}"function"==typeof g.onHidden&&g.onHidden();var e=function(t){console.log("Toast is now hiding.",t);var e=O.parentNode;null!==e&&(e.removeChild(O),e.hasChildNodes()||(C.parentNode.removeChild(C),this.previousToast=void 0)),O=null};f(O,e)}}function f(t,e){var n=t.animate([{opacity:1},{opacity:0}],{duration:g.hideDuration,iterations:1,delay:0});n.onfinish=e}function p(){(g.timeOut>0||g.extendedTimeOut>0)&&(T=setTimeout(h,g.extendedTimeOut),H.maxHideTime=parseFloat(g.extendedTimeOut),H.hideEta=(new Date).getTime()+H.maxHideTime)}function v(){clearTimeout(T),H.hideEta=0}function m(){var t=(H.hideEta-(new Date).getTime())/H.maxHideTime*100;k.style.width=t+"%"}var g=this.getOptions(),y=t.iconClass||g.iconClass;if("undefined"!=typeof t.optionsOverride&&(g=this.extend(g,t.optionsOverride),y=t.optionsOverride.iconClass||y),!d.call(this,g,t)){this.toastId++;var C=this.getContainer(g,!0),T=null,O=document.createElement("div");O.classList.add(y);var w=document.createElement("div"),b=document.createElement("div"),k=document.createElement("div"),E=document.createElement("button");E.innerHtml=g.closeHtml;var H={intervalId:null,hideEta:null,maxHideTime:null},D={toastId:this.toastId,state:"visible",startTime:new Date,options:g,map:t};return e.call(this),i.call(this),n(),this.publish(D),g.debug&&console&&console.log(D),O}}},{key:"getOptions",value:function(){return this.extend(this.getDefaultOptions(),this.options)}},{key:"isElementVisible",value:function(t){return t.offsetWidth>0&&t.offsetHeight>0}},{key:"extend",value:function(t,e){var n,i={};for(n in t)Object.prototype.hasOwnProperty.call(t,n)&&(i[n]=t[n]);for(n in e)Object.prototype.hasOwnProperty.call(e,n)&&(i[n]=e[n]);return i}}]),t}();"undefined"!=typeof window&&(window.toastr=toastr);
//# sourceMappingURL=dist/toastr.js.map