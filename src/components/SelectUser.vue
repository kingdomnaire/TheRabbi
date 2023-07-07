<template>
    <div class="h-80 w-full flex justify-center items-center mt-48 absolute bg-blue-950">
        <div class="bg-gray-200 h-full w-5/6 rounded-lg shadow-xl">
            <div class=" flex">
                <!--player button-->
                <div class="bg-gray-300 block text-center m-2 rounded ml-2 h-full w-2/4">
                    <PlayerOne />
                    <PlayerTwo />
                    <PlayerThree />
                    <PlayerFour />
                    <PlayerFive />
                    <PlayerSix />
                </div>
                <div class="bg-gray-300 block text-center m-2 rounded ml-2 h-full w-2/4">
                    <PlayerSeven />
                    <PlayerEight />
                    <PlayerNine />
                    <PlayerTen />
                    <PlayerEleven />
                    <PlayerTwelve />
                </div>
                <!--<div class="bg-gray-900 w-1/4 h-1 rotate-90 ml-72 -mt-16 bg-clip-border  "></div>-->
            </div>
        </div>
    </div>
</template>

<script>
import PlayerOne from  './PlayerDetails/PlayerOne.vue'
import PlayerTwo from './PlayerDetails/PlayerTwo.vue'
import PlayerThree from './PlayerDetails/PlayerThree.vue'
import PlayerFour from './PlayerDetails/PlayerFour.vue'
import PlayerFive from './PlayerDetails/PlayerFive.vue'
import PlayerSix from './PlayerDetails/PlayerSix.vue'
import PlayerSeven from './PlayerDetails/playerSeven.vue'
import PlayerEight from './PlayerDetails/playerEight.vue'
import PlayerNine from './PlayerDetails/PlayerNine.vue'
import PlayerTen from './PlayerDetails/PlayerTen.vue'
import PlayerEleven from './PlayerDetails/PlayerEleven.vue'
import PlayerTwelve from './PlayerDetails/PlayerTwelve.vue'
export default {
    components:{
    PlayerOne,
    PlayerTwo,
    PlayerThree,
    PlayerFour,
    PlayerFive,
    PlayerSix,
    PlayerSeven,
    PlayerEight,
    PlayerNine,
    PlayerTen,
    PlayerEleven,
    PlayerTwelve
},
computed: {
    isActiveComponent() {
      return (component) => this.$store.state.components.activeComponent === component;
    }
  }
}
</script>