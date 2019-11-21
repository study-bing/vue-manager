<template>
  <div class="ScenicDetail" ref="contents">
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="订单基本信息" name="first">
        <div class="base-info">
          <el-row :gutter="20" class="detail-info">
            <el-col :span="6">
              <label>订单号：</label>
              <span>千岛湖景区</span>
            </el-col>
            <el-col :span="6">
              <label>下单日期：</label>
              <span>千岛湖景区</span>
            </el-col>
            <el-col :span="6">
              <label>门票日期：</label>
              <span>千岛湖景区</span>
            </el-col>
            <el-col :span="5">
              <el-button type="primary" class="pull-right" size="mini">取消订单</el-button>
            </el-col>
          </el-row>
          <el-row :gutter="20" class="detail-info">
            <el-col :span="6">
              <label>所属景区：</label>
              <span>千岛湖景区</span>
            </el-col>
            <el-col :span="6">
              <label>订单来源：</label>
              <span>千岛湖景区</span>
            </el-col>
            <el-col :span="6">
              <label>订单状态：</label>
              <span>千岛湖景区</span>
            </el-col>
            <el-col :span="6">
              <label>联系电话：</label>
              <span>千岛湖景区</span>
            </el-col>
          </el-row>
          <el-row class="detail-info">
            <el-col :span="12">
              <label>门票信息：</label>
              <el-table :data="tableData" style="width: 100%">
                <el-table-column label="门票SPU信息" min-width="120"></el-table-column>
                <el-table-column prop="desc" label="单价"></el-table-column>
                <el-table-column prop="desc" label="数量"></el-table-column>
                <el-table-column prop="desc" label="折扣"></el-table-column>
                <el-table-column prop="desc" label="总价"></el-table-column>
              </el-table>
            </el-col>
          </el-row>
        </div>
        <div>
          <p class="detail-title">
            <span>门票包含SKU信息</span>
          </p>
          <el-table :data="tableData" style="width: 100%">
            <el-table-column label="SKU订单号" min-width="120"></el-table-column>
            <el-table-column prop="desc" label="SKU名称"></el-table-column>
            <el-table-column prop="desc" label="单价"></el-table-column>
            <el-table-column prop="desc" label="数量"></el-table-column>
            <el-table-column prop="desc" label="总价"></el-table-column>
            <el-table-column prop="desc" label="检票状态"></el-table-column>
          </el-table>
        </div>
      </el-tab-pane>
      <el-tab-pane label="游客信息" name="second">
        <el-row :gutter="20" class="detail-info">
          <el-col :span="6">
            <label>联系电话：</label>
            <span>15757585963</span>
          </el-col>
        </el-row>
        <el-table :data="tableData" style="width: 100%">
          <el-table-column label="姓名" min-width="120"></el-table-column>
          <el-table-column prop="desc" label="身份证"></el-table-column>
        </el-table>
      </el-tab-pane>
      <el-tab-pane label="购买须知" name="third">
        <p class="page-header-title">
          <span>预订说明</span>
        </p>
        <el-row class="detail-info">
          <el-col :span="18" :offset="1">
            <label>预订时间：</label>
            <span>千岛湖景区</span>
          </el-col>
        </el-row>
        <el-row class="detail-info">
          <el-col :span="18" :offset="1">
            <label>有效时间：</label>
            <span>千岛湖景区</span>
          </el-col>
        </el-row>
        <el-row class="detail-info">
          <el-col :span="18" :offset="1">
            <label>票种说明：</label>
            <span>千岛湖景区</span>
          </el-col>
        </el-row>
        <p class="page-header-title">
          <span>费用说明</span>
        </p>
        <el-row class="detail-info">
          <el-col :span="18" :offset="1">
            <label>费用包含：</label>
            <span>千岛湖景区</span>
          </el-col>
        </el-row>
        <p class="page-header-title">
          <span>使用说明</span>
        </p>
        <el-row class="detail-info">
          <el-col :span="18" :offset="1">
            <label>使用方法：</label>
            <span>千岛湖景区</span>
          </el-col>
          <el-col :span="18" :offset="1">
            <label>入园时间：</label>
            <span>千岛湖景区</span>
          </el-col>
        </el-row>
        <p class="page-header-title">
          <span>退改说明</span>
        </p>
        <el-row class="detail-info">
          <el-col :span="18" :offset="1">
            <label>退改规则：</label>
            <span>千岛湖景区</span>
          </el-col>
        </el-row>
      </el-tab-pane>
    </el-tabs>
    <el-button class="right-pre" size="medium" round @click="back">返回</el-button>
  </div>
</template>
<script>
export default {
	name: 'ScenicDetail',
	data() {
		return {
			tableData: [
				{
					desc: '上海市'
				}
			],
			activeName: 'first'
		};
	},
	methods: {
		/**
     * 返回上一页面...
     * @author linbin
     * @date   2019-11-13
     */
		back() {
			this.$router.go(-1);
		},
		/**
     * tab切换...
     * @author linbin
     * @date   2019-11-13
     */
		handleClick(tab, event) {
			console.log(tab, event);
		}
	},
	mounted() {}
};
</script>
<style lang="less" scoped>
.ScenicDetail {
  .base-info {
  }
}
</style>
