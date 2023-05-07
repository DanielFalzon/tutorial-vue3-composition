<script setup>

import { useCounterStore } from '@/stores/counterStore';

let counter = useCounterStore();

</script>
<template>
    <div>
        <h1>{{ counter.count }}</h1>
        <button 
            :disabled="! counter.remaining" 
            @click="counter.increment"
        >
            Increment ({{ counter.remaining }} remaining)
        </button>
    </div>
</template>