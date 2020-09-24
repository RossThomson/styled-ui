(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{"+wNj":function(e,t,n){"use strict";function r(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}n.d(t,"a",(function(){return r}))},"8Nuu":function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/fade",function(){return n("C6LS")}])},C6LS:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return p}));var r=n("cxan"),a=n("HbGN"),o=n("ERkP"),c=n.n(o),i=n("ZVZ0"),l=(c.a.createElement,{}),b="wrapper";function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)(b,Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h1",null,"Fade"),Object(i.b)("p",null,"Fade in from transparent to opaque."),Object(i.b)("p",null,"This component uses ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/react-spring/react-spring"}),"react-spring")," to create animation."),Object(i.b)("h2",null,"Import"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"import Fade from '@trendmicro/react-styled-ui/Fade';\n// or\nimport { Fade } from '@trendmicro/react-styled-ui';\n")),Object(i.b)("h2",null,"Usage"),Object(i.b)("h3",null,"Basic usage"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-jsx"}),'function Example() {\n  const [show, setShow] = React.useState(false);\n  const handleToggle = () => setShow(!show);\n\n  return (\n    <Box whiteSpace="pre-wrap">\n      <Box mb="2x">\n        <Button variantColor="green" onClick={handleToggle}>\n          Toggle\n        </Button>\n      </Box>\n      <Box height={64}>\n        <Fade show={show}>\n          Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups. Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups. Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.\n        </Fade>\n      </Box>\n    </Box>\n  );\n}\n')),Object(i.b)("h2",null,"Props"),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"Fade")," composes the ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"./box"}),Object(i.b)("inlineCode",{parentName:"a"},"Box"))," component. You can override the default styles with style props."),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Name"),Object(i.b)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Type"),Object(i.b)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Default"),Object(i.b)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Description"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"show"),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"boolean"),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"false"),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"If ",Object(i.b)("inlineCode",{parentName:"td"},"true"),", the content will be visible.")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"duration"),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"number"),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"200"),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"The duration for the transition, in milliseconds.")))))}p.isMDXComponent=!0},HbGN:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var r=n("+wNj");function a(e,t){if(null==e)return{};var n,a,o=Object(r.a)(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}},Km8e:function(e,t,n){"use strict";var r=Object.assign.bind(Object);e.exports=r,e.exports.default=e.exports},ZVZ0:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return O}));var r=n("ERkP"),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var b=a.a.createContext({}),p=function(e){var t=a.a.useContext(b),n=t;return e&&(n="function"===typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return(a.a.createElement(b.Provider,{value:t},e.children))},s="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return(a.a.createElement(a.a.Fragment,{},t))}},m=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,b=l(e,["components","mdxType","originalType","parentName"]),u=p(n),s=r,m=u["".concat(c,".").concat(s)]||u[s]||f[s]||o;return n?a.a.createElement(m,i(i({ref:t},b),{},{components:n})):a.a.createElement(m,i({ref:t},b))}));function O(e,t){var n=arguments,r=t&&t.mdxType;if("string"===typeof e||r){var o=n.length,c=new Array(o);c[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[s]="string"===typeof e?e:r,c[1]=i;for(var b=2;b<o;b++)c[b]=n[b];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},cxan:function(e,t,n){"use strict";function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}n.d(t,"a",(function(){return r}))}},[["8Nuu",0,1]]]);