<template>
	<main class="main">
		<ul class="product container mx-auto">
			<ProductItem
				v-for="item in data"
				:key="item.name"
				:parent-data="item"
			/>
			<product-total :parent-data="sum" />
		</ul>
	</main>
</template>
<script>
	import ProductItem from "./ProductItem.vue";
	import ProductTotal from "./ProductTotal.vue";
	export default {
		name: "Product",
		components: { ProductItem, ProductTotal },
		data() {
			return {
				data: [],
				sum: 0,
			};
		},
		created() {
			this.getData();
		},
		provide() {
			return {
				addTotal: (val) => {
					this.sum += val;
				},
			};
		},
		methods: {
			async getData() {
				try {
					const api = "./data.json";
					const res = await this.$http(api);
					this.data = res.data;
				} catch (e) {
					console.log("資料連接錯誤:\n", e);
				}
			},
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