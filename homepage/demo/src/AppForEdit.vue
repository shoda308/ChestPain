<template>
  <div id="app">
    <div class="header">
#ifdef TOKAI
      <img class="img" src="./assets/logo_tokai.png">
#else
      <img class="img" src="./assets/logo_edit_final.png">
#endif
      <p class="title">近畿大学病院オンライン問診票</p>
    </div>
    <div id="mount-point"></div>

    <div class="content">
      <router-view></router-view>
    </div>
    <!-- <div class="footer">
#ifdef TOKAI
      <h2>東海大学医学部附属病院</h2>
#else
      <h2>近畿大学病院</h2>
#endif
        <ul>
          <li><a href="./" target="_self">最初に戻る</a></li>
        </ul>
      <br>
      <br>
    </div> -->
  </div>
</template>
<script>
export default {
  name: 'app'
}

</script>

<style>
html {
  height: 100%;
}
body{
  height: 100%;
  margin: 0;
  background-color: silver;
  text-align: center;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  display: block;
  color: #2c3e50;
  background-color: white;
  width: 80%;
  margin: 0 auto;
  min-width: 600px;
  margin: 0 auto;
  height: 180%;
}
.header {
  display: block;
  .img {
    display: inline-block;
    width: 3%;
    left: 20%;
    display: inline-block;
  }
  .title{
    display: inline-block;
    width: 40%;
    font-size:2rem;
    span{
      font-size: 2.5rem;
      text-shadow: 1px 1px 3px #000;
    }
  }
}
.footer{
  display: block;
  position: absolute;
  bottom: 0%;
  width: 80%;
  min-width: 600px;
  h1, h2 {
    font-weight: normal;
  }
  ul {
    list-style-type: none;
    padding: 0;
  }
  li {
    display: inline-block;
    margin: 0 10px;
  }
  a {
    color: #42b983;
  }
}
</style>
