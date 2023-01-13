<script setup lang="ts">
import { PropType } from "vue";
import { Moves } from "../types/Moves";

defineProps({
  move: {
    type: Number as PropType<Moves>,
    default: 0,
  },
});
</script>

<template>
  <div class="cell border-gray-500 flex">
    <div class="m-auto text-gray-100">
      <svg
        aria-label="X"
        role="img"
        viewBox="0 0 128 128"
        height="40"
        width="40"
        v-if="move == 1"
      >
        <path class="stroke-gray-300 stroke-w-16" d="M16,16L112,112"></path>
        <path class="stroke-gray-300 stroke-w-16" d="M112,16L16,112"></path>
      </svg>

      <svg
        aria-label="O"
        role="img"
        viewBox="0 0 128 128"
        height="40"
        width="40"
        v-if="move == -1"
      >
        <path
          class="stroke-white stroke-w-16 fill-none"
          d="M64,16A48,48 0 1,0 64,112A48,48 0 1,0 64,16"
        ></path>
      </svg>
    </div>
  </div>
</template>

<style lang="scss" scoped>
$cellBorderWidth: 4px;
.stroke-w-16 {
  stroke-width: 16px;
}
.cell {
  &:nth-child(1),
  &:nth-child(4) {
    border-bottom-width: $cellBorderWidth;
    border-right-width: $cellBorderWidth;
  }
  &:nth-child(2),
  &:nth-child(5) {
    border-bottom-width: $cellBorderWidth;
  }
  &:nth-child(3),
  &:nth-child(6) {
    border-bottom-width: $cellBorderWidth;
    border-left-width: $cellBorderWidth;
  }
  &:nth-child(7) {
    border-right-width: $cellBorderWidth;
  }
  &:nth-child(9) {
    border-left-width: $cellBorderWidth;
  }
}
</style>