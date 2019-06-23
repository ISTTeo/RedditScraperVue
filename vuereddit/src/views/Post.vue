<template>
    
    <div>
        <h1>DEFAULT POST TO DEBUG</h1>
        <Navbar />
        <h1 v-if="post">{{post.title}}</h1>
        <div v-if="post" v-html="post.content"></div>

    </div>
    
</template>

<script>
import Navbar from "../components/Navbar"
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
    }
}
</script>
