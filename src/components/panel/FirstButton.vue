<template>
    <div class="container mb-3 shadow-xl text-2xl bg-slate-50 space-x-4 px-28 py-2 rounded w-full h-16">
  <button class=" bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-xl drop-shadow-md hover:drop-shadow-xl" 
  @click="playStart" type="button">Start / Commercial</button>
  <button class="bg-rose-900 hover:bg-rose-950 text-white font-bold py-2 px-4 rounded-xl drop-shadow-md hover:drop-shadow-xl" type="button">Closing</button>
  <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-xl drop-shadow-md hover:drop-shadow-xl" type="button">Halt</button>
</div>
</template>

<script>
export default {
  name: 'FirstButton',
  methods: {
    playStart() {
      const audio = new Audio(
        'https://millionaire-school.netlify.com/sounds/lets_play.mp3'
      );
      audio.play();
    },
  },
};
</script>