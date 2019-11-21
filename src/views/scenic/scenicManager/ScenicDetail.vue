<template>
  <div class="ScenicDetail" ref="contents">
    <div class="base-info">
      <p class="detail-title">
        <span>景区基本信息</span>
        <el-button type="primary" size="mini" class="ml16">编辑</el-button>
        <el-button type="primary" size="mini" @click="toTicket">门票管理</el-button>
        <el-button class="pull-right" size="medium" round @click="back">返回</el-button>
      </p>
      <el-row :gutter="20" class="detail-info">
        <el-col :span="6">
          <label>景区编号：</label>
          <span>千岛湖景区</span>
        </el-col>
        <el-col :span="6">
          <label>商家类型：</label>
          <span>千岛湖景区</span>
        </el-col>
        <el-col :span="6">
          <label>电话：</label>
          <span>千岛湖景区</span>
        </el-col>
      </el-row>
      <el-row :gutter="20" class="detail-info">
        <el-col :span="6">
          <label>景区名称：</label>
          <span>千岛湖景区</span>
        </el-col>
        <el-col :span="6">
          <label>添加人：</label>
          <span>千岛湖景区</span>
        </el-col>
        <el-col :span="6">
          <label>添加时间：</label>
          <span>千岛湖景区</span>
        </el-col>
      </el-row>
      <el-row :gutter="20" class="detail-info">
        <el-col :span="18">
          <label>地址：</label>
          <span>千岛湖景区</span>
        </el-col>
      </el-row>
      <el-row :gutter="20" class="detail-info">
        <el-col :span="18">
          <label class="v-a-top">banner：</label>
          <el-image style="width: 100px; height: 100px" :src="url" :preview-src-list="srcList"></el-image>
        </el-col>
      </el-row>
    </div>
    <div>
      <p class="detail-title">
        <span>景区公告</span>
        <el-button type="primary" size="mini" class="ml16" @click="dialogVisibleNotice = true">添加</el-button>
      </p>
      <el-table :data="tableData" style="width: 100%">
        <el-table-column type="index" label="公告编号" width="100"></el-table-column>
        <el-table-column show-overflow-tooltip prop="desc" label="公告详情" min-width="180"></el-table-column>
        <el-table-column fixed="right" label="操作" width="100">
          <template slot-scope="scope">
            <el-button @click="noticedDalogEdit(scope.row)" type="text" size="small">编辑</el-button>
            <el-button @click="noticedDalogDelete(scope.$index)" type="text" size="small">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <div>
      <p class="detail-title">
        <span>景区介绍</span>
        <el-button size="mini" class="ml16">编辑</el-button>
        <el-button type="primary" size="mini" class="ml16">保存</el-button>
      </p>
      <tinymce-editor v-model="tinymceHtml" :disabled="disabled" @onClick="onClick" ref="editor"></tinymce-editor>
    </div>
    <el-dialog title="添加/编辑公告" :visible.sync="dialogVisibleNotice" width="500px">
      <el-form
        :model="noticeValidateForm"
        ref="noticeValidateForm"
        label-width="100px"
        class="demo-ruleForm"
      >
        <el-form-item
          label="公告内容"
          prop="noticeText"
          :rules="[
            { required: true, message: '请输入公告内容', trigger: 'blur' }
          ]"
        >
          <el-input
            type="textarea"
            :rows="5"
            placeholder="请输入内容"
            v-model="noticeValidateForm.noticeText"
          ></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="noticedDalogCancel">取 消</el-button>
        <el-button type="primary" @click="submitForm('noticeValidateForm')">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>
<script>
import tinymceEditor from '@comp/tinymceEditor';
export default {
	name: 'ScenicDetail',
	data() {
		return {
			url:
        'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
			srcList: [
				'https://fuss10.elemecdn.com/8/27/f01c15bb73e1ef3793e64e6b7bbccjpeg.jpeg',
				'https://fuss10.elemecdn.com/1/8e/aeffeb4de74e2fde4bd74fc7b4486jpeg.jpeg'
			],
			tableData: [
				{
					desc:
            '上海市普陀区金沙江路 1518 弄上海市普陀区金沙江路 1518 弄上海市普陀区金沙江路 1518 弄上海市普陀区金沙江路 1518 弄上海市普陀区金沙江路 1518 弄上海市普陀区金沙江路 1518 弄'
				}
			],
			dialogVisibleNotice: false,
			noticeValidateForm: { noticeText: '' },
			editId: '',
			tinymceHtml: '',
			disabled: false
		};
	},
	components: { tinymceEditor },
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
     * 公告弹框确认...
     * @author linbin
     * @date   2019-11-13
     * @param  {Object}   val：条数
     */
		submitForm(formName) {
			this.$refs[formName].validate(valid => {
				if (valid) {
					this.tableData.push({ desc: this.noticeValidateForm.noticeText });
					this.noticeValidateForm.noticeText = '';
					this.noticedDalogCancel();
				} else {
					console.log('error submit!!');
					return false;
				}
			});
		},
		/**
     * 公告弹框取消...
     * @author linbin
     * @date   2019-11-13
     */
		noticedDalogCancel() {
			this.dialogVisibleNotice = false;
		},
		/**
     * 公告删除
     * @author linbin
     * @date   2019-11-13
     * @param  {Number}   index
     */
		noticedDalogDelete(index) {
			this.$confirm('您确定删除此公告吗?', '提示', {
				confirmButtonText: '确定',
				cancelButtonText: '取消',
				type: 'warning'
			})
			.then(() => {
				this.editId = '';
				this.tableData.splice(index, 1);
				this.$message({
					type: 'success',
					message: '删除成功!'
				});
			})
			.catch(() => {
				this.$message({
					type: 'info',
					message: '已取消删除'
				});
			});
		},
		/**
     * 公告编辑...
     * @author linbin
     * @date   2019-11-13
     * @param  {Object}   val：条数
     */
		noticedDalogEdit(row) {
			this.editId = row.id;
			this.dialogVisibleNotice = true;
			this.noticeValidateForm.noticeText = row.desc;
		},
		//鼠标单击的事件
		onClick(e, editor) {
			console.log('Element clicked');
			console.log(e);
			console.log(editor);
		},
		//清空内容
		clear() {
			this.$refs.editor.clear();
		},
		/**
     * 前往详情页
     * @author linbin
     * @date   2019-11-13
     * @param  {Object}   row行信息
     */
		toTicket() {
			this.$router.push({
				path: '/scenic/ticketList'
			});
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
