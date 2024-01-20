<h1 align="center">react-use-zendesk</h1>
<p align="center">React Zendesk Web Widget integration written in typescript.</p>

## Features
* Web Widget api available. Please see [Zendesk docs](https://developer.zendesk.com/api-reference/widget-messaging/web/core/)
* TypeScript support
* Only 25kb
* Working on NextJS/Gatsby


## ⚠️⚠️ Web widget vs Web Widget (classic) ⚠️ ⚠️

This library offers API only for the new version called Web widget. 
For more information please read [the comparison](https://support.zendesk.com/hc/en-us/articles/4429429087002-Comparing-the-Zendesk-Web-Widgets)

## Installation

```sh
npm i react-use-zendesk
```

## Usage
```ts


import { ZendeskProvider, useZendesk } from 'react-use-zendesk';

const App = () => (
  <ZendeskProvider apiKey={process.env.API_KEY || ""}>
    <Home />
  </ZendeskProvider>
);

const Home = () => {
  const { open, unreadMessages } = useZendesk();

  return <div>
	  you have ${unreadMessages} messages!
	 <button onClick={open}>Open chat now</button>
  </div>;
};
```

## API
* [ZendeskProvider](#zendesk-provider)
* [useZendesk](#useZendesk)

### ZendeskProvider
library uses `ZendeskProvider` to initialize the `window.zE` instance. If any listeners are passed, the provider will make sure these callbacks are attached.

Place the `ZendeskProvider` as high as possible in your application. This will make sure you can call `useZendesk` anywhere. Remember that the provider under the hood use React.context, so in Next JS you have to declare `"use client"` for the component. 

#### Props
| name                | type             | description                                                                             | required | default |
|---------------------|------------------|-----------------------------------------------------------------------------------------|----------|---------|
| apiKey               | string           | api key of your Zendesk account                                                        | X     |         |
| children            | React.ReactNode  | React children                                                                          | true     |         |
| onOpen              | () => void       | triggered when the Widget opens (chat is visible). Please see `isOpen` field if you want to get chat state by hooks                                                   |     |         |
| onClose              | () => void       | triggered when the Widget closes (chat is hidden). Please see `isOpen` field if you want to get chat state by hooks                                                      |     |         |
| onUnreadMessages | (count; number) => void | triggered when the current number of unread messages changes. If attached, Zendesk triggers this callback after initialization. Please see `unreadMessages` field if you want to get the number by hook                         |     |         |


#### Example
```ts
const App = () => {
  const handleOpen = () => console.log('Chat become visible');
  const handleClose = () => console.log('Chat become hidden');
  const handleUnreadMessages = (count: number) => console.log('You have',count,'messages to read');
  
  return (
    <ZendeskProvider
		apiKey={process.env.KEY || ""}
		onOpen={handleOpen}
		onClose={handleClose}
		onUnreadMessages={handleUnreadMessages}
    >
      <p>fake child example</p>
    </ZendeskProvider>
  );
};
```

### useZendesk
Used to retrieve all methods bundled with Zendesk Web Widget. These are based on the official [Zendesk docs](https://developer.zendesk.com/api-reference/widget-messaging/web/core/).  For each api if you want to get more details please refer to Zendesk Docs.
Library add some useful fields.

 Make sure `ZendeskProvider` is wrapped around your component when calling `useZendesk()`. 

**Remark** - You can't use `useZendesk()` in the same component where `ZendeskProvider` is initialized.

#### API

| name            | type                                       | description                                                                                                                         |
|-----------------|--------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------|
| isOpen              | boolean          | the visibility status of the messenger                                                  |                             |
| show            | () => void                                 | Displays the widget. The widget is displayed by default on page load. You don't need to call <code>show</code> to display the widget unless you use <code>hide.</code>     
| hide            | () => void                                 | Hides all parts of the widget from the page. You can invoke it before or after page load.
| open            | () => void                                 | Opens the messaging Web Widget. Chat become visible
| close            | () => void                                 | Closes the messaging Web Widget
| setLocale            | (newLocale: string) => void                                 | Sets the locale of the messaging Web Widget.
| setZIndex            | (newZIndex: number) => void                                 | Sets the CSS property z-index on all the iframes for the messaging WebWidget.
| setCookies            | (isEnabled: boolean) => void                                 | The messaging Web Widget uses a mixture of cookies as well as local and session storage in order to function.
| setConversationFields            | (conversationFields: ZendeskConversationField[]) => void                                 | Allows values for conversation fields to be set in the client to add contextual data about the conversation.
| setConversationTags            | (conversationTags: string[]) => void                                 | Allows custom conversation tags to be set in the client to add contextual data about the conversation
| loginUser            | (jwtToken: string) => void                                 | If your application has a login flow, or if a user needs to access the same conversation from multiple devices
| logoutUser            | () => void                                 | Your app may have a logout function that brings users back to a login screen. In this case, revert the messaging Web Widget to a pre-login state
| isOpen            | boolean                                 | this flag indicates if chat is visible or hidden. Derivated from from `onOpen` and `onCLose`
| unreadMessages            | number / undefined                                 | this flag indicates number of unread messages . Derivated from from `onUnreadMessages`. Before internal callback this flag is `undefined`                       |                                                                                                                                           


#### Example
```ts
import { ZendeskProvider, useZendesk } from 'react-use-zendesk';

const App = () => (
  <ZendeskProvider apiKey={process.env.KEY || ""}>
    <Home />
  </ZendeskProvider>
);

const Home = () => {
  const {
    open,
    close,
    isOpen,
    unreadMessages,
    setLocale
  } = useZendesk();

  const changeLocale = () => setLocale("es")
  
  return (
    <>
	  <p>you have {unreadMessages} unread messages</p>
	  <p>your chat is ${isOpen ? "visible" : "hidden"}</p>
      <button onClick={changeLocale}>Set ES as locale</button>   
    </>
  );
};
``` 

## Examples 
Go to [examples](https://github.com/multivoltage/react-use-zendesk/tree/main/apps/docs) to check out some integrations ( NextJS...).
