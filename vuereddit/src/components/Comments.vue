<template>
    <div>
        <div v-bind:key="comment.id" v-for="comment in comments"> 
            <CommentPreview v-bind:comment="comment"/>
        </div>
    </div>
</template>

<script>
import CommentPreview from "./CommentPreview"
export default {
    name: "Comments",
    components: {
        CommentPreview
    },
    props: ["comments"]
}
</script>

