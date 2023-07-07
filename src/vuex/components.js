// components.js

export default {
    state: {
      activeComponent: null
    },
    mutations: {
      setActiveComponent(state, component) {
        state.activeComponent = component;
      }
    },
    actions: {
      setActiveComponent({ commit, state }, component) {
        if (state.activeComponent !== component) {
          commit('setActiveComponent', component);
        }
      }
    }
  };
  