"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6343],{9613:(e,a,n)=>{n.d(a,{Zo:()=>m,kt:()=>d});var r=n(9496);function t(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function l(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);a&&(r=r.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?l(Object(n),!0).forEach((function(a){t(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function o(e,a){if(null==e)return{};var n,r,t=function(e,a){if(null==e)return{};var n,r,t={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],a.indexOf(n)>=0||(t[n]=e[n]);return t}(e,a);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(t[n]=e[n])}return t}var p=r.createContext({}),u=function(e){var a=r.useContext(p),n=a;return e&&(n="function"==typeof e?e(a):i(i({},a),e)),n},m=function(e){var a=u(e.components);return r.createElement(p.Provider,{value:a},e.children)},k={inlineCode:"code",wrapper:function(e){var a=e.children;return r.createElement(r.Fragment,{},a)}},s=r.forwardRef((function(e,a){var n=e.components,t=e.mdxType,l=e.originalType,p=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),s=u(n),d=t,c=s["".concat(p,".").concat(d)]||s[d]||k[d]||l;return n?r.createElement(c,i(i({ref:a},m),{},{components:n})):r.createElement(c,i({ref:a},m))}));function d(e,a){var n=arguments,t=a&&a.mdxType;if("string"==typeof e||t){var l=n.length,i=new Array(l);i[0]=s;var o={};for(var p in a)hasOwnProperty.call(a,p)&&(o[p]=a[p]);o.originalType=e,o.mdxType="string"==typeof e?e:t,i[1]=o;for(var u=2;u<l;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},369:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>m,contentTitle:()=>p,default:()=>d,frontMatter:()=>o,metadata:()=>u,toc:()=>k});var r=n(2848),t=n(9213),l=(n(9496),n(9613)),i=["components"],o={title:"pnpm ile Node Modules yap\u0131land\u0131rma se\xe7enekleri",author:"Zoltan Kochan",authorURL:"http://twitter.com/zoltankochan",authorImageURL:"https://gravatar.com/avatar/1f59f040fb37d5799e3879fa678c2373?s=48"},p=void 0,u={permalink:"/tr/blog/2020/10/17/node-modules-configuration-options-with-pnpm",editUrl:"https://crowdin.com/project/pnpm/tr",source:"@site/i18n/tr/docusaurus-plugin-content-blog/2020-10-17-node-modules-configuration-options-with-pnpm.md",title:"pnpm ile Node Modules yap\u0131land\u0131rma se\xe7enekleri",description:"nodemodules dizini olu\u015fturman\u0131n bir\xe7ok yolu vard\u0131r. Amac\u0131n\u0131z en kurall\u0131 olan\u0131 olu\u015fturmak olmal\u0131d\u0131r, ancak bu m\xfcmk\xfcn de\u011filse, serbest bir nodemodules yapmak i\xe7in se\xe7enekler de vard\u0131r.",date:"2020-10-17T00:00:00.000Z",formattedDate:"17 Ekim 2020",tags:[],readingTime:1.435,truncated:!0,authors:[{name:"Zoltan Kochan",url:"http://twitter.com/zoltankochan",imageURL:"https://gravatar.com/avatar/1f59f040fb37d5799e3879fa678c2373?s=48"}],frontMatter:{title:"pnpm ile Node Modules yap\u0131land\u0131rma se\xe7enekleri",author:"Zoltan Kochan",authorURL:"http://twitter.com/zoltankochan",authorImageURL:"https://gravatar.com/avatar/1f59f040fb37d5799e3879fa678c2373?s=48"},prevItem:{title:"pnpm g\xf6z\xfcnden 2021 y\u0131l\u0131",permalink:"/tr/blog/2021/12/29/yearly-update"},nextItem:{title:"Klasik node_modules yap\u0131s\u0131 art\u0131k tek y\xf6ntem de\u011fil",permalink:"/tr/blog/2020/05/27/flat-node-modules-is-not-the-only-way"}},m={authorsImageUrls:[void 0]},k=[{value:"Varsay\u0131lan kurulum",id:"varsay\u0131lan-kurulum",level:2},{value:"Tak-\xc7al\u0131\u015ft\u0131r. En kurall\u0131 yap\u0131land\u0131rma",id:"tak-\xe7al\u0131\u015ft\u0131r-en-kurall\u0131-yap\u0131land\u0131rma",level:2},{value:"Kurall\u0131, geleneksel mod\xfcl dizini",id:"kurall\u0131-geleneksel-mod\xfcl-dizini",level:2},{value:"En k\xf6t\xfc ihtimalle - root&#39;u yukar\u0131 \xe7ekme",id:"en-k\xf6t\xfc-ihtimalle---rootu-yukar\u0131-\xe7ekme",level:2}],s={toc:k};function d(e){var a=e.components,n=(0,t.Z)(e,i);return(0,l.kt)("wrapper",(0,r.Z)({},s,n,{components:a,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"node_modules dizini olu\u015fturman\u0131n bir\xe7ok yolu vard\u0131r. Amac\u0131n\u0131z en kurall\u0131 olan\u0131 olu\u015fturmak olmal\u0131d\u0131r, ancak bu m\xfcmk\xfcn de\u011filse, serbest bir node_modules yapmak i\xe7in se\xe7enekler de vard\u0131r."),(0,l.kt)("h2",{id:"varsay\u0131lan-kurulum"},"Varsay\u0131lan kurulum"),(0,l.kt)("p",null,"Varsay\u0131lan olarak pnpm v5, yar\u0131 kurall\u0131 bir node_modules olu\u015fturur. Yar\u0131 kurall\u0131 (birka\xe7 istisna d\u0131\u015f\u0131nda) ba\u011f\u0131ml\u0131l\u0131k olarak ",(0,l.kt)("inlineCode",{parentName:"p"},"package.json"),"'a eklenen paketleri gerektirebilece\u011fi anlam\u0131na gelir. Buna ra\u011fmen, ba\u011f\u0131ml\u0131l\u0131klar\u0131n\u0131z herhangi bir pakete eri\u015febilir olacakt\u0131r."),(0,l.kt)("p",null,"Varsay\u0131lan yap\u0131land\u0131rma \u015f\xf6yle g\xf6r\xfcn\xfcr:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ini"},"; T\xfcm paketler, node_modules/.pnpm/node_modules'a \xe7\u0131kar\u0131l\u0131r\nhoist-pattern[]=*\n\n; TypeScript'e uyumlanmak i\xe7in t\xfcm type'lar root'a \xe7\u0131kar\u0131l\u0131r\npublic-hoist-pattern[]=*types*\n\n; ESLint ile ilgili t\xfcm paketler de root'a \xe7\u0131kar\u0131l\u0131r\npublic-hoist-pattern[]=*eslint*\n")),(0,l.kt)("h2",{id:"tak-\xe7al\u0131\u015ft\u0131r-en-kurall\u0131-yap\u0131land\u0131rma"},"Tak-\xc7al\u0131\u015ft\u0131r. En kurall\u0131 yap\u0131land\u0131rma"),(0,l.kt)("p",null,"pnpm, v5.9 'dan bu yana ",(0,l.kt)("a",{parentName:"p",href:"https://yarnpkg.com/features/pnp"},"Yarn'\u0131n Plug'n'Play")," 'ini destekler. PnP ile hem uygulaman\u0131z hem de uygulaman\u0131z\u0131n ba\u011f\u0131ml\u0131l\u0131klar\u0131 yaln\u0131zca belirtilen ba\u011f\u0131ml\u0131l\u0131klara eri\u015febilecektir. This is even stricter then setting ",(0,l.kt)("inlineCode",{parentName:"p"},"hoist=false")," because inside a monorepo, your application will not be able to access even the dependencies of the root project."),(0,l.kt)("p",null,"Plug'n'Play'i kullanmak i\xe7in \u015fu ayarlar\u0131 yap\u0131n:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ini"},"node-linker=pnp\nsymlink=false\n")),(0,l.kt)("h2",{id:"kurall\u0131-geleneksel-mod\xfcl-dizini"},"Kurall\u0131, geleneksel mod\xfcl dizini"),(0,l.kt)("p",null,"PnP'yi kullanmaya hen\xfcz haz\u0131r de\u011filseniz bile, hala kurall\u0131 olabilir ve \xe7ekme (hoist) yap\u0131land\u0131rmas\u0131n\u0131 false olarak ayarlayarak paketlerin yaln\u0131zca kendi ba\u011f\u0131ml\u0131l\u0131klar\u0131na eri\u015fmesine izin verebilirsiniz:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ini"},"hoist=false\n")),(0,l.kt)("p",null,"Ancak, ba\u011f\u0131ml\u0131l\u0131klar\u0131n\u0131z\u0131n baz\u0131lar\u0131 ba\u011f\u0131ml\u0131l\u0131klar\u0131 olmayan paketlere eri\u015fmeye \xe7al\u0131\u015f\u0131yorsa, iki se\xe7ene\u011finiz vard\u0131r:"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Paketteki manifestoya eksik ba\u011f\u0131ml\u0131l\u0131\u011f\u0131 eklemek i\xe7in ",(0,l.kt)("inlineCode",{parentName:"p"},"pnpmfile.js")," olu\u015fturun ve ",(0,l.kt)("a",{parentName:"p",href:"/pnpmfile"},"hook")," kullan\u0131n.")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"hoist-pattern")," ayar\u0131na bir kal\u0131p ekleyin. \xd6rne\u011fin, bulunamayan mod\xfcl ",(0,l.kt)("inlineCode",{parentName:"p"},"babel-core")," ise, a\u015fa\u011f\u0131daki ayar\u0131 ",(0,l.kt)("inlineCode",{parentName:"p"},".npmrc"),"'ye ekleyin:"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-ini"},"hoist-pattern[]=babel-core\n")))),(0,l.kt)("h2",{id:"en-k\xf6t\xfc-ihtimalle---rootu-yukar\u0131-\xe7ekme"},"En k\xf6t\xfc ihtimalle - root'u yukar\u0131 \xe7ekme"),(0,l.kt)("p",null,"Baz\u0131 ara\xe7lar, her \u015feyi sanal kay\u0131t alan\u0131 (virtual store) 'n\u0131n root'una ve baz\u0131s\u0131n\u0131 da direkt root'a ta\u015f\u0131yan varsay\u0131lan pnpm yap\u0131land\u0131rmas\u0131yla bile \xe7al\u0131\u015fmayabilir. Bu durumda, her \u015feyi ya da bir ba\u011f\u0131ml\u0131l\u0131k alt k\xfcmesini, modules dizininin root'una \xe7ekebilirsiniz."),(0,l.kt)("p",null,"Hoisting everything to the root of node_modules:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ini"},"shamefully-hoist=true\n")),(0,l.kt)("p",null,"Yaln\u0131zca bir kal\u0131pla e\u015fle\u015fen paketleri yukar\u0131 \xe7ekin:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ini"},"public-hoist-pattern[]=babel-*\n")))}d.isMDXComponent=!0}}]);