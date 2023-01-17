import { Players } from '@/types/Players';
import { WINNING_COMBINATIONS } from '@/utils/gameRules';
import { CellIndexes } from '@/types/CellIndexes';
// Utilities
import { defineStore } from 'pinia';

type MoveType = {
    [key: number]: Players.O | Players.X,
};

type Winner = Players.X | Players.O | null;

export const useGameStore = defineStore('game', {
    state: () => ({
        moves: {} as MoveType,
        isPlayerOTurn: false,
        playerXMoves: [] as CellIndexes[],
        playerOMoves: [] as CellIndexes[],
    }),
    getters: {
        winner(state): Winner {
            let winner: Winner = null;
            for (let index = 0; index < WINNING_COMBINATIONS.length; index++) {
                const [x, y, z] = WINNING_COMBINATIONS[index];

                if (state.moves[x] === state.moves[y] && state.moves[y] === state.moves[z]) {
                    winner = state.moves[x]
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
                this.moves[index] = Players.O;
            } else {
                this.playerXMoves.push(index);
                this.isPlayerOTurn = true;
                this.moves[index] = Players.X;
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