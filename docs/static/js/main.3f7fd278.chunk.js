(this["webpackJsonpgif-expert-app"]=this["webpackJsonpgif-expert-app"]||[]).push([[0],{12:function(e,t,n){},13:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(4),u=n.n(c),i=n(1),l=function(e){var t=e.setCategories,n=Object(a.useState)(""),c=Object(i.a)(n,2),u=c[0],l=c[1];return r.a.createElement("form",{onSubmit:function(e){e.preventDefault(),u.trim().length>2&&(t(u),l(""))}},r.a.createElement("input",{type:"text",value:u,onChange:function(e){l(e.target.value)}}))},o=n(2),s=n.n(o),m=n(5),p=function(){var e=Object(m.a)(s.a.mark((function e(t){var n,a,r,c,u;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="https://api.giphy.com/v1/gifs/search?api_key=t1u6zhsZEpFSfiSzx3EoxtryNUej1oCs&q=".concat(encodeURI(t),"&limit=10"),e.next=3,fetch(n);case 3:return a=e.sent,e.next=6,a.json();case 6:return r=e.sent,c=r.data,u=c.map((function(e){var t;return{id:e.id,title:e.title,url:null===(t=e.images)||void 0===t?void 0:t.downsized_medium.url}})),e.abrupt("return",u);case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),f=function(e){var t=e.title,n=e.url;return r.a.createElement("div",{className:"card"},r.a.createElement("img",{src:n,alt:t}))},d=function(e){var t=e.category,n=function(e){var t=Object(a.useState)({data:[],loading:!0}),n=Object(i.a)(t,2),r=n[0],c=n[1];return Object(a.useEffect)((function(){p(e).then((function(e){c({data:e,loading:!1})}))}),[e]),r}(t).data;return r.a.createElement(r.a.Fragment,null,r.a.createElement("h3",null,t),r.a.createElement("div",{className:"card-grid"},n.map((function(e){return r.a.createElement(f,Object.assign({key:e.id},e))}))))},g=function(){var e=Object(a.useState)(["One Punch"]),t=Object(i.a)(e,2),n=t[0],c=t[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",null,"GifExpertApp"),r.a.createElement(l,{setCategories:c}),r.a.createElement("hr",null),r.a.createElement("ol",null,n.map((function(e){return r.a.createElement(d,{key:e,category:e})}))))};n(12);u.a.render(r.a.createElement(g,null),document.getElementById("root"))},6:function(e,t,n){e.exports=n(13)}},[[6,1,2]]]);
//# sourceMappingURL=main.3f7fd278.chunk.js.map