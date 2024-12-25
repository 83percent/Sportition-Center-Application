<script setup>
import { defineProps } from 'vue';
import ExerciseMiddleCategoryComponent from './ExerciseMiddleCategoryComponent.vue';

defineProps({
    category: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    items: {
        type: Array,
        required: true
    }
});

</script>

<template>
    <div class="title-wrap">
        <h1>{{ name }}</h1>

    </div>
    <div>
        
    </div>
</template>

<style scoped lang="scss">

</style>
