(window.webpackJsonp=window.webpackJsonp||[]).push([[52],{"+r8+":function(e,t,n){"use strict";var o=n("HbGN"),c=n("ERkP"),a=n.n(c),r=n("4dwc"),l=n("6vFM"),s=n("vUXE"),d=a.a.createElement;t.a=function(e){var t=e.theme,n=e.mode,c=(Object(o.a)(e,["theme","mode"]),Object(r.useTheme)()),a=Object(l.getColorPalette)(n),i=c[t]||a[t];if(!i)return"Theme field not found";var b=function(e,t){return t?JSON.stringify(e,null,2).replace(/\"/g,"'").replace(/\'(\d+|[a-z]+)\':/g,"  $1:").replace(/{/g," {").replace(/}/g,"  }"):JSON.stringify(e,null,2).replace(/\"/g,"'").replace(/\'(\d+|[a-z]+)\':/g,"$1:")}(i,!!n);return d(s.a,null,n?"export const ".concat(n," = {\n  ").concat(t,":").concat(b," \n}"):"export const ".concat(t," = ").concat(b))}},GHtt:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/shadows",function(){return n("jV9J")}])},jV9J:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return b}));var o=n("cxan"),c=n("HbGN"),a=n("ERkP"),r=n.n(a),l=n("ZVZ0"),s=(n("4dwc"),n("+r8+")),d=(r.a.createElement,{}),i="wrapper";function b(e){var t=e.components,n=Object(c.a)(e,["components"]);return Object(l.b)(i,Object(o.a)({},d,n,{components:t,mdxType:"MDXLayout"}),Object(l.b)("h1",null,"Shadows"),Object(l.b)("p",null,"Add or remove shadows to elements with box-shadow utilities."),Object(l.b)(s.a,{theme:"shadows",mdxType:"ThemeParser"}),Object(l.b)("pre",null,Object(l.b)("code",Object(o.a)({parentName:"pre"},{className:"language-jsx",metastring:"noInline",noInline:!0}),'function Example() {\n  const { colorMode } = useColorMode();\n  return (\n    <Stack direction="row" spacing="6x" justifyContent="center">\n      <Box width="56x" height="24x" p="2x" bg="gray:70" boxShadow={`${colorMode}.sm`}>boxShadow=sm</Box>\n      <Box width="56x" height="24x" p="2x" bg="gray:70" boxShadow={`${colorMode}.md`}>boxShadow=md</Box>\n      <Box width="56x" height="24x" p="2x" bg="gray:70" boxShadow={`${colorMode}.lg`}>boxShadow=lg</Box>\n    </Stack>\n  );\n}\n\nrender(<Example />);\n')),Object(l.b)("h2",null,"Configuration Reference"),Object(l.b)("p",null,"Except for breakpoints, colors, and spacing, all keys in the theme object map to one of the core themes. All keys can be replaced or extended."),Object(l.b)("p",null,"For more information, see the complete properties ",Object(l.b)("a",{href:"https://styled-system.com/table",target:"_blank"},"reference table"),"."))}b.isMDXComponent=!0}},[["GHtt",0,1,5,3,4,2,6]]]);