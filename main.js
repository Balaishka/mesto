(()=>{"use strict";function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function t(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var n=function(){function n(e,r){var o=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,n),t(this,"_getTemplate",(function(){return o._cardElement=document.querySelector(o._cardSelector).content.firstElementChild.cloneNode(!0),o._btnLike=o._cardElement.querySelector(".photo__like-btn"),o._btnDelete=o._cardElement.querySelector(".photo__delete-btn"),o._cardImage=o._cardElement.querySelector(".photo__img"),o._cardName=o._cardElement.querySelector(".photo__name"),o._cardLikes=o._cardElement.querySelector(".photo__likes"),o._cardElement})),t(this,"_deleteCard",(function(){o._handleDeleteIconClick(o._cardElement)})),t(this,"_checkOwnerCard",(function(){o._myCard=!1})),t(this,"_checkLike",(function(){return o._likeHave=!1,o._likes.map((function(e){e._id===o._myId&&(o._likeHave=!0)})),o._likeHave})),t(this,"_likeCard",(function(e){o._handleLikeClick(e,o._likeHave)})),t(this,"addActiveLikeBtn",(function(){o._btnLike.classList.add("photo__like-btn_active")})),t(this,"removeActiveLikeBtn",(function(){o._btnLike.classList.remove("photo__like-btn_active")})),t(this,"changeLikes",(function(e,t){o._likes=e,o._likeHave=t,o._likeHave?o.addActiveLikeBtn():o.removeActiveLikeBtn()})),t(this,"_openPhoto",(function(){o._handleCardClick()})),t(this,"_setEventListeners",(function(){o._ownerId!==o._myId?o._btnDelete.remove():o._btnDelete.addEventListener("click",(function(){o._deleteCard(o._cardElement)})),o._btnLike.addEventListener("click",(function(){o._likeCard(o._cardElement)})),o._cardImage.addEventListener("click",(function(){o._openPhoto()}))})),this._name=e.data.name,this._link=e.data.link,this._likes=e.data.likes,this._cardId=e.data.id,this._ownerId=e.data.idOwner,this._myId=e.data.myId,this._handleCardClick=e.handleCardClick,this._handleLikeClick=e.handleLikeClick,this._handleDeleteIconClick=e.handleDeleteIconClick,this._cardSelector=r}var r,o;return r=n,(o=[{key:"createCard",value:function(){return this._getTemplate(),this._cardElement.id=this._cardId,this._cardName.textContent=this._name,this._cardImage.alt=this._name,this._cardImage.src=this._link,this._cardLikes.textContent=this._likes.length,this._checkLike(),this._likeHave?this.addActiveLikeBtn():this.removeActiveLikeBtn(),this._setEventListeners(),this._cardElement}}])&&e(r.prototype,o),Object.defineProperty(r,"prototype",{writable:!1}),n}();function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var i=function(){function e(t,n){var r=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),o(this,"_showInputError",(function(e,t){var n=r._formElement.querySelector(".".concat(e.id,"-error"));e.classList.add(r._formSettings.inputErrorClass),n.textContent=t})),o(this,"_hideInputError",(function(e){var t=r._formElement.querySelector(".".concat(e.id,"-error"));e.classList.remove(r._formSettings.inputErrorClass),t.textContent=""})),o(this,"_checkValid",(function(e){return e.validity.valid?(r._hideInputError(e),!1):(r._showInputError(e,e.validationMessage),!0)})),o(this,"_hasInvalidInput",(function(){return r._inputList.some((function(e){return!e.validity.valid}))})),o(this,"_toggleButtonDisabled",(function(){r._hasInvalidInput()?r.addButtonDisabled():r.removeButtonDisabled()})),o(this,"addButtonDisabled",(function(){r._button.classList.add(r._formSettings.inactiveButtonClass),r._button.setAttribute("disabled","")})),o(this,"removeButtonDisabled",(function(){r._button.classList.remove(r._formSettings.inactiveButtonClass),r._button.removeAttribute("disabled")})),o(this,"_setEventListeners",(function(){r._toggleButtonDisabled(),r._inputList.forEach((function(e){e.addEventListener("input",(function(){r._toggleButtonDisabled(),r._checkValid(e)}))}))})),o(this,"resetErrors",(function(){r._inputList.forEach((function(e){r._hideInputError(e)}))})),this._formSettings=t,this._formElement=n,this._inputList=Array.from(this._formElement.querySelectorAll(this._formSettings.inputSelector)),this._button=this._formElement.querySelector(this._formSettings.submitButtonSelector)}var t,n;return t=e,(n=[{key:"enableValidation",value:function(){this._formElement.addEventListener("submit",(function(e){e.preventDefault()})),this._setEventListeners()}}])&&r(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function c(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var a=function(){function e(t,n){var r=t.items,o=t.renderer;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._renderedItems=r,this.renderer=o,this._container=document.querySelector(n)}var t,n;return t=e,(n=[{key:"renderItems",value:function(){var e=this;this._renderedItems.reverse().forEach((function(t){e.renderer(t)}))}},{key:"addItem",value:function(e){this._container.prepend(e)}}])&&c(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function u(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var l=function(){function e(t){var n,r,o=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),r=function(e){"Escape"===e.key&&o.close()},(n="_handleEscClose")in this?Object.defineProperty(this,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):this[n]=r,this._selector=t,this._popup=document.querySelector(this._selector)}var t,n;return t=e,(n=[{key:"open",value:function(){this._popup.classList.add("popup_opened"),document.addEventListener("keydown",this._handleEscClose)}},{key:"close",value:function(){this._popup.classList.remove("popup_opened"),document.removeEventListener("keydown",this._handleEscClose)}},{key:"setEventListeners",value:function(){var e=this;this._popup.querySelector(".popup__close-btn").addEventListener("click",(function(){e.close()})),this._popup.addEventListener("click",(function(t){t.currentTarget===t.target&&e.close()}))}}])&&u(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function s(e){return s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},s(e)}function f(e,t){return f=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},f(e,t)}function d(e,t){if(t&&("object"===s(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return p(e)}function p(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function h(){return h="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=_(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},h.apply(this,arguments)}function _(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=y(e)););return e}function y(e){return y=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},y(e)}var m=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&f(e,t)}(i,e);var t,n,r,o=(n=i,r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=y(n);if(r){var o=y(this).constructor;e=Reflect.construct(t,arguments,o)}else e=t.apply(this,arguments);return d(this,e)});function i(e){var t,n,r,c,a;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,i),a=function(e){var r=e.name,o=e.link;h((t=p(n),y(i.prototype)),"open",t).call(t),n._title.textContent=r,n._image.alt=r,n._image.src=o},(c="open")in(r=p(n=o.call(this,e)))?Object.defineProperty(r,c,{value:a,enumerable:!0,configurable:!0,writable:!0}):r.open=a,n._title=n._popup.querySelector(".popup__picture-title"),n._image=n._popup.querySelector(".popup__picture"),n}return t=i,Object.defineProperty(t,"prototype",{writable:!1}),t}(l);function b(e){return b="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},b(e)}function v(e,t){return v=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},v(e,t)}function k(e,t){if(t&&("object"===b(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return g(e)}function g(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function w(){return w="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=E(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},w.apply(this,arguments)}function E(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=S(e)););return e}function S(e){return S=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},S(e)}function C(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var O=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&v(e,t)}(i,e);var t,n,r,o=(n=i,r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=S(n);if(r){var o=S(this).constructor;e=Reflect.construct(t,arguments,o)}else e=t.apply(this,arguments);return k(this,e)});function i(e,t){var n,r,c,a=t.handleFormSubmit;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,i),C(g(c=o.call(this,e)),"_getInputValues",(function(){return c._formValues={},c._inputs=c._popup.querySelectorAll(".form__text"),c._inputs.forEach((function(e){c._formValues[e.name]=e.value})),c._formValues})),C(g(c),"setEventListeners",(function(){w((n=g(c),S(i.prototype)),"setEventListeners",n).call(n),c._form=c._popup.querySelector(".form"),c._form.addEventListener("submit",(function(){c._handleFormSubmit(c._getInputValues())}))})),C(g(c),"close",(function(){w((r=g(c),S(i.prototype)),"close",r).call(r),c._form.reset()})),c._handleFormSubmit=a,c}return t=i,Object.defineProperty(t,"prototype",{writable:!1}),t}(l);function L(e){return L="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},L(e)}function j(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function P(){return P="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=I(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},P.apply(this,arguments)}function I(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=x(e)););return e}function A(e,t){return A=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},A(e,t)}function q(e,t){if(t&&("object"===L(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function x(e){return x=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},x(e)}var B=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&A(e,t)}(c,e);var t,n,r,o,i=(r=c,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=x(r);if(o){var n=x(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return q(this,e)});function c(e,t){var n,r=t.handleFormSubmit;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,c),(n=i.call(this,e))._handleFormSubmit=r,n}return t=c,(n=[{key:"open",value:function(e){P(x(c.prototype),"open",this).call(this),this._card=e}},{key:"setEventListeners",value:function(){var e=this;P(x(c.prototype),"setEventListeners",this).call(this),this._popup.querySelector(".form").addEventListener("submit",(function(t){t.preventDefault(),e._handleFormSubmit(e._card)}))}}])&&j(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),c}(l);function D(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var T=function(){function e(t){var n=t.selectorName,r=t.selectorAbout,o=t.selectorAvatar;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._selectorName=document.querySelector(n),this._selectorAbout=document.querySelector(r),this._selectorAvatar=document.querySelector(o)}var t,n;return t=e,(n=[{key:"getUserAllInfo",value:function(e){this._selectorName.textContent=e.name,this._selectorAbout.textContent=e.about,this._selectorAvatar.src=e.avatar,this.id=e._id}},{key:"getAvatar",value:function(){return{link:this._selectorAvatar.src}}},{key:"getUserInfo",value:function(){return{name:this._selectorName.textContent,about:this._selectorAbout.textContent}}},{key:"setAvatar",value:function(e){this._selectorAvatar.src=e.avatar}},{key:"setUserInfo",value:function(e){this._selectorName.textContent=e.name,this._selectorAbout.textContent=e.about}}])&&D(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function R(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var U=function(){function e(t){var n=t.baseUrl,r=t.headers;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._url=n,this._headers=r}var t,n;return t=e,(n=[{key:"_fetch",value:function(e,t){return fetch("".concat(this._url).concat(e),{method:t,headers:this._headers}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))}))}},{key:"_fetchWithBody",value:function(e,t,n){return fetch("".concat(this._url).concat(e),{method:t,headers:this._headers,body:JSON.stringify(n)}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))}))}},{key:"getAllCards",value:function(){return this._fetch("cards","GET")}},{key:"getLikesCard",value:function(e){return this._fetch("cards/".concat(e),"GET")}},{key:"addLikeCard",value:function(e){return this._fetch("cards/".concat(e,"/likes"),"PUT")}},{key:"deleteLikeCard",value:function(e){return this._fetch("cards/".concat(e,"/likes"),"DELETE")}},{key:"addNewCard",value:function(e){return this._fetchWithBody("cards","POST",e)}},{key:"deleteCard",value:function(e){return this._fetch("cards/".concat(e),"DELETE")}},{key:"getAllUserInfo",value:function(){return this._fetch("users/me","GET")}},{key:"setUserInfo",value:function(e){return this._fetchWithBody("users/me","PATCH",e)}},{key:"setUserAvatar",value:function(e){return this._fetchWithBody("users/me/avatar","PATCH",e)}},{key:"getAllNeededData",value:function(){return Promise.all([this.getAllUserInfo(),this.getAllCards()])}}])&&R(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}(),N=document.querySelector(".profile__edit-btn"),V=document.querySelector(".profile__add-btn"),F=document.querySelector(".profile__avatar"),H=document.querySelector(".form_edit"),W=document.querySelector(".form_add-photo"),G=document.querySelector(".form_edit-avatar"),M={inputSelector:".form__text",submitButtonSelector:".form__btn",inactiveButtonClass:"form__btn_disabled",inputErrorClass:"form__text_invalid"},z=document.querySelector(".form__text_type_name"),J=document.querySelector(".form__text_type_about"),$=document.querySelector(".form__btn_type_edit"),K=document.querySelector(".form__btn_type_edit-avatar"),Q=document.querySelector(".form__btn_type_add-photo");function X(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var Y=new T({selectorName:".profile__name",selectorAbout:".profile__about",selectorAvatar:".profile__avatar-img"}),Z=new i(M,H),ee=new i(M,W),te=new i(M,G),ne=new O(".popup_name_edit",{handleFormSubmit:function(e){$.textContent="Сохранение...",ce.setUserInfo({name:e["edit-name"],about:e["edit-about"]}).then((function(e){Y.setUserInfo(e),ne.close()})).catch((function(e){console.log("Ошибка: ".concat(e.status))})).finally((function(){$.textContent="Сохранить"}))}}),re=new O(".popup_name_edit-avatar",{handleFormSubmit:function(e){K.textContent="Сохранение...",ce.setUserAvatar({avatar:e["edit-avatar-link"]}).then((function(e){Y.setAvatar(e),K.textContent="Сохранить",re.close()})).catch((function(e){console.log("Ошибка: ".concat(e.status))}))}}),oe=new m(".popup_name_picture"),ie=new B(".popup_name_delete-photo",{handleFormSubmit:function(e){ce.deleteCard(e.id).then((function(){e.remove(),ie.close()})).catch((function(e){console.log("Ошибка: ".concat(e.status))}))}});ie.setEventListeners(),re.setEventListeners(),N.addEventListener("click",(function(){var e=Y.getUserInfo();z.value=e.name,J.value=e.about,Z.resetErrors(),Z.removeButtonDisabled(),ne.open()})),F.addEventListener("click",(function(){te.resetErrors(),te.addButtonDisabled(),re.open()}));var ce=new U({baseUrl:"https://mesto.nomoreparties.co/v1/cohort-41/",headers:{"content-type":"application/json",authorization:"fc4c8120-00e8-40b3-bbab-d69ed1e171f6"}});ce.getAllNeededData().then((function(e){var t,r,o=(r=2,function(e){if(Array.isArray(e))return e}(t=e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,i=[],c=!0,a=!1;try{for(n=n.call(e);!(c=(r=n.next()).done)&&(i.push(r.value),!t||i.length!==t);c=!0);}catch(e){a=!0,o=e}finally{try{c||null==n.return||n.return()}finally{if(a)throw o}}return i}}(t,r)||function(e,t){if(e){if("string"==typeof e)return X(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?X(e,t):void 0}}(t,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),i=o[0],c=o[1];Y.getUserAllInfo(i);var u=new a({items:c,renderer:function(e){var t=new n({data:{name:e.name,link:e.link,likes:e.likes,id:e._id,idOwner:e.owner._id,myId:i._id},handleCardClick:function(){oe.open({name:e.name,link:e.link})},handleLikeClick:function(n,r){r?ce.deleteLikeCard(n.id).then((function(t){n.querySelector(".photo__likes").textContent=t.likes.length,e.likes=t.likes})).then((function(){t.changeLikes(e.likes,!1)})).catch((function(e){console.log("Ошибка: ".concat(e.status))})):ce.addLikeCard(n.id).then((function(t){n.querySelector(".photo__likes").textContent=t.likes.length,e.likes=t.likes})).then((function(){t.changeLikes(e.likes,!0)})).catch((function(e){console.log("Ошибка: ".concat(e.status))}))},handleDeleteIconClick:function(e){ie.open(e)}},".photo-template"),r=t.createCard();u.addItem(r)}},".photos__list");u.renderItems();var l=new O(".popup_name_add-photo",{handleFormSubmit:function(e){Q.textContent="Создание...",ce.addNewCard({name:e["add-photo-title"],link:e["add-photo-link"]}).then((function(e){u.renderer(e),l.close(),Q.textContent="Создать"})).catch((function(e){console.log("Ошибка: ".concat(e.status))}))}});l.setEventListeners(),V.addEventListener("click",(function(){ee.resetErrors(),ee.addButtonDisabled(),l.open()}))})).catch((function(e){console.log("Ошибка: ".concat(e.status))})),Z.enableValidation(),ee.enableValidation(),te.enableValidation(),ne.setEventListeners(),oe.setEventListeners()})();