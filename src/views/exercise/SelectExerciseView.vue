<script setup>
import ExerciseCategoryComponent from '@/components/exercise/ExerciseCategoryComponent.vue';
import { defineProps } from 'vue';


defineProps({
    exerciseDatas : {
        type: Object,
        required: true
    }
})

</script>

<template>
    <section>
        <div class="title-wrap">
            <h1>운동을 선택해주세요.</h1>
            <i class="material-icons">keyboard_arrow_down</i>
        </div>
        <div class="">
            <ExerciseCategoryComponent
                v-for="exercise in exerciseDatas"
                :key="exercise.category"
                :name="exercise.name"
                :category="exercise.category"
                :items="exercise.items"
            />
        </div>
    </section>
</template>

<style scoped lang="scss">
section {
    width: 100vw;
}
.title-wrap {
    display: flex;
    align-items: center;
    padding: 1rem 2rem;
    border-top: 1px solid #aaa;
    border-bottom: 1px solid #aaa;
    cursor: pointer;
    background-color: #fff;

    h1 {
        font-size: 1.7rem;
        flex-grow: 1;
    }

    > i {
        font-size: 2rem;
    }
}
</style>
