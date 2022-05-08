"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6805],{9613:(e,n,t)=>{t.d(n,{Zo:()=>m,kt:()=>d});var a=t(9496);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function p(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?p(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):p(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},p=Object.keys(e);for(a=0;a<p.length;a++)t=p[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(a=0;a<p.length;a++)t=p[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=a.createContext({}),s=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},m=function(e){var n=s(e.components);return a.createElement(l.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},u=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,p=e.originalType,l=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),u=s(t),d=r,g=u["".concat(l,".").concat(d)]||u[d]||c[d]||p;return t?a.createElement(g,i(i({ref:n},m),{},{components:t})):a.createElement(g,i({ref:n},m))}));function d(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var p=t.length,i=new Array(p);i[0]=u;var o={};for(var l in n)hasOwnProperty.call(n,l)&&(o[l]=n[l]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var s=2;s<p;s++)i[s]=t[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},3437:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>m,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var a=t(2848),r=t(9213),p=(t(9496),t(9613)),i=["components"],o={id:"continuous-integration",title:"\u6301\u7eed\u96c6\u6210"},l=void 0,s={unversionedId:"continuous-integration",id:"continuous-integration",title:"\u6301\u7eed\u96c6\u6210",description:"pnpm \u53ef\u4ee5\u5f88\u5bb9\u6613\u5730\u7528\u4e8e\u5404\u79cd\u6301\u7eed\u96c6\u6210\u7cfb\u7edf\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/continuous-integration.md",sourceDirName:".",slug:"/continuous-integration",permalink:"/zh/next/continuous-integration",draft:!1,editUrl:"https://crowdin.com/project/pnpm/zh-CN",tags:[],version:"current",frontMatter:{id:"continuous-integration",title:"\u6301\u7eed\u96c6\u6210"},sidebar:"docs",previous:{title:"\u5728 pnpm \u4e2d\u4f7f\u7528 Changesets",permalink:"/zh/next/using-changesets"},next:{title:"\u4f7f\u7528 Git",permalink:"/zh/next/git"}},m={},c=[{value:"Travis",id:"travis",level:2},{value:"Semaphore",id:"semaphore",level:2},{value:"AppVeyor",id:"appveyor",level:2},{value:"GitHub Actions",id:"github-actions",level:2},{value:"Gitlab CI",id:"gitlab-ci",level:2},{value:"Bitbucket Pipelines",id:"bitbucket-pipelines",level:2}],u={toc:c};function d(e){var n=e.components,t=(0,r.Z)(e,i);return(0,p.kt)("wrapper",(0,a.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,p.kt)("p",null,"pnpm \u53ef\u4ee5\u5f88\u5bb9\u6613\u5730\u7528\u4e8e\u5404\u79cd\u6301\u7eed\u96c6\u6210\u7cfb\u7edf\u3002"),(0,p.kt)("h2",{id:"travis"},"Travis"),(0,p.kt)("p",null,"\u5728 ",(0,p.kt)("a",{parentName:"p",href:"https://travis-ci.org"},"Travis CI"),"\uff0c\u8bf7\u5c06\u6b64\u6dfb\u52a0\u5230\u60a8\u7684 ",(0,p.kt)("inlineCode",{parentName:"p"},".travis.yml")," \u6587\u4ef6\u4e2d\uff0c\u4f7f\u7528 pnpm \u6765\u5b89\u88c5\u60a8\u7684\u4f9d\u8d56\u9879\uff1a"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title=".travis.yml"',title:'".travis.yml"'},'cache:\n  npm: false\n  directories:\n    - "~/.pnpm-store"\nbefore_install:\n  - curl -f https://get.pnpm.io/v6.16.js | node - add --global pnpm@7\n  - pnpm config set store-dir ~/.pnpm-store\ninstall:\n  - pnpm install\n')),(0,p.kt)("h2",{id:"semaphore"},"Semaphore"),(0,p.kt)("p",null,"\u5728 ",(0,p.kt)("a",{parentName:"p",href:"https://semaphoreci.com"},"Semapore"),"\u4e0a \uff0c\u8bf7\u5c06\u6b64\u5185\u5bb9\u6dfb\u52a0\u5230 ",(0,p.kt)("inlineCode",{parentName:"p"},".semaphore/semaphore.yml")," \u6587\u4ef6\u4e2d\uff0c\u4f7f\u7528 pnpm \u6765\u5b89\u88c5\u548c\u7f13\u5b58\u60a8\u7684\u4f9d\u8d56\uff1a"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title=".semaphore/semaphore.yml"',title:'".semaphore/semaphore.yml"'},"version: v1.0\nname: Semaphore CI pnpm example\nagent:\n  machine:\n    type: e1-standard-2\n    os_image: ubuntu1804\nblocks:\n  - name: Install dependencies\n    task:\n      jobs:\n        - name: pnpm install\n          commands:\n            - curl -f https://get.pnpm.io/v6.16.js | node - add --global pnpm@7\n            - checkout\n            - cache restore node-$(checksum pnpm-lock.yaml)\n            - pnpm install\n            - cache store node-$(checksum pnpm-lock.yaml) $(pnpm store path)\n")),(0,p.kt)("h2",{id:"appveyor"},"AppVeyor"),(0,p.kt)("p",null,"\u5728 ",(0,p.kt)("a",{parentName:"p",href:"https://www.appveyor.com"},"AppVeyor")," \uff0c\u8bf7\u5c06\u6b64\u6dfb\u52a0\u60a8\u7684 ",(0,p.kt)("inlineCode",{parentName:"p"},"appveyor.yml"),"\u6765\u4f7f\u7528 pnpm \u6765\u5b89\u88c5\u60a8\u7684\u4f9d\u8d56\u9879\uff1a"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="appveyor.yml"',title:'"appveyor.yml"'},"install:\n  - ps: Install-Product node $env:nodejs_version\n  - curl -f https://get.pnpm.io/v6.16.js | node - add --global pnpm@7\n  - pnpm install\n")),(0,p.kt)("h2",{id:"github-actions"},"GitHub Actions"),(0,p.kt)("p",null,"\u5728 GitHub Actions \u4e0a\uff0c\u60a8\u53ef\u4ee5\u50cf\u8fd9\u6837\u4f7f\u7528 pnpm \u5b89\u88c5\u548c\u7f13\u5b58\u60a8\u7684\u4f9d\u8d56\u9879 ",(0,p.kt)("inlineCode",{parentName:"p"},".github/workflows/NAME.yml"),"\uff09\uff1a"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title=".github/workflows/NAME.yml"',title:'".github/workflows/NAME.yml"'},"name: pnpm Example Workflow\non:\n  push:\njobs:\n  build:\n    runs-on: ubuntu-20.04\n    strategy:\n      matrix:\n        node-version: [15]\n    steps:\n    - uses: actions/checkout@v2\n    - uses: pnpm/action-setup@v2.0.1\n      with:\n        version: 7.0.0\n    - name: Use Node.js ${{ matrix.node-version }}\n      uses: actions/setup-node@v2\n      with:\n        node-version: ${{ matrix.node-version }}\n        cache: 'pnpm'\n    - name: Install dependencies\n      run: pnpm install\n")),(0,p.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,p.kt)("div",{parentName:"div",className:"admonition-heading"},(0,p.kt)("h5",{parentName:"div"},(0,p.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,p.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,p.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,p.kt)("div",{parentName:"div",className:"admonition-content"},(0,p.kt)("p",{parentName:"div"},"\u4f7f\u7528 ",(0,p.kt)("inlineCode",{parentName:"p"},"actions/setup-node@v2")," \u7f13\u5b58\u5305\u4f9d\u8d56\u9879\u8981\u6c42\u60a8\u5b89\u88c5\u7248\u672c ",(0,p.kt)("strong",{parentName:"p"},"6.10+")," \u7684 pnpm\u3002"))),(0,p.kt)("h2",{id:"gitlab-ci"},"Gitlab CI"),(0,p.kt)("p",null,"\u5728 Gitlab \u4e0a\uff0c\u60a8\u53ef\u4ee5\u4f7f\u7528 pnpm \u6765\u5b89\u88c5\u548c\u7f13\u5b58\u60a8\u7684\u4f9d\u8d56\u9879 \u50cf\u8fd9\u6837\uff08\u5c5e\u4e8e ",(0,p.kt)("inlineCode",{parentName:"p"},".gitlab-ci.yml"),"\uff09\uff1a"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title=".gitlab-ci.yml"',title:'".gitlab-ci.yml"'},'stages:\n  - build\n\nbuild:\n  stage: build\n  image: node:14.16.0-buster\n  before_script:\n    - curl -f https://get.pnpm.io/v6.16.js | node - add --global pnpm@7\n    - pnpm config set store-dir .pnpm-store\n  script:\n    - pnpm install # install dependencies\n  cache:\n    key: "$CI_COMMIT_REF_SLUG"\n    paths:\n      - .pnpm-store\n')),(0,p.kt)("h2",{id:"bitbucket-pipelines"},"Bitbucket Pipelines"),(0,p.kt)("p",null,"\u60a8\u53ef\u4ee5\u4f7f\u7528 pnpm \u6765\u5b89\u88c5\u548c\u7f13\u5b58\u60a8\u7684\u4f9d\u8d56\u9879\uff1a"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title=".bitbucket-pipelines.yml"',title:'".bitbucket-pipelines.yml"'},'definitions:\n  caches:\n    pnpm: $BITBUCKET_CLONE_DIR/.pnpm-store\n\npipelines:\n  pull-requests:\n    "**":\n      - step:\n          name: Build and test\n          image: node:14.16.0\n          script:\n            - curl -f https://get.pnpm.io/v6.16.js | node - add --global pnpm@7\n            - pnpm install\n            - pnpm run build # Replace with your build/test\u2026etc. commands\n          caches:\n            - pnpm\n')))}d.isMDXComponent=!0}}]);