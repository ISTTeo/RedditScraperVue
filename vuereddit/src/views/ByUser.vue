<template>
    <div>
        <Navbar />
        <h1>Search by /u/ </h1>
        <SearchUser v-on:search-user="searchUser" />
    </div>

</template>

<script>
import Navbar from "../components/Navbar"
import SearchUser from '../components/SearchUser'
export default {
    name:"ByUser",
    components: {
        Navbar,
        SearchUser
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
            console.log("/u/" + u + "/" + time + "/" + type)
            /* https://www.reddit.com/user/" + INSERTUSER + "/" + INSERTTYPE + "/.rss?sort=top&t=: + INSERTTIME */
        }
    }
}
</script>

<style scoped>

</style>

