# z-counter
| 属性        | 描述   |  类型  |
| --------   | ----- | ----  |
| current      |当前值   |  number  (默认1)    |
| max        |   最大值   |    number (默认 正无穷大)   |
| min        |    最小值    |  number (默认0)  |
| step        |    步进值    |  number (默认1) ，点击一次增加/减少多少  |
| index      |   下标     |    number如果在数组中使用组件时，可以传递数组的下标进去 |
| symColor    |    加减号的颜色    |  string  )  |

```
		<view class="box" >
			<z-counter @change="change"></z-counter>   //默认使用
		</view>
		<view class="box" >
			<z-counter :step="0.5" @change="change"></z-counter>  //步进值为0.5
		</view>
		<view class="box" >
			<z-counter :symColor="'#ff2408'" :min="10" :max="100" :step="10" @change="change"></z-counter> //设置加减号颜色
		</view>
		<view class="box" >
			<z-counter  :max="1000" :step="100" @change="change"></z-counter>      //设置最大值
		</view>
```

# 使用注意事项

组件初始化的时候，不会往外发射值，
需要设置字体和输入框的大小和颜色，需要自己修改组件中的css，
组件使用了**less预编译**，使用前确保自己**安装过less**

## 有问题联系企鹅 1712533182
  