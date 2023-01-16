import { describe, it, beforeEach, expect, test } from "vitest";
import { setActivePinia, createPinia, storeToRefs } from "pinia";
import { useGameStore } from "@/store/game";

const winMoves = { 0: 1, 3: -1, 4: 1, 7: -1, 8: 1 };
const drawMoves = { 0: 1, 1: -1, 2: 1, 3: 1, 4: 1, 5: -1, 6: -1, 7: 1, 8: -1 };

describe("Test game store", () => {
    beforeEach(() => {
        setActivePinia(createPinia())
    });

    it('initializes with correct values', () => {
        const { isPlayerOTurn, playerOMoves, playerXMoves, moves } = useGameStore();
        expect(isPlayerOTurn).toBe(false)
        expect(playerOMoves.length).toBe(0)
        expect(playerXMoves.length).toBe(0)
        expect(Object.values(moves).length).toBe(0)
    });

    it("starts with player x move", () => {
        const store = useGameStore();
        const { isPlayerOTurn, playerXMoves } = storeToRefs(store);
        const { play } = store;
        play(8)
        expect(isPlayerOTurn.value).toBe(true);
        expect(playerXMoves.value.length).toBe(1)
    })

    it("a player can't play the same cell twice", () => {
        const { play } = useGameStore();
        play(0);
        const secondPlay = play(0);
        expect(secondPlay).toBe(false);
    });

    it("game ends when a player has won", () => {
        const store = useGameStore();
        const { moves, gameEnded } = storeToRefs(store);
        moves.value = winMoves;
        expect(gameEnded.value).toBe(true)
    });
    it("a player can't play when game is over", () => {
        const store = useGameStore();
        const { moves } = storeToRefs(store);
        const { play } = store
        moves.value = winMoves
        const anotherPlay = play(0);
        expect(anotherPlay).toBe(false)
    });
    it("game ends when players draw", () => {
        const store = useGameStore();
        const { moves, gameEnded } = storeToRefs(store);
        moves.value = drawMoves

        expect(gameEnded.value).toBe(true)
    })
    it("game can restart after win or draw", () => {
        const store = useGameStore();
        const { moves, gameEnded } = storeToRefs(store);
        const { startGame } = store
        moves.value = drawMoves
        expect(gameEnded.value).toBe(true)
        startGame()
        expect(gameEnded.value).toBe(false)
    })
});