
import Vue from 'vue'
import Vuex from 'vuex'
import * as getters from './getters'
import mutations from './mutations'
import actions from './actions'
import state from './state'

Vue.use(Vuex)


export default new Vuex.Store({
     state,
     getters,
     actions,
     mutations
})
