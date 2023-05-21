"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[194],{3194:function(e,t,n){n.r(t),n.d(t,{ContactsPage:function(){return P},default:function(){return T}});var r=n(2791),a="ContactListElement_contactElement__fdkob",o="ContactListElement_button__E8O7x",i=n(9434),s=n(8427),c=n(184),u=function(e){var t=(0,i.I0)();return(0,c.jsxs)("li",{className:a,children:[(0,c.jsx)("p",{children:e.name}),(0,c.jsx)("p",{children:e.number}),(0,c.jsx)("button",{className:o,type:"button",onClick:function(){t((0,s.GK)(e.id))},children:"Delete"})]})},l="ContactList_contactlist__zx6vn",d=function(e){return e.filter.filterQuery},m=function(e){return e.contacts.isLoading},h=function(e){return e.contacts.error},f=function(e){var t=function(e){return e.contacts.contacts}(e),n=d(e);return t.filter((function(e){return""===n||e.name.toLowerCase().includes(n.toLowerCase())}))},p=function(){var e=(0,i.v9)(f);return(0,c.jsx)(c.Fragment,{children:(0,c.jsx)("ul",{className:l,children:e.map((function(e){return(0,c.jsx)(u,{id:e.id,name:e.name,number:e.number},e.id)}))})})},x=n(9439),v="ContactForm_contactForm__y0Rca",j="ContactForm_contactInput__z6XOX",_="ContactForm_contactButton__jSKp4",b=function(){var e=(0,r.useState)(""),t=(0,x.Z)(e,2),n=t[0],a=t[1],o=(0,r.useState)(""),u=(0,x.Z)(o,2),l=u[0],d=u[1],m=(0,i.I0)();return(0,c.jsxs)("form",{className:v,onSubmit:function(e){e.preventDefault();var t=e.target;(function(e){return/^[a-zA-Z\u0104\u0105\u0106\u0107\u0118\u0119\u0141\u0142\u0143\u0144\xd3\xf3\u015a\u015b\u0179\u017a\u017b\u017c]+(([' -][a-zA-Z\u0104\u0105\u0106\u0107\u0118\u0119\u0141\u0142\u0143\u0144\xd3\xf3\u015a\u015b\u0179\u017a\u017b\u017c])?[a-zA-Z\u0104\u0105\u0106\u0107\u0118\u0119\u0141\u0142\u0143\u0144\xd3\xf3\u015a\u015b\u0179\u017a\u017b\u017c]*)*$/.test(e)})(n)&&function(e){return/\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/.test(e)}(l)&&m((0,s.uK)({name:t.elements.name.value,number:t.elements.number.value})),t.reset(),a(""),d("")},children:[(0,c.jsx)("label",{htmlFor:"name",children:"Name"}),(0,c.jsx)("input",{className:j,id:"name",type:"text",name:"name",value:n,onChange:function(e){a(e.target.value)},pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0}),(0,c.jsx)("label",{htmlFor:"number",children:"Number"}),(0,c.jsx)("input",{className:j,id:"number",type:"tel",name:"number",value:l,onChange:function(e){d(e.target.value)},pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0}),(0,c.jsx)("button",{className:_,type:"submit",children:"Add Contact"})]})},Z="Filter_filter__vxThR",C="Filter_filterInput__1Cysk",y=n(2956),g=function(){var e=(0,i.I0)(),t=(0,i.v9)(d);return(0,c.jsxs)("div",{className:Z,children:[(0,c.jsx)("h3",{children:"Find contacts by name:"}),(0,c.jsx)("input",{className:C,id:"filter",value:t,onChange:function(t){e((0,y.p)(t.target.value))},type:"text",name:"filter",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0})]})},N=n(9273),A=n(1523),w=n(8551),z=n(890),F=n(7107),k=n(4507),L=n(4395),E=n(4663),I=n(6009),S=n(1087),B=n(533),M=(0,F.Z)(),P=function(){var e=(0,i.I0)(),t=(0,i.v9)(m),n=(0,i.v9)(h);(0,r.useEffect)((function(){e((0,s.yF)())}),[e]);var a=(0,I.a)().user;return(0,c.jsxs)(k.Z,{theme:M,children:[(0,c.jsx)(L.Z,{position:"static",color:"default",elevation:0,sx:{borderBottom:function(e){return"1px solid ".concat(e.palette.divider)},position:"fixed"},children:(0,c.jsxs)(E.Z,{sx:{flexWrap:"wrap"},children:[(0,c.jsx)(z.Z,{variant:"h6",color:"inherit",noWrap:!0,sx:{flexGrow:1},children:(0,c.jsx)(B.Z,{component:S.OL,to:"/",children:(0,c.jsx)("h6",{children:"PhoneBook"})})}),(0,c.jsx)("p",{children:a.email}),(0,c.jsx)(w.Z,{component:S.OL,to:"/",variant:"outlined",sx:{my:1,mx:1.5},onClick:function(){return e((0,N.ni)())},children:"Logout"})]})}),(0,c.jsxs)("div",{style:{display:"flex",alignItems:"center",flexDirection:"column",flexWrap:"wrap",paddingTop:"200px"},children:[(0,c.jsx)(b,{}),(0,c.jsx)("h2",{children:"Contacts"}),(0,c.jsx)(g,{}),t&&!n&&(0,c.jsx)("div",{children:(0,c.jsx)(A.g4,{height:"80",width:"80",radius:"9",color:"pink",ariaLabel:"three-dots-loading",wrapperStyle:{},wrapperClassName:"",visible:!0})}),n,(0,c.jsx)(p,{})]})]})},T=P},4507:function(e,t,n){n.d(t,{Z:function(){return _}});var r=n(7462),a=n(3366),o=n(2791),i=n(4942);var s=o.createContext(null);function c(){return o.useContext(s)}var u="function"===typeof Symbol&&Symbol.for?Symbol.for("mui.nested"):"__THEME_NESTED__",l=n(184);var d=function(e){var t=e.children,n=e.theme,a=c(),i=o.useMemo((function(){var e=null===a?n:function(e,t){return"function"===typeof t?t(e):(0,r.Z)({},e,t)}(a,n);return null!=e&&(e[u]=null!==a),e}),[n,a]);return(0,l.jsx)(s.Provider,{value:i,children:t})},m=n(2564),h=n(9120),f={};function p(e,t,n){var a=arguments.length>3&&void 0!==arguments[3]&&arguments[3];return o.useMemo((function(){var o=e&&t[e]||t;if("function"===typeof n){var s=n(o),c=e?(0,r.Z)({},t,(0,i.Z)({},e,s)):s;return a?function(){return c}:c}return e?(0,r.Z)({},t,(0,i.Z)({},e,n)):(0,r.Z)({},t,n)}),[e,t,n,a])}var x=function(e){var t=e.children,n=e.theme,r=e.themeId,a=(0,h.Z)(f),o=c()||f,i=p(r,a,n),s=p(r,o,n,!0);return(0,l.jsx)(d,{theme:s,children:(0,l.jsx)(m.T.Provider,{value:i,children:t})})},v=n(988),j=["theme"];function _(e){var t=e.theme,n=(0,a.Z)(e,j),o=t[v.Z];return(0,l.jsx)(x,(0,r.Z)({},n,{themeId:o?v.Z:void 0,theme:o||t}))}}}]);
//# sourceMappingURL=194.866a5f0d.chunk.js.map