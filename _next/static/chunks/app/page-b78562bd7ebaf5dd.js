(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{4850:function(e,t,n){"use strict";var s,o;e.exports=(null==(s=n.g.process)?void 0:s.env)&&"object"==typeof(null==(o=n.g.process)?void 0:o.env)?n.g.process:n(3079)},8923:function(e,t,n){Promise.resolve().then(n.bind(n,3492))},3492:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return f}});var s=n(7573),o=n(7653),i=(0,o.createContext)(void 0),r=function(e,t){for(var n=arguments.length,s=Array(n>2?n-2:0),o=2;o<n;o++)s[o-2]=arguments[o];if(window&&window.zE)return window.zE.apply(null,[e,t,...s])},a=e=>{let{apiKey:t,onOpen:n,onClose:s,onUnreadMessages:a,children:l}=e,c=(0,o.useRef)(!1),[d,u]=o.useState(!1),[h,p]=o.useState(void 0);function g(){c.current||(r("messenger:on","open",function(){u(!0),n&&n()}),r("messenger:on","close",function(){u(!1),s&&s()}),r("messenger:on","unreadMessages",function(e){p(e),a&&a(e)}),c.current=!0)}(0,o.useEffect)(()=>{!function(e,t){if(e&&void 0===window.zE){var n=function(){setTimeout(function(){var n=document.createElement("script");n.id="ze-snippet",n.type="text/javascript",n.async=!0,n.onload=t,n.src="https://static.zdassets.com/ekr/snippet.js?key="+e;var s=document.getElementsByTagName("script")[0];null==s||s.parentNode.insertBefore(n,s)},0)};"complete"===document.readyState?n():window.attachEvent?window.attachEvent("onload",n):window.addEventListener("load",n,!1)}}(t,g)},[t]);let f=o.useCallback(()=>{r("messenger","show")},[]),m=o.useCallback(()=>{r("messenger","hide")},[]),x=o.useCallback(()=>{r("messenger","open")},[]),v=o.useCallback(()=>{r("messenger","close")},[]),b=o.useCallback(e=>{r("messenger:set","locale",e)},[]),j=o.useCallback(e=>{r("messenger:set","zIndex",e)},[]),k=o.useCallback(e=>{r("messenger:set","cookies",e)},[]),y=o.useCallback(e=>{r("messenger:set","conversationFields",e)},[]),w=o.useCallback(e=>{r("messenger:set","conversationTags",e)},[]),C=o.useCallback(e=>{r("messenger","loginUser",t=>{t(e)})},[]),T=o.useCallback(()=>{r("messenger","logoutUser")},[]);return o.createElement(i.Provider,{value:{show:f,hide:m,open:x,close:v,setLocale:b,setZIndex:j,setCookies:k,setConversationFields:y,setConversationTags:w,loginUser:C,logoutUser:T,isOpen:d,unreadMessages:h}},l)};function l(){let e=o.useContext(i);if(void 0===e)throw Error('"useZendesk" must be used within "ZendeskProvider"');return e}let c=e=>{let{title:t,description:n,buttonText:o,onClick:i}=e,r=l();return(0,s.jsxs)("section",{className:"section",children:[(0,s.jsx)("div",{className:"title",children:t}),(0,s.jsxs)("div",{className:"row-grid",children:[(0,s.jsx)("div",{children:n}),(0,s.jsx)("div",{children:(0,s.jsx)("button",{className:"button",onClick:function(){i(r)},children:o})})]})]})},d=()=>{let[e,t]=(0,o.useState)(!0),n=[{id:"messenger show",title:"Show",description:(0,s.jsxs)("div",{children:["Displays the widget. The widget is displayed by default on page load. You don't need to call ",(0,s.jsx)("code",{children:"show"})," to display the widget unless you use ",(0,s.jsx)("code",{children:"hide."})]}),buttonText:"show",onClick:e=>{let{show:t}=e;t()}},{id:"messenger hide",title:"Hide",description:(0,s.jsx)("div",{children:"Hides all parts of the widget from the page. You can invoke it before or after page load."}),buttonText:"hide",onClick:e=>{let{hide:t}=e;t()}},{id:"messenger open",title:"Open",description:(0,s.jsx)("div",{children:"Opens the messaging Web Widget. Chat become visible"}),buttonText:"open",onClick:e=>{let{open:t}=e;t()}},{id:"messenger close",title:"Close",description:(0,s.jsx)("div",{children:"Closes the messaging Web Widget."}),buttonText:"close",onClick:e=>{let{close:t}=e;t()}},{id:"messenger set locale",title:"Set locale",description:(0,s.jsxs)("div",{children:["Sets the locale of the messaging Web Widget. For a list of supported locales and associated codes, use the following"," ",(0,s.jsx)("a",{href:"https://support.zendesk.com/api/v2/locales/public.json",target:"_blank",children:"Zendesk public REST API endpoint"})]}),buttonText:"set DE locale",onClick:e=>{let{setLocale:t}=e;t("de")}},{id:"messenger set zIndex",title:"Set zIndex",description:(0,s.jsx)("div",{children:"Sets the CSS property z-index on all the iframes for the messaging Web Widget."}),buttonText:"set (100) zIndex",onClick:e=>{let{setZIndex:t}=e;t(100)}},{id:"messenger set cookies",title:"Set cookies",description:(0,s.jsx)("div",{children:"The messaging Web Widget uses a mixture of cookies as well as local and session storage in order to function."}),buttonText:"set (".concat(!e,") cookies"),onClick:n=>{let{setCookies:s}=n;s(!e),t(!e)}},{id:"messenger set conversationFields",title:"Set conversation fields",description:(0,s.jsxs)("div",{children:["Allows values for conversation fields to be set in the client to add contextual data about the conversation. To learn more about Messaging Metadata, see"," ",(0,s.jsx)("a",{href:"https://support.zendesk.com/hc/en-us/articles/5658339908378",target:"_blank",children:"Introduction to Messaging Metadata."}),(0,s.jsx)("br",{}),(0,s.jsx)("br",{}),"example fields: ",(0,s.jsx)("code",{children:'[{id: "123456789", value: 100.5}]'})]}),buttonText:"set fields",onClick:e=>{let{setConversationFields:t}=e;t([{id:"123456789",value:100.5}])}},{id:"messenger set conversationTags",title:"Set conversation tags",description:(0,s.jsxs)("div",{children:["Allows custom conversation tags to be set in the client to add contextual data about the conversation. To learn more about Messaging Metadata, see"," ",(0,s.jsx)("a",{href:"https://support.zendesk.com/hc/en-us/articles/5868905484442",target:"_blank",children:"Introduction to Messaging Metadata."}),(0,s.jsx)("br",{}),(0,s.jsx)("br",{}),"example tags: ",(0,s.jsx)("code",{children:'["sales", "computer_accessories"]'})]}),buttonText:"set tags",onClick:e=>{let{setConversationTags:t}=e;t(["sales","computer_accessories"])}},{id:"messenger logins",title:"Login",description:(0,s.jsxs)("div",{children:["If your application has a login flow, or if a user needs to access the same conversation from multiple devices, you can use the"," ",(0,s.jsx)("code",{children:"loginUser"})," API.",(0,s.jsx)("br",{}),(0,s.jsx)("br",{})," This command cannot wotk in this demo since token is"," ",(0,s.jsx)("code",{children:"xyz"})]}),buttonText:"login",onClick:e=>{let{loginUser:t}=e;t("xyz")}},{id:"messenger logout",title:"Logout",description:(0,s.jsxs)("div",{children:["Your app may have a logout function that brings users back to a login screen. In this case, revert the messaging Web Widget to a pre-login state by calling the ",(0,s.jsx)("code",{children:"logoutUser"})," API."]}),buttonText:"logout",onClick:e=>{let{logoutUser:t}=e;t()}}];return(0,s.jsx)(s.Fragment,{children:n.map(e=>{let{title:t,description:n,onClick:o,buttonText:i,id:r}=e;return(0,s.jsx)(c,{id:r,title:t,description:n,onClick:o,buttonText:i},r)})})};function u(){let{isOpen:e,unreadMessages:t}=l();return(0,s.jsxs)("div",{className:"valuesContainer",children:[(0,s.jsx)("div",{className:"title",children:"Flags:"}),(0,s.jsxs)("p",{children:["isOpen: ",(0,s.jsx)("span",{className:"badge",children:String(e)})]}),(0,s.jsxs)("p",{children:["unreadMessages: ",(0,s.jsx)("span",{className:"badge",children:String(t)})]})]})}let h=e=>{let{id:t,params:n}=e,[i,r]=(0,o.useState)(!1);return(0,o.useEffect)(()=>{r(!0)},[]),(0,s.jsxs)("div",{className:"callBackContainer ".concat(i&&"zoom"),children:[(0,s.jsx)("code",{children:t})," called with arguments:",(0,s.jsx)("pre",{children:JSON.stringify(n,null,4)})]})};var p=n(4850);let g=e=>{let{onChangeKey:t}=e,[n,i]=(0,o.useState)(p.env.NEXT_PUBLIC_ZENDESK_API_KEY||""),r=(0,o.useRef)(null);return(0,o.useEffect)(()=>{t(n)},[n]),(0,s.jsxs)("div",{className:"key-container",children:[(0,s.jsx)("p",{className:"title",children:"insert API KEY"}),(0,s.jsx)("input",{ref:r,type:"text",value:n,onChange:function(e){i(e.target.value)}})]})};function f(){let[e,t]=(0,o.useState)(""),[n,i]=(0,o.useState)([]);return(0,s.jsx)(a,{apiKey:e,onOpen:function(){i(e=>[{params:arguments,id:"onOpen",key:"onOpen"+e.length},...e])},onClose:function(){i(e=>[{params:arguments,id:"onClose",key:"onClose"+e.length},...e])},onUnreadMessages:function(){i(e=>[{params:arguments,id:"onUnreadMessages",key:"onUnreadMessages"+e.length},...e])},children:(0,s.jsx)("main",{className:"main",children:(0,s.jsxs)("div",{className:"section-grid",children:[(0,s.jsx)("div",{className:"example-list",children:(0,s.jsx)(d,{})}),(0,s.jsxs)("div",{children:[(0,s.jsx)(g,{onChangeKey:function(e){t(e)}}),(0,s.jsx)(u,{}),(0,s.jsx)("div",{className:"callback-list",children:n.map(e=>{let{id:t,params:n,key:o}=e;return(0,s.jsx)(h,{params:n,id:t},o)})})]})]})})})}},3079:function(e){!function(){var t={229:function(e){var t,n,s,o=e.exports={};function i(){throw Error("setTimeout has not been defined")}function r(){throw Error("clearTimeout has not been defined")}function a(e){if(t===setTimeout)return setTimeout(e,0);if((t===i||!t)&&setTimeout)return t=setTimeout,setTimeout(e,0);try{return t(e,0)}catch(n){try{return t.call(null,e,0)}catch(n){return t.call(this,e,0)}}}!function(){try{t="function"==typeof setTimeout?setTimeout:i}catch(e){t=i}try{n="function"==typeof clearTimeout?clearTimeout:r}catch(e){n=r}}();var l=[],c=!1,d=-1;function u(){c&&s&&(c=!1,s.length?l=s.concat(l):d=-1,l.length&&h())}function h(){if(!c){var e=a(u);c=!0;for(var t=l.length;t;){for(s=l,l=[];++d<t;)s&&s[d].run();d=-1,t=l.length}s=null,c=!1,function(e){if(n===clearTimeout)return clearTimeout(e);if((n===r||!n)&&clearTimeout)return n=clearTimeout,clearTimeout(e);try{n(e)}catch(t){try{return n.call(null,e)}catch(t){return n.call(this,e)}}}(e)}}function p(e,t){this.fun=e,this.array=t}function g(){}o.nextTick=function(e){var t=Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];l.push(new p(e,t)),1!==l.length||c||a(h)},p.prototype.run=function(){this.fun.apply(null,this.array)},o.title="browser",o.browser=!0,o.env={},o.argv=[],o.version="",o.versions={},o.on=g,o.addListener=g,o.once=g,o.off=g,o.removeListener=g,o.removeAllListeners=g,o.emit=g,o.prependListener=g,o.prependOnceListener=g,o.listeners=function(e){return[]},o.binding=function(e){throw Error("process.binding is not supported")},o.cwd=function(){return"/"},o.chdir=function(e){throw Error("process.chdir is not supported")},o.umask=function(){return 0}}},n={};function s(e){var o=n[e];if(void 0!==o)return o.exports;var i=n[e]={exports:{}},r=!0;try{t[e](i,i.exports,s),r=!1}finally{r&&delete n[e]}return i.exports}s.ab="//";var o=s(229);e.exports=o}()},8294:function(e,t,n){"use strict";var s=n(7653),o=Symbol.for("react.element"),i=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,a=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function c(e,t,n){var s,i={},c=null,d=null;for(s in void 0!==n&&(c=""+n),void 0!==t.key&&(c=""+t.key),void 0!==t.ref&&(d=t.ref),t)r.call(t,s)&&!l.hasOwnProperty(s)&&(i[s]=t[s]);if(e&&e.defaultProps)for(s in t=e.defaultProps)void 0===i[s]&&(i[s]=t[s]);return{$$typeof:o,type:e,key:c,ref:d,props:i,_owner:a.current}}t.Fragment=i,t.jsx=c,t.jsxs=c},7573:function(e,t,n){"use strict";e.exports=n(8294)}},function(e){e.O(0,[293,16,744],function(){return e(e.s=8923)}),_N_E=e.O()}]);