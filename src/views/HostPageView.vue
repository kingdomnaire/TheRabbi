<template>
  <div class="bg-blue-950 h-screen">
    <div class=" text-gray-100 ml-3 font-bold text-xl text-center">Host panel</div>
      
    <div>
      <GameRules />
      <HostChat/>
    </div>
      <SelectUser />
        <QuestionInput/>
      
  </div>
  </template>
  
<script>
  import GameRules from '@/components/GameRules.vue';
  import SelectUser from '@/components/SelectUser.vue';
  import QuestionInput from '@/components/QuestionInput.vue';
  import HostChat from '@/components/HostChat.vue';
import { mapGetters, mapActions } from 'vuex';
  
  
  export default {
    name: "HostPageView",
    computed: {
        ...mapGetters("price", ["getCurrentPrice", "getPrices"])
    },
    methods: {
        ...mapActions("price", ["moveUp", "moveDown"]),
    },
    components: { GameRules, SelectUser, QuestionInput, HostChat }
};
  </script>