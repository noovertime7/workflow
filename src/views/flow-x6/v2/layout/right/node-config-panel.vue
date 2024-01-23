<template>
  <el-drawer v-model="drawerOpening" title="节点配置面板" :size="410" direction="rtl" destroy-on-close @closed="save">
    <template #header>
      <div>
        <span>{{ nodeData.getName() }}</span>
        <a :href="nodeData.getDocUrl()" target="_blank" class="el-icon-button-help" />
      </div>
    </template>
    <div class="el-workflow-editor-node-config-panel">
      <el-scrollbar v-if="drawerOpening" class="panel-container">
        <cron-panel
            v-if="nodeData.getType() === 'cron'"
            :node-data="nodeData"
            @form-created="handleFormCreated"
        />
<!--        <webhook-panel-->
<!--            v-else-if="nodeData.getType() === NodeTypeEnum.WEBHOOK"-->
<!--            :node-data="nodeData"-->
<!--            @form-created="handleFormCreated"-->
<!--        />-->
        <shell-panel
            v-if="nodeData.getType() === 'shell'"
            :caches="workflowData.global.caches"
            :node-data="nodeData"
            @form-created="handleFormCreated"
        />
<!--        <async-task-panel-->
<!--            v-else-if="nodeData.getType() === NodeTypeEnum.ASYNC_TASK"-->
<!--            :caches="workflowData.global.caches"-->
<!--            :node-data="nodeData"-->
<!--            @form-created="handleFormCreated"-->
<!--        />-->
      </el-scrollbar>
    </div>
  </el-drawer>
</template>

<script lang="ts">
import { defineComponent, inject, nextTick, PropType, provide, ref } from 'vue';
import ShellPanel from './shell-panel.vue';
// eslint-disable-next-line no-redeclare
import { Graph, Node } from '@antv/x6';
import { CustomX6NodeProxy } from '../../model/data/custom-x6-node-proxy';
import { IWorkflow } from '../../model/data/common';
import CronPanel from "./cron-panel.vue";

export default defineComponent({
  components: {CronPanel,  ShellPanel},
  props: {
    nodeId: {
      type: String,
      required: true,
    },
    nodeWaringClicked: {
      type: Boolean,
      required: true,
    },
    workflowData: {
      type: Object as PropType<IWorkflow>,
      required: true,
    },
    modelValue: {
      type: Boolean,
      required: true,
    },
  },
  watch: {
    modelValue: {
      immediate: true,
      handler(val) {
        console.log("watch change ",val);
      },
    },
  },
  setup(props, { emit }) {
    const modelValue = ref(props.modelValue);

    console.log("props.modelValue",props.modelValue)
    const getGraph = inject('getGraph') as () => Graph;
    const graph = getGraph();
    const drawerOpening = ref<boolean>(false);
    const node = graph.getNodes().find(({ id }) => props.nodeId === id)!;
    const proxy = new CustomX6NodeProxy(node);
    // 不能为ref，否则，表单内容的变化影响数据绑定
    const nodeData = proxy.getData(graph, props.workflowData);
    const formRef = ref();
    provide('getNode', (): Node => node);

    nextTick(() => (drawerOpening.value = true));

    return {
      modelValue,
      drawerOpening,
      nodeData,
      handleFormCreated: (ref: any) => {
        if (!ref) {
          return;
        }
        formRef.value = ref;

        if (!props.nodeWaringClicked) {
          return;
        }
        // 点击节点警告按钮打开配置面板时，自动校验一次表单，实现自动展示错误信息
        // eslint-disable-next-line @typescript-eslint/no-empty-function
        formRef.value.validate().catch(() => {});
      },
      save: () => {
        formRef.value?.validate((valid: boolean) => {
          proxy.setData(nodeData);
          emit('closed', valid);
        });
      },
    };
  },
  emits: ['closed'],
});
</script>
<style lang="less" scoped>
.el-drawer {
  .el-icon-button-help {
    display: inline-block;
    width: 20px;
    height: 20px;
    text-align: center;
    line-height: 20px;
    font-size: 14px;
    margin-left: 2px;

    &:hover {
      background: #eff7ff;
      color: #086cd8;
    }
  }

  .el-workflow-editor-node-config-panel {
    height: 100%;
    display: flex;
    flex-direction: column;

    .panel-container {
      height: calc(100vh - 131px);
    }

    .footer {
      box-sizing: border-box;
      width: 100%;
      height: 63px;
      display: flex;
      border-top: 1px solid #e6ebf2;
      justify-content: center;
      align-items: center;
    }

    .cancel {
      background: #f5f5f5;
      color: #082340;
      border-radius: 2px;
      border: none;
      box-shadow: none;

      &:hover {
        background: #d9d9d9;
      }
    }
  }
}
</style>
