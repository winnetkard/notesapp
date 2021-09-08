(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{41:function(t,n,e){},42:function(t,n,e){"use strict";e.r(n);var c=e(16),o=e.n(c),r=e(7),a=e(4),i=e(2),u=e(0),s=function(t){var n=t.note,e=t.toggleImportance,c=n.important?"make not important":"make important";return Object(u.jsxs)("li",{className:"note",children:[n.content,Object(u.jsx)("button",{onClick:e,children:c})]})},j=function(t){var n=t.message;return null===n?null:Object(u.jsx)("div",{className:"error",children:n})},l=function(){return Object(u.jsxs)("div",{style:{color:"green",fontStyle:"italic",fontSize:16},children:[Object(u.jsx)("br",{}),Object(u.jsx)("em",{children:"Note app, Department of Computer Science, University of Helsinki 2021"})]})},f=e(3),b=e.n(f),d="/api/notes",m=function(){var t=b.a.get(d),n={id:1e4,content:"This note is not saved to server",date:"2019-05-30T17:30:31.098Z",important:!0};return t.then((function(t){return t.data.concat(n)}))},p=function(t){return b.a.post(d,t).then((function(t){return t.data}))},O=function(t,n){return b.a.put("".concat(d,"/").concat(t),n).then((function(t){return t.data}))},h=function(){var t=Object(i.useState)([]),n=Object(a.a)(t,2),e=n[0],c=n[1],o=Object(i.useState)(""),f=Object(a.a)(o,2),b=f[0],d=f[1],h=Object(i.useState)(!1),v=Object(a.a)(h,2),x=v[0],g=v[1],S=Object(i.useState)(null),y=Object(a.a)(S,2),k=y[0],w=y[1];Object(i.useEffect)((function(){m().then((function(t){c(t)}))}),[]);var N=x?e:e.filter((function(t){return t.important}));return Object(u.jsxs)("div",{children:[Object(u.jsx)("h1",{children:"Notes"}),Object(u.jsx)(j,{message:k}),Object(u.jsx)("div",{children:Object(u.jsxs)("button",{onClick:function(){return g(!x)},children:["show ",x?"important":"all"]})}),Object(u.jsx)("ul",{children:N.map((function(t){return Object(u.jsx)(s,{note:t,toggleImportance:function(){return function(t){var n=e.find((function(n){return n.id===t})),o=Object(r.a)(Object(r.a)({},n),{},{important:!n.important});O(t,o).then((function(n){c(e.map((function(e){return e.id!==t?e:n})))})).catch((function(t){w("Note '".concat(n.content,"' was already removed from server")),setTimeout((function(){w(null)}),5e3)}))}(t.id)}},t.id)}))}),Object(u.jsxs)("form",{onSubmit:function(t){t.preventDefault();var n={content:b,date:(new Date).toISOString(),important:Math.random()>.5};p(n).then((function(t){c(e.concat(t)),d("")}))},children:[Object(u.jsx)("input",{value:b,onChange:function(t){console.log(t.target.value),d(t.target.value)}}),Object(u.jsx)("button",{type:"submit",children:"save"})]}),Object(u.jsx)(l,{})]})};e(41);o.a.render(Object(u.jsx)(h,{}),document.getElementById("root"))}},[[42,1,2]]]);
//# sourceMappingURL=main.e625b788.chunk.js.map