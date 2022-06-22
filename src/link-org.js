(function () {
	prompt(
		"Link to this page in Org-mode:",
		`[[${location.href}][${document.title}]]`
	);
})();
