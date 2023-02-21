![Svelte Jawns Logo, which is the Wawa logo with the text replaced with the word "Jawn"](https://github.com/atuttle/svelte-jawns/blob/main/static/favicon.png?raw=true)

# Svelte Jawns

A collection of Svelte components built with TypeScript and styled with Tailwind.

Work still very much in progress.

[See component demos here](https://svelte-jawns.surge.sh)

## Requirements

If you're going to use these components in your project you have to have Tailwind installed (and why wouldn't you? it rocks!) and there's 1 required config change so that the Tailwind JIT compiler will handle all of the classes used in `svelte-jawns`:

Edit your **tailwind.config.cjs** to add the `svelte-jawns` folder (inside `node_modules/`) as content that Tailwind JIT should consider:

```js
content: [...,'./node_modules/svelte-jawns/**/*.{html,js,svelte,ts}'],
```
