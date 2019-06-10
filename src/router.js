import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import WhatweBelieve from './views/WhatweBelieve.vue'
import OurPastor from './views/OurPastor.vue'
import Schedule from './views/Schedule.vue'
import AboutUs from './views/AboutUs.vue'
import SwatTeam from './views/SwatTeam.vue'
import ContactUs from './views/ContactUs.vue'

Vue.use(Router)

export default new Router({
	mode: 'history',
	routes: [
		{
			path: '/',
			name: 'home',
			component: Home
		},
		{
			path: '/what-we-believe',
			name: 'what-we-believe',
			component: WhatweBelieve
		},
		{
			path: '/our-pastor',
			name: 'our-pastor',
			component: OurPastor
		},
		{
			path: '/schedule',
			name: 'schedule',
			component: Schedule
		},
		{
			path: '/about-us',
			name: 'about-us',
			component: AboutUs
		},
		{
			path: '/swat-team',
			name: 'swat-team',
			component: SwatTeam
		},
		{
			path: '/contact-us',
			name: 'contact-us',
			component: ContactUs
		}
	]
})
