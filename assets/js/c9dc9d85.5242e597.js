(self.webpackChunkstardust_website=self.webpackChunkstardust_website||[]).push([[487],{3905:function(t,e,n){"use strict";n.d(e,{Zo:function(){return u},kt:function(){return c}});var a=n(7294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},i=Object.keys(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var p=a.createContext({}),d=function(t){var e=a.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):l(l({},e),t)),n},u=function(t){var e=d(t.components);return a.createElement(p.Provider,{value:e},t.children)},s={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},m=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,i=t.originalType,p=t.parentName,u=o(t,["components","mdxType","originalType","parentName"]),m=d(n),c=r,h=m["".concat(p,".").concat(c)]||m[c]||s[c]||i;return n?a.createElement(h,l(l({ref:e},u),{},{components:n})):a.createElement(h,l({ref:e},u))}));function c(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var i=n.length,l=new Array(i);l[0]=m;var o={};for(var p in e)hasOwnProperty.call(e,p)&&(o[p]=e[p]);o.originalType=t,o.mdxType="string"==typeof t?t:r,l[1]=o;for(var d=2;d<i;d++)l[d]=n[d];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},2575:function(t,e,n){"use strict";n.r(e),n.d(e,{frontMatter:function(){return o},contentTitle:function(){return p},metadata:function(){return d},toc:function(){return u},default:function(){return m}});var a=n(2122),r=n(9756),i=(n(7294),n(3905)),l=["components"],o={},p="HandInput",d={unversionedId:"stardust-protocol/server/types/input/inputtypes/HandInput",id:"stardust-protocol/server/types/input/inputtypes/HandInput",isDocsHomePage:!1,title:"HandInput",description:"Derived from [[InputMethod]] and [[Spatial]] (scalable: false)",source:"@site/docs/stardust-protocol/server/types/input/inputtypes/HandInput.md",sourceDirName:"stardust-protocol/server/types/input/inputtypes",slug:"/stardust-protocol/server/types/input/inputtypes/HandInput",permalink:"/website/docs/stardust-protocol/server/types/input/inputtypes/HandInput",editUrl:"https://github.com/StardustXR/website/edit/main/docs/stardust-protocol/server/types/input/inputtypes/HandInput.md",version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"InputMethod",permalink:"/website/docs/stardust-protocol/server/types/input/InputMethod"},next:{title:"PointerInput",permalink:"/website/docs/stardust-protocol/server/types/input/inputtypes/PointerInput"}},u=[{value:"Derived from [InputMethod] and [Spatial] (<code>scalable: false</code>)",id:"derived-from-inputmethod-and-spatial-scalable-false",children:[]},{value:"Serialization",id:"serialization",children:[]},{value:"Datamap",id:"datamap",children:[{value:"Required",id:"required",children:[]}]},{value:"Methods",id:"methods",children:[]}],s={toc:u};function m(t){var e=t.components,n=(0,r.Z)(t,l);return(0,i.kt)("wrapper",(0,a.Z)({},s,n,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"handinput"},"HandInput"),(0,i.kt)("h3",{id:"derived-from-inputmethod-and-spatial-scalable-false"},"Derived from [","[InputMethod]","] and [","[Spatial]","] (",(0,i.kt)("inlineCode",{parentName:"h3"},"scalable: false"),")"),(0,i.kt)("p",null,"A full 27-bone hand+forearm input with useful abstractions provided through the datamap."),(0,i.kt)("p",null,"The local space of a hand is where +Z is away from the palm, +Y is from the palm to the fingers, and +X is orthogonal and to the right."),(0,i.kt)("h2",{id:"serialization"},"Serialization"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Key"),(0,i.kt)("th",{parentName:"tr",align:null},"Value Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"origin"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"Vector3"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"direction"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"Vector3"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"tilt"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"float"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"datamap"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"Dictionary"))))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"[\n    thumb metacarpal,\n    thumb proximal,\n    thumb distal,\n    thumb tip,\n    index metacarpal,\n    index proximal,\n    index intermediate,\n    index distal,\n    index tip,\n    middle metacarpal,\n    middle proximal,\n    middle intermediate,\n    middle distal,\n    middle tip,\n    ring metacarpal,\n    ring proximal,\n    ring intermediate,\n    ring distal,\n    ring tip,\n    little metacarpal,\n    little proximal,\n    little intermediate,\n    little distal,\n    little tip\n]\n")),(0,i.kt)("p",null,"(This section is WIP)"),(0,i.kt)("h2",{id:"datamap"},"Datamap"),(0,i.kt)("h3",{id:"required"},"Required"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Key"),(0,i.kt)("th",{parentName:"tr",align:null},"Value Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"confidence"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"float")," (range ",(0,i.kt)("inlineCode",{parentName:"td"},"0.0"),"-",(0,i.kt)("inlineCode",{parentName:"td"},"1.0"),")"),(0,i.kt)("td",{parentName:"tr",align:null},"How confident the hand tracker is of the pose of the hand")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"isLeft"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"bool")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"true")," if this hand is the left hand, ",(0,i.kt)("inlineCode",{parentName:"td"},"false")," if not")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"pinchStrength"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"float")," (range ",(0,i.kt)("inlineCode",{parentName:"td"},"0.0"),"-",(0,i.kt)("inlineCode",{parentName:"td"},"1.0"),")"),(0,i.kt)("td",{parentName:"tr",align:null},"How much the hand is pinching")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"pinchDistance"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"float")," (>",(0,i.kt)("inlineCode",{parentName:"td"},"0.0"),")"),(0,i.kt)("td",{parentName:"tr",align:null},"The distance in meters between the thumb and index finger")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"grabStrength"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"float")," (range ",(0,i.kt)("inlineCode",{parentName:"td"},"0.0"),"-",(0,i.kt)("inlineCode",{parentName:"td"},"1.0"),")"),(0,i.kt)("td",{parentName:"tr",align:null},"How much the hand is making a fist")))),(0,i.kt)("h2",{id:"methods"},"Methods"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"TODO"),": Properly secured field distance calculation accessible to clients"))}m.isMDXComponent=!0}}]);