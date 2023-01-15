import { Moves } from '@/types/Moves';
import { checkWinner } from '@/utils/gameRules';
// Utilities
import { defineStore } from 'pinia'

export const useGameStore = defineStore('game', {
    state: () => ({
        moves: {},
        isPlayerOTurn: false,
        playerXMoves: [],
        playerOMoves: [],
    }),
    getters: {
        winner: (state) => checkWinner(state.moves),
        gameEnded(state) {
            return !!this.winner || Object.keys(state.moves).length === 9
        },
    },
    actions: {
        play(index) {
            if (this.gameEnded) return;
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
        }
    }
})