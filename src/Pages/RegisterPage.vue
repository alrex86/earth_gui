<template>
    
    <input v-model="username" placeholder="edit me" />
    <input v-model="password" placeholder="edit me" />
    <a @click="store.page='login'">Login</a>
    <button @click="register()">Register</button>
    
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



const register = async() => {
    let data = {
        username: username,
        password: password
    }

    let response = await Axios({
            method: 'post',
            url: 'http://localhost:5000/api/newUser',
            data: data
            // headers: {
            //     'x-access-token': state.userData.token,
            //     'version': state.appData.version,
            //     'sosyal-version': state.appData.versionSosyal,
            // }    
        })   
        console.log('response: ', response);
        
    console.log('username: ', username);
    console.log('password: ', password);
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