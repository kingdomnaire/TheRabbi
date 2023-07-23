<template>
  <body class="bg-blue-950 h-screen">
    <div>
      <div class="text-gray-100 ml-3 font-bold text-xl text-center">Host panel</div>

      <div>
        <GameRules class="mt-[3rem]" />
        <HostChat />
        <div
          @click="fetchQuestion"
          class="bg-green-800 w-40 text-lg font-bold text-gray-200 rounded mt-3 ml-32 text-center hover:bg-green-600 cursor-pointer"
        >
          Generate Question
        </div>
        <div
          class="bg-green-800 w-40 text-lg font-bold text-gray-200 rounded mt-3 ml-32 text-center hover:bg-green-600 cursor-pointer"
          @click="revealAnswer">
          Reveal Answer
        </div>
      </div>
      <SelectUser />
      <!-- Pass the question and options as props to QuestionInput -->
      <QuestionInput
        :question="$store.getters['question/question']"
        :options="$store.getters['question/options']"
      />
    </div>
  </body>
</template>

<script>
import { mapActions,mapState, mapGetters } from 'vuex';
import GameRules from '@/components/GameRules.vue';
import SelectUser from '@/components/SelectUser.vue';
import QuestionInput from '@/components/QuestionInput.vue';
import HostChat from '@/components/HostChat.vue';
import store from '@/vuex/store';

export default {
  name: 'HostPageView',
  components: { GameRules, SelectUser, QuestionInput, HostChat },
  computed: {
    ...mapState(['selectedOption']),
    ...mapGetters(['isCorrect']),
    ...mapState('question', ['options', 'correctAnswer']),
  },
  methods: {
    ...mapActions(['fetchQuestion', 'checkAnswer']),
  },
  created() {
    store.dispatch('fetchQuestion');
  },
};
</script>

<style>
.correct-answer {
  background-color: green;
}

.wrong-answer {
  background-color: red;
}
</style>
