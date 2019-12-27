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
      <transition-group name="shuffle" tag="div" class="columns is-gapless is-mobile is-multiline">
        <div
          v-for="(card, cardIndex) in cards"
          :key="card._id"
          :class="{'slide-top': card.isHovered === true && !shuffling, 'slide-bottom': card.isHovered === false && !shuffling}"
          class="column is-3-desktop is-6-mobile is-4-tablet"
          @mouseenter="onHoverCard(cardIndex)"
          @mouseleave="onLeaveCard(cardIndex)"
          @click="flipCard(cardIndex)"
        >
          <card :id="card._id" :value="card.value" :front-face-label="card.label" :back-face-label="''+card.value" :fliped="card.isFliped"></card>
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
          label: "0",
          isFliped: false,
          isHovered: false
        }
      ],
      // Card State
      hasFlippedCard: false,
      firstCard: null,
      secondCard: null,
      // Board State
      lockBoard: false,
      shuffling: false,
      currentTry: 0,
      isLoadingGame: false
    };
  },
  beforeMount() {
    // Prepare card data
    for (let index = 0; index < this.cardAmount * 2; index++) {
      this.cards[index] = {
        _id: uuid(),
        value: (index % this.cardAmount) + 1,
        label: "" + ((index % this.cardAmount) + 1),
        isFliped: true,
        isHovered: undefined
      };
    }
    this.shuffleCards(this.cards);
  },
  computed: {
    isMatched() {
      if (!this.firstCard || !this.secondCard) return false;
      return this.firstCard.value === this.secondCard.value;
    },
    indexOfFirstCard() {
      return this.cards.findIndex(card => card._id === this.firstCard._id);
    },
    indexOfSecondCard() {
      return this.cards.findIndex(card => card._id === this.secondCard._id);
    },
    allCardHasBeenFliped () {
      return this.cards.filter(card => !card.isFliped).length > 0 ? false : true
    }
  },
  methods: {
    newGame() {
      this.isLoadingGame = true
      // shuffle card
      this.cards.forEach(card => this.$set(card, 'isFliped', false))
      setTimeout(() => {
        this.cards = [...this.shuffleCards(this.cards)];
      }, 250)
      // reset score
      this.currentTry = 0
      this.$emit('player-has-change-score', this.currentTry)
      this.isLoadingGame = false
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
          this.$set(this.cards, index, {
            ...this.cards[index],
            isHovered: undefined
          });
        }, 250);
      }
    },
    flipCard(index) {
      if (this.lockBoard || this.cards[index].isFliped) return;
      if (this.firstCard) {
        if (this.cards[index]._id === this.firstCard._id) return;
      }

      if (!this.cards[index].isFliped) {
        // increase click counter
        this.currentTry++;
        this.$emit('player-has-change-score', this.currentTry)
      }

      this.$set(this.cards, index, { ...this.cards[index], isFliped: true });

      if (!this.hasFlippedCard) {
        this.hasFlippedCard = true;
        this.firstCard = this.cards[index];
        return;
      }
      this.secondCard = this.cards[index];

      this.isMatched ? this.resetFlipState() : this.unflipCards();
    },
    unflipCards() {
      this.lockBoard = true;
      // Flip card logic
      setTimeout(() => {
        // reset incorrect fliped card!!
        this.$set(this.cards, this.indexOfFirstCard, {
          ...this.firstCard,
          isFliped: false
        });
        this.$set(this.cards, this.indexOfSecondCard, {
          ...this.secondCard,
          isFliped: false
        });
        this.resetFlipState();
      }, 1000);
    },
    resetFlipState() {
      [this.hasFlippedCard, this.lockBoard] = [false, false];
      [this.firstCard, this.secondCard] = [null, null];
      if (this.allCardHasBeenFliped) {
        this.$emit('end-game', this.currentTry)
      }
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