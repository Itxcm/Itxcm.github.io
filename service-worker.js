if(!self.define){let e,i={};const c=(c,n)=>(c=new URL(c+".js",n).href,i[c]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=c,e.onload=i,document.head.appendChild(e)}else e=c,importScripts(c),i()})).then((()=>{let e=i[c];if(!e)throw new Error(`Module ${c} didn’t register its module`);return e})));self.define=(n,r)=>{const s=e||("document"in self?document.currentScript.src:"")||location.href;if(i[s])return;let f={};const a=e=>c(e,s),o={module:{uri:s},exports:f,require:a};i[s]=Promise.all(n.map((e=>o[e]||a(e)))).then((e=>(r(...e),f)))}}define(["./workbox-0f6f39c6"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"css/index.css",revision:"5cd0497d5e39c1522e77f179779f6786"},{url:"css/var.css",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"404.html",revision:"7e26a13faf1054cc348477d3997e8bcd"},{url:"js/main.js",revision:"0b92b164b1f3078737b98f7c370f55a5"},{url:"js/search/algolia.js",revision:"cdb2dcd4b387fbb5ea25ff877fb946c6"},{url:"js/search/local-search.js",revision:"0f5dddc0c88389610bae38a044ee7a8a"},{url:"js/tw_cn.js",revision:"bd9f7c3f385d1a9a448243c0bf966625"},{url:"js/utils.js",revision:"a34773e49c71c634e061f9dbcede3df8"},{url:"anzhiyu/random.js",revision:"2aa09dc3d792adb03f5690f2224f87f0"},{url:"img/404.jpg",revision:"8190796a570d269ef04b777d93d44e6d"},{url:"img/512.png",revision:"701819a72025df4d8e2a111c1c8f2c72"},{url:"img/algolia.svg",revision:"fd40b88ac5370a5353a50b8175c1f367"},{url:"img/beian.svg",revision:"4a66220fff8a7798b65e8a72a4101aeb"},{url:"img/comment_bg.png",revision:"fe6bbe142eb7dc7b4f876ae4f5af97d0"},{url:"img/default_cover.jpg",revision:"8b35831759dc5f66710c2839422109d5"},{url:"img/favicon.ico",revision:"463fd720116f4237a0dbf0330c144bf9"},{url:"img/friend_404.gif",revision:"d09ab53cb5bb15079ce8e3d90b157353"},{url:"img/loading.gif",revision:"05fb29f4e677ff6057ef55925f46e9b0"},{url:"img/siteicon/128.png",revision:"234ea804fda29034ccdff7e281113ba9"},{url:"img/siteicon/144.png",revision:"a524062afee8cfe743ccf12c0f2147c0"},{url:"img/siteicon/16.png",revision:"3de470acb5237bf16318d827443dd5f1"},{url:"img/siteicon/256.png",revision:"7e67d274b394a717b9ff6d2bf0ef8a33"},{url:"img/siteicon/32.png",revision:"802aa4685b3652d5a1b6e5a6323cf3c0"},{url:"img/siteicon/48.png",revision:"91619c175b8730aba672e58b9a6e13d6"},{url:"img/siteicon/64.png",revision:"01c8bd49c3053c403944cfb5df8c64ba"},{url:"img/siteicon/apple-icon-180.png",revision:"ac045b7b6012d72ccbcffb07727c7b11"},{url:"img/siteicon/manifest-icon-192.maskable.png",revision:"87c1b5883834c2164e20e737bd5c2517"},{url:"img/siteicon/manifest-icon-512.maskable.png",revision:"85b846b5722c684339c8bb3e520bcc6a"},{url:"manifest.json",revision:"e3469cd42e59722658a173ca7b763642"},{url:"/",revision:"index-20230813101217181"},{url:"music/",revision:"music-20230813101217181"},{url:"about/",revision:"about-20230813101217181"}],{}),e.registerRoute(/^https:\/\/npm\.elemecdn\.com\/anzhiyu-blog/,new e.CacheFirst,"GET")}));