<script setup>
import UserElementComponent from '@/components/home/user/UserElementComponent.vue';


</script>

<template>
    <section>
        <div id="new-container">
            <button>
                <i class="material-icons">add</i>
                <p>회원 등록</p>
            </button>
            <ul>
                <li>
                    <UserElementComponent />
                </li>
            </ul>
        </div>

    </section>
</template>

<style scoped lang="scss">
#new-container {
    width: 100%;
    
    > button {
        width: 100%;
        padding: 0.5rem 0;
        background-color: #efefef;
        border: none;
        border-bottom: 1px solid #afafaf;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        
        > p {
            margin-left: 0.5rem;
            font-size: 0.9rem;
        }
    }
}
</style>
