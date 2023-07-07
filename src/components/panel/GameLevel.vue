<template>
  <div class="flex items-center -mt-16 ml-100 sm:col-span-3">
    <p class="items-center -mt-16 ml-7 text-gray-800 absolute">Game Level</p>
    <div class="flex items-center">
      <button class="p-2 mr-1 text-gray-50 bg-blue-700 font-bold rounded-md hover:bg-gray-200 hover:text-blue-800" type="button" @click="moveDown">&#8679;</button>
    </div>
    <input type="" class="w-20 px-2 py-1 border border-gray-300 rounded-md text-center pointer-events-none" :value="getCurrentPrice" min="1" max="15">
    <div class="flex items-center">
      <button class="p-2 ml-1 text-gray-50 bg-blue-700 font-bold rounded-md hover:bg-gray-200 hover:text-blue-800" type="button" @click="moveUp">&#8681;</button>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'GameLevel',

  computed: {
    ...mapGetters('price', ['getCurrentPrice', 'getPrices'])
  },
  methods: {
    ...mapActions('price', ['moveUp', 'moveDown'])
  }
};
</script>
