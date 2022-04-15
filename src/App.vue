<template>
	<div id="app">
		<Modal @close="close" v-if="isShow" />
		<Product @setData="getDataFromChild" />
	</div>
</template>

<script>
	import { mapGetters } from "vuex";
	import Modal from "./components/Modal.vue";
	import Product from "./components/Product.vue";

	export default {
		name: "App",
		components: {
			Product,
			Modal,
		},
		data() {
			return {
				data: [],
			};
		},
		computed: {
			...mapGetters({
				isShow: "shouldShowModal",
				shoppingList: "shoppingList",
			}),
		},
		methods: {
			close() {
				document.querySelector("body").style.overflow = "";
				this.$store.dispatch("toggleShowModal", false);
			},
			getDataFromChild(data) {
				return data;
			},
			async sendData(){
				this.data = await get;
				return this.data
			}
		},
		provide() {
			return {
				cart: this.shoppingList,
				data: this.sendData
			};
		},
	};
</script>

<style lang="scss">
</style>
