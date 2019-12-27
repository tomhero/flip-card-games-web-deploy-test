<template>
  <section class="section board">
    <div class="container">
      <div class="columns is-mobile is-centered">
        <div class="column is-half">
          <p class="bd-notification is-primary has-text-centered">
            <button class="button is-primary is-large">Game Start</button>
          </p>
        </div>
      </div>
      <br />
      <div class="columns is-gapless is-mobile is-multiline">
        <div class="column is-3-desktop is-6-mobile is-4-tablet" v-for="index in 12" :key="index">
          <div class="memory-card has-text-centered">
            <div class="front-face">
              <h1>{{index}}</h1>
            </div>
            <div class="back-face"></div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {};
  }
};
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
  height: 13rem;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 3rem;
  position: relative;
  transform: scale(1);
  transform-style: preserve-3d;
  transition: transform 0.5s;
  box-shadow: 4px 8px 25px 0.5px rgba(100, 100, 100, 0.5);

  .back-face {
    background: repeating-linear-gradient(
        0deg,
        hsla(54, 0%, 88%, 0.05) 0px,
        hsla(54, 0%, 88%, 0.05) 1px,
        transparent 1px,
        transparent 16px
      ),
      repeating-linear-gradient(
        45deg,
        hsla(54, 0%, 88%, 0.05) 0px,
        hsla(54, 0%, 88%, 0.05) 1px,
        transparent 1px,
        transparent 16px
      ),
      repeating-linear-gradient(
        90deg,
        hsla(54, 0%, 88%, 0.05) 0px,
        hsla(54, 0%, 88%, 0.05) 1px,
        transparent 1px,
        transparent 16px
      ),
      repeating-linear-gradient(
        90deg,
        hsla(54, 0%, 88%, 0.05) 0px,
        hsla(54, 0%, 88%, 0.05) 1px,
        transparent 1px,
        transparent 16px
      ),
      repeating-linear-gradient(
        67.5deg,
        hsla(54, 0%, 88%, 0.05) 0px,
        hsla(54, 0%, 88%, 0.05) 1px,
        transparent 1px,
        transparent 16px
      ),
      repeating-linear-gradient(
        157.5deg,
        hsla(54, 0%, 88%, 0.05) 0px,
        hsla(54, 0%, 88%, 0.05) 1px,
        transparent 1px,
        transparent 16px
      ),
      repeating-linear-gradient(
        157.5deg,
        hsla(54, 0%, 88%, 0.05) 0px,
        hsla(54, 0%, 88%, 0.05) 1px,
        transparent 1px,
        transparent 16px
      ),
      repeating-linear-gradient(
        67.5deg,
        hsla(54, 0%, 88%, 0.05) 0px,
        hsla(54, 0%, 88%, 0.05) 1px,
        transparent 1px,
        transparent 16px
      ),
      repeating-linear-gradient(
        45deg,
        hsla(54, 0%, 88%, 0.05) 0px,
        hsla(54, 0%, 88%, 0.05) 1px,
        transparent 1px,
        transparent 16px
      ),
      linear-gradient(90deg, hsl(224, 72%, 31%), hsl(224, 72%, 31%));
    color: rgba(241, 241, 230, 0.315);
  }

  .front-face {
    background: rgb(89, 236, 193);
    background: radial-gradient(
      circle,
      rgba(89, 236, 193, 1) 0%,
      rgba(0, 189, 213, 1) 38%,
      rgba(0, 123, 196, 1) 89%
    );
    color: #f1f1e6;
  }
}

.memory-card:active {
  transform: scale(0.97);
  transition: transform 0.2s;
}

.memory-card.flip {
  transform: rotateY(180deg);
}

.front-face,
.back-face {
  font-size: 7rem;
  line-height: 12rem;
  width: 100%;
  height: 100%;
  padding: 20px;
  position: absolute;
  backface-visibility: hidden;
}

.front-face {
  transform: rotateY(180deg);
}
</style>