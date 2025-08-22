<template>
  <div>
    <section class="hero is-medium custom-pub-hero mb-6">
      <div class="hero-body">
        <p class="title">Publications</p>
      </div>
    </section>

    <div class="container px-5">
      <!-- Conference Papers -->
      <h1 class="title has-text-left">Conference Papers</h1>
      <div v-for="(chunk, rowIndex) in conferenceChunks" :key="`conf-row-${rowIndex}`" class="columns">
        <div v-for="pub in chunk" :key="pub.link" class="column">
          <div class="card has-text-left">
            <header class="card-header">
              <div class="card-header-title">
                <p style="font-size: 80%">
                  {{ pub.title }}
                  <span v-if="pub.venue" :style="{ color: getVenueColor(pub.venue) }"> [{{ pub.venue }}] </span>
                </p>
              </div>
              <button class="card-header-icon" style="padding-left: 0px">
                <span class="icon">
                  <a class="fas fa-external-link-alt" :href="pub.link" target="_blank" rel="noopener noreferrer"/>
                </span>
              </button>
            </header>
            <div class="card-content">
              <div class="content">
                <div class="is-size-7" v-html="pub.authors"></div>
                <figure class="image is-16by9">
                  <img
                    style="margin: 5px auto 0 auto"
                    :src="require(`../assets/${pub.image}`)"
                    class="nocrop"
                  >
                </figure>
              </div>
            </div>
          </div>
        </div>
        <!-- Fill empty columns to maintain layout -->
        <div v-for="i in (3 - chunk.length)" :key="`conf-fill-${i}`" class="column"></div>
      </div>

      <!-- Workshop Papers -->
      <h1 class="title has-text-left mt-5">Workshop Papers</h1>
      <div v-for="(chunk, rowIndex) in workshopChunks" :key="`work-row-${rowIndex}`" class="columns">
        <div v-for="pub in chunk" :key="pub.link" class="column">
          <div class="card has-text-left">
            <header class="card-header">
              <div class="card-header-title">
                <p style="font-size: 80%">
                  {{ pub.title }}
                  <span v-if="pub.venue" :style="{ color: getVenueColor(pub.venue) }"> [{{ pub.venue }}] </span>
                </p>
              </div>
              <button class="card-header-icon" style="padding-left: 0px">
                <span class="icon">
                  <a class="fas fa-external-link-alt" :href="pub.link" target="_blank" rel="noopener noreferrer"/>
                </span>
              </button>
            </header>
            <div class="card-content">
              <div class="content">
                <div class="is-size-7" v-html="pub.authors"></div>
                <figure class="image is-16by9">
                  <img
                    style="margin: 5px auto 0 auto"
                    :src="require(`../assets/${pub.image}`)"
                    class="nocrop"
                  >
                </figure>
              </div>
            </div>
          </div>
        </div>
        <div v-for="i in (3 - chunk.length)" :key="`work-fill-${i}`" class="column"></div>
      </div>

      <!-- Pre-prints -->
      <h1 class="title has-text-left mt-5">Pre-prints</h1>
      <div v-for="(chunk, rowIndex) in preprintChunks" :key="`pre-row-${rowIndex}`" class="columns">
        <div v-for="pub in chunk" :key="pub.link" class="column">
          <div class="card has-text-left">
            <header class="card-header">
              <div class="card-header-title">
                <p style="font-size: 80%">
                  {{ pub.title }}
                </p>
              </div>
              <button class="card-header-icon" style="padding-left: 0px">
                <span class="icon">
                  <a class="fas fa-external-link-alt" :href="pub.link" target="_blank" rel="noopener noreferrer"/>
                </span>
              </button>
            </header>
            <div class="card-content">
              <div class="content">
                <div class="is-size-7" v-html="pub.authors"></div>
                <figure class="image is-16by9">
                  <img
                    style="margin: 5px auto 0 auto"
                    :src="require(`../assets/${pub.image}`)"
                    class="nocrop"
                  >
                </figure>
              </div>
            </div>
          </div>
        </div>
        <div v-for="i in (3 - chunk.length)" :key="`pre-fill-${i}`" class="column"></div>
      </div>

    </div>
  </div>
</template>

<script>
import publicationsData from '../data/publications.json';

export default {
  name: "PublicationList",
  data() {
    return {
      publications: publicationsData,
    };
  },
  computed: {
    conferenceChunks() {
      return this.chunkArray(this.publications.conference, 3);
    },
    workshopChunks() {
      return this.chunkArray(this.publications.workshop, 3);
    },
    preprintChunks() {
      return this.chunkArray(this.publications.preprint, 3);
    },
  },
  methods: {
    getVenueColor(venue) {
      if (!venue) return '#000';
      const venuePrefix = venue.split(' ')[0].toUpperCase();
      const colorMap = {
        EMNLP: '#0f766e',
        AAAI: '#a21caf',
        NEURIPS: '#4338ca',
        AISTATS: '#c2410c',
        ICML: '#be123c',
      };
      return colorMap[venuePrefix] || '#000';
    },
    chunkArray(array, size) {
      const chunks = [];
      for (let i = 0; i < array.length; i += size) {
        chunks.push(array.slice(i, i + size));
      }
      return chunks;
    }
  },
};
</script>

<style scoped>
.nocrop {
  object-fit: contain; /* 핵심 */
  object-position: center;
  width: 100%;
  height: 100%;
}
</style>
