(function () {
	// User options
	let translateToLanguage = "en";
	let popupHeight = "800";
	let popupWidth = "600";

	const selection = window.getSelection().toString().trim();
	let a = "";
	let b = "";

	if (selection) {
		a = "text=" + encodeURIComponent(selection);
	} else {
		a = "u=" + encodeURIComponent(location.href);
		b = "translate";
	}

	window.open(
		`https://translate.google.com/${b}?sl=auto&tl=${translateToLanguage}&${a}`,
		"_blank",
		`height=${popupHeight},width=${popupWidth},noopener,noreferrer`
	);
})();
