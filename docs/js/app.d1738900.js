(function(t){function e(e){for(var s,r,o=e[0],c=e[1],l=e[2],p=0,v=[];p<o.length;p++)r=o[p],Object.prototype.hasOwnProperty.call(i,r)&&i[r]&&v.push(i[r][0]),i[r]=0;for(s in c)Object.prototype.hasOwnProperty.call(c,s)&&(t[s]=c[s]);u&&u(e);while(v.length)v.shift()();return n.push.apply(n,l||[]),a()}function a(){for(var t,e=0;e<n.length;e++){for(var a=n[e],s=!0,o=1;o<a.length;o++){var c=a[o];0!==i[c]&&(s=!1)}s&&(n.splice(e--,1),t=r(r.s=a[0]))}return t}var s={},i={app:0},n=[];function r(e){if(s[e])return s[e].exports;var a=s[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,r),a.l=!0,a.exports}r.m=t,r.c=s,r.d=function(t,e,a){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(r.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)r.d(a,s,function(e){return t[e]}.bind(null,s));return a},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=e,o=o.slice();for(var l=0;l<o.length;l++)e(o[l]);var u=c;n.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"015d":function(t,e,a){t.exports=a.p+"img/brunch.8e71f9ba.png"},"034f":function(t,e,a){"use strict";a("85ec")},"1fa4":function(t,e,a){t.exports=a.p+"img/catheter.69f5b579.png"},"359c":function(t,e,a){t.exports=a.p+"img/github.ec3a60c8.png"},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var s=a("2b0e"),i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("b-navbar",{scopedSlots:t._u([{key:"end",fn:function(){return[a("b-navbar-item",{attrs:{tag:"router-link",to:{path:"/"}}},[t._v(" Home ")]),a("b-navbar-item",{attrs:{tag:"router-link",to:{path:"/publications"}}},[t._v(" Publications ")]),a("b-navbar-item",{attrs:{tag:"router-link",to:{path:"/awards"}}},[t._v(" Awards ")]),a("b-navbar-item",{attrs:{tag:"router-link",to:{path:"/experiences"}}},[t._v(" Experiences ")])]},proxy:!0}])}),a("router-view")],1)},n=[],r={name:"App"},o=r,c=(a("034f"),a("2877")),l=Object(c["a"])(o,i,n,!1,null,null,null),u=l.exports,p=a("289d"),v=(a("5abe"),a("8c4f")),d=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("section",{staticClass:"hero is-fullheight-with-navbar"},[s("div",{staticClass:"hero-body"},[s("div",{staticClass:"container"},[s("b-image",{staticClass:"is-inline-block mb-6",staticStyle:{width:"300px"},attrs:{src:a("85ca"),rounded:"true"}}),s("div",{staticClass:"has-text-left px-2"},[t._m(0),t._m(1),s("div",{staticClass:"block"},[s("a",{staticClass:"mr-2",attrs:{href:"https://github.com/seunghyukcho"}},[s("img",{attrs:{src:a("359c"),width:"48"}})]),s("a",{attrs:{href:"https://brunch.co.kr/@choseunghyek"}},[s("img",{attrs:{src:a("015d"),width:"48"}})])])])],1)])])},h=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"title pb-2 is-inline-block"},[a("div",{staticClass:"is-inline-block typewriter is-size-5-mobile"},[t._v(" Hello! My name is Seunghyuk Cho ")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"subtitle is-size-6-mobile"},[t._v(" I'm a graduate student in "),a("a",{attrs:{href:"https://ml.postech.ac.kr"}},[t._v("POSTECH ML Lab.")]),a("br"),t._v(" I'm interested in crowdsourcing, variational inference and generative models."),a("br"),t._v(" You can see more details in my "),a("a",{attrs:{href:"https://postechackr-my.sharepoint.com/:b:/g/personal/shhj1998_postech_ac_kr/EcKNl3iUXDpBkpVyi976KsAB5HH9eAstxlLX9ZDGVZMN7w?e=wem7Er"}},[t._v("CV")]),t._v(" and contact me at shhj1998@postech.ac.kr. ")])}],m={name:"Home"},f=m,_=(a("8b71"),Object(c["a"])(f,d,h,!1,null,null,null)),b=_.exports,C=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[t._m(0),s("div",{staticClass:"container px-5"},[s("h1",{staticClass:"title has-text-left"},[t._v("Pre-print")]),s("div",{staticClass:"columns"},[s("div",{staticClass:"column"},[s("div",{staticClass:"card has-text-left"},[t._m(1),s("div",{staticClass:"card-content"},[s("div",{staticClass:"content"},[t._m(2),s("b-image",{attrs:{src:a("cf57")}})],1)])])]),s("div",{staticClass:"column"},[s("div",{staticClass:"card has-text-left"},[t._m(3),s("div",{staticClass:"card-content"},[s("div",{staticClass:"content"},[t._m(4),s("b-image",{attrs:{src:a("1fa4")}})],1)])])]),s("div",{staticClass:"column"})])])])},g=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{staticClass:"hero is-medium is-info mb-6"},[a("div",{staticClass:"hero-body"},[a("p",{staticClass:"title"},[t._v(" Publications ")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("header",{staticClass:"card-header"},[a("p",{staticClass:"card-header-title"},[t._v(" Robust Deep Learning from Crowds with Belief Propagation ")]),a("button",{staticClass:"card-header-icon"},[a("span",{staticClass:"icon"},[a("a",{staticClass:"fas fa-external-link-alt",attrs:{href:"https://arxiv.org/abs/2111.00734"}})])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"is-size-7"},[t._v(" Hoyoung Kim"),a("sup",[t._v("*")]),t._v(", "),a("b",[t._v("Seunghyuk Cho")]),a("sup",[t._v("*")]),t._v(", Dongwoo Kim, Jungseul Ok ")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("header",{staticClass:"card-header"},[a("p",{staticClass:"card-header-title"},[t._v(" Roughly Collected Dataset for Contact Force Sensing Catheter ")]),a("button",{staticClass:"card-header-icon"},[a("span",{staticClass:"icon"},[a("a",{staticClass:"fas fa-external-link-alt",attrs:{href:"https://arxiv.org/abs/2102.01932"}})])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"is-size-7"},[a("b",[t._v("Seunghyuk Cho")]),a("sup",[t._v("*")]),t._v(", Minsoo Koo"),a("sup",[t._v("*")]),t._v(", Dongwoo Kim, Juyoung Lee, Yeonwoo Jung, Kibyung Nam, Changmo Hwang ")])}],w={name:"Pub"},x=w,y=Object(c["a"])(x,C,g,!1,null,null,null),S=y.exports,k=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},E=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("section",{staticClass:"hero is-medium is-success mb-6"},[a("div",{staticClass:"hero-body"},[a("p",{staticClass:"title"},[t._v(" Awards ")])])]),a("div",{staticClass:"px-5"},[a("div",{staticClass:"mb-6 container has-text-left"},[a("h1",{staticClass:"title"},[t._v("Algorithm")]),a("div",{staticClass:"content"},[a("ul",[a("li",[t._v("Korea Olympiad in Informatics 2015, Participation prize")]),a("li",[t._v("Korea Olympiad in Informatics 2016, Bronze prize")]),a("li",[t._v("Samsung Collegiate Programming Cup 2018, Advanced to the finals (top 6.5% of 1756 peoples)")]),a("li",[t._v("Samsung Collegiate Programming Cup 2019, Advanced to the finals (top 6.14% of 2248 peoples)")]),a("li",[t._v("UCPC 2019, Advanced to the finals (top 17% of 280 teams)")]),a("li",[t._v("UCPC 2021, 10th place (top 3.75% of 266 teams)")])])])]),a("div",{staticClass:"mb-6 container has-text-left"},[a("h1",{staticClass:"title"},[t._v("AI")]),a("div",{staticClass:"content"},[a("ul",[a("li",[t._v("POSTECH-KAIST Science War 2017, AI Competition, Win")]),a("li",[t._v("POSTECH-KAIST Science War 2018, AI Competition, Win")]),a("li",[t._v("Samsung DS Connect6 Algorithm Contest 2018, Advanced to the finals")]),a("li",[a("a",{attrs:{href:"https://www.kpx.or.kr/www/selectBbsNttView.do?key=96&bbsNo=2&nttNo=19377"}},[t._v("Renewable Energy Power Prediction Contest 2019")]),t._v(", Advanced to the finals")])])])]),a("div",{staticClass:"mb-6 container has-text-left"},[a("h1",{staticClass:"title"},[t._v("Etc")]),a("div",{staticClass:"content"},[a("ul",[a("li",[a("a",{attrs:{href:"https://github.com/D2CampusFest/7th"}},[t._v("D2 Campus Fest Mini 2019")]),t._v(", Android development, 2nd prize")]),a("li",[t._v("POSTECH-KAIST Science War 2019, Science Quiz Competition, Win")]),a("li",[t._v("Seoul Hardware Hackathon 2021, 2nd Prize")])])])])])])}],P={name:"Award"},A=P,O=Object(c["a"])(A,k,E,!1,null,null,null),j=O.exports,H=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},$=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("section",{staticClass:"hero is-medium is-link mb-6"},[a("div",{staticClass:"hero-body"},[a("p",{staticClass:"title"},[t._v(" Experiences ")])])]),a("div",{staticClass:"px-5"},[a("div",{staticClass:"mb-6 container has-text-left"},[a("h1",{staticClass:"title"},[t._v("Educations")]),a("div",{staticClass:"content"},[a("ul",[a("li",[t._v("POSTECH, B.S.E (Major: Computer Science and Engineering), Feb 2017 ~ Aug 2021")]),a("li",[t._v("POSTECH, M.S. (Advisor: "),a("a",{attrs:{href:"http://dongwookim-ml.github.io"}},[t._v("Dongwoo Kim")]),t._v("), Sep 2021 ~")])])])]),a("div",{staticClass:"mb-6 container has-text-left"},[a("h1",{staticClass:"title"},[t._v("Work Experiences")]),a("div",{staticClass:"content"},[a("ul",[a("li",[t._v("Polaris3D, Fullstack Developer, Jun 2018 ~ Aug 2018")]),a("li",[t._v("Samsung S-Core, Software Engineer, Jan 2019 ~ Feb 2019")]),a("li",[t._v("Asan Medical Center, Researcher, Jan 2020 ~ Feb 2020")]),a("li",[t._v("Naver Clova AI, Researcher, Jul 2020 ~ Dec 2020")])])])])])])}],D={name:"Exp"},K=D,M=Object(c["a"])(K,H,$,!1,null,null,null),T=M.exports;s["a"].use(v["a"]);var I=[{path:"/",name:"Home",component:b},{path:"/publications",name:"Pub",component:S},{path:"/awards",name:"Award",component:j},{path:"/experiences",name:"Exp",component:T}],z=new v["a"]({mode:"history",base:"/",routes:I}),J=z;s["a"].config.productionTip=!1,s["a"].use(p["a"]),new s["a"]({router:J,render:function(t){return t(u)}}).$mount("#app")},"85ca":function(t,e,a){t.exports=a.p+"img/selfie.33e2203e.jpeg"},"85ec":function(t,e,a){},"88d7":function(t,e,a){},"8b71":function(t,e,a){"use strict";a("88d7")},cf57:function(t,e,a){t.exports=a.p+"img/deepbp.8e8a21c5.png"}});
//# sourceMappingURL=app.d1738900.js.map