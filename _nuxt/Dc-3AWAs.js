import{A as S,B as T,_ as y,r as w,c as a,a as e,F as p,n as _,z as v,x,s as f,u as b,v as g,o as n,d as k,t as u,p as I,e as N}from"./CZihCunZ.js";import{u as B}from"./BeZEj2xh.js";import{u as F}from"./kJPpa2qd.js";const M=S("testimonials",()=>{const i=T([]);async function r(s){const o=JSON.stringify(s);(await fetch("/api/testimonials",{method:"POST",body:o})).ok&&i.push(s)}async function c(){const{data:s}=await B("/api/testimonials","$xFzQaHyMqu"),o=s.value;o!=null&&(i.splice(0,i.length),i.push(...o))}return c(),{testimonials:i,addTestimonial:r}}),l=i=>(I("data-v-565f616e"),i=i(),N(),i),V={class:"testimonials-list"},q=l(()=>e("h1",null,"Testimonials List",-1)),A=l(()=>e("strong",null,"Service ID:",-1)),D={class:"add-testimonial"},z=l(()=>e("h2",null,"Add a New Testimonial",-1)),L=l(()=>e("option",{value:"",disabled:"",selected:""},"Choose a Service",-1)),O=["value"],U=l(()=>e("button",{type:"submit",class:"submit-button"},"Add Testimonial",-1)),C={__name:"testimonials",setup(i){const r=M(),c=r.testimonials,s=w({service_id:0,testimonial:""}),m=F().services;function h(){r.addTestimonial({...s.value}),s.value={service_id:0,testimonial:""}}return(E,d)=>(n(),a("div",V,[q,e("ul",null,[(n(!0),a(p,null,_(v(c),t=>(n(),a("li",{key:t.id,class:"testimonial-card"},[e("h2",null,[A,k(" "+u(t.service_id),1)]),e("p",null,u(t.testimonial),1)]))),128))]),e("div",D,[z,e("form",{onSubmit:x(h,["prevent"]),class:"add-testimonial-form"},[f(e("select",{"onUpdate:modelValue":d[0]||(d[0]=t=>s.value.service_id=t),placeholder:"Service",required:"",class:"input-service"},[L,(n(!0),a(p,null,_(v(m),t=>(n(),a("option",{key:t.id,value:t.id},u(t.title),9,O))),128))],512),[[b,s.value.service_id]]),f(e("textarea",{"onUpdate:modelValue":d[1]||(d[1]=t=>s.value.testimonial=t),placeholder:"Testimonial",required:""},null,512),[[g,s.value.testimonial]]),U],32)])]))}},Q=y(C,[["__scopeId","data-v-565f616e"]]);export{Q as default};
