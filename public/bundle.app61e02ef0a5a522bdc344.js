(()=>{"use strict";var r={591:(r,n,e)=>{e.d(n,{Z:()=>u});var t=e(81),o=e.n(t),i=e(645),a=e.n(i),c=e(667),s=e.n(c),p=new URL(e(272),e.b),l=a()(o());l.push([r.id,"@import url(https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;700&family=Quicksand:wght@400;700&display=swap);"]);var d=s()(p);l.push([r.id,'*::before, *::after, *{\r\n    margin:0;\r\n    padding:0;\r\n    box-sizing:border-box;\r\n    scroll-behavior : smooth;\r\n    font-family: \'Poppins\', sans-serif;\r\n}\r\n\r\n.logo:hover, .logo:focus{\r\n    cursor:pointer;\r\n}\r\n\r\n\r\nheader > nav{\r\n    --primary-color : #3D5A80;\r\n    /* background-color:#1E2233; */\r\n    \r\n    color:white;\r\n    display:flex;\r\n    justify-content: space-around;\r\n    align-items:center;\r\n    padding:20px 0;\r\n    font-size:18px;\r\n\r\n    background-color:var(--primary-color);\r\n    \r\n}\r\n\r\nheader nav ul{\r\n    display:flex;\r\n    width:60%;\r\n    justify-content: space-evenly;\r\n}\r\n\r\nheader nav ul li{\r\n    list-style:none;\r\n}\r\nheader nav ul li a{\r\n    text-decoration:none;\r\n    color:white;\r\n}\r\n\r\nnav ul li a::after{\r\n    content: "";\r\n    height:2px;\r\n    margin-top:2px;\r\n    width:0;\r\n    display:block;\r\n    background-color:#ffffff;\r\n    transition:.3s;\r\n}\r\nnav ul li a:hover::after{\r\n    width:100%;\r\n}\r\n\r\n.container{\r\n    display:flex;\r\n    justify-content: space-between;\r\n    margin-top:50px;    \r\n}\r\n.right-image{\r\n    flex-basis:50%;\r\n}\r\n.overview{\r\n    flex-basis:1;\r\n    max-width:38%;\r\n    margin:3rem auto;\r\n\r\n}\r\n\r\n.overview h1{\r\n    text-align:left;\r\n    font-size:1.9rem;\r\n    margin-bottom:20px;\r\n}\r\n.overview p{\r\n    font-size:1rem;\r\n    line-height:1.5rem;\r\n\r\n}\r\n.overview, .right-image{\r\n    padding:20px;\r\n}\r\nimg{\r\n    max-width:100%;\r\n}\r\n.button{\r\n    margin-top:3rem;\r\n    display:inline-block;\r\n    border:1px solid #1E2233;\r\n    padding:8px 15%;\r\n    text-align:center;\r\n    border-radius: 5px;\r\n    background-color:#1E2233;\r\n    color:white;\r\n    transition:.2s;\r\n}\r\n\r\n.button:hover, .button:focus{\r\n    cursor: pointer;\r\n    background-color: #384760;\r\n}\r\n\r\n#our-team h1{\r\n    text-align:center;\r\n    margin-top:100px;\r\n    margin-bottom:40px;\r\n    color:black;\r\n    \r\n}\r\n#our-team h1::after{\r\n    content:"";\r\n    display:block;\r\n    height:2px;\r\n    width:5%;\r\n    background-color:#9bc1d9;\r\n    margin:2px auto;\r\n}\r\n#our-team .card .image{\r\n    height:150px;\r\n    width: 150px;\r\n}\r\n\r\n#our-team .card .image img{\r\n    height:100%;\r\n    width: 100%;\r\n    border-radius:50%;\r\n    padding:1.5px;\r\n    background-color:#1E2233;\r\n}\r\n\r\n.team{\r\n    min-height:30vh;\r\n    display:flex;\r\n    justify-content: center;\r\n    align-items:center;\r\n}\r\n.content{\r\n    display:flex;\r\n    justify-content: space-evenly;\r\n    flex-wrap:wrap;\r\n    width:100%;\r\n    \r\n}\r\n.card{\r\n    border-radius:20px;\r\n    background : #fff;\r\n    position:relative;\r\n    margin-top:20px;\r\n    width:280px;\r\n    box-shadow : 3px 2px 0 rgba(50, 50, 50, 0.2);\r\n}\r\n\r\n.card::before{\r\n    content : "";\r\n    position:absolute;\r\n    background:#3D5A80;\r\n    width:100%;\r\n    min-height:50%;\r\n    border-radius : 20px 20px 0 0;\r\n}\r\n\r\n.card-content{\r\n    display:flex;\r\n    flex-direction: column;\r\n    align-items:center;\r\n    position:relative;\r\n    z-index:1;\r\n    padding:30px;\r\n    text-align:center;\r\n}\r\n.card-content p:nth-child(1){\r\n    font-size:20px;\r\n    font-weight:500;\r\n}\r\n\r\n.card-content p:nth-child(2){\r\n    font-size:15px;\r\n}\r\n\r\n.bio-button{\r\n    padding:3px 14px;\r\n    margin-top:20px;\r\n    border-radius:15px;\r\n    background:#3D5A80;\r\n    color:white;\r\n    transition:.3s;\r\n}\r\n.bio-button:hover, .bio-button:focus{\r\n    cursor: pointer;\r\n    background-color:#6a34b1;\r\n}\r\n\r\n\r\nfooter{\r\n    margin-top:100px;\r\n    min-height:15vh;\r\n    background-color:#3D5A80;\r\n    color:white;\r\n    display:flex;\r\n    justify-content: center;\r\n    align-items:center;\r\n}\r\n\r\n\r\narticle > .wrapper{\r\n    max-width:1280px;\r\n    margin:0 auto;\r\n    display:flex;\r\n    justify-content: center;\r\n    align-items:center;\r\n    flex-direction:column;\r\n}\r\n\r\n\r\n\r\n.faq h1{\r\n    text-align:center;\r\n    margin-bottom:70px;\r\n    font-size:2.1rem;\r\n}\r\n\r\n.accordion{\r\n    position:relative;\r\n    box-shadow : 12px 12px 10px 0 rgba(83,83,83,.3); \r\n    width:1080px;\r\n    height:100px;\r\n    margin-bottom:50px;\r\n    overflow:hidden;\r\n}\r\n.accordion:hover{\r\n    cursor: pointer;\r\n}\r\n\r\n.wrapper .accordion{\r\n    border : 1px solid rgba(0,0,0,0.3);\r\n    padding:30px 50px;\r\n    border-radius:18px;\r\n    transition : .3s;\r\n\r\n}\r\n.wrapper .accordion p{\r\n    max-width:88%;\r\n    color: #5B5B5B;\r\n}\r\n.wrapper .accordion h2{\r\n    font-size:1.5rem;\r\n    margin-bottom:30px;\r\n    font-weight:500;\r\n\r\n}\r\n.accordion > svg{\r\n    max-width:40px;\r\n    position:absolute;\r\n    top:50%;\r\n    right:50px;\r\n    transform:translateY(-50%);\r\n}\r\n\r\n.active {\r\n    height:250px;\r\n}\r\n\r\n.more-questions{\r\n    background-color:#3D5A80;\r\n    display:block;\r\n    width:200px;\r\n    margin:0 auto;\r\n    text-align:center;\r\n    color:white;\r\n    text-decoration:none;\r\n    padding:20px 20px;\r\n    border-radius:10px;\r\n    transition:.3s;\r\n}\r\n.more-questions:hover{\r\n    background-color:#384760\r\n}\r\n\r\n.sosmed{\r\n    display:flex;\r\n    flex-direction:column;\r\n    position:absolute;\r\n    top:10px;\r\n    right:10px;\r\n}\r\n.sosmed svg{\r\n    max-width:24px;\r\n}\r\n\r\n\r\n\r\n.faqs h1:nth-child(1){\r\n    font-weight:300;\r\n    text-align:center;\r\n    font-size:2rem;\r\n    margin-top:80px;\r\n}\r\n.faqs h1:nth-child(2){\r\n    font-weight:500;\r\n    font-size:2.5rem;\r\n    text-align:center;\r\n}\r\n.faqs h1:nth-child(2) + p{\r\n    font-size:1.2rem;\r\n    text-align:center;\r\n    color:#929292;\r\n    margin-top:8px;\r\n}\r\n.faqs header{\r\n    display:flex;\r\n    flex-direction:column;\r\n    align-items:center;\r\n}\r\n\r\n.faqs .search{\r\n    margin-top:30px;\r\n    padding:5px 10px;\r\n    position:relative;\r\n}\r\n.faqs .search input{\r\n    padding:10px 50px;\r\n    border-radius:10px;\r\n    width:400px;\r\n    border: 1px solid #777777;\r\n}\r\n\r\n.faqs .search svg{\r\n    position:absolute;\r\n    height:25px;\r\n    left:20px;\r\n    top:14px;\r\n}\r\n\r\n.faqs .wrapper{\r\n    margin-top:70px;\r\n}\r\n\r\n.upload-container{\r\n    min-height:65vh;\r\n    background : linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)),url('+d+");\r\n    background-size:100% 100%;\r\n    color:white;\r\n    display:flex;\r\n    justify-content: space-evenly;\r\n    align-items: center;\r\n    flex-direction:column;\r\n}\r\n\r\n.upload-wrapper{\r\n    width:60%;\r\n    min-height:250px;\r\n    border-radius:20px;\r\n    display:flex;\r\n    align-items:center;\r\n    justify-content: center;\r\n    background-color:white;\r\n    color:black;\r\n    flex-direction:column;\r\n    text-align:center;\r\n    position:relative;\r\n    \r\n}\r\n\r\n.upload-wrapper svg{\r\n    max-width:60px;\r\n    margin:0;\r\n}\r\n.upload-wrapper p{\r\n    font-size:1.5rem;\r\n    font-weight:500;\r\n    margin-bottom:20px;\r\n}\r\n.upload-wrapper form{\r\n    cursor:pointer;\r\n    position:relative;\r\n}\r\n\r\n.camera{\r\n    background-color:#3D5A80;\r\n    width:100%;\r\n    position:absolute;\r\n    bottom:0;\r\n    display:flex;\r\n    align-items:center;\r\n    justify-content: center;\r\n    border-radius:0 0 20px 20px;\r\n    cursor:pointer;\r\n}\r\n.camera svg{\r\n    max-width:35px;\r\n}\r\n\r\n.button-start{\r\n    background-color:#3D5A80;\r\n    padding:10px 40px;\r\n    border-radius:12px;   \r\n    cursor:pointer;\r\n}\r\n\r\n.upload-container h1{\r\n    font-weight:700;\r\n    font-size:2rem;\r\n    text-align:center;\r\n    width:40%;\r\n}\r\n\r\n.upload-container{\r\n    margin-bottom:50px;\r\n}\r\n\r\n.content-details{\r\n    display:flex;\r\n    justify-content: space-around;\r\n    padding:30px;\r\n    margin: 60px;\r\n}\r\n\r\n.content-details .how-to{\r\n    background-color:white;\r\n    flex-basis:50%;\r\n\r\n}\r\n.content-details .how-to h1{\r\n    text-align:center;\r\n    margin-bottom: 30px;\r\n}\r\n\r\n.content-details .right-image{\r\n    flex-basis:50%;\r\n}\r\n\r\n.row{\r\n    margin: 10px;\r\n}\r\n.row .step{\r\n    margin:10px;\r\n    overflow:auto;\r\n}\r\n.row img {\r\n    float:left;\r\n    height: 25px;\r\n}\r\n\r\n.on-predict .image{\r\n    display:block;\r\n}\r\n",""]);const u=l},645:r=>{r.exports=function(r){var n=[];return n.toString=function(){return this.map((function(n){var e="",t=void 0!==n[5];return n[4]&&(e+="@supports (".concat(n[4],") {")),n[2]&&(e+="@media ".concat(n[2]," {")),t&&(e+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),e+=r(n),t&&(e+="}"),n[2]&&(e+="}"),n[4]&&(e+="}"),e})).join("")},n.i=function(r,e,t,o,i){"string"==typeof r&&(r=[[null,r,void 0]]);var a={};if(t)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(a[s]=!0)}for(var p=0;p<r.length;p++){var l=[].concat(r[p]);t&&a[l[0]]||(void 0!==i&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=i),e&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=e):l[2]=e),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),n.push(l))}},n}},667:r=>{r.exports=function(r,n){return n||(n={}),r?(r=String(r.__esModule?r.default:r),/^['"].*['"]$/.test(r)&&(r=r.slice(1,-1)),n.hash&&(r+=n.hash),/["'() \t\n]|(%20)/.test(r)||n.needQuotes?'"'.concat(r.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):r):r}},81:r=>{r.exports=function(r){return r[1]}},379:r=>{var n=[];function e(r){for(var e=-1,t=0;t<n.length;t++)if(n[t].identifier===r){e=t;break}return e}function t(r,t){for(var i={},a=[],c=0;c<r.length;c++){var s=r[c],p=t.base?s[0]+t.base:s[0],l=i[p]||0,d="".concat(p," ").concat(l);i[p]=l+1;var u=e(d),g={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==u)n[u].references++,n[u].updater(g);else{var f=o(g,t);t.byIndex=c,n.splice(c,0,{identifier:d,updater:f,references:1})}a.push(d)}return a}function o(r,n){var e=n.domAPI(n);return e.update(r),function(n){if(n){if(n.css===r.css&&n.media===r.media&&n.sourceMap===r.sourceMap&&n.supports===r.supports&&n.layer===r.layer)return;e.update(r=n)}else e.remove()}}r.exports=function(r,o){var i=t(r=r||[],o=o||{});return function(r){r=r||[];for(var a=0;a<i.length;a++){var c=e(i[a]);n[c].references--}for(var s=t(r,o),p=0;p<i.length;p++){var l=e(i[p]);0===n[l].references&&(n[l].updater(),n.splice(l,1))}i=s}}},569:r=>{var n={};r.exports=function(r,e){var t=function(r){if(void 0===n[r]){var e=document.querySelector(r);if(window.HTMLIFrameElement&&e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch(r){e=null}n[r]=e}return n[r]}(r);if(!t)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");t.appendChild(e)}},216:r=>{r.exports=function(r){var n=document.createElement("style");return r.setAttributes(n,r.attributes),r.insert(n,r.options),n}},565:(r,n,e)=>{r.exports=function(r){var n=e.nc;n&&r.setAttribute("nonce",n)}},795:r=>{r.exports=function(r){var n=r.insertStyleElement(r);return{update:function(e){!function(r,n,e){var t="";e.supports&&(t+="@supports (".concat(e.supports,") {")),e.media&&(t+="@media ".concat(e.media," {"));var o=void 0!==e.layer;o&&(t+="@layer".concat(e.layer.length>0?" ".concat(e.layer):""," {")),t+=e.css,o&&(t+="}"),e.media&&(t+="}"),e.supports&&(t+="}");var i=e.sourceMap;i&&"undefined"!=typeof btoa&&(t+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),n.styleTagTransform(t,r,n.options)}(n,r,e)},remove:function(){!function(r){if(null===r.parentNode)return!1;r.parentNode.removeChild(r)}(n)}}}},589:r=>{r.exports=function(r,n){if(n.styleSheet)n.styleSheet.cssText=r;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(r))}}},272:(r,n,e)=>{r.exports=e.p+"pineapple2.jpg"}},n={};function e(t){var o=n[t];if(void 0!==o)return o.exports;var i=n[t]={id:t,exports:{}};return r[t](i,i.exports,e),i.exports}e.m=r,e.n=r=>{var n=r&&r.__esModule?()=>r.default:()=>r;return e.d(n,{a:n}),n},e.d=(r,n)=>{for(var t in n)e.o(n,t)&&!e.o(r,t)&&Object.defineProperty(r,t,{enumerable:!0,get:n[t]})},e.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(r){if("object"==typeof window)return window}}(),e.o=(r,n)=>Object.prototype.hasOwnProperty.call(r,n),(()=>{var r;e.g.importScripts&&(r=e.g.location+"");var n=e.g.document;if(!r&&n&&(n.currentScript&&(r=n.currentScript.src),!r)){var t=n.getElementsByTagName("script");t.length&&(r=t[t.length-1].src)}if(!r)throw new Error("Automatic publicPath is not supported in this browser");r=r.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),e.p=r})(),e.b=document.baseURI||self.location.href,e.nc=void 0,(()=>{var r=e(379),n=e.n(r),t=e(795),o=e.n(t),i=e(569),a=e.n(i),c=e(565),s=e.n(c),p=e(216),l=e.n(p),d=e(589),u=e.n(d),g=e(591),f={};f.styleTagTransform=u(),f.setAttributes=s(),f.insert=a().bind(null,"head"),f.domAPI=o(),f.insertStyleElement=l(),n()(g.Z,f),g.Z&&g.Z.locals&&g.Z.locals;const h=e.p+"pineapple.jpg",m=e.p+"nophoto.jpg";window.addEventListener("load",(function(){document.getElementById("test").src=h,document.getElementById("svg");var r=document.querySelector("#ripan"),n=document.querySelector("#reynaldi"),e=document.querySelector("#alfi"),t=document.querySelector("#siti");r.src=m,n.src=m,e.src=m,t.src=m,document.querySelectorAll(".accordion").forEach((function(r){console.log(r),r.addEventListener("click",(function(){r.classList.toggle("active");var n=r.querySelector("svg path");r.classList.contains("active")?n.setAttribute("d","M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0\n                256S114.6 512 256 512zM184 232H328c13.3 0 24 10.7 24 24s-10.7\n                24-24 24H184c-13.3 0-24-10.7-24-24s10.7-24 24-24z"):n.setAttribute("d","M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM232 344V280H168c-13.3 0-24-10.7-24-24s10.7-24 24-24h64V168c0-13.3 10.7-24 24-24s24 10.7 24 24v64h64c13.3 0 24 10.7 24 24s-10.7 24-24 24H280v64c0 13.3-10.7 24-24 24s-24-10.7-24-24z")}))})),document.querySelector(".button").addEventListener("click",(function(r){window.location="./upload.html"}))}))})()})();