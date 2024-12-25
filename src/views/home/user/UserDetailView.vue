<script setup>
import { defineProps } from 'vue';
import { useRouter } from 'vue-router';
const router = useRouter();

defineProps({
    user : {
        type: Object,
        required: true,
    }
});

const startExercise = () => {
    router.push({ path : '/exercise'});
}
</script>

<template>
    <section>
        <div id="name-container">
            <p>{{ user.name }}</p>
        </div>
        <div>

        </div>

        <!-- footer -->
        <div id="footer-container">
            <button @click="startExercise">
                <p>운동 시작</p>
            </button>
        </div>
    </section>
</template>

<style scoped lang="scss">
section {
    
    > #name-container { 
        padding-top: 6rem;
        padding-left: 5rem;
        
        > p {
            font-size: 4rem;
            font-weight: 600;
        }

        
    }
    > #footer-container {
        width: 100%;
        position: fixed;
        background-color: #fff;
        bottom: 0;
        right: 0;

        > button {
            display: flex;
            justify-content: center;
            align-items: center;
            border: none;
            width: 100%;
            height: 3rem;
            opacity: 0.6;
            cursor: pointer;
            background-color: #42b56a;
            transition: 0.2s;

            > p {
                color: #fff;
                font-size: 1.2rem;
                font-weight: 700;
            }

            &:hover {
                height: 5rem;
                opacity: 1;
            }
        }
    }
}
</style>
