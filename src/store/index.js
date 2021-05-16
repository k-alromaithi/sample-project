import Vuex from 'vuex';
import Vue from 'vue';
import createPersistedState from "vuex-persistedstate";
import auth from './modules/auth';

Vue.use(Vuex); //Load Vuex
//Create a store
export default new Vuex.Store({
  modules: {
    auth
  },
  plugins: [createPersistedState()]
});