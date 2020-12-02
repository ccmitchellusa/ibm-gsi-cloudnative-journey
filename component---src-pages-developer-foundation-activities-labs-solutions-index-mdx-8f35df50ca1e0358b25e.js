(window.webpackJsonp=window.webpackJsonp||[]).push([[60],{Qe7Q:function(e,n,t){"use strict";t.r(n),t.d(n,"_frontmatter",(function(){return c})),t.d(n,"default",(function(){return m}));t("91GP"),t("rGqo"),t("yt8O"),t("Btvt"),t("RW0V"),t("q1tI");var o=t("7ljp"),a=t("013z");t("qKvR");function r(){return(r=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e}).apply(this,arguments)}var c={},l=function(e){return function(n){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),Object(o.b)("div",n)}},p=l("Accordion"),b=l("AccordionItem"),i={_frontmatter:c},s=a.a;function m(e){var n=e.components,t=function(e,n){if(null==e)return{};var t,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,["components"]);return Object(o.b)(s,r({},i,t,{components:n,mdxType:"MDXLayout"}),Object(o.b)("h1",null,"Solutions"),Object(o.b)(p,{mdxType:"Accordion"},Object(o.b)(b,{title:"Pod Creation",mdxType:"AccordionItem"},Object(o.b)("pre",null,Object(o.b)("code",r({parentName:"pre"},{}),'apiVersion: v1\nkind: Pod\nmetadata:\n  name: nginx\n  namespace: web\nspec:\n  containers:\n    - name: nginx\n      image: nginx\n      command: ["nginx"]\n      args: ["-g", "daemon off;", "-q"]\n      ports:\n      - containerPort: 80\n'))),Object(o.b)(b,{title:"Pod Configuration",mdxType:"AccordionItem"},Object(o.b)("pre",null,Object(o.b)("code",r({parentName:"pre"},{}),"apiVersion: v1\nkind: ConfigMap\nmetadata:\n  name: yoda-service-config\ndata:\n  yoda.cfg: |-\n    yoda.baby.power=100000000\n    yoda.strength=10\n")),Object(o.b)("hr",null),Object(o.b)("pre",null,Object(o.b)("code",r({parentName:"pre"},{}),"apiVersion: v1\nkind: Secret\nmetadata:\n  name: yoda-db-password\nstringData:\n  password: 0penSh1ftRul3s!\n")),Object(o.b)("hr",null),Object(o.b)("pre",null,Object(o.b)("code",r({parentName:"pre"},{}),'apiVersion: v1\nkind: Pod\nmetadata:\n  name: yoda-service\nspec:\n  serviceAccountName: yoda-svc\n  containers:\n  - name: yoda-service\n    image: bitnami/nginx\n    volumeMounts:\n    - name: config-volume\n      mountPath: /etc/yoda-service\n    env:\n    - name: DB_PASSWORD\n      valueFrom:\n        secretKeyRef:\n          name: yoda-db-password\n          key: password\n    resources:\n      requests:\n        memory: "64Mi"\n        cpu: "250m"\n      limits:\n        memory: "128Mi"\n        cpu: "500m"\n  volumes:\n  - name: config-volume\n      configMap:\n        name: yoda-service-config\n'))),Object(o.b)(b,{title:"Multiple Containers",mdxType:"AccordionItem"},Object(o.b)("pre",null,Object(o.b)("code",r({parentName:"pre"},{}),"apiVersion: v1\nkind: ConfigMap\nmetadata:\n  name: vader-service-ambassador-config\ndata:\n  haproxy.cfg: |-\n    global\n        daemon\n        maxconn 256\n\n    defaults\n        mode http\n        timeout connect 5000ms\n        timeout client 50000ms\n        timeout server 50000ms\n\n    listen http-in\n        bind *:80\n        server server1 127.0.0.1:8989 maxconn 32\n")),Object(o.b)("hr",null),Object(o.b)("pre",null,Object(o.b)("code",r({parentName:"pre"},{}),"apiVersion: v1\nkind: Pod\nmetadata:\n  name: vader-service\nspec:\n  containers:\n    - name: millennium-falcon\n      image: ibmcase/millennium-falcon:1\n    - name: haproxy-ambassador\n      image: haproxy:1.7\n      ports:\n      - containerPort: 80\n      volumeMounts:\n      - name: config-volume\n        mountPath: /usr/local/etc/haproxy\n  volumes:\n  - name: config-volume\n    configMap:\n      name: vader-service-ambassador-config\n")),Object(o.b)("hr",null),Object(o.b)("pre",null,Object(o.b)("code",r({parentName:"pre"},{}),"apiVersion: v1\nkind: Pod\nmetadata:\nname: busybox\nspec:\ncontainers:\n- name: myapp-container\n    image: radial/busyboxplus:curl\n    command: ['sh', '-c', 'while true; do sleep 3600; done']\n")),Object(o.b)("p",null,"   Check it with"),Object(o.b)("pre",null,Object(o.b)("code",r({parentName:"pre"},{}),"kubectl exec busybox -- curl $(kubectl get pod vader-service -o=jsonpath='{.status.podIP}'):80\n"))),Object(o.b)(b,{title:"Probes",mdxType:"AccordionItem"},Object(o.b)("pre",null,Object(o.b)("code",r({parentName:"pre"},{}),"apiVersion: v1\nkind: Pod\nmetadata:\n  name: energy-shield-service\nspec:\n  containers:\n  - name: energy-shield\n    image: ibmcase/energy-shield:1\n    livenessProbe:\n      httpGet:\n        path: /healthz\n        port: 8080\n    readinessProbe:\n      httpGet:\n        path: /ready\n        port: 8080\n      initialDelaySeconds: 5\n"))),Object(o.b)(b,{title:"Debugging",mdxType:"AccordionItem"},Object(o.b)("p",null,"   Check ",Object(o.b)("inlineCode",{parentName:"p"},"STATUS")," column for not Ready"),Object(o.b)("pre",null,Object(o.b)("code",r({parentName:"pre"},{}),"kubectl get pods --all-namespaces\n")),Object(o.b)("p",null,"   Check the description of the deployment"),Object(o.b)("pre",null,Object(o.b)("code",r({parentName:"pre"},{}),"kubectl describe deployment hyper-drive\n")),Object(o.b)("p",null,"   Save logs for broken pod"),Object(o.b)("pre",null,Object(o.b)("code",r({parentName:"pre"},{}),"kubectl logs <pod name> -n <namespace> > /home/cloud_user/debug/broken-pod-logs.log\n")),Object(o.b)("p",null,"   In the deployment’s description you will see the following is wrong:"),Object(o.b)("ul",null,Object(o.b)("li",null,"Selector and Label names do not match."),Object(o.b)("li",null,"The Probe is TCP instead of HTTP Get."),Object(o.b)("li",null,"The Service Port is 80 instead of 8080.")),"To fix probe, can't kubectl edit, need to delete and recreate the deployment",Object(o.b)("pre",null,Object(o.b)("code",r({parentName:"pre"},{}),"kubectl get deployment <deployment name> -n <namespace> -o yaml --export > hyper-drive.yml\n")),Object(o.b)("p",null,"   Delete pod"),Object(o.b)("pre",null,Object(o.b)("code",r({parentName:"pre"},{}),"kubectl delete deployment <deployment name> -n <namespace>\n")),Object(o.b)("p",null,"   Edit yaml, and apply"),Object(o.b)("pre",null,Object(o.b)("code",r({parentName:"pre"},{}),"kubectl apply -f hyper-drive.yml -n <namespace>\n")),Object(o.b)("p",null,"   Verify"),Object(o.b)("pre",null,Object(o.b)("code",r({parentName:"pre"},{}),"kubectl get deployment <deployment name> -n <namespace>\n"))),Object(o.b)(b,{title:"Rolling Updates",mdxType:"AccordionItem"},Object(o.b)("p",null,"  Update the deployment to the new version like so:"),Object(o.b)("pre",null,Object(o.b)("code",r({parentName:"pre"},{}),"kubectl set image deployment/jedi-deployment jedi-ws=bitnamy/nginx:1.18.1 --record\n")),Object(o.b)("p",null,"  Check the progress of the rolling update:"),Object(o.b)("pre",null,Object(o.b)("code",r({parentName:"pre"},{}),"kubectl rollout status deployment/jedi-deployment\n")),Object(o.b)("p",null,"  In another terminal window"),Object(o.b)("pre",null,Object(o.b)("code",r({parentName:"pre"},{}),"kubectl get pods -w\n")),Object(o.b)("p",null,"  Get a list of previous revisions."),Object(o.b)("pre",null,Object(o.b)("code",r({parentName:"pre"},{}),"kubectl rollout history deployment/jedi-deployment\n")),Object(o.b)("p",null,"  Undo the last revision."),Object(o.b)("pre",null,Object(o.b)("code",r({parentName:"pre"},{}),"kubectl rollout undo deployment/jedi-deployment\n")),Object(o.b)("p",null,"  Check the status of the rollout."),Object(o.b)("pre",null,Object(o.b)("code",r({parentName:"pre"},{}),"kubectl rollout status deployment/jedi-deployment\n"))),Object(o.b)(b,{title:"Cron Jobs",mdxType:"AccordionItem"},Object(o.b)("pre",null,Object(o.b)("code",r({parentName:"pre"},{}),'apiVersion: batch/v1beta1\nkind: CronJob\nmetadata:\n  name: xwing-cronjob\nspec:\n  schedule: "*/1 * * * *"\n  jobTemplate:\n    spec:\n      template:\n        spec:\n          containers:\n          - name: xwing-status\n            image: ibmcase/xwing-status:1.0\n            args:\n            - /usr/sbin/xwing-status.sh\n          restartPolicy: OnFailure\n')),Object(o.b)("hr",null),Object(o.b)("pre",null,Object(o.b)("code",r({parentName:"pre"},{}),"kubectl get cronjob xwing-cronjob\n"))),Object(o.b)(b,{title:"Services",mdxType:"AccordionItem"},Object(o.b)("pre",null,Object(o.b)("code",r({parentName:"pre"},{}),"apiVersion: v1\nkind: Service\nmetadata:\n    name: jedi-svc\nspec:\n    type: NodePort\n    selector:\n        app: jedi\n    ports:\n    - protocol: TCP\n        port: 80\n        targetPort: 8080\n")),Object(o.b)("hr",null),Object(o.b)("pre",null,Object(o.b)("code",r({parentName:"pre"},{}),"apiVersion: v1\nkind: Service\nmetadata:\nname: yoda-svc\nspec:\ntype: ClusterIP\nselector:\n    app: yoda\nports:\n- protocol: TCP\n    port: 80\n    targetPort: 8080\n"))),Object(o.b)(b,{title:"Persistent Volumes",mdxType:"AccordionItem"},Object(o.b)("pre",null,Object(o.b)("code",r({parentName:"pre"},{}),'    apiVersion: v1\n    kind: PersistentVolume\n    metadata:\n      name: postgresql-pv\n    spec:\n      storageClassName: localdisk\n      capacity:\n        storage: 1Gi\n      accessModes:\n        - ReadWriteOnce\n      hostPath:\n        path: "/mnt/data"\n')),Object(o.b)("hr",null),Object(o.b)("pre",null,Object(o.b)("code",r({parentName:"pre"},{}),"    apiVersion: v1\n    kind: PersistentVolumeClaim\n    metadata:\n      name: postgresql-pv-claim\n    spec:\n      storageClassName: localdisk\n      accessModes:\n        - ReadWriteOnce\n      resources:\n        requests:\n          storage: 500Mi\n    \n")),Object(o.b)("hr",null),Object(o.b)("pre",null,Object(o.b)("code",r({parentName:"pre"},{}),"    apiVersion: v1\n    kind: Pod\n    metadata:\n      name: postgresql-pod\n    spec:\n      containers:\n      - name: postgresql\n        image: bitnami/postgresql\n        ports:\n        - containerPort: 5432\n        env:\n        - name: MYSQL_ROOT_PASSWORD\n          value: password\n        volumeMounts:\n        - name: sql-storage\n          mountPath: /bitnami/postgresql/\n      volumes:\n      - name: sql-storage\n        persistentVolumeClaim:\n          claimName: postgresql-pv-claim\n    \n")),Object(o.b)("hr",null))))}m.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-developer-foundation-activities-labs-solutions-index-mdx-8f35df50ca1e0358b25e.js.map