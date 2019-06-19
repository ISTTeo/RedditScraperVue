<template>
    <div>

        <h1>POSTS</h1>
        <div v-bind:key="post.id" v-for="post in posts"> 
            <Post v-bind:post="post" />

        </div>
    </div>
</template>

<script>

import Post from './Post.vue'

export default {
    name: "Posts",
    components: {
        Post
    },
    props: ["posts"]
}
</script>

<style scoped>

</style>
