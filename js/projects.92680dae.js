"use strict";(self["webpackChunkvuejs_tailwindcss_portfolio"]=self["webpackChunkvuejs_tailwindcss_portfolio"]||[]).push([[176],{7904:function(e,t,r){r.r(t),r.d(t,{default:function(){return F}});var a=r(6252);const i={class:"container mx-auto flex flex-col-reverse md:flex-row py-5 md:py-10 md:mt-10"};function s(e,t,r,s,o,l){const n=(0,a.up)("ContactForm"),d=(0,a.up)("ContactDetails");return(0,a.wg)(),(0,a.iD)("div",i,[(0,a.Wm)(n),(0,a.Wm)(d,{contacts:e.contacts},null,8,["contacts"])])}var o=r(8508),l=r.n(o),n=r(9963);const d={class:"w-full md:w-1/2"},c={class:"leading-loose max-w-xl m-4 p-7 bg-secondary-light dark:bg-secondary-dark rounded-xl shadow-xl text-left container"},m=(0,a._)("p",{class:"font-general-medium text-primary-dark dark:text-primary-light text-2xl mb-8"}," Contact Form ",-1),u=(0,a._)("label",{class:"block text-lg text-primary-dark dark:text-primary-light mb-2",for:"name"},"Full Name",-1),p=(0,a._)("label",{class:"block text-lg text-primary-dark dark:text-primary-light mb-2",for:"email"},"Email",-1),g=(0,a._)("label",{class:"block text-lg text-primary-dark dark:text-primary-light mb-2",for:"subject"},"Subject",-1),b=(0,a._)("label",{class:"block text-lg text-primary-dark dark:text-primary-light mb-2",for:"message"},"Message",-1),f=(0,a._)("div",null,[(0,a._)("input",{title:"Send Message",class:"px-4 py-2.5 text-white tracking-wider bg-indigo-500 hover:bg-indigo-600 focus:ring-1 focus:ring-indigo-900 rounded-lg duration-500",type:"submit",value:"Send Message","aria-label":"Send Message"})],-1);function x(e,t,r,i,s,o){return(0,a.wg)(),(0,a.iD)("div",d,[(0,a._)("div",c,[m,(0,a._)("form",{ref:"form",onSubmit:t[4]||(t[4]=(0,n.iM)(((...e)=>o.sendEmail&&o.sendEmail(...e)),["prevent"])),class:"font-general-regular space-y-7"},[(0,a._)("div",null,[u,(0,a.wy)((0,a._)("input",{class:"w-full px-5 py-2 border border-gray-300 dark:border-primary-dark border-opacity-50 text-primary-dark dark:text-secondary-light bg-ternary-light dark:bg-ternary-dark rounded-md shadow-sm text-md",id:"name",name:"name","onUpdate:modelValue":t[0]||(t[0]=e=>s.name=e),type:"text",required:"",placeholder:"Your Name","aria-label":"Name"},null,512),[[n.nr,s.name]])]),(0,a._)("div",null,[p,(0,a.wy)((0,a._)("input",{class:"w-full px-5 py-2 border border-gray-300 dark:border-primary-dark border-opacity-50 text-primary-dark dark:text-secondary-light bg-ternary-light dark:bg-ternary-dark rounded-md shadow-sm text-md",id:"email",name:"email","onUpdate:modelValue":t[1]||(t[1]=e=>s.email=e),type:"text",required:"",placeholder:"Your Email","aria-label":"Email"},null,512),[[n.nr,s.email]])]),(0,a._)("div",null,[g,(0,a.wy)((0,a._)("input",{class:"w-full px-5 py-2 border border-gray-300 dark:border-primary-dark border-opacity-50 text-primary-dark dark:text-secondary-light bg-ternary-light dark:bg-ternary-dark rounded-md shadow-sm text-md",id:"subject",name:"subject","onUpdate:modelValue":t[2]||(t[2]=e=>s.subject=e),type:"text",required:"",placeholder:"Subject","aria-label":"Subject"},null,512),[[n.nr,s.subject]])]),(0,a._)("div",null,[b,(0,a.wy)((0,a._)("textarea",{class:"w-full px-5 py-2 border border-gray-300 dark:border-primary-dark border-opacity-50 text-primary-dark dark:text-secondary-light bg-ternary-light dark:bg-ternary-dark rounded-md shadow-sm text-md",id:"message",name:"message","onUpdate:modelValue":t[3]||(t[3]=e=>s.message=e),cols:"14",rows:"6","aria-label":"Message"},null,512),[[n.nr,s.message]])]),f],544)])])}const h={_origin:"https://api.emailjs.com"},y=(e,t="https://api.emailjs.com")=>{h._userID=e,h._origin=t},j=(e,t,r)=>{if(!e)throw"The user ID is required. Visit https://dashboard.emailjs.com/admin/integration";if(!t)throw"The service ID is required. Visit https://dashboard.emailjs.com/admin";if(!r)throw"The template ID is required. Visit https://dashboard.emailjs.com/admin/templates";return!0};class k{constructor(e){this.status=e.status,this.text=e.responseText}}const v=(e,t,r={})=>new Promise(((a,i)=>{const s=new XMLHttpRequest;s.addEventListener("load",(({target:e})=>{const t=new k(e);200===t.status||"OK"===t.text?a(t):i(t)})),s.addEventListener("error",(({target:e})=>{i(new k(e))})),s.open("POST",h._origin+e,!0),Object.keys(r).forEach((e=>{s.setRequestHeader(e,r[e])})),s.send(t)})),w=(e,t,r,a)=>{const i=a||h._userID;j(i,e,t);const s={lib_version:"3.2.0",user_id:i,service_id:e,template_id:t,template_params:r};return v("/api/v1.0/email/send",JSON.stringify(s),{"Content-type":"application/json"})},_=e=>{let t;if(t="string"===typeof e?document.querySelector(e):e,!t||"FORM"!==t.nodeName)throw"The 3rd parameter is expected to be the HTML form element or the style selector of form";return t},P=(e,t,r,a)=>{const i=a||h._userID,s=_(r);j(i,e,t);const o=new FormData(s);return o.append("lib_version","3.2.0"),o.append("service_id",e),o.append("template_id",t),o.append("user_id",i),v("/api/v1.0/email/send-form",o)};var D={init:y,send:w,sendForm:P},I={data(){return{name:"",email:"",message:"",subject:""}},methods:{sendEmail(){try{D.sendForm("service_c1930vs","template_0hnti8r",this.$refs.form,"C6AdCkCw3aI2UQNLF")}catch(e){console.log(e)}this.name="",this.email="",this.message="",this.subject=""}}},q=r(3744);const H=(0,q.Z)(I,[["render",x]]);var S=H,C=r(3577);const z={class:"w-full md:w-1/2"},M={class:"text-left max-w-xl px-6"},K=(0,a._)("h2",{class:"font-general-medium text-2xl text-primary-dark dark:text-primary-light mt-12 mb-8"}," Contact details ",-1),W={class:"font-general-regular"},E=["data-feather"];function L(e,t,r,i,s,o){return(0,a.wg)(),(0,a.iD)("div",z,[(0,a._)("div",M,[K,(0,a._)("ul",W,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(r.contacts,(e=>((0,a.wg)(),(0,a.iD)("li",{class:"flex",key:e.id},[(0,a._)("i",{"data-feather":e.icon,class:"w-5 text-gray-500 dark:text-gray-400 mr-4"},null,8,E),(0,a._)("a",{href:"#",class:(0,C.C_)(["text-lg mb-4 text-ternary-dark dark:text-ternary-light","mail"===e.icon||"phone"===e.icon?"hover:underline cursor-pointer":""]),"aria-label":"Website and Phone"},(0,C.zw)(e.name),3)])))),128))])])])}var T={props:["contacts"]};const U=(0,q.Z)(T,[["render",L]]);var A=U,N={components:{ContactForm:S,ContactDetails:A},data:()=>({contacts:[{id:1,name:"Suwon-si, Gyeonggi-do, Republic of Korea",icon:"map-pin"},{id:2,name:"jkha7371@gmail.com",icon:"mail"},{id:3,name:"010-2899-7371",icon:"phone"}]}),mounted(){l().replace()},updated(){l().replace()},methods:{}};const Z=(0,q.Z)(N,[["render",s]]);var F=Z},8819:function(e,t,r){r.r(t),r.d(t,{default:function(){return c}});var a=r(6252);const i={class:"container mx-auto"};function s(e,t,r,s,o,l){const n=(0,a.up)("ProjectsGrid");return(0,a.wg)(),(0,a.iD)("div",i,[(0,a.Wm)(n)])}var o=r(4707),l={name:"Projects",components:{ProjectsGrid:o.Z}},n=r(3744);const d=(0,n.Z)(l,[["render",s]]);var c=d},4330:function(e,t,r){r.r(t),r.d(t,{default:function(){return le}});var a=r(6252);const i={class:"container mx-auto mt-10 sm:mt-20"};function s(e,t,r,s,o,l){const n=(0,a.up)("ProjectHeader"),d=(0,a.up)("ProjectGallery"),c=(0,a.up)("ProjectInfo"),m=(0,a.up)("ProjectRelatedProjects");return(0,a.wg)(),(0,a.iD)("div",i,[(0,a.Wm)(n,{singleProjectHeader:e.singleProjectHeader},null,8,["singleProjectHeader"]),(0,a.Wm)(d,{projectImages:e.projectImages},null,8,["projectImages"]),(0,a.Wm)(c,{projectInfo:e.projectInfo},null,8,["projectInfo"]),(0,a.Wm)(m,{relatedProject:e.relatedProject},null,8,["relatedProject"])])}var o=r(8508),l=r.n(o),n=r(3577);const d={class:"font-general-medium text-left text-3xl sm:text-4xl font-bold text-primary-dark dark:text-primary-light mt-14 sm:mt-20 mb-7"},c={class:"flex"},m={class:"flex items-center mr-10"},u=(0,a._)("i",{"data-feather":"clock",class:"w-4 h-4 text-ternary-dark dark:text-ternary-light"},null,-1),p={class:"font-general-medium ml-2 leading-none text-primary-dark dark:text-primary-light"},g={class:"flex items-center"},b=(0,a._)("i",{"data-feather":"tag",class:"w-4 h-4 text-ternary-dark dark:text-ternary-light"},null,-1),f={class:"font-general-medium ml-2 leading-none text-primary-dark dark:text-primary-light"};function x(e,t,r,i,s,o){return(0,a.wg)(),(0,a.iD)("div",null,[(0,a._)("p",d,(0,n.zw)(r.singleProjectHeader.singleProjectTitle),1),(0,a._)("div",c,[(0,a._)("div",m,[u,(0,a._)("span",p,(0,n.zw)(r.singleProjectHeader.singleProjectDate),1)]),(0,a._)("div",g,[b,(0,a._)("span",f,(0,n.zw)(r.singleProjectHeader.singleProjectTag),1)])])])}var h={props:["singleProjectHeader"]},y=r(3744);const j=(0,y.Z)(h,[["render",x]]);var k=j;const v={class:"grid grid-cols-1 sm:grid-cols-3 sm:gap-10 mt-12"},w=["src"];function _(e,t,r,i,s,o){return(0,a.wg)(),(0,a.iD)("div",v,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(r.projectImages,(e=>((0,a.wg)(),(0,a.iD)("div",{class:"mb-10 sm:mb-0",key:e.id},[(0,a._)("img",{src:e.img,class:"rounded-xl cursor-pointer shadow-lg sm:shadow-none",alt:"{{ projectImage.title }}"},null,8,w)])))),128))])}var P={props:["projectImages"]};const D=(0,y.Z)(P,[["render",_]]);var I=D;const q={class:"block sm:flex gap-0 sm:gap-10 mt-14"},H={class:"w-full sm:w-1/3 text-left"},S={class:"mb-7"},C={class:"font-general-medium text-2xl text-secondary-dark dark:text-secondary-light mb-2"},z={class:"leading-loose"},M=["href"],K={key:1},W={class:"mb-7"},E={class:"font-general-medium text-2xl text-ternary-dark dark:text-ternary-light mb-2"},L={class:"font-general-regular text-primary-dark dark:text-ternary-light"},T={class:"mb-7"},U={class:"font-general-medium text-2xl text-ternary-dark dark:text-ternary-light mb-2"},A={class:"font-general-regular text-primary-dark dark:text-ternary-light"},N={class:"font-general-medium text-2xl text-ternary-dark dark:text-ternary-light mb-2"},Z={class:"flex items-center gap-3 mt-5"},F=["href"],R=["data-feather"],Y={class:"w-full sm:w-2/3 text-left mt-10 sm:mt-0"},G={class:"font-general-medium text-primary-dark dark:text-primary-light text-2xl font-bold mb-7"};function V(e,t,r,i,s,o){return(0,a.wg)(),(0,a.iD)("div",q,[(0,a._)("div",H,[(0,a._)("div",S,[(0,a._)("p",C,(0,n.zw)(r.projectInfo.clientHeading),1),(0,a._)("ul",z,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(r.projectInfo.companyInfos,(e=>((0,a.wg)(),(0,a.iD)("li",{key:e,class:"font-general-regular text-ternary-dark dark:text-ternary-light"},[(0,a._)("span",null,(0,n.zw)(e.title)+": ",1),"Website"==e.title?((0,a.wg)(),(0,a.iD)("a",{key:0,href:e.details,class:(0,n.C_)("Website"==e.title?"hover:underline cursor-pointer":""),"aria-label":"Project Website and Phone"},(0,n.zw)(e.details),11,M)):((0,a.wg)(),(0,a.iD)("a",K,(0,n.zw)(e.details),1))])))),128))])]),(0,a._)("div",W,[(0,a._)("p",E,(0,n.zw)(r.projectInfo.objectivesHeading),1),(0,a._)("p",L,(0,n.zw)(r.projectInfo.objectivesDetails),1)]),(0,a._)("div",T,[(0,a._)("p",U,(0,n.zw)(r.projectInfo.technologies[0].title),1),(0,a._)("p",A,(0,n.zw)(r.projectInfo.technologies[0].techs.join(", ")),1)]),(0,a._)("div",null,[(0,a._)("p",N,(0,n.zw)(r.projectInfo.socialSharingsHeading),1),(0,a._)("div",Z,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(r.projectInfo.socialSharings,(e=>((0,a.wg)(),(0,a.iD)("a",{key:e.id,href:e.url,target:"__blank","aria-label":"Share Project",class:"bg-ternary-light dark:bg-ternary-dark text-gray-400 hover:text-primary-dark dark:hover:text-primary-light p-2 rounded-lg shadow-sm duration-500"},[(0,a._)("i",{"data-feather":e.icon,class:"w-4 lg:w-5 h-4 lg:h-5"},null,8,R)],8,F)))),128))])])]),(0,a._)("div",Y,[(0,a._)("p",G,(0,n.zw)(r.projectInfo.projectDetailsHeading),1),((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(r.projectInfo.projectDetails,(e=>((0,a.wg)(),(0,a.iD)("p",{key:e.id,class:"font-general-regular mb-5 text-lg text-ternary-dark dark:text-ternary-light"},(0,n.zw)(e.details),1)))),128))])])}var B={props:["projectInfo"],mounted(){l().replace()},updated(){l().replace()}};const O=(0,y.Z)(B,[["render",V]]);var J=O;const Q={class:"mt-10 pt-10 sm:pt-14 sm:mt-20 border-t-2 border-primary-light dark:border-secondary-dark"},X={class:"font-general-regular text-primary-dark dark:text-primary-light text-3xl font-bold mb-10 sm:mb-14 text-left"},$={class:"grid grid-cols-1 sm:grid-cols-4 gap-10"},ee=["src","alt"];function te(e,t,r,i,s,o){return(0,a.wg)(),(0,a.iD)("div",Q,[(0,a._)("p",X,(0,n.zw)(r.relatedProject.relatedProjectsHeading),1),(0,a._)("div",$,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(r.relatedProject.relatedProjects,(e=>((0,a.wg)(),(0,a.iD)("div",{key:e.id},[(0,a._)("img",{src:e.img,class:"rounded-xl cursor-pointer",alt:e.title},null,8,ee)])))),128))])])}var re={props:["relatedProject"]};const ae=(0,y.Z)(re,[["render",te]]);var ie=ae,se={name:"Projects",components:{ProjectHeader:k,ProjectGallery:I,ProjectInfo:J,ProjectRelatedProjects:ie},data:()=>({singleProjectHeader:{singleProjectTitle:"ktds API Gateway Solution",singleProjectDate:"April, 2022 ~ September, 2022",singleProjectTag:"Backend"},projectImages:[{id:1,title:"Kabul Project Management UI",img:r(7008)},{id:2,title:"Kabul Project Management UI",img:r(4343)},{id:3,title:"Kabul Project Management UI",img:r(7027)}],projectInfo:{clientHeading:"About Client",companyInfos:[{id:1,title:"Name",details:"ktds"},{id:2,title:"Services",details:"Backend"},{id:3,title:"Website",details:"https://ktds.com"},{id:4,title:"Phone",details:"02-523-7029"}],objectivesHeading:"Objective",objectivesDetails:"to process the large traffic and provide API integrated management service",technologies:[{title:"Tools & Technologies",techs:["Spring Cloud Gateway","MongoDB","Postgresql","Spring Data JPA","Spring Data MongoDB","resilience4j","Bucket4j","Kubernetes","AWS EKS","ECR","ECS","EC2","Jmeter","Apache Bench"]}],projectDetailsHeading:"Challenge",projectDetails:[{id:1,details:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt totam dolorum, ducimus obcaecati, voluptas facilis molestias nobis ut quam natus similique inventore excepturi optio ipsa deleniti fugit illo. Unde, amet! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum illo necessitatibus perspiciatis! Aperiam perferendis labore temporibus, eos culpa corporis recusandae quas, fuga voluptatibus nesciunt odit libero tenetur neque consequatur ea."},{id:2,details:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta?"},{id:3,details:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta?"},{id:4,details:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt totam dolorum, ducimus obcaecati, voluptas facilis molestias nobis ut quam natus similique inventore excepturi optio ipsa deleniti fugit illo. Unde, amet! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum illo necessitatibus perspiciatis! Aperiam perferendis labore temporibus, eos culpa corporis recusandae quas, fuga voluptatibus nesciunt odit libero tenetur neque consequatur ea."}]},relatedProject:{relatedProjectsHeading:"Related Projects",relatedProjects:[{id:1,title:"Mobile UI",img:r(2725)},{id:2,title:"Web Application",img:r(4600)},{id:3,title:"UI Design",img:r(7034)},{id:4,title:"Kabul Mobile App UI",img:r(8687)}]}}),mounted(){l().replace()},updated(){l().replace()},methods:{}};const oe=(0,y.Z)(se,[["render",s]]);var le=oe},4343:function(e,t,r){e.exports=r.p+"img/beast1.79914f07.jpeg"},7027:function(e,t,r){e.exports=r.p+"img/beast2.ba6433e8.jpeg"},2725:function(e,t,r){e.exports=r.p+"img/mobile-project-1.8b4f9e2f.jpg"},8687:function(e,t,r){e.exports=r.p+"img/mobile-project-2.9bd76372.jpg"},7034:function(e,t,r){e.exports=r.p+"img/ui-project-2.afd87ce7.jpg"},4600:function(e,t,r){e.exports=r.p+"img/web-project-1.d1debdf5.jpg"}}]);
//# sourceMappingURL=projects.92680dae.js.map