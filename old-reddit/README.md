# Old Reddit bookmarklet

Toggle between old and new Reddit.

i.e. if you are on `www.reddit.com`, it will reload the same post on `old.reddit.com`, or vice versa.

## Installation

Drag this to your bookmarks toolbar: <a href="javascript:(function(){var%20h=location.hostname,p=location.pathname,w='www.reddit.com',o='old.reddit.com';if(h==w){location.replace('https://'+o+p)}else%20if(h==o){location.replace('https://'+w+p)}})();" class="bookmarklet">Old Reddit</a>

## Source

```js
javascript:(
	function() {
		var l = location;
		var h = l.hostname,
			p = l.pathname + l.search + l.hash,
			w = 'www.reddit.com',
			o = 'old.reddit.com';
		if (h == w) {
			location.replace('https://' + o + p)
		} else if (h == o) {
			location.replace('https://' + w + p)
		}
	}
)();
```

Minified:

```js
javascript:(function(){var%20l=location;var%20h=l.hostname,p=l.pathname+l.search+l.hash,w='www.reddit.com',o='old.reddit.com';if(h==w){location.replace('https://'+o+p)}else%20if(h==o){location.replace('https://'+w+p)}})();
```
