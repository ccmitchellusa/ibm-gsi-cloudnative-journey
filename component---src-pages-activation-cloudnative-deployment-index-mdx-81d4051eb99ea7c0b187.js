(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{"013z":function(e,t,a){"use strict";a("KKXr"),a("pIFo");var n=a("pOBw"),o=a("q1tI"),r=a.n(o),i=a("NmYn"),s=a.n(i),c=a("OKom"),l=a("k4MR"),b=a("TSYQ"),p=a.n(b),u=a("QH2O"),d=a("qKvR"),m=function(e){var t,a=e.title,n=e.tabs,o=void 0===n?[]:n;return Object(d.b)("div",{className:p()(u.pageHeader,(t={},t[u.withTabs]=o.length,t))},Object(d.b)("div",{className:"bx--grid"},Object(d.b)("div",{className:"bx--row"},Object(d.b)("div",{className:"bx--col-lg-12"},Object(d.b)("h1",{id:"page-title",className:u.text},a)))))},h=a("pEPl"),g=a("BAC9"),O=function(e){var t=e.relativePagePath,a=e.repository,n=h.data.site.siteMetadata.repository,o=a||n,r=o.baseUrl,i=o.subDirectory,s=r+"/edit/"+o.branch+i+"/src/pages"+t;return r?Object(d.b)("div",{className:"bx--row "+g.row},Object(d.b)("div",{className:"bx--col"},Object(d.b)("a",{className:g.link,href:s},"Edit this page on GitHub"))):null},j=a("FCXl"),v=(a("Oyvg"),a("Wbzz")),f=a("I8xM");var y=function(e){var t,a;function n(){return e.apply(this,arguments)||this}return a=e,(t=n).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,n.prototype.render=function(){var e=this.props,t=e.tabs,a=e.slug,n=a.split("/").filter(Boolean).slice(-1)[0],o=t.map((function(e){var t,o=s()(e,{lower:!0}),r=o===n,i=new RegExp(n+"(?!-)"),c=a.replace(i,o);return Object(d.b)("li",{key:e,className:p()((t={},t[f.selectedItem]=r,t),f.listItem)},Object(d.b)(v.Link,{className:f.link,to:""+c},e))}));return Object(d.b)("div",{className:f.tabsContainer},Object(d.b)("div",{className:"bx--grid"},Object(d.b)("div",{className:"bx--row"},Object(d.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(d.b)("nav",null,Object(d.b)("ul",{className:f.list},o))))))},n}(r.a.Component),w=a("MjG9");t.a=function(e){var t=e.pageContext,a=e.children,o=e.location,r=e.Title,i=t.frontmatter,b=void 0===i?{}:i,p=t.relativePagePath,u=t.titleType,h=b.tabs,g=b.title,v=b.theme,f=b.description,x=b.keywords,N=n.data.site.pathPrefix,k=N?o.pathname.replace(N,""):o.pathname,C=h?k.split("/").filter(Boolean).slice(-1)[0]||s()(h[0],{lower:!0}):"";return Object(d.b)(l.a,{tabs:h,homepage:!1,theme:v,pageTitle:g,pageDescription:f,pageKeywords:x,titleType:u},Object(d.b)(m,{title:r?Object(d.b)(r,null):g,label:"label",tabs:h}),h&&Object(d.b)(y,{slug:k,tabs:h,currentTab:C}),Object(d.b)(w.a,{padded:!0},a,Object(d.b)(O,{relativePagePath:p})),Object(d.b)(j.a,{pageContext:t,location:o,slug:k,tabs:h,currentTab:C}),Object(d.b)(c.a,null))}},fAq0:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return c})),a.d(t,"default",(function(){return u}));a("91GP"),a("rGqo"),a("yt8O"),a("Btvt"),a("RW0V"),a("q1tI");var n=a("7ljp"),o=a("013z"),r=a("PXik");a("qKvR");function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}var s,c={},l=(s="XLink",function(e){return console.warn("Component "+s+" was not imported, exported, or provided by MDXProvider as global scope"),Object(n.b)("div",e)}),b={_frontmatter:c},p=o.a;function u(e){var t=e.components,a=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,["components"]);return Object(n.b)(p,i({},b,a,{components:t,mdxType:"MDXLayout"}),Object(n.b)("h3",null,"Containers"),Object(n.b)("p",null,"Containers are the modern way of building and deploying software, instead of building for an environment. You build you code into a Container and move the container to be deployed. This massively reduces the chance of issues between environments and speeds up the amount of time you can deploy software and microservices. Use these Katacodas to walk through some of the basic understand of Containers. "),Object(n.b)("p",null,"These tasks assume that you have:"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Read through the ",Object(n.b)("a",i({parentName:"li"},{href:"/gsi-labs/ibm-gsi-cloudnative-journey/concepts/containers"}),"Containers")," concepts page."),Object(n.b)("li",{parentName:"ul"},"Created a ",Object(n.b)(l,{to:"https://www.katacoda.com/signup",mdxType:"XLink"},"Katacoda")," Account."),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",i({parentName:"li"},{href:"/gsi-labs/ibm-gsi-cloudnative-journey/enablement/prereqs"}),"Docker Desktop")," is running on your machine.")),Object(n.b)(r.a,{content:"containers",tileColor:"bx--article-card--ibm",mdxType:"ActivationPage"}),Object(n.b)("h3",null,"Kubernetess"),Object(n.b)("p",null,"Kubernetes has become the defacto stander for managing Container orchestration. Running a single container is not going to help and Enterprise build complex and scalable systems. This is where Kubernetes helps. It manages all the complex parts of an enterprise system from horizontally and vertically scaling enterprise to configuration management and health."),Object(n.b)("p",null,"These self paced learning modules  give you a chance to walk through basic kubernetes tasks via Katacoda. "),Object(n.b)("p",null,"These tasks assume that you have:"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Reviewed ",Object(n.b)("a",i({parentName:"li"},{href:"/gsi-labs/ibm-gsi-cloudnative-journey/concepts/kubernetes"}),"Kubernetes")," Concept page."),Object(n.b)("li",{parentName:"ul"},"Created a ",Object(n.b)("a",i({parentName:"li"},{href:"https://www.katacoda.com/signup"}),"Katacoda")," Account.")),Object(n.b)(r.a,{content:"kubernetes",tileColor:"bx--article-card--ibm",mdxType:"ActivationPage"}),Object(n.b)("h3",null,"Deployment Best practices"),Object(n.b)("p",null,"Use the following links to help you get a deeper understanding of this a good understanding and deep dive in Cloud Native Deployment"),Object(n.b)(r.a,{content:"cndp",mdxType:"ActivationPage"}),Object(n.b)("p",null,"Once you have completed these tasks, you should have a basic understanding of the key topics for Cloud Native Deployment."))}u.isMDXComponent=!0},pEPl:function(e){e.exports=JSON.parse('{"data":{"site":{"siteMetadata":{"repository":{"baseUrl":"","subDirectory":"","branch":"master"}}}}}')},pOBw:function(e){e.exports=JSON.parse('{"data":{"site":{"pathPrefix":"/gsi-labs/ibm-gsi-cloudnative-journey"}}}')}}]);
//# sourceMappingURL=component---src-pages-activation-cloudnative-deployment-index-mdx-81d4051eb99ea7c0b187.js.map