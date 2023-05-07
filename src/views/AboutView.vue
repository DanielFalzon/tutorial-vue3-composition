<script setup>
  import { useFlash } from '@/composables/useFlash';

  let { flash } = useFlash();

</script>

<template>
  <div>
    <button @click="flash('Hey', 'it works on the about page', 'info')">Click Me</button>
  </div>
</template>
