if(!self.define){let i,e={};const c=(c,n)=>(c=new URL(c+".js",n).href,e[c]||new Promise((e=>{if("document"in self){const i=document.createElement("script");i.src=c,i.onload=e,document.head.appendChild(i)}else i=c,importScripts(c),e()})).then((()=>{let i=e[c];if(!i)throw new Error(`Module ${c} didn’t register its module`);return i})));self.define=(n,r)=>{const d=i||("document"in self?document.currentScript.src:"")||location.href;if(e[d])return;let o={};const a=i=>c(i,d),s={module:{uri:d},exports:o,require:a};e[d]=Promise.all(n.map((i=>s[i]||a(i)))).then((i=>(r(...i),o)))}}define(["./workbox-0f6f39c6"],(function(i){"use strict";self.skipWaiting(),i.clientsClaim(),i.precacheAndRoute([{url:"css/index.css",revision:"8e633633fb7cc4af7bceb9a93d6caaea"},{url:"css/var.css",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"404.html",revision:"543622f5bb8832945f6d287aecd67a83"},{url:"js/main.js",revision:"cdd5970350f40e50e1d9b7dd1557909b"},{url:"js/search/algolia.js",revision:"cdb2dcd4b387fbb5ea25ff877fb946c6"},{url:"js/search/local-search.js",revision:"0f5dddc0c88389610bae38a044ee7a8a"},{url:"js/tw_cn.js",revision:"bd9f7c3f385d1a9a448243c0bf966625"},{url:"js/utils.js",revision:"abc188c87ccf64f31fa3d0eb47649a4f"},{url:"anzhiyu/random.js",revision:"f8755a237faa02915e207258d40b2946"},{url:"img/404.jpg",revision:"8190796a570d269ef04b777d93d44e6d"},{url:"img/512.png",revision:"701819a72025df4d8e2a111c1c8f2c72"},{url:"img/algolia.svg",revision:"fd40b88ac5370a5353a50b8175c1f367"},{url:"img/beian.svg",revision:"4a66220fff8a7798b65e8a72a4101aeb"},{url:"img/comment_bg.png",revision:"fe6bbe142eb7dc7b4f876ae4f5af97d0"},{url:"img/default_cover.jpg",revision:"8b35831759dc5f66710c2839422109d5"},{url:"img/favicon.ico",revision:"463fd720116f4237a0dbf0330c144bf9"},{url:"img/friend_404.gif",revision:"d09ab53cb5bb15079ce8e3d90b157353"},{url:"img/loading.gif",revision:"05fb29f4e677ff6057ef55925f46e9b0"},{url:"img/siteicon/16.png",revision:"3de470acb5237bf16318d827443dd5f1"},{url:"img/siteicon/32.png",revision:"802aa4685b3652d5a1b6e5a6323cf3c0"},{url:"img/siteicon/android-chrome-144x144.png",revision:"6e8aacdefe189fc60210af602faff284"},{url:"img/siteicon/android-chrome-192x192.png",revision:"cc2057dc990bbd830c83c84d3de3bcc0"},{url:"img/siteicon/android-chrome-256x256.png",revision:"027ef8ec40fc0fbb42bfc0bcdfedecf7"},{url:"img/siteicon/android-chrome-36x36.png",revision:"93983c02588801166f420e74c8b1d64c"},{url:"img/siteicon/android-chrome-384x384.png",revision:"4d1e2f2cb9c70a64e120cc8e4c5153f1"},{url:"img/siteicon/android-chrome-48x48.png",revision:"3ee166acfa2f001697cfdaa6effa3f75"},{url:"img/siteicon/android-chrome-72x72.png",revision:"c2d068addf135961b6d0bb1c619ace3f"},{url:"img/siteicon/android-chrome-96x96.png",revision:"a7da2722ad71fc0d5966df14d41d55d3"},{url:"img/siteicon/apple-icon-180.png",revision:"ac045b7b6012d72ccbcffb07727c7b11"},{url:"img/siteicon/apple-touch-icon.png",revision:"e26089928220cec71420376c9993966f"},{url:"img/siteicon/browserconfig.xml",revision:"8b2e51dd5dc52a633e547603d36530ae"},{url:"img/siteicon/favicon-16x16.png",revision:"99018bd7deb1f58b43c10aa6f4b469ab"},{url:"img/siteicon/favicon-32x32.png",revision:"2dcf6a78c9cac7b8d600648955d979a2"},{url:"img/siteicon/favicon.ico",revision:"63d975f64cec1ef0ab1e51b46b9abd83"},{url:"img/siteicon/manifest-icon-192.maskable.png",revision:"87c1b5883834c2164e20e737bd5c2517"},{url:"img/siteicon/manifest-icon-512.maskable.png",revision:"85b846b5722c684339c8bb3e520bcc6a"},{url:"img/siteicon/mstile-150x150.png",revision:"5a353930121d3816dd6ddddea03dcf7d"},{url:"img/siteicon/README.html",revision:"d63f789538ab7f281e84adf017d01fd4"},{url:"img/siteicon/safari-pinned-tab.svg",revision:"ab73a4bdba7038e6cbc7eb77ecdc5bf5"},{url:"img/siteicon/site.webmanifest",revision:"490a2e5133c5cde28d4d2b78c9b7aee0"},{url:"manifest.json",revision:"fe46ef18a5c7a8a1b5c28f0d9d1528ff"},{url:"/",revision:"index-20240718072947877"},{url:"music/",revision:"music-20240718072947877"},{url:"about/",revision:"about-20240718072947877"}],{}),i.registerRoute(/^https:\/\/npm\.elemecdn\.com\/anzhiyu-blog/,new i.CacheFirst,"GET")}));