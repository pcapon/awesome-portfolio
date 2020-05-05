<template>
  <div class="home" v-on:scroll="handleScroll">
    <div class="cover pannel">
      <div class="home-message">
        <span class="hello">Hello !</span>
        <span class="name">I'm Pierre Capon.</span>
        <span class="bio simple-text">
          I'm a web developer, music producer, technology enthusiast, web design
          enthusiast.
        </span>
      </div>
      <img
        class="profile-picture"
        alt="profile picture"
        src="../assets/pp.png"
      />
    </div>
    <bio class="pannel" />
  </div>
</template>

<script>
import Bio from "./Bio.vue";

export default {
  components: {
    Bio
  },
  name: "Home",
  methods: {
    handleScroll: function(event) {
      console.log(event);
    }
  }
};
</script>

<style lang="scss">
@import "../style/var.scss";
@import "../style/fonts.scss";
@import "../style/animation.scss";

.home {
  height: calc(100vh - 60px);
  padding: 0 20px;
  background-color: #fff3f7;
  overflow-y: scroll;
  overflow-x: hidden;
  .cover {
    position: relative;
    width: 100%;
    height: 100vh;

    .home-message {
      position: relative;
      z-index: 1;
      text-align: left;
      font-family: Helvetica, sans-serif;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      .hello {
        color: $color-grey;
        font-size: 40px;
        font-weight: 600;
        animation: upAndDown 2s infinite 0s ease-in-out;
      }
      .name {
        color: $color-blue;
        font-size: 80px;
        font-weight: 900;
      }
      .bio {
        padding-top: 30px;
      }
    }
    .profile-picture {
      position: absolute;
      max-height: 200px;
      border-radius: 50%;
      right: 0px;
      top: 50px;
    }
  }
}
</style>
