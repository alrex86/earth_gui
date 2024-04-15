

import { createStore } from "vuex";
import globalFuncs from "@/globals/state";
import type { stateType } from "@/types";

const store = createStore({
    state () {
      let stateData: stateType = {
        count: 7,
        loggedIn: false,
        page: 'login'
      }
      return stateData;
    },
    mutations: {
      increment (state) {
        state.count++
      }
    },
    actions: {
        incrementAsyncs ({ commit, state }, amount: number) {
            // state.count++
            console.log('increment async');
            // globalFuncs.incrementCount(state);
            state.count++;
        }
      }
      
  })
  // const state: stateType = {
  //   count: 7,
  //   loggedIn: false,
  //   page: 'login'
  // }
  // const store = createStore({
  //   state: state,
  //   incrementAsync: (state: stateType, amount: number) => {
  //     console.log('increment async');
  //     state.count = state.count + amount
  //   }
  //   // mutations: {
  //   //   increment (state) {
  //   //     state.count++
  //   //   }
  //   // },
  //   // actions: {
  //   //     incrementAsync ({ commit, state }, amount: number) {
  //   //         // state.count++
            
  //   //     }
  //   //   }
      
  // })

  export default store;