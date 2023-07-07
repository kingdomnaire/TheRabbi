<template>
    <div class="w-full">
      <p class="text-gray-100 ml-8 text-center font-bold">Game Sound</p>
      <div class="mt-1 w-full ml-4 pb-1 h-3/4 grid grid-cols-1 gap-20 sm:grid-cols-6">
        <div class="grid w-20 col-span-2 sm:col-span-1">
          <button
            class="bg-rose-900 hover:bg-rose-950 text-white mb-3 py-2 px-1 rounded-xl drop-shadow-md hover:drop-shadow-xl"
            @click="playAudio('correctAnswer.mp3')"
          >
            correct answer
          </button>
          <button
            class="bg-rose-900 hover:bg-rose-950 text-white py-2 px-1 rounded-xl drop-shadow-md hover:drop-shadow-xl"
            @click="playAudio('commericalBreak.mp3')"
          >
            commerical break
          </button>
        </div>
        <div class="grid w-20 col-span-2 sm:col-span-1 ml-10">
          <button
            class="bg-rose-900 hover:bg-rose-950 text-white mb-3 py-2 px-1 rounded-xl drop-shadow-md hover:drop-shadow-xl"
            @click="playAudio('phoneFriend.mp3')"
          >
            phone a friend
          </button>
          <button
            class="bg-rose-900 hover:bg-rose-950 text-white py-2 px-1 rounded-xl drop-shadow-md hover:drop-shadow-xl"
            @click="playAudio('wrongAnswer.mp3')"
          >
            wrong answer
          </button>
        </div>
        <div class="grid w-20 col-span-2 sm:col-span-1 ml-20">
          <button
            class="bg-rose-900 hover:bg-rose-950 text-white mb-3 py-2 px-1 rounded-xl drop-shadow-md hover:drop-shadow-xl"
            @click="playAudio('finalAnswer.mp3')"
          >
            final answer
          </button>
          <button
            class="bg-rose-900 hover:bg-rose-950 text-white py-2 px-1 rounded-xl drop-shadow-md hover:drop-shadow-xl"
            @click="playAudio('fastestFinger.mp3')"
          >
            fastest Finger
          </button>
        </div>
        <div class="grid w-20 col-span-2 sm:col-span-1 ml-28 mt-5">
          <button
            class="bg-rose-900 hover:bg-rose-950 text-white mb-3 py-2 px-1 rounded-xl drop-shadow-md hover:drop-shadow-xl"
            @click="playAudio('letsPlay.mp3')"
          >
            lets play
          </button>
          <button
          class="bg-rose-900 hover:bg-rose-950 text-white py-2 px-1 rounded-xl drop-shadow-md hover:drop-shadow-xl"
          @click="stopAudio"
        >
          Stop Audio
        </button>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'SoundBtn',
    data() {
    return {
      currentAudio: null, // Variable to store the current playing audio
    };
  },
  methods: {
    playAudio(filename) {
      if (this.currentAudio) {
        this.currentAudio.pause(); // Pause the current audio if any
      }
      const audio = new Audio(require(`@/assets/${filename}`));
      audio.play();
      this.currentAudio = audio; // Store the current playing audio
    },
    stopAudio() {
      if (this.currentAudio) {
        this.currentAudio.pause(); // Pause the current audio
        this.currentAudio = null; // Reset the current playing audio variable
      }
    },
  },
  };
  </script>
  