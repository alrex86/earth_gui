<template>
    
    <input v-model="username" placeholder="edit me" />
    <input v-model="password" placeholder="edit me" />
    
    <button @click="login()">Login</button>
    <button @click="onclickBtn()">Increment</button>
    <a @click="store.page='register'">Register</a>
    <!-- <a @click="$store.state.page='register'">Register</a> -->
    <!-- <h1>{{ state.count }}</h1> -->
    
</template>


<script setup lang="ts">

import Axios from 'axios';

import { useStore} from '@/store';


const store = useStore();







let username: string;
let password: string;
// defineProps<{
//     msg: string,

// }>()

const onclickBtn = () => {
    store.test();
    console.log(store.count)
    // state.count++;
    // console.log('count: ', state.count);
    // // globalFuncs.incrementCount();
    // // store.incrementAsync(store.state.cou, 5);
    // store.dispatch(actionNames.incrementAsyncs, 5);
}

const login = async() => {
    let data = {
        username: username
    }

    let response = await store.apiCall(store.pathFinal + 'user/login', data)
    console.log('response: ', response); 
    
    
    
    if(response.status == 1){
        
        // userData.token = response.data.payload;
        // AsyncStorage.setItem('userData', JSON.stringify({token: userData.token}));
        if(response.code == 0){
            store.userData.token = response.payload;
            localStorage.setItem('userData', JSON.stringify({token: response.payload}));
            store.getUserData();  
        }else{
            // userData.verification.email = '';
            // userData.currentPage.front = 'Verification';
            // userData.verification.email = data.payload;
            
        }
            
    }
    
}

// const onchangeInput = (event: any) => {
//     // console.log('username: ', username);
// }
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