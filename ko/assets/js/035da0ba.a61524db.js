"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2939],{9613:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>d});var r=t(9496);function p(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){p(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function a(e,n){if(null==e)return{};var t,r,p=function(e,n){if(null==e)return{};var t,r,p={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(p[t]=e[t]);return p}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(p[t]=e[t])}return p}var i=r.createContext({}),s=function(e){var n=r.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},c=function(e){var n=s(e.components);return r.createElement(i.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,p=e.mdxType,o=e.originalType,i=e.parentName,c=a(e,["components","mdxType","originalType","parentName"]),u=s(t),d=p,f=u["".concat(i,".").concat(d)]||u[d]||m[d]||o;return t?r.createElement(f,l(l({ref:n},c),{},{components:t})):r.createElement(f,l({ref:n},c))}));function d(e,n){var t=arguments,p=n&&n.mdxType;if("string"==typeof e||p){var o=t.length,l=new Array(o);l[0]=u;var a={};for(var i in n)hasOwnProperty.call(n,i)&&(a[i]=n[i]);a.originalType=e,a.mdxType="string"==typeof e?e:p,l[1]=a;for(var s=2;s<o;s++)l[s]=t[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},2438:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>m});var r=t(2848),p=t(9213),o=(t(9496),t(9613)),l=["components"],a={id:"uninstall",title:"pnpm \uc0ad\uc81c"},i=void 0,s={unversionedId:"uninstall",id:"version-6.x/uninstall",title:"pnpm \uc0ad\uc81c",description:"\uc804\uc5ed\uc73c\ub85c \uc124\uce58\ub41c \ud328\ud0a4\uc9c0 \uc0ad\uc81c",source:"@site/i18n/ko/docusaurus-plugin-content-docs/version-6.x/uninstall.md",sourceDirName:".",slug:"/uninstall",permalink:"/ko/6.x/uninstall",draft:!1,editUrl:"https://crowdin.com/project/pnpm/ko",tags:[],version:"6.x",frontMatter:{id:"uninstall",title:"pnpm \uc0ad\uc81c"},sidebar:"version-6.x/docs",previous:{title:"\ud53c\uc5b4\uac00 \ud574\uacb0\ub418\ub294 \ubc29\ubc95",permalink:"/ko/6.x/how-peers-are-resolved"},next:{title:"pnpm vs npm",permalink:"/ko/6.x/pnpm-vs-npm"}},c={},m=[{value:"\uc804\uc5ed\uc73c\ub85c \uc124\uce58\ub41c \ud328\ud0a4\uc9c0 \uc0ad\uc81c",id:"\uc804\uc5ed\uc73c\ub85c-\uc124\uce58\ub41c-\ud328\ud0a4\uc9c0-\uc0ad\uc81c",level:2},{value:"pnpm CLI \uc0ad\uc81c",id:"pnpm-cli-\uc0ad\uc81c",level:2},{value:"\uc804\uc5ed content-addressable store \uc0ad\uc81c",id:"\uc804\uc5ed-content-addressable-store-\uc0ad\uc81c",level:2},{value:"state \ud30c\uc77c \uc0ad\uc81c",id:"state-\ud30c\uc77c-\uc0ad\uc81c",level:2}],u={toc:m};function d(e){var n=e.components,t=(0,p.Z)(e,l);return(0,o.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"\uc804\uc5ed\uc73c\ub85c-\uc124\uce58\ub41c-\ud328\ud0a4\uc9c0-\uc0ad\uc81c"},"\uc804\uc5ed\uc73c\ub85c \uc124\uce58\ub41c \ud328\ud0a4\uc9c0 \uc0ad\uc81c"),(0,o.kt)("p",null,"pnpm CLI\ub97c \uc0ad\uc81c\ud558\uae30 \uc804\uc5d0, pnpm\uc744 \ud1b5\ud574 \uc804\uc5ed\uc73c\ub85c \uc124\uce58\ub41c \ud328\ud0a4\uc9c0\ub4e4\uc744 \uc0ad\uc81c\ud558\ub294 \uac83\uc774 \uc88b\uc2b5\ub2c8\ub2e4."),(0,o.kt)("p",null,"\uc804\uc5ed\uc73c\ub85c \uc124\uce58 \ub41c \ud328\ud0a4\uc9c0 \ubaa9\ub85d\uc744 \ud655\uc778 \ud558\uae30 \uc704\ud574\uc11c ",(0,o.kt)("inlineCode",{parentName:"p"},"pnpm ls -g"),"\ub97c \uc2e4\ud589\ud569\ub2c8\ub2e4. \uc804\uc5ed \ud328\ud0a4\uc9c0\ub97c \uc0ad\uc81c\ud558\ub294 \ubc29\ubc95\uc740 \ub2e4\uc74c \ub450 \uac00\uc9c0\uac00 \uc788\uc2b5\ub2c8\ub2e4:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"\uac01 \ud328\ud0a4\uc9c0\ub9c8\ub2e4 ",(0,o.kt)("inlineCode",{parentName:"li"},"pnpm rm -g <pkg>..."),"\ub97c \uc2e4\ud589\ud569\ub2c8\ub2e4."),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"pnpm root -g"),"\ub97c \uc2e4\ud589\ud558\uc5ec \uc804\uc5ed \ub514\ub809\ud1a0\ub9ac\uc758 \uc704\uce58\ub97c \ucc3e\uace0, \uc9c1\uc811 \uc0ad\uc81c\ud569\ub2c8\ub2e4.")),(0,o.kt)("h2",{id:"pnpm-cli-\uc0ad\uc81c"},"pnpm CLI \uc0ad\uc81c"),(0,o.kt)("p",null,"standalone script \ub610\ub294 npx\ub97c \ud1b5\ud574 pnpm\uc744 \uc124\uce58\ud588\ub2e4\uba74 \ub2e4\uc74c \uba85\ub839\uc744 \ud1b5\ud574 pnpm CLI\ub97c \uc0ad\uc81c\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"pnpm rm -g pnpm\n")),(0,o.kt)("p",null,"\uc258 \uc124\uc815\ud30c\uc77c (",(0,o.kt)("inlineCode",{parentName:"p"},"$HOME/.bashrc"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"$HOME/.zshrc")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"$HOME/.config/fish/config.fish"),")\uc5d0\uc11c ",(0,o.kt)("inlineCode",{parentName:"p"},"PNPM_HOME")," \ud658\uacbd\ubcc0\uc218\ub97c \uc0ad\uc81c\ud560 \uc218\ub3c4 \uc788\uc2b5\ub2c8\ub2e4."),(0,o.kt)("p",null,"npm\uc744 \ud1b5\ud574 pnpm\uc744 \uc124\uce58\ud588\ub2e4\uba74 \ub2e4\uc74c \uba85\ub839\uc73c\ub85c pnpm\uc744 \uc0ad\uc81c\ud569\ub2c8\ub2e4:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"npm rm -g pnpm\n")),(0,o.kt)("h2",{id:"\uc804\uc5ed-content-addressable-store-\uc0ad\uc81c"},"\uc804\uc5ed content-addressable store \uc0ad\uc81c"),(0,o.kt)("p",null,"\uae30\ubcf8 \ub514\uc2a4\ud06c\uc5d0\uc11c\ub9cc pnpm\uc744 \uc0ac\uc6a9\ud55c \uacbd\uc6b0, home \ub514\ub809\ud1a0\ub9ac\uc5d0 \uc804\uc5ed store\uac00 \uc788\uc2b5\ub2c8\ub2e4. \ub2e4\uc74c\uc758 \uba85\ub839\uc744 \ud1b5\ud574 \uc774\ub97c \uc0ad\uc81c\ud569\ub2c8\ub2e4:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"rm -rf ~/.pnpm-store\n")),(0,o.kt)("p",null,"\uae30\ubcf8\uc774 \uc544\ub2cc \ub514\uc2a4\ud06c\uc5d0\uc11c pnpm\uc744 \uc0ac\uc6a9\ud55c \uacbd\uc6b0, store\ub294 \ud574\ub2f9 \ub514\uc2a4\ud06c\uc758 \ub8e8\ud2b8\uc5d0 \uc788\uc2b5\ub2c8\ub2e4. \uc608\ub97c \ub4e4\uc5b4, \uc708\ub3c4\uc6b0\uc988\uc758 ",(0,o.kt)("inlineCode",{parentName:"p"},"D:")," \ub514\uc2a4\ud06c\uc5d0\uc11c pnpm\uc744 \uc0ac\uc6a9\ud588\ub2e4\uba74, ",(0,o.kt)("inlineCode",{parentName:"p"},"D:\\.pnpm-store"),"\uc5d0\uc11c store\ub97c \uc0ad\uc81c\ud569\ub2c8\ub2e4."),(0,o.kt)("h2",{id:"state-\ud30c\uc77c-\uc0ad\uc81c"},"state \ud30c\uc77c \uc0ad\uc81c"),(0,o.kt)("p",null,"pnpm\uc740 \uc77c\ubd80 state\ub97c ",(0,o.kt)("inlineCode",{parentName:"p"},"~/.pnpm-state.json")," \ud30c\uc77c\uc5d0 \uc800\uc7a5\ud569\ub2c8\ub2e4. \uc774 \ud30c\uc77c\uc744 \uc0ad\uc81c\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."))}d.isMDXComponent=!0}}]);