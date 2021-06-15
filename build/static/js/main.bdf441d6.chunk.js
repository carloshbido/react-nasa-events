(this["webpackJsonpreact-nasa-api"]=this["webpackJsonpreact-nasa-api"]||[]).push([[0],{17:function(e,t,c){},22:function(e,t,c){"use strict";c.r(t);var n=c(2),s=c.n(n),i=c(3),r=c.n(i),a=(c(17),c(7)),o=c.n(a),j=c(8),l=c(4),d=c(12),b=c(10),h=c(11),u=c(0),O=function(e){return Object(u.jsx)("div",{className:"location",onClick:e.onClick,children:Object(u.jsx)(b.Icon,{icon:h.a,className:"location-icon"})})},x=function(){var e=Object(n.useState)("wildfire"),t=Object(l.a)(e,2),c=t[0],s=t[1];return console.log(c),Object(u.jsxs)("header",{children:[Object(u.jsx)("span",{children:" World Events Tracker (Powered by NASA API) "}),Object(u.jsxs)("div",{children:["What do you want to track?",Object(u.jsxs)("select",{onChange:function(e){s(e.target.value)},children:[Object(u.jsx)("option",{value:"wildfire",children:"WildFire"}),Object(u.jsx)("option",{value:"sea-lake-ice",children:"Sea and Lake Ice"})]})]})]})};var p=function(e){var t=e.info,c=e.onCloseLocationBox;return Object(u.jsxs)("div",{className:"info-box",children:[Object(u.jsxs)("div",{className:"info-box-header",children:[Object(u.jsx)("h3",{children:" EVENT LOCATION"}),Object(u.jsx)("span",{onClick:c,children:"X"})]}),Object(u.jsxs)("ul",{children:[Object(u.jsxs)("li",{children:["ID: ",Object(u.jsx)("strong",{children:t.id})]}),Object(u.jsxs)("li",{children:["TITLE: ",Object(u.jsx)("strong",{children:t.title})]})]})]})},f=function(){var e=Object(n.useState)(!1),t=Object(l.a)(e,2),c=t[0],s=t[1],i=function(){s(!c)};return c?Object(u.jsxs)("div",{className:"info-project",children:[Object(u.jsx)("span",{className:"info-project-close",onClick:i,children:" Close "}),Object(u.jsxs)("div",{className:"info-project-content",children:[Object(u.jsx)("h3",{children:"Author"}),Object(u.jsxs)("p",{children:["Carlos Bido from Brasil ",Object(u.jsx)("a",{href:"https://github.com/carloshbido",target:"_blank",children:" Github "})]}),Object(u.jsx)("h3",{children:"About this project"}),Object(u.jsxs)("p",{children:["This project was inspired by ",Object(u.jsx)("a",{href:"https://www.youtube.com/watch?v=ontX4zfVqK8&t=1598s",target:"_blank",children:" Traversy Media "})," project but there are a few upgrades than original project"]}),Object(u.jsx)("h3",{children:"Motivation"}),Object(u.jsx)("p",{children:"Creating a portfolio and to study React and its peculiarities"}),Object(u.jsx)("h3",{children:"Techs"}),Object(u.jsx)("p",{children:"React Hooks, Google Maps API, Iconify Pack, Public NASA API"})]})]}):Object(u.jsxs)("div",{className:"info-project hidden",children:[Object(u.jsx)("h3",{children:"About this project"}),Object(u.jsx)("span",{className:"info-project-close hidden",onClick:i,children:" Open "})]})},v=function(e){var t=Object(n.useState)(null),c=Object(l.a)(t,2),s=c[0],i=c[1];var r=e.eventsData.map((function(e){if(9===e.categories[0].id){var t=e.geometries[0].coordinates[1],c=e.geometries[0].coordinates[0];return Object(u.jsx)(O,{lat:t,lng:c,onClick:function(){return i({id:e.id,title:e.title})}},e.id)}return null}));return Object(u.jsxs)("div",{className:"map",children:[Object(u.jsx)(x,{}),Object(u.jsx)(d.a,{bootstrapURLKeys:{key:"AIzaSyBGpI2F95nQJRlQLvJHEIR4cljKD-Znb9U"},defaultCenter:e.center,defaultZoom:e.zoom,children:r}),s&&Object(u.jsx)(p,{info:s,onCloseLocationBox:function(){i(null)}}),Object(u.jsx)(f,{})]})};v.defaultProps={center:{lat:42.3265,lng:-122.8756},zoom:5};var m=v;var g=function(){var e=Object(n.useState)([]),t=Object(l.a)(e,2),c=t[0],s=t[1],i=Object(n.useState)(!0),r=Object(l.a)(i,2),a=r[0],d=r[1];return Object(n.useEffect)((function(){(function(){var e=Object(j.a)(o.a.mark((function e(){var t,c,n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return d(!0),e.next=3,fetch("https://eonet.sci.gsfc.nasa.gov/api/v2.1/events");case 3:return t=e.sent,e.next=6,t.json();case 6:c=e.sent,n=c.events,s(n),d(!1);case 10:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),Object(u.jsx)("div",{className:"App",children:a?Object(u.jsx)("h1",{children:"Loading"}):Object(u.jsx)(m,{eventsData:c})})};r.a.render(Object(u.jsx)(s.a.StrictMode,{children:Object(u.jsx)(g,{})}),document.getElementById("root"))}},[[22,1,2]]]);
//# sourceMappingURL=main.bdf441d6.chunk.js.map