(this["webpackJsonpstandart-bit500"]=this["webpackJsonpstandart-bit500"]||[]).push([[0],{34:function(e,c,t){},35:function(e,c,t){},36:function(e,c,t){},37:function(e,c,t){},39:function(e,c,t){},40:function(e,c,t){},57:function(e,c,t){},58:function(e,c,t){"use strict";t.r(c);var s=t(0),a=t.n(s),n=t(13),i=t.n(n),r=t(15),l=t(10),o=t(16),j=Object(o.b)({name:"sum",initialState:{totalBalance:"",inOrders:"",freeVolume:""},reducers:{setSumData:function(e,c){var t=c.payload.data,s=0,a=0,n=0;t.forEach((function(e){s+=e.balance*e.price,a+=e.frozen*e.price,n+=e.available*e.price})),e.totalBalance=s.toFixed(5),e.inOrders=a.toFixed(5),e.freeVolume=n.toFixed(5)}}}),A=j.actions.setSumData,d=j.reducer,b=Object(o.a)({reducer:{sum:d}}),u=(t(34),t(35),t(36),t(37),t(1)),m=function(e){return Object(u.jsx)("div",{className:"container",children:e.children})},h=l.c,O=(t(39),function(e){var c=h((function(e){return e.sum}));return Object(u.jsx)("section",{className:"sum",children:Object(u.jsxs)("div",{className:"sum__wrapper",children:[Object(u.jsxs)("div",{className:"sum__item",children:[Object(u.jsx)("span",{className:"sum__item-title",children:"\u041e\u0431\u0449\u0438\u0439 \u0431\u0430\u043b\u0430\u043d\u0441 (\u0441\u0443\u043c\u043c\u0430):"}),Object(u.jsx)("span",{className:"sum__item-value",children:c.totalBalance})]}),Object(u.jsxs)("div",{className:"sum__item",children:[Object(u.jsx)("span",{className:"sum__item-title",children:"\u0412 \u043e\u0440\u0434\u0435\u0440\u0430\u0445 (\u0441\u0443\u043c\u043c\u0430):"}),Object(u.jsx)("span",{className:"sum__item-value",children:c.inOrders})]}),Object(u.jsxs)("div",{className:"sum__item",children:[Object(u.jsx)("span",{className:"sum__item-title",children:"\u0421\u0432\u043e\u0431\u043e\u0434\u043d\u044b\u0439 \u043e\u0431\u044a\u0435\u043c (\u0441\u0443\u043c\u043c\u0430):"}),Object(u.jsx)("span",{className:"sum__item-value",children:c.freeVolume})]})]})})}),x=t(11),v=t(8),f=t.n(v),N=t(3),g=(t(40),t(24)),w=t(20),B=t.n(w),C=function(e,c){return new URLSearchParams(e.location.search).get(c)},p=function(e){var c=s.useState(""),t=Object(x.a)(c,2),a=t[0],n=t[1],i=s.useState(!1),r=Object(x.a)(i,2),l=r[0],o=r[1],j=Object(N.d)(),A=function(e){o(!l);var c=e.target.getAttribute("data-userid");c&&function(e,c){var t=B.a.parse(e.location.search),s=Object(g.a)(Object(g.a)({},t),c);e.push({search:B.a.stringify(s)})}(j,{userId:c})};return s.useEffect((function(){n("\u041f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c ".concat(C(j,"userId")||"1"))}),[j.location.search]),Object(u.jsxs)("button",{className:"select",onClick:function(e){return A(e)},children:[Object(u.jsxs)("div",{className:"select__wrapper",children:[Object(u.jsx)("span",{children:a}),Object(u.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABEAAAALCAYAAACZIGYHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAD3SURBVHgBtZDNDsFAFIXvzGDjt2/gEViINDbshC76CPok6kl4BAnBrjbSYMEjeIP6W6nO6C31U21CwtlM5s4539wcgF/qsFTa+0Wz+4kXfej378QHCA76bdZ3EkdNKk63wbC1qubYKYUfqV6Ygp4uDTsUL/x8hd2kUjtpYCAIiNkpwwc85+7hnanoLrn9iJGNw+2aJE82llnPMxp3ASLvv7qbd7LyUH+BRIEIF5qgpBsFeIN4a5uNFqM0umBOtIw86D2PSJjPmisqA0DQvRcBsCXgaJnyuB/0h0I80KxRYDGKReYQwM+8JlVGa/hWWOh+oRh4wr91AT9xY62KSzTJAAAAAElFTkSuQmCC",alt:"arrow"})]}),Object(u.jsxs)("div",{className:f()("select__options",{"select__options--active":l}),children:[Object(u.jsx)("div",{className:"select__option","data-userid":"1",children:"\u041f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c 1"}),Object(u.jsx)("div",{className:"select__option","data-userid":"2",children:"\u041f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c 2"})]})]})},E=t(23),I=t.n(E),F=t(26),L=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"1";try{return fetch("http://api.sbit500.pro/api/testjob?id_user=".concat(e)).then((function(e){return e.json()}))}catch(c){console.log(c)}},S=(t(57),function(e,c){if(c)return+c>+e?"red":+c<+e?"green":void 0}),Q=function(e){var c=Object(N.d)(),t=Object(N.e)().search,a=s.useState([]),n=Object(x.a)(a,2),i=n[0],r=n[1],o=s.useState(),j=Object(x.a)(o,2),d=j[0],b=j[1],m=Object(l.b)();return s.useEffect((function(){var e=C(c,"userId")||void 0,t=function(){var c=Object(F.a)(I.a.mark((function c(){var t,s;return I.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return c.next=2,L(e);case 2:t=c.sent,s=t.map((function(e){var c=null===d||void 0===d?void 0:d.find((function(c){return c.coin===e.coin}));return Object(u.jsxs)("tr",{children:[Object(u.jsx)("td",{children:Object(u.jsxs)("div",{className:"table__coin-cell",children:[Object(u.jsx)("img",{src:e.coin_img,alt:"\u0418\u043a\u043e\u043d\u043a\u0430 \u0432\u0430\u043b\u044e\u0442\u044b",className:"table__icon"}),Object(u.jsxs)("span",{children:[e.coin_name,"(",e.coin,")"]})]})}),Object(u.jsx)("td",{className:f()("table__cell",S(e.price,null===c||void 0===c?void 0:c.price)),children:e.price}),Object(u.jsx)("td",{className:f()("table__cell",S(e.balance,null===c||void 0===c?void 0:c.balance)),children:e.balance}),Object(u.jsx)("td",{className:f()("table__cell",S(e.frozen,null===c||void 0===c?void 0:c.frozen)),children:e.frozen}),Object(u.jsx)("td",{className:f()("table__cell",S(e.available,null===c||void 0===c?void 0:c.available)),children:e.available})]},e.id)})),r(s),b(t),m(A({data:t}));case 7:case"end":return c.stop()}}),c)})));return function(){return c.apply(this,arguments)}}();t();var s=setInterval(t,1e4);return function(){return clearInterval(s)}}),[t]),Object(u.jsxs)("table",{className:"table",children:[Object(u.jsx)("thead",{children:Object(u.jsxs)("tr",{children:[Object(u.jsx)("td",{className:"table__coin",children:"\u041c\u043e\u043d\u0435\u0442\u0430"}),Object(u.jsx)("td",{children:"\u041a\u0443\u0440\u0441 \u043a USDT"}),Object(u.jsx)("td",{children:"\u041e\u0431\u0449\u0438\u0439 \u0431\u0430\u043b\u0430\u043d\u0441"}),Object(u.jsx)("td",{children:"\u0412 \u043e\u0440\u0434\u0435\u0440\u0430\u0445"}),Object(u.jsx)("td",{children:"\u0421\u0432\u043e\u0431\u043e\u0434\u043d\u044b\u0439 \u043e\u0431\u044a\u0435\u043c"})]})}),Object(u.jsx)("tbody",{children:i})]})},U=function(e){return Object(u.jsx)("main",{className:"main",children:Object(u.jsxs)(m,{children:[Object(u.jsx)("img",{src:"data:image/png;base64,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",alt:"\u041b\u043e\u0433\u043e\u0442\u0438\u043f",className:"main__logo"}),Object(u.jsx)(O,{}),Object(u.jsx)("div",{className:"main__select-user",children:Object(u.jsx)(p,{})}),Object(u.jsx)(Q,{})]})})};var y=function(){return Object(u.jsx)("div",{className:"App",children:Object(u.jsx)(U,{})})};i.a.render(Object(u.jsx)(a.a.StrictMode,{children:Object(u.jsx)(r.a,{basename:"/cryptocurrency_balance",children:Object(u.jsx)(l.a,{store:b,children:Object(u.jsx)(y,{})})})}),document.getElementById("root"))}},[[58,1,2]]]);
//# sourceMappingURL=main.86558c4a.chunk.js.map