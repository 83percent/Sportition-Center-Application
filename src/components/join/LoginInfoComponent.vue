<script setup>
import { defineProps, defineEmits, ref, watch } from 'vue';
const props = defineProps({
    email : String,
    password : String
});

const emits = defineEmits(['changeLoginEmail', 'changeLoginPassword']);

const email         = ref(props.email);
const password      = ref(props.password);
const rePassword    = ref(undefined);

const emailErrorMsg = ref(undefined);
const pwdErrorMsg   = ref(undefined);
const rePwdErrorMsg = ref(undefined);

const event = {
    validateEmail : (email) => {
        const regEmail = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;
        if(!regEmail.test(email)) {
            emits('changeLoginEmail', null);
            emailErrorMsg.value = '이메일 형식에 따라 입력해주세요';
        } else {
            emits('changeLoginEmail', email);
            emailErrorMsg.value = null;
        }
    },
    validatePassword : (password) => {
        const regPwd = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,15}$/;
        if(!regPwd.test(password)) {
            pwdErrorMsg.value = '비밀번호 형식에 따라 입력해주세요.'
        } else {
            pwdErrorMsg.value = null;
        }
    },
    validateRePassword : (repassword) => {
        if(password.value) {
            if(password.value !== repassword) {
                emits('changeLoginPassword', null);
                rePwdErrorMsg.value = '비밀번호가 일치하지 않습니다.';
            } else {
                emits('changeLoginPassword', repassword);
                rePwdErrorMsg.value = null;
            }
        } else {
            emits('changeLoginPassword', null);
            rePwdErrorMsg.value = null;
        }
    }
}

watch(email, (value) => {
    event.validateEmail(value);
});

watch(password, (value) => {
    event.validatePassword(value);
});

watch(rePassword, (value) => {
    event.validateRePassword(value);
});


</script>

<template>
    <section>
        <h2>로그인 정보 설정</h2>
        <div>
            <ul>
                <li :class={}>
                    <p>이메일</p>
                    <input
                        type="text"
                        placeholder="example@xxx.xxx"
                        v-model.trim="email"/>

                    <div :class="['error', {on: emailErrorMsg}]">
                        <i class="material-icons">error</i>
                        <p>{{ emailErrorMsg }}</p>
                    </div>
                </li>
            </ul>
            <ul>
                <li>
                    <p>비밀번호</p>
                    <input
                        type="password"
                        placeholder="영문 / 숫자 / 특수문자 8~15자리 이하"
                        v-model="password"/>

                    <div :class="['error', {on: pwdErrorMsg}]">
                        <i class="material-icons">error</i>
                        <p>{{ pwdErrorMsg }}</p>
                    </div>
                </li>
                <li>
                    <p>비밀번호 확인</p>
                    <input
                        type="password"
                        placeholder="비밀번호 확인"
                        v-model="rePassword"/>

                    <div :class="['error', {on: rePwdErrorMsg}]">
                        <i class="material-icons">error</i>
                        <p>{{ rePwdErrorMsg }}</p>
                    </div>
                </li>
            </ul>
        </div>
    </section>
</template>

<style  scoped lang="scss">
section {
    display: flex;
    flex-direction: column;
    align-items: center;
    > h2 {
        margin-bottom: 0.2rem;
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
                    
                }
                > input {
                    font-weight: 500;   
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
            width: 18rem;
            > ul {
                width: 90%;
                > li {
                    
                    > p {
                        font-size: 0.85rem;
                    }
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
            }
        }
    }
}
</style>
