import { createRouter, createWebHashHistory } from "vue-router";
import Calendar from './pages/Calendar.vue';
import ToDoList from './pages/ToDoList.vue';
import Timer from './pages/Timer.vue';
import PomadoroTime from './pages/PomadoroTime.vue';
import Calculator from './pages/Calculator.vue';
import Books from './pages/Books.vue';
import Analitic from './pages/Analitic.vue';
import Chat from './pages/Chat.vue';
import WeightControl from './pages/WeightControl.vue';
import AnimationGSAP from "@/pages/AnimationGSAP.vue";

export default createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: '/calendar',
            component: Calendar
        },
        {
            path: '/todolist',
            component: ToDoList
        },
        {
            path: '/timer',
            component: Timer
        },
        {
            path: '/pomadorotime',
            component: PomadoroTime
        },
        {
            path: '/calculator',
            component: Calculator
        },
        {
            path: '/books',
            component: Books
        },
        {
            path: '/analitic',
            component: Analitic
        },
        {
            path: '/chat',
            component: Chat
        },
        {
            path: '/weightcontrol',
            component: WeightControl
        },
        {
            path: '/animationGSAP',
            component: AnimationGSAP
        },
    ],
    // mode: 'history',
})