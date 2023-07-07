<template>
  <div class="p-4 bg-gray-100 bg-opacity-50 rounded-md mb-1">
    <h5 class="text-lg font-bold">Game Meter</h5>

    <div class="grid grid-cols-3 sm:grid-cols-6 gap-4">
      <div class=" items-center mt-4 sm:col-span-3">
      <span class="mr-2 text-gray-800">Correct Ans</span>
      <input type="number" class="w-20 px-2 py-1 border border-gray-300 rounded-md pointer-events-none">
    </div>

      <div class=" items-center mt-3 sm:col-span-3 -ml-40">
        <span class="mr-2 text-gray-800">Wrong Ans</span>
        <input type="number" class="w-20 px-2 py-1 border border-gray-300 rounded-md pointer-events-none">
      </div>

      <div class="flex items-center -mt-20 sm:col-span-3 ml-96 shadow-md">
      <span class="mr-2 text-gray-800">Current</span>
      <input type="text" class="w-40 px-2 py-1 border border-gray-300 rounded-md pointer-events-none">
    </div>
    </div>

    <div class="grid grid-cols-3  sm:grid-cols-6 gap-4">
      <div class="flex items-center mt-2 sm:col-span-3">
      <span class="mr-2 text-gray-800">Drop</span>
      <input type="text" class="w-40 px-2 py-1 border border-gray-300 rounded-md pointer-events-none">
    </div>

    <div class="flex items-center mt-2 sm:col-span-3 -ml-20">
      <span class="mr-2 text-gray-800">Q-Left</span>
      <input type="text" class="w-40 px-2 py-1 border border-gray-300 rounded-md pointer-events-none">
    </div>

    <div class="flex items-center sm:col-span-3">
      <GameLevel/>
    </div>
    </div>
  </div>
</template>


<script>
import GameLevel from './GameLevel.vue';

export default{
    name: "GameMeter",
    components: { GameLevel }
}
</script>

<style scoped>

</style>