<script setup lang="ts">
import { PropType } from "vue";
import { Moves } from "../types/Moves";
import Close from "./icons/Close.vue";
import Circle from "./icons/Circle.vue";

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
      <Close v-if="move == 1" />
      <Circle v-if="move == -1" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
$cellBorderWidth: 4px;
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