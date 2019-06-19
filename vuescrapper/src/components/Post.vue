<template>
    <div>
        <h3>{{post.title}}</h3>
        <div v-html="post.content"></div>
    </div>
</template>

<script>
export default {
    name: "Post",
    props: ["post"],
    created() {
        this.postHTML = post.content;
    }
}

</script>


<style scoped>

</style>
