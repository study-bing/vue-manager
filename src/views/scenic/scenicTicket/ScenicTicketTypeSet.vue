<template>
  <div class="setScenic" ref="contents">
    <el-dialog title="添加/编辑景区" :visible.sync="visible" width="600px">
      <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px">
        <el-form-item label="类型编号" prop="number">
          <el-input v-model="ruleForm.number" class="w-300"></el-input>
        </el-form-item>
        <el-form-item label="门票类型" prop="name">
          <el-input v-model="ruleForm.name" class="w-300"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="visible = false">取 消</el-button>
        <el-button type="primary" @click="submitForm('ruleForm')">确 定</el-button>
      </div>
    </el-dialog>
    <el-dialog :visible.sync="dialogImageVisible">
      <img width="100%" :src="dialogImageUrl" alt />
    </el-dialog>
  </div>
</template>
<script>
export default {
	name: 'setScenic',
	data() {
		return {
			visible: false,
			ruleForm: {
				name: '',
				number: ''
			},
			rules: {
				number: [
					{ required: true, message: '请输入类型编号', trigger: 'blur' }
				],

				name: [{ required: true, message: '请输入门票类型', trigger: 'blur' }]
			},
			dialogImageUrl: '',
			dialogImageVisible: false
		};
	},
	props: {
		dialogVisible: {
			type: Boolean,
			default: false
		},
		isEdit: {
			type: Boolean,
			default: false
		}
	},
	watch: {
		visible(newValue) {
			this.$emit('update:dialogVisible', newValue);
			this.changeDialogVisible();
		},
		dialogVisible(newValue) {
			this.visible = newValue;
		}
	},
	methods: {
		/**
     * 关闭弹框
     * @author linbin
     * @date   2019-11-04
     */
		changeDialogVisible() {
			if (!this.visible) {
				this.$refs['ruleForm'].resetFields();
			}
			this.$emit('closeDialog');
		},
		submitForm(formName) {
			this.$refs[formName].validate(valid => {
				if (valid) {
					this.visible = false;
					this.$emit('submitSuccess', this.ruleForm);
				} else {
					console.log('error submit!!');
					return false;
				}
			});
		},
		resetForm(formName) {
			this.$refs[formName].resetFields();
		},
		handleRemove(file, fileList) {
			console.log(file, fileList);
		},
		handlePictureCardPreview(file) {
			this.dialogImageUrl = file.url;
			this.dialogImageVisible = true;
		}
	},
	created() {
		this.visible = this.dialogVisible;
	},
	mounted() {}
};
</script>
<style lang="less" scoped>
.setScenic {
}
</style>
