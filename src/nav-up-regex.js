(function () {
	location =
		location.toString().indexOf("?") != -1
			? location.toString().replace(new RegExp("[?][^?]*$"), "")
			: location.toString().replace(new RegExp("/[^/]*/*$"), "/");
})();
