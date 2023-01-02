"use strict";(self["webpackChunkvuejs_tailwindcss_portfolio"]=self["webpackChunkvuejs_tailwindcss_portfolio"]||[]).push([[176],{5417:function(e,t,r){r.r(t),r.d(t,{default:function(){return N}});var a=r(6252);const i={class:"container mx-auto flex flex-col-reverse md:flex-row py-5 md:py-10 md:mt-10"};function s(e,t,r,s,l,o){const n=(0,a.up)("ContactForm"),d=(0,a.up)("ContactDetails");return(0,a.wg)(),(0,a.iD)("div",i,[(0,a.Wm)(n),(0,a.Wm)(d,{contacts:e.contacts},null,8,["contacts"])])}var l=r(8508),o=r.n(l),n=r(9963);const d={class:"w-full md:w-1/2"},c={class:"leading-loose max-w-xl m-4 p-7 bg-secondary-light dark:bg-secondary-dark rounded-xl shadow-xl text-left container"},m=(0,a._)("p",{class:"font-general-medium text-primary-dark dark:text-primary-light text-2xl mb-8"}," Contact Form ",-1),p=(0,a._)("label",{class:"block text-lg text-primary-dark dark:text-primary-light mb-2",for:"name"},"Full Name",-1),u=(0,a._)("label",{class:"block text-lg text-primary-dark dark:text-primary-light mb-2",for:"email"},"Email",-1),g=(0,a._)("label",{class:"block text-lg text-primary-dark dark:text-primary-light mb-2",for:"subject"},"Subject",-1),f=(0,a._)("label",{class:"block text-lg text-primary-dark dark:text-primary-light mb-2",for:"message"},"Message",-1),b=(0,a._)("div",null,[(0,a._)("input",{title:"Send Message",class:"px-4 py-2.5 text-white tracking-wider bg-indigo-500 hover:bg-indigo-600 focus:ring-1 focus:ring-indigo-900 rounded-lg duration-500",type:"submit",value:"Send Message","aria-label":"Send Message"})],-1);function x(e,t,r,i,s,l){return(0,a.wg)(),(0,a.iD)("div",d,[(0,a._)("div",c,[m,(0,a._)("form",{ref:"form",onSubmit:t[4]||(t[4]=(0,n.iM)(((...e)=>l.sendEmail&&l.sendEmail(...e)),["prevent"])),class:"font-general-regular space-y-7"},[(0,a._)("div",null,[p,(0,a.wy)((0,a._)("input",{class:"w-full px-5 py-2 border border-gray-300 dark:border-primary-dark border-opacity-50 text-primary-dark dark:text-secondary-light bg-ternary-light dark:bg-ternary-dark rounded-md shadow-sm text-md",id:"name",name:"name","onUpdate:modelValue":t[0]||(t[0]=e=>s.name=e),type:"text",required:"",placeholder:"Your Name","aria-label":"Name"},null,512),[[n.nr,s.name]])]),(0,a._)("div",null,[u,(0,a.wy)((0,a._)("input",{class:"w-full px-5 py-2 border border-gray-300 dark:border-primary-dark border-opacity-50 text-primary-dark dark:text-secondary-light bg-ternary-light dark:bg-ternary-dark rounded-md shadow-sm text-md",id:"email",name:"email","onUpdate:modelValue":t[1]||(t[1]=e=>s.email=e),type:"text",required:"",placeholder:"Your Email","aria-label":"Email"},null,512),[[n.nr,s.email]])]),(0,a._)("div",null,[g,(0,a.wy)((0,a._)("input",{class:"w-full px-5 py-2 border border-gray-300 dark:border-primary-dark border-opacity-50 text-primary-dark dark:text-secondary-light bg-ternary-light dark:bg-ternary-dark rounded-md shadow-sm text-md",id:"subject",name:"subject","onUpdate:modelValue":t[2]||(t[2]=e=>s.subject=e),type:"text",required:"",placeholder:"Subject","aria-label":"Subject"},null,512),[[n.nr,s.subject]])]),(0,a._)("div",null,[f,(0,a.wy)((0,a._)("textarea",{class:"w-full px-5 py-2 border border-gray-300 dark:border-primary-dark border-opacity-50 text-primary-dark dark:text-secondary-light bg-ternary-light dark:bg-ternary-dark rounded-md shadow-sm text-md",id:"message",name:"message","onUpdate:modelValue":t[3]||(t[3]=e=>s.message=e),cols:"14",rows:"6","aria-label":"Message"},null,512),[[n.nr,s.message]])]),b],544)])])}const y={_origin:"https://api.emailjs.com"},h=(e,t="https://api.emailjs.com")=>{y._userID=e,y._origin=t},j=(e,t,r)=>{if(!e)throw"The user ID is required. Visit https://dashboard.emailjs.com/admin/integration";if(!t)throw"The service ID is required. Visit https://dashboard.emailjs.com/admin";if(!r)throw"The template ID is required. Visit https://dashboard.emailjs.com/admin/templates";return!0};class k{constructor(e){this.status=e.status,this.text=e.responseText}}const w=(e,t,r={})=>new Promise(((a,i)=>{const s=new XMLHttpRequest;s.addEventListener("load",(({target:e})=>{const t=new k(e);200===t.status||"OK"===t.text?a(t):i(t)})),s.addEventListener("error",(({target:e})=>{i(new k(e))})),s.open("POST",y._origin+e,!0),Object.keys(r).forEach((e=>{s.setRequestHeader(e,r[e])})),s.send(t)})),_=(e,t,r,a)=>{const i=a||y._userID;j(i,e,t);const s={lib_version:"3.2.0",user_id:i,service_id:e,template_id:t,template_params:r};return w("/api/v1.0/email/send",JSON.stringify(s),{"Content-type":"application/json"})},v=e=>{let t;if(t="string"===typeof e?document.querySelector(e):e,!t||"FORM"!==t.nodeName)throw"The 3rd parameter is expected to be the HTML form element or the style selector of form";return t},D=(e,t,r,a)=>{const i=a||y._userID,s=v(r);j(i,e,t);const l=new FormData(s);return l.append("lib_version","3.2.0"),l.append("service_id",e),l.append("template_id",t),l.append("user_id",i),w("/api/v1.0/email/send-form",l)};var P={init:h,send:_,sendForm:D},I={data(){return{name:"",email:"",message:"",subject:""}},methods:{sendEmail(){try{P.sendForm({NODE_ENV:"production",BASE_URL:"/Kiha-pf/"}.VUE_APP_EMAIL_JS_SERVICE_ID,{NODE_ENV:"production",BASE_URL:"/Kiha-pf/"}.VUE_APP_EMAIL_JS_TEMPLATE_ID,this.$refs.form,{NODE_ENV:"production",BASE_URL:"/Kiha-pf/"}.VUE_APP_EMAIL_JS_PUBLIC_KEY)}catch(e){console.log(e)}this.name="",this.email="",this.message="",this.subject=""}}},S=r(3744);const E=(0,S.Z)(I,[["render",x]]);var H=E,q=r(3577);const A={class:"w-full md:w-1/2"},M={class:"text-left max-w-xl px-6"},C=(0,a._)("h2",{class:"font-general-medium text-2xl text-primary-dark dark:text-primary-light mt-12 mb-8"}," Contact details ",-1),K={class:"font-general-regular"},L=["data-feather"];function U(e,t,r,i,s,l){return(0,a.wg)(),(0,a.iD)("div",A,[(0,a._)("div",M,[C,(0,a._)("ul",K,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(r.contacts,(e=>((0,a.wg)(),(0,a.iD)("li",{class:"flex",key:e.id},[(0,a._)("i",{"data-feather":e.icon,class:"w-5 text-gray-500 dark:text-gray-400 mr-4"},null,8,L),(0,a._)("a",{href:"#",class:(0,q.C_)(["text-lg mb-4 text-ternary-dark dark:text-ternary-light","mail"===e.icon||"phone"===e.icon?"hover:underline cursor-pointer":""]),"aria-label":"Website and Phone"},(0,q.zw)(e.name),3)])))),128))])])])}var z={props:["contacts"]};const T=(0,S.Z)(z,[["render",U]]);var V=T,W={components:{ContactForm:H,ContactDetails:V},data:()=>({contacts:[{id:1,name:"Suwon-si, Gyeonggi-do, Republic of Korea",icon:"map-pin"},{id:2,name:"jkha7371@gmail.com",icon:"mail"},{id:3,name:"010-2899-7371",icon:"phone"}]}),mounted(){o().replace()},updated(){o().replace()},methods:{}};const B=(0,S.Z)(W,[["render",s]]);var N=B},8819:function(e,t,r){r.r(t),r.d(t,{default:function(){return c}});var a=r(6252);const i={class:"container mx-auto"};function s(e,t,r,s,l,o){const n=(0,a.up)("ProjectsGrid");return(0,a.wg)(),(0,a.iD)("div",i,[(0,a.Wm)(n)])}var l=r(4707),o={name:"Projects",components:{ProjectsGrid:l.Z}},n=r(3744);const d=(0,n.Z)(o,[["render",s]]);var c=d},5439:function(e,t,r){r.r(t),r.d(t,{default:function(){return oe}});var a=r(6252);const i={class:"container mx-auto mt-10 sm:mt-20"};function s(e,t,r,s,l,o){const n=(0,a.up)("ProjectHeader"),d=(0,a.up)("ProjectGallery"),c=(0,a.up)("ProjectInfo"),m=(0,a.up)("ProjectRelatedProjects");return(0,a.wg)(),(0,a.iD)("div",i,[(0,a.Wm)(n,{singleProjectHeader:e.singleProjectHeader},null,8,["singleProjectHeader"]),(0,a.Wm)(d,{projectImages:e.projectImages},null,8,["projectImages"]),(0,a.Wm)(c,{projectInfo:e.projectInfo},null,8,["projectInfo"]),(0,a.Wm)(m,{relatedProject:e.relatedProject},null,8,["relatedProject"])])}var l=r(8508),o=r.n(l),n=r(3577);const d={class:"font-general-medium text-left text-3xl sm:text-4xl font-bold text-primary-dark dark:text-primary-light mt-14 sm:mt-20 mb-7"},c={class:"flex"},m={class:"flex items-center mr-10"},p=(0,a._)("i",{"data-feather":"clock",class:"w-4 h-4 text-ternary-dark dark:text-ternary-light"},null,-1),u={class:"font-general-medium ml-2 leading-none text-primary-dark dark:text-primary-light"},g={class:"flex items-center"},f=(0,a._)("i",{"data-feather":"tag",class:"w-4 h-4 text-ternary-dark dark:text-ternary-light"},null,-1),b={class:"font-general-medium ml-2 leading-none text-primary-dark dark:text-primary-light"};function x(e,t,r,i,s,l){return(0,a.wg)(),(0,a.iD)("div",null,[(0,a._)("p",d,(0,n.zw)(r.singleProjectHeader.singleProjectTitle),1),(0,a._)("div",c,[(0,a._)("div",m,[p,(0,a._)("span",u,(0,n.zw)(r.singleProjectHeader.singleProjectDate),1)]),(0,a._)("div",g,[f,(0,a._)("span",b,(0,n.zw)(r.singleProjectHeader.singleProjectTag),1)])])])}var y={props:["singleProjectHeader"]},h=r(3744);const j=(0,h.Z)(y,[["render",x]]);var k=j;const w={class:"grid grid-cols-1 sm:grid-cols-3 sm:gap-10 mt-12"},_=["src"];function v(e,t,r,i,s,l){return(0,a.wg)(),(0,a.iD)("div",w,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(r.projectImages,(e=>((0,a.wg)(),(0,a.iD)("div",{class:"mb-10 sm:mb-0",key:e.id},[(0,a._)("img",{src:e.img,class:"rounded-xl cursor-pointer shadow-lg sm:shadow-none",alt:"{{ projectImage.title }}"},null,8,_)])))),128))])}var D={props:["projectImages"]};const P=(0,h.Z)(D,[["render",v]]);var I=P;const S={class:"block sm:flex gap-0 sm:gap-10 mt-14"},E={class:"w-full sm:w-1/3 text-left"},H={class:"mb-7"},q={class:"font-general-medium text-2xl text-secondary-dark dark:text-secondary-light mb-2"},A={class:"leading-loose"},M=["href"],C={key:1},K={class:"mb-7"},L={class:"font-general-medium text-2xl text-ternary-dark dark:text-ternary-light mb-2"},U={class:"font-general-regular text-primary-dark dark:text-ternary-light"},z={class:"mb-7"},T={class:"font-general-medium text-2xl text-ternary-dark dark:text-ternary-light mb-2"},V={class:"font-general-regular text-primary-dark dark:text-ternary-light"},W={class:"font-general-medium text-2xl text-ternary-dark dark:text-ternary-light mb-2"},B={class:"flex items-center gap-3 mt-5"},N=["href"],R=["data-feather"],O={class:"w-full sm:w-2/3 text-left mt-10 sm:mt-0"},Y={class:"font-general-medium text-primary-dark dark:text-primary-light text-2xl font-bold mb-7"};function Z(e,t,r,i,s,l){return(0,a.wg)(),(0,a.iD)("div",S,[(0,a._)("div",E,[(0,a._)("div",H,[(0,a._)("p",q,(0,n.zw)(r.projectInfo.clientHeading),1),(0,a._)("ul",A,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(r.projectInfo.companyInfos,(e=>((0,a.wg)(),(0,a.iD)("li",{key:e,class:"font-general-regular text-ternary-dark dark:text-ternary-light"},[(0,a._)("span",null,(0,n.zw)(e.title)+": ",1),"Website"==e.title?((0,a.wg)(),(0,a.iD)("a",{key:0,href:e.details,class:(0,n.C_)("Website"==e.title?"hover:underline cursor-pointer":""),"aria-label":"Project Website and Phone"},(0,n.zw)(e.details),11,M)):((0,a.wg)(),(0,a.iD)("a",C,(0,n.zw)(e.details),1))])))),128))])]),(0,a._)("div",K,[(0,a._)("p",L,(0,n.zw)(r.projectInfo.objectivesHeading),1),(0,a._)("p",U,(0,n.zw)(r.projectInfo.objectivesDetails),1)]),(0,a._)("div",z,[(0,a._)("p",T,(0,n.zw)(r.projectInfo.technologies[0].title),1),(0,a._)("p",V,(0,n.zw)(r.projectInfo.technologies[0].techs.join(", ")),1)]),(0,a._)("div",null,[(0,a._)("p",W,(0,n.zw)(r.projectInfo.socialSharingsHeading),1),(0,a._)("div",B,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(r.projectInfo.socialSharings,(e=>((0,a.wg)(),(0,a.iD)("a",{key:e.id,href:e.url,target:"__blank","aria-label":"Share Project",class:"bg-ternary-light dark:bg-ternary-dark text-gray-400 hover:text-primary-dark dark:hover:text-primary-light p-2 rounded-lg shadow-sm duration-500"},[(0,a._)("i",{"data-feather":e.icon,class:"w-4 lg:w-5 h-4 lg:h-5"},null,8,R)],8,N)))),128))])])]),(0,a._)("div",O,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(r.projectInfo.projectDetailsList,(e=>((0,a.wg)(),(0,a.iD)("div",{key:e.id},[(0,a._)("p",Y,(0,n.zw)(e.projectDetailsHeading),1),((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(e.projectDetails,(e=>((0,a.wg)(),(0,a.iD)("p",{key:e.id,class:"font-general-regular mb-5 text-lg text-ternary-dark dark:text-ternary-light"},(0,n.zw)(e.details),1)))),128))])))),128))])])}var F={props:["projectInfo"],mounted(){o().replace()},updated(){o().replace()}};const G=(0,h.Z)(F,[["render",Z]]);var J=G;const X={class:"mt-10 pt-10 sm:pt-14 sm:mt-20 border-t-2 border-primary-light dark:border-secondary-dark"},$={class:"font-general-regular text-primary-dark dark:text-primary-light text-3xl font-bold mb-10 sm:mb-14 text-left"},Q={class:"grid grid-cols-1 sm:grid-cols-4 gap-10"},ee=["src","alt"];function te(e,t,r,i,s,l){return(0,a.wg)(),(0,a.iD)("div",X,[(0,a._)("p",$,(0,n.zw)(r.relatedProject.relatedProjectsHeading),1),(0,a._)("div",Q,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(r.relatedProject.relatedProjects,(e=>((0,a.wg)(),(0,a.iD)("div",{key:e.id},[(0,a._)("img",{src:e.img,class:"rounded-xl cursor-pointer",alt:e.title},null,8,ee)])))),128))])])}var re={props:["relatedProject"]};const ae=(0,h.Z)(re,[["render",te]]);var ie=ae,se={name:"Projects",components:{ProjectHeader:k,ProjectGallery:I,ProjectInfo:J,ProjectRelatedProjects:ie},data:()=>({singleProjectHeader:{singleProjectTitle:"ktds API Gateway Solution",singleProjectDate:"April, 2022 ~ September, 2022",singleProjectTag:"Backend"},projectImages:[{id:1,title:"Kabul Project Management UI",img:r(7008)},{id:2,title:"Kabul Project Management UI",img:r(4343)},{id:3,title:"Kabul Project Management UI",img:r(7027)}],projectInfo:{clientHeading:"About Client",companyInfos:[{id:1,title:"Name",details:"ktds"},{id:2,title:"Services",details:"Backend"},{id:3,title:"Website",details:"https://ktds.com"},{id:4,title:"Phone",details:"02-523-7029"}],objectivesHeading:"Objective",objectivesDetails:"to process the large traffic and provide API integrated management service",technologies:[{title:"Tools & Technologies",techs:["Spring Cloud Gateway","MongoDB","Postgresql","Spring Data JPA","Spring Data MongoDB","resilience4j","Bucket4j","Kubernetes","AWS EKS","ECR","ECS","EC2","Jmeter","Apache Bench"]}],projectDetailsList:[{id:1,projectDetailsHeading:"Outline",projectDetails:[{id:1,details:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt totam dolorum, ducimus obcaecati, voluptas facilis molestias nobis ut quam natus similique inventore excepturi optio ipsa deleniti fugit illo. Unde, amet! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum illo necessitatibus perspiciatis! Aperiam perferendis labore temporibus, eos culpa corporis recusandae quas, fuga voluptatibus nesciunt odit libero tenetur neque consequatur ea."},{id:2,details:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta?"}]},{id:2,projectDetailsHeading:"Role",projectDetails:[{id:1,details:"1. Spring Cloud Gateway Filters : developed non-blocking filters for api gateway such as prefilter, postfilter, auth filter, rate limiting filter, etc "},{id:2,details:"2. DB & Memory Synchronization : fetches DB data periodically by Sceduler, and manage data in memory for performance"},{id:3,details:"3. Distributed Performance Test : build Jmeter master, slave servers in AWS EC2, and performed the distributed performance testing for several times. monitors api gateway performance by Visual VM "},{id:4,details:"4. Dual DB : use either Spring Data JPA or Spring Data MongoDB to manage data with one service logic"},{id:5,details:"5. DevOps : deploy api gateway solution on AWS EKS environment and manage kubernetes objects like Pod, Service, StatefulSet, Ingress, etc "}]}]},relatedProject:{relatedProjectsHeading:"Related Projects",relatedProjects:[{id:1,title:"Mobile UI",img:r(2725)},{id:2,title:"Web Application",img:r(4600)},{id:3,title:"UI Design",img:r(7034)},{id:4,title:"Kabul Mobile App UI",img:r(8687)}]}}),mounted(){o().replace()},updated(){o().replace()},methods:{}};const le=(0,h.Z)(se,[["render",s]]);var oe=le},4343:function(e,t,r){e.exports=r.p+"img/beast1.79914f07.jpeg"},7027:function(e,t,r){e.exports=r.p+"img/beast2.ba6433e8.jpeg"},2725:function(e,t,r){e.exports=r.p+"img/mobile-project-1.8b4f9e2f.jpg"},8687:function(e,t,r){e.exports=r.p+"img/mobile-project-2.9bd76372.jpg"},7034:function(e,t,r){e.exports=r.p+"img/ui-project-2.afd87ce7.jpg"},4600:function(e,t,r){e.exports=r.p+"img/web-project-1.d1debdf5.jpg"}}]);
//# sourceMappingURL=projects.863ec3ff.js.map