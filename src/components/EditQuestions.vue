<template>
    <div class="container h-[80vh] drop-shadow-md rounded-md pt-14 px-8  md:w-[160vh] flex-wrap flex flex-col">
        <div class="text-blue-950 -mt-10">
          <h3 class="font-bold text-lg ">Filter the questions here.</h3>
          <div class="flex gap-4">
                <div>
                  <label for="level" class="mr-2">Filter by level:</label>

                  <select name="level" id="level" class="bg-blue-600 text-gray-200 rounded" @change="filterQuestions">
                    <option value="">All Levels</option>
                    <option value="Easy">Easy</option>
                    <option value="Hard">Hard</option>
                    <option value="Extreme">Extreme</option>
                  </select>

              </div>
              <div>
                <label class="mr-2" for="category">Filter by category:</label>

              <select name="category" id="category" class="bg-blue-600 text-gray-200 rounded"  @change="filterQuestions">
                <option value="">All Categories</option> 
                <option value="Minor Prophet">Minor Prophet</option>
                <option value="Wars">Wars</option>
                <option value="Major Prophet">Major Prophet</option>
                <option value="Parables">Parables</option>
              </select>

              </div>
          </div>
        </div>


      <div class="absolute mt-10 z-30 bg-opacity-80 flex w-[150vh] overflow-y-auto max-h-[80vh]">
        <table class="w-[150vh] overflow-y-auto max-h-[30vh]">
          <thead class="w-[90%] bg-blue-600">
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
            <tr v-for="(question, index) in filteredQuestions" :key="question._id" class="bg-blue-900 h-10 text-gray-200 font-bold border w-[150vh]">
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
        filteredQuestions: [], // Initialize the filteredQuestions array
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

      filterQuestions() {
    const selectedLevel = document.querySelector('#level').value;
    const selectedCategory = document.querySelector('#category').value;

    // Filter questions based on selected level and category
    this.filteredQuestions = this.questions.filter(question => {
      const matchLevel = selectedLevel === '' || question.level === selectedLevel;
      const matchCategory = selectedCategory === '' || question.category === selectedCategory;
      return matchLevel && matchCategory;
    });
  },
    },
  };
  </script>