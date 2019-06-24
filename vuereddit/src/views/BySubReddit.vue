<template>
    <div>
        <Navbar />
        <h1>Search by /r/ </h1>
        <SearchSubReddit v-on:search-reddit="searchSubReddit" />    
        <Posts :key="subKey" v-bind:posts="posts" />
        <h2 id="error"></h2>
    </div>
</template>

<script>
import SearchSubReddit from '../components/SearchSubReddit.vue';
import Posts from "../components/Posts"
import Navbar from "../components/Navbar"
import axios from 'axios';
export default {
    name: "BySubReddit", 
    components: {
        SearchSubReddit,
        Posts,
        Navbar
    },
    data() {
        return {
            posts: [],
            result: null,
            subKey: 0
        }
    },
    methods: {
        searchSubReddit(sub,time) {
            console.log("https://api.rss2json.com/v1/api.json?rss_url=" + "https://www.reddit.com/r/" + sub + "/top/.rss?t=" + time)
            axios.get("https://api.rss2json.com/v1/api.json?rss_url=" + "https://www.reddit.com/r/" + sub + "/top/.rss?t=" + time)
                .then(res => {
                    this.result = res;
                    this.posts = res.data.items;
                    document.getElementById("error").innerHTML = "Request Successful";

                })
                .catch(err => {
                    console.log(err);
                    this.posts = [];
                    this.result = null;
                    document.getElementById("error").innerHTML = err.message;
                });
                this.subKey += 1;
        }
    }
}
</script>
