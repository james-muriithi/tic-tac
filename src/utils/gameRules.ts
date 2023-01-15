import { Moves } from './../types/Moves';
const WINNING_COMBINATIONS = [
	[0, 1, 2],
	[3, 4, 5],
	[6, 7, 8],
	[0, 3, 6],
	[1, 4, 7],
	[2, 5, 8],
	[0, 4, 8],
	[2, 4, 6]
]

export const checkWinner = (moves: {}): string | null => {
	let winner: string | null = null;
	for (let index = 0; index < WINNING_COMBINATIONS.length; index++) {
		const [x, y, z] = WINNING_COMBINATIONS[index];
		
		if (moves[x] === moves[y] && moves[y] === moves[z]) {
			winner = Moves[moves[x]]
			break;
		}
	}
	return winner;
}