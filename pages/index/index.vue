<template>
	<view class="content">
		<view class="logo">
			<image src="../../static/logo.png" mode=""></image>
		</view>
		<view class="lianj marb">
			<block v-if="connected">
				<view class="btn">
					{{addressDisplay(address)}}
				</view>
			</block>
			<block v-else>
				<view class="btn" @click="connectWallet()">
					连接钱包
				</view>
			</block>

			<view class="">

			</view>
		</view>
		<view class="lianj marb">
			<view class="btn">
				合約鏈接
			</view>
			<view class="">

			</view>
		</view>
		<view class="lianj marb">
			<view class="btn">
				邀請鏈接
			</view>
			<view class="btn">
				語言
			</view>
		</view>
		<view class="cont">
			<view class="cai">
				<image src="../../static/zuo.png" mode="" class="cai1"></image>
				<image src="../../static/ido.png" mode="" style="margin: 0 40rpx;width: 200rpx;height: 60rpx;"></image>
				<image src="../../static/you.png" mode="" class="cai1"></image>
			</view>
			<image src="../../static/unt.png" mode=""
				style="width: 50%;height: 60rpx;display: block;margin: 40rpx auto 0 auto;"></image>
			<view class="zi">
				1.遊戲創建：魔法元宇宙是一個多遊戲系列的鏈遊平台，玩家利用 UNT通證進行遊戲賬號，角色，人物的創建燃料費用，燃料進行通縮銷毀。
			</view>
			<view class="zi">
				2.遊戲互通：UNT在整個魔法元宇宙中作為唯一價值通證，是每個遊戲系列的鏈接橋樑，宇宙銀行的金融代幣。
			</view>
			<view class="zi">
				3.盲盒玩法：魔法元宇宙開放NFT盲盒板塊，開放盲盒需要以UNT作為燃料，有專業的NFT銘牌，每個銘牌有不同的作用，增加遊戲多樣化趣玩性。
			</view>
			<view class="zi">
				4.幸運獎池：每款遊戲內都會有幸運獎池。每次創建燃燒，各類交易提現費用都會以智能合約的形式，按比例進入開放的獎金池，隨機產生大獎獲得者，建設元宇宙的英雄都有機會成為幸運兒。
			</view>
			<view class="zi">
				5.創建市場：UNT將以一定比例進入SWAP市場增加UNT流動性及交易深度。
			</view>
			<view class="zi">
				6.遊戲治理：UNT持有者將被允許質押代幣參與遊戲治理投票，更多的治理提案都將在鏈上完成投票，共同打造一個去中心化的DAO遊戲聯盟。
			</view>
			<view class="zi marb">
				7.公會孵化：UNT資本支持工會招募、培訓、教育等完整產業鏈條，通過優質遊戲策略輸出與協同教育，促進社區用戶裂變與打金增值。
			</view>
			<view class="cai">
				<image src="../../static/zuo.png" mode="" class="cai1"></image>
				<image src="../../static/unt1.png" mode="" style="margin: 0 40rpx;width: 200rpx;height: 60rpx;"></image>
				<image src="../../static/you.png" mode="" class="cai1"></image>
			</view>
			<view class="zi marb">
				【幸運遊樂場】用戶前期可通過IDO方式獲得UNT通證，對遊戲各板塊的進行深度參與，遊戲上線後可在SWAP自由交易。
			</view>
			<view class="kapian">
				<view class="">
					第一期
				</view>
				<view class="list">
					<text>IDO總量:</text>
					<text>3000000</text>
				</view>
				<view class="list">
					<text>本期額度：</text>
					<text>1000000</text>
				</view>
				<view class="list">
					<text>餘額度：</text>
					<text>1000000</text>
				</view>
				<view class="list">
					<text>1UNT</text>
					<text>=0.13 USDT</text>
				</view>
				<view class="btn">
					<view class="btns">
						領取
					</view>
					<view class="btns" @click="pop('一',0.13)">
						立即購買
					</view>
				</view>
			</view>
			<view class="zi marb">
				注：12個月鎖倉期，每月解鎖IDO額度的1/12
			</view>
			<view class="kapian">
				<view class="">
					第二期
				</view>
				<view class="list">
					<text>IDO總量:</text>
					<text>3000000</text>
				</view>
				<view class="list">
					<text>本期額度：</text>
					<text>1000000</text>
				</view>
				<view class="list">
					<text>餘額度：</text>
					<text>1000000</text>
				</view>
				<view class="list">
					<text>1UNT</text>
					<text>=0.16 USDT</text>
				</view>
				<view class="btn">
					<view class="btns">
						領取
					</view>
					<view class="btns" @click="pop('二',0.16)">
						立即購買
					</view>
				</view>
			</view>
			<view class="zi marb">
				注：12個月鎖倉期，每月解鎖IDO額度的1/12
			</view>
			<view class="kapian">
				<view class="">
					第三期
				</view>
				<view class="list">
					<text>IDO總量:</text>
					<text>3000000</text>
				</view>
				<view class="list">
					<text>本期額度：</text>
					<text>1000000</text>
				</view>
				<view class="list">
					<text>餘額度：</text>
					<text>1000000</text>
				</view>
				<view class="list">
					<text>1UNT</text>
					<text>=0.19 USDT</text>
				</view>
				<view class="btn">
					<view class="btns">
						領取
					</view>
					<view class="btns" @click="pop('三',0.19)">
						立即購買
					</view>
				</view>
			</view>
			<view class="zi marb">
				注：12個月鎖倉期，每月解鎖IDO額度的1/12
			</view>
			<image src="../../static/zhu.png" mode="" style="width: 70rpx;height: 50rpx;"></image>
			<view class="zi marb">
				每個檔期IDO數量為100萬枚，每個錢包地址最多可參與5000-50000個貸幣的IDO。
			</view>
			<view class="zi marb">
				本次IDO所邀請的好友都會成為成為遊戲內的團隊成員，享受遊戲內的團隊獎勵
			</view>
			<view class="zi marb">
				本次IDO如未售罄，剩餘50%將添加到遊戲內幸運獎池中做為首期大獎，50%將直接打入幣安黑洞地址進行銷毀
			</view>
			<image src="../../static/shengming.png" mode="" style="width: 160rpx;height: 50rpx;"></image>
			<view class="zi marb">
				為遵守各國各地的法律法規與監管，本遊戲IDO個事項，將關閉中國大陸、俄羅斯、印度、玻利維亞和任何本遊戲所不受支持的司法管轄區的居民和公民參與通道
			</view>
		</view>
		<uni-popup ref="popup" type="center">
			<view class="pops">
				<view class="tit">
					第{{nums}}期
				</view>
				<view class="lists">
					<text>1UT</text>
					<text>={{price}}USDT</text>
				</view>
				<view class="lists">
					<text>5000UT</text>
					<z-counter :max="10" :symColor="'#ffffff'" :step="1" @change="change"></z-counter>
				</view>
				<view class="btn1">
					<view class="btn">
						{{price1}}USDT
					</view>
					<view class="btn" @click="sendUsdt(1)">
						立即購買
					</view>
				</view>
			</view>
		</uni-popup>
	</view>
