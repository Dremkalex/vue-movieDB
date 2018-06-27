<template lang="html">
  <div class="search-result">
    <h2 class="page-title">Результаты поиска</h2>
    <MovieCard v-for="movieItem in movieList"
      :title="movieItem.title"
      :posterPath="movieItem.posterPath"
      :overview="movieItem.overview">
    </MovieCard>
  </div>
</template>

<script>
  import MovieCard from '../components/MovieCard.vue';

  export default {
    name: 'SearchResult',
    props: ['searchValue'],
    components: {
      MovieCard
    }
  }
</script>

<style scoped lang="css">
</style>
