// 开发环境
// let networkId = 97; //网络id 56 币安正是网络  97 币安测试网络
// let usdtContractAddress = '0x0897202ce1838d0712D357103aAE83650A0d426D'; //usdt合约地址
// let usdtDecimal = 18;//usdt 的位数
// let receiveAddress = '0xC78A8cba0d0dEb20347806B60F46A8790C21cEe6'; //usdt收款地址
// let utpayUrl = "http://192.168.31.234:13000"


// 生产环境
let networkId = 56; //网络id 56 币安正是网络  97 币安测试网络
let usdtContractAddress = '0x55d398326f99059ff775485246999027b3197955'; //usdt合约地址
let usdtDecimal = 18;//usdt 的位数
let receiveAddress = '0x607729307316a60C90Ed906D3B99aF324c9F3e91'; //usdt收款地址
let utpayUrl = "http://88.119.175.144:13000"; //wallet api后台

export default {
	networkId,
	usdtContractAddress,
	receiveAddress,
	usdtDecimal,
	utpayUrl
}
