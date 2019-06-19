<template>
  
    <div>
        <p>
          <a class="btn btn-primary" data-toggle="collapse" href="#{{post.id}}" role="button" aria-expanded="false" aria-controls="collapseExample">
            {{post.title}}
          </a>
            
        </p>
        <div class="collapse" id="#{{post.id}}">
          <div v-html="post.content" class="card card-body"></div>
        </div>
    </div>
    
</template>

<script>
import axios from 'axios'

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
  axios.get( "https://api.rss2json.com/v1/api.json?rss_url=" + "http://www.reddit.com/r/" + "entrepreneur" + "/comments/" + this.post.id + "/.xml?limit=" + "5")
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
