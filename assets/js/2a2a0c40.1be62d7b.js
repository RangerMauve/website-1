(self.webpackChunkstardust_website=self.webpackChunkstardust_website||[]).push([[697],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return d},kt:function(){return f}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var o=n.createContext({}),u=function(e){var t=n.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},d=function(e){var t=u(e.components);return n.createElement(o.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=u(r),f=a,m=p["".concat(o,".").concat(f)]||p[f]||c[f]||i;return r?n.createElement(m,l(l({ref:t},d),{},{components:r})):n.createElement(m,l({ref:t},d))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,l=new Array(i);l[0]=p;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s.mdxType="string"==typeof e?e:a,l[1]=s;for(var u=2;u<i;u++)l[u]=r[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},5238:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return s},contentTitle:function(){return o},metadata:function(){return u},toc:function(){return d},default:function(){return p}});var n=r(2122),a=r(9756),i=(r(7294),r(3905)),l=["components"],s={sidebar_position:2},o="Installation",u={unversionedId:"getting-started/install",id:"getting-started/install",isDocsHomePage:!1,title:"Installation",description:"libstardustxr (server, client, and fusion)",source:"@site/docs/getting-started/install.md",sourceDirName:"getting-started",slug:"/getting-started/install",permalink:"/docs/getting-started/install",editUrl:"https://github.com/StardustXR/website/edit/main/docs/getting-started/install.md",version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Overview",permalink:"/docs/getting-started/overview"},next:{title:"Use",permalink:"/docs/getting-started/run"}},d=[{value:"libstardustxr (server, client, and fusion)",id:"libstardustxr-server-client-and-fusion",children:[{value:"Prerequisites",id:"prerequisites",children:[]},{value:"Download",id:"download",children:[]},{value:"Build",id:"build",children:[]},{value:"Install",id:"install",children:[]}]},{value:"stardust-xr (reference server)",id:"stardust-xr-reference-server",children:[{value:"Prerequisites",id:"prerequisites-1",children:[]},{value:"Download",id:"download-1",children:[]},{value:"Build",id:"build-1",children:[]},{value:"Install",id:"install-1",children:[]}]}],c={toc:d};function p(e){var t=e.components,r=(0,a.Z)(e,l);return(0,i.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"installation"},"Installation"),(0,i.kt)("h2",{id:"libstardustxr-server-client-and-fusion"},(0,i.kt)("a",{parentName:"h2",href:"https://github.com/StardustXR/libstardustxr"},"libstardustxr")," (server, client, and fusion)"),(0,i.kt)("h3",{id:"prerequisites"},"Prerequisites"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Meson"),(0,i.kt)("li",{parentName:"ol"},"Ninja"),(0,i.kt)("li",{parentName:"ol"},"Flatbuffers >= 1.12.0")),(0,i.kt)("h3",{id:"download"},"Download"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/StardustXR/libstardustxr.git\ncd libstardustxr\n")),(0,i.kt)("h3",{id:"build"},"Build"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"meson build --prefix=/usr\ncd build\nninja\n")),(0,i.kt)("h3",{id:"install"},"Install"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"ninja install\n")),(0,i.kt)("h2",{id:"stardust-xr-reference-server"},(0,i.kt)("a",{parentName:"h2",href:"https://github.com/StardustXR/stardust-xr"},"stardust-xr")," (reference server)"),(0,i.kt)("h3",{id:"prerequisites-1"},"Prerequisites"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Meson >= 0.55.0"),(0,i.kt)("li",{parentName:"ol"},"Ninja"),(0,i.kt)("li",{parentName:"ol"},"CMake"),(0,i.kt)("li",{parentName:"ol"},"Flatbuffers >= 1.12.0"),(0,i.kt)("li",{parentName:"ol"},"EGL+GLES 3.2"),(0,i.kt)("li",{parentName:"ol"},"GLX+Xlib"),(0,i.kt)("li",{parentName:"ol"},"fontconfig"),(0,i.kt)("li",{parentName:"ol"},"dlopen"),(0,i.kt)("li",{parentName:"ol"},"OpenXR Loader (required even if run in flatscreen mode)")),(0,i.kt)("h3",{id:"download-1"},"Download"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/StardustXR/stardust-xr.git\ncd stardust-xr\n")),(0,i.kt)("h3",{id:"build-1"},"Build"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"meson build --prefix=/usr\ncd build\nninja\n")),(0,i.kt)("h3",{id:"install-1"},"Install"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"ninja install\n")))}p.isMDXComponent=!0}}]);