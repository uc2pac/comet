webpackJsonp([0],{393:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(175),i=n(909),o=n(251),_=n(252),l=n(253),s=n(176),h=n(95),a=n(79),u=n(902),c=n(174),d=n(896),p=n(80);n.d(e,"DetailModuleNgFactory",function(){return y});var f=function(t){function e(e){return t.call(this,e,[u.a],[])||this}return __extends(e,t),Object.defineProperty(e.prototype,"_NgLocalization_5",{get:function(){return null==this.__NgLocalization_5&&(this.__NgLocalization_5=new h.c(this.parent.get(c.a))),this.__NgLocalization_5},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"_RadioControlRegistry_6",{get:function(){return null==this.__RadioControlRegistry_6&&(this.__RadioControlRegistry_6=new a.a),this.__RadioControlRegistry_6},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"_ROUTES_7",{get:function(){return null==this.__ROUTES_7&&(this.__ROUTES_7=[[{path:"",children:[{path:"",component:d.a},{path:"child-detail",loadChildren:function(){return n.e(5).then(n.bind(null,898)).then(function(t){return t.ChildDetailModuleNgFactory})}}]}]]),this.__ROUTES_7},enumerable:!0,configurable:!0}),e.prototype.createInternal=function(){return this._CommonModule_0=new o.a,this._InternalFormsSharedModule_1=new _.a,this._FormsModule_2=new l.a,this._RouterModule_3=new s.g(this.parent.get(s.h,null)),this._DetailModule_4=new i.a,this._DetailModule_4},e.prototype.getInternal=function(t,e){return t===o.a?this._CommonModule_0:t===_.a?this._InternalFormsSharedModule_1:t===l.a?this._FormsModule_2:t===s.g?this._RouterModule_3:t===i.a?this._DetailModule_4:t===h.b?this._NgLocalization_5:t===a.a?this._RadioControlRegistry_6:t===p.a?this._ROUTES_7:e},e.prototype.destroyInternal=function(){},e}(r.a),y=new r.b(f,i.a)},896:function(t,e,n){"use strict";var r=n(1);n.d(e,"a",function(){return i}),console.log("`Detail` component loaded asynchronously");var i=function(){function t(){}return t.prototype.ngOnInit=function(){console.log("hello `Detail` component")},t}();i=__decorate([n.i(r._4)({selector:"detail",template:"\n    <h1>Hello from Detail</h1>\n    <span>\n      <a [routerLink]=\" ['./child-detail'] \">\n        Child Detail\n      </a>\n    </span>\n    <router-outlet></router-outlet>\n  "})],i)},902:function(t,e,n){"use strict";var r=n(896),i=n(96),o=n(27),_=n(78),l=n(52),s=n(51),h=n(64),a=n(390),u=n(255),c=n(391),d=n(65),p=n(42),f=n(81),y=n(82),R=n(97),g=n(98),x=n(124);n.d(e,"a",function(){return I});var m=function(){function t(){this._changed=!1,this.context=new r.a}return t.prototype.ngOnDetach=function(t,e,n){},t.prototype.ngOnDestroy=function(){},t.prototype.ngDoCheck=function(t,e,n){var r=this._changed;return this._changed=!1,n||0===t.numberOfChecks&&this.context.ngOnInit(),r},t.prototype.checkHost=function(t,e,n,r){},t.prototype.handleEvent=function(t,e){var n=!0;return n},t.prototype.subscribe=function(t,e){this._eventHandler=e},t}(),C=o.createRenderComponentType("",0,_.b.None,[],{}),w=function(t){function e(n,r,i,o){return t.call(this,e,C,l.a.HOST,n,r,i,o,s.b.CheckAlways)||this}return __extends(e,t),e.prototype.createInternal=function(t){return this._el_0=o.selectOrCreateRenderHostElement(this.renderer,"detail",o.EMPTY_INLINE_ARRAY,t,null),this.compView_0=new D(this.viewUtils,this,0,this._el_0),this._DetailComponent_0_3=new m,this.compView_0.create(this._DetailComponent_0_3.context),this.init(this._el_0,this.renderer.directRenderer?null:[this._el_0],null),new h.a(0,this,this._el_0,this._DetailComponent_0_3.context)},e.prototype.injectorGetInternal=function(t,e,n){return t===r.a&&0===e?this._DetailComponent_0_3.context:n},e.prototype.detectChangesInternal=function(t){this._DetailComponent_0_3.ngDoCheck(this,this._el_0,t),this.compView_0.internalDetectChanges(t)},e.prototype.destroyInternal=function(){this.compView_0.destroy()},e.prototype.visitRootNodesInternal=function(t,e){t(this._el_0,e)},e}(i.a),I=new h.b("detail",w,r.a),v=[],b=o.createRenderComponentType("",0,_.b.None,v,{}),D=function(t){function e(n,r,i,_){var h=t.call(this,e,b,l.a.COMPONENT,n,r,i,_,s.b.CheckAlways)||this;return h._arr_15=o.pureProxy1(function(t){return[t]}),h}return __extends(e,t),e.prototype.createInternal=function(t){var e=this.renderer.createViewRoot(this.parentElement);this._text_0=this.renderer.createText(e,"\n    ",null),this._el_1=o.createRenderElement(this.renderer,e,"h1",o.EMPTY_INLINE_ARRAY,null),this._text_2=this.renderer.createText(this._el_1,"Hello from Detail",null),this._text_3=this.renderer.createText(e,"\n    ",null),this._el_4=o.createRenderElement(this.renderer,e,"span",o.EMPTY_INLINE_ARRAY,null),this._text_5=this.renderer.createText(this._el_4,"\n      ",null),this._el_6=o.createRenderElement(this.renderer,this._el_4,"a",o.EMPTY_INLINE_ARRAY,null),this._RouterLinkWithHref_6_3=new a.a(this.parentView.injectorGet(d.a,this.parentIndex),this.parentView.injectorGet(p.a,this.parentIndex),this.parentView.injectorGet(f.a,this.parentIndex)),this._text_7=this.renderer.createText(this._el_6,"\n        Child Detail\n      ",null),this._text_8=this.renderer.createText(this._el_4,"\n    ",null),this._text_9=this.renderer.createText(e,"\n    ",null),this._el_10=o.createRenderElement(this.renderer,e,"router-outlet",o.EMPTY_INLINE_ARRAY,null),this._vc_10=new u.a(10,null,this,this._el_10),this._RouterOutlet_10_5=new c.a(this.parentView.injectorGet(y.a,this.parentIndex),this._vc_10.vcRef,this.parentView.injectorGet(R.b,this.parentIndex),null),this._text_11=this.renderer.createText(e,"\n  ",null);var n=o.subscribeToRenderElement(this,this._el_6,new o.InlineArray2(2,"click",null),this.eventHandler(this.handleEvent_6));return this.init(null,this.renderer.directRenderer?null:[this._text_0,this._el_1,this._text_2,this._text_3,this._el_4,this._text_5,this._el_6,this._text_7,this._text_8,this._text_9,this._el_10,this._text_11],[n]),null},e.prototype.injectorGetInternal=function(t,e,n){return t===g.b&&6<=e&&e<=7?this._RouterLinkWithHref_6_3.context:t===x.a&&10===e?this._RouterOutlet_10_5.context:n},e.prototype.detectChangesInternal=function(t){var e=this._arr_15("./child-detail");this._RouterLinkWithHref_6_3.check_routerLink(e,t,!1),this._RouterLinkWithHref_6_3.ngDoCheck(this,this._el_6,t),this._RouterOutlet_10_5.ngDoCheck(this,this._el_10,t),this._vc_10.detectChangesInNestedViews(t),this._RouterLinkWithHref_6_3.checkHost(this,this,this._el_6,t)},e.prototype.destroyInternal=function(){this._vc_10.destroyNestedViews(),this._RouterLinkWithHref_6_3.ngOnDestroy(),this._RouterOutlet_10_5.ngOnDestroy()},e.prototype.handleEvent_6=function(t,e){this.markPathToRootAsCheckOnce();var n=!0;return n=this._RouterLinkWithHref_6_3.handleEvent(t,e)&&n},e}(i.a)},909:function(t,e,n){"use strict";var r=n(123),i=n(389),o=n(1),_=n(254),l=n(910),s=n(896);n.d(e,"a",function(){return h}),console.log("`Detail` bundle loaded asynchronously");var h=function(){function t(){}return t}();h.routes=l.a,h=__decorate([n.i(o.i)({declarations:[s.a],imports:[r.b,i.a,_.a.forChild(l.a)]})],h)},910:function(t,e,n){"use strict";var r=n(896);n.d(e,"a",function(){return i});var i=[{path:"",children:[{path:"",component:r.a},{path:"child-detail",loadChildren:function(){return n.e(5).then(n.bind(null,898)).then(function(t){return t.ChildDetailModuleNgFactory})}}]}]}});