<template>
    <textarea 
        @keydown.tab.prevent="onTabPress" 
        @keyup="emit('update:modelValue', $event.target.value)"
        v-text="modelValue" 
    />
    <h5>{{ name }}</h5>
</template>
  
<script setup>
import { inject } from 'vue';

defineProps({
    modelValue: String
});

let emit = defineEmits(['update:modelValue']);
let {name, changeName} = inject('name');

setTimeout(() => {
    changeName('Daniel Falzon')
}, 2000)

function onTabPress(e){
  let textarea = e.target;

  let val = textarea.value,
  start = textarea.selectionStart,
  end = textarea.selectionEnd;

  textarea.value = val.substring(0, start) + "\t" + val.substring(end);
  textarea.selectionStart = textarea.selectionEnd = start + 1;
}

</script>