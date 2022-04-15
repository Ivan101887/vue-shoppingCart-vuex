import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import VueAxios from "vue-axios";

Vue.use(Vuex)
Vue.use(VueAxios, axios)


export default new Vuex.Store({
  state: {
    allProduct: [],
    shoppingList: [],
    totalAmount: 0,
    shouldShowModal: false,
  },
  getters: {
    allProduct: state => state.allProduct,
    shoppingList: state => state.shoppingList,
    totalAmount: state => state.totalAmount,
    shouldShowModal: state => state.shouldShowModal
  },
  mutations: {
    set_allProduct(state, products) {
      state.allProduct = products;
    },
    add_item(state, id) {
      state.shoppingList.push(state.allProduct[id]);
    },
    remove_item(state, id) {
      const target = state.allProduct[id];
      const index = state.shoppingList.lastIndexOf(target);
      state.shoppingList.splice(index, 1);
    },
    plus_totalAmount(state) {
      state.totalAmount += 1;
    },
    minus_totalAmount(state) {
      state.totalAmount -= 1;
    },
    toggle_show_modal(state, str) {
      state.shouldShowModal = str;
    }
  },
  actions: {
    async getData({ commit }) {
      try {
        const res = await axios.get("./data.json");
        commit('set_allProduct', res.data)
      } catch (e) {
        console.log("資料連接錯誤:\n", e);
      }
    },
    addItem(context, id) {
      context.commit('add_item', id);
    },
    removeItem(context, id) {
      context.commit('remove_item', id);
    },
    plusTotalAmount(context) {
      context.commit('plus_totalAmount');
    },
    minusTotalAmount(context) {
      context.commit('minus_totalAmount');
    },
    toggleShowModal(context,str) {
      context.commit('toggle_show_modal',str);
    }
  },
})
