<template>
  <div class="tab-menu">
    <nav class="nav-menu">
      <button class="nav-link" @click="activeTab = 'main'" :class="{ 'active': activeTab === 'main' }">Main</button>
      <button class="nav-link" @click="activeTab = 'add-question'" :class="{ 'active': activeTab === 'add-question' }">Add Question</button>
      <button class="nav-link" @click="activeTab = 'about-game'" :class="{ 'active': activeTab === 'about-game' }">About Game</button>
      <button class="nav-link" disabled>About Developer</button>
    </nav>
    <div class="tab-content">
      <div v-if="activeTab === 'main'" class="tab-pane">
        <h1 class="tab-title">Control Panel</h1>
      </div>
      <div v-if="activeTab === 'add-question'" class="tab-pane">

      </div>
      <div v-if="activeTab === 'about-game'" class="tab-pane">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati optio saepe sequi culpa sapiente ipsam vero ab assumenda, ex a eaque facere numquam itaque aspernatur quae dolorem cum! Ullam, sapiente?</p>
      </div>
    </div>
  </div>
</template>

<script>

</script>

<style scoped>
.tab-menu {
  max-width: 600px;
  margin: 0 auto;
}

.nav-menu {
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
}

.nav-link {
  border: none;
  background: transparent;
  color: #777;
  font-size: 18px;
  padding: 10px 15px;
  cursor: pointer;
  transition: all 0.3s ease;
}

</style>
