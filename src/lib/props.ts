export const mapPageUrl = (pageId: String) => {
  if(process.env.NODE_ENV==='production'){
    return `/Kiha-pf/blog/${pageId}`
  }else{
    return `/blog/${pageId}`
  }
  }
  export const pageLinkOptions = {
    component: "RouterLink",
    href: "to",
  }