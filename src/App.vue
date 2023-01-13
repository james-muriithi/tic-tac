<script setup lang="ts">
import { reactive, ref } from "vue";
import { Moves } from "./types/Moves";
import BoardCell from "./components/BoardCell.vue";

const isPlayerOTurn = ref<boolean>(false);

const playerXMoves = ref<number[]>([]);
const playerOMoves = ref<number[]>([]);
const moves = reactive({})

const play = (index) => {
  if (isPlayerOTurn.value) {
    playerOMoves.value.push(index);
    isPlayerOTurn.value = false;
    moves[index] = Moves.O
    return;
  }
  playerXMoves.value.push(index);
  isPlayerOTurn.value = true;
  moves[index] = Moves.X
};

const startGame = () => {
  isPlayerOTurn.value = false;
  // reset board
  playerXMoves.value = [];
  playerOMoves.value = [];
};
</script>

<template>
  <div class="container mx-auto rounded-xl p-8 m-10">
    <h3 class="text-center text-2xl font-bold pb-6">Tic tac toe</h3>
    <div class="md:w-2/3 bg-teal-500 p-5 mx-auto">
      <div class="w-72 h-72 p-3 mx-auto grid grid-cols-3 grid-rows-3 board">
        <BoardCell
          v-for="i in 9"
          :key="i"
          :move="moves[i] || 0"
          @click="play(i)"
          :class="{ disabled: isPlayerOTurn }"
        />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
</style>