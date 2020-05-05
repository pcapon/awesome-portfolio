<template>
  <div class="home">
    <div class="cover">
      <div class="home-message">
        <span data-aos="fade-left" data-aos-duration="3000" class="hello"
          >Hello !</span
        >
        <span
          data-aos="fade-right"
          data-aos-duration="3000"
          data-aos-delay="100"
          class="name"
          >I'm Pierre Capon</span
        >
        <span data-aos="fade" data-aos-delay="2000" class="bio">
          I'm a web developer, music producer, technology enthusiast, web design
          enthusiast.
        </span>
      </div>
      <img
        data-aos="fade-left"
        data-aos-duration="3000"
          data-aos-delay="300"
        class="profile-picture"
        alt="profile picture"
        src="../assets/pp.png"
      />
    </div>
    <!-- <div class="description">
      Passionate about web development and curious about all that is done in
      terms of new technologies. I like to try new technologies to realize my
      various projects always to try to satisfy my desire of creation and my
      insatiable curiosity. I like to combine my passion for computer science
      with my other passions, such as electronic music production, design,
      cinema, photography by creating different projects around these universes.
    </div> -->
  </div>
</template>

<script>
// @ is an alias to /src
export default {
  name: "Home"
};
</script>

<style lang="scss">
@import "../style/var.scss";
@import "../style/fonts.scss";
@import "../style/animation.scss";

.home {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .cover {
    margin-top: 100px;
    position: relative;
    width: 1300px;
    .home-message {
      position: relative;
      z-index: 1;
      text-align: left;
      font-family: "yeseva";
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      .hello {
        color: $color-grey;
        font-size: 70px;
        font-weight: 600;
        animation: upAndDown 2s infinite 0s ease-in-out;
      }
      .name {
        color: $color-blue;
        font-size: 130px;
        font-weight: 900;
      }
      .bio {
        font-family: Helvetica, sans-serif;
        font-size: 20px;
      }
    }
    .profile-picture {
      position: absolute;
      max-height: 400px;
      border-radius: 50%;
      right: 0px;
      top: 50px;
    }
  }
}
</style>
