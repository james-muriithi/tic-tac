<template>
  <svg
    aria-label="O"
    role="img"
    viewBox="0 0 128 128"
    :height="height"
    :width="width"
  >
    <path
      class="stroke-white stroke-16 fill-none animate-path"
      d="M64,16A48,48 0 1,0 64,112A48,48 0 1,0 64,16"
    />
  </svg>
</template>

<script setup lang="ts">
interface SvgProps {
  height?: number;
  width?: number;
}

withDefaults(defineProps<SvgProps>(), {
  height: 40,
  width: 40,
});
</script>