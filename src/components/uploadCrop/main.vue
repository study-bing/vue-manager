<template>
  <div>
    <div
      class="img-box"
      :class="{ 'no-border': imgUrl }"
      :style="{
        width: width + 'px',
        height: height + 'px',
        'line-height': height + 'px'
      }"
    >
      <div v-if="imgUrl">
        <img :src="`${imgBase}${imgUrl}`" />
        <div class="hover">
          <svg-icon icon-class="eye-open" class="view" @click="handlePictureCardPreview"></svg-icon>
          <i class="el-icon-delete delete" @click="handleRemove"></i>
        </div>
      </div>
      <p @click="toggleShow" v-else class="fs-16 rect-box">+</p>
    </div>
    <span v-if="!imgUrl" class="tip-upload">推荐尺寸{{width}}px*{{height}}px</span>
    <el-dialog :visible.sync="dialogImageVisible" class="no-border">
      <img width="100%" :src="`${imgBase}${imgUrl}`" />
    </el-dialog>
    <my-upload
      field="file"
      @crop-upload-success="cropUploadSuccess"
      @crop-upload-fail="uploadFail"
      v-model="uploadData.show"
      :width="width"
      :height="height"
      :url="action"
      :params="uploadData.params"
      img-format="png"
      :langExt="uploadData.zh"
      :headers="uploadData.headers"
      langType="zh"
      noCircle
    ></my-upload>
  </div>
</template>

<script>
import myUpload from 'vue-image-crop-upload';
import { mapGetters } from 'vuex';
export default {
	name: 'uploadCrop',
	props: {
		imgUrl: {
			type: String,
			default: ''
		},
		width: {
			type: Number,
			default: 750
		},
		height: {
			type: Number,
			default: 360
		}
	},
	data() {
		return {
			action: `${process.env.BASE_URL}/op/upload`,
			dialogImageVisible: false,
			loading: false,
			uploadData: {
				show: false,
				zh: {
					preview: '图片预览'
				},
				params: { key: 'file' },
				headers: { Authorization: `Bearer ${localStorage.getItem('opToken')}` }
			}
		};
	},
	components: { myUpload },
	computed: {
		...mapGetters(['imgBase'])
	},
	methods: {
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
			this.$emit('cropUploadSuccess', jsonData);
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
		},
		/**
     * 查看图片
     * @author linbin
     * @date   2019-11-04
     */
		handlePictureCardPreview() {
			this.dialogImageVisible = true;
		},
		/**
     * 删除图片
     * @author linbin
     * @date   2019-11-04
     */
		handleRemove() {
			this.$emit('handleRemove');
		}
	}
};
</script>
<style lang="less">
//图片上传
.img-box {
  min-width: 72px;
  height: 72px;
  line-height: 72px;
  display: inline-block;
  text-align: center;
  color: #a0b9db;
  position: relative;
  overflow: hidden;
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  &.no-border {
    border: none !important;
  }
  .rect-box {
    width: 100%;
    cursor: pointer;
  }

  img {
    display: inline-block;
    width: 100%;
    height: 100%;
  }

  .hover {
    display: block;
    width: 100%;
    height: 100%;
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
</style>
