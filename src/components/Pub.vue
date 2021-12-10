<template>
  <div>
    <section class="hero is-medium is-info mb-6">
      <div class="hero-body">
        <p class="title">
          Publications
        </p>
      </div>
    </section>
    <div class="container px-5">
      <h1 class="title has-text-left">Pre-print</h1>
      <div class="columns">
        <div class="column">
          <div class="card has-text-left">
            <header class="card-header">
              <p class="card-header-title">
                Robust Deep Learning from Crowds with Belief Propagation
              </p>
              <button class="card-header-icon">
                <span class="icon">
                  <a class="fas fa-external-link-alt" href="https://arxiv.org/abs/2111.00734"/>
                </span>
              </button>
            </header>
            <div class="card-content">
              <div class="content">
                <div class="is-size-7">
                  Hoyoung Kim<sup>*</sup>, <b>Seunghyuk Cho</b><sup>*</sup>, Dongwoo Kim, Jungseul Ok
                </div>
                <b-image
                  :src="require('../assets/deepbp.png')"
                ></b-image>
              </div>
            </div>
          </div>
        </div>
        <div class="column">
          <div class="card has-text-left">
            <header class="card-header">
              <p class="card-header-title">
                Roughly Collected Dataset for Contact Force Sensing Catheter
              </p>
              <button class="card-header-icon">
                <span class="icon">
                  <a class="fas fa-external-link-alt" href="https://arxiv.org/abs/2102.01932"/>
                </span>
              </button>
            </header>
            <div class="card-content">
              <div class="content">
                <div class="is-size-7">
                  <b>Seunghyuk Cho</b><sup>*</sup>, Minsoo Koo<sup>*</sup>, Dongwoo Kim, Juyoung Lee, Yeonwoo Jung, Kibyung Nam, Changmo Hwang
                </div>
                <b-image
                  :src="require('../assets/catheter.png')"
                ></b-image>
              </div>
            </div>
          </div>
        </div>
        <div class="column">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Pub',
}
</script>

<style>
</style>
