<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <router-view/>
  </div>

</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0px;
  background-image: url("./assets/blur_1.jpg");
  /*opacity : 0.2;*/
  height: 120vh;
  /*background-size: 100%;*/
  /*background-size:     cover;*/
  /*background-size: 100% 100%;*/
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center;
}
h1 {
  color: black;
}
</style>
