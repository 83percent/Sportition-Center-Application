<script setup>
import { useRouter } from 'vue-router';

import NavMain from '@/components/home/nav/NavMain.vue';

const router = useRouter();
const move = {
    leaderBoard: () => {

    },
    user: () => {

    },
    exerciseList: () => {
        router.push('/exercise/list');
    }

}
</script>

<template>
    <main>
        <NavMain />
        <div id="frame">
            <div class="name-container">
                <p><b>이재훈</b> 님,</p>
                <p>반가워요!</p>
            </div>
            <div class="main-container">
                <div>
                    <p>리더보드</p>
                    <i class="material-icons">leaderboard</i>
                </div>
            </div>
            <div class="main-container">
                <div>
                    <p>회원</p>
                    <i class="material-icons">people</i>
                </div>
                <div @click="move.exerciseList">
                    <p>운동 목록</p>
                    <i class="material-icons">fitness_center</i>
                </div>
            </div>
        </div>
    </main>    
</template>

<style scoped lang="scss">
main {
    width: 100vw;
    max-width: 100vw;
    min-height: 100vh;
    overflow-x: hidden;

    #frame {
        padding: 3rem 1rem;
        width: 100%;

        > .name-container {
            padding: 2rem 0 1rem 0;

            > p {
                font-size: 1.3rem;
                > b {
                    font-size: 1.6rem;
                    text-decoration: underline;
                }
            }
        }

        > .main-container {
            display: flex;
            flex-direction: row;
            gap: 1rem;
            
            > div {
                position: relative;
                border: 1px solid #dfdfdf;
                margin: 0.5rem 0;
                padding: 0.5rem;
                border-radius: 0.5rem;
                width: 100%;
                flex-grow: 1;
                

                > p {
                    padding-top: 3.5rem;
                    padding-left: 0.3rem;
                    font-weight: 400;
                    font-size: 1.1rem;
                }

                > i {
                    background-color: #f0f0f0;
                    padding: 0.5rem;
                    border-radius: 50%;
                    position: absolute;
                    top: 0.5rem;
                    right: 0.5rem;
                }
            }
        }
    }
}

@media (max-width: 767px) {
    #frame {
        padding-top: 3.5rem;
        
    }
}

@media (min-width: 768px) {
    #frame {

    }
}
</style>
