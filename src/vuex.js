import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        counter: 0
    },
    mutations: {
        decrement: state => {
            state.counter--
        },
        increment: (state, num) => {
            state.counter += num
        }
    },
    getters: {
        counter: state => state.counter + 1
    },
    actions: {
        decrement: ({commit}) => commit('decrement'),        
        increment: context => context.commit('increment', 10)
    }
})

export { store }