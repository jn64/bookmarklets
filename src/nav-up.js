(function () {
	let l = location;

	if (l.hash) {
		// #...
		l.hash = "";
	} else if (l.search) {
		// ?...
		l.search = "";
	} else {
		// /.../...
		let pathArray = l.pathname.split("/");
		if (!pathArray.pop()) {
			// pop twice if pathname had a trailing slash /
			pathArray.pop();
		}
		l.pathname = pathArray.join("/");
	}
})();
