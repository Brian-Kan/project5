(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{16:function(e,t,a){e.exports=a(43)},22:function(e,t,a){},42:function(e,t,a){},43:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),o=a(9),s=a.n(o),l=(a(22),a(10)),c=a(11),r=a(14),m=a(12),g=a(15),u=a(13),d=a.n(u),h=(a(42),function(e){function t(){var e;return Object(l.a)(this,t),(e=Object(r.a)(this,Object(m.a)(t).call(this))).getPhotos=function(){d()({method:"GET",url:"https://pixabay.com/api/",dataResponse:"jsonp",params:{key:"12624950-1e2c848ae9138ca54d5e56079",per_page:200}}).then(function(t){e.setState({images:t.data.hits,isLoading:!1}),e.imageRendering(),console.log("Visible Images",e.state.visibleImages)}).catch(function(e){console.log("The axios call failed",e)})},e.imageRendering=function(){for(var t=e.state.images,a=e.state.visibleImages,n=0;n<20;n++)a.push(t[0]),t.shift();e.setState({images:t,visibleImages:a})},e.state={images:[],visibleImages:[],isLoading:!0},e}return Object(g.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this;document.addEventListener("scroll",function(t){window.innerHeight+window.scrollY>=document.body.offsetHeight&&(console.log("Scroll Test!"),e.imageRendering())},!0)}},{key:"render",value:function(){return i.a.createElement("div",{className:"App"},i.a.createElement("header",null,i.a.createElement("div",{className:"titleButtonContainer"},i.a.createElement("h1",null,"Generate a random gallery."),i.a.createElement("button",{onClick:this.getPhotos},"Click me for pictures!"),i.a.createElement("button",{onClick:this.imageRendering},"Get MORE pictures!"),i.a.createElement("div",{onScroll:this.imageRendering}))),i.a.createElement("section",{className:"gallery"},this.state.visibleImages.map(function(e){if(void 0!==e)return i.a.createElement("div",{className:"imageSizer",key:void 0===e?console.log("Null Message"):e.largeImageURL},e.largeImageURL?i.a.createElement("img",{src:e.largeImageURL,alt:e.tags}):null)})))}}]),t}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(i.a.createElement(h,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[16,1,2]]]);
//# sourceMappingURL=main.89cd85bb.chunk.js.map