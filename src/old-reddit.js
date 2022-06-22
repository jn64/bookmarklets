(function () {
	const l = location;
	const domain = l.hostname;
	const path = l.pathname + l.search + l.hash;
	const www = "www.reddit.com";
	const old = "old.reddit.com";

	if (domain === www) {
		location.assign("https://" + old + path);
	} else if (domain === old) {
		location.assign("https://" + www + path);
	}
})();
