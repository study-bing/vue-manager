<template>
  <div :style="{height:height+'px',zIndex:zIndex}" ref="content">
    <div
      :class="className"
      :style="{top:(isSticky ? stickyTop +'px' : ''),zIndex:zIndex,position:position,width:width,height:height+'px'}"
    >
      <slot>
        <div>sticky</div>
      </slot>
    </div>
  </div>
</template>

<script>
export default {
	name: 'sticky',
	props: {
		stickyTop: {
			// 距离窗口顶部
			type: Number,
			default: 110
		},
		zIndex: {
			type: Number,
			default: 1
		},
		className: {
			type: String,
			default: ''
		}
	},
	data() {
		return {
			active: false,
			position: '',
			width: undefined,
			height: undefined,
			isSticky: false
		};
	},
	mounted() {
		this.height = this.$el.getBoundingClientRect().height;
		console.log(this.$parent.$el.addEventListener);
		this.$parent.$el.addEventListener('scroll', this.handleScroll);
		this.$parent.$el.addEventListener('resize', this.handleResize);
	},
	activated() {
		this.handleScroll();
	},
	destroyed() {
		this.$parent.$el.removeEventListener('scroll', this.handleScroll);
		this.$parent.$el.removeEventListener('resize', this.handleResize);
	},
	methods: {
		sticky() {
			if (this.active) {
				return;
			}
			this.position = 'fixed';
			this.active = true;
			this.width = this.width + 'px';
			this.isSticky = true;
		},
		handleReset() {
			if (!this.active) {
				return;
			}
			this.reset();
		},
		reset() {
			this.position = '';
			this.width = 'auto';
			this.active = false;
			this.isSticky = false;
		},
		handleScroll() {
			const width = this.$el.getBoundingClientRect().width;
			this.width = width || 'auto';
			const offsetTop = this.$el.getBoundingClientRect().top;
			console.log(this.$el.getBoundingClientRect());
			if (offsetTop < this.stickyTop) {
				this.sticky();
				return;
			}
			this.handleReset();
		},
		handleResize() {
			if (this.isSticky) {
				this.width = this.$el.getBoundingClientRect().width + 'px';
			}
		}
	}
};
</script>
