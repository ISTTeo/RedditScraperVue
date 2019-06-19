<template>
  <div id="app">
    <Header msg="Reddit's Top Scrapper"/>
    <SearchReddit v-on:search-reddit="searchReddit" />
    <Posts :key="subKey" v-bind:posts="posts"/>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Posts from './components/Posts.vue'
import SearchReddit from './components/SearchReddit.vue'
import axios from 'axios'
export default {
  name: 'app',
  components: {
    Header,
    Posts,
    SearchReddit
  },
  data() {
    return {
      posts: [],
      result: null,
      subKey: 0
    }
  },
  /* created: function() {
  axios.get( "https://api.rss2json.com/v1/api.json?rss_url=" + "https://www.reddit.com/r/" + "entrepreneur" + "/top.xml?limit=" + "all")
    .then(res => {
      this.result = res;
      this.posts = res.data.items;
    } )
    .catch(err => console.log(err));
  }, */
  methods: {
    searchReddit(sub) {
      axios.get( "https://api.rss2json.com/v1/api.json?rss_url=" + "https://www.reddit.com/r/" + sub + "/top.xml?limit=" + "all")
      .then(res => {
        this.result = res;
        this.posts = res.data.items;
      } )
      .catch(err => {
        console.log(err)
        this.posts = [];
        this.result = null;
      }
      );
      this.subKey += 1;
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
