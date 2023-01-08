"use strict";(self["webpackChunkvuejs_tailwindcss_portfolio"]=self["webpackChunkvuejs_tailwindcss_portfolio"]||[]).push([[176],{2503:function(e,t,a){a.r(t),a.d(t,{default:function(){return oe}});var r=a(6252);const i={class:"container mx-auto flex flex-col-reverse md:flex-row py-5 md:py-10 md:mt-10"};function l(e,t,a,l,o,s){const n=(0,r.up)("ContactForm"),d=(0,r.up)("ContactDetails");return(0,r.wg)(),(0,r.iD)("div",i,[(0,r.Wm)(n),(0,r.Wm)(d,{contacts:e.contacts},null,8,["contacts"])])}var o=a(8508),s=a.n(o),n=a(9963);const d={class:"w-full md:w-1/2"},c={class:"leading-loose max-w-xl m-4 p-7 bg-secondary-light dark:bg-secondary-dark rounded-xl shadow-xl text-left container"},m=(0,r._)("p",{class:"font-general-medium text-primary-dark dark:text-primary-light text-2xl mb-8"}," Contact Form ",-1),g=(0,r._)("label",{class:"block text-lg text-primary-dark dark:text-primary-light mb-2",for:"name"},"Full Name",-1),p=(0,r._)("label",{class:"block text-lg text-primary-dark dark:text-primary-light mb-2",for:"email"},"Email",-1),u=(0,r._)("label",{class:"block text-lg text-primary-dark dark:text-primary-light mb-2",for:"subject"},"Subject",-1),f=(0,r._)("label",{class:"block text-lg text-primary-dark dark:text-primary-light mb-2",for:"message"},"Message",-1),h=(0,r._)("div",null,[(0,r._)("input",{title:"Send Message",class:"px-4 py-2.5 text-white tracking-wider bg-indigo-500 hover:bg-indigo-600 focus:ring-1 focus:ring-indigo-900 rounded-lg duration-500",type:"submit",value:"Send Message","aria-label":"Send Message"})],-1),y={class:"example-modal-window"};function b(e,t,a,i,l,o){const s=(0,r.up)("ResultModal");return(0,r.wg)(),(0,r.iD)("div",d,[(0,r._)("div",c,[m,(0,r._)("form",{ref:"form",onSubmit:t[4]||(t[4]=(0,n.iM)(((...e)=>o.sendEmail&&o.sendEmail(...e)),["prevent"])),class:"font-general-regular space-y-7"},[(0,r._)("div",null,[g,(0,r.wy)((0,r._)("input",{class:"w-full px-5 py-2 border border-gray-300 dark:border-primary-dark border-opacity-50 text-primary-dark dark:text-secondary-light bg-ternary-light dark:bg-ternary-dark rounded-md shadow-sm text-md",id:"name",name:"name","onUpdate:modelValue":t[0]||(t[0]=e=>l.name=e),type:"text",required:"",placeholder:"Your Name","aria-label":"Name"},null,512),[[n.nr,l.name]])]),(0,r._)("div",null,[p,(0,r.wy)((0,r._)("input",{class:"w-full px-5 py-2 border border-gray-300 dark:border-primary-dark border-opacity-50 text-primary-dark dark:text-secondary-light bg-ternary-light dark:bg-ternary-dark rounded-md shadow-sm text-md",id:"email",name:"email","onUpdate:modelValue":t[1]||(t[1]=e=>l.email=e),type:"text",required:"",placeholder:"Your Email","aria-label":"Email"},null,512),[[n.nr,l.email]])]),(0,r._)("div",null,[u,(0,r.wy)((0,r._)("input",{class:"w-full px-5 py-2 border border-gray-300 dark:border-primary-dark border-opacity-50 text-primary-dark dark:text-secondary-light bg-ternary-light dark:bg-ternary-dark rounded-md shadow-sm text-md",id:"subject",name:"subject","onUpdate:modelValue":t[2]||(t[2]=e=>l.subject=e),type:"text",required:"",placeholder:"Subject","aria-label":"Subject"},null,512),[[n.nr,l.subject]])]),(0,r._)("div",null,[f,(0,r.wy)((0,r._)("textarea",{class:"w-full px-5 py-2 border border-gray-300 dark:border-primary-dark border-opacity-50 text-primary-dark dark:text-secondary-light bg-ternary-light dark:bg-ternary-dark rounded-md shadow-sm text-md",id:"message",name:"message","onUpdate:modelValue":t[3]||(t[3]=e=>l.message=e),cols:"14",rows:"6","aria-label":"Message"},null,512),[[n.nr,l.message]])]),h],544)]),(0,r._)("div",y,[l.myModal?((0,r.wg)(),(0,r.j4)(s,{key:0,onClose:o.closeModal,modalText:l.modalText},null,8,["onClose","modalText"])):(0,r.kq)("",!0)])])}var x=a(3577);const k=e=>((0,r.dD)("data-v-dbf6f77e"),e=e(),(0,r.Cn)(),e),j={class:"font-general-regular fixed inset-0 z-30"},v=k((()=>(0,r._)("div",{class:"bg-filter bg-black bg-opacity-50 fixed inset-0 w-full h-full z-20"},null,-1))),w={class:"flex flex-col items-center justify-center h-full w-full"},_={class:"modal-wrapper flex items-center z-30"},D={class:"modal max-w-md mx-5 xl:max-w-xl lg:max-w-xl md:max-w-xl bg-secondary-light dark:bg-primary-dark max-h-screen shadow-lg flex-row rounded-lg relative"},P={class:"modal-header flex justify-between gap-10 p-5 border-b border-ternary-light dark:border-ternary-dark"},I={class:"text-primary-dark dark:text-primary-light text-xl"},S=k((()=>(0,r._)("i",{"data-feather":"x"},null,-1))),M=[S],H={class:"modal-footer mt-2 sm:mt-0 py-5 px-8 border0-t text-center"};function T(e,t,a,i,l,o){const s=(0,r.up)("Button");return(0,r.wg)(),(0,r.iD)("div",j,[v,(0,r._)("main",w,[(0,r._)("div",_,[(0,r._)("div",D,[(0,r._)("div",P,[(0,r._)("h5",I,(0,x.zw)(a.modalText),1),(0,r._)("button",{class:"px-4 text-primary-dark dark:text-primary-light",onClick:t[0]||(t[0]=t=>e.$emit("close"))},M)]),(0,r._)("div",H,[(0,r.Wm)(s,{title:"Close",class:"px-4 sm:px-6 py-2 bg-gray-600 text-primary-light hover:bg-ternary-dark dark:bg-gray-200 dark:text-secondary-dark dark:hover:bg-primary-light rounded-md focus:ring-1 focus:ring-indigo-900 duration-500","aria-label":"Close Modal",onClick:t[1]||(t[1]=t=>e.$emit("close"))})])])])])])}var C=a(5533),E={props:["modalText"],components:{Button:C.Z},data(){return{}},mounted(){s().replace()},updated(){s().replace()},methods:{}},A=a(3744);const z=(0,A.Z)(E,[["render",T],["__scopeId","data-v-dbf6f77e"]]);var K=z;const W={_origin:"https://api.emailjs.com"},B=(e,t="https://api.emailjs.com")=>{W._userID=e,W._origin=t},U=(e,t,a)=>{if(!e)throw"The user ID is required. Visit https://dashboard.emailjs.com/admin/integration";if(!t)throw"The service ID is required. Visit https://dashboard.emailjs.com/admin";if(!a)throw"The template ID is required. Visit https://dashboard.emailjs.com/admin/templates";return!0};class O{constructor(e){this.status=e.status,this.text=e.responseText}}const F=(e,t,a={})=>new Promise(((r,i)=>{const l=new XMLHttpRequest;l.addEventListener("load",(({target:e})=>{const t=new O(e);200===t.status||"OK"===t.text?r(t):i(t)})),l.addEventListener("error",(({target:e})=>{i(new O(e))})),l.open("POST",W._origin+e,!0),Object.keys(a).forEach((e=>{l.setRequestHeader(e,a[e])})),l.send(t)})),q=(e,t,a,r)=>{const i=r||W._userID;U(i,e,t);const l={lib_version:"3.2.0",user_id:i,service_id:e,template_id:t,template_params:a};return F("/api/v1.0/email/send",JSON.stringify(l),{"Content-type":"application/json"})},R=e=>{let t;if(t="string"===typeof e?document.querySelector(e):e,!t||"FORM"!==t.nodeName)throw"The 3rd parameter is expected to be the HTML form element or the style selector of form";return t},Z=(e,t,a,r)=>{const i=r||W._userID,l=R(a);U(i,e,t);const o=new FormData(l);return o.append("lib_version","3.2.0"),o.append("service_id",e),o.append("template_id",t),o.append("user_id",i),F("/api/v1.0/email/send-form",o)};var L={init:B,send:q,sendForm:Z},N={components:{ResultModal:K},data(){return{name:"",email:"",message:"",subject:"",myModal:!1,modalText:""}},methods:{openModal(e){this.modalText="200"==e?"Email has been successfully sent":"Failed to send email. Please send email to jkha7371@gmail.com",this.myModal=!0},closeModal(){this.myModal=!1},sendEmail(){try{L.sendForm("service_c1930vs","template_0hnti8r",this.$refs.form,"C6AdCkCw3aI2UQNLF").then((e=>{console.log("SUCCESS!",e.status,e.text),this.openModal(e.status)}),(e=>{console.log("FAILED...",e),this.openModal(e)}))}catch(e){console.log(e),this.openModal(e)}this.name="",this.email="",this.message="",this.subject=""}}};const V=(0,A.Z)(N,[["render",b]]);var Y=V;const G={class:"w-full md:w-1/2"},J={class:"text-left max-w-xl px-6"},$=(0,r._)("h2",{class:"font-general-medium text-2xl text-primary-dark dark:text-primary-light mt-12 mb-8"}," Contact details ",-1),Q={class:"font-general-regular"},X=["data-feather"];function ee(e,t,a,i,l,o){return(0,r.wg)(),(0,r.iD)("div",G,[(0,r._)("div",J,[$,(0,r._)("ul",Q,[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(a.contacts,(e=>((0,r.wg)(),(0,r.iD)("li",{class:"flex",key:e.id},[(0,r._)("i",{"data-feather":e.icon,class:"w-5 text-gray-500 dark:text-gray-400 mr-4"},null,8,X),(0,r._)("a",{href:"#",class:(0,x.C_)(["text-lg mb-4 text-ternary-dark dark:text-ternary-light","mail"===e.icon||"phone"===e.icon?"hover:underline cursor-pointer":""]),"aria-label":"Website and Phone"},(0,x.zw)(e.name),3)])))),128))])])])}var te={props:["contacts"]};const ae=(0,A.Z)(te,[["render",ee]]);var re=ae,ie={components:{ContactForm:Y,ContactDetails:re},data:()=>({contacts:[{id:1,name:"Suwon-si, Gyeonggi-do, Republic of Korea",icon:"map-pin"},{id:2,name:"jkha7371@gmail.com",icon:"mail"},{id:3,name:"010-2899-7371",icon:"phone"}]}),mounted(){s().replace()},updated(){s().replace()},methods:{}};const le=(0,A.Z)(ie,[["render",l]]);var oe=le},8819:function(e,t,a){a.r(t),a.d(t,{default:function(){return c}});var r=a(6252);const i={class:"container mx-auto"};function l(e,t,a,l,o,s){const n=(0,r.up)("ProjectsGrid");return(0,r.wg)(),(0,r.iD)("div",i,[(0,r.Wm)(n)])}var o=a(6232),s={name:"Projects",components:{ProjectsGrid:o.Z}},n=a(3744);const d=(0,n.Z)(s,[["render",l]]);var c=d},2828:function(e,t,a){a.r(t),a.d(t,{default:function(){return te}});var r=a(6252);const i={class:"container mx-auto mt-10 sm:mt-20"};function l(e,t,a,l,o,s){const n=(0,r.up)("ProjectHeader"),d=(0,r.up)("ProjectGallery"),c=(0,r.up)("ProjectInfo");return(0,r.wg)(),(0,r.iD)("div",i,[(0,r.Wm)(n,{singleProjectHeader:e.singleProjectHeader},null,8,["singleProjectHeader"]),(0,r.Wm)(d,{projectImages:e.projectImages},null,8,["projectImages"]),(0,r.Wm)(c,{projectInfo:e.projectInfo},null,8,["projectInfo"])])}var o=a(8508),s=a.n(o),n=a(3577);const d={class:"font-general-medium text-left text-3xl sm:text-4xl font-bold text-primary-dark dark:text-primary-light mt-14 sm:mt-20 mb-7"},c={class:"flex"},m={class:"flex items-center mr-10"},g=(0,r._)("i",{"data-feather":"clock",class:"w-4 h-4 text-ternary-dark dark:text-ternary-light"},null,-1),p={class:"font-general-medium ml-2 leading-none text-primary-dark dark:text-primary-light"},u={class:"flex items-center"},f=(0,r._)("i",{"data-feather":"tag",class:"w-4 h-4 text-ternary-dark dark:text-ternary-light"},null,-1),h={class:"font-general-medium ml-2 leading-none text-primary-dark dark:text-primary-light"};function y(e,t,a,i,l,o){return(0,r.wg)(),(0,r.iD)("div",null,[(0,r._)("p",d,(0,n.zw)(a.singleProjectHeader.singleProjectTitle),1),(0,r._)("div",c,[(0,r._)("div",m,[g,(0,r._)("span",p,(0,n.zw)(a.singleProjectHeader.singleProjectDate),1)]),(0,r._)("div",u,[f,(0,r._)("span",h,(0,n.zw)(a.singleProjectHeader.singleProjectTag),1)])])])}var b={props:["singleProjectHeader"]},x=a(3744);const k=(0,x.Z)(b,[["render",y]]);var j=k;const v={class:"grid grid-cols-1 sm:grid-cols-3 sm:gap-10 mt-12"},w=["src"];function _(e,t,a,i,l,o){return(0,r.wg)(),(0,r.iD)("div",v,[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(a.projectImages,(e=>((0,r.wg)(),(0,r.iD)("div",{class:"mb-10 sm:mb-0",key:e.id},[(0,r._)("img",{src:e.img,class:"rounded-xl cursor-pointer shadow-lg sm:shadow-none",alt:"{{ projectImage.title }}"},null,8,w)])))),128))])}var D={props:["projectImages"]};const P=(0,x.Z)(D,[["render",_]]);var I=P;const S={class:"block sm:flex gap-0 sm:gap-10 mt-14"},M={class:"w-full sm:w-1/3 text-left"},H={class:"mb-7"},T={class:"font-general-medium text-2xl text-secondary-dark dark:text-secondary-light mb-2"},C={class:"leading-loose"},E=["href"],A={key:1},z={class:"mb-7"},K={class:"font-general-medium text-2xl text-ternary-dark dark:text-ternary-light mb-2"},W={class:"font-general-regular text-primary-dark dark:text-ternary-light"},B={class:"mb-7"},U={class:"font-general-medium text-2xl text-ternary-dark dark:text-ternary-light mb-2"},O={class:"font-general-regular text-primary-dark dark:text-ternary-light"},F={class:"font-general-medium text-2xl text-ternary-dark dark:text-ternary-light mb-2"},q={class:"flex items-center gap-3 mt-5"},R=["href"],Z=["data-feather"],L={class:"w-full sm:w-2/3 text-left mt-10 sm:mt-0"},N={class:"font-general-medium text-primary-dark dark:text-primary-light text-2xl font-bold mb-7"};function V(e,t,a,i,l,o){return(0,r.wg)(),(0,r.iD)("div",S,[(0,r._)("div",M,[(0,r._)("div",H,[(0,r._)("p",T,(0,n.zw)(a.projectInfo.clientHeading),1),(0,r._)("ul",C,[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(a.projectInfo.companyInfos,(e=>((0,r.wg)(),(0,r.iD)("li",{key:e,class:"font-general-regular text-ternary-dark dark:text-ternary-light"},[(0,r._)("span",null,(0,n.zw)(e.title)+": ",1),"Website"==e.title?((0,r.wg)(),(0,r.iD)("a",{key:0,href:e.details,class:(0,n.C_)("Website"==e.title?"hover:underline cursor-pointer":""),"aria-label":"Project Website and Phone"},(0,n.zw)(e.details),11,E)):((0,r.wg)(),(0,r.iD)("a",A,(0,n.zw)(e.details),1))])))),128))])]),(0,r._)("div",z,[(0,r._)("p",K,(0,n.zw)(a.projectInfo.objectivesHeading),1),(0,r._)("p",W,(0,n.zw)(a.projectInfo.objectivesDetails),1)]),(0,r._)("div",B,[(0,r._)("p",U,(0,n.zw)(a.projectInfo.technologies[0].title),1),(0,r._)("p",O,(0,n.zw)(a.projectInfo.technologies[0].techs.join(", ")),1)]),(0,r._)("div",null,[(0,r._)("p",F,(0,n.zw)(a.projectInfo.socialSharingsHeading),1),(0,r._)("div",q,[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(a.projectInfo.socialSharings,(e=>((0,r.wg)(),(0,r.iD)("a",{key:e.id,href:e.url,target:"__blank","aria-label":"Share Project",class:"bg-ternary-light dark:bg-ternary-dark text-gray-400 hover:text-primary-dark dark:hover:text-primary-light p-2 rounded-lg shadow-sm duration-500"},[(0,r._)("i",{"data-feather":e.icon,class:"w-4 lg:w-5 h-4 lg:h-5"},null,8,Z)],8,R)))),128))])])]),(0,r._)("div",L,[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(a.projectInfo.projectDetailsList,(e=>((0,r.wg)(),(0,r.iD)("div",{key:e.id},[(0,r._)("p",N,(0,n.zw)(e.projectDetailsHeading),1),((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(e.projectDetails,(e=>((0,r.wg)(),(0,r.iD)("p",{key:e.id,class:"font-general-regular mb-5 text-lg text-ternary-dark dark:text-ternary-light"},(0,n.zw)(e.details),1)))),128))])))),128))])])}var Y={props:["projectInfo"],mounted(){s().replace()},updated(){s().replace()}};const G=(0,x.Z)(Y,[["render",V]]);var J=G;const $=[{id:1,singleProjectHeader:{singleProjectTitle:"ktds API Gateway Solution",singleProjectDate:"April, 2022 ~ November, 2022",singleProjectTag:"Backend"},projectImages:[{id:1,title:"Kabul Project Management UI",img:a(7008)},{id:2,title:"Kabul Project Management UI",img:a(4343)},{id:3,title:"Kabul Project Management UI",img:a(7027)}],projectInfo:{clientHeading:"About Client",companyInfos:[{id:1,title:"Name",details:"ktds"},{id:2,title:"Services",details:"Software Develop"},{id:3,title:"Website",details:"https://ktds.com"},{id:4,title:"Phone",details:"02-523-7029"}],objectivesHeading:"Objective",objectivesDetails:"to process the large traffic and provide API integrated management service",technologies:[{title:"Tools & Technologies",techs:["Spring Cloud Gateway","MongoDB","Postgresql","Spring Data JPA","Spring Data MongoDB","resilience4j","Bucket4j","Kubernetes","AWS EKS","ECR","ECS","EC2","Jmeter","Apache Bench"]}],projectDetailsList:[{id:1,projectDetailsHeading:"Outline",projectDetails:[{id:1,details:"BEAST is an API gateway solution for digital transformantion. You can easily register, update, delete, and manage API with BEAST. You can add some custom filters to handle your API in the run time. These custome filters can be developed on web-based IDE."},{id:2,details:"BEAST provides you a great dashboard that helps you monitor the API gateway and detect the anomaly. Of course you can achieve load balancing, log tracking, and fault tolerance with BEAST"}]},{id:2,projectDetailsHeading:"My Role",projectDetails:[{id:1,details:"1. Developing Spring Cloud Gateway Filters : developed non-blocking filters for api gateway such as prefilter, postfilter, auth filter, rate limiting filter, etc "},{id:2,details:"2. DB & Memory Synchronization : fetches DB data periodically by Sceduler, and manage data in memory for performance"},{id:3,details:"3. Distributed Performance Test : build Jmeter master, slave servers in AWS EC2, and performed the distributed performance testing for several times. monitors api gateway performance by Visual VM "},{id:4,details:"4. Dual DB : use either Spring Data JPA or Spring Data MongoDB to manage data with one service logic"},{id:5,details:"5. DevOps : deploy api gateway solution on AWS EKS environment and manage kubernetes objects like Pod, Service, StatefulSet, Ingress, etc "}]}]},relatedProject:{relatedProjectsHeading:"Related Projects",relatedProjects:[{id:1,title:"Mobile UI",img:a(2725)},{id:2,title:"Web Application",img:a(4600)},{id:3,title:"UI Design",img:a(7034)},{id:4,title:"Kabul Mobile App UI",img:a(8687)}]}},{id:2,singleProjectHeader:{singleProjectTitle:"Ting, Social Dating Service",singleProjectDate:"November, 2020 ~ January, 2021",singleProjectTag:"Full Stack"},projectImages:[{id:1,title:"Kabul Project Management UI",img:a(2484)},{id:2,title:"Kabul Project Management UI",img:a(385)},{id:3,title:"Kabul Project Management UI",img:a(4341)}],projectInfo:{clientHeading:"About Client",companyInfos:[{id:1,title:"Name",details:"KOSMO"},{id:2,title:"Services",details:"Developer Education"},{id:3,title:"Website",details:"https://www.ikosmo.co.kr/"},{id:4,title:"Phone",details:"02-2025-4113"}],objectivesHeading:"Objective",objectivesDetails:"provide a dating service based on personality and character",technologies:[{title:"Tools & Technologies",techs:["Spring MVC","Django","Oracle","EC2","numpy","matplotlib","pandas","beautifulsoup","sklearn","tensorflow2","HTML","CSS","JavaScript","Jquery"]}],projectDetailsList:[{id:1,projectDetailsHeading:"Outline",projectDetails:[{id:1,details:"Ting is a machine learning based ideal matching service. This service provides you a customized character based on your self-introduction text."},{id:2,details:"Also, Ting recommends you the one that is similar to whom you chose. This project was a final project of my developer curriculum."}]},{id:2,projectDetailsHeading:"My Role",projectDetails:[{id:1,details:"1. Development environment construction : AWS EC2"},{id:2,details:"2. Database design : used oracle for relational database"},{id:3,details:"3. Building admin page : provide some statistical information for admin user using django framework"},{id:4,details:"4. Development of self-introduction classification service: data crawling, building classification model, etc"},{id:5,details:"5. Recommendation service based on the selection you chose : used data from database and calculate cosine similarity between members"}]}]}}];var Q=$,X={name:"Projects",components:{ProjectHeader:j,ProjectGallery:I,ProjectInfo:J},data:()=>({projectDetails:Q,singleProjectHeader:{},projectImages:{},projectInfo:{}}),mounted(){console.log(Q);let e=Q.filter((e=>{let t=e.id;return t==this.$route.params.id}))[0];this.singleProjectHeader=e.singleProjectHeader,this.projectImages=e.projectImages,this.projectInfo=e.projectInfo,s().replace()},updated(){s().replace()},methods:{}};const ee=(0,x.Z)(X,[["render",l]]);var te=ee}}]);
//# sourceMappingURL=projects.66c41fdc.js.map