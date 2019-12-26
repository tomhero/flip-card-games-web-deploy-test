<template>
  <section class="section has-background-primary" id="game-header">
    <div class="container">
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
                    <label class="title">10</label>
                  </div>
                </div>
                <div class="column has-text-centered">
                  <h3 class="bd-notification is-info">
                    My
                    <br />Best
                  </h3>
                  <div class="score-box bra-1 my-15">
                    <label class="title">10</label>
                  </div>
                </div>
                <div class="column has-text-centered">
                  <h3 class="bd-notification is-info">
                    Global
                    <br />Best
                  </h3>
                  <div class="score-box bra-1 my-15">
                    <label class="title">10</label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- Header For tablet -->
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
$white: #fdfdfdfd;

.score-box {
  opacity: 0.64;
  background: $white;
  height: 5.5rem;
}

.score-box > label {
  line-height: 5.75rem;
}

hr {
  opacity: 0.6;
  background: $white;
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
}
</style>