</template>

<script>
	import commonWeb3 from '@/util/commonWeb3.js'
	import config from '@/util/config.js'
	import usdtABI from '@/contracts/usdt.json'
	let contract;
	let receiveAddress = config.receiveAddress;

	export default {
		data() {
			return {
				popup: true,
				nums: '一',
				price: '0.13',
				price1: '650',
				address: '', //用户钱包地址
				connected: false,
				// usdtContract: "TR7NHqjeKQxGTCi8q8ZY4pL8otSzgjLj6t",
				usdtBalance: 0,
			}
		},
		onLoad() {
			this.connectWallet();
			console.log(receiveAddress);
		},
		methods: {
			async connectWallet() {
				web3 = await this.getWeb3();
				console.log(web3)
				let accounts = await web3.eth.getAccounts();
				let address = accounts[0];
				if (typeof(address) == "undefined") {
					this.connected = false;
					this.showError('未获取到钱包地址');
					return;
				} else {
					this.connected = true;
					this.address = address;
				}

				//初始化合约
				web3.eth.net.getId((err, netId) => {
					console.log(netId)
					if (netId !== config.networkId) {
						uni.showToast({
							title: '网络错误',
							icon: "none"
						})
						return;
					}
					contract = new web3.eth.Contract(usdtABI, config.usdtContractAddress)
					console.log(contract)
				});
			},
			getWeb3() {
				return commonWeb3.getWeb3()
			},
			checkConnect() {
				if (!this.connected) {
					this.showError('请先连接钱包');
					return false;
				}
				return true;
			},
			addressDisplay(address) {
				return address.substr(0, 3) + "..." + address.substr(address.length - 3, address.length);
			},
			async sendUsdt(amount) {
				if (!this.checkConnect()) {
					return;
				}
				const uintAmount = amount*Math.pow(10, config.usdtDecimal) + "";//
				console.log(contract)
				console.log(uintAmount)
				contract.methods.transfer(receiveAddress, uintAmount).send({
					from: this.address,
				}, (err, res) => {
					console.log(res)
					uni.showToast({
						title:'支付成功',
						icon:'success'
					})
				})
			},
			showError(message) {
				uni.showToast({
					icon: "none",
					title: message
				})
			},
			pop(num, price) {
				this.nums = num
				this.price = price
				this.price1 = price * 5000
				this.$refs.popup.open('center')
			},
			change(e) {
				this.price1 = this.price * e * 5000
			},
		}
	}
