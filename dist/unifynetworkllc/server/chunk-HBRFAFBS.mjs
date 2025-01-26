import './polyfills.server.mjs';
import{c as B,p as Qt,r as Xt,s as te}from"./chunk-IVZJNBM2.mjs";import{Aa as yt,Bc as Zt,Gc as Jt,Hc as et,Sb as X,Tb as tt,X as _,Y as At,_ as Wt,_a as Gt,ab as Kt,ba as g,cb as Yt,f as $t,fb as F,hc as U,ia as Ut,kb as Q,lb as Lt,ma as w,mb as W,nb as St,oa as Bt,ob as zt,sa as Vt,tc as qt,va as jt}from"./chunk-3P35OHLZ.mjs";import{a as y}from"./chunk-S6KH3LOX.mjs";function Be(t,i){return t?t.classList?t.classList.contains(i):new RegExp("(^| )"+i+"( |$)","gi").test(t.className):!1}function Rt(t,i){if(t&&i){let e=n=>{Be(t,n)||(t.classList?t.classList.add(n):t.className+=" "+n)};[i].flat().filter(Boolean).forEach(n=>n.split(" ").forEach(e))}}function Ve(){return window.innerWidth-document.documentElement.offsetWidth}function ee(t){for(let i of document?.styleSheets)try{for(let e of i?.cssRules)for(let n of e?.style)if(t.test(n))return{name:n,value:e.style.getPropertyValue(n).trim()}}catch{}return null}function hi(t="p-overflow-hidden"){let i=ee(/-scrollbar-width$/);i?.name&&document.body.style.setProperty(i.name,Ve()+"px"),Rt(document.body,t)}function V(t,i){if(t&&i){let e=n=>{t.classList?t.classList.remove(n):t.className=t.className.replace(new RegExp("(^|\\b)"+n.split(" ").join("|")+"(\\b|$)","gi")," ")};[i].flat().filter(Boolean).forEach(n=>n.split(" ").forEach(e))}}function mi(t="p-overflow-hidden"){let i=ee(/-scrollbar-width$/);i?.name&&document.body.style.removeProperty(i.name),V(document.body,t)}function gi(){let t=window,i=document,e=i.documentElement,n=i.getElementsByTagName("body")[0],s=t.innerWidth||e.clientWidth||n.clientWidth,o=t.innerHeight||e.clientHeight||n.clientHeight;return{width:s,height:o}}function yi(){let t=document.documentElement;return(window.pageXOffset||t.scrollLeft)-(t.clientLeft||0)}function Si(){let t=document.documentElement;return(window.pageYOffset||t.scrollTop)-(t.clientTop||0)}function ie(t,i){if(t instanceof HTMLElement){let e=t.offsetWidth;if(i){let n=getComputedStyle(t);e+=parseFloat(n.marginLeft)+parseFloat(n.marginRight)}return e}return 0}function j(t){return typeof HTMLElement=="object"?t instanceof HTMLElement:t&&typeof t=="object"&&t!==null&&t.nodeType===1&&typeof t.nodeName=="string"}function ne(t){let i=t;return t&&typeof t=="object"&&(t.hasOwnProperty("current")?i=t.current:t.hasOwnProperty("el")&&(t.el.hasOwnProperty("nativeElement")?i=t.el.nativeElement:i=t.el)),j(i)?i:void 0}function Ei(t,i){let e=ne(t);if(e)e.appendChild(i);else throw new Error("Cannot append "+i+" to "+t)}function Et(t,i={}){if(j(t)){let e=(n,s)=>{var o,r;let a=(o=t?.$attrs)!=null&&o[n]?[(r=t?.$attrs)==null?void 0:r[n]]:[];return[s].flat().reduce((l,c)=>{if(c!=null){let p=typeof c;if(p==="string"||p==="number")l.push(c);else if(p==="object"){let f=Array.isArray(c)?e(n,c):Object.entries(c).map(([u,d])=>n==="style"&&(d||d===0)?`${u.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase()}:${d}`:d?u:void 0);l=f.length?l.concat(f.filter(u=>!!u)):l}}return l},a)};Object.entries(i).forEach(([n,s])=>{if(s!=null){let o=n.match(/^on(.+)/);o?t.addEventListener(o[1].toLowerCase(),s):n==="p-bind"||n==="pBind"?Et(t,s):(s=n==="class"?[...new Set(e("class",s))].join(" ").trim():n==="style"?e("style",s).join(";").trim():s,(t.$attrs=t.$attrs||{})&&(t.$attrs[n]=s),t.setAttribute(n,s))}})}}function bi(t,i={},...e){if(t){let n=document.createElement(t);return Et(n,i),n.append(...e),n}}function _i(t,i){if(t){t.style.opacity="0";let e=+new Date,n="0",s=function(){n=`${+t.style.opacity+(new Date().getTime()-e)/i}`,t.style.opacity=n,e=+new Date,+n<1&&(window.requestAnimationFrame&&requestAnimationFrame(s)||setTimeout(s,16))};s()}}function je(t,i){return j(t)?Array.from(t.querySelectorAll(i)):[]}function vi(t,i){return j(t)?t.matches(i)?t:t.querySelector(i):null}function Ti(t,i){t&&document.activeElement!==t&&t.focus(i)}function Oi(t,i){if(j(t)){let e=t.getAttribute(i);return isNaN(e)?e==="true"||e==="false"?e==="true":e:+e}}function se(t,i=""){let e=je(t,`button:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${i},
            [href][clientHeight][clientWidth]:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${i},
            input:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${i},
            select:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${i},
            textarea:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${i},
            [tabIndex]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${i},
            [contenteditable]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${i}`),n=[];for(let s of e)getComputedStyle(s).display!="none"&&getComputedStyle(s).visibility!="hidden"&&n.push(s);return n}function Ci(t,i){let e=se(t,i);return e.length>0?e[0]:null}function wt(t){if(t){let i=t.offsetHeight,e=getComputedStyle(t);return i-=parseFloat(e.paddingTop)+parseFloat(e.paddingBottom)+parseFloat(e.borderTopWidth)+parseFloat(e.borderBottomWidth),i}return 0}function Ai(t,i){let e=se(t,i);return e.length>0?e[e.length-1]:null}function re(t){if(t){let i=t.getBoundingClientRect();return{top:i.top+(window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0),left:i.left+(window.pageXOffset||document.documentElement.scrollLeft||document.body.scrollLeft||0)}}return{top:"auto",left:"auto"}}function oe(t,i){if(t){let e=t.offsetHeight;if(i){let n=getComputedStyle(t);e+=parseFloat(n.marginTop)+parseFloat(n.marginBottom)}return e}return 0}function It(t){if(t){let i=t.offsetWidth,e=getComputedStyle(t);return i-=parseFloat(e.paddingLeft)+parseFloat(e.paddingRight)+parseFloat(e.borderLeftWidth)+parseFloat(e.borderRightWidth),i}return 0}function Li(){return"ontouchstart"in window||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0}function ae(t){var i;t&&("remove"in Element.prototype?t.remove():(i=t.parentNode)==null||i.removeChild(t))}function Ri(t,i){let e=ne(t);if(e)e.removeChild(i);else throw new Error("Cannot remove "+i+" from "+t)}function le(t,i="",e){j(t)&&e!==null&&e!==void 0&&t.setAttribute(i,e)}function ce(){let t=new Map;return{on(i,e){let n=t.get(i);return n?n.push(e):n=[e],t.set(i,n),this},off(i,e){let n=t.get(i);return n&&n.splice(n.indexOf(e)>>>0,1),this},emit(i,e){let n=t.get(i);n&&n.slice().map(s=>{s(e)})},clear(){t.clear()}}}function H(t){return t==null||t===""||Array.isArray(t)&&t.length===0||!(t instanceof Date)&&typeof t=="object"&&Object.keys(t).length===0}function Ge(t){return!!(t&&t.constructor&&t.call&&t.apply)}function m(t){return!H(t)}function Di(t,i){let e=-1;if(m(t))try{e=t.findLastIndex(i)}catch{e=t.lastIndexOf([...t].reverse().find(i))}return e}function I(t,i=!0){return t instanceof Object&&t.constructor===Object&&(i||Object.keys(t).length!==0)}function T(t,...i){return Ge(t)?t(...i):t}function M(t,i=!0){return typeof t=="string"&&(i||t!=="")}function pe(t){return M(t)?t.replace(/(-|_)/g,"").toLowerCase():t}function bt(t,i="",e={}){let n=pe(i).split("."),s=n.shift();return s?I(t)?bt(T(t[Object.keys(t).find(o=>pe(o)===s)||""],e),n.join("."),e):void 0:T(t,e)}function _t(t,i=!0){return Array.isArray(t)&&(i||t.length!==0)}function de(t){return m(t)&&!isNaN(t)}function xi(t=""){return m(t)&&t.length===1&&!!t.match(/\S| /)}function v(t,i){if(i){let e=i.test(t);return i.lastIndex=0,e}return!1}function $(t){return t&&t.replace(/\/\*(?:(?!\*\/)[\s\S])*\*\/|[\r\n\t]+/g,"").replace(/ {2,}/g," ").replace(/ ([{:}]) /g,"$1").replace(/([;,]) /g,"$1").replace(/ !/g,"!").replace(/: /g,":")}function vt(t){return M(t)?t.replace(/(_)/g,"-").replace(/[A-Z]/g,(i,e)=>e===0?i:"-"+i.toLowerCase()).toLowerCase():t}function Nt(t){return M(t)?t.replace(/[A-Z]/g,(i,e)=>e===0?i:"."+i.toLowerCase()).toLowerCase():t}var Tt={};function ue(t="pui_id_"){return Tt.hasOwnProperty(t)||(Tt[t]=0),Tt[t]++,`${t}${Tt[t]}`}function Ke(){let t=[],i=(r,a,l=999)=>{let c=s(r,a,l),p=c.value+(c.key===r?0:l)+1;return t.push({key:r,value:p}),p},e=r=>{t=t.filter(a=>a.value!==r)},n=(r,a)=>s(r,a).value,s=(r,a,l=0)=>[...t].reverse().find(c=>a?!0:c.key===r)||{key:r,value:l},o=r=>r&&parseInt(r.style.zIndex,10)||0;return{get:o,set:(r,a,l)=>{a&&(a.style.zIndex=String(i(r,!0,l)))},clear:r=>{r&&(e(o(r)),r.style.zIndex="")},getCurrent:r=>n(r,!0)}}var ki=Ke();var E=(()=>{class t{static STARTS_WITH="startsWith";static CONTAINS="contains";static NOT_CONTAINS="notContains";static ENDS_WITH="endsWith";static EQUALS="equals";static NOT_EQUALS="notEquals";static IN="in";static LESS_THAN="lt";static LESS_THAN_OR_EQUAL_TO="lte";static GREATER_THAN="gt";static GREATER_THAN_OR_EQUAL_TO="gte";static BETWEEN="between";static IS="is";static IS_NOT="isNot";static BEFORE="before";static AFTER="after";static DATE_IS="dateIs";static DATE_IS_NOT="dateIsNot";static DATE_BEFORE="dateBefore";static DATE_AFTER="dateAfter"}return t})();var fe=["*"],Ji=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275cmp=Q({type:t,selectors:[["p-header"]],standalone:!1,ngContentSelectors:fe,decls:1,vars:0,template:function(n,s){n&1&&(X(),tt(0))},encapsulation:2})}return t})(),Qi=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275cmp=Q({type:t,selectors:[["p-footer"]],standalone:!1,ngContentSelectors:fe,decls:1,vars:0,template:function(n,s){n&1&&(X(),tt(0))},encapsulation:2})}return t})(),Xi=(()=>{class t{template;type;name;constructor(e){this.template=e}getType(){return this.name}static \u0275fac=function(n){return new(n||t)(Gt(Kt))};static \u0275dir=W({type:t,selectors:[["","pTemplate",""]],inputs:{type:"type",name:[0,"pTemplate","name"]}})}return t})(),tn=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=Lt({type:t});static \u0275inj=At({imports:[Qt]})}return t})();var ze=Object.defineProperty,qe=Object.defineProperties,Ze=Object.getOwnPropertyDescriptors,Ot=Object.getOwnPropertySymbols,ge=Object.prototype.hasOwnProperty,ye=Object.prototype.propertyIsEnumerable,he=(t,i,e)=>i in t?ze(t,i,{enumerable:!0,configurable:!0,writable:!0,value:e}):t[i]=e,L=(t,i)=>{for(var e in i||(i={}))ge.call(i,e)&&he(t,e,i[e]);if(Ot)for(var e of Ot(i))ye.call(i,e)&&he(t,e,i[e]);return t},Dt=(t,i)=>qe(t,Ze(i)),N=(t,i)=>{var e={};for(var n in t)ge.call(t,n)&&i.indexOf(n)<0&&(e[n]=t[n]);if(t!=null&&Ot)for(var n of Ot(t))i.indexOf(n)<0&&ye.call(t,n)&&(e[n]=t[n]);return e};var Je=ce(),O=Je;function me(t,i){_t(t)?t.push(...i||[]):I(t)&&Object.assign(t,i)}function Qe(t){return I(t)&&t.hasOwnProperty("value")&&t.hasOwnProperty("type")?t.value:t}function Xe(t){return t.replaceAll(/ /g,"").replace(/[^\w]/g,"-")}function xt(t="",i=""){return Xe(`${M(t,!1)&&M(i,!1)?`${t}-`:t}${i}`)}function Se(t="",i=""){return`--${xt(t,i)}`}function ti(t=""){let i=(t.match(/{/g)||[]).length,e=(t.match(/}/g)||[]).length;return(i+e)%2!==0}function Ee(t,i="",e="",n=[],s){if(M(t)){let o=/{([^}]*)}/g,r=t.trim();if(ti(r))return;if(v(r,o)){let a=r.replaceAll(o,p=>{let u=p.replace(/{|}/g,"").split(".").filter(d=>!n.some(S=>v(d,S)));return`var(${Se(e,vt(u.join("-")))}${m(s)?`, ${s}`:""})`}),l=/(\d+\s+[\+\-\*\/]\s+\d+)/g,c=/var\([^)]+\)/g;return v(a.replace(c,"0"),l)?`calc(${a})`:a}return r}else if(de(t))return t}function ei(t,i,e){M(i,!1)&&t.push(`${i}:${e};`)}function K(t,i){return t?`${t}{${i}}`:""}var Y=(...t)=>ii(h.getTheme(),...t),ii=(t={},i,e,n)=>{if(i){let{variable:s,options:o}=h.defaults||{},{prefix:r,transform:a}=t?.options||o||{},c=v(i,/{([^}]*)}/g)?i:`{${i}}`;return n==="value"||H(n)&&a==="strict"?h.getTokenValue(i):Ee(c,void 0,r,[s.excludedKeyRegex],e)}return""};function ni(t,i={}){let e=h.defaults.variable,{prefix:n=e.prefix,selector:s=e.selector,excludedKeyRegex:o=e.excludedKeyRegex}=i,r=(c,p="")=>Object.entries(c).reduce((f,[u,d])=>{let S=v(u,o)?xt(p):xt(p,vt(u)),b=Qe(d);if(I(b)){let{variables:D,tokens:x}=r(b,S);me(f.tokens,x),me(f.variables,D)}else f.tokens.push((n?S.replace(`${n}-`,""):S).replaceAll("-",".")),ei(f.variables,Se(S),Ee(b,S,n,[o]));return f},{variables:[],tokens:[]}),{variables:a,tokens:l}=r(t,n);return{value:a,tokens:l,declarations:a.join(""),css:K(s,a.join(""))}}var A={regex:{rules:{class:{pattern:/^\.([a-zA-Z][\w-]*)$/,resolve(t){return{type:"class",selector:t,matched:this.pattern.test(t.trim())}}},attr:{pattern:/^\[(.*)\]$/,resolve(t){return{type:"attr",selector:`:root${t}`,matched:this.pattern.test(t.trim())}}},media:{pattern:/^@media (.*)$/,resolve(t){return{type:"media",selector:`${t}{:root{[CSS]}}`,matched:this.pattern.test(t.trim())}}},system:{pattern:/^system$/,resolve(t){return{type:"system",selector:"@media (prefers-color-scheme: dark){:root{[CSS]}}",matched:this.pattern.test(t.trim())}}},custom:{resolve(t){return{type:"custom",selector:t,matched:!0}}}},resolve(t){let i=Object.keys(this.rules).filter(e=>e!=="custom").map(e=>this.rules[e]);return[t].flat().map(e=>{var n;return(n=i.map(s=>s.resolve(e)).find(s=>s.matched))!=null?n:this.rules.custom.resolve(e)})}},_toVariables(t,i){return ni(t,{prefix:i?.prefix})},getCommon({name:t="",theme:i={},params:e,set:n,defaults:s}){var o,r,a,l,c,p,f;let{preset:u,options:d}=i,S,b,D,x,P,k,C;if(m(u)&&d.transform!=="strict"){let{primitive:it,semantic:nt,extend:st}=u,q=nt||{},{colorScheme:rt}=q,ot=N(q,["colorScheme"]),at=st||{},{colorScheme:lt}=at,Z=N(at,["colorScheme"]),J=rt||{},{dark:ct}=J,pt=N(J,["dark"]),dt=lt||{},{dark:ut}=dt,ft=N(dt,["dark"]),ht=m(it)?this._toVariables({primitive:it},d):{},mt=m(ot)?this._toVariables({semantic:ot},d):{},gt=m(pt)?this._toVariables({light:pt},d):{},Mt=m(ct)?this._toVariables({dark:ct},d):{},kt=m(Z)?this._toVariables({semantic:Z},d):{},Ft=m(ft)?this._toVariables({light:ft},d):{},Ht=m(ut)?this._toVariables({dark:ut},d):{},[Oe,Ce]=[(o=ht.declarations)!=null?o:"",ht.tokens],[Ae,Le]=[(r=mt.declarations)!=null?r:"",mt.tokens||[]],[Re,we]=[(a=gt.declarations)!=null?a:"",gt.tokens||[]],[Ie,Ne]=[(l=Mt.declarations)!=null?l:"",Mt.tokens||[]],[De,xe]=[(c=kt.declarations)!=null?c:"",kt.tokens||[]],[Pe,Me]=[(p=Ft.declarations)!=null?p:"",Ft.tokens||[]],[ke,Fe]=[(f=Ht.declarations)!=null?f:"",Ht.tokens||[]];S=this.transformCSS(t,Oe,"light","variable",d,n,s),b=Ce;let He=this.transformCSS(t,`${Ae}${Re}`,"light","variable",d,n,s),$e=this.transformCSS(t,`${Ie}`,"dark","variable",d,n,s);D=`${He}${$e}`,x=[...new Set([...Le,...we,...Ne])];let We=this.transformCSS(t,`${De}${Pe}color-scheme:light`,"light","variable",d,n,s),Ue=this.transformCSS(t,`${ke}color-scheme:dark`,"dark","variable",d,n,s);P=`${We}${Ue}`,k=[...new Set([...xe,...Me,...Fe])],C=T(u.css,{dt:Y})}return{primitive:{css:S,tokens:b},semantic:{css:D,tokens:x},global:{css:P,tokens:k},style:C}},getPreset({name:t="",preset:i={},options:e,params:n,set:s,defaults:o,selector:r}){var a,l,c;let p,f,u;if(m(i)&&e.transform!=="strict"){let d=t.replace("-directive",""),S=i,{colorScheme:b,extend:D,css:x}=S,P=N(S,["colorScheme","extend","css"]),k=D||{},{colorScheme:C}=k,it=N(k,["colorScheme"]),nt=b||{},{dark:st}=nt,q=N(nt,["dark"]),rt=C||{},{dark:ot}=rt,at=N(rt,["dark"]),lt=m(P)?this._toVariables({[d]:L(L({},P),it)},e):{},Z=m(q)?this._toVariables({[d]:L(L({},q),at)},e):{},J=m(st)?this._toVariables({[d]:L(L({},st),ot)},e):{},[ct,pt]=[(a=lt.declarations)!=null?a:"",lt.tokens||[]],[dt,ut]=[(l=Z.declarations)!=null?l:"",Z.tokens||[]],[ft,ht]=[(c=J.declarations)!=null?c:"",J.tokens||[]],mt=this.transformCSS(d,`${ct}${dt}`,"light","variable",e,s,o,r),gt=this.transformCSS(d,ft,"dark","variable",e,s,o,r);p=`${mt}${gt}`,f=[...new Set([...pt,...ut,...ht])],u=T(x,{dt:Y})}return{css:p,tokens:f,style:u}},getPresetC({name:t="",theme:i={},params:e,set:n,defaults:s}){var o;let{preset:r,options:a}=i,l=(o=r?.components)==null?void 0:o[t];return this.getPreset({name:t,preset:l,options:a,params:e,set:n,defaults:s})},getPresetD({name:t="",theme:i={},params:e,set:n,defaults:s}){var o;let r=t.replace("-directive",""),{preset:a,options:l}=i,c=(o=a?.directives)==null?void 0:o[r];return this.getPreset({name:r,preset:c,options:l,params:e,set:n,defaults:s})},applyDarkColorScheme(t){return!(t.darkModeSelector==="none"||t.darkModeSelector===!1)},getColorSchemeOption(t,i){var e;return this.applyDarkColorScheme(t)?this.regex.resolve(t.darkModeSelector===!0?i.options.darkModeSelector:(e=t.darkModeSelector)!=null?e:i.options.darkModeSelector):[]},getLayerOrder(t,i={},e,n){let{cssLayer:s}=i;return s?`@layer ${T(s.order||"primeui",e)}`:""},getCommonStyleSheet({name:t="",theme:i={},params:e,props:n={},set:s,defaults:o}){let r=this.getCommon({name:t,theme:i,params:e,set:s,defaults:o}),a=Object.entries(n).reduce((l,[c,p])=>l.push(`${c}="${p}"`)&&l,[]).join(" ");return Object.entries(r||{}).reduce((l,[c,p])=>{if(p?.css){let f=$(p?.css),u=`${c}-variables`;l.push(`<style type="text/css" data-primevue-style-id="${u}" ${a}>${f}</style>`)}return l},[]).join("")},getStyleSheet({name:t="",theme:i={},params:e,props:n={},set:s,defaults:o}){var r;let a={name:t,theme:i,params:e,set:s,defaults:o},l=(r=t.includes("-directive")?this.getPresetD(a):this.getPresetC(a))==null?void 0:r.css,c=Object.entries(n).reduce((p,[f,u])=>p.push(`${f}="${u}"`)&&p,[]).join(" ");return l?`<style type="text/css" data-primevue-style-id="${t}-variables" ${c}>${$(l)}</style>`:""},createTokens(t={},i,e="",n="",s={}){return Object.entries(t).forEach(([o,r])=>{let a=v(o,i.variable.excludedKeyRegex)?e:e?`${e}.${Nt(o)}`:Nt(o),l=n?`${n}.${o}`:o;I(r)?this.createTokens(r,i,a,l,s):(s[a]||(s[a]={paths:[],computed(c,p={}){var f,u;return this.paths.length===1?(f=this.paths[0])==null?void 0:f.computed(this.paths[0].scheme,p.binding):c&&c!=="none"?(u=this.paths.find(d=>d.scheme===c))==null?void 0:u.computed(c,p.binding):this.paths.map(d=>d.computed(d.scheme,p[d.scheme]))}}),s[a].paths.push({path:l,value:r,scheme:l.includes("colorScheme.light")?"light":l.includes("colorScheme.dark")?"dark":"none",computed(c,p={}){let f=/{([^}]*)}/g,u=r;if(p.name=this.path,p.binding||(p.binding={}),v(r,f)){let S=r.trim().replaceAll(f,x=>{var P;let k=x.replace(/{|}/g,""),C=(P=s[k])==null?void 0:P.computed(c,p);return _t(C)&&C.length===2?`light-dark(${C[0].value},${C[1].value})`:C?.value}),b=/(\d+\w*\s+[\+\-\*\/]\s+\d+\w*)/g,D=/var\([^)]+\)/g;u=v(S.replace(D,"0"),b)?`calc(${S})`:S}return H(p.binding)&&delete p.binding,{colorScheme:c,path:this.path,paths:p,value:u.includes("undefined")?void 0:u}}}))}),s},getTokenValue(t,i,e){var n;let o=(l=>l.split(".").filter(p=>!v(p.toLowerCase(),e.variable.excludedKeyRegex)).join("."))(i),r=i.includes("colorScheme.light")?"light":i.includes("colorScheme.dark")?"dark":void 0,a=[(n=t[o])==null?void 0:n.computed(r)].flat().filter(l=>l);return a.length===1?a[0].value:a.reduce((l={},c)=>{let p=c,{colorScheme:f}=p,u=N(p,["colorScheme"]);return l[f]=u,l},void 0)},getSelectorRule(t,i,e,n){return e==="class"||e==="attr"?K(m(i)?`${t}${i},${t} ${i}`:t,n):K(t,m(i)?K(i,n):n)},transformCSS(t,i,e,n,s={},o,r,a){if(m(i)){let{cssLayer:l}=s;if(n!=="style"){let c=this.getColorSchemeOption(s,r);i=e==="dark"?c.reduce((p,{type:f,selector:u})=>(m(u)&&(p+=u.includes("[CSS]")?u.replace("[CSS]",i):this.getSelectorRule(u,a,f,i)),p),""):K(a??":root",i)}if(l){let c={name:"primeui",order:"primeui"};I(l)&&(c.name=T(l.name,{name:t,type:n})),m(c.name)&&(i=K(`@layer ${c.name}`,i),o?.layerNames(c.name))}return i}return""}},h={defaults:{variable:{prefix:"p",selector:":root",excludedKeyRegex:/^(primitive|semantic|components|directives|variables|colorscheme|light|dark|common|root|states|extend|css)$/gi},options:{prefix:"p",darkModeSelector:"system",cssLayer:!1}},_theme:void 0,_layerNames:new Set,_loadedStyleNames:new Set,_loadingStyles:new Set,_tokens:{},update(t={}){let{theme:i}=t;i&&(this._theme=Dt(L({},i),{options:L(L({},this.defaults.options),i.options)}),this._tokens=A.createTokens(this.preset,this.defaults),this.clearLoadedStyleNames())},get theme(){return this._theme},get preset(){var t;return((t=this.theme)==null?void 0:t.preset)||{}},get options(){var t;return((t=this.theme)==null?void 0:t.options)||{}},get tokens(){return this._tokens},getTheme(){return this.theme},setTheme(t){this.update({theme:t}),O.emit("theme:change",t)},getPreset(){return this.preset},setPreset(t){this._theme=Dt(L({},this.theme),{preset:t}),this._tokens=A.createTokens(t,this.defaults),this.clearLoadedStyleNames(),O.emit("preset:change",t),O.emit("theme:change",this.theme)},getOptions(){return this.options},setOptions(t){this._theme=Dt(L({},this.theme),{options:t}),this.clearLoadedStyleNames(),O.emit("options:change",t),O.emit("theme:change",this.theme)},getLayerNames(){return[...this._layerNames]},setLayerNames(t){this._layerNames.add(t)},getLoadedStyleNames(){return this._loadedStyleNames},isStyleNameLoaded(t){return this._loadedStyleNames.has(t)},setLoadedStyleName(t){this._loadedStyleNames.add(t)},deleteLoadedStyleName(t){this._loadedStyleNames.delete(t)},clearLoadedStyleNames(){this._loadedStyleNames.clear()},getTokenValue(t){return A.getTokenValue(this.tokens,t,this.defaults)},getCommon(t="",i){return A.getCommon({name:t,theme:this.theme,params:i,defaults:this.defaults,set:{layerNames:this.setLayerNames.bind(this)}})},getComponent(t="",i){let e={name:t,theme:this.theme,params:i,defaults:this.defaults,set:{layerNames:this.setLayerNames.bind(this)}};return A.getPresetC(e)},getDirective(t="",i){let e={name:t,theme:this.theme,params:i,defaults:this.defaults,set:{layerNames:this.setLayerNames.bind(this)}};return A.getPresetD(e)},getCustomPreset(t="",i,e,n){let s={name:t,preset:i,options:this.options,selector:e,params:n,defaults:this.defaults,set:{layerNames:this.setLayerNames.bind(this)}};return A.getPreset(s)},getLayerOrderCSS(t=""){return A.getLayerOrder(t,this.options,{names:this.getLayerNames()},this.defaults)},transformCSS(t="",i,e="style",n){return A.transformCSS(t,i,n,e,this.options,{layerNames:this.setLayerNames.bind(this)},this.defaults)},getCommonStyleSheet(t="",i,e={}){return A.getCommonStyleSheet({name:t,theme:this.theme,params:i,props:e,defaults:this.defaults,set:{layerNames:this.setLayerNames.bind(this)}})},getStyleSheet(t,i,e={}){return A.getStyleSheet({name:t,theme:this.theme,params:i,props:e,defaults:this.defaults,set:{layerNames:this.setLayerNames.bind(this)}})},onStyleMounted(t){this._loadingStyles.add(t)},onStyleUpdated(t){this._loadingStyles.add(t)},onStyleLoaded(t,{name:i}){this._loadingStyles.size&&(this._loadingStyles.delete(i),O.emit(`theme:${i}:load`,t),!this._loadingStyles.size&&O.emit("theme:load"))}};var si=0,be=(()=>{class t{document=g(B);use(e,n={}){let s=!1,o=e,r=null,{immediate:a=!0,manual:l=!1,name:c=`style_${++si}`,id:p=void 0,media:f=void 0,nonce:u=void 0,first:d=!1,props:S={}}=n;if(this.document){if(r=this.document.querySelector(`style[data-primeng-style-id="${c}"]`)||p&&this.document.getElementById(p)||this.document.createElement("style"),!r.isConnected){o=e,Et(r,{type:"text/css",media:f,nonce:u});let b=this.document.head;d&&b.firstChild?b.insertBefore(r,b.firstChild):b.appendChild(r),le(r,"data-primeng-style-id",c)}return r.textContent!==o&&(r.textContent=o),{id:p,name:c,el:r,css:o}}}static \u0275fac=function(n){return new(n||t)};static \u0275prov=_({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var z={_loadedStyleNames:new Set,getLoadedStyleNames(){return this._loadedStyleNames},isStyleNameLoaded(t){return this._loadedStyleNames.has(t)},setLoadedStyleName(t){this._loadedStyleNames.add(t)},deleteLoadedStyleName(t){this._loadedStyleNames.delete(t)},clearLoadedStyleNames(){this._loadedStyleNames.clear()}},ri=({dt:t})=>`
*,
::before,
::after {
    box-sizing: border-box;
}

/* Non ng overlay animations */
.p-connected-overlay {
    opacity: 0;
    transform: scaleY(0.8);
    transition: transform 0.12s cubic-bezier(0, 0, 0.2, 1),
        opacity 0.12s cubic-bezier(0, 0, 0.2, 1);
}

.p-connected-overlay-visible {
    opacity: 1;
    transform: scaleY(1);
}

.p-connected-overlay-hidden {
    opacity: 0;
    transform: scaleY(1);
    transition: opacity 0.1s linear;
}

/* NG based overlay animations */
.p-connected-overlay-enter-from {
    opacity: 0;
    transform: scaleY(0.8);
}

.p-connected-overlay-leave-to {
    opacity: 0;
}

.p-connected-overlay-enter-active {
    transition: transform 0.12s cubic-bezier(0, 0, 0.2, 1),
        opacity 0.12s cubic-bezier(0, 0, 0.2, 1);
}

.p-connected-overlay-leave-active {
    transition: opacity 0.1s linear;
}

/* Toggleable Content */
.p-toggleable-content-enter-from,
.p-toggleable-content-leave-to {
    max-height: 0;
}

.p-toggleable-content-enter-to,
.p-toggleable-content-leave-from {
    max-height: 1000px;
}

.p-toggleable-content-leave-active {
    overflow: hidden;
    transition: max-height 0.45s cubic-bezier(0, 1, 0, 1);
}

.p-toggleable-content-enter-active {
    overflow: hidden;
    transition: max-height 1s ease-in-out;
}

.p-disabled,
.p-disabled * {
    cursor: default;
    pointer-events: none;
    user-select: none;
}

.p-disabled,
.p-component:disabled {
    opacity: ${t("disabled.opacity")};
}

.pi {
    font-size: ${t("icon.size")};
}

.p-icon {
    width: ${t("icon.size")};
    height: ${t("icon.size")};
}

.p-overlay-mask {
    background: ${t("mask.background")};
    color: ${t("mask.color")};
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}

.p-overlay-mask-enter {
    animation: p-overlay-mask-enter-animation ${t("mask.transition.duration")} forwards;
}

.p-overlay-mask-leave {
    animation: p-overlay-mask-leave-animation ${t("mask.transition.duration")} forwards;
}
/* Temporarily disabled, distrupts PrimeNG overlay animations */
/* @keyframes p-overlay-mask-enter-animation {
    from {
        background: transparent;
    }
    to {
        background: ${t("mask.background")};
    }
}
@keyframes p-overlay-mask-leave-animation {
    from {
        background: ${t("mask.background")};
    }
    to {
        background: transparent;
    }
}*/

.p-iconwrapper {
    display: inline-flex;
    justify-content: center;
    align-items: center;
}
`,oi=({dt:t})=>`
.p-hidden-accessible {
    border: 0;
    clip: rect(0 0 0 0);
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    width: 1px;
}

.p-hidden-accessible input,
.p-hidden-accessible select {
    transform: scale(0);
}

.p-overflow-hidden {
    overflow: hidden;
    padding-right: ${t("scrollbar.width")};
}

/* @todo move to baseiconstyle.ts */

.p-icon {
    display: inline-block;
    vertical-align: baseline;
}

.p-icon-spin {
    -webkit-animation: p-icon-spin 2s infinite linear;
    animation: p-icon-spin 2s infinite linear;
}

@-webkit-keyframes p-icon-spin {
    0% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
    }
    100% {
        -webkit-transform: rotate(359deg);
        transform: rotate(359deg);
    }
}

@keyframes p-icon-spin {
    0% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
    }
    100% {
        -webkit-transform: rotate(359deg);
        transform: rotate(359deg);
    }
}
`,R=(()=>{class t{name="base";useStyle=g(be);theme=ri;css=oi;classes={};inlineStyles={};load=(e,n={},s=o=>o)=>{let o=s(T(e,{dt:Y}));return o?this.useStyle.use($(o),y({name:this.name},n)):{}};loadCSS=(e={})=>this.load(this.css,e);loadTheme=(e={},n="")=>this.load(this.theme,e,(s="")=>h.transformCSS(e.name||this.name,`${s}${n}`));getCommonTheme=e=>h.getCommon(this.name,e);getComponentTheme=e=>h.getComponent(this.name,e);getDirectiveTheme=e=>h.getDirective(this.name,e);getPresetTheme=(e,n,s)=>h.getCustomPreset(this.name,e,n,s);getLayerOrderThemeCSS=()=>h.getLayerOrderCSS(this.name);getStyleSheet=(e="",n={})=>{if(this.css){let s=T(this.css,{dt:Y}),o=$(`${s}${e}`),r=Object.entries(n).reduce((a,[l,c])=>a.push(`${l}="${c}"`)&&a,[]).join(" ");return`<style type="text/css" data-primeng-style-id="${this.name}" ${r}>${o}</style>`}return""};getCommonThemeStyleSheet=(e,n={})=>h.getCommonStyleSheet(this.name,e,n);getThemeStyleSheet=(e,n={})=>{let s=[h.getStyleSheet(this.name,e,n)];if(this.theme){let o=this.name==="base"?"global-style":`${this.name}-style`,r=T(this.theme,{dt:Y}),a=$(h.transformCSS(o,r)),l=Object.entries(n).reduce((c,[p,f])=>c.push(`${p}="${f}"`)&&c,[]).join(" ");s.push(`<style type="text/css" data-primeng-style-id="${o}" ${l}>${a}</style>`)}return s.join("")};static \u0275fac=function(n){return new(n||t)};static \u0275prov=_({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var ai=(()=>{class t{theme=F(void 0);csp=F({nonce:void 0});isThemeChanged=!1;document=g(B);baseStyle=g(R);constructor(){et(()=>{O.on("theme:change",e=>{Jt(()=>{this.isThemeChanged=!0,this.theme.set(e)})})}),et(()=>{let e=this.theme();this.document&&e&&(this.isThemeChanged||this.onThemeChange(e),this.isThemeChanged=!1)})}ngOnDestroy(){h.clearLoadedStyleNames(),O.clear()}onThemeChange(e){h.setTheme(e),this.document&&this.loadCommonTheme()}loadCommonTheme(){if(this.theme()!=="none"&&!h.isStyleNameLoaded("common")){let{primitive:e,semantic:n,global:s,style:o}=this.baseStyle.getCommonTheme?.()||{},r={nonce:this.csp?.()?.nonce};this.baseStyle.load(e?.css,y({name:"primitive-variables"},r)),this.baseStyle.load(n?.css,y({name:"semantic-variables"},r)),this.baseStyle.load(s?.css,y({name:"global-variables"},r)),this.baseStyle.loadTheme(y({name:"global-style"},r),o),h.setLoadedStyleName("common")}}setThemeConfig(e){let{theme:n,csp:s}=e||{};n&&this.theme.set(n),s&&this.csp.set(s)}static \u0275fac=function(n){return new(n||t)};static \u0275prov=_({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),_e=(()=>{class t extends ai{ripple=F(!1);platformId=g(yt);inputStyle=F("outlined");inputVariant=F("outlined");overlayOptions={};csp=F({nonce:void 0});filterMatchModeOptions={text:[E.STARTS_WITH,E.CONTAINS,E.NOT_CONTAINS,E.ENDS_WITH,E.EQUALS,E.NOT_EQUALS],numeric:[E.EQUALS,E.NOT_EQUALS,E.LESS_THAN,E.LESS_THAN_OR_EQUAL_TO,E.GREATER_THAN,E.GREATER_THAN_OR_EQUAL_TO],date:[E.DATE_IS,E.DATE_IS_NOT,E.DATE_BEFORE,E.DATE_AFTER]};translation={startsWith:"Starts with",contains:"Contains",notContains:"Not contains",endsWith:"Ends with",equals:"Equals",notEquals:"Not equals",noFilter:"No Filter",lt:"Less than",lte:"Less than or equal to",gt:"Greater than",gte:"Greater than or equal to",is:"Is",isNot:"Is not",before:"Before",after:"After",dateIs:"Date is",dateIsNot:"Date is not",dateBefore:"Date is before",dateAfter:"Date is after",clear:"Clear",apply:"Apply",matchAll:"Match All",matchAny:"Match Any",addRule:"Add Rule",removeRule:"Remove Rule",accept:"Yes",reject:"No",choose:"Choose",upload:"Upload",cancel:"Cancel",pending:"Pending",fileSizeTypes:["B","KB","MB","GB","TB","PB","EB","ZB","YB"],dayNames:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],dayNamesShort:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],dayNamesMin:["Su","Mo","Tu","We","Th","Fr","Sa"],monthNames:["January","February","March","April","May","June","July","August","September","October","November","December"],monthNamesShort:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],chooseYear:"Choose Year",chooseMonth:"Choose Month",chooseDate:"Choose Date",prevDecade:"Previous Decade",nextDecade:"Next Decade",prevYear:"Previous Year",nextYear:"Next Year",prevMonth:"Previous Month",nextMonth:"Next Month",prevHour:"Previous Hour",nextHour:"Next Hour",prevMinute:"Previous Minute",nextMinute:"Next Minute",prevSecond:"Previous Second",nextSecond:"Next Second",am:"am",pm:"pm",dateFormat:"mm/dd/yy",firstDayOfWeek:0,today:"Today",weekHeader:"Wk",weak:"Weak",medium:"Medium",strong:"Strong",passwordPrompt:"Enter a password",emptyMessage:"No results found",searchMessage:"Search results are available",selectionMessage:"{0} items selected",emptySelectionMessage:"No selected item",emptySearchMessage:"No results found",emptyFilterMessage:"No results found",fileChosenMessage:"Files",noFileChosenMessage:"No file chosen",aria:{trueLabel:"True",falseLabel:"False",nullLabel:"Not Selected",star:"1 star",stars:"{star} stars",selectAll:"All items selected",unselectAll:"All items unselected",close:"Close",previous:"Previous",next:"Next",navigation:"Navigation",scrollTop:"Scroll Top",moveTop:"Move Top",moveUp:"Move Up",moveDown:"Move Down",moveBottom:"Move Bottom",moveToTarget:"Move to Target",moveToSource:"Move to Source",moveAllToTarget:"Move All to Target",moveAllToSource:"Move All to Source",pageLabel:"{page}",firstPageLabel:"First Page",lastPageLabel:"Last Page",nextPageLabel:"Next Page",prevPageLabel:"Previous Page",rowsPerPageLabel:"Rows per page",previousPageLabel:"Previous Page",jumpToPageDropdownLabel:"Jump to Page Dropdown",jumpToPageInputLabel:"Jump to Page Input",selectRow:"Row Selected",unselectRow:"Row Unselected",expandRow:"Row Expanded",collapseRow:"Row Collapsed",showFilterMenu:"Show Filter Menu",hideFilterMenu:"Hide Filter Menu",filterOperator:"Filter Operator",filterConstraint:"Filter Constraint",editRow:"Row Edit",saveEdit:"Save Edit",cancelEdit:"Cancel Edit",listView:"List View",gridView:"Grid View",slide:"Slide",slideNumber:"{slideNumber}",zoomImage:"Zoom Image",zoomIn:"Zoom In",zoomOut:"Zoom Out",rotateRight:"Rotate Right",rotateLeft:"Rotate Left",listLabel:"Option List",selectColor:"Select a color",removeLabel:"Remove",browseFiles:"Browse Files",maximizeLabel:"Maximize"}};zIndex={modal:1100,overlay:1e3,menu:1e3,tooltip:1100};translationSource=new $t;translationObserver=this.translationSource.asObservable();getTranslation(e){return this.translation[e]}setTranslation(e){this.translation=y(y({},this.translation),e),this.translationSource.next(this.translation)}setConfig(e){let{csp:n,ripple:s,inputStyle:o,theme:r,overlayOptions:a,translation:l}=e||{};n&&this.csp.set(n),s&&this.ripple.set(s),o&&this.inputStyle.set(o),a&&(this.overlayOptions=a),l&&this.setTranslation(l),r&&this.setThemeConfig({theme:r,csp:n})}static \u0275fac=(()=>{let e;return function(s){return(e||(e=w(t)))(s||t)}})();static \u0275prov=_({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),Mn=new Wt("PRIME_NG_CONFIG");var ve=(()=>{class t extends R{name="common";static \u0275fac=(()=>{let e;return function(s){return(e||(e=w(t)))(s||t)}})();static \u0275prov=_({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),Ct=(()=>{class t{document=g(B);platformId=g(yt);el=g(jt);injector=g(Bt);cd=g(qt);renderer=g(Yt);config=g(_e);baseComponentStyle=g(ve);baseStyle=g(R);scopedStyleEl;rootEl;dt;get styleOptions(){return{nonce:this.config?.csp().nonce}}get _name(){return this.constructor.name.replace(/^_/,"").toLowerCase()}get componentStyle(){return this._componentStyle}attrSelector=ue("pc");_getHostInstance(e){if(e)return e?this.hostName?e.name===this.hostName?e:this._getHostInstance(e.parentInstance):e.parentInstance:void 0}_getOptionValue(e,n="",s={}){return bt(e,n,s)}ngOnInit(){this.document&&this._loadStyles()}ngAfterViewInit(){this.rootEl=this.el?.nativeElement,this.rootEl&&this.rootEl?.setAttribute(this.attrSelector,"")}ngOnChanges(e){if(this.document&&!te(this.platformId)){let{dt:n}=e;n&&n.currentValue&&(this._loadScopedThemeStyles(n.currentValue),this._themeChangeListener(()=>this._loadScopedThemeStyles(n.currentValue)))}}ngOnDestroy(){this._unloadScopedThemeStyles()}_loadStyles(){let e=()=>{z.isStyleNameLoaded("base")||(this.baseStyle.loadCSS(this.styleOptions),z.setLoadedStyleName("base")),this._loadThemeStyles()};e(),this._themeChangeListener(()=>e())}_loadCoreStyles(){!z.isStyleNameLoaded("base")&&this._name&&(this.baseComponentStyle.loadCSS(this.styleOptions),this.componentStyle&&this.componentStyle?.loadCSS(this.styleOptions),z.setLoadedStyleName(this.componentStyle?.name))}_loadThemeStyles(){if(!h.isStyleNameLoaded("common")){let{primitive:e,semantic:n,global:s,style:o}=this.componentStyle?.getCommonTheme?.()||{};this.baseStyle.load(e?.css,y({name:"primitive-variables"},this.styleOptions)),this.baseStyle.load(n?.css,y({name:"semantic-variables"},this.styleOptions)),this.baseStyle.load(s?.css,y({name:"global-variables"},this.styleOptions)),this.baseStyle.loadTheme(y({name:"global-style"},this.styleOptions),o),h.setLoadedStyleName("common")}if(!h.isStyleNameLoaded(this.componentStyle?.name)&&this.componentStyle?.name){let{css:e,style:n}=this.componentStyle?.getComponentTheme?.()||{};this.componentStyle?.load(e,y({name:`${this.componentStyle?.name}-variables`},this.styleOptions)),this.componentStyle?.loadTheme(y({name:`${this.componentStyle?.name}-style`},this.styleOptions),n),h.setLoadedStyleName(this.componentStyle?.name)}if(!h.isStyleNameLoaded("layer-order")){let e=this.componentStyle?.getLayerOrderThemeCSS?.();this.baseStyle.load(e,y({name:"layer-order",first:!0},this.styleOptions)),h.setLoadedStyleName("layer-order")}this.dt&&(this._loadScopedThemeStyles(this.dt),this._themeChangeListener(()=>this._loadScopedThemeStyles(this.dt)))}_loadScopedThemeStyles(e){let{css:n}=this.componentStyle?.getPresetTheme?.(e,`[${this.attrSelector}]`)||{},s=this.componentStyle?.load(n,y({name:`${this.attrSelector}-${this.componentStyle?.name}`},this.styleOptions));this.scopedStyleEl=s?.el}_unloadScopedThemeStyles(){this.scopedStyleEl?.remove()}_themeChangeListener(e=()=>{}){z.clearLoadedStyleNames(),O.on("theme:change",e)}cx(e,n){let s=this.parent?this.parent.componentStyle?.classes?.[e]:this.componentStyle?.classes?.[e];return typeof s=="function"?s({instance:this}):typeof s=="string"?s:e}sx(e){let n=this.componentStyle?.inlineStyles?.[e];return typeof n=="function"?n({instance:this}):typeof n=="string"?n:y({},n)}get parent(){return this.parentInstance}static \u0275fac=function(n){return new(n||t)};static \u0275dir=W({type:t,inputs:{dt:"dt"},features:[U([ve,R]),Ut]})}return t})();var li=({dt:t})=>`
/* For PrimeNG */
.p-ripple {
    overflow: hidden;
    position: relative;
}

.p-ink {
    display: block;
    position: absolute;
    background: ${t("ripple.background")};
    border-radius: 100%;
    transform: scale(0);
}

.p-ink-active {
    animation: ripple 0.4s linear;
}

.p-ripple-disabled .p-ink {
    display: none !important;
}

@keyframes ripple {
    100% {
        opacity: 0;
        transform: scale(2.5);
    }
}
`,ci={root:"p-ink"},Te=(()=>{class t extends R{name="ripple";theme=li;classes=ci;static \u0275fac=(()=>{let e;return function(s){return(e||(e=w(t)))(s||t)}})();static \u0275prov=_({token:t,factory:t.\u0275fac})}return t})();var ns=(()=>{class t extends Ct{zone=g(Vt);_componentStyle=g(Te);animationListener;mouseDownListener;timeout;constructor(){super(),et(()=>{Xt(this.platformId)&&(this.config.ripple()?this.zone.runOutsideAngular(()=>{this.create(),this.mouseDownListener=this.renderer.listen(this.el.nativeElement,"mousedown",this.onMouseDown.bind(this))}):this.remove())})}ngAfterViewInit(){super.ngAfterViewInit()}onMouseDown(e){let n=this.getInk();if(!n||this.document.defaultView?.getComputedStyle(n,null).display==="none")return;if(V(n,"p-ink-active"),!wt(n)&&!It(n)){let a=Math.max(ie(this.el.nativeElement),oe(this.el.nativeElement));n.style.height=a+"px",n.style.width=a+"px"}let s=re(this.el.nativeElement),o=e.pageX-s.left+this.document.body.scrollTop-It(n)/2,r=e.pageY-s.top+this.document.body.scrollLeft-wt(n)/2;this.renderer.setStyle(n,"top",r+"px"),this.renderer.setStyle(n,"left",o+"px"),Rt(n,"p-ink-active"),this.timeout=setTimeout(()=>{let a=this.getInk();a&&V(a,"p-ink-active")},401)}getInk(){let e=this.el.nativeElement.children;for(let n=0;n<e.length;n++)if(typeof e[n].className=="string"&&e[n].className.indexOf("p-ink")!==-1)return e[n];return null}resetInk(){let e=this.getInk();e&&V(e,"p-ink-active")}onAnimationEnd(e){this.timeout&&clearTimeout(this.timeout),V(e.currentTarget,"p-ink-active")}create(){let e=this.renderer.createElement("span");this.renderer.addClass(e,"p-ink"),this.renderer.appendChild(this.el.nativeElement,e),this.renderer.setAttribute(e,"aria-hidden","true"),this.renderer.setAttribute(e,"role","presentation"),this.animationListener||(this.animationListener=this.renderer.listen(e,"animationend",this.onAnimationEnd.bind(this)))}remove(){let e=this.getInk();e&&(this.mouseDownListener&&this.mouseDownListener(),this.animationListener&&this.animationListener(),this.mouseDownListener=null,this.animationListener=null,ae(e))}ngOnDestroy(){this.config&&this.config.ripple()&&this.remove(),super.ngOnDestroy()}static \u0275fac=function(n){return new(n||t)};static \u0275dir=W({type:t,selectors:[["","pRipple",""]],hostAttrs:[1,"p-ripple"],features:[U([Te]),St]})}return t})();var pi=`
.p-icon {
    display: inline-block;
    vertical-align: baseline;
}

.p-icon-spin {
    -webkit-animation: p-icon-spin 2s infinite linear;
    animation: p-icon-spin 2s infinite linear;
}

@-webkit-keyframes p-icon-spin {
    0% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
    }
    100% {
        -webkit-transform: rotate(359deg);
        transform: rotate(359deg);
    }
}

@keyframes p-icon-spin {
    0% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
    }
    100% {
        -webkit-transform: rotate(359deg);
        transform: rotate(359deg);
    }
}
`,di=(()=>{class t extends R{name="baseicon";inlineStyles=pi;static \u0275fac=(()=>{let e;return function(s){return(e||(e=w(t)))(s||t)}})();static \u0275prov=_({token:t,factory:t.\u0275fac})}return t})();var ui=["*"],hs=(()=>{class t extends Ct{label;spin=!1;styleClass;role;ariaLabel;ariaHidden;ngOnInit(){super.ngOnInit(),this.getAttributes()}getAttributes(){let e=H(this.label);this.role=e?void 0:"img",this.ariaLabel=e?void 0:this.label,this.ariaHidden=e}getClassNames(){return`p-icon ${this.styleClass?this.styleClass+" ":""}${this.spin?"p-icon-spin":""}`}static \u0275fac=(()=>{let e;return function(s){return(e||(e=w(t)))(s||t)}})();static \u0275cmp=Q({type:t,selectors:[["ng-component"]],hostAttrs:[1,"p-component","p-iconwrapper"],inputs:{label:"label",spin:[2,"spin","spin",Zt],styleClass:"styleClass"},features:[U([di]),zt,St],ngContentSelectors:ui,decls:1,vars:0,template:function(n,s){n&1&&(X(),tt(0))},encapsulation:2,changeDetection:0})}return t})();export{Be as a,Rt as b,hi as c,V as d,mi as e,gi as f,yi as g,Si as h,ie as i,Ei as j,bi as k,_i as l,je as m,vi as n,Ti as o,Oi as p,Ci as q,Ai as r,oe as s,Li as t,Ri as u,le as v,H as w,m as x,Di as y,T as z,xi as A,ue as B,Ji as C,Qi as D,Xi as E,tn as F,R as G,Ct as H,hs as I,ns as J};
