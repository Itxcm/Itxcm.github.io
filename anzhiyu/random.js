var posts=["posts/95384548.html","posts/d40e6620.html","posts/1d402326.html","posts/c08c44fe.html","posts/efe3621d.html","posts/203a9b3a.html","posts/722f63b5.html","posts/a466fb88.html","posts/32af4145.html","posts/5e21c553.html","posts/735e5788.html","posts/Infinity.html","posts/b9f7c887.html","posts/9882dd88.html"];function toRandomPost(){pjax.loadUrl("/"+posts[Math.floor(Math.random()*posts.length)])}var friend_link_list=[{name:"Hexo",hundredSuffix:"!w120",link:"https://hexo.io/zh-tw/",avatar:"https://d33wubrfki0l68.cloudfront.net/6657ba50e702d84afb32fe846bed54fba1a77add/827ae/logo.svg",descr:"快速、简单且强大的网站框架"},{name:"anzhiyu主题",link:"https://blog.anheyu.com/",avatar:"https://img02.anheyu.com/adminuploads/1/2022/09/15/63232b7d91d22.jpg",descr:"生活明朗，万物可爱",siteshot:"https://npm.elemecdn.com/anzhiyu-blog@1.1.6/img/post/common/anzhiy.cn.jpg"}],refreshNum=1;function friendChainRandomTransmission(){const t=Math.floor(Math.random()*friend_link_list.length),{name:n,link:o}=friend_link_list.splice(t,1)[0];Snackbar.show({text:"点击前往按钮进入随机一个友链，不保证跳转网站的安全性和可用性。本次随机到的是本站友链：「"+n+"」",duration:8e3,pos:"top-center",actionText:"前往",onActionClick:function(t){t.style.opacity=0,window.open(o,"_blank")}})}function addFriendLinksInFooter(){var t=document.getElementById("footer-random-friends-btn");if(!t)return;t.style.opacity="0.2",t.style.transitionDuration="0.3s",t.style.transform="rotate("+360*refreshNum+++"deg)";const n=[];let o=0;for(;friend_link_list.length&&o<3;){const t=Math.floor(Math.random()*friend_link_list.length),{name:e,link:s,avatar:a}=friend_link_list.splice(t,1)[0];n.push({name:e,link:s,avatar:a}),o++}let e=n.map((({name:t,link:n})=>"<a class='footer-item' href='"+n+"' target='_blank' rel='noopener nofollow'>"+t+"</a>")).join("");e+="<a class='footer-item' href='/link/'>更多</a>",document.getElementById("friend-links-in-footer").innerHTML=e,setTimeout((()=>{t.style.opacity="1"}),300)}