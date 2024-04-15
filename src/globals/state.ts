import type { stateType } from "@/types";



const incrementCount = (state: stateType) => {
    state.count ++;
}

export default {
    incrementCount
}
// const globalFuncs = {
//     incrementCount: (state: stateType) => {
//         state.count ++
//     }
// }

// export default globalFuncs;