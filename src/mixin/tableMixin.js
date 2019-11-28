export default {
	data() {
		return {
			tableHeight: 0,
			multipleSelection: [],
			heightFix: 170
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
		setHeight() {
			this.tableHeight = document.body.clientHeight || document.documentElement.clientHeight;
			if (this.$refs.searchBody) {
				this.tableHeight = this.tableHeight - this.$refs.searchBody.clientHeight;
			}
			if (this.$refs.opeBtns) {
				this.tableHeight = this.tableHeight - this.$refs.searchBody.clientHeight;
			}
			this.tableHeight = this.tableHeight - this.heightFix;
		},
		/**
     * 页面条数改变...
     * @author linbin
     * @date   2019-11-13
     * @param  {Object}   val：条数
     */
		handleSizeChange(val) {
			this.tableParams.page_size = val;
			this.getData();
		},
		/**
     * 页数改变...
     * @author linbin
     * @date   2019-11-13
     * @param  {Object}   val：页数
     */
		handleCurrentChange(val) {
			this.tableParams.page = val;
			this.getData();
		},
		/**
     * table的checkBox
     * @author linbin
     * @date   2019-11-13
     * @param  {Object}   row行信息
     */
		handleSelectionChange(val) {
			this.multipleSelection = val;
		}
	},
	created() {
		this.getData();
	},
	mounted() {
		window.addEventListener('resize', this.setHeight, false);
		this.setHeight();
	},
	beforeDestroy() {
		window.removeEventListener('resize', this.setHeight, false);
	},
};