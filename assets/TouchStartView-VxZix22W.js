import{_ as i,e as m,o as a,f as n,h as r,c as d,j as h,A as p}from"./index-n3doT2xZ.js";import{V as _}from"./VSwitch-ljH2Tb-e.js";import"./VInput--Uj0OPHf.js";import"./VDefaultsProvider-xp_ngy5e.js";import"./VSelectionControl-IGaoy9TU.js";import"./VProgressCircular-SDLFGTUW.js";const f=""+new URL("TouchStarmtmode-6qNeiLzp.png",import.meta.url).href,g=""+new URL("Car-mKN4Uqo_.png",import.meta.url).href,T={data(){return{status:!1,error:"",phoneimg:!0,Touchstartmodeimg:!0,TouchStarmtmodeimageUrl:f,CarimageUrl:g}},watch:{status(e){if(this.error==""){const t=m();t.loading=!0;let s=this;setTimeout(function(){t.loading=!1,e==!0?s.Touchstartmodeimg=!1:s.Touchstartmodeimg=!0,setTimeout(function(){s.error=""},10)},1e3)}}},components:{},methods:{}},S={class:"touchstartmainwrap"},w={class:"touchstartwrap"},U={class:"touchstartcontainer"},V=r("span",{class:"touchstarttxt"},"Touch Start",-1),x=r("div",{class:"txt"}," Turn on this option need to click start button when you ready to charge. ",-1),k={class:"flex"},v=["src"],$=["src"];function y(e,t,s,u,o,l){return a(),n("div",S,[r("div",w,[r("div",U,[V,d(_,{modelValue:o.status,"onUpdate:modelValue":t[0]||(t[0]=c=>o.status=c),inset:"","hide-details":""},null,8,["modelValue"])]),x]),r("div",k,[o.Touchstartmodeimg?(a(),n("img",{key:0,src:o.TouchStarmtmodeimageUrl,class:"sizeclass"},null,8,v)):(a(),n("img",{key:1,src:o.CarimageUrl},null,8,$))])])}const B=i(T,[["render",y]]),C={components:{TouchStartmode:B},mounted(){const e=m();e.curpage="Touchstart"}};function N(e,t,s,u,o,l){const c=h("TouchStartmode");return a(),p(c)}const A=i(C,[["render",N]]);export{A as default};
