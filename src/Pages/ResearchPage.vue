<template>
    
    <div class="input-group mb-3">
        
        <input v-model="data.military" type="text" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1">
        <span class="input-group-text" id="basic-addon1">Military Strategy</span>
    </div>
    <div class="input-group mb-3">
        
        <input v-model="data.farm" type="text" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1">
        <span class="input-group-text" id="basic-addon1">Medical</span>
    </div>
    <div class="input-group mb-3">
        
        <input v-model="data.business" type="text" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1">
        <span class="input-group-text" id="basic-addon1">Business</span>
    </div>
    <button class="btn btn-primary" @click="research()">Research</button>
</template>


<script setup lang="ts">

import Axios from 'axios';

import { useStore} from '@/store';


const store = useStore();


let data = {
    military: 0,
    farm: 0,
    business: 0

}
const research = async () => {
    let response = await store.apiCall(store.pathFinal + 'game/research', data);
    console.log('response: ', response);   
}





// defineProps<{
//     msg: string,

// }>()



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