import{_ as r,b as f,a as u,j as d,o as p,f as h,h as o,c as i,e as v,A as $}from"./index-n3doT2xZ.js";import{N as E}from"./Nbt-nxGH-SQC.js";import{V as a}from"./VTextField-TYuIyVWU.js";import"./VInput--Uj0OPHf.js";const _={data:()=>({visible:!1,visible1:!1,mdiEyeOff:f,mdiEye:u,show1:!1,show:!1}),components:{Nbt:E}},b={class:"passwordwrap"},y={class:"container"},k={class:"content"},N={class:"formwrap"},P=o("div",null,"New Password",-1),C=o("div",null,"Confirm New Password",-1),O={class:"btwrap"};function V(e,s,l,c,m,w){const n=d("Nbt");return p(),h("div",b,[o("div",y,[o("div",k,[o("form",N,[P,i(a,{"prepend-inner-icon":e.mdiLockOutline,"append-inner-icon":e.show1?e.mdiEye:e.mdiEyeOff,type:e.show1?"text":"password",label:"password","onClick:appendInner":s[0]||(s[0]=t=>e.show1=!e.show1),variant:"solo","hide-details":""},null,8,["prepend-inner-icon","append-inner-icon","type"]),C,i(a,{"prepend-inner-icon":e.mdiLockOutline,"append-inner-icon":e.show?e.mdiEye:e.mdiEyeOff,type:e.show?"text":"password",label:"password","onClick:appendInner":s[1]||(s[1]=t=>e.show=!e.show),variant:"solo","hide-details":""},null,8,["prepend-inner-icon","append-inner-icon","type"])]),o("div",O,[i(n,{title:"Save",enabled:"true",onClick:s[2]||(s[2]=t=>e.savetime())})])])])])}const B=r(_,[["render",V]]),I={components:{EditPassword:B},mounted(){const e=v();e.curpage="EditPassword"}};function L(e,s,l,c,m,w){const n=d("EditPassword");return p(),$(n)}const F=r(I,[["render",L]]);export{F as default};
