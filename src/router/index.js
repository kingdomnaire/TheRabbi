import { createRouter, createWebHistory } from 'vue-router';
import App from '@/App.vue';
import HostPageView from '@/views/HostPageView.vue';
import GameBoardView from '@/views/GameBoardView.vue';
import GuestPageView from '@/views/GuestPageView.vue';
import AddQuestionView from '@/views/AddQuestionView.vue';
import MessageView from '@/views/MessageView.vue';
import LoginView from '@/views/LoginView.vue'
import EditQuestionView from '@/views/EditQuestionView.vue'
import RegisterView from '@/views/RegisterView.vue'
import FastestFingerView from '@/views/FastestFingerView.vue';



const routes = [
  {
    path: '/home',
    name: 'home',
    component: App,
    meta: { requiresAuth: true },
  },
  {
    path: '/hostScreen',
    name: 'hostScreen',
    component: HostPageView,
    meta: { requiresAuth: true },
  },
  {
    path: '/login',
    name: 'login',
    component: LoginView
  },
  {
    path:'/register',
    name: 'register',
    component: RegisterView
  },
  {
    path: '/dashboard/fastest',
    name:'fastest',
    component: FastestFingerView
  },
  {
    path: '/guestScreen',
    name: 'guestScreen',
    component: GuestPageView,
    meta: { requiresAuth: true },
  },
  {
    path: '/dashboard/questions',
    name: 'questions',
    component: EditQuestionView,
    meta: { requiresAuth: true },
  },
  {
    path: '/dashboard/panel',
    name:'panel',
    component: GameBoardView,
    meta: { requiresAuth: true },
  },
  {
    path: '/dashboard/question',
    name: 'question',
    component: AddQuestionView,
    meta: { requiresAuth: true },
  },
  {
    path: '/dashboard/message',
    name: 'message',
    component: MessageView,
    meta: { requiresAuth: true },
  },
  // redirect
  {
    path: '/',
    redirect: '/dashboard/panel',
    meta: { requiresAuth: true },
  },
];


const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes: routes
});


const isAuthenticated = () =>{
  const storedLogin =localStorage.getItem('loginRequest');
  
  // Check if both email and password are present in local storage
  return JSON.parse(storedLogin || '{}');
}

router.beforeEach((to, from, next) => {
  const isLoggedIn = isAuthenticated().email

  if (to.meta.requiresAuth && !isLoggedIn) {
    next('/login')
    }else{
      next()
    }
});


export default router;