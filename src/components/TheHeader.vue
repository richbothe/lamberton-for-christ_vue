<template>
  <b-navbar toggleable="lg" type="light" fixed="top">
    <div class="container">
      <b-navbar-brand href="/">
        <img class="img-fluid" src="@/assets/img/logo-icon-reverse.png">
      </b-navbar-brand>

      <b-navbar-toggle target="nav-collapse">MENU</b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-item :to="{ name: 'what-we-believe' }">What We Believe</b-nav-item>
          <b-nav-item :to="{ name: 'our-pastor' }">Our Pastor</b-nav-item>
          <b-nav-item :to="{ name: 'schedule' }">Schedule</b-nav-item>
          <b-nav-item :to="{ name: 'about-us' }">About Us</b-nav-item>
          <b-nav-item :to="{ name: 'swat-team' }">S.W.A.T. Team</b-nav-item>
          <b-nav-item :to="{ name: 'contact-us' }">Contact Us</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </div>
  </b-navbar>
</template>

<script>
export default {
	name: 'TheHeader'
}
</script>

<style lang="scss" scoped>
.navbar {
	background-color: #462556;
	height: 61px;

	img {
		max-width: 45px;
	}

	.navbar-nav .nav-link {
		color: #c8afd1;
		font-weight: $font-weight-bold;

		@include media-breakpoint-up(lg) {
			padding: 1.15rem 1.5rem;
		}

		@include media-breakpoint-up(xl) {
			padding-right: 2.5rem;
			padding-left: 2.5rem;
		}
	}

	.navbar-nav .router-link-active {
		background-color: $aqua;
		color: $white;
	}
}

.navbar-light {
	.navbar-toggler {
		border-color: $white;
		color: $white;
		font-size: 10px;
		padding: 0.75rem;
	}

	.navbar-toggler-icon {
		background-image: none;
	}

	.navbar-nav .nav-link:hover {
		background-color: $aqua;
		color: $white;
	}
}
</style>