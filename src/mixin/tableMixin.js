export default {
	data() {
		return {
			tableHeight: 0,
			currentPage: 1,
		};
	},
	components: {

	},
	methods: {
		/**
     * 计算列表高度...
     * @author linbin
     * @date   2019-11-13
     * @param  {Object}   heightFix：修正的高度
     */
		setHeight(heightFix = 260) {
			let bodyHeight = document.body.clientHeight || document.documentElement.clientHeight;
			this.tableHeight = bodyHeight - heightFix;
		},
		/**
     * 页面条数改变...
     * @author linbin
     * @date   2019-11-13
     * @param  {Object}   val：条数
     */
		handleSizeChange(val) {
			console.log(`每页 ${val} 条`);
		},
		/**
     * 页数改变...
     * @author linbin
     * @date   2019-11-13
     * @param  {Object}   val：页数
     */
		handleCurrentChange(val) {
			console.log(`当前页: ${val}`);
		},
	},
	created() {

	}
};