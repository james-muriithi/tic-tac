<template>
  <svg
    aria-label="X"
    role="img"
    viewBox="0 0 128 128"
    :height="height"
    :width="width"
  >
    <path
      class="stroke-gray-300 stroke-16 animate-path"
      d="M16,16L112,112"
    />
    <path
      class="stroke-gray-300 stroke-16 animate-path"
      d="M112,16L16,112"
    />
  </svg>
</template>

<script setup lang="ts">
interface SvgProps {
    height?: number,
    width?: number
} 

withDefaults(defineProps<SvgProps>(), {
    height: 40,
    width: 40
})
</script>
