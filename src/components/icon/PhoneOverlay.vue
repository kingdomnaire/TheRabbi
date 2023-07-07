<template>
  <div>
    <div

      class="bg-green-300 w-20 h-20 flex items-center justify-center rounded-full cursor-pointer"
      :class="{ 'bg-gray-400 text-red-900': isClicked }"
      @click="showBanIcon()"
    >
      <PhoneIcon :color="isClicked ? 'red' : ''" />
    </div>
  </div>
</template>



<script>
import PhoneIcon from './PhoneIcon.vue';

export default {
  name: 'LifeLine',
  components: {
    PhoneIcon
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
