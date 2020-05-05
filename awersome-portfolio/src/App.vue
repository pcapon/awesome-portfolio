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
  font-family: Helvetica, sans-serif;
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
