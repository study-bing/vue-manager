<template>
  <div class="editor" ref="contents">
    <div class="container mb24">
      <p>使用方法</p>
      <p class="mb8">引入：import tinymceEditor from '@comp/tinymceEditor';<p/>
      <el-table
      :data="tableData"
      style="width: 100%">
      <el-table-column
        prop="name"
        label="属性"
        width="180">
      </el-table-column>
      <el-table-column
        prop="prop"
        label="类型" width="180">
      </el-table-column>
      <el-table-column
        prop="defaulut"
        label="默认"
        >
      </el-table-column>
      </el-table>
       <el-table
      :data="eventData"
      style="width: 100%">
      <el-table-column
        prop="name"
        label="事件名"
        >
         </el-table-column>
        <el-table-column
        prop="params"
        label="参数"
        >
      </el-table-column>
      </el-table>
    </div>
      <tinymce-editor v-model="tinymceHtml" :disabled="disabled" @onClick="onClick" ref="editor"></tinymce-editor>
  </div>
</template>
<script>
import tinymceEditor from '@comp/tinymceEditor';
export default {
	name: 'editor',
	data() {
		return {
			tinymceHtml: '',
			disabled: false,
			tableData: [{
				name: 'value(v-model)',
				defaulut: '',
				prop: 'String'
			}, {
				name: 'disabled',
				defaulut: 'false',
				prop: 'Boolean'
			}, {
				name: 'plugins',
				defaulut: 'lists image media table textcolor wordcount contextmenu',
				prop: '[String, Array]'
			}],
			eventData:[{
				name: 'onClick',
				params: 'e,tinymce',
			}]
		};
	},
	components: { tinymceEditor },
	methods: {
		//鼠标单击的事件
		onClick(e, editor) {
			console.log('Element clicked');
			console.log(e);
			console.log(editor);
		},
	},
	mounted() {}
};
</script>
