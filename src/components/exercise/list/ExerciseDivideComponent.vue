<script setup>
import { defineProps } from 'vue';
defineProps({
    divideValue : {
        type: String,
        required: true
    }
});

</script>

<template>
    <div class="divide-container">
        <p>{{ divideValue }}</p>
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
