<template>
  <div class=" bg-blue-900 w-1/3 h-80 -mt-85 float-right mr-18 rounded-xl">
    <div class=" text-gray-100 ml-3 font-bold text-xl text-center">Guest panel</div>

    <div class=" ml-2 mt-6 ">
      <div class="">
        <textarea id="about" name="about" rows="3" value=" who was the one who told you, you can't do it?"
        class="block w-2/4 shadow-2xl rounded-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 pointer-events-none"></textarea>
      </div>
      <div class="">
          <div class="mt-1 sm:col-span-3">
            <input type="text" value="A:" class="block w-2/4 rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 pointer-events-none">
          </div>

          <div class="mt-1 sm:col-span-3">
            <input type="text" value="B: " 
            class="block w-2/4 rounded-md border-0  text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 pointer-events-none">
          </div>

          <div class="mt-1 sm:col-span-3">
            <input type="text" value="C:"
            class="block w-2/4 rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 pointer-events-none">
          </div>

          <div class="mt-1 sm:col-span-3">
            <input type="text" value="D:"
            class="block w-2/4 rounded-md border-0  text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 pointer-events-none">
          </div>
      </div>
    </div>

        <div class="grid grid-cols-2 gap-2 font-bold text-gray-100 float-right -mt-52 mr-10">
              <div
                v-for="(price, index) in getPrices"
                :key="index"
                :class="{ stone: price.value == getCurrentPrice }"
                :style="{ 'background-color': price.color }"
              >
                {{ price.label }}
        </div>
      </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default{
    name: 'GuestPanel',
    computed:{
    ...mapGetters('price', ['getCurrentPrice', 'getPrices'])
  },
  methods: {
    ...mapActions('price', ['moveUp', 'moveDown']),
  },
//   mounted() {
//     this.updatePrices();
//   },
}
</script>

<style>

</style>

