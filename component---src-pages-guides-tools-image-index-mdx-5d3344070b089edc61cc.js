(window.webpackJsonp=window.webpackJsonp||[]).push([[49],{"013z":function(e,t,n){"use strict";n("KKXr"),n("pIFo");var a=n("pOBw"),l=n("q1tI"),i=n.n(l),r=n("NmYn"),c=n.n(r),o=n("OKom"),s=n("k4MR"),b=n("TSYQ"),p=n.n(b),u=n("QH2O"),m=n("qKvR"),d=function(e){var t,n=e.title,a=e.tabs,l=void 0===a?[]:a;return Object(m.b)("div",{className:p()(u.pageHeader,(t={},t[u.withTabs]=l.length,t))},Object(m.b)("div",{className:"bx--grid"},Object(m.b)("div",{className:"bx--row"},Object(m.b)("div",{className:"bx--col-lg-12"},Object(m.b)("h1",{id:"page-title",className:u.text},n)))))},h=n("pEPl"),O=n("BAC9"),j=function(e){var t=e.relativePagePath,n=e.repository,a=h.data.site.siteMetadata.repository,l=n||a,i=l.baseUrl,r=l.subDirectory,c=i+"/edit/"+l.branch+r+"/src/pages"+t;return i?Object(m.b)("div",{className:"bx--row "+O.row},Object(m.b)("div",{className:"bx--col"},Object(m.b)("a",{className:O.link,href:c},"Edit this page on GitHub"))):null},g=n("FCXl"),N=(n("Oyvg"),n("Wbzz")),v=n("I8xM");var f=function(e){var t,n;function a(){return e.apply(this,arguments)||this}return n=e,(t=a).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,a.prototype.render=function(){var e=this.props,t=e.tabs,n=e.slug,a=n.split("/").filter(Boolean).slice(-1)[0],l=t.map((function(e){var t,l=c()(e,{lower:!0}),i=l===a,r=new RegExp(a+"(?!-)"),o=n.replace(r,l);return Object(m.b)("li",{key:e,className:p()((t={},t[v.selectedItem]=i,t),v.listItem)},Object(m.b)(N.Link,{className:v.link,to:""+o},e))}));return Object(m.b)("div",{className:v.tabsContainer},Object(m.b)("div",{className:"bx--grid"},Object(m.b)("div",{className:"bx--row"},Object(m.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(m.b)("nav",null,Object(m.b)("ul",{className:v.list},l))))))},a}(i.a.Component),y=n("MjG9");t.a=function(e){var t=e.pageContext,n=e.children,l=e.location,i=e.Title,r=t.frontmatter,b=void 0===r?{}:r,p=t.relativePagePath,u=t.titleType,h=b.tabs,O=b.title,N=b.theme,v=b.description,k=b.keywords,w=a.data.site.pathPrefix,C=w?l.pathname.replace(w,""):l.pathname,x=h?C.split("/").filter(Boolean).slice(-1)[0]||c()(h[0],{lower:!0}):"";return Object(m.b)(s.a,{tabs:h,homepage:!1,theme:N,pageTitle:O,pageDescription:v,pageKeywords:k,titleType:u},Object(m.b)(d,{title:i?Object(m.b)(i,null):O,label:"label",tabs:h}),h&&Object(m.b)(f,{slug:C,tabs:h,currentTab:x}),Object(m.b)(y.a,{padded:!0},n,Object(m.b)(j,{relativePagePath:p})),Object(m.b)(g.a,{pageContext:t,location:l,slug:C,tabs:h,currentTab:x}),Object(m.b)(o.a,null))}},pEPl:function(e){e.exports=JSON.parse('{"data":{"site":{"siteMetadata":{"repository":{"baseUrl":"","subDirectory":"","branch":"master"}}}}}')},pOBw:function(e){e.exports=JSON.parse('{"data":{"site":{"pathPrefix":"/gsi-labs/ibm-gsi-cloudnative-journey"}}}')},r8Uu:function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return c})),n.d(t,"default",(function(){return m}));n("91GP"),n("rGqo"),n("yt8O"),n("Btvt"),n("RW0V"),n("q1tI");var a=n("7ljp"),l=n("013z"),i=n("T0C+");n("qKvR");function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}var c={},o=function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),Object(a.b)("div",t)}},s=o("PageDescription"),b=o("InlineNotification"),p={_frontmatter:c},u=l.a;function m(e){var t=e.components,n=function(e,t){if(null==e)return{};var n,a,l={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,["components"]);return Object(a.b)(u,r({},p,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)(s,{mdxType:"PageDescription"},Object(a.b)("p",null,"The ",Object(a.b)(i.a,{name:"env",mdxType:"Globals"})," includes the CLI Tools Docker image")),Object(a.b)("p",null,"The ",Object(a.b)("a",r({parentName:"p"},{href:"https://github.com/ibm-garage-cloud/ibm-garage-cli-tools",title:"IBM Garage for Cloud Developer Tools Docker image"}),"IBM Garage command-line tools")," is a Docker image with many useful IBM Cloud CLI tools already installed. Rather than installing all of these tools on your local computer, you can simply pull and run this image."),Object(a.b)("h2",null,"Running the client"),Object(a.b)(b,{mdxType:"InlineNotification"},Object(a.b)("p",null,"You must ",Object(a.b)("a",r({parentName:"p"},{href:"https://www.docker.com/products/docker-desktop"}),"install Docker Desktop")," on your local computer to run this Docker image.")),Object(a.b)("p",null,"Start the client to use it."),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},"To run the ",Object(a.b)("inlineCode",{parentName:"p"},"icclient")," container:"),Object(a.b)("pre",{parentName:"li"},Object(a.b)("code",r({parentName:"pre"},{className:"language-bash"}),"docker run -itd --name icclient ibmgaragecloud/cli-tools\n")),Object(a.b)("p",{parentName:"li"},"  This  assumes the image’s default name, ",Object(a.b)("inlineCode",{parentName:"p"},"ibm-garage-cli-tools"),"."))),Object(a.b)("p",null,"Once the client is running in the backgroud, use it by opening a shell in it."),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},"To use the ",Object(a.b)("inlineCode",{parentName:"p"},"icclient")," container, exec shell into it:"),Object(a.b)("pre",{parentName:"li"},Object(a.b)("code",r({parentName:"pre"},{className:"language-bash"}),"docker exec -it icclient /bin/bash\n")),Object(a.b)("p",{parentName:"li"},"  Your terminal is now in the container. "))),Object(a.b)("p",null,"Use this shell to run commands using the installed tools and scripts."),Object(a.b)("p",null,"When you’re finished running commands, to exit the client."),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},"To leave the ",Object(a.b)("inlineCode",{parentName:"p"},"icclient")," container shell, as with any shell:"),Object(a.b)("pre",{parentName:"li"},Object(a.b)("code",r({parentName:"pre"},{className:"language-bash"}),"exit\n")),Object(a.b)("p",{parentName:"li"},"  The container will keep running after you exit its shell."))),Object(a.b)("p",null,"If the client stops:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},"To run the ",Object(a.b)("inlineCode",{parentName:"p"},"icclient")," container again:"),Object(a.b)("pre",{parentName:"li"},Object(a.b)("code",r({parentName:"pre"},{className:"language-bash"}),"docker start icclient\n")))),Object(a.b)("p",null,"The ",Object(a.b)("inlineCode",{parentName:"p"},"icclient")," container is just a Docker container, so all ",Object(a.b)("a",r({parentName:"p"},{href:"https://docs.docker.com/engine/reference/commandline/cli/"}),"Docker CLI commands")," work."),Object(a.b)("h2",null,"Using the client"),Object(a.b)("p",null,"From a client shell, run ",Object(a.b)("inlineCode",{parentName:"p"},"image-help")," to get a list of available tools, scripts, and ENV properties:"),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{className:"language-bash"}),"$ image-help\nAvailable env properties (can be overridden for individual commands):\n > BM_API_KEY - the IBM Cloud api key\n > REGION - the IBM Cloud region (e.g. us-south)\n > RESOURCE_GROUP - the IBM Cloud resource group\n > CLUSTER_NAME - the name of the kubernetes cluster in IBM Cloud\n > SL_USERNAME - the Classic Infrastructure user name or API user name (e.g. 282165_joe@us.ibm.com)\n > SL_API_KEY - the Classic Infrastructure api key\n\nAvailable tools:\n > terraform (with helm, kube, and ibm provider plugins)\n > calicoctl\n > ibmcloud (with container-service, container-registry, and cloud-databases plugins)\n > kubectl\n > kustomize\n > oc\n > helm\n > docker\n > git\n > nvm\n > node (v11.12.0 currently installed)\n > solsa\n > yo\n\nAvailable scripts:\n > init.sh {BM_API_KEY} {REGION} {RESOURCE_GROUP} {CLUSTER_NAME}\n > createNamespaces.sh\n > deleteNamespace.sh\n > installHelm.sh\n > cluster-pull-secret-apply.sh\n > setup-namespace-pull-secrets.sh\n > checkPodRunning.sh\n > copy-secret-to-namespace.sh\n")))}m.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-guides-tools-image-index-mdx-5d3344070b089edc61cc.js.map