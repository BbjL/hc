import Vue from 'vue'
import Vuex from 'vuex'
import router from '@/router'
import { fliterRoutes } from "../filters";

const state = {
  sliderRoutes:[]
}


const actions =  {
  setSliderRoutes({ commit }){
    const sliderRoutes = fliterRoutes(router.options.routes)
    commit('SET_SLIDERROUTES', sliderRoutes)
  }
}


const mutations =  {
  SET_SLIDERROUTES(state, sliderRoutes){
    state.sliderRoutes = sliderRoutes
  }
}


const getters =  {}


Vue.use(Vuex);

export default new Vuex.Store({
  actions,
  getters,
  mutations,
  state
})
