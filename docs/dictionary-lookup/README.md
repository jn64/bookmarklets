# Dictionary lookup bookmarklet

Search selected text in dictionary

Opens in a popup window

Two versions provided:

- [Lexico](https://www.lexico.com/about) (definitions from Oxford University Press dictionaries)
- [Ninjawords](http://ninjawords.com/info/about/) (definitions from [Wiktionary](http://en.wiktionary.org/))

## Installation

Drag either to your bookmarks toolbar:

<a href="javascript:(function(){var%20t=window.getSelection();if(t!=''){window.open('https://www.lexico.com/definition/'+encodeURIComponent(t),'_blank','height=800,width=600,noreferrer,noopener')}})();" class="bookmarklet">Define selection (Lexico)</a>

<a href="javascript:(function(){var%20t=window.getSelection();if(t!=''){window.open('http://ninjawords.com/'+encodeURIComponent(t),'_blank','height=800,width=600,noreferrer,noopener')}})();" class="bookmarklet">Define selection (Ninjawords)</a>

## Source

```js
javascript:(
	function() {
		var t = window.getSelection();
		if (t != '') {
			window.open(
				'https://www.lexico.com/definition/' + encodeURIComponent(t),
				'_blank',
				'height=800,width=600,noreferrer,noopener'
			)
		}
	}
)();
```

Minified:

```js
javascript:(function(){var%20t=window.getSelection();if(t!=''){window.open('https://www.lexico.com/definition/'+encodeURIComponent(t),'_blank','height=800,width=600,noreferrer,noopener')}})();
```
