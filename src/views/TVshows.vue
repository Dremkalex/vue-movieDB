<template lang="html">
  <div class="tv-shows">
    <h2 class="page-title">Popular TV shows</h2>
    <MovieCard v-for="movieItem in movieList"
      :title="movieItem.title"
      :posterPath="movieItem.posterPath"
      :overview="movieItem.overview"
      :id="movieItem.id"
      :apiUrl="apiUrl">
    </MovieCard>
  </div>
</template>

<script>
  import MovieCard from '../components/MovieCard.vue';

  const baseUrlImg = 'https://image.tmdb.org/t/p/w185';
  const apiUrl = 'https://api.themoviedb.org/3/tv/popular?language=en-US&page=1&';
  const apiKey = 'api_key=624f7df45767c9a0ff7b6bf3107182d5';

  export default {
    name: 'TVshows',
    data() {
      return {
        apiUrl: 'https://api.themoviedb.org/3/tv/',
        results: [],
        movieList: []
      }
    },
    components: {
      MovieCard
    },
    created: function() {
      fetch(`${apiUrl}${apiKey}`)
        .then(response => {
          if(response.ok) return response.json();
        })
        .then(response => {
          this.results = response.results;
          this.movieList = this.results.map(
            function(movieItem) {
              let newMovieItem = {};
              newMovieItem.title = movieItem.name;
              newMovieItem.posterPath = `${baseUrlImg}${movieItem.poster_path}`;
              newMovieItem.overview = movieItem.overview;
              newMovieItem.id = movieItem.id;
              return newMovieItem;
            })
        })
        .catch(error => {console.error("Error: ", error);})
    }
  }
</script>

<style scoped media="screen">
 .tv-shows {
    width: 70vw;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 2rem;
  }

  .page-title {
    grid-column: 1 / 3;
    grid-row: 1 / 2;
    margin-top: 1rem;
  }
</style>
