<template>
    <div class="mt-10 bg-indigo-900 w-full rounded-xl h-36 grid shadow-2xl">
      <div class="mt-4">
        <button class="mx-8 bg-blue-950 h-8 text-gray-100 px-4 rounded-md hover:bg-blue-900" type="button">New Guest</button>
        <button class="ml-12 bg-blue-950 h-8 text-gray-100 px-4 rounded-md hover:bg-blue-900" @click="playStart" type="button">Walk Away</button>
      </div>
      <div class="">
        <button class="mx-8 bg-blue-950 h-8 text-gray-100 px-4 rounded-md hover:bg-blue-900" type="button">Quit Game</button>
        <button class="ml-12 bg-blue-950 h-8 text-gray-100 px-4 rounded-md hover:bg-blue-900" type="button">Reveal Ans</button>
      </div>
      <button class="mx-4 bg-blue-950 h-8 text-gray-100 px-4 rounded-md hover:bg-blue-900" type="button">Generate New Question</button>
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