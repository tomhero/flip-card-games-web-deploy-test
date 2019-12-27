<template>
  <section class="section board">
    <div class="container">
      <div class="columns is-mobile is-centered">
        <div class="column is-half">
          <p class="bd-notification is-primary has-text-centered">
            <button class="button is-primary is-medium" @click="newGame">Game Start</button>
          </p>
        </div>
      </div>
      <br />
      <transition-group
        name="shuffle"
        tag="div"
        class="columns is-gapless is-mobile is-multiline"
      >
        <div
          v-for="(card, cardIndex) in cards"
          :key="card._id"
          :class="{'slide-top': card.isHovered === true && !shuffling, 'slide-bottom': card.isHovered === false && !shuffling}"
          class="column is-3-desktop is-6-mobile is-4-tablet"
          @mouseenter="onHoverCard(cardIndex)"
          @mouseleave="onLeaveCard(cardIndex)"
          @click="flipCard(cardIndex)"
        >
          <card :id="card._id" :value="card.value" :label="card.label" :fliped="card.isFliped"></card>
        </div>
      </transition-group>
    </div>
  </section>
</template>

<script>
/* eslint-disable no-console */
import { uuid, empty } from "uuidv4";
import Card from "./Card";

export default {
  components: {
    Card
  },
  data() {
    return {
      cardAmount: 6,
      cards: [
        {
          _id: empty(),
          value: 0,
          label: '0',
          isFliped: false,
          isHovered: false,
          isMatched: false
        }
      ],
      // Card State
      hasFlippedCard: false,
      firstCard: undefined,
      secondCard: undefined,
      // Board State
      lockBoard: false,
      shuffling: false,
      currentTry: 0
    };
  },
  beforeMount() {
    // Prepare card data
    for (let index = 0; index < this.cardAmount * 2; index++) {
      this.cards[index] = {
        _id: uuid(),
        value: index,
        label: String(index + 1),
        isFliped: false,
        isHovered: undefined,
        isMatched: false
      };
    }
    this.shuffleCards(this.cards);
  },
  computed: {
    isMatched () {
      return this.firstCard.value === this.secondCard.value;
    }
  },
  methods: {
    newGame() {
      this.cards = [...this.shuffleCards(this.cards)];
    },
    shuffleCards(cards) {
      for (let i = cards.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [cards[i], cards[j]] = [cards[j], cards[i]];
      }
      this.shuffling = true;
      setTimeout(() => {
        this.shuffling = false;
      }, 750);
      return cards;
    },
    onHoverCard(index) {
      if (this.shuffling) return;
      this.$set(this.cards, index, { ...this.cards[index], isHovered: true });
    },
    onLeaveCard(index) {
      if (this.shuffling) return;
      this.$set(this.cards, index, { ...this.cards[index], isHovered: false });
      if (this.cards[index].isHovered !== undefined) {
        setTimeout(() => {
          this.$set(this.cards, index, { ...this.cards[index], isHovered: undefined });
        }, 250)
      }
    },
    flipCard(index) {
      if (this.lockBoard) return;
      if (this.firstCard) {
        if (this.cards[index]._id === this.firstCard._id) return;
      }

      this.$set(this.cards, index, { ...this.cards[index], isFliped: true });

      if (!this.hasFlippedCard) {
        this.hasFlippedCard = true;
        this.firstCard = this.cards[index];
        return;
      }
      this.secondCard = this.cards[index];
      
      this.isMatched ? this.disableCards() : this.unflipCards();
    },
    disableCards() {
      this.resetFlipState();
    },
    unflipCards() {
      this.lockBoard = true;
      // Flip card logic
      setTimeout(() => {
        this.resetFlipState();
      }, 1000)
    },
    resetFlipState() {
      [this.hasFlippedCard, this.lockBoard] = [false, false];
      // reset incorrect fliped card!!
      // this.$set(this.firstCard, index, { ...this.cards[index], isFliped: true });
      // this.$set(this.secondCard, index, { ...this.cards[index], isFliped: true });
      [this.firstCard, this.secondCard] = [null, null];
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

// Transitions
.shuffle-move {
  transition: transform 0.75s;
}
</style>