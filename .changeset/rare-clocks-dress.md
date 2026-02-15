---
"react-use-zendesk": major
---

allow to change all options for customization (read docs).
Method signature changed since user now can pass also other customization properties.
```js
setCustomization({
    primary: "#DB5F46",
    background: "#518e37ff",
})
```
Now accept different object 
```js
setCustomization({
    theme: {
        primary: "#DB5F46",
        background: "#518e37ff",
    },
    common: {
        contentScale: 150
    }
})
```