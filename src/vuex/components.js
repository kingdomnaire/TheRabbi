// components.js

export default {
  state: {
    activeComponent: localStorage.getItem('Player') || null,
  },
  mutations: {
    setActiveComponent(state, component) {
      state.activeComponent = component;
      localStorage.setItem('Player', component); // Save the active component in localStorage
    },
  },
  actions: {
    setActiveComponent({ commit, state }, component) {
      if (state.activeComponent !== component) {
        commit('setActiveComponent', component);
      }
    },
  },
};
