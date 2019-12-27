<template>
  <div class="memory-card has-text-centered" :class="{'flip': fliped}">
    <div class="front-face bra-3">
      <h1>{{label}}</h1>
    </div>
    <div class="back-face bra-3">{{label}}</div>
  </div>
</template>

<script>
import { isUuid } from "uuidv4";

export default {
  props: {
    id: {
      type: String,
      required: true,
      validator(id) {
        // The value have to be an UUID only
        return isUuid(id);
      }
    },
    label: {
      type: String,
      required: true
    },
    value: {
      type: Number,
      required: true
    },
    fliped: {
      type: Boolean,
      default: false
    }
  }
};
</script>

<style lang="scss">
.memory-card {
  width: 10rem;
  height: 14rem;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 3rem;
  position: relative;
  transform: scale(1);
  transform-style: preserve-3d;
  transition: transform 0.5s;
  box-shadow: 4px 8px 25px 0.5px rgba(100, 100, 100, 0.5);
  background-color:  rgba(100, 100, 100, 0.5);

  :hover {
      cursor: pointer;
  }

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
    // For hint
    color: rgba(241, 241, 230, 0.315);
  }

  .front-face {
    background: rgb(89, 236, 193);
    background: radial-gradient(
      circle at top,
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
  line-height: 12.5rem;
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