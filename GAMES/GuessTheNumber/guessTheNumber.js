async function start() {
	// your code goes here!

	let res = 'yes';

	while (res == 'yes') {
		let num = Math.round(random(1, 100));
		let guess = 0;

		let turn = 0;

		while (guess != num && turn < 7) {
			guess = await prompt('Guess a number');

			if (guess == num) {
				await alert('That is correct!');
			} else if (guess > 100 || guess < 1) {
				await alert('Invalid guess');
			} else if (guess > num) {
				await alert('Your guess is too high!');
				turn += 1;
			} else if (guess < num) {
				await alert('Your guess is too low!');
				turn += 1;
			}
		}
		if (turn >= 7) {
			await alert('You lost!');
		}

		res = await prompt('Do you want to play again?');
	}

	await alert('Goodbye!');

	exit(); // exits the game
} // end wrapper
