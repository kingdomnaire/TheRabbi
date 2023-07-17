<template>
    <DashBoardNav>
      <div class="flex">
        <RegisteredUser/>
        <TimeStamp/>
    </div>
    </DashBoardNav>
</template>
  
  <script>
  import DashBoardNav from '@/components/DashBoardNav.vue';
  import RegisteredUser from '@/components/RegisteredUser.vue';
  import TimeStamp from '@/components/TimeStamp.vue';

  export default {
    name: 'FastestFinger',
    components: {
    DashBoardNav,
    RegisteredUser,
    TimeStamp
}
  }
  </script>