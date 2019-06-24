<template>
    <div>
        <form @submit="searchReddit">
            <input type="text" v-model="subreddit" name="subreddit" placeholder="/r/...">
            <input type="submit" value="Search">
        </form>
        <div>
            <input id="allBtn" type="button" class="button active" v-on:click="setTime('all')" value="all">
            <input id="yearBtn" type="button" class="button" v-on:click="setTime('year')" value="year">
            <input id="monthBtn" type="button" class="button" v-on:click="setTime('month')" value="month">
            <input id="weekBtn" type="button" class="button" v-on:click="setTime('week')" value="week">
            <input id="dayBtn" type="button" class="button" v-on:click="setTime('day')" value="day">
        </div>
        <p> The API used for this doesn't handle too many request well, be patient!</p>
    </div>
</template>

<script>
export default {
    name: "SearchSubReddit",
    data() {
        return {
            subreddit: '',
            time: 'all'
        }
    },
    methods: {
        searchReddit(e) {
            e.preventDefault();
            this.$emit('search-reddit', this.subreddit, this.time);
            this.subreddit = '';
            this.setTime('all');
        },
        setTime: function(time) {
            this.time = time;
            

            var elems = document.querySelectorAll(".button");
            [].forEach.call(elems, function(el) {
                el.classList.remove("active");
            });

            var el = document.getElementById(time + "Btn");
            el.classList.add('active');
        }
    }
}
</script>

<style>
    .active {
        color: red;
    }
</style>

