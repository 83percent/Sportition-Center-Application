<script setup>
import { ref, defineProps, defineEmits, watch } from 'vue';
const props = defineProps({
    code : String,
    newYn : String
});
console.log(props.newYn);
const emits = defineEmits(['changeCenterInfo']);

const selectedNewCenterOption = ref(undefined); // Y or N
const localCenterCode = ref(props.code);
const event = {
    onOptionClick : (value) => {
        switch(value) {
            case 'Y' : {
                emits('changeCenterInfo', 'Y', props.code);
                break;
            }

            case 'N' : {
                emits('changeCenterInfo', 'N', undefined);
                break;
            }

        }
    },
    onInputChange : (event) => {
        console.log(event.target.value)
        emits('changeCenterInfo', props.newYn, event.target.value);
    }
}

// props.centerCode가 변경될 때 localCenterCode 동기화
watch(
  () => props.centerCode,
  (newVal) => {
    localCenterCode.value = newVal;
  }
);

</script>

<template>
    <section>
        <h2>센터 설정</h2>
        <ul id="center-setting-container">
            <li
                :class="{ selected: newYn === 'N'}"
                @click="event.onOptionClick('N')">
                <p>이미 SPORTITION을 사용하는 센터 입니다.</p>
                <div class="center-code-input">
                    <input type="text" placeholder="센터 코드를 입력해주세요." v-model="localCenterCode" @input="event.onInputChange"/>
                </div>
            </li>
            <li
                :class="{ selected: newYn === 'Y'}"
                @click="event.onOptionClick('Y')">
                <p>신규 등록 SPORTITION 센터 입니다.</p>
            </li>
        </ul>
    </section>
</template>

<style scoped lang="scss">
section {
    > h2 {
        margin-bottom: 0.2rem;
        
    }

    > ul#center-setting-container { 
        > li {
            width: 100%;
            border-radius: 0.6rem;
            border: 1px solid #ccc;
            > p {
                color: #888;
            }

            > div.center-code-input {
                height: 0;
                overflow: hidden;

                > input {
                    width: 100%;
                    padding : {
                        top: 1rem;
                        bottom: 0.3rem;
                    }
                    border: none;
                    border-bottom: 1px solid var(--color-main-black);
                }
            }

            &.selected {
                border: 2px solid var(--color-main-red);
                

                > p {
                    color: var(--color-main-black);
                    font-weight: 500;
                }

                > div.center-code-input {
                    height: 100%;
                }
            }
        }

    }
}

@media (max-width: 767px) {
    section {
        display: flex;
        flex-direction: column;
        align-items: center;
        > h2 {
            font-size: 1.2rem;
        }
        
        > ul#center-setting-container {
            width: 90%;
            
            > li {
                padding: 1rem;
                margin-top: 1rem;
                > div.center-code-input {

                }
            }
            
            
        }
    }

}

@media (min-width: 768px) {
    section {
        > h2 {

        }
        
        > ul#center-setting-container {
            > li {
                > div.center-code-input {

                }
            }

            
        }

    }
}
</style>
