<template>
    <div class="-mt-[12%] w-3/5 ml-80 max-sm:float-none max-sm:ml-0 max-sm:mt-4 max-sm:w-full max-sm:bg-blue-950
      max-md:float-none max-md:mt-14 max-md:ml-8 ">
      <!--question box-->
        <div class="col-span-full mb-4 ml-10 w-full max-sm:w-5/6 max-md:w-full max-md:ml-0 max-sm:ml-9">
          <div class="mt-1 h-2/4">
            <div 
            class="w-4/5 h-[4rem] drop-shadow-2xl rounded-xl border-0 py-1.5 text-center item-center
            text-blue-800 shadow-sm ring-1 ring-inset ring-gray-300 bg-gray-200 max-md:text-sm sm:leading-6 
            pointer-events-none max-sm:w-full"> {{ $store.getters['question/question'] }}</div>
          </div>
        </div>
        
        <!--ans btn-->
        <div class="mt-3 grid grid-cols-6 gap-y-2 max-md:grid-cols-1 sm:ml-2 max-sm:mx-4 ">
          <div class="sm:col-span-3">
            <div class="mt-1">
              <div 
              class="pl-3 w-4/5 h-[4rem] ml-5 rounded-full border-0 py-1.5 hover:bg-blue-500 
              hover:text-gray-200 hover:ring-blue-800 text-blue-800 shadow-sm ring-1 ring-inset 
              ring-gray-300 bg-gray-200 sm:text-sm sm:leading-6 font-bold max-sm:h-16 max-sm:w-full max-sm:ml-0 
              max-md:w-full max-md:ml-0 max-md:h-14">A: {{ option }} </div>
            </div>
          </div>
  
          <div class="sm:col-span-3">
            <div class="mt-1">
              <div
              class="pl-3 w-4/5 h-[4rem] -ml-8 max-sm:ml-0 rounded-full border-0 py-1.5 text-blue-800 shadow-sm 
              hover:bg-blue-500 hover:text-gray-200 hover:ring-blue-800
              ring-1 ring-inset ring-gray-300 bg-gray-200 sm:text-sm sm:leading-6 font-bold
              max-sm:h-16 max-sm:w-full max-md:w-full max-md:h-14 max-md:ml-0">B: {{ option }} </div>
            </div>
          </div>
  
          <div class="sm:col-span-3 ">
            <div class="mt-1">
              <div
              class="pl-3 w-4/5 h-[4rem] ml-5 rounded-full border-0 py-1.5 text-blue-800 shadow-sm ring-1
              hover:bg-blue-500 hover:text-gray-200 hover:ring-blue-800 
              ring-inset ring-gray-300 bg-gray-200 sm:text-sm sm:leading-6  font-bold max-sm:h-16
              max-sm:ml-0 max-sm:w-full max-md:w-full max-md:h-14 max-md:ml-0">C: {{ option }}</div>
            </div>
          </div>
  
          <div class="sm:col-span-3">
            <div class="mt-1">
              <div
              class="pl-3 w-4/5 h-[4rem] -ml-8 max-sm:ml-0 rounded-full border-0 py-1.5 shadow-sm ring-1
              hover:bg-blue-500 hover:text-gray-200 hover:ring-blue-800 
              ring-inset ring-gray-300 bg-gray-200 sm:text-sm sm:leading-6 font-bold max-sm:mb-10 
              max-sm:w-full max-sm:h-16 text-blue-800 max-md:w-full max-md:h-14 max-md:ml-0">
              D:{{ option }}
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
    question() {
      return this.$store.getters['question/question'];
    },
    option() {
      const options = this.$store.getters['question/randomOptions'];
      return options && options.length > 0 ? options[0] : '';
    },
  },
};
</script>