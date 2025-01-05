import { createRouter, createWebHistory } from 'vue-router';
import HomeView           from '@/views/HomeView.vue';
import LoginView          from '@/views/LoginView.vue';
import JoinView           from '@/views/JoinView.vue';
import ExerciseView       from '@/views/exercise/ExerciseView.vue';
import ExerciseListView   from '@/views/exercise/list/ExerciseListView.vue';
import UserView           from '@/views/UserView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView
    },
    {
      path: '/join',
      name: 'join',
      component: JoinView
    },
    {
      path: '/exercise',
      name: 'exercise',
      component: ExerciseView
    },
    {
      path: '/exercise/list',
      name: 'exerciseList',
      component: ExerciseListView
    },
    {
      path: '/users',
      name: 'users',
      component: UserView
    }
  ],
})

export default router
