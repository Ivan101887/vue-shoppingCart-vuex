<template>
	<div id="app">
		<Modal @close="close" v-if="isShow" :parent-data="data" />
		<Product :parent-data="data" />
		<Total />
	</div>
</template>

<script>
	import { mapGetters } from "vuex";
	import Modal from "@/components/Modal";
	import Product from "@/components/product/Product";
	import Total from "@/components/Total";


	export default {
		name: "App",
		components: {
			Product,
			Modal,
			Total
		},
		data() {
			return {
				data: [],
			};
		},
		computed: {
			...mapGetters({
				isShow: "shouldShowModal",
			}),
		},
		created() {
			this.getData();
		},
		provide() {
			return {
				parentData: this.data,
			};
		},
		methods: {
			close() {
				document.querySelector("body").style.overflow = "";
				this.$store.dispatch("toggleShowModal", false);
			},
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

<style lang="scss">
</style>
