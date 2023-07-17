<template>
    <div class="container h-[100%] drop-shadow-md rounded-md mt-8 mr-20 pt-20  pb-10
  px-8 bg-blue-600 md:w-[60%] flex-wrap flex flex-col justify-center items-center">

  <div v-if="showSuccessMessage" class="bg-green-600 -mt-10 mb-5 text-white py-2 px-4 rounded-md z-[999]">
      Question sent successfully!
    </div>
  
    <div class=" w-[80%] max-sm:float-none max-sm:ml-0 max-sm:mt-4 max-sm:w-full max-sm:bg-blue-950
      max-md:float-none max-md:mt-14 max-md:ml-8">
      <!--question box-->
        <div class="col-span-full mb-4 w-full max-sm:w-5/6 max-md:w-full max-md:ml-0 max-sm:ml-9">
          <div class="mt-1 h-2/4">
            <textarea
            class="w-[90%] h-20 drop-shadow-2xl rounded-xl border-0 py-1.5 text-center item-center
            text-blue-800 shadow-sm ring-1 ring-inset ring-gray-300 bg-gray-200 max-md:text-sm sm:leading-6 
             max-sm:w-full"> </textarea>
          </div>
        </div>
        <!--ans btn-->
        <div class="mt-3 grid grid-cols-6 gap-y-2 max-md:grid-cols-1 sm:ml-2 max-sm:mx-4 ">
          <div class="sm:col-span-3">
            <div class="mt-1">
              <input 
              id="input"
              class="pl-3 w-[90%] h-13 -ml-4 rounded-full border-0 py-1.5 hover:bg-blue-200 
              hover:text-blue-700 hover:ring-blue-800 text-blue-800 shadow-sm ring-1 ring-inset 
              ring-gray-300 bg-gray-200 sm:text-sm sm:leading-6 font-bold max-sm:h-16 max-sm:w-full max-sm:ml-0 
              max-md:w-full max-md:ml-0 max-md:h-14 focus:bg-Indigo-700 focus:ring-inset"/>
            </div>
          </div>
  
          <div class="sm:col-span-3">
            <div class="mt-1">
              <input
              id="input"
              class="pl-3 w-[90%] h-13 -ml-[10%] max-sm:ml-0 rounded-full border-0 py-1.5 text-blue-800 shadow-sm 
              hover:bg-blue-200 hover:text-blue-700 hover:ring-blue-800
              ring-1 ring-inset ring-gray-300 bg-gray-200 sm:text-sm sm:leading-6 font-bold
              max-sm:h-16 max-sm:w-full max-md:w-full max-md:h-14 max-md:ml-0 focus:bg-Indigo-700"
              />
            </div>
          </div>
  
          <div class="sm:col-span-3 ">
            <div class="mt-1">
              <input
              id="input"
              class="pl-3 w-[90%] h-13 -ml-4 rounded-full border-0 py-1.5 text-blue-800 shadow-sm ring-1
              hover:bg-blue-200 hover:text-blue-700 hover:ring-blue-800 
              ring-inset ring-gray-300 bg-gray-200 sm:text-sm sm:leading-6  font-bold max-sm:h-16
              max-sm:ml-0 max-sm:w-full max-md:w-full max-md:h-14 max-md:ml-0 focus:bg-Indigo-700"
              />
            </div>
          </div>
  
          <div class="sm:col-span-3">
            <div class="mt-1">
              <input
              id="input"
              class="pl-3 w-[90%] h-13 -ml-[10%] max-sm:ml-0 rounded-full border-0 py-1.5 shadow-sm ring-1
              hover:bg-blue-200 hover:text-blue-700 hover:ring-blue-800 
              ring-inset ring-gray-300 bg-gray-200 sm:text-sm sm:leading-6 font-bold max-sm:mb-10 
              max-sm:w-full max-sm:h-16 text-blue-800 max-md:w-full max-md:h-14 max-md:ml-0"/>
            </div>
          </div>
        </div>

        <div class="sm:col-span-3 mt-5">
          <h3>Enter the correct answers</h3>
            <div class="mt-1">
              <input
              id="correctInput"
              class="pl-3 w-[90%] h-13 max-sm:ml-0 rounded-full border-0 py-1.5 shadow-sm ring-1
              hover:bg-blue-200 hover:text-blue-700 hover:ring-blue-800 
              ring-inset ring-gray-300 bg-gray-200 sm:text-sm sm:leading-6 font-bold max-sm:mb-10 
              max-sm:w-full max-sm:h-16 text-blue-800 max-md:w-full max-md:h-14 max-md:ml-0"/>
            </div>
          </div>

        <div class="w-full max-sm:float-none max-sm:ml-0 max-sm:mt-4 max-sm:w-ful
              max-md:float-none max-md:mt-14 max-md:ml-8 justify-center items-center">
                <h3 class="text-center -ml-28 mt-5">Enter Question Category and Tag</h3>
            <div>
                <div class="mt-1 items-center justify-center">
                    <input
                    id="categoryInput"
                    class="pl-3 w-[90%] h-13  max-sm:ml-0 rounded-full border-0 py-1.5 shadow-sm ring-1
                    hover:bg-blue-200 hover:text-blue-700 hover:ring-blue-800 
                    ring-inset ring-gray-300 bg-gray-200 sm:text-sm sm:leading-6 font-bold max-sm:mb-10 
                    max-sm:w-full max-sm:h-16 text-blue-800 max-md:w-full max-md:h-14 max-md:ml-0 placeholder:text-blue-600" 
                    placeholder="Enter question Category"/>
                </div>
          </div>
          <div >
                <div class="mt-1">
                    <input
                    id="levelInput"
                    class="pl-3 w-[90%] h-13  max-sm:ml-0 rounded-full border-0 py-1.5 shadow-sm ring-1
                    hover:bg-blue-200 hover:text-blue-700 hover:ring-blue-800 
                    ring-inset ring-gray-300 bg-gray-200 sm:text-sm sm:leading-6 font-bold max-sm:mb-10 
                    max-sm:w-full max-sm:h-16 text-blue-800 max-md:w-full max-md:h-14 max-md:ml-0 placeholder:text-blue-600"
                    placeholder="Enter question level"/>
                </div>
          </div>
          
        </div>
    </div>
      <div class="bg-green-900 h-10 w-24 text-center text-lg font-bold hover:bg-green-700 hover:text-gray-50
     ml-40 cursor-pointer rounded-lg mt-5 pt-1" @click="sendQuestion">Send</div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'MessageCon',
  data() {
    return {
      showSuccessMessage: false
    };
  },
  methods: {
    sendQuestion() {
  // Retrieve the question from the textarea
  const question = document.querySelector('textarea').value;


  // Retrieve the options from the input elements
  const options = Array.from(document.querySelectorAll('#input'))
    .map(input => input.value.trim())
    .filter(option => option !== '');

    // Retrieve the category and level options
  const category = document.querySelector('#categoryInput').value;
  const level = document.querySelector('#levelInput').value;
  // Retrieve the correct_answer option
  const correctAnswer = options.find(option => option === document.querySelector('#correctInput').value);



  // Create the request payload
  const payload = {
    question,
    answers: options, // Include the answers in the payload
    category,
    level,
    correct: correctAnswer
  };

  // Make a POST request using Axios
  axios
    .post('https://quizzes-bmo0.onrender.com/question', payload)
    .then(response => {
      console.log('Question sent successfully:', response.data);
      // Hide the success message after 2 seconds
      setTimeout(() => {
            this.showSuccessMessage = true;
          }, 200);

          // Reset the input fields
          this.resetInputFields();
      // Reset the form or show a success message
    })
    .catch(error => {
      console.error('Error sending question:', error);
      // Handle the error
    });
},
resetInputFields() {
      // Clear the textarea
      document.querySelector('textarea').value = '';

      // Clear all input fields
      const inputElements = document.querySelectorAll('#input, #correctInput, #categoryInput, #levelInput');
      inputElements.forEach((input) => {
        input.value = '';
      });
    },

  }
};
</script>