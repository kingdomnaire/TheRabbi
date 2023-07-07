<template>
    <DashBoardNav>
      <div class="">
        <QuestionCon/>
    </div>
    </DashBoardNav>
</template>
  
  <script>
  import DashBoardNav from '@/components/DashBoardNav.vue';
  import QuestionCon from '@/components/QuestionCon.vue';
  
  
  export default {
    name: 'AddQuestion',
    components: {
    DashBoardNav,
    QuestionCon
}
  }
  </script>