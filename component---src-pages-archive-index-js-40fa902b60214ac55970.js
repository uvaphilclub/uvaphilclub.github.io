"use strict";(self.webpackChunkthe_philosophy_club_at_uva=self.webpackChunkthe_philosophy_club_at_uva||[]).push([[966],{5227:function(e,t,a){a.r(t),a.d(t,{default:function(){return n}});var l=a(6540),r=a(8154),s=a(6616);var m=e=>{let{index:t,semester:a,events:r}=e;return l.createElement("div",null,0==t?l.createElement("div",{className:"flex flex-wrap bg-yellow h-14 border-t-2"},l.createElement("div",{className:"basis-1/6 border-r-4 border-red"}),l.createElement("div",{className:"basis-5/6 text-4xl self-center"},l.createElement("p",{className:"ml-4"},a))):l.createElement("div",null,l.createElement("div",{className:"flex flex-wrap bg-yellow h-14 border-t-2"},l.createElement("div",{className:"basis-1/6 border-r-4 border-red"}),l.createElement("div",{className:"basis-5/6 text-4xl self-center"})),l.createElement("div",{className:"flex flex-wrap bg-yellow h-14 border-t-2"},l.createElement("div",{className:"basis-1/6 border-r-4 border-red"}),l.createElement("div",{className:"basis-5/6 text-4xl self-center"},l.createElement("p",{className:"ml-4"},a)))),r.map((e=>l.createElement("div",{key:e.title},l.createElement("div",{className:"flex flex-wrap bg-yellow h-14 border-t-2"},l.createElement("div",{className:"basis-1/6 border-r-4 border-red"}),l.createElement("div",{className:"basis-5/6 text-2xl self-center"},l.createElement("p",{className:"ml-4"}," ",l.createElement("span",{className:"text-4xl mr-4"},"✓"),e.meetingTitle))),e.guestSpeaker&&l.createElement("div",{className:"flex flex-wrap bg-yellow h-14 border-t-2"},l.createElement("div",{className:"basis-1/6 border-r-4 border-red"}),l.createElement("div",{className:"basis-5/6 text-2xl self-center"},l.createElement("p",{className:"ml-32 italic"},"Guest Speaker - ",e.guestSpeaker)))))))};var c=e=>{let{index:t,semester:a,events:r}=e;return console.log(t),l.createElement(l.Fragment,null,l.createElement("link",{rel:"stylesheet",href:"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"}),l.createElement("div",null,0===t&&l.createElement("div",{className:"mx-3 mb-10 mt-10 bg-blue px-3 py-6 text-white rounded-sm"},l.createElement("h2",{className:"text-center text-4xl"},a),r.map(((e,t)=>l.createElement("div",{key:t,className:"flex flex-row"},l.createElement("i",{className:"fa fa-check-square mr-2 relative top-[1.2rem]"}),l.createElement("div",null,l.createElement("p",{className:"mt-4 text-wrap"},e.meetingTitle),e.guestSpeaker&&l.createElement("p",{className:"ml-8 italic"},"Guest Speaker - ",e.guestSpeaker)))))),0!==t&&l.createElement("div",{className:"mb-10 mx-3 px-3 py-6 text-white bg-blue rounded-sm"},l.createElement("h2",{className:"text-center text-4xl"},a),r.map(((e,t)=>l.createElement("div",{key:t,className:"flex flex-row"},l.createElement("i",{className:"fa fa-check-square mr-2 relative top-[1.2rem]"}),l.createElement("div",null,l.createElement("p",{className:"mt-4 text-wrap"},e.meetingTitle),e.guestSpeaker&&l.createElement("p",{className:"ml-8 italic"},"Guest Speaker - ",e.guestSpeaker))))))))};var n=()=>{const{0:e,1:t}=(0,l.useState)([]);return(0,l.useEffect)((()=>{fetch("https://us-east-1-shared-usea1-02.cdn.hygraph.com/content/clx2dm8fq00r407v12j32u6sq/master",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({query:"\n                {\n                    semesterArchives(orderBy: date_DESC) {\n                        semester\n                        archivedMeetings {\n                          meetingTitle\n                          guestSpeaker\n                        }\n                      }\n                }"})}).then((e=>e.json())).then((e=>{e&&e.data&&e.data.semesterArchives?t(e.data.semesterArchives):console.error("Unexpected response format:",e)})).catch((e=>{console.error("Error fetching past events:",e)}))}),[]),l.createElement(s.A,null,l.createElement(r.m,null,l.createElement("title",null,"Archive | The Philosohpy Club at UVA"),l.createElement("meta",{name:"description",content:"The past events we've hosted"})),l.createElement("div",{className:"flex flex-col flex-wrap items-center pt-12 pb-12 bg-blue"},l.createElement("h1",{className:"text-6xl italic text-center text-white"},"Previously Pondered")),l.createElement("div",{className:"hidden md:flex flex-col flex-wrap max-w-4xl mx-auto mt-12 pb-16 mb-16 font-['Lato']"},l.createElement("div",{className:"bg-brown h-24"}),e.map(((e,t)=>l.createElement(m,{key:e.semester,index:t,semester:e.semester,events:e.archivedMeetings}))),l.createElement("div",{className:"flex flex-wrap bg-yellow h-14 border-t-2"},l.createElement("div",{className:"basis-1/6 border-r-4 border-red"}),l.createElement("div",{className:"basis-5/6 text-2xl self-center"})),l.createElement("div",{className:"flex flex-wrap bg-yellow h-14 border-t-2"},l.createElement("div",{className:"basis-1/6 border-r-4 border-red"}),l.createElement("div",{className:"basis-5/6 text-2xl self-center"})),l.createElement("div",{className:"flex flex-wrap bg-yellow h-14 border-t-2"},l.createElement("div",{className:"basis-1/6 border-r-4 border-red"}),l.createElement("div",{className:"basis-5/6 text-2xl self-center"})),l.createElement("div",{className:"flex flex-wrap bg-yellow h-14 border-t-2"},l.createElement("div",{className:"basis-1/6 border-r-4 border-red"}),l.createElement("div",{className:"basis-5/6 text-2xl self-center"})),l.createElement("div",{className:"flex flex-wrap bg-yellow h-14 border-t-2"},l.createElement("div",{className:"basis-1/6 border-r-4 border-red"}),l.createElement("div",{className:"basis-5/6 text-2xl self-center"}))),l.createElement("div",{className:"md:hidden max-w-md mx-auto text-2xl pb-6 mb-16 font-['Shanti']"},e.map(((e,t)=>l.createElement(c,{key:e.semester,index:t,semester:e.semester,events:e.archivedMeetings})))))}}}]);
//# sourceMappingURL=component---src-pages-archive-index-js-40fa902b60214ac55970.js.map