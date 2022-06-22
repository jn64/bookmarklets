(function () {
	prompt(
		"Link to this page in HTML:",
		`<a href="${location.href}">${document.title}</a>`
	);
})();
