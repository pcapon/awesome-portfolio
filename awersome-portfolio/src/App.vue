<template>
  <div id="app">
    <nav-bar />
    <router-view />
  </div>
</template>

<script>
// @ is an alias to /src
import NavBar from "@/components/NavBar.vue";

export default {
  components: {
    NavBar
  }
};
</script>

<style lang="scss">
@import "./style/fonts.scss";
@import "./style/var.scss";

#app {
  height: 100%;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: #fff3f7;
  h1 {
    font-family: "yeseva";
  }
  a {
    font-weight: bold;
    color: #312cae;

    &.router-link-exact-active {
      color: #312cae;
    }
  }
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #312cae;

    &.router-link-exact-active {
      color: #312cae;
    }
  }
}
</style>
