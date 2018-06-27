<template lang="html">
  <header class="header">
    <ul class="menu">
      <router-link to="/" tag="li" class="menu_item logo"><img src="../assets/logo.svg"></router-link>
      <router-link v-for="item in items" :to="item.path" tag="li" class="menu_item">{{item.text}}</router-link>
      <li @click="show = !show" class="menu_item search"><img src="../assets/search.svg"></li>
    </ul>
    <transition name="slide">
      <SearchField v-show="show"></SearchField>
    </transition>
    <!-- <div class="header_search" v-show="isHidden">
        <input
          v-model="searchValue"
          @keyup.enter="search"
          type="text"
          placeholder="Search">
        </input>
    </div> -->

  </header>
</template>

<script>
import SearchField from './SearchField.vue';

const baseUrlImg = 'https://image.tmdb.org/t/p/w185';
const apiUrl = 'https://api.themoviedb.org/3/search/multi?api_key=624f7df45767c9a0ff7b6bf3107182d5&language=en-US&page=1&include_adult=false&query=';

export default {
  name: "Header",

  data() {
    return {
      items: [
        //{text: 'Обзор', path: '/overview'},
        {text: 'Movies', path: '/popular-movie'},
        {text: 'TV shows', path: '/tv-shows'},
        //{text: 'Актеры', path: '/actors'}
      ],
      // searchValue: '',
      show: false
      // results: [],
      // movieList: []
    }
  },
  components: {
    SearchField
  }

  // methods: {
  //   search() {
  //     fetch(`${apiUrl}${this.searchValue}`)
  //     .then(response => {
  //       if(response.ok) return response.json();
  //     })
  //     .then(response => {
  //       this.results = response.results.filter(item => item.media_type === 'tv' || item.media_type === 'movie');
  //       console.log(this.results);
  //       this.movieList = this.results.map(
  //         function(movieItem) {
  //           let newMovieItem = {};
  //           newMovieItem.title = movieItem.title;
  //           newMovieItem.posterPath = `${baseUrlImg}${movieItem.poster_path}`;
  //           newMovieItem.overview = movieItem.overview;
  //           return newMovieItem;
  //         });
  //       this.$router.push({path: '/search-result'});
  //
  //     })
  //     .catch(error => {
  //       console.error("Error: ", error);
  //     })
  //   }
  // }
}
</script>

<style scoped>
  .header {
    background-color: #35478C;

  }
  .menu {
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 70vw;
    margin: 0 auto;
    padding: .75rem;
    padding-left: 0;
    color: #fff;
  }

  .menu_item {
    list-style-type: none;
    padding-right: .75rem;
    cursor: pointer;
  }

  .logo {
    width: 5rem;
  }

  .slide-enter-active, .slide-leave-active {
    transition: all .3s cubic-bezier(.65, .05, .36, 1);
  }

  .slide-enter, .slide-leave-active {
    top: -100%;
  }

  /* .header_search input{
    padding: 1rem;
    width: 100%;
  } */
</style>
