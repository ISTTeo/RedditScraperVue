<template>
    <div>
        <form @submit="searchReddit">
            <input type="text" v-model="subreddit" name="subreddit" placeholder="/r/...">
            <input type="submit" value="Search">
        </form>
    </div>
</template>


<script>
export default {
    name: "SearchReddit",
    data() {
        return {
            subreddit: ''
        }
    },
    methods: {
        searchReddit(e) {
            e.preventDefault();
            this.$emit('search-reddit', this.subreddit);
            this.subreddit = '';
        }
    }
}
</script>

<style scoped>

</style>

