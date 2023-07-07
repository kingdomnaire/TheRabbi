// store/price.js


export default {
    namespaced: true, // Enable namespacing for the module
    state: {
      currentPrice: 1,
      prices: [
        { label: '15 - ₦200,000', value: 15, color: '' },
        { label: '14 - ₦100,000', value: 14, color: '' },
        { label: '13 - ₦90,000', value: 13, color: '' },
        { label: '12 - ₦80,000', value: 12, color: '' },
        { label: '11 - ₦70,000', value: 11, color: '' },
        { label: '10 - ₦60,000', value: 10, color: '' },
        { label: '9 - ₦50,000', value: 9, color: '' },
        { label: '8 - ₦40,000', value: 8, color: '' },
        { label: '7 - ₦30,000', value: 7, color: '' },
        { label: '6 - ₦20,000', value: 6, color: '' },
        { label: '5 - ₦10,000', value: 5, color: '' },
        { label: '4 - ₦9,000', value: 4, color: '' },
        { label: '3 - ₦8,000', value: 3, color: '' },
        { label: '2 - ₦7,000', value: 2, color: '' },
        { label: '1 - ₦5,000', value: 1, color: '' },
      ],
    },
    mutations: {
      SET_CURRENT_PRICE(state, price) {
        state.currentPrice = price;
      },
      UPDATE_PRICES(state) {
        state.prices.forEach((price) => {
          price.color = '';
          price.color = state.currentPrice === price.value ? '#007bff' : ''; // Set the background color based on the current price
        });
      },
    },
    actions: {
      moveUp({ commit, state }) {
        if (state.currentPrice > 1) {
          commit('SET_CURRENT_PRICE', state.currentPrice - 1);
          commit('UPDATE_PRICES');
          //dispatch('hostScreen/moveUp'); // Dispatch moveUp action in the 'hostScreen' module
        }
      },
      moveDown({ commit, state }) {
        if (state.currentPrice < 15) {
          commit('SET_CURRENT_PRICE', state.currentPrice + 1);
          commit('UPDATE_PRICES');
          //dispatch('hostScreen/moveUp'); // Dispatch moveDown action in the 'hostScreen' module
        }
      },
    },
    getters: {
      getCurrentPrice: (state) => state.currentPrice,
      getPrices: (state) => state.prices,
    },
  };
  