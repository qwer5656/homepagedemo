import{p as U,m as Q,g as j,D as y,u as z,c as s,U as ee,Y as ae,as as X,ah as Z,N as fe,O as ve,P as me,av as he,r as k,I as ge,S as be,L as ye,F as M,E as W,aU as xe,b4 as Ce,aC as _e,H as Pe,aw as Ie,V as Ve,b5 as pe,Z as ne,b6 as we}from"./index-vVj6KyqG.js";import{w as Re,G as Se,M as Fe,o as Be,p as Oe,f as Te,j as $e,r as ke,l as ie,H as Ae,h as Le,d as De,u as Ee,L as Me,y as We,k as Ne,n as le}from"./VInput--U0vz1Vj.js";class N{constructor(a){let{x:l,y:i,width:t,height:n}=a;this.x=l,this.y=i,this.width=t,this.height=n}get top(){return this.y}get bottom(){return this.y+this.height}get left(){return this.x}get right(){return this.x+this.width}}function at(e,a){return{x:{before:Math.max(0,a.left-e.left),after:Math.max(0,e.right-a.right)},y:{before:Math.max(0,a.top-e.top),after:Math.max(0,e.bottom-a.bottom)}}}function it(e){return Array.isArray(e)?new N({x:e[0],y:e[1],width:0,height:0}):e.getBoundingClientRect()}function Ue(e){const a=e.getBoundingClientRect(),l=getComputedStyle(e),i=l.transform;if(i){let t,n,r,o,d;if(i.startsWith("matrix3d("))t=i.slice(9,-1).split(/, /),n=+t[0],r=+t[5],o=+t[12],d=+t[13];else if(i.startsWith("matrix("))t=i.slice(7,-1).split(/, /),n=+t[0],r=+t[3],o=+t[4],d=+t[5];else return new N(a);const c=l.transformOrigin,v=a.x-o-(1-n)*parseFloat(c),f=a.y-d-(1-r)*parseFloat(c.slice(c.indexOf(" ")+1)),_=n?a.width/n:e.offsetWidth+1,w=r?a.height/r:e.offsetHeight+1;return new N({x:v,y:f,width:_,height:w})}else return new N(a)}function je(e,a,l){if(typeof e.animate>"u")return{finished:Promise.resolve()};let i;try{i=e.animate(a,l)}catch{return{finished:Promise.resolve()}}return typeof i.finished>"u"&&(i.finished=new Promise(t=>{i.onfinish=()=>{t(i)}})),i}const ze="cubic-bezier(0.4, 0, 0.2, 1)",st="cubic-bezier(0.0, 0, 0.2, 1)",rt="cubic-bezier(0.4, 0, 1, 1)",J=Symbol("Forwarded refs");function K(e,a){let l=e;for(;l;){const i=Reflect.getOwnPropertyDescriptor(l,a);if(i)return i;l=Object.getPrototypeOf(l)}}function qe(e){for(var a=arguments.length,l=new Array(a>1?a-1:0),i=1;i<a;i++)l[i-1]=arguments[i];return e[J]=l,new Proxy(e,{get(t,n){if(Reflect.has(t,n))return Reflect.get(t,n);if(!(typeof n=="symbol"||n.startsWith("$")||n.startsWith("__"))){for(const r of l)if(r.value&&Reflect.has(r.value,n)){const o=Reflect.get(r.value,n);return typeof o=="function"?o.bind(r.value):o}}},has(t,n){if(Reflect.has(t,n))return!0;if(typeof n=="symbol"||n.startsWith("$")||n.startsWith("__"))return!1;for(const r of l)if(r.value&&Reflect.has(r.value,n))return!0;return!1},set(t,n,r){if(Reflect.has(t,n))return Reflect.set(t,n,r);if(typeof n=="symbol"||n.startsWith("$")||n.startsWith("__"))return!1;for(const o of l)if(o.value&&Reflect.has(o.value,n))return Reflect.set(o.value,n,r);return!1},getOwnPropertyDescriptor(t,n){var o;const r=Reflect.getOwnPropertyDescriptor(t,n);if(r)return r;if(!(typeof n=="symbol"||n.startsWith("$")||n.startsWith("__"))){for(const d of l){if(!d.value)continue;const c=K(d.value,n)??("_"in d.value?K((o=d.value._)==null?void 0:o.setupState,n):void 0);if(c)return c}for(const d of l){const c=d.value&&d.value[J];if(!c)continue;const v=c.slice();for(;v.length;){const f=v.shift(),_=K(f.value,n);if(_)return _;const w=f.value&&f.value[J];w&&v.push(...w)}}}}})}const He=U({active:Boolean,max:[Number,String],value:{type:[Number,String],default:0},...Q(),...Re({transition:{component:Se}})},"VCounter"),Ye=j()({name:"VCounter",functional:!0,props:He(),setup(e,a){let{slots:l}=a;const i=y(()=>e.max?`${e.value} / ${e.max}`:String(e.value));return z(()=>s(Fe,{transition:e.transition},{default:()=>[ee(s("div",{class:["v-counter",e.class],style:e.style},[l.default?l.default({counter:i.value,max:e.max,value:e.value}):i.value]),[[ae,e.active]])]})),{}}}),Ge=U({floating:Boolean,...Q()},"VFieldLabel"),E=j()({name:"VFieldLabel",props:Ge(),setup(e,a){let{slots:l}=a;return z(()=>s(Be,{class:["v-field-label",{"v-field-label--floating":e.floating},e.class],style:e.style,"aria-hidden":e.floating||void 0},l)),{}}}),Xe=["underlined","outlined","filled","solo","solo-inverted","solo-filled","plain"],se=U({appendInnerIcon:X,bgColor:String,clearable:Boolean,clearIcon:{type:X,default:"$clear"},active:Boolean,centerAffix:{type:Boolean,default:void 0},color:String,baseColor:String,dirty:Boolean,disabled:{type:Boolean,default:null},error:Boolean,flat:Boolean,label:String,persistentClear:Boolean,prependInnerIcon:X,reverse:Boolean,singleLine:Boolean,variant:{type:String,default:"filled",validator:e=>Xe.includes(e)},"onClick:clear":Z(),"onClick:appendInner":Z(),"onClick:prependInner":Z(),...Q(),...Oe(),...Te(),...fe()},"VField"),re=j()({name:"VField",inheritAttrs:!1,props:{id:String,...$e(),...se()},emits:{"update:focused":e=>!0,"update:modelValue":e=>!0},setup(e,a){let{attrs:l,emit:i,slots:t}=a;const{themeClasses:n}=ve(e),{loaderClasses:r}=ke(e),{focusClasses:o,isFocused:d,focus:c,blur:v}=ie(e),{InputIcon:f}=Ae(e),{roundedClasses:_}=Le(e),{rtlClasses:w}=me(),S=y(()=>e.dirty||e.active),P=y(()=>!e.singleLine&&!!(e.label||t.label)),q=he(),h=y(()=>e.id||`input-${q}`),H=y(()=>`${h.value}-messages`),A=k(),F=k(),L=k(),u=y(()=>["plain","underlined"].includes(e.variant)),{backgroundColorClasses:x,backgroundColorStyles:C}=De(ge(e,"bgColor")),{textColorClasses:I,textColorStyles:Y}=Ee(y(()=>e.error||e.disabled?void 0:S.value&&d.value?e.color:e.baseColor));be(S,g=>{if(P.value){const m=A.value.$el,V=F.value.$el;requestAnimationFrame(()=>{const p=Ue(m),b=V.getBoundingClientRect(),O=b.x-p.x,T=b.y-p.y-(p.height/2-b.height/2),R=b.width/.75,$=Math.abs(R-p.width)>1?{maxWidth:ye(R)}:void 0,D=getComputedStyle(m),te=getComputedStyle(V),ue=parseFloat(D.transitionDuration)*1e3||150,ce=parseFloat(te.getPropertyValue("--v-field-label-scale")),de=te.getPropertyValue("color");m.style.visibility="visible",V.style.visibility="hidden",je(m,{transform:`translate(${O}px, ${T}px) scale(${ce})`,color:de,...$},{duration:ue,easing:ze,direction:g?"normal":"reverse"}).finished.then(()=>{m.style.removeProperty("visibility"),V.style.removeProperty("visibility")})})}},{flush:"post"});const B=y(()=>({isActive:S,isFocused:d,controlRef:L,blur:v,focus:c}));function G(g){g.target!==document.activeElement&&g.preventDefault()}return z(()=>{var O,T,R;const g=e.variant==="outlined",m=!!(t["prepend-inner"]||e.prependInnerIcon),V=!!(e.clearable||t.clear),p=!!(t["append-inner"]||e.appendInnerIcon||V),b=()=>t.label?t.label({...B.value,label:e.label,props:{for:h.value}}):e.label;return s("div",W({class:["v-field",{"v-field--active":S.value,"v-field--appended":p,"v-field--center-affix":e.centerAffix??!u.value,"v-field--disabled":e.disabled,"v-field--dirty":e.dirty,"v-field--error":e.error,"v-field--flat":e.flat,"v-field--has-background":!!e.bgColor,"v-field--persistent-clear":e.persistentClear,"v-field--prepended":m,"v-field--reverse":e.reverse,"v-field--single-line":e.singleLine,"v-field--no-label":!b(),[`v-field--variant-${e.variant}`]:!0},n.value,x.value,o.value,r.value,_.value,w.value,e.class],style:[C.value,e.style],onClick:G},l),[s("div",{class:"v-field__overlay"},null),s(Me,{name:"v-field",active:!!e.loading,color:e.error?"error":typeof e.loading=="string"?e.loading:e.color},{default:t.loader}),m&&s("div",{key:"prepend",class:"v-field__prepend-inner"},[e.prependInnerIcon&&s(f,{key:"prepend-icon",name:"prependInner"},null),(O=t["prepend-inner"])==null?void 0:O.call(t,B.value)]),s("div",{class:"v-field__field","data-no-activator":""},[["filled","solo","solo-inverted","solo-filled"].includes(e.variant)&&P.value&&s(E,{key:"floating-label",ref:F,class:[I.value],floating:!0,for:h.value,style:Y.value},{default:()=>[b()]}),s(E,{ref:A,for:h.value},{default:()=>[b()]}),(T=t.default)==null?void 0:T.call(t,{...B.value,props:{id:h.value,class:"v-field__input","aria-describedby":H.value},focus:c,blur:v})]),V&&s(We,{key:"clear"},{default:()=>[ee(s("div",{class:"v-field__clearable",onMousedown:$=>{$.preventDefault(),$.stopPropagation()}},[t.clear?t.clear():s(f,{name:"clear"},null)]),[[ae,e.dirty]])]}),p&&s("div",{key:"append",class:"v-field__append-inner"},[(R=t["append-inner"])==null?void 0:R.call(t,B.value),e.appendInnerIcon&&s(f,{key:"append-icon",name:"appendInner"},null)]),s("div",{class:["v-field__outline",I.value],style:Y.value},[g&&s(M,null,[s("div",{class:"v-field__outline__start"},null),P.value&&s("div",{class:"v-field__outline__notch"},[s(E,{ref:F,floating:!0,for:h.value},{default:()=>[b()]})]),s("div",{class:"v-field__outline__end"},null)]),u.value&&P.value&&s(E,{ref:F,floating:!0,for:h.value},{default:()=>[b()]})])])}),{controlRef:L}}});function Ze(e){const a=Object.keys(re.props).filter(l=>!xe(l)&&l!=="class"&&l!=="style");return Ce(e,a)}function Je(e,a){if(!_e)return;const l=a.modifiers||{},i=a.value,{handler:t,options:n}=typeof i=="object"?i:{handler:i,options:{}},r=new IntersectionObserver(function(){var f;let o=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[],d=arguments.length>1?arguments[1]:void 0;const c=(f=e._observe)==null?void 0:f[a.instance.$.uid];if(!c)return;const v=o.some(_=>_.isIntersecting);t&&(!l.quiet||c.init)&&(!l.once||v||c.init)&&t(v,o,d),v&&l.once?oe(e,a):c.init=!0},n);e._observe=Object(e._observe),e._observe[a.instance.$.uid]={init:!1,observer:r},r.observe(e)}function oe(e,a){var i;const l=(i=e._observe)==null?void 0:i[a.instance.$.uid];l&&(l.observer.unobserve(e),delete e._observe[a.instance.$.uid])}const Ke={mounted:Je,unmounted:oe},Qe=Ke,et=["color","file","time","date","datetime-local","week","month"],tt=U({autofocus:Boolean,counter:[Boolean,Number,String],counterValue:[Number,Function],prefix:String,placeholder:String,persistentPlaceholder:Boolean,persistentCounter:Boolean,suffix:String,role:String,type:{type:String,default:"text"},modelModifiers:Object,...Ne(),...se()},"VTextField"),ot=j()({name:"VTextField",directives:{Intersect:Qe},inheritAttrs:!1,props:tt(),emits:{"click:control":e=>!0,"mousedown:control":e=>!0,"update:focused":e=>!0,"update:modelValue":e=>!0},setup(e,a){let{attrs:l,emit:i,slots:t}=a;const n=Pe(e,"modelValue"),{isFocused:r,focus:o,blur:d}=ie(e),c=y(()=>typeof e.counterValue=="function"?e.counterValue(n.value):typeof e.counterValue=="number"?e.counterValue:(n.value??"").toString().length),v=y(()=>{if(l.maxlength)return l.maxlength;if(!(!e.counter||typeof e.counter!="number"&&typeof e.counter!="string"))return e.counter}),f=y(()=>["plain","underlined"].includes(e.variant));function _(u,x){var C,I;!e.autofocus||!u||(I=(C=x[0].target)==null?void 0:C.focus)==null||I.call(C)}const w=k(),S=k(),P=k(),q=y(()=>et.includes(e.type)||e.persistentPlaceholder||r.value||e.active);function h(){var u;P.value!==document.activeElement&&((u=P.value)==null||u.focus()),r.value||o()}function H(u){i("mousedown:control",u),u.target!==P.value&&(h(),u.preventDefault())}function A(u){h(),i("click:control",u)}function F(u){u.stopPropagation(),h(),ne(()=>{n.value=null,we(e["onClick:clear"],u)})}function L(u){var C;const x=u.target;if(n.value=x.value,(C=e.modelModifiers)!=null&&C.trim&&["text","search","password","tel","url"].includes(e.type)){const I=[x.selectionStart,x.selectionEnd];ne(()=>{x.selectionStart=I[0],x.selectionEnd=I[1]})}}return z(()=>{const u=!!(t.counter||e.counter!==!1&&e.counter!=null),x=!!(u||t.details),[C,I]=Ie(l),{modelValue:Y,...B}=le.filterProps(e),G=Ze(e);return s(le,W({ref:w,modelValue:n.value,"onUpdate:modelValue":g=>n.value=g,class:["v-text-field",{"v-text-field--prefixed":e.prefix,"v-text-field--suffixed":e.suffix,"v-input--plain-underlined":f.value},e.class],style:e.style},C,B,{centerAffix:!f.value,focused:r.value}),{...t,default:g=>{let{id:m,isDisabled:V,isDirty:p,isReadonly:b,isValid:O}=g;return s(re,W({ref:S,onMousedown:H,onClick:A,"onClick:clear":F,"onClick:prependInner":e["onClick:prependInner"],"onClick:appendInner":e["onClick:appendInner"],role:e.role},G,{id:m.value,active:q.value||p.value,dirty:p.value||e.dirty,disabled:V.value,focused:r.value,error:O.value===!1}),{...t,default:T=>{let{props:{class:R,...$}}=T;const D=ee(s("input",W({ref:P,value:n.value,onInput:L,autofocus:e.autofocus,readonly:b.value,disabled:V.value,name:e.name,placeholder:e.placeholder,size:1,type:e.type,onFocus:h,onBlur:d},$,I),null),[[Ve("intersect"),{handler:_},null,{once:!0}]]);return s(M,null,[e.prefix&&s("span",{class:"v-text-field__prefix"},[s("span",{class:"v-text-field__prefix__text"},[e.prefix])]),t.default?s("div",{class:R,"data-no-activator":""},[t.default(),D]):pe(D,{class:R}),e.suffix&&s("span",{class:"v-text-field__suffix"},[s("span",{class:"v-text-field__suffix__text"},[e.suffix])])])}})},details:x?g=>{var m;return s(M,null,[(m=t.details)==null?void 0:m.call(t,g),u&&s(M,null,[s("span",null,null),s(Ye,{active:e.persistentCounter||r.value,value:c.value,max:v.value},t.counter)])])}:void 0})}),qe({},w,S,P)}});export{N as B,ot as V,je as a,rt as b,at as c,st as d,qe as f,it as g,Qe as i,tt as m,Ue as n,ze as s};
