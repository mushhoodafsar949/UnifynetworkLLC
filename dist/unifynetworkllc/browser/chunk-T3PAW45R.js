import{d as Xt,g as te}from"./chunk-I57NHPGF.js";import{a as _t,b as zt}from"./chunk-TUPHMNEN.js";import{c as ee,d as Ft,f as Mt,g as kt,h as Rt,i as Pt}from"./chunk-TS73LLPX.js";import{E as Gt,G as Ut,J as Tt,K as U,M as $,N as B,O as yt,P as Yt,S as dt,T as Jt,b as Vt,c as Zt,k as qt,l as Dt,o as ot,r as Kt,s as st,t as Lt,u as lt}from"./chunk-QOHF2DTG.js";import{j as St,k as Qt,l as bt,m as xt,n as It,o as G,r as gt}from"./chunk-U33TVER6.js";import{$a as it,Ab as nt,Bb as u,Cb as q,Db as K,Eb as A,Fb as ht,Gb as z,Hb as O,Kb as mt,Pa as g,Rb as R,S as F,Sb as Nt,T as X,Tb as P,Ua as N,Ub as ut,Vb as wt,Xb as Wt,Y as M,Yb as ft,_a as b,a as j,ab as Ht,b as Ot,bb as C,ca as Bt,cb as _,da as tt,ea as et,fa as at,fc as Et,ga as y,mb as L,na as S,nb as c,oa as Ct,ob as jt,pb as ct,qb as At,rb as x,tb as I,ub as T,vb as k,wb as W,xb as Q,yb as Z,zb as pt}from"./chunk-BLFEORBJ.js";var he=({dt:e})=>`
.p-textarea {
    font-family: inherit;
    font-feature-settings: inherit;
    font-size: 1rem;
    color: ${e("textarea.color")};
    background: ${e("textarea.background")};
    padding: ${e("textarea.padding.y")} ${e("textarea.padding.x")};
    border: 1px solid ${e("textarea.border.color")};
    transition: background ${e("textarea.transition.duration")}, color ${e("textarea.transition.duration")}, border-color ${e("textarea.transition.duration")}, outline-color ${e("textarea.transition.duration")}, box-shadow ${e("textarea.transition.duration")};
    appearance: none;
    border-radius: ${e("textarea.border.radius")};
    outline-color: transparent;
    box-shadow: ${e("textarea.shadow")};
}

.p-textarea.ng-invalid.ng-dirty {
    border-color: ${e("textarea.invalid.border.color")};
}

.p-textarea:enabled:hover {
    border-color: ${e("textarea.hover.border.color")};
}

.p-textarea:enabled:focus {
    border-color: ${e("textarea.focus.border.color")};
    box-shadow: ${e("textarea.focus.ring.shadow")};
    outline: ${e("textarea.focus.ring.width")} ${e("textarea.focus.ring.style")} ${e("textarea.focus.ring.color")};
    outline-offset: ${e("textarea.focus.ring.offset")};
}

.p-textarea.p-invalid {
    border-color: ${e("textarea.invalid.border.color")};
}

.p-textarea.p-variant-filled {
    background: ${e("textarea.filled.background")};
}

.p-textarea.p-variant-filled:enabled:hover {
    background: ${e("textarea.filled.hover.background")};
}

.p-textarea.p-variant-filled:enabled:focus {
    background: ${e("textarea.filled.focus.background")};
}

.p-textarea:disabled {
    opacity: 1;
    background: ${e("textarea.disabled.background")};
    color: ${e("textarea.disabled.color")};
}

.p-textarea::placeholder {
    color: ${e("textarea.placeholder.color")};
}

.p-textarea.ng-invalid.ng-dirty::placeholder {
    color: ${e("textarea.invalid.placeholder.color")};
}

.p-textarea-fluid {
    width: 100%;
}

.p-textarea-resizable {
    overflow: hidden;
    resize: none;
}

.p-textarea-sm {
    font-size: ${e("textarea.sm.font.size")};
    padding-block: ${e("textarea.sm.padding.y")};
    padding-inline: ${e("textarea.sm.padding.x")};
}

.p-textarea-lg {
    font-size: ${e("textarea.lg.font.size")};
    padding-block: ${e("textarea.lg.padding.y")};
    padding-inline: ${e("textarea.lg.padding.x")};
}
`,de={root:({instance:e,props:l})=>["p-textarea p-component",{"p-filled":e.filled,"p-textarea-resizable ":l.autoResize,"p-invalid":l.invalid,"p-variant-filled":l.variant?l.variant==="filled":e.config.inputStyle==="filled"||e.config.inputVariant==="filled","p-textarea-fluid":l.fluid}]},ie=(()=>{class e extends ${name="textarea";theme=he;classes=de;static \u0275fac=(()=>{let t;return function(n){return(t||(t=y(e)))(n||e)}})();static \u0275prov=F({token:e,factory:e.\u0275fac})}return e})();var vi=(()=>{class e extends B{ngModel;control;autoResize;variant;fluid=!1;pSize;onResize=new S;filled;cachedScrollHeight;ngModelSubscription;ngControlSubscription;_componentStyle=M(ie);constructor(t,i){super(),this.ngModel=t,this.control=i}ngOnInit(){super.ngOnInit(),this.ngModel&&(this.ngModelSubscription=this.ngModel.valueChanges.subscribe(()=>{this.updateState()})),this.control&&(this.ngControlSubscription=this.control.valueChanges.subscribe(()=>{this.updateState()}))}get hasFluid(){let i=this.el.nativeElement.closest("p-fluid");return this.fluid||!!i}ngAfterViewInit(){super.ngAfterViewInit(),this.autoResize&&this.resize(),this.updateFilledState(),this.cd.detectChanges()}ngAfterViewChecked(){this.autoResize&&this.resize()}onInput(t){this.updateState()}updateFilledState(){this.filled=this.el.nativeElement.value&&this.el.nativeElement.value.length}resize(t){this.el.nativeElement.style.height="auto",this.el.nativeElement.style.height=this.el.nativeElement.scrollHeight+"px",parseFloat(this.el.nativeElement.style.height)>=parseFloat(this.el.nativeElement.style.maxHeight)?(this.el.nativeElement.style.overflowY="scroll",this.el.nativeElement.style.height=this.el.nativeElement.style.maxHeight):this.el.nativeElement.style.overflow="hidden",this.onResize.emit(t||{})}updateState(){this.updateFilledState(),this.autoResize&&this.resize()}ngOnDestroy(){this.ngModelSubscription&&this.ngModelSubscription.unsubscribe(),this.ngControlSubscription&&this.ngControlSubscription.unsubscribe(),super.ngOnDestroy()}static \u0275fac=function(i){return new(i||e)(N(te,8),N(Xt,8))};static \u0275dir=Ht({type:e,selectors:[["","pTextarea",""],["","pInputTextarea",""]],hostAttrs:[1,"p-textarea","p-component"],hostVars:16,hostBindings:function(i,n){i&1&&nt("input",function(s){return n.onInput(s)}),i&2&&ct("p-filled",n.filled)("p-textarea-resizable",n.autoResize)("p-variant-filled",n.variant==="filled"||n.config.inputStyle()==="filled"||n.config.inputVariant()==="filled")("p-textarea-fluid",n.hasFluid)("p-textarea-sm",n.pSize==="small")("p-inputfield-sm",n.pSize==="small")("p-textarea-lg",n.pSize==="large")("p-inputfield-lg",n.pSize==="large")},inputs:{autoResize:[2,"autoResize","autoResize",Et],variant:"variant",fluid:[2,"fluid","fluid",Et],pSize:"pSize"},outputs:{onResize:"onResize"},features:[R([ie]),C]})}return e})(),Ci=(()=>{class e{static \u0275fac=function(i){return new(i||e)};static \u0275mod=it({type:e});static \u0275inj=X({})}return e})();var bi=(()=>{class e extends dt{static \u0275fac=(()=>{let t;return function(n){return(t||(t=y(e)))(n||e)}})();static \u0275cmp=b({type:e,selectors:[["BlankIcon"]],features:[C],decls:2,vars:0,consts:[["width","14","height","14","viewBox","0 0 14 14","fill","none","xmlns","http://www.w3.org/2000/svg"],["width","1","height","1","fill","currentColor","fill-opacity","0"]],template:function(i,n){i&1&&(at(),I(0,"svg",0),k(1,"rect",1),T())},encapsulation:2})}return e})();var Ti=(()=>{class e extends dt{static \u0275fac=(()=>{let t;return function(n){return(t||(t=y(e)))(n||e)}})();static \u0275cmp=b({type:e,selectors:[["CheckIcon"]],features:[C],decls:2,vars:5,consts:[["width","14","height","14","viewBox","0 0 14 14","fill","none","xmlns","http://www.w3.org/2000/svg"],["d","M4.86199 11.5948C4.78717 11.5923 4.71366 11.5745 4.64596 11.5426C4.57826 11.5107 4.51779 11.4652 4.46827 11.4091L0.753985 7.69483C0.683167 7.64891 0.623706 7.58751 0.580092 7.51525C0.536478 7.44299 0.509851 7.36177 0.502221 7.27771C0.49459 7.19366 0.506156 7.10897 0.536046 7.03004C0.565935 6.95111 0.613367 6.88 0.674759 6.82208C0.736151 6.76416 0.8099 6.72095 0.890436 6.69571C0.970973 6.67046 1.05619 6.66385 1.13966 6.67635C1.22313 6.68886 1.30266 6.72017 1.37226 6.76792C1.44186 6.81567 1.4997 6.8786 1.54141 6.95197L4.86199 10.2503L12.6397 2.49483C12.7444 2.42694 12.8689 2.39617 12.9932 2.40745C13.1174 2.41873 13.2343 2.47141 13.3251 2.55705C13.4159 2.64268 13.4753 2.75632 13.4938 2.87973C13.5123 3.00315 13.4888 3.1292 13.4271 3.23768L5.2557 11.4091C5.20618 11.4652 5.14571 11.5107 5.07801 11.5426C5.01031 11.5745 4.9368 11.5923 4.86199 11.5948Z","fill","currentColor"]],template:function(i,n){i&1&&(at(),I(0,"svg",0),k(1,"path",1),T()),i&2&&(x(n.getClassNames()),L("aria-label",n.ariaLabel)("aria-hidden",n.ariaHidden)("role",n.role))},encapsulation:2})}return e})();var Vi=(()=>{class e extends dt{pathId;ngOnInit(){this.pathId="url(#"+Gt()+")"}static \u0275fac=(()=>{let t;return function(n){return(t||(t=y(e)))(n||e)}})();static \u0275cmp=b({type:e,selectors:[["SearchIcon"]],features:[C],decls:6,vars:7,consts:[["width","14","height","14","viewBox","0 0 14 14","fill","none","xmlns","http://www.w3.org/2000/svg"],["fill-rule","evenodd","clip-rule","evenodd","d","M2.67602 11.0265C3.6661 11.688 4.83011 12.0411 6.02086 12.0411C6.81149 12.0411 7.59438 11.8854 8.32483 11.5828C8.87005 11.357 9.37808 11.0526 9.83317 10.6803L12.9769 13.8241C13.0323 13.8801 13.0983 13.9245 13.171 13.9548C13.2438 13.985 13.3219 14.0003 13.4007 14C13.4795 14.0003 13.5575 13.985 13.6303 13.9548C13.7031 13.9245 13.7691 13.8801 13.8244 13.8241C13.9367 13.7116 13.9998 13.5592 13.9998 13.4003C13.9998 13.2414 13.9367 13.089 13.8244 12.9765L10.6807 9.8328C11.053 9.37773 11.3573 8.86972 11.5831 8.32452C11.8857 7.59408 12.0414 6.81119 12.0414 6.02056C12.0414 4.8298 11.6883 3.66579 11.0268 2.67572C10.3652 1.68564 9.42494 0.913972 8.32483 0.45829C7.22472 0.00260857 6.01418 -0.116618 4.84631 0.115686C3.67844 0.34799 2.60568 0.921393 1.76369 1.76338C0.921698 2.60537 0.348296 3.67813 0.115991 4.84601C-0.116313 6.01388 0.00291375 7.22441 0.458595 8.32452C0.914277 9.42464 1.68595 10.3649 2.67602 11.0265ZM3.35565 2.0158C4.14456 1.48867 5.07206 1.20731 6.02086 1.20731C7.29317 1.20731 8.51338 1.71274 9.41304 2.6124C10.3127 3.51206 10.8181 4.73226 10.8181 6.00457C10.8181 6.95337 10.5368 7.88088 10.0096 8.66978C9.48251 9.45868 8.73328 10.0736 7.85669 10.4367C6.98011 10.7997 6.01554 10.8947 5.08496 10.7096C4.15439 10.5245 3.2996 10.0676 2.62869 9.39674C1.95778 8.72583 1.50089 7.87104 1.31579 6.94046C1.13068 6.00989 1.22568 5.04532 1.58878 4.16874C1.95187 3.29215 2.56675 2.54292 3.35565 2.0158Z","fill","currentColor"],[3,"id"],["width","14","height","14","fill","white"]],template:function(i,n){i&1&&(at(),I(0,"svg",0)(1,"g"),k(2,"path",1),T(),I(3,"defs")(4,"clipPath",2),k(5,"rect",3),T()()()),i&2&&(x(n.getClassNames()),L("aria-label",n.ariaLabel)("aria-hidden",n.ariaHidden)("role",n.role),g(),L("clip-path",n.pathId),g(3),c("id",n.pathId))},encapsulation:2})}return e})();var pe=["*"],me=({dt:e})=>`
.p-iconfield {
    position: relative;
    display: block;
}

.p-inputicon {
    position: absolute;
    top: 50%;
    margin-top: calc(-1 * (${e("icon.size")} / 2));
    color: ${e("iconfield.icon.color")};
    line-height: 1;
}

.p-iconfield .p-inputicon:first-child {
    inset-inline-start: ${e("form.field.padding.x")};
}

.p-iconfield .p-inputicon:last-child {
    inset-inline-end: ${e("form.field.padding.x")};
}

.p-iconfield .p-inputtext:not(:first-child) {
    padding-inline-start: calc((${e("form.field.padding.x")} * 2) + ${e("icon.size")});
}

.p-iconfield .p-inputtext:not(:last-child) {
    padding-inline-end: calc((${e("form.field.padding.x")} * 2) + ${e("icon.size")});
}

.p-iconfield:has(.p-inputfield-sm) .p-inputicon {
    font-size: ${e("form.field.sm.font.size")};
    width: ${e("form.field.sm.font.size")};
    height: ${e("form.field.sm.font.size")};
    margin-top: calc(-1 * (${e("form.field.sm.font.size")} / 2));
}

.p-iconfield:has(.p-inputfield-lg) .p-inputicon {
    font-size: ${e("form.field.lg.font.size")};
    width: ${e("form.field.lg.font.size")};
    height: ${e("form.field.lg.font.size")};
    margin-top: calc(-1 * (${e("form.field.lg.font.size")} / 2));
}
`,ue={root:"p-iconfield"},ne=(()=>{class e extends ${name="iconfield";theme=me;classes=ue;static \u0275fac=(()=>{let t;return function(n){return(t||(t=y(e)))(n||e)}})();static \u0275prov=F({token:e,factory:e.\u0275fac})}return e})();var Ni=(()=>{class e extends B{iconPosition="left";get _styleClass(){return this.styleClass}styleClass;_componentStyle=M(ne);static \u0275fac=(()=>{let t;return function(n){return(t||(t=y(e)))(n||e)}})();static \u0275cmp=b({type:e,selectors:[["p-iconfield"],["p-iconField"],["p-icon-field"]],hostAttrs:[1,"p-iconfield"],hostVars:6,hostBindings:function(i,n){i&2&&(x(n._styleClass),ct("p-iconfield-left",n.iconPosition==="left")("p-iconfield-right",n.iconPosition==="right"))},inputs:{iconPosition:"iconPosition",styleClass:"styleClass"},features:[R([ne]),C],ngContentSelectors:pe,decls:1,vars:0,template:function(i,n){i&1&&(q(),K(0))},dependencies:[G],encapsulation:2,changeDetection:0})}return e})();var fe=["*"],ge={root:"p-inputicon"},oe=(()=>{class e extends ${name="inputicon";classes=ge;static \u0275fac=(()=>{let t;return function(n){return(t||(t=y(e)))(n||e)}})();static \u0275prov=F({token:e,factory:e.\u0275fac})}return e})(),on=(()=>{class e extends B{styleClass;get hostClasses(){return this.styleClass}_componentStyle=M(oe);static \u0275fac=(()=>{let t;return function(n){return(t||(t=y(e)))(n||e)}})();static \u0275cmp=b({type:e,selectors:[["p-inputicon"],["p-inputIcon"]],hostVars:4,hostBindings:function(i,n){i&2&&(x(n.hostClasses),ct("p-inputicon",!0))},inputs:{styleClass:"styleClass"},features:[R([oe]),C],ngContentSelectors:fe,decls:1,vars:0,template:function(i,n){i&1&&(q(),K(0))},dependencies:[G,U],encapsulation:2,changeDetection:0})}return e})();var se=["content"],_e=["overlay"],ve=["*"],Ce=(e,l,t,i,n,o,s,r,f,p,d,E,v,V)=>({"p-overlay p-component":!0,"p-overlay-modal p-overlay-mask p-overlay-mask-enter":e,"p-overlay-center":l,"p-overlay-top":t,"p-overlay-top-start":i,"p-overlay-top-end":n,"p-overlay-bottom":o,"p-overlay-bottom-start":s,"p-overlay-bottom-end":r,"p-overlay-left":f,"p-overlay-left-start":p,"p-overlay-left-end":d,"p-overlay-right":E,"p-overlay-right-start":v,"p-overlay-right-end":V}),we=(e,l,t)=>({showTransitionParams:e,hideTransitionParams:l,transform:t}),Se=e=>({value:"visible",params:e}),be=e=>({mode:e}),xe=e=>({$implicit:e});function Ie(e,l){e&1&&Z(0)}function Te(e,l){if(e&1){let t=pt();I(0,"div",3,1),nt("click",function(n){tt(t);let o=u(2);return et(o.onOverlayContentClick(n))})("@overlayContentAnimation.start",function(n){tt(t);let o=u(2);return et(o.onOverlayContentAnimationStart(n))})("@overlayContentAnimation.done",function(n){tt(t);let o=u(2);return et(o.onOverlayContentAnimationDone(n))}),K(2),_(3,Ie,1,0,"ng-container",4),T()}if(e&2){let t=u(2);x(t.contentStyleClass),c("ngStyle",t.contentStyle)("ngClass","p-overlay-content")("@overlayContentAnimation",P(11,Se,wt(7,we,t.showTransitionOptions,t.hideTransitionOptions,t.transformOptions[t.modal?t.overlayResponsiveDirection:"default"]))),g(3),c("ngTemplateOutlet",t.contentTemplate||t._contentTemplate)("ngTemplateOutletContext",P(15,xe,P(13,be,t.overlayMode)))}}function ze(e,l){if(e&1){let t=pt();I(0,"div",3,0),nt("click",function(){tt(t);let n=u();return et(n.onOverlayClick())}),_(2,Te,4,17,"div",2),T()}if(e&2){let t=u();x(t.styleClass),c("ngStyle",t.style)("ngClass",Wt(5,Ce,[t.modal,t.modal&&t.overlayResponsiveDirection==="center",t.modal&&t.overlayResponsiveDirection==="top",t.modal&&t.overlayResponsiveDirection==="top-start",t.modal&&t.overlayResponsiveDirection==="top-end",t.modal&&t.overlayResponsiveDirection==="bottom",t.modal&&t.overlayResponsiveDirection==="bottom-start",t.modal&&t.overlayResponsiveDirection==="bottom-end",t.modal&&t.overlayResponsiveDirection==="left",t.modal&&t.overlayResponsiveDirection==="left-start",t.modal&&t.overlayResponsiveDirection==="left-end",t.modal&&t.overlayResponsiveDirection==="right",t.modal&&t.overlayResponsiveDirection==="right-start",t.modal&&t.overlayResponsiveDirection==="right-end"])),g(2),c("ngIf",t.visible)}}var Oe=({dt:e})=>`
.p-overlay {
    position: absolute;
    top: 0;
}

.p-overlay-modal {
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}

.p-overlay-content {
    transform-origin: inherit;
}

.p-overlay-modal > .p-overlay-content {
    z-index: 1;
    width: 90%;
}

/* Position */
/* top */
.p-overlay-top {
    align-items: flex-start;
}
.p-overlay-top-start {
    align-items: flex-start;
    justify-content: flex-start;
}
.p-overlay-top-end {
    align-items: flex-start;
    justify-content: flex-end;
}

/* bottom */
.p-overlay-bottom {
    align-items: flex-end;
}
.p-overlay-bottom-start {
    align-items: flex-end;
    justify-content: flex-start;
}
.p-overlay-bottom-end {
    align-items: flex-end;
    justify-content: flex-end;
}

/* left */
.p-overlay-left {
    justify-content: flex-start;
}
.p-overlay-left-start {
    justify-content: flex-start;
    align-items: flex-start;
}
.p-overlay-left-end {
    justify-content: flex-start;
    align-items: flex-end;
}

/* right */
.p-overlay-right {
    justify-content: flex-end;
}
.p-overlay-right-start {
    justify-content: flex-end;
    align-items: flex-start;
}
.p-overlay-right-end {
    justify-content: flex-end;
    align-items: flex-end;
}
`,le=(()=>{class e extends ${name="overlay";theme=Oe;static \u0275fac=(()=>{let t;return function(n){return(t||(t=y(e)))(n||e)}})();static \u0275prov=F({token:e,factory:e.\u0275fac})}return e})(),Ee=Rt([Mt({transform:"{{transform}}",opacity:0}),Ft("{{showTransitionParams}}")]),Ve=Rt([Ft("{{hideTransitionParams}}",Mt({transform:"{{transform}}",opacity:0}))]),De=(()=>{class e extends B{overlayService;zone;get visible(){return this._visible}set visible(t){this._visible=t,this._visible&&!this.modalVisible&&(this.modalVisible=!0)}get mode(){return this._mode||this.overlayOptions?.mode}set mode(t){this._mode=t}get style(){return _t.merge(this._style,this.modal?this.overlayResponsiveOptions?.style:this.overlayOptions?.style)}set style(t){this._style=t}get styleClass(){return _t.merge(this._styleClass,this.modal?this.overlayResponsiveOptions?.styleClass:this.overlayOptions?.styleClass)}set styleClass(t){this._styleClass=t}get contentStyle(){return _t.merge(this._contentStyle,this.modal?this.overlayResponsiveOptions?.contentStyle:this.overlayOptions?.contentStyle)}set contentStyle(t){this._contentStyle=t}get contentStyleClass(){return _t.merge(this._contentStyleClass,this.modal?this.overlayResponsiveOptions?.contentStyleClass:this.overlayOptions?.contentStyleClass)}set contentStyleClass(t){this._contentStyleClass=t}get target(){let t=this._target||this.overlayOptions?.target;return t===void 0?"@prev":t}set target(t){this._target=t}get appendTo(){return this._appendTo||this.overlayOptions?.appendTo}set appendTo(t){this._appendTo=t}get autoZIndex(){let t=this._autoZIndex||this.overlayOptions?.autoZIndex;return t===void 0?!0:t}set autoZIndex(t){this._autoZIndex=t}get baseZIndex(){let t=this._baseZIndex||this.overlayOptions?.baseZIndex;return t===void 0?0:t}set baseZIndex(t){this._baseZIndex=t}get showTransitionOptions(){let t=this._showTransitionOptions||this.overlayOptions?.showTransitionOptions;return t===void 0?".12s cubic-bezier(0, 0, 0.2, 1)":t}set showTransitionOptions(t){this._showTransitionOptions=t}get hideTransitionOptions(){let t=this._hideTransitionOptions||this.overlayOptions?.hideTransitionOptions;return t===void 0?".1s linear":t}set hideTransitionOptions(t){this._hideTransitionOptions=t}get listener(){return this._listener||this.overlayOptions?.listener}set listener(t){this._listener=t}get responsive(){return this._responsive||this.overlayOptions?.responsive}set responsive(t){this._responsive=t}get options(){return this._options}set options(t){this._options=t}visibleChange=new S;onBeforeShow=new S;onShow=new S;onBeforeHide=new S;onHide=new S;onAnimationStart=new S;onAnimationDone=new S;overlayViewChild;contentViewChild;contentTemplate;templates;_contentTemplate;_visible=!1;_mode;_style;_styleClass;_contentStyle;_contentStyleClass;_target;_appendTo;_autoZIndex;_baseZIndex;_showTransitionOptions;_hideTransitionOptions;_listener;_responsive;_options;modalVisible=!1;isOverlayClicked=!1;isOverlayContentClicked=!1;scrollHandler;documentClickListener;documentResizeListener;_componentStyle=M(le);documentKeyboardListener;window;transformOptions={default:"scaleY(0.8)",center:"scale(0.7)",top:"translate3d(0px, -100%, 0px)","top-start":"translate3d(0px, -100%, 0px)","top-end":"translate3d(0px, -100%, 0px)",bottom:"translate3d(0px, 100%, 0px)","bottom-start":"translate3d(0px, 100%, 0px)","bottom-end":"translate3d(0px, 100%, 0px)",left:"translate3d(-100%, 0px, 0px)","left-start":"translate3d(-100%, 0px, 0px)","left-end":"translate3d(-100%, 0px, 0px)",right:"translate3d(100%, 0px, 0px)","right-start":"translate3d(100%, 0px, 0px)","right-end":"translate3d(100%, 0px, 0px)"};get modal(){if(gt(this.platformId))return this.mode==="modal"||this.overlayResponsiveOptions&&this.document.defaultView?.matchMedia(this.overlayResponsiveOptions.media?.replace("@media","")||`(max-width: ${this.overlayResponsiveOptions.breakpoint})`).matches}get overlayMode(){return this.mode||(this.modal?"modal":"overlay")}get overlayOptions(){return j(j({},this.config?.overlayOptions),this.options)}get overlayResponsiveOptions(){return j(j({},this.overlayOptions?.responsive),this.responsive)}get overlayResponsiveDirection(){return this.overlayResponsiveOptions?.direction||"center"}get overlayEl(){return this.overlayViewChild?.nativeElement}get contentEl(){return this.contentViewChild?.nativeElement}get targetEl(){return Kt(this.target,this.el?.nativeElement)}constructor(t,i){super(),this.overlayService=t,this.zone=i}ngAfterContentInit(){this.templates?.forEach(t=>{switch(t.getType()){case"content":this._contentTemplate=t.template;break;default:this._contentTemplate=t.template;break}})}show(t,i=!1){this.onVisibleChange(!0),this.handleEvents("onShow",{overlay:t||this.overlayEl,target:this.targetEl,mode:this.overlayMode}),i&&Dt(this.targetEl),this.modal&&Vt(this.document?.body,"p-overflow-hidden")}hide(t,i=!1){if(this.visible)this.onVisibleChange(!1),this.handleEvents("onHide",{overlay:t||this.overlayEl,target:this.targetEl,mode:this.overlayMode}),i&&Dt(this.targetEl),this.modal&&Zt(this.document?.body,"p-overflow-hidden");else return}alignOverlay(){!this.modal&&yt.alignOverlay(this.overlayEl,this.targetEl,this.appendTo)}onVisibleChange(t){this._visible=t,this.visibleChange.emit(t)}onOverlayClick(){this.isOverlayClicked=!0}onOverlayContentClick(t){this.overlayService.add({originalEvent:t,target:this.targetEl}),this.isOverlayContentClicked=!0}onOverlayContentAnimationStart(t){switch(t.toState){case"visible":this.handleEvents("onBeforeShow",{overlay:this.overlayEl,target:this.targetEl,mode:this.overlayMode}),this.autoZIndex&&zt.set(this.overlayMode,this.overlayEl,this.baseZIndex+this.config?.zIndex[this.overlayMode]),yt.appendOverlay(this.overlayEl,this.appendTo==="body"?this.document.body:this.appendTo,this.appendTo),this.alignOverlay();break;case"void":this.handleEvents("onBeforeHide",{overlay:this.overlayEl,target:this.targetEl,mode:this.overlayMode}),this.modal&&Vt(this.overlayEl,"p-overlay-mask-leave");break}this.handleEvents("onAnimationStart",t)}onOverlayContentAnimationDone(t){let i=this.overlayEl||t.element.parentElement;switch(t.toState){case"visible":this.visible&&(this.show(i,!0),this.bindListeners());break;case"void":if(!this.visible){this.hide(i,!0),this.modalVisible=!1,this.unbindListeners(),yt.appendOverlay(this.overlayEl,this.targetEl,this.appendTo),zt.clear(i),this.cd.markForCheck();break}}this.handleEvents("onAnimationDone",t)}handleEvents(t,i){this[t].emit(i),this.options&&this.options[t]&&this.options[t](i),this.config?.overlayOptions&&(this.config?.overlayOptions)[t]&&(this.config?.overlayOptions)[t](i)}bindListeners(){this.bindScrollListener(),this.bindDocumentClickListener(),this.bindDocumentResizeListener(),this.bindDocumentKeyboardListener()}unbindListeners(){this.unbindScrollListener(),this.unbindDocumentClickListener(),this.unbindDocumentResizeListener(),this.unbindDocumentKeyboardListener()}bindScrollListener(){this.scrollHandler||(this.scrollHandler=new Yt(this.targetEl,t=>{(this.listener?this.listener(t,{type:"scroll",mode:this.overlayMode,valid:!0}):!0)&&this.hide(t,!0)})),this.scrollHandler.bindScrollListener()}unbindScrollListener(){this.scrollHandler&&this.scrollHandler.unbindScrollListener()}bindDocumentClickListener(){this.documentClickListener||(this.documentClickListener=this.renderer.listen(this.document,"click",t=>{let n=!(this.targetEl&&(this.targetEl.isSameNode(t.target)||!this.isOverlayClicked&&this.targetEl.contains(t.target)))&&!this.isOverlayContentClicked;(this.listener?this.listener(t,{type:"outside",mode:this.overlayMode,valid:t.which!==3&&n}):n)&&this.hide(t),this.isOverlayClicked=this.isOverlayContentClicked=!1}))}unbindDocumentClickListener(){this.documentClickListener&&(this.documentClickListener(),this.documentClickListener=null)}bindDocumentResizeListener(){this.documentResizeListener||(this.documentResizeListener=this.renderer.listen(this.document.defaultView,"resize",t=>{(this.listener?this.listener(t,{type:"resize",mode:this.overlayMode,valid:!lt()}):!lt())&&this.hide(t,!0)}))}unbindDocumentResizeListener(){this.documentResizeListener&&(this.documentResizeListener(),this.documentResizeListener=null)}bindDocumentKeyboardListener(){this.documentKeyboardListener||this.zone.runOutsideAngular(()=>{this.documentKeyboardListener=this.renderer.listen(this.document.defaultView,"keydown",t=>{if(this.overlayOptions.hideOnEscape===!1||t.code!=="Escape")return;(this.listener?this.listener(t,{type:"keydown",mode:this.overlayMode,valid:!lt()}):!lt())&&this.zone.run(()=>{this.hide(t,!0)})})})}unbindDocumentKeyboardListener(){this.documentKeyboardListener&&(this.documentKeyboardListener(),this.documentKeyboardListener=null)}ngOnDestroy(){this.hide(this.overlayEl,!0),this.overlayEl&&(yt.appendOverlay(this.overlayEl,this.targetEl,this.appendTo),zt.clear(this.overlayEl)),this.scrollHandler&&(this.scrollHandler.destroy(),this.scrollHandler=null),this.unbindListeners(),super.ngOnDestroy()}static \u0275fac=function(i){return new(i||e)(N(Ut),N(Ct))};static \u0275cmp=b({type:e,selectors:[["p-overlay"]],contentQueries:function(i,n,o){if(i&1&&(A(o,se,4),A(o,Tt,4)),i&2){let s;z(s=O())&&(n.contentTemplate=s.first),z(s=O())&&(n.templates=s)}},viewQuery:function(i,n){if(i&1&&(ht(_e,5),ht(se,5)),i&2){let o;z(o=O())&&(n.overlayViewChild=o.first),z(o=O())&&(n.contentViewChild=o.first)}},inputs:{visible:"visible",mode:"mode",style:"style",styleClass:"styleClass",contentStyle:"contentStyle",contentStyleClass:"contentStyleClass",target:"target",appendTo:"appendTo",autoZIndex:"autoZIndex",baseZIndex:"baseZIndex",showTransitionOptions:"showTransitionOptions",hideTransitionOptions:"hideTransitionOptions",listener:"listener",responsive:"responsive",options:"options"},outputs:{visibleChange:"visibleChange",onBeforeShow:"onBeforeShow",onShow:"onShow",onBeforeHide:"onBeforeHide",onHide:"onHide",onAnimationStart:"onAnimationStart",onAnimationDone:"onAnimationDone"},features:[R([le]),C],ngContentSelectors:ve,decls:1,vars:1,consts:[["overlay",""],["content",""],[3,"ngStyle","class","ngClass","click",4,"ngIf"],[3,"click","ngStyle","ngClass"],[4,"ngTemplateOutlet","ngTemplateOutletContext"]],template:function(i,n){i&1&&(q(),_(0,ze,3,20,"div",2)),i&2&&c("ngIf",n.modalVisible)},dependencies:[G,St,bt,It,xt,U],encapsulation:2,data:{animation:[ee("overlayContentAnimation",[kt(":enter",[Pt(Ee)]),kt(":leave",[Pt(Ve)])])]},changeDetection:0})}return e})(),Tn=(()=>{class e{static \u0275fac=function(i){return new(i||e)};static \u0275mod=it({type:e});static \u0275inj=X({imports:[De,U,U]})}return e})();var re=["content"],Le=["item"],Fe=["loader"],Me=["loadericon"],ke=["element"],Re=["*"],Pe=(e,l,t)=>({"p-virtualscroller":!0,"p-virtualscroller-inline":e,"p-virtualscroller-both p-both-scroll":l,"p-virtualscroller-horizontal p-horizontal-scroll":t}),$t=(e,l)=>({$implicit:e,options:l}),$e=e=>({"p-virtualscroller-content":!0,"p-virtualscroller-loading ":e}),Be=e=>({"p-virtualscroller-loader-mask":e}),He=e=>({numCols:e}),ce=e=>({options:e}),je=()=>({styleClass:"p-virtualscroller-loading-icon"}),Ae=(e,l)=>({rows:e,columns:l});function Ne(e,l){e&1&&Z(0)}function We(e,l){if(e&1&&(W(0),_(1,Ne,1,0,"ng-container",10),Q()),e&2){let t=u(2);g(),c("ngTemplateOutlet",t.contentTemplate||t._contentTemplate)("ngTemplateOutletContext",ut(2,$t,t.loadedItems,t.getContentOptions()))}}function Qe(e,l){e&1&&Z(0)}function Ze(e,l){if(e&1&&(W(0),_(1,Qe,1,0,"ng-container",10),Q()),e&2){let t=l.$implicit,i=l.index,n=u(3);g(),c("ngTemplateOutlet",n.itemTemplate||n._itemTemplate)("ngTemplateOutletContext",ut(2,$t,t,n.getOptions(i)))}}function qe(e,l){if(e&1&&(I(0,"div",11,3),_(2,Ze,2,5,"ng-container",12),T()),e&2){let t=u(2);At(t.contentStyle),x(t.contentStyleClass),c("ngClass",P(8,$e,t.d_loading)),L("data-pc-section","content"),g(2),c("ngForOf",t.loadedItems)("ngForTrackBy",t._trackBy)}}function Ke(e,l){if(e&1&&k(0,"div",13),e&2){let t=u(2);c("ngStyle",t.spacerStyle),L("data-pc-section","spacer")}}function Ge(e,l){e&1&&Z(0)}function Ue(e,l){if(e&1&&(W(0),_(1,Ge,1,0,"ng-container",10),Q()),e&2){let t=l.index,i=u(4);g(),c("ngTemplateOutlet",i.loaderTemplate||i._loaderTemplate)("ngTemplateOutletContext",P(4,ce,i.getLoaderOptions(t,i.both&&P(2,He,i.numItemsInViewport.cols))))}}function Ye(e,l){if(e&1&&(W(0),_(1,Ue,2,6,"ng-container",15),Q()),e&2){let t=u(3);g(),c("ngForOf",t.loaderArr)}}function Je(e,l){e&1&&Z(0)}function Xe(e,l){if(e&1&&(W(0),_(1,Je,1,0,"ng-container",10),Q()),e&2){let t=u(4);g(),c("ngTemplateOutlet",t.loaderIconTemplate||t._loaderIconTemplate)("ngTemplateOutletContext",P(3,ce,Nt(2,je)))}}function ti(e,l){e&1&&k(0,"SpinnerIcon",16),e&2&&(c("styleClass","p-virtualscroller-loading-icon pi-spin"),L("data-pc-section","loadingIcon"))}function ei(e,l){if(e&1&&_(0,Xe,2,5,"ng-container",6)(1,ti,1,2,"ng-template",null,5,ft),e&2){let t=mt(2),i=u(3);c("ngIf",i.loaderIconTemplate||i._loaderIconTemplate)("ngIfElse",t)}}function ii(e,l){if(e&1&&(I(0,"div",14),_(1,Ye,2,1,"ng-container",6)(2,ei,3,2,"ng-template",null,4,ft),T()),e&2){let t=mt(3),i=u(2);c("ngClass",P(4,Be,!i.loaderTemplate)),L("data-pc-section","loader"),g(),c("ngIf",i.loaderTemplate||i._loaderTemplate)("ngIfElse",t)}}function ni(e,l){if(e&1){let t=pt();W(0),I(1,"div",7,1),nt("scroll",function(n){tt(t);let o=u();return et(o.onContainerScroll(n))}),_(3,We,2,5,"ng-container",6)(4,qe,3,10,"ng-template",null,2,ft)(6,Ke,1,2,"div",8)(7,ii,4,6,"div",9),T(),Q()}if(e&2){let t=mt(5),i=u();g(),x(i._styleClass),c("ngStyle",i._style)("ngClass",wt(12,Pe,i.inline,i.both,i.horizontal)),L("id",i._id)("tabindex",i.tabindex)("data-pc-name","scroller")("data-pc-section","root"),g(2),c("ngIf",i.contentTemplate||i._contentTemplate)("ngIfElse",t),g(3),c("ngIf",i._showSpacer),g(),c("ngIf",!i.loaderDisabled&&i._showLoader&&i.d_loading)}}function oi(e,l){e&1&&Z(0)}function si(e,l){if(e&1&&(W(0),_(1,oi,1,0,"ng-container",10),Q()),e&2){let t=u(2);g(),c("ngTemplateOutlet",t.contentTemplate||t._contentTemplate)("ngTemplateOutletContext",ut(5,$t,t.items,ut(2,Ae,t._items,t.loadedColumns)))}}function li(e,l){if(e&1&&(K(0),_(1,si,2,8,"ng-container",17)),e&2){let t=u();g(),c("ngIf",t.contentTemplate||t._contentTemplate)}}var ri=({dt:e})=>`
.p-virtualscroller {
    position: relative;
    overflow: auto;
    contain: strict;
    transform: translateZ(0);
    will-change: scroll-position;
    outline: 0 none;
}

.p-virtualscroller-content {
    position: absolute;
    top: 0;
    left: 0;
    min-height: 100%;
    min-width: 100%;
    will-change: transform;
}

.p-virtualscroller-spacer {
    position: absolute;
    top: 0;
    left: 0;
    height: 1px;
    width: 1px;
    transform-origin: 0 0;
    pointer-events: none;
}

.p-virtualscroller-loader {
    position: sticky;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: ${e("virtualscroller.loader.mask.background")};
    color: ${e("virtualscroller.loader.mask.color")};
}

.p-virtualscroller-loader-mask {
    display: flex;
    align-items: center;
    justify-content: center;
}

.p-virtualscroller-loading-icon {
    font-size: ${e("virtualscroller.loader.icon.size")};
    width: ${e("virtualscroller.loader.icon.size")};
    height: ${e("virtualscroller.loader.icon.size")};
}

.p-virtualscroller-horizontal > .p-virtualscroller-content {
    display: flex;
}

.p-virtualscroller-inline .p-virtualscroller-content {
    position: static;
}
`,ae=(()=>{class e extends ${name="virtualscroller";theme=ri;static \u0275fac=(()=>{let t;return function(n){return(t||(t=y(e)))(n||e)}})();static \u0275prov=F({token:e,factory:e.\u0275fac})}return e})();var qn=(()=>{class e extends B{zone;get id(){return this._id}set id(t){this._id=t}get style(){return this._style}set style(t){this._style=t}get styleClass(){return this._styleClass}set styleClass(t){this._styleClass=t}get tabindex(){return this._tabindex}set tabindex(t){this._tabindex=t}get items(){return this._items}set items(t){this._items=t}get itemSize(){return this._itemSize}set itemSize(t){this._itemSize=t}get scrollHeight(){return this._scrollHeight}set scrollHeight(t){this._scrollHeight=t}get scrollWidth(){return this._scrollWidth}set scrollWidth(t){this._scrollWidth=t}get orientation(){return this._orientation}set orientation(t){this._orientation=t}get step(){return this._step}set step(t){this._step=t}get delay(){return this._delay}set delay(t){this._delay=t}get resizeDelay(){return this._resizeDelay}set resizeDelay(t){this._resizeDelay=t}get appendOnly(){return this._appendOnly}set appendOnly(t){this._appendOnly=t}get inline(){return this._inline}set inline(t){this._inline=t}get lazy(){return this._lazy}set lazy(t){this._lazy=t}get disabled(){return this._disabled}set disabled(t){this._disabled=t}get loaderDisabled(){return this._loaderDisabled}set loaderDisabled(t){this._loaderDisabled=t}get columns(){return this._columns}set columns(t){this._columns=t}get showSpacer(){return this._showSpacer}set showSpacer(t){this._showSpacer=t}get showLoader(){return this._showLoader}set showLoader(t){this._showLoader=t}get numToleratedItems(){return this._numToleratedItems}set numToleratedItems(t){this._numToleratedItems=t}get loading(){return this._loading}set loading(t){this._loading=t}get autoSize(){return this._autoSize}set autoSize(t){this._autoSize=t}get trackBy(){return this._trackBy}set trackBy(t){this._trackBy=t}get options(){return this._options}set options(t){this._options=t,t&&typeof t=="object"&&(Object.entries(t).forEach(([i,n])=>this[`_${i}`]!==n&&(this[`_${i}`]=n)),Object.entries(t).forEach(([i,n])=>this[`${i}`]!==n&&(this[`${i}`]=n)))}onLazyLoad=new S;onScroll=new S;onScrollIndexChange=new S;elementViewChild;contentViewChild;height;_id;_style;_styleClass;_tabindex=0;_items;_itemSize=0;_scrollHeight;_scrollWidth;_orientation="vertical";_step=0;_delay=0;_resizeDelay=10;_appendOnly=!1;_inline=!1;_lazy=!1;_disabled=!1;_loaderDisabled=!1;_columns;_showSpacer=!0;_showLoader=!1;_numToleratedItems;_loading;_autoSize=!1;_trackBy;_options;d_loading=!1;d_numToleratedItems;contentEl;contentTemplate;itemTemplate;loaderTemplate;loaderIconTemplate;templates;_contentTemplate;_itemTemplate;_loaderTemplate;_loaderIconTemplate;first=0;last=0;page=0;isRangeChanged=!1;numItemsInViewport=0;lastScrollPos=0;lazyLoadState={};loaderArr=[];spacerStyle={};contentStyle={};scrollTimeout;resizeTimeout;initialized=!1;windowResizeListener;defaultWidth;defaultHeight;defaultContentWidth;defaultContentHeight;_contentStyleClass;get contentStyleClass(){return this._contentStyleClass}set contentStyleClass(t){this._contentStyleClass=t}get vertical(){return this._orientation==="vertical"}get horizontal(){return this._orientation==="horizontal"}get both(){return this._orientation==="both"}get loadedItems(){return this._items&&!this.d_loading?this.both?this._items.slice(this._appendOnly?0:this.first.rows,this.last.rows).map(t=>this._columns?t:t.slice(this._appendOnly?0:this.first.cols,this.last.cols)):this.horizontal&&this._columns?this._items:this._items.slice(this._appendOnly?0:this.first,this.last):[]}get loadedRows(){return this.d_loading?this._loaderDisabled?this.loaderArr:[]:this.loadedItems}get loadedColumns(){return this._columns&&(this.both||this.horizontal)?this.d_loading&&this._loaderDisabled?this.both?this.loaderArr[0]:this.loaderArr:this._columns.slice(this.both?this.first.cols:this.first,this.both?this.last.cols:this.last):this._columns}_componentStyle=M(ae);constructor(t){super(),this.zone=t}ngOnInit(){super.ngOnInit(),this.setInitialState()}ngOnChanges(t){super.ngOnChanges(t);let i=!1;if(this.scrollHeight=="100%"&&(this.height="100%"),t.loading){let{previousValue:n,currentValue:o}=t.loading;this.lazy&&n!==o&&o!==this.d_loading&&(this.d_loading=o,i=!0)}if(t.orientation&&(this.lastScrollPos=this.both?{top:0,left:0}:0),t.numToleratedItems){let{previousValue:n,currentValue:o}=t.numToleratedItems;n!==o&&o!==this.d_numToleratedItems&&(this.d_numToleratedItems=o)}if(t.options){let{previousValue:n,currentValue:o}=t.options;this.lazy&&n?.loading!==o?.loading&&o?.loading!==this.d_loading&&(this.d_loading=o.loading,i=!0),n?.numToleratedItems!==o?.numToleratedItems&&o?.numToleratedItems!==this.d_numToleratedItems&&(this.d_numToleratedItems=o.numToleratedItems)}this.initialized&&!i&&(t.items?.previousValue?.length!==t.items?.currentValue?.length||t.itemSize||t.scrollHeight||t.scrollWidth)&&(this.init(),this.calculateAutoSize())}ngAfterContentInit(){this.templates.forEach(t=>{switch(t.getType()){case"content":this._contentTemplate=t.template;break;case"item":this._itemTemplate=t.template;break;case"loader":this._loaderTemplate=t.template;break;case"loadericon":this._loaderIconTemplate=t.template;break;default:this._itemTemplate=t.template;break}})}ngAfterViewInit(){super.ngAfterViewInit(),Promise.resolve().then(()=>{this.viewInit()})}ngAfterViewChecked(){this.initialized||this.viewInit()}ngOnDestroy(){this.unbindResizeListener(),this.contentEl=null,this.initialized=!1,super.ngOnDestroy()}viewInit(){gt(this.platformId)&&!this.initialized&&Lt(this.elementViewChild?.nativeElement)&&(this.setInitialState(),this.setContentEl(this.contentEl),this.init(),this.defaultWidth=st(this.elementViewChild?.nativeElement),this.defaultHeight=ot(this.elementViewChild?.nativeElement),this.defaultContentWidth=st(this.contentEl),this.defaultContentHeight=ot(this.contentEl),this.initialized=!0)}init(){this._disabled||(this.setSize(),this.calculateOptions(),this.setSpacerSize(),this.bindResizeListener(),this.cd.detectChanges())}setContentEl(t){this.contentEl=t||this.contentViewChild?.nativeElement||qt(this.elementViewChild?.nativeElement,".p-virtualscroller-content")}setInitialState(){this.first=this.both?{rows:0,cols:0}:0,this.last=this.both?{rows:0,cols:0}:0,this.numItemsInViewport=this.both?{rows:0,cols:0}:0,this.lastScrollPos=this.both?{top:0,left:0}:0,this.d_loading=this._loading||!1,this.d_numToleratedItems=this._numToleratedItems,this.loaderArr=[]}getElementRef(){return this.elementViewChild}getPageByFirst(t){return Math.floor(((t??this.first)+this.d_numToleratedItems*4)/(this._step||1))}isPageChanged(t){return this._step?this.page!==this.getPageByFirst(t??this.first):!0}scrollTo(t){this.elementViewChild?.nativeElement?.scrollTo(t)}scrollToIndex(t,i="auto"){if(this.both?t.every(o=>o>-1):t>-1){let o=this.first,{scrollTop:s=0,scrollLeft:r=0}=this.elementViewChild?.nativeElement,{numToleratedItems:f}=this.calculateNumItems(),p=this.getContentPosition(),d=this.itemSize,E=(h=0,m)=>h<=m?0:h,v=(h,m,D)=>h*m+D,V=(h=0,m=0)=>this.scrollTo({left:h,top:m,behavior:i}),w=this.both?{rows:0,cols:0}:0,Y=!1,a=!1;this.both?(w={rows:E(t[0],f[0]),cols:E(t[1],f[1])},V(v(w.cols,d[1],p.left),v(w.rows,d[0],p.top)),a=this.lastScrollPos.top!==s||this.lastScrollPos.left!==r,Y=w.rows!==o.rows||w.cols!==o.cols):(w=E(t,f),this.horizontal?V(v(w,d,p.left),s):V(r,v(w,d,p.top)),a=this.lastScrollPos!==(this.horizontal?r:s),Y=w!==o),this.isRangeChanged=Y,a&&(this.first=w)}}scrollInView(t,i,n="auto"){if(i){let{first:o,viewport:s}=this.getRenderedRange(),r=(d=0,E=0)=>this.scrollTo({left:d,top:E,behavior:n}),f=i==="to-start",p=i==="to-end";if(f){if(this.both)s.first.rows-o.rows>t[0]?r(s.first.cols*this._itemSize[1],(s.first.rows-1)*this._itemSize[0]):s.first.cols-o.cols>t[1]&&r((s.first.cols-1)*this._itemSize[1],s.first.rows*this._itemSize[0]);else if(s.first-o>t){let d=(s.first-1)*this._itemSize;this.horizontal?r(d,0):r(0,d)}}else if(p){if(this.both)s.last.rows-o.rows<=t[0]+1?r(s.first.cols*this._itemSize[1],(s.first.rows+1)*this._itemSize[0]):s.last.cols-o.cols<=t[1]+1&&r((s.first.cols+1)*this._itemSize[1],s.first.rows*this._itemSize[0]);else if(s.last-o<=t+1){let d=(s.first+1)*this._itemSize;this.horizontal?r(d,0):r(0,d)}}}else this.scrollToIndex(t,n)}getRenderedRange(){let t=(o,s)=>s||o?Math.floor(o/(s||o)):0,i=this.first,n=0;if(this.elementViewChild?.nativeElement){let{scrollTop:o,scrollLeft:s}=this.elementViewChild.nativeElement;if(this.both)i={rows:t(o,this._itemSize[0]),cols:t(s,this._itemSize[1])},n={rows:i.rows+this.numItemsInViewport.rows,cols:i.cols+this.numItemsInViewport.cols};else{let r=this.horizontal?s:o;i=t(r,this._itemSize),n=i+this.numItemsInViewport}}return{first:this.first,last:this.last,viewport:{first:i,last:n}}}calculateNumItems(){let t=this.getContentPosition(),i=(this.elementViewChild?.nativeElement?this.elementViewChild.nativeElement.offsetWidth-t.left:0)||0,n=(this.elementViewChild?.nativeElement?this.elementViewChild.nativeElement.offsetHeight-t.top:0)||0,o=(p,d)=>d||p?Math.ceil(p/(d||p)):0,s=p=>Math.ceil(p/2),r=this.both?{rows:o(n,this._itemSize[0]),cols:o(i,this._itemSize[1])}:o(this.horizontal?i:n,this._itemSize),f=this.d_numToleratedItems||(this.both?[s(r.rows),s(r.cols)]:s(r));return{numItemsInViewport:r,numToleratedItems:f}}calculateOptions(){let{numItemsInViewport:t,numToleratedItems:i}=this.calculateNumItems(),n=(r,f,p,d=!1)=>this.getLast(r+f+(r<p?2:3)*p,d),o=this.first,s=this.both?{rows:n(this.first.rows,t.rows,i[0]),cols:n(this.first.cols,t.cols,i[1],!0)}:n(this.first,t,i);this.last=s,this.numItemsInViewport=t,this.d_numToleratedItems=i,this.showLoader&&(this.loaderArr=this.both?Array.from({length:t.rows}).map(()=>Array.from({length:t.cols})):Array.from({length:t})),this._lazy&&Promise.resolve().then(()=>{this.lazyLoadState={first:this._step?this.both?{rows:0,cols:o.cols}:0:o,last:Math.min(this._step?this._step:this.last,this.items.length)},this.handleEvents("onLazyLoad",this.lazyLoadState)})}calculateAutoSize(){this._autoSize&&!this.d_loading&&Promise.resolve().then(()=>{if(this.contentEl){this.contentEl.style.minHeight=this.contentEl.style.minWidth="auto",this.contentEl.style.position="relative",this.elementViewChild.nativeElement.style.contain="none";let[t,i]=[st(this.contentEl),ot(this.contentEl)];t!==this.defaultContentWidth&&(this.elementViewChild.nativeElement.style.width=""),i!==this.defaultContentHeight&&(this.elementViewChild.nativeElement.style.height="");let[n,o]=[st(this.elementViewChild.nativeElement),ot(this.elementViewChild.nativeElement)];(this.both||this.horizontal)&&(this.elementViewChild.nativeElement.style.width=n<this.defaultWidth?n+"px":this._scrollWidth||this.defaultWidth+"px"),(this.both||this.vertical)&&(this.elementViewChild.nativeElement.style.height=o<this.defaultHeight?o+"px":this._scrollHeight||this.defaultHeight+"px"),this.contentEl.style.minHeight=this.contentEl.style.minWidth="",this.contentEl.style.position="",this.elementViewChild.nativeElement.style.contain=""}})}getLast(t=0,i=!1){return this._items?Math.min(i?(this._columns||this._items[0]).length:this._items.length,t):0}getContentPosition(){if(this.contentEl){let t=getComputedStyle(this.contentEl),i=parseFloat(t.paddingLeft)+Math.max(parseFloat(t.left)||0,0),n=parseFloat(t.paddingRight)+Math.max(parseFloat(t.right)||0,0),o=parseFloat(t.paddingTop)+Math.max(parseFloat(t.top)||0,0),s=parseFloat(t.paddingBottom)+Math.max(parseFloat(t.bottom)||0,0);return{left:i,right:n,top:o,bottom:s,x:i+n,y:o+s}}return{left:0,right:0,top:0,bottom:0,x:0,y:0}}setSize(){if(this.elementViewChild?.nativeElement){let t=this.elementViewChild.nativeElement.parentElement.parentElement,i=this._scrollWidth||`${this.elementViewChild.nativeElement.offsetWidth||t.offsetWidth}px`,n=this._scrollHeight||`${this.elementViewChild.nativeElement.offsetHeight||t.offsetHeight}px`,o=(s,r)=>this.elementViewChild.nativeElement.style[s]=r;this.both||this.horizontal?(o("height",n),o("width",i)):o("height",n)}}setSpacerSize(){if(this._items){let t=this.getContentPosition(),i=(n,o,s,r=0)=>this.spacerStyle=Ot(j({},this.spacerStyle),{[`${n}`]:(o||[]).length*s+r+"px"});this.both?(i("height",this._items,this._itemSize[0],t.y),i("width",this._columns||this._items[1],this._itemSize[1],t.x)):this.horizontal?i("width",this._columns||this._items,this._itemSize,t.x):i("height",this._items,this._itemSize,t.y)}}setContentPosition(t){if(this.contentEl&&!this._appendOnly){let i=t?t.first:this.first,n=(s,r)=>s*r,o=(s=0,r=0)=>this.contentStyle=Ot(j({},this.contentStyle),{transform:`translate3d(${s}px, ${r}px, 0)`});if(this.both)o(n(i.cols,this._itemSize[1]),n(i.rows,this._itemSize[0]));else{let s=n(i,this._itemSize);this.horizontal?o(s,0):o(0,s)}}}onScrollPositionChange(t){let i=t.target,n=this.getContentPosition(),o=(a,h)=>a?a>h?a-h:a:0,s=(a,h)=>h||a?Math.floor(a/(h||a)):0,r=(a,h,m,D,H,J)=>a<=H?H:J?m-D-H:h+H-1,f=(a,h,m,D,H,J,vt)=>a<=J?0:Math.max(0,vt?a<h?m:a-J:a>h?m:a-2*J),p=(a,h,m,D,H,J=!1)=>{let vt=h+D+2*H;return a>=H&&(vt+=H+1),this.getLast(vt,J)},d=o(i.scrollTop,n.top),E=o(i.scrollLeft,n.left),v=this.both?{rows:0,cols:0}:0,V=this.last,w=!1,Y=this.lastScrollPos;if(this.both){let a=this.lastScrollPos.top<=d,h=this.lastScrollPos.left<=E;if(!this._appendOnly||this._appendOnly&&(a||h)){let m={rows:s(d,this._itemSize[0]),cols:s(E,this._itemSize[1])},D={rows:r(m.rows,this.first.rows,this.last.rows,this.numItemsInViewport.rows,this.d_numToleratedItems[0],a),cols:r(m.cols,this.first.cols,this.last.cols,this.numItemsInViewport.cols,this.d_numToleratedItems[1],h)};v={rows:f(m.rows,D.rows,this.first.rows,this.last.rows,this.numItemsInViewport.rows,this.d_numToleratedItems[0],a),cols:f(m.cols,D.cols,this.first.cols,this.last.cols,this.numItemsInViewport.cols,this.d_numToleratedItems[1],h)},V={rows:p(m.rows,v.rows,this.last.rows,this.numItemsInViewport.rows,this.d_numToleratedItems[0]),cols:p(m.cols,v.cols,this.last.cols,this.numItemsInViewport.cols,this.d_numToleratedItems[1],!0)},w=v.rows!==this.first.rows||V.rows!==this.last.rows||v.cols!==this.first.cols||V.cols!==this.last.cols||this.isRangeChanged,Y={top:d,left:E}}}else{let a=this.horizontal?E:d,h=this.lastScrollPos<=a;if(!this._appendOnly||this._appendOnly&&h){let m=s(a,this._itemSize),D=r(m,this.first,this.last,this.numItemsInViewport,this.d_numToleratedItems,h);v=f(m,D,this.first,this.last,this.numItemsInViewport,this.d_numToleratedItems,h),V=p(m,v,this.last,this.numItemsInViewport,this.d_numToleratedItems),w=v!==this.first||V!==this.last||this.isRangeChanged,Y=a}}return{first:v,last:V,isRangeChanged:w,scrollPos:Y}}onScrollChange(t){let{first:i,last:n,isRangeChanged:o,scrollPos:s}=this.onScrollPositionChange(t);if(o){let r={first:i,last:n};if(this.setContentPosition(r),this.first=i,this.last=n,this.lastScrollPos=s,this.handleEvents("onScrollIndexChange",r),this._lazy&&this.isPageChanged(i)){let f={first:this._step?Math.min(this.getPageByFirst(i)*this._step,this.items.length-this._step):i,last:Math.min(this._step?(this.getPageByFirst(i)+1)*this._step:n,this.items.length)};(this.lazyLoadState.first!==f.first||this.lazyLoadState.last!==f.last)&&this.handleEvents("onLazyLoad",f),this.lazyLoadState=f}}}onContainerScroll(t){if(this.handleEvents("onScroll",{originalEvent:t}),this._delay&&this.isPageChanged()){if(this.scrollTimeout&&clearTimeout(this.scrollTimeout),!this.d_loading&&this.showLoader){let{isRangeChanged:i}=this.onScrollPositionChange(t);(i||(this._step?this.isPageChanged():!1))&&(this.d_loading=!0,this.cd.detectChanges())}this.scrollTimeout=setTimeout(()=>{this.onScrollChange(t),this.d_loading&&this.showLoader&&(!this._lazy||this._loading===void 0)&&(this.d_loading=!1,this.page=this.getPageByFirst()),this.cd.detectChanges()},this._delay)}else!this.d_loading&&this.onScrollChange(t)}bindResizeListener(){gt(this.platformId)&&(this.windowResizeListener||this.zone.runOutsideAngular(()=>{let t=this.document.defaultView,i=lt()?"orientationchange":"resize";this.windowResizeListener=this.renderer.listen(t,i,this.onWindowResize.bind(this))}))}unbindResizeListener(){this.windowResizeListener&&(this.windowResizeListener(),this.windowResizeListener=null)}onWindowResize(){this.resizeTimeout&&clearTimeout(this.resizeTimeout),this.resizeTimeout=setTimeout(()=>{if(Lt(this.elementViewChild?.nativeElement)){let[t,i]=[st(this.elementViewChild?.nativeElement),ot(this.elementViewChild?.nativeElement)],[n,o]=[t!==this.defaultWidth,i!==this.defaultHeight];(this.both?n||o:this.horizontal?n:this.vertical?o:!1)&&this.zone.run(()=>{this.d_numToleratedItems=this._numToleratedItems,this.defaultWidth=t,this.defaultHeight=i,this.defaultContentWidth=st(this.contentEl),this.defaultContentHeight=ot(this.contentEl),this.init()})}},this._resizeDelay)}handleEvents(t,i){return this.options&&this.options[t]?this.options[t](i):this[t].emit(i)}getContentOptions(){return{contentStyleClass:`p-virtualscroller-content ${this.d_loading?"p-virtualscroller-loading":""}`,items:this.loadedItems,getItemOptions:t=>this.getOptions(t),loading:this.d_loading,getLoaderOptions:(t,i)=>this.getLoaderOptions(t,i),itemSize:this._itemSize,rows:this.loadedRows,columns:this.loadedColumns,spacerStyle:this.spacerStyle,contentStyle:this.contentStyle,vertical:this.vertical,horizontal:this.horizontal,both:this.both}}getOptions(t){let i=(this._items||[]).length,n=this.both?this.first.rows+t:this.first+t;return{index:n,count:i,first:n===0,last:n===i-1,even:n%2===0,odd:n%2!==0}}getLoaderOptions(t,i){let n=this.loaderArr.length;return j({index:t,count:n,first:t===0,last:t===n-1,even:t%2===0,odd:t%2!==0},i)}static \u0275fac=function(i){return new(i||e)(N(Ct))};static \u0275cmp=b({type:e,selectors:[["p-scroller"],["p-virtualscroller"],["p-virtual-scroller"],["p-virtualScroller"]],contentQueries:function(i,n,o){if(i&1&&(A(o,re,4),A(o,Le,4),A(o,Fe,4),A(o,Me,4),A(o,Tt,4)),i&2){let s;z(s=O())&&(n.contentTemplate=s.first),z(s=O())&&(n.itemTemplate=s.first),z(s=O())&&(n.loaderTemplate=s.first),z(s=O())&&(n.loaderIconTemplate=s.first),z(s=O())&&(n.templates=s)}},viewQuery:function(i,n){if(i&1&&(ht(ke,5),ht(re,5)),i&2){let o;z(o=O())&&(n.elementViewChild=o.first),z(o=O())&&(n.contentViewChild=o.first)}},hostVars:2,hostBindings:function(i,n){i&2&&jt("height",n.height)},inputs:{id:"id",style:"style",styleClass:"styleClass",tabindex:"tabindex",items:"items",itemSize:"itemSize",scrollHeight:"scrollHeight",scrollWidth:"scrollWidth",orientation:"orientation",step:"step",delay:"delay",resizeDelay:"resizeDelay",appendOnly:"appendOnly",inline:"inline",lazy:"lazy",disabled:"disabled",loaderDisabled:"loaderDisabled",columns:"columns",showSpacer:"showSpacer",showLoader:"showLoader",numToleratedItems:"numToleratedItems",loading:"loading",autoSize:"autoSize",trackBy:"trackBy",options:"options"},outputs:{onLazyLoad:"onLazyLoad",onScroll:"onScroll",onScrollIndexChange:"onScrollIndexChange"},features:[R([ae]),C,Bt],ngContentSelectors:Re,decls:3,vars:2,consts:[["disabledContainer",""],["element",""],["buildInContent",""],["content",""],["buildInLoader",""],["buildInLoaderIcon",""],[4,"ngIf","ngIfElse"],[3,"scroll","ngStyle","ngClass"],["class","p-virtualscroller-spacer",3,"ngStyle",4,"ngIf"],["class","p-virtualscroller-loader",3,"ngClass",4,"ngIf"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],[3,"ngClass"],[4,"ngFor","ngForOf","ngForTrackBy"],[1,"p-virtualscroller-spacer",3,"ngStyle"],[1,"p-virtualscroller-loader",3,"ngClass"],[4,"ngFor","ngForOf"],[3,"styleClass"],[4,"ngIf"]],template:function(i,n){if(i&1&&(q(),_(0,ni,8,16,"ng-container",6)(1,li,2,1,"ng-template",null,0,ft)),i&2){let o=mt(2);c("ngIf",!n._disabled)("ngIfElse",o)}},dependencies:[G,St,Qt,bt,It,xt,Jt,U],encapsulation:2})}return e})();export{bi as a,Ti as b,Vi as c,vi as d,Ci as e,Ni as f,on as g,De as h,Tn as i,qn as j};
