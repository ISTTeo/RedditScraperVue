<template>
    <div>
        <Navbar />
        <h1>Posts</h1>
        <SearchSubReddit v-on:search-reddit="searchSubReddit" />    
        <Posts :key="subKey" v-bind:posts="posts" />
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
        searchSubReddit(sub) {
            console.log(sub)
            axios.get("https://api.rss2json.com/v1/api.json?rss_url=" + "https://www.reddit.com/r/" + sub + "/top.xml?limit=" + "all")
                .then(res => {
                    this.result = res;
                    this.posts = res.data.items;
                })
                .catch(err => {
                    console.log(err);
                    this.posts = [];
                    this.result = null;
                });
                this.subKey += 1;
        }
    }
}
</script>
