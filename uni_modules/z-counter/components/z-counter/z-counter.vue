<template>
	<view class="Block">
		<view class="NumberBody">
			<view class="MinusBody" :style="{color:symColor}" @click="minusNum()">
				<text :class="[minusMin?'No':'Have']">-</text>
			</view>
			<input type="number" v-model="value" :style="inputStyle" @blur="inputOver" />
			<view class="PlusBody" :style="{color:symColor}" @click="plusNum()">
				<text :class="[plusMax?'No':'Have']">+</text>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name: "z-counter",
		data() {
			return {
				value: 0,
				plusMax: false,
				minusMin: false,
				inputStyle: {
					width: '44rpx',
					transition: '0.3s'
				}
			};
		},

		props: {
			current: {
				type: Number || String,
				default: 1
			},
			max: {
				type: Number || String,
				default: Infinity
			},
			min: {
				type: Number || String,
				default: 0
			},
			step: {
				type: Number || String,
				default: 1
			},
			size: {
				type: Number || String,
				default: 1
			},
			index: {
				type: Number || String,
				default: 0
			},
			symColor: {
				type: String,
				default: '#dcb658'
			}
		},
		watch: {
			value() {

				if (String(this.value).length > 7) {
					this.inputStyle.width = 44 + (6 * 14) + 'rpx'
				} else if (String(this.value).length == 0) {
					this.inputStyle.width = 44 + 'rpx'
				} else {
					this.inputStyle.width = 44 + (Number(String(this.value).length - 1) * 14) + 'rpx'
				}
			},
			current() {
				this.value = this.current
				this.inputOver()
			},
			// max() {
			// 	this.inputOver()
			// },
			// min() {
			// 	this.inputOver()
			// }

		},
		mounted() {
			this.value = this.current
			// this.$emit("change",Number(this.value),this.index);
		},

		methods: {
			minusNum() {
				if (this.minusMin) return;
				this.plusMax = false
				this.inputStyle.width = 44 + (Number(String(this.value).length - 1) * 14) + 'rpx'
				this.value = Number(this.value) - Number(this.step)
				this.$emit("change", Number(this.value), this.index);
				if (Number(this.value) <= Number(this.min)) {
					this.value = this.min
					this.minusMin = true
					this.$emit("change", Number(this.value), this.index);
					console.log('zou')
					return 
				}
				// this.$emit("change", Number(this.value), this.index);
			},
			plusNum() {
				if (this.plusMax) return;

				if (String(this.value).length > 7) {
					this.inputStyle.width = 44 + (6 * 14) + 'rpx'
				} else {
					this.inputStyle.width = 44 + (Number(String(this.value).length - 1) * 14) + 'rpx'
				}
				this.minusMin = false
				this.value = Number(this.value) + Number(this.step)
				// this.$emit("change", Number(this.value), this.index);
				this.$emit("change", Number(this.value), this.index);
				if (Number(this.value) >= Number(this.max)) {
					this.value = this.max
					this.plusMax = true
					this.$emit("change", Number(this.value), this.index);
					return
				}


			},
			inputOver(e) {
				if (Number(this.value) <= Number(this.min)) {
					this.value = this.min
					this.minusMin = true
					this.plusMax = false
					this.inputStyle.width = 44 + 'rpx'
					this.$emit("change", Number(this.value), this.index);
				} else if (Number(this.value) >= Number(this.max)) {
					this.value = this.max
					this.plusMax = true
					this.minusMin = false
					this.$emit("change", Number(this.value), this.index);
				} else {
					this.plusMax = false
					this.minusMin = false
					this.$emit("change", Number(this.value), this.index);
				}
			}
		}
	}
</script>

<style lang="less">
	.Block {
		display: inline-block;

		.NumberBody {
			display: flex;
			flex-direction: row;
			align-items: center;
			border: 1px solid rgba(242, 240, 236, 1);
			border-radius: 6rpx;
			font-size: 28rpx;
			height: 44rpx;
			min-width: 140rpx;

			.PlusBody,
			.MinusBody {
				display: flex;
				flex-direction: row;
				justify-content: center;
				align-items: center;
				width: 44rpx;
				height: 40rpx;
				font-size: 40rpx;
			}

			.PlusBody {
				border-left: 1px solid rgba(242, 240, 236, 1);
			}

			.MinusBody {
				border-right: 1px solid rgba(242, 240, 236, 1);
			}

			input {
				text-align: center;
				font-size: 26rpx;
			}

			.Have {}

			.No {
				color: rgba(220, 220, 220, 1.0);
			}
		}
	}
</style>
