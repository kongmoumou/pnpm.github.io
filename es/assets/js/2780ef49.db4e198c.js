"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7468],{9613:(e,t,r)=>{r.d(t,{Zo:()=>m,kt:()=>f});var n=r(9496);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):p(p({},t),e)),r},m=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},s=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,m=a(e,["components","mdxType","originalType","parentName"]),s=c(r),f=o,d=s["".concat(l,".").concat(f)]||s[f]||u[f]||i;return r?n.createElement(d,p(p({ref:t},m),{},{components:r})):n.createElement(d,p({ref:t},m))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,p=new Array(i);p[0]=s;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a.mdxType="string"==typeof e?e:o,p[1]=a;for(var c=2;c<i;c++)p[c]=r[c];return n.createElement.apply(null,p)}return n.createElement.apply(null,r)}s.displayName="MDXCreateElement"},8707:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>m,contentTitle:()=>l,default:()=>f,frontMatter:()=>a,metadata:()=>c,toc:()=>u});var n=r(2848),o=r(9213),i=(r(9496),r(9613)),p=["components"],a={id:"import",title:"pnpm import"},l=void 0,c={unversionedId:"cli/import",id:"cli/import",title:"pnpm import",description:"pnpm import generates a pnpm-lock.yaml from another package manager's lockfile. Supported source files:",source:"@site/i18n/es/docusaurus-plugin-content-docs/current/cli/import.md",sourceDirName:"cli",slug:"/cli/import",permalink:"/es/next/cli/import",draft:!1,editUrl:"https://crowdin.com/project/pnpm/es-ES",tags:[],version:"current",frontMatter:{id:"import",title:"pnpm import"},sidebar:"docs",previous:{title:"pnpm unlink",permalink:"/es/next/cli/unlink"},next:{title:"pnpm rebuild",permalink:"/es/next/cli/rebuild"}},m={},u=[],s={toc:u};function f(e){var t=e.components,r=(0,o.Z)(e,p);return(0,i.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"pnpm import")," generates a ",(0,i.kt)("inlineCode",{parentName:"p"},"pnpm-lock.yaml")," from another package manager's lockfile. Supported source files:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"package-lock.json")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"npm-shrinkwrap.json")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"yarn.lock"))),(0,i.kt)("p",null,"Note that if you have workspaces you wish to import dependencies for, they will need to be declared in a ",(0,i.kt)("a",{parentName:"p",href:"/es/next/pnpm-workspace_yaml"},"pnpm-workspace.yaml")," file beforehand."))}f.isMDXComponent=!0}}]);