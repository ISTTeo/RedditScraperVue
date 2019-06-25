<template>
    <div id="nav">
        <ul>
            <li><a><router-link to="/">Home</router-link></a>|</li>
            <li><a><router-link to="/about">About</router-link></a></li>
            <li><a><router-link to="/subreddit">Search by /r/</router-link></a></li>
            <li><a><router-link to="/user">Search by /u/</router-link></a></li>

        </ul>
      
    </div>
</template>

<script>
export default {
    name: "Navbar"
}
</script>

<style>
    #nav ul {
        list-style-type: none;
        margin: 0;
        padding: 0;
        overflow: hidden;
        background-color: #333;
        height: 5em;
    }

    #nav li {
        float: left;
        font-weight: bold;
    }
    
    #nav li a {
        display: block;
        color: white;
        text-align: center;
        padding-right: 1em;
        padding-left: 1em;
        padding-top: 1em;
        padding-bottom: 1em;
        text-decoration: none;
    }

    #nav li a:hover {
        background-color: #111;
    }
</style>
