(this.webpackJsonpreact=this.webpackJsonpreact||[]).push([[0],{36:function(e,t,c){"use strict";c.r(t);var s=c(0),n=c(14),r=c(5),a=c(2),j=(c(9),c(1)),i=function(e){if(e.autorisation)return Object(j.jsx)("h2",{children:"Bravo, vous pouvez imprimer votre passe \ud83e\udd69\ud83c\udf77"})},u=function(){var e=Object(a.f)(),t=Object(a.e)().state;return Object(j.jsxs)("div",{className:"App",children:[Object(j.jsx)("h1",{children:"Mesdames, messieurs"}),Object(j.jsx)("h2",{children:"V\xe9rifiez si vous \xeates infect\xe9s !"}),Object(j.jsx)("button",{onClick:function(){return e("/resultat")},children:"Faire un test COVID-19"}),Object(j.jsx)("hr",{}),Object(j.jsx)(i,{autorisation:!!t&&t.testFait&&!t.malade}),Object(j.jsx)("button",{onClick:function(){var c="Vous devez passer le test !";t?t.malade?alert(c):e("/passe"):alert(c)},children:"Imprimer un passe bistrot-piscine"})]})},o=c(4),l=function(e){return e.malade?Object(j.jsx)(j.Fragment,{children:"Allez vous coucher !"}):Object(j.jsx)(j.Fragment,{children:"Super, vous n'\xeates pas malade \ud83d\ude1b"})},b=function(){var e=Object(a.f)(),t=Object(s.useState)(),c=Object(o.a)(t,2),n=c[0],r=c[1];return Object(s.useEffect)((function(){Math.random()>.5?r(!1):r(!0)}),[]),Object(j.jsxs)("div",{className:"App",children:[Object(j.jsx)(l,{malade:n}),Object(j.jsx)("br",{}),Object(j.jsx)("button",{onClick:function(){e("/",{state:{testFait:!0,malade:n}})},children:"Retour \xe0 l'accueil"})]})},O=c(15),d=c.n(O),h=c(16),m=c.n(h);function x(){var e="systemtime='"+d()().utc().format("YYYY-MM-DD HH:mm:ss")+"'",t="Passe_delivr\xe9_par_Christophe_Ramananjaona___VBAR_CONFIG_V1.1.0___{"+e+"}";return e=(t=t.replace(/(^\s*)|(\s*$)/g,""))+"--"}var p=function(){var e=x();return Object(j.jsxs)("div",{className:"App",children:[Object(j.jsx)("h2",{children:e}),Object(j.jsx)(m.a,{value:e})]})},f=function(){var e=Object(a.f)();return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(p,{}),Object(j.jsx)("button",{onClick:function(){return e("/")},children:"Retour \xe0 l'accueil"})]})},v=function(){return Object(j.jsx)(r.a,{children:Object(j.jsxs)(a.c,{children:[Object(j.jsx)(a.a,{path:"/",element:Object(j.jsx)(u,{})}),Object(j.jsx)(a.a,{path:"/resultat",element:Object(j.jsx)(b,{})}),Object(j.jsx)(a.a,{path:"/passe",element:Object(j.jsx)(f,{})})]})})},_=document.getElementById("root");Object(n.createRoot)(_).render(Object(j.jsx)(s.StrictMode,{children:Object(j.jsx)(v,{})}))},9:function(e,t,c){}},[[36,1,2]]]);
//# sourceMappingURL=main.b53f52d9.chunk.js.map