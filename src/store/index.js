import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './action'
import ajax from '../config/ajax'

Vue.use(Vuex)

const state={
  level:'第一周',
  itemNum:1,
  allTime:0,
  timer:'',
  itemDetail:[{

  }]
}

export default new Vuex.Store({
  state,
  actions,
  mutations
})
