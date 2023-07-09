<template>
    <div class="w-[90%] -ml-[25%] mt-5 mb-5">
      <p class="text-gray-100 ml-8 text-center font-bold">Game Sound</p>
      <div class=" mt-1 w-full ml-4 pb-1 h-3/4 grid grid-cols-1 gap-20 sm:grid-cols-6">
        <div class="grid w-15 col-span-2 sm:col-span-1 ">
          <button
            class="h-14 w-32 bg-rose-900 hover:bg-rose-950 text-white px-1 rounded-xl drop-shadow-md hover:drop-shadow-xl mb-2"
            @click="playAudio('correctAnswer.mp3')"
          >
            correct answer
          </button>
          <button
            class="h-14 w-32 bg-rose-900 hover:bg-rose-950 text-white px-1 rounded-xl drop-shadow-md hover:drop-shadow-xl"
            @click="playAudio('commericalBreak.mp3')"
          >
            commerical break
          </button>
        </div>
        <div class="grid w-15 col-span-2 sm:col-span-1 ml-12">
          <button
            class="h-14 w-32 bg-rose-900 hover:bg-rose-950 text-white px-1 rounded-xl drop-shadow-md hover:drop-shadow-xl mb-2"
            @click="playAudio('phoneFriend.mp3')"
          >
            phone friend
          </button>
          <button
            class="h-14 w-32 bg-rose-900 hover:bg-rose-950 text-white px-1 rounded-xl drop-shadow-md hover:drop-shadow-xl"
            @click="playAudio('wrongAnswer.mp3')"
          >
            wrong answer
          </button>
        </div>
        <div class="grid col-span-2 sm:col-span-1 ml-24">
          <button
            class="h-14 w-32 bg-rose-900 hover:bg-rose-950 text-white px-1 rounded-xl drop-shadow-md hover:drop-shadow-xl mb-2"
            @click="playAudio('finalAnswer.mp3')"
          >
            final answer
          </button>
          <button
            class="h-14 w-32 bg-rose-900 hover:bg-rose-950 text-white px-1 rounded-xl drop-shadow-md hover:drop-shadow-xl"
            @click="playAudio('fastestFinger.mp3')"
          >
            fastest Finger
          </button>
        </div>
        <div class="grid col-span-2 sm:col-span-1 ml-36">
          <button
            class="h-14 w-32 bg-rose-900 hover:bg-rose-950 text-white px-1 rounded-xl drop-shadow-md hover:drop-shadow-xl mb-2"
            @click="playAudio('letsPlay.mp3')"
          >
            lets play
          </button>
          <button
          class="h-14 w-32 bg-rose-900 hover:bg-rose-950 text-white px-1 rounded-xl drop-shadow-md hover:drop-shadow-xl"
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
  