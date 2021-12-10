<template>
  <section class="hero is-fullheight-with-navbar">
    <div class="hero-body">
      <div class="container">
        <b-image
          :src="require('../assets/selfie.jpeg')"
          rounded="true"
          class="is-inline-block mb-6"
          style="width:30%"
        />
        <div class="has-text-left">
          <p class="title pb-2">
            Hello! My name is Seunghyuk Cho
          </p>
          <p class="subtitle">
            I'm a graduate student in <a href="https://ml.postech.ac.kr">POSTECH ML Lab</a>.<br/>
            I'm interested in crowdsourcing, variational inference, and generative models.<br/>
            You can see more details in my <a href="https://postechackr-my.sharepoint.com/:b:/g/personal/shhj1998_postech_ac_kr/EcKNl3iUXDpBkpVyi976KsAB5HH9eAstxlLX9ZDGVZMN7w?e=wem7Er">CV</a> and contact me at shhj1998@postech.ac.kr.
          </p>
          <div class="block">
            <a href="https://github.com/seunghyukcho" class="mr-2">
              <img :src="require('../assets/github.png')" width="48"/>
            </a>
            <a href="https://brunch.co.kr/@choseunghyek">
              <img :src="require('../assets/brunch.png')" width="48"/>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Home',
}
</script>

<style>
</style>
