<template>
  <div>
    <section class="hero is-medium is-info mb-6">
      <div class="hero-body">
        <p class="title">Publications</p>
      </div>
    </section>

    <div class="container px-5">
      <h1 class="title has-text-left">Conference Papers</h1>
      <div class="columns">
        <div class="column">
          <div class="card has-text-left">
            <header class="card-header">
              <div class="card-header-title">
                <p style="font-size: 80%">
                  GeoDANO: Geometric VLM with Domain Agnostic Vision Encoder
                  <span style="color: #0f766e"> [EMNLP Findings '25] </span>
                </p>
              </div>
              <button class="card-header-icon" style="padding-left: 0px">
                <span class="icon">
                  <a
                    class="fas fa-external-link-alt"
                    href="https://arxiv.org/abs/2502.11360"
                  />
                </span>
              </button>
            </header>
            <div class="card-content">
              <div class="content">
                <div class="is-size-7">
                  <b>Seunghyuk Cho</b>, Zhenyue Qin, Yang Liu, Youngbin Choi,
                  Seungbeom Lee, Dongwoo Kim
                </div>
                <b-image
                  style="margin: 5px auto 0 auto"
                  :src="require('../assets/geodano.png')"
                  class="nocrop"
                  responsive
                  ratio="16by9"
                ></b-image>
              </div>
            </div>
          </div>
        </div>
        <div class="column">
          <div class="card has-text-left">
            <header class="card-header">
              <div class="card-header-title">
                <p style="font-size: 80%">
                  CoPL: Collaborative Preference Learning for Personalizing LLMs
                  <span style="color: #0f766e"> [EMNLP Main '25] </span>
                </p>
              </div>
              <button class="card-header-icon" style="padding-left: 0px">
                <span class="icon">
                  <a
                    class="fas fa-external-link-alt"
                    href="https://arxiv.org/abs/2503.01658"
                  />
                </span>
              </button>
            </header>
            <div class="card-content">
              <div class="content">
                <div class="is-size-7">
                  Youngbin Choi, <b>Seunghyuk Cho</b>, Minjong Lee, MoonJeong
                  Park, Yesong Ko, Jungseul Ok, Dongwoo Kim
                </div>
                <b-image
                  style="margin: 5px auto 0 auto"
                  :src="require('../assets/copl.png')"
                  class="nocrop"
                  responsive
                  ratio="16by9"
                ></b-image>
              </div>
            </div>
          </div>
        </div>
        <div class="column">
          <div class="card has-text-left">
            <header class="card-header">
              <div class="card-header-title">
                <p style="font-size: 80%">
                  Feature Unlearning for Pre-trained GANs and VAEs
                  <span style="color: #a21caf"> [AAAI `24] </span>
                </p>
              </div>
              <button class="card-header-icon" style="padding-left: 0px">
                <span class="icon">
                  <a
                    class="fas fa-external-link-alt"
                    href="https://arxiv.org/abs/2303.05699"
                  />
                </span>
              </button>
            </header>
            <div class="card-content">
              <div class="content">
                <div class="is-size-7">
                  Saemi Moon, <b>Seunghyuk Cho</b>, Dongwoo Kim
                </div>
                <b-image
                  style="margin: 5px auto 0 auto"
                  :src="require('../assets/unlearning.png')"
                  class="nocrop"
                  responsive
                  ratio="16by9"
                ></b-image>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="columns">
        <div class="column">
          <div class="card has-text-left">
            <header class="card-header">
              <div class="card-header-title">
                <p style="font-size: 80%">
                  Hyperbolic VAE via Latent Gaussian Distributions
                  <span style="color: #4338ca"> [NeurIPS '23] </span>
                </p>
              </div>
              <button class="card-header-icon" style="padding-left: 0px">
                <span class="icon">
                  <a
                    class="fas fa-external-link-alt"
                    href="https://arxiv.org/abs/2209.15217v3"
                  />
                </span>
              </button>
            </header>
            <div class="card-content">
              <div class="content">
                <div class="is-size-7">
                  <b>Seunghyuk Cho</b>, Juyong Lee, Dongwoo Kim
                </div>
                <b-image
                  style="margin: 5px auto 0 auto"
                  :src="require('../assets/gm-vae.png')"
                  class="nocrop"
                  responsive
                  ratio="16by9"
                ></b-image>
              </div>
            </div>
          </div>
        </div>
        <div class="column">
          <div class="card has-text-left">
            <header class="card-header">
              <div class="card-header-title">
                <p style="font-size: 80%">
                  A Rotated Hyperbolic Wrapped Normal Distribution for
                  Hierarchical Representation Learning
                  <span style="color: #4338ca"> [NeurIPS '22] </span>
                </p>
              </div>
              <button class="card-header-icon" style="padding-left: 0px">
                <span class="icon">
                  <a
                    class="fas fa-external-link-alt"
                    href="https://arxiv.org/abs/2205.13371"
                  />
                </span>
              </button>
            </header>
            <div class="card-content">
              <div class="content">
                <div class="is-size-7">
                  <b>Seunghyuk Cho</b>, Juyong Lee, Jaesik Park, Dongwoo Kim
                </div>
                <b-image
                  style="margin: 5px auto 0 auto"
                  :src="require('../assets/rown.png')"
                  class="nocrop"
                  responsive
                  ratio="16by9"
                ></b-image>
              </div>
            </div>
          </div>
        </div>
        <div class="column">
          <div class="card has-text-left">
            <header class="card-header">
              <div class="card-header-title">
                <p style="font-size: 80%">
                  Robust Deep Learning from Crowds with Belief Propagation
                  <span style="color: #c2410c"> [AISTATS '22] </span>
                </p>
              </div>
              <button class="card-header-icon" style="padding-left: 0px">
                <span class="icon">
                  <a
                    class="fas fa-external-link-alt"
                    href="https://proceedings.mlr.press/v151/kim22a.html"
                  />
                </span>
              </button>
            </header>
            <div class="card-content">
              <div class="content">
                <div class="is-size-7">
                  Hoyoung Kim<sup>*</sup>, <b>Seunghyuk Cho</b><sup>*</sup>,
                  Dongwoo Kim, Jungseul Ok
                </div>
                <b-image
                  style="margin: 5px auto 0 auto"
                  :src="require('../assets/deepbp.png')"
                  class="nocrop"
                  responsive
                  ratio="16by9"
                ></b-image>
              </div>
            </div>
          </div>
        </div>
      </div>
      <h1 class="title has-text-left">Workshop Papers</h1>
      <div class="columns">
        <div class="column">
          <div class="card has-text-left">
            <header class="card-header">
              <div class="card-header-title">
                <p style="font-size: 80%">
                  Curve Your Attention: Mixed-Curvature Transformers for Graph
                  Representation Learning
                  <span style="color: #be123c"> [ICML TAGML '23] </span>
                </p>
              </div>
              <button class="card-header-icon" style="padding-left: 0px">
                <span class="icon">
                  <a
                    class="fas fa-external-link-alt"
                    href="https://arxiv.org/abs/2309.04082"
                  />
                </span>
              </button>
            </header>
            <div class="card-content">
              <div class="content">
                <div class="is-size-7">
                  Sungjun Cho, <b>Seunghyuk Cho</b>, Sungwoo Park, Hankook Lee,
                  Honglak Lee, Moontae Lee
                </div>
                <b-image
                  style="margin: 5px auto 0 auto"
                  :src="require('../assets/fpst.png')"
                  class="nocrop"
                  responsive
                  ratio="16by9"
                ></b-image>
              </div>
            </div>
          </div>
        </div>
        <div class="column"></div>
        <div class="column"></div>
      </div>
      <h1 class="title has-text-left">Pre-prints</h1>
      <div class="columns">
        <div class="column">
          <div class="card has-text-left">
            <header class="card-header">
              <div class="card-header-title">
                <p style="font-size: 80%">
                  Plane Geometry Problem Solving with Multi-modal Reasoning: A
                  Survey
                </p>
              </div>
              <button class="card-header-icon" style="padding-left: 0px">
                <span class="icon">
                  <a
                    class="fas fa-external-link-alt"
                    href="https://arxiv.org/abs/2505.14340"
                  />
                </span>
              </button>
            </header>
            <div class="card-content">
              <div class="content">
                <div class="is-size-7">
                  <b>Seunghyuk Cho</b>, Zhenyue Qin, Yang Liu, Youngbin Choi,
                  Seungbeom Lee, Dongwoo Kim
                </div>
                <b-image
                  style="margin: 5px auto 0 auto"
                  :src="require('../assets/pgps_survey.png')"
                  class="nocrop"
                  responsive
                  ratio="16by9"
                ></b-image>
              </div>
            </div>
          </div>
        </div>
        <div class="column">
          <div class="card has-text-left">
            <header class="card-header">
              <div class="card-header-title">
                <p style="font-size: 80%">
                  Roughly Collected Dataset for Contact Force Sensing Catheter
                </p>
              </div>
              <button class="card-header-icon" style="padding-left: 0px">
                <span class="icon">
                  <a
                    class="fas fa-external-link-alt"
                    href="https://arxiv.org/abs/2102.01932"
                  />
                </span>
              </button>
            </header>
            <div class="card-content">
              <div class="content">
                <div class="is-size-7">
                  <b>Seunghyuk Cho</b><sup>*</sup>, Minsoo Koo<sup>*</sup>,
                  Dongwoo Kim, Juyoung Lee, Yeonwoo Jung, Kibyung Nam, Changmo
                  Hwang
                </div>
                <b-image
                  style="margin: 5px auto 0 auto"
                  :src="require('../assets/catheter.png')"
                  class="nocrop"
                  responsive
                  ratio="16by9"
                ></b-image>
              </div>
            </div>
          </div>
        </div>
        <div class="column"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Pub",
};
</script>

<style scoped>
.nocrop ::v-deep img.has-ratio {
  object-fit: contain; /* 핵심 */
  object-position: center;
  width: 100%;
  height: 100%;
}
</style>
