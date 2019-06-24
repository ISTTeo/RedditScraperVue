<template>
    <div>
        <Navbar />
        <h1>Search by /u/ </h1>
        <SearchUser v-on:search-user="searchUser" />
        <Comments :key="subKey" v-bind:comments="comments" />
        <!-- <Posts :key="subKey" v-bind:posts="posts" /> -->
        <h2 id="error"></h2>
    </div>

</template>

<script>
import Navbar from "../components/Navbar"
import SearchUser from '../components/SearchUser'
/* import Posts from '../components/Posts' */
import Comments from '../components/Comments'

import axios from 'axios'
export default {
    name:"ByUser",
    components: {
        Navbar,
        SearchUser,
        /* Posts, */
        Comments
    },
    data() {
        return {
            posts: [],
            comments: [],
            subKey: 0
        }
    },
    methods: {
        searchUser(u,time,type) {
            this.subKey += 1;
            /* https://www.reddit.com/user/" + INSERTUSER + "/" + INSERTTYPE + "/.rss?sort=top&t=: + INSERTTIME */
            var url = "https://api.rss2json.com/v1/api.json?rss_url=" + "https://www.reddit.com/user/" + u + "/" + type + "/.rss?sort=top&t=" + time;
            console.log(url);
            axios.get(url)
                .then(res => {
                    this.comments = res.data.items;
                    document.getElementById("error").innerHTML = "Request Successful";

                })
                .catch(err => {
                    this.posts = [];
                    document.getElementById("error").innerHTML = err.message;
                 });
                
        }
    }
}
</script>

<style scoped>

</style>

