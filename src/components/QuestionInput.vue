<template>
  <div>
    <div class="-mt-[12%] w-3/5 ml-80 max-sm:float-none max-sm:ml-0 max-sm:mt-4 max-sm:w-full max-sm:bg-blue-950 max-md:float-none max-md:mt-14 max-md:ml-8 ">
      <!-- question box -->
      <div class="col-span-full mb-4 ml-10 w-full max-sm:w-5/6 max-md:w-full max-md:ml-0 max-sm:ml-9">
        <div class="mt-1 h-2/4">
          <div
            class="w-4/5 h-[4rem] drop-shadow-2xl rounded-xl border-0 py-1.5 text-center item-center
            text-blue-800 shadow-sm ring-1 ring-inset ring-gray-300 bg-gray-200 max-md:text-sm sm:leading-6 
            pointer-events-none max-sm:w-full"
          >
            {{ $store.getters['question/question'] || 'Loading...' }}
          </div>
        </div>
      </div>

      <!-- ans btn -->
      <div class="mt-3 grid grid-cols-6 gap-y-2 max-md:grid-cols-1 sm:ml-2 max-sm:mx-4 ">
        <div v-for="(option, index) in randomOptions" :key="index" class="sm:col-span-3">
          <div class="mt-1">
            <div
              class="pl-3 w-4/5 h-[4rem] ml-5 rounded-full border-0 py-1.5 hover:bg-blue-500 
              hover:text-gray-200 hover:ring-blue-800 text-blue-800 shadow-sm ring-1 ring-inset 
              ring-gray-300 bg-gray-200 sm:text-sm sm:leading-6 font-bold max-sm:h-16 max-sm:w-full max-sm:ml-0 
              max-md:w-full max-md:ml-0 max-md:h-14"
            >
              {{ String.fromCharCode(65 + index) }}: {{ option }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'QuestionInput',
  computed: {
    randomOptions() {
      if (!this.$store.state.question.isQuestionGenerated) {
        // Return a default array of options when the question is not generated yet
        return ['', '', '', ''];
      }

      // Shuffle the options array
      const shuffledOptions = [...this.$store.state.question.options].sort(() => Math.random() - 0.5);
      return shuffledOptions;
    },
  }
};
</script>
