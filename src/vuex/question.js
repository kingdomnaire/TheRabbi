import axios from 'axios';

export default {
  state: {
    question: null,
    options: [],
    correct_answer: null, // Update property name to match the API response
  },
  mutations: {
    setQuestion(state, question) {
      state.question = question;
    },
    setOptions(state, options) {
      state.options = options;
    },
    setCorrectAnswer(state, correctAnswer) {
      state.correct_answer = correctAnswer; // Update property name to match the API response
    },
  },
  actions: {
    fetchQuestion({ commit }) {
      axios
        .post('https://quizzes-bmo0.onrender.com/question/generate', { level: "Extreme" })
        .then(response => {
          const { question, answers, correct_answer } = response.data;
          commit('setQuestion', question);
          commit('setOptions', answers);
          commit('setCorrectAnswer', correct_answer);
          console.log(response);
          console.log(response.data);

          // Save question and correct_answer in localStorage
          localStorage.setItem('question', question);
          localStorage.setItem('correctAnswer', correct_answer);
        })
        .catch(error => {
          console.error('Error fetching question:', error);
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
    correctAnswer(state) {
      return state.correct_answer; // Update getter to use correct_answer
    },
  },
};
