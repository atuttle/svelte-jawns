# Portal

Occasionally it is helpful to detach an element in the DOM from the place where you want to or need to write its source code. For example, Modals [should be](https://css-tricks.com/considerations-styling-modal/#aa-where-in-the-dom) last (or nearly so) inside the `<body>` tag to make styling their float-on-top appearance a little bit easier to predict.

Whatever you wrap in a `<Portal></Portal>` will be extraced from its current location in the DOM and appended to the end of the contents of `<body>`.
