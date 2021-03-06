/**
 * @fileoverview This file is generated by the Angular 2 template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties}
 */
 /* tslint:disable */

import * as import0 from '../../../../src/app/about/about.component';
import * as import1 from '@angular/core/src/linker/view';
import * as import2 from '@angular/core/src/render/api';
import * as import3 from '@angular/core/src/linker/view_utils';
import * as import4 from '@angular/core/src/metadata/view';
import * as import5 from '@angular/core/src/linker/view_type';
import * as import6 from '@angular/core/src/change_detection/constants';
import * as import7 from '@angular/core/src/linker/component_factory';
import * as import8 from '@angular/router/src/router_state';
import * as import9 from '@angular/common/src/pipes/json_pipe';
import * as import10 from '@angular/core/src/change_detection/change_detection_util';
export class Wrapper_AboutComponent {
  /*private*/ _eventHandler:Function;
  context:import0.AboutComponent;
  /*private*/ _changed:boolean;
  constructor(p0:any) {
    this._changed = false;
    this.context = new import0.AboutComponent(p0);
  }
  ngOnDetach(view:import1.AppView<any>,componentView:import1.AppView<any>,el:any):void {
  }
  ngOnDestroy():void {
  }
  ngDoCheck(view:import1.AppView<any>,el:any,throwOnChange:boolean):boolean {
    var changed:any = this._changed;
    this._changed = false;
    if (!throwOnChange) { if ((view.numberOfChecks === 0)) { this.context.ngOnInit(); } }
    return changed;
  }
  checkHost(view:import1.AppView<any>,componentView:import1.AppView<any>,el:any,throwOnChange:boolean):void {
  }
  handleEvent(eventName:string,$event:any):boolean {
    var result:boolean = true;
    return result;
  }
  subscribe(view:import1.AppView<any>,_eventHandler:any):void {
    this._eventHandler = _eventHandler;
  }
}
var renderType_AboutComponent_Host:import2.RenderComponentType = import3.createRenderComponentType('',0,import4.ViewEncapsulation.None,([] as any[]),{});
class View_AboutComponent_Host0 extends import1.AppView<any> {
  _el_0:any;
  compView_0:import1.AppView<import0.AboutComponent>;
  _AboutComponent_0_3:Wrapper_AboutComponent;
  constructor(viewUtils:import3.ViewUtils,parentView:import1.AppView<any>,parentIndex:number,parentElement:any) {
    super(View_AboutComponent_Host0,renderType_AboutComponent_Host,import5.ViewType.HOST,viewUtils,parentView,parentIndex,parentElement,import6.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import7.ComponentRef<any> {
    this._el_0 = import3.selectOrCreateRenderHostElement(this.renderer,'about',import3.EMPTY_INLINE_ARRAY,rootSelector,(null as any));
    this.compView_0 = new View_AboutComponent0(this.viewUtils,this,0,this._el_0);
    this._AboutComponent_0_3 = new Wrapper_AboutComponent(this.injectorGet(import8.ActivatedRoute,this.parentIndex));
    this.compView_0.create(this._AboutComponent_0_3.context);
    this.init(this._el_0,((<any>this.renderer).directRenderer? (null as any): [this._el_0]),(null as any));
    return new import7.ComponentRef_<any>(0,this,this._el_0,this._AboutComponent_0_3.context);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import0.AboutComponent) && (0 === requestNodeIndex))) { return this._AboutComponent_0_3.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    this._AboutComponent_0_3.ngDoCheck(this,this._el_0,throwOnChange);
    this.compView_0.internalDetectChanges(throwOnChange);
  }
  destroyInternal():void {
    this.compView_0.destroy();
  }
  visitRootNodesInternal(cb:any,ctx:any):void {
    cb(this._el_0,ctx);
  }
}
export const AboutComponentNgFactory:import7.ComponentFactory<import0.AboutComponent> = new import7.ComponentFactory<import0.AboutComponent>('about',View_AboutComponent_Host0,import0.AboutComponent);
const styles_AboutComponent:any[] = [''];
var renderType_AboutComponent:import2.RenderComponentType = import3.createRenderComponentType('',0,import4.ViewEncapsulation.Emulated,styles_AboutComponent,{});
export class View_AboutComponent0 extends import1.AppView<import0.AboutComponent> {
  _text_0:any;
  _el_1:any;
  _text_2:any;
  _text_3:any;
  _el_4:any;
  _text_5:any;
  _el_6:any;
  _text_7:any;
  _text_8:any;
  _text_9:any;
  _el_10:any;
  _text_11:any;
  _el_12:any;
  _text_13:any;
  _text_14:any;
  _text_15:any;
  _el_16:any;
  _text_17:any;
  _text_18:any;
  /*private*/ _expr_19:any;
  _pipe_json_0:import9.JsonPipe;
  constructor(viewUtils:import3.ViewUtils,parentView:import1.AppView<any>,parentIndex:number,parentElement:any) {
    super(View_AboutComponent0,renderType_AboutComponent,import5.ViewType.COMPONENT,viewUtils,parentView,parentIndex,parentElement,import6.ChangeDetectorStatus.CheckAlways);
    this._expr_19 = import10.UNINITIALIZED;
  }
  createInternal(rootSelector:string):import7.ComponentRef<any> {
    const parentRenderNode:any = this.renderer.createViewRoot(this.parentElement);
    this._text_0 = this.renderer.createText(parentRenderNode,'\n    ',(null as any));
    this._el_1 = import3.createRenderElement(this.renderer,parentRenderNode,'h1',import3.EMPTY_INLINE_ARRAY,(null as any));
    this._text_2 = this.renderer.createText(this._el_1,'About',(null as any));
    this._text_3 = this.renderer.createText(parentRenderNode,'\n    ',(null as any));
    this._el_4 = import3.createRenderElement(this.renderer,parentRenderNode,'div',import3.EMPTY_INLINE_ARRAY,(null as any));
    this._text_5 = this.renderer.createText(this._el_4,'\n      For hot module reloading run\n      ',(null as any));
    this._el_6 = import3.createRenderElement(this.renderer,this._el_4,'pre',import3.EMPTY_INLINE_ARRAY,(null as any));
    this._text_7 = this.renderer.createText(this._el_6,'npm run start:hmr',(null as any));
    this._text_8 = this.renderer.createText(this._el_4,'\n    ',(null as any));
    this._text_9 = this.renderer.createText(parentRenderNode,'\n    ',(null as any));
    this._el_10 = import3.createRenderElement(this.renderer,parentRenderNode,'div',import3.EMPTY_INLINE_ARRAY,(null as any));
    this._text_11 = this.renderer.createText(this._el_10,'\n      ',(null as any));
    this._el_12 = import3.createRenderElement(this.renderer,this._el_10,'h3',import3.EMPTY_INLINE_ARRAY,(null as any));
    this._text_13 = this.renderer.createText(this._el_12,'\n        patrick@AngularClass.com\n      ',(null as any));
    this._text_14 = this.renderer.createText(this._el_10,'\n    ',(null as any));
    this._text_15 = this.renderer.createText(parentRenderNode,'\n    ',(null as any));
    this._el_16 = import3.createRenderElement(this.renderer,parentRenderNode,'pre',import3.EMPTY_INLINE_ARRAY,(null as any));
    this._text_17 = this.renderer.createText(this._el_16,'',(null as any));
    this._text_18 = this.renderer.createText(parentRenderNode,'\n  ',(null as any));
    this._pipe_json_0 = new import9.JsonPipe();
    this.init((null as any),((<any>this.renderer).directRenderer? (null as any): [
      this._text_0,
      this._el_1,
      this._text_2,
      this._text_3,
      this._el_4,
      this._text_5,
      this._el_6,
      this._text_7,
      this._text_8,
      this._text_9,
      this._el_10,
      this._text_11,
      this._el_12,
      this._text_13,
      this._text_14,
      this._text_15,
      this._el_16,
      this._text_17,
      this._text_18
    ]
    ),(null as any));
    return (null as any);
  }
  detectChangesInternal(throwOnChange:boolean):void {
    const valUnwrapper:any = new import10.ValueUnwrapper();
    valUnwrapper.reset();
    const currVal_19:any = import3.inlineInterpolate(1,'this.localState = ',valUnwrapper.unwrap(this._pipe_json_0.transform(this.context.localState)),'');
    if ((valUnwrapper.hasWrappedValue || import3.checkBinding(throwOnChange,this._expr_19,currVal_19))) {
      this.renderer.setText(this._text_17,currVal_19);
      this._expr_19 = currVal_19;
    }
  }
}