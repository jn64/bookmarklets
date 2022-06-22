(function () {
	// Decrements a number in the URL by 1
	// E.g. a sequential ID used on a blog or webcomic site
	// Good place to test: https://kottke.org/00/01/

	const found = location.toString().match(/^(.*?)(0*)(\d+)([^\d]*)$/);
	// found is an array with 5 items. Read them from the bottom up:
	// found[
	//   0: the full URL
	//   1: (.*?)     the part of the URL before the rest of the matches
	//   2: (0*)      the first string of 0's, that come before the first string of digits from the end, if any
	//   3: (\d+)     the first string of digits from the end, excluding leading 0's
	//   4: ([^\d]*)  the first string of non-digits from the end, if any
	// ]

	if (found) {
		const before = found[1];
		let zeroes = found[2];
		const num = found[3];
		const after = found[4];

		const numMinusOne = String(Number(num) - 1);
		if (zeroes.length > 0 && numMinusOne.length < num.length) {
			zeroes = zeroes + "0";
		}
		location = before + zeroes + numMinusOne + after;
	} else {
		alert("No number found in URL.");
	}
})();
