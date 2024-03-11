(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{8923:function(e,t,s){Promise.resolve().then(s.bind(s,3492))},3492:function(e,t,s){"use strict";s.r(t),s.d(t,{default:function(){return m}});var n=s(7573),i=s(7653),o=(0,i.createContext)(void 0),r=function(e,t){for(var s=arguments.length,n=Array(s>2?s-2:0),i=2;i<s;i++)n[i-2]=arguments[i];if(window&&window.zE)return window.zE.apply(null,[e,t,...n])},a=e=>{let{apiKey:t,onOpen:s,onClose:n,onUnreadMessages:a,children:l}=e,c=(0,i.useRef)(!1),[d,u]=i.useState(!1),[h,g]=i.useState(void 0);function p(){c.current||(r("messenger:on","open",function(){u(!0),s&&s()}),r("messenger:on","close",function(){u(!1),n&&n()}),r("messenger:on","unreadMessages",function(e){g(e),a&&a(e)}),c.current=!0)}(0,i.useEffect)(()=>{!function(e,t){if(e&&void 0===window.zE){var s=function(){setTimeout(function(){var s=document.createElement("script");s.id="ze-snippet",s.type="text/javascript",s.async=!0,s.onload=t,s.src="https://static.zdassets.com/ekr/snippet.js?key="+e;var n=document.getElementsByTagName("script")[0];null==n||n.parentNode.insertBefore(s,n)},0)};"complete"===document.readyState?s():window.attachEvent?window.attachEvent("onload",s):window.addEventListener("load",s,!1)}}(t,p)},[t]);let m=i.useCallback(()=>{r("messenger","show")},[]),f=i.useCallback(()=>{r("messenger","hide")},[]),x=i.useCallback(()=>{r("messenger","open")},[]),v=i.useCallback(()=>{r("messenger","close")},[]),b=i.useCallback(e=>{r("messenger:set","locale",e)},[]),j=i.useCallback(e=>{r("messenger:set","zIndex",e)},[]),k=i.useCallback(e=>{r("messenger:set","cookies",e)},[]),w=i.useCallback(e=>{r("messenger:set","conversationFields",e)},[]),y=i.useCallback(e=>{r("messenger:set","conversationTags",e)},[]),C=i.useCallback(e=>{r("messenger","loginUser",t=>{t(e)})},[]),T=i.useCallback(()=>{r("messenger","logoutUser")},[]);return i.createElement(o.Provider,{value:{show:m,hide:f,open:x,close:v,setLocale:b,setZIndex:j,setCookies:k,setConversationFields:w,setConversationTags:y,loginUser:C,logoutUser:T,isOpen:d,unreadMessages:h}},l)};function l(){let e=i.useContext(o);if(void 0===e)throw Error('"useZendesk" must be used within "ZendeskProvider"');return e}let c=e=>{let{title:t,description:s,buttonText:i,onClick:o}=e,r=l();return(0,n.jsxs)("section",{className:"section",children:[(0,n.jsx)("div",{className:"title",children:t}),(0,n.jsxs)("div",{className:"row-grid",children:[(0,n.jsx)("div",{children:s}),(0,n.jsx)("div",{children:(0,n.jsx)("button",{className:"button",onClick:function(){o(r)},children:i})})]})]})},d=()=>{let[e,t]=(0,i.useState)(!0),s=[{id:"messenger show",title:"Show",description:(0,n.jsxs)("div",{children:["Displays the widget. The widget is displayed by default on page load. You don't need to call ",(0,n.jsx)("code",{children:"show"})," to display the widget unless you use ",(0,n.jsx)("code",{children:"hide."})]}),buttonText:"show",onClick:e=>{let{show:t}=e;t()}},{id:"messenger hide",title:"Hide",description:(0,n.jsx)("div",{children:"Hides all parts of the widget from the page. You can invoke it before or after page load."}),buttonText:"hide",onClick:e=>{let{hide:t}=e;t()}},{id:"messenger open",title:"Open",description:(0,n.jsx)("div",{children:"Opens the messaging Web Widget. Chat become visible"}),buttonText:"open",onClick:e=>{let{open:t}=e;t()}},{id:"messenger close",title:"Close",description:(0,n.jsx)("div",{children:"Closes the messaging Web Widget."}),buttonText:"close",onClick:e=>{let{close:t}=e;t()}},{id:"messenger set locale",title:"Set locale",description:(0,n.jsxs)("div",{children:["Sets the locale of the messaging Web Widget. For a list of supported locales and associated codes, use the following"," ",(0,n.jsx)("a",{href:"https://support.zendesk.com/api/v2/locales/public.json",target:"_blank",children:"Zendesk public REST API endpoint"})]}),buttonText:"set DE locale",onClick:e=>{let{setLocale:t}=e;t("de")}},{id:"messenger set zIndex",title:"Set zIndex",description:(0,n.jsx)("div",{children:"Sets the CSS property z-index on all the iframes for the messaging Web Widget."}),buttonText:"set (100) zIndex",onClick:e=>{let{setZIndex:t}=e;t(100)}},{id:"messenger set cookies",title:"Set cookies",description:(0,n.jsx)("div",{children:"The messaging Web Widget uses a mixture of cookies as well as local and session storage in order to function."}),buttonText:"set (".concat(!e,") cookies"),onClick:s=>{let{setCookies:n}=s;n(!e),t(!e)}},{id:"messenger set conversationFields",title:"Set conversation fields",description:(0,n.jsxs)("div",{children:["Allows values for conversation fields to be set in the client to add contextual data about the conversation. To learn more about Messaging Metadata, see"," ",(0,n.jsx)("a",{href:"https://support.zendesk.com/hc/en-us/articles/5658339908378",target:"_blank",children:"Introduction to Messaging Metadata."}),(0,n.jsx)("br",{}),(0,n.jsx)("br",{}),"example fields: ",(0,n.jsx)("code",{children:'[{id: "123456789", value: 100.5}]'})]}),buttonText:"set fields",onClick:e=>{let{setConversationFields:t}=e;t([{id:"123456789",value:100.5}])}},{id:"messenger set conversationTags",title:"Set conversation tags",description:(0,n.jsxs)("div",{children:["Allows custom conversation tags to be set in the client to add contextual data about the conversation. To learn more about Messaging Metadata, see"," ",(0,n.jsx)("a",{href:"https://support.zendesk.com/hc/en-us/articles/5868905484442",target:"_blank",children:"Introduction to Messaging Metadata."}),(0,n.jsx)("br",{}),(0,n.jsx)("br",{}),"example tags: ",(0,n.jsx)("code",{children:'["sales", "computer_accessories"]'})]}),buttonText:"set tags",onClick:e=>{let{setConversationTags:t}=e;t(["sales","computer_accessories"])}},{id:"messenger logins",title:"Login",description:(0,n.jsxs)("div",{children:["If your application has a login flow, or if a user needs to access the same conversation from multiple devices, you can use the"," ",(0,n.jsx)("code",{children:"loginUser"})," API.",(0,n.jsx)("br",{}),(0,n.jsx)("br",{})," This command cannot wotk in this demo since token is"," ",(0,n.jsx)("code",{children:"xyz"})]}),buttonText:"login",onClick:e=>{let{loginUser:t}=e;t("xyz")}},{id:"messenger logout",title:"Logout",description:(0,n.jsxs)("div",{children:["Your app may have a logout function that brings users back to a login screen. In this case, revert the messaging Web Widget to a pre-login state by calling the ",(0,n.jsx)("code",{children:"logoutUser"})," API."]}),buttonText:"logout",onClick:e=>{let{logoutUser:t}=e;t()}}];return(0,n.jsx)(n.Fragment,{children:s.map(e=>{let{title:t,description:s,onClick:i,buttonText:o,id:r}=e;return(0,n.jsx)(c,{id:r,title:t,description:s,onClick:i,buttonText:o},r)})})};function u(){let{isOpen:e,unreadMessages:t}=l();return(0,n.jsxs)("div",{className:"valuesContainer",children:[(0,n.jsx)("div",{className:"title",children:"Flags:"}),(0,n.jsxs)("p",{children:["isOpen: ",(0,n.jsx)("span",{className:"badge",children:String(e)})]}),(0,n.jsxs)("p",{children:["unreadMessages: ",(0,n.jsx)("span",{className:"badge",children:String(t)})]})]})}let h=e=>{let{id:t,params:s}=e,[o,r]=(0,i.useState)(!1);return(0,i.useEffect)(()=>{r(!0)},[]),(0,n.jsxs)("div",{className:"callBackContainer ".concat(o&&"zoom"),children:[(0,n.jsx)("code",{children:t})," called with arguments:",(0,n.jsx)("pre",{children:JSON.stringify(s,null,4)})]})};var g=s(5504);let p=e=>{let{onChangeKey:t}=e,[s,o]=(0,i.useState)(g.env.NEXT_PUBLIC_ZENDESK_API_KEY||""),r=(0,i.useRef)(null);return(0,i.useEffect)(()=>{t(s)},[s]),(0,n.jsxs)("div",{className:"key-container",children:[(0,n.jsx)("p",{className:"title",children:"insert API KEY"}),(0,n.jsx)("input",{ref:r,type:"text",value:s,onChange:function(e){o(e.target.value)}})]})};function m(){let[e,t]=(0,i.useState)(""),[s,o]=(0,i.useState)([]);return(0,n.jsx)(a,{apiKey:e,onOpen:function(){o(e=>[{params:arguments,id:"onOpen",key:"onOpen"+e.length},...e])},onClose:function(){o(e=>[{params:arguments,id:"onClose",key:"onClose"+e.length},...e])},onUnreadMessages:function(){o(e=>[{params:arguments,id:"onUnreadMessages",key:"onUnreadMessages"+e.length},...e])},children:(0,n.jsx)("main",{className:"main",children:(0,n.jsxs)("div",{className:"section-grid",children:[(0,n.jsx)("div",{className:"example-list",children:(0,n.jsx)(d,{})}),(0,n.jsxs)("div",{children:[(0,n.jsx)(p,{onChangeKey:function(e){t(e)}}),(0,n.jsx)(u,{}),(0,n.jsx)("div",{className:"callback-list",children:s.map(e=>{let{id:t,params:s,key:i}=e;return(0,n.jsx)(h,{params:s,id:t},i)})})]})]})})})}},5504:function(e,t,s){"use strict";var n,i;e.exports=(null==(n=s.g.process)?void 0:n.env)&&"object"==typeof(null==(i=s.g.process)?void 0:i.env)?s.g.process:s(9185)},9185:function(e){!function(){var t={229:function(e){var t,s,n,i=e.exports={};function o(){throw Error("setTimeout has not been defined")}function r(){throw Error("clearTimeout has not been defined")}function a(e){if(t===setTimeout)return setTimeout(e,0);if((t===o||!t)&&setTimeout)return t=setTimeout,setTimeout(e,0);try{return t(e,0)}catch(s){try{return t.call(null,e,0)}catch(s){return t.call(this,e,0)}}}!function(){try{t="function"==typeof setTimeout?setTimeout:o}catch(e){t=o}try{s="function"==typeof clearTimeout?clearTimeout:r}catch(e){s=r}}();var l=[],c=!1,d=-1;function u(){c&&n&&(c=!1,n.length?l=n.concat(l):d=-1,l.length&&h())}function h(){if(!c){var e=a(u);c=!0;for(var t=l.length;t;){for(n=l,l=[];++d<t;)n&&n[d].run();d=-1,t=l.length}n=null,c=!1,function(e){if(s===clearTimeout)return clearTimeout(e);if((s===r||!s)&&clearTimeout)return s=clearTimeout,clearTimeout(e);try{s(e)}catch(t){try{return s.call(null,e)}catch(t){return s.call(this,e)}}}(e)}}function g(e,t){this.fun=e,this.array=t}function p(){}i.nextTick=function(e){var t=Array(arguments.length-1);if(arguments.length>1)for(var s=1;s<arguments.length;s++)t[s-1]=arguments[s];l.push(new g(e,t)),1!==l.length||c||a(h)},g.prototype.run=function(){this.fun.apply(null,this.array)},i.title="browser",i.browser=!0,i.env={},i.argv=[],i.version="",i.versions={},i.on=p,i.addListener=p,i.once=p,i.off=p,i.removeListener=p,i.removeAllListeners=p,i.emit=p,i.prependListener=p,i.prependOnceListener=p,i.listeners=function(e){return[]},i.binding=function(e){throw Error("process.binding is not supported")},i.cwd=function(){return"/"},i.chdir=function(e){throw Error("process.chdir is not supported")},i.umask=function(){return 0}}},s={};function n(e){var i=s[e];if(void 0!==i)return i.exports;var o=s[e]={exports:{}},r=!0;try{t[e](o,o.exports,n),r=!1}finally{r&&delete s[e]}return o.exports}n.ab="//";var i=n(229);e.exports=i}()}},function(e){e.O(0,[293,997,744],function(){return e(e.s=8923)}),_N_E=e.O()}]);