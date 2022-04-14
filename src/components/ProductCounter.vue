<template>
	<div class="productItem__foot">
		<input
			class="productItem__btn"
			type="button"
			value="-"
			:disabled="counterNum === parentMin"
			@click="counterNum--"
		/>
		<span class="productItem__counter">{{ counterNum }}</span>
		<input
			class="productItem__btn"
			type="button"
			value="+"
			:disabled="counterNum === parentMax"
			@click="counterNum++"
		/>
	</div>
</template>
<script>
	export default {
		name: "product-counter",
		props: {
			parentMax: Number,
			parentMin: Number,
		},
		inject: ['addTotal'],
		created(){
			console.log()
		},
		data() {
			return {
				counterNum: 0,
				addTotal: this.addTotal,
			};
		},
		watch: {
			counterNum(nval, oval) {
				this.addTotal(nval - oval);
			},
		},
	};
</script>
<style lang="scss" scoped>
	.productItem {
		&__foot {
			text: {
				align: center;
			}
		}
		&__btn {
			display: inline-block;
			padding: 7px 15px;
			border: {
				width: 1px;
				style: solid;
				color: #ddd;
				radius: 3px;
			}
			font: {
				size: 16px;
				weight: 600;
			}
			background: {
				color: transparent;
			}
			cursor: pointer;
			&:disabled {
				cursor: default;
				background: {
					color: #f7f7f7;
				}
				color: #ddd;
			}
		}
		&__counter {
			display: inline-block;
			text: {
				align: center;
			}
			font: {
				size: 22px;
			}
			background: {
				color: transparent;
			}
			width: 120px;
			border: 0;
		}
	}
</style>