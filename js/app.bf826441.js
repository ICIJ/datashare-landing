(function(t){function n(n){for(var a,r,i=n[0],c=n[1],l=n[2],_=0,d=[];_<i.length;_++)r=i[_],s[r]&&d.push(s[r][0]),s[r]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(t[a]=c[a]);u&&u(n);while(d.length)d.shift()();return o.push.apply(o,l||[]),e()}function e(){for(var t,n=0;n<o.length;n++){for(var e=o[n],a=!0,i=1;i<e.length;i++){var c=e[i];0!==s[c]&&(a=!1)}a&&(o.splice(n--,1),t=r(r.s=e[0]))}return t}var a={},s={app:0},o=[];function r(n){if(a[n])return a[n].exports;var e=a[n]={i:n,l:!1,exports:{}};return t[n].call(e.exports,e,e.exports,r),e.l=!0,e.exports}r.m=t,r.c=a,r.d=function(t,n,e){r.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:e})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,n){if(1&n&&(t=r(t)),8&n)return t;if(4&n&&"object"===typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(r.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var a in t)r.d(e,a,function(n){return t[n]}.bind(null,a));return e},r.n=function(t){var n=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(n,"a",n),n},r.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},r.p="";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=n,i=i.slice();for(var l=0;l<i.length;l++)n(i[l]);var u=c;o.push([0,"chunk-vendors"]),e()})({0:function(t,n,e){t.exports=e("56d7")},"0195":function(t,n,e){"use strict";var a=e("bfb6"),s=e.n(a);s.a},"4d1f":function(t,n,e){},5052:function(t,n,e){t.exports=e.p+"img/ner@2x.44f61ee9.png"},"56d7":function(t,n,e){"use strict";e.r(n);e("cadf"),e("551c"),e("097d");var a=e("2b0e"),s=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"app",attrs:{id:"app"}},[e("generic-header",{attrs:{"no-headroom":"","brand-options":{background:"white",color:"black"}}}),e("div",{staticClass:"position-relative bg-dark"},[e("app-jumbotron"),e("app-content")],1),e("generic-footer")],1)},o=[],r=function(){var t=this,n=t.$createElement;t._self._c;return t._m(0)},i=[function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"app__jumbotron clearfix"},[e("div",{staticClass:"app__jumbotron__container"},[e("h1",{staticClass:"app__jumbotron__container__heading mb-0"},[t._v("\n      Datashare\n    ")])])])}],c={name:"AppJumbotron"},l=c,u=(e("8733"),e("2877")),_=Object(u["a"])(l,r,i,!1,null,null,null);_.options.__file="AppJumbotron.vue";var d=_.exports,p=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"app__content"},[e("div",{},[e("section",{staticClass:"app__content__section"},[e("div",[e("h4",{staticClass:"app__content__section__heading"},[t._v("\n          Datashare allows every journalist to better analyze their documents\n        ")]),e("download-buttons",{staticClass:"app__content__section__download"})],1)]),t._m(0),t._m(1),t._m(2),e("section",{staticClass:"app__content__section app__content__section--os"},[e("div",[e("h4",{staticClass:"app__content__section__heading"},[t._v("\n          Datashare is an open-source project\n        ")]),t._m(3),e("download-buttons",{staticClass:"app__content__section__download"})],1)])])])},f=[function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("section",{staticClass:"app__content__section app__content__section--ui"},[a("div",[a("h4",{staticClass:"app__content__section__heading"},[t._v("\n          Datashare indexes all your documents in one place on your local computer\n        ")]),a("p",{staticClass:"app__content__section__description"},[t._v("\n          Your documents are never sent to any third-party services\n        ")])]),a("img",{staticClass:"app__content__section__preview",attrs:{src:e("996e"),srcset:e("996e")+" 1x, "+e("ea08")+" 2x"}})])},function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("section",{staticClass:"app__content__section app__content__section--types"},[e("div",[e("h4",{staticClass:"app__content__section__heading"},[t._v("\n          You  search pdfs, images, texts, spreadsheets, slides and any of your files …all at once\n        ")]),e("p",{staticClass:"app__content__section__description"},[t._v("\n          Information isn’t locked in  various formats anymore\n        ")])])])},function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("section",{staticClass:"app__content__section app__content__section--entities"},[a("div",[a("h4",{staticClass:"app__content__section__heading"},[t._v("\n          Datashare automatically highlights people, organizations and locations\n        ")]),a("p",{staticClass:"app__content__section__description"},[t._v("\n          Your searches are quicker thanks to named entity recognition\n        ")])]),a("img",{staticClass:"app__content__section__preview",attrs:{src:e("6ae9"),srcset:e("6ae9")+" 1x, "+e("5052")+" 2x"}})])},function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("p",{staticClass:"app__content__section__description"},[t._v("\n          Initially developed by ICIJ, it is supported by xxx, yyy, zzz."),e("br"),t._v("\n          Users and developers can give their feedback and contribute at\n          "),e("a",{attrs:{href:"https://github.com/ICIJ/datashare",target:"_blank"}},[t._v("github.com/ICIJ/datashare")]),t._v(".\n        ")])}],b=e("21f3"),v=e("538b"),h=e("2227"),m=e("b550"),w=e("e2a9"),g=e.n(w),x=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"download-buttons text-center"},[e("div",{staticClass:"row mb-2"},["macos"===t.os?e("div",{staticClass:"col mb-2"},[e("a",{staticClass:"btn btn-block btn-lg btn-light download-buttons__button",attrs:{href:t.assetForApple}},[e("fa",{staticClass:"mr-2",attrs:{icon:["fab","apple"]}}),e("span",{staticClass:"sr-only"},[t._v("Apple")]),t._v("\n        Download for free\n      ")],1)]):"windows"===t.os?e("div",{staticClass:"col mb-2"},[e("a",{staticClass:"btn btn-block btn-lg btn-light download-buttons__button",attrs:{href:t.assetForWindows}},[e("fa",{staticClass:"mr-2",attrs:{icon:["fab","windows"]}}),e("span",{staticClass:"sr-only"},[t._v("Windows")]),t._v("\n        Download for free\n      ")],1)]):"linux"===t.os?e("div",{staticClass:"col mb-2"},[e("a",{staticClass:"btn btn-block btn-lg btn-light download-buttons__button",attrs:{href:t.assetForLinux}},[e("fa",{staticClass:"mr-2",attrs:{icon:["fab","linux"]}}),e("span",{staticClass:"sr-only"},[t._v("Linux")]),t._v("\n        Download for free\n      ")],1)]):t._e(),e("div",{staticClass:"col mb-2"},[e("a",{staticClass:"btn btn-block btn-lg btn-light font-weight-normal download-buttons__button",on:{click:function(n){n.preventDefault(),t.$refs.downloadListModal.show()}}},[t._v("\n        Other platforms\n      ")])])]),e("p",{staticClass:"small m-0"},[t._v("\n    Version "+t._s(t.version)+" - "+t._s(t.year)),e("br"),t._v("\n    By downloading, you agree to the "),e("a",[t._v("Terms and Conditions")]),e("br"),t._v("\n    Datashare is an "),e("a",[t._v("open-source")]),t._v(" project.\n  ")]),e("b-modal",{ref:"downloadListModal",attrs:{title:"Other platforms and versions","hide-footer":"",lazy:"",size:"md","body-class":"p-0","header-class":"border-0 card-header"}},[e("download-variants")],1)],1)},C=[],y=(e("7f7f"),e("96cf"),e("1da1")),j=e("3a5b"),O=e("2ef0"),D=e("34c7"),k=e("0719"),A=e("4bf4");function F(){var t=window.navigator.userAgent,n=window.navigator.platform,e=["Macintosh","MacIntel","MacPPC","Mac68K"],a=["Win32","Win64","Windows","WinCE"],s=["iPhone","iPad","iPod"];switch(!0){case-1!==e.indexOf(n):return"macos";case-1!==s.indexOf(n):return"ios";case-1!==a.indexOf(n):return"windows";case/Android/.test(t):return"android";case/Linux/.test(n):return"linux";default:return null}}var M=F(),L=e("bc3a"),W=e.n(L),$=e("e380"),E=e.n($),I=e("f9ce"),P=e.n(I),J=W.a.create({baseURL:"https://api.github.com/repos/ICIJ/datashare-installer/"}),z=E()(function(){return J.get("releases/latest").then(P()("data"))}),S=E()(function(){return J.get("releases").then(P()("data"))}),T=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("b-tabs",{staticClass:"m-0",attrs:{card:""}},[e("b-tab",{attrs:{"no-body":"",active:"is('macos')"}},[e("template",{slot:"title"},[e("fa",{attrs:{icon:["fab","apple"]}}),t._v(" Mac\n    ")],1),e("download-list",{attrs:{ext:".pkg"}})],2),e("b-tab",{attrs:{"no-body":"",active:"is('windows')"}},[e("template",{slot:"title"},[e("fa",{attrs:{icon:["fab","windows"]}}),t._v(" Windows\n    ")],1),e("download-list",{attrs:{ext:".exe"}})],2),e("b-tab",{attrs:{"no-body":"",active:"is('linux')"}},[e("template",{slot:"title"},[e("fa",{attrs:{icon:["fab","linux"]}}),t._v(" Linux\n    ")],1),e("download-list",{attrs:{ext:".sh"}})],2)],1)},B=[],R=e("40bb"),V=e("a212"),Y=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("ul",{staticClass:"list-group list-group-flush text-left"},t._l(t.releases,function(n){return e("li",{staticClass:"list-group-item"},[e("a",{staticClass:"font-weight-bold",attrs:{href:t.asset(n).browser_download_url}},[e("fa",{staticClass:"mr-2",attrs:{icon:"download"}}),t._v(" "+t._s(n.name)+"\n    ")],1),e("span",{staticClass:"text-muted float-right"},[t._v("\n      "+t._s(t.publishedAt(n))+"\n    ")])])}),0)},U=[],q=(e("28a5"),e("3092"),e("81be")),K=e.n(q),G=e("9380"),H=e.n(G),N=e("2769"),Q=e.n(N),X=e("93c6"),Z=e.n(X),tt=e("5b6d");m["a"].add(tt["faDownload"]);var nt={name:"DownloadList",props:{ext:{type:String}},data:function(){return{releases:[]}},components:{Fa:w["Fa"]},mounted:function(){var t=Object(y["a"])(regeneratorRuntime.mark(function t(){var n=this;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,S();case 2:this.releases=t.sent,this.releases=H()(this.releases,function(t){return!!n.asset(t)}),this.releases=Z()(this.releases,function(t){return t.name.split(".")},"desc");case 5:case"end":return t.stop()}},t,this)}));function n(){return t.apply(this,arguments)}return n}(),methods:{asset:function(t){var n=this;return Q()(t.assets,function(t){var e=t.name;return K()(e,n.ext)})},publishedAt:function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{year:"numeric",month:"short"},e=new Date(t.published_at);return new Intl.DateTimeFormat("en-US",n).format(e)}}},et=nt,at=Object(u["a"])(et,Y,U,!1,null,null,null);at.options.__file="DownloadList.vue";var st=at.exports;m["a"].add(k["faApple"],D["faWindows"],A["faLinux"]);var ot={name:"DownloadVariants",components:{bTabs:R["a"],bTab:V["a"],DownloadList:st,Fa:w["Fa"]},methods:{is:function(t){return M===t}}},rt=ot,it=Object(u["a"])(rt,T,B,!1,null,null,null);it.options.__file="DownloadVariants.vue";var ct=it.exports;m["a"].add(k["faApple"],D["faWindows"],A["faLinux"]);var lt={name:"DownloadButtons",components:{bModal:j["a"],DownloadVariants:ct,Fa:w["Fa"]},data:function(){return{os:M,version:null,year:null,assets:[]}},mounted:function(){var t=Object(y["a"])(regeneratorRuntime.mark(function t(){var n;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,z();case 2:n=t.sent,this.version=n.tag_name,this.assets=n.assets,this.year=new Date(n.created_at).getFullYear();case 6:case"end":return t.stop()}},t,this)}));function n(){return t.apply(this,arguments)}return n}(),computed:{assetForApple:function(){return Object(O["get"])(Object(O["find"])(this.assets,function(t){return Object(O["endsWith"])(t.name,".pkg")}),"browser_download_url",null)},assetForWindows:function(){return Object(O["get"])(Object(O["find"])(this.assets,function(t){return Object(O["endsWith"])(t.name,".exe")}),"browser_download_url",null)},assetForLinux:function(){return Object(O["get"])(Object(O["find"])(this.assets,function(t){return Object(O["endsWith"])(t.name,".sh")}),"browser_download_url",null)}}},ut=lt,_t=(e("6949"),Object(u["a"])(ut,x,C,!1,null,"1cea8e47",null));_t.options.__file="DownloadButtons.vue";var dt=_t.exports;m["a"].add(b["faMapMarkerAlt"],v["faMale"],h["faBuilding"]);var pt={name:"AppContent",components:{DownloadButtons:dt,Fa:w["Fa"]}},ft=pt,bt=(e("0195"),Object(u["a"])(ft,p,f,!1,null,"44902b17",null));bt.options.__file="AppContent.vue";var vt=bt.exports,ht={name:"app",components:{AppContent:vt,AppJumbotron:d}},mt=ht,wt=(e("c796"),Object(u["a"])(mt,s,o,!1,null,null,null));wt.options.__file="App.vue";var gt=wt.exports;e("abe2");a["default"].config.productionTip=!1,a["default"].use(g.a),new a["default"]({render:function(t){return t(gt)}}).$mount("#app")},6949:function(t,n,e){"use strict";var a=e("4d1f"),s=e.n(a);s.a},"6ae9":function(t,n,e){t.exports=e.p+"img/ner.c0db0b85.png"},8733:function(t,n,e){"use strict";var a=e("ad51"),s=e.n(a);s.a},"996e":function(t,n,e){t.exports=e.p+"img/extract.aed1e2ab.png"},abe2:function(t,n,e){},ad51:function(t,n,e){},bfb6:function(t,n,e){},c796:function(t,n,e){"use strict";var a=e("dd6b"),s=e.n(a);s.a},dd6b:function(t,n,e){},ea08:function(t,n,e){t.exports=e.p+"img/extract@2x.a21c0926.png"}});
//# sourceMappingURL=app.bf826441.js.map