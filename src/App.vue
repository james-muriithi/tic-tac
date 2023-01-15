<script setup lang="ts">
import { storeToRefs } from "pinia";
import { Moves } from "@/types/Moves";
import { useGameStore } from "@/store/game";
import BoardCell from "@/components/BoardCell.vue";
import Close from "@/components/icons/Close.vue";
import Circle from "@/components/icons/Circle.vue";

const store = useGameStore();

const { gameEnded, winner, moves, playerOMoves, playerXMoves, isPlayerOTurn } =
  storeToRefs(store);

const { play, startGame } = store;
</script>

<template>
  <div class="container mx-auto rounded-xl p-8 m-10">
    <h3 class="text-center text-2xl font-bold pb-6">Tic tac toe</h3>
    <div class="md:w-2/3 bg-teal-500 p-5 mx-auto min-h-72 flex">
      <div
        class="w-72 h-72 p-3 mx-auto grid grid-cols-3 grid-rows-3 board"
        v-if="!gameEnded"
      >
        <BoardCell
          v-for="i in 9"
          :key="i"
          :move="moves[i - 1] || 0"
          @click="play(i - 1)"
        />
      </div>
      <div v-if="gameEnded" class="results m-auto">
        <div class="justify-center flex gap-x-2">
          <Close
            :height="100"
            :width="100"
            v-if="!winner || Moves[winner] == Moves['X']"
          />
          <Circle
            :height="100"
            :width="100"
            v-if="!winner || Moves[winner] == Moves['O']"
          />
        </div>
        <div class="text-center uppercase font-bold text-4xl mt-4">
          {{ winner ? "WINNER" : "DRAW" }}!
        </div>
        <div class="text-center mt-6">
          <button
            class="
              justify-center
              rounded-lg
              text-sm
              font-semibold
              py-3
              px-4
              bg-slate-900
              text-white
              hover:bg-slate-800
            "
            @click="startGame()"
          >
            Restart game
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
</style>