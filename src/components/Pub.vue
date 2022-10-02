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
              <div class="card-header-title">
                <p>
                GM-VAE: Learning Representation with VAE on Gaussian Manifold
                </p>
              </div>
              <button class="card-header-icon">
                <span class="icon">
                  <a class="fas fa-external-link-alt" href="#"/>
                </span>
              </button>
            </header>
            <div class="card-content">
              <div class="content">
                <div class="is-size-7">
                  <b>Seunghyuk Cho</b>, Juyong Lee, Dongwoo Kim
                </div>
                <b-image style="margin:0"
                  :src="require('../assets/gmvae.png')"
                ></b-image>
              </div>
            </div>
          </div>
        </div>
        <div class="column">
          <div class="card has-text-left">
            <header class="card-header">
              <div class="card-header-title">
                <p>
                Roughly Collected Dataset for Contact Force Sensing Catheter
                </p>
              </div>
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
                <b-image style="margin:0"
                  :src="require('../assets/catheter.png')"
                ></b-image>
              </div>
            </div>
          </div>
        </div>
        <div class="column">
        </div>
      </div>

      <h1 class="title has-text-left">Conference Paper</h1>
      <div class="columns">
        <div class="column">
          <div class="card has-text-left">
            <header class="card-header">
              <div class="card-header-title">
                <p>
                A Rotated Hyperbolic Wrapped Normal Distribution for Hierarchical Representation Learning <span style="color:magenta;"> [NeurIPS '22] </span>
                </p>
              </div>
              <button class="card-header-icon">
                <span class="icon">
                  <a class="fas fa-external-link-alt" href="https://arxiv.org/abs/2205.13371"/>
                </span>
              </button>
            </header>
            <div class="card-content">
              <div class="content">
                <div class="is-size-7">
                  <b>Seunghyuk Cho</b>, Juyong Lee, Jaesik Park, Dongwoo Kim
                </div>
                <b-image style="margin:0"
                  :src="require('../assets/rown.png')"
                ></b-image>
              </div>
            </div>
          </div>
        </div>
        <div class="column">
          <div class="card has-text-left">
            <header class="card-header">
              <div class="card-header-title">
                <p>
                Robust Deep Learning from Crowds with Belief Propagation <span style="color:blue;"> [AISTATS '22] </span>
                </p>
              </div>
              <button class="card-header-icon">
                <span class="icon">
                  <a class="fas fa-external-link-alt" href="https://proceedings.mlr.press/v151/kim22a.html"/>
                </span>
              </button>
            </header>
            <div class="card-content">
              <div class="content">
                <div class="is-size-7">
                  Hoyoung Kim<sup>*</sup>, <b>Seunghyuk Cho</b><sup>*</sup>, Dongwoo Kim, Jungseul Ok
                </div>
                <b-image style="margin:0"
                  :src="require('../assets/deepbp.png')"
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
