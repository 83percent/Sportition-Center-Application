<script setup>
import { defineProps, defineEmits } from 'vue';
const emit = defineEmits(['move-event']);
defineProps({
    name : {
        type: String,
        required: true
    },
    typeName : {
        type: String
    },
    round : {
        type: Number,
        required: true
    },
    weight : {
        type: Number,
        required: true
    }
});

const move = {
    optionType: () => {
        // 운동 종률 선택
        emit('move-event', 1);
    },
    optionRound: () => {
        // 셋트 선택
        emit('move-event', 2);
    },
    optionWeight: () => {
        // 무게 선택
        emit('move-event', 3);
    }
}

</script>

<template>
    <div id="exercise-header-wrap">
        <div class="header-button-container">
            <button>
                <i class="material-icons">chevron_left</i>
                <p>{{ name }}</p>
            </button>    
        </div>
        <div class="header-info-container">
            <div @click="move.optionType">
                <p v-if="!typeName" class="type-non">운동 종목을 선택해주세요.</p>
                <p v-else class="type">{{ typeName }}</p>
            </div>
            <div>
                <div class="set-container" @click="move.optionRound">
                    <p class="value">{{ round }}</p>
                    <p class="unit">Set</p>
                </div>
                <div class="weight-container" @click="move.optionWeight">
                    <p class="value">{{ weight }}</p>
                    <p class="unit">KG</p>
                </div>
            </div>
        </div>
    </div>
</template>


<style lang="scss" scoped>
#exercise-header-wrap {
    position: fixed;
    top: 0;
    width: 100%;
    height: 10rem;
    z-index: 99;
    background: rgb(255,255,255);
    background: linear-gradient(0deg, rgba(255,255,255,0.3) 0%, rgba(255,255,255,1) 41%);

    > .header-button-container  {
        display: flex;

        > button {
            display: flex;
            align-items: center;
            border: none;
            background-color: #00000000;
            padding: 0.7rem;

            > i {
                font-size: 2.0rem;
            }

            > p {
                font-size: 1rem;
            }
        }
    }

    > .header-info-container {
        > div {
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 0.5rem 0;

            > p {
                font-size: 1.1rem;
                transition: 0.2s;
                text-decoration: underline;
                color: #000;
                
                &.type-non {
                    color: #aaa;
                }

                &.type {
                    font-size: 1.3rem;
                    
                }

            }

            > div {
                display: flex;
                align-items: flex-end;
                justify-content: center;
                width: 50vw;
                flex-grow: 1;
                padding: 0.3rem 0;

                &.weight-container > p.value {
                    text-decoration: underline;
                }

                > p.value {
                    font-size: 1.2rem;
                    font-weight: 500;
                }

                > p.unit {
                    margin-left: 0.3rem;
                    font-size: 0.8rem;
                    color: #999;
                }
            }
        }
    }
}
</style>
