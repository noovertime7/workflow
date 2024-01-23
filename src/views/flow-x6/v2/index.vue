<template>
  <div class="jm-workflow-editor">
    <div v-if="graph">
      <toolbar :workflow-data="workflowData"  @save="handleSave"  />
      <node-config-panel
          v-if="selectedNodeId"
          v-model="nodeConfigPanelVisible"
          :node-id="selectedNodeId"
          :node-waring-clicked="nodeWaringClicked"
          :workflow-data="workflowData"
          modal-class="node-config-panel-overlay"
          @closed="handleNodeConfigPanelClosed"
      />
    </div>
    <div class="main">
      <node-panel v-if="graph" @node-selected="nodeId => handleNodeSelected(nodeId, true)"/>
      <graph-panel
          :workflow-data="workflow"
          @graph-created="handleGraphCreated"
          @node-selected="nodeId => handleNodeSelected(nodeId, true)"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import {IWorkflow} from "./common";
import {cloneDeep} from 'lodash';
import {defineComponent, getCurrentInstance, PropType, provide, ref} from 'vue';
import {WorkflowValidator} from "./model/workflow-validator"
import {Graph, Node} from '@antv/x6';
import GraphPanel from "./layout/main/graph-panel.vue";
import NodePanel from "./layout/left/node-panel.vue";
import NodeConfigPanel from "./layout/right/node-config-panel.vue";
import Toolbar from "./layout/top/toolbar.vue";

const workflow = ref<IWorkflow>({
  name: '未命名项目',
  groupId: '1',
  description: '',
  global: {
    concurrent: 1,
    caches: ["cache"]
  },
  data: ""
});

const {proxy} = getCurrentInstance() as any;


const workflowData = ref<IWorkflow>(cloneDeep(workflow.value));
const selectedNodeId = ref<string>('');
const nodeConfigPanelVisible = ref<boolean>(false);
const nodeWaringClicked = ref<boolean>(false);
const handleNodeSelected = async (nodeId: string, waringClicked: boolean) => {
  nodeConfigPanelVisible.value = true;
  selectedNodeId.value = nodeId;
  nodeWaringClicked.value = waringClicked;

  console.log("selectedNodeId.value = ", selectedNodeId.value)


};
let workflowValidator: WorkflowValidator;


const graph = ref<Graph>();
provide('getGraph', (): Graph => graph.value!);
provide('getWorkflowValidator', (): WorkflowValidator => workflowValidator!);

const handleGraphCreated = (g: Graph) => {
  workflowValidator = new WorkflowValidator(g, proxy, workflowData.value);
  graph.value = g;
}

const handleNodeConfigPanelClosed = (valid: boolean) => {
  const selectedNode = graph.value!.getCellById(selectedNodeId.value) as Node;
  if (valid) {
    workflowValidator.removeWarning(selectedNode);
  } else {
    workflowValidator.addWarning(selectedNode, nodeId => {
      handleNodeSelected(nodeId, true);
    });
  }
  // 取消选中
  graph.value!.unselect(selectedNodeId.value);
  selectedNodeId.value = '';
}


const handleSave =  async ( dsl: string) => {
  console.log("保存",dsl)
}

</script>


<style lang="less">
@import './vars';

.jm-workflow-editor {
  @import './theme/x6';
  @import './theme/el';

  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  background-color: #f0f2f5;
  user-select: none;
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;

  .node-config-panel-overlay {
    background-color: transparent;
    //cursor: not-allowed;
  }

  .main {
    position: relative;
    z-index: 1;
    height: calc(100% - @tool-bar-height);
  }
}
</style>