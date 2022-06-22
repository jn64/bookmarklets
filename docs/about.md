# About

This is a collection of bookmarklets, many of which I use everyday in favour of more complicated browser extensions.

I plan to add more as I find, unobfuscate, and rewrite them in (somewhat) modern JavaScript.

## How to use bookmarklets

To "install", simply drag the links to your bookmarks toolbar/menu.

Then click them in the appropriate context. For example, the Define bookmarklet only works when you have text selected.

Some bookmarklets may rely on other websites and send data to or load pages from them.

## Working with bookmarklets

Bookmarklets contain minified, and often obfuscated, JavaScript in a single line. That makes them hard to read or modify.

You can find the original, un-minified code for these bookmarklets on the [GitHub project page](https://github.com/jn64/bookmarklets), along with my notes on how to work with them.

## Styling bookmarklets in Firefox

You can style bookmarklets to remove the generic favicon and make them stand out more in the bookmarks toolbar.

Add this to your [userChrome.css](https://kb.mozillazine.org/index.php?title=UserChrome.css):

```css
/* Style JS bookmarklets in bookmarks toolbar */
/* ========================================== */

/* Hide favicon */
#PlacesToolbar toolbarbutton.bookmark-item[scheme="javascript"] image {
	display: none;
}
/* Highlight (translucent red, brighter when hovered) */
#PlacesToolbar
	toolbarbutton.bookmark-item[scheme="javascript"]:not(.subviewbutton):not([disabled="true"]):not([open]) {
	background-color: rgba(250, 50, 40, 0.2) !important;
}
#PlacesToolbar
	toolbarbutton.bookmark-item[scheme="javascript"]:hover:not(.subviewbutton):not([disabled="true"]):not([open]) {
	background-color: rgba(250, 50, 40, 0.7) !important;
}
```

## See also

- [Implementing bookmarklets in JavaScript by Dr. Axel Rauschmayer](https://2ality.com/2011/06/implementing-bookmarklets.html)
  Some tips on encoding URLs and using bookmarklets via browser keywords

- [Bookmarklet Creator with Script Includer by Peter Coles](https://mrcoles.com/bookmarklet/)
  Example of using externally sourced scripts in bookmarklets

- A collection of [bookmarklets by Amit Agarwal](https://www.labnol.org/internet/guide-to-useful-bookmarklets/7931/)
