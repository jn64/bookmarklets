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
		pathArray.pop();
		l.pathname = pathArray.join("/");
	}
})();
