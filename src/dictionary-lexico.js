(function () {
	// User options
	const dictionarySearchUrl = "https://www.lexico.com/definition/";
	const popupHeight = "800";
	// popupWidth should be <768 to trigger single-column layout on Lexico
	const popupWidth = "600";

	const selection = window.getSelection().toString().trim();

	// Since selection is already a string and trimmed we can just do a truthy test
	// No need for `selection != ""` or `selection.length > 0`
	if (selection) {
		window.open(
			dictionarySearchUrl + encodeURIComponent(selection),
			"_blank",
			`height=${popupHeight},width=${popupWidth},noopener,noreferrer`
		);
	}
})();
