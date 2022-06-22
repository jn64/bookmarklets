This folder contains the source code of the bookmarklets, in two forms: how they are written, and minified to be used as bookmarklets.

## Original source

I write the bookmarklets in regular JavaScript, and format with [Prettier](https://prettier.io/) with `useTabs: true`.

Every bookmarklet is written as an IIFE ([Immediately Invoked Function Expression](https://developer.mozilla.org/en-US/docs/Glossary/IIFE)) for consistency, even if it only contains a single expression that doesn't need to be wrapped. The minifier will take care of unwrapping it so I don't have to think about it.

Note to self: writing obfuscated code or generating the smallest code possible is _not_ the goal of bookmarklets.

## Minifying

I used to hand-tweak the output from various minifiers, which had the potential for typos or errors.

Now I simply use [Terser](https://terser.org/) with a little bit of bash, and use the minified output exactly as-is for the bookmarklets. Please refer to [`bk.sh`](./bk.sh) for details. This page may become outdated when I update the shell script.

### Terser

To install and use Terser as a local npm module:

```shell
$ npm install terser@'~5'
$ npx terser --help
```

Example usage:

```shell
terser --ecma 2015 --compress expression=true,negate_iife=false --mangle --format wrap_iife=true -- [FILE]
```

The **Terser options are important**; wrong options will produce JavaScript that has undesired behaviour for a bookmarklet. For example, not voiding expressions will cause the contents of the current window to change to the object returned when using `window.open`.

## Un-minifying

Use Prettier or any other beautifier/formatter on the minified code.

The un-minified code will _not_ look identical to the original written source due to compression and mangling.

That is why it is necessary to do things this way and keep the original source, with long function/variable names, comments etc intact. I have many old bookmarklets that were only shared in minified form, that are hard to read and modify even after un-minifying.

## URL decoding

Many bookmarklets you'll find out there are also URL-encoded (often inconsistently!). Quick and dirty way to decode:

```shell
$ node --print "decodeURIComponent(\"$(cat foo.js)\");"
```
