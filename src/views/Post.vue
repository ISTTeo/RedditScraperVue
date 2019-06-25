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
    }
}
</script>
