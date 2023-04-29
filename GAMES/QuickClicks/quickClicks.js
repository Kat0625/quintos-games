const target = `
 .d88b. 
.8P  Y8.
88    88
88    88
 8b  d8 
 'Y88P' `.slice(1);

const imposter = `
 .d88b. 
.8P  Y8.
88    88
88    88
 'Y88P' `.slice(1);

/* Part A: find the range of row and column values the target can be placed at */
function makeTargets() {
	let row = round(random(1, 23));
	let col = round(random(1, 71));

	button(target, row, col);

	for (let i = 0; i < 4; i++) {
		let imposterrow = round(random(1, 23));
		let impostercol = round(random(1, 71));
		button(imposter, imposterrow, impostercol);
	}
}

function start() {
	makeTargets();
}
