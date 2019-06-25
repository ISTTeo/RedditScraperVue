<template>
    
    <div>
        
        <Navbar/>
        <h1 v-if="comment">{{comment.title}}</h1>
        <div v-if="comment" v-html="comment.content"></div>
        <h1 v-if="!comment">Something bad happened, you shouldn't be here.</h1>

    </div>
    
</template>

<script>
import Navbar from "../components/Navbar"
export default {
    name: "Comment",
    props: ['comment'],
    components: {
        Navbar
    },
    data() {
        return {
            myComment: null,
        }
    },
    created: function() {
    }
}
</script>
