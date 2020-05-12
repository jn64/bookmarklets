# Internet Archive bookmarklet

Retrieves the latest snapshot of the current URL from the [Internet Archive](https://web.archive.org). IA will offer to save one if no snapshots are available.

## Installation

Drag this to your bookmarks bar: <a href="javascript:(function(){window.open('https://web.archive.org/web/'+encodeURIComponent(location.href))})();" class="bookmarklet">Internet Archive</a>

## Source

```js
javascript:(function(){window.open('https://web.archive.org/web/'+encodeURIComponent(location.href))})();
```

---

Note: to force saving a new snapshot of the current URL (without checking first), change `/web/` to `/save/`.
