<template lang="html">
  <div class="movie-card">
    <div class="movie-card_img">
      <img :src="posterPath" :alt="title">
    </div>
    <!-- <div class="movie-card_info"> -->
      <h3 class="movie-card_title">{{title}}</h3>
      <p class="movie-card_short-overview">{{shortOverview}}</p>
      <p class="movie-card_more-info">
        <MovieCardPopup :id="id" :apiUrl="apiUrl"></MovieCardPopup>
      </p>
    <!-- </div> -->
  </div>
</template>

<script>
  import MovieCardPopup from './MovieCardPopup.vue'

  export default {
  name: 'MovieCard',
  props: ['title', 'posterPath', 'overview', 'id', 'apiUrl'],

  components: {
    MovieCardPopup
  },

  computed: {
    shortOverview: function() {
      if(this.overview.length > 200) {
        return this.overview.slice(0, 201) + '...';
      }
      return this.overview;
    }
  }
}

</script>

<style scoped lang="css">
  .movie-card {
    display: grid;
    grid-template-columns: 185px 1fr;
    box-shadow: 0 2px 2px 0 rgba(53, 71, 140, .5);
    background-color: #fff;
    max-height: 278px;
  }

  .movie-card_img {
    grid-column: 1 / 2;
    grid-row: 1 / 7;
  }

  img {
    max-height: 278px;
  }

  .movie-card_title {
    grid-column: 2 / 3;
    grid-row: 1 / 3;
    padding: .75rem;
  }

  .movie-card_short-overview {
    grid-column: 2 / 3;
    grid-row: 3 / 6;
    padding: .75rem;
    overflow: hidden;
    text-overflow: ellipsis;
    color: #16193B;
    font-size: .8rem;
    max-height: 9rem;
  }

  .movie-card_more-info {
    grid-column: 2 / 3;
    grid-row: 6 / 7;
    padding: .75rem;
    text-align: right;
    font-size: .8rem;
  }

</style>
