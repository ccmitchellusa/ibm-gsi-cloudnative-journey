(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{aCte:function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return o})),n.d(t,"default",(function(){return c}));n("91GP"),n("rGqo"),n("yt8O"),n("Btvt"),n("RW0V"),n("q1tI");var i=n("7ljp"),a=n("013z");n("qKvR");function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e}).apply(this,arguments)}var o={},s={_frontmatter:o},l=a.a;function c(e){var t=e.components,n=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,["components"]);return Object(i.b)(l,r({},s,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h3",null,"Container Security"),Object(i.b)("p",null,"Container security is the process of implementing security tools and policies that will give you the assurance that everything in your container is running as intended.\nThis includes protecting the infrastructure, the software delivery chain, runtime, and everything in between.With this in mind, the process of securing containers is continuous.\nIt should be integrated into your development process, automated to remove the number of manual touch points, and extended into the maintenance and operation of the underlying infrastructure.\nThis means protecting your build pipeline container images and runtime host, platform, and application layers.\nImplementing security as part of the continuous delivery life cycle means your business will mitigate risk and reduce vulnerabilities across an ever-growing attack surface."),Object(i.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(i.b)("span",r({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"44.79166666666667%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAJCAYAAAAywQxIAAAACXBIWXMAABYlAAAWJQFJUiTwAAABtUlEQVQoz42SgU/TQBjF+29rAkFQETURjEHmxjam0+hE5xCJkKgJQWUDCVu7dmu31kUEt5UwDcik7c+7likxMeElL9/13eV7r/ed4vsBEX36P4848XwGWhDAcb/P4eEREkEQhAzx61gI/h99UBVOEQQnTGZy1GyHs+i2v9JyTDzPww8iI0+YFuo7FHfc8IwntdMQivXlO1qzx1atw+XEIm83Wqjyu+6iOT/Ir2wxN7/KINgA73e7bLb3+RdKvGAxFK9w46HBdP4zw7MaF2a2uRgrh3U0bTCUqPLu0zc0+4BNw6VYddGtHpp1EK5LussHtStC7KNklx0uJVWuZqqMpiqMi3rtfkSpTT2pES+Y3HxkCFOdiQdVRsT54URFGFUYmVUZS6lhgMnHBorsvvRxl5XSHsvFPV6f5Xqkr5U7rG53yL1pcfe5xb1Cg+Rik/Qrm5So8YUGd+ZNMkv236GcB7rTYyJrMJWri9QN0cwmsdDk9lMz1KWJIqcjn4rnBf+l3Jco6V3GxVXcEr82/cwUaU1m8lG9MqcRE+tzJZTPQWKt3GYsrXE9q4dNki8bxF5Y4UClLrXfQj99GXfgUcAAAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(i.b)("img",r({parentName:"span"},{className:"gatsby-resp-image-image",alt:"Container Securirty ",title:"Security Aspects for Container",src:"/ibm-gsi-cloudnative-journey/static/081a80df8f8f5276cda8be87d051d2d9/3cbba/ContainerSecurity.png",srcSet:["/ibm-gsi-cloudnative-journey/static/081a80df8f8f5276cda8be87d051d2d9/7fc1e/ContainerSecurity.png 288w","/ibm-gsi-cloudnative-journey/static/081a80df8f8f5276cda8be87d051d2d9/a5df1/ContainerSecurity.png 576w","/ibm-gsi-cloudnative-journey/static/081a80df8f8f5276cda8be87d051d2d9/3cbba/ContainerSecurity.png 1152w","/ibm-gsi-cloudnative-journey/static/081a80df8f8f5276cda8be87d051d2d9/0b124/ContainerSecurity.png 1728w","/ibm-gsi-cloudnative-journey/static/081a80df8f8f5276cda8be87d051d2d9/e957c/ContainerSecurity.png 1920w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "),Object(i.b)("h2",null,"BUILD"),Object(i.b)("p",null,"Goal : Shift-left scans in the CI/CD pipeline thereby reducing risk"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Image Quality "),Object(i.b)("p",{parentName:"li"},"Before using a docker image it is important to understand where is it coming from and who is it coming from .\nImage labels provide metadata for the image you’re building. This help users understand how to use the image easily.\nThe most common label is “maintainer”, which specifies the email address and the name of the person maintaining this image.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Least Privileged user"),Object(i.b)("p",{parentName:"li"},"When a Dockerfile doesn’t specify a USER, it defaults to executing the container using the root user.\nWhen that namespace is then mapped to the root user in the running container, it means that the container potentially has root access on the Docker host.\nHaving an application on the container run with the root user further broadens the attack surface and enables an easy path to privilege escalation\nif the application itself is vulnerable to exploitation.\nTo minimize exposure, opt-in to create a dedicated user and a dedicated group in the Docker image for the application;")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"CI Tools"),Object(i.b)("p",{parentName:"li"},"“Shift Left” security early into the DevOps pipeline, accelerating application delivery and removing obstacles to digital transformation.\nExample : Integrating Security scan into Jenkins / Tekton pipelines as part of Build.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Scanning Tools "),Object(i.b)("p",{parentName:"li"},"Leverage scanning tools to provide comprehensive visibility and threat detection across your organization’s hybrid, multi-cloud infrastructure.\nFor securing your host, container, and functions across the application lifecycle.\nExample :  AquaSec CSP , Prisma Cloud Compute Edition (Twistlock) , Trivy. The detailed discussions on these tools are done in the following sections.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Secrets Management "),Object(i.b)("p",{parentName:"li"},"In many environments there is a need to pass sensitive information like passwords, connection strings, or tokens into a container.\nTeam can adopt a central management and secure distribution of secrets into running containers.\nExample : HashiCorp Vault ")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Signed Images "),Object(i.b)("p",{parentName:"li"},"Signing your docker images will add some layer of trust to your images.\nThis can guarantee a consumer of your image that this image is for sure published by you and hasn’t been tampered\nExample : Docker Content Trust , Notary , Redhat Signature"))),Object(i.b)("h2",null,"SHIP"),Object(i.b)("p",null,"Goal : Only run trusted code, enforce immutability"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Trusted Registries and Repository "),Object(i.b)("p",{parentName:"li"},"Store images in private Trusted Registry with access controls enabled\nExample: Redhat Quay , IBM Container Registry , AWS ECR , Azure Container Registry ,Google Container Registrty ")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Signature Authenticating and Authorizing")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Integrity Assurance\nRegularly scans images from the registry for vulnerabilities, sensitive data, and malware and issues alerts when detecting vulnerabilities"))),Object(i.b)("h2",null,"RUN"),Object(i.b)("p",null,"Goal : Protect workloads, focus on whitelisting and automation"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Prevent deployment of images  with known vulnerabilities\nLeverage controls  during the  run phase of containers, where applications are scanned for vulnerabilities as they are promoted through the software development life cycle process.\nCreating a runtime security policy can help define appropriate response actions during runtime. If suspicious behavior is detected, the security policy will prompt alerts and remedies.")),Object(i.b)("p",null,"Example :  Policies defined in AquaSec CSP , Policies defined in Prisma Cloud Compute Edition (Twistlock) "),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Validate image signatures\nPrevent untrusted images from running anywhere in your cluster.\nThe first time that you pull a signed image with Docker Content Trust enabled, your Docker client recognizes the signature as trusted.\nThe Docker client pulls the most recent signed version of the image that you specify and Unsigned images or untrusted content is not pulled.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Monitor for new vulnerabilities\nScanning Tools maintain  the latest cyber-intelligence knowledge base and scan images against it."))),Object(i.b)("p",null,"Example : Aqua’s CyberCenter "),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Resource Management\nThe ability to run as many containers as needed gives you a lot of flexibility in production.\nHowever, this also creates major risks in the event containers are compromised. Make sure you monitor container activity and limit use of resources.\nDesign errors, software bugs, or malware attacks can lead to a DoS. You can handle the large attack surface by limiting the number of system resources allotted for each container.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Alerting Monitoring Deployments\nMonitoring systems can help you identify attacks, send alerts, and even automatically implement fixes.\nPeriodically review log data generated by containers and use it to generate preventive security insights."))),Object(i.b)("p",null,"Example: Prometheus"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Network segmentation\nAutomatically detect and map internal and external container, serverless and host network connections and Apply firewall rules for contextual application micro- segmentation\nand also Alert on or block unauthorized network connection attempts")),Object(i.b)("h2",null,"Tools Explored :"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"IBM Vulnerabilty Advisor"),Object(i.b)("li",{parentName:"ul"},"AquaSecure CSP"),Object(i.b)("li",{parentName:"ul"},"Prisma™ Cloud"),Object(i.b)("li",{parentName:"ul"},"Opensource Trivy")))}c.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-developer-advanced-2-devsecops-index-mdx-3afe77400fd2ea1f5837.js.map