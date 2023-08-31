<template>
    <div class="container h-[80vh] drop-shadow-md rounded-md pt-14 px-8  md:w-[160vh] flex-wrap flex flex-col mt-2">
        <div class="text-blue-950 -mt-10">
          <h3 class="font-bold text-lg ">Filter the questions here.</h3>
          <div class="flex gap-4">
                <div>
                  <label for="level" class="mr-2">Filter by level:</label>

                  <select name="level" id="level" class="bg-gray-500 text-gray-200 rounded" @change="filterQuestions">
                    <option value="">All Levels</option>
                    <option value="Easy">Easy</option>
                    <option value="Hard">Hard</option>
                    <option value="Extreme">Extreme</option>
                  </select>

              </div>
              <div>
                <label class="mr-2" for="category">Filter by category:</label>

              <select name="category" id="category" class="bg-gray-500 text-gray-200 rounded"  @change="filterQuestions">
                <option value="">All Categories</option> 
                <option value="Minor Prophet">Minor Prophet</option>
                <option value="Wars">Wars</option>
                <option value="Major Prophet">Major Prophet</option>
                <option value="Parables">Parables</option>
                <option value="Paul">Paul</option>
                <option value="The Psalms">The Psalms</option>
                <option value="Jesus time on earth">Jesus time on earth</option>
              </select>

              </div>
          </div>
        </div>


      <div class="absolute mt-10 z-30 bg-opacity-80 flex w-[160vh] overflow-y-auto max-h-[100vh]">
        <table class="w-[180vh] overflow-y-auto max-h-[40vh]">
          <thead class="w-[100%] bg-gray-700">
            <tr class=" h-10 w-[90%] text-gray-300">
              <th>S/N</th>
              <th>Questions</th>
              <th>Answers</th>
              <th>Correct Answer</th>
              <th>Category</th>
              <th>Level</th>
              <th class="w-20"></th>
            </tr>
          </thead>
          <tbody class="w-[90%]">
            <tr v-for="(question, index) in filteredQuestions" :key="question._id" :class="index % 2 === 0 ? 'bg-gray-500' : 'bg-gray-700' + 'h-10 text-gray-700 font-bold border w-[150vh]'">
              <td class="pr-10 pl-4 w-[2%]">{{ index + 1 }}</td>
              <td class="pr-10 pl-4 w-[30%]">{{ question.question }}</td>
              <td class="pr-4 pl-2 w-[30px]">{{ formatAnswers(question.answers) }}</td>
              <td class="pr-4 pl-2 w-[10px]">{{ question.correct_answer }}</td>
              <td class="pr-4 pl-2 w-[10px]">{{ question.category }}</td>
              <td class="pr-4 pl-2 w-[10px]">{{ question.level }}</td>
              <td class="pr-4 pl-2 w-[10%] py-2">
                <button @click="deleteQuestion(question._id)" class="text-gray-200 bg-red-900 w-20 h-10 rounded hover:bg-red-700 mr-2">Delete</button>
                <button @click="editQuestion(question)" class="text-gray-200 bg-green-900 w-20 h-10 rounded hover:bg-green-700">Edit</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <!-- Modal content -->
<div v-if="showEditModal" class="fixed z-50 inset-0 w-[60%] mt-20 overflow-y-auto justify-center items-center">
  <div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
    <!-- Edit question form -->
    <h3 class="text-lg leading-6 font-medium text-gray-900">Edit Question</h3>
    <div class="mt-4">
      <textarea v-model="editedQuestion.question" rows="3" class="w-full px-3 py-2 text-gray-700 border border-gray-300 rounded-md focus:outline-none"></textarea>
    </div>
    <!-- Rest of the form inputs -->

    <!-- Edit answers -->
    <div class="mt-4">
      <label for="editedAnswers" class="block text-sm font-medium text-gray-700">Answers</label>
      <div class="mt-1">
        <input v-for="(answer, index) in editedQuestion.answers" :key="index" v-model="editedQuestion.answers[index]" type="text" name="editedAnswers" id="editedAnswers" class="w-full px-3 py-2 text-gray-700 border border-gray-300 rounded-md focus:outline-none" />
      </div>
    </div>

    <!-- Edit correct answer -->
    <div class="mt-4">
      <label for="editedCorrectAnswer" class="block text-sm font-medium text-gray-700">Correct Answer</label>
      <div class="mt-1">
        <input v-model="editedQuestion.correct_answer" type="text" name="editedCorrectAnswer" id="editedCorrectAnswer" class="w-full px-3 py-2 text-gray-700 border border-gray-300 rounded-md focus:outline-none" />
      </div>
    </div>

    <!-- Edit category -->
    <div class="mt-4">
      <label for="editedCategory" class="block text-sm font-medium text-gray-700">Category</label>
      <div class="mt-1">
        <input v-model="editedQuestion.category" type="text" name="editedCategory" id="editedCategory" class="w-full px-3 py-2 text-gray-700 border border-gray-300 rounded-md focus:outline-none" />
      </div>
    </div>

    <!-- Edit level -->
    <div class="mt-4">
      <label for="editedLevel" class="block text-sm font-medium text-gray-700">Level</label>
      <div class="mt-1">
        <input v-model="editedQuestion.level" type="text" name="editedLevel" id="editedLevel" class="w-full px-3 py-2 text-gray-700 border border-gray-300 rounded-md focus:outline-none" />
      </div>
    </div>

    <!-- Save and Cancel buttons -->
    <div class="mt-5 sm:mt-6 flex justify-center items-center">
      <button @click="saveQuestion" type="button" class="inline-flex w-40 mr-5 justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:text-sm">
        Save
      </button>
      <button @click="cancelEdit" type="button" class="mt-5 sm:mt-0  inline-flex justify-center w-40 rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:text-sm">
        Cancel
      </button>
    </div>
  </div>
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
        showEditModal: false, // Flag to control the edit modal visibility
        editedQuestion: {}, // Object to hold the edited question data
      };
    },
    created() {
      this.fetchQuestions(); // Fetch questions when the component is created
    },

    computed: {
  backgroundClass() {
    return (index) => {
      return index % 2 === 0 ? 'bg-gray-300' : 'bg-gray-500';
    };
  },
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
    
  // Open the edit modal and assign the question data to the editedQuestion object
  editQuestion(question) {
      this.showEditModal = true;
      this.editedQuestion = { ...question };
    },

    // Save the edited question
  saveQuestion() {
    // Make a PATCH request using Axios
    axios
      .patch(`https://quizzes-bmo0.onrender.com/question/${this.editedQuestion._id}`, this.editedQuestion)
      .then(response => {
        console.log('Question updated successfully:', response.data);
        // Find the index of the edited question in the questions array
        const index = this.questions.findIndex(question => question._id === this.editedQuestion._id);
        // Update the questions and filteredQuestions arrays with the edited question
        this.questions.splice(index, 1, response.data);
        this.filteredQuestions.splice(index, 1, response.data);
        // Close the edit modal
        this.showEditModal = false;
        // Reset the editedQuestion object
        this.editedQuestion = {};
      })
      .catch(error => {
        console.error('Error updating question:', error);
        // Handle the error
      });
  },
    // Cancel the edit and close the edit modal
    cancelEdit() {
      this.showEditModal = false;
      this.editedQuestion = {};
    },

  },

  };
  </script>
  