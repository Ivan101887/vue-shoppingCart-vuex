<template>
	<div class="total">
		<p class="total__title">商品數量:</p>
		<p class="total__num">{{parentData}}</p>
	</div>
</template>
<script>
	export default {
		name: "product-total",
		props: {
			parentData: Number,
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
	}
</style>