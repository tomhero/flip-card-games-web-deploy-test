<template>
  <section class="section board">
    <div class="container">
      <button>Start Game</button>
      <hr />
      <div class="columns is-gapless is-mobile is-multiline">
        <div class="column is-3-desktop is-6-mobile is-4-tablet" v-for="index in 12" :key="index">
          <div class="memory-card has-text-centered" data-framework="aurelia">
            <div class="front-face"><h1>{{index}}</h1></div>
            <div class="back-face"><h1>{{index}}</h1></div>
            <!-- <img class="back-face" src="https://pngimage.net/wp-content/uploads/2018/06/sample-png-images-1.png" alt="JS Badge" /> -->
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.board {
  margin: 0 auto;
  background-color: #f4f4f4;

  .container {
    max-width: 1000px;
  }
}

.memory-card {
  width: 10rem;
  height: 12.5rem;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 3rem;
  position: relative;
  transform: scale(1);
  transform-style: preserve-3d;
  transition: transform .5s;
  box-shadow: 1px 1px 1px rgba(0,0,0,.3);
}

.memory-card:active {
  transform: scale(0.97);
  transition: transform .2s;
}

.memory-card.flip {
  transform: rotateY(180deg);
}

.front-face,
.back-face {
  font-size: 7rem;
  line-height: 11rem;
  width: 100%;
  height: 100%;
  padding: 20px;
  position: absolute;
  border-radius: 5px;
  background: rgb(85, 166, 231);
  backface-visibility: hidden;
}

.front-face {
  transform: rotateY(180deg);
}
</style>