![Svelte Jawns Logo, which is the Wawa logo with the text replaced with the word "Jawn"](https://github.com/atuttle/svelte-jawns/blob/main/static/favicon.png?raw=true)

# Svelte Jawns

A collection of Svelte components built with TypeScript and styled with Tailwind.

Work still very much in progress: [1.0 Checklist](https://github.com/atuttle/svelte-jawns/issues/3)

[See component demos here](https://svelte-jawns.surge.sh)

⚠️ 🖐️ Per [SemVer 2.0.0 rule #4](https://semver.org/#spec-item-4) breaking changes are allowed in every `v0.x.y` release breaking changes. Upgrade with caution. There be dragons here.

## Usage

To use these components in your project you must have Tailwind installed (and why wouldn't you? it rocks!) and make 1 required config change so that the Tailwind JIT compiler will handle all of the classes used in `svelte-jawns`:

Edit your **tailwind.config.cjs** to add `node_modules/svelte-jawns` as content that Tailwind JIT should consider:

```js
content: [...,'./node_modules/svelte-jawns/**/*.{html,js,svelte,ts}'],
```
