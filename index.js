const memory = Array(100).fill(0);
let memptr = 0;

function redraw() {
	console.clear();
	for (let y = 0; y < 5; y++) {
		let line = '';
		for (let x = 0; x < 5; x++)
			line += (memory[x + 5 * y] === 0) ? ' ' : ((memory[x + 5 * y] <= 2) ? '.' : '#');
		console.log(line);
	}
}

function processcmd(cmd) {
	switch (cmd) {
		case '+': memory[memptr]++; redraw(); break;
		case '-': memory[memptr]--; redraw(); break;
		case '<': memptr--; break;
		case '>': memptr++; break;
	}
}

function processprog(prog) {
	for (const ch of prog) {
		processcmd(ch);
	}
}

processprog(
	require('fs').readFileSync(
		require('yargs/helpers').hideBin(process.argv)[0],
		'utf8'
	)
);
