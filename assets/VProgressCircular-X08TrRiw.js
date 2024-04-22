import{q as R,s as V,u as g,v as _}from"./VInput-nECS7Uqr.js";import{p,m as I,G as T,N as M,g as O,r as E,O as A,I as f,ax as D,D as a,L as F,a2 as U,u as $,c as s}from"./index-rBDzVEuo.js";const B=p({bgColor:String,color:String,indeterminate:[Boolean,String],modelValue:{type:[Number,String],default:0},rotate:{type:[Number,String],default:0},width:{type:[Number,String],default:4},...I(),...R(),...T({tag:"div"}),...M()},"VProgressCircular"),L=O()({name:"VProgressCircular",props:B(),setup(e,C){let{slots:i}=C;const r=20,t=2*Math.PI*r,l=E(),{themeClasses:h}=A(e),{sizeClasses:y,sizeStyles:c}=V(e),{textColorClasses:k,textColorStyles:b}=g(f(e,"color")),{textColorClasses:x,textColorStyles:S}=g(f(e,"bgColor")),{intersectionRef:w,isIntersecting:N}=_(),{resizeRef:P,contentRect:v}=D(),o=a(()=>Math.max(0,Math.min(100,parseFloat(e.modelValue)))),u=a(()=>Number(e.width)),d=a(()=>c.value?Number(e.size):v.value?v.value.width:Math.max(u.value,32)),n=a(()=>r/(1-u.value/d.value)*2),m=a(()=>u.value/d.value*n.value),z=a(()=>F((100-o.value)/100*t));return U(()=>{w.value=l.value,P.value=l.value}),$(()=>s(e.tag,{ref:l,class:["v-progress-circular",{"v-progress-circular--indeterminate":!!e.indeterminate,"v-progress-circular--visible":N.value,"v-progress-circular--disable-shrink":e.indeterminate==="disable-shrink"},h.value,y.value,k.value,e.class],style:[c.value,b.value,e.style],role:"progressbar","aria-valuemin":"0","aria-valuemax":"100","aria-valuenow":e.indeterminate?void 0:o.value},{default:()=>[s("svg",{style:{transform:`rotate(calc(-90deg + ${Number(e.rotate)}deg))`},xmlns:"http://www.w3.org/2000/svg",viewBox:`0 0 ${n.value} ${n.value}`},[s("circle",{class:["v-progress-circular__underlay",x.value],style:S.value,fill:"transparent",cx:"50%",cy:"50%",r,"stroke-width":m.value,"stroke-dasharray":t,"stroke-dashoffset":0},null),s("circle",{class:"v-progress-circular__overlay",fill:"transparent",cx:"50%",cy:"50%",r,"stroke-width":m.value,"stroke-dasharray":t,"stroke-dashoffset":z.value},null)]),i.default&&s("div",{class:"v-progress-circular__content"},[i.default({value:o.value})])]})),{}}});export{L as V};
