import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)


export default new Vuex.Store({
  state: {
    shoppingList: [],
    shouldShowModal: false,
  },
  getters: {
    shoppingList: state => state.shoppingList,
    shouldShowModal: state => state.shouldShowModal,
  },
  mutations: {
    ADD_ITEM(state, name) {
      state.shoppingList.push(name);
    },
    REMOVE_ITEM(state, name) {
      const index = state.shoppingList.lastIndexOf(name);
      state.shoppingList.splice(index, 1);
    },
    TOGGLE_SHOW_MODAL(state, bool) {
      state.shouldShowModal = bool;
    }
  },
  actions: {
    addItem(context, name) {
      context.commit('ADD_ITEM', name);
    },
    removeItem(context, name) {
      context.commit('REMOVE_ITEM', name);
    },
    toggleShowModal(context,bool) {
      context.commit('TOGGLE_SHOW_MODAL',bool);
    }
  },
})
