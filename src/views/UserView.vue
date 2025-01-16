<script setup>
import { useRouter } from 'vue-router';
import { groupByFirstChar } from '@/utils/groupByKoreanConsonant';

import NavMain from '@/components/home/nav/NavMain.vue';
import UserListComponent from '@/components/home/user/UserListComponent.vue';

const router = useRouter();
const testList = [
    {
        id: "6a54ab23-02cd-41af-a179-3d4140aea556",
        name: "이재훈",
        score: "0"
    }
];
const userList = groupByFirstChar(testList);



</script>

<template>
<main>
    <NavMain />
    <div id="title-container">
        <h1>회원</h1>
    </div>
    <div id="search-container">
        <div>
            <i class="material-icons">search</i>
            <input type="text" placeholder="조회할 회원명을 입력해주세요..."/>
        </div>
    </div>

    <article id="list-container">
        <UserListComponent
            v-for="(element,index) in userList"
            :key="index"
            :filterValue="element.filterValue"
            :filterResultList="element.filterResultList" />        
    </article>
</main>
</template>

<style lang="scss" scoped>
main {
    max-width: 100vw;
    min-height: 100vh;

    > #title-container {
        margin: 0 1rem;
        padding-top: 4rem;
    }

    > #search-container {
        width: 100%;
        padding-top: 2rem;
        padding-bottom: 2rem;
        border-bottom: 1px solid #f8f8f8;

        > div {
            display: flex;
            align-items: center;
            border-bottom: 2px solid #ccc;
            padding: {
                left: 0.3rem;
                right: 0.3rem;
                bottom: 0.3rem;;
            }
            margin: 0 1rem;

            > i {
                color: #bbb;
                font-size: 1.6rem;
            }

            > input {
                flex-grow: 1;
                margin-left: 0.2rem;
                border: none;
                outline: none;
                font-size: 1rem;
            }
        }
        
    }

    > #list-container {
        width: 100%;
        background-color: var(--color-main-white);
    }
}

@media (max-width: 767px) {
main {

    > #title-container {
        > h1 {
            font-size: 2.8rem;
            font-weight: 700;
        }
    }
}
}

@media (min-width: 768px) {
main {

}
}
</style>
