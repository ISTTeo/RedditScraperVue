<template>
  <div id="app">
    <Header msg="Reddit's Top Scrapper"/>
    <Posts v-bind:posts="posts"/>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Posts from './components/Posts.vue'

export default {
  name: 'app',
  components: {
    Header,
    Posts
  },
  data() {
    return {
      posts: [
        {
          author: "user1",
          title: "title1",
          content: "content1",
          link: "link1",
          id: "id1",
          pubDate: "pubDate1"
        },
        {
          author: "user2",
          title: "title2",
          content: "content2",
          link: "link2",
          id: "id2",
          pubDate: "pubDate2"
        },
        {
          author: "user3",
          title: "title3",
          content: "content3",
          link: "link3",
          id: "id3",
          pubDate: "pubDate3"
        },
        {
          author: "user4",
          title: "title4",
          content: "content4",
          link: "link4",
          id: "id4",
          pubDate: "pubDate4"
        }
        ,{
          author: "user5",
          title: "title5",
          content: "content5",
          link: "link5",
          id: "id5",
          pubDate: "pubDate5"
        }
      ]
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
