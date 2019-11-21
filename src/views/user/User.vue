<template>
  <div class="user" ref="contents">
    <div class="search-content">
      <el-input v-model="input" class="w-200" placeholder="请输入内容"></el-input>
      <el-input v-model="input" class="w-200" placeholder="请输入内容"></el-input>
      <el-button type="primary" round icon="el-icon-search">搜索</el-button>
      <el-button type="primary" class="pull-right" @click="addUser">新增</el-button>
    </div>
    <el-table :data="tableData" border :height="tableHeight" v-if="tableHeight > 0">
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
    <el-pagination
      background
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="currentPage"
      :page-sizes="[10, 20, 50, 100]"
      :page-size="100"
      layout="total, sizes, prev, pager, next, jumper"
      :total="tableData.length"
    ></el-pagination>
    <set-user :dialogVisible.sync="showSet" @closeDialog="closeDialog"></set-user>
  </div>
</template>
<script>
import tableMixin from '@mixin/tableMixin';
import setUser from './SetUser';
export default {
	name: 'user',
	data() {
		return {
			input: '',
			tableData: [
				{
					date: '2016-05-02',
					date1: '2016-05-02',
					date2: '2016-05-02',
					name: '王小虎',
					address: '上海市普陀区金沙江路 1518 弄'
				},
				{
					date: '2016-05-04',
					name: '王小虎',
					address: '上海市普陀区金沙江路 1517 弄'
				},
				{
					date: '2016-05-01',
					name: '王小虎',
					address: '上海市普陀区金沙江路 1519 弄'
				},
				{
					date: '2016-05-03',
					name: '王小虎',
					address: '上海市普陀区金沙江路 1516 弄'
				},

				{
					date: '2016-05-02',
					name: '王小虎',
					address: '上海市普陀区金沙江路 1518 弄'
				},
				{
					date: '2016-05-04',
					name: '王小虎',
					address: '上海市普陀区金沙江路 1517 弄'
				},
				{
					date: '2016-05-01',
					name: '王小虎',
					address: '上海市普陀区金沙江路 1519 弄'
				},
				{
					date: '2016-05-02',
					name: '王小虎',
					address: '上海市普陀区金沙江路 1518 弄'
				},
				{
					date: '2016-05-04',
					name: '王小虎',
					address: '上海市普陀区金沙江路 1517 弄'
				},
				{
					date: '2016-05-01',
					name: '王小虎',
					address: '上海市普陀区金沙江路 1519 弄'
				},
				{
					date: '2016-05-02',
					name: '王小虎',
					address: '上海市普陀区金沙江路 1518 弄'
				},
				{
					date: '2016-05-04',
					name: '王小虎',
					address: '上海市普陀区金沙江路 1517 弄'
				},
				{
					date: '2016-05-01',
					name: '王小虎',
					address: '上海市普陀区金沙江路 1519 弄'
				},
				{
					date: '2016-05-02',
					name: '王小虎',
					address: '上海市普陀区金沙江路 1518 弄'
				},
				{
					date: '2016-05-04',
					name: '王小虎',
					address: '上海市普陀区金沙江路 1517 弄'
				},
				{
					date: '2016-05-01',
					name: '王小虎',
					address: '上海市普陀区金沙江路 1519 弄'
				}
			],
			currentPage: 4,
			showSet: false
		};
	},
	components: { setUser },
	mixins: [tableMixin],
	methods: {
		handleClick(row) {
			console.log(row);
		},
		addUser() {
			this.showSet = true;
		},
		closeDialog() {}
	},
	mounted() {
		this.setHeight();
	}
};
</script>
<style lang="less" scoped>
.user {
}
</style>
