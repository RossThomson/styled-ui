(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{"+wNj":function(e,n,t){"use strict";function p(e,n){if(null==e)return{};var t,p,r={},a=Object.keys(e);for(p=0;p<a.length;p++)t=a[p],n.indexOf(t)>=0||(r[t]=e[t]);return r}t.d(n,"a",(function(){return p}))},HbGN:function(e,n,t){"use strict";t.d(n,"a",(function(){return r}));var p=t("+wNj");function r(e,n){if(null==e)return{};var t,r,a=Object(p.a)(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}},Km8e:function(e,n,t){"use strict";var p=Object.assign.bind(Object);e.exports=p,e.exports.default=e.exports},ZVZ0:function(e,n,t){"use strict";t.d(n,"a",(function(){return d})),t.d(n,"b",(function(){return j}));var p=t("ERkP"),r=t.n(p);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);n&&(p=p.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,p)}return t}function u(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,p,r=function(e,n){if(null==e)return{};var t,p,r={},a=Object.keys(e);for(p=0;p<a.length;p++)t=a[p],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(p=0;p<a.length;p++)t=a[p],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var c=r.a.createContext({}),i=function(e){var n=r.a.useContext(c),t=n;return e&&(t="function"===typeof e?e(n):u(u({},n),e)),t},d=function(e){var n=i(e.components);return(r.a.createElement(c.Provider,{value:n},e.children))},b="mdxType",O={inlineCode:"code",wrapper:function(e){var n=e.children;return(r.a.createElement(r.a.Fragment,{},n))}},s=r.a.forwardRef((function(e,n){var t=e.components,p=e.mdxType,a=e.originalType,o=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=i(t),b=p,s=d["".concat(o,".").concat(b)]||d[b]||O[b]||a;return t?r.a.createElement(s,u(u({ref:n},c),{},{components:t})):r.a.createElement(s,u({ref:n},c))}));function j(e,n){var t=arguments,p=n&&n.mdxType;if("string"===typeof e||p){var a=t.length,o=new Array(a);o[0]=s;var u={};for(var l in n)hasOwnProperty.call(n,l)&&(u[l]=n[l]);u.originalType=e,u[b]="string"===typeof e?e:p,o[1]=u;for(var c=2;c<a;c++)o[c]=t[c];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,t)}s.displayName="MDXCreateElement"},cxan:function(e,n,t){"use strict";function p(){return(p=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var p in t)Object.prototype.hasOwnProperty.call(t,p)&&(e[p]=t[p])}return e}).apply(this,arguments)}t.d(n,"a",(function(){return p}))},gAcy:function(e,n,t){"use strict";t.r(n),t.d(n,"default",(function(){return i}));var p=t("cxan"),r=t("HbGN"),a=t("ERkP"),o=t.n(a),u=t("ZVZ0"),l=(o.a.createElement,{}),c="wrapper";function i(e){var n=e.components,t=Object(r.a)(e,["components"]);return Object(u.b)(c,Object(p.a)({},l,t,{components:n,mdxType:"MDXLayout"}),Object(u.b)("h1",null,"InputGroup"),Object(u.b)("p",null,Object(u.b)("inlineCode",{parentName:"p"},"InputGroup")," is used to group related add-ons and inputs."),Object(u.b)("h2",null,"Import"),Object(u.b)("h3",null,"Default imports"),Object(u.b)("pre",null,Object(u.b)("code",Object(p.a)({parentName:"pre"},{className:"language-js"}),"import InputGroup from '@trendmicro/react-styled-ui/InputGroup';\nimport InputGroupAddon from '@trendmicro/react-styled-ui/InputGroupAddon';\nimport InputGroupAppend from '@trendmicro/react-styled-ui/InputGroupAppend';\nimport InputGroupPrepend from '@trendmicro/react-styled-ui/InputGroupPrepend';\n")),Object(u.b)("h3",null,"Named imports"),Object(u.b)("pre",null,Object(u.b)("code",Object(p.a)({parentName:"pre"},{className:"language-js"}),"import {\n  InputGroup,\n  InputGroupAddon,\n  InputGroupAppend,\n  InputGroupPrepend,\n} from '@trendmicro/react-styled-ui';\n")),Object(u.b)("h2",null,"Usage"),Object(u.b)("p",null,"Use ",Object(u.b)("inlineCode",{parentName:"p"},"InputGroup")," to place an ",Object(u.b)("inlineCode",{parentName:"p"},"InputGroupAddon")," or ",Object(u.b)("inlineCode",{parentName:"p"},"Button")," on either side of an ",Object(u.b)("inlineCode",{parentName:"p"},"Input"),". You may also place one on both sides of an ",Object(u.b)("inlineCode",{parentName:"p"},"Input"),"."),Object(u.b)("pre",null,Object(u.b)("code",Object(p.a)({parentName:"pre"},{className:"language-jsx"}),'<Stack direction="column" spacing="4x">\n  <InputGroup>\n    <InputGroupPrepend>\n      <InputGroupAddon variant="filled">@</InputGroupAddon>\n    </InputGroupPrepend>\n    <Input placeholder="Username" />\n  </InputGroup>\n  <InputGroup>\n    <Input placeholder="Recipient\'s username" />\n    <InputGroupAppend>\n      <InputGroupAddon variant="filled">@example.com</InputGroupAddon>\n    </InputGroupAppend>\n  </InputGroup>\n  <InputGroup>\n    <InputGroupPrepend>\n      <InputGroupAddon variant="filled">$</InputGroupAddon>\n    </InputGroupPrepend>\n    <Input placeholder="Recipient\'s username" />\n    <InputGroupAppend>\n      <InputGroupAddon variant="filled">.00</InputGroupAddon>\n    </InputGroupAppend>\n  </InputGroup>\n</Stack>\n')),Object(u.b)("h3",null,"Sizes"),Object(u.b)("p",null,"Use the ",Object(u.b)("inlineCode",{parentName:"p"},"size")," prop to change the size of the input group. You can set the value to ",Object(u.b)("inlineCode",{parentName:"p"},"sm"),", ",Object(u.b)("inlineCode",{parentName:"p"},"md"),", or ",Object(u.b)("inlineCode",{parentName:"p"},"lg"),"."),Object(u.b)("pre",null,Object(u.b)("code",Object(p.a)({parentName:"pre"},{className:"language-jsx"}),'<Stack direction="column" spacing="4x">\n  <InputGroup size="sm">\n    <InputGroupPrepend>\n      <InputGroupAddon variant="filled">sm</InputGroupAddon>\n    </InputGroupPrepend>\n    <Input placeholder="Small size (24px)" />\n  </InputGroup>\n  <InputGroup size="md">\n    <InputGroupPrepend>\n      <InputGroupAddon variant="filled">md</InputGroupAddon>\n    </InputGroupPrepend>\n    <Input placeholder="Default size (32px)" />\n  </InputGroup>\n  <InputGroup size="lg">\n    <InputGroupPrepend>\n      <InputGroupAddon variant="filled">lg</InputGroupAddon>\n    </InputGroupPrepend>\n    <Input placeholder="Large size (40px)" />\n  </InputGroup>\n</Stack>\n')),Object(u.b)("h3",null,"Variants"),Object(u.b)("p",null,"The ",Object(u.b)("inlineCode",{parentName:"p"},"InputGroup")," component comes in 3 variants: ",Object(u.b)("inlineCode",{parentName:"p"},"outline"),", ",Object(u.b)("inlineCode",{parentName:"p"},"filled"),", and ",Object(u.b)("inlineCode",{parentName:"p"},"unstyled"),". Pass the ",Object(u.b)("inlineCode",{parentName:"p"},"variant")," prop and set it to either of these values."),Object(u.b)("h4",null,Object(u.b)("inlineCode",{parentName:"h4"},"outline")),Object(u.b)("pre",null,Object(u.b)("code",Object(p.a)({parentName:"pre"},{className:"language-jsx"}),'<Stack direction="column" spacing="4x">\n  <InputGroup variant="outline">\n    <InputGroupPrepend>\n      <InputGroupAddon>@</InputGroupAddon>\n    </InputGroupPrepend>\n    <Input placeholder="Username" />\n  </InputGroup>\n  <InputGroup variant="outline">\n    <InputGroupPrepend>\n      <InputGroupAddon>@</InputGroupAddon>\n    </InputGroupPrepend>\n    <Input variant="filled" placeholder="Username" />\n  </InputGroup>\n</Stack>\n')),Object(u.b)("h4",null,Object(u.b)("inlineCode",{parentName:"h4"},"filled")),Object(u.b)("pre",null,Object(u.b)("code",Object(p.a)({parentName:"pre"},{className:"language-jsx"}),'<Stack direction="column" spacing="4x">\n  <InputGroup variant="filled">\n    <InputGroupPrepend>\n      <InputGroupAddon>@</InputGroupAddon>\n    </InputGroupPrepend>\n    <Input variant="outline" placeholder="Username" />\n  </InputGroup>\n  <InputGroup variant="filled">\n    <InputGroupPrepend>\n      <InputGroupAddon>@</InputGroupAddon>\n    </InputGroupPrepend>\n    <Input placeholder="Username" />\n  </InputGroup>\n</Stack>\n')),Object(u.b)("h4",null,Object(u.b)("inlineCode",{parentName:"h4"},"unstyled")),Object(u.b)("p",null,"For an unstyled input group that doesn't have border and padding spaces, it is not necessary to place an ",Object(u.b)("inlineCode",{parentName:"p"},"InputGroupPrepend")," or ",Object(u.b)("inlineCode",{parentName:"p"},"InputGroupAppend")," on either side of an ",Object(u.b)("inlineCode",{parentName:"p"},"Input"),"."),Object(u.b)("pre",null,Object(u.b)("code",Object(p.a)({parentName:"pre"},{className:"language-jsx"}),'<Stack direction="column" spacing="4x">\n  <InputGroup variant="unstyled">\n    <InputGroupAddon pr="1x">@</InputGroupAddon>\n    <Input placeholder="Username" />\n  </InputGroup>\n</Stack>\n')),Object(u.b)("h3",null,"Multiple add-ons"),Object(u.b)("p",null,"Multiple add-ons are supported and can be mixed with checkbox and radio input components."),Object(u.b)("pre",null,Object(u.b)("code",Object(p.a)({parentName:"pre"},{className:"language-jsx"}),'<Stack direction="column" spacing="4x">\n  <InputGroup>\n    <InputGroupPrepend>\n      <InputGroupAddon variant="filled">$</InputGroupAddon>\n    </InputGroupPrepend>\n    <InputGroupPrepend>\n      <InputGroupAddon variant="filled">0.00</InputGroupAddon>\n    </InputGroupPrepend>\n    <Input />\n  </InputGroup>\n  <InputGroup>\n    <Input />\n    <InputGroupAppend>\n      <InputGroupAddon variant="filled">$</InputGroupAddon>\n    </InputGroupAppend>\n    <InputGroupAppend>\n      <InputGroupAddon variant="filled">0.00</InputGroupAddon>\n    </InputGroupAppend>\n  </InputGroup>\n</Stack>\n')),Object(u.b)("h3",null,"Multiple inputs"),Object(u.b)("p",null,"While multiple ",Object(u.b)("inlineCode",{parentName:"p"},"<Input />"),"s are supported visually, validation styles are only available for input groups with a single ",Object(u.b)("inlineCode",{parentName:"p"},"<Input />"),"."),Object(u.b)("pre",null,Object(u.b)("code",Object(p.a)({parentName:"pre"},{className:"language-jsx"}),'<InputGroup>\n  <InputGroupPrepend>\n    <InputGroupAddon variant="filled">First and last name</InputGroupAddon>\n  </InputGroupPrepend>\n  <Input placeholder="First name" defaultValue="John" required />\n  <Input placeholder="Last name" defaultValue="Doe" required />\n</InputGroup>\n')),Object(u.b)("h3",null,"Date inputs"),Object(u.b)("pre",null,Object(u.b)("code",Object(p.a)({parentName:"pre"},{className:"language-jsx"}),'<InputGroup variant="unstyled">\n  <Input\n    placeholder="YYYY"\n    borderBottom={1}\n    textAlign="center"\n    width="12x"\n  />\n  <Text px="2x">\u2013</Text>\n  <Input\n    placeholder="MM"\n    borderBottom={1}\n    textAlign="center"\n    width="8x"\n  />\n  <Text px="2x">\u2013</Text>\n  <Input\n    placeholder="DD"\n    borderBottom={1}\n    textAlign="center"\n    width="8x"\n  />\n</InputGroup>\n')),Object(u.b)("h3",null,"Button add-ons"),Object(u.b)("pre",null,Object(u.b)("code",Object(p.a)({parentName:"pre"},{className:"language-jsx",metastring:"noInline",noInline:!0}),'function Example() {\n  const { colorMode } = useColorMode();\n  const dividerColor ={\n    dark: \'gray:70\',\n    light: \'gray:30\',\n  }[colorMode];\n\n  return (\n    <Stack direction="column" spacing="4x">\n      <InputGroup>\n        <InputGroupPrepend>\n          <Button variant="secondary">\n            Action\n          </Button>\n        </InputGroupPrepend>\n        <Input />\n      </InputGroup>\n      <InputGroup>\n        <Input />\n        <InputGroupAppend>\n          <Button variant="secondary">\n            Action\n          </Button>\n        </InputGroupAppend>\n      </InputGroup>\n      <InputGroup>\n        <InputGroupPrepend>\n          <Button variant="secondary">\n            Host name\n            <Space width="1x" />\n            <Icon icon="angle-down" />\n          </Button>\n        </InputGroupPrepend>\n        <Input />\n        <InputGroupAppend>\n          <Button>\n            Action\n          </Button>\n        </InputGroupAppend>\n      </InputGroup>\n      <InputGroup>\n        <Input />\n        <ButtonGroup>\n          <Button borderRadius={0}>\n            Action\n          </Button>\n          <Divider orientation="vertical" color={dividerColor} />\n          <Button>\n            <Icon icon="settings" />\n          </Button>\n        </ButtonGroup>\n      </InputGroup>\n    </Stack>\n  );\n}\n\nrender(<Example />);\n')),Object(u.b)("h2",null,"Props"),Object(u.b)("h3",null,"InputGroup"),Object(u.b)("p",null,Object(u.b)("inlineCode",{parentName:"p"},"InputGroup")," composes the ",Object(u.b)("a",Object(p.a)({parentName:"p"},{href:"./box"}),Object(u.b)("inlineCode",{parentName:"a"},"Box"))," component."),Object(u.b)("table",null,Object(u.b)("thead",{parentName:"table"},Object(u.b)("tr",{parentName:"thead"},Object(u.b)("th",Object(p.a)({parentName:"tr"},{align:"left"}),"Name"),Object(u.b)("th",Object(p.a)({parentName:"tr"},{align:"left"}),"Type"),Object(u.b)("th",Object(p.a)({parentName:"tr"},{align:"left"}),"Default"),Object(u.b)("th",Object(p.a)({parentName:"tr"},{align:"left"}),"Description"))),Object(u.b)("tbody",{parentName:"table"},Object(u.b)("tr",{parentName:"tbody"},Object(u.b)("td",Object(p.a)({parentName:"tr"},{align:"left"}),"size"),Object(u.b)("td",Object(p.a)({parentName:"tr"},{align:"left"}),"string"),Object(u.b)("td",Object(p.a)({parentName:"tr"},{align:"left"}),"'md'"),Object(u.b)("td",Object(p.a)({parentName:"tr"},{align:"left"}),"The relative size to the input group itself. One of: ",Object(u.b)("inlineCode",{parentName:"td"},"'sm'"),", ",Object(u.b)("inlineCode",{parentName:"td"},"'md'"),", ",Object(u.b)("inlineCode",{parentName:"td"},"'lg'"))),Object(u.b)("tr",{parentName:"tbody"},Object(u.b)("td",Object(p.a)({parentName:"tr"},{align:"left"}),"variant"),Object(u.b)("td",Object(p.a)({parentName:"tr"},{align:"left"}),"string"),Object(u.b)("td",Object(p.a)({parentName:"tr"},{align:"left"}),"'outline'"),Object(u.b)("td",Object(p.a)({parentName:"tr"},{align:"left"}),"The variant of the input style to use. One of: ",Object(u.b)("inlineCode",{parentName:"td"},"'outline'"),", ",Object(u.b)("inlineCode",{parentName:"td"},"'filled'"),", ",Object(u.b)("inlineCode",{parentName:"td"},"'unstyled'"))))),Object(u.b)("h3",null,"InputGroupAddon"),Object(u.b)("p",null,Object(u.b)("inlineCode",{parentName:"p"},"InputGroupAddon")," composes the ",Object(u.b)("a",Object(p.a)({parentName:"p"},{href:"./flex"}),Object(u.b)("inlineCode",{parentName:"a"},"Flex"))," component."),Object(u.b)("table",null,Object(u.b)("thead",{parentName:"table"},Object(u.b)("tr",{parentName:"thead"},Object(u.b)("th",Object(p.a)({parentName:"tr"},{align:"left"}),"Name"),Object(u.b)("th",Object(p.a)({parentName:"tr"},{align:"left"}),"Type"),Object(u.b)("th",Object(p.a)({parentName:"tr"},{align:"left"}),"Default"),Object(u.b)("th",Object(p.a)({parentName:"tr"},{align:"left"}),"Description"))),Object(u.b)("tbody",{parentName:"table"},Object(u.b)("tr",{parentName:"tbody"},Object(u.b)("td",Object(p.a)({parentName:"tr"},{align:"left"}),"size"),Object(u.b)("td",Object(p.a)({parentName:"tr"},{align:"left"}),"string"),Object(u.b)("td",Object(p.a)({parentName:"tr"},{align:"left"}),"'md'"),Object(u.b)("td",Object(p.a)({parentName:"tr"},{align:"left"}),"The relative size to the input group itself. One of: ",Object(u.b)("inlineCode",{parentName:"td"},"'sm'"),", ",Object(u.b)("inlineCode",{parentName:"td"},"'md'"),", ",Object(u.b)("inlineCode",{parentName:"td"},"'lg'"))),Object(u.b)("tr",{parentName:"tbody"},Object(u.b)("td",Object(p.a)({parentName:"tr"},{align:"left"}),"variant"),Object(u.b)("td",Object(p.a)({parentName:"tr"},{align:"left"}),"string"),Object(u.b)("td",Object(p.a)({parentName:"tr"},{align:"left"}),"'outline'"),Object(u.b)("td",Object(p.a)({parentName:"tr"},{align:"left"}),"The variant of the input style to use. One of: ",Object(u.b)("inlineCode",{parentName:"td"},"'outline'"),", ",Object(u.b)("inlineCode",{parentName:"td"},"'filled'"),", ",Object(u.b)("inlineCode",{parentName:"td"},"'unstyled'"))))),Object(u.b)("h3",null,"InputGroupAppend"),Object(u.b)("p",null,Object(u.b)("inlineCode",{parentName:"p"},"InputGroupAppend")," composes the ",Object(u.b)("a",Object(p.a)({parentName:"p"},{href:"./flex"}),Object(u.b)("inlineCode",{parentName:"a"},"Flex"))," component."),Object(u.b)("h3",null,"InputGroupPrepend"),Object(u.b)("p",null,Object(u.b)("inlineCode",{parentName:"p"},"InputGroupPrepend")," composes the ",Object(u.b)("a",Object(p.a)({parentName:"p"},{href:"./flex"}),Object(u.b)("inlineCode",{parentName:"a"},"Flex"))," component."))}i.isMDXComponent=!0},tixK:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/inputgroup",function(){return t("gAcy")}])}},[["tixK",0,1]]]);