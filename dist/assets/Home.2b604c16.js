import{_}from"./index.eaa5b59f.js";import{o as a,c as r,a as o,n as p,d as c,F as h,g as v,t as d,e as m,r as k,p as b}from"./vendor.0a9860fd.js";const L={name:"Lista",mounted(){this.load()},data(){return{initialLoad:!1,loading:!1,opUrl:!0,opTop:!1,user:{},lista:{urls:[],top100:[]}}},methods:{async load(){this.initialLoad=!1,await this.$store.dispatch("url/listar"),this.lista=this.$store.state.url,this.initialLoad=!0},generica(e,t){this.loading=!0,this.$store.dispatch("url/"+e,t).then(n=>{this.loading=!1,this.alerta(n.message,!0),this.load()},n=>{this.loading=!1,this.alerta(n.response&&n.response.data&&n.response.data.message||n.message||n.toString(),!1)})},alerta(e,t){this.$store.dispatch("alerta/criar",{msg:e,ok:t})},permissaoDeletar(e){let t=this.$store.state.usuario.user;return!!(t&&t._id&&e&&e.user&&e.user._id&&e.user._id==t._id)},async tipoLista(e){e=="top"?(this.opUrl=!1,this.opTop=!0):(this.opUrl=!0,this.opTop=!1)}}},y={class:"nav nav-pills nav-fill"},C={class:"nav-item"},T={class:"nav-item"},U={key:0,class:"mt20 spinner-grow spinner-grow-md text-primary",role:"status","aria-hidden":"true"},w={key:1,class:"mt20"},x={class:"lista overflow-auto"},B=["onClick","href"],N={class:"mb-1"},D={key:0},V=o("br",null,null,-1),j={key:1},E=["onClick"],F={key:0,class:"spinner-grow spinner-grow-sm",role:"status","aria-hidden":"true"},H=m(" Excluir ");function R(e,t,n,g,s,l){return a(),r(h,null,[o("ul",y,[o("li",C,[o("a",{class:p(["nav-link",s.opUrl?"active":""]),onClick:t[0]||(t[0]=i=>l.tipoLista("url"))},"URLs",2)]),o("li",T,[o("a",{class:p(["nav-link",s.opTop?"active":""]),onClick:t[1]||(t[1]=i=>l.tipoLista("top"))},"Top 100",2)])]),s.initialLoad?c("",!0):(a(),r("span",U)),s.initialLoad&&!s.lista.urls[0]?(a(),r("h5",w," Nenhuma URL cadastrada! ")):c("",!0),o("div",x,[(a(!0),r(h,null,v(s.opTop?s.lista.top100:s.lista.urls,(i,u)=>(a(),r("div",{class:"list-group",key:i._id},[o("div",{class:p(["btn-group",[s.opTop?u+1!=s.lista.top100.length?"mb20":"":u+1!=s.lista.urls.length?"mb20":""]])},[o("a",{class:p(["btn btn-outline-secondary col-8",s.loading?"disabled":""]),onClick:f=>l.generica("incrementarClick",i._id),href:i.big,target:"_blank"},[o("h5",N,d(i.small),1),s.opTop?(a(),r("small",D,[m("Cliques: "+d(i.views),1),V])):c("",!0),s.opTop?(a(),r("small",j,d(i.big),1)):c("",!0)],10,B),l.permissaoDeletar(i)?(a(),r("button",{key:0,class:p(["btn btn-danger",s.loading?"disabled":""]),type:"button",onClick:f=>l.generica("deletar",i._id)},[s.loading?(a(),r("span",F)):c("",!0),H],10,E)):c("",!0)],2)]))),128))])],64)}var S=_(L,[["render",R]]);const q={components:{UrlLista:S},name:"Home"};function z(e,t,n,g,s,l){const i=k("UrlLista");return a(),b(i)}var I=_(q,[["render",z]]);export{I as default};
