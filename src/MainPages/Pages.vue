<template>
    <InsidePage v-if="store.loggedIn" />
    <OutsidePage v-else />
</template>


<script setup lang="ts">

// import { useStore } from 'vuex';
import InsidePage from './InsidePage.vue';
import OutsidePage from './OutsidePage.vue';
import { useStore } from '@/store';
import { onMounted } from 'vue';

const store = useStore();

const getUserToken = () => {
    console.log('get user token');
    // console.log('asyn storage: ', AsyncStorage);
    let value: string | null = localStorage.getItem('userData');
    console.log('value: ', value);
    if(value != null){
        let userDataStorage = JSON.parse(value);
        store.userData.token = userDataStorage.token;
        store.getUserData();
        // getUserData();
        
    }
        
    
    // if(userDataStorage != null){
    //     console.log('userdata storage: ', userDataStorage);
        
        
        
        
    // }else{
    //     userData.gotUserData = true;
    //     userData.loggedIn = false;
    //     forceUpdate();
    // }   
    
}

const initiateVars = () => {
    console.log('get user token');
    // console.log('asyn storage: ', AsyncStorage);
    let localhostPath = 'localhost';
    
    if(store.testBuild){
        localhostPath = store.globalVars.ipAdd;
    }

    let beginPath = 'http://'+ localhostPath +':'+ store.globalVars.port +'/api/';
    store.pathFinal = beginPath;
    console.log('store path: '), store.pathFinal;
    // if(userDataStorage != null){
    //     console.log('userdata storage: ', userDataStorage);
        
        
        
        
    // }else{
    //     userData.gotUserData = true;
    //     userData.loggedIn = false;
    //     forceUpdate();
    // }   
    
}

// const store = useStore()
// defineProps<{
//     msg: string,

// }>()
onMounted(() => {
    initiateVars();
    getUserToken();
})
// const onclickBtn = (amt: number, paylod: number) => {
//     amt = 5;
//     store.dispatch('incrementAsync');
//     console.log(store.state.count);
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