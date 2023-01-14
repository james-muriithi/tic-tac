<script setup lang="ts">
import { reactive, ref, computed } from "vue";
import { Moves } from "./types/Moves";
import { checkWinner } from "./utils/gameRules";
import BoardCell from "./components/BoardCell.vue";

const isPlayerOTurn = ref<boolean>(false);

const playerXMoves = ref<number[]>([]);
const playerOMoves = ref<number[]>([]);
const moves = reactive<Object>({});

const winner = computed(() => checkWinner(moves))

const gameEnded = computed(() => !!winner.value || Object.keys(moves).length === 9)

const play = (index) => {
  if(gameEnded.value) return
  if (isPlayerOTurn.value) {
    playerOMoves.value.push(index);
    isPlayerOTurn.value = false;
    moves[index] = Moves.O;
  } else {
    playerXMoves.value.push(index);
    isPlayerOTurn.value = true;
    moves[index] = Moves.X;
  }
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
    <div class="md:w-2/3 bg-teal-500 p-5 mx-auto min-h-72">
      <div class="w-72 h-72 p-3 mx-auto grid grid-cols-3 grid-rows-3 board">
        <BoardCell
          v-for="i in 9"
          :key="i"
          :move="moves[i-1] || 0"
          @click="play(i-1)"
          :class="{ disabled: isPlayerOTurn }"
        />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
</style>