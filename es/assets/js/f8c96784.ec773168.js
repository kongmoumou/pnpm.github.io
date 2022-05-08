"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6242],{9613:(e,n,r)=>{r.d(n,{Zo:()=>s,kt:()=>f});var t=r(9496);function o(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function a(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function i(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?a(Object(r),!0).forEach((function(n){o(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function c(e,n){if(null==e)return{};var r,t,o=function(e,n){if(null==e)return{};var r,t,o={},a=Object.keys(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||(o[r]=e[r]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=t.createContext({}),l=function(e){var n=t.useContext(p),r=n;return e&&(r="function"==typeof e?e(n):i(i({},n),e)),r},s=function(e){var n=l(e.components);return t.createElement(p.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},m=t.forwardRef((function(e,n){var r=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),m=l(r),f=o,d=m["".concat(p,".").concat(f)]||m[f]||u[f]||a;return r?t.createElement(d,i(i({ref:n},s),{},{components:r})):t.createElement(d,i({ref:n},s))}));function f(e,n){var r=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=m;var c={};for(var p in n)hasOwnProperty.call(n,p)&&(c[p]=n[p]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var l=2;l<a;l++)i[l]=r[l];return t.createElement.apply(null,i)}return t.createElement.apply(null,r)}m.displayName="MDXCreateElement"},1595:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>s,contentTitle:()=>p,default:()=>f,frontMatter:()=>c,metadata:()=>l,toc:()=>u});var t=r(2848),o=r(9213),a=(r(9496),r(9613)),i=["components"],c={id:"configuring",title:"Configuraci\xf3n"},p=void 0,l={unversionedId:"configuring",id:"version-6.x/configuring",title:"Configuraci\xf3n",description:"pnpm usa el formato de configuraci\xf3n de npm. Por lo tanto, debe establecer la configuraci\xf3n la misma manera que lo har\xeda para npm. Por ejemplo,",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-6.x/configuring.md",sourceDirName:".",slug:"/configuring",permalink:"/es/6.x/configuring",draft:!1,editUrl:"https://crowdin.com/project/pnpm/es-ES",tags:[],version:"6.x",frontMatter:{id:"configuring",title:"Configuraci\xf3n"},sidebar:"version-6.x/docs",previous:{title:"pnpx CLI",permalink:"/es/6.x/pnpx-cli"},next:{title:"Filtering",permalink:"/es/6.x/filtering"}},s={},u=[],m={toc:u};function f(e){var n=e.components,r=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,t.Z)({},m,r,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"pnpm usa el ",(0,a.kt)("a",{parentName:"p",href:"https://docs.npmjs.com/misc/config"},"formato de configuraci\xf3n de npm"),". Por lo tanto, debe establecer la configuraci\xf3n la misma manera que lo har\xeda para npm. Por ejemplo,"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"pnpm config set store-dir /path/to/.pnpm-store\n")),(0,a.kt)("p",null,"Si no hay ning\xfan almacenamiento configurado, pnpm crear\xe1 autom\xe1ticamente un almacenamiento en la misma unidad de disco. Si necesitas que pnpm funcione en m\xfaltiples discos duros o sistemas de archivos, por favor lea ",(0,a.kt)("a",{parentName:"p",href:"/es/6.x/faq#does-pnpm-work-across-multiple-hard-drives-or-filesystems"},"preguntas frecuentes"),"."),(0,a.kt)("p",null,"Adem\xe1s, pnpm utiliza la misma configuraci\xf3n que utiliza npm para realizar instalaciones. Si tienes un registro privado y npm est\xe1 configurado para trabajar con \xe9l, pnpm deber\xeda poder autorizar solicitudes tambi\xe9n, sin configuraci\xf3n adicional."),(0,a.kt)("p",null,"Adem\xe1s de esas opciones, pnpm tambi\xe9n le permite usar todos los par\xe1metros que son indicadores (por ejemplo, ",(0,a.kt)("inlineCode",{parentName:"p"},"--filter")," o ",(0,a.kt)("inlineCode",{parentName:"p"},"--workspace-concurrency"),") como opciones:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"workspace-concurrency = 1\nfilter = @my-scope/*\n")),(0,a.kt)("p",null,"Consulte el ",(0,a.kt)("a",{parentName:"p",href:"/es/6.x/cli/config"},"comando ",(0,a.kt)("inlineCode",{parentName:"a"},"config"))," para mas informaci\xf3n."))}f.isMDXComponent=!0}}]);