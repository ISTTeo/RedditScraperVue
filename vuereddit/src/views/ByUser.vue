<template>
    <div>
        <Navbar />
        <h1>Search by /u/ </h1>
        <SearchUser v-on:search-user="searchUser" />
        <Comments v-if="type == 'comments'" :key="subKey1" v-bind:comments="comments" />
        <Posts v-if="type == 'posts'" :key="subKey2" v-bind:posts="posts" />
        <h2 id="error"></h2>
    </div>

</template>

<script>
import Navbar from "../components/Navbar"
import SearchUser from '../components/SearchUser'
import Posts from '../components/Posts'
import Comments from '../components/Comments'

import axios from 'axios'
export default {
    name:"ByUser",
    components: {
        Navbar,
        SearchUser,
        Posts,
        Comments
    },
    data() {
        return {
            posts: [],
            comments: [],
            subKey1: 0,
            subKey2: 0,
            type: null
        }
    },
    methods: {
        searchUser(u,time,type) {
            this.type = type;
            
            

            /* https://www.reddit.com/user/" + INSERTUSER + "/" + INSERTTYPE + "/.rss?sort=top&t=: + INSERTTIME */
            var url = "https://api.rss2json.com/v1/api.json?rss_url=" + "https://www.reddit.com/user/" + u + "/" + type + "/.rss?sort=top&t=" + time;
            console.log(url);
            axios.get(url)
                .then(res => {
                    if(type=="comments") {
                        this.subKey1 += 1;
                        this.comments = res.data.items;
                    } else {
                        console.log(res.data.items);
                        this.subKey2 += 1;
                        this.posts = res.data.items;
                    }
                    
                    document.getElementById("error").innerHTML = "Request Successful";

                })
                .catch(err => {
                    this.posts = [];
                    this.comments = [];
                    document.getElementById("error").innerHTML = err.message;
                 });
                
        }
    }
}
</script>

<style scoped>

</style>

