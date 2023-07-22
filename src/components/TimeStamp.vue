<template>
    <div class="container  drop-shadow-md rounded-md mt-8 mr-20 pt-20  pb-10
  px-28 bg-blue-600 md:w-[40%] flex-wrap flex flex-col justify-center items-center">
      <div class=" h-full absolute z-30 bg-opacity-80 flex justify-center">

        <h3 class="text-center">Here are players who got the answer</h3>
        <!-- Check if players array is empty -->
        <div v-if="players.length === 0" class=" w-72">
          <p class="text-gray-400 font-bold text-center">Data will show after the game</p>
          <p class="text-gray-400 font-bold text-center">Hello {{ login.firstName }}! the game is locked, you will be notified soon.</p>
        </div>
        <template v-else>
          <div class="absolute mt-10 z-30 bg-opacity-80 flex w-[50vh] overflow-y-auto max-h-[60vh]">
            <table class="overflow-y-auto max-h-[20vh]">
            <thead>
              <tr class="bg-blue-600 w-auto h-10 text-gray-300">
                <th class="pr-10 pl-2">Player Name</th>
                <th class="pl-10 pr-2">Player Timestamp</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="player in players" :key="player.id" class="bg-blue-900 w-auto h-10 text-gray-200 font-bold">
                <td class="pr-10 pl-4">{{ player.user.firstName + ' ' + player.user.lastName }}</td>
                <td class="pr-4 pl-2">{{ player.time }}</td>
              </tr>
            </tbody>
          </table>
          </div>
        </template>
      </div>
    </div>
  </template>
    
    <script>
    import axios from 'axios';
    
    export default {
      data() {
        return {
          players: [],
          login: {}, // Initialize the login object with an empty object
        };
      },
      async mounted() {
        // Retrieve the login details from localStorage and store them in the data property
      const loginData = localStorage.getItem('login');
      if (loginData) {
        this.login = JSON.parse(loginData);
      }
        try {
          const response = await axios.get('https://quizzes-bmo0.onrender.com/fingers');
          this.players = response.data;
          console.log(response.data);
        } catch (error) {
          console.error(error);
        }
      },
    };
    </script>
  
  