<template>
  <div>
    <div class="col-span-full mb-4">
      <label for="about" class="block font-medium leading-6 text-gray-100">Question Box</label>
      <div class="mt-1">
        <textarea rows="3" class="block w-full drop-shadow-2xl rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset
         focus:ring-indigo-600 sm:text-sm sm:leading-6 pointer-events-none text-center text-blue-800 text-lg" v-model="question"
          readonly> 
        </textarea>
      </div>
    </div>
    <div class="mt-3 grid grid-cols-1 gap-x-6 gap-y-3 sm:grid-cols-6">
      <div class="sm:col-span-3">
        <label for="first-name" class="block text-sm font-medium leading-6 text-gray-50">A:</label>
        <div class="mt-1">
          <input
            type="text" v-model="options[0]"
            class="block w-full rounded-md border-0 py-1.5 text-blue-800 font-bold px-3 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 pointer-events-none"
          >
        </div>
      </div>

      <div class="sm:col-span-3">
        <label for="last-name" class="block text-sm font-medium leading-6 text-gray-50">B:</label>
        <div class="mt-1">
          <input
            type="text" v-model="options[1]"
            class="block w-full rounded-md border-0 py-1.5 text-blue-800 font-bold px-3 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 pointer-events-none"
          >
        </div>
      </div>

      <div class="sm:col-span-3">
        <label for="first-name" class="block text-sm font-medium leading-6 text-gray-50">C: </label>
        <div class="mt-1">
          <input
            type="text" v-model="options[2]"
            class="block w-full rounded-md border-0 py-1.5 text-blue-800 font-bold px-3 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 pointer-events-none"
          >
        </div>
      </div>

      <div class="sm:col-span-3">
        <label for="last-name" class="block text-sm font-medium leading-6 text-gray-50">D:</label>
        <div class="mt-1">
          <input
            type="text" v-model="options[3]"
            class="block w-full rounded-md border-0 py-1.5 text-blue-800 font-bold px-3 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 pointer-events-none"
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'QuestionBox',

  data() {
    return {
      question: '',
      options: [],
    };
  },

  methods: {
    fetchQuestion() {
      axios
        .get('https://quizzes-bmo0.onrender.com/question/game')
        .then(response => {
          console.log('API Response:', response.data);

          // Access the question and answers from the nested object
          const questionObj = response.data[0];
          const { question} = questionObj;

          // Set the component's data
          this.question = question.question;
          this.options = question.answers;
        })
        .catch(error => {
          console.error('Error fetching question:', error);
          // Handle the error
        });
    },
  },

  created() {
    this.fetchQuestion();
  },
};
</script>
