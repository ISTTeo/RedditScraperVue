<template>
    <div>
        <div v-bind:key="post.id" v-for="post in posts"> 
            <h3>{{post.title}}</h3>
        </div>
    </div>
</template>

<script>
export default {
    name: "Posts",
    components: {

    },
    props: ["posts"]
}
</script>

