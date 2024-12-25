<script setup>
import { defineProps } from 'vue';
import ExerciseTypeComponent from './ExerciseTypeComponent.vue';
defineProps(
    {
        category: {
            type: String,
            required: true
        },
        name: {
            type: String,
            required: true
        },
        list: {
            type: Array,
            required: true
        }
        
    }
)

console.log(list);

</script>

<template>
    <div>
        <h2>{{ name }}</h2>
    </div>
    <div>
        <ExerciseTypeComponent
                
            
        />
    </div>
</template>

<style scoped lang="scss">
div {
    margin-left: 2rem;
}
</style>
