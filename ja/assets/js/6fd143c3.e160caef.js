"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7021],{9613:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>s});var r=n(9496);function p(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){p(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,p=function(e,t){if(null==e)return{};var n,r,p={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(p[n]=e[n]);return p}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(p[n]=e[n])}return p}var o=r.createContext({}),m=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=m(e.components);return r.createElement(o.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,p=e.mdxType,a=e.originalType,o=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=m(n),s=p,k=u["".concat(o,".").concat(s)]||u[s]||d[s]||a;return n?r.createElement(k,l(l({ref:t},c),{},{components:n})):r.createElement(k,l({ref:t},c))}));function s(e,t){var n=arguments,p=t&&t.mdxType;if("string"==typeof e||p){var a=n.length,l=new Array(a);l[0]=u;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i.mdxType="string"==typeof e?e:p,l[1]=i;for(var m=2;m<a;m++)l[m]=n[m];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},8147:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>s,frontMatter:()=>i,metadata:()=>m,toc:()=>d});var r=n(2848),p=n(9213),a=(n(9496),n(9613)),l=["components"],i={id:"pnpm-cli",title:"pnpm CLI"},o=void 0,m={unversionedId:"pnpm-cli",id:"version-6.x/pnpm-cli",title:"pnpm CLI",description:"npm \u3068\u306e\u9055\u3044",source:"@site/i18n/ja/docusaurus-plugin-content-docs/version-6.x/pnpm-cli.md",sourceDirName:".",slug:"/pnpm-cli",permalink:"/ja/6.x/pnpm-cli",draft:!1,editUrl:"https://crowdin.com/project/pnpm/ja",tags:[],version:"6.x",frontMatter:{id:"pnpm-cli",title:"pnpm CLI"},sidebar:"version-6.x/docs",previous:{title:"\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb",permalink:"/ja/6.x/installation"},next:{title:"pnpx CLI",permalink:"/ja/6.x/pnpx-cli"}},c={},d=[{value:"npm \u3068\u306e\u9055\u3044",id:"npm-\u3068\u306e\u9055\u3044",level:2},{value:"Options",id:"options",level:2},{value:"-C &lt;path&gt;, --dir &lt;path&gt;",id:"-c-path---dir-path",level:3},{value:"-w, --workspace-root",id:"-w---workspace-root",level:3},{value:"\u30b3\u30de\u30f3\u30c9",id:"\u30b3\u30de\u30f3\u30c9",level:2}],u={toc:d};function s(e){var t=e.components,n=(0,p.Z)(e,l);return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"npm-\u3068\u306e\u9055\u3044"},"npm \u3068\u306e\u9055\u3044"),(0,a.kt)("p",null,"npm \u3068\u306f\u7570\u306a\u308a\u3001pnpm \u306f\u3059\u3079\u3066\u306e\u30aa\u30d7\u30b7\u30e7\u30f3\u3092\u691c\u8a3c\u3057\u307e\u3059\u3002 \u4f8b\u3048\u3070\u3001 ",(0,a.kt)("inlineCode",{parentName:"p"},"pnpm install --foo")," \u306f ",(0,a.kt)("inlineCode",{parentName:"p"},"--foo")," \u304c\u4e0d\u6b63\u306a\u30aa\u30d7\u30b7\u30e7\u30f3\u3067\u3042\u308b\u305f\u3081\u3001 ",(0,a.kt)("inlineCode",{parentName:"p"},"pnpm install")," \u306f\u5931\u6557\u3057\u307e\u3059\u3002"),(0,a.kt)("p",null,"\u305f\u3060\u3057\u3001\u4e00\u90e8\u306e\u4f9d\u5b58\u30d1\u30c3\u30b1\u30fc\u30b8\u306f\u3001CLI \u306e\u30aa\u30d7\u30b7\u30e7\u30f3\u304b\u3089\u8a2d\u5b9a\u3055\u308c\u308b ",(0,a.kt)("inlineCode",{parentName:"p"},"npm_config_")," \u74b0\u5883\u5909\u6570\u3092\u4f7f\u7528\u3059\u308b\u3053\u3068\u304c\u3042\u308a\u307e\u3059\u3002 \u3053\u306e\u5834\u5408\u3001\u6b21\u306e\u9078\u629e\u80a2\u304c\u3042\u308a\u307e\u3059\u3002"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u660e\u793a\u7684\u306b\u74b0\u5883\u5909\u6570\u3092\u8a2d\u5b9a: ",(0,a.kt)("inlineCode",{parentName:"li"},"npm_config_foo=true pnpm install")),(0,a.kt)("li",{parentName:"ol"},"\u4e0d\u660e\u306a\u30aa\u30d7\u30b7\u30e7\u30f3\u3092 ",(0,a.kt)("inlineCode",{parentName:"li"},"config")," \u3067\u5f37\u5236: ",(0,a.kt)("inlineCode",{parentName:"li"},"pnpm install --config.target_arch=x64"))),(0,a.kt)("h2",{id:"options"},"Options"),(0,a.kt)("h3",{id:"-c-path---dir-path"},"-C ","<","path",">",", --dir ","<","path",">"),(0,a.kt)("p",null,"\u73fe\u5728\u306e\u4f5c\u696d\u30c7\u30a3\u30ec\u30af\u30c8\u30ea\u306e\u4ee3\u308f\u308a\u306b ",(0,a.kt)("inlineCode",{parentName:"p"},"<path>")," \u3067pnpm \u304c\u8d77\u52d5\u3055\u308c\u305f\u304b\u306e\u3088\u3046\u306b\u5b9f\u884c\u3057\u307e\u3059\u3002"),(0,a.kt)("h3",{id:"-w---workspace-root"},"-w, --workspace-root"),(0,a.kt)("p",null,"\u8ffd\u52a0\u3055\u308c\u305f\u30d0\u30fc\u30b8\u30e7\u30f3 : v5.6.0"),(0,a.kt)("p",null,"\u73fe\u5728\u306e\u4f5c\u696d\u30c7\u30a3\u30ec\u30af\u30c8\u30ea\u3067\u306f\u306a\u304f ",(0,a.kt)("a",{parentName:"p",href:"https://pnpm.io/workspaces"},"workspace")," \u306e\u30eb\u30fc\u30c8\u30c7\u30a3\u30ec\u30af\u30c8\u30ea\u304b\u3089\u8d77\u52d5\u3055\u308c\u305f\u304b\u306e\u3088\u3046\u306b pnpm \u3092\u5b9f\u884c\u3057\u307e\u3059\u3002"),(0,a.kt)("h2",{id:"\u30b3\u30de\u30f3\u30c9"},"\u30b3\u30de\u30f3\u30c9"),(0,a.kt)("p",null,"\u8a73\u7d30\u306b\u3064\u3044\u3066\u306f\u3001\u500b\u5225\u306e CLI \u30b3\u30de\u30f3\u30c9\u306e\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8\u3092\u53c2\u7167\u3057\u3066\u304f\u3060\u3055\u3044\u3002 \u4ee5\u4e0b\u306f\u3001\u7c21\u5358\u306a npm \u3068\u306e\u5bfe\u5fdc\u8868\u3067\u3059\u3002"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"npm \u306e\u30b3\u30de\u30f3\u30c9"),(0,a.kt)("th",{parentName:"tr",align:null},"pnpm \u3067\u540c\u7b49\u306e\u30b3\u30de\u30f3\u30c9"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"npm install")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"/ja/6.x/cli/install"},(0,a.kt)("inlineCode",{parentName:"a"},"pnpm install")))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"npm i <pkg>")),(0,a.kt)("td",{parentName:"tr",align:null},"[",(0,a.kt)("inlineCode",{parentName:"td"},"pnpm add <pkg>"),"]")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"npm run <cmd>")),(0,a.kt)("td",{parentName:"tr",align:null},"[",(0,a.kt)("inlineCode",{parentName:"td"},"pnpm <cmd>"),"]")))),(0,a.kt)("p",null,"\u672a\u77e5\u306e\u30b3\u30de\u30f3\u30c9\u304c\u4f7f\u7528\u3055\u308c\u308b\u3068\u3001pnpm \u306f\u6307\u5b9a\u3055\u308c\u305f\u30b3\u30de\u30f3\u30c9\u3068\u540c\u3058\u540d\u524d\u3092\u6301\u3064\u30b9\u30af\u30ea\u30d7\u30c8\u3092\u691c\u7d22\u3057\u307e\u3059\u3002\u4f8b\u3048\u3070\u3001 ",(0,a.kt)("inlineCode",{parentName:"p"},"pnpm run lint")," \u306f ",(0,a.kt)("inlineCode",{parentName:"p"},"pnpm lint")," \u3068\u540c\u3058\u3067\u3059\u3002 \u6307\u5b9a\u3055\u308c\u305f\u540d\u524d\u306e\u30b9\u30af\u30ea\u30d7\u30c8\u304c\u306a\u3044\u5834\u5408\u3001 pnpm \u306f\u30b7\u30a7\u30eb\u30b9\u30af\u30ea\u30d7\u30c8\u3068\u3057\u3066\u30b3\u30de\u30f3\u30c9\u3092\u5b9f\u884c\u3057\u307e\u3059\u3002 \u3053\u308c\u306b\u3088\u308a\u3001",(0,a.kt)("inlineCode",{parentName:"p"},"pnpm eslint"),"\u306e\u3088\u3046\u306b\u5b9f\u884c\u3067\u304d\u307e\u3059\u3002 (",(0,a.kt)("a",{parentName:"p",href:"/ja/6.x/cli/exec"},"pnpm exec")," \u3092\u53c2\u7167\u3057\u3066\u304f\u3060\u3055\u3044\u3002)"))}s.isMDXComponent=!0}}]);