<template>

    <div class="container-fluid" v-if="store.country.land == null">
        <button class="btn btn-primary" @click="createCountry()">Create Country</button>
    </div>

    <div v-else class="container-fluid">
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="container-fluid">
                
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#gameMenus" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="gameMenus">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item" @click="page = 'Home'">
                            <a class="nav-link active"  aria-current="page" href="#">Home</a>
                        </li>
                        <li class="nav-item" @click="page = 'Build'">
                            <a class="nav-link" href="#">Build</a>
                        </li>
                        <li class="nav-item" @click="page = 'Advisor'">
                            <a class="nav-link" href="#">Advisor</a>
                        </li>
                        <li class="nav-item" @click="page = 'Research'">
                            <a class="nav-link" href="#">Research</a>
                        </li>
                        <li class="nav-item" @click="page = 'Explore'">
                            <a class="nav-link" href="#">Explore</a>
                        </li>
                        
                        
                    </ul>
                
                </div>
            </div>
        </nav>

        <div class="container-fluid">
            <BuildPage v-if="page == 'Build'"></BuildPage>
            <ResearchPage v-else-if="page == 'Research'"></ResearchPage>
            <ExplorePage v-else-if="page == 'Explore'"></ExplorePage>
            
        </div>
    </div>
    
    
    
    
</template>


<script setup lang="ts">

import Axios from 'axios';
import BuildPage from './BuildPage.vue';
import ExplorePage from './ExplorePage.vue'
import ResearchPage from './ResearchPage.vue'
import { useStore} from '@/store';
import { ref } from 'vue'


let page = ref('Home')
const store = useStore();








// defineProps<{
//     msg: string,

// }>()

const createCountry = async () => {
    let response = await store.apiCall(store.pathFinal + 'game/createCountry', null)
    console.log('response: ', response); 
    if(response.status == 1){

    }
    // state.count++;
    // console.log('count: ', state.count);
    // // globalFuncs.incrementCount();
    // // store.incrementAsync(store.state.cou, 5);
    // store.dispatch(actionNames.incrementAsyncs, 5);
}


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