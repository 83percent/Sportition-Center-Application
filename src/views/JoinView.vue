<script setup>
import CenterRegistComponent from '@/components/join/CenterRegistComponent.vue';
import LoginInfoComponent from '@/components/join/LoginInfoComponent.vue';
import StepNavComponent from '@/components/join/StepNavComponent.vue';
import UserInfoComponent from '@/components/join/UserInfoComponent.vue';

import { ref, reactive, computed } from 'vue';
/*
    Join Date Object
*/
const joinData = reactive({
    center : {
        newYn:      undefined,      // String(Y or N), 신규 등록 센터 여부
        code:       undefined    // String, centerCode
    },
    loginInfo : {
        email:      undefined,
        password:   undefined
    },
    userInfo : {
        name:       undefined,
        gender:     undefined,
        telNo:      undefined
    }
});

const step = ref(1);
const nextStep = () => {
    switch(step.value) {
        case 1 : {
            if(validate.joinCenterData()) step.value++;
            break;
        }

        case 2 : {
            if(validate.joinLoginInfo()) step.value++;
            break;
        }

        case 3 : {
            if( validate.joinCenterData()
                && validate.joinUserInfo()
                && validate.joinUserInfo()
            ) {

                console.log("Input required all clear !!!");

                // TODO : Create User data
                // TODO : Move to Login Page
            }
            break;
        }
    }
}

const moveStep = (value) => {
    switch(value) {
        case 1 : {
            step.value = 1;
            break;
        }
        case 2 : {
            if(validate.joinCenterData()) {
                step.value = 2;
                console.log("Move 2 success");
            }
            break;
        }
        case 3 : {
            if(validate.joinLoginInfo()) step.value = 3;
            break;
        }
    }
}

const event = {
    changeCenterInfo : (newYn, code) => {
        joinData.center.newYn = newYn;
        if(newYn === 'N') joinData.center.code = code;
    },
    changeLoginEmail : (email) => {
        joinData.loginInfo.email = email;
    },
    changeLoginPassword : (password) => {
        joinData.loginInfo.password = password;
    },
    changeUserName : (name) => {
        joinData.userInfo.name = name;
    },
    changeUserGender: (gender) => {
        joinData.userInfo.gender = gender;
    },
    changeUserTelNo: (telNo) => {
        joinData.userInfo.telNo = telNo;
    }
}

const validate = {
    joinCenterData : () => {
        if(['Y', 'N'].includes(joinData.center.newYn)) {
            switch(joinData.center.newYn) {
                case 'Y' : {
                    return true;
                }
                case 'N' : {
                    if(joinData.center.code) {
                        // TODO : UUID RegExp Validate
                        // TODO : Search UUID Center
                        return true;
                    } else {
                        return false;
                    }
                }
            }
        } else {
            return false;
        }
    },
    
    joinLoginInfo : () => {
        return joinData.loginInfo.email && joinData.loginInfo.password;
    },

    joinUserInfo : () => {
        return joinData.userInfo.name && joinData.userInfo.gender;
    }
};

const isNextButtonActive = computed(() => {
    switch (step.value) {
        case 1 : {
            return validate.joinCenterData();
        }
        case 2 : {
            return validate.joinLoginInfo();
        }
        case 3 : {
            return validate.joinUserInfo();
        }
    }
});

</script>
<template>
    <main>
        <header>
            <h1>환영합니다.</h1>
        </header>
        
        <article>
            <StepNavComponent
                :step="step"
                @moveStep="moveStep"/>

            <!-- 1 -->
            <CenterRegistComponent
                v-if="step === 1"
                :code="joinData.center.code"
                :newYn="joinData.center.newYn"
                @changeCenterInfo="event.changeCenterInfo" />
            
            <!-- 2 -->
            <LoginInfoComponent
                v-if="step === 2"
                :email="joinData.loginInfo.email"
                :password="joinData.loginInfo.password"
                @changeLoginEmail="event.changeLoginEmail"
                @changeLoginPassword="event.changeLoginPassword" />
            
            <!-- 3 -->
            <UserInfoComponent
                v-if="step === 3"
                :name="joinData.userInfo.name"
                :gender="joinData.userInfo.gender"
                :telNo="joinData.userInfo.telNo"
                @changeUserName="event.changeUserName"
                @changeUserGender="event.changeUserGender"
                @changeUserTelNo="event.changeUserTelNo" />
        </article>
        <div id="confirm-wrap">
            <button @click="nextStep" :class="isNextButtonActive ? 'active' : ''">
                <i class="material-icons">{{step < 3 ? 'arrow_forward' : 'check'}}</i>
            </button>
        </div>

        <div class="help-wrap">
			<RouterLink :to="{name: 'login'}">
				이미 SPORTITION 회원인가요?
			</RouterLink>
		</div>        
    </main>
</template>
<style scoped lang="scss">
main {
    width: 100vw;
    height: 100vh;
    

    > header {
        > h1 {
            font-size: 3.0rem;
        }
        margin-bottom: 2rem;
    }

    > article {
        display: flex;
        flex-direction: column;
    }

    > #confirm-wrap {
        margin: 2rem 0 ;

		> button {
			display: flex;
			align-items: center;
			justify-content: center;
			opacity: 0.5;
			background-color: #e63232;
			color: #fff;
			border: none;
			border-radius: 50%;
			width: 3rem;
			height: 3rem;
			cursor: pointer;

			&.active {
				opacity: 1;
				transition: 0.15s;
			}
		}
    }

    > .help-wrap {
        padding-bottom: 2rem;
    }
}
@media (max-width: 767px) {
    main {
        display: flex;
        flex-direction: column;
        align-items: center;

        > header {
            padding-top: 2rem;
            > h1 {
                font-size: 3rem;
            }
        }

        > article {
            max-width: 100vw;
            width: 100vw;
            height: 100%;

        }

        > #confirm-wrap {
            > button {
                width: 3.5rem;
                height: 3.5rem;
            }
        }
    }
}
/* 태블릿 (화면 너비 769px ~ 1024px) */
@media (min-width: 768px) {
    main {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        > header {
            > h1 {

            }
        }

        > article {

        }

        > #confirm-wrap {
            > button {

            }
        }
    }
}
</style>
