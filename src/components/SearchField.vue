<template lang="html">
  <div class="search-field">
    <input
      v-model="searchValue"
      @keyup.enter="goToSearchResult"
      type="text"
      placeholder="Search">
    </input>
  </div>
</template>

<script>
export default {
  name: 'SearchField',
  data() {
    return {
      searchValue: ''
    }
  },
  methods: {
    goToSearchResult() {
      this.$router.push({name: 'SearchResult'})
      this.searchValue = searchValue;
    }
  }
}
</script>

<style scoped lang="css">

  .search-field input {
    padding: 1rem;
    width: 100%;
  }
</style>
