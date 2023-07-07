<template>
    <DashBoardNav>
      <div class="">
      <div class="">
        <ControlPanel/>
      </div>
      <div class="">
        <HostPanel/>
        <GuestPanel/>
      </div>
    </div>
    </DashBoardNav>
  
</template>
  
  <script>
  import DashBoardNav from '@/components/DashBoardNav.vue';
  import ControlPanel from '../components/ControlPanel.vue';
  //import HostPanel from '../components/HostPanel.vue';
  //import GuestPanel from '../components/GuestPanel.vue';
  
  export default {
    name: 'GameBoardView',
    components: {
    ControlPanel,
    DashBoardNav
}
  }
  </script>