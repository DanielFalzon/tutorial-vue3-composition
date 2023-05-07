<script setup>
  import { useFlash } from '@/composables/useFlash';
  import { useStorage } from '@/composables/useStorage';
  import { ref, provide } from 'vue';
  import { state } from "@/stores/quizStore.js"
  import TabbableTextarea from '@/components/TabbableTextarea.vue';

  let name = ref('John Doe');



  let food = useStorage('food', 'tacos');
  let age = useStorage('age', '10');

  provide('name', {
    name,
    changeName: (newName) => name.value = newName
  });

  let { flash } = useFlash();

  let comment = ref('text value');
  
</script>

<template>
  <main>
    <h2>{{ name }}</h2>
    <p>What is your favorite food? <input type="text" v-model="food"></p>
    <p>What is your age? <input type="text" v-model="age"></p>

    <form>
      <TabbableTextarea v-model="comment" style="width:100%; height:300px;" />
    </form>
    <button @click="flash('Test', 'it works')">Click Me</button>
    <button @click="state.name = 'changed name'">Change Quiz Name</button>
    {{ state }}
  </main>
</template>
