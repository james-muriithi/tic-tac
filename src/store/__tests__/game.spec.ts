import { describe, it, beforeEach, expect } from "vitest";
import { setActivePinia, createPinia, storeToRefs } from "pinia";
import { useGameStore } from "@/store/game";

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

});