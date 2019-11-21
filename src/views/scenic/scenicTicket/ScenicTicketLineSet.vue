<template>
  <div class="setScenic" ref="contents">
    <el-dialog title="添加/编辑景区" :visible.sync="visible" width="900px">
      <el-form
        :model="ruleForm"
        :rules="rules"
        ref="ruleForm"
        label-width="100px"
        class="demo-ruleForm"
        :inline="true"
      >
        <el-form-item label="门票类型" prop="type">
          <el-select v-model="ruleForm.type" class="w-300" clearable placeholder="请选择景区类型">
            <el-option
              v-for="item in typeOptions"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="门票SKU选择" class="w-full">
          <el-button type="primary">添加</el-button>
          <div class="mt16">
            <el-select v-model="ruleForm.type" class="w-300" clearable placeholder="请选择门票SKU">
              <el-option
                v-for="item in typeOptions"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
            <el-input-number class="ml16" v-model="num" @change="handleChange"></el-input-number>
            <el-button class="ml16">删除</el-button>
          </div>
        </el-form-item>
        <el-form-item label="限购数量" prop="address">
          <div class="w-300">
            <el-input-number v-model="num" @change="handleChange"></el-input-number>
          </div>
        </el-form-item>
        <el-form-item label="原价" prop="address">
          <el-input v-model="ruleForm.address" class="w-300"></el-input>
        </el-form-item>
        <el-form-item label="折扣" prop="address">
          <el-input v-model="ruleForm.address" class="w-300"></el-input>
        </el-form-item>
        <el-form-item label="现价" prop="address">
          <el-input v-model="ruleForm.address" class="w-300"></el-input>
        </el-form-item>
        <el-form-item label="库存" prop="address">
          <el-input v-model="ruleForm.address" class="w-300"></el-input>
        </el-form-item>
        <el-form-item label="售票状态" prop="type">
          <el-select v-model="ruleForm.type" class="w-300" clearable placeholder="请选择景区类型">
            <el-option
              v-for="item in saleTypeOptions"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="销售日期" prop="address">
          <el-date-picker
            v-model="value2"
            type="datetimerange"
            :picker-options="pickerOptions"
            range-separator="至"
            start-placeholder="开始日期"
            end-placeholder="结束日期"
            align="right"
          ></el-date-picker>
        </el-form-item>
        <el-divider content-position="left">预订说明</el-divider>
        <el-form-item label="预订时间" prop="address">
          <el-input v-model="ruleForm.address" class="w-300"></el-input>
        </el-form-item>
        <el-form-item label="有效时间" prop="address">
          <el-input v-model="ruleForm.address" class="w-300"></el-input>
        </el-form-item>
        <el-form-item label="票种说明" prop="address">
          <el-input v-model="ruleForm.address" class="w-300"></el-input>
        </el-form-item>
        <el-divider content-position="left">费用说明</el-divider>
        <el-form-item label="费用包含" prop="address">
          <el-input v-model="ruleForm.address" class="w-300"></el-input>
        </el-form-item>
        <el-divider content-position="left">费用说明</el-divider>
        <el-form-item label="使用方法" prop="address">
          <el-input v-model="ruleForm.address" class="w-300"></el-input>
        </el-form-item>
        <el-form-item label="入园时间" prop="address">
          <el-input v-model="ruleForm.address" class="w-300"></el-input>
        </el-form-item>
        <el-divider content-position="left">费用说明</el-divider>
        <el-form-item label="退改规则" prop="address">
          <el-input v-model="ruleForm.address" class="w-300"></el-input>
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
			dialogImageVisible: false,
			num: 1,
			saleTypeOptions: [
				{
					value: '1',
					label: '可售票'
				},
				{
					value: '2',
					label: '停止售票'
				}
			],
			pickerOptions: {
				shortcuts: [
					{
						text: '最近一周',
						onClick(picker) {
							const end = new Date();
							const start = new Date();
							start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
							picker.$emit('pick', [start, end]);
						}
					},
					{
						text: '最近一个月',
						onClick(picker) {
							const end = new Date();
							const start = new Date();
							start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
							picker.$emit('pick', [start, end]);
						}
					},
					{
						text: '最近三个月',
						onClick(picker) {
							const end = new Date();
							const start = new Date();
							start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
							picker.$emit('pick', [start, end]);
						}
					}
				]
			},
			value1: [new Date(2000, 10, 10, 10, 10), new Date(2000, 10, 11, 10, 10)],
			value2: ''
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
		},
		handleChange(value) {
			console.log(value);
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
