<template>
  <div>
    <div class="crumbs">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item><i class="el-icon-lb-suggest"></i> 自定义图标</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="container">
      <h2>使用方法</h2>
      <p style="line-height: 50px;">
        直接通过设置类名为 el-icon-lx-iconName 来使用即可。例如：（共{{ iconList.length }}个图标）
      </p>
      <p class="example-p">
        <i class="el-icon-lb-un-scan-o" style="font-size: 30px;color: #ff5900"></i>
        <span>&lt;i class=&quot;el-icon-lb-un-scan-o&quot;&gt;&lt;/i&gt;</span>
      </p>
      <p class="example-p">
        <i class="el-icon-lb-un-message-o" style="font-size: 30px;color:#fd5656"></i>
        <span>&lt;i class=&quot;el-icon-lb-un-message-o&quot;&gt;&lt;/i&gt;</span>
      </p>
      <p class="example-p">
        <i class="el-icon-lb-aa-voice-o" style="font-size: 30px;color: #ffc300"></i>
        <span>&lt;i class=&quot;el-icon-lb-aa-voice-o&quot;&gt;&lt;/i&gt;</span>
      </p>
      <br />
      <h2>图标</h2>
      <div class="search-box">
        <el-input class="search" size="large" v-model="keyword" clearable placeholder="请输入图标名称"></el-input>
      </div>
      <ul>
        <li class="icon-li" v-for="(item, index) in list" :key="index">
          <div class="icon-li-content">
            <i :class="`el-icon-lb-${item}`"></i>
            <span>{{ item }}</span>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
	data: function(){
		return {
			keyword: '',
			iconList: [
				'suggest',
				'un-dropdown-o',
				'un-return-o',
				'un-forward-o',
				'un-collapse-o',
				'un-collapse-o',
				'un-message-o',
				'aa-voice-o',
				'un-more-border-o',
				'un-downloadapp-o',
				'un-detail-o',
				'un-upload-o',
				'un-edit-o',
				'un-delete-o',
				'un-share-o',
				'un-calendar-o',
				'un-setup-o',
				'un-clock-o',
				'un-backtotop-o',
				'un-sortbyup-o',
				'un-close-o',
				'un-sortbydown-o',
				'un-add-border-o',
				'un-hotline-o',
				'un-search-o',
				'un-minus-border-o',
				'un-radiobutton-o',
				'un-home-o',
				'un-config-o',
				'un-warning-o',
				'un-progress-o',
				'un-help-o',
				'un-prompt-o',
				'un-eye-o',
				'un-collect-o',
				'un-delete-border-o',
				'un-offical-o',
				'un-confirm-bordero',
				'un-add-o',
				'un-checked-o',
				'un-prompt-o',
				'un-servicer-o',
				'un-favorite-o',
				'un-complain-o',
				'un-mail-o',
				'un-money-o',
				'un-crowd-o',
				'un-mine-o',
				'un-local-o',
				'un-store-o',
				'un-consult-o',
				'un-Refresh-o',
				'un-sfilter-o',
				'youhuiquan',
				'zhuanfa',
				'xiaoxi'
			]
		};
	},
	computed: {
		list(){
			return this.iconList.filter(item => {
				return item.indexOf(this.keyword) !== -1;
			});
		}
	}
};
</script>

<style scoped>
.example-p {
  height: 45px;
  display: flex;
  align-items: center;
}
.search-box {
  text-align: center;
  margin-top: 10px;
}
.search {
  width: 300px;
}
ul,
li {
  list-style: none;
}
.icon-li {
  display: inline-block;
  padding: 10px;
  width: 160px;
  height: 120px;
}
.icon-li-content {
  display: flex;
  height: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}
.icon-li-content i {
  font-size: 36px;
  color: #606266;
}
.icon-li-content span {
  margin-top: 10px;
  color: #787878;
}
</style>
