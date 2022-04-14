<template>
	<main class="main">
		<ul class="product container mx-auto">
			<ProductItem
				v-for="(item, id) in allProduct"
				:key="item.name"
				:parent-data="item"
				:parent-id="id"
			/>
			<ProductTotal />
		</ul>
	</main>
</template>

<script>
	import { mapGetters } from "vuex";
	import ProductItem from "./ProductItem.vue";
	import ProductTotal from "./ProductTotal.vue";
	export default {
		name: "Product",
		components: { ProductItem, ProductTotal },
		data() {
			return {
				sum: 0,
			};
		},
		computed: {
			...mapGetters(["allProduct", "shoppingList"]),
		},
		mounted() {
			this.$store.dispatch("getData");
		},
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