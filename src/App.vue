<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link>|
      <router-link to="/what-we-believe">What We Believe</router-link>|
      <router-link to="/our-pastor">Our Pastor</router-link>|
      <router-link to="/schedule">Schedule</router-link>|
      <router-link to="/about-us">About Us</router-link>|
      <router-link to="/swat-team">S.W.A.T. Team</router-link>|
      <router-link to="/contact-us">Contact Us</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style lang="scss">
@import "./assets/scss/app.scss";

// #app {
//   font-family: "Avenir", Helvetica, Arial, sans-serif;
//   -webkit-font-smoothing: antialiased;
//   -moz-osx-font-smoothing: grayscale;
//   text-align: center;
//   color: #2c3e50;
// }
// #nav {
//   padding: 30px;
//   a {
//     font-weight: bold;
//     color: #2c3e50;
//     &.router-link-exact-active {
//       color: #42b983;
//     }
//   }
// }
</style>
