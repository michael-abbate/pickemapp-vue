(function(){var e={1993:function(){},6395:function(e,t,n){"use strict";var o=n(9242),a=n(3396);const r=(0,a._)("div",{class:"vl"},null,-1),i=(0,a.Uk)("Home"),l=(0,a.Uk)(" | "),s=(0,a.Uk)("About"),c=(0,a._)("h1",null,"Pick Em App",-1);function u(e,t,n,o,u,d){const p=(0,a.up)("router-link"),f=(0,a.up)("router-view");return(0,a.wg)(),(0,a.iD)(a.HY,null,[r,(0,a._)("nav",null,[(0,a.Wm)(p,{to:"/"},{default:(0,a.w5)((()=>[i])),_:1}),l,(0,a.Wm)(p,{to:"/about"},{default:(0,a.w5)((()=>[s])),_:1})]),c,(0,a.Wm)(f)],64)}var d=n(1993),p=n.n(d),f=n(89);const m=(0,f.Z)(p(),[["render",u]]);var v=m,g=n(2483),k=n(7139);const h=e=>((0,a.dD)("data-v-e5d3cd12"),e=e(),(0,a.Cn)(),e),b={id:"show-picks"},w=h((()=>(0,a._)("div",{class:"grid-cell"},null,-1))),_={class:"grid-cell"},D={id:"all-game-tables"},y={rowspan:"2",class:"date-cell"},S={class:"matchup-cell"},O=["for"],U={class:"pickem-cell"},C=["id","value"],I=["for"],P={class:"pickem-cell"},j=["id","value"],x=["textContent"],z=["for"],N={class:"pickem-cell"},E=["id","value"],T=["for"],A={class:"pickem-cell"},H=["id","value"],K=h((()=>(0,a._)("tr",null,[(0,a._)("td",{colspan:"4"},[(0,a._)("hr")])],-1))),L={class:"grid-cell",id:"selected-picks-wrapper"},Y={id:"selected-picks"},F=(0,a.Uk)(" Selected Picks: "),V=["id"];function G(e,t,n,r,i,l){return(0,a.wg)(),(0,a.iD)("div",b,[w,(0,a._)("div",_,[(0,a._)("div",D,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(i.games,((e,n)=>((0,a.wg)(),(0,a.iD)("div",{key:e.gameID,class:(0,k.C_)(e.gameID+"game-table")},[l.validGame(e.date)?((0,a.wg)(),(0,a.iD)("table",{key:0,class:(0,k.C_)(e.gameID+"game-table")},[(0,a._)("tr",{class:(0,k.C_)("away-row-"+n+"-"+e.gameID)},[(0,a._)("td",y,(0,k.zw)(l.epochToDate(e.date)),1),(0,a._)("td",S,(0,k.zw)(e.team1Name),1),(0,a._)("label",{for:e.gameID+"-away-label"},[(0,a._)("td",U,[(0,a.wy)((0,a._)("input",{"onUpdate:modelValue":t[0]||(t[0]=e=>i.picks=e),type:"checkbox",id:e.gameID+"-away-label",value:e.team1Name+l.favOrDog(l.useDraftkings(e.odds))[0]},null,8,C),[[o.e8,i.picks]]),(0,a.Uk)(" "+(0,k.zw)(l.favOrDog(l.useDraftkings(e.odds))[0]),1)])],8,O),(0,a._)("label",{for:e.gameID+"-over-label"},[(0,a._)("td",P,[(0,a.wy)((0,a._)("input",{"onUpdate:modelValue":t[1]||(t[1]=e=>i.picks=e),type:"checkbox",id:e.gameID+"-over-label",value:e.team2Name+"vs."+e.team1Name+"o"+l.useDraftkings(e.odds).overUnder},null,8,j),[[o.e8,i.picks]]),(0,a.Uk)(" o"+(0,k.zw)(l.useDraftkings(e.odds).overUnder),1)])],8,I)],2),(0,a._)("tr",{class:(0,k.C_)("home-row-"+n+"-"+e.gameID)},[(0,a._)("td",{textContent:(0,k.zw)(e.team2Name),class:"matchup-cell"},null,8,x),(0,a._)("label",{for:e.gameID+"-home-label"},[(0,a._)("td",N,[(0,a.wy)((0,a._)("input",{"onUpdate:modelValue":t[2]||(t[2]=e=>i.picks=e),type:"checkbox",id:e.gameID+"-home-label",value:e.team2Name+l.favOrDog(l.useDraftkings(e.odds))[1]},null,8,E),[[o.e8,i.picks]]),(0,a.Uk)(" "+(0,k.zw)(l.favOrDog(l.useDraftkings(e.odds))[1]),1)])],8,z),(0,a._)("label",{for:e.gameID+"-under-label"},[(0,a._)("td",A,[(0,a.wy)((0,a._)("input",{"onUpdate:modelValue":t[3]||(t[3]=e=>i.picks=e),type:"checkbox",id:e.gameID+"-under-label",value:e.team2Name+"vs."+e.team1Name+"u"+l.useDraftkings(e.odds).overUnder},null,8,H),[[o.e8,i.picks]]),(0,a.Uk)(" u"+(0,k.zw)(l.useDraftkings(e.odds).overUnder),1)])],8,T)],2),K],2)):(0,a.kq)("",!0)],2)))),128))])]),(0,a._)("div",L,[(0,a._)("div",Y,[(0,a._)("strong",null,[F,(0,a._)("ul",null,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(i.picks,((e,t)=>((0,a.wg)(),(0,a.iD)("li",{key:t,id:e+"selected-pick"},(0,k.zw)(e),9,V)))),128))])]),(0,a._)("button",{onClick:t[4]||(t[4]=e=>l.selectpicks())},"SELECT")])])])}n(6699);var M=n(6265),W=n.n(M);let Z="prod";console.log(`APP_ENV: ${Z}`);let $="api/odds.json?sport=nfl";"prod"===Z&&($="https://areyouwatchingthis.com/api/odds.json?sport=nfl");var q={name:"ShowPicks",data(){return{games:null,picks:[],sample_spread:7,sample_ou:48.5,editIndex:-1,fontSize:15,textSizeControlStyle:{textAlign:"center",cursor:"pointer"}}},async created(){await W().get($).then((e=>{console.log("SUCCESSFULLY HIT API"),console.log(e.data.results.slice(0,20)),this.games=e.data.results.slice(0,20)})).catch((e=>{console.log(e),this.errored=!0}))},methods:{selectpicks(){console.log("USERS PICKS:"),console.log(this.picks),this.$router.push({name:"SelectedPicks",params:{picks:this.picks}})},validGame(e){let t=new Date,n=t.setDate(t.getDate()+((8-t.getDay())%7||7)),o=Date.now();return!(o>=e)&&!(e>n)},epochToDate(e){let t=new Date(e),n=t.toLocaleDateString("en-US");return n},favOrDog(e){let t=new String(e.spread);return t.includes("-")?[t.replace("-","+"),t]:["-"+t,"+"+t]},useDraftkings(e){let t=e.length;for(var n=0;n<t;n++){var o=e[n].provider;if("DRAFTKINGS"===o)return e[n]}}}};const R=(0,f.Z)(q,[["render",G],["__scopeId","data-v-e5d3cd12"]]);var B=R;const J={class:"selected-picks-container"},Q={class:"select-picks-table"},X={value:"",disabled:"",selected:""},ee=["id"];function te(e,t,n,o,r,i){return(0,a.wg)(),(0,a.iD)("div",J,[(0,a._)("table",Q,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(r.types_of_picks,((e,t)=>((0,a.wg)(),(0,a.iD)("tr",{key:t,class:(0,k.C_)(e+"-row")},[(0,a._)("td",null,(0,k.zw)(e),1),(0,a._)("td",null,[(0,a._)("select",null,[(0,a._)("option",X,"Select "+(0,k.zw)(e),1),((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(r.picks,((e,t)=>((0,a.wg)(),(0,a.iD)("option",{key:t,id:e+"submitted-picks"},(0,k.zw)(e),9,ee)))),128))])])],2)))),128))])])}var ne={name:"SelectedPicks",data(){return{picks:null,types_of_picks:["Favorite","Underdog","Over","Under","LOCK"]}},mounted(){this.picks=this.$route.params.picks}};const oe=(0,f.Z)(ne,[["render",te],["__scopeId","data-v-00e3b44c"]]);var ae=oe;const re=[{path:"/about",name:"about",component:()=>n.e(443).then(n.bind(n,7381))},{path:"/",redirect:{name:"ShowPicks"}},{path:"/showpicks",name:"ShowPicks",component:B,props:!0},{path:"/selected",name:"SelectedPicks",component:ae,props:!0}],ie=(0,g.p7)({history:(0,g.PO)("/"),routes:re});var le=ie;(0,o.ri)(v).use(le).mount("#app")}},t={};function n(o){var a=t[o];if(void 0!==a)return a.exports;var r=t[o]={exports:{}};return e[o](r,r.exports,n),r.exports}n.m=e,function(){var e=[];n.O=function(t,o,a,r){if(!o){var i=1/0;for(u=0;u<e.length;u++){o=e[u][0],a=e[u][1],r=e[u][2];for(var l=!0,s=0;s<o.length;s++)(!1&r||i>=r)&&Object.keys(n.O).every((function(e){return n.O[e](o[s])}))?o.splice(s--,1):(l=!1,r<i&&(i=r));if(l){e.splice(u--,1);var c=a();void 0!==c&&(t=c)}}return t}r=r||0;for(var u=e.length;u>0&&e[u-1][2]>r;u--)e[u]=e[u-1];e[u]=[o,a,r]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})}}(),function(){n.f={},n.e=function(e){return Promise.all(Object.keys(n.f).reduce((function(t,o){return n.f[o](e,t),t}),[]))}}(),function(){n.u=function(e){return"js/about.6de1a2aa.js"}}(),function(){n.miniCssF=function(e){}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="pickem-app:";n.l=function(o,a,r,i){if(e[o])e[o].push(a);else{var l,s;if(void 0!==r)for(var c=document.getElementsByTagName("script"),u=0;u<c.length;u++){var d=c[u];if(d.getAttribute("src")==o||d.getAttribute("data-webpack")==t+r){l=d;break}}l||(s=!0,l=document.createElement("script"),l.charset="utf-8",l.timeout=120,n.nc&&l.setAttribute("nonce",n.nc),l.setAttribute("data-webpack",t+r),l.src=o),e[o]=[a];var p=function(t,n){l.onerror=l.onload=null,clearTimeout(f);var a=e[o];if(delete e[o],l.parentNode&&l.parentNode.removeChild(l),a&&a.forEach((function(e){return e(n)})),t)return t(n)},f=setTimeout(p.bind(null,void 0,{type:"timeout",target:l}),12e4);l.onerror=p.bind(null,l.onerror),l.onload=p.bind(null,l.onload),s&&document.head.appendChild(l)}}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){n.p="/"}(),function(){var e={143:0};n.f.j=function(t,o){var a=n.o(e,t)?e[t]:void 0;if(0!==a)if(a)o.push(a[2]);else{var r=new Promise((function(n,o){a=e[t]=[n,o]}));o.push(a[2]=r);var i=n.p+n.u(t),l=new Error,s=function(o){if(n.o(e,t)&&(a=e[t],0!==a&&(e[t]=void 0),a)){var r=o&&("load"===o.type?"missing":o.type),i=o&&o.target&&o.target.src;l.message="Loading chunk "+t+" failed.\n("+r+": "+i+")",l.name="ChunkLoadError",l.type=r,l.request=i,a[1](l)}};n.l(i,s,"chunk-"+t,t)}},n.O.j=function(t){return 0===e[t]};var t=function(t,o){var a,r,i=o[0],l=o[1],s=o[2],c=0;if(i.some((function(t){return 0!==e[t]}))){for(a in l)n.o(l,a)&&(n.m[a]=l[a]);if(s)var u=s(n)}for(t&&t(o);c<i.length;c++)r=i[c],n.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return n.O(u)},o=self["webpackChunkpickem_app"]=self["webpackChunkpickem_app"]||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))}();var o=n.O(void 0,[998],(function(){return n(6395)}));o=n.O(o)})();
//# sourceMappingURL=app.e90743a8.js.map