<template>
  <section class="hero is-fullheight-with-navbar">
    <div class="hero-body">
      <div class="container">
        <b-image
          :src="require('../assets/selfie.jpeg')"
          rounded="true"
          class="is-inline-block mb-6"
          style="width: 300px"
        />
        <div class="has-text-left px-2">
          <div class="title pb-2 is-inline-block">
            <div class="is-inline-block typewriter is-size-5-mobile">
              Hello! My name is Seunghyuk Cho
            </div>
          </div>
          <div class="subtitle is-size-6-mobile">
            I'm a graduate student in
            <a href="https://ml.postech.ac.kr">POSTECH ML Lab</a> who is
            supervised by
            <a href="http://dongwookim-ml.github.io">Dongwoo Kim</a>.<br />
            My research interests lie in training embedding models, with a focus
            on (i) efficient embedding models, (ii) embeddings in non-Euclidean
            spaces, and (iii) robustness across multiple domains. You can see
            more details in my
            <a
              href="https://postechackr-my.sharepoint.com/:b:/g/personal/shhj1998_postech_ac_kr/EdNe4XD_2FdKsVMc1ogMc70Blek2sU98fQqI1Cvry7ytug?e=kW0PHM"
              >CV</a
            >
            and contact me at shhj1998@postech.ac.kr.
          </div>
          <div class="block">
            <a href="https://github.com/seunghyukcho" class="mr-2">
              <img :src="require('../assets/github.png')" width="48" />
            </a>
            <a
              href="https://scholar.google.com/citations?user=4OOM9_cAAAAJ&hl=ko"
              class="mr-2"
            >
              <img :src="require('../assets/google_scholar.svg')" width="48" />
            </a>
            <a href="https://www.linkedin.com/in/4stack/" class="mr-2">
              <img :src="require('../assets/linkedin.svg')" width="48" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Home",
};
</script>

<style>
.typewriter {
  overflow: hidden;
  border-right: 0.15em solid orange;
  white-space: nowrap;
  margin: 0 auto;
  animation: typing 2.5s steps(40, end), blink-caret 0.75s step-end;
}

@keyframes typing {
  from {
    width: 0;
  }
  to {
    width: 100%;
  }
}
</style>
