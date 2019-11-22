<template>
  <div>
    <sticky :z-index="10" class-name="test-navbar">
      <el-button type="success">publish</el-button>
    </sticky>

    <div class="components-container">
      <aside>Sticky header, 当页面滚动到预设的位置会吸附在顶部</aside>
      <div>喜荣科技</div>
      <div>喜荣科技</div>
      <div>喜荣科技</div>
      <div>喜荣科技</div>
      <div>喜荣科技</div>
      <div>喜荣科技</div>
      <div>喜荣科技</div>
      <div>喜荣科技</div>
      <div>喜荣科技</div>
      <div>喜荣科技</div>
      <div>喜荣科技</div>
      <div>喜荣科技</div>
      <div>喜荣科技</div>
      <sticky :sticky-top="200">
        <el-button type="primary">喜荣科技</el-button>
      </sticky>
      <div>喜荣科技</div>
      <div>喜荣科技</div>
      <div>喜荣科技</div>
      <div>喜荣科技</div>
      <div>喜荣科技</div>
      <div>喜荣科技</div>
      <div>喜荣科技</div>
      <div>喜荣科技</div>
      <div>喜荣科技</div>
      <div>喜荣科技</div>
      <div>喜荣科技</div>
      <div>喜荣科技</div>
      <div>喜荣科技</div>
      <div>喜荣科技</div>
      <div>喜荣科技</div>
      <div>喜荣科技</div>
      <div>喜荣科技</div>
      <div>喜荣科技</div>
      <div>喜荣科技</div>
      <div>喜荣科技</div>
      <div>喜荣科技</div>
      <div>喜荣科技</div>
      <div>喜荣科技</div>
      <div>喜荣科技</div>
      <div>喜荣科技</div>
      <div>喜荣科技</div>
      <div>喜荣科技</div>
      <div>喜荣科技</div>
      <div>喜荣科技</div>
      <div>喜荣科技</div>
      <div>喜荣科技</div>
      <div>喜荣科技</div>
      <div>喜荣科技</div>
      <div>喜荣科技</div>
      <div>喜荣科技</div>
      <div>喜荣科技</div>
      <div>喜荣科技</div>
      <div>喜荣科技</div>
    </div>
  </div>
</template>

<script>
import sticky from '@comp/sticky';

export default {
	name: 'StickyDemo',
	components: { sticky },
	data() {
		return {
			time: '',
			url: '',
			platforms: ['a-platform'],
			platformsOptions: [
				{ key: 'a-platform', name: 'platformA' },
				{ key: 'b-platform', name: 'platformB' },
				{ key: 'c-platform', name: 'platformC' }
			],
			pickerOptions: {
				disabledDate(time) {
					return time.getTime() > Date.now();
				}
			}
		};
	}
};
</script>

<style scoped>
.components-container div {
  margin: 10px;
}

.time-container {
  display: inline-block;
}
.test-navbar {
  height: 60px;
  line-height: 60px;
  position: relative;
  width: 100%;
  text-align: right;
  padding-right: 20px;
  -webkit-transition: position 0.6s ease;
  transition: position 0.6s ease;
  background: -webkit-gradient(
    linear,
    left top,
    right top,
    from(#20b6f9),
    color-stop(0, #20b6f9),
    color-stop(100%, #2178f1),
    to(#2178f1)
  );
  background: linear-gradient(
    90deg,
    #20b6f9,
    #20b6f9 0,
    #2178f1 100%,
    #2178f1 0
  );
}
</style>
