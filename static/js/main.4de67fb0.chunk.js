(this.webpackJsonpbtc22=this.webpackJsonpbtc22||[]).push([[0],{24:function(e,t,n){},32:function(e,t,n){"use strict";n.r(t);var c=n(0),r=n.n(c),a=n(18),s=n.n(a),u=(n(24),n(5)),i=n.n(u),o=n(9),j=n(4),b=n(1),p=function(e){var t=e.amount,n=e.onChangeAmount;return Object(b.jsx)("div",{children:Object(b.jsx)("input",{type:"number",className:"input",value:t,onChange:n})})},O=function(){var e="https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false",t=Object(c.useState)(),n=Object(j.a)(t,2),r=n[0],a=n[1],s=Object(c.useState)(),u=Object(j.a)(s,2),O=u[0],h=u[1],l=Object(c.useState)(),f=Object(j.a)(l,2),m=f[0],x=f[1],d=function(){var t=Object(o.a)(i.a.mark((function t(){var n,c,r,s,u;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch(e);case 2:return n=t.sent,t.next=5,n.json();case 5:c=t.sent,r=c[0].current_price,s=c[0].image,u=c[0].market_cap,h(s),a(r),x(u);case 12:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();Object(c.useEffect)((function(){d()}));var v,g,k=Object(c.useState)(),_=Object(j.a)(k,2),S=_[0],C=_[1],w=Object(c.useState)(1),y=Object(j.a)(w,2),E=y[0],N=y[1],A=Object(c.useState)(!0),M=Object(j.a)(A,2),B=M[0],T=M[1];B?(g=E,v=E*S):(v=E,g=E/S);var H=function(){var t=Object(o.a)(i.a.mark((function t(){var n,c;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch(e);case 2:return n=t.sent,t.next=5,n.json();case 5:c=t.sent,C(c[0].current_price);case 7:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return Object(c.useEffect)((function(){H()}),[]),Object(b.jsxs)("div",{className:"bitcoin",children:[Object(b.jsx)("h1",{children:" Bitcoin "}),Object(b.jsxs)("h1",{children:["Current price: ",r," USD"]}),Object(b.jsxs)("h1",{children:[" Market cap: ",m]}),Object(b.jsx)("img",{src:O,alt:"BTC",className:"btc-logo"}),Object(b.jsx)(p,{onChangeAmount:function(e){N(e.target.value),T(!0)},amount:g}),Object(b.jsx)("div",{children:"="}),Object(b.jsx)(p,{onChangeAmount:function(e){N(e.target.value),T(!1)},amount:v})]})},h=function(){var e="https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false",t=Object(c.useState)(),n=Object(j.a)(t,2),r=n[0],a=n[1],s=Object(c.useState)(),u=Object(j.a)(s,2),O=u[0],h=u[1],l=Object(c.useState)(),f=Object(j.a)(l,2),m=f[0],x=f[1],d=function(){var t=Object(o.a)(i.a.mark((function t(){var n,c,r,s,u;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch(e);case 2:return n=t.sent,t.next=5,n.json();case 5:c=t.sent,r=c[1].current_price,s=c[1].market_cap,u=c[1].image,a(r),h(s),x(u);case 12:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();Object(c.useEffect)((function(){d()}));var v,g,k=Object(c.useState)(),_=Object(j.a)(k,2),S=_[0],C=_[1],w=Object(c.useState)(1),y=Object(j.a)(w,2),E=y[0],N=y[1],A=Object(c.useState)(!0),M=Object(j.a)(A,2),B=M[0],T=M[1];B?(g=E,v=E*S):(v=E,g=E/S);var H=function(){var t=Object(o.a)(i.a.mark((function t(){var n,c;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch(e);case 2:return n=t.sent,t.next=5,n.json();case 5:c=t.sent,C(c[1].current_price.toFixed(0));case 7:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return Object(c.useEffect)((function(){H()}),[]),Object(b.jsxs)("div",{className:"ETH",children:[Object(b.jsx)("h1",{children:"Ethereum "}),Object(b.jsxs)("h1",{children:["Current price: ",Math.trunc(r)," USD "]}),Object(b.jsxs)("h1",{children:["Market cap: ",O," "]}),Object(b.jsx)("img",{src:m,alt:"ETH",className:"eth-logo"}),Object(b.jsx)(p,{onChangeAmount:function(e){N(e.target.value),T(!0)},amount:g}),Object(b.jsx)("div",{children:"="}),Object(b.jsx)(p,{onChangeAmount:function(e){N(e.target.value),T(!1)},amount:v})]})},l=function(){return Object(b.jsx)("div",{className:"main",children:Object(b.jsx)("h1",{children:"Main"})})},f=n.p+"static/media/logo.91508e83.png",m=n(10),x=function(){return Object(b.jsxs)("nav",{children:[Object(b.jsx)("img",{src:f,alt:"btc nav",className:"logo"}),Object(b.jsxs)("ul",{className:"nav-links",children:[Object(b.jsx)(m.b,{to:"/components/Main",children:Object(b.jsx)("li",{children:"Main"})}),Object(b.jsx)(m.b,{to:"/components/BTCmarket",children:Object(b.jsx)("li",{children:"Bitcoin"})}),Object(b.jsx)(m.b,{to:"/components/Ethereum",children:Object(b.jsx)("li",{children:"Ethereum"})}),Object(b.jsx)(m.b,{to:"/components/OtherCurrency",children:Object(b.jsx)("li",{children:"Other Currency"})})]})]})},d=function(){var e="https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false",t=Object(c.useState)([]),n=Object(j.a)(t,2),r=n[0],a=n[1],s=function(){var t=Object(o.a)(i.a.mark((function t(){var n,c;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch(e);case 2:return n=t.sent,t.next=5,n.json();case 5:c=t.sent,a(c);case 8:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();Object(c.useEffect)((function(){s()}),[]);var u,O,h=Object(c.useState)(),l=Object(j.a)(h,2),f=l[0],m=l[1],x=Object(c.useState)(1),d=Object(j.a)(x,2),v=d[0],g=d[1],k=Object(c.useState)(!0),_=Object(j.a)(k,2),S=_[0],C=_[1];S?(O=v,u=v*f):(u=v,O=v/f);var w=function(){var t=Object(o.a)(i.a.mark((function t(){var n,c;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch(e);case 2:return n=t.sent,t.next=5,n.json();case 5:c=t.sent,m(c[0].current_price);case 7:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return Object(c.useEffect)((function(){w()}),[]),Object(b.jsxs)("div",{className:"currencies",children:[Object(b.jsx)("h1",{children:"other currencies"}),Object(b.jsx)("select",{name:"currencies",children:r.map((function(e){return Object(b.jsxs)("option",{value:e.current_price,children:[" ",e.name]},e.id)}))}),Object(b.jsx)(p,{onChangeAmount:function(e){g(e.target.value),C(!0)},amount:O}),Object(b.jsx)("div",{children:"="}),Object(b.jsx)(p,{onChangeAmount:function(e){g(e.target.value),C(!1)},amount:u})]})},v=n(2),g=function(){return Object(b.jsx)("footer",{children:"footer  @Holagmail.com"})};var k=function(){return Object(b.jsx)(m.a,{children:Object(b.jsxs)("div",{className:"App",children:[Object(b.jsx)(x,{}),Object(b.jsxs)(v.c,{className:"swit",children:[Object(b.jsx)(v.a,{path:"/",exact:!0,component:l}),Object(b.jsx)(v.a,{path:"/components/Main",component:l}),Object(b.jsx)(v.a,{path:"/components/BTCmarket",component:O}),Object(b.jsx)(v.a,{path:"/components/Ethereum",component:h}),Object(b.jsx)(v.a,{path:"/components/OtherCurrency",component:d})]}),Object(b.jsx)(g,{})]})})};s.a.render(Object(b.jsx)(r.a.StrictMode,{children:Object(b.jsx)(k,{})}),document.getElementById("root"))}},[[32,1,2]]]);
//# sourceMappingURL=main.4de67fb0.chunk.js.map