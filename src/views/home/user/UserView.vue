<script setup>
import UserDetailView from './UserDetailView.vue';
import UserListView from './UserListView.vue';

const user = {
    key: '123',
    name: "이재훈",
    gender: 'man',
    age: '30',
    active : {
        to: '2024-10-01',
        from: undefined
    },
    exercise : [
            {
                type: 'benchpress',
                datas: [
                    {date: '2024-11-01', value: '60'},
                    {date: '2024-11-06', value: '65'},
                    {date: '2024-11-21', value: '65'},
                    {date: '2024-11-27', value: '70'},
                ]
            },
            {
                type: 'squart',
                datas: [
                    {date: '2024-11-01', value: '80'},
                    {date: '2024-11-06', value: '90'},
                    {date: '2024-11-21', value: '95'},
                    {date: '2024-11-27', value: '95'},
                ]
            },
            {
                type: 'deadlift',
                datas: [
                    {date: '2024-11-01', value: '110'},
                    {date: '2024-11-06', value: '110'},
                    {date: '2024-11-21', value: '110'},
                    {date: '2024-11-27', value: '115'},
                ]
            }
        ]
}

</script>

<template>
    <article>
        <div id="user-list-wrap">
            <UserListView />
        </div>
        <div id="user-view-wrap">
            <UserDetailView 
                :user = 'user'/>
        </div>    
    </article>
</template>

<style scoped lang="scss">
article {
    display: flex;
    width: 100vw;
    height: 100%;
    
    > #user-list-wrap {
        width: 17rem;
        height: 100%;
        border-right: 1px solid #afafaf;
    }

    > #user-view-wrap {
        flex-grow: 1;
        height: 100%;
    }
}
</style>
