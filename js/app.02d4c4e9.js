(function(t){function n(n){for(var a,r,i=n[0],c=n[1],l=n[2],p=0,_=[];p<i.length;p++)r=i[p],s[r]&&_.push(s[r][0]),s[r]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(t[a]=c[a]);u&&u(n);while(_.length)_.shift()();return o.push.apply(o,l||[]),e()}function e(){for(var t,n=0;n<o.length;n++){for(var e=o[n],a=!0,i=1;i<e.length;i++){var c=e[i];0!==s[c]&&(a=!1)}a&&(o.splice(n--,1),t=r(r.s=e[0]))}return t}var a={},s={app:0},o=[];function r(n){if(a[n])return a[n].exports;var e=a[n]={i:n,l:!1,exports:{}};return t[n].call(e.exports,e,e.exports,r),e.l=!0,e.exports}r.m=t,r.c=a,r.d=function(t,n,e){r.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:e})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,n){if(1&n&&(t=r(t)),8&n)return t;if(4&n&&"object"===typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(r.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var a in t)r.d(e,a,function(n){return t[n]}.bind(null,a));return e},r.n=function(t){var n=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(n,"a",n),n},r.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},r.p="";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=n,i=i.slice();for(var l=0;l<i.length;l++)n(i[l]);var u=c;o.push([0,"chunk-vendors"]),e()})({0:function(t,n,e){t.exports=e("56d7")},"0c53":function(t,n,e){},5052:function(t,n,e){t.exports=e.p+"img/ner@2x.44f61ee9.png"},"56d7":function(t,n,e){"use strict";e.r(n);e("cadf"),e("551c"),e("097d");var a=e("2b0e"),s=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"app",attrs:{id:"app"}},[e("generic-header",{attrs:{"no-headroom":"",position:"absolute","brand-options":{background:"white",color:"black"}}}),e("div",{staticClass:"position-relative bg-dark"},[e("app-jumbotron"),e("app-content")],1),e("generic-footer")],1)},o=[],r=function(){var t=this,n=t.$createElement;t._self._c;return t._m(0)},i=[function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"app__jumbotron clearfix"},[e("div",{staticClass:"app__jumbotron__container"},[e("h1",{staticClass:"app__jumbotron__container__heading mb-0"},[t._v("\n      Datashare\n    ")])])])}],c={name:"AppJumbotron"},l=c,u=(e("8733"),e("2877")),p=Object(u["a"])(l,r,i,!1,null,null,null);p.options.__file="AppJumbotron.vue";var _=p.exports,d=function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("div",{staticClass:"app__content"},[a("div",{},[a("section",{staticClass:"app__content__section"},[a("div",{staticClass:"app__content__section__wrapper"},[a("h4",{staticClass:"app__content__section__heading"},[t._v("\n          Allows every journalist to better analyze their documents\n        ")]),a("download-buttons",{staticClass:"app__content__section__download"})],1)]),a("section",{staticClass:"app__content__section app__content__section--ui"},[a("div",{staticClass:"app__content__section__wrapper"},[a("corner",{attrs:{direction:"top-left"}}),a("corner",{attrs:{direction:"bottom-left"}}),a("h4",{staticClass:"app__content__section__heading"},[t._v("\n          Index all your documents in one place on your local computer\n        ")]),a("p",{staticClass:"app__content__section__description"},[t._v("\n          Your documents are never sent to any third-party services\n        ")])],1),a("img",{staticClass:"app__content__section__preview",attrs:{src:e("996e"),srcset:e("996e")+" 1x, "+e("ea08")+" 2x"}})]),t._m(0),a("section",{staticClass:"app__content__section app__content__section--entities"},[a("div",{staticClass:"app__content__section__wrapper"},[a("corner",{attrs:{direction:"top-left"}}),a("corner",{attrs:{direction:"bottom-left"}}),a("h4",{staticClass:"app__content__section__heading"},[t._v("\n          Automatically highlight people, organizations and locations\n        ")]),a("p",{staticClass:"app__content__section__description"},[t._v("\n          Your searches are quicker thanks to named entity recognition\n        ")])],1),a("img",{staticClass:"app__content__section__preview",attrs:{src:e("6ae9"),srcset:e("6ae9")+" 1x, "+e("5052")+" 2x"}})]),a("section",{staticClass:"app__content__section app__content__section--os"},[a("div",{staticClass:"app__content__section__wrapper"},[a("h4",{staticClass:"app__content__section__heading"},[t._v("\n          An open-source project\n        ")]),t._m(1),a("download-buttons",{staticClass:"app__content__section__download"})],1)])])])},f=[function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("section",{staticClass:"app__content__section app__content__section--types"},[e("div",{staticClass:"app__content__section__wrapper"},[e("h4",{staticClass:"app__content__section__heading"},[t._v("\n          Search pdfs, images, texts, spreadsheets, slides and any of your files …all at once\n        ")]),e("p",{staticClass:"app__content__section__description"},[t._v("\n          Information isn’t locked in  various formats anymore\n        ")])])])},function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("p",{staticClass:"app__content__section__description"},[t._v("\n          Initially developed by ICIJ, it is supported by xxx, yyy, zzz."),e("br"),t._v("\n          Users and developers can give their feedback and contribute at\n          "),e("a",{attrs:{href:"https://github.com/icij/?q=datashare",target:"_blank"}},[t._v("github.com/ICIJ/datashare")]),t._v(".\n        ")])}],b=e("21f3"),v=e("538b"),h=e("2227"),m=e("b550"),w=e("e2a9"),g=e.n(w),C=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("svg",{staticClass:"corner",class:t.cornerDirectionClass,attrs:{height:"4.2333331mm",width:"4.2333331mm",viewBox:"0 0 14.999999 14.999999"}},[e("path",{style:{fill:t.fill},attrs:{d:"M 15,0 A 15,15 0 0 1 0,15 l 15,0 0,-15 z"}})])},x=[],y={name:"Corner",props:{fill:{type:String,default:"currentColor"},direction:{type:String,default:"top-left"}},computed:{cornerDirectionClass:function(){return"corner--".concat(this.direction)}}},j=y,O=(e("e6a6"),Object(u["a"])(j,C,x,!1,null,null,null));O.options.__file="Corner.vue";var k=O.exports,A=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"download-buttons text-center"},[e("div",{staticClass:"row mb-2"},["macos"===t.os?e("div",{staticClass:"col mb-2"},[e("a",{staticClass:"btn btn-block btn-lg btn-primary text-light download-buttons__button",attrs:{href:t.assetForApple}},[e("fa",{staticClass:"mr-2",attrs:{icon:["fab","apple"]}}),e("span",{staticClass:"sr-only"},[t._v("Apple")]),t._v("\n        Download for free\n      ")],1)]):"windows"===t.os?e("div",{staticClass:"col mb-2"},[e("a",{staticClass:"btn btn-block btn-lg btn-primary text-light download-buttons__button",attrs:{href:t.assetForWindows}},[e("fa",{staticClass:"mr-2",attrs:{icon:["fab","windows"]}}),e("span",{staticClass:"sr-only"},[t._v("Windows")]),t._v("\n        Download for free\n      ")],1)]):"linux"===t.os?e("div",{staticClass:"col mb-2"},[e("a",{staticClass:"btn btn-block btn-lg btn-primary text-light download-buttons__button",attrs:{href:t.assetForLinux}},[e("fa",{staticClass:"mr-2",attrs:{icon:["fab","linux"]}}),e("span",{staticClass:"sr-only"},[t._v("Linux")]),t._v("\n        Download for free\n      ")],1)]):t._e()]),e("p",{staticClass:"small m-0"},[t._v("\n    Version "+t._s(t.version)+" - "+t._s(t.year)+" -\n    "),e("a",{attrs:{href:"#"},on:{click:function(n){n.preventDefault(),t.$refs.downloadListModal.show()}}},[t._v("\n      Other platforms and versions\n    ")]),e("br"),t._v("\n    Datashare is an "),e("a",{attrs:{href:"https://github.com/icij/?q=datashare",target:"_blank"}},[t._v("open source")]),t._v(" project.\n  ")]),e("b-modal",{ref:"downloadListModal",attrs:{title:"Other platforms and versions","hide-footer":"",lazy:"",size:"md","body-class":"p-0","header-class":"border-0 card-header"}},[e("download-variants")],1)],1)},D=[],F=(e("7f7f"),e("96cf"),e("1da1")),M=e("3a5b"),L=e("2ef0"),W=e("34c7"),$=e("0719"),E=e("4bf4");function I(){var t=window.navigator.userAgent,n=window.navigator.platform,e=["Macintosh","MacIntel","MacPPC","Mac68K"],a=["Win32","Win64","Windows","WinCE"],s=["iPhone","iPad","iPod"];switch(!0){case-1!==e.indexOf(n):return"macos";case-1!==s.indexOf(n):return"ios";case-1!==a.indexOf(n):return"windows";case/Android/.test(t):return"android";case/Linux/.test(n):return"linux";default:return null}}var P=I(),S=e("bc3a"),z=e.n(S),J=e("e380"),T=e.n(J),B=e("f9ce"),R=e.n(B),V=z.a.create({baseURL:"https://api.github.com/repos/ICIJ/datashare-installer/"}),q=T()(function(){return V.get("releases/latest").then(R()("data"))}),U=T()(function(){return V.get("releases").then(R()("data"))}),Y=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("b-tabs",{staticClass:"m-0",attrs:{card:""}},[e("b-tab",{attrs:{"no-body":"",active:"is('macos')"}},[e("template",{slot:"title"},[e("fa",{attrs:{icon:["fab","apple"]}}),t._v(" Mac\n    ")],1),e("download-list",{attrs:{ext:".pkg"}})],2),e("b-tab",{attrs:{"no-body":"",active:"is('windows')"}},[e("template",{slot:"title"},[e("fa",{attrs:{icon:["fab","windows"]}}),t._v(" Windows\n    ")],1),e("download-list",{attrs:{ext:".exe"}})],2),e("b-tab",{attrs:{"no-body":"",active:"is('linux')"}},[e("template",{slot:"title"},[e("fa",{attrs:{icon:["fab","linux"]}}),t._v(" Linux\n    ")],1),e("download-list",{attrs:{ext:".sh"}})],2)],1)},K=[],G=e("40bb"),H=e("a212"),N=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("ul",{staticClass:"list-group list-group-flush text-left"},t._l(t.releases,function(n){return e("li",{staticClass:"list-group-item"},[e("a",{staticClass:"font-weight-bold",attrs:{href:t.asset(n).browser_download_url}},[e("fa",{staticClass:"mr-2",attrs:{icon:"download"}}),t._v(" "+t._s(n.name)+"\n    ")],1),e("span",{staticClass:"text-muted float-right"},[t._v("\n      "+t._s(t.publishedAt(n))+"\n    ")])])}),0)},Q=[],X=(e("28a5"),e("3092"),e("81be")),Z=e.n(X),tt=e("9380"),nt=e.n(tt),et=e("2769"),at=e.n(et),st=e("93c6"),ot=e.n(st),rt=e("5b6d");m["a"].add(rt["faDownload"]);var it={name:"DownloadList",props:{ext:{type:String}},data:function(){return{releases:[]}},components:{Fa:w["Fa"]},mounted:function(){var t=Object(F["a"])(regeneratorRuntime.mark(function t(){var n=this;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,U();case 2:this.releases=t.sent,this.releases=nt()(this.releases,function(t){return!!n.asset(t)}),this.releases=ot()(this.releases,function(t){return t.name.split(".")},"desc");case 5:case"end":return t.stop()}},t,this)}));function n(){return t.apply(this,arguments)}return n}(),methods:{asset:function(t){var n=this;return at()(t.assets,function(t){var e=t.name;return Z()(e,n.ext)})},publishedAt:function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{year:"numeric",month:"short"},e=new Date(t.published_at);return new Intl.DateTimeFormat("en-US",n).format(e)}}},ct=it,lt=Object(u["a"])(ct,N,Q,!1,null,null,null);lt.options.__file="DownloadList.vue";var ut=lt.exports;m["a"].add($["faApple"],W["faWindows"],E["faLinux"]);var pt={name:"DownloadVariants",components:{bTabs:G["a"],bTab:H["a"],DownloadList:ut,Fa:w["Fa"]},methods:{is:function(t){return P===t}}},_t=pt,dt=Object(u["a"])(_t,Y,K,!1,null,null,null);dt.options.__file="DownloadVariants.vue";var ft=dt.exports;m["a"].add($["faApple"],W["faWindows"],E["faLinux"]);var bt={name:"DownloadButtons",components:{bModal:M["a"],DownloadVariants:ft,Fa:w["Fa"]},data:function(){return{os:P,version:null,year:null,assets:[]}},mounted:function(){var t=Object(F["a"])(regeneratorRuntime.mark(function t(){var n;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,q();case 2:n=t.sent,this.version=n.tag_name,this.assets=n.assets,this.year=new Date(n.created_at).getFullYear();case 6:case"end":return t.stop()}},t,this)}));function n(){return t.apply(this,arguments)}return n}(),computed:{assetForApple:function(){return Object(L["get"])(Object(L["find"])(this.assets,function(t){return Object(L["endsWith"])(t.name,".pkg")}),"browser_download_url",null)},assetForWindows:function(){return Object(L["get"])(Object(L["find"])(this.assets,function(t){return Object(L["endsWith"])(t.name,".exe")}),"browser_download_url",null)},assetForLinux:function(){return Object(L["get"])(Object(L["find"])(this.assets,function(t){return Object(L["endsWith"])(t.name,".sh")}),"browser_download_url",null)}}},vt=bt,ht=(e("d0c0"),Object(u["a"])(vt,A,D,!1,null,"b2fd9ec6",null));ht.options.__file="DownloadButtons.vue";var mt=ht.exports;m["a"].add(b["faMapMarkerAlt"],v["faMale"],h["faBuilding"]);var wt={name:"AppContent",components:{Corner:k,DownloadButtons:mt,Fa:w["Fa"]}},gt=wt,Ct=(e("93a6"),Object(u["a"])(gt,d,f,!1,null,"5c92dd84",null));Ct.options.__file="AppContent.vue";var xt=Ct.exports,yt={name:"app",components:{AppContent:xt,AppJumbotron:_}},jt=yt,Ot=(e("c796"),Object(u["a"])(jt,s,o,!1,null,null,null));Ot.options.__file="App.vue";var kt=Ot.exports;e("abe2");a["default"].config.productionTip=!1,a["default"].use(g.a),new a["default"]({render:function(t){return t(kt)}}).$mount("#app")},"6ae9":function(t,n,e){t.exports=e.p+"img/ner.c0db0b85.png"},8733:function(t,n,e){"use strict";var a=e("ad51"),s=e.n(a);s.a},"8e8e":function(t,n,e){},"93a6":function(t,n,e){"use strict";var a=e("8e8e"),s=e.n(a);s.a},"996e":function(t,n,e){t.exports=e.p+"img/extract.aed1e2ab.png"},abe2:function(t,n,e){},ad51:function(t,n,e){},c796:function(t,n,e){"use strict";var a=e("dd6b"),s=e.n(a);s.a},d0c0:function(t,n,e){"use strict";var a=e("e582"),s=e.n(a);s.a},dd6b:function(t,n,e){},e582:function(t,n,e){},e6a6:function(t,n,e){"use strict";var a=e("0c53"),s=e.n(a);s.a},ea08:function(t,n,e){t.exports=e.p+"img/extract@2x.a21c0926.png"}});
//# sourceMappingURL=app.02d4c4e9.js.map