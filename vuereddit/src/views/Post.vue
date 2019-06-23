<template>
    <div>
        <Navbar />
        <h1>{{post.title}}</h1>
        <div v-html="post.content"></div>

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
