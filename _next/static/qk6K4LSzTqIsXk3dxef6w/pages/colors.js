(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{"+r8+":function(e,t,o){"use strict";var r=o("HbGN"),n=o("ERkP"),a=o.n(n),c=o("4dwc"),l=o("6vFM"),b=o("vUXE"),i=a.a.createElement;t.a=function(e){var t=e.theme,o=e.mode,n=(Object(r.a)(e,["theme","mode"]),Object(c.useTheme)()),a=Object(l.getColorPalette)(o),d=n[t]||a[t];if(!d)return"Theme field not found";var p=function(e,t){return t?JSON.stringify(e,null,2).replace(/\"/g,"'").replace(/\'(\d+|[a-z]+)\':/g,"  $1:").replace(/{/g," {").replace(/}/g,"  }"):JSON.stringify(e,null,2).replace(/\"/g,"'").replace(/\'(\d+|[a-z]+)\':/g,"$1:")}(d,!!o);return i(b.a,null,o?"export const ".concat(o," = {\n  ").concat(t,":").concat(p," \n}"):"export const ".concat(t," = ").concat(p))}},"s4G/":function(e,t,o){(window.__NEXT_P=window.__NEXT_P||[]).push(["/colors",function(){return o("yjKP")}])},yjKP:function(e,t,o){"use strict";o.r(t),o.d(t,"default",(function(){return T}));var r=o("cxan"),n=o("HbGN"),a=o("ERkP"),c=o.n(a),l=o("ZVZ0"),b=o("zygG"),i=o("4dwc"),d=o("6vFM"),p=c.a.createElement,s=function(e){return e.split(":")},m=function(e,t){return Object.keys(t).find((function(o){return t[o]===e}))},u=function(e){var t=e.token,o=e.color,a=Object(n.a)(e,["token","color"]),c=s(t),l=Object(b.a)(c,2),d=l[0],m=l[1],u={justify:"space-between",fontSize:"sm",width:"300px",height:"12x",py:"3x",px:"4x",lineHeight:"lg",fontFamily:"mono",color:m<=50?"black":"white",backgroundColor:o};return p(i.Flex,Object(r.a)({},u,a),p(i.Box,null,"".concat(d.charAt(0).toUpperCase()).concat(d.slice(1))," ",m),p(i.Box,null,o))},h=function(e){var t=e.hue,o=Object(i.useTheme)(),r=RegExp(t,"g"),n=Object.keys(o.colors).filter((function(e){return e.match(r)})).reduce((function(e,t){return e[t]=o.colors[t],e}),{});return p(i.Flex,{align:"center"},p(i.Stack,{direction:"column"},Object.keys(n).map((function(e){return p(u,{key:e,token:"".concat(e),color:"".concat(n[e])})}))))},j=function(e){return p(i.Grid,Object(r.a)({gap:"6x",templateColumns:"repeat(auto-fit, 300px)"},e))},O=function(e){var t=e.mode,o=Object(n.a)(e,["mode"]),a=Object(i.useColorMode)().colorMode,c=t&&{light:{bg:"white",border:1,borderColor:"gray:20"},dark:{bg:"gray:100",border:1,borderColor:"gray:70"}}[null!==t&&void 0!==t?t:a];return p(i.Grid,Object(r.a)({px:"14x",py:"10x",rowGap:"8x",columnGap:"6x",templateColumns:"repeat(auto-fit, 120px)",maxWidth:"1242px"},c,o))},x=function(e){var t,o=e.mode,a=e.palette,c=e.colorType,l=e.color,d=(Object(n.a)(e,["mode","palette","colorType","color"]),Object(i.useColorMode)().colorMode),u=Object(i.useTheme)(),h={fontSize:"sm",mt:"2x",color:{dark:"white:primary",light:"black:primary"}[null!==o&&void 0!==o?o:d]},j={fontSize:"xs",lineHeight:"sm",color:{dark:"white:secondary",light:"black:secondary"}[null!==o&&void 0!==o?o:d]};if("gradient"===a){t=l.match(/#\w+/g).map((function(e){var t=s(m(e,u.colors)),o=Object(b.a)(t,2),n=o[0],a=o[1];return p(i.Box,Object(r.a)({key:e},j),"".concat(n.charAt(0).toUpperCase()).concat(n.slice(1))," ",a," ",e)}))}else{var O=s(m(l,u.colors)),x=Object(b.a)(O,2),y=x[0],f=x[1];t="text"===a&&["black","white"].includes(y)?p(i.Box,j,l):p(i.Box,j,"".concat(y.charAt(0).toUpperCase()).concat(y.slice(1))," ",f," ",l)}return p(i.Box,null,p(i.Box,Object(r.a)({background:l},{width:"80px",height:"80px"})),p(i.Box,h,a,".",c),t)},y=function(e){var t=e.mode,o=e.type,r=e.palette,a=(Object(n.a)(e,["mode","type","palette"]),o&&r?"".concat(o,".").concat(r):null!==r&&void 0!==r?r:o),c=Object(d.getColorPalette)(t).get(a);return p(O,{mode:t},Object.keys(c).map((function(e){return p(x,{key:e,mode:t,palette:null!==r&&void 0!==r?r:o,colorType:e,color:"".concat(c[e])})})))},f=o("+r8+"),g=(c.a.createElement,{}),C="wrapper";function T(e){var t=e.components,o=Object(n.a)(e,["components"]);return Object(l.b)(C,Object(r.a)({},g,o,{components:t,mdxType:"MDXLayout"}),Object(l.b)("h1",null,"Colors"),Object(l.b)("p",null,"Add a ",Object(l.b)("inlineCode",{parentName:"p"},"theme.colors")," object to provide colors for your project. By default these colors can be referenced by ",Object(l.b)("inlineCode",{parentName:"p"},"color"),", ",Object(l.b)("inlineCode",{parentName:"p"},"borderColor"),", and ",Object(l.b)("inlineCode",{parentName:"p"},"backgroundColor"),", ",Object(l.b)("inlineCode",{parentName:"p"},"fill"),", ",Object(l.b)("inlineCode",{parentName:"p"},"stroke"),", and styles."),Object(l.b)("p",null,"We recommend adding a palette that go from ",Object(l.b)("inlineCode",{parentName:"p"},"10")," (lightest color) to ",Object(l.b)("inlineCode",{parentName:"p"},"100")," (darkest color). You can use a name (such as Red 10 or Red 70) to indicate that Red 10 is a light red color and Red 70 is a dark red color."),Object(l.b)("p",null,"The color palette  is defined for both Light Theme and Dark Theme where ",Object(l.b)("inlineCode",{parentName:"p"},"10")," - ",Object(l.b)("inlineCode",{parentName:"p"},"50")," means to pass AA contrast with black text and  ",Object(l.b)("inlineCode",{parentName:"p"},"60")," - ",Object(l.b)("inlineCode",{parentName:"p"},"100")," means to pass AA contrast with white text."),Object(l.b)(f.a,{theme:"colors",mdxType:"ThemeParser"}),Object(l.b)("h3",null,"Color palettes"),Object(l.b)(j,{mdxType:"ColorWrapper"},Object(l.b)(h,{hue:"red",mdxType:"ColorPalettes"}),Object(l.b)(h,{hue:"magenta",mdxType:"ColorPalettes"}),Object(l.b)(h,{hue:"purple",mdxType:"ColorPalettes"}),Object(l.b)(h,{hue:"blue",mdxType:"ColorPalettes"}),Object(l.b)(h,{hue:"green",mdxType:"ColorPalettes"}),Object(l.b)(h,{hue:"teal",mdxType:"ColorPalettes"}),Object(l.b)(h,{hue:"cyan",mdxType:"ColorPalettes"}),Object(l.b)(h,{hue:"gray",mdxType:"ColorPalettes"})),Object(l.b)("h3",null,"Text color"),Object(l.b)(f.a,{mode:"light",theme:"text",mdxType:"ThemeParser"}),Object(l.b)(f.a,{mode:"dark",theme:"text",mdxType:"ThemeParser"}),Object(l.b)(y,{mode:"light",palette:"text",mdxType:"FunctionalColorPalettes"}),Object(l.b)(y,{mode:"dark",palette:"text",mdxType:"FunctionalColorPalettes"}),Object(l.b)("h3",null,"Functional color"),Object(l.b)(f.a,{mode:"light",theme:"risk",mdxType:"ThemeParser"}),Object(l.b)(f.a,{mode:"dark",theme:"risk",mdxType:"ThemeParser"}),Object(l.b)(y,{mode:"light",palette:"risk",mdxType:"FunctionalColorPalettes"}),Object(l.b)(y,{mode:"dark",palette:"risk",mdxType:"FunctionalColorPalettes"}),Object(l.b)("h3",null,"Chart color"),Object(l.b)(f.a,{mode:"light",theme:"chart",mdxType:"ThemeParser"}),Object(l.b)(f.a,{mode:"dark",theme:"chart",mdxType:"ThemeParser"}),Object(l.b)(y,{mode:"light",palette:"chart",mdxType:"FunctionalColorPalettes"}),Object(l.b)(y,{mode:"dark",palette:"chart",mdxType:"FunctionalColorPalettes"}),Object(l.b)("h3",null,"Gradient color"),Object(l.b)(f.a,{theme:"gradient",mdxType:"ThemeParser"}),Object(l.b)(y,{type:"gradient",mdxType:"FunctionalColorPalettes"}),Object(l.b)("h3",null,"Color blindness"),Object(l.b)("p",null,"We provide different colors for color blind users."),Object(l.b)(f.a,{theme:"blindness",mdxType:"ThemeParser"}),Object(l.b)("h4",null,"Functional color"),Object(l.b)(y,{type:"blindness",palette:"risk",mdxType:"FunctionalColorPalettes"}),Object(l.b)("h4",null,"Chart color"),Object(l.b)(y,{type:"blindness",palette:"chart",mdxType:"FunctionalColorPalettes"}),Object(l.b)("h4",null,"Gradient color"),Object(l.b)(y,{type:"blindness",palette:"gradient",mdxType:"FunctionalColorPalettes"}),Object(l.b)("h2",null,"Configuration Reference"),Object(l.b)("p",null,"Except for breakpoints, colors, and spacing, all keys in the theme object map to one of the core themes. All keys can be replaced or extended."),Object(l.b)("p",null,"For more information, see the complete properties ",Object(l.b)("a",{href:"https://styled-system.com/table",target:"_blank"},"reference table"),"."))}T.isMDXComponent=!0}},[["s4G/",0,1,5,3,4,2,6]]]);