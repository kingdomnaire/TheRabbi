<template>
  <div class="mt-[9rem]">
    <div class="bg-gray-100 hover:bg-gray-300 text-blue-950 cursor-pointer text-bold w-24 ml-40 text-center rounded" @click="toggleGameRule"> Game Rule</div>

    <transition name="fade">
      <div v-if="showGameRule" class="modal-overlay">
        <div class="modal-content">
          <h3 class="text-center text-xl font-bold my-4">Game Rules</h3>
          <div class="h-1/2 overflow-y-auto font-bold pb-5">
            <ol>
              <!-- Rules content -->
              <li>
              1: Every player can only attempt 15 question
            </li>
            <li>
              2: When a player get 2 questions wrong, the game will be over for the user.
            </li>
            <li>
              3: When a player gets 1 wrong answer before crossing level 6, the player drop and starts from level 1.
            </li>
            <li>
              4: When a player gets another question wrong before crossing level 6, the game ends for the player,
              and the player goes away with ₦ 5,000. 
            </li>
            <li>
              5: When a player gets an answer wrong after crossing level 6 and before crossing level 11,
              the player will drop and start from level 6.
            </li>
            <li>
              6: When a player gets 2 answers wrong before crossing level 11 , the game ends for the player
              and the player goes away with ₦ 20,000.
            </li>
            <li>
              7: When a player gets 2 answers wrong after crossing level 11, the game ends for the player,
              and the player goes away with ₦ 70,000.
            </li>
            <li>
              8: Ever player get to be at the same question category at every time, regardless of the current game level.
            </li>
            <li>
              9: when 4 players gets to level 11 the game becomes over for the remaining players.
            </li>
            <li>
              10: When a player gets to level 15 of 200,000 the game ends for everyone.
            </li>
            </ol>
          </div>
          <button class="modal-close bg-blue-900 text-lg font-bold hover:bg-blue-700" @click="toggleGameRule">Close</button>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'GameRules',
  data() {
    return {
      showGameRule: false
    };
  },
  methods: {
    toggleGameRule() {
      this.showGameRule = !this.showGameRule;
    }
  }
};
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9999;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal-content {
  background-color: #fff;
  width: 60%;
  max-width: 500px;
  padding: 1rem;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  text-align: start;
}

.modal-close {
  margin-top: 1rem;
  padding: 0.5rem 1rem;
  color: #f3f3f3;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

</style>
