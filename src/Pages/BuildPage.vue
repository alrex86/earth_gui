<template>
    
    <div class="input-group mb-3">
        
        <input v-model="data.research" type="text" class="" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1">
        <span class="" id="basic-addon1">{{store.country.allBuildings.researchLab.name}}</span>
    </div>
    <div class="input-group mb-3">
        
        <input v-model="data.farm" type="text" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1">
        <span class="input-group-text" id="basic-addon1">{{store.country.allBuildings.farm.name}}</span>
    </div>
    <div class="input-group mb-3">
        
        <input type="text" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1">
        <span class="input-group-text" id="basic-addon1">{{store.country.allBuildings.business.name}}</span>
    </div>
    <button class="btn btn-primary" @click="build()">Build</button>
</template>


<script setup lang="ts">

    import Axios from 'axios';

    import { useStore} from '@/store';


    const store = useStore();

    
    let data = {
        research: 0,
        farm: 0,
        business: 0

    }
    const build = async () => {
        let response = await store.apiCall(store.pathFinal + 'game/build', data);
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