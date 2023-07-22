<template>
  <body class="bg-blue-950 h-screen">
    <div class="">
    <div class=" text-gray-100 ml-3 font-bold text-xl text-center">Host panel</div>
      
    <div>
      <GameRules class="mt-[3rem]"/>
      <HostChat/>
      <div @click="fetchQuestion"
      class="bg-green-800 w-40 text-lg font-bold text-gray-200 rounded mt-3 ml-32 text-center hover:bg-green-600 cursor-pointer">
       Generate Question</div>
      <div class="bg-green-800 w-40 text-lg font-bold text-gray-200 rounded mt-3 ml-32 text-center hover:bg-green-600 cursor-pointer">Revel Answer</div>
    </div>
      <SelectUser />
     <QuestionInput />
  </div>
  </body>
  </template>
  
  <script>
  import { mapActions } from 'vuex';
  import GameRules from '@/components/GameRules.vue';
  import SelectUser from '@/components/SelectUser.vue';
  import QuestionInput from '@/components/QuestionInput.vue';
  import HostChat from '@/components/HostChat.vue';
  //import { generateQuestion } from '@/vuex/question';
  
  export default {
    name: "HostPageView",
    components: { GameRules, SelectUser, QuestionInput,
       HostChat },
       methods: {
        ...mapActions(['fetchQuestion']), // Use fetchQuestion action instead of generateQuestion
      },
  };
  </script>