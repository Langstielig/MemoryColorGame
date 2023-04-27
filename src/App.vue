<template>
  <div class="app">
    <img class="logo" alt="Vue logo" src="./assets/logo.png">
    <h1 class="h1">Try to remember</h1>
    <p>Запомни порядок, в котором загораются кружочки, и прокликай их в той же последовательности</p>

    <GameBoard/>
  </div>
</template>

<script>

import GameBoard from "./components/GameBoard";

export default {
  name: 'App',
  components: {
    GameBoard
  }
}
</script>

<style scoped>
.logo {
  width: 180px;
}

.app {
  margin-top: 30px;
  margin-bottom: 40px;
  text-align: center;
  font-family:Georgia, 'Times New Roman', Times, serif;
}

</style>
