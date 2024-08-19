"use strict";(self.webpackChunkthe_philosophy_club_at_uva=self.webpackChunkthe_philosophy_club_at_uva||[]).push([[293],{7528:function(e,t,a){var n=a(6540),l=a(4194);t.A=function(e){var t,a;let{description:r,title:i,children:o}=e;const{site:s}=(0,l.useStaticQuery)("63159454"),c=r||s.siteMetadata.description,u=null===(t=s.siteMetadata)||void 0===t?void 0:t.title;return n.createElement(n.Fragment,null,n.createElement("title",null,u?i+" | "+u:i),n.createElement("meta",{name:"description",content:c}),n.createElement("meta",{property:"og:title",content:i}),n.createElement("meta",{property:"og:description",content:c}),n.createElement("meta",{property:"og:type",content:"website"}),n.createElement("meta",{name:"twitter:card",content:"summary"}),n.createElement("meta",{name:"twitter:creator",content:(null===(a=s.siteMetadata)||void 0===a?void 0:a.author)||""}),n.createElement("meta",{name:"twitter:title",content:i}),n.createElement("meta",{name:"twitter:description",content:c}),o)}},7753:function(e,t,a){a.r(t),a.d(t,{Head:function(){return p},default:function(){return g}});var n=a(6540),l=a(8154),r=a(2532),i=a(6616),o=a(7528);var s=()=>{const e=['"Honey, do you think free will truly exists?"','"What is a chair?"','"I think, therefore I am"','"In Monopoly I only buy water works and electric company cause I\'m a utilitarian"','"Hey, there\'s a trolley coming, who tied all these people to these train tracks?!? And what is this lever for?"','"Funny rotating quote"',"\"What don't you know that you don't know?\"",'"Calculating the answer to the Ultimate Question of Life, the Universe, and Everything..."','"42!"'],{0:t,1:a}=(0,n.useState)(""),{0:l,1:r}=(0,n.useState)(!1);return(0,n.useEffect)((()=>{var t;5===(t=Math.floor(Math.random()*e.length))&&(t=Math.floor(Math.random()*e.length)),a(e[t]),r(5===t)}),[]),n.createElement("div",null,n.createElement("h1",{class:"text-4xl italic text-center "+(l?"hover:animate-rotateAnimation":"")},t))},c=a(4658),u=a.n(c);var m=e=>{let{children:t}=e;const{0:a,1:l}=(0,n.useState)(!1);return(0,n.useEffect)((()=>{l(!0)}),[]),n.createElement("div",{className:"transition-[transform,opacity] custom-transition transform "+(a?"translate-x-0 opacity-100":"translate-x-full opacity-0")},t)};var d=e=>{let{children:t}=e;const{0:a,1:l}=(0,n.useState)(!1);return(0,n.useEffect)((()=>{l(!0)}),[]),n.createElement("div",{className:"transition-[transform,opacity] custom-transition transform "+(a?"translate-x-0 opacity-100":"-translate-x-full opacity-0")},t)};var f=e=>{let{children:t,delay:a}=e;const{0:l,1:r}=(0,n.useState)(!1);return(0,n.useEffect)((()=>{const e=()=>{const e=document.getElementById("fade-in-on-scroll");if(e){const{top:t}=e.getBoundingClientRect();t<window.innerHeight&&setTimeout((()=>{r(!0)}),a)}};return window.addEventListener("scroll",e),()=>{window.removeEventListener("scroll",e)}}),[a]),n.createElement("div",{id:"fade-in-on-scroll",className:"transition-[transform,opacity] custom-transition transform "+(l?"translate-x-0 opacity-100":"-translate-x-full opacity-0")+" flex flex-wrap"},t)};var h=e=>{let{children:t,delay:a}=e;const{0:l,1:r}=(0,n.useState)(!1);return(0,n.useEffect)((()=>{const e=()=>{const e=document.getElementById("fade-in-on-scroll");if(e){const{top:t}=e.getBoundingClientRect();t<window.innerHeight&&setTimeout((()=>{r(!0)}),a)}};return window.addEventListener("scroll",e),()=>{window.removeEventListener("scroll",e)}}),[a]),n.createElement("div",{id:"fade-in-on-scroll",className:"transition-[transform,opacity] custom-transition transform "+(l?"translate-x-0 opacity-100":"translate-x-full opacity-0")},t)};const p=()=>n.createElement(o.A,{title:"Home"});var g=()=>{const{0:e,1:t}=(0,n.useState)([]);return(0,n.useEffect)((()=>{fetch("https://us-east-1-shared-usea1-02.cdn.hygraph.com/content/clx2dm8fq00r407v12j32u6sq/master",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({query:"\n                {\n                    slideShowImages {\n                        image {\n                          url\n                        }\n                      }\n                }"})}).then((e=>e.json())).then((e=>{if(e&&e.data&&e.data.slideShowImages){const a=[];for(let t=0;t<e.data.slideShowImages.length;t++)a.push({url:e.data.slideShowImages[t].image.url});t(a)}else console.error("Unexpected response format:",e)})).catch((e=>{console.error("Error fetching data:",e)}))}),[]),n.createElement(i.A,null,n.createElement(l.A,null,n.createElement("title",null,"Home | The Philosophy Club at UVA"),n.createElement("meta",{name:"description",content:"The official website of the Philosophy Club at UVA"})),n.createElement("body",{className:"min-h-screen overflow-x-hidden"},n.createElement("div",{className:"flex flex-col xl:flex-row bg-blue justify-center pt-4 pb-20 items-center sm:gap-12"},n.createElement(d,null,n.createElement("div",{className:"flex flex-col mb-4  sm:max-w-xl xl:max-w-2xl 2xl:max-w-3xl mx-auto xl:ml-12 2xl:ml-12"},n.createElement("div",{className:"hidden sm:block text-6xl 2xl:text-8xl "},n.createElement("h1",null,"THE"),n.createElement("h1",{className:"font-bold"},"PHILOSOPHY CLUB",n.createElement("span",{className:"text-3xl 2xl:text-5xl font-normal"},"@UVA"))),n.createElement("div",{className:"bg-lightsilver sm:shadow-[30px_30px_0px_0_rgba(0,0,0,0.3)] p-6 mt-10 "},n.createElement("div",{className:"max-w-64"},n.createElement("h1",{className:"text-5xl text-start italic"},"Our Mission")),n.createElement("ul",{className:"ml-6 list-disc font-['Shanti']"},n.createElement("li",{className:"mt-5 text-2xl"},"Bring together those interested in philosophical inquiry through discussions and events. "),n.createElement("li",{className:"mt-5 text-2xl"},"Promote the study of philosophy to all of UVA and the broader Charlottesville area through community outreach."),n.createElement("li",{className:"mt-5 text-2xl"},"Encourage a stronger connection between students and faculty in the Department of Philosophy."))))),n.createElement(m,null,n.createElement("div",{className:"sm:mx-auto mt-20 basis-1/2  2xl:max-w-5xl"},n.createElement("div",{className:"outerBevel"},n.createElement("div",{className:"flatSurface"},n.createElement("div",{className:"innerBevel"},n.createElement("div",{className:"block md:hidden"},n.createElement(u(),{key:e.length,width:325,height:250,images:e,showBullets:!0,showNavs:!0,autoPlay:!0,autoPlayDelay:10})),n.createElement("div",{className:"hidden md:block 2xl:hidden"},n.createElement(u(),{key:e.length,width:600,height:428,images:e,showBullets:!0,showNavs:!0,autoPlay:!0,autoPlayDelay:10})),n.createElement("div",{className:"hidden 2xl:block"},n.createElement(u(),{key:e.length,width:700,height:500,images:e,showBullets:!0,showNavs:!0,autoPlay:!0,autoPlayDelay:10})))))))),n.createElement("div",{className:"bg-lightsilver"},n.createElement("div",{className:"flex flex-wrap flex-col m-auto px-6 py-16 justify-center"},n.createElement("div",{className:"flex flex-wrap gap-x-20 justify-center"},n.createElement(f,null,n.createElement("div",{className:"w-64 self-center"},n.createElement("h1",{className:"hidden lg:block text-6xl italic"},"About"))),n.createElement(h,null,n.createElement("div",{className:"max-w-2xl bg-blue rounded p-6 sm:shadow-[20px_20px_0px_0_rgba(0,0,0,0.3)] font-['Shanti']"},n.createElement("h1",{className:"lg:hidden text-4xl text-white"},"About"),n.createElement("p",{className:"text-lg font-medium text-white"},"The Philosophy Club at UVA is a student run CIO. We aim to provide an environment for those interested in philosophy to come together to discuss what fascinates them and meet others with similar interests. We host several meetings a semester and are branching out into hosting a wider variety of events including major info sessions, community outreach, and fundraisers.")))),n.createElement("div",{className:"flex flex-wrap gap-x-20 mt-16 justify-center"},n.createElement(f,{delay:500},n.createElement("div",{className:"w-64 self-center"},n.createElement("h1",{className:"hidden lg:block text-6xl italic"},"Meetings"))),n.createElement(h,{delay:500},n.createElement("div",{className:"max-w-2xl font-medium bg-blue text-white rounded p-6 sm:shadow-[20px_20px_0px_0_rgba(0,0,0,0.3)] font-['Shanti']"},n.createElement("h2",{className:"lg:hidden text-3xl"},"Meetings"),n.createElement("p",{className:"text-lg text-white"},"Meetings are where the discussion happens! Meeting are usually either student led or feature a guest speaker from the philosophy department."),n.createElement("ul",{className:"list-disc text-lg ml-6"},n.createElement("li",null,n.createElement("p",{className:"text-white"},"Topics cover all branches of philosophy, both in pure and applied philosophy. No formal knowledge of philosophy is necessary to leave feeling thoughtful, so feel free to stop by and listen in. ")),n.createElement("li",null,n.createElement("p",{className:"text-white"},"Usually held in the Philosophy Library (located in Cocke Hall), but locations may vary.")),n.createElement("li",null,n.createElement("p",{className:"text-white"},"Complementary donuts and coffee are also provided at each meeting.")))))),n.createElement("div",{className:"flex flex-wrap gap-x-20 mt-16 justify-center"},n.createElement(f,{delay:1e3},n.createElement("div",{className:"w-64 self-center"},n.createElement("h1",{className:"hidden lg:block text-6xl italic"},"Also visit"))),n.createElement(h,{delay:1e3},n.createElement("div",{className:"max-w-2xl font-medium text-white bg-blue rounded p-6 sm:shadow-[20px_20px_0px_0_rgba(0,0,0,0.3)] font-['Shanti']"},n.createElement("h2",{className:"lg:hidden text-3xl"},"Also visit"),n.createElement("h2",{className:"text-2xl lg:text-3xl"},"The Corcoran Department of Philosophy"),n.createElement("p",{className:"text-lg"},"Special thanks to our official advisor Mark Jeter and the Corcoran Department of Philosophy for making this club possible!"),n.createElement("p",{className:"text-lg"},"Learn more about the UVA Department of Philosophy at: ",n.createElement("span",null,n.createElement("a",{className:"underline font-bold text-xl",href:"https://philosophy.virginia.edu/"},"https://philosophy.virginia.edu/"))),n.createElement("h2",{className:"text-2xl lg:text-3xl mt-4"},"The Contemplative Cavalier"),n.createElement("p",{className:"text-lg"},"UVA's premier undergraudate philosophy journal. All UVA students are welcome to submit."),n.createElement("p",{className:"text-lg"}," To read or submit visit ",n.createElement("a",{className:"underline font-bold text-xl",href:"https://the-contemplative-cavalier.vercel.app"},"https://the-contemplative-cavalier.vercel.app"))))),"README.md")),n.createElement("div",{className:"bg-blue"},n.createElement("div",{className:"flex flex-wrap flex-col justify-center max-w-4xl mx-4 sm:m-auto "},n.createElement("h2",{className:"text-2xl mt-12 text-center font-['Shanti']"},"Join the ",n.createElement("a",{href:"https://groupme.com/join_group/93261535/MxmKm2Fi",className:"underline"},"GroupMe")," to stay the most up to date!"),n.createElement("div",{className:"flex justify-center flex-wrap mt-8"},n.createElement("div",{className:"size-40"},n.createElement(r.S,{className:"rounded-md",src:"../images/groupme.jpg",__imageData:a(9615)})))),n.createElement("div",{className:"flex flex-wrap justify-center p-6 py-12 max-w-5xl mx-auto "},n.createElement(s,null))),n.createElement("div",{className:"h-full bg-gray"},n.createElement("div",{className:"flex flex-wrap justify-center max-w-4xl mx-4 lg:m-auto"},n.createElement("div",{className:"mt-6 text-xs"},n.createElement("p",null,"Although this organization has members who are University of Virginia students and may have University employees associated or engaged in its activities and affairs, the organization is not a part of or an agency of the University. It is a separate and independent organization which is responsible for and manages its own activities and affairs. The University does not direct, supervise or control the organization and is not responsible for the organization's contracts, acts or omissions."))),"`")))}},4658:function(e,t,a){function n(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var a=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==a)return;var n,l,r=[],i=!0,o=!1;try{for(a=a.call(e);!(i=(n=a.next()).done)&&(r.push(n.value),!t||r.length!==t);i=!0);}catch(s){o=!0,l=s}finally{try{i||null==a.return||a.return()}finally{if(o)throw l}}return r}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return l(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);"Object"===a&&e.constructor&&(a=e.constructor.name);if("Map"===a||"Set"===a)return Array.from(e);if("Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return l(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function l(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,n=new Array(t);a<t;a++)n[a]=e[a];return n}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e){return s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},s(e)}var c=a(6540);function u(e){return e&&"object"===s(e)&&"default"in e?e:{default:e}}var m,d,f,h,p,g,x=u(c),v=(d={},f=[],(h=function(){"function"==typeof Image&&(m=new Array(3).fill(0).map((function(){return new Image})))})(),{load:function(e){if(m){if(e&&!d[e])if(0===m.length)f.push(e);else{var t=m.shift();t.src=e,t.onload=function(){d[e]=!0,f.length>0?t.src=f.shift():m.push(t)}}}else h()}});!function(e){e[e.NORMAL=1]="NORMAL",e[e.BOLD=2]="BOLD"}(p||(p={})),function(e){e.LEFT="left",e.RIGHT="right"}(g||(g={}));var y=function(e){return x.default.createElement(x.default.Fragment,null,e.visible&&x.default.createElement("button",{type:"button",style:S.getNavStyle(e.direction,e.size,e.margin),onClick:e.onClickNav(e.direction)},x.default.createElement("img",{src:e.type===p.NORMAL?"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' width='24' height='24' viewBox='0 0 24 24'%3e %3cdefs%3e %3cfilter id='8utpkffr2a' width='171.8%25' height='232.4%25' x='-35.9%25' y='-66.2%25' filterUnits='objectBoundingBox'%3e %3cfeOffset in='SourceAlpha' result='shadowOffsetOuter1'/%3e %3cfeGaussianBlur in='shadowOffsetOuter1' result='shadowBlurOuter1' stdDeviation='2'/%3e %3cfeColorMatrix in='shadowBlurOuter1' values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.4 0'/%3e %3c/filter%3e %3cpath id='6inzdknobb' d='M20 6.999L20.707 7.706 12.354 16.06 4 7.706 4.707 6.999 12.354 14.646z'/%3e %3c/defs%3e %3cg fill='none' fill-rule='evenodd'%3e %3cg%3e %3cg%3e %3cg transform='translate(-67 -27) translate(67 27) rotate(90 12.354 11.53)'%3e %3cuse fill='black' filter='url(%238utpkffr2a)' xlink:href='%236inzdknobb'/%3e %3cuse fill='white' xlink:href='%236inzdknobb'/%3e %3c/g%3e %3c/g%3e %3c/g%3e %3c/g%3e%3c/svg%3e":"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' width='24' height='24' viewBox='0 0 24 24'%3e %3cdefs%3e %3cfilter id='0ls8o9a99a' width='168.9%25' height='218.6%25' x='-34.5%25' y='-59.3%25' filterUnits='objectBoundingBox'%3e %3cfeOffset in='SourceAlpha' result='shadowOffsetOuter1'/%3e %3cfeGaussianBlur in='shadowOffsetOuter1' result='shadowBlurOuter1' stdDeviation='2'/%3e %3cfeColorMatrix in='shadowBlurOuter1' values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.3 0'/%3e %3c/filter%3e %3cpath id='rs87bry78b' d='M19 7L20.413 8.414 11.707 17.12 2.999 8.414 4.413 7 11.707 14.291z'/%3e %3c/defs%3e %3cg fill='none' fill-rule='evenodd'%3e %3cg%3e %3cg%3e %3cg transform='translate(-24 -27) translate(24 27) rotate(90 11.707 12.06)'%3e %3cuse fill='black' filter='url(%230ls8o9a99a)' xlink:href='%23rs87bry78b'/%3e %3cuse fill='white' xlink:href='%23rs87bry78b'/%3e %3c/g%3e %3c/g%3e %3c/g%3e %3c/g%3e%3c/svg%3e",style:i({width:"100%"},e.direction===g.RIGHT&&{transform:"rotate(180deg)"}),alt:e.direction===g.LEFT?"slide to left":"slide to right"})))},b={display:"block",margin:"0",padding:"0",border:"0"},w={position:"absolute",left:0,top:0,width:"100%",height:"100%",backgroundSize:"cover"},E={position:"absolute",top:"50%",cursor:"pointer",outline:"none",background:"none"},N={position:"absolute",left:"50%",bottom:"15px"},k={display:"inline-block",cursor:"pointer",outline:"none",background:"none",boxShadow:"1px 1px 1px 0px #1a1a1a",borderRadius:"50%",border:"1px solid #FFFFFF",width:"".concat(15,"px"),height:"".concat(15,"px"),marginLeft:"".concat(3,"px"),marginRight:"".concat(3,"px")},S={ImageSlider:i(i({},b),{position:"absolute",left:0,top:0,width:"100%",height:"100%"}),ImageSlideCurrent:i(i({},w),{},{overflow:"hidden"}),ImageSlideNext:i(i({},w),{},{overflow:"hidden"}),NavLeft:i(i(i({},b),E),{},{left:"30px",marginTop:"-25px"}),NavRight:i(i(i({},b),E),{},{right:"30px",marginTop:"-25px"}),BulletNormal:i(i({},b),k),BulletActive:i(i(i({},b),k),{},{background:"#FFF"}),getRootContainer:function(e,t,a){return i(i({},b),{},{overflow:"hidden",width:e,height:t,backgroundColor:a})},getSubContainer:function(e,t){return i(i({},b),{},{position:"absolute",overflow:"hidden",width:e,height:t})},getBulletContainer:function(e){return i(i(i({},b),N),{},{marginLeft:"-".concat(21*e/2,"px")})},getImageSlide:function(e,t,a,n){return i(i({},w),{},{overflow:"hidden",transition:"".concat(t,"s"),backgroundImage:"url(".concat(e,")"),transform:n?"translate3d(".concat(100*a,"%, 0px, 0px)"):"translate(".concat(100*a,"%, 0px)")})},getNavStyle:function(e,t,a){return i(i(i(i({},b),E),e===g.LEFT?{left:"".concat(a,"px")}:{right:"".concat(a,"px")}),{},{marginTop:"-".concat(Math.floor(t/2),"px"),width:"".concat(t,"px")})}},C=function(e){var t=e.visible,a=e.length,n=e.currentIdx,l=e.onClickBullets;return x.default.createElement(x.default.Fragment,null,t&&a>0&&x.default.createElement("div",{style:S.getBulletContainer(a)},Array.from(Array(a).keys()).map((function(e){return x.default.createElement("button",{key:"bullet-".concat(e),type:"button","data-id":"bullet-".concat(e),style:e===n?S.BulletActive:S.BulletNormal,onClick:function(){return l(e)}})}))))},I=function(e){var t=e.startIndex,a=e.imageCount,l=e.autoPlay,r=e.autoPlayDelay,i=n(c.useState(t<a?t:0),2),o=i[0],s=i[1],u=c.useRef(!0),m=c.useRef(o),d=c.useRef(null),f=function(){null!==d.current&&(clearTimeout(d.current),d.current=null)},h=function(e){return e>=a?0:e<0?a-1:e},p=function(e){u.current=e>o,m.current=o,s(h(e))};return c.useEffect((function(){var e;return f(),e=o+1,l&&!d.current&&(d.current=setTimeout((function(){p(e)}),1e3*r)),f}),[o]),{slideIdx:o,updateSlideIdx:p,getNextLoopingIdx:h,isRightDirection:u.current,previousSlideIdx:m.current}},O=function(e,t){var a;return(null===(a=e[t])||void 0===a?void 0:a.url)||e[t]};e.exports=function(e){var t=e.width,a=e.height,l=e.images,r=e.showNavs,o=e.showBullets,s=e.loop,u=void 0===s||s,m=e.autoPlay,d=void 0!==m&&m,f=e.autoPlayDelay,h=void 0===f?2:f,b=e.startIndex,w=void 0===b?0:b,E=e.style,N=void 0===E?void 0:E,k=e.slideDuration,j=void 0===k?.5:k,A=e.bgColor,B=void 0===A?"#000":A,P=e.useGPURender,M=void 0===P||P,T=e.navSize,_=void 0===T?50:T,L=e.navMargin,D=void 0===L?30:L,R=e.navStyle,U=void 0===R?p.NORMAL:R,z=e.onClick,F=void 0===z?void 0:z,H=e.onClickNav,V=void 0===H?void 0:H,G=e.onClickBullets,q=void 0===G?void 0:G,J=e.onStartSlide,W=void 0===J?void 0:J,Q=e.onCompleteSlide,K=void 0===Q?void 0:Q,Y=c.useMemo((function(){return S.getRootContainer(t,a,B)}),[t,a,B]),$=I({imageCount:l.length,startIndex:w,autoPlay:d,autoPlayDelay:h+j}),X=$.slideIdx,Z=$.updateSlideIdx,ee=$.isRightDirection,te=$.getNextLoopingIdx,ae=$.previousSlideIdx,ne=n(c.useState(S.getImageSlide(O(l,w),j,0,M)),2),le=ne[0],re=ne[1],ie=n(c.useState(S.getImageSlide(O(l,w+1),j,1,M)),2),oe=ie[0],se=ie[1],ce=c.useRef(!1),ue=c.useCallback((function(e){null==F||F(X,e)}),[X]),me=c.useCallback((function(e){return function(){if(!ce.current){var t=e===g.RIGHT;null==V||V(t),Z(t?X+1:X-1)}}}),[V,X,Z]),de=c.useCallback((function(e){e===X||ce.current||(null==q||q(e),Z(e))}),[q,X,Z]);c.useEffect((function(){if(X!==ae){var e=O(l,te(ee?X-1:X+1)),t=O(l,X),a=ee?-1:1,n=ee?1:-1;null==W||W(X+1,l.length),se(S.getImageSlide(t,0,n,M)),setTimeout((function(){ce.current=!0,re(S.getImageSlide(e,j,a,M)),se(S.getImageSlide(t,j,0,M))}),50)}}),[W,X,ee]);var fe=c.useCallback((function(){ce.current=!1,v.load(O(l,X+2)),re(S.getImageSlide(O(l,X),0,0,M)),null==K||K(X+1,l.length)}),[K,X]);return x.default.createElement("div",{style:i(i({},Y),N)},x.default.createElement("div",{style:S.getSubContainer(t,a)},x.default.createElement("div",{style:S.ImageSlider,onClick:ue,className:"rsis-container"},x.default.createElement("div",{style:le,onTransitionEnd:fe,className:"rsis-image"}),l.length>1&&x.default.createElement("div",{style:oe})),(u||X>0)&&x.default.createElement(y,{direction:g.LEFT,visible:r&&l.length>0,type:U,size:_,margin:D,onClickNav:me}),(u||X<l.length-1)&&x.default.createElement(y,{direction:g.RIGHT,visible:r&&l.length>0,type:U,size:_,margin:D,onClickNav:me}),x.default.createElement(C,{visible:o,length:l.length,currentIdx:X,onClickBullets:de})))}},9615:function(e){e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#f8f8f8","images":{"fallback":{"src":"/static/d5a96dc51b873fc95ff78f494b2aa369/7a5e7/groupme.jpg","srcSet":"/static/d5a96dc51b873fc95ff78f494b2aa369/dfcca/groupme.jpg 135w,\\n/static/d5a96dc51b873fc95ff78f494b2aa369/1dd70/groupme.jpg 271w,\\n/static/d5a96dc51b873fc95ff78f494b2aa369/7a5e7/groupme.jpg 541w","sizes":"(min-width: 541px) 541px, 100vw"},"sources":[{"srcSet":"/static/d5a96dc51b873fc95ff78f494b2aa369/eb4f7/groupme.webp 135w,\\n/static/d5a96dc51b873fc95ff78f494b2aa369/58e49/groupme.webp 271w,\\n/static/d5a96dc51b873fc95ff78f494b2aa369/4cca8/groupme.webp 541w","type":"image/webp","sizes":"(min-width: 541px) 541px, 100vw"}]},"width":541,"height":537}')}}]);
//# sourceMappingURL=component---src-pages-index-js-b3589489948cf8d78ed2.js.map