<script setup>
import { defineProps, ref } from 'vue';

const favorite = ref('N');

const props = defineProps({
    category: {
        type: String
    },
    name: {
        type: String,
        required: true
    },
    value: {
        type: String,
        required: true
    }
}); 

const event = {
    onClickFavorite: () => {
        if(favorite.value === 'Y') favorite.value = 'N';
        else favorite.value = 'Y';
    }
}

</script>

<template>
    <li>
        <div class="name-container">
            <p class="name">
                {{ name }}
            </p>
            <p class="category">
                {{ category }}
            </p>
        </div>
        <div class="favorite-container">
            <button
                :class="{favorite: favorite === 'Y'}"
                @click="event.onClickFavorite">
                <i class="material-icons">
                    {{ favorite === 'Y' ? 'star' : 'star_outline'}}
                </i>
            </button>
        </div>
    </li>
</template>

<style lang="scss" scoped>
li {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0.7rem 1rem;
    background-color: var(--color-main-white);
    border-bottom: 1px solid #f1f1f1;

    > .name-container {
        flex-grow: 1;

        > p.name {
            font-size: 1.1rem;
            color: #000;
        }

        > p.category {
            color: #aaa;
            font-size: 0.8rem;
        }
    }

    > .favorite-container {
        display: flex;
        align-items: center;
        justify-content: center;

        > button {
            outline: none;
            border: none;
            background-color: #fff;

            > i {
                padding: 0.5rem;
                opacity: 0.3;
                font-size: 1.3rem;
            }

            &.favorite {

                > i {
                    color: var(--color-main-red);
                    font-size: 1.6rem;
                    opacity: 1;
                }
            }
        }
    }


}

@media (max-width: 767px) {

}

@media (min-width: 768px) {

}
</style>
