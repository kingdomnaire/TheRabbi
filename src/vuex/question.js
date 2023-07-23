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
    fetchQuestion({ commit }) {
      axios
        .post('https://quizzes-bmo0.onrender.com/question/generate',{level: "Hard"}) // Use the correct API route for fetching a question
        .then(response => {
          const { question, answers } = response.data;
          commit('setQuestion', question);
          commit('setOptions', answers);
          console.log(response);
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
    options(state) {
      return state.options;
    },
  },
};
