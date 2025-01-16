<script setup>
import NavMain from '@/components/home/nav/NavMain.vue';


</script>

<template>
    <main>
        <NavMain />
        <div class="user-wrap">
            <div class="user-container">
                <h1>이재훈</h1>
            </div>
            <div class="score-container">
                <div>
                    <p class="score">0</p>
                    <p class="unit">pt</p>
                </div>
            </div>

            <p>User</p>
            <p>ID : {{ $route.params.id }}</p>
        </div>

        <div class="exercise-wrap">
            <div class="exercise-container">
                <i class="material-icons">fitness_center</i>
            </div>
        </div>
    </main>
</template>

<style lang="scss" scoped>
.user-wrap {
    padding-top: 4rem;

    > .user-container {
        > h1 {
            font-size: 2.5rem;
            font-weight: 700;
        }
    }

    > .score-container {
        margin: 1rem;

        > div {
            display: flex;
            align-items: flex-end;
            justify-content: center;    
            background-color: #f0f0f0;
            padding: 1rem 0rem;
            border-radius: 1rem;

            > .score {
                font-size: 2.0rem;
            }

            > .unit {
                font-size: 1.1rem;
                padding-left: 0.2rem;
            }
        }
        
    }

    
}
.exercise-wrap {
    position: fixed;
    bottom: 1rem;
    width: 100vw;
    display: flex;
    align-items: center;
    justify-content: center;

    > .exercise-container {
        width: 3.3rem;
        height: 3.3rem;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: var(--color-main-red);    
        > i {
            font-size: 1.2rem;
            color: var(--color-main-white);
        }
    }
}

@media (max-width: 767px) {
.user-wrap {
    
    > .user-container {
        margin: 0 1rem;
        > h1 {
            font-size: 2.5rem;
            font-weight: 700;
        }
    }
}
}

@media (min-width: 768px) {
main {

}
}
</style>
