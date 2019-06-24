<template>
    <div>
        <form @submit="searchUser">
            <input type="text" v-model="user" name="user" placeholder="/u/...">
            <input class="searchBtn" type="submit" value="Search">
        </form>
        <div style="margin-top:10px;">
            <input id="postsBtn" type="button" class="button buttonType active" v-on:click="setType('posts')" value="posts">
            <input id="commentsBtn" type="button" class="button buttonType" v-on:click="setType('comments')" value="comments">
            
        </div>
        <div style="margin-top:10px;">
            <input id="allBtn" type="button" class="button buttonTime active" v-on:click="setTime('all')" value="all">
            <input id="yearBtn" type="button" class="button buttonTime" v-on:click="setTime('year')" value="year">
            <input id="monthBtn" type="button" class="button buttonTime" v-on:click="setTime('month')" value="month">
            <input id="weekBtn" type="button" class="button buttonTime" v-on:click="setTime('week')" value="week">
            <input id="dayBtn" type="button" class="button buttonTime" v-on:click="setTime('day')" value="day">
        </div>
        <p> The API used for this doesn't handle too many request well, be patient!</p>
    </div>
</template>

<script>
export default {
    name: "SearchUser",
    data() {
        return {
            user: '',
            time: 'all',
            type: 'posts'
        }
    },
    methods: {
        searchUser(e) {
            e.preventDefault();
            this.$emit('search-user', this.user, this.time, this.type);
            this.user = '';
            this.setTime('all');
            this.setType('posts');
        },
        setTime: function(time) {
            this.time = time;
            

            var elems = document.querySelectorAll(".buttonTime");
            [].forEach.call(elems, function(el) {
                el.classList.remove("active");
            });

            var el = document.getElementById(time + "Btn");
            el.classList.add('active');
        }, 
        setType: function(type) {
            this.type = type;
            

            var elems = document.querySelectorAll(".buttonType");
            [].forEach.call(elems, function(el) {
                el.classList.remove("active");
            });

            var el = document.getElementById(type + "Btn");
            el.classList.add('active');
        }
    }
}
</script>

<style>
    input[type=text] {
        width: 30%;
        box-sizing: border-box;
        border: 2px solid #ccc;
        border-radius: 4px;
        font-size: 16px;
        background-color: white;
        background-image: url('../assets/searchicon.png');
        background-position: 10px 10px; 
        background-repeat: no-repeat;
        padding: 12px 20px 12px 40px;
        margin-right: 1em;
    }
    .searchBtn {
        padding: 5px 8px 5px 8px;
    }
    .button {
        margin: 5px;
        font-size: 150%;
        padding-top: 0.2em;
        padding-bottom: 0.2em;
        padding-right: 0.5em;
        padding-left: 0.5em;
        border-radius: 4px;
        background-color: #e7e7e7; 
        color: black;
    }
     .active {
        background-color: #555555;
        color: white;
    }
</style>

