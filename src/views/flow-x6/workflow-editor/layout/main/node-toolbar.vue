<template>
  <div class="jm-workflow-editor-node-toolbar">
    <el-icon class="jm-icon-button-delete" @click="deleteNode">
      <Delete />
    </el-icon>
  </div>
</template>

<script lang="ts">
import { defineComponent, inject } from 'vue';
import {WorkflowNodeToolbar} from "../../model/workflow-node-toolbar";
import {Delete} from "@element-plus/icons-vue";

export default defineComponent({
  components: {Delete},
  setup(props, context) {
    const getWorkflowNodeToolbar = inject('getWorkflowNodeToolbar') as () => WorkflowNodeToolbar;

    return {
      deleteNode: () => {
        getWorkflowNodeToolbar().removeNode();
      },
    };
  },
});
</script>

<style scoped lang="less">
.jm-workflow-editor-node-toolbar {
  position: absolute;
  left: -1000px;
  top: -1000px;
  z-index: 1;
  padding-top: 5px;

  .jm-icon-button-delete {
    cursor: pointer;
    font-size: 18px;

    &:hover {
      color: #F5222D;
    }
  }
}
</style>