<script setup>
import UserListElementComponent from '@/components/user/UserListElementComponent.vue';
import { defineProps } from 'vue';

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
        <UserListElementComponent
            v-for="(element, index) in filterResultList"
            :key="index"
            :element="element" />
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
