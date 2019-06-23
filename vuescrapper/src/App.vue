<template >

  
  <div id="app">
    <Header msg="Reddit's Top Scrapper"/>
    <SearchReddit v-on:search-reddit="searchReddit" />
    <Posts :key="subKey" v-bind:posts="posts"/>
  </div>
  <!-- <template v-else>
  <div id="app" >
    <Header msg="Reddit's Top Scrapper"/>
    <SearchReddit v-on:search-reddit="searchReddit" />
    <h1> Search some subreddit</h1>
  </div>
</template>  -->
</template>

/* TODO How to make this work so that whenever there has been a successful search */
/* it shows posts, otherwise shows message encouraging a search */





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
      subKey: 0,
      /* hasPosts: false */
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
        /* this.hasPosts = true; */
      } )
      .catch(err => {
        console.log(err)
        this.posts = [];
        this.result = null;
        /* this.hasPosts = false; */
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
