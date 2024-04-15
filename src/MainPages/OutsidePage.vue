<template>
    <LoginPage v-if="store.page=='login'" />
    <RegisterPage v-else />
    <!-- <a @click="store.page='register'">Register</a> -->
</template>


<script setup lang="ts">

// import { useStore } from 'vuex';
import LoginPage from '../Pages/LoginPage.vue';
import RegisterPage from '../Pages/RegisterPage.vue';
import { useStore } from '@/store';

const store = useStore()

// const store = useStore()
// defineProps<{
//     msg: string,

// }>()

// const onclickBtn = (amt: number, paylod: number) => {
//     amt = 5;
    
</script>



<style scoped>
    h1 {
        font-weight: 500;
        font-size: 2.6rem;
        position: relative;
        top: -10px;
    }

    h3 {
        font-size: 1.2rem;
    }

    .greetings h1, .greetings h3 {
        text-align: center;
    }

    @media (min-width: 1024px) {
    .greetings h1,
    .greetings h3 {
        text-align: left;
    }
    }
</style>