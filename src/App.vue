<script setup lang="ts">
import { storeToRefs } from "pinia";
import { Players } from "@/types/Players";
import { useGameStore } from "@/store/game";
import { CellIndexes } from "@/types/CellIndexes";
import BoardCell from "@/components/BoardCell.vue";
import Close from "@/components/icons/Close.vue";
import Circle from "@/components/icons/Circle.vue";

const store = useGameStore();

const { gameEnded, winner, moves } = storeToRefs(store);

const { play, startGame } = store;

const cells: CellIndexes[] = new Array(9)
  .fill(0)
  .map((_, index) => index) as CellIndexes[];
</script>

<template>
  <div class="container mx-auto rounded-xl p-8 m-10">
    <h3 class="text-center text-2xl font-bold pb-6">
      Tic tac toe
    </h3>
    <div
      class="
        md:w-2/3
        bg-teal-500
        p-5
        mx-auto
        min-h-90
        flex
        relative
        justify-center
        items-center
      "
    >
      <Transition>
        <div
          v-if="!gameEnded"
          class="
            w-72
            h-72
            p-3
            mx-auto
            grid grid-cols-3 grid-rows-3
            board
            absolute
          "
        >
          <BoardCell
            v-for="i in cells"
            :key="i"
            :move="moves[i] || 0"
            @click="play(i)"
          />
        </div>
        <div
          v-else
          class="results m-auto absolute"
        >
          <div class="justify-center flex gap-x-2">
            <Close
              v-if="!winner || winner == Players.X"
              :height="100"
              :width="100"
            />
            <Circle
              v-if="!winner || winner == Players.O"
              :height="100"
              :width="100"
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
      </Transition>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.v-enter-active,
.v-leave-active {
  transition: opacity 0.4s ease-out;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>