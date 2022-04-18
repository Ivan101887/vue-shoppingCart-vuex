<template>
	<li class="productItem">
		<div class="productItem__head">
			<h2 class="productItem__title">{{ parentData.name }}</h2>
			<p class="productItem__desc">{{ parentData.desc }}</p>
			<b class="productItem__price">
				${{ String(parentData.price).replace(/\B(?=(\d{3})+(?!\d))/g, ",") }}
			</b>
		</div>
		<figure class="productItem__body">
			<img
				:src="parentData.src"
				:alt="parentData.name"
				class="productItem__img"
			/>
		</figure>
		<ProductCounter
			:parent-max="5"
			:parent-min="0"
			:parent-name="parentData.name"
		/>
	</li>
</template>

<script>
	import ProductCounter from "@/components/product/ProductCounter";
	export default {
		components: { ProductCounter },
		name: "product-item",
		props: { parentData: Object},
	};
</script>

<style lang="scss" scoped>
	.productItem {
		border: 1px solid #ddd;
		padding: 15px;
		&__head {
			text: {
				align: center;
			}
		}
		&__title {
			font: {
				size: 20px;
				weight: 600;
			}
			line-height: 1.2em;
		}
		&__desc {
			margin: {
				top: 24px;
				bottom: 24px;
			}
			line-height: 1.3em;
			font: {
				size: 0.9rem;
			}
		}
		&__img {
			display: block;
			width: 100%;
			height: auto;
		}
		&__price {
			font: {
				size: 42px;
				weight: 600;
			}
			color: #f40077;
		}
	}
</style>