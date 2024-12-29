<script setup>
import { defineProps } from 'vue';
import ExerciseElementComponent from './ExerciseElementComponent.vue';
const props = defineProps({
    filterValue : {
        type: String,
        required: true
    },
    filterResultList: {
        type: Array,
        required: true
    }
});


</script>

<template>
<div>
    <div class="divide-container">
        <p>{{ filterValue }}</p>
    </div>
    <ul>
        <ExerciseElementComponent 
            v-for="({category, name, value}, index) in filterResultList"
            :key="index"
            :category="category"
            :name="name"
            :value="value"/>
    </ul>
</div>
</template>

<style lang="scss" scoped>
.divide-container {
    background-color: #f2f2f2;
    padding: 0 1rem;
    border-bottom: 1px solid #f8f8f8;
    > p {
        font-weight: 600;
    }
}

@media (max-width: 767px) {

}

@media (min-width: 768px) {

}
</style>
