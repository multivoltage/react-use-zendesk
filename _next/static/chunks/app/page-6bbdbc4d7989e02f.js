(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[974],{6585:(e,s,t)=>{Promise.resolve().then(t.bind(t,2341))},2341:(e,s,t)=>{"use strict";t.r(s),t.d(s,{default:()=>m});var n=t(5155),i=t(2115),o=(0,i.createContext)(void 0),a=function(e,s){for(var t=arguments.length,n=Array(t>2?t-2:0),i=2;i<t;i++)n[i-2]=arguments[i];if(window&&window.zE)return window.zE.apply(null,[e,s,...n])},l=e=>{let{apiKey:s,onOpen:t,onClose:n,onUnreadMessages:l,children:r}=e,c=(0,i.useRef)(!1),[d,u]=i.useState(!1),[g,h]=i.useState(void 0);function p(){c.current||(a("messenger:on","open",function(){u(!0),t&&t()}),a("messenger:on","close",function(){u(!1),n&&n()}),a("messenger:on","unreadMessages",function(e){h(e),l&&l(e)}),c.current=!0)}(0,i.useEffect)(()=>{!function(e,s){if(e&&void 0===window.zE){var t=function(){setTimeout(function(){var t=document.createElement("script");t.id="ze-snippet",t.type="text/javascript",t.async=!0,t.onload=s,t.src="https://static.zdassets.com/ekr/snippet.js?key="+e;var n=document.getElementsByTagName("script")[0];null==n||n.parentNode.insertBefore(t,n)},0)};"complete"===document.readyState?t():window.attachEvent?window.attachEvent("onload",t):window.addEventListener("load",t,!1)}}(s,p)},[s]);let m=i.useCallback(()=>{a("messenger","show")},[]),x=i.useCallback(()=>{a("messenger","hide")},[]),v=i.useCallback(()=>{a("messenger","open")},[]),b=i.useCallback(()=>{a("messenger","close")},[]),f=i.useCallback(e=>{a("messenger:set","locale",e)},[]),j=i.useCallback(e=>{a("messenger:set","zIndex",e)},[]),k=i.useCallback(e=>{a("messenger:set","cookies",e)},[]),C=i.useCallback(e=>{a("messenger:set","conversationFields",e)},[]),w=i.useCallback(e=>{a("messenger:set","conversationTags",e)},[]),y=i.useCallback(e=>{a("messenger","loginUser",s=>{s(e)})},[]),T=i.useCallback(()=>{a("messenger","logoutUser")},[]);return i.createElement(o.Provider,{value:{show:m,hide:x,open:v,close:b,setLocale:f,setZIndex:j,setCookies:k,setConversationFields:C,setConversationTags:w,loginUser:y,logoutUser:T,isOpen:d,unreadMessages:g}},r)};function r(){let e=i.useContext(o);if(void 0===e)throw Error('"useZendesk" must be used within "ZendeskProvider"');return e}let c=e=>{let{title:s,description:t,buttonText:i,onClick:o}=e,a=r();return(0,n.jsxs)("section",{className:"section",children:[(0,n.jsx)("div",{className:"title",children:s}),(0,n.jsxs)("div",{className:"row-grid",children:[(0,n.jsx)("div",{children:t}),(0,n.jsx)("div",{children:(0,n.jsx)("button",{className:"button",onClick:function(){o(a)},children:i})})]})]})},d=()=>{let[e,s]=(0,i.useState)(!0),t=[{id:"messenger show",title:"Show",description:(0,n.jsxs)("div",{children:["Displays the widget. The widget is displayed by default on page load. You don't need to call ",(0,n.jsx)("code",{children:"show"})," to display the widget unless you use ",(0,n.jsx)("code",{children:"hide."})]}),buttonText:"show",onClick:e=>{let{show:s}=e;s()}},{id:"messenger hide",title:"Hide",description:(0,n.jsx)("div",{children:"Hides all parts of the widget from the page. You can invoke it before or after page load."}),buttonText:"hide",onClick:e=>{let{hide:s}=e;s()}},{id:"messenger open",title:"Open",description:(0,n.jsx)("div",{children:"Opens the messaging Web Widget. Chat become visible"}),buttonText:"open",onClick:e=>{let{open:s}=e;s()}},{id:"messenger close",title:"Close",description:(0,n.jsx)("div",{children:"Closes the messaging Web Widget."}),buttonText:"close",onClick:e=>{let{close:s}=e;s()}},{id:"messenger set locale",title:"Set locale",description:(0,n.jsxs)("div",{children:["Sets the locale of the messaging Web Widget. For a list of supported locales and associated codes, use the following"," ",(0,n.jsx)("a",{href:"https://support.zendesk.com/api/v2/locales/public.json",target:"_blank",children:"Zendesk public REST API endpoint"})]}),buttonText:"set DE locale",onClick:e=>{let{setLocale:s}=e;s("de")}},{id:"messenger set zIndex",title:"Set zIndex",description:(0,n.jsx)("div",{children:"Sets the CSS property z-index on all the iframes for the messaging Web Widget."}),buttonText:"set (100) zIndex",onClick:e=>{let{setZIndex:s}=e;s(100)}},{id:"messenger set cookies",title:"Set cookies",description:(0,n.jsx)("div",{children:"The messaging Web Widget uses a mixture of cookies as well as local and session storage in order to function."}),buttonText:"set (".concat(!e,") cookies"),onClick:t=>{let{setCookies:n}=t;n(!e),s(!e)}},{id:"messenger set conversationFields",title:"Set conversation fields",description:(0,n.jsxs)("div",{children:["Allows values for conversation fields to be set in the client to add contextual data about the conversation. To learn more about Messaging Metadata, see"," ",(0,n.jsx)("a",{href:"https://support.zendesk.com/hc/en-us/articles/5658339908378",target:"_blank",children:"Introduction to Messaging Metadata."}),(0,n.jsx)("br",{}),(0,n.jsx)("br",{}),"example fields: ",(0,n.jsx)("code",{children:'[{id: "123456789", value: 100.5}]'})]}),buttonText:"set fields",onClick:e=>{let{setConversationFields:s}=e;s([{id:"123456789",value:100.5}])}},{id:"messenger set conversationTags",title:"Set conversation tags",description:(0,n.jsxs)("div",{children:["Allows custom conversation tags to be set in the client to add contextual data about the conversation. To learn more about Messaging Metadata, see"," ",(0,n.jsx)("a",{href:"https://support.zendesk.com/hc/en-us/articles/5868905484442",target:"_blank",children:"Introduction to Messaging Metadata."}),(0,n.jsx)("br",{}),(0,n.jsx)("br",{}),"example tags: ",(0,n.jsx)("code",{children:'["sales", "computer_accessories"]'})]}),buttonText:"set tags",onClick:e=>{let{setConversationTags:s}=e;s(["sales","computer_accessories"])}},{id:"messenger logins",title:"Login",description:(0,n.jsxs)("div",{children:["If your application has a login flow, or if a user needs to access the same conversation from multiple devices, you can use the"," ",(0,n.jsx)("code",{children:"loginUser"})," API.",(0,n.jsx)("br",{}),(0,n.jsx)("br",{})," This command cannot wotk in this demo since token is"," ",(0,n.jsx)("code",{children:"xyz"})]}),buttonText:"login",onClick:e=>{let{loginUser:s}=e;s("xyz")}},{id:"messenger logout",title:"Logout",description:(0,n.jsxs)("div",{children:["Your app may have a logout function that brings users back to a login screen. In this case, revert the messaging Web Widget to a pre-login state by calling the ",(0,n.jsx)("code",{children:"logoutUser"})," API."]}),buttonText:"logout",onClick:e=>{let{logoutUser:s}=e;s()}}];return(0,n.jsx)(n.Fragment,{children:t.map(e=>{let{title:s,description:t,onClick:i,buttonText:o,id:a}=e;return(0,n.jsx)(c,{id:a,title:s,description:t,onClick:i,buttonText:o},a)})})};function u(){let{isOpen:e,unreadMessages:s}=r();return(0,n.jsxs)("div",{className:"valuesContainer",children:[(0,n.jsx)("div",{className:"title",children:"Flags:"}),(0,n.jsxs)("p",{children:["isOpen: ",(0,n.jsx)("span",{className:"badge",children:String(e)})]}),(0,n.jsxs)("p",{children:["unreadMessages: ",(0,n.jsx)("span",{className:"badge",children:String(s)})]})]})}let g=e=>{let{id:s,params:t}=e,[o,a]=(0,i.useState)(!1);return(0,i.useEffect)(()=>{a(!0)},[]),(0,n.jsxs)("div",{className:"callBackContainer ".concat(o&&"zoom"),children:[(0,n.jsx)("code",{children:s})," called with arguments:",(0,n.jsx)("pre",{children:JSON.stringify(t,null,4)})]})};var h=t(2818);let p=e=>{let{onChangeKey:s}=e,[t,o]=(0,i.useState)(h.env.NEXT_PUBLIC_ZENDESK_API_KEY||""),a=(0,i.useRef)(null);return(0,i.useEffect)(()=>{s(t)},[t]),(0,n.jsxs)("div",{className:"key-container",children:[(0,n.jsx)("p",{className:"title",children:"insert API KEY"}),(0,n.jsx)("input",{ref:a,type:"text",value:t,onChange:function(e){o(e.target.value)}})]})};function m(){let[e,s]=(0,i.useState)(""),[t,o]=(0,i.useState)([]);return(0,n.jsx)(l,{apiKey:e,onOpen:function(){o(e=>[{params:arguments,id:"onOpen",key:"onOpen"+e.length},...e])},onClose:function(){o(e=>[{params:arguments,id:"onClose",key:"onClose"+e.length},...e])},onUnreadMessages:function(){o(e=>[{params:arguments,id:"onUnreadMessages",key:"onUnreadMessages"+e.length},...e])},children:(0,n.jsx)("main",{className:"main",children:(0,n.jsxs)("div",{className:"section-grid",children:[(0,n.jsx)("div",{className:"example-list",children:(0,n.jsx)(d,{})}),(0,n.jsxs)("div",{children:[(0,n.jsx)(p,{onChangeKey:function(e){s(e)}}),(0,n.jsx)(u,{}),(0,n.jsx)("div",{className:"callback-list",children:t.map(e=>{let{id:s,params:t,key:i}=e;return(0,n.jsx)(g,{params:t,id:s},i)})})]})]})})})}}},e=>{var s=s=>e(e.s=s);e.O(0,[441,517,358],()=>s(6585)),_N_E=e.O()}]);