if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return r[e]||(s=new Promise((async s=>{if("document"in self){const r=document.createElement("script");r.src=e,document.head.appendChild(r),r.onload=s}else importScripts(e),s()}))),s.then((()=>{if(!r[e])throw new Error(`Module ${e} didn’t register its module`);return r[e]}))},s=(s,r)=>{Promise.all(s.map(e)).then((e=>r(1===e.length?e[0]:e)))},r={require:Promise.resolve(s)};self.define=(s,i,t)=>{r[s]||(r[s]=Promise.resolve().then((()=>{let r={};const n={uri:location.origin+s.slice(1)};return Promise.all(i.map((s=>{switch(s){case"exports":return r;case"module":return n;default:return e(s)}}))).then((e=>{const s=t(...e);return r.default||(r.default=s),r}))})))}}define("./sw.js",["./workbox-ac8ffed3"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"assets/index.618edf21.js",revision:"8f300c64950d036c9afa4c2a31d66bce"},{url:"assets/Test.d2837c9c.js",revision:"ff35992c11f2d2028bb502dc2c5e6cf0"},{url:"assets/vendor.00158530.js",revision:"4cec9abc0c0a6ebd69a4b8be03790828"},{url:"index.html",revision:"2a04d6b8474f5742b6cb9131c1031e32"},{url:"registerSW.js",revision:"a326a3418c3286e8b74466745e43f5ef"},{url:"manifest.webmanifest",revision:"3c4870d531ae5aa1aff298263703af6f"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
//# sourceMappingURL=sw.js.map