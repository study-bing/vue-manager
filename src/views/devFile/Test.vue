<template>
  <div class="test" ref="contents">
    <div class="card-list">
      <div
        class="card-li"
        :class="{active: active === index}"
        @click="checkCard(index)"
        v-for="(item ,index) in liList"
        :key="index"
      >{{index === active ? item : index + 1}}</div>
      <!-- <div
        class="card-li"
        :class="{active: active === index}"
        @click="checkCard(index)"
        v-for="(item ,index) in liList"
        :key="index"
      >{{item}}</div>-->
    </div>
    <el-button type="danger" round @click="randomList">随机</el-button>
  </div>
</template>
<script>
export default {
	name: 'test',
	data() {
		return {
			initLiList: [
				'😈',
				'😈',
				'😁',
				'😁',
				'😢',
				'😭',
				'😢',
				'😭',
				'😡',
				'😡',
				'🙄',
				'🙄'
			],
			active: '',
			liList: []
		};
	},
	methods: {
		randomList() {
			this.liList = JSON.parse(JSON.stringify(this.initLiList));
			this.active = '';
			this.liList.sort(() => {
				return Math.random() - 0.5;
			});
		},
		checkCard(index) {
			if (this.active === index) {
				return false;
			}
			if (this.liList[index] === this.liList[this.active]) {
				this.$set(this.liList, index, '');
				this.$set(this.liList, this.active, '');
				this.liList = this.liList.filter(el => {
					return el;
				});
				this.active = '';
			} else {
				this.active = index;
			}
		}
	},
	mounted() {
		this.randomList();
	}
};
</script>
<style lang="less" scoped>
.card-list {
  display: flex;
  flex-flow: wrap;
  .card-li {
    width: 100px;
    height: 100px;
    border-radius: 4px;
    border: 1px solid #ebeef5;
    background-color: #fff;
    overflow: hidden;
    color: #303133;
    transition: 0.3s;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
    margin-bottom: 16px;
    margin-right: 16px;
    display: flex;
    justify-content: center;
    align-content: center;
    align-items: center;
    color: #666666;
    &.active {
      background: #f56c6c;
      color: #ffffff;
    }
  }
}
</style>
