<template>
    <div class="">
      <div class="vertical-nav bg-blue-950 text-gray-100 text-xl font-bold">
        WHO WANT'S TO BE A RABBI

           
          <div class="relative mr-20 ">
              <ol class="flex text-sm font-normal">
                <li class="block px-4 py-2 hover:bg-gray-400 hover:text-blue-900 cursor-pointer">Change Password</li>
              <li class="block px-4 py-2 hover:bg-gray-400 hover:text-blue-900 cursor-pointer" @click="logout">Logout</li>
              </ol>
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
            isOpen: false,
          };
        },
        methods: {

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