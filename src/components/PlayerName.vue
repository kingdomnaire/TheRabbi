<template>
    <div class="text-sm font-bold text-gray-200 w-72 text-center ml-[80%] -mt-10">
        Player name: {{ login.firstName }} {{ login.lastName }}
      </div>
</template>

<script>
export default {
  name: 'PlayerName',
  data() {
    return {
      login: {}, // Initialize the login object with an empty object
    };
  },
  mounted() {
    // Retrieve the login details from localStorage and store them in the data property
    const loginData = localStorage.getItem('login');
    if (loginData) {
      this.login = JSON.parse(loginData);
    }
  },
};
</script>