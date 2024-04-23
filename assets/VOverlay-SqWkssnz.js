import{aU as Re,aV as Me,g as Ne,c as H,E as $,aW as fe,p as V,D as b,L as P,aA as G,aX as Ge,aY as be,I as He,aD as Ze,at as q,Z as ne,aP as _,r as D,aR as ge,S as B,aZ as Ke,an as Ee,a2 as ye,a_ as De,a$ as Je,W as _e,b0 as xe,aT as Qe,R as z,aG as et,a3 as tt,af as We,T as nt,b1 as ot,aI as at,m as it,N as rt,H as st,O as lt,P as ct,a4 as ut,u as ft,b2 as vt,U as dt,Y as mt,V as gt,F as yt}from"./index-yoNXwepb.js";import{a as U,d as ht,s as ve,b as wt,g as Ve,n as Ie,B as ie,c as Se}from"./VTextField-8n1NyAtl.js";import{B as Oe,C as re,D as se,E as ke,F as Pe,w as bt,d as Et,M as xt}from"./VInput-xHqYTyJH.js";const J=new WeakMap;function St(e,n){Object.keys(n).forEach(t=>{if(Re(t)){const o=Me(t),a=J.get(e);if(n[t]==null)a==null||a.forEach(i=>{const[s,r]=i;s===o&&(e.removeEventListener(o,r),a.delete(i))});else if(!a||![...a].some(i=>i[0]===o&&i[1]===n[t])){e.addEventListener(o,n[t]);const i=a||new Set;i.add([o,n[t]]),J.has(e)||J.set(e,i)}}else n[t]==null?e.removeAttribute(t):e.setAttribute(t,n[t])})}function Ot(e,n){Object.keys(n).forEach(t=>{if(Re(t)){const o=Me(t),a=J.get(e);a==null||a.forEach(i=>{const[s,r]=i;s===o&&(e.removeEventListener(o,r),a.delete(i))})}else e.removeAttribute(t)})}function $e(e){if(typeof e.getRootNode!="function"){for(;e.parentNode;)e=e.parentNode;return e!==document?null:document}const n=e.getRootNode();return n!==document&&n.getRootNode({composed:!0})!==document?null:n}function kt(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;for(;e;){if(n?Pt(e):he(e))return e;e=e.parentElement}return document.scrollingElement}function ee(e,n){const t=[];if(n&&e&&!n.contains(e))return t;for(;e&&(he(e)&&t.push(e),e!==n);)e=e.parentElement;return t}function he(e){if(!e||e.nodeType!==Node.ELEMENT_NODE)return!1;const n=window.getComputedStyle(e);return n.overflowY==="scroll"||n.overflowY==="auto"&&e.scrollHeight>e.clientHeight}function Pt(e){if(!e||e.nodeType!==Node.ELEMENT_NODE)return!1;const n=window.getComputedStyle(e);return["scroll","auto"].includes(n.overflowY)}function pt(e){for(;e;){if(window.getComputedStyle(e).position==="fixed")return!0;e=e.offsetParent}return!1}const At=V({target:[Object,Array]},"v-dialog-transition"),vn=Ne()({name:"VDialogTransition",props:At(),setup(e,n){let{slots:t}=n;const o={onBeforeEnter(a){a.style.pointerEvents="none",a.style.visibility="hidden"},async onEnter(a,i){var w;await new Promise(h=>requestAnimationFrame(h)),await new Promise(h=>requestAnimationFrame(h)),a.style.visibility="";const{x:s,y:r,sx:c,sy:u,speed:f}=Ae(e.target,a),y=U(a,[{transform:`translate(${s}px, ${r}px) scale(${c}, ${u})`,opacity:0},{}],{duration:225*f,easing:ht});(w=pe(a))==null||w.forEach(h=>{U(h,[{opacity:0},{opacity:0,offset:.33},{}],{duration:225*2*f,easing:ve})}),y.finished.then(()=>i())},onAfterEnter(a){a.style.removeProperty("pointer-events")},onBeforeLeave(a){a.style.pointerEvents="none"},async onLeave(a,i){var w;await new Promise(h=>requestAnimationFrame(h));const{x:s,y:r,sx:c,sy:u,speed:f}=Ae(e.target,a);U(a,[{},{transform:`translate(${s}px, ${r}px) scale(${c}, ${u})`,opacity:0}],{duration:125*f,easing:wt}).finished.then(()=>i()),(w=pe(a))==null||w.forEach(h=>{U(h,[{},{opacity:0,offset:.2},{opacity:0}],{duration:125*2*f,easing:ve})})},onAfterLeave(a){a.style.removeProperty("pointer-events")}};return()=>e.target?H(fe,$({name:"dialog-transition"},o,{css:!1}),t):H(fe,{name:"dialog-transition"},t)}});function pe(e){var t;const n=(t=e.querySelector(":scope > .v-card, :scope > .v-sheet, :scope > .v-list"))==null?void 0:t.children;return n&&[...n]}function Ae(e,n){const t=Ve(e),o=Ie(n),[a,i]=getComputedStyle(n).transformOrigin.split(" ").map(A=>parseFloat(A)),[s,r]=getComputedStyle(n).getPropertyValue("--v-overlay-anchor-origin").split(" ");let c=t.left+t.width/2;s==="left"||r==="left"?c-=t.width/2:(s==="right"||r==="right")&&(c+=t.width/2);let u=t.top+t.height/2;s==="top"||r==="top"?u-=t.height/2:(s==="bottom"||r==="bottom")&&(u+=t.height/2);const f=t.width/o.width,y=t.height/o.height,w=Math.max(1,f,y),h=f/w||0,d=y/w||0,v=o.width*o.height/(window.innerWidth*window.innerHeight),p=v>.12?Math.min(1.5,(v-.12)*10+1):1;return{x:c-(a+o.left),y:u-(i+o.top),sx:h,sy:d,speed:p}}const Ct=V({height:[Number,String],maxHeight:[Number,String],maxWidth:[Number,String],minHeight:[Number,String],minWidth:[Number,String],width:[Number,String]},"dimension");function Tt(e){return{dimensionStyles:b(()=>({height:P(e.height),maxHeight:P(e.maxHeight),maxWidth:P(e.maxWidth),minHeight:P(e.minHeight),minWidth:P(e.minWidth),width:P(e.width)}))}}function Lt(){const e=G("useRoute");return b(()=>{var n;return(n=e==null?void 0:e.proxy)==null?void 0:n.$route})}function Bt(){var e,n;return(n=(e=G("useRouter"))==null?void 0:e.proxy)==null?void 0:n.$router}function dn(e,n){const t=Ge("RouterLink"),o=b(()=>!!(e.href||e.to)),a=b(()=>(o==null?void 0:o.value)||be(n,"click")||be(e,"click"));if(typeof t=="string")return{isLink:o,isClickable:a,href:He(e,"href")};const i=e.to?t.useLink(e):void 0,s=Lt();return{isLink:o,isClickable:a,route:i==null?void 0:i.route,navigate:i==null?void 0:i.navigate,isActive:i&&b(()=>{var r,c,u;return e.exact?s.value?((u=i.isExactActive)==null?void 0:u.value)&&Ze(i.route.value.query,s.value.query):(c=i.isExactActive)==null?void 0:c.value:(r=i.isActive)==null?void 0:r.value}),href:b(()=>e.to?i==null?void 0:i.route.value.href:e.href)}}const mn=V({href:String,replace:Boolean,to:[String,Object],exact:Boolean},"router");let le=!1;function Ft(e,n){let t=!1,o,a;q&&(ne(()=>{window.addEventListener("popstate",i),o=e==null?void 0:e.beforeEach((s,r,c)=>{le?t?n(c):c():setTimeout(()=>t?n(c):c()),le=!0}),a=e==null?void 0:e.afterEach(()=>{le=!1})}),_(()=>{window.removeEventListener("popstate",i),o==null||o(),a==null||a()}));function i(s){var r;(r=s.state)!=null&&r.replaced||(t=!0,setTimeout(()=>t=!1))}}function ce(e,n){return{x:e.x+n.x,y:e.y+n.y}}function Rt(e,n){return{x:e.x-n.x,y:e.y-n.y}}function Ce(e,n){if(e.side==="top"||e.side==="bottom"){const{side:t,align:o}=e,a=o==="left"?0:o==="center"?n.width/2:o==="right"?n.width:o,i=t==="top"?0:t==="bottom"?n.height:t;return ce({x:a,y:i},n)}else if(e.side==="left"||e.side==="right"){const{side:t,align:o}=e,a=t==="left"?0:t==="right"?n.width:t,i=o==="top"?0:o==="center"?n.height/2:o==="bottom"?n.height:o;return ce({x:a,y:i},n)}return ce({x:n.width/2,y:n.height/2},n)}const qe={static:Ht,connected:_t},Mt=V({locationStrategy:{type:[String,Function],default:"static",validator:e=>typeof e=="function"||e in qe},location:{type:String,default:"bottom"},origin:{type:String,default:"auto"},offset:[Number,String,Array]},"VOverlay-location-strategies");function Nt(e,n){const t=D({}),o=D();q&&ge(()=>!!(n.isActive.value&&e.locationStrategy),i=>{var s,r;B(()=>e.locationStrategy,i),_(()=>{window.removeEventListener("resize",a),o.value=void 0}),window.addEventListener("resize",a,{passive:!0}),typeof e.locationStrategy=="function"?o.value=(s=e.locationStrategy(n,e,t))==null?void 0:s.updateLocation:o.value=(r=qe[e.locationStrategy](n,e,t))==null?void 0:r.updateLocation});function a(i){var s;(s=o.value)==null||s.call(o,i)}return{contentStyles:t,updateLocation:o}}function Ht(){}function Dt(e,n){n?e.style.removeProperty("left"):e.style.removeProperty("right");const t=Ie(e);return n?t.x+=parseFloat(e.style.right||0):t.x-=parseFloat(e.style.left||0),t.y-=parseFloat(e.style.top||0),t}function _t(e,n,t){(Array.isArray(e.target.value)||pt(e.target.value))&&Object.assign(t.value,{position:"fixed",top:0,[e.isRtl.value?"right":"left"]:0});const{preferredAnchor:a,preferredOrigin:i}=Ke(()=>{const d=Oe(n.location,e.isRtl.value),v=n.origin==="overlap"?d:n.origin==="auto"?re(d):Oe(n.origin,e.isRtl.value);return d.side===v.side&&d.align===se(v).align?{preferredAnchor:ke(d),preferredOrigin:ke(v)}:{preferredAnchor:d,preferredOrigin:v}}),[s,r,c,u]=["minWidth","minHeight","maxWidth","maxHeight"].map(d=>b(()=>{const v=parseFloat(n[d]);return isNaN(v)?1/0:v})),f=b(()=>{if(Array.isArray(n.offset))return n.offset;if(typeof n.offset=="string"){const d=n.offset.split(" ").map(parseFloat);return d.length<2&&d.push(0),d}return typeof n.offset=="number"?[n.offset,0]:[0,0]});let y=!1;const w=new ResizeObserver(()=>{y&&h()});B([e.target,e.contentEl],(d,v)=>{let[p,A]=d,[O,E]=v;O&&!Array.isArray(O)&&w.unobserve(O),p&&!Array.isArray(p)&&w.observe(p),E&&w.unobserve(E),A&&w.observe(A)},{immediate:!0}),_(()=>{w.disconnect()});function h(){if(y=!1,requestAnimationFrame(()=>y=!0),!e.target.value||!e.contentEl.value)return;const d=Ve(e.target.value),v=Dt(e.contentEl.value,e.isRtl.value),p=ee(e.contentEl.value),A=12;p.length||(p.push(document.documentElement),e.contentEl.value.style.top&&e.contentEl.value.style.left||(v.x-=parseFloat(document.documentElement.style.getPropertyValue("--v-body-scroll-x")||0),v.y-=parseFloat(document.documentElement.style.getPropertyValue("--v-body-scroll-y")||0)));const O=p.reduce((k,x)=>{const m=x.getBoundingClientRect(),g=new ie({x:x===document.documentElement?0:m.x,y:x===document.documentElement?0:m.y,width:x.clientWidth,height:x.clientHeight});return k?new ie({x:Math.max(k.left,g.left),y:Math.max(k.top,g.top),width:Math.min(k.right,g.right)-Math.max(k.left,g.left),height:Math.min(k.bottom,g.bottom)-Math.max(k.top,g.top)}):g},void 0);O.x+=A,O.y+=A,O.width-=A*2,O.height-=A*2;let E={anchor:a.value,origin:i.value};function I(k){const x=new ie(v),m=Ce(k.anchor,d),g=Ce(k.origin,x);let{x:M,y:F}=Rt(m,g);switch(k.anchor.side){case"top":F-=f.value[0];break;case"bottom":F+=f.value[0];break;case"left":M-=f.value[0];break;case"right":M+=f.value[0];break}switch(k.anchor.align){case"top":F-=f.value[1];break;case"bottom":F+=f.value[1];break;case"left":M-=f.value[1];break;case"right":M+=f.value[1];break}return x.x+=M,x.y+=F,x.width=Math.min(x.width,c.value),x.height=Math.min(x.height,u.value),{overflows:Se(x,O),x:M,y:F}}let R=0,C=0;const l={x:0,y:0},L={x:!1,y:!1};let oe=-1;for(;!(oe++>10);){const{x:k,y:x,overflows:m}=I(E);R+=k,C+=x,v.x+=k,v.y+=x;{const g=Pe(E.anchor),M=m.x.before||m.x.after,F=m.y.before||m.y.after;let Y=!1;if(["x","y"].forEach(T=>{if(T==="x"&&M&&!L.x||T==="y"&&F&&!L.y){const N={anchor:{...E.anchor},origin:{...E.origin}},Z=T==="x"?g==="y"?se:re:g==="y"?re:se;N.anchor=Z(N.anchor),N.origin=Z(N.origin);const{overflows:j}=I(N);(j[T].before<=m[T].before&&j[T].after<=m[T].after||j[T].before+j[T].after<(m[T].before+m[T].after)/2)&&(E=N,Y=L[T]=!0)}}),Y)continue}m.x.before&&(R+=m.x.before,v.x+=m.x.before),m.x.after&&(R-=m.x.after,v.x-=m.x.after),m.y.before&&(C+=m.y.before,v.y+=m.y.before),m.y.after&&(C-=m.y.after,v.y-=m.y.after);{const g=Se(v,O);l.x=O.width-g.x.before-g.x.after,l.y=O.height-g.y.before-g.y.after,R+=g.x.before,v.x+=g.x.before,C+=g.y.before,v.y+=g.y.before}break}const ae=Pe(E.anchor);return Object.assign(t.value,{"--v-overlay-anchor-origin":`${E.anchor.side} ${E.anchor.align}`,transformOrigin:`${E.origin.side} ${E.origin.align}`,top:P(ue(C)),left:e.isRtl.value?void 0:P(ue(R)),right:e.isRtl.value?P(ue(-R)):void 0,minWidth:P(ae==="y"?Math.min(s.value,d.width):s.value),maxWidth:P(Te(Ee(l.x,s.value===1/0?0:s.value,c.value))),maxHeight:P(Te(Ee(l.y,r.value===1/0?0:r.value,u.value)))}),{available:l,contentBox:v}}return B(()=>[a.value,i.value,n.offset,n.minWidth,n.minHeight,n.maxWidth,n.maxHeight],()=>h()),ne(()=>{const d=h();if(!d)return;const{available:v,contentBox:p}=d;p.height>v.y&&requestAnimationFrame(()=>{h(),requestAnimationFrame(()=>{h()})})}),{updateLocation:h}}function ue(e){return Math.round(e*devicePixelRatio)/devicePixelRatio}function Te(e){return Math.ceil(e*devicePixelRatio)/devicePixelRatio}let de=!0;const te=[];function Wt(e){!de||te.length?(te.push(e),me()):(de=!1,e(),me())}let Le=-1;function me(){cancelAnimationFrame(Le),Le=requestAnimationFrame(()=>{const e=te.shift();e&&e(),te.length?me():de=!0})}const Q={none:null,close:$t,block:qt,reposition:jt},Vt=V({scrollStrategy:{type:[String,Function],default:"block",validator:e=>typeof e=="function"||e in Q}},"VOverlay-scroll-strategies");function It(e,n){if(!q)return;let t;ye(async()=>{t==null||t.stop(),n.isActive.value&&e.scrollStrategy&&(t=De(),await new Promise(o=>setTimeout(o)),t.active&&t.run(()=>{var o;typeof e.scrollStrategy=="function"?e.scrollStrategy(n,e,t):(o=Q[e.scrollStrategy])==null||o.call(Q,n,e,t)}))}),_(()=>{t==null||t.stop()})}function $t(e){function n(t){e.isActive.value=!1}je(e.targetEl.value??e.contentEl.value,n)}function qt(e,n){var s;const t=(s=e.root.value)==null?void 0:s.offsetParent,o=[...new Set([...ee(e.targetEl.value,n.contained?t:void 0),...ee(e.contentEl.value,n.contained?t:void 0)])].filter(r=>!r.classList.contains("v-overlay-scroll-blocked")),a=window.innerWidth-document.documentElement.offsetWidth,i=(r=>he(r)&&r)(t||document.documentElement);i&&e.root.value.classList.add("v-overlay--scroll-blocked"),o.forEach((r,c)=>{r.style.setProperty("--v-body-scroll-x",P(-r.scrollLeft)),r.style.setProperty("--v-body-scroll-y",P(-r.scrollTop)),r!==document.documentElement&&r.style.setProperty("--v-scrollbar-offset",P(a)),r.classList.add("v-overlay-scroll-blocked")}),_(()=>{o.forEach((r,c)=>{const u=parseFloat(r.style.getPropertyValue("--v-body-scroll-x")),f=parseFloat(r.style.getPropertyValue("--v-body-scroll-y")),y=r.style.scrollBehavior;r.style.scrollBehavior="auto",r.style.removeProperty("--v-body-scroll-x"),r.style.removeProperty("--v-body-scroll-y"),r.style.removeProperty("--v-scrollbar-offset"),r.classList.remove("v-overlay-scroll-blocked"),r.scrollLeft=-u,r.scrollTop=-f,r.style.scrollBehavior=y}),i&&e.root.value.classList.remove("v-overlay--scroll-blocked")})}function jt(e,n,t){let o=!1,a=-1,i=-1;function s(r){Wt(()=>{var f,y;const c=performance.now();(y=(f=e.updateLocation).value)==null||y.call(f,r),o=(performance.now()-c)/(1e3/60)>2})}i=(typeof requestIdleCallback>"u"?r=>r():requestIdleCallback)(()=>{t.run(()=>{je(e.targetEl.value??e.contentEl.value,r=>{o?(cancelAnimationFrame(a),a=requestAnimationFrame(()=>{a=requestAnimationFrame(()=>{s(r)})})):s(r)})})}),_(()=>{typeof cancelIdleCallback<"u"&&cancelIdleCallback(i),cancelAnimationFrame(a)})}function je(e,n){const t=[document,...ee(e)];t.forEach(o=>{o.addEventListener("scroll",n,{passive:!0})}),_(()=>{t.forEach(o=>{o.removeEventListener("scroll",n)})})}const zt=Symbol.for("vuetify:v-menu"),Yt=V({closeDelay:[Number,String],openDelay:[Number,String]},"delay");function Xt(e,n){let t=()=>{};function o(s){t==null||t();const r=Number(s?e.openDelay:e.closeDelay);return new Promise(c=>{t=Je(r,()=>{n==null||n(s),c(s)})})}function a(){return o(!0)}function i(){return o(!1)}return{clearDelay:t,runOpenDelay:a,runCloseDelay:i}}const Ut=V({target:[String,Object],activator:[String,Object],activatorProps:{type:Object,default:()=>({})},openOnClick:{type:Boolean,default:void 0},openOnHover:Boolean,openOnFocus:{type:Boolean,default:void 0},closeOnContentClick:Boolean,...Yt()},"VOverlay-activator");function Gt(e,n){let{isActive:t,isTop:o}=n;const a=G("useActivator"),i=D();let s=!1,r=!1,c=!0;const u=b(()=>e.openOnFocus||e.openOnFocus==null&&e.openOnHover),f=b(()=>e.openOnClick||e.openOnClick==null&&!e.openOnHover&&!u.value),{runOpenDelay:y,runCloseDelay:w}=Xt(e,l=>{l===(e.openOnHover&&s||u.value&&r)&&!(e.openOnHover&&t.value&&!o.value)&&(t.value!==l&&(c=!0),t.value=l)}),h=D(),d={onClick:l=>{l.stopPropagation(),i.value=l.currentTarget||l.target,t.value||(h.value=[l.clientX,l.clientY]),t.value=!t.value},onMouseenter:l=>{var L;(L=l.sourceCapabilities)!=null&&L.firesTouchEvents||(s=!0,i.value=l.currentTarget||l.target,y())},onMouseleave:l=>{s=!1,w()},onFocus:l=>{Qe(l.target,":focus-visible")!==!1&&(r=!0,l.stopPropagation(),i.value=l.currentTarget||l.target,y())},onBlur:l=>{r=!1,l.stopPropagation(),w()}},v=b(()=>{const l={};return f.value&&(l.onClick=d.onClick),e.openOnHover&&(l.onMouseenter=d.onMouseenter,l.onMouseleave=d.onMouseleave),u.value&&(l.onFocus=d.onFocus,l.onBlur=d.onBlur),l}),p=b(()=>{const l={};if(e.openOnHover&&(l.onMouseenter=()=>{s=!0,y()},l.onMouseleave=()=>{s=!1,w()}),u.value&&(l.onFocusin=()=>{r=!0,y()},l.onFocusout=()=>{r=!1,w()}),e.closeOnContentClick){const L=_e(zt,null);l.onClick=()=>{t.value=!1,L==null||L.closeParents()}}return l}),A=b(()=>{const l={};return e.openOnHover&&(l.onMouseenter=()=>{c&&(s=!0,c=!1,y())},l.onMouseleave=()=>{s=!1,w()}),l});B(o,l=>{l&&(e.openOnHover&&!s&&(!u.value||!r)||u.value&&!r&&(!e.openOnHover||!s))&&(t.value=!1)}),B(t,l=>{l||setTimeout(()=>{h.value=void 0})},{flush:"post"});const O=D();ye(()=>{O.value&&ne(()=>{i.value=xe(O.value)})});const E=D(),I=b(()=>e.target==="cursor"&&h.value?h.value:E.value?xe(E.value):ze(e.target,a)||i.value),R=b(()=>Array.isArray(I.value)?void 0:I.value);let C;return B(()=>!!e.activator,l=>{l&&q?(C=De(),C.run(()=>{Zt(e,a,{activatorEl:i,activatorEvents:v})})):C&&C.stop()},{flush:"post",immediate:!0}),_(()=>{C==null||C.stop()}),{activatorEl:i,activatorRef:O,target:I,targetEl:R,targetRef:E,activatorEvents:v,contentEvents:p,scrimEvents:A}}function Zt(e,n,t){let{activatorEl:o,activatorEvents:a}=t;B(()=>e.activator,(c,u)=>{if(u&&c!==u){const f=r(u);f&&s(f)}c&&ne(()=>i())},{immediate:!0}),B(()=>e.activatorProps,()=>{i()}),_(()=>{s()});function i(){let c=arguments.length>0&&arguments[0]!==void 0?arguments[0]:r(),u=arguments.length>1&&arguments[1]!==void 0?arguments[1]:e.activatorProps;c&&St(c,$(a.value,u))}function s(){let c=arguments.length>0&&arguments[0]!==void 0?arguments[0]:r(),u=arguments.length>1&&arguments[1]!==void 0?arguments[1]:e.activatorProps;c&&Ot(c,$(a.value,u))}function r(){let c=arguments.length>0&&arguments[0]!==void 0?arguments[0]:e.activator;const u=ze(c,n);return o.value=(u==null?void 0:u.nodeType)===Node.ELEMENT_NODE?u:void 0,o.value}}function ze(e,n){var o,a;if(!e)return;let t;if(e==="parent"){let i=(a=(o=n==null?void 0:n.proxy)==null?void 0:o.$el)==null?void 0:a.parentNode;for(;i!=null&&i.hasAttribute("data-no-activator");)i=i.parentNode;t=i}else typeof e=="string"?t=document.querySelector(e):"$el"in e?t=e.$el:t=e;return t}function Kt(){if(!q)return z(!1);const{ssr:e}=et();if(e){const n=z(!1);return tt(()=>{n.value=!0}),n}else return z(!0)}const Jt=V({eager:Boolean},"lazy");function Qt(e,n){const t=z(!1),o=b(()=>t.value||e.eager||n.value);B(n,()=>t.value=!0);function a(){e.eager||(t.value=!1)}return{isBooted:t,hasContent:o,onAfterLeave:a}}function en(){const n=G("useScopeId").vnode.scopeId;return{scopeId:n?{[n]:""}:void 0}}const Be=Symbol.for("vuetify:stack"),X=We([]);function tn(e,n,t){const o=G("useStack"),a=!t,i=_e(Be,void 0),s=We({activeChildren:new Set});nt(Be,s);const r=z(+n.value);ge(e,()=>{var y;const f=(y=X.at(-1))==null?void 0:y[1];r.value=f?f+10:+n.value,a&&X.push([o.uid,r.value]),i==null||i.activeChildren.add(o.uid),_(()=>{if(a){const w=at(X).findIndex(h=>h[0]===o.uid);X.splice(w,1)}i==null||i.activeChildren.delete(o.uid)})});const c=z(!0);a&&ye(()=>{var y;const f=((y=X.at(-1))==null?void 0:y[0])===o.uid;setTimeout(()=>c.value=f)});const u=b(()=>!s.activeChildren.size);return{globalTop:ot(c),localTop:u,stackStyles:b(()=>({zIndex:r.value}))}}function nn(e){return{teleportTarget:b(()=>{const t=e.value;if(t===!0||!q)return;const o=t===!1?document.body:typeof t=="string"?document.querySelector(t):t;if(o==null)return;let a=o.querySelector(":scope > .v-overlay-container");return a||(a=document.createElement("div"),a.className="v-overlay-container",o.appendChild(a)),a})}}function on(){return!0}function Ye(e,n,t){if(!e||Xe(e,t)===!1)return!1;const o=$e(n);if(typeof ShadowRoot<"u"&&o instanceof ShadowRoot&&o.host===e.target)return!1;const a=(typeof t.value=="object"&&t.value.include||(()=>[]))();return a.push(n),!a.some(i=>i==null?void 0:i.contains(e.target))}function Xe(e,n){return(typeof n.value=="object"&&n.value.closeConditional||on)(e)}function an(e,n,t){const o=typeof t.value=="function"?t.value:t.value.handler;n._clickOutside.lastMousedownWasOutside&&Ye(e,n,t)&&setTimeout(()=>{Xe(e,t)&&o&&o(e)},0)}function Fe(e,n){const t=$e(e);n(document),typeof ShadowRoot<"u"&&t instanceof ShadowRoot&&n(t)}const rn={mounted(e,n){const t=a=>an(a,e,n),o=a=>{e._clickOutside.lastMousedownWasOutside=Ye(a,e,n)};Fe(e,a=>{a.addEventListener("click",t,!0),a.addEventListener("mousedown",o,!0)}),e._clickOutside||(e._clickOutside={lastMousedownWasOutside:!1}),e._clickOutside[n.instance.$.uid]={onClick:t,onMousedown:o}},unmounted(e,n){e._clickOutside&&(Fe(e,t=>{var i;if(!t||!((i=e._clickOutside)!=null&&i[n.instance.$.uid]))return;const{onClick:o,onMousedown:a}=e._clickOutside[n.instance.$.uid];t.removeEventListener("click",o,!0),t.removeEventListener("mousedown",a,!0)}),delete e._clickOutside[n.instance.$.uid])}};function sn(e){const{modelValue:n,color:t,...o}=e;return H(fe,{name:"fade-transition",appear:!0},{default:()=>[e.modelValue&&H("div",$({class:["v-overlay__scrim",e.color.backgroundColorClasses.value],style:e.color.backgroundColorStyles.value},o),null)]})}const ln=V({absolute:Boolean,attach:[Boolean,String,Object],closeOnBack:{type:Boolean,default:!0},contained:Boolean,contentClass:null,contentProps:null,disabled:Boolean,opacity:[Number,String],noClickAnimation:Boolean,modelValue:Boolean,persistent:Boolean,scrim:{type:[Boolean,String],default:!0},zIndex:{type:[Number,String],default:2e3},...Ut(),...it(),...Ct(),...Jt(),...Mt(),...Vt(),...rt(),...bt()},"VOverlay"),gn=Ne()({name:"VOverlay",directives:{ClickOutside:rn},inheritAttrs:!1,props:{_disableGlobalStack:Boolean,...ln()},emits:{"click:outside":e=>!0,"update:modelValue":e=>!0,afterLeave:()=>!0},setup(e,n){let{slots:t,attrs:o,emit:a}=n;const i=st(e,"modelValue"),s=b({get:()=>i.value,set:S=>{S&&e.disabled||(i.value=S)}}),{teleportTarget:r}=nn(b(()=>e.attach||e.contained)),{themeClasses:c}=lt(e),{rtlClasses:u,isRtl:f}=ct(),{hasContent:y,onAfterLeave:w}=Qt(e,s),h=Et(b(()=>typeof e.scrim=="string"?e.scrim:null)),{globalTop:d,localTop:v,stackStyles:p}=tn(s,He(e,"zIndex"),e._disableGlobalStack),{activatorEl:A,activatorRef:O,target:E,targetEl:I,targetRef:R,activatorEvents:C,contentEvents:l,scrimEvents:L}=Gt(e,{isActive:s,isTop:v}),{dimensionStyles:oe}=Tt(e),ae=Kt(),{scopeId:k}=en();B(()=>e.disabled,S=>{S&&(s.value=!1)});const x=D(),m=D(),g=D(),{contentStyles:M,updateLocation:F}=Nt(e,{isRtl:f,contentEl:g,target:E,isActive:s});It(e,{root:x,contentEl:g,targetEl:I,isActive:s,updateLocation:F});function Y(S){a("click:outside",S),e.persistent?K():s.value=!1}function T(S){return s.value&&d.value&&(!e.scrim||S.target===m.value)}q&&B(s,S=>{S?window.addEventListener("keydown",N):window.removeEventListener("keydown",N)},{immediate:!0}),ut(()=>{q&&window.removeEventListener("keydown",N)});function N(S){var W,we;S.key==="Escape"&&d.value&&(e.persistent?K():(s.value=!1,(W=g.value)!=null&&W.contains(document.activeElement)&&((we=A.value)==null||we.focus())))}const Z=Bt();ge(()=>e.closeOnBack,()=>{Ft(Z,S=>{d.value&&s.value?(S(!1),e.persistent?K():s.value=!1):S()})});const j=D();B(()=>s.value&&(e.absolute||e.contained)&&r.value==null,S=>{if(S){const W=kt(x.value);W&&W!==document.scrollingElement&&(j.value=W.scrollTop)}});function K(){e.noClickAnimation||g.value&&U(g.value,[{transformOrigin:"center"},{transform:"scale(1.03)"},{transformOrigin:"center"}],{duration:150,easing:ve})}function Ue(){w(),a("afterLeave")}return ft(()=>{var S;return H(yt,null,[(S=t.activator)==null?void 0:S.call(t,{isActive:s.value,props:$({ref:O,targetRef:R},C.value,e.activatorProps)}),ae.value&&y.value&&H(vt,{disabled:!r.value,to:r.value},{default:()=>[H("div",$({class:["v-overlay",{"v-overlay--absolute":e.absolute||e.contained,"v-overlay--active":s.value,"v-overlay--contained":e.contained},c.value,u.value,e.class],style:[p.value,{"--v-overlay-opacity":e.opacity,top:P(j.value)},e.style],ref:x},k,o),[H(sn,$({color:h,modelValue:s.value&&!!e.scrim,ref:m},L.value),null),H(xt,{appear:!0,persisted:!0,transition:e.transition,target:E.value,onAfterLeave:Ue},{default:()=>{var W;return[dt(H("div",$({ref:g,class:["v-overlay__content",e.contentClass],style:[oe.value,M.value]},l.value,e.contentProps),[(W=t.default)==null?void 0:W.call(t,{isActive:s})]),[[mt,s.value],[gt("click-outside"),{handler:Y,closeConditional:T,include:()=>[A.value]}]])]}})])]})])}),{activatorEl:A,scrimEl:m,target:E,animateClick:K,contentEl:g,globalTop:d,localTop:v,updateLocation:F}}});export{vn as V,Ct as a,Tt as b,mn as c,dn as d,ln as e,en as f,gn as g,zt as h,kt as i,Jt as m,Qt as u};
