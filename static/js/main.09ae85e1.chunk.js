(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{105:function(e){e.exports={Products:"Products",Pricing:"Pricing",Blog:"Blog"}},106:function(e){e.exports={Products:"S\u1ea3n Ph\u1ea9m",Pricing:"Gi\xe1",Blog:"Blog"}},118:function(e,t,n){e.exports=n(142)},126:function(e,t,n){},127:function(e,t,n){},142:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(93),l=n.n(o);n(126),n(127);var c=[{path:"/",component:function(){return r.a.createElement("div",null,"Home page")},label:"Home"},{path:"/about",component:function(){return r.a.createElement("div",null,"About Us page")},label:"About us"},{path:"/product",component:function(){return r.a.createElement("div",null,"Products page")},layout:null,label:"Product"}],i=n(202);var u=n(10),m=n(208),A=n(210),s=n(209),g=n(207),p=n(73),d=n(198),f=n(102),E=n.n(f),h=n(204),x=n(205),b=n(203),w=n(195),v=n(196),y=n(94),G=n.n(y),B=n(95),C=n.n(B),F=n(32),k={en:{label:"English",icon:G.a},vi:{label:"Ti\u1ebfng Vi\u1ec7t",icon:C.a}};var S=function(){var e=Object(a.useState)("en"),t=Object(u.a)(e,2),n=t[0],o=t[1],l=r.a.useState(null),c=Object(u.a)(l,2),i=c[0],m=c[1],A=Object(F.c)(),s=(A.t,A.i18n),p=function(e){m(null)};return r.a.createElement(r.a.Fragment,null,r.a.createElement(g.a,{onMouseEnter:function(e){m(e.currentTarget)},sx:{p:0}},r.a.createElement("img",{src:k[n].icon,width:32})),r.a.createElement(d.a,{sx:{mt:"45px"},id:"menu-appbar",anchorEl:i,anchorOrigin:{vertical:"top",horizontal:"right"},keepMounted:!0,transformOrigin:{vertical:"top",horizontal:"right"},open:Boolean(i),onClose:p},Object.keys(k).map(function(e){return r.a.createElement(b.a,{key:e,onClick:function(){var t;p(),t=e,s.changeLanguage(t),o(t)}},r.a.createElement(w.a,null,r.a.createElement("img",{src:k[e].icon})),r.a.createElement(v.a,null,k[e].label))})))},O=n(199),N=n(54),P=["Products","Pricing","Blog"],U=Object(O.a)(function(e){return{header:{backgroundColor:"var(--primary-color) !important",maxHeight:"60px"},menu:{backgroundColor:"var(--primary-color) !important"}}});var j=function(e){var t=U(),n=r.a.useState(null),a=Object(u.a)(n,2),o=a[0],l=a[1],i=Object(F.c)().t,f=function(){l(null)};return r.a.createElement(m.a,{position:"static",classes:{root:t.header}},r.a.createElement(h.a,{maxWidth:"xl"},r.a.createElement(s.a,{disableGutters:!0},r.a.createElement(A.a,{sx:{width:"100px"}},r.a.createElement(p.a,{variant:"h6",noWrap:!0,component:"a",href:"/",sx:{mr:2,display:{xs:"none",md:"flex"},fontFamily:"monospace",fontWeight:700,letterSpacing:".3rem",color:"inherit",textDecoration:"none"}},"LOGO")),r.a.createElement(A.a,{sx:{flexGrow:1,display:{xs:"flex",md:"none"}}},r.a.createElement(g.a,{size:"large","aria-label":"account of current user","aria-controls":"menu-appbar","aria-haspopup":"true",onClick:function(e){l(e.currentTarget)},color:"inherit"},r.a.createElement(E.a,null)),r.a.createElement(d.a,{id:"menu-appbar",anchorEl:o,anchorOrigin:{vertical:"bottom",horizontal:"left"},keepMounted:!0,transformOrigin:{vertical:"top",horizontal:"left"},open:Boolean(o),onClose:f,sx:{display:{xs:"block",md:"none"}}},P.map(function(e){return r.a.createElement(b.a,{key:e,onClick:f},r.a.createElement(p.a,{textAlign:"center"},e))}))),r.a.createElement(p.a,{variant:"h5",noWrap:!0,component:"a",href:"",sx:{mr:2,display:{xs:"flex",md:"none"},flexGrow:1,fontFamily:"monospace",fontWeight:700,letterSpacing:".3rem",color:"inherit",textDecoration:"none"}},"LOGO"),r.a.createElement(A.a,{sx:{flexGrow:1,display:{xs:"none",md:"flex"},justifyContent:"center"}},c.map(function(e){return r.a.createElement(N.b,{to:e.path},r.a.createElement(x.a,{key:e,onClick:f,sx:{m:1,color:"white",display:"block",fontSize:"1rem",fontWeight:"bold","&:hover":{borderBottom:"1px solid #fff"}}},i(e.label)))})),r.a.createElement(A.a,{sx:{flexGrow:0,width:"100px",justifyContent:"flex-end",display:"flex"}},r.a.createElement(S,null)))))};var J=function(e){var t=e.children;return r.a.createElement(r.a.Fragment,null,r.a.createElement(j,null),r.a.createElement(i.a,{container:!0},t))},M=n(4);var D=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(M.c,null,c.map(function(e,t){var n=null===e.layout?a.Fragment:J,o=e.component;return r.a.createElement(M.a,{key:t,path:e.path,element:r.a.createElement(n,null,r.a.createElement(o,null))})})))},W=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,212)).then(function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,o=t.getLCP,l=t.getTTFB;n(e),a(e),r(e),o(e),l(e)})},I=n(82),L=n(103),Z={en:{translation:n(105)},vi:{translation:n(106)}};I.a.use(L.a).use(F.b).init({resources:Z,fallbackLng:window.currentLanguage,debug:!0,interpolation:{escapeValue:!1}});var z=I.a;window.currentLanguage="en",l.a.createRoot(document.getElementById("root")).render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(F.a,{i18n:z},r.a.createElement(N.a,null,r.a.createElement(D,null))))),W()},94:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAACxAAAAsQHGLUmNAAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAAVhJREFUSIntk71LQmEUh5/7qSaGlaHgEAXRIi6BQoRLQrQ0mDRGS0Nz9D9Ee1MkrhU1iFNBkS19QHMIEUGDIcGlMPN6PxpSm19BJPCZDudw3sPv/Z0DA/qNFM8UXJGGUi4lNEAG8OgywYAGQCTk7RTbcTCg4dVloYfbqACJ2Ag+j8r5zRvZdJTjs1cAsukoe4dPJGKj1BsW1w/vVIJJoQFSPFNwVUVG1yS+vm2G/SofNQugEw95Fcymi2U7HJ1uiytIzY7h9ykUSxU2V6fIF14AWF+eYDdfZiE5Tq1uc3FXJWLciitQZAlVlWiYDh5dxmw6AOia3MlZlovtuMImtxSECPhVilcVttam2T95BmBjZZKdgzKLc2E+axaX99XuPNC13w0xmw66JuO2FleS/nLturAHS/NhoYZITtADwzCEDk0U6ZGZng7o7jwF6PkX9V7Bv/dgQP/5AStxd7Kd72dJAAAAAElFTkSuQmCC"},95:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAACxAAAAsQHGLUmNAAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAAO1JREFUSIljYBgFAw0YbzCo/6elBUy0NHzwWcDEx8TAxEeam0hSzevMwcDjxEk7C3jcuRh43UmzgAWfJLMgEwOXBQeEw8jAwG0NYfN6cTEwQNPetxM/GP6+/0eeBTCNEs2CKGEvNUGY4d/X/wyvO97jNZyBgch8wKbAwiC7WIyBRZyZgYGBgeHPy78Mj2NfMfx68IeQVvw+gIHfL/4yMPEywYOFiZeJ4feLv8RoJS6SuW05Gf7/+MfwJO0Nw+OE1wz/vv5j4LbhIMoConzAxM3I8MDnBcOfN5Dwfuj/goHLhrjUNFoWDbwFo2DgAQDnsT4566IZtAAAAABJRU5ErkJggg=="}},[[118,1,2]]]);
//# sourceMappingURL=main.09ae85e1.chunk.js.map