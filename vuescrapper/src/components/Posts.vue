<template>
    <div>
        <div role="tablist" v-bind:key="post.id" v-for="post in posts">
            <Post v-bind:post="post" />
        </div>
    </div>
    <!-- <div role="tablist">
        <b-card no-body class="mb-1">
        <b-card-header header-tag="header" class="p-1" role="tab">
            <b-button block v-b-toggle="style" >Accordion 1</b-button>
        </b-card-header>
        <b-collapse  v-bind:id="style" visible  role="tabpanel">
            <b-card-body>
            <b-card-text>I start opened because <code>visible</code> is <code>true</code></b-card-text>
            <b-card-text></b-card-text>
            </b-card-body>
        </b-collapse>
        </b-card>

        <b-card no-body class="mb-1">
        <b-card-header header-tag="header" class="p-1" role="tab">
            <b-button block v-b-toggle.accordion-2 >Accordion 2</b-button>
        </b-card-header>
        <b-collapse id="accordion-2"  role="tabpanel">
            <b-card-body>
            <b-card-text></b-card-text>
            </b-card-body>
        </b-collapse>
        </b-card>

        <b-card no-body class="mb-1">
        <b-card-header header-tag="header" class="p-1" role="tab">
            <b-button block  v-b-toggle.accordion-3 >Accordion 3</b-button>
        </b-card-header>
        <b-collapse id="accordion-3"  role="tabpanel">
            <b-card-body>
            <b-card-text></b-card-text>
            </b-card-body>
        </b-collapse>
        </b-card>
    </div> -->
    <!-- <div>

        <h1>POSTS</h1>
        <div v-bind:key="post.id" v-for="post in posts"> 
            <Post v-bind:post="post" />

        </div>
    </div> -->
</template>

<script>

import Post from './Post.vue'

export default {
    name: "Posts",
    components: {
        Post
    },
    props: ["posts"],
    /* data() {
      return {
        style: "accordion-1"
      }
    }, */
}
</script>

<style scoped>

</style>
