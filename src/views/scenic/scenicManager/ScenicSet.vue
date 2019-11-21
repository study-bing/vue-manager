<template>
  <div class="setScenic" ref="contents">
    <el-dialog v-dialogDrag title="添加/编辑景区" :visible.sync="visible" width="600px">
      <el-form
        :model="ruleForm"
        :rules="rules"
        ref="ruleForm"
        label-width="100px"
        class="demo-ruleForm"
      >
        <el-form-item label="名称" prop="name">
          <el-input v-model="ruleForm.name" class="w-300"></el-input>
        </el-form-item>
        <el-form-item label="景区类型" prop="type">
          <el-select v-model="ruleForm.type" class="w-300" clearable placeholder="请选择景区类型">
            <el-option
              v-for="item in typeOptions"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="电话" prop="tel">
          <el-input v-model="ruleForm.tel" class="w-300"></el-input>
        </el-form-item>
        <el-form-item label="地址" prop="address">
          <el-input v-model="ruleForm.address" class="w-300"></el-input>
        </el-form-item>
        <el-form-item label="banner图">
          <el-upload
            action="https://jsonplaceholder.typicode.com/posts/"
            list-type="picture-card"
            :on-preview="handlePictureCardPreview"
            :on-remove="handleRemove"
          >
            <i class="el-icon-plus"></i>
          </el-upload>
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
			typeOptions: [
				{
					value: '1',
					label: '无评级'
				},
				{
					value: '2',
					label: '5A'
				},
				{
					value: '3',
					label: '4A'
				},
				{
					value: '4',
					label: '3A'
				},
				{
					value: '5',
					label: '2A'
				}
			],
			ruleForm: {
				name: '',
				type: '',
				tel: '',
				address: ''
			},
			rules: {
				name: [{ required: true, message: '请输入名称', trigger: 'blur' }],
				type: [
					{
						type: 'array',
						required: true,
						message: '请选择景区类型',
						trigger: 'change'
					}
				],
				tel: [{ required: true, message: '请输入电话', trigger: 'blur' }],
				address: [{ required: true, message: '请输入地址', trigger: 'blur' }]
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
			this.$emit('closeDialog');
		},
		submitForm(formName) {
			this.$refs[formName].validate(valid => {
				if (valid) {
					alert('submit!');
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
	}
};
</script>
<style lang="less" scoped>
.setScenic {
}
</style>
