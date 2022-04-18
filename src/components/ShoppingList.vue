<template>
	<div class="cart">
		<div class="cart__title">您的購物清單</div>
		<div class="tblWrap">
			<table class="cart__table">
				<thead class="cart__thead">
					<tr class="cart__tr">
						<th class="cart__th">品名</th>
						<th class="cart__th">描述</th>
						<th class="cart__th">價格</th>
					</tr>
				</thead>
				<tbody class="cart__tbody">
					<tr
						:class="['cart__tr', { 'bg-cancel': index % 2 !== 0 }]"
						v-for="(item, index) in cart"
						:key="index"
					>
						<td class="cart__td">{{ item.name }}</td>
						<td class="cart__td">{{ item.desc }}</td>
						<td class="cart__td text-ce td-sm">
							${{ String(item.price).replace(/\B(?=(\d{3})+(?!\d))/g, ",") }}
						</td>
					</tr>
					<tr class="cart__tr total">
						<td class="cart__td" colspan="2">合計</td>
						<td class="cart__td text-ce td-sm">
							${{
								String(calcTotalPrice()).replace(/\B(?=(\d{3})+(?!\d))/g, ",")
							}}
						</td>
					</tr>
				</tbody>
			</table>
		</div>
		<input
			type="button"
			value="繼續購物去"
			class="cart__btn"
			@click="hideModal"
		/>
	</div>
</template>
<script>
	import { mapGetters } from "vuex";
	export default {
		name: "shopping-list",
		props: {
			parentData: Array,
		},
		computed: {
			...mapGetters({
				shoppingList: "shoppingList",
			}),
			cart() {
				return this.shoppingList.map((cartItem) =>
					this.parentData.find((item) => item.name === cartItem)
				);
			},
		},
		methods: {
			calcTotalPrice() {
				let totalPrice = 0;
				this.cart.forEach((item) => {
					totalPrice += item.price;
				});
				return totalPrice;
			},
			hideModal() {
				document.querySelector("body").style.overflow = "";
				this.$store.dispatch("toggleShowModal", false);
			},
		},
	};
</script>
<style lang="scss" scoped>
	.cart {
		width: 850px;
		padding: {
			left: 15px;
			right: 15px;
		}
		background: {
			color: #fff;
		}
		border: {
			radius: 5px;
		}
		box-sizing: border-box;
		text-align: center;
		&__title {
			font: {
				size: 25px;
				weight: 600;
			}
			margin: {
				top: 20px;
				bottom: 20px;
			}
		}
		&__table {
			width: 100%;
		}
		&__thead > &_tr {
			background: {
				color: #eee;
			}
		}
		&__td {
			text-align: left;
			line-height: 1.5em;
		}
		&__td,
		&__th {
			padding: 10px 15px;
			border: {
				width: 1px;
				style: solid;
				color: #ddd;
			}
		}
		&__btn {
			background-color: #ff007c;
			border: {
				width: 0;
				radius: 3px;
			}
			cursor: pointer;
			font: {
				size: 1rem;
			}
			color: #fff;
			margin: {
				top: 15px;
				bottom: 15px;
			}
			padding: 10px 15px;
		}
	}
	.tblWrap {
		max-height: 400px;
		overflow-y: auto;
	}
	.total {
		background: {
			color: #ffe6f2;
		}
	}
	.bg {
		&-cancel {
			background-color: #f6f6f6;
		}
	}
	.td {
		&-sm {
			width: 10%;
		}
	}
</style>