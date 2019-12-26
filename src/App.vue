<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <score-board></score-board>
    <game-board></game-board>
  </div>
</template>

<script>
import ScoreBoard from './components/ScoreBoard'
import GameBoard from './components/GameBoard'

export default {
  name: 'app',
  components: {
    ScoreBoard,
    GameBoard
  }
}
</script>

<style lang="scss">
// Import a Google Font
@import url('https://fonts.googleapis.com/css?family=Comfortaa|Open+Sans&display=swap');

#app {
  font-family: 'Comfortaa', cursive;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

@for $i from 1 through 20 {
  .bra-#{$i} {
    border-radius: #{$i + 2}px;
  }

  .mx-#{$i} {
    margin-left: #{$i + 2}px !important;
    margin-right: #{$i + 2}px !important;
  }

  .my-#{$i} {
    margin-top: #{$i + 2}px !important;
    margin-bottom: #{$i + 2}px !important;
  }

}
</style>
