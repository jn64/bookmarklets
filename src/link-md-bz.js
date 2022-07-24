(function () {
	// Markdown links with Bugzilla support
	// Since many BZ instances don't identify themselves in the page title,
	// this adds a keyword and # in front of the bug number in the link text,
	// e.g. rhbz#12345 - Bug description
	const l = location;
	let prefix = "";

	switch (l.hostname) {
		case "bugs.kde.org":
			prefix = "kde#";
			break;
		case "bugzilla.kernel.org":
			prefix = "kernel#";
			break;
		case "bugzilla.mozilla.org":
			prefix = "bmo#";
			break;
		case "bugzilla.redhat.com":
			prefix = "rhbz#";
			break;
	}

	prompt(
		"Link to this page in Markdown:",
		`[${prefix}${document.title}](${l.href})`
	);
})();
