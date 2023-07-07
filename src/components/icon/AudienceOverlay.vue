<template>
  <div>
    <div
      class="bg-green-300 w-20 h-20 flex items-center justify-center rounded-full cursor-pointer"
      :class="{ 'bg-gray-400 text-red-900': isClicked }"
      @click="showBanIcon()"
    >
      <AskAudienceIcon :color="isClicked ? 'red' : ''" />
    </div>
  </div>
</template>


<script>
import AskAudienceIcon from '../icon/AskAudienceIcon.vue'

export default {
  name: 'LifeLine',
  components: {
    AskAudienceIcon,
  },
  data() {
    return {
      isClicked: false
    };
  },
  methods: {
    showBanIcon() {
      this.isClicked = !this.isClicked;
    }
  }
};
</script>
