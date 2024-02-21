import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

// state
export const state = () => ({
  items: [],
});

// getters
export const getters = {};

// actions > async data fetching (api, i.e.)
export const actions = {
  // api call to get all items
  async getItems({ commit }) {
    try {
      const response = await axios.get(
        `http://localhost/mystuff/tipeee/hire-technical-api/public/projects`
      );
      const items = response.data;
      // set the items using the mutation setItems
      commit("setItems", items);
      // return items in case it's necessary for further manipulation in the components
      return items;
    } catch (error) {
      console.error("Error fetching", error);
    }
  },
  // action to add an item to the current list
  async addItem({ commit }, item) {
    // add the item using addItem mutation
    commit("addItem", item);
  },
};

// mutations > synchronous updates
export const mutations = {
  // mutation to set all items on mount
  setItems(state, items) {
    state.items = items;
  },
  //   mutation to add 1 item to the list through the form
  addItem(state, item) {
    state.items.push(item);
  },
};
