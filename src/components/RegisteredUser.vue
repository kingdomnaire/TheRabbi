<template>
    <div class="container  drop-shadow-md rounded-md mt-8 mr-20 pt-20  pb-10
  px-8 bg-blue-600 md:w-[60%] flex-wrap flex flex-col justify-center items-center">

  <div class="absolute mt-10 z-30 bg-opacity-80 flex w-[90%] overflow-y-auto max-h-[80vh]">
        <table class="w-[150vh] overflow-y-auto max-h-[30vh]">
          <thead class="w-[90%] bg-blue-600">
            <tr class=" h-10 w-[90%] text-gray-300">
              <th>S/N</th>
              <th>Full name</th>
              <th>Age</th>
              <th>Church</th>
            </tr>
          </thead>
          <tbody class="w-[90%]">
            <tr v-for="(user, index) in users" :key="user._id" class="bg-blue-900 h-10 text-gray-200 font-bold border w-[150vh]">
              <td class="pr-10 pl-4 w-[2%]">{{ index + 1 }}</td>
              <td class="pr-10 pl-4 w-[40%]">{{ user.firstName +" "+user.lastName}}</td>
              <td class="pr-4 pl-2 w-[30px]">{{ user.age}}</td>
              <td class="pr-4 pl-2 w-[10px]">{{ user.church }}</td>
              <td class="pr-4 pl-2 w-[10%] py-2">
                <button @click="deleteUser(user._id)" class="text-gray-200 bg-red-900 w-20 h-10 rounded hover:bg-red-700 mr-2">Delete</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'RegisteredUser',

  data() {
    return {
      users: [],
    };
  },

  async created() {
    try {
      const response = await axios.get('https://quizzes-bmo0.onrender.com/user');
      this.users = response.data;
    } catch (error) {
      console.error('Error fetching users:', error.response || error.message);
    }
  },

  methods: {
    async deleteUser(userId) {
      try {
        await axios.delete(`https://quizzes-bmo0.onrender.com/user/${userId}`);
        // Remove the deleted user from the local users array
        this.users = this.users.filter(user => user._id !== userId);
        console.log(`User with ID ${userId} deleted successfully.`);
      } catch (error) {
        console.error(`Error deleting user with ID ${userId}:`, error.response || error.message);
      }
    },
  },
};
</script>

