<template lang="html">
  <div id="app">
    <Header></Header>

    <router-view/>
  </div>

</template>

<script>
  import Header from './components/Header.vue'

  export default {
    name: 'app',
    
    components: {
      Header
    }
  };
</script>

<style>

  *{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    background-color: #F7F4ED;
    font-family: 'Source Sans Pro', 'Arial', sans-serif;
  }

</style>
