import{O as ae}from"./OCPPmode-eMgl-rFM.js";import{T as ie}from"./Timemode-LDsY8KD-.js";import{B as le}from"./Bluetooth-TLZolLZL.js";import{W as ue}from"./Wifi-v1yntfpW.js";import{L as re}from"./Lte-318sMogr.js";import{p as L,C as ce,g as R,r as X,D as y,u as H,c as a,F as de,E as M,G as j,H as ve,I as B,J as fe,K as me,L as O,M as D,m as F,N as he,O as ge,P as be,Q as ye,R as G,S as xe,T as _e,U,V as Se,W as Te,X as Ce,Y as Be,Z as Ve,_ as N,j as P,o as q,f as J,w as h,k as E,e as we}from"./index-n3doT2xZ.js";import{m as ke,V as Y}from"./VBtn-OpldWicy.js";import{u as Pe,a as $e,b as Ee,d as We,M as Ie}from"./VInput--Uj0OPHf.js";import{f as Xe,a as Ye,s as Le}from"./VTextField-TYuIyVWU.js";import{c as Re,m as He,V as A,u as Me,a as Oe,b as Ge}from"./VSelect-_y4GbPnH.js";import{m as ze,u as Ae}from"./VOverlay-JQMIwyhp.js";import"./Nbt-nxGH-SQC.js";import"./VSwitch-ljH2Tb-e.js";import"./VDefaultsProvider-xp_ngy5e.js";import"./VSelectionControl-IGaoy9TU.js";import"./VProgressCircular-SDLFGTUW.js";const je=Re("v-card-text"),K=Symbol.for("vuetify:v-tabs"),De=L({fixed:Boolean,sliderColor:String,hideSlider:Boolean,direction:{type:String,default:"horizontal"},...ce(ke({selectedClass:"v-tab--selected",variant:"text"}),["active","block","flat","location","position","symbol"])},"VTab"),$=R()({name:"VTab",props:De(),setup(e,t){let{slots:o,attrs:n}=t;const{textColorClasses:i,textColorStyles:r}=Pe(e,"sliderColor"),s=X(),d=X(),l=y(()=>e.direction==="horizontal"),c=y(()=>{var m,g;return((g=(m=s.value)==null?void 0:m.group)==null?void 0:g.isSelected.value)??!1});function _(m){var S,f;let{value:g}=m;if(g){const V=(f=(S=s.value)==null?void 0:S.$el.parentElement)==null?void 0:f.querySelector(".v-tab--selected .v-tab__slider"),w=d.value;if(!V||!w)return;const I=getComputedStyle(V).color,T=V.getBoundingClientRect(),C=w.getBoundingClientRect(),u=l.value?"x":"y",v=l.value?"X":"Y",b=l.value?"right":"bottom",x=l.value?"width":"height",ee=T[u],te=C[u],k=ee>te?T[b]-C[b]:T[u]-C[u],oe=Math.sign(k)>0?l.value?"right":"bottom":Math.sign(k)<0?l.value?"left":"top":"center",ne=(Math.abs(k)+(Math.sign(k)<0?T[x]:C[x]))/Math.max(T[x],C[x])||0,se=T[x]/C[x]||0,z=1.5;Ye(w,{backgroundColor:[I,"currentcolor"],transform:[`translate${v}(${k}px) scale${v}(${se})`,`translate${v}(${k/z}px) scale${v}(${(ne-1)/z+1})`,"none"],transformOrigin:Array(3).fill(oe)},{duration:225,easing:Le})}}return H(()=>{const m=Y.filterProps(e);return a(Y,M({symbol:K,ref:s,class:["v-tab",e.class],style:e.style,tabindex:c.value?0:-1,role:"tab","aria-selected":String(c.value),active:!1},m,n,{block:e.fixed,maxWidth:e.fixed?300:void 0,"onGroup:selected":_}),{...o,default:()=>{var g;return a(de,null,[((g=o.default)==null?void 0:g.call(o))??e.text,!e.hideSlider&&a("div",{ref:d,class:["v-tab__slider",i.value],style:r.value},null)])}})}),Xe({},s)}});function Fe(e){return e?e.map(t=>me(t)?t:{text:t,value:t}):[]}const Ue=L({alignTabs:{type:String,default:"start"},color:String,fixedTabs:Boolean,items:{type:Array,default:()=>[]},stacked:Boolean,bgColor:String,grow:Boolean,height:{type:[Number,String],default:void 0},hideSlider:Boolean,sliderColor:String,...He({mandatory:"force"}),...$e(),...j()},"VTabs"),Ne=R()({name:"VTabs",props:Ue(),emits:{"update:modelValue":e=>!0},setup(e,t){let{slots:o}=t;const n=ve(e,"modelValue"),i=y(()=>Fe(e.items)),{densityClasses:r}=Ee(e),{backgroundColorClasses:s,backgroundColorStyles:d}=We(B(e,"bgColor"));return fe({VTab:{color:B(e,"color"),direction:B(e,"direction"),stacked:B(e,"stacked"),fixed:B(e,"fixedTabs"),sliderColor:B(e,"sliderColor"),hideSlider:B(e,"hideSlider")}}),H(()=>{const l=A.filterProps(e);return a(A,M(l,{modelValue:n.value,"onUpdate:modelValue":c=>n.value=c,class:["v-tabs",`v-tabs--${e.direction}`,`v-tabs--align-tabs-${e.alignTabs}`,{"v-tabs--fixed-tabs":e.fixedTabs,"v-tabs--grow":e.grow,"v-tabs--stacked":e.stacked},r.value,s.value,e.class],style:[{"--v-tabs-height":O(e.height)},d.value,e.style],role:"tablist",symbol:K}),{default:()=>[o.default?o.default():i.value.map(c=>a($,M(c,{key:c.text}),null))]})}),{}}}),qe=e=>{const{touchstartX:t,touchendX:o,touchstartY:n,touchendY:i}=e,r=.5,s=16;e.offsetX=o-t,e.offsetY=i-n,Math.abs(e.offsetY)<r*Math.abs(e.offsetX)&&(e.left&&o<t-s&&e.left(e),e.right&&o>t+s&&e.right(e)),Math.abs(e.offsetX)<r*Math.abs(e.offsetY)&&(e.up&&i<n-s&&e.up(e),e.down&&i>n+s&&e.down(e))};function Je(e,t){var n;const o=e.changedTouches[0];t.touchstartX=o.clientX,t.touchstartY=o.clientY,(n=t.start)==null||n.call(t,{originalEvent:e,...t})}function Ke(e,t){var n;const o=e.changedTouches[0];t.touchendX=o.clientX,t.touchendY=o.clientY,(n=t.end)==null||n.call(t,{originalEvent:e,...t}),qe(t)}function Qe(e,t){var n;const o=e.changedTouches[0];t.touchmoveX=o.clientX,t.touchmoveY=o.clientY,(n=t.move)==null||n.call(t,{originalEvent:e,...t})}function Ze(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const t={touchstartX:0,touchstartY:0,touchendX:0,touchendY:0,touchmoveX:0,touchmoveY:0,offsetX:0,offsetY:0,left:e.left,right:e.right,up:e.up,down:e.down,start:e.start,move:e.move,end:e.end};return{touchstart:o=>Je(o,t),touchend:o=>Ke(o,t),touchmove:o=>Qe(o,t)}}function pe(e,t){var d;const o=t.value,n=o!=null&&o.parent?e.parentElement:e,i=(o==null?void 0:o.options)??{passive:!0},r=(d=t.instance)==null?void 0:d.$.uid;if(!n||!r)return;const s=Ze(t.value);n._touchHandlers=n._touchHandlers??Object.create(null),n._touchHandlers[r]=s,D(s).forEach(l=>{n.addEventListener(l,s[l],i)})}function et(e,t){var r,s;const o=(r=t.value)!=null&&r.parent?e.parentElement:e,n=(s=t.instance)==null?void 0:s.$.uid;if(!(o!=null&&o._touchHandlers)||!n)return;const i=o._touchHandlers[n];D(i).forEach(d=>{o.removeEventListener(d,i[d])}),delete o._touchHandlers[n]}const Q={mounted:pe,unmounted:et},tt=Q,Z=Symbol.for("vuetify:v-window"),p=Symbol.for("vuetify:v-window-group"),ot=L({continuous:Boolean,nextIcon:{type:[Boolean,String,Function,Object],default:"$next"},prevIcon:{type:[Boolean,String,Function,Object],default:"$prev"},reverse:Boolean,showArrows:{type:[Boolean,String],validator:e=>typeof e=="boolean"||e==="hover"},touch:{type:[Object,Boolean],default:void 0},direction:{type:String,default:"horizontal"},modelValue:null,disabled:Boolean,selectedClass:{type:String,default:"v-window-item--active"},mandatory:{type:[Boolean,String],default:"force"},...F(),...j(),...he()},"VWindow"),nt=R()({name:"VWindow",directives:{Touch:Q},props:ot(),emits:{"update:modelValue":e=>!0},setup(e,t){let{slots:o}=t;const{themeClasses:n}=ge(e),{isRtl:i}=be(),{t:r}=ye(),s=Me(e,p),d=X(),l=y(()=>i.value?!e.reverse:e.reverse),c=G(!1),_=y(()=>{const u=e.direction==="vertical"?"y":"x",b=(l.value?!c.value:c.value)?"-reverse":"";return`v-window-${u}${b}-transition`}),m=G(0),g=X(void 0),S=y(()=>s.items.value.findIndex(u=>s.selected.value.includes(u.id)));xe(S,(u,v)=>{const b=s.items.value.length,x=b-1;b<=2?c.value=u<v:u===x&&v===0?c.value=!0:u===0&&v===x?c.value=!1:c.value=u<v}),_e(Z,{transition:_,isReversed:c,transitionCount:m,transitionHeight:g,rootRef:d});const f=y(()=>e.continuous||S.value!==0),V=y(()=>e.continuous||S.value!==s.items.value.length-1);function w(){f.value&&s.prev()}function I(){V.value&&s.next()}const T=y(()=>{const u=[],v={icon:i.value?e.nextIcon:e.prevIcon,class:`v-window__${l.value?"right":"left"}`,onClick:s.prev,"aria-label":r("$vuetify.carousel.prev")};u.push(f.value?o.prev?o.prev({props:v}):a(Y,v,null):a("div",null,null));const b={icon:i.value?e.prevIcon:e.nextIcon,class:`v-window__${l.value?"left":"right"}`,onClick:s.next,"aria-label":r("$vuetify.carousel.next")};return u.push(V.value?o.next?o.next({props:b}):a(Y,b,null):a("div",null,null)),u}),C=y(()=>e.touch===!1?e.touch:{...{left:()=>{l.value?w():I()},right:()=>{l.value?I():w()},start:v=>{let{originalEvent:b}=v;b.stopPropagation()}},...e.touch===!0?{}:e.touch});return H(()=>U(a(e.tag,{ref:d,class:["v-window",{"v-window--show-arrows-on-hover":e.showArrows==="hover"},n.value,e.class],style:e.style},{default:()=>{var u,v;return[a("div",{class:"v-window__container",style:{height:g.value}},[(u=o.default)==null?void 0:u.call(o,{group:s}),e.showArrows!==!1&&a("div",{class:"v-window__controls"},[T.value])]),(v=o.additional)==null?void 0:v.call(o,{group:s})]}}),[[Se("touch"),C.value]])),{group:s}}}),st=L({reverseTransition:{type:[Boolean,String],default:void 0},transition:{type:[Boolean,String],default:void 0},...F(),...Oe(),...ze()},"VWindowItem"),W=R()({name:"VWindowItem",directives:{Touch:tt},props:st(),emits:{"group:selected":e=>!0},setup(e,t){let{slots:o}=t;const n=Te(Z),i=Ge(e,p),{isBooted:r}=Ce();if(!n||!i)throw new Error("[Vuetify] VWindowItem must be used inside VWindow");const s=G(!1),d=y(()=>r.value&&(n.isReversed.value?e.reverseTransition!==!1:e.transition!==!1));function l(){!s.value||!n||(s.value=!1,n.transitionCount.value>0&&(n.transitionCount.value-=1,n.transitionCount.value===0&&(n.transitionHeight.value=void 0)))}function c(){var f;s.value||!n||(s.value=!0,n.transitionCount.value===0&&(n.transitionHeight.value=O((f=n.rootRef.value)==null?void 0:f.clientHeight)),n.transitionCount.value+=1)}function _(){l()}function m(f){s.value&&Ve(()=>{!d.value||!s.value||!n||(n.transitionHeight.value=O(f.clientHeight))})}const g=y(()=>{const f=n.isReversed.value?e.reverseTransition:e.transition;return d.value?{name:typeof f!="string"?n.transition.value:f,onBeforeEnter:c,onAfterEnter:l,onEnterCancelled:_,onBeforeLeave:c,onAfterLeave:l,onLeaveCancelled:_,onEnter:m}:!1}),{hasContent:S}=Ae(e,i.isSelected);return H(()=>a(Ie,{transition:g.value,disabled:!r.value},{default:()=>{var f;return[U(a("div",{class:["v-window-item",i.selectedClass.value,e.class],style:e.style},[S.value&&((f=o.default)==null?void 0:f.call(o))]),[[Be,i.isSelected.value]])]}})),{groupItem:i}}}),at={data(){return{tab:"",Bluetoothstatus:!1}},components:{OCPPmode:ae,Timemode:ie,Bluetooth:le,Wifi:ue,Lte:re}},it={class:"settingwrap"};function lt(e,t,o,n,i,r){const s=P("Bluetooth"),d=P("Wifi"),l=P("Lte"),c=P("OCPPmode"),_=P("Timemode");return q(),J("div",it,[a(Ne,{modelValue:i.tab,"onUpdate:modelValue":t[0]||(t[0]=m=>i.tab=m),"show-arrows":"","hide-slider":"true",class:"tab","selected-class":"select"},{default:h(()=>[a($,{value:"Bluetooth"},{default:h(()=>[E("Bluetooth")]),_:1}),a($,{value:"Wifi"},{default:h(()=>[E("Wifi")]),_:1}),a($,{value:"LTE"},{default:h(()=>[E("LTE")]),_:1}),a($,{value:"Ocpp"},{default:h(()=>[E("OCPP")]),_:1}),a($,{value:"Time"},{default:h(()=>[E("Time")]),_:1})]),_:1},8,["modelValue"]),a(je,null,{default:h(()=>[a(nt,{modelValue:i.tab,"onUpdate:modelValue":t[1]||(t[1]=m=>i.tab=m)},{default:h(()=>[a(W,{value:"Bluetooth",style:{color:"white",padding:"0 18px","margin-top":"174px"}},{default:h(()=>[a(s)]),_:1}),a(W,{value:"Wifi",style:{color:"white",padding:"0 18px","margin-top":"174px"}},{default:h(()=>[a(d)]),_:1}),a(W,{value:"LTE",style:{color:"white",padding:"0 18px","margin-top":"174px"}},{default:h(()=>[a(l)]),_:1}),a(W,{value:"Ocpp",style:{color:"white",padding:"0 18px"}},{default:h(()=>[a(c)]),_:1}),a(W,{value:"Time"},{default:h(()=>[a(_)]),_:1})]),_:1},8,["modelValue"])]),_:1})])}const ut=N(at,[["render",lt]]),rt={components:{Setting:ut},mounted(){var e=document.body.clientWidth;e<=576&&this.$router.push("/"),console.log(e);const t=we();t.curpage="Setting"}};function ct(e,t,o,n,i,r){const s=P("Setting");return q(),J("div",null,[a(s)])}const Pt=N(rt,[["render",ct]]);export{Pt as default};
