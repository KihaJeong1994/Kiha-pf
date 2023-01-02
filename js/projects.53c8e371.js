"use strict";(self["webpackChunkvuejs_tailwindcss_portfolio"]=self["webpackChunkvuejs_tailwindcss_portfolio"]||[]).push([[176],{2503:function(e,t,r){r.r(t),r.d(t,{default:function(){return oe}});var a=r(6252);const l={class:"container mx-auto flex flex-col-reverse md:flex-row py-5 md:py-10 md:mt-10"};function i(e,t,r,i,o,n){const s=(0,a.up)("ContactForm"),d=(0,a.up)("ContactDetails");return(0,a.wg)(),(0,a.iD)("div",l,[(0,a.Wm)(s),(0,a.Wm)(d,{contacts:e.contacts},null,8,["contacts"])])}var o=r(8508),n=r.n(o),s=r(9963);const d={class:"w-full md:w-1/2"},c={class:"leading-loose max-w-xl m-4 p-7 bg-secondary-light dark:bg-secondary-dark rounded-xl shadow-xl text-left container"},m=(0,a._)("p",{class:"font-general-medium text-primary-dark dark:text-primary-light text-2xl mb-8"}," Contact Form ",-1),g=(0,a._)("label",{class:"block text-lg text-primary-dark dark:text-primary-light mb-2",for:"name"},"Full Name",-1),p=(0,a._)("label",{class:"block text-lg text-primary-dark dark:text-primary-light mb-2",for:"email"},"Email",-1),u=(0,a._)("label",{class:"block text-lg text-primary-dark dark:text-primary-light mb-2",for:"subject"},"Subject",-1),f=(0,a._)("label",{class:"block text-lg text-primary-dark dark:text-primary-light mb-2",for:"message"},"Message",-1),x=(0,a._)("div",null,[(0,a._)("input",{title:"Send Message",class:"px-4 py-2.5 text-white tracking-wider bg-indigo-500 hover:bg-indigo-600 focus:ring-1 focus:ring-indigo-900 rounded-lg duration-500",type:"submit",value:"Send Message","aria-label":"Send Message"})],-1),y={class:"example-modal-window"};function h(e,t,r,l,i,o){const n=(0,a.up)("ResultModal");return(0,a.wg)(),(0,a.iD)("div",d,[(0,a._)("div",c,[m,(0,a._)("form",{ref:"form",onSubmit:t[4]||(t[4]=(0,s.iM)(((...e)=>o.sendEmail&&o.sendEmail(...e)),["prevent"])),class:"font-general-regular space-y-7"},[(0,a._)("div",null,[g,(0,a.wy)((0,a._)("input",{class:"w-full px-5 py-2 border border-gray-300 dark:border-primary-dark border-opacity-50 text-primary-dark dark:text-secondary-light bg-ternary-light dark:bg-ternary-dark rounded-md shadow-sm text-md",id:"name",name:"name","onUpdate:modelValue":t[0]||(t[0]=e=>i.name=e),type:"text",required:"",placeholder:"Your Name","aria-label":"Name"},null,512),[[s.nr,i.name]])]),(0,a._)("div",null,[p,(0,a.wy)((0,a._)("input",{class:"w-full px-5 py-2 border border-gray-300 dark:border-primary-dark border-opacity-50 text-primary-dark dark:text-secondary-light bg-ternary-light dark:bg-ternary-dark rounded-md shadow-sm text-md",id:"email",name:"email","onUpdate:modelValue":t[1]||(t[1]=e=>i.email=e),type:"text",required:"",placeholder:"Your Email","aria-label":"Email"},null,512),[[s.nr,i.email]])]),(0,a._)("div",null,[u,(0,a.wy)((0,a._)("input",{class:"w-full px-5 py-2 border border-gray-300 dark:border-primary-dark border-opacity-50 text-primary-dark dark:text-secondary-light bg-ternary-light dark:bg-ternary-dark rounded-md shadow-sm text-md",id:"subject",name:"subject","onUpdate:modelValue":t[2]||(t[2]=e=>i.subject=e),type:"text",required:"",placeholder:"Subject","aria-label":"Subject"},null,512),[[s.nr,i.subject]])]),(0,a._)("div",null,[f,(0,a.wy)((0,a._)("textarea",{class:"w-full px-5 py-2 border border-gray-300 dark:border-primary-dark border-opacity-50 text-primary-dark dark:text-secondary-light bg-ternary-light dark:bg-ternary-dark rounded-md shadow-sm text-md",id:"message",name:"message","onUpdate:modelValue":t[3]||(t[3]=e=>i.message=e),cols:"14",rows:"6","aria-label":"Message"},null,512),[[s.nr,i.message]])]),x],544)]),(0,a._)("div",y,[i.myModal?((0,a.wg)(),(0,a.j4)(n,{key:0,onClose:o.closeModal,modalText:i.modalText},null,8,["onClose","modalText"])):(0,a.kq)("",!0)])])}var b=r(3577);const k=e=>((0,a.dD)("data-v-dbf6f77e"),e=e(),(0,a.Cn)(),e),w={class:"font-general-regular fixed inset-0 z-30"},j=k((()=>(0,a._)("div",{class:"bg-filter bg-black bg-opacity-50 fixed inset-0 w-full h-full z-20"},null,-1))),v={class:"flex flex-col items-center justify-center h-full w-full"},_={class:"modal-wrapper flex items-center z-30"},D={class:"modal max-w-md mx-5 xl:max-w-xl lg:max-w-xl md:max-w-xl bg-secondary-light dark:bg-primary-dark max-h-screen shadow-lg flex-row rounded-lg relative"},P={class:"modal-header flex justify-between gap-10 p-5 border-b border-ternary-light dark:border-ternary-dark"},I={class:"text-primary-dark dark:text-primary-light text-xl"},S=k((()=>(0,a._)("i",{"data-feather":"x"},null,-1))),M=[S],C={class:"modal-footer mt-2 sm:mt-0 py-5 px-8 border0-t text-center"};function H(e,t,r,l,i,o){const n=(0,a.up)("Button");return(0,a.wg)(),(0,a.iD)("div",w,[j,(0,a._)("main",v,[(0,a._)("div",_,[(0,a._)("div",D,[(0,a._)("div",P,[(0,a._)("h5",I,(0,b.zw)(r.modalText),1),(0,a._)("button",{class:"px-4 text-primary-dark dark:text-primary-light",onClick:t[0]||(t[0]=t=>e.$emit("close"))},M)]),(0,a._)("div",C,[(0,a.Wm)(n,{title:"Close",class:"px-4 sm:px-6 py-2 bg-gray-600 text-primary-light hover:bg-ternary-dark dark:bg-gray-200 dark:text-secondary-dark dark:hover:bg-primary-light rounded-md focus:ring-1 focus:ring-indigo-900 duration-500","aria-label":"Close Modal",onClick:t[1]||(t[1]=t=>e.$emit("close"))})])])])])])}var T=r(5533),E={props:["modalText"],components:{Button:T.Z},data(){return{}},mounted(){n().replace()},updated(){n().replace()},methods:{}},A=r(3744);const z=(0,A.Z)(E,[["render",H],["__scopeId","data-v-dbf6f77e"]]);var W=z;const B={_origin:"https://api.emailjs.com"},K=(e,t="https://api.emailjs.com")=>{B._userID=e,B._origin=t},F=(e,t,r)=>{if(!e)throw"The user ID is required. Visit https://dashboard.emailjs.com/admin/integration";if(!t)throw"The service ID is required. Visit https://dashboard.emailjs.com/admin";if(!r)throw"The template ID is required. Visit https://dashboard.emailjs.com/admin/templates";return!0};class U{constructor(e){this.status=e.status,this.text=e.responseText}}const Z=(e,t,r={})=>new Promise(((a,l)=>{const i=new XMLHttpRequest;i.addEventListener("load",(({target:e})=>{const t=new U(e);200===t.status||"OK"===t.text?a(t):l(t)})),i.addEventListener("error",(({target:e})=>{l(new U(e))})),i.open("POST",B._origin+e,!0),Object.keys(r).forEach((e=>{i.setRequestHeader(e,r[e])})),i.send(t)})),q=(e,t,r,a)=>{const l=a||B._userID;F(l,e,t);const i={lib_version:"3.2.0",user_id:l,service_id:e,template_id:t,template_params:r};return Z("/api/v1.0/email/send",JSON.stringify(i),{"Content-type":"application/json"})},R=e=>{let t;if(t="string"===typeof e?document.querySelector(e):e,!t||"FORM"!==t.nodeName)throw"The 3rd parameter is expected to be the HTML form element or the style selector of form";return t},Y=(e,t,r,a)=>{const l=a||B._userID,i=R(r);F(l,e,t);const o=new FormData(i);return o.append("lib_version","3.2.0"),o.append("service_id",e),o.append("template_id",t),o.append("user_id",l),Z("/api/v1.0/email/send-form",o)};var O={init:K,send:q,sendForm:Y},V={components:{ResultModal:W},data(){return{name:"",email:"",message:"",subject:"",myModal:!1,modalText:""}},methods:{openModal(e){this.modalText="200"==e?"Email has been successfully sent":"Failed to send email. Please send email to jkha7371@gmail.com",this.myModal=!0},closeModal(){this.myModal=!1},sendEmail(){try{O.sendForm("service_c1930vs","template_0hnti8r",this.$refs.form,"C6AdCkCw3aI2UQNLF").then((e=>{console.log("SUCCESS!",e.status,e.text),this.openModal(e.status)}),(e=>{console.log("FAILED...",e),this.openModal(e)}))}catch(e){console.log(e),this.openModal(e)}this.name="",this.email="",this.message="",this.subject=""}}};const G=(0,A.Z)(V,[["render",h]]);var L=G;const N={class:"w-full md:w-1/2"},J={class:"text-left max-w-xl px-6"},$=(0,a._)("h2",{class:"font-general-medium text-2xl text-primary-dark dark:text-primary-light mt-12 mb-8"}," Contact details ",-1),Q={class:"font-general-regular"},X=["data-feather"];function ee(e,t,r,l,i,o){return(0,a.wg)(),(0,a.iD)("div",N,[(0,a._)("div",J,[$,(0,a._)("ul",Q,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(r.contacts,(e=>((0,a.wg)(),(0,a.iD)("li",{class:"flex",key:e.id},[(0,a._)("i",{"data-feather":e.icon,class:"w-5 text-gray-500 dark:text-gray-400 mr-4"},null,8,X),(0,a._)("a",{href:"#",class:(0,b.C_)(["text-lg mb-4 text-ternary-dark dark:text-ternary-light","mail"===e.icon||"phone"===e.icon?"hover:underline cursor-pointer":""]),"aria-label":"Website and Phone"},(0,b.zw)(e.name),3)])))),128))])])])}var te={props:["contacts"]};const re=(0,A.Z)(te,[["render",ee]]);var ae=re,le={components:{ContactForm:L,ContactDetails:ae},data:()=>({contacts:[{id:1,name:"Suwon-si, Gyeonggi-do, Republic of Korea",icon:"map-pin"},{id:2,name:"jkha7371@gmail.com",icon:"mail"},{id:3,name:"010-2899-7371",icon:"phone"}]}),mounted(){n().replace()},updated(){n().replace()},methods:{}};const ie=(0,A.Z)(le,[["render",i]]);var oe=ie},8819:function(e,t,r){r.r(t),r.d(t,{default:function(){return c}});var a=r(6252);const l={class:"container mx-auto"};function i(e,t,r,i,o,n){const s=(0,a.up)("ProjectsGrid");return(0,a.wg)(),(0,a.iD)("div",l,[(0,a.Wm)(s)])}var o=r(700),n={name:"Projects",components:{ProjectsGrid:o.Z}},s=r(3744);const d=(0,s.Z)(n,[["render",i]]);var c=d},4645:function(e,t,r){r.r(t),r.d(t,{default:function(){return ne}});var a=r(6252);const l={class:"container mx-auto mt-10 sm:mt-20"};function i(e,t,r,i,o,n){const s=(0,a.up)("ProjectHeader"),d=(0,a.up)("ProjectGallery"),c=(0,a.up)("ProjectInfo"),m=(0,a.up)("ProjectRelatedProjects");return(0,a.wg)(),(0,a.iD)("div",l,[(0,a.Wm)(s,{singleProjectHeader:e.singleProjectHeader},null,8,["singleProjectHeader"]),(0,a.Wm)(d,{projectImages:e.projectImages},null,8,["projectImages"]),(0,a.Wm)(c,{projectInfo:e.projectInfo},null,8,["projectInfo"]),(0,a.Wm)(m,{relatedProject:e.relatedProject},null,8,["relatedProject"])])}var o=r(8508),n=r.n(o),s=r(3577);const d={class:"font-general-medium text-left text-3xl sm:text-4xl font-bold text-primary-dark dark:text-primary-light mt-14 sm:mt-20 mb-7"},c={class:"flex"},m={class:"flex items-center mr-10"},g=(0,a._)("i",{"data-feather":"clock",class:"w-4 h-4 text-ternary-dark dark:text-ternary-light"},null,-1),p={class:"font-general-medium ml-2 leading-none text-primary-dark dark:text-primary-light"},u={class:"flex items-center"},f=(0,a._)("i",{"data-feather":"tag",class:"w-4 h-4 text-ternary-dark dark:text-ternary-light"},null,-1),x={class:"font-general-medium ml-2 leading-none text-primary-dark dark:text-primary-light"};function y(e,t,r,l,i,o){return(0,a.wg)(),(0,a.iD)("div",null,[(0,a._)("p",d,(0,s.zw)(r.singleProjectHeader.singleProjectTitle),1),(0,a._)("div",c,[(0,a._)("div",m,[g,(0,a._)("span",p,(0,s.zw)(r.singleProjectHeader.singleProjectDate),1)]),(0,a._)("div",u,[f,(0,a._)("span",x,(0,s.zw)(r.singleProjectHeader.singleProjectTag),1)])])])}var h={props:["singleProjectHeader"]},b=r(3744);const k=(0,b.Z)(h,[["render",y]]);var w=k;const j={class:"grid grid-cols-1 sm:grid-cols-3 sm:gap-10 mt-12"},v=["src"];function _(e,t,r,l,i,o){return(0,a.wg)(),(0,a.iD)("div",j,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(r.projectImages,(e=>((0,a.wg)(),(0,a.iD)("div",{class:"mb-10 sm:mb-0",key:e.id},[(0,a._)("img",{src:e.img,class:"rounded-xl cursor-pointer shadow-lg sm:shadow-none",alt:"{{ projectImage.title }}"},null,8,v)])))),128))])}var D={props:["projectImages"]};const P=(0,b.Z)(D,[["render",_]]);var I=P;const S={class:"block sm:flex gap-0 sm:gap-10 mt-14"},M={class:"w-full sm:w-1/3 text-left"},C={class:"mb-7"},H={class:"font-general-medium text-2xl text-secondary-dark dark:text-secondary-light mb-2"},T={class:"leading-loose"},E=["href"],A={key:1},z={class:"mb-7"},W={class:"font-general-medium text-2xl text-ternary-dark dark:text-ternary-light mb-2"},B={class:"font-general-regular text-primary-dark dark:text-ternary-light"},K={class:"mb-7"},F={class:"font-general-medium text-2xl text-ternary-dark dark:text-ternary-light mb-2"},U={class:"font-general-regular text-primary-dark dark:text-ternary-light"},Z={class:"font-general-medium text-2xl text-ternary-dark dark:text-ternary-light mb-2"},q={class:"flex items-center gap-3 mt-5"},R=["href"],Y=["data-feather"],O={class:"w-full sm:w-2/3 text-left mt-10 sm:mt-0"},V={class:"font-general-medium text-primary-dark dark:text-primary-light text-2xl font-bold mb-7"};function G(e,t,r,l,i,o){return(0,a.wg)(),(0,a.iD)("div",S,[(0,a._)("div",M,[(0,a._)("div",C,[(0,a._)("p",H,(0,s.zw)(r.projectInfo.clientHeading),1),(0,a._)("ul",T,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(r.projectInfo.companyInfos,(e=>((0,a.wg)(),(0,a.iD)("li",{key:e,class:"font-general-regular text-ternary-dark dark:text-ternary-light"},[(0,a._)("span",null,(0,s.zw)(e.title)+": ",1),"Website"==e.title?((0,a.wg)(),(0,a.iD)("a",{key:0,href:e.details,class:(0,s.C_)("Website"==e.title?"hover:underline cursor-pointer":""),"aria-label":"Project Website and Phone"},(0,s.zw)(e.details),11,E)):((0,a.wg)(),(0,a.iD)("a",A,(0,s.zw)(e.details),1))])))),128))])]),(0,a._)("div",z,[(0,a._)("p",W,(0,s.zw)(r.projectInfo.objectivesHeading),1),(0,a._)("p",B,(0,s.zw)(r.projectInfo.objectivesDetails),1)]),(0,a._)("div",K,[(0,a._)("p",F,(0,s.zw)(r.projectInfo.technologies[0].title),1),(0,a._)("p",U,(0,s.zw)(r.projectInfo.technologies[0].techs.join(", ")),1)]),(0,a._)("div",null,[(0,a._)("p",Z,(0,s.zw)(r.projectInfo.socialSharingsHeading),1),(0,a._)("div",q,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(r.projectInfo.socialSharings,(e=>((0,a.wg)(),(0,a.iD)("a",{key:e.id,href:e.url,target:"__blank","aria-label":"Share Project",class:"bg-ternary-light dark:bg-ternary-dark text-gray-400 hover:text-primary-dark dark:hover:text-primary-light p-2 rounded-lg shadow-sm duration-500"},[(0,a._)("i",{"data-feather":e.icon,class:"w-4 lg:w-5 h-4 lg:h-5"},null,8,Y)],8,R)))),128))])])]),(0,a._)("div",O,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(r.projectInfo.projectDetailsList,(e=>((0,a.wg)(),(0,a.iD)("div",{key:e.id},[(0,a._)("p",V,(0,s.zw)(e.projectDetailsHeading),1),((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(e.projectDetails,(e=>((0,a.wg)(),(0,a.iD)("p",{key:e.id,class:"font-general-regular mb-5 text-lg text-ternary-dark dark:text-ternary-light"},(0,s.zw)(e.details),1)))),128))])))),128))])])}var L={props:["projectInfo"],mounted(){n().replace()},updated(){n().replace()}};const N=(0,b.Z)(L,[["render",G]]);var J=N;const $={class:"mt-10 pt-10 sm:pt-14 sm:mt-20 border-t-2 border-primary-light dark:border-secondary-dark"},Q={class:"font-general-regular text-primary-dark dark:text-primary-light text-3xl font-bold mb-10 sm:mb-14 text-left"},X={class:"grid grid-cols-1 sm:grid-cols-4 gap-10"},ee=["src","alt"];function te(e,t,r,l,i,o){return(0,a.wg)(),(0,a.iD)("div",$,[(0,a._)("p",Q,(0,s.zw)(r.relatedProject.relatedProjectsHeading),1),(0,a._)("div",X,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(r.relatedProject.relatedProjects,(e=>((0,a.wg)(),(0,a.iD)("div",{key:e.id},[(0,a._)("img",{src:e.img,class:"rounded-xl cursor-pointer",alt:e.title},null,8,ee)])))),128))])])}var re={props:["relatedProject"]};const ae=(0,b.Z)(re,[["render",te]]);var le=ae,ie={name:"Projects",components:{ProjectHeader:w,ProjectGallery:I,ProjectInfo:J,ProjectRelatedProjects:le},data:()=>({singleProjectHeader:{singleProjectTitle:"ktds API Gateway Solution",singleProjectDate:"April, 2022 ~ September, 2022",singleProjectTag:"Backend"},projectImages:[{id:1,title:"Kabul Project Management UI",img:r(7008)},{id:2,title:"Kabul Project Management UI",img:r(4343)},{id:3,title:"Kabul Project Management UI",img:r(7027)}],projectInfo:{clientHeading:"About Client",companyInfos:[{id:1,title:"Name",details:"ktds"},{id:2,title:"Services",details:"Backend"},{id:3,title:"Website",details:"https://ktds.com"},{id:4,title:"Phone",details:"02-523-7029"}],objectivesHeading:"Objective",objectivesDetails:"to process the large traffic and provide API integrated management service",technologies:[{title:"Tools & Technologies",techs:["Spring Cloud Gateway","MongoDB","Postgresql","Spring Data JPA","Spring Data MongoDB","resilience4j","Bucket4j","Kubernetes","AWS EKS","ECR","ECS","EC2","Jmeter","Apache Bench"]}],projectDetailsList:[{id:1,projectDetailsHeading:"Outline",projectDetails:[{id:1,details:"BEAST is an API gateway solution for digital transformantion. You can easily register, update, delete, and manage API with BEAST. You can add some custom filters to handle your API in the run time. These custome filters can be developed on web-based IDE."},{id:2,details:"BEAST provides you a great dashboard that helps you monitor the API gateway and detect the anomaly. Of course you can achieve load balancing, log tracking, and fault tolerance with BEAST"}]},{id:2,projectDetailsHeading:"My Role",projectDetails:[{id:1,details:"1. Developing Spring Cloud Gateway Filters : developed non-blocking filters for api gateway such as prefilter, postfilter, auth filter, rate limiting filter, etc "},{id:2,details:"2. DB & Memory Synchronization : fetches DB data periodically by Sceduler, and manage data in memory for performance"},{id:3,details:"3. Distributed Performance Test : build Jmeter master, slave servers in AWS EC2, and performed the distributed performance testing for several times. monitors api gateway performance by Visual VM "},{id:4,details:"4. Dual DB : use either Spring Data JPA or Spring Data MongoDB to manage data with one service logic"},{id:5,details:"5. DevOps : deploy api gateway solution on AWS EKS environment and manage kubernetes objects like Pod, Service, StatefulSet, Ingress, etc "}]}]},relatedProject:{relatedProjectsHeading:"Related Projects",relatedProjects:[{id:1,title:"Mobile UI",img:r(2725)},{id:2,title:"Web Application",img:r(4600)},{id:3,title:"UI Design",img:r(7034)},{id:4,title:"Kabul Mobile App UI",img:r(8687)}]}}),mounted(){n().replace()},updated(){n().replace()},methods:{}};const oe=(0,b.Z)(ie,[["render",i]]);var ne=oe},4343:function(e,t,r){e.exports=r.p+"img/beast1.79914f07.jpeg"},7027:function(e,t,r){e.exports=r.p+"img/beast2.ba6433e8.jpeg"},2725:function(e,t,r){e.exports=r.p+"img/mobile-project-1.8b4f9e2f.jpg"},8687:function(e,t,r){e.exports=r.p+"img/mobile-project-2.9bd76372.jpg"},7034:function(e,t,r){e.exports=r.p+"img/ui-project-2.afd87ce7.jpg"},4600:function(e,t,r){e.exports=r.p+"img/web-project-1.d1debdf5.jpg"}}]);
//# sourceMappingURL=projects.53c8e371.js.map