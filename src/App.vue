<template>
	<div id="app">
		<Model />
		<Product />
	</div>
</template>

<script>
	import Model from "./components/Model.vue";
	import Product from "./components/Product.vue";

	export default {
		name: "App",
		components: {
			Product,
			Model,
		},
		
	};
</script>

<style lang="scss">
</style>
