(function () {
	prompt(
		"Link to this page in Markdown:",
		`[${document.title}](${location.href})`
	);
})();
