To "install", simply drag the links to your bookmarks toolbar/menu.

## Dictionary

Opens in a popup window. Edit the `height` and `width` to adjust the size.

- <a href='javascript:(function(){const n=window.getSelection().toString().trim();n&&window.open("https://www.lexico.com/definition/"+encodeURIComponent(n),"_blank","height=800,width=600,noopener,noreferrer")})();'>Define</a> — look up <u>selected text</u> on [Lexico](https://www.lexico.com) (Oxford Dictionaries)
- <a href='javascript:(function(){const n=window.getSelection().toString().trim();n&&window.open("https://ninjawords.com/"+encodeURIComponent(n),"_blank","height=800,width=600,noopener,noreferrer")})();'>Ninjawords</a> — look up <u>selected text</u> on [Ninjawords](https://ninjawords.com) (Wiktionary)

## Translation

To translate to a language other than English by default, change the `tl=en`.

- <a href='javascript:(function(){const e=window.getSelection().toString().trim();let t="",n="";e?t="text="+encodeURIComponent(e):(t="u="+encodeURIComponent(location.href),n="translate"),window.open(`https://translate.google.com/${n}?sl=auto&tl=en&${t}`,"_blank","height=800,width=600,noopener,noreferrer")})();'>Translate</a> — translate the <u>selected text</u>, or if there is no selection, translate the <u>entire page</u> via Google

## Other sites

- <a href='javascript:void window.open("https://web.archive.org/web/"+encodeURIComponent(location.href));'>Archive</a> — retrieve pages from or add them to the [Internet Archive](https://web.archive.org/)
- <a href='javascript:(function(){const t=location,o=t.hostname,a=t.pathname+t.search+t.hash,n="www.reddit.com",s="old.reddit.com";o===n?location.assign("https://"+s+a):o===s&&location.assign("https://"+n+a)})();'>old.reddit</a> — toggle between new and old Reddit i.e. if you are on `www.reddit.com`, it will reload the same post on `old.reddit.com`, or vice versa.
- <a href='javascript:(function(){const t=location,o=t.hostname,a=t.pathname.split("/",3),n="www.dotabuff.com",s="www.datdota.com";o===n&&"matches"===a[1]?location.assign("https://"+s+a.join("/")):o===s&&"matches"===a[1]&&location.assign("https://"+n+a.join("/"))})();'>datdota</a> — toggle between Dotabuff and datdota for a given match ID

## Page navigation

- <a href='javascript:(function(){let e=location;if(e.hash)e.hash="";else if(e.search)e.search="";else{let a=e.pathname.split("/");a.pop()||a.pop(),e.pathname=a.join("/")}})();'>up</a> — go up one level (removes the last fragment `#...`, query `?...`, or path segment `/...` from the current URL)
- <a href='javascript:(function(){const n=location.toString().match(/^(.*?)(0*)(\d+)([^\d]*)$/);if(n){const t=n[1];let o=n[2];const e=n[3],i=n[4],l=String(Number(e)+1);l.length>e.length&&(o=o.substring(0,o.length-1)),location=t+o+l+i}else alert("No number found in URL.")})();'>[+]</a> — increments the last number in the URL by 1. Useful for browsing blogs or webcomics with sequential post IDs
- <a href='javascript:(function(){const n=location.toString().match(/^(.*?)(0*)(\d+)([^\d]*)$/);if(n){const t=n[1];let o=n[2];const e=n[3],l=n[4],c=String(Number(e)-1);o.length>0&&c.length<e.length&&(o+="0"),location=t+o+c+l}else alert("No number found in URL.")})();'>[-]</a> — decrements the last number in the URL by 1.

## Linking

Get the link to the current page in various syntaxes

- <a href='javascript:void prompt("Link to this page in HTML:",`<a href="${location.href}">${document.title}</a>`);'>link</a> — HTML
- <a href='javascript:void prompt("Link to this page in Markdown:",`[${document.title}](${location.href})`);'>md link</a> — Markdown
- <a href='javascript:void prompt("Link to this page in Org-mode:",`[[${location.href}][${document.title}]]`);'>org link</a> — org-mode
- <a href='javascript:void prompt("Link to this page in MediaWiki:",`[${location.href} ${document.title}]`);'>wiki link</a> — MediaWiki

---

[About bookmarklets](./about) | [GitHub project page](https://github.com/jn64/bookmarklets)
