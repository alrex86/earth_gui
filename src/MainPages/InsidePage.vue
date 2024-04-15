<template>
    
    <div class="container-fluid">
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="container-fluid">
                <a class="navbar-brand" href="#">Earth</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item" @click="store.setPage('Home')">
                            <a class="nav-link active"  aria-current="page" href="#">Home</a>
                        </li>
                        <li class="nav-item" @click="store.setPage('Game')">
                            <a class="nav-link" href="#">Game</a>
                        </li>
                        <li class="nav-item" @click="store.setLoggedIn(false)">
                            <a class="nav-link" href="#">Logout</a>
                        </li>
                        
                        
                    </ul>
                
                </div>
            </div>
        </nav>

        <HomePage v-if="store.page == 'Home'"></HomePage>
        <GamePage v-else-if="store.page == 'Game'"></GamePage>
    </div>
    
    
</template>


<script setup lang="ts">
import HomePage from '../Pages/HomePage.vue';
import GamePage from '../Pages/GamePage.vue';
import { useStore } from '@/store';

const store = useStore()
// const useStore = require('vuex');
// import { useStore } from 'vuex';



// const store = useStore()
// defineProps<{
//     msg: string,

// }>()

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