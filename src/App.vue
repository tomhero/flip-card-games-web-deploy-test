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
  font-family: 'Comfortaa', cursive;;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

// Set your brand colors
$purple: #8A4D76;
$pink: #FA7C91;
$brown: #757763;
$beige-light: #D0D1CD;
$beige-lighter: #EFF0EB;

// Update Bulma's global variables
$family-sans-serif: "Nunito", sans-serif;
$grey-dark: $brown;
$grey-light: $beige-light;
$primary: $purple;
$link: $pink;

// Update some of Bulma's component variables
$control-border-width: 2px;
$input-background-color: $beige-lighter;
$input-border-color: transparent;
$input-shadow: none;

// Import the rest of Bulma
@import url('~/bluma');
</style>
