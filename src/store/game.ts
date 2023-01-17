import { Moves } from '@/types/Moves';
import { WINNING_COMBINATIONS } from '@/utils/gameRules';
// Utilities
import { defineStore } from 'pinia';

type MoveType = {
    [key: number]: Moves.O | Moves.X,
};

type CellIndexes = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;

export const useGameStore = defineStore('game', {
    state: () => ({
        moves: {} as MoveType,
        isPlayerOTurn: false,
        playerXMoves: [] as number[],
        playerOMoves: [] as number[],
    }),
    getters: {
        winner(state): string | null {
            let winner: string | null = null;
            for (let index = 0; index < WINNING_COMBINATIONS.length; index++) {
                const [x, y, z] = WINNING_COMBINATIONS[index];

                if (state.moves[x] === state.moves[y] && state.moves[y] === state.moves[z]) {
                    winner = Moves[state.moves[x]]
                    break;
                }
            }
            return winner;
        },
        gameEnded(state): boolean {
            return !!this.winner || Object.keys(state.moves).length === 9
        },
        isCellPlayed: (state) => (index: CellIndexes) => {
            return !!state.moves[index];
        }
    },
    actions: {
        play(index: CellIndexes) {
            if (this.gameEnded || this.isCellPlayed(index)) return false;
            if (this.isPlayerOTurn) {
                this.playerOMoves.push(index);
                this.isPlayerOTurn = false;
                this.moves[index] = Moves.O;
            } else {
                this.playerXMoves.push(index);
                this.isPlayerOTurn = true;
                this.moves[index] = Moves.X;
            }
        },
        startGame() {
            this.isPlayerOTurn = false;
            // reset board
            this.playerXMoves = [];
            this.playerOMoves = [];

            this.moves = {};
        },
    }
})