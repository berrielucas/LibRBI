import{r as u,a as _,o as C,c as D,_ as M,u as O,n as P,q as A,k as F,e as k,g as x,f as T,b as n,w as f,i as z,h as i,s as V,v as h,d as q,t as G,p as H,l as J,x as K}from"./index-DMki7Wkw.js";import{_ as S,a as Q}from"./axios-DR4vecJN.js";import{B as b}from"./BtnAddSimple-8NOEwDU4.js";const W={__name:"InputPassword",props:{text:{type:String,required:!0},required:{type:Boolean,required:!1}},setup(v){const c=u(""),m=u(!1),d=u([a=>a?!0:"Campo Obrigatório"]);return(a,l)=>{const g=_("v-text-field");return C(),D(g,{modelValue:c.value,"onUpdate:modelValue":l[0]||(l[0]=t=>c.value=t),"append-inner-icon":m.value?"mdi-eye":"mdi-eye-off",type:m.value?"text":"password",class:"input-group--focused",label:v.text,"onClick:appendInner":l[1]||(l[1]=t=>m.value=!m.value),required:"","on-update:model-value":a.$emit("value",c.value),rules:v.required?d.value:void 0},null,8,["modelValue","append-inner-icon","type","label","on-update:model-value","rules"])}}},I=v=>(H("data-v-d9aef996"),v=v(),J(),v),X={key:0,id:"body-login"},Y={class:"section left"},Z={class:"content"},ee=I(()=>i("img",{src:K,alt:"Logo Importações",width:"90px"},null,-1)),ae=I(()=>i("h1",null,"Entrar",-1)),te={class:"section right"},le={class:"content"},oe={style:{display:"flex","align-items":"center","justify-content":"space-between"}},ne={__name:"LoginView",setup(v){const c=O(),m=P(),d=A();F(()=>{c.auth&&m.push("/"),d.query.link&&d.query.email&&(a.value=d.query.link,l.value=d.query.email,t.value=1,E(window.location.href))});const a=u(""),l=u(""),g=u(""),t=u(0),p=u(null),s=u(!1),r=u(!1),L=k(()=>g.value===""||l.value===""),U=k(()=>a.value==="");function B(){r.value=!0,a.value[a.value.length-1]!=="/"&&(a.value=a.value+"/");const w={email:l.value,senha:g.value};Q.post(a.value+"api/Usuario/loginExterno",w).then(function(e){e.data.success===!0?(c.login(e.data.dados,a),console.log("logado"),m.push("/")):(e.data.errors?(p.value=e.data.errors,s.value=!0,r.value=!1):e.data.erro>0?(console.log(e.data),p.value=e.data.erro[0].erro,s.value=!0,r.value=!1):!l.value.includes("@rubeus.com.br")&&l.value.includes("@")?(p.value="Email não existente no sistema",s.value=!0,r.value=!1):l.value.includes("@")?(p.value="Senha inválida",s.value=!0,r.value=!1):(p.value="Email inválido",s.value=!0,r.value=!1),r.value=!1)}).catch(function(e){p.value="URL Inválida",s.value=!0,console.log("Erro ao logar"),console.log(e),r.value=!1,t.value=0})}function E(w){const e=new URL(w);e.search="",window.history.replaceState({},"",e.toString())}return console.log(a.value),(w,e)=>{const y=_("v-window-item"),R=_("v-window"),$=_("v-card"),N=_("v-btn"),j=_("v-snackbar");return x(c).auth?z("",!0):(C(),T("section",X,[n($,{class:"container",loading:r.value},{default:f(()=>[i("div",Y,[i("div",Z,[ee,ae,V(i("p",null,"Informe o link do CRM",512),[[h,t.value==0]]),V(i("p",null,"Use sua conta Rubeus",512),[[h,t.value==1]])])]),i("div",te,[i("div",le,[n(R,{modelValue:t.value,"onUpdate:modelValue":e[5]||(e[5]=o=>t.value=o)},{default:f(()=>[n(y,{class:"w-item"},{default:f(()=>[n(S,{text:"Link da Base *",onValue:e[0]||(e[0]=o=>a.value=o),required:!0,modelo:x(d).query.link},null,8,["modelo"]),n(b,{class:"buttom",text:"Seguir",onClick:e[1]||(e[1]=o=>t.value=t.value+1),style:{padding:"0 1.5rem"},disabled:U.value},null,8,["disabled"])]),_:1}),n(y,{class:"w-item"},{default:f(()=>[n(S,{text:"Email *",onValue:e[2]||(e[2]=o=>l.value=o),required:!0,modelo:x(d).query.email},null,8,["modelo"]),n(W,{text:"Senha *",onValue:e[3]||(e[3]=o=>g.value=o),required:!0}),i("div",oe,[n(b,{class:"",text:"Voltar",onClick:e[4]||(e[4]=o=>t.value=t.value-1),style:{padding:"0 1.5rem","background-color":"transparent",color:"rgba(105, 105, 105, 0.7)","margin-top":"30px",border:"solid 1.5px rgba(105, 105, 105, 0.3)"},variant:"text"}),n(b,{class:"buttom",text:"Entrar",onClick:B,style:{padding:"0 1.5rem"},disabled:L.value},null,8,["disabled"])])]),_:1})]),_:1},8,["modelValue"])])])]),_:1},8,["loading"]),n(j,{modelValue:s.value,"onUpdate:modelValue":e[7]||(e[7]=o=>s.value=o),timeout:3500,color:"red"},{actions:f(()=>[n(N,{color:"white",variant:"text",onClick:e[6]||(e[6]=o=>s.value=!1)},{default:f(()=>[q(" Fechar ")]),_:1})]),default:f(()=>[q(G(p.value)+" ",1)]),_:1},8,["modelValue"])]))}}},ie=M(ne,[["__scopeId","data-v-d9aef996"]]);export{ie as default};
