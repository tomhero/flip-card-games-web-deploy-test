<template>
  <section class="section is-relative" id="game-header">
    <div class="container is-hidden-desktop">
      <!-- Header For Mobile / Tablet -->
      <div class="columns is-gapless">
        <div class="column has-text-centered is-4-tablet">
          <img
            class="is-inline-block"
            width="175px"
            alt="Game logo"
            src="../assets/seperated_card.png"
          />
          <div class="column">
            <h1 class="title has-text-centered">Flip Card Game</h1>
          </div>
          <div class="column has-text-centered is-hidden-tablet">
            <hr width="100%" class="is-inline-block my-1" />
          </div>
        </div>
        <div class="column is-1-tablet is-hidden-mobile vr bra-20"></div>
        <div class="column is-7-tablet">
          <div class="columns is-gapless">
            <div class="column">
              <div class="columns is-mobile">
                <div class="column has-text-centered">
                  <h3 class="bd-notification is-info">
                    Current
                    <br />Try
                  </h3>
                  <div class="score-box bra-1 my-15">
                    <label class="title">{{ currentScore }}</label>
                  </div>
                </div>
                <div class="column has-text-centered">
                  <h3 class="bd-notification is-info">
                    My
                    <br />Best
                  </h3>
                  <div class="score-box bra-1 my-15">
                    <label class="title">{{ playerBestScore }}</label>
                  </div>
                </div>
                <div class="column has-text-centered">
                  <h3 class="bd-notification is-info">
                    Global
                    <br />Best
                  </h3>
                  <div class="score-box bra-1 my-15">
                    <label class="title">{{ globalBestScore }}</label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- Header For tablet -->
    </div>
    <div class="container is-hidden-touch" style="padding-top: 1rem; padding-bottom: 0rem;">
      <div class="columns">
        <div class="column has-text-centered" style="padding-top: 0rem;">
          <img
            class="is-inline-block"
            width="75%"
            alt="Game logo"
            src="../assets/seperated_card.png"
          />
        </div>
        <div class="column is-3">
          <h1 class="is-size-4">Flip Card Game</h1>
        </div>
        <div class="column is-1 bl-op-white"></div>
        <div class="column has-text-right">
          <h3 class="is-size-6 small-title-text">Current <br> Try</h3>
        </div>
        <div class="column has-text-centered" style="padding-top: 0rem;">
          <div class="small-score-box">
            <label class="title">{{ currentScore }}</label>
          </div>
        </div>
        <div class="column has-text-right">
          <h3 class="is-size-6 small-title-text ">My <br> Best</h3>
        </div>
        <div class="column has-text-centered" style="padding-top: 0rem;">
          <div class="small-score-box">
            <label class="title">{{ playerBestScore }}</label>
          </div>
        </div>
        <div class="column has-text-right">
          <h3 class="is-size-6 small-title-text">Global <br> Best</h3>
        </div>
        <div class="column has-text-centered" style="padding-top: 0rem;">
          <div class="small-score-box">
            <label class="title">{{ globalBestScore }}</label>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
      currentScore: {
        type: Number,
        default: 0
      },
      playerBestScore: {
        type: Number,
        default: 0
      },
      globalBestScore: {
        type: Number,
        default: 0
      }
  }
};
</script>

<style lang="scss" scoped>
$white: #fdfdfd;

.score-box {
  opacity: 0.64;
  background: $white;
  height: 5.5rem;
}

.score-box > label {
  line-height: 5.75rem;
}

.small-title-text {
  line-height: 1rem;
}

.small-score-box {
  background-color: $white !important;
  height: 3rem;
  // margin-bottom: 0.25rem;
  opacity: 0.64;
}

.small-score-box > label {
  line-height: 3.25rem;
}

hr {
  opacity: 0.6;
  background: $white;
}

h1, h3 {
  color: $white;
}

label {
  color: #2b2b2b;
}

.vr {
  width: 1px !important;
  border: solid $white 2px;
  opacity: 0.64;
  height: 9.5rem;
  margin-right: 3.45rem !important;
}

.section {
  padding: 0.5rem 1.5rem;
  background: rgb(0,91,234);
  background: linear-gradient(180deg, rgba(0,91,234,1) 0%, rgba(0,198,251,1) 100%);
  box-shadow: #00c6fb 0px 2px 25px 0.05px;
}

.bl-op-white {
  border-left: solid $white 2px;
  opacity: 0.64;
  height: 3rem;
  width: 1% !important;
}
</style>