import{a as xe}from"./chunk-GXCP35VS.js";import{a as ye,b as me,c as ue,d as Ce}from"./chunk-A5ODFUY6.js";import{B as W,E as de,F as Ie,G as Xe,H as ie,I as q,J as Je,b as ve,c as je,d as se,e as We,k as qe,m as j,n as ce,o as te,p as Ke,q as Ue,r as Ze,v as Ye}from"./chunk-JO6ANAIQ.js";import{c as lt,e as st}from"./chunk-UYFWB4QC.js";import"./chunk-N4Q62AM4.js";import{a as ot}from"./chunk-C3LRG75F.js";import{a as vt}from"./chunk-P2H2VK4V.js";import{a as Ge,d as Qe}from"./chunk-74WUILD2.js";import{a as tt,b as it,c as at,d as nt,e as rt}from"./chunk-UCW3XDFB.js";import{a as $e,b as ze}from"./chunk-CFP35ZH6.js";import{d as Ne}from"./chunk-I5UCCVT5.js";import{B as Q}from"./chunk-A5X4AFU6.js";import{c as et,d as we,g as Te,i as ke}from"./chunk-W5UVDF5Y.js";import{d as oe,k as Y,l as X,m as B,n as le,o as J,p as ee,r as E}from"./chunk-S7VEMPVS.js";import{Bc as g,Cc as G,Da as pe,Eb as f,Fb as r,Ia as U,Jb as F,Pb as c,Qb as s,Rb as b,Sb as ae,Tb as ne,Ub as Ee,Vb as w,Xb as y,Yb as d,_a as he,ab as De,ba as Pe,bc as T,ca as L,cb as l,cc as z,db as x,dc as _,e as _t,ec as v,ha as H,hb as Fe,hc as ge,ic as C,jc as O,lc as Ve,mc as Oe,nc as Be,oc as fe,pa as N,pb as I,pc as Z,qa as p,qb as R,qc as S,ra as h,rb as be,rc as _e,sa as $,sb as k,sc as Le,ta as M,tb as V,tc as Re,ub as u,uc as Ae,wc as re,yc as He,za as D}from"./chunk-TNWYAA2M.js";var ct=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=R({type:t});static \u0275inj=L({imports:[Q,Q]})}return t})();var dt=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=R({type:t});static \u0275inj=L({imports:[Q,Q]})}return t})();var mt=(()=>{class t extends ie{pFocusTrapDisabled=!1;platformId=H(U);document=H(oe);firstHiddenFocusableElement;lastHiddenFocusableElement;ngOnInit(){super.ngOnInit(),E(this.platformId)&&!this.pFocusTrapDisabled&&!this.firstHiddenFocusableElement&&!this.lastHiddenFocusableElement&&this.createHiddenFocusableElements()}ngOnChanges(e){super.ngOnChanges(e),e.pFocusTrapDisabled&&E(this.platformId)&&(e.pFocusTrapDisabled.currentValue?this.removeHiddenFocusableElements():this.createHiddenFocusableElements())}removeHiddenFocusableElements(){this.firstHiddenFocusableElement&&this.firstHiddenFocusableElement.parentNode&&this.firstHiddenFocusableElement.parentNode.removeChild(this.firstHiddenFocusableElement),this.lastHiddenFocusableElement&&this.lastHiddenFocusableElement.parentNode&&this.lastHiddenFocusableElement.parentNode.removeChild(this.lastHiddenFocusableElement)}getComputedSelector(e){return`:not(.p-hidden-focusable):not([data-p-hidden-focusable="true"])${e??""}`}createHiddenFocusableElements(){let e="0",i=a=>qe("span",{class:"p-hidden-accessible p-hidden-focusable",tabindex:e,role:"presentation","aria-hidden":!0,"data-p-hidden-accessible":!0,"data-p-hidden-focusable":!0,onFocus:a?.bind(this)});this.firstHiddenFocusableElement=i(this.onFirstHiddenElementFocus),this.lastHiddenFocusableElement=i(this.onLastHiddenElementFocus),this.firstHiddenFocusableElement.setAttribute("data-pc-section","firstfocusableelement"),this.lastHiddenFocusableElement.setAttribute("data-pc-section","lastfocusableelement"),this.el.nativeElement.prepend(this.firstHiddenFocusableElement),this.el.nativeElement.append(this.lastHiddenFocusableElement)}onFirstHiddenElementFocus(e){let{currentTarget:i,relatedTarget:a}=e,n=a===this.lastHiddenFocusableElement||!this.el.nativeElement?.contains(a)?Ue(i.parentElement,":not(.p-hidden-focusable)"):this.lastHiddenFocusableElement;te(n)}onLastHiddenElementFocus(e){let{currentTarget:i,relatedTarget:a}=e,n=a===this.firstHiddenFocusableElement||!this.el.nativeElement?.contains(a)?Ze(i.parentElement,":not(.p-hidden-focusable)"):this.firstHiddenFocusableElement;te(n)}static \u0275fac=(()=>{let e;return function(a){return(e||(e=M(t)))(a||t)}})();static \u0275dir=be({type:t,selectors:[["","pFocusTrap",""]],inputs:{pFocusTrapDisabled:[2,"pFocusTrapDisabled","pFocusTrapDisabled",g]},features:[V,k,N]})}return t})();var Me=(()=>{class t extends q{static \u0275fac=(()=>{let e;return function(a){return(e||(e=M(t)))(a||t)}})();static \u0275cmp=I({type:t,selectors:[["TimesIcon"]],features:[k],decls:2,vars:5,consts:[["width","14","height","14","viewBox","0 0 14 14","fill","none","xmlns","http://www.w3.org/2000/svg"],["d","M8.01186 7.00933L12.27 2.75116C12.341 2.68501 12.398 2.60524 12.4375 2.51661C12.4769 2.42798 12.4982 2.3323 12.4999 2.23529C12.5016 2.13827 12.4838 2.0419 12.4474 1.95194C12.4111 1.86197 12.357 1.78024 12.2884 1.71163C12.2198 1.64302 12.138 1.58893 12.0481 1.55259C11.9581 1.51625 11.8617 1.4984 11.7647 1.50011C11.6677 1.50182 11.572 1.52306 11.4834 1.56255C11.3948 1.60204 11.315 1.65898 11.2488 1.72997L6.99067 5.98814L2.7325 1.72997C2.59553 1.60234 2.41437 1.53286 2.22718 1.53616C2.03999 1.53946 1.8614 1.61529 1.72901 1.74767C1.59663 1.88006 1.5208 2.05865 1.5175 2.24584C1.5142 2.43303 1.58368 2.61419 1.71131 2.75116L5.96948 7.00933L1.71131 11.2675C1.576 11.403 1.5 11.5866 1.5 11.7781C1.5 11.9696 1.576 12.1532 1.71131 12.2887C1.84679 12.424 2.03043 12.5 2.2219 12.5C2.41338 12.5 2.59702 12.424 2.7325 12.2887L6.99067 8.03052L11.2488 12.2887C11.3843 12.424 11.568 12.5 11.7594 12.5C11.9509 12.5 12.1346 12.424 12.27 12.2887C12.4053 12.1532 12.4813 11.9696 12.4813 11.7781C12.4813 11.5866 12.4053 11.403 12.27 11.2675L8.01186 7.00933Z","fill","currentColor"]],template:function(i,a){i&1&&($(),c(0,"svg",0),b(1,"path",1),s()),i&2&&(F(a.getClassNames()),f("aria-label",a.ariaLabel)("aria-hidden",a.ariaHidden)("role",a.role))},encapsulation:2})}return t})();var ut=(()=>{class t extends q{pathId;ngOnInit(){this.pathId="url(#"+W()+")"}static \u0275fac=(()=>{let e;return function(a){return(e||(e=M(t)))(a||t)}})();static \u0275cmp=I({type:t,selectors:[["WindowMaximizeIcon"]],features:[k],decls:6,vars:7,consts:[["width","14","height","14","viewBox","0 0 14 14","fill","none","xmlns","http://www.w3.org/2000/svg"],["fill-rule","evenodd","clip-rule","evenodd","d","M7 14H11.8C12.3835 14 12.9431 13.7682 13.3556 13.3556C13.7682 12.9431 14 12.3835 14 11.8V2.2C14 1.61652 13.7682 1.05694 13.3556 0.644365C12.9431 0.231785 12.3835 0 11.8 0H2.2C1.61652 0 1.05694 0.231785 0.644365 0.644365C0.231785 1.05694 0 1.61652 0 2.2V7C0 7.15913 0.063214 7.31174 0.175736 7.42426C0.288258 7.53679 0.44087 7.6 0.6 7.6C0.75913 7.6 0.911742 7.53679 1.02426 7.42426C1.13679 7.31174 1.2 7.15913 1.2 7V2.2C1.2 1.93478 1.30536 1.68043 1.49289 1.49289C1.68043 1.30536 1.93478 1.2 2.2 1.2H11.8C12.0652 1.2 12.3196 1.30536 12.5071 1.49289C12.6946 1.68043 12.8 1.93478 12.8 2.2V11.8C12.8 12.0652 12.6946 12.3196 12.5071 12.5071C12.3196 12.6946 12.0652 12.8 11.8 12.8H7C6.84087 12.8 6.68826 12.8632 6.57574 12.9757C6.46321 13.0883 6.4 13.2409 6.4 13.4C6.4 13.5591 6.46321 13.7117 6.57574 13.8243C6.68826 13.9368 6.84087 14 7 14ZM9.77805 7.42192C9.89013 7.534 10.0415 7.59788 10.2 7.59995C10.3585 7.59788 10.5099 7.534 10.622 7.42192C10.7341 7.30985 10.798 7.15844 10.8 6.99995V3.94242C10.8066 3.90505 10.8096 3.86689 10.8089 3.82843C10.8079 3.77159 10.7988 3.7157 10.7824 3.6623C10.756 3.55552 10.701 3.45698 10.622 3.37798C10.5099 3.2659 10.3585 3.20202 10.2 3.19995H7.00002C6.84089 3.19995 6.68828 3.26317 6.57576 3.37569C6.46324 3.48821 6.40002 3.64082 6.40002 3.79995C6.40002 3.95908 6.46324 4.11169 6.57576 4.22422C6.68828 4.33674 6.84089 4.39995 7.00002 4.39995H8.80006L6.19997 7.00005C6.10158 7.11005 6.04718 7.25246 6.04718 7.40005C6.04718 7.54763 6.10158 7.69004 6.19997 7.80005C6.30202 7.91645 6.44561 7.98824 6.59997 8.00005C6.75432 7.98824 6.89791 7.91645 6.99997 7.80005L9.60002 5.26841V6.99995C9.6021 7.15844 9.66598 7.30985 9.77805 7.42192ZM1.4 14H3.8C4.17066 13.9979 4.52553 13.8498 4.78763 13.5877C5.04973 13.3256 5.1979 12.9707 5.2 12.6V10.2C5.1979 9.82939 5.04973 9.47452 4.78763 9.21242C4.52553 8.95032 4.17066 8.80215 3.8 8.80005H1.4C1.02934 8.80215 0.674468 8.95032 0.412371 9.21242C0.150274 9.47452 0.00210008 9.82939 0 10.2V12.6C0.00210008 12.9707 0.150274 13.3256 0.412371 13.5877C0.674468 13.8498 1.02934 13.9979 1.4 14ZM1.25858 10.0586C1.29609 10.0211 1.34696 10 1.4 10H3.8C3.85304 10 3.90391 10.0211 3.94142 10.0586C3.97893 10.0961 4 10.147 4 10.2V12.6C4 12.6531 3.97893 12.704 3.94142 12.7415C3.90391 12.779 3.85304 12.8 3.8 12.8H1.4C1.34696 12.8 1.29609 12.779 1.25858 12.7415C1.22107 12.704 1.2 12.6531 1.2 12.6V10.2C1.2 10.147 1.22107 10.0961 1.25858 10.0586Z","fill","currentColor"],[3,"id"],["width","14","height","14","fill","white"]],template:function(i,a){i&1&&($(),c(0,"svg",0)(1,"g"),b(2,"path",1),s(),c(3,"defs")(4,"clipPath",2),b(5,"rect",3),s()()()),i&2&&(F(a.getClassNames()),f("aria-label",a.ariaLabel)("aria-hidden",a.ariaHidden)("role",a.role),l(),f("clip-path",a.pathId),l(3),r("id",a.pathId))},encapsulation:2})}return t})();var pt=(()=>{class t extends q{pathId;ngOnInit(){this.pathId="url(#"+W()+")"}static \u0275fac=(()=>{let e;return function(a){return(e||(e=M(t)))(a||t)}})();static \u0275cmp=I({type:t,selectors:[["WindowMinimizeIcon"]],features:[k],decls:6,vars:7,consts:[["width","14","height","14","viewBox","0 0 14 14","fill","none","xmlns","http://www.w3.org/2000/svg"],["fill-rule","evenodd","clip-rule","evenodd","d","M11.8 0H2.2C1.61652 0 1.05694 0.231785 0.644365 0.644365C0.231785 1.05694 0 1.61652 0 2.2V7C0 7.15913 0.063214 7.31174 0.175736 7.42426C0.288258 7.53679 0.44087 7.6 0.6 7.6C0.75913 7.6 0.911742 7.53679 1.02426 7.42426C1.13679 7.31174 1.2 7.15913 1.2 7V2.2C1.2 1.93478 1.30536 1.68043 1.49289 1.49289C1.68043 1.30536 1.93478 1.2 2.2 1.2H11.8C12.0652 1.2 12.3196 1.30536 12.5071 1.49289C12.6946 1.68043 12.8 1.93478 12.8 2.2V11.8C12.8 12.0652 12.6946 12.3196 12.5071 12.5071C12.3196 12.6946 12.0652 12.8 11.8 12.8H7C6.84087 12.8 6.68826 12.8632 6.57574 12.9757C6.46321 13.0883 6.4 13.2409 6.4 13.4C6.4 13.5591 6.46321 13.7117 6.57574 13.8243C6.68826 13.9368 6.84087 14 7 14H11.8C12.3835 14 12.9431 13.7682 13.3556 13.3556C13.7682 12.9431 14 12.3835 14 11.8V2.2C14 1.61652 13.7682 1.05694 13.3556 0.644365C12.9431 0.231785 12.3835 0 11.8 0ZM6.368 7.952C6.44137 7.98326 6.52025 7.99958 6.6 8H9.8C9.95913 8 10.1117 7.93678 10.2243 7.82426C10.3368 7.71174 10.4 7.55913 10.4 7.4C10.4 7.24087 10.3368 7.08826 10.2243 6.97574C10.1117 6.86321 9.95913 6.8 9.8 6.8H8.048L10.624 4.224C10.73 4.11026 10.7877 3.95982 10.7849 3.80438C10.7822 3.64894 10.7192 3.50063 10.6093 3.3907C10.4994 3.28077 10.3511 3.2178 10.1956 3.21506C10.0402 3.21232 9.88974 3.27002 9.776 3.376L7.2 5.952V4.2C7.2 4.04087 7.13679 3.88826 7.02426 3.77574C6.91174 3.66321 6.75913 3.6 6.6 3.6C6.44087 3.6 6.28826 3.66321 6.17574 3.77574C6.06321 3.88826 6 4.04087 6 4.2V7.4C6.00042 7.47975 6.01674 7.55862 6.048 7.632C6.07656 7.70442 6.11971 7.7702 6.17475 7.82524C6.2298 7.88029 6.29558 7.92344 6.368 7.952ZM1.4 8.80005H3.8C4.17066 8.80215 4.52553 8.95032 4.78763 9.21242C5.04973 9.47452 5.1979 9.82939 5.2 10.2V12.6C5.1979 12.9707 5.04973 13.3256 4.78763 13.5877C4.52553 13.8498 4.17066 13.9979 3.8 14H1.4C1.02934 13.9979 0.674468 13.8498 0.412371 13.5877C0.150274 13.3256 0.00210008 12.9707 0 12.6V10.2C0.00210008 9.82939 0.150274 9.47452 0.412371 9.21242C0.674468 8.95032 1.02934 8.80215 1.4 8.80005ZM3.94142 12.7415C3.97893 12.704 4 12.6531 4 12.6V10.2C4 10.147 3.97893 10.0961 3.94142 10.0586C3.90391 10.0211 3.85304 10 3.8 10H1.4C1.34696 10 1.29609 10.0211 1.25858 10.0586C1.22107 10.0961 1.2 10.147 1.2 10.2V12.6C1.2 12.6531 1.22107 12.704 1.25858 12.7415C1.29609 12.779 1.34696 12.8 1.4 12.8H3.8C3.85304 12.8 3.90391 12.779 3.94142 12.7415Z","fill","currentColor"],[3,"id"],["width","14","height","14","fill","white"]],template:function(i,a){i&1&&($(),c(0,"svg",0)(1,"g"),b(2,"path",1),s(),c(3,"defs")(4,"clipPath",2),b(5,"rect",3),s()()()),i&2&&(F(a.getClassNames()),f("aria-label",a.ariaLabel)("aria-hidden",a.ariaHidden)("role",a.role),l(),f("clip-path",a.pathId),l(3),r("id",a.pathId))},encapsulation:2})}return t})();var xt=({dt:t})=>`
.p-galleria {
    overflow: hidden;
    border-style: solid;
    border-width: ${t("galleria.border.width")};
    border-color: ${t("galleria.border.color")};
    border-radius: ${t("galleria.border.radius")};
}

.p-galleria-content {
    display: flex;
    flex-direction: column;
}

.p-galleria-items-container {
    display: flex;
    flex-direction: column;
    position: relative;
}

.p-galleria-items {
    position: relative;
    display: flex;
    height: 100%;
}

.p-galleria-nav-button {
    position: absolute;
    top: 50%;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    background: ${t("galleria.nav.button.background")};
    color: ${t("galleria.nav.button.color")};
    width: ${t("galleria.nav.button.size")};
    height: ${t("galleria.nav.button.size")};
    transition: background ${t("galleria.transition.duration")}, color ${t("galleria.transition.duration")}, outline-color ${t("galleria.transition.duration")}, box-shadow ${t("galleria.transition.duration")};
    margin: calc(-1 * calc(${t("galleria.nav.button.size")}) / 2) ${t("galleria.nav.button.gutter")} 0 ${t("galleria.nav.button.gutter")};
    padding: 0;
    user-select: none;
    border: 0 none;
    cursor: pointer;
    outline-color: transparent;
}

.p-galleria-nav-button:not(.p-disabled):hover {
    background: ${t("galleria.nav.button.hover.background")};
    color: ${t("galleria.nav.button.hover.color")};
}

.p-galleria-nav-button:not(.p-disabled):focus-visible {
    box-shadow: ${t("galleria.nav.button.focus.ring.shadow")};
    outline: ${t("galleria.nav.button.focus.ring.width")} ${t("galleria.nav.button.focus.ring.style")} ${t("galleria.nav.button.focus.ring.color")};
    outline-offset: ${t("galleria.nav.button.focus.ring.offset")};
}

.p-galleria-next-icon,
.p-galleria-prev-icon {
    font-size: ${t("galleria.nav.icon.size")};
    width: ${t("galleria.nav.icon.size")};
    height: ${t("galleria.nav.icon.size")};
}

.p-galleria-prev-button {
    border-radius: ${t("galleria.nav.button.prev.border.radius")};
    left: 0;
}

.p-galleria-next-button {
    border-radius: ${t("galleria.nav.button.next.border.radius")};
    right: 0;
}

.p-galleria-prev-button:dir(rtl) {
    left: auto;
    right: 0;
    transform: rotate(180deg);
}

.p-galleria-next-button:dir(rtl) {
    right: auto;
    left: 0;
    transform: rotate(180deg);
}

.p-galleria-item {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
}

.p-galleria-hover-navigators .p-galleria-nav-button {
    pointer-events: none;
    opacity: 0;
    transition: opacity ${t("galleria.transition.duration")} ease-in-out;
}

.p-galleria-hover-navigators .p-galleria-items-container:hover .p-galleria-nav-button {
    pointer-events: all;
    opacity: 1;
}

.p-galleria-hover-navigators .p-galleria-items-container:hover .p-galleria-nav-button.p-disabled {
    pointer-events: none;
}

.p-galleria-caption {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    background: ${t("galleria.caption.background")};
    color: ${t("galleria.caption.color")};
    padding: ${t("galleria.caption.padding")};
}

.p-galleria-thumbnails {
    display: flex;
    flex-direction: column;
    overflow: auto;
    flex-shrink: 0;
}

.p-galleria-thumbnail-nav-button {
    align-self: center;
    flex: 0 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    position: relative;
    margin: 0 ${t("galleria.thumbnail.nav.button.gutter")};
    padding: 0;
    border: none;
    user-select: none;
    cursor: pointer;
    background: transparent;
    color: ${t("galleria.thumbnail.nav.button.color")};
    width: ${t("galleria.thumbnail.nav.button.size")};
    height: ${t("galleria.thumbnail.nav.button.size")};
    transition: background ${t("galleria.transition.duration")}, color ${t("galleria.transition.duration")}, outline-color ${t("galleria.transition.duration")};
    outline-color: transparent;
    border-radius: ${t("galleria.thumbnail.nav.button.border.radius")};
}

.p-galleria-thumbnail-nav-button:hover {
    background: ${t("galleria.thumbnail.nav.button.hover.background")};
    color: ${t("galleria.thumbnail.nav.button.hover.color")};
}

.p-galleria-thumbnail-nav-button:focus-visible {
    box-shadow: ${t("galleria.thumbnail.nav.button.focus.ring.shadow")};
    outline: ${t("galleria.thumbnail.nav.button.focus.ring.width")} ${t("galleria.thumbnail.nav.button.focus.ring.style")} ${t("galleria.thumbnail.nav.button.focus.ring.color")};
    outline-offset: ${t("galleria.thumbnail.nav.button.focus.ring.offset")};
}

.p-galleria-thumbnail-nav-button .p-galleria-thumbnail-next-icon,
.p-galleria-thumbnail-nav-button .p-galleria-thumbnail-prev-icon {
    font-size: ${t("galleria.thumbnail.nav.button.icon.size")};
    width: ${t("galleria.thumbnail.nav.button.icon.size")};
    height: ${t("galleria.thumbnail.nav.button.icon.size")};
}

.p-galleria-thumbnails-content {
    display: flex;
    flex-direction: row;
    background: ${t("galleria.thumbnails.content.background")};
    padding: ${t("galleria.thumbnails.content.padding")};
}

.p-galleria-thumbnails-viewport {
    overflow: hidden;
    width: 100%;
}

.p-galleria:not(.p-galleria-thumbnails-right):not(.p-galleria-thumbnails-left) .p-galleria-thumbnail-prev-button:dir(rtl),
.p-galleria:not(.p-galleria-thumbnails-right):not(.p-galleria-thumbnails-left) .p-galleria-thumbnail-next-button:dir(rtl) {
    transform: rotate(180deg);
}

.p-galleria-thumbnail-items {
    display: flex;
}

.p-galleria-thumbnail-item {
    overflow: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    opacity: 0.5;
}

.p-galleria-thumbnail {
    outline-color: transparent;
}

.p-galleria-thumbnail-item:hover {
    opacity: 1;
    transition: opacity 0.3s;
}

.p-galleria-thumbnail-item-current {
    opacity: 1;
}

.p-galleria-thumbnails-left .p-galleria-content,
.p-galleria-thumbnails-right .p-galleria-content {
    flex-direction: row;
}

.p-galleria-thumbnails-left .p-galleria-items-container,
.p-galleria-thumbnails-right .p-galleria-items-container {
    flex-direction: row;
}

.p-galleria-thumbnails-left .p-galleria-items-container,
.p-galleria-thumbnails-top .p-galleria-items-container {
    order: 2;
}

.p-galleria-thumbnails-left .p-galleria-thumbnails,
.p-galleria-thumbnails-top .p-galleria-thumbnails {
    order: 1;
}

.p-galleria-thumbnails-left .p-galleria-thumbnails-content,
.p-galleria-thumbnails-right .p-galleria-thumbnails-content {
    flex-direction: column;
    flex-grow: 1;
}

.p-galleria-thumbnails-left .p-galleria-thumbnail-items,
.p-galleria-thumbnails-right .p-galleria-thumbnail-items {
    flex-direction: column;
    height: 100%;
}

.p-galleria-indicator-list {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: ${t("galleria.indicator.list.padding")};
    gap: ${t("galleria.indicator.list.gap")};
    margin: 0;
    list-style: none;
}

.p-galleria-indicator-button {
    display: inline-flex;
    align-items: center;
    background: ${t("galleria.indicator.button.background")};
    width: ${t("galleria.indicator.button.width")};
    height: ${t("galleria.indicator.button.height")};
    transition: background ${t("galleria.transition.duration")}, color ${t("galleria.transition.duration")}, outline-color ${t("galleria.transition.duration")}, box-shadow ${t("galleria.transition.duration")};
    outline-color: transparent;
    border-radius: ${t("galleria.indicator.button.border.radius")};
    margin: 0;
    padding: 0;
    border: none;
    user-select: none;
    cursor: pointer;
}

.p-galleria-indicator-button:hover {
    background: ${t("galleria.indicator.button.hover.background")};
}

.p-galleria-indicator-button:focus-visible {
    box-shadow: ${t("galleria.indicator.button.focus.ring.shadow")};
    outline: ${t("galleria.indicator.button.focus.ring.width")} ${t("galleria.indicator.button.focus.ring.style")} ${t("galleria.indicator.button.focus.ring.color")};
    outline-offset: ${t("galleria.indicator.button.focus.ring.offset")};
}

.p-galleria-indicator-active .p-galleria-indicator-button {
    background: ${t("galleria.indicator.button.active.background")};
}

.p-galleria-indicators-left .p-galleria-items-container,
.p-galleria-indicators-right .p-galleria-items-container {
    flex-direction: row;
    align-items: center;
}

.p-galleria-indicators-left .p-galleria-items,
.p-galleria-indicators-top .p-galleria-items {
    order: 2;
}

.p-galleria-indicators-left .p-galleria-indicator-list,
.p-galleria-indicators-top .p-galleria-indicator-list {
    order: 1;
}

.p-galleria-indicators-left .p-galleria-indicator-list,
.p-galleria-indicators-right .p-galleria-indicator-list {
    flex-direction: column;
}

.p-galleria-inset-indicators .p-galleria-indicator-list {
    position: absolute;
    display: flex;
    z-index: 1;
    background: ${t("galleria.inset.indicator.list.background")};
}

.p-galleria-inset-indicators .p-galleria-indicator-button {
    background: ${t("galleria.inset.indicator.button.background")};
}

.p-galleria-inset-indicators .p-galleria-indicator-button:hover {
    background: ${t("galleria.inset.indicator.button.hover.background")};
}

.p-galleria-inset-indicators .p-galleria-indicator-active .p-galleria-indicator-button {
    background: ${t("galleria.inset.indicator.button.active.background")};
}

.p-galleria-inset-indicators.p-galleria-indicators-top .p-galleria-indicator-list {
    top: 0;
    left: 0;
    width: 100%;
    align-items: flex-start;
}

.p-galleria-inset-indicators.p-galleria-indicators-right .p-galleria-indicator-list {
    right: 0;
    top: 0;
    height: 100%;
    align-items: flex-end;
}

.p-galleria-inset-indicators.p-galleria-indicators-bottom .p-galleria-indicator-list {
    bottom: 0;
    left: 0;
    width: 100%;
    align-items: flex-end;
}

.p-galleria-inset-indicators.p-galleria-indicators-left .p-galleria-indicator-list {
    left: 0;
    top: 0;
    height: 100%;
    align-items: flex-start;
}

.p-galleria-mask {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
}

.p-galleria-close-button {
    position: absolute;
    top: 0;
    right: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    margin: ${t("galleria.close.button.gutter")};
    background: ${t("galleria.close.button.background")};
    color: ${t("galleria.close.button.color")};
    width: ${t("galleria.close.button.size")};
    height: ${t("galleria.close.button.size")};
    padding: 0;
    border: none;
    user-select: none;
    cursor: pointer;
    border-radius: ${t("galleria.close.button.border.radius")};
    outline-color: transparent;
    transition: background ${t("galleria.transition.duration")}, color ${t("galleria.transition.duration")}, outline-color ${t("galleria.transition.duration")};
}

.p-galleria-close-icon {
    font-size: ${t("galleria.close.button.icon.size")};
    width: ${t("galleria.close.button.icon.size")};
    height: ${t("galleria.close.button.icon.size")};
}

.p-galleria-close-button:hover {
    background: ${t("galleria.close.button.hover.background")};
    color: ${t("galleria.close.button.hover.color")};
}

.p-galleria-close-button:focus-visible {
    box-shadow: ${t("galleria.close.button.focus.ring.shadow")};
    outline: ${t("galleria.close.button.focus.ring.width")} ${t("galleria.close.button.focus.ring.style")} ${t("galleria.close.button.focus.ring.color")};
    outline-offset: ${t("galleria.close.button.focus.ring.offset")};
}

.p-galleria-mask .p-galleria-nav-button {
    position: fixed;
    top: 50%;
}

.p-galleria-enter-active {
    transition: all 150ms cubic-bezier(0, 0, 0.2, 1);
}

.p-galleria-leave-active {
    transition: all 150ms cubic-bezier(0.4, 0, 0.2, 1);
}

.p-galleria-enter-from,
.p-galleria-leave-to {
    opacity: 0;
    transform: scale(0.7);
}

.p-galleria-enter-active .p-galleria-nav-button {
    opacity: 0;
}

.p-items-hidden .p-galleria-thumbnail-item {
    visibility: hidden;
}

.p-items-hidden .p-galleria-thumbnail-item.p-galleria-thumbnail-item-active {
    visibility: visible;
}
`,wt={mask:"p-galleria-mask p-overlay-mask p-overlay-mask-enter",root:({instance:t})=>{let o=t.$attrs.showThumbnails&&t.getPositionClass("p-galleria-thumbnails",t.$attrs.thumbnailsPosition),e=t.$attrs.showIndicators&&t.getPositionClass("p-galleria-indicators",t.$attrs.indicatorsPosition);return["p-galleria p-component",{"p-galleria-fullscreen":t.$attrs.fullScreen,"p-galleria-inset-indicators":t.$attrs.showIndicatorsOnItem,"p-galleria-hover-navigators":t.$attrs.showItemNavigatorsOnHover&&!t.$attrs.fullScreen},o,e]},closeButton:"p-galleria-close-button",closeIcon:"p-galleria-close-icon",header:"p-galleria-header",content:"p-galleria-content",footer:"p-galleria-footer",itemsContainer:"p-galleria-items-container",items:"p-galleria-items",prevButton:({instance:t})=>["p-galleria-prev-button p-galleria-nav-button",{"p-disabled":t.isNavBackwardDisabled()}],prevIcon:"p-galleria-prev-icon",item:"p-galleria-item",nextButton:({instance:t})=>["p-galleria-next-button p-galleria-nav-button",{"p-disabled":t.isNavForwardDisabled()}],nextIcon:"p-galleria-next-icon",caption:"p-galleria-caption",indicatorList:"p-galleria-indicator-list",indicator:({instance:t,index:o})=>["p-galleria-indicator",{"p-galleria-indicator-active":t.isIndicatorItemActive(o)}],indicatorButton:"p-galleria-indicator-button",thumbnails:"p-galleria-thumbnails",thumbnailContent:"p-galleria-thumbnails-content",thumbnailPrevButton:({instance:t})=>["p-galleria-thumbnail-prev-button p-galleria-thumbnail-nav-button",{"p-disabled":t.isNavBackwardDisabled()}],thumbnailPrevIcon:"p-galleria-thumbnail-prev-icon",thumbnailsViewport:"p-galleria-thumbnails-viewport",thumbnailItems:"p-galleria-thumbnail-items",thumbnailItem:({instance:t,index:o,activeIndex:e})=>["p-galleria-thumbnail-item",{"p-galleria-thumbnail-item-current":e===o,"p-galleria-thumbnail-item-active":t.isItemActive(o),"p-galleria-thumbnail-item-start":t.firstItemAciveIndex()===o,"p-galleria-thumbnail-item-end":t.lastItemActiveIndex()===o}],thumbnail:"p-galleria-thumbnail",thumbnailNextButton:({instance:t})=>["p-galleria-thumbnail-next-button  p-galleria-thumbnail-nav-button",{"p-disabled":t.isNavForwardDisabled()}],thumbnailNextIcon:"p-galleria-thumbnail-next-icon"},ht=(()=>{class t extends Xe{name="galleria";theme=xt;classes=wt;static \u0275fac=(()=>{let e;return function(a){return(e||(e=M(t)))(a||t)}})();static \u0275prov=Pe({token:t,factory:t.\u0275fac})}return t})();var Tt=["header"],kt=["footer"],Mt=["indicator"],St=["caption"],Pt=["closeicon"],Dt=["previousthumbnailicon"],Ft=["nextthumbnailicon"],Et=["itempreviousicon"],Vt=["itemnexticon"],Ot=["item"],Bt=["thumbnail"],Lt=["mask"],Rt=["container"],At=()=>({"p-galleria-mask p-overlay-mask p-overlay-mask-enter":!0}),Ht=(t,o)=>({showTransitionParams:t,hideTransitionParams:o}),Nt=t=>({value:"visible",params:t});function $t(t,o){if(t&1){let e=w();c(0,"p-galleriaContent",7),y("@animation.start",function(a){p(e);let n=d(3);return h(n.onAnimationStart(a))})("@animation.done",function(a){p(e);let n=d(3);return h(n.onAnimationEnd(a))})("maskHide",function(){p(e);let a=d(3);return h(a.onMaskHide())})("activeItemChange",function(a){p(e);let n=d(3);return h(n.onActiveItemChange(a))}),s()}if(t&2){let e=d(3);r("@animation",S(9,Nt,_e(6,Ht,e.showTransitionOptions,e.hideTransitionOptions)))("value",e.value)("activeIndex",e.activeIndex)("numVisible",e.numVisibleLimit||e.numVisible)("ngStyle",e.containerStyle)("fullScreen",e.fullScreen)}}function zt(t,o){if(t&1&&(c(0,"div",5,2),u(2,$t,1,11,"p-galleriaContent",6),s()),t&2){let e=d(2);F(e.maskClass),r("ngClass",Z(6,At)),f("role",e.fullScreen?"dialog":"region")("aria-modal",e.fullScreen?"true":void 0),l(2),r("ngIf",e.visible)}}function Gt(t,o){if(t&1&&(c(0,"div",null,1),u(2,zt,3,7,"div",4),s()),t&2){let e=d();l(2),r("ngIf",e.maskVisible)}}function Qt(t,o){if(t&1){let e=w();c(0,"p-galleriaContent",8),y("activeItemChange",function(a){p(e);let n=d();return h(n.onActiveItemChange(a))}),s()}if(t&2){let e=d();r("value",e.value)("activeIndex",e.activeIndex)("numVisible",e.numVisibleLimit||e.numVisible)}}var jt=["closeButton"],Wt=(t,o,e)=>({"p-galleria p-component":!0,"p-galleria-fullscreen":t,"p-galleria-inset-indicators":o,"p-galleria-hover-navigators":e}),qt=()=>({});function Kt(t,o){t&1&&b(0,"TimesIcon",11),t&2&&r("styleClass","p-galleria-close-icon")}function Ut(t,o){}function Zt(t,o){t&1&&u(0,Ut,0,0,"ng-template")}function Yt(t,o){if(t&1){let e=w();c(0,"button",8),y("click",function(){p(e);let a=d(2);return h(a.maskHide.emit())}),u(1,Kt,1,1,"TimesIcon",9)(2,Zt,1,0,null,10),s()}if(t&2){let e=d(2);f("aria-label",e.closeAriaLabel())("data-pc-section","closebutton"),l(),r("ngIf",!e.galleria.closeIconTemplate&&!e.galleria._closeIconTemplate),l(),r("ngTemplateOutlet",e.galleria.closeIconTemplate||e.galleria._closeIconTemplate)}}function Xt(t,o){if(t&1&&(c(0,"div",12),b(1,"p-galleriaItemSlot",13),s()),t&2){let e=d(2);l(),r("templates",e.galleria.templates)}}function Jt(t,o){if(t&1){let e=w();c(0,"p-galleriaThumbnails",14),y("onActiveIndexChange",function(a){p(e);let n=d(2);return h(n.onActiveIndexChange(a))})("stopSlideShow",function(){p(e);let a=d(2);return h(a.stopSlideShow())}),s()}if(t&2){let e=d(2);r("containerId",e.id)("value",e.value)("activeIndex",e.activeIndex)("templates",e.galleria.templates)("numVisible",e.numVisible)("responsiveOptions",e.galleria.responsiveOptions)("circular",e.galleria.circular)("isVertical",e.isVertical())("contentHeight",e.galleria.verticalThumbnailViewPortHeight)("showThumbnailNavigators",e.galleria.showThumbnailNavigators)("slideShowActive",e.slideShowActive)}}function ei(t,o){if(t&1&&(c(0,"div",15),b(1,"p-galleriaItemSlot",16),s()),t&2){let e=d(2);l(),r("templates",e.galleria.templates)}}function ti(t,o){if(t&1){let e=w();c(0,"div",1),u(1,Yt,3,4,"button",2)(2,Xt,2,1,"div",3),c(3,"div",4)(4,"p-galleriaItem",5),y("onActiveIndexChange",function(a){p(e);let n=d();return h(n.onActiveIndexChange(a))})("startSlideShow",function(){p(e);let a=d();return h(a.startSlideShow())})("stopSlideShow",function(){p(e);let a=d();return h(a.stopSlideShow())}),s(),u(5,Jt,1,11,"p-galleriaThumbnails",6),s(),u(6,ei,2,1,"div",7),s()}if(t&2){let e=d();F(e.galleriaClass()),r("ngClass",Le(24,Wt,e.galleria.fullScreen,e.galleria.showIndicatorsOnItem,e.galleria.showItemNavigatorsOnHover&&!e.galleria.fullScreen))("ngStyle",e.galleria.fullScreen?Z(28,qt):e.galleria.containerStyle)("pFocusTrapDisabled",!e.fullScreen),f("id",e.id)("role","region"),l(),r("ngIf",e.galleria.fullScreen),l(),r("ngIf",e.galleria.templates&&(e.galleria.headerFacet||e.galleria.headerTemplate)),l(),f("aria-live",e.galleria.autoPlay?"polite":"off"),l(),r("id",e.id)("value",e.value)("activeIndex",e.activeIndex)("circular",e.galleria.circular)("templates",e.galleria.templates)("showIndicators",e.galleria.showIndicators)("changeItemOnIndicatorHover",e.galleria.changeItemOnIndicatorHover)("indicatorFacet",e.galleria.indicatorFacet)("captionFacet",e.galleria.captionFacet)("showItemNavigators",e.galleria.showItemNavigators)("autoPlay",e.galleria.autoPlay)("slideShowActive",e.slideShowActive),l(),r("ngIf",e.galleria.showThumbnails),l(),r("ngIf",e.shouldRenderFooter())}}function ii(t,o){t&1&&Ee(0)}function ai(t,o){if(t&1&&(ae(0),u(1,ii,1,0,"ng-container",1),ne()),t&2){let e=d();l(),r("ngTemplateOutlet",e.contentTemplate)("ngTemplateOutletContext",e.context)}}var ni=t=>({"p-galleria-prev-button p-galleria-nav-button":!0,"p-disabled":t}),ri=t=>({"p-galleria-next-button p-galleria-nav-button":!0,"p-disabled":t}),oi=t=>({"p-galleria-indicator":!0,"p-galleria-indicator-active":t});function li(t,o){t&1&&b(0,"ChevronLeftIcon",9),t&2&&r("styleClass","p-galleria-prev-icon")}function si(t,o){}function ci(t,o){t&1&&u(0,si,0,0,"ng-template")}function di(t,o){if(t&1){let e=w();c(0,"button",6),y("click",function(a){p(e);let n=d();return h(n.navBackward(a))})("focus",function(){p(e);let a=d();return h(a.onButtonFocus("left"))})("blur",function(){p(e);let a=d();return h(a.onButtonBlur("left"))}),u(1,li,1,1,"ChevronLeftIcon",7)(2,ci,1,0,null,8),s()}if(t&2){let e=d();r("ngClass",S(4,ni,e.isNavBackwardDisabled()))("disabled",e.isNavBackwardDisabled()),l(),r("ngIf",!e.galleria.itemPreviousIconTemplate&&!e.galleria._itemPreviousIconTemplate),l(),r("ngTemplateOutlet",e.galleria.itemPreviousIconTemplate||e.galleria._itemPreviousIconTemplate)}}function mi(t,o){t&1&&b(0,"ChevronRightIcon",9),t&2&&r("styleClass","p-galleria-next-icon")}function ui(t,o){}function pi(t,o){t&1&&u(0,ui,0,0,"ng-template")}function hi(t,o){if(t&1){let e=w();c(0,"button",6),y("click",function(a){p(e);let n=d();return h(n.navForward(a))})("focus",function(){p(e);let a=d();return h(a.onButtonFocus("right"))})("blur",function(){p(e);let a=d();return h(a.onButtonBlur("right"))}),u(1,mi,1,1,"ChevronRightIcon",7)(2,pi,1,0,null,8),s()}if(t&2){let e=d();r("ngClass",S(4,ri,e.isNavForwardDisabled()))("disabled",e.isNavForwardDisabled()),l(),r("ngIf",!e.galleria.itemNextIconTemplate&&!e.galleria._itemNextIconTemplate),l(),r("ngTemplateOutlet",e.galleria.itemNextIconTemplate||e.galleria._itemNextIconTemplate)}}function bi(t,o){if(t&1&&(c(0,"div",10),b(1,"p-galleriaItemSlot",11),s()),t&2){let e=d();l(),r("item",e.activeItem)("templates",e.templates)}}function gi(t,o){t&1&&b(0,"button",17)}function fi(t,o){if(t&1){let e=w();c(0,"li",14),y("click",function(){let a=p(e).index,n=d(2);return h(n.onIndicatorClick(a))})("mouseenter",function(){let a=p(e).index,n=d(2);return h(n.onIndicatorMouseEnter(a))})("keydown",function(a){let n=p(e).index,m=d(2);return h(m.onIndicatorKeyDown(a,n))}),u(1,gi,1,0,"button",15),b(2,"p-galleriaItemSlot",16),s()}if(t&2){let e=o.index,i=d(2);r("ngClass",S(7,oi,i.isIndicatorItemActive(e))),f("aria-label",i.ariaPageLabel(e+1))("aria-selected",i.activeIndex===e)("aria-controls",i.id+"_item_"+e),l(),r("ngIf",!i.indicatorFacet&&!i.galleria.indicatorTemplate),l(),r("index",e)("templates",i.templates)}}function _i(t,o){if(t&1&&(c(0,"ul",12),u(1,fi,3,9,"li",13),s()),t&2){let e=d();l(),r("ngForOf",e.value)}}var vi=["itemsContainer"],Ii=t=>({height:t}),yi=t=>({"p-galleria-thumbnail-prev-button p-galleria-thumbnail-nav-button":!0,"p-disabled":t}),Ci=(t,o,e,i)=>({"p-galleria-thumbnail-item":!0,"p-galleria-thumbnail-item-current":t,"p-galleria-thumbnail-item-active":o,"p-galleria-thumbnail-item-start":e,"p-galleria-thumbnail-item-end":i}),xi=t=>({"p-galleria-thumbnail-next-button p-galleria-thumbnail-nav-button":!0,"p-disabled":t});function wi(t,o){t&1&&b(0,"ChevronLeftIcon",11),t&2&&r("styleClass","p-galleria-thumbnail-prev-icon")}function Ti(t,o){t&1&&b(0,"ChevronUpIcon",11),t&2&&r("styleClass","p-galleria-thumbnail-prev-icon")}function ki(t,o){if(t&1&&(ae(0),u(1,wi,1,1,"ChevronLeftIcon",10)(2,Ti,1,1,"ChevronUpIcon",10),ne()),t&2){let e=d(2);l(),r("ngIf",!e.isVertical),l(),r("ngIf",e.isVertical)}}function Mi(t,o){}function Si(t,o){t&1&&u(0,Mi,0,0,"ng-template")}function Pi(t,o){if(t&1){let e=w();c(0,"button",7),y("click",function(a){p(e);let n=d();return h(n.navBackward(a))}),u(1,ki,3,2,"ng-container",8)(2,Si,1,0,null,9),s()}if(t&2){let e=d();r("ngClass",S(5,yi,e.isNavBackwardDisabled()))("disabled",e.isNavBackwardDisabled()),f("aria-label",e.ariaPrevButtonLabel()),l(),r("ngIf",!e.galleria.previousThumbnailIconTemplate&&!e.galleria._previousThumbnailIconTemplate),l(),r("ngTemplateOutlet",e.galleria.previousThumbnailIconTemplate||e.galleria._previousThumbnailIconTemplate)}}function Di(t,o){if(t&1){let e=w();c(0,"div",12),y("keydown",function(a){let n=p(e).index,m=d();return h(m.onThumbnailKeydown(a,n))}),c(1,"div",13),y("click",function(){let a=p(e).index,n=d();return h(n.onItemClick(a))})("touchend",function(){let a=p(e).index,n=d();return h(n.onItemClick(a))})("keydown.enter",function(){let a=p(e).index,n=d();return h(n.onItemClick(a))}),b(2,"p-galleriaItemSlot",14),s()()}if(t&2){let e=o.$implicit,i=o.index,a=d();r("ngClass",Re(10,Ci,a.activeIndex===i,a.isItemActive(i),a.firstItemAciveIndex()===i,a.lastItemActiveIndex()===i)),f("aria-selected",a.activeIndex===i)("aria-controls",a.containerId+"_item_"+i)("data-pc-section","thumbnailitem")("data-p-active",a.activeIndex===i),l(),f("tabindex",a.activeIndex===i?0:-1)("aria-current",a.activeIndex===i?"page":void 0)("aria-label",a.ariaPageLabel(i+1)),l(),r("item",e)("templates",a.templates)}}function Fi(t,o){t&1&&b(0,"ChevronRightIcon",16),t&2&&r("ngClass","p-galleria-thumbnail-next-icon")}function Ei(t,o){t&1&&b(0,"ChevronDownIcon",16),t&2&&r("ngClass","p-galleria-thumbnail-next-icon")}function Vi(t,o){if(t&1&&(ae(0),u(1,Fi,1,1,"ChevronRightIcon",15)(2,Ei,1,1,"ChevronDownIcon",15),ne()),t&2){let e=d(2);l(),r("ngIf",!e.isVertical),l(),r("ngIf",e.isVertical)}}function Oi(t,o){}function Bi(t,o){t&1&&u(0,Oi,0,0,"ng-template")}function Li(t,o){if(t&1){let e=w();c(0,"button",7),y("click",function(a){p(e);let n=d();return h(n.navForward(a))}),u(1,Vi,3,2,"ng-container",8)(2,Bi,1,0,null,9),s()}if(t&2){let e=d();r("ngClass",S(5,xi,e.isNavForwardDisabled()))("disabled",e.isNavForwardDisabled()),f("aria-label",e.ariaNextButtonLabel()),l(),r("ngIf",!e.galleria.nextThumbnailIconTemplate&&!e.galleria._nextThumbnailIconTemplate),l(),r("ngTemplateOutlet",e.galleria.nextThumbnailIconTemplate||e.galleria._nextThumbnailIconTemplate)}}var K=(()=>{class t extends ie{platformId;element;cd;get activeIndex(){return this._activeIndex}set activeIndex(e){this._activeIndex=e}fullScreen=!1;id;value;numVisible=3;responsiveOptions;showItemNavigators=!1;showThumbnailNavigators=!0;showItemNavigatorsOnHover=!1;changeItemOnIndicatorHover=!1;circular=!1;autoPlay=!1;shouldStopAutoplayByClick=!0;transitionInterval=4e3;showThumbnails=!0;thumbnailsPosition="bottom";verticalThumbnailViewPortHeight="300px";showIndicators=!1;showIndicatorsOnItem=!1;indicatorsPosition="bottom";baseZIndex=0;maskClass;containerClass;containerStyle;showTransitionOptions="150ms cubic-bezier(0, 0, 0.2, 1)";hideTransitionOptions="150ms cubic-bezier(0, 0, 0.2, 1)";get visible(){return this._visible}set visible(e){this._visible=e,this._visible&&!this.maskVisible&&(this.maskVisible=!0)}activeIndexChange=new D;visibleChange=new D;mask;container;_visible=!1;_activeIndex=0;headerTemplate;headerFacet;footerTemplate;footerFacet;indicatorTemplate;indicatorFacet;captionTemplate;captionFacet;_closeIconTemplate;closeIconTemplate;_previousThumbnailIconTemplate;previousThumbnailIconTemplate;_nextThumbnailIconTemplate;nextThumbnailIconTemplate;_itemPreviousIconTemplate;itemPreviousIconTemplate;_itemNextIconTemplate;itemNextIconTemplate;_itemTemplate;itemTemplate;_thumbnailTemplate;thumbnailTemplate;maskVisible=!1;numVisibleLimit=0;_componentStyle=H(ht);constructor(e,i,a){super(),this.platformId=e,this.element=i,this.cd=a}templates;ngAfterContentInit(){this.templates?.forEach(e=>{switch(e.getType()){case"header":this.headerFacet=e.template;break;case"footer":this.footerFacet=e.template;break;case"indicator":this.indicatorFacet=e.template;break;case"closeicon":this.closeIconTemplate=e.template;break;case"itemnexticon":this.itemNextIconTemplate=e.template;break;case"itempreviousicon":this.itemPreviousIconTemplate=e.template;break;case"previousthumbnailicon":this.previousThumbnailIconTemplate=e.template;break;case"nextthumbnailicon":this.nextThumbnailIconTemplate=e.template;break;case"caption":this.captionFacet=e.template;break;case"item":this.itemTemplate=e.template;break;case"thumbnail":this.thumbnailTemplate=e.template;break}})}ngOnChanges(e){super.ngOnChanges(e),e.value&&e.value.currentValue?.length<this.numVisible?this.numVisibleLimit=e.value.currentValue.length:this.numVisibleLimit=0}onMaskHide(){this.visible=!1,this.visibleChange.emit(!1)}onActiveItemChange(e){this.activeIndex!==e&&(this.activeIndex=e,this.activeIndexChange.emit(e))}onAnimationStart(e){switch(e.toState){case"visible":this.enableModality(),setTimeout(()=>{te(ce(this.container.nativeElement,'[data-pc-section="closebutton"]'))},25);break;case"void":ve(this.mask?.nativeElement,"p-overlay-mask-leave");break}}onAnimationEnd(e){switch(e.toState){case"void":this.disableModality();break}}enableModality(){je(),this.cd.markForCheck(),this.mask&&xe.set("modal",this.mask.nativeElement,this.baseZIndex||this.config.zIndex.modal)}disableModality(){We(),this.maskVisible=!1,this.cd.markForCheck(),this.mask&&xe.clear(this.mask.nativeElement)}ngOnDestroy(){this.fullScreen&&se(this.document.body,"p-overflow-hidden"),this.mask&&this.disableModality()}static \u0275fac=function(i){return new(i||t)(x(U),x(pe),x(re))};static \u0275cmp=I({type:t,selectors:[["p-galleria"]],contentQueries:function(i,a,n){if(i&1&&(T(n,Tt,4),T(n,kt,4),T(n,Mt,4),T(n,St,4),T(n,Pt,4),T(n,Dt,4),T(n,Ft,4),T(n,Et,4),T(n,Vt,4),T(n,Ot,4),T(n,Bt,4),T(n,de,4)),i&2){let m;_(m=v())&&(a.headerTemplate=m.first),_(m=v())&&(a.footerTemplate=m.first),_(m=v())&&(a.indicatorTemplate=m.first),_(m=v())&&(a.captionTemplate=m.first),_(m=v())&&(a._closeIconTemplate=m.first),_(m=v())&&(a._previousThumbnailIconTemplate=m.first),_(m=v())&&(a._nextThumbnailIconTemplate=m.first),_(m=v())&&(a._itemPreviousIconTemplate=m.first),_(m=v())&&(a._itemNextIconTemplate=m.first),_(m=v())&&(a._itemTemplate=m.first),_(m=v())&&(a._thumbnailTemplate=m.first),_(m=v())&&(a.templates=m)}},viewQuery:function(i,a){if(i&1&&(z(Lt,5),z(Rt,5)),i&2){let n;_(n=v())&&(a.mask=n.first),_(n=v())&&(a.container=n.first)}},inputs:{activeIndex:"activeIndex",fullScreen:[2,"fullScreen","fullScreen",g],id:"id",value:"value",numVisible:[2,"numVisible","numVisible",G],responsiveOptions:"responsiveOptions",showItemNavigators:[2,"showItemNavigators","showItemNavigators",g],showThumbnailNavigators:[2,"showThumbnailNavigators","showThumbnailNavigators",g],showItemNavigatorsOnHover:[2,"showItemNavigatorsOnHover","showItemNavigatorsOnHover",g],changeItemOnIndicatorHover:[2,"changeItemOnIndicatorHover","changeItemOnIndicatorHover",g],circular:[2,"circular","circular",g],autoPlay:[2,"autoPlay","autoPlay",g],shouldStopAutoplayByClick:[2,"shouldStopAutoplayByClick","shouldStopAutoplayByClick",g],transitionInterval:[2,"transitionInterval","transitionInterval",G],showThumbnails:[2,"showThumbnails","showThumbnails",g],thumbnailsPosition:"thumbnailsPosition",verticalThumbnailViewPortHeight:"verticalThumbnailViewPortHeight",showIndicators:[2,"showIndicators","showIndicators",g],showIndicatorsOnItem:[2,"showIndicatorsOnItem","showIndicatorsOnItem",g],indicatorsPosition:"indicatorsPosition",baseZIndex:[2,"baseZIndex","baseZIndex",G],maskClass:"maskClass",containerClass:"containerClass",containerStyle:"containerStyle",showTransitionOptions:"showTransitionOptions",hideTransitionOptions:"hideTransitionOptions",visible:"visible"},outputs:{activeIndexChange:"activeIndexChange",visibleChange:"visibleChange"},standalone:!1,features:[fe([ht]),V,k,N],decls:3,vars:2,consts:[["windowed",""],["container",""],["mask",""],[4,"ngIf","ngIfElse"],[3,"ngClass","class",4,"ngIf"],[3,"ngClass"],[3,"value","activeIndex","numVisible","ngStyle","fullScreen","maskHide","activeItemChange",4,"ngIf"],[3,"maskHide","activeItemChange","value","activeIndex","numVisible","ngStyle","fullScreen"],[3,"activeItemChange","value","activeIndex","numVisible"]],template:function(i,a){if(i&1&&u(0,Gt,3,1,"div",3)(1,Qt,1,3,"ng-template",null,0,Ae),i&2){let n=ge(2);r("ngIf",a.fullScreen)("ngIfElse",n)}},dependencies:()=>[Y,B,le,Ri],encapsulation:2,data:{animation:[et("animation",[ke("void => visible",[Te({transform:"scale(0.7)",opacity:0}),we("{{showTransitionParams}}")]),ke("visible => void",[we("{{hideTransitionParams}}",Te({transform:"scale(0.7)",opacity:0}))])])]},changeDetection:0})}return t})(),Ri=(()=>{class t extends ie{galleria;cd;differs;elementRef;get activeIndex(){return this._activeIndex}set activeIndex(e){this._activeIndex=e}value=[];numVisible;fullScreen;maskHide=new D;activeItemChange=new D;closeButton;id;_activeIndex=0;slideShowActive=!0;interval;styleClass;differ;constructor(e,i,a,n){super(),this.galleria=e,this.cd=i,this.differs=a,this.elementRef=n,this.id=this.galleria.id||W("pn_id_"),this.differ=this.differs.find(this.galleria).create()}handleFullscreenChange(e){document?.fullscreenElement===this.elementRef.nativeElement?.children[0]?this.fullScreen=!0:this.fullScreen=!1}ngDoCheck(){if(E(this.galleria.platformId)){let e=this.differ.diff(this.galleria);e&&e.forEachItem.length>0&&this.cd.markForCheck()}}shouldRenderFooter(){return this.galleria.footerFacet&&this.galleria.templates.toArray().length>0||this.galleria.footerTemplate}galleriaClass(){let e=this.galleria.showThumbnails&&this.getPositionClass("p-galleria-thumbnails",this.galleria.thumbnailsPosition),i=this.galleria.showIndicators&&this.getPositionClass("p-galleria-indicators",this.galleria.indicatorsPosition);return(this.galleria.containerClass?this.galleria.containerClass+" ":"")+(e?e+" ":"")+(i?i+" ":"")}startSlideShow(){E(this.galleria.platformId)&&(this.interval=setInterval(()=>{let e=this.galleria.circular&&this.value.length-1===this.activeIndex?0:this.activeIndex+1;this.onActiveIndexChange(e),this.activeIndex=e},this.galleria.transitionInterval),this.slideShowActive=!0)}stopSlideShow(){this.galleria.autoPlay&&!this.galleria.shouldStopAutoplayByClick||(this.interval&&clearInterval(this.interval),this.slideShowActive=!1)}getPositionClass(e,i){let n=["top","left","bottom","right"].find(m=>m===i);return n?`${e}-${n}`:""}isVertical(){return this.galleria.thumbnailsPosition==="left"||this.galleria.thumbnailsPosition==="right"}onActiveIndexChange(e){this.activeIndex!==e&&(this.activeIndex=e,this.activeItemChange.emit(this.activeIndex))}closeAriaLabel(){return this.config.translation.aria?this.config.translation.aria.close:void 0}static \u0275fac=function(i){return new(i||t)(x(K),x(re),x(He),x(pe))};static \u0275cmp=I({type:t,selectors:[["p-galleriaContent"]],viewQuery:function(i,a){if(i&1&&z(jt,5),i&2){let n;_(n=v())&&(a.closeButton=n.first)}},hostBindings:function(i,a){i&1&&y("fullscreenchange",function(m){return a.handleFullscreenChange(m)},!1,De)},inputs:{activeIndex:"activeIndex",value:"value",numVisible:[2,"numVisible","numVisible",G],fullScreen:[2,"fullScreen","fullScreen",g]},outputs:{maskHide:"maskHide",activeItemChange:"activeItemChange"},standalone:!1,features:[V,k],decls:1,vars:1,consts:[["pFocusTrap","",3,"ngClass","ngStyle","class","pFocusTrapDisabled",4,"ngIf"],["pFocusTrap","",3,"ngClass","ngStyle","pFocusTrapDisabled"],["type","button","class","p-galleria-close-button",3,"click",4,"ngIf"],["class","p-galleria-header",4,"ngIf"],[1,"p-galleria-content"],[3,"onActiveIndexChange","startSlideShow","stopSlideShow","id","value","activeIndex","circular","templates","showIndicators","changeItemOnIndicatorHover","indicatorFacet","captionFacet","showItemNavigators","autoPlay","slideShowActive"],[3,"containerId","value","activeIndex","templates","numVisible","responsiveOptions","circular","isVertical","contentHeight","showThumbnailNavigators","slideShowActive","onActiveIndexChange","stopSlideShow",4,"ngIf"],["class","p-galleria-footer",4,"ngIf"],["type","button",1,"p-galleria-close-button",3,"click"],[3,"styleClass",4,"ngIf"],[4,"ngTemplateOutlet"],[3,"styleClass"],[1,"p-galleria-header"],["type","header",3,"templates"],[3,"onActiveIndexChange","stopSlideShow","containerId","value","activeIndex","templates","numVisible","responsiveOptions","circular","isVertical","contentHeight","showThumbnailNavigators","slideShowActive"],[1,"p-galleria-footer"],["type","footer",3,"templates"]],template:function(i,a){i&1&&u(0,ti,7,29,"div",0),i&2&&r("ngIf",a.value&&a.value.length>0)},dependencies:()=>[Y,B,J,le,Me,mt,Se,Ai,Hi],encapsulation:2,changeDetection:0})}return t})(),Se=(()=>{class t{templates;index;get item(){return this._item}shouldRender(){return this.contentTemplate||this.galleria._itemTemplate||this.galleria.itemTemplate||this.galleria.captionTemplate||this.galleria.captionTemplate||this.galleria.captionFacet||this.galleria.thumbnailTemplate||this.galleria._thumbnailTemplate||this.galleria.footerTemplate}galleria=H(K);set item(e){this._item=e,this.templates&&this.templates?.toArray().length>0?this.templates.forEach(i=>{if(i.getType()===this.type)switch(this.type){case"item":case"caption":case"thumbnail":this.context={$implicit:this.item},this.contentTemplate=i.template;break;case"footer":this.context={$implicit:this.item},this.contentTemplate=i.template;break}}):this.getContentTemplate()}getContentTemplate(){switch(this.type){case"item":this.context={$implicit:this.item},this.contentTemplate=this.galleria._itemTemplate||this.galleria.itemTemplate;break;case"caption":this.context={$implicit:this.item},this.contentTemplate=this.galleria.captionTemplate||this.galleria.captionFacet;break;case"thumbnail":this.context={$implicit:this.item},this.contentTemplate=this.galleria.thumbnailTemplate||this.galleria._thumbnailTemplate;break;case"indicator":this.context={$implicit:this.index},this.contentTemplate=this.galleria.indicatorTemplate||this.galleria.indicatorFacet;break;case"footer":this.context={$implicit:this.item},this.contentTemplate=this.galleria.footerTemplate||this.galleria.footerFacet;break;default:this.context={$implicit:this.item},this.contentTemplate=this.galleria._itemTemplate||this.galleria.itemTemplate}}type;contentTemplate;context;_item;ngAfterContentInit(){this.templates&&this.templates.toArray().length>0?this.templates?.forEach(e=>{if(e.getType()===this.type)switch(this.type){case"item":case"caption":case"thumbnail":this.context={$implicit:this.item},this.contentTemplate=e.template;break;case"indicator":this.context={$implicit:this.index},this.contentTemplate=e.template;break;case"footer":this.context={$implicit:this.item},this.contentTemplate=e.template;break;default:this.context={$implicit:this.item},this.contentTemplate=e.template;break}}):this.getContentTemplate()}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=I({type:t,selectors:[["p-galleriaItemSlot"]],inputs:{templates:"templates",index:[2,"index","index",G],item:"item",type:"type"},standalone:!1,features:[V],decls:1,vars:1,consts:[[4,"ngIf"],[4,"ngTemplateOutlet","ngTemplateOutletContext"]],template:function(i,a){i&1&&u(0,ai,2,2,"ng-container",0),i&2&&r("ngIf",a.shouldRender())},dependencies:[B,J],encapsulation:2,changeDetection:0})}return t})(),Ai=(()=>{class t{galleria;id;circular=!1;value;showItemNavigators=!1;showIndicators=!0;slideShowActive=!0;changeItemOnIndicatorHover=!0;autoPlay=!1;templates;indicatorFacet;captionFacet;startSlideShow=new D;stopSlideShow=new D;onActiveIndexChange=new D;get activeIndex(){return this._activeIndex}set activeIndex(e){this._activeIndex=e}get activeItem(){return this.value&&this.value[this._activeIndex]}_activeIndex=0;leftButtonFocused=!1;rightButtonFocused=!1;constructor(e){this.galleria=e}ngOnChanges({autoPlay:e}){e?.currentValue&&this.startSlideShow.emit(),e&&e.currentValue===!1&&this.stopTheSlideShow()}next(){let e=this.activeIndex+1,i=this.circular&&this.value.length-1===this.activeIndex?0:e;this.onActiveIndexChange.emit(i)}prev(){let e=this.activeIndex!==0?this.activeIndex-1:0,i=this.circular&&this.activeIndex===0?this.value.length-1:e;this.onActiveIndexChange.emit(i)}onButtonFocus(e){e==="left"?this.leftButtonFocused=!0:this.rightButtonFocused=!0}onButtonBlur(e){e==="left"?this.leftButtonFocused=!1:this.rightButtonFocused=!1}stopTheSlideShow(){this.slideShowActive&&this.stopSlideShow&&this.stopSlideShow.emit()}navForward(e){this.stopTheSlideShow(),this.next(),e&&e.cancelable&&e.preventDefault()}navBackward(e){this.stopTheSlideShow(),this.prev(),e&&e.cancelable&&e.preventDefault()}onIndicatorClick(e){this.stopTheSlideShow(),this.onActiveIndexChange.emit(e)}onIndicatorMouseEnter(e){this.changeItemOnIndicatorHover&&(this.stopTheSlideShow(),this.onActiveIndexChange.emit(e))}onIndicatorKeyDown(e,i){switch(e.code){case"Enter":case"Space":this.stopTheSlideShow(),this.onActiveIndexChange.emit(i),e.preventDefault();break;case"ArrowDown":case"ArrowUp":e.preventDefault();break;default:break}}isNavForwardDisabled(){return!this.circular&&this.activeIndex===this.value.length-1}isNavBackwardDisabled(){return!this.circular&&this.activeIndex===0}isIndicatorItemActive(e){return this.activeIndex===e}ariaSlideLabel(){return this.galleria.config.translation.aria?this.galleria.config.translation.aria.slide:void 0}ariaSlideNumber(e){return this.galleria.config.translation.aria?this.galleria.config.translation.aria.slideNumber.replace(/{slideNumber}/g,e):void 0}ariaPageLabel(e){return this.galleria.config.translation.aria?this.galleria.config.translation.aria.pageLabel.replace(/{page}/g,e):void 0}static \u0275fac=function(i){return new(i||t)(x(K))};static \u0275cmp=I({type:t,selectors:[["p-galleriaItem"]],hostAttrs:[1,"p-galleria-items-container"],inputs:{id:"id",circular:[2,"circular","circular",g],value:"value",showItemNavigators:[2,"showItemNavigators","showItemNavigators",g],showIndicators:[2,"showIndicators","showIndicators",g],slideShowActive:[2,"slideShowActive","slideShowActive",g],changeItemOnIndicatorHover:[2,"changeItemOnIndicatorHover","changeItemOnIndicatorHover",g],autoPlay:[2,"autoPlay","autoPlay",g],templates:"templates",indicatorFacet:"indicatorFacet",captionFacet:"captionFacet",activeIndex:"activeIndex"},outputs:{startSlideShow:"startSlideShow",stopSlideShow:"stopSlideShow",onActiveIndexChange:"onActiveIndexChange"},standalone:!1,features:[V,N],decls:7,vars:9,consts:[[1,"p-galleria-items"],["type","button","role","navigation",3,"ngClass","disabled","click","focus","blur",4,"ngIf"],["role","group",1,"p-galleria-item",3,"id"],["type","item",1,"p-galleria-item",3,"item","templates"],["class","p-galleria-caption",4,"ngIf"],["class","p-galleria-indicator-list",4,"ngIf"],["type","button","role","navigation",3,"click","focus","blur","ngClass","disabled"],[3,"styleClass",4,"ngIf"],[4,"ngTemplateOutlet"],[3,"styleClass"],[1,"p-galleria-caption"],["type","caption",3,"item","templates"],[1,"p-galleria-indicator-list"],["tabindex","0",3,"ngClass","click","mouseenter","keydown",4,"ngFor","ngForOf"],["tabindex","0",3,"click","mouseenter","keydown","ngClass"],["type","button","tabIndex","-1","class","p-galleria-indicator-button",4,"ngIf"],["type","indicator",3,"index","templates"],["type","button","tabIndex","-1",1,"p-galleria-indicator-button"]],template:function(i,a){i&1&&(c(0,"div",0),u(1,di,3,6,"button",1),c(2,"div",2),b(3,"p-galleriaItemSlot",3),s(),u(4,hi,3,6,"button",1)(5,bi,2,2,"div",4),s(),u(6,_i,2,1,"ul",5)),i&2&&(l(),r("ngIf",a.showItemNavigators),l(),r("id",a.id+"_item_"+a.activeIndex),f("aria-label",a.ariaSlideNumber(a.activeIndex+1))("aria-roledescription",a.ariaSlideLabel()),l(),r("item",a.activeItem)("templates",a.templates),l(),r("ngIf",a.showItemNavigators),l(),r("ngIf",a.captionFacet||a.galleria.captionTemplate),l(),r("ngIf",a.showIndicators))},dependencies:()=>[Y,X,B,J,ue,me,Se],encapsulation:2,changeDetection:0})}return t})(),Hi=(()=>{class t{galleria;document;platformId;renderer;cd;containerId;value;isVertical=!1;slideShowActive=!1;circular=!1;responsiveOptions;contentHeight="300px";showThumbnailNavigators=!0;templates;onActiveIndexChange=new D;stopSlideShow=new D;itemsContainer;get numVisible(){return this._numVisible}set numVisible(e){this._numVisible=e,this._oldNumVisible=this.d_numVisible,this.d_numVisible=e}get activeIndex(){return this._activeIndex}set activeIndex(e){this._oldactiveIndex=this._activeIndex,this._activeIndex=e}index;startPos=null;thumbnailsStyle=null;sortedResponsiveOptions=null;totalShiftedItems=0;page=0;documentResizeListener;_numVisible=0;d_numVisible=0;_oldNumVisible=0;_activeIndex=0;_oldactiveIndex=0;constructor(e,i,a,n,m){this.galleria=e,this.document=i,this.platformId=a,this.renderer=n,this.cd=m}ngOnInit(){E(this.platformId)&&(this.createStyle(),this.responsiveOptions&&this.bindDocumentListeners())}ngAfterContentChecked(){let e=this.totalShiftedItems;(this._oldNumVisible!==this.d_numVisible||this._oldactiveIndex!==this._activeIndex)&&this.itemsContainer&&(this._activeIndex<=this.getMedianItemIndex()?e=0:this.value.length-this.d_numVisible+this.getMedianItemIndex()<this._activeIndex?e=this.d_numVisible-this.value.length:this.value.length-this.d_numVisible<this._activeIndex&&this.d_numVisible%2===0?e=this._activeIndex*-1+this.getMedianItemIndex()+1:e=this._activeIndex*-1+this.getMedianItemIndex(),e!==this.totalShiftedItems&&(this.totalShiftedItems=e),this.itemsContainer&&this.itemsContainer.nativeElement&&(this.itemsContainer.nativeElement.style.transform=this.isVertical?`translate3d(0, ${e*(100/this.d_numVisible)}%, 0)`:`translate3d(${e*(100/this.d_numVisible)}%, 0, 0)`),this._oldactiveIndex!==this._activeIndex&&(se(this.itemsContainer.nativeElement,"p-items-hidden"),this.itemsContainer.nativeElement.style.transition="transform 500ms ease 0s"),this._oldactiveIndex=this._activeIndex,this._oldNumVisible=this.d_numVisible)}ngAfterViewInit(){E(this.platformId)&&this.calculatePosition()}createStyle(){this.thumbnailsStyle||(this.thumbnailsStyle=this.document.createElement("style"),this.document.body.appendChild(this.thumbnailsStyle));let e=`
            #${this.containerId} .p-galleria-thumbnail-item {
                flex: 1 0 ${100/this.d_numVisible}%
            }
        `;if(this.responsiveOptions){this.sortedResponsiveOptions=[...this.responsiveOptions],this.sortedResponsiveOptions.sort((i,a)=>{let n=i.breakpoint,m=a.breakpoint,P=null;return n==null&&m!=null?P=-1:n!=null&&m==null?P=1:n==null&&m==null?P=0:typeof n=="string"&&typeof m=="string"?P=n.localeCompare(m,void 0,{numeric:!0}):P=n<m?-1:n>m?1:0,-1*P});for(let i=0;i<this.sortedResponsiveOptions.length;i++){let a=this.sortedResponsiveOptions[i];e+=`
                    @media screen and (max-width: ${a.breakpoint}) {
                        #${this.containerId} .p-galleria-thumbnail-item {
                            flex: 1 0 ${100/a.numVisible}%
                        }
                    }
                `}}this.thumbnailsStyle.innerHTML=e,Ye(this.thumbnailsStyle,"nonce",this.galleria.config?.csp()?.nonce)}calculatePosition(){if(E(this.platformId)&&this.itemsContainer&&this.sortedResponsiveOptions){let e=window.innerWidth,i={numVisible:this._numVisible};for(let a=0;a<this.sortedResponsiveOptions.length;a++){let n=this.sortedResponsiveOptions[a];parseInt(n.breakpoint,10)>=e&&(i=n)}this.d_numVisible!==i.numVisible&&(this.d_numVisible=i.numVisible,this.cd.markForCheck())}}getTabIndex(e){return this.isItemActive(e)?0:null}navForward(e){this.stopTheSlideShow();let i=this._activeIndex+1;i+this.totalShiftedItems>this.getMedianItemIndex()&&(-1*this.totalShiftedItems<this.getTotalPageNumber()-1||this.circular)&&this.step(-1);let a=this.circular&&this.value.length-1===this._activeIndex?0:i;this.onActiveIndexChange.emit(a),e.cancelable&&e.preventDefault()}navBackward(e){this.stopTheSlideShow();let i=this._activeIndex!==0?this._activeIndex-1:0,a=i+this.totalShiftedItems;this.d_numVisible-a-1>this.getMedianItemIndex()&&(-1*this.totalShiftedItems!==0||this.circular)&&this.step(1);let n=this.circular&&this._activeIndex===0?this.value.length-1:i;this.onActiveIndexChange.emit(n),e.cancelable&&e.preventDefault()}onItemClick(e){this.stopTheSlideShow();let i=e;if(i!==this._activeIndex){let a=i+this.totalShiftedItems,n=0;i<this._activeIndex?(n=this.d_numVisible-a-1-this.getMedianItemIndex(),n>0&&-1*this.totalShiftedItems!==0&&this.step(n)):(n=this.getMedianItemIndex()-a,n<0&&-1*this.totalShiftedItems<this.getTotalPageNumber()-1&&this.step(n)),this.activeIndex=i,this.onActiveIndexChange.emit(this.activeIndex)}}onThumbnailKeydown(e,i){switch((e.code==="Enter"||e.code==="Space")&&(this.onItemClick(i),e.preventDefault()),e.code){case"ArrowRight":this.onRightKey();break;case"ArrowLeft":this.onLeftKey();break;case"Home":this.onHomeKey(),e.preventDefault();break;case"End":this.onEndKey(),e.preventDefault();break;case"ArrowUp":case"ArrowDown":e.preventDefault();break;case"Tab":this.onTabKey();break;default:break}}onRightKey(){let e=j(this.itemsContainer.nativeElement,'[data-pc-section="thumbnailitem"]'),i=this.findFocusedIndicatorIndex();this.changedFocusedIndicator(i,i+1===e.length?e.length-1:i+1)}onLeftKey(){let e=this.findFocusedIndicatorIndex();this.changedFocusedIndicator(e,e-1<=0?0:e-1)}onHomeKey(){let e=this.findFocusedIndicatorIndex();this.changedFocusedIndicator(e,0)}onEndKey(){let e=j(this.itemsContainer.nativeElement,'[data-pc-section="thumbnailitem"]'),i=this.findFocusedIndicatorIndex();this.changedFocusedIndicator(i,e.length-1)}onTabKey(){let e=[...j(this.itemsContainer.nativeElement,'[data-pc-section="thumbnailitem"]')],i=e.findIndex(m=>Ke(m,"data-p-active")===!0),a=ce(this.itemsContainer.nativeElement,'[tabindex="0"]'),n=e.findIndex(m=>m===a.parentElement);e[n].children[0].tabIndex="-1",e[i].children[0].tabIndex="0"}findFocusedIndicatorIndex(){let e=[...j(this.itemsContainer.nativeElement,'[data-pc-section="thumbnailitem"]')],i=ce(this.itemsContainer.nativeElement,'[data-pc-section="thumbnailitem"] > [tabindex="0"]');return e.findIndex(a=>a===i.parentElement)}changedFocusedIndicator(e,i){let a=j(this.itemsContainer.nativeElement,'[data-pc-section="thumbnailitem"]');a[e].children[0].tabIndex="-1",a[i].children[0].tabIndex="0",a[i].children[0].focus()}step(e){let i=this.totalShiftedItems+e;e<0&&-1*i+this.d_numVisible>this.value.length-1?i=this.d_numVisible-this.value.length:e>0&&i>0&&(i=0),this.circular&&(e<0&&this.value.length-1===this._activeIndex?i=0:e>0&&this._activeIndex===0&&(i=this.d_numVisible-this.value.length)),this.itemsContainer&&(se(this.itemsContainer.nativeElement,"p-items-hidden"),this.itemsContainer.nativeElement.style.transform=this.isVertical?`translate3d(0, ${i*(100/this.d_numVisible)}%, 0)`:`translate3d(${i*(100/this.d_numVisible)}%, 0, 0)`,this.itemsContainer.nativeElement.style.transition="transform 500ms ease 0s"),this.totalShiftedItems=i}stopTheSlideShow(){this.slideShowActive&&this.stopSlideShow&&this.stopSlideShow.emit()}changePageOnTouch(e,i){i<0?this.navForward(e):this.navBackward(e)}getTotalPageNumber(){return this.value.length>this.d_numVisible?this.value.length-this.d_numVisible+1:0}getMedianItemIndex(){let e=Math.floor(this.d_numVisible/2);return this.d_numVisible%2?e:e-1}onTransitionEnd(){this.itemsContainer&&this.itemsContainer.nativeElement&&(ve(this.itemsContainer.nativeElement,"p-items-hidden"),this.itemsContainer.nativeElement.style.transition="")}onTouchEnd(e){let i=e.changedTouches[0];this.isVertical?this.changePageOnTouch(e,i.pageY-this.startPos.y):this.changePageOnTouch(e,i.pageX-this.startPos.x)}onTouchMove(e){e.cancelable&&e.preventDefault()}onTouchStart(e){let i=e.changedTouches[0];this.startPos={x:i.pageX,y:i.pageY}}isNavBackwardDisabled(){return!this.circular&&this._activeIndex===0||this.value.length<=this.d_numVisible}isNavForwardDisabled(){return!this.circular&&this._activeIndex===this.value.length-1||this.value.length<=this.d_numVisible}firstItemAciveIndex(){return this.totalShiftedItems*-1}lastItemActiveIndex(){return this.firstItemAciveIndex()+this.d_numVisible-1}isItemActive(e){return this.firstItemAciveIndex()<=e&&this.lastItemActiveIndex()>=e}bindDocumentListeners(){if(E(this.platformId)){let e=this.document.defaultView||"window";this.documentResizeListener=this.renderer.listen(e,"resize",()=>{this.calculatePosition()})}}unbindDocumentListeners(){this.documentResizeListener&&(this.documentResizeListener(),this.documentResizeListener=null)}ngOnDestroy(){this.responsiveOptions&&this.unbindDocumentListeners(),this.thumbnailsStyle&&this.thumbnailsStyle.parentNode?.removeChild(this.thumbnailsStyle)}ariaPrevButtonLabel(){return this.galleria.config.translation.aria?this.galleria.config.translation.aria.prevPageLabel:void 0}ariaNextButtonLabel(){return this.galleria.config.translation.aria?this.galleria.config.translation.aria.nextPageLabel:void 0}ariaPageLabel(e){return this.galleria.config.translation.aria?this.galleria.config.translation.aria.pageLabel.replace(/{page}/g,e):void 0}static \u0275fac=function(i){return new(i||t)(x(K),x(oe),x(U),x(Fe),x(re))};static \u0275cmp=I({type:t,selectors:[["p-galleriaThumbnails"]],viewQuery:function(i,a){if(i&1&&z(vi,5),i&2){let n;_(n=v())&&(a.itemsContainer=n.first)}},inputs:{containerId:"containerId",value:"value",isVertical:[2,"isVertical","isVertical",g],slideShowActive:[2,"slideShowActive","slideShowActive",g],circular:[2,"circular","circular",g],responsiveOptions:"responsiveOptions",contentHeight:"contentHeight",showThumbnailNavigators:"showThumbnailNavigators",templates:"templates",numVisible:"numVisible",activeIndex:"activeIndex"},outputs:{onActiveIndexChange:"onActiveIndexChange",stopSlideShow:"stopSlideShow"},standalone:!1,features:[V],decls:8,vars:6,consts:[["itemsContainer",""],[1,"p-galleria-thumbnails"],[1,"p-galleria-thumbnails-content"],["type","button","pRipple","",3,"ngClass","disabled","click",4,"ngIf"],[1,"p-galleria-thumbnails-viewport",3,"ngStyle"],["role","tablist",1,"p-galleria-thumbnail-items",3,"transitionend","touchstart","touchmove"],[3,"ngClass","keydown",4,"ngFor","ngForOf"],["type","button","pRipple","",3,"click","ngClass","disabled"],[4,"ngIf"],[4,"ngTemplateOutlet"],[3,"styleClass",4,"ngIf"],[3,"styleClass"],[3,"keydown","ngClass"],[1,"p-galleria-thumbnail",3,"click","touchend","keydown.enter"],["type","thumbnail",3,"item","templates"],[3,"ngClass",4,"ngIf"],[3,"ngClass"]],template:function(i,a){if(i&1){let n=w();c(0,"div",1)(1,"div",2),u(2,Pi,3,7,"button",3),c(3,"div",4)(4,"div",5,0),y("transitionend",function(){return p(n),h(a.onTransitionEnd())})("touchstart",function(P){return p(n),h(a.onTouchStart(P))})("touchmove",function(P){return p(n),h(a.onTouchMove(P))}),u(6,Di,3,15,"div",6),s()(),u(7,Li,3,7,"button",3),s()()}i&2&&(l(2),r("ngIf",a.showThumbnailNavigators),l(),r("ngStyle",S(4,Ii,a.isVertical?a.contentHeight:"")),l(3),r("ngForOf",a.value),l(),r("ngIf",a.showThumbnailNavigators))},dependencies:()=>[Y,X,B,J,le,Je,ue,Ce,ye,me,Se],encapsulation:2,changeDetection:0})}return t})(),bt=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=R({type:t});static \u0275inj=L({imports:[ee,Ie,Me,ue,Ce,ye,me,ut,pt,ee,Ie]})}return t})();var ft=_t(vt());var $i=()=>({"margin-bottom":"20px"}),zi=t=>["/services-detail",t];function Gi(t,o){if(t&1&&b(0,"img",14),t&2){let e=d().$implicit;r("src",e.previewImageSrc,he)("alt",e.alt)("title",e.title)}}function Qi(t,o){if(t&1&&b(0,"video",15),t&2){let e=d().$implicit;r("src",e.previewImageSrc,he)("title",e.title)}}function ji(t,o){if(t&1&&(c(0,"div",11),u(1,Gi,1,3,"img",12)(2,Qi,1,2,"video",13),s()),t&2){let e=o.$implicit;l(),r("ngIf",e.type==="image"||e.type==="gif"),l(),r("ngIf",e.type==="video")}}function Wi(t,o){t&1&&(c(0,"div",16)(1,"h1",17),C(2,"Your Trusted Call Center Solution"),s(),c(3,"p",18),C(4,"Seamless customer support for a connected world."),s(),c(5,"button",19),C(6," Get Started "),s()())}function qi(t,o){if(t&1&&(c(0,"div",20)(1,"mat-card")(2,"mat-card-header")(3,"mat-icon",21),C(4),s(),c(5,"mat-card-title"),C(6),s()(),c(7,"mat-card-content")(8,"p"),C(9),s()()()()),t&2){let e=o.$implicit;r("routerLink",S(4,zi,e.title)),l(4),O(e.icon),l(2),O(e.title),l(3),O(e.description)}}var gt=class t{images=[];showHeroContent=!0;activeIndex=0;constructor(){}ngOnInit(){this.images=[{type:"gif",previewImageSrc:"../../assets/galleria-homescreen-herosection/unifynetwork.gif",alt:"Unify network logo",title:"Unify network logo"},{type:"image",previewImageSrc:"../../assets/galleria-homescreen-herosection/CoFOUNDER2.png",alt:"Co Founder",title:"Co founder Unify Network LLC!"},{type:"image",previewImageSrc:"../../assets/galleria-homescreen-herosection/img1.jpg",alt:"office",title:"Get together"},{type:"image",previewImageSrc:"../../assets/galleria-homescreen-herosection/img2.jpg",alt:"office",title:"workstations"},{type:"image",previewImageSrc:"../../assets/galleria-homescreen-herosection/img3.jpg",alt:"Door",title:"Everyday is a new begining!"}]}ngDoCheck(){this.showHeroContent=!(this.activeIndex===0||this.activeIndex===1)}services=[{id:1,title:"Customer Support",icon:"support_agent",description:"24/7 multi-language support to assist your clients with inquiries and issues.",details:"We provide comprehensive customer support through trained agents equipped to handle diverse customer needs in multiple languages."},{id:2,title:"Sales & Lead Generation",icon:"campaign",description:"Convert potential leads into loyal customers through our dedicated team.",details:"We provide comprehensive customer support through trained agents equipped to handle diverse customer needs in multiple languages."},{id:3,title:"Technical Support",icon:"build",description:"Professional technical assistance for your products, ensuring seamless user experiences.",details:"We provide comprehensive customer support through trained agents equipped to handle diverse customer needs in multiple languages."},{id:4,title:"Software Development",icon:"code",description:"Custom software solutions tailored to optimize your business processes.",details:"We provide comprehensive customer support through trained agents equipped to handle diverse customer needs in multiple languages."},{id:5,title:"Inbound Call Handling",icon:"call",description:"Efficient handling of inbound calls to ensure your customers get prompt responses.",details:"We provide comprehensive customer support through trained agents equipped to handle diverse customer needs in multiple languages."},{id:6,title:"Outbound Campaigns",icon:"ring_volume",description:"Boost your sales and reach with professional outbound call campaigns.",details:"We provide comprehensive customer support through trained agents equipped to handle diverse customer needs in multiple languages."},{id:7,title:"Order Processing",icon:"shopping_cart",description:"Streamlined order processing and tracking to enhance customer satisfaction.",details:"We provide comprehensive customer support through trained agents equipped to handle diverse customer needs in multiple languages."},{id:8,title:"Survey Management",icon:"poll",description:"Collect and analyze customer feedback to improve your services and products.",details:"We provide comprehensive customer support through trained agents equipped to handle diverse customer needs in multiple languages."},{id:9,title:"Live Chat Support",icon:"chat",description:"Real-time chat support to address customer concerns promptly and effectively.",details:"We provide comprehensive customer support through trained agents equipped to handle diverse customer needs in multiple languages."},{id:10,title:"Help Desk Services",icon:"help_outline",description:"Comprehensive help desk solutions to address technical and non-technical queries.",details:"We provide comprehensive customer support through trained agents equipped to handle diverse customer needs in multiple languages."},{id:11,title:"Appointment Scheduling",icon:"event",description:"Efficient scheduling services to manage appointments and bookings seamlessly.",details:"We provide comprehensive customer support through trained agents equipped to handle diverse customer needs in multiple languages."}];statistics={callsHandled:"5,320,000+",clientsServed:"10,000+",teams:"150+"};ngAfterViewInit(){typeof window<"u"&&ft.default.init({duration:1e3,once:!0})}static \u0275fac=function(e){return new(e||t)};static \u0275cmp=I({type:t,selectors:[["app-home"]],decls:29,vars:16,consts:[["data-aos","fade-in",1,"hero"],[1,"hero-overlay"],[3,"activeIndexChange","value","activeIndex","showItemNavigators","showThumbnails","showIndicators","showItemNavigatorsOnHover","circular","containerStyle","autoPlay","transitionInterval"],["pTemplate","item"],["class","hero-content",4,"ngIf"],["data-aos","fade-up",1,"services"],[1,"service-cards"],["class","service-card",3,"routerLink",4,"ngFor","ngForOf"],[1,"statistics-container"],["data-aos","fade-right",1,"statistics"],[1,"stat-card"],[1,"galleria-item-container"],["class","galleria-image","object-fit","cover","object-position","center center",3,"src","alt","title",4,"ngIf"],["class","galleria-video","object-fit","cover","object-position","center center","autoplay","",3,"src","title",4,"ngIf"],["object-fit","cover","object-position","center center",1,"galleria-image",3,"src","alt","title"],["object-fit","cover","object-position","center center","autoplay","",1,"galleria-video",3,"src","title"],[1,"hero-content"],[1,"hero-title"],[1,"hero-subtitle"],["mat-raised-button","","color","accent",1,"cta-button"],[1,"service-card",3,"routerLink"],[1,"service-icon"]],template:function(e,i){e&1&&(c(0,"header",0)(1,"div",1)(2,"p-galleria",2),Be("activeIndexChange",function(n){return Oe(i.activeIndex,n)||(i.activeIndex=n),n}),u(3,ji,3,2,"ng-template",3),s(),u(4,Wi,7,0,"div",4),s()(),c(5,"section",5)(6,"h1"),C(7,"Our Services"),s(),c(8,"div",6),u(9,qi,10,6,"div",7),s()(),c(10,"section",8)(11,"h1"),C(12,"Our Accomplishments"),s(),c(13,"div",9)(14,"div",10)(15,"h3"),C(16),s(),c(17,"p"),C(18,"Calls Handled"),s()(),c(19,"div",10)(20,"h3"),C(21),s(),c(22,"p"),C(23,"Clients Served"),s()(),c(24,"div",10)(25,"h3"),C(26),s(),c(27,"p"),C(28,"Expert Teams"),s()()()()),e&2&&(l(2),r("value",i.images),Ve("activeIndex",i.activeIndex),r("showItemNavigators",!0)("showThumbnails",!1)("showIndicators",!0)("showItemNavigatorsOnHover",!0)("circular",!0)("containerStyle",Z(15,$i))("autoPlay",!0)("transitionInterval",5e3),l(2),r("ngIf",i.showHeroContent),l(5),r("ngForOf",i.services),l(7),O(i.statistics.callsHandled),l(5),O(i.statistics.clientsServed),l(5),O(i.statistics.teams))},dependencies:[ee,X,B,bt,K,de,rt,tt,at,nt,it,dt,ze,$e,ot,Qe,Ge,ct,lt,st,Ne],styles:["body[_ngcontent-%COMP%]{margin:0;font-family:Roboto,sans-serif;background-color:#0a2533;color:#fff}h1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%]{color:#f1c40f;font-weight:700;margin-bottom:20px;text-transform:uppercase}button[_ngcontent-%COMP%], .cta-button[_ngcontent-%COMP%], .contact-button[_ngcontent-%COMP%]{background-color:#ff5733;color:#fff;padding:12px 24px;font-size:1rem;border-radius:8px;text-transform:uppercase;transition:background-color .3s ease,box-shadow .3s ease}button[_ngcontent-%COMP%]:hover, .cta-button[_ngcontent-%COMP%]:hover, .contact-button[_ngcontent-%COMP%]:hover{background-color:#f1c40f;box-shadow:0 4px 12px #f1c40f66}.hero[_ngcontent-%COMP%]{position:relative;height:80vh;display:flex;justify-content:center;align-items:center;text-align:center;background-size:cover;background-position:center;background-color:#fff;background-attachment:fixed;color:#fff;overflow:hidden}.hero-overlay[_ngcontent-%COMP%]{position:absolute;inset:0;background:#0009;display:flex;background-color:#fff;flex-direction:column;justify-content:center;align-items:center}.hero-content[_ngcontent-%COMP%]{position:absolute;z-index:2;text-align:center;animation:_ngcontent-%COMP%_fadeIn 1s ease-in-out}.hero-title[_ngcontent-%COMP%]{font-size:2.5rem;margin-bottom:20px;color:#f1c40f}.hero-subtitle[_ngcontent-%COMP%]{font-size:1.5rem;margin-bottom:30px;color:#bdc3c7}.galleria-item-container[_ngcontent-%COMP%]{position:relative;display:flex;justify-content:center;align-items:center;width:100%}.galleria-image[_ngcontent-%COMP%], .galleria-video[_ngcontent-%COMP%]{width:100%;height:auto;object-fit:fill;object-position:center center}.galleria-video[_ngcontent-%COMP%]{background:#000}@keyframes _ngcontent-%COMP%_fadeIn{0%{opacity:0}to{opacity:1}}@media (max-width: 576px){.hero[_ngcontent-%COMP%]{height:60vh}.hero-title[_ngcontent-%COMP%]{font-size:2.5rem}.hero-subtitle[_ngcontent-%COMP%]{font-size:1.2rem}.cta-button[_ngcontent-%COMP%]{font-size:.9rem;padding:10px 20px}.galleria-image[_ngcontent-%COMP%], .galleria-video[_ngcontent-%COMP%]{object-fit:cover}}@media (max-width: 992px){.hero[_ngcontent-%COMP%]{height:70vh}.hero-title[_ngcontent-%COMP%]{font-size:2.5rem}.hero-subtitle[_ngcontent-%COMP%]{font-size:1.4rem}.cta-button[_ngcontent-%COMP%]{font-size:1rem;padding:12px 22px}.galleria-image[_ngcontent-%COMP%], .galleria-video[_ngcontent-%COMP%]{object-fit:contain}}@media (min-width: 1200px){.hero[_ngcontent-%COMP%]{height:80vh}.hero-title[_ngcontent-%COMP%]{font-size:3.5rem}.hero-subtitle[_ngcontent-%COMP%]{font-size:1.8rem}.cta-button[_ngcontent-%COMP%]{font-size:1.1rem;padding:14px 30px}.galleria-image[_ngcontent-%COMP%], .galleria-video[_ngcontent-%COMP%]{object-fit:cover}}.services[_ngcontent-%COMP%]{padding:50px 20px;background-color:transparent;text-align:center}.services[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{color:var(--primary-color, #007ad9);font-size:2.5rem;margin-bottom:30px}.service-cards[_ngcontent-%COMP%]{display:flex;justify-content:center;gap:20px;flex-wrap:wrap}.service-card[_ngcontent-%COMP%]{width:100%;max-width:350px}.service-card[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%]{background-color:transparent;border-radius:12px;padding:20px;height:auto;box-shadow:0 4px 12px #00000080;transition:transform .3s ease,box-shadow .3s ease}.service-card[_ngcontent-%COMP%]   mat-card-title[_ngcontent-%COMP%]{color:#f1c40f;font-size:1.3rem;text-align:left}.service-card[_ngcontent-%COMP%]   mat-card-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:.9rem;color:#bdc3c7;text-align:center}.service-card[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%]:hover{transform:translateY(-10px);box-shadow:0 8px 20px #f39c1266}.service-icon[_ngcontent-%COMP%]{font-size:28px;color:#f1c40f}@media (max-width: 1024px){.services[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-size:2.2rem}.service-card[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%]{height:auto;padding:15px}}@media (max-width: 768px){.services[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-size:2rem}.service-card[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%]{padding:10px}.service-icon[_ngcontent-%COMP%]{font-size:24px}}@media (max-width: 480px){.services[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-size:1.8rem}.service-card[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%]{padding:8px}.service-icon[_ngcontent-%COMP%]{font-size:20px}}.statistics-container[_ngcontent-%COMP%]{padding:2rem;justify-content:center}.statistics-container[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{color:var(--primary-color, #007ad9);font-size:2.5rem;text-align:center;margin-bottom:2rem}.statistics[_ngcontent-%COMP%]{display:flex;justify-content:center;flex-wrap:wrap;gap:1.5rem;padding:1rem;background-color:transparent}.stat-card[_ngcontent-%COMP%]{text-align:center;background-color:transparent;padding:1.5rem;border-radius:12px;width:200px;box-shadow:0 4px 12px #00000080;transition:transform .3s ease,box-shadow .3s ease}.stat-card[_ngcontent-%COMP%]:hover{transform:scale(1.05);box-shadow:0 6px 16px #0006}.stat-card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-size:2rem;color:#f1c40f}.stat-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:1.2rem;color:#bdc3c7}@media (max-width: 992px){.statistics-container[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-size:2rem}.stat-card[_ngcontent-%COMP%]{width:180px;padding:1.2rem}}@media (max-width: 768px){.statistics-container[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-size:1.8rem}.stat-card[_ngcontent-%COMP%]{width:100%;max-width:300px}.statistics[_ngcontent-%COMP%]{justify-content:space-between;padding:0 1rem}}@media (max-width: 576px){.statistics-container[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-size:1.5rem;margin-bottom:1.5rem}.stat-card[_ngcontent-%COMP%]{padding:1rem;font-size:.9rem}.stat-card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-size:1.5rem}.stat-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:1rem}}"]})};export{gt as HomeComponent};
