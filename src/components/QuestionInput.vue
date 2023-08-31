<template>
  <div class="-mt-[17%] w-3/5 ml-80 max-sm:float-none max-sm:ml-0 max-sm:mt-4 max-sm:w-full max-sm:bg-blue-950
    max-md:float-none max-md:mt-14 max-md:ml-8">
    <!--question box-->
    <div class="col-span-full mb-4 ml-10 w-full max-sm:w-5/6 max-md:w-full max-md:ml-0 max-sm:ml-9">
      <div class="mt-1 h-2/4">
        <div 
          class="w-4/5 h-[4rem] drop-shadow-md rounded-xl border-0 py-1.5 text-center item-center
        text-gray-200 shadow-sm ring-1 ring-inset ring-gray-300 bg-blue-700 max-md:text-sm sm:leading-6 
        pointer-events-none max-sm:w-full" v-if="question">{{ question }}</div>
      </div>
    </div>

<div class="float-right sm:col-span-3">
  <div class="mt-1">
  <div class="text-gray-800 text-center font-bold">Correct Answer</div>
    <div 
      class="pl-3 w-[40vh] h-[4rem] -ml-8 max-sm:ml-0 rounded-full border-0 py-1.5 shadow-sm ring-1
       hover:text-gray-200 hover:ring-blue-800 drop-shadow-md
      ring-inset ring-gray-300 bg-blue-700 sm:text-sm sm:leading-6 font-bold max-sm:mb-10 
      max-sm:w-full max-sm:h-16 text-gray-200 max-md:w-full max-md:h-14 max-md:ml-0">
      {{ correct_answer }}
    </div>
  </div>

  <div class="mt-1">
  <div class="text-gray-800 text-center font-bold">Selected Answer</div>
    <div 
      class="pl-3 w-[40vh] h-[4rem] -ml-8 max-sm:ml-0 rounded-full border-0 py-1.5 shadow-sm ring-1
     hover:text-gray-200 hover:ring-blue-800  drop-shadow-md
      ring-inset ring-gray-300 bg-blue-700 sm:text-sm sm:leading-6 font-bold max-sm:mb-10 
      max-sm:w-full max-sm:h-16 text-gray-200 max-md:w-full max-md:h-14 max-md:ml-0">
      {{ correct_answer }}
    </div>
  </div>
</div>
    <!--ans btn-->
    <div class="mt-3 grid grid-cols-6 gap-y-2 max-md:grid-cols-1 sm:ml-2 max-sm:mx-4 ">
      <div class="sm:col-span-3">
        <div class="mt-1">
          <div
            class="pl-3 w-4/5 h-[4rem] ml-5 rounded-full border-0 py-1.5 drop-shadow-md
             hover:ring-blue-800 text-gray-200 shadow-sm ring-1 ring-inset 
            ring-gray-300 bg-blue-700 sm:text-sm sm:leading-6 font-bold max-sm:h-16 max-sm:w-full max-sm:ml-0 
            max-md:w-full max-md:ml-0 max-md:h-14">A: {{ options[0] }} </div>
        </div>
      </div>

      <div class="sm:col-span-3">
        <div class="mt-1">
          <div
            class="pl-3 w-4/5 h-[4rem] -ml-8 max-sm:ml-0 rounded-full border-0 py-1.5 text-gray-200 drop-shadow-md  hover:ring-blue-800
            ring-1 ring-inset ring-gray-300 bg-blue-700 sm:text-sm sm:leading-6 font-bold
            max-sm:h-16 max-sm:w-full max-md:w-full max-md:h-14 max-md:ml-0">B: {{ options[1] }} </div>
        </div>
      </div>

      <div class="sm:col-span-3 ">
        <div class="mt-1">
          <div
            class="pl-3 w-4/5 h-[4rem] ml-5 rounded-full border-0 py-1.5 text-gray-200 drop-shadow-md ring-1 
            ring-inset ring-gray-300 bg-blue-700 sm:text-sm sm:leading-6  font-bold max-sm:h-16
            max-sm:ml-0 max-sm:w-full max-md:w-full max-md:h-14 max-md:ml-0">C: {{ options[2] }} </div>
        </div>
      </div>

      <div class="sm:col-span-3">
        <div  class="mt-1">
          <div 
            class="pl-3 w-4/5 h-[4rem] -ml-8 max-sm:ml-0 rounded-full border-0 py-1.5 drop-shadow-md ring-1 hover:ring-blue-800 
            ring-inset ring-gray-300 bg-blue-700 sm:text-sm sm:leading-6 font-bold max-sm:mb-10 
            max-sm:w-full max-sm:h-16 text-gray-200 max-md:w-full max-md:h-14 max-md:ml-0">
            D: {{ options[3] }}
          </div>
        </div>
      </div>
    </div>
    
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
  name: 'QuestionInput',
  computed: {
    ...mapState({
      question: (state) => state.question.question,
      options: (state) => state.question.options,
      correct_answer: (state) => state.question.correct_answer,
    }),
    // correctAnswer() {
    //   // Retrieve correct_answer from localStorage and convert it to an array
    //   const correctAnswer = localStorage.getItem('correctAnswer');
    //   return correctAnswer ? correctAnswer.split(',') : [];
    // },
  },
  methods: {
    ...mapActions(['fetchQuestion']),
    isCorrectOption(option) {
      // Method to check if the given option is the correct answer
      return option === this.correct_answer;
    },
  },
};
</script>

