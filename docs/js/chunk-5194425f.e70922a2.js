(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5194425f"],{"13b3":function(t,e,n){},"166a":function(t,e,n){},"1c2a":function(t,e,n){t.exports=n.p+"img/foto2.862cce8b.png"},"26e9":function(t,e,n){"use strict";var i=n("23e7"),r=n("e8b5"),s=[].reverse,o=[1,2];i({target:"Array",proto:!0,forced:String(o)===String(o.reverse())},{reverse:function(){return r(this)&&(this.length=this.length),s.call(this)}})},5353:function(t,e,n){t.exports=n.p+"img/foto3.a401a66c.png"},"63b7":function(t,e,n){},"9d26":function(t,e,n){"use strict";var i=n("132d");e["a"]=i["a"]},afdd:function(t,e,n){"use strict";var i=n("8336");e["a"]=i["a"]},b53f:function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",[n("Navbar"),n("v-layout",{attrs:{wrap:"","mt-6":"","justify-center":""}},[n("p",{staticClass:"font-weight-thin display-2 text-center"},[t._v("APRENDE Y REGALA HECHO A MANO")]),n("v-carousel",{attrs:{cycle:"",height:"400","hide-delimiter-background":"","show-arrows-on-hover":""}},t._l(t.items,(function(t,e){return n("v-carousel-item",{key:e,attrs:{src:t.src,"reverse-transition":"fade-transition",transition:"fade-transition"}})})),1)],1),n("br"),n("br"),n("p",{staticClass:"font-weight-thin display-2 text-center"},[t._v("LO MÁS POPULAR")]),n("v-container",{attrs:{fluid:""}},[n("v-row",{attrs:{dense:""}},t._l(t.cards,(function(e){return n("v-col",{key:e.title,attrs:{cols:e.flex}},[n("v-card",[n("v-img",{staticClass:"white--text align-end",attrs:{src:e.src,gradient:"to bottom, rgba(0,0,0,.1), rgba(0,0,0,.3)",height:"300px"}},[n("v-card-title",{domProps:{textContent:t._s(e.title)}})],1),n("v-card-actions",[n("v-btn",{attrs:{text:"",color:"#F2913D"}},[t._v(" Detalles ")]),n("v-btn",{attrs:{text:"",color:"#F2A74B"}},[t._v(" Tutorial ")]),n("v-spacer"),n("v-btn",{attrs:{icon:""}},[n("v-icon",[t._v("mdi-shopping")])],1),n("v-btn",{attrs:{icon:""}},[n("v-icon",[t._v("mdi-share")])],1)],1)],1)],1)})),1)],1),n("Footer")],1)},r=[],s=n("d178"),o=n("fd2d"),a={components:{Navbar:s["a"],Footer:o["a"]},data:function(){return{items:[{src:n("c23d")},{src:n("1c2a")},{src:n("5353")}],icons:["mdi-facebook","fab fa-twitter","fab fa-google-plus","fab fa-linkedin","fab fa-instagram"],cards:[{title:"Aros girasol",src:n("587c"),flex:4},{title:"Collar circular",src:n("5321"),flex:4},{title:"Aros celestiales",src:n("7706"),flex:4}]}}},c=a,u=n("2877"),l=n("6544"),h=n.n(l),d=n("8336"),f=n("b0af"),v=n("99d9"),p=(n("a4d3"),n("4de4"),n("4160"),n("a9e3"),n("e439"),n("dbb4"),n("b64b"),n("159b"),n("2fa7")),m=(n("63b7"),n("99af"),n("7db0"),n("c740"),n("26e9"),n("13b3"),n("afdd")),g=n("9d26"),b=(n("caad"),n("c975"),n("fb6a"),n("a434"),n("2532"),n("166a"),n("a452")),w=n("7560"),y=n("58df"),O=n("d9bd");function x(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,i)}return n}function j(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?x(n,!0).forEach((function(e){Object(p["a"])(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):x(n).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var I=Object(y["a"])(b["a"],w["a"]).extend({name:"base-item-group",props:{activeClass:{type:String,default:"v-item--active"},mandatory:Boolean,max:{type:[Number,String],default:null},multiple:Boolean},data:function(){return{internalLazyValue:void 0!==this.value?this.value:this.multiple?[]:void 0,items:[]}},computed:{classes:function(){return j({"v-item-group":!0},this.themeClasses)},selectedIndex:function(){return this.selectedItem&&this.items.indexOf(this.selectedItem)||-1},selectedItem:function(){if(!this.multiple)return this.selectedItems[0]},selectedItems:function(){var t=this;return this.items.filter((function(e,n){return t.toggleMethod(t.getValue(e,n))}))},selectedValues:function(){return null==this.internalValue?[]:Array.isArray(this.internalValue)?this.internalValue:[this.internalValue]},toggleMethod:function(){var t=this;if(!this.multiple)return function(e){return t.internalValue===e};var e=this.internalValue;return Array.isArray(e)?function(t){return e.includes(t)}:function(){return!1}}},watch:{internalValue:function(){this.$nextTick(this.updateItemsState)}},created:function(){this.multiple&&!Array.isArray(this.internalValue)&&Object(O["c"])("Model must be bound to an array if the multiple property is true.",this)},methods:{genData:function(){return{class:this.classes}},getValue:function(t,e){return null==t.value||""===t.value?e:t.value},onClick:function(t){this.updateInternalValue(this.getValue(t,this.items.indexOf(t)))},register:function(t){var e=this,n=this.items.push(t)-1;t.$on("change",(function(){return e.onClick(t)})),this.mandatory&&null==this.internalLazyValue&&this.updateMandatory(),this.updateItem(t,n)},unregister:function(t){if(!this._isDestroyed){var e=this.items.indexOf(t),n=this.getValue(t,e);this.items.splice(e,1);var i=this.selectedValues.indexOf(n);if(!(i<0)){if(!this.mandatory)return this.updateInternalValue(n);this.multiple&&Array.isArray(this.internalValue)?this.internalValue=this.internalValue.filter((function(t){return t!==n})):this.internalValue=void 0,this.selectedItems.length||this.updateMandatory(!0)}}},updateItem:function(t,e){var n=this.getValue(t,e);t.isActive=this.toggleMethod(n)},updateItemsState:function(){if(this.mandatory&&!this.selectedItems.length)return this.updateMandatory();this.items.forEach(this.updateItem)},updateInternalValue:function(t){this.multiple?this.updateMultiple(t):this.updateSingle(t)},updateMandatory:function(t){if(this.items.length){var e=this.items.slice();t&&e.reverse();var n=e.find((function(t){return!t.disabled}));if(n){var i=this.items.indexOf(n);this.updateInternalValue(this.getValue(n,i))}}},updateMultiple:function(t){var e=Array.isArray(this.internalValue)?this.internalValue:[],n=e.slice(),i=n.findIndex((function(e){return e===t}));this.mandatory&&i>-1&&n.length-1<1||null!=this.max&&i<0&&n.length+1>this.max||(i>-1?n.splice(i,1):n.push(t),this.internalValue=n)},updateSingle:function(t){var e=t===this.internalValue;this.mandatory&&e||(this.internalValue=e?void 0:t)}},render:function(t){return t("div",this.genData(),this.$slots.default)}}),V=(I.extend({name:"v-item-group",provide:function(){return{itemGroup:this}}}),n("80d2")),C=function(t){var e=t.touchstartX,n=t.touchendX,i=t.touchstartY,r=t.touchendY,s=.5,o=16;t.offsetX=n-e,t.offsetY=r-i,Math.abs(t.offsetY)<s*Math.abs(t.offsetX)&&(t.left&&n<e-o&&t.left(t),t.right&&n>e+o&&t.right(t)),Math.abs(t.offsetX)<s*Math.abs(t.offsetY)&&(t.up&&r<i-o&&t.up(t),t.down&&r>i+o&&t.down(t))};function T(t,e){var n=t.changedTouches[0];e.touchstartX=n.clientX,e.touchstartY=n.clientY,e.start&&e.start(Object.assign(t,e))}function P(t,e){var n=t.changedTouches[0];e.touchendX=n.clientX,e.touchendY=n.clientY,e.end&&e.end(Object.assign(t,e)),C(e)}function A(t,e){var n=t.changedTouches[0];e.touchmoveX=n.clientX,e.touchmoveY=n.clientY,e.move&&e.move(Object.assign(t,e))}function D(t){var e={touchstartX:0,touchstartY:0,touchendX:0,touchendY:0,touchmoveX:0,touchmoveY:0,offsetX:0,offsetY:0,left:t.left,right:t.right,up:t.up,down:t.down,start:t.start,move:t.move,end:t.end};return{touchstart:function(t){return T(t,e)},touchend:function(t){return P(t,e)},touchmove:function(t){return A(t,e)}}}function $(t,e,n){var i=e.value,r=i.parent?t.parentElement:t,s=i.options||{passive:!0};if(r){var o=D(e.value);r._touchHandlers=Object(r._touchHandlers),r._touchHandlers[n.context._uid]=o,Object(V["j"])(o).forEach((function(t){r.addEventListener(t,o[t],s)}))}}function B(t,e,n){var i=e.value.parent?t.parentElement:t;if(i&&i._touchHandlers){var r=i._touchHandlers[n.context._uid];Object(V["j"])(r).forEach((function(t){i.removeEventListener(t,r[t])})),delete i._touchHandlers[n.context._uid]}}var E={inserted:$,unbind:B},_=E;function S(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,i)}return n}function k(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?S(n,!0).forEach((function(e){Object(p["a"])(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):S(n).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var H=I.extend({name:"v-window",provide:function(){return{windowGroup:this}},directives:{Touch:_},props:{activeClass:{type:String,default:"v-window-item--active"},continuous:Boolean,mandatory:{type:Boolean,default:!0},nextIcon:{type:[Boolean,String],default:"$next"},prevIcon:{type:[Boolean,String],default:"$prev"},reverse:{type:Boolean,default:void 0},showArrows:Boolean,showArrowsOnHover:Boolean,touch:Object,touchless:Boolean,value:{required:!1},vertical:Boolean},data:function(){return{changedByDelimiters:!1,internalHeight:void 0,transitionHeight:void 0,transitionCount:0,isBooted:!1,isReverse:!1}},computed:{isActive:function(){return this.transitionCount>0},classes:function(){return k({},I.options.computed.classes.call(this),{"v-window--show-arrows-on-hover":this.showArrowsOnHover})},computedTransition:function(){if(!this.isBooted)return"";var t=this.vertical?"y":"x",e=this.internalReverse?"-reverse":"";return"v-window-".concat(t).concat(e,"-transition")},hasActiveItems:function(){return Boolean(this.items.find((function(t){return!t.disabled})))},hasNext:function(){return this.continuous||this.internalIndex<this.items.length-1},hasPrev:function(){return this.continuous||this.internalIndex>0},internalIndex:function(){var t=this;return this.items.findIndex((function(e,n){return t.internalValue===t.getValue(e,n)}))},internalReverse:function(){return void 0!==this.reverse?this.reverse:this.isReverse}},watch:{internalIndex:"updateReverse"},mounted:function(){var t=this;window.requestAnimationFrame((function(){return t.isBooted=!0}))},methods:{genContainer:function(){var t=[this.$slots.default];return this.showArrows&&t.push(this.genControlIcons()),this.$createElement("div",{staticClass:"v-window__container",class:{"v-window__container--is-active":this.isActive},style:{height:this.internalHeight||this.transitionHeight}},t)},genIcon:function(t,e,n){var i=this;return this.$createElement("div",{staticClass:"v-window__".concat(t)},[this.$createElement(m["a"],{props:{icon:!0},attrs:{"aria-label":this.$vuetify.lang.t("$vuetify.carousel.".concat(t))},on:{click:function(){i.changedByDelimiters=!0,n()}}},[this.$createElement(g["a"],{props:{large:!0}},e)])])},genControlIcons:function(){var t=[],e=this.$vuetify.rtl?this.nextIcon:this.prevIcon;if(this.hasPrev&&e&&"string"===typeof e){var n=this.genIcon("prev",e,this.prev);n&&t.push(n)}var i=this.$vuetify.rtl?this.prevIcon:this.nextIcon;if(this.hasNext&&i&&"string"===typeof i){var r=this.genIcon("next",i,this.next);r&&t.push(r)}return t},getNextIndex:function(t){var e=(t+1)%this.items.length,n=this.items[e];return n.disabled?this.getNextIndex(e):e},getPrevIndex:function(t){var e=(t+this.items.length-1)%this.items.length,n=this.items[e];return n.disabled?this.getPrevIndex(e):e},next:function(){if(this.isReverse=this.$vuetify.rtl,this.hasActiveItems&&this.hasNext){var t=this.getNextIndex(this.internalIndex),e=this.items[t];this.internalValue=this.getValue(e,t)}},prev:function(){if(this.isReverse=!this.$vuetify.rtl,this.hasActiveItems&&this.hasPrev){var t=this.getPrevIndex(this.internalIndex),e=this.items[t];this.internalValue=this.getValue(e,t)}},updateReverse:function(t,e){this.changedByDelimiters?this.changedByDelimiters=!1:this.isReverse=t<e}},render:function(t){var e=this,n={staticClass:"v-window",class:this.classes,directives:[]};if(!this.touchless){var i=this.touch||{left:function(){e.$vuetify.rtl?e.prev():e.next()},right:function(){e.$vuetify.rtl?e.next():e.prev()},end:function(t){t.stopPropagation()},start:function(t){t.stopPropagation()}};n.directives.push({name:"touch",value:i})}return t("div",n,[this.genContainer()])}}),G=n("37c6"),M=I.extend({name:"button-group",provide:function(){return{btnToggle:this}},computed:{classes:function(){return I.options.computed.classes.call(this)}},methods:{genData:I.options.methods.genData}});function Y(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,i)}return n}function L(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?Y(n,!0).forEach((function(e){Object(p["a"])(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):Y(n).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var R=H.extend({name:"v-carousel",props:{continuous:{type:Boolean,default:!0},cycle:Boolean,delimiterIcon:{type:String,default:"$delimiter"},height:{type:[Number,String],default:500},hideDelimiters:Boolean,hideDelimiterBackground:Boolean,interval:{type:[Number,String],default:6e3,validator:function(t){return t>0}},mandatory:{type:Boolean,default:!0},progress:Boolean,progressColor:String,showArrows:{type:Boolean,default:!0},verticalDelimiters:{type:String,default:void 0}},data:function(){return{internalHeight:this.height,slideTimeout:void 0}},computed:{classes:function(){return L({},H.options.computed.classes.call(this),{"v-carousel":!0,"v-carousel--hide-delimiter-background":this.hideDelimiterBackground,"v-carousel--vertical-delimiters":this.isVertical})},isDark:function(){return this.dark||!this.light},isVertical:function(){return null!=this.verticalDelimiters}},watch:{internalValue:"restartTimeout",interval:"restartTimeout",height:function(t,e){t!==e&&t&&(this.internalHeight=t)},cycle:function(t){t?this.restartTimeout():(clearTimeout(this.slideTimeout),this.slideTimeout=void 0)}},created:function(){this.$attrs.hasOwnProperty("hide-controls")&&Object(O["a"])("hide-controls",':show-arrows="false"',this)},mounted:function(){this.startTimeout()},methods:{genControlIcons:function(){return this.isVertical?null:H.options.methods.genControlIcons.call(this)},genDelimiters:function(){return this.$createElement("div",{staticClass:"v-carousel__controls",style:{left:"left"===this.verticalDelimiters&&this.isVertical?0:"auto",right:"right"===this.verticalDelimiters?0:"auto"}},[this.genItems()])},genItems:function(){for(var t=this,e=this.items.length,n=[],i=0;i<e;i++){var r=this.$createElement(m["a"],{staticClass:"v-carousel__controls__item",attrs:{"aria-label":this.$vuetify.lang.t("$vuetify.carousel.ariaLabel.delimiter",i+1,e)},props:{icon:!0,small:!0,value:this.getValue(this.items[i],i)}},[this.$createElement(g["a"],{props:{size:18}},this.delimiterIcon)]);n.push(r)}return this.$createElement(M,{props:{value:this.internalValue,mandatory:this.mandatory},on:{change:function(e){t.internalValue=e}}},n)},genProgress:function(){return this.$createElement(G["a"],{staticClass:"v-carousel__progress",props:{color:this.progressColor,value:(this.internalIndex+1)/this.items.length*100}})},restartTimeout:function(){this.slideTimeout&&clearTimeout(this.slideTimeout),this.slideTimeout=void 0,window.requestAnimationFrame(this.startTimeout)},startTimeout:function(){this.cycle&&(this.slideTimeout=window.setTimeout(this.next,+this.interval>0?+this.interval:6e3))}},render:function(t){var e=H.options.render.call(this,t);return e.data.style="height: ".concat(Object(V["c"])(this.height),";"),this.hideDelimiters||e.children.push(this.genDelimiters()),(this.progress||this.progressColor)&&e.children.push(this.genProgress()),e}}),X=n("2b0e"),N=X["a"].extend().extend({name:"bootable",props:{eager:Boolean},data:function(){return{isBooted:!1}},computed:{hasContent:function(){return this.isBooted||this.eager||this.isActive}},watch:{isActive:function(){this.isBooted=!0}},created:function(){"lazy"in this.$attrs&&Object(O["d"])("lazy",this)},methods:{showLazyContent:function(t){return this.hasContent?t:void 0}}}),z=n("4e82c"),F=Object(y["a"])(N,Object(z["a"])("windowGroup","v-window-item","v-window")),q=F.extend().extend().extend({name:"v-window-item",directives:{Touch:_},props:{disabled:Boolean,reverseTransition:{type:[Boolean,String],default:void 0},transition:{type:[Boolean,String],default:void 0},value:{required:!1}},data:function(){return{isActive:!1,inTransition:!1}},computed:{classes:function(){return this.groupClasses},computedTransition:function(){return this.windowGroup.internalReverse?"undefined"!==typeof this.reverseTransition?this.reverseTransition||"":this.windowGroup.computedTransition:"undefined"!==typeof this.transition?this.transition||"":this.windowGroup.computedTransition}},methods:{genDefaultSlot:function(){return this.$slots.default},genWindowItem:function(){return this.$createElement("div",{staticClass:"v-window-item",class:this.classes,directives:[{name:"show",value:this.isActive}],on:this.$listeners},this.showLazyContent(this.genDefaultSlot()))},onAfterTransition:function(){this.inTransition&&(this.inTransition=!1,this.windowGroup.transitionCount>0&&(this.windowGroup.transitionCount--,0===this.windowGroup.transitionCount&&(this.windowGroup.transitionHeight=void 0)))},onBeforeTransition:function(){this.inTransition||(this.inTransition=!0,0===this.windowGroup.transitionCount&&(this.windowGroup.transitionHeight=Object(V["c"])(this.windowGroup.$el.clientHeight)),this.windowGroup.transitionCount++)},onTransitionCancelled:function(){this.onAfterTransition()},onEnter:function(t){var e=this;this.inTransition&&this.$nextTick((function(){e.computedTransition&&e.inTransition&&(e.windowGroup.transitionHeight=Object(V["c"])(t.clientHeight))}))}},render:function(t){return t("transition",{props:{name:this.computedTransition},on:{beforeEnter:this.onBeforeTransition,afterEnter:this.onAfterTransition,enterCancelled:this.onTransitionCancelled,beforeLeave:this.onBeforeTransition,afterLeave:this.onAfterTransition,leaveCancelled:this.onTransitionCancelled,enter:this.onEnter}},[this.genWindowItem()])}}),W=n("adda"),J=n("1c87");function U(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,i)}return n}function K(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?U(n,!0).forEach((function(e){Object(p["a"])(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):U(n).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var Q=Object(y["a"])(q,J["a"]),Z=Q.extend({name:"v-carousel-item",inheritAttrs:!1,methods:{genDefaultSlot:function(){return[this.$createElement(W["a"],{staticClass:"v-carousel__item",props:K({},this.$attrs,{height:this.windowGroup.internalHeight}),on:this.$listeners},[this.$slots.default,this.$createElement("template",{slot:"placeholder"},this.$slots.placeholder)])]},genWindowItem:function(){var t=this.generateRouteLink(),e=t.tag,n=t.data;return n.staticClass="v-window-item",n.directives.push({name:"show",value:this.isActive}),this.$createElement(e,n,this.showLazyContent(this.genDefaultSlot()))}}}),tt=n("62ad"),et=n("a523"),nt=n("132d"),it=(n("20f6"),n("e8f2")),rt=Object(it["a"])("layout"),st=n("0fd9"),ot=n("2fa4"),at=Object(u["a"])(c,i,r,!1,null,null,null);e["default"]=at.exports;h()(at,{VBtn:d["a"],VCard:f["a"],VCardActions:v["a"],VCardTitle:v["c"],VCarousel:R,VCarouselItem:Z,VCol:tt["a"],VContainer:et["a"],VIcon:nt["a"],VImg:W["a"],VLayout:rt,VRow:st["a"],VSpacer:ot["a"]})},c23d:function(t,e,n){t.exports=n.p+"img/foto1.4fcd4b30.png"},c740:function(t,e,n){"use strict";var i=n("23e7"),r=n("b727").findIndex,s=n("44d2"),o="findIndex",a=!0;o in[]&&Array(1)[o]((function(){a=!1})),i({target:"Array",proto:!0,forced:a},{findIndex:function(t){return r(this,t,arguments.length>1?arguments[1]:void 0)}}),s(o)}}]);
//# sourceMappingURL=chunk-5194425f.e70922a2.js.map