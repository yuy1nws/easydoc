import{c as _,a as g,r as y,o as b,b as E,V as m,g as L,d as w,e as x,i as A}from"./vendor.3fc3b4c7.js";const C=function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}};C();const O="modulepreload",h={},P="/easydoc/",p=function(r,s){return!s||s.length===0?r():Promise.all(s.map(n=>{if(n=`${P}${n}`,n in h)return;h[n]=!0;const e=n.endsWith(".css"),t=e?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${n}"]${t}`))return;const i=document.createElement("link");if(i.rel=e?"stylesheet":O,e||(i.as="script",i.crossOrigin=""),i.href=n,document.head.appendChild(i),e)return new Promise((l,d)=>{i.addEventListener("load",l),i.addEventListener("error",d)})})).then(()=>r())},T=[{path:"/",name:"index",component:()=>p(()=>import("./index.d0d21df7.js"),["assets/index.d0d21df7.js","assets/vendor.3fc3b4c7.js","assets/index.c27fcf73.js"]),children:[{path:"catalog",name:"catalog",component:()=>p(()=>import("./catalog.caa7933e.js"),["assets/catalog.caa7933e.js","assets/catalog.8c8947b0.css","assets/index.c27fcf73.js","assets/vendor.3fc3b4c7.js"])}]}],k=_({history:g(),routes:T});var B=(c,r)=>{for(const[s,n]of r)c[s]=n;return c};const $={};function j(c,r){const s=y("router-view");return b(),E(s)}var H=B($,[["render",j]]);(function(c){var r,s,n,e,t,i='<svg><symbol id="icon-cebianlan" viewBox="0 0 1024 1024"><path d="M0.000256 844.8c0-28.288 22.8352-51.2 51.1232-51.2h921.7536c28.2368 0 51.1232 22.7328 51.1232 51.2 0 28.288-22.8352 51.2-51.1232 51.2H51.123456A51.0464 51.0464 0 0 1 0.000256 844.8z m0-332.8c0-28.288 22.8352-51.2 51.1232-51.2h921.7536c28.2368 0 51.1232 22.7328 51.1232 51.2 0 28.288-22.8352 51.2-51.1232 51.2H51.123456A51.0464 51.0464 0 0 1 0.000256 512zM0.000256 179.2c0-28.288 22.8352-51.2 51.1232-51.2h921.7536C1001.113856 128 1024.000256 150.7328 1024.000256 179.2c0 28.288-22.8352 51.2-51.1232 51.2H51.123456A51.0464 51.0464 0 0 1 0.000256 179.2z" fill="#9099B0" ></path></symbol></svg>',l=(l=document.getElementsByTagName("script"))[l.length-1].getAttribute("data-injectcss"),d=function(o,a){a.parentNode.insertBefore(o,a)};if(l&&!c.__iconfont__svg__cssinject__){c.__iconfont__svg__cssinject__=!0;try{document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>")}catch(o){console&&console.log(o)}}function u(){t||(t=!0,n())}function f(){try{e.documentElement.doScroll("left")}catch(o){return void setTimeout(f,50)}u()}r=function(){var o,a;(a=document.createElement("div")).innerHTML=i,i=null,(o=a.getElementsByTagName("svg")[0])&&(o.setAttribute("aria-hidden","true"),o.style.position="absolute",o.style.width=0,o.style.height=0,o.style.overflow="hidden",a=o,(o=document.body).firstChild?d(a,o.firstChild):o.appendChild(a))},document.addEventListener?~["complete","loaded","interactive"].indexOf(document.readyState)?setTimeout(r,0):(s=function(){document.removeEventListener("DOMContentLoaded",s,!1),r()},document.addEventListener("DOMContentLoaded",s,!1)):document.attachEvent&&(n=r,e=c.document,t=!1,f(),e.onreadystatechange=function(){e.readyState=="complete"&&(e.onreadystatechange=null,u())})})(window);m.use(L);const v=w(H);v.config.globalProperties.$axios=x;v.use(k).use(A).use(m).mount("#app");export{B as _};
