<template>
	<div class="total">
		<p class="total__title">商品數量:</p>
		<p class="total__num">{{ total }}</p>
		<input
			type="button"
			class="total__btn blink"
			value="購物清單"
			v-if="total !== 0"
			@click="open"
		/>
	</div>
</template>

<script>
	import { mapGetters } from "vuex";
	export default {
		name: "product-total",
		computed: {
			...mapGetters({ total: "totalAmount", isShow: "shouldShowModal" }),
		},
		methods: {
			open() {
				document.querySelector("body").style.overflow = "hidden";
				this.$store.dispatch("toggleShowModal", true);
			},
		},
	};
</script>

<style lang="scss" scoped>
	.total {
		position: absolute;
		top: 0;
		right: 0;
		font: {
			size: 0.875rem;
		}
		text: {
			align: center;
		}
		color: #fff;
		&__title {
			background: #ff66b0;
			padding: 8px 10px;
		}
		&__num {
			font: {
				size: 22px;
			}
			padding: 15px;
			background: {
				color: #ff007c;
			}
		}
		&__btn {
			border: {
				width: 0;
			}
			width: 100%;
			background: #9acd32;
			color: #fff;
			padding: {
				top: 5px;
				bottom: 5px;
			}
			cursor: pointer;
		}
	}
	.blink {
		animation: blink 0.7s ease-in infinite;
	}
	@keyframes blink {
		0% {
			opacity: 1;
		}
		40% {
			opacity: 0.8;
		}
		100% {
			opacity: 1;
		}
	}
</style>