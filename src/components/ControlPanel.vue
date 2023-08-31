<template>
  <div class="container h-[90%] drop-shadow-md mt-3 pt-5
  px-8 bg-gray-300 md:w-[90%] justify-center max-md:h-[100%]">
    <!--<FirstButton/>-->
    <QuestionBox class="w-2/4"/>
    <QuestionCategory class="ml-[52%]"/>
     <div class="ml-[74%] ">
      <QuestionTag/>
     </div>
    <div class="grid grid-cols-3 w-full sm:grid-cols-6 gap-4 mt-10">
      <div class="sm:col-span-3">
        <ControlBtn/>
      </div>
      <div class="sm:col-span-3 justify-center">
        <SoundBtn />
      </div>
    </div>
  </div>
</template>

<script>
import SoundBtn from './panel/SoundBtn.vue';
import ControlBtn from './panel/ControlBtn.vue';
//import FirstButton from './panel/FirstButton.vue';
//import GameMeter from './panel/GameMeter.vue';
//import LifeLine from './panel/LifeLine.vue';
import QuestionBox from './panel/QuestionBox.vue';
import QuestionCategory from './panel/QuestionCategory.vue';
import QuestionTag from './panel/QuestionTag.vue';


export default{
    components: {
   // FirstButton,
    QuestionBox,
    SoundBtn,
    ControlBtn,
   // LifeLine,
    //GameMeter,
    QuestionCategory,
    QuestionTag
}
};


</script>

<style scoped>
</style>
