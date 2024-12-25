<script setup>
import { defineProps } from 'vue';
defineProps(
    {
        key: String,
        name: String
    }
)

</script>

<template>
    <div>
        <h3>{{ name }}</h3>
    </div>
</template>

<style scoped lang="scss">
div {
    margin-left: 2rem;
}
</style>
