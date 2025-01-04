<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();

/* 뒤로가기 버튼 기능 구현 */
const goBack = () => {
    router.back();
}

</script>

<template>
    <nav>
        <!-- TODO : 인입된 위치에 따라 뒤로가기 노출할지에 여부 작성필요-->
        <div class="nav-container" @click="goBack">
            <i class="material-icons">arrow_back_ios_new</i>
        </div>
        <div class="logo-container">
            <h1>SPORTITION</h1>
        </div>
    </nav>
</template>

<style lang="scss" scoped>
nav {
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    padding: 0.85rem 1rem;
    width: 100%;
    z-index: 99;
    background: rgb(255,255,255);
    background: linear-gradient(0deg, rgba(255,255,255,0.3) 0%, rgba(255,255,255,0.8) 50%);

    > .logo-container {
        flex-grow: 1;
        padding-left: 0.3rem;
        > h1 {
            color: var(--color-main-red);
            font-size: 1.4rem;
            font-weight: 700;
        }
    }
    > .nav-container {
        padding-top: 0.3rem;
        > i {
            font-size: 1.5rem;
        }
    }
}
</style>

