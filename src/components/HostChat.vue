<template>
    <div class="mt-10 ">
      <div class="bg-gray-300 hover:bg-gray-300 text-blue-950 cursor-pointer text-bold 
      w-24 ml-40 text-center rounded" @click="toggleGameRule">Messages</div>
  
      <transition name="fade">
        <div v-if="showGameRule" class="modal-overlay h-[80vh]">
          <div class="modal-content justify-center items-center" >
            <h3 class="text-center text-xl font-bold my-4">Chat Here</h3>
            <div class="w-50">
              <div class="h-96 bg-indigo-700 bg-[url('../assets/chat.jpg')] rounded-lg bg-opacity-20 overflow-y-auto font-bold pb-5" :class="{ 'overflow-y-scroll': messages.length > 4 }"
                style="opacity: 0.3;">
              <div class="items-center justify-center float-right px-10 ">
                  <!-- Display messages here -->
                <div v-for="(message, index) in messages" :key="index" :class="index % 2 === 0 ? 'bg-gray-700 text-gray-200' : 'bg-gray-300 text-gray-200'+'mb-2 items-center justify-center p-2 rounded'">
                    {{ message }}
                    <span @click="removeMessage(index)" class="text-red-500 cursor-pointer ml-2 hover:bg-gray-400 px-1 rounded-full">
                      X
                    </span>
                </div>
              </div>
            </div>
            <div class="flex items-center justify-center ">
              <input v-model="newMessage" type="text" placeholder="Type your message" class="border border-blue-700 h-8 mr-2 text-blue-800 px-3">
              <div @click="addMessage" class="px-4 py-2 bg-blue-500 text-white rounded">
                  <SendIcon/>
                </div>
            </div>
            </div>
            <button class="modal-close bg-blue-900 text-lg font-bold hover:bg-blue-700" @click="toggleGameRule">Close</button>
          </div>
        </div>
      </transition>
    </div>
  </template>
  
  <script>
  import SendIcon from './icon/SendIcon.vue';
  export default {
    name: 'GameRules',
    components: { SendIcon },
    data() {
    return {
      showGameRule: false,
      newMessage: '',
      messages: [],
    };
  },
    methods: {
      toggleGameRule() {
        this.showGameRule = !this.showGameRule;
      },
      addMessage() {
      if (this.newMessage.trim() !== '') {
        this.messages.push(this.newMessage);
        this.newMessage = '';
      }
    },
    removeMessage(index) {
      this.messages.splice(index, 1);
    },
  },
    };
  </script>
  
  <style scoped>
  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.3s ease;
  }
  
  .fade-enter,
  .fade-leave-to {
    opacity: 0;
  }
  
  .modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 9999;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .modal-content {
    background-color: #fff;
    width: 60%;
    height: 80%;
    max-width: 500px;
    padding: 1rem;
    border-radius: 4px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    text-align: start;
  }
  
  .modal-close {
    margin-top: 1rem;
    padding: 0.5rem 1rem;
    border: none;
    border-radius: 4px;
    color: #e5e5e5;
    cursor: pointer;
  }
  
  </style>
  