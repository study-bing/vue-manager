<template>
  <div class="bannerList" ref="contents">
    <p class="page-title">{{$route.meta.title}}</p>
    <div class="search-content" ref="searchBody">
      <el-input v-model="tableParams.keyword" size="medium" class="w-240" placeholder="搜索标题"></el-input>
      <div>
        <label class="label">开始有效期:</label>
        <el-date-picker
          v-model="tableParams.startTime"
          class="w-240"
          type="daterange"
          range-separator="至"
          size="medium"
        ></el-date-picker>
      </div>
      <div>
        <label class="label">结束有效期:</label>
        <el-date-picker
          v-model="tableParams.endTime"
          class="w-240"
          type="daterange"
          range-separator="至"
          size="medium"
        ></el-date-picker>
      </div>
      <div>
        <label class="label">状态:</label>
        <el-select size="medium" v-model="tableParams.status" clearable placeholder="请选择">
          <el-option
            v-for="item in typeOptions"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          ></el-option>
        </el-select>
      </div>
      <div class="search-btns">
        <el-button size="medium" type="primary" @click="getData">查询</el-button>
        <el-button size="medium" @click="clearParams">清除</el-button>
      </div>
    </div>
    <div class="ope-btns" ref="opeBtns">
      <el-button size="medium" @click="addBanner">添加Banner</el-button>
      <el-button size="medium" @click="scenicDelete">批量删除</el-button>
    </div>
    <el-table
      :data="tableData"
      stripe
      :height="tableHeight"
      v-if="tableHeight > 0"
      @selection-change="handleSelectionChange"
      :highlight-current-row="false"
    >
      <el-table-column type="selection" width="60"></el-table-column>
      <el-table-column prop="title" label="标题"></el-table-column>
      <el-table-column prop="title" label="图片"></el-table-column>
      <el-table-column prop="create_admin" label="上传人"></el-table-column>
      <el-table-column prop="start_time" label="开始有效期" min-width="130"></el-table-column>
      <el-table-column prop="end_time" label="结束有效期" min-width="130"></el-table-column>
      <el-table-column prop="sort" label="排序"></el-table-column>
      <el-table-column prop="status" label="状态">
        <template slot-scope="scope">{{scope.row.status === 'on' ? '上线' : '下线'}}</template>
      </el-table-column>
      <el-table-column fixed="right" label="操作">
        <template slot-scope="scope">
          <el-button @click="editBanner(scope.row)" type="text" size="small">编辑</el-button>
          <el-button @click="scenicDelete(scope.row)" type="text" size="small">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination
      background
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="tableParams.page"
      :page-sizes="[10, 20, 50, 100]"
      :page-size="tableParams.page_size"
      layout="total, prev, pager, next, sizes, jumper"
      :total="total"
    ></el-pagination>
    <scenic-banner-set
      :isEdit="idEdit"
      :infoObj="infoObj"
      :dialogVisible.sync="showSet"
      @closeDialog="getData"
    ></scenic-banner-set>
  </div>
</template>
<script>
import tableMixin from '@mixin/tableMixin';
import scenicBannerSet from './ScenicBannerSet';
import { getBannerList, deleteBanner } from '@api/scenic.js';
export default {
	name: 'bannerList',
	data() {
		return {
			tableData: [],
			showSet: false,
			typeOptions: [
				{
					value: 'on',
					label: '上线'
				},
				{
					value: 'off',
					label: '下线'
				}
			],
			tableParams: {
				keyword: '',
				status: '',
				startTime: [],
				endTime: [],
				page: 1,
				page_size: 10
			},
			idEdit: false,
			infoObj: {},
			total: 0
		};
	},
	components: { scenicBannerSet },
	mixins: [tableMixin],
	methods: {
		/**
     * 新增bannner
     * @author linbin
     * @date   2019-11-13
     */
		addBanner() {
			this.idEdit = false;
			this.showSet = true;
		},
		/**
     * 编辑bannner
     * @author linbin
     * @date   2019-11-13
     */
		editBanner(row) {
			this.idEdit = true;
			this.showSet = true;
			this.infoObj = row;
		},
		/**
     * 获取数据
     * @author linbin
     * @date   2019-11-13
     */
		getData() {
			getBannerList({
				keyword: this.tableParams.keyword,
				create_admin: this.tableParams.create_admin,
				status: this.tableParams.status,
				start_time_range_l: this.tableParams.startTime[0] || '',
				start_time_range_r: this.tableParams.startTime[1] || '',
				end_time_range_l: this.tableParams.endTime[0] || '',
				end_time_range_r: this.tableParams.endTime[1] || '',
				page: this.tableParams.page,
				page_size: this.tableParams.page_size
			}).then(res => {
				this.total = res.data.total;
				this.tableData = res.data.items;
			});
		},
		/**
     * 清除筛选选项
     * @author linbin
     * @date   2019-11-13
     */
		clearParams() {
			this.tableParams = {
				keyword: '',
				status: '',
				startTime: [],
				endTime: [],
				page: 1,
				page_size: 10
			};
			this.getData();
		},
		/**
     * 删除banner操作
     * @author linbin
     * @date   2019-11-13
     * @param  {Object}   row行信息
     */
		scenicDelete(row) {
			let ids = this.multipleSelection;
			if (row.id) {
				ids = [row.id];
			}
			this.$confirm('是否确认删除Banner?', '', {
				confirmButtonText: '确定',
				cancelButtonText: '取消',
				type: 'error',
				showClose: false
			})
			.then(() => {
				deleteBanner({ ids: ids }).then(() => {
					this.$message({
						type: 'success',
						message: '删除成功!'
					});
					this.getData();
				});
			})
			.catch(() => {});
		}
	},
	mounted() {}
};
</script>
<style lang="less" scoped>
</style>
