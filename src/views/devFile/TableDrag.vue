<template>
  <div class="tableDrag" ref="contents">
    <el-table
      ref="dragTable"
      :data="tableData"
      border
      row-key="id"
      :height="tableHeight"
      v-if="tableHeight > 0"
    >
      <el-table-column prop="id" label="id"></el-table-column>
      <el-table-column prop="date" label="姓名"></el-table-column>
      <el-table-column prop="date1" label="性别"></el-table-column>
      <el-table-column prop="date2" label="日期"></el-table-column>
      <el-table-column prop="name" label="姓名">
        <template slot-scope="scope">
          <i class="el-icon-time"></i>
          <span style="margin-left: 10px">{{ scope.row.address }}</span>
        </template>
      </el-table-column>
      <el-table-column prop="address" label="地址" min-width="150"></el-table-column>
      <el-table-column fixed="right" label="操作">
        <template slot-scope="scope">
          <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
          <el-button type="text" size="small">编辑</el-button>
        </template>
      </el-table-column>
    </el-table>
    <div class="show-d">
      <el-tag>The default order :</el-tag>
      {{ oldList }}
    </div>
    <div class="show-d">
      <el-tag>The after dragging order :</el-tag>
      {{ newList }}
    </div>
  </div>
</template>
<script>
import tableMixin from '@mixin/tableMixin';
import Sortable from 'sortablejs';
export default {
	name: 'tableDrag',
	data() {
		return {
			input: '',
			tableData: [
				{
					id: 1,
					date: '2016-05-02',
					date1: '2016-05-02',
					date2: '2016-05-02',
					name: '王小虎',
					address: '上海市普陀区金沙江路 1518 弄'
				},
				{
					id: 2,
					date: '2016-05-04',
					name: '王小虎',
					address: '上海市普陀区金沙江路 1517 弄'
				},
				{
					id: 3,
					date: '2016-05-01',
					name: '王小虎',
					address: '上海市普陀区金沙江路 1519 弄'
				},
				{
					id: 4,
					date: '2016-05-03',
					name: '王小虎',
					address: '上海市普陀区金沙江路 1516 弄'
				},

				{
					id: 5,
					date: '2016-05-02',
					name: '王小虎',
					address: '上海市普陀区金沙江路 1518 弄'
				},
				{
					id: 6,
					date: '2016-05-04',
					name: '王小虎',
					address: '上海市普陀区金沙江路 1517 弄'
				},
				{
					id: 7,
					date: '2016-05-01',
					name: '王小虎',
					address: '上海市普陀区金沙江路 1519 弄'
				},
				{
					id: 8,
					date: '2016-05-02',
					name: '王小虎',
					address: '上海市普陀区金沙江路 1518 弄'
				},
				{
					id: 9,
					date: '2016-05-04',
					name: '王小虎',
					address: '上海市普陀区金沙江路 1517 弄'
				},
				{
					id: 10,
					date: '2016-05-01',
					name: '王小虎',
					address: '上海市普陀区金沙江路 1519 弄'
				},
				{
					id: 11,
					date: '2016-05-02',
					name: '王小虎',
					address: '上海市普陀区金沙江路 1518 弄'
				},
				{
					id: 12,
					date: '2016-05-04',
					name: '王小虎',
					address: '上海市普陀区金沙江路 1517 弄'
				}
			],
			oldList: [],
			newList: [],
			sortable: null
		};
	},
	mixins: [tableMixin],
	methods: {
		handleClick(row) {
			console.log(row);
		},
		async getList() {
			this.oldList = this.tableData.map(v => v.id);
			this.newList = this.oldList.slice();
			this.$nextTick(() => {
				this.setSort();
			});
		},
		setSort() {
			const el = this.$refs.dragTable.$el.querySelectorAll(
				'.el-table__body-wrapper > table > tbody'
			)[0];
			this.sortable = Sortable.create(el, {
				ghostClass: 'sortable-ghost', // Class name for the drop placeholder,
				onEnd: evt => {
					const targetRow = this.tableData.splice(evt.oldIndex, 1)[0];
					this.tableData.splice(evt.newIndex, 0, targetRow);

					// for show the changes, you can delete in you code
					const tempIndex = this.newList.splice(evt.oldIndex, 1)[0];
					this.newList.splice(evt.newIndex, 0, tempIndex);
				}
			});
		}
	},
	mounted() {
		this.setHeight();
		this.getList();
	}
};
</script>
<style>
.sortable-ghost {
  opacity: 0.8;
  color: rgb(55, 25, 226) !important;
  background: #14da81 !important;
}
</style>
<style lang="less" scoped>
.tableDrag {
  .show-d {
    margin-top: 15px;
  }
}
</style>
