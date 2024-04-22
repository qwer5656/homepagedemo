import{e as A,f as R,i as x,g as O,h as z,j as le,u as ie,a as oe,k as ue,b as de,l as ce}from"./VSelect-_SDHGT0M.js";import{p as k,ar as ve,D as r,m as j,G as E,N,g as C,O as w,J as re,I as g,u as B,c as s,E as me,S as fe,Z as be,as as T,U as ke,V as ye}from"./index-rBDzVEuo.js";import{a as K,f as F,b as J,h as $,p as ge,e as Ve,q as Pe,r as Ce,g as Be,s as Ie,t as V}from"./VInput-nECS7Uqr.js";import{a as he,c as Se,b as Le,d as De}from"./VOverlay-UewXFkos.js";import{R as Ge}from"./VSelectionControl-DD6xNnWL.js";import{V as P}from"./VDefaultsProvider-HBMz9dgU.js";import{V as Te}from"./VProgressCircular-X08TrRiw.js";const _e=["static","relative","fixed","absolute","sticky"],Ae=k({position:{type:String,validator:e=>_e.includes(e)}},"position");function Re(e){let o=arguments.length>1&&arguments[1]!==void 0?arguments[1]:ve();return{positionClasses:r(()=>e.position?`${o}--${e.position}`:void 0)}}const q=k({divided:Boolean,...A(),...j(),...K(),...R(),...F(),...E(),...N(),...x()},"VBtnGroup"),_=C()({name:"VBtnGroup",props:q(),setup(e,o){let{slots:n}=o;const{themeClasses:t}=w(e),{densityClasses:u}=J(e),{borderClasses:d}=O(e),{elevationClasses:c}=z(e),{roundedClasses:v}=$(e);re({VBtn:{height:"auto",color:g(e,"color"),density:g(e,"density"),flat:!0,variant:g(e,"variant")}}),B(()=>s(e.tag,{class:["v-btn-group",{"v-btn-group--divided":e.divided},t.value,d.value,u.value,c.value,v.value,e.class],style:e.style},n))}}),U=Symbol.for("vuetify:v-btn-toggle"),xe=k({...q(),...le()},"VBtnToggle");C()({name:"VBtnToggle",props:xe(),emits:{"update:modelValue":e=>!0},setup(e,o){let{slots:n}=o;const{isSelected:t,next:u,prev:d,select:c,selected:v}=ie(e,U);return B(()=>{const y=_.filterProps(e);return s(_,me({class:["v-btn-toggle",e.class]},y,{style:e.style}),{default:()=>{var m;return[(m=n.default)==null?void 0:m.call(n,{isSelected:t,next:u,prev:d,select:c,selected:v})]}})}),{next:u,prev:d,select:c}}});function Oe(e,o){fe(()=>{var n;return(n=e.isActive)==null?void 0:n.value},n=>{e.isLink.value&&n&&o&&be(()=>{o(!0)})},{immediate:!0})}const ze=k({active:{type:Boolean,default:void 0},symbol:{type:null,default:U},flat:Boolean,icon:[Boolean,String,Function,Object],prependIcon:T,appendIcon:T,block:Boolean,slim:Boolean,stacked:Boolean,ripple:{type:[Boolean,Object],default:!0},text:String,...A(),...j(),...K(),...he(),...R(),...oe(),...ge(),...Ve(),...Ae(),...F(),...Se(),...Pe(),...E({tag:"button"}),...N(),...x({variant:"elevated"})},"VBtn"),$e=C()({name:"VBtn",directives:{Ripple:Ge},props:ze(),emits:{"group:selected":e=>!0},setup(e,o){let{attrs:n,slots:t}=o;const{themeClasses:u}=w(e),{borderClasses:d}=O(e),{colorClasses:c,colorStyles:v,variantClasses:y}=ue(e),{densityClasses:m}=J(e),{dimensionStyles:Z}=Le(e),{elevationClasses:H}=z(e),{loaderClasses:M}=Ce(e),{locationStyles:Q}=Be(e),{positionClasses:W}=Re(e),{roundedClasses:X}=$(e),{sizeClasses:Y,sizeStyles:p}=Ie(e),a=de(e,e.symbol,!1),l=De(e,n),ee=r(()=>{var i;return e.active!==void 0?e.active:l.isLink.value?(i=l.isActive)==null?void 0:i.value:a==null?void 0:a.isSelected.value}),f=r(()=>(a==null?void 0:a.disabled.value)||e.disabled),ae=r(()=>e.variant==="elevated"&&!(e.disabled||e.flat||e.border)),te=r(()=>{if(!(e.value===void 0||typeof e.value=="symbol"))return Object(e.value)===e.value?JSON.stringify(e.value,null,0):e.value});function ne(i){var b;f.value||l.isLink.value&&(i.metaKey||i.ctrlKey||i.shiftKey||i.button!==0||n.target==="_blank")||((b=l.navigate)==null||b.call(l,i),a==null||a.toggle())}return Oe(l,a==null?void 0:a.select),B(()=>{var S,L;const i=l.isLink.value?"a":e.tag,b=!!(e.prependIcon||t.prepend),se=!!(e.appendIcon||t.append),I=!!(e.icon&&e.icon!==!0),h=(a==null?void 0:a.isSelected.value)&&(!l.isLink.value||((S=l.isActive)==null?void 0:S.value))||!a||((L=l.isActive)==null?void 0:L.value);return ke(s(i,{type:i==="a"?void 0:"button",class:["v-btn",a==null?void 0:a.selectedClass.value,{"v-btn--active":ee.value,"v-btn--block":e.block,"v-btn--disabled":f.value,"v-btn--elevated":ae.value,"v-btn--flat":e.flat,"v-btn--icon":!!e.icon,"v-btn--loading":e.loading,"v-btn--slim":e.slim,"v-btn--stacked":e.stacked},u.value,d.value,h?c.value:void 0,m.value,H.value,M.value,W.value,X.value,Y.value,y.value,e.class],style:[h?v.value:void 0,Z.value,Q.value,p.value,e.style],disabled:f.value||void 0,href:l.href.value,onClick:ne,value:te.value},{default:()=>{var D;return[ce(!0,"v-btn"),!e.icon&&b&&s("span",{key:"prepend",class:"v-btn__prepend"},[t.prepend?s(P,{key:"prepend-defaults",disabled:!e.prependIcon,defaults:{VIcon:{icon:e.prependIcon}}},t.prepend):s(V,{key:"prepend-icon",icon:e.prependIcon},null)]),s("span",{class:"v-btn__content","data-no-activator":""},[!t.default&&I?s(V,{key:"content-icon",icon:e.icon},null):s(P,{key:"content-defaults",disabled:!I,defaults:{VIcon:{icon:e.icon}}},{default:()=>{var G;return[((G=t.default)==null?void 0:G.call(t))??e.text]}})]),!e.icon&&se&&s("span",{key:"append",class:"v-btn__append"},[t.append?s(P,{key:"append-defaults",disabled:!e.appendIcon,defaults:{VIcon:{icon:e.appendIcon}}},t.append):s(V,{key:"append-icon",icon:e.appendIcon},null)]),!!e.loading&&s("span",{key:"loader",class:"v-btn__loader"},[((D=t.loader)==null?void 0:D.call(t))??s(Te,{color:typeof e.loading=="boolean"?void 0:e.loading,indeterminate:!0,size:"23",width:"2"},null)])]}}),[[ye("ripple"),!f.value&&e.ripple,null]])}),{group:a}}});export{$e as V,Ae as a,ze as m,Re as u};
