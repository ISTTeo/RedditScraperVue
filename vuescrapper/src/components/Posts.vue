<template>
    <div>

        <h1>POSTS</h1>
    <div v-bind:key="post.id" v-for="post in posts"> 
        {{post.title}}

    </div>
    </div>
</template>

<script>
export default {
    name: "Posts",
    props: ["posts"]
}
</script>

<style scoped>

</style>
