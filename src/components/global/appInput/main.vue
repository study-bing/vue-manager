<template>
  <el-input v-bind="$attrs" v-on="$listeners" v-model="value" @input="input"></el-input>
</template>
<script>
export default {
	name: 'appInput',
	data() {
		return {
			value: ''
		};
	},
	props: {
		// 只能输入中文、英文、字符串
		onlyCEN: {
			type: Boolean,
			default: false
		},
		inputValue: {
			type: [String, Number],
			default: ''
		},
		// 小数
		onlyDecimal: {
			type: Boolean,
			default: false
		},
		// 价格
		onlyPrice: {
			type: Boolean,
			default: false
		},
		// 非负数
		onlyNonnegative: {
			type: Boolean,
			default: false
		},
		// 价格的整数位数 ''表示不需要限制
		priceIntLength: {
			type: [String, Number],
			default: ''
		}
	},
	watch: {
		inputValue(newValue) {
			this.value = newValue;
		}
	},
	methods: {
		input(data) {
			if (this.onlyNonnegative) {
				this.value = this.setOnlyNonnegative(data);
			}
			if (this.onlyPrice) {
				this.value = this.setPrice(data);
			}
			if (this.onlyDecimal) {
				this.value = this.setDecimal(data);
			}
			if (this.onlyCEN) {
				this.value = this.seOnlyCEN(data);
			}
			this.$emit('change', this.value);
		},
		/**
     * 只能输入正整数
     * @author linbin
     * @date   2019-12-02
     * @param  {String | Number}   data
     */
		setOnlyInt(data) {
			let reg = /[1-9]+\d{0,}/;
			if (data !== '') {
				data = reg.exec(data);
				if (data !== null) {
					data = data[0];
				} else {
					data = '';
				}
			}
			return data;
		},
		/**
     * 只能输入非负数
     * @author linbin
     * @date   2019-12-02
     * @param  {String | Number}   data
     */
		setOnlyNonnegative(data) {
			let reg = /[1-9]+\d{0,}|0/;
			if (data !== '') {
				data = reg.exec(data);
				if (data !== null) {
					data = data[0];
				} else {
					data = '';
				}
			}
			return data;
		},
		/**
     * 只能输入中文、数字、英文
     * @author linbin
     * @date   2019-12-02
     * @param  {String | Number}   data
     */
		seOnlyCEN(data) {
			let reg = /[A-Za-z0-9\u4e00-\u9fa5\s]+/;
			if (data !== '') {
				data = reg.exec(data);
				if (data !== null) {
					data = data[0];
				} else {
					data = '';
				}
			}
			return data;
		},
		/**
     * 输入价格的限制
     * @author linbin
     * @date   2019-12-02
     * @param  {String | Number}   data
     */
		setPrice(data) {
			let reg = /(?:(?:[1-9]\d{0,}|0(?!\d))(?:\.\d{0,2})?)?/;
			if (this.priceNegative) {
				reg = /(?:(?:[1-9]\d{0,}|0(?!\d)|-\d{0,})(?:\.\d{0,2})?)?/;
			}
			if (data !== '') {
				data = reg.exec(data);
				if (data !== null) {
					data = data[0];
				}
				if (data !== '' && this.priceIntLength !== '') {
					// 判断整数位位数
					let pil = parseInt(this.priceIntLength);
					let dataArr = data.split('.');
					if (dataArr.length === 1 && dataArr[0].length > pil) {
						data = dataArr[0].substring(0, pil);
					} else if (dataArr.length === 2 && dataArr[0].length > pil) {
						data = dataArr[0].substring(0, pil) + '.' + dataArr[1];
					}
				}
			}
			return data;
		}
	},
	model: {
		prop: 'inputValue',
		event: 'change'
	}
};
</script>
<style lang="less" scoped>
</style>
