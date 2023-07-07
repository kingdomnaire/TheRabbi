<template>
  <div>
    <div
      class="bg-green-300 w-20 h-20 flex items-center justify-center rounded-full font-bold text-lg cursor-pointer"
      :class="{ 'bg-gray-400 text-red-800': isClicked }"
      @click="showBanIcon()"
    >
      50:50
    </div>
  </div>
</template>


<script>
export default {
  name: 'LifeLine',
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
