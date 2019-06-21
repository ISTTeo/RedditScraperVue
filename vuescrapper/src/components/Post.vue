<template>
  
      <div style="text-align:left;margin-left: 20px;">
        <h4>{{post.title}}</h4>
        <div v-if="cleanText.length > 200"> {{ cleanText.substring(0,200) }} <b>. . .</b></div>
        <div v-if="cleanText.length <= 200"> {{ cleanText }} </div>
        <hr>
      </div>
      <!-- <b-card no-body class="mb-1">
        <b-card-header v-b-toggle="post.guid" header-tag="header" class="p-1" role="tab">
            
            <a >{{post.title}}</a>
        </b-card-header>
        <b-collapse  v-bind:id="post.guid"  role="tabpanel">
            <b-card-body>
              <div v-if="cleanText.length > 200"> {{ cleanText.substring(0,200) }} <b>. . .</b></div>
              <div v-if="cleanText.length <= 200"> {{ cleanText }} </div>
            </b-card-body>
        </b-collapse>
      </b-card> -->
        
          
        <!-- <div class="collapse" id="#col">
          <div v-html="post.content" class="card card-body"></div>
        </div> -->
   
    
</template>

<script>
import axios from 'axios'

export default {
    name: "Post",
    props: ["post"],
    data() {
      return {
        comments: [],
        cleanText: null
      }
    },
    methods: {
      strip(html)
        {
          var tmp = document.createElement("DIV");
          tmp.innerHTML = html;
          return tmp.textContent || tmp.innerText || "";
        }
    },
  created: function() {
    /* axios.get( "https://api.rss2json.com/v1/api.json?rss_url=" + "http://www.reddit.com/r/" + "entrepreneur" + "/comments/" + this.post.id + "/.xml?limit=" + "5")
      .then(res => {
        this.result = res;
        this.comments = null;
        
      } )
      .catch(err => console.log(err)); */
    if(this.$props.post.content.indexOf("submitted")> 10) {
      this.cleanText = this.strip(this.$props.post.content);
      /* this.result = this.$props.post.content.substring(33,this.$props.post.content.indexOf(" </div>\n<!-- SC_ON -->")) */
    }
    
  }
}

</script>


<style scoped>

</style>
