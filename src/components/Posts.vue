<template>
    <div>
        <div v-bind:key="post.id" v-for="post in posts"> 
            <PostPreview v-bind:post="post"/>
        </div>
    </div>
</template>

<script>
import PostPreview from "./PostPreview"
export default {
    name: "Posts",
    components: {
        PostPreview
    },
    props: ["posts"]
}
</script>

