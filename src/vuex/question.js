// store/question.js
import axios from 'axios';

export default {
  state: {
    question: null,
    options: [],
  },
  mutations: {
    setQuestion(state, question) {
      state.question = question;
    },
    setOptions(state, options) {
      state.options = options;
    },
  },
  actions: {
    generateQuestion({ commit }) {
      axios
        .get('https://quizzes-bmo0.onrender.com/question/:id')
        .then(response => {
          const { question, answers } = response.data;
          commit('setQuestion', question);
          commit('setOptions', answers);
          console.log(response.data);
        })
        .catch(error => {
          console.error('Error fetching question:', error);
          // Handle the error
        });
    },
  },
  getters: {
    question(state) {
      return state.question;
    },
    randomOptions(state) {
      // Shuffle the options array
      const shuffledOptions = [...state.options].sort(() => Math.random() - 0.5);
      return shuffledOptions;
    },
  },
};
