// vuex/answer.js
export default {
    state: {
      selectedOption: null,
      isCorrect: null,
    },
    mutations: {
      setSelectedOption(state, option) {
        state.selectedOption = option;
      },
      setIsCorrect(state, isCorrect) {
        state.isCorrect = isCorrect;
      },
    },
    actions: {
      checkAnswer({ state, commit, rootState }) {
        const { selectedOption } = state;
        const correctAnswer = rootState.question.correctAnswer;
  
        if (selectedOption === correctAnswer) {
          commit('setIsCorrect', true);
        } else {
          commit('setIsCorrect', false);
        }
      },
    },
    getters: {
      selectedOption(state) {
        return state.selectedOption;
      },
      isCorrect(state) {
        return state.isCorrect;
      },
    },
  };
  