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
        <div
          class="column is-3-desktop is-6-mobile is-4-tablet slide-top slide-bottom"
          v-for="card in cards"
          :key="card._id"
        >
          <card :id="card._id" :value="card.value" :label="card.label" :fliped="card.isFliped"></card>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { uuid, empty } from "uuidv4";
import Card from "./Card";

export default {
  components: {
    Card
  },
  data() {
    return {
      cards: [{ _id: empty(), value: 0, label: "0" }],
      // Card State
      hasFlippedCard: false,
      firstCard: undefined,
      secondCard: undefined,
      // Board State
      lockBoard: false
    };
  },
  beforeMount() {
    // Prepare card data
    for (let index = 0; index < 12; index++) {
      this.cards[index] = {
        _id: uuid(),
        value: index,
        label: String(index + 1),
        isFliped: false
      };
    }
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

  .slide-top:hover {
    animation: slide-top 0.25s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
  }

  /**
  * ----------------------------------------
  * animation slide-top
  * ----------------------------------------
  */
  @keyframes slide-top {
    0% {
      transform: translateY(0);
    }
    100% {
      transform: translateY(-10px);
    }
  }

  .slide-bottom {
    animation: slide-bottom 0.25s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
  }

  /**
 * ----------------------------------------
 * animation slide-bottom
 * ----------------------------------------
 */
  @keyframes slide-bottom {
    0% {
      transform: translateY(-10px);
    }
    100% {
      transform: translateY(0px);
    }
  }
}
</style>