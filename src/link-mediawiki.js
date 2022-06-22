(function () {
	// [url title]
	prompt(
		"Link to this page in MediaWiki:",
		`[${location.href} ${document.title}]`
	);
})();
