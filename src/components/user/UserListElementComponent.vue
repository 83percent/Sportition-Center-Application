<script setup>
import { defineProps } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const props = defineProps({
    element: {
        type: Object,
        required: true
    }
});


const event = {
    onClick : {
        userElement : () => {
            console.log(props.element)
            router.push(`/users/${props.element.id}`);
        }
    }
}
</script>

<template>
    <li @click="event.onClick.userElement">
        <p class="name">{{ element?.name }}</p>
        <p class="point">{{ element?.score }}</p>
        <p class="pt">pt</p>
    </li>
</template>

<style lang="scss" scoped>
li {
    background-color: var(--color-main-white);
    width: 100%;
    height: 4.5rem;
    display: flex;
    align-items: center;
    padding: 0 2rem 0 1rem;    
    border-bottom: 1px solid #f8f8f8;

    > p.name {
        font-size: 1.2rem;
        flex-grow: 1;
    }

    > p.point {
        font-size: 1.1rem;
    }

    > p.pt {
        font-size: 0.85rem;
        margin-left: 0.2rem;
    }
}
</style>
