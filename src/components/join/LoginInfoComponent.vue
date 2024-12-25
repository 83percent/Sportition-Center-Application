<script setup>
import { defineProps } from 'vue';
defineProps({
    step : {
        type: Number,
        required: true
    }
})
</script>

<template>
    <section>
        <h2>로그인 정보 설정</h2>
        <div>
            <div>
                <label>
                    <p>아이디</p>
                    <input type="text" />
                </label>
            </div>
            <div>
                <label>
                    <p>비밀번호</p>
                    <input type="text" />
                </label>
                <label>
                    <p>비밀번호 확인</p>
                    <input type="text" />
                </label>
            </div>
        </div>
    </section>
</template>

<style  scoped lang="scss">
section {
    
}
</style>
