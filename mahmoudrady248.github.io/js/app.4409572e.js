(function(e){function t(t){for(var n,r,s=t[0],l=t[1],c=t[2],u=0,p=[];u<s.length;u++)r=s[u],o[r]&&p.push(o[r][0]),o[r]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(e[n]=l[n]);d&&d(t);while(p.length)p.shift()();return i.push.apply(i,c||[]),a()}function a(){for(var e,t=0;t<i.length;t++){for(var a=i[t],n=!0,r=1;r<a.length;r++){var s=a[r];0!==o[s]&&(n=!1)}n&&(i.splice(t--,1),e=l(l.s=a[0]))}return e}var n={},r={app:0},o={app:0},i=[];function s(e){return l.p+"js/"+({}[e]||e)+"."+{"chunk-07f49cd4":"06597dc8","chunk-2d21a988":"53fc8e57","chunk-5676d410":"83ba8a0b"}[e]+".js"}function l(t){if(n[t])return n[t].exports;var a=n[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,l),a.l=!0,a.exports}l.e=function(e){var t=[],a={"chunk-07f49cd4":1,"chunk-5676d410":1};r[e]?t.push(r[e]):0!==r[e]&&a[e]&&t.push(r[e]=new Promise(function(t,a){for(var n="css/"+({}[e]||e)+"."+{"chunk-07f49cd4":"81923469","chunk-2d21a988":"31d6cfe0","chunk-5676d410":"81923469"}[e]+".css",r=l.p+n,o=document.getElementsByTagName("link"),i=0;i<o.length;i++){var s=o[i],c=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(c===n||c===r))return t()}var u=document.getElementsByTagName("style");for(i=0;i<u.length;i++){s=u[i],c=s.getAttribute("data-href");if(c===n||c===r)return t()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=t,p.onerror=function(t){var n=t&&t.target&&t.target.src||r,o=new Error("Loading CSS chunk "+e+" failed.\n("+n+")");o.request=n,a(o)},p.href=r;var d=document.getElementsByTagName("head")[0];d.appendChild(p)}).then(function(){r[e]=0}));var n=o[e];if(0!==n)if(n)t.push(n[2]);else{var i=new Promise(function(t,a){n=o[e]=[t,a]});t.push(n[2]=i);var c,u=document.getElementsByTagName("head")[0],p=document.createElement("script");p.charset="utf-8",p.timeout=120,l.nc&&p.setAttribute("nonce",l.nc),p.src=s(e),c=function(t){p.onerror=p.onload=null,clearTimeout(d);var a=o[e];if(0!==a){if(a){var n=t&&("load"===t.type?"missing":t.type),r=t&&t.target&&t.target.src,i=new Error("Loading chunk "+e+" failed.\n("+n+": "+r+")");i.type=n,i.request=r,a[1](i)}o[e]=void 0}};var d=setTimeout(function(){c({type:"timeout",target:p})},12e4);p.onerror=p.onload=c,u.appendChild(p)}return Promise.all(t)},l.m=e,l.c=n,l.d=function(e,t,a){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},l.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(l.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)l.d(a,n,function(t){return e[t]}.bind(null,n));return a},l.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="/",l.oe=function(e){throw console.error(e),e};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],u=c.push.bind(c);c.push=t,c=c.slice();for(var p=0;p<c.length;p++)t(c[p]);var d=u;i.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"56d7":function(e,t,a){"use strict";a.r(t);a("cadf"),a("551c"),a("097d");var n=a("2b0e"),r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"app"}},[a("Navbar"),a("div",{staticClass:"container mt-3 text-left"},[a("router-view")],1)],1)},o=[],i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("nav",{staticClass:"navbar navbar-expand-lg navbar-dark bg-dark"},[a("div",{staticClass:"container"},[a("router-link",{staticClass:"navbar-brand mr-auto",attrs:{to:"/"}},[e._v("\n            Employee Manager\n        ")]),e._m(0),a("div",{staticClass:"collapse navbar-collapse ",attrs:{id:"navbarNavAltMarkup"}},[a("div",{staticClass:"navbar-nav ml-auto"},[a("router-link",{staticClass:"nav-item nav-link",attrs:{to:"/",exact:"","active-class":"active"}},[e._v("Home")]),a("router-link",{staticClass:"ml-2 btn btn-success btn-sm",attrs:{to:"/New",tag:"button",exact:"","active-class":"active"}},[e._v("Add New Employee "),a("i",{staticClass:"fa fa-plus"})])],1)])],1)])},s=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("button",{staticClass:"navbar-toggler",attrs:{type:"button","data-toggle":"collapse","data-target":"#navbarNavAltMarkup","aria-controls":"navbarNavAltMarkup","aria-expanded":"false","aria-label":"Toggle navigation"}},[a("span",{staticClass:"navbar-toggler-icon"})])}],l=a("2877"),c={},u=Object(l["a"])(c,i,s,!1,null,null,null);u.options.__file="Navbar.vue";var p=u.exports,d={data:function(){return{}},components:{Navbar:p}},f=d,v=Object(l["a"])(f,r,o,!1,null,null,null);v.options.__file="App.vue";var m=v.exports,b=a("8c4f"),h=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("h3",{staticClass:"mb-3"},[e._v("Employees")]),a("ul",{staticClass:"list-group"},e._l(e.employees,function(t){return a("li",{key:t.id,staticClass:"list-group-item d-flex justify-content-between align-items-center"},[a("div",[a("span",{staticClass:"badge badge-warning badge-pill mr-2"},[e._v(e._s(t.dept))]),e._v("\n                "+e._s(t.name)+"\n            ")]),a("router-link",{attrs:{to:"/"+t.employee_id}},[a("i",{staticClass:"fa fa-eye"})])],1)}))])},g=[],y=(a("7f7f"),a("ac6a"),a("deef")),_={data:function(){return{employees:[]}},created:function(){var e=this;y["a"].collection("employees").get().then(function(t){t.forEach(function(t){var a={id:t.id,employee_id:t.data().employee_id,name:t.data().name,dept:t.data().dept,position:t.data().position};e.employees.push(a)})})}},k=_,w=Object(l["a"])(k,h,g,!1,null,null,null);w.options.__file="Dashboard.vue";var C=w.exports;n["a"].use(b["a"]);var x=new b["a"]({mode:"history",base:"/",routes:[{path:"/",name:"Dashboard",component:C},{path:"/New",name:"new-employee",component:function(){return a.e("chunk-07f49cd4").then(a.bind(null,"9024"))}},{path:"/edit/:employee_id",name:"edit-employee",component:function(){return a.e("chunk-5676d410").then(a.bind(null,"e712"))}},{path:"/:employee_id",name:"view-employee",component:function(){return a.e("chunk-2d21a988").then(a.bind(null,"bbd6"))}}]});n["a"].config.productionTip=!1,new n["a"]({router:x,render:function(e){return e(m)}}).$mount("#app")},deef:function(e,t,a){"use strict";var n=a("8aa5"),r=a.n(n),o=(a("e71f"),{apiKey:"AIzaSyCZ8-ZNv4xP-1m-B9lyf-U3oG61V-Wcxo0",authDomain:"employees-database-a4051.firebaseapp.com",databaseURL:"https://employees-database-a4051.firebaseio.com",projectId:"employees-database-a4051",storageBucket:"employees-database-a4051.appspot.com",messagingSenderId:"60844241945"}),i=r.a.initializeApp(o);t["a"]=i.firestore()}});
//# sourceMappingURL=app.4409572e.js.map