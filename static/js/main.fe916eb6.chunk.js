(this.webpackJsonpsbdprojectmanager=this.webpackJsonpsbdprojectmanager||[]).push([[0],{22:function(e,t,n){},24:function(e,t,n){},45:function(e,t,n){"use strict";n.r(t);var c=n(4),a=n.n(c),o=n(16),r=n.n(o),s=(n(22),n(6)),i=n.n(s),l=n(17),p=n.p+"static/media/logo.6ce24c58.svg",d=(n(24),n(7)),u=n(1),g=n(26);d.OAuth.initialize("_kPudQPY3u7LLbJwnCHnB8v8y5M"),d.OAuth.popup("basecamp").done((function(e){console.log(e),e.me().done((function(t){alert("Hello "+t.name+"! "+t.id+" "+e.access_token),console.log("id:"+t.id),console.log("token:"+e.access_token);var n={method:"get",url:"https://3.basecampapi.com/".concat(t.id,"/people.json"),headers:{Authorization:"Bearer ".concat(e.access_token),"Access-Control-Allow-Origin":"https://adamgf.github.io","User-Agent":"SBDProjectManager (adamgf@gmail.com)","Content-Type":"application/json"}},c=function(){var e=Object(l.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return alert("Entered someFunc"),e.next=3,g(n);case 3:t=e.sent,alert("All People: "+t);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();c()}))}));var h=function(){return Object(u.jsx)("div",{className:"App",children:Object(u.jsxs)("header",{className:"App-header",children:[Object(u.jsx)("img",{src:p,className:"App-logo",alt:"logo"}),Object(u.jsxs)("p",{children:["Edit ",Object(u.jsx)("code",{children:"src/App.js"})," and save to reload."]}),Object(u.jsxs)("a",{className:"App-link",href:"https://reactjs.org",target:"_blank",rel:"noopener noreferrer",children:["Learn React ","","!!"]})]})})},j=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,46)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,o=t.getLCP,r=t.getTTFB;n(e),c(e),a(e),o(e),r(e)}))};r.a.render(Object(u.jsx)(a.a.StrictMode,{children:Object(u.jsx)(h,{})}),document.getElementById("root")),j()}},[[45,1,2]]]);
//# sourceMappingURL=main.fe916eb6.chunk.js.map