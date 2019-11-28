<template>
  <div class="setScenicBanner" ref="contents">
    <el-dialog
      v-dialogDrag
      :title="isEdit ? '编辑Banner' : '新增Banner'"
      :visible.sync="visible"
      width="400px"
      :modal="false"
    >
      <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px">
        <el-form-item label="标题" prop="title">
          <el-input
            size="small"
            v-model="ruleForm.title"
            class="w-240"
            maxlength="20"
            placeholder="请填写（限制20个字)"
          ></el-input>
        </el-form-item>
        <el-form-item label="顺序" prop="sort">
          <el-input
            size="small"
            v-model.number="ruleForm.sort"
            class="w-240"
            placeholder="限数字，数字越小越靠前"
          ></el-input>
        </el-form-item>
        <el-form-item label="开始有效期" prop="start_time">
          <el-date-picker
            size="small"
            type="datetime"
            placeholder="选择日期"
            v-model="ruleForm.start_time"
            value-format="yyyy-MM-dd hh:mm:ss"
            class="w-240"
          ></el-date-picker>
        </el-form-item>
        <el-form-item label="结束有效期" prop="end_time">
          <el-date-picker
            size="small"
            type="datetime"
            placeholder="选择日期"
            v-model="ruleForm.end_time"
            class="w-240"
            value-format="yyyy-MM-dd hh:mm:ss"
          ></el-date-picker>
        </el-form-item>
        <el-form-item class label="Banner图" key="sss">
          <el-upload
            action="/web/helper/uploadimg"
            :on-success="onSuccess"
            :on-preview="handlePictureCardPreview"
            :on-remove="handleRemove"
            :data="uploadData"
            list-type="picture-card"
            :file-list="fileList"
            :limit="1"
            :class="{'once-upload':ruleForm.banner_path}"
          >
            <i class="el-icon-plus"></i>
          </el-upload>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button size="medium" type="primary" @click="submitForm('ruleForm')">确 定</el-button>
        <el-button size="medium" @click="visible = false">取 消</el-button>
      </div>
    </el-dialog>
    <el-dialog :visible.sync="dialogImageVisible" class="no-border">
      <img width="100%" :src="ruleForm.banner_path" alt />
    </el-dialog>
  </div>
</template>
<script>
import dialogMixin from '@mixin/dialogMixin';
import { parse } from '@utils';
import { addBanner, editBanner } from '@api/scenic.js';
import { mapGetters } from 'vuex';
export default {
	name: 'setScenicBanner',
	data() {
		return {
			ruleForm: {
				title: '',
				sort: '',
				start_time: '',
				end_time: '',
				banner_path: ''
			},
			rules: {
				title: [{ required: true, message: '请输入名称', trigger: 'blur' }],
				sort: [{ required: true, message: '请输入排序号', trigger: 'blur' }],
				start_time: [
					{ required: true, message: '请选择开始有效期', trigger: 'change' }
				],
				end_time: [
					{ required: true, message: '请选择结束有效期', trigger: 'change' }
				]
			},
			fileList: [],
			dialogImageVisible: false,
			uploadData: { key: 'file' }
		};
	},
	mixins: [dialogMixin],
	watch: {
		dialogVisible() {
			this.fileList = [];
			if (this.$refs['ruleForm']) {
				this.ruleForm = {
					title: '',
					sort: '',
					start_time: '',
					end_time: '',
					banner_path: ''
				};
				this.fileList = [];
				this.$refs['ruleForm'].resetFields();
			}
			if (this.isEdit) {
				this.ruleForm = parse(this.infoObj);
				this.$set(this.ruleForm, 'banner_path', this.ruleForm.path);
				this.fileList = [{ url: `${this.imgBase}${this.ruleForm.path}` }];
			}
		}
	},
	computed: {
		...mapGetters(['imgBase'])
	},
	methods: {
		/**
     * 关闭弹框
     * @author linbin
     * @date   2019-11-04
     */
		changeDialogVisible() {
			this.$emit('closeDialog');
		},
		submitForm(formName) {
			this.$refs[formName].validate(valid => {
				if (this.ruleForm.banner_path === '') {
					this.$message({
						message: '请上传图片',
						type: 'error'
					});
					return false;
				}
				if (valid) {
					this.loading = true;
					let action = addBanner;
					let message = '新增成功';
					if (this.isEdit) {
						action = editBanner;
						message = '编辑成功';
					}
					action(this.ruleForm)
					.then(() => {
						this.visible = false;
						this.changeDialogVisible();
						this.$message({
							message: message,
							type: 'success'
						});
						this.loading = false;
					})
					.then(() => {
						this.loading = false;
					});
				} else {
					this.loading = false;
					return false;
				}
			});
		},
		/**
     * 查看图片
     * @author linbin
     * @date   2019-11-04
     */
		handlePictureCardPreview(file) {
			this.$set(this.ruleForm, 'banner_path', file.url);
			this.dialogImageVisible = true;
		},
		/**
     * 图片上传成功
     * @author linbin
     * @date   2019-11-04
     */
		onSuccess(res) {
			this.$set(this.ruleForm, 'banner_path', res.data);
		},
		/**
     * 删除图片
     * @author linbin
     * @date   2019-11-04
     */
		handleRemove() {
			this.$set(this.ruleForm, 'banner_path', '');
			this.fileList = [];
		}
	}
};
</script>
<style lang="less" scoped>
.setScenicBanner {
  /deep/ .el-upload-list__item {
    width: 180px;
    height: 72px;
  }
}
</style>
