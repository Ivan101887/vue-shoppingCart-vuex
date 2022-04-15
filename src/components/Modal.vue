<template>
	<transition name="modal">
		<div class="modal" v-if="isShow" @click.self="$emit('close')">
			<ShoppingList />
		</div>
	</transition>
</template>

<script>
	import { mapGetters } from "vuex";
	import ShoppingList from "./ShoppingList.vue";
	export default {
		name: "Model",
		components: { ShoppingList },
		computed: {
			...mapGetters({
				isShow: "shouldShowModal",
			}),
		},
		watch: {
			show() {
				const body = document.querySelector("body");
				this.isShow === true && body.style.overflow === "auto"
					? window.addEventListener("keyup", this.onEscapeKeyUp)
					: window.removeEventListener("keyup", this.onEscapeKeyUp);
			},
		},
		methods: {
			onEscapeKeyUp(e) {
				if (e.which === 27) {
					document.querySelector("body").style.overflow = "auto";
					this.$store.dispatch("toggleShowModal", false);
				}
			},
		},
	};
</script>

<style lang="scss" scoped>
	.modal {
		position: fixed;
		top: 0;
		left: 0;
		z-index: 1;
		width: 100%;
		height: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
		transition: opacity 0.3s ease-in;
		background-color: rgba(0, 0, 0, 0.527);
	}
	.modal-enter,
	.modal-leave-active {
		opacity: 0;
		& {
			transform: scale(1.1);
		}
	}
</style>
