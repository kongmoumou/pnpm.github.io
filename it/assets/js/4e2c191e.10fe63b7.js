"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8958],{9613:(e,n,r)=>{r.d(n,{Zo:()=>c,kt:()=>m});var t=r(9496);function o(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function i(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function a(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?i(Object(r),!0).forEach((function(n){o(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function p(e,n){if(null==e)return{};var r,t,o=function(e,n){if(null==e)return{};var r,t,o={},i=Object.keys(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||(o[r]=e[r]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=t.createContext({}),s=function(e){var n=t.useContext(l),r=n;return e&&(r="function"==typeof e?e(n):a(a({},n),e)),r},c=function(e){var n=s(e.components);return t.createElement(l.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},u=t.forwardRef((function(e,n){var r=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),u=s(r),m=o,v=u["".concat(l,".").concat(m)]||u[m]||d[m]||i;return r?t.createElement(v,a(a({ref:n},c),{},{components:r})):t.createElement(v,a({ref:n},c))}));function m(e,n){var r=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=u;var p={};for(var l in n)hasOwnProperty.call(n,l)&&(p[l]=n[l]);p.originalType=e,p.mdxType="string"==typeof e?e:o,a[1]=p;for(var s=2;s<i;s++)a[s]=r[s];return t.createElement.apply(null,a)}return t.createElement.apply(null,r)}u.displayName="MDXCreateElement"},9610:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>m,frontMatter:()=>p,metadata:()=>s,toc:()=>d});var t=r(2848),o=r(9213),i=(r(9496),r(9613)),a=["components"],p={id:"errors",title:"Codici di errore"},l=void 0,s={unversionedId:"errors",id:"version-7.x/errors",title:"Codici di errore",description:"ERRPNPMUNEXPECTED_STORE",source:"@site/i18n/it/docusaurus-plugin-content-docs/version-7.x/errors.md",sourceDirName:".",slug:"/errors",permalink:"/it/errors",draft:!1,editUrl:"https://crowdin.com/project/pnpm/it",tags:[],version:"7.x",frontMatter:{id:"errors",title:"Codici di errore"},sidebar:"version-7.x/docs",previous:{title:"Confronto tra le funzionalit\xe0",permalink:"/it/feature-comparison"},next:{title:"Loghi",permalink:"/it/logos"}},c={},d=[{value:"ERR_PNPM_UNEXPECTED_STORE",id:"err_pnpm_unexpected_store",level:2},{value:"ERR_PNPM_NO_MATCHING_VERSION_INSIDE_WORKSPACE",id:"err_pnpm_no_matching_version_inside_workspace",level:2},{value:"ERR_PNPM_PEER_DEP_ISSUES",id:"err_pnpm_peer_dep_issues",level:2}],u={toc:d};function m(e){var n=e.components,r=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,t.Z)({},u,r,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"err_pnpm_unexpected_store"},"ERR_PNPM_UNEXPECTED_STORE"),(0,i.kt)("p",null,"\xc8 presente una cartella dei moduli ed \xe8 collegata a una cartella dell'archivio diversa."),(0,i.kt)("p",null,"Se hai modificato intenzionalmente la cartella dell'archiviio, esegui ",(0,i.kt)("inlineCode",{parentName:"p"},"pnpm install")," e pnpm reinstaller\xe0 le dipendenze utilizzando il nuovo archivio."),(0,i.kt)("h2",{id:"err_pnpm_no_matching_version_inside_workspace"},"ERR_PNPM_NO_MATCHING_VERSION_INSIDE_WORKSPACE"),(0,i.kt)("p",null,"Un progetto ha una dipendenza dallo spazio di lavoro che non esiste nello spazio di lavoro."),(0,i.kt)("p",null,"Ad esempio, il pacchetto ",(0,i.kt)("inlineCode",{parentName:"p"},"foo")," ha ",(0,i.kt)("inlineCode",{parentName:"p"},"bar@1.0.0")," nelle dipendenze (",(0,i.kt)("inlineCode",{parentName:"p"},"dependencies"),"):"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "name": "foo",\n  "version": "1.0.0",\n  "dependencies": {\n    "bar": "workspace:1.0.0"\n  }\n}\n')),(0,i.kt)("p",null,"Tuttavia, c'\xe8 solo ",(0,i.kt)("inlineCode",{parentName:"p"},"bar@2.0.0")," nell'area di lavoro, quindi ",(0,i.kt)("inlineCode",{parentName:"p"},"pnpm install")," fallir\xe0."),(0,i.kt)("p",null,"Per correggere questo errore, tutte le dipendenze che utilizzano il ",(0,i.kt)("a",{parentName:"p",href:"/it/workspaces#workspace-protocol-workspace"},"protocollo dello spazio di lavoro")," devono essere aggiornate per utilizzare le versioni dei pacchetti presenti nell'area di lavoro. Questa operazione pu\xf2 essere eseguita manualmente o utilizzando il comando ",(0,i.kt)("inlineCode",{parentName:"p"},"pnpm -r update"),"."),(0,i.kt)("h2",{id:"err_pnpm_peer_dep_issues"},"ERR_PNPM_PEER_DEP_ISSUES"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"pnpm install")," avr\xe0 esito negativo se il progetto ha dipendenze peer non risolte o se le dipendenze peer non corrispondono agli intervalli desiderati. Per risolvere questo problema, installa le dipendenze peer mancanti."),(0,i.kt)("p",null,"Puoi anche ignorare selettivamente questi errori usando i campi ",(0,i.kt)("a",{parentName:"p",href:"package_json#pnpmpeerdependencyrulesignoremissing"},"pnpm.peerDependencyRules.ignoreMissing")," e ",(0,i.kt)("a",{parentName:"p",href:"package_json#pnpmpeerdependencyrulesallowedversions"},"pnpm.peerDependencyRules.allowedVersions")," in ",(0,i.kt)("inlineCode",{parentName:"p"},"package.json"),"."))}m.isMDXComponent=!0}}]);