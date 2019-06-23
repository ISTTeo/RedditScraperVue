<template>
  <div class="home">

    <!--Main Body Content-->
    <article class="container">
      <h1>Reddit<br> Learning Machine</h1>
      <p> </p>
    </article>

    <div class="box" style="position:absolute; left:45%; top: 35%;  ">
      <router-link to="/about">About</router-link>
    </div>
    
    <div class="box" style="position:absolute; left:45%"><router-link to="/subreddit">Search by /r/</router-link></div>
    
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'home',
  components: {
    
  },
  methods: {
    
  },
  data() {
    return {

}
  }
}
</script>
<style scoped>

  .box {
    padding: 20px;
    border: 2px solid black;
    width: 100px;
    font-size: 150%;
    background-color: black;
    color: white;
  }
  .home {
    position: relative;
    background: url('http://thecodeplayer.com/u/m/b1.png') no-repeat center center fixed;
    background-size: cover;
    min-width: 500px;
    min-height: 200px;
    color: #fff;
    font-family: 'Montserrat';
    height:100vmax;
  }

  h1 {
    font-size: 60px;
    text-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
    text-transform: uppercase;
    font-size: 120px;
    letter-spacing:5px;
    padding-top:200px;
        margin-block-start: 0em;
    margin-block-end: 0em;
  }

  article p {
    padding-bottom: 15px;
    text-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  }

  article a {
    color: #fff;
    text-decoration: none;
    opacity: .2;
    font-size: 12px;
  }

  article a:hover {
    opacity: .8;
  }

</style>