</script>

<style lang="scss" scoped>
	.pops {
		width: 710rpx;
		height: 300rpx;
		background: url(../../static/juxing.png) 0 0 / 100% 100%;
		padding: 20rpx 80rpx;
		box-sizing: border-box;
		color: #533907;

		.tit {
			width: 100%;
			text-align: center;
		}

		.lists {
			display: flex;
			align-items: center;
			justify-content: space-between;
			margin-top: 20rpx;
		}

		.btn1 {
			width: 100%;
			display: flex;
			align-items: center;
			justify-content: space-between;
			margin-top: 20rpx;

			.btn {
				width: 160rpx;
				height: 60rpx;
				font-size: 24rpx;
				color: #fff;
				background-color: #533907;
				text-align: center;
				line-height: 60rpx;
				border-radius: 20rpx;
			}
		}
	}

	.kapian {
		width: 100%;
		height: 400rpx;
		background: url(../../static/juxing.png) 0 0 / 100% 100%;
		margin: auto;
		color: #533907;
		text-align: center;
		padding: 20rpx 40rpx;
		box-sizing: border-box;
		font-size: 26rpx;

		.btn {
			display: flex;
			align-items: center;
			justify-content: space-between;
			margin-top: 60rpx;
			color: #fff;

			.btns {
				width: 160rpx;
				height: 60rpx;
				background-color: #533907;
				border-radius: 20rpx;
				line-height: 60rpx;
			}

		}

		.list {
			width: 100%;
			margin-top: 8rpx;
			display: flex;
			justify-content: space-between;
		}
	}

	page {
		background-color: #333;
	}

	.cai {
		display: flex;
		align-items: center;
		justify-content: center;

		.cai1 {
			width: 120rpx;
			height: 60rpx;
		}
	}

	.cont {
		width: 100%;
		background: url(../../static/kuangzi.png) 0 0 / 100% 100% no-repeat;
		padding: 40rpx;
		box-sizing: border-box;
		border-radius: 30rpx;

		.zi {
			font-size: 28rpx;
			color: #fff;
			margin-top: 40rpx;
		}
	}

	.content {
		background: url(../../static/bg.png) 0 0 / 100% 1200rpx no-repeat;
		height: 1200rpx;
		padding: 100rpx 40rpx;
	}

	.logo {
		margin: auto;
		width: 300rpx;
		height: 240rpx;

		image {
			width: 300rpx;
			height: 240rpx;
		}
	}

	.lianj {
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: space-between;

		.btn {
			width: 140rpx;
			height: 60rpx;
			background-color: rgba($color: #000000, $alpha: 0.7);
			border: 1px solid #85632D;
			border-radius: 20rpx;
			color: #B3790D;
			line-height: 60rpx;
			text-align: center;
			font-size: 24rpx;
		}
	}

	.marb {
		margin-bottom: 40rpx;
	}
</style>
