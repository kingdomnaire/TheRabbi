<template>
    <div>
      <div class="bg-red-700 p-5 rounded-lg hover:bg-red-900 cursor-pointer" @click="deleteFastestFingerScore">
        Delete Fastest Finger Score
      </div>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    name: 'DeleteFastest',
    methods: {
      async deleteFastestFingerScore() {
        try {
          // Replace 'YOUR_API_ENDPOINT' with the actual API endpoint for deleting the fastest finger score
          const apiUrl = 'https://quizzes-bmo0.onrender.com/fingers';
  
          // Make a DELETE request to the API endpoint
          const response = await axios.delete(apiUrl);
  
          // Check if the deletion was successful
          if (response.status === 200) {
            console.log('Fastest Finger Score deleted successfully.');
            // Optionally, you can perform additional actions after successful deletion
          } else {
            console.error('Failed to delete Fastest Finger Score.');
            // Optionally, you can handle errors or display a message to the user
          }
        } catch (error) {
          console.error('An error occurred while deleting Fastest Finger Score:', error);
          // Optionally, you can handle errors or display a message to the user
        }
      },
    },
  };
  </script>
  