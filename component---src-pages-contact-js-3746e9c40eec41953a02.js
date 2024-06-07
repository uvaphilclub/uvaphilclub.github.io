"use strict";(self.webpackChunkthe_philosophy_club_at_uva=self.webpackChunkthe_philosophy_club_at_uva||[]).push([[209],{7528:function(e,t,a){var n=a(6540),l=a(4194);t.A=function(e){var t,a;let{description:r,title:c,children:m}=e;const{site:s}=(0,l.useStaticQuery)("63159454"),i=r||s.siteMetadata.description,o=null===(t=s.siteMetadata)||void 0===t?void 0:t.title;return n.createElement(n.Fragment,null,n.createElement("title",null,o?c+" | "+o:c),n.createElement("meta",{name:"description",content:i}),n.createElement("meta",{property:"og:title",content:c}),n.createElement("meta",{property:"og:description",content:i}),n.createElement("meta",{property:"og:type",content:"website"}),n.createElement("meta",{name:"twitter:card",content:"summary"}),n.createElement("meta",{name:"twitter:creator",content:(null===(a=s.siteMetadata)||void 0===a?void 0:a.author)||""}),n.createElement("meta",{name:"twitter:title",content:c}),n.createElement("meta",{name:"twitter:description",content:i}),m)}},558:function(e,t,a){a.r(t),a.d(t,{Head:function(){return i},default:function(){return o}});var n=a(6540),l=a(8154),r=a(6616),c=a(7528),m=a(2532);var s=e=>{let{image:t,name:a,title:l,email:r}=e;console.log(t);const c=(0,m.c)(t);return console.log(c),n.createElement("div",null,n.createElement("img",{className:"size-56",src:t,alt:"Picture of "+{name:a}}),n.createElement("h1",null,l),n.createElement("div",{className:"text-center"},n.createElement("p",null,a),n.createElement("a",{href:"mailto: "+r},r," ✉")))};const i=()=>n.createElement(c.A,{title:"Contact"});var o=()=>{const{0:e,1:t}=(0,n.useState)([]);return(0,n.useEffect)((()=>{fetch("https://us-east-1-shared-usea1-02.cdn.hygraph.com/content/clx2dm8fq00r407v12j32u6sq/master",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({query:"\n            {\n              profiles(orderBy: order_ASC) {\n                email\n                name\n                order\n                title\n                profilePicture {\n                  url\n                  \n                }\n              }\n            }\n          "})}).then((e=>e.json())).then((e=>{e&&e.data&&e.data.profiles?t(e.data.profiles):console.error("Unexpected response format:",e)})).catch((e=>{console.error("Error fetching profiles:",e)}))}),[]),n.createElement(r.A,null,n.createElement(l.m,null,n.createElement("title",null,"Contact | The Philosophy Club at UVA"),n.createElement("meta",{name:"description",content:"The contact information for the Philosophy Club at UVA"})),n.createElement("link",{rel:"stylesheet",href:"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"}),n.createElement("div",{className:"min-h-screen mx-auto"},n.createElement("div",{className:"flex flex-wrap justify-center gap-x-20 py-6 bg-blue min-w-full"},n.createElement("h1",{className:"mb-6 sm:mb-0 self-center text-4xl italic"},"Get Connected"),n.createElement("ul",{className:"text-xl font-['Shanti']"},n.createElement("li",{className:"flex flex-wrap justify-between"},"Join the GroupMe:",n.createElement("a",{href:"https://groupme.com/join_group/93261535/MxmKm2Fi"},n.createElement("span",null,n.createElement("svg",{className:"h-6 w-6 mt-1",fill:"#2744E9",role:"img",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},n.createElement("title",null,"GroupMe"),n.createElement("path",{d:"M11.1597 6.57419H12.8398V8.16898H11.1597V6.57419ZM18.1997 0H5.80011C3.14898 0 1 2.03979 1 4.55577V16.3243C1 18.8402 3.14898 20.88 5.80011 20.88H9.92715L11.9786 24L14.0306 20.88H18.1997C20.8506 20.88 23 18.8402 23 16.3243V4.55574C23 2.03976 20.8506 0 18.1997 0ZM7.56833 8.16895H9.34755V6.57416H7.56833V4.85447H9.34755V3.16587H11.1597V4.85447H12.8398V3.16587H14.6519V4.85447H16.4308V6.57416H14.6519V8.16895H16.4308V9.88852H14.6519V11.5772H12.8398V9.88852H11.1597V11.5772H9.34755V9.88852H7.56833V8.16895ZM20.3122 13.4321C20.3122 13.4321 17.9202 17.708 12.2406 17.708C12.1619 17.708 12.0843 17.707 12.007 17.7057C11.9299 17.707 11.8522 17.708 11.7737 17.708C6.09416 17.708 3.70211 13.4321 3.70211 13.4321C3.70211 13.4321 3.54729 13.1536 3.54729 12.8534C3.53754 12.6368 3.64915 12.3263 3.9421 12.1433C4.105 12.0417 4.259 11.9914 4.40179 11.9757C5.08566 11.9069 5.48202 12.3295 5.80794 12.8121C6.16788 13.3447 8.24445 15.678 12.007 15.7672C15.7698 15.678 17.8464 13.3447 18.2063 12.8121C18.5322 12.3295 18.9429 11.9062 19.6125 11.9757C19.7553 11.9914 19.9094 12.0417 20.0722 12.1433C20.3652 12.3263 20.4792 12.5839 20.469 12.8532C20.446 13.2494 20.3122 13.4321 20.3122 13.4321Z"}))))),n.createElement("li",{className:"flex flex-wrap  items-center justify-between"},"Join the email list: ",n.createElement("div",{className:"text-2xl"},n.createElement("a",{href:"https://lists.virginia.edu/sympa/subscribe/phil.club",className:"fa fa-envelope text-center"}))),n.createElement("li",{className:"flex flex-wrap justify-between items-center"},"Follow us on Instagram: ",n.createElement("div",{className:"bg-blue flex flex-wrap text-2xl ml-4"},n.createElement("a",{href:"https://www.instagram.com/uvaphilosophyclub/",className:"fa fa-instagram w-6 text-[#FFFFFF] text-center"}))))),n.createElement("div",{className:"max-w-6xl mt-16 mb-16 mx-auto "},n.createElement("h1",{className:"text-center text-5xl italic font-['Lato']"},"Meet the Team"),n.createElement("div",{className:"profiles m-10 pb-16 flex flex-wrap justify-center gap-y-12 gap-x-40 font-['Shanti']"},e.map((e=>n.createElement(s,{key:e.email,email:e.email,name:e.name,title:e.title,image:e.profilePicture.url})))))))}}}]);
//# sourceMappingURL=component---src-pages-contact-js-3746e9c40eec41953a02.js.map