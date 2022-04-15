<template>
	<main class="main">
		<ul class="product container mx-auto">
			<ProductItem v-for="item in data" :key="item.name" :parent-data="item" />
			<ProductTotal />
		</ul>
	</main>
</template>

<script>
	import ProductItem from "./ProductItem.vue";
	import ProductTotal from "./ProductTotal.vue";
	export default {
		name: "Product",
		data() {
			return {
				data: [],
			};
		},
		created() {
			this.getData();
		},
		components: { ProductItem, ProductTotal },
		methods: {
			async getData() {
				try {
					const api = "./data.json";
					const res = await this.$http(api);
					this.data = res.data;
					this.$emit('setData',this.data)
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