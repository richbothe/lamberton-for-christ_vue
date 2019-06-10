import Vue from 'vue'
import App from './App.vue'
import router from './router'
import upperFirst from 'lodash/upperFirst'
import camelCase from 'lodash/camelCase'

import BootstrapVue from 'bootstrap-vue'
Vue.use(BootstrapVue)

//##########################################################
//  Automatically Register Components Globally
//  Component names must start with "Base, App or V"
//  Component names must be either PascalCase or kebab-case.
//##########################################################
const requireComponent = require.context(
	'./components',
	false,
	/Base[A-Z]\w+\.(vue|js)$/
)

requireComponent.keys().forEach(fileName => {
	const componentConfig = requireComponent(fileName)

	const componentName = upperFirst(
		camelCase(fileName.replace(/^\.\/(.*)\.\w+$/, '$1'))
	)

	Vue.component(componentName, componentConfig.default || componentConfig)
})

Vue.config.productionTip = false

new Vue({
	router,
	render: h => h(App)
}).$mount('#app')
