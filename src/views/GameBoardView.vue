<template>
    <div>
      <DashBoardNav>
        <ControlPanel/>
    </DashBoardNav>
  
    </div>
</template>
  
  <script>
  import DashBoardNav from '@/components/DashBoardNav.vue';
  import ControlPanel from '../components/ControlPanel.vue';
  
  export default {
    name: 'GameBoardView',
    components: {
    ControlPanel,
    DashBoardNav
}
  }
  </script>