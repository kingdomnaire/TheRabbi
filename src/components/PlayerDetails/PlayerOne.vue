<template>
    <div class="flex gap-5 text-gray-100 mb-1">

        <div class="bg-blue-900 hover:bg-blue-600 text-gray-100 w-[10%] h-[15%] rounded py-1 cursor-pointer ">Player 1</div>
        <div class="bg-blue-900 rounded px-1 w-24 h-10 py-1">
            Question {{ question }}
        </div>
        <div class="bg-blue-900 rounded px-1 h-10 w-[4.5rem] ">
            Level {{ level }}
        </div>
        <div class="bg-blue-900 rounded px-1 h-10 w-[9rem]">
            Wrong number {{ wrong }}
        </div>
        <PhoneIcon class=" text-blue-900" />
        <AskAudienceIcon class=" text-blue-900" />
        <div class="font-bold text-xl flex items-center text-blue-900" >50:50</div>
        
    </div>
</template>

<script>
import PhoneIcon from '../icon/PhoneIcon.vue';
import AskAudienceIcon from '../icon/AskAudienceIcon.vue';
import { mapActions } from 'vuex';
export default{
    name: "PlayerOne",
    data() {
        return {
            question: 1,
            level: 15,
            wrong: 0,
        };
    },
    computed: {
    isActiveComponent() {
      return this.$store.state.components.activeComponent === 'PlayerOne';
    }
  },
  methods: {
    ...mapActions('components', ['setActiveComponent']),
    handleClick() {
      this.setActiveComponent('PlayerOne');
    }
  },
    components: { PhoneIcon, AskAudienceIcon }
}
</script>