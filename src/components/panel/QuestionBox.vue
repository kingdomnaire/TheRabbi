<template>
  <div >
    <div class="col-span-full mb-4">
      <label for="about" class="block font-medium leading-6 text-gray-800">Question Box</label>
      <div class="mt-1">
        <textarea rows="3" class="block w-full drop-shadow-md bg-gray-200 rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset
         focus:ring-indigo-600 sm:text-sm sm:leading-6 pointer-events-none text-center text-gray-800 text-lg" v-model="question"
          readonly> 
        </textarea>
      </div>
    </div>

    <div class="mt-3 grid grid-cols-1 gap-x-6 gap-y-3 sm:grid-cols-6">
      <div class="sm:col-span-3">
        <div class="mt-1">
          <div
            class="pl-3 w-4/5 h-[4rem] ml-5 rounded-full border-0 py-1.5 
             text-gray-800 shadow-sm ring-1 ring-inset drop-shadow-md
            ring-gray-300 bg-gray-200 sm:text-sm sm:leading-6 font-bold max-sm:h-16 max-sm:w-full max-sm:ml-0 
            max-md:w-full max-md:ml-0 max-md:h-14">A: {{ options[0] }} </div>
        </div>
      </div>

      <div class="sm:col-span-3">
        <div class="mt-1">
          <div
            class="pl-3 w-4/5 h-[4rem] ml-5 rounded-full border-0 py-1.5 text-gray-800 drop-shadow-md ring-1 ring-inset 
            ring-gray-300 bg-gray-200 sm:text-sm sm:leading-6 font-bold max-sm:h-16 max-sm:w-full max-sm:ml-0 
            max-md:w-full max-md:ml-0 max-md:h-14">B: {{ options[1] }} </div>
        </div>
      </div>

      <div class="sm:col-span-3">
        <div class="mt-1">
          <div
            class="pl-3 w-4/5 h-[4rem] ml-5 rounded-full border-0 py-1.5 text-gray-800 drop-shadow-md ring-1 ring-inset 
            ring-gray-300 bg-gray-200 sm:text-sm sm:leading-6 font-bold max-sm:h-16 max-sm:w-full max-sm:ml-0 
            max-md:w-full max-md:ml-0 max-md:h-14">C: {{ options[2] }} </div>
        </div>
      </div>

      <div class="sm:col-span-3">
        <div class="mt-1">
          <div
            class="pl-3 w-4/5 h-[4rem] ml-5 rounded-full border-0 py-1.5 text-gray-800 drop-shadow-md ring-1 ring-inset 
            ring-gray-300 bg-gray-200 sm:text-sm sm:leading-6 font-bold max-sm:h-16 max-sm:w-full max-sm:ml-0 
            max-md:w-full max-md:ml-0 max-md:h-14">D: {{ options[3] }} </div>
        </div>
      </div>
    </div>

    <div class="sm:col-span-3">
        <label for="last-name" class="block text-sm font-medium leading-6 text-gray-800">Correct Answer</label>
        <div class="mt-1">
          <input
            type="text" v-model="correctAnswer"
            class="block w-full rounded-md border-0 py-1.5 text-gray-800 font-bold px-3 drop-shadow-md ring-1 ring-inset ring-gray-300 bg-gray-200 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 pointer-events-none"
            style="word-wrap: break-word;">
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
      correctAnswer: '',
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
          this.correctAnswer = question.correct_answer
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
