<template>
    <div class="flex gap-5 text-gray-100 mb-1 h-[20%]">

        <div
        :class="['bg-blue-900 hover:bg-blue-600 text-gray-100 w-[10%] h-[15%] rounded py-1 cursor-pointer',{ 'bg-gray-400 text-red-600': isDeactivated4 }]"
        @click="handleClick">Player 4</div>
        <div :class="['bg-blue-900 rounded px-1 w-24 h-[15%] py-1', { 'bg-gray-400 text-red-600': isDeactivated4 }]">
            Question {{ question }}
        </div>
        <div :class="['bg-blue-900 rounded px-1 py-1 h-[15%] w-[4.5rem]', { 'bg-gray-400 text-red-600': isDeactivated4 }] ">
            Level {{ level }}
        </div>
        <div :class="['bg-blue-900 rounded px-1 py-1 h-[15%] w-[9rem]',{ 'bg-gray-400 text-red-600': isDeactivated4 }]">
            Wrong number {{ wrong }}
        </div>
        <PhoneIcon :class="['-ml-5 text-blue-900 h-[4vh]', { ' text-red-600': isDeactivated4 }]" />
        <AskAudienceIcon :class="['-ml-5 text-blue-900 h-[4vh]', { 'text-red-600': isDeactivated4 }]" />
        <div :class="['-ml-5 font-bold text-xl text-center align-middle text-blue-900', { 'text-red-600': isDeactivated4 }]" >50:50</div>
        <div :class="['bg-blue-900 rounded px-1 w-24 h-[15%] py-1 cursor-pointer', { 'bg-gray-400 text-red-600': isDeactivated4 }]" @click="handleDeactivate">Deactivate</div>
    </div>
</template>

<script>
import PhoneIcon from '../icon/PhoneIcon.vue';
import AskAudienceIcon from '../icon/AskAudienceIcon.vue';
import { mapActions } from 'vuex';

export default {
  name: "PlayerFour",
  data() {
    return {
      question: 1,
      level: 15,
      wrong: 0,
      isDeactivated4: false,
    };
  },
  computed: {
    isActiveComponent() {
      return (component) => this.$store.state.activeComponent === component;
    },
  },
  methods: {
    ...mapActions('components', ['setActiveComponent']),
    handleDeactivate() {
      this.isDeactivated4 = !this.isDeactivated4;
      const componentName = this.$options.name;
      localStorage.setItem('Player', componentName);
      localStorage.setItem('Deactivated4', this.isDeactivated4); // Save the deactivated state in localStorage
      this.setActiveComponent(componentName);
    },
  },
  created() {
    const storedButton = localStorage.getItem('Player');
    if (storedButton) {
      this.isDeactivated4 = localStorage.getItem('Deactivated4') === 'true'; // Load the deactivated state from localStorage
    }
  },
  components: { PhoneIcon, AskAudienceIcon },
};
</script>