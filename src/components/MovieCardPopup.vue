<template lang="html">
  <div class="centerx">
    <vs-button @click="popupActivo=true"
                vs-color="primary"
                vs-type="border">
                Details</vs-button>
    <vs-popup class="holamundo"
              :vs-title="title"
              :vs-active="popupActivo"
              @vs-cancel="popupActivo=false">
      <img :src="posterPath" :alt="title">
      <p>{{overview}}</p>
    </vs-popup>
  </div>
</template>

<script>
  const apiKey='api_key=624f7df45767c9a0ff7b6bf3107182d5';
  const queryLang ='language=en-US';
  //const apiUrl='https://api.themoviedb.org/3/movie/';
  const baseUrlImg = 'https://image.tmdb.org/t/p/w300';

  export default {
    name: 'MovieCardPopup',
    props: ['id', 'apiUrl'],
    data(){
      return {
        popupActivo: false,
        title: '',
        overview: '',
        posterPath: ''
      }
    },
    created: function() {
      fetch(`${this.apiUrl}${this.id}?${apiKey}&${queryLang}`)
        .then(response => {
          if(response.ok) return response.json();
        })
        .then(response => {
          this.title = response.title || response.name;
          this.overview = response.overview;
          this.posterPath = `${baseUrlImg}${response.poster_path}`;
        })
        .catch(error => {console.error("Error: ", error);})
    }
  }
</script>

<style scoped>
  .holamundo {
    background-color: red;
  }
</style>
