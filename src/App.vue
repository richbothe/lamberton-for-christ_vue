<template>
  <div id="app">
    <TheHeader/>
    <section id="mainContent">
      <router-view/>
    </section>
    <TheFooter/>
  </div>
</template>

<script>
import TheHeader from './components/TheHeader.vue'
import TheFooter from './components/TheFooter.vue'

export default {
	name: 'App',
	components: {
		TheHeader,
		TheFooter
	}
}
</script>

<style lang="scss">
@import './assets/scss/app.scss';
</style>
