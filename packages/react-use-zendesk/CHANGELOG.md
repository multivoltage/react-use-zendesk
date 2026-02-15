# react-use-zendesk

## 2.0.0

### Major Changes

- 3733cf4: allow to change all options for customization (read docs).
  Method signature changed since user now can pass also other customization properties.
  ```js
  setCustomization({
    primary: "#DB5F46",
    background: "#518e37ff",
  });
  ```
  Now accept different object
  ```js
  setCustomization({
    theme: {
      primary: "#DB5F46",
      background: "#518e37ff",
    },
    common: {
      contentScale: 150,
    },
  });
  ```

### Minor Changes

- 50ba45e: add onMessagesShown callback
- 078b744: add onConversationAgentAssigned callback
- dd895d0: add onConversationStarted callback
- cc9c937: add newConversationButtonClicked callback
- a4a1bba: add onConversationWithAgentRequested callback
- 36d6a1a: add onConversationOpened callback
- 81bcbc0: add onProactiveMessageDisplayed/onProactiveMessageClicked callbacks

### Patch Changes

- e8698ed: change setCookie parameter types
- 276dae5: add onOpen onClose event object

## 1.5.0

### Minor Changes

- e595001: add messenger:ui/newConversation method

## 1.4.1

### Patch Changes

- d9726d6: chore: update readme

## 1.4.0

### Minor Changes

- 6ce61df: add setCustomize method

## 1.3.0

### Minor Changes

- 9009048: add useSessionAuth method

## 1.2.0

### Minor Changes

- 67340b8: Login Callback Not Exposed for Error Handling #89

## 1.1.2

### Patch Changes

- 374e64a: chore: change example.gif

## 1.1.1

### Patch Changes

- 8940097: chore: update readme

## 1.1.0

### Minor Changes

- 9c420c9: fix: reset all state and re-initialize when api key changes
- 6e7f102: feat: add resetWidget option and onResetWidget callback

### Patch Changes

- a368387: chore: bump @changesets/cli
- 089c5a6: chore: better code for callback options
- 5c0cff5: bump next@15

## 1.0.3

### Patch Changes

- bd6ce69: rework relations dependencies, in this way changesets will ask again for bump version

## 1.0.2

### Patch Changes

- a50f3e2: set flag for jsx/runtime when build library

## 1.0.1

### Patch Changes

- update readme in library package

## 1.0.0

### Major Changes

- first release
