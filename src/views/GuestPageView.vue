<template>
  <div class="bg-blue-950 h-screen">
    
<div class=" text-gray-100 ml-3 font-bold text-xl text-center">Guest panel</div>

      <LifeLine class="z-50 mt-10"/>
      <PlayerName class="z-60"/>
      <MoneyLevel/>

      <div class="mt-[4.5rem] mb-5 w-3/5 float-right max-sm:float-none max-sm:ml-0 max-sm:mt-4 max-sm:w-full max-sm:bg-blue-950
      max-md:float-none max-md:mt-14 max-md:ml-8 ">
      <!--question box-->
        <div class="col-span-full mb-4 ml-10 w-full max-sm:w-5/6 max-md:w-full max-md:ml-0 max-sm:ml-9">
          <div class="mt-1 h-2/4">
            <div 
            class="w-4/5 h-20 drop-shadow-2xl rounded-xl border-0 py-1.5 text-center item-center
            text-blue-800 shadow-sm ring-1 ring-inset ring-gray-300 bg-gray-200 max-md:text-sm sm:leading-6 
            pointer-events-none max-sm:w-full">{{ question }}</div>
          </div>
        </div>
        <!--ans btn-->
        <div class="mt-3 grid grid-cols-6 gap-y-2 max-md:grid-cols-1 sm:ml-2 max-sm:mx-4 ">
          <div class="sm:col-span-3">
            <div class="mt-1">
              <div
              class="pl-5 w-4/5 h-20 ml-5 rounded-full border-0 py-1.5 hover:bg-blue-500 
              hover:text-gray-200 hover:ring-blue-800 text-blue-800 shadow-sm ring-1 ring-inset 
              ring-gray-300 bg-gray-200 sm:text-sm sm:leading-6 font-bold max-sm:h-16 max-sm:w-full max-sm:ml-0 
              max-md:w-full max-md:ml-0 max-md:h-14">A: {{ options[0] }}</div>
            </div>
          </div>
  
          <div class="sm:col-span-3">
            <div class="mt-1">
              <div
              class="pl-5 w-4/5 h-20 -ml-8 max-sm:ml-0 rounded-full border-0 py-1.5 text-blue-800 shadow-sm 
              hover:bg-blue-500 hover:text-gray-200 hover:ring-blue-800
              ring-1 ring-inset ring-gray-300 bg-gray-200 sm:text-sm sm:leading-6 font-bold
              max-sm:h-16 max-sm:w-full max-md:w-full max-md:h-14 max-md:ml-0">B: {{ options[1] }}</div>
            </div>
          </div>
  
          <div class="sm:col-span-3 ">
            <div class="mt-1">
              <div
              class="pl-5 w-4/5 h-20 ml-5 rounded-full border-0 py-1.5 text-blue-800 shadow-sm ring-1
              hover:bg-blue-500 hover:text-gray-200 hover:ring-blue-800
              ring-inset ring-gray-300 bg-gray-200 sm:text-sm sm:leading-6  font-bold max-sm:h-16
              max-sm:ml-0 max-sm:w-full max-md:w-full max-md:h-14 max-md:ml-0">C: {{ options[2] }}</div>
            </div>
          </div>
  
          <div class="sm:col-span-3">
            <div class="mt-1">
              <div
              class="pl-5 w-4/5 h-20 -ml-8 max-sm:ml-0 rounded-full border-0 py-1.5 shadow-sm ring-1
              hover:bg-blue-500 hover:text-gray-200 hover:ring-blue-800 
              ring-inset ring-gray-300 bg-gray-200 sm:text-sm sm:leading-6 font-bold max-sm:mb-10 
              max-sm:w-full max-sm:h-16 text-blue-800 max-md:w-full max-md:h-14 max-md:ml-0">
              D: {{ options[3] }}
              </div>
            </div>
          </div>
        </div>
    </div>
    <PlayerMeter />
    <div class="-mt-[57vh]">
          <GameRules/>
      </div>
      <CarouselImage/>
  </div>
  </template>
    
    <script>
    import GameRules from '@/components/GameRules.vue';
    import PlayerMeter from '@/components/PlayerMeter.vue';
    import LifeLine from '@/components/panel/LifeLine.vue';
    import CarouselImage from '@/components/CarouselImage.vue';
    import MoneyLevel from '@/components/MoneyLevel.vue';
    import PlayerName from '@/components/PlayerName.vue';
    import axios from 'axios';


    export default {
  name: 'HostPageView',
  components: { GameRules, PlayerMeter, LifeLine, CarouselImage, MoneyLevel, PlayerName },

  data() {
    return {
      question: null,
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
        const { question } = questionObj;

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
   