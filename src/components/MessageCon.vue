<template>
    <div class="container h-[80vh] drop-shadow-md rounded-md mt-2 mr-20 pt-14 px-8 bg-gray-50 md:w-[40%] flex-wrap flex flex-col justify-center items-center"
    style="margin: 0 auto;">
  
      <div class="-mt-10 fixed">
        <h3 class="text-center text-xl font-bold my-4 text-gray-800">Chat Here</h3>
        <div class="w-80">
          <div class="h-[60vh] drop-shadow-md  bg-[url('../assets/chat.jpg')] rounded-lg bg-center overflow-y-auto font-bold pb-5" :class="{ 'overflow-y-scroll': messages.length > 4 }"
            style="opacity: 0.3;">
          <div class="items-center justify-center float-right px-10">
            <!-- Display messages here -->
            <div v-for="(message, index) in messages" :key="index" :class="index % 2 === 0 ? 'bg-gray-600' : 'bg-gray-700'+'mb-2 items-center text-gray-100 justify-center w-52 rounded p-2 pl-3'">
              {{ message }}
              <span @click="removeMessage(index)" class="text-red-500 cursor-pointer w-full ml-2 hover:bg-gray-400 px-1 rounded-full">
                X
              </span>
            </div>
          </div>
        </div>
        <div class="flex items-center justify-center mt-1">
          <input v-model="newMessage" type="text" placeholder="Type your message" class="border border-blue-700 h-11 rounded mr-2 text-blue-800 px-3">
          <div @click="addMessage" class="px-4 py-2 bg-blue-500 text-white rounded">
            <SendIcon/>
          </div>
        </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import SendIcon from './icon/SendIcon.vue';
  export default {
    name: "MessageCon",
    data() {
        return {
            newMessage: "",
            messages: [],
        };
    },
    methods: {
        addMessage() {
            if (this.newMessage.trim() !== "") {
                this.messages.push(this.newMessage);
                this.newMessage = "";
            }
        },
        removeMessage(index) {
            this.messages.splice(index, 1);
        },
    },
    components: { SendIcon }
};
  </script>
  
  <style scoped>
  .overflow-y-scroll {
    overflow-y: scroll;
  }
  </style>
  