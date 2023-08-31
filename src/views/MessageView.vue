<template>
    <DashBoardNav>
      <div class="mt-14">
        <MessageCon/>
    </div>
    </DashBoardNav>
</template>
  
  <script>
  import DashBoardNav from '@/components/DashBoardNav.vue';
  import MessageCon from '@/components/MessageCon.vue';

  
  
  export default {
    name: 'MessageView',
    components: {
    DashBoardNav,
    MessageCon
}
  }
  </script>