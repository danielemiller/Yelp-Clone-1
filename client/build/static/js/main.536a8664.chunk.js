(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{66:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n(2),r=n(31),s=n.n(r),i=n(18),o=n(3),l=n(4),j=n.n(l),u=n(10),d=n(6),b=n(32),h=n.n(b).a.create({baseURL:"http://localhost:4000/api/v1/restaurants"}),x=n(34),p=Object(c.createContext)(),O=function(e){var t=Object(c.useState)([]),n=Object(d.a)(t,2),r=n[0],s=n[1],i=Object(c.useState)(null),o=Object(d.a)(i,2),l=o[0],j=o[1];return Object(a.jsx)(p.Provider,{value:{restaurants:r,setRestaurants:s,addRestaurants:function(e){s([].concat(Object(x.a)(r),[e]))},selectedRestaurant:l,setSelectedRestaurant:j},children:e.children})},m=function(){var e=Object(c.useContext)(p).addRestaurants,t=Object(c.useState)(""),n=Object(d.a)(t,2),r=n[0],s=n[1],i=Object(c.useState)(""),o=Object(d.a)(i,2),l=o[0],b=o[1],x=Object(c.useState)("Price Range"),O=Object(d.a)(x,2),m=O[0],v=O[1],f=function(){var t=Object(u.a)(j.a.mark((function t(n){var a;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n.preventDefault(),t.prev=1,t.next=4,h.post("/",{name:r,location:l,price_range:m});case 4:a=t.sent,e(a.data.data.restaurant),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(1),console.log(t.t0);case 11:case"end":return t.stop()}}),t,null,[[1,8]])})));return function(e){return t.apply(this,arguments)}}();return Object(a.jsx)("div",{className:"mb-4",children:Object(a.jsx)("form",{action:"",children:Object(a.jsxs)("div",{className:"form-row",children:[Object(a.jsx)("div",{className:"col",children:Object(a.jsx)("input",{value:r,onChange:function(e){return s(e.target.value)},type:"text",className:"form-control",placeholder:"name"})}),Object(a.jsx)("div",{className:"col",children:Object(a.jsx)("input",{value:l,onChange:function(e){return b(e.target.value)},type:"text",className:"form-control",placeholder:"location"})}),Object(a.jsx)("div",{className:"col",children:Object(a.jsxs)("select",{value:m,onChange:function(e){return v(e.target.value)},className:"custom-select my-1 mr-sm-2",children:[Object(a.jsx)("option",{disabled:!0,children:"Price Range"}),Object(a.jsx)("option",{value:"1",children:"$"}),Object(a.jsx)("option",{value:"2",children:"$$"}),Object(a.jsx)("option",{value:"3",children:"$$$"}),Object(a.jsx)("option",{value:"4",children:"$$$$"}),Object(a.jsx)("option",{value:"5",children:"$$$$$"})]})}),Object(a.jsx)("button",{onClick:f,type:"submit",className:"btn btn-primary",children:"Add"})]})})})},v=function(){return Object(a.jsx)("div",{children:Object(a.jsx)("h1",{className:"font-weight-light display-1 text-center",children:"Restaurant Finder"})})},f=function(e){for(var t=e.rating,n=[],c=1;c<=5;c++)c<=t?n.push(Object(a.jsx)("i",{className:"fas fa-star text-warning"},c)):c!==Math.ceil(t)||Number.isInteger(t)?n.push(Object(a.jsx)("i",{className:"far fa-star text-warning"},c)):n.push(Object(a.jsx)("i",{className:"fas fa-star-half-alt text-warning"},c));return Object(a.jsx)(a.Fragment,{children:n})},g=function(e){var t=Object(c.useContext)(p),n=t.restaurants,r=t.setRestaurants;Object(c.useEffect)((function(){(function(){var e=Object(u.a)(j.a.mark((function e(){var t;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,h.get("/");case 3:t=e.sent,r(t.data.data.restaurants),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case 11:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}})()()}),[]);var s=function(){var e=Object(u.a)(j.a.mark((function e(t,a){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.stopPropagation(),e.prev=1,e.next=4,h.delete("/".concat(a));case 4:e.sent,r(n.filter((function(e){return e.id!==a}))),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t,n){return e.apply(this,arguments)}}(),i=function(e){return e.count?Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(f,{rating:e.id}),Object(a.jsxs)("span",{className:"text-warning ml-1",children:["(",e.count,")"]})]}):Object(a.jsx)("span",{"text-warning":!0,children:"0 Reviews"})};return Object(a.jsx)("div",{className:"list-group",children:Object(a.jsxs)("table",{className:"table table-hover table-dark",children:[Object(a.jsx)("thead",{children:Object(a.jsxs)("tr",{className:"bg-primary",children:[Object(a.jsx)("th",{scope:"col",children:"Restaurant"}),Object(a.jsx)("th",{scope:"col",children:"Location"}),Object(a.jsx)("th",{scope:"col",children:"Price Range"}),Object(a.jsx)("th",{scope:"col",children:"Ratings"}),Object(a.jsx)("th",{scope:"col",children:"Edit"}),Object(a.jsx)("th",{scope:"col",children:"Delete"})]})}),Object(a.jsx)("tbody",{children:n&&n.map((function(e){return Object(a.jsxs)("tr",{onClick:function(){return t=e.id,void(window.location="/restaurants/".concat(t));var t},children:[Object(a.jsx)("td",{children:e.name}),Object(a.jsx)("td",{children:e.location}),Object(a.jsx)("td",{children:"$".repeat(e.price_range)}),Object(a.jsx)("td",{children:i(e)}),Object(a.jsx)("td",{onClick:function(t){return function(e,t){e.stopPropagation(),window.location="/restaurants/".concat(t,"/update")}(t,e.id)},className:"btn btn-warning",children:"Update"}),Object(a.jsx)("td",{children:Object(a.jsx)("button",{onClick:function(t){return s(t,e.id)},className:"btn btn-danger",children:"Delete"})})]},e.id)}))})]})})},w=function(){return Object(a.jsxs)("div",{children:[Object(a.jsx)(v,{}),Object(a.jsx)(m,{}),Object(a.jsx)(g,{})]})},N=function(e){var t=window.location.pathname.split("/")[2],n=(Object(c.useContext)(p).restaurants,Object(c.useState)("")),r=Object(d.a)(n,2),s=r[0],i=r[1],o=Object(c.useState)(""),l=Object(d.a)(o,2),b=l[0],x=l[1],O=Object(c.useState)(""),m=Object(d.a)(O,2),v=m[0],f=m[1];Object(c.useEffect)((function(){(function(){var e=Object(u.a)(j.a.mark((function e(){var n;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.get("/".concat(t));case 2:n=e.sent,i(n.data.data.restaurant.name),x(n.data.data.restaurant.location),f(n.data.data.restaurant.price_range);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);var g=function(){var e=Object(u.a)(j.a.mark((function e(n){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),e.next=3,h.put("/".concat(t),{name:s,location:b,price_range:v});case 3:e.sent;case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(a.jsx)("div",{children:Object(a.jsxs)("form",{action:"",children:[Object(a.jsxs)("div",{className:"form-group",children:[Object(a.jsx)("label",{htmlFor:"name",children:"Name"}),Object(a.jsx)("input",{value:s,onChange:function(e){return i(e.target.value)},id:"name",className:"form-control",type:"text"})]}),Object(a.jsxs)("div",{className:"form-group",children:[Object(a.jsx)("label",{htmlFor:"location",children:"Location"}),Object(a.jsx)("input",{value:b,onChange:function(e){return x(e.target.value)},id:"location",className:"form-control",type:"text"})]}),Object(a.jsxs)("div",{className:"form-group",children:[Object(a.jsx)("label",{htmlFor:"price_range",children:"Price Range"}),Object(a.jsx)("input",{value:v,onChange:function(e){return f(e.target.value)},id:"price_range",className:"form-control",type:"number"})]}),Object(a.jsx)("button",{type:"submit",onClick:g,className:"btn btn-primary",children:"Submit"})]})})},y=function(){return Object(a.jsxs)("div",{children:[Object(a.jsx)("h1",{className:"text-center",children:"Update Restaurant"}),Object(a.jsx)(N,{})]})},R=(n(58),function(){var e=Object(c.useState)(""),t=Object(d.a)(e,2),n=t[0],r=t[1],s=Object(c.useState)(""),i=Object(d.a)(s,2),o=i[0],l=i[1],b=Object(c.useState)(""),x=Object(d.a)(b,2),p=x[0],O=x[1],m=window.location.pathname.split("/")[2],v=function(){var e=Object(u.a)(j.a.mark((function e(t){var a;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,e.next=4,h.post("/".concat(m,"/addReview"),{name:n,review:o,rating:p});case 4:e.sent,a=window.location.pathname,window.location="/",window.location=a,e.next=13;break;case 10:e.prev=10,e.t0=e.catch(1),console.log(e.t0);case 13:case"end":return e.stop()}}),e,null,[[1,10]])})));return function(t){return e.apply(this,arguments)}}();return Object(a.jsx)("div",{className:"mb-2",children:Object(a.jsxs)("form",{action:"",children:[Object(a.jsxs)("div",{className:"form-row",children:[Object(a.jsxs)("div",{className:"form-group col-8",children:[Object(a.jsx)("label",{htmlFor:"name",children:"Name"}),Object(a.jsx)("input",{value:n,onChange:function(e){return r(e.target.value)},id:"name",placeholder:"name",type:"text",className:"form-control"})]}),Object(a.jsxs)("div",{className:"form-group col-4",children:[Object(a.jsx)("label",{htmlFor:"rating",children:"Rating"}),Object(a.jsxs)("select",{value:p,onChange:function(e){return O(e.target.value)},id:"rating",className:"custom-select",children:[Object(a.jsx)("option",{disabled:!0,children:"Rating"}),Object(a.jsx)("option",{value:"1",children:"1"}),Object(a.jsx)("option",{value:"2",children:"2"}),Object(a.jsx)("option",{value:"3",children:"3"}),Object(a.jsx)("option",{value:"4",children:"4"}),Object(a.jsx)("option",{value:"5",children:"5"})]})]})]}),Object(a.jsxs)("div",{className:"form-group",children:[Object(a.jsx)("label",{htmlFor:"review",children:"Review"}),Object(a.jsx)("textarea",{value:o,onChange:function(e){return l(e.target.value)},id:"review",className:"form-control"})]}),Object(a.jsx)("button",{type:"submit",onClick:v,className:"btn btn-primary",children:"Submit"})]})})}),k=function(e){var t=e.reviews;return Object(a.jsx)("div",{className:"row row-cols-3 mr-4",children:t.map((function(e){return Object(a.jsxs)("div",{className:"card text-white bg-primary mb-3 mr-4",style:{maxWidth:"30%"},children:[Object(a.jsxs)("div",{className:"card-header d-flex justify-content-between",children:[Object(a.jsx)("span",{children:e.name}),Object(a.jsx)("span",{children:Object(a.jsx)(f,{rating:e.rating})})]}),Object(a.jsx)("div",{className:"card-body",children:Object(a.jsx)("p",{className:"card-text",children:e.review})})]},e.id)}))})},C=function(){var e=window.location.pathname.split("/")[2],t=Object(c.useContext)(p),n=t.selectedRestaurant,r=t.setSelectedRestaurant;return Object(c.useEffect)((function(){(function(){var t=Object(u.a)(j.a.mark((function t(){var n;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,h.get("/".concat(e));case 3:n=t.sent,console.log(n),r(n.data.data),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),console.log(t.t0);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(){return t.apply(this,arguments)}})()()}),[]),Object(a.jsx)("div",{children:n&&Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("h1",{className:"text-center display-1",children:n.restaurant.name}),Object(a.jsxs)("div",{className:"text-center",children:[Object(a.jsx)(f,{rating:n.restaurant.average_rating}),Object(a.jsx)("span",{className:"text-warning ml-1",children:n.restaurant.count?"(".concat(n.restaurant.count,")"):"(0)"})]}),Object(a.jsx)("div",{className:"mt-3",children:Object(a.jsx)(k,{reviews:n.reviews})}),Object(a.jsx)(R,{})]})})},$=function(){return Object(a.jsx)(O,{children:Object(a.jsx)("div",{className:"container",children:Object(a.jsx)(i.a,{children:Object(a.jsxs)(o.c,{children:[Object(a.jsx)(o.a,{exact:!0,path:"/",component:w}),Object(a.jsx)(o.a,{exact:!0,path:"/restaurants/:id/update",component:y}),Object(a.jsx)(o.a,{exact:!0,path:"/restaurants/:id",component:C})]})})})})};s.a.render(Object(a.jsx)($,{}),document.getElementById("root"))}},[[66,1,2]]]);
//# sourceMappingURL=main.536a8664.chunk.js.map