<template>
  <div class="crop-upload" ref="contents">
    <div class="container">
      <p class="mb-16">
        通过vue-image-crop-upload实现图片上传剪切的功能。
        <br />相关文档：
        <a
          class="to-url"
          href="https://github.com/dai-siki/vue-image-crop-upload"
          target="blank"
        >https://github.com/dai-siki/vue-image-crop-upload</a>
      </p>
      <upload-crop
        :imgUrl="ruleForm.imgPath"
        @cropUploadSuccess="cropUploadSuccess"
        @handleRemove="handleRemove"
      ></upload-crop>
    </div>
  </div>
</template>
<script>
import uploadCrop from '@comp/uploadCrop';
export default {
	name: 'cropUpload',
	data() {
		return {
			ruleForm: {
				imgPath: ''
			}
		};
	},
	components: { uploadCrop },
	methods: {
		/**
     * 删除图片
     * @author linbin
     * @date   2019-11-04
     */
		handleRemove() {
			this.$set(this.ruleForm, 'imgPath', '');
		},
		/**
     * 图片上传成功
     * @author linbin
     * @date   2019-11-04
     */
		cropUploadSuccess(jsonData) {
			this.$set(this.ruleForm, 'imgPath', jsonData.data);
		}
	},
	mounted() {}
};
</script>
<style lang="less" scoped>
.to-url {
  color: #12aac7;
}
</style>
