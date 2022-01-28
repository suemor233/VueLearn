import { InjectionKey } from "vue";

import { useStore as baseUseStore,createStore,Store } from "vuex";

interface State{
    username:string
}

export const key : InjectionKey<Store<State>> = Symbol()


export const store = createStore<State>({
    state:{
        username: '张三'
    },
    getters:{
        getName : state=>{
            return state.username
        }
    },
    mutations:{
        SET_USERNAME(state,username:string){
            state.username = username;
        }
    },
    actions:{}
})

export function useStore(){
    return baseUseStore(key)
}