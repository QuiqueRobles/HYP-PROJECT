import{A as f,B as m,_ as h,r as j,c as p,a as s,F as P,n as b,z as w,s as n,v as a,x as S,o as d,t as _,p as y,e as x}from"./CGeqU_Dw.js";import{u as g}from"./CleF5PlO.js";const I=f("projects",()=>{const o=m([]);async function i(e){const l=JSON.stringify(e);(await fetch("/api/projects",{method:"POST",body:l})).ok&&o.push(e)}async function u(){const{data:e}=await g("/api/projects","$Ovdflr6OhF"),l=e.value;l!=null&&(o.splice(0,o.length),o.push(...l))}return u(),{projects:o,addProject:i}}),c=o=>(y("data-v-378da657"),o=o(),x(),o),U=c(()=>s("h1",null,"Projects List",-1)),V=["src","alt"],k=c(()=>s("h2",null,"Add a New Project",-1)),q=c(()=>s("button",{type:"submit"},"Add Project",-1)),B={__name:"projects",setup(o){const i=I(),u=i.projects,e=j({title:"",picture_url:"",description:"",responsible_person_id:0});function l(){i.addProject({...e.value}),e.value={title:"",picture_url:"",description:"",responsible_person_id:0}}return(v,r)=>(d(),p("div",null,[U,s("ul",null,[(d(!0),p(P,null,b(w(u),t=>(d(),p("li",{key:t.id},[s("img",{src:t.picture_url,alt:t.title,width:"100"},null,8,V),s("h2",null,_(t.title),1),s("p",null,_(t.description),1)]))),128))]),k,s("form",{onSubmit:S(l,["prevent"])},[n(s("input",{"onUpdate:modelValue":r[0]||(r[0]=t=>e.value.title=t),placeholder:"Title",required:""},null,512),[[a,e.value.title]]),n(s("input",{"onUpdate:modelValue":r[1]||(r[1]=t=>e.value.picture_url=t),placeholder:"Picture URL",required:""},null,512),[[a,e.value.picture_url]]),n(s("textarea",{"onUpdate:modelValue":r[2]||(r[2]=t=>e.value.description=t),placeholder:"Description",required:""},null,512),[[a,e.value.description]]),n(s("input",{"onUpdate:modelValue":r[3]||(r[3]=t=>e.value.responsible_person_id=t),placeholder:"Responsible Person ID",type:"number",required:""},null,512),[[a,e.value.responsible_person_id]]),q],32)]))}},N=h(B,[["__scopeId","data-v-378da657"]]);export{N as default};
