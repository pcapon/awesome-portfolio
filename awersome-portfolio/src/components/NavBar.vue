<template>
  <div class="navbar">
    <h1>Pierre Capon</h1>
    <div class="links">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "Navbar",
  props: {
    msg: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "../style/var.scss";

.navbar {
  background-color: $color-black;
  height: 60px;
  padding: 0 10vw;
  color: #fff3f7;
  display: flex;
  align-items: baseline;
  justify-content: space-between;
}
</style>
