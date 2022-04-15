<template>
	<div id="app">
		<Modal @close="close" v-if="isShow" />
		<Product />
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
		computed: {
			...mapGetters({
				isShow: "shouldShowModal",
			}),
		},
		methods: {
			close() {
				document.querySelector("body").style.overflow = "";
				this.$store.dispatch("toggleShowModal", false);
			},
		},
	};
</script>

<style lang="scss">
</style>
