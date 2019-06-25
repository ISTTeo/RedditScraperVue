<template>
    
    <div>
        
        <Navbar v-if="post" />
        <h1 v-if="post">{{post.title}}</h1>
        <div v-if="post" v-html="post.content"></div>
        <h1 v-if="!post">Something bad happened, you shouldn't be here.</h1>

    </div>
    
</template>

<script>
import Navbar from "../components/Navbar"
import axios from 'axios'

export default {
    name: "Post",
    props: ['post'],
    components: {
        Navbar
    },
    data() {
        return {
            myPost: null,
        }
    },
    created: function() {
        console.log()
        //example post
        //TODO Generalize this
        var url = "https://api.rss2json.com/v1/api.json?rss_url=" + "https://www.reddit.com/r/soccer/comments/c56bbs/tactics_tuesday_20190625/.rss?sort=top" 
        axios.get(url)
                .then(res => {
                    console.log(res)
                    //TODO render these comments
                })
                .catch(err => {
                    
                 });
    }
}
</script>
