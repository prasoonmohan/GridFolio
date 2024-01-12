<script setup>
const props = defineProps(['className', 'image']);
</script>

<template>
  <div :class="[props.className, 'card', props.image && 'pt_0']">
    <slot></slot>
    <span class="arrow-icon">
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#B0AEA7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M12 16L16 12L12 8" stroke="#B0AEA7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M8 12H16" stroke="#B0AEA7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    </span>
  </div>
</template>

<style scoped>
.pt_0 {
  padding-top: 0 !important;
}
</style>
