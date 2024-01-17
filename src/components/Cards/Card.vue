<script setup>
import { RouterLink } from 'vue-router';

const props = defineProps(['className', 'image','arrow','cover','link']);
</script>

<template>
  <RouterLink :to="props.link ? props.link : ''" :class="[props.className, 'card', props.image && 'pt_0' , props.cover  && 'p_0' , props.width == 'fit' && 'width-fit' ]">
    <slot></slot>
    <span :class="[props.arrow && 'arrow_null']" class="arrow-icon">
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M19.9987 36.6667C29.2034 36.6667 36.6654 29.2047 36.6654 20C36.6654 10.7953 29.2034 3.33337 19.9987 3.33337C10.7939 3.33337 3.33203 10.7953 3.33203 20C3.33203 29.2047 10.7939 36.6667 19.9987 36.6667Z" fill="#56585A" stroke="#E0DFDC" stroke-width="3.33333" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M20 26.6667L26.6667 20L20 13.3334" stroke="#E0DFDC" stroke-width="3.33333" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M13.332 20H26.6654" stroke="#E0DFDC" stroke-width="3.33333" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
    </span>
  </RouterLink>
</template>
<style scoped>
.pt_0 {
  padding-top: 0 !important;
}
.p_0{
  padding: 0 !important;
}
.arrow_null{
  display: none;
}
.width-fit{
  width: fit-content !important;
}
</style>
