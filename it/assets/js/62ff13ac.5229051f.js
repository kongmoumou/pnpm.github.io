"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2133],{9613:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var i=n(9496);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=i.createContext({}),s=function(e){var t=i.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=s(e.components);return i.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=s(n),d=r,g=m["".concat(p,".").concat(d)]||m[d]||c[d]||o;return n?i.createElement(g,a(a({ref:t},u),{},{components:n})):i.createElement(g,a({ref:t},u))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,a=new Array(o);a[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,a[1]=l;for(var s=2;s<o;s++)a[s]=n[s];return i.createElement.apply(null,a)}return i.createElement.apply(null,n)}m.displayName="MDXCreateElement"},8570:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>p,default:()=>d,frontMatter:()=>l,metadata:()=>s,toc:()=>c});var i=n(2848),r=n(9213),o=(n(9496),n(9613)),a=["components"],l={id:"run",title:"pnpm run"},p=void 0,s={unversionedId:"cli/run",id:"version-6.x/cli/run",title:"pnpm run",description:"Alias: run-script",source:"@site/i18n/it/docusaurus-plugin-content-docs/version-6.x/cli/run.md",sourceDirName:"cli",slug:"/cli/run",permalink:"/it/6.x/cli/run",draft:!1,editUrl:"https://crowdin.com/project/pnpm/it",tags:[],version:"6.x",frontMatter:{id:"run",title:"pnpm run"},sidebar:"version-6.x/docs",previous:{title:"pnpm why",permalink:"/it/6.x/cli/why"},next:{title:"pnpm test",permalink:"/it/6.x/cli/test"}},u={},c=[{value:"Esempi",id:"esempi",level:2},{value:"Dettagli",id:"dettagli",level:2},{value:"Differenze con <code>npm run</code>",id:"differenze-con-npm-run",level:2},{value:"Opzioni",id:"opzioni",level:2},{value:"script-shell",id:"script-shell",level:3},{value:"shell-emulator",id:"shell-emulator",level:3},{value:"--recursive, -r",id:"--recursive--r",level:3},{value:"--if-present",id:"--if-present",level:3},{value:"--parallel",id:"--parallel",level:3},{value:"--stream",id:"--stream",level:3},{value:"--aggregate-output",id:"--aggregate-output",level:3},{value:"enable-pre-post-scripts",id:"enable-pre-post-scripts",level:3},{value:"--filter &lt;selettore_pacchetto&gt;",id:"--filter-selettore_pacchetto",level:3}],m={toc:c};function d(e){var t=e.components,n=(0,r.Z)(e,a);return(0,o.kt)("wrapper",(0,i.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Alias: ",(0,o.kt)("inlineCode",{parentName:"p"},"run-script")),(0,o.kt)("p",null,"Esegue uno script definito nel file manifesto del pacchetto."),(0,o.kt)("h2",{id:"esempi"},"Esempi"),(0,o.kt)("p",null,"Supponiamo che tu abbia uno script ",(0,o.kt)("inlineCode",{parentName:"p"},"watch")," configurato nel tuo ",(0,o.kt)("inlineCode",{parentName:"p"},"package.json"),", in questo modo:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'"scripts": {\n    "watch": "build-command --watch"\n}\n')),(0,o.kt)("p",null,"Ora puoi eseguire questo script usando ",(0,o.kt)("inlineCode",{parentName:"p"},"pnpm run watch"),"! Semplice, vero? Un'altra cosa da notare per coloro a cui piace risparmiare sequenze di tasti e tempo \xe8 che tutti gli script vengono resi alias come comandi pnpm, quindi alla fine ",(0,o.kt)("inlineCode",{parentName:"p"},"pnpm watch")," \xe8 solo abbreviazione per ",(0,o.kt)("inlineCode",{parentName:"p"},"pnpm run watch")," (SOLO per gli script che non condividono lo stesso nome dei comandi pnpm gi\xe0 esistenti)."),(0,o.kt)("h2",{id:"dettagli"},"Dettagli"),(0,o.kt)("p",null,"Oltre alla preesistente ",(0,o.kt)("inlineCode",{parentName:"p"},"PATH")," della shell, ",(0,o.kt)("inlineCode",{parentName:"p"},"pnpm run")," include ",(0,o.kt)("inlineCode",{parentName:"p"},"node_modules/.bin")," nel ",(0,o.kt)("inlineCode",{parentName:"p"},"PATH")," fornito a ",(0,o.kt)("inlineCode",{parentName:"p"},"scripts"),". Ci\xf2 significa che finch\xe9 hai installato un pacchetto, puoi usarlo in uno script come un normale comando. Ad esempio, se hai installato ",(0,o.kt)("inlineCode",{parentName:"p"},"eslint"),", puoi scrivere uno script in questo modo:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'"lint": "eslint src --fix"\n')),(0,o.kt)("p",null,"E anche se ",(0,o.kt)("inlineCode",{parentName:"p"},"eslint")," non \xe8 installato globalmente nella tua shell, verr\xe0 eseguito."),(0,o.kt)("p",null,"Per gli spazi di lavoro, a partire dalla v3.5, ",(0,o.kt)("inlineCode",{parentName:"p"},"<workspace root>/node_modules/.bin")," viene aggiunto anche al ",(0,o.kt)("inlineCode",{parentName:"p"},"PATH"),", quindi se uno strumento \xe8 installato nella radice dello spazio di lavoro, pu\xf2 essere chiamato negli ",(0,o.kt)("inlineCode",{parentName:"p"},"script")," di qualsiasi pacchetto di spazio di lavoro."),(0,o.kt)("h2",{id:"differenze-con-npm-run"},"Differenze con ",(0,o.kt)("inlineCode",{parentName:"h2"},"npm run")),(0,o.kt)("p",null,"Per impostazione predefinita, pnpm non esegue gli hook arbitrari ",(0,o.kt)("inlineCode",{parentName:"p"},"pre")," e ",(0,o.kt)("inlineCode",{parentName:"p"},"post")," per gli script definiti dall'utente (come ad esempio ",(0,o.kt)("inlineCode",{parentName:"p"},"prestart"),"). Questo comportamento, ereditato da npm, ha fatto s\xec che gli script siano impliciti invece che espliciti, nascondendo il flusso di esecuzione. Ha anche portato a sorprendenti esecuzioni con ",(0,o.kt)("inlineCode",{parentName:"p"},"pnpm serve")," che eseguiva anche ",(0,o.kt)("inlineCode",{parentName:"p"},"pnpm preserve"),"."),(0,o.kt)("p",null,"Se per qualche motivo necessiti del comportamento degli script pre/post di npm, usa l'opzione ",(0,o.kt)("inlineCode",{parentName:"p"},"enable-pre-post-scripts"),"."),(0,o.kt)("h2",{id:"opzioni"},"Opzioni"),(0,o.kt)("h3",{id:"script-shell"},"script-shell"),(0,o.kt)("p",null,"Aggiunto nella versione: v5.10.0"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Predefinito: ",(0,o.kt)("strong",{parentName:"li"},"null")),(0,o.kt)("li",{parentName:"ul"},"Tipo: ",(0,o.kt)("strong",{parentName:"li"},"percorso"))),(0,o.kt)("p",null,"La shell da usare per gli script eseguiti con il comando ",(0,o.kt)("inlineCode",{parentName:"p"},"pnpm run"),"."),(0,o.kt)("p",null,"Ad esempio, per forzare l'utilizzo di Git Bash su Windows:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'pnpm config set script-shell "C:\\\\Program Files\\\\git\\\\bin\\\\bash.exe"\n')),(0,o.kt)("h3",{id:"shell-emulator"},"shell-emulator"),(0,o.kt)("p",null,"Aggiunto nella versione: v5.8.0"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Predefinito: ",(0,o.kt)("strong",{parentName:"li"},"false")),(0,o.kt)("li",{parentName:"ul"},"Tipo: ",(0,o.kt)("strong",{parentName:"li"},"Booleano"))),(0,o.kt)("p",null,"Quando ",(0,o.kt)("inlineCode",{parentName:"p"},"true"),", pnpm utilizzer\xe0 un'implementazione JavaScript di ",(0,o.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/@yarnpkg/shell"},"shell simili a bash")," per eseguire gli script."),(0,o.kt)("p",null,"Questa opzione semplifica lo scripting multipiattaforma. Ad esempio, per impostazione predefinita, lo script successivo avr\xe0 esito negativo sui sistemi non conformi a POSIX:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'"scripts": {\n  "test": "NODE_ENV=test node test.js"\n}\n')),(0,o.kt)("p",null,"Ma se l'opzione ",(0,o.kt)("inlineCode",{parentName:"p"},"shell-emulator")," \xe8 impostata a ",(0,o.kt)("inlineCode",{parentName:"p"},"true"),", funzioner\xe0 su tutte le piattaforme."),(0,o.kt)("h3",{id:"--recursive--r"},"--recursive, -r"),(0,o.kt)("p",null,'Questo esegue un comando arbitrario dall\'oggetto "script" di ogni pacchetto. Se un pacchetto non ha il comando, viene saltato. Se nessuno dei pacchetti ha il comando, il comando fallisce.'),(0,o.kt)("h3",{id:"--if-present"},"--if-present"),(0,o.kt)("p",null,"Aggiunto nella versione: v4.5.0"),(0,o.kt)("p",null,"Puoi usare il flag ",(0,o.kt)("inlineCode",{parentName:"p"},"--if-present")," per evitare di uscire con un codice di uscita diverso da zero quando lo script non \xe8 definito. Questo consente di eseguire script potenzialmente indefiniti senza interrompere la catena di esecuzione."),(0,o.kt)("h3",{id:"--parallel"},"--parallel"),(0,o.kt)("p",null,"Aggiunto nella versione: v5.1.0"),(0,o.kt)("p",null,"Ignora completamente la convaluta e l'ordinamento topologico, eseguendo un dato script immediatamente in tutti i pacchetti corrispondenti con output di streaming prefissato. Questo \xe8 il flag preferito per i processi a lungo termine su molti pacchetti, per esempio, un lungo processo di compilazione."),(0,o.kt)("h3",{id:"--stream"},"--stream"),(0,o.kt)("p",null,"Aggiunto nella versione: v5.1.0"),(0,o.kt)("p",null,"Trasmetti immediatamente l'output dai processi figlio, con il prefisso della cartella del pacchetto di origine. Questo permette di interporre l'output di pacchetti diversi."),(0,o.kt)("h3",{id:"--aggregate-output"},"--aggregate-output"),(0,o.kt)("p",null,"Aggiunto nella versione: v6.24.0"),(0,o.kt)("p",null,"Aggrega l'output dai processi figlio eseguiti in parallelo e stampa l'output solo quando il processo figlio \xe8 terminato. Rende molto pi\xf9 semplice la lettura di registri di grandi dimensioni dopo aver eseguito ",(0,o.kt)("inlineCode",{parentName:"p"},"pnpm -r <command>")," con ",(0,o.kt)("inlineCode",{parentName:"p"},"--parallel")," o con ",(0,o.kt)("inlineCode",{parentName:"p"},"--workspace-concurrency=<number>")," (specialmente su CI). Solo ",(0,o.kt)("inlineCode",{parentName:"p"},"--reporter=append-only")," \xe8 supportato."),(0,o.kt)("h3",{id:"enable-pre-post-scripts"},"enable-pre-post-scripts"),(0,o.kt)("p",null,"Aggiunto nella versione: v6.1.0"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Predefinito: ",(0,o.kt)("strong",{parentName:"li"},"false")),(0,o.kt)("li",{parentName:"ul"},"Tipo: ",(0,o.kt)("strong",{parentName:"li"},"Booleano"))),(0,o.kt)("p",null,"Quando ",(0,o.kt)("inlineCode",{parentName:"p"},"true"),", pnpm eseguir\xe0 automaticamente tutti gli script pre/post. Quindi l'esecuzione di ",(0,o.kt)("inlineCode",{parentName:"p"},"pnpm foo")," sar\xe0 come eseguire ",(0,o.kt)("inlineCode",{parentName:"p"},"pnpm prefoo && pnpm foo && pnpm postfoo"),"."),(0,o.kt)("h3",{id:"--filter-selettore_pacchetto"},"--filter ","<","selettore_pacchetto",">"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/it/6.x/filtering"},"Ulteriori informazioni sui filtri.")))}d.isMDXComponent=!0}}]);