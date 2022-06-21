# Google Translate bookmarklet

Translates the selected text, or entire page if no text is selected.

Based on [*To English* bookmarklet by Amit Agarwal](https://www.labnol.org/internet/guide-to-useful-bookmarklets/7931/).

## Popup version (recommended)

Opens Google Translate in a popup window

The window size is set to 600x800. If you change it, use a width <720 to trigger the vertical/mobile layout of Google Translate.

### Installation

Drag this to your bookmarks toolbar: <a href="javascript:(function(){var%20a=window.getSelection(),b='';if(a!=''){a='text='+encodeURIComponent(a)}else{a='u='+encodeURIComponent(location.href);b='translate'};window.open('https://translate.google.com/'+b+'?sl=auto&tl=en&'+a,'_blank','height=800,width=600,noreferrer,noopener')})();" class="bookmarklet">Translate</a>

### Source

```js
javascript:(
	function() {
		var a = window.getSelection(),
			b = '';
		if (a != '') {
			a = 'text=' + encodeURIComponent(a)
		} else {
			a = 'u=' + encodeURIComponent(location.href);
			b = 'translate'
		};
		window.open(
			'https://translate.google.com/' + b + '?sl=auto&tl=en&' + a,
			'_blank',
			'height=800,width=600,noreferrer,noopener'
		)
	}
)();
```

Minified:

```js
javascript:(function(){var%20a=window.getSelection(),b='';if(a!=''){a='text='+encodeURIComponent(a)}else{a='u='+encodeURIComponent(location.href);b='translate'};window.open('https://translate.google.com/'+b+'?sl=auto&tl=en&'+a,'_blank','height=800,width=600,noreferrer,noopener')})();
```

## New tab version

Opens in a new tab or window, depending on your browser settings.

### Installation

Drag this to your bookmarks toolbar: <a href="javascript:(function(){var%20a=window.getSelection(),b='';if(a!=''){a='text='+encodeURIComponent(a)}else{a='u='+encodeURIComponent(location.href);b='translate'};window.open('https://translate.google.com/'+b+'?sl=auto&tl=en&'+a,'_blank','noreferrer,noopener')})();" class="bookmarklet">Translate</a>

### Source

```js
javascript:(
	function() {
		var a = window.getSelection(),
			b = '';
		if (a != '') {
			a = 'text=' + encodeURIComponent(a)
		} else {
			a = 'u=' + encodeURIComponent(location.href);
			b = 'translate'
		};
		window.open(
			'https://translate.google.com/' + b + '?sl=auto&tl=en&' + a,
			'_blank',
			'noreferrer,noopener'
		)
	}
)();
```

Minified:

```js
javascript:(function(){var%20a=window.getSelection(),b='';if(a!=''){a='text='+encodeURIComponent(a)}else{a='u='+encodeURIComponent(location.href);b='translate'};window.open('https://translate.google.com/'+b+'?sl=auto&tl=en&'+a,'_blank','noreferrer,noopener')})();
```
