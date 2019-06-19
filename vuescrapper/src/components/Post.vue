<template>
    <div>
        <h3>{{post.title}}</h3>
        <!-- <div v-html="post.content"></div> -->
    </div>
</template>

<script>
export default {
    name: "Post",
    props: ["post"],
    data() {
    return {
      comments: [],
      result: null,
    }
  },
  created: function() {
  axios.get( "https://api.rss2json.com/v1/api.json?rss_url=" + "http://www.reddit.com/r/" + "entrepreneur" + "/comments/" + post.id + "/.xml?limit=" + "5")
    .then(res => {
      this.result = res;
      this.comments = null;
    } )
    .catch(err => console.log(err));
  }
}

</script>


<style scoped>

</style>
