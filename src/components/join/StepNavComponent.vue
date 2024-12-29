<script setup>
import { ref, defineProps, defineEmits } from 'vue';
const emits = defineEmits(['moveStep']);
const props = defineProps({
    step: {
        type: Number,
        required: true
    }
});

const moveStep = (value) => {
    emits('moveStep', value);
}


</script>

<template>
    <div class="step-wrap">
        <div
            :class="['step-container', {active: step >= 1}]"
            @click="moveStep(1)">
            <p>1</p>
        </div>
        <div
            :class="['step-container', {active: step >= 2}]"
            @click="moveStep(2)">
            <div></div>
            <p>2</p> 
        </div>
        <div
            :class="['step-container', {active: step >= 3}]"
            @click="moveStep(3)">
            <div></div>
            <p>3</p>
        </div>
    </div>
</template>

<style scoped lang="scss">
.step-wrap {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 2rem;

    > div.step-container {
        display: flex;
        align-items: center;
        justify-content: center;
        opacity: 0.2;
        cursor: pointer;

        > p {
            width: 1.8rem;
            height: 1.8rem;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            border: 2px solid #000000;
            border-radius: 50%;
            font-weight: 600;
        }

        > div {
            border: 1px solid #000000;
            width: 1.8rem;
        }

        &.active {
            opacity: 1;

            > p, > div {
                color: #fff;
                background-color: #e63232;
                border-color: #e63232;
            }
        }

    }
}
</style>
