<template>
  <div class="crop-upload" ref="contents">
    <div class="container">
      <p class="mb16">
        通过vue-image-crop-upload实现图片上传剪切的功能。
        <br />相关文档：
        <a
          class="to-url"
          href="https://github.com/dai-siki/vue-image-crop-upload"
          target="blank"
        >https://github.com/dai-siki/vue-image-crop-upload</a>
      </p>

      <div class="img-box">
        <div v-if="ruleForm.banner_path">
          <img :src="`${imgBase}${ruleForm.banner_path}`" />
          <div class="hover">
            <svg-icon icon-class="eye-open" class="view" @click="handlePictureCardPreview"></svg-icon>
            <i class="el-icon-delete delete" @click="handleRemove"></i>
          </div>
        </div>
        <p @click="toggleShow" v-else class="fs-16 rect-box">+</p>
      </div>
    </div>
    <el-dialog :visible.sync="dialogImageVisible" class="no-border">
      <img width="100%" :src="`${imgBase}${ruleForm.banner_path}`" />
    </el-dialog>
    <my-upload
      field="file"
      @crop-upload-success="cropUploadSuccess"
      @crop-upload-fail="uploadFail"
      v-model="uploadData.show"
      :width="300"
      :height="300"
      :url="action"
      :params="uploadData.params"
      img-format="png"
      :langExt="uploadData.zh"
      langType="zh"
      noCircle
    ></my-upload>
  </div>
</template>
<script>
import 'babel-polyfill';
import myUpload from 'vue-image-crop-upload';
export default {
	name: 'cropUpload',
	data() {
		return {
			action: '',
			ruleForm: { banner_path: '' },
			imgBase: '/',
			dialogImageVisible: false,
			uploadData: {
				show: false,
				zh: {
					preview: '图片预览'
				},
				params: { key: 'file' }
			}
		};
	},
	components: { 'my-upload': myUpload },
	methods: {
		/**
     * 查看图片
     * @author linbin
     * @date   2019-11-04
     */
		handlePictureCardPreview() {
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
		},
		/**
     * 点击上传
     * @author linbin
     * @date   2019-11-04
     */
		toggleShow() {
			this.uploadData.show = !this.uploadData.show;
		},
		/**
     * 图片上传成功
     * @author linbin
     * @date   2019-11-04
     */
		cropUploadSuccess(jsonData) {
			this.$set(this.ruleForm, 'banner_path', jsonData.data);
		},
		/**
     * 图片上传失败
     * @author linbin
     * @date   2019-12-02
     */
		uploadFail() {
			this.$message({
				message: '图片上传失败',
				type: 'error'
			});
		}
	},
	mounted() {}
};
</script>
<style lang="less" scoped>
.img-box {
  height: 72px;
  line-height: 72px;
  display: inline-block;
  text-align: center;
  color: #a0b9db;
  border: 1px solid #a0b9db;
  position: relative;
  overflow: hidden;
  .rect-box {
    width: 72px;
    cursor: pointer;
  }
  img {
    display: inline-block;
    width: 180px;
    height: 72px;
  }

  .hover {
    display: block;
    width: 180px;
    height: 72px;
    position: absolute;
    top: 0;
    i,
    svg {
      display: none;
    }
  }
  .hover:hover {
    background: rgba(0, 0, 0, 0.5);
    border-radius: 3px;
    i,
    svg {
      display: inline-block;
      &.view {
        margin-right: 16px;
      }
      &.delete {
        font-size: 16px;
      }
      color: #ffffff;
      &:hover {
        color: #12aac7;
      }
    }
  }
}
.to-url {
  color: #12aac7;
}
</style>
