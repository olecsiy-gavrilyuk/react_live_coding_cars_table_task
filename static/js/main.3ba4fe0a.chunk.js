(this.webpackJsonpreact_live_coding_cars_table_task=this.webpackJsonpreact_live_coding_cars_table_task||[]).push([[0],{11:function(e,r,t){},12:function(e,r,t){"use strict";t.r(r);var n=t(4),c=t.n(n),d=t(5),i=t(3),o=t(1),a=[{id:1,name:"white"},{id:2,name:"black"},{id:3,name:"red"}],l=t(0);function b(e){return a.find((function(r){return r.id===e.colorId}))}var s=[{id:1,brand:"Audi",rentPrice:100,colorId:1},{id:2,brand:"Audi",rentPrice:100,colorId:2},{id:3,brand:"Ferarri",rentPrice:500,colorId:3},{id:4,brand:"Ford",rentPrice:80,colorId:1},{id:5,brand:"Peugot",rentPrice:50,colorId:1},{id:6,brand:"Ford",rentPrice:150,colorId:1},{id:7,brand:"Ford",rentPrice:140,colorId:2},{id:8,brand:"Lada",rentPrice:20,colorId:3},{id:9,brand:"Opel",rentPrice:100,colorId:1},{id:10,brand:"Opel",rentPrice:100,colorId:2},{id:11,brand:"Mitsubishi",rentPrice:300,colorId:1}].map((function(e){var r=b(e);return Object(i.a)(Object(i.a)({},e),{},{color:b(r)})})),j=function(){var e=Object(o.useState)(""),r=Object(d.a)(e,2),t=r[0],n=r[1],c=s.filter((function(e){return e.brand.toLowerCase().includes(t.toLowerCase())}));return Object(l.jsxs)("div",{children:[Object(l.jsx)("input",{type:"search",placeholder:"Find by car brand",onChange:function(e){return n(e.target.value)}}),Object(l.jsxs)("select",{children:[Object(l.jsx)("option",{children:"Chose a color"}),a.map((function(e){return Object(l.jsx)("option",{value:e.id,children:e.name},e.id)}))]}),Object(l.jsxs)("table",{children:[Object(l.jsx)("thead",{children:Object(l.jsxs)("tr",{children:[Object(l.jsx)("th",{children:"Id"}),Object(l.jsx)("th",{children:"Brand"}),Object(l.jsx)("th",{children:"Color"}),Object(l.jsx)("th",{children:"Rent price"})]})}),Object(l.jsx)("tbody",{children:c.map((function(e){return Object(l.jsxs)("tr",{children:[Object(l.jsx)("td",{children:e.id}),Object(l.jsx)("td",{children:e.brand}),Object(l.jsx)("td",{children:e.rentPrice})]},e.id)}))})]})]})};t(11);c.a.render(Object(l.jsx)(j,{}),document.getElementById("root"))}},[[12,1,2]]]);
//# sourceMappingURL=main.3ba4fe0a.chunk.js.map