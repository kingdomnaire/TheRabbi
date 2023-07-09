<template>
    <div class="mt-3 bg-indigo-900 w-[70%] rounded-xl  grid shadow-2xl h-[100%] justify-center ">
      <div class="mt-4 flex">
        <button class="mx-3 bg-blue-950 h-[70%] text-gray-100 px-4 rounded-md hover:bg-blue-900" type="button">New Guest</button>
        <button class="ml-3 bg-blue-950 h-[70%] text-gray-100 px-4 rounded-md hover:bg-blue-900" @click="playStart" type="button">Walk Away</button>
      </div>
      <div class=" flex">
        <button class="mx-3 bg-blue-950 h-[70%] text-gray-100 px-4 rounded-md hover:bg-blue-900" type="button">Quit Game</button>
        <button class="ml-3 bg-blue-950 h-[70%] text-gray-100 px-4 rounded-md hover:bg-blue-900" type="button">Reveal Ans</button>
      </div>
      <button class="mx-4 bg-blue-950 h-[70%] text-gray-100 px-4 rounded-md hover:bg-blue-900" type="button">Generate New Question</button>
    </div>
</template>
  

<script>
export default{
    name: 'ControlBtn',
    methods: {
    playStart() {
      const audio = new Audio(
        'https://millionaire-school.netlify.com/sounds/lets_play.mp3'
      );
      audio.play();
    },
}
}
</script>

<style scoped> 

</style>