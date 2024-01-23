<template>
  <div class="jm-workflow-editor-graph-panel">
    <node-toolbar ref="nodeToolbar"/>
    <div ref="container" @wheel.prevent="wheelScrollGraph"/>
  </div>
</template>
<script lang="ts">

import {defineComponent, PropType, getCurrentInstance, ref,provide,onMounted,onUnmounted} from "vue";
import { WorkflowGraph } from "../../model/workflow-graph";
import {IWorkflow} from "../../common";
import {WorkflowNodeToolbar} from "../../model/workflow-node-toolbar";
import NodeToolbar from "./node-toolbar.vue";


export default defineComponent({
  components: {NodeToolbar},
  props: {
    workflowData: {
      type: Object as PropType<IWorkflow>,
      required: true,
    },
  },
  emits: ['graph-created', 'node-selected'],
  setup(props, {emit}) {
    const nodeToolbar = ref();
    const {proxy} = getCurrentInstance() as any;
    const container = ref<HTMLElement>();

    let workflowGraph: WorkflowGraph;
    provide('getWorkflowNodeToolbar', (): WorkflowNodeToolbar => workflowGraph!.workflowNodeToolbar);


    onMounted(() => {
      // 初始化画布
      workflowGraph = new WorkflowGraph(proxy, container.value!,
          (nodeId: string) => emit('node-selected', nodeId));

      emit('graph-created', workflowGraph.x6Graph);
      // 渲染画布，回显
      workflowGraph.render(props.workflowData.data);

    });

    onUnmounted(() => workflowGraph.destroy());

    return {
      nodeToolbar,
      container,
      wheelScrollGraph: (e: WheelEvent) => {
        if (!workflowGraph) {
          return;
        }

        workflowGraph.wheelScroll(e);
      },
    };

  }
})

</script>


<style scoped lang="less">
@import '../../vars';

.jm-workflow-editor-graph-panel {
  height: 100%;
}
</style>