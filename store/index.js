import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

// state
export const state = () => ({
  items: [],
  count: 0,
  location: "",
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
      const count = items.length;
      // set the items using the mutation setItems
      commit("setItems", items);
      //   set the count
      commit("setCount", count);
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
  //   action to set the location
  async setLocation({ commit }) {
    let location = "";
    if (window.location.href === "http://localhost:3000/") {
      location = "/";
    } else if (window.location.href === "http://localhost:3000/about") {
      location = "/about";
    }
    commit("setLocation", location);
  },
};

// mutations > synchronous updates
export const mutations = {
  // mutation to set all items on mount
  setItems(state, items) {
    state.items = items;
  },
  //   mutation to set the number of items in state
  setCount(state, count) {
    state.count = count;
  },
  //   mutation to add 1 item to the list through the form
  addItem(state, item) {
    state.items.push(item);
    state.count = state.count + 1;
  },
  //   mutation to set the location in state
  setLocation(state, location) {
    state.location = location;
  },
};
