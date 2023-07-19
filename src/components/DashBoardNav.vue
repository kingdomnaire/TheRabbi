<template>
    <div class="">
      <div class="vertical-nav bg-blue-950 text-gray-100 text-xl font-bold">
        WHO WANT'S TO BE A RABBI

           
          <div class="relative mr-20 ">
              <ol class="flex text-sm font-normal">
                <li @click="toggleChangePassword" class="block px-4 py-2 hover:bg-gray-400 hover:text-blue-900 cursor-pointer">Change Password</li>
              <li class="block px-4 py-2 hover:bg-gray-400 hover:text-blue-900 cursor-pointer" @click="logout">Logout</li>
              </ol>
          </div>
      </div>

      <div v-if="showChangePassword" class="modal-overlay bg-gray-400 rounded">
        
        <div>
          <div class="flex items-center justify-between">
            <label for="password" class="block text-lg font-bold leading-6 text-blue-900">Password</label>
            <div class="text-sm">
              <!--<a href="#" class="font-semibold text-indigo-100 hover:text-blue-50">Forgot password?</a>-->
            </div>
          </div>
          <div class="mt-2 mb-3">
            <input v-model="password" id="password" name="password" type="password" autocomplete="current-password" 
            class="block w-full rounded-md border-0 py-1.5 px-2 text-blue-900 font-bold shadow-sm ring-1 ring-inset
             ring-gray-300 placeholder:text-gray-500 focus:ring-2 focus:ring-inset focus:ring-indigo-600 
             sm:text-sm sm:leading-6" placeholder="Enter New Password" />
          </div>
          <div class="flex">
            <button class="inline-flex w-40 mr-5 justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:text-sm">Enter</button>
            <button @click="closePassword" class="mt-5 sm:mt-0  inline-flex justify-center w-40 rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:text-sm">Cancel</button>
          </div>
        </div>
      </div>
  
     <div class="settings-nav text-gray-100 h-[94vh]">
      <nav class=" bg-blue-800 -ml-2 px-5 h-[94vh] ">
        <p class="nav-title">DashBoard</p>
      <router-link class="router h-10 font-bold items-center hover:bg-gray-400 hover:text-blue-900" to="/dashboard/panel" >Control Panel</router-link>
      <router-link class="router h-10 font-bold items-center hover:bg-gray-400 hover:text-blue-900" to="/dashboard/question" >Add Question</router-link>
      <router-link class="router h-10 font-bold items-center hover:bg-gray-400 hover:text-blue-900" to="/dashboard/message" >Message</router-link>
      <router-link class="router h-10 font-bold items-center hover:bg-gray-400 hover:text-blue-900" to="/dashboard/questions" >Questions</router-link>
      
        <p class="nav-title">Game</p>
      <router-link class="router h-10 font-bold items-center hover:bg-gray-400 hover:text-blue-900" to="/dashboard/fastest" >Fastest Finger</router-link>
    </nav>
    <div class="content"><slot /></div>
     </div>
      </div>
    </template>
  
  <script>
      export default {
        name: 'DashBoardNav',
        data() {
          return {
            showChangePassword: false, // Flag to control the edit modal visibility
          };
        },
        methods: {
          toggleChangePassword() {
        this.showChangePassword = !this.showChangePassword;
      },

      closePassword(){
        this.showChangePassword = false;
      },

          logout() {
      // Remove the login data from localStorage
      localStorage.removeItem("login");
      // Redirect the user to the login page
      this.$router.push("/login");
    },
        },
      };
</script>

    
    <style scoped>
  .logo{
    width: 40px;
  }

  .modal-overlay {
    position: fixed;
    z-index: 9999;
    width: 30%;
    height: 30vh;
    margin-left: 60%;
    margin-top: 1%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .content{
    position: relative;
  }
  .vertical-nav{
    display: flex;
    justify-content: space-between;
    padding: 10px;
    align-items: center;
    height: 25%;
    top: 0;
  
  }
  .router-link-active {
  background-color: #f7fafc; /* Gray 300 */
  color: #2b6cb0; /* Blue 700 */
}  
  .close-icon:hover{
    transform: scale(.9);
  }
  
  .settings-nav{
    display: grid;
    position: relative;
    grid-template-columns: 200px 1fr;
    gap: 10px;
    padding: 0 5px;
    height: 100%;
  }
  
  
  .nav-title{
    font-size: 20px;
    font-weight: bold;
    opacity: .9;
    padding: 10px;
  }
  
  .router{
    display: flex;
    text-decoration: none;
    font-size: 14px;
    border-radius: 10px;
    padding: 10px;
  }

  @media screen and (max-width:600px) {
    .settings-nav{
      grid-template-columns:  1fr !important;
    }
    
  }
  
    </style>