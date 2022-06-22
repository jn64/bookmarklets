(function () {
	const l = location;
	const domain = l.hostname;

	// pathname will be something like /matches/12345/...
	// split("/",3) returns an array ["","matches","12345"]
	// keep the empty first item for join() later, don't shift()
	const pathArray = l.pathname.split("/", 3);

	const dotabuff = "www.dotabuff.com";
	const datdota = "www.datdota.com";

	if (domain === dotabuff && pathArray[1] === "matches") {
		location.assign("https://" + datdota + pathArray.join("/"));
	} else if (domain === datdota && pathArray[1] === "matches") {
		location.assign("https://" + dotabuff + pathArray.join("/"));
	}
})();
