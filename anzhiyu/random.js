var posts=["2023/07/28/技术/外挂标签/","2023/07/31/技术/设计模式/","2023/07/31/求职/面向求职的一篇博客/","2023/07/31/生活/音乐篇/","2023/07/31/项目/肉鸽动作/"];function toRandomPost(){pjax.loadUrl("/"+posts[Math.floor(Math.random()*posts.length)])}var friend_link_list=[{name:"Hexo",hundredSuffix:"!w120",link:"https://hexo.io/zh-tw/",avatar:"https://d33wubrfki0l68.cloudfront.net/6657ba50e702d84afb32fe846bed54fba1a77add/827ae/logo.svg",descr:"快速、简单且强大的网站框架"},{name:"anzhiyu主题",link:"https://blog.anheyu.com/",avatar:"https://img02.anheyu.com/adminuploads/1/2022/09/15/63232b7d91d22.jpg",descr:"生活明朗，万物可爱",siteshot:"https://npm.elemecdn.com/anzhiyu-blog@1.1.6/img/post/common/anzhiy.cn.jpg"},{name:"安知鱼",hundredSuffix:"!w120",link:"https://blog.anheyu.com/",avatar:"https://img02.anheyu.com/adminuploads/1/2022/09/15/63232b7d91d22.jpg",descr:"生活明朗，万物可爱",siteshot:"https://npm.elemecdn.com/anzhiyu-blog@1.1.6/img/post/common/anzhiy.cn.jpg"}],refreshNum=1;function friendChainRandomTransmission(){const n=Math.floor(Math.random()*friend_link_list.length),{name:t,link:e}=friend_link_list.splice(n,1)[0];Snackbar.show({text:"点击前往按钮进入随机一个友链，不保证跳转网站的安全性和可用性。本次随机到的是本站友链：「"+t+"」",duration:8e3,pos:"top-center",actionText:"前往",onActionClick:function(n){n.style.opacity=0,window.open(e,"_blank")}})}function addFriendLinksInFooter(){var n=document.getElementById("footer-random-friends-btn");if(!n)return;n.style.opacity="0.2",n.style.transitionDuration="0.3s",n.style.transform="rotate("+360*refreshNum+++"deg)";const t=[];let e=0;for(;friend_link_list.length&&e<3;){const n=Math.floor(Math.random()*friend_link_list.length),{name:o,link:a,avatar:i}=friend_link_list.splice(n,1)[0];t.push({name:o,link:a,avatar:i}),e++}let o=t.map((({name:n,link:t})=>"<a class='footer-item' href='"+t+"' target='_blank' rel='noopener nofollow'>"+n+"</a>")).join("");o+="<a class='footer-item' href='/link/'>更多</a>",document.getElementById("friend-links-in-footer").innerHTML=o,setTimeout((()=>{n.style.opacity="1"}),300)}