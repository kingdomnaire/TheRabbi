<template>
    <div class="container h-[80vh] drop-shadow-md rounded-md mt-8 mr-56 float-right pt-14 px-8  md:w-[160vh] flex-wrap flex flex-col">
      <div class="absolute z-30 bg-opacity-80 flex w-[150vh] overflow-y-auto max-h-[80vh]">
        <table class="w-[150vh] overflow-y-auto max-h-[30vh]">
          <thead class="w-[90%] bg-blue-600 ">
            <tr class=" h-10 w-[90%] text-gray-300">
              <th>S/N</th>
              <th>Questions</th>
              <th>Answers</th>
              <th>Correct Answer</th>
              <th>Category</th>
              <th>Level</th>
            </tr>
          </thead>
          <tbody class="w-[90%]">
            <tr v-for="question in questions" :key="question._id" class="bg-blue-900 h-10 text-gray-200 font-bold border w-[150vh]">
              <td class="pr-10 pl-4 w-[2%]">{{ index + 1 }}</td>
              <td class="pr-10 pl-4 w-[30%]">{{ question.question }}</td>
              <td class="pr-4 pl-2 w-[30px]">{{ formatAnswers(question.answers) }}</td>
              <td class="pr-4 pl-2 w-[10px]">{{ question.correct_answer }}</td>
              <td class="pr-4 pl-2 w-[10px]">{{ question.category }}</td>
              <td class="pr-4 pl-2 w-[10px]">{{ question.level }}</td>
              <td class="pr-4 pl-2 w-[10%] py-2">
                <button @click="deleteQuestion(question._id)" class="text-gray-200 bg-red-900 w-20 h-10 rounded hover:bg-red-700 mr-2">Delete</button>
                <button @click="deleteQuestion(question._id)" class="text-gray-200 bg-green-900 w-20 h-10 rounded hover:bg-green-700">Edit</button>
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
    name: 'QuestionList',
    data() {
      return {
        questions: [], // Initialize the questions array
      };
    },
    created() {
      this.fetchQuestions(); // Fetch questions when the component is created
    },
    methods: {
      fetchQuestions() {
        axios
          .get('https://quizzes-bmo0.onrender.com/question')
          .then(response => {
            this.questions = response.data; // Set the fetched questions in the data property
            console.log(this.questions);
          })
          .catch(error => {
            console.error('Error fetching questions:', error);
            // Handle the error
          });
      },
      deleteQuestion(questionId) {
        axios
          .delete(`https://quizzes-bmo0.onrender.com/question/${questionId}`)
          .then(response => {
            console.log('Question deleted successfully:', response.data);
            // Remove the deleted question from the questions array
            this.questions = this.questions.filter(question => question._id !== questionId);
          })
          .catch(error => {
            console.error('Error deleting question:', error);
            // Handle the error
          });
      },
      formatAnswers(answers) {
        if (answers && answers.length > 0) {
          return answers.map(answer => answer.replace(/["[\]]/g, '')).join(', ');
        }
        return '';
      },
    },
  };
  </script>