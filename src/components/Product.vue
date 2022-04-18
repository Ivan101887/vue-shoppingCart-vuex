<template>
	<main class="main">
		<ul class="product container mx-auto">
			<ProductItem v-for="item in parentData" :key="item.name" :parent-data="item" />
			<ProductTotal />
		</ul>
	</main>
</template>

<script>
	import ProductItem from "./ProductItem.vue";
	import ProductTotal from "./ProductTotal.vue";
	export default {
		name: "Product",
		props: {
			parentData: Array,
		},
		components: { ProductItem, ProductTotal },
	};
</script>

<style lang="scss" scoped>
	.product {
		display: grid;
		grid: {
			template-columns: repeat(4, 1fr);
			column-gap: 30px;
			row-gap: 30px;
		}
		margin: {
			top: 25px;
		}
	}
</style>