"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7194],{9613:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var r=n(9496);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var o=r.createContext({}),c=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(o.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,l=e.originalType,o=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),m=c(n),f=i,d=m["".concat(o,".").concat(f)]||m[f]||s[f]||l;return n?r.createElement(d,a(a({ref:t},u),{},{components:n})):r.createElement(d,a({ref:t},u))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var l=n.length,a=new Array(l);a[0]=m;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p.mdxType="string"==typeof e?e:i,a[1]=p;for(var c=2;c<l;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5685:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>o,default:()=>f,frontMatter:()=>p,metadata:()=>c,toc:()=>s});var r=n(2848),i=n(9213),l=(n(9496),n(9613)),a=["components"],p={id:"unlink",title:"pnpm unlink"},o=void 0,c={unversionedId:"cli/unlink",id:"cli/unlink",title:"pnpm unlink",description:"Unlinks a system-wide package (inverse of pnpm link).",source:"@site/i18n/tr/docusaurus-plugin-content-docs/current/cli/unlink.md",sourceDirName:"cli",slug:"/cli/unlink",permalink:"/tr/next/cli/unlink",draft:!1,editUrl:"https://crowdin.com/project/pnpm/tr",tags:[],version:"current",frontMatter:{id:"unlink",title:"pnpm unlink"},sidebar:"docs",previous:{title:"pnpm link",permalink:"/tr/next/cli/link"},next:{title:"pnpm import",permalink:"/tr/next/cli/import"}},u={},s=[{value:"Parametreler",id:"parametreler",level:2},{value:"--recursive, -r",id:"--recursive--r",level:3},{value:"--filter &lt;paket_se\xe7ici&gt;",id:"--filter-paket_se\xe7ici",level:3}],m={toc:s};function f(e){var t=e.components,n=(0,i.Z)(e,a);return(0,l.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Unlinks a system-wide package (inverse of ",(0,l.kt)("a",{parentName:"p",href:"/tr/next/cli/link"},(0,l.kt)("inlineCode",{parentName:"a"},"pnpm link")),")."),(0,l.kt)("p",null,"If called without arguments, all linked dependencies will be unlinked."),(0,l.kt)("p",null,"This is similar to ",(0,l.kt)("inlineCode",{parentName:"p"},"yarn unlink"),", except pnpm re-installs the dependency after removing the external link."),(0,l.kt)("h2",{id:"parametreler"},"Parametreler"),(0,l.kt)("h3",{id:"--recursive--r"},"--recursive, -r"),(0,l.kt)("p",null,"Unlink in every package found in subdirectories or in every workspace package, when executed inside a ",(0,l.kt)("a",{parentName:"p",href:"/tr/next/workspaces"},"workspace"),"."),(0,l.kt)("h3",{id:"--filter-paket_se\xe7ici"},"--filter ","<","paket_se\xe7ici>"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/tr/next/filtering"},"Buradan daha fazla bilgiye ula\u015fabilirsin.")))}f.isMDXComponent=!0}}]);