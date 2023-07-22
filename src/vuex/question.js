// store/question.js
import axios from 'axios';

export default {
  state: {
    question: null,
    options: [],
    isQuestionGenerated: false, // Add this property to track the question status
  },
  mutations: {
    setQuestion(state, question) {
      state.question = question;
      state.isQuestionGenerated = true; // Set the status to true when the question is generated
    },
    setOptions(state, options) {
      state.options = options;
    },
  },
  actions: {
    fetchQuestion({ commit }) {
      axios
        .get('https://quizzes-bmo0.onrender.com/question/generate') // Use the correct API route for generating questions
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
      if (!state.isQuestionGenerated) {
        // Return a default array of options when the question is not generated yet
        return ['', '', '', ''];
      }
      // Shuffle the options array
      const shuffledOptions = [...state.options].sort(() => Math.random() - 0.5);
      return shuffledOptions;
    },
  },
  
};

