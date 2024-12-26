<script setup>
import { ref, defineProps, defineEmits, watch } from 'vue';
const emits = defineEmits(['changeUserName', 'changeUserGender', 'changeUserTelNo']);

const props = defineProps({
    name:   String,
    gender: String,
    telNo:  String
});

const name      = ref(props.name);
const gender    = ref(props.gender);
const telNo     = ref(props.telNo);

const event = {
    onChangeName : (value) => {
        const regName = /^[가-힣a-zA-Z]{2,20}$/;
        if(regName.test(value)) {
            emits('changeUserName', value);
        } else {
            emits('changeUserName', null);
        }
    },
    onClickGender : (value) => {
        gender.value = value;
        emits('changeUserGender', value);
    },
    onChangeTelNo : (value) => {
        const regTelNo = /^(01[016789]{1})-?[0-9]{3,4}-?[0-9]{4}$/;
        if(regTelNo.test(value)) {
            emits('changeUserTelNo', value);
        } else {
            emits('changeUserTelNo', null);
        }
    }
    
};


watch(name, (value) => {
    event.onChangeName(value);
});

watch(telNo, (value) => {
    event.onChangeTelNo(value);
});


</script>

<template>
    <section>
        <h2>개인정보 설정</h2>
        <div>
            <ul>
                <li>
                    <p>이름</p>
                    <input
                        type="text"
                        v-model="name"/>
                </li>
            </ul>
            <ul>
                <li>
                    <p>성별</p>
                    <div class="option-gender-container">
                        <div
                            :class="{selected: gender === 'man'}"
                            @click="event.onClickGender('man')">
                            남자
                        </div>
                        <div
                            :class="{selected: gender === 'woman'}"
                            @click="event.onClickGender('woman')">
                            여자
                        </div>
                    </div>
                </li>
            </ul>
            <ul>
                <li>
                    <p>연락처 (선택)</p>
                    <input
                        type="tel"
                        v-model="telNo"
                        placeholder="010xxxxXXXX"/>
                </li>
            </ul>
        </div>
    </section>
</template>

<style lang="scss">
section {
    display: flex;
    flex-direction: column;
    align-items: center;

    > h2 {
        margin-top: 0.2rem;
    }

    > div {
        display: flex;
        flex-direction: column;
        align-items: center;
        
        > ul {
            padding-top: 2rem;
            > li {
                display: flex;
                flex-direction: column;
                margin-bottom: 1.5rem;


                > p {
                    margin-bottom: 0.5rem;   
                }
                > input {
                    font-weight: 500;   
                }

                > div.option-gender-container {
                    display: flex;
                    gap: 0.7rem;
                    width: 100%;

                    > div {
                        text-align: center;
                        width: 100%;
                        border-radius: 0.6rem;
                        border: 1px solid #ccc;
                        padding: 0.5rem 0;
                        color: #888888;

                        &.selected {
                            border: 2px solid var(--color-main-red);
                            color: var(--color-main-black);
                            font-weight: 500;
                        }
                    }
                }


                > div.error {
                    display: none;
                    align-items: center;
                    color: var(--color-main-red);
                    padding-top: 0.3rem;
                    

                    > i {
                        font-size: 0.9rem;
                    }
                    > p {
                        padding-left: 0.3rem;
                        font-size: 0.8rem;
                    }

                    &.on {
                        display: flex;
                    }
                }

            }
        }
    }
}

@media (max-width: 767px) {
section {
    > h2 {
        font-size: 1.2rem;
    }

    > div {
        width: 100%;
        > ul {
            width: 90%;
            > li {
                
                > p {
                    font-size: 0.85rem;
                }
                > input {
                    width: 100%;
                    font-size: 1.1rem;
                    padding : {
                        top: 1rem;
                        bottom: 0.3rem;
                    }
                    border: none;
                    border-bottom: 1px solid var(--color-main-black);
                }
            }
        }
    }
}
}
@media (min-width: 768px) {
section {
    > h2 {
        font-size: 1.5rem;
    }
    > div {
        width: 17rem;
        > ul {
            width: 100%;
            > li {
                
                > p {
                    font-size: 0.85rem;
                }
                > input {
                    width: 100%;
                    font-size: 1.2rem;
                    padding : {
                        top: 1rem;
                        bottom: 0.3rem;
                    }
                    border: none;
                    border-bottom: 1px solid var(--color-main-black);
                }
            }
        }
    }
}
}
</style>
