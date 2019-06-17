<template>
    <div><h3>{{post.title}}</h3>
    <p>{{post.content}}</p></div>
</template>

<script>
export default {
    name: "Post",
    props: ["post"]
}

</script>


<style scoped>

</style>
