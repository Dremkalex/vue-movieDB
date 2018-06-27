<template lang="html">
  <div class="overview">
    <h2 class="page-title">{{tittlePage}}</h2>
    <MovieCard v-for="movieItem in movieList"
      :title="movieItem.title"
      :posterPath="movieItem.posterPath"
      :overview="movieItem.overview">
    </MovieCard>
  </div>
</template>

<script>
import MovieCard from '../components/MovieCard.vue'

const apiKey = 'api_key=624f7df45767c9a0ff7b6bf3107182d5';
const apiUrl = `https://api.themoviedb.org/3/movie/now_playing?${apiKey}&language=ru&page=1`;


export default {
  name: 'Overview',
  data() {
    return {
      tittlePage: 'New movies and TV shows',
      results: [],
      movieList: []
    }
  },
  components: {
    MovieCard
  },
  created: function() {
    fetch(apiUrl)
    .then(response => {
      if(response.ok) return response.json();
    })
    .then(response => {
      this.results = response.results;
      this.movieList = this.results.map(
        function(movieItem) {
          let newMovieItem = {};
          newMovieItem.title = movieItem.title;
          newMovieItem.posterPath = `${baseUrlImg}${movieItem.poster_path}`;
          newMovieItem.overview = movieItem.overview;
          return newMovieItem;
        })
    })
  }
}

</script>
