<script setup>
import { ref, reactive } from 'vue';
import exerciseDatas from '@/data/Exercise';
import SelectExerciseView from './SelectExerciseView.vue';
import ExerciseHeader from './ExerciseHeader.vue';
import ExerciseOptionWeight from './ExerciseOptionWeight.vue';
import ExerciseOptionType from './ExerciseOptionType.vue';

const name = ref("장윤희");
const step = ref(1);
const saveTriggerState = ref(1);
const exerciseRecord = reactive({
    type: undefined,
    typeName : undefined,
    round: 1,
    weight: 0
});

const frameEvent = {
    next : () => {
        if(step.value <= 4) {
            frameEvent.move(step.value + 1);
        }
    },
    back : () => {
        if(step.value > 0) {
            frameEvent.move(step.value - 1);
        }
    },
    move : (frameNumber) => {
        if(frameNumber <= 4 && frameNumber > 0) {

            if(frameNumber > 1) {
                if(exerciseRecord.type) {
                    step.value = frameNumber;
                }
            }

            
        }
    }
}

const textFunction = {
    step : () => {
        if(step.value >= 4) {
            step.value = 1;
        } else {
            step.value++;
        }
    }
}

const save = () => {
    if(saveTriggerState.value < 2) {
        saveTriggerState.value++;
    } else {
        saveTriggerState.value = 1;
    }
}
</script>

<template>
    <main>
        <ExerciseHeader
            :name="name"
            :typeName="exerciseRecord.typeName"
            :round="exerciseRecord.round"
            :weight="exerciseRecord.weight"
            @move-event="frameEvent.move"
            />
            
        <article :class="`active-${step}`">
            <section id="type-1" >
                <!-- 1 -->
                <ExerciseOptionType />
            </section>
            <section id="type-2">
                <!-- 2 -->
                <h1>세트</h1>
            </section>
            <section id="type-3">
                <!-- 3 -->
                <h1>무게 선택</h1>
            </section>
            <section id="type-4">
                <!-- 4 -->
                <h1>반복횟수</h1>
            </section>
        </article>

        <div id="save-container" :class="saveTriggerState > 1 ? 'active' : ''" @click="save">
            <i class="material-icons">check</i>
            <div v-if="saveTriggerState == 2" class="overlay"></div>
        </div>
    </main>
    
</template>

<style scoped lang="scss">

/* 모바일 */
@media (max-width: 768px) {
    main {
        width: 100vw;
        height: 100vh;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        > article {
            display: flex;
            overflow: hidden;
            max-width: 100vw;


            /* scroll animation */
            &.active-1 > section {
                left: 0vw;
            }

            &.active-2 > section {
                left: -100vw;
            }

            &.active-3 > section {
                left: -200vw
            }

            &.active-4 > section {
                left: -300vw;
            }

            > section {
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;

                > h1 {
                    font-size: 3.5rem;

                }
                position: relative;
                min-width: 100vw;
                height: 100vh;
                top: 0;
                left: 0vw;
                transition: 0.3s;

                &#type-1 {

                }

                &#type-2 {

                }

                &#type-3 {

                }

                &#type-4 {
                    background-color: blue;
                }

            }
        }

        > #save-container {
            position: fixed;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 6rem;
            bottom: 2rem;
            width: 6rem;
            height: 2.5rem;
            transition: 0.3s;
            color: #fff;
            background-color: var(--color-main-green);
            border: none;
            opacity: 0.5;
            cursor: pointer;
 
            
            &.active {
                width: 90%;
                height: 4rem;
                opacity: 1;
                border-radius: 6rem;

                > .overlay {
                    position: fixed;
                    z-index: -2;
                    width: 100vw;
                    height: 100vh;
                    top: 0;
                    left: 0;
                }
            }
            
            > i {
                font-size: 1.5rem;
            }

            > p {
                font-size: 1.2rem;   
            }
        }
    }
}

/* 태블릿 (화면 너비 769px ~ 1024px) */
@media (min-width: 769px) and (max-width: 1024px) {
  body {
    font-size: 16px;
  }
}

/* 데스크탑 (화면 너비 1025px 이상) */
@media (min-width: 1025px) {
  body {
    font-size: 18px;
  }
}

/* 큰 화면 (4K 해상도 이상) */
@media (min-width: 1920px) {
  body {
    font-size: 20px;
  }
}



</style>
