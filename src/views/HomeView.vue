<script setup>
import UserView from '@/views/home/user/UserView.vue';
</script>

<template>
    <div id="wrap">
        <header>
            <div>
                <h1>SPORTITION</h1>
            </div>
        </header>
        <main>
            <UserView></UserView>
        </main>
    </div>

    
</template>

<style scoped lang="scss">
#wrap {
    display: flex;
    flex-direction: column;
    height: 100vh;
    width: 100vw;
}
#wrap {
    header {
        position: fixed;
        top: 0;
        left: 0;

        width: 100vw;
        height: 5vh;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        background-color: #fff;
        border-bottom: 1px solid #afafaf;

        > div {
            margin: 0.4rem 0;

            > h1 {
                font-size: 1.3rem;
//                color: var(--color-main-red);
            }
        }
    }

    main {
        flex-grow: 1;
        margin-top: 5vh;
        height: 100%;
    }
}
</style>
