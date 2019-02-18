import Vue from 'vue';
import Vuex from 'vuex';
import { getters, state } from 'store/global/state';
import actions from 'store/global/actions';
import mutations from 'store/global/mutations';

Vue.use(Vuex);

export const store = new Vuex.Store({
  getters,
  state,
  actions,
  mutations
});
