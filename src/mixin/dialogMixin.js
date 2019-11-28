export default {
	data() {
		return {
			visible: false,
			loading: false,
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
		},
		infoObj: {
			type: Object,
			default: function () {
				return {};
			}
		}
	},
	watch: {
		visible(newValue) {
			this.$emit('update:dialogVisible', newValue);
		},
		dialogVisible(newValue) {
			this.visible = newValue;
		}
	},
	created() {
		this.visible = this.dialogVisible;
	}
};