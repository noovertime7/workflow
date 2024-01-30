<template>
  <div class="jm-workflow-editor-toolbar">
    <el-button type="primary" @click="save">保存</el-button>
  </div>
</template>

<script lang="ts">
import {defineComponent, onMounted, PropType, ref, inject} from 'vue';
import {Graph} from '@antv/x6';
import {WorkflowValidator} from '../../model/workflow-validator';
import {WorkflowTool} from '../../model/workflow-tool';
import {cloneDeep} from 'lodash';
import {IWorkflow} from '../../model/data/common';

export default defineComponent({
  props: {
    workflowData: {
      type: Object as PropType<IWorkflow>,
      required: true,
    },
  },
  setup(props, {emit}) {
    let workflowBackUp = cloneDeep(props.workflowData);
    const getGraph = inject('getGraph') as () => Graph;
    const getWorkflowValidator = inject('getWorkflowValidator') as () => WorkflowValidator;
    const graph = getGraph();

    const workflowValidator = getWorkflowValidator();
    const workflowTool = new WorkflowTool(graph);

    const workflowForm = ref<IWorkflow>(props.workflowData);


    console.log(workflowValidator,graph)


    return {
      save: async () => {
        try {
          await workflowValidator.checkNodes();
          const graphData = graph.toJSON();
          workflowTool.slimGraphData(graphData);
          workflowForm.value.data = JSON.stringify(graphData);

          emit('save', workflowTool.toDsl(workflowForm.value));
          workflowBackUp = cloneDeep(workflowForm.value);
        }catch ({message}) {
          alert(message)
        }
      }
    }

  }
})


</script>


<style scoped lang="less">
@import '../../vars';

.jm-workflow-editor-toolbar {
  height: @tool-bar-height;
  background: #ffffff;
  z-index: 3;
  font-size: 14px;
  color: #042749;
  padding: 0 30px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  button[class^='jm-icon-'] {
    border-radius: 2px;
    border-width: 0;
    background-color: transparent;
    color: #6b7b8d;
    cursor: pointer;
    text-align: center;
    width: 24px;
    height: 24px;
    font-size: 18px;

    &::before {
      font-weight: 500;
    }

    &:hover {
      background-color: #eff7ff;
      color: @primary-color;
    }
  }

  .left {
    display: flex;
    align-items: center;

    .title {
      margin-left: 20px;
      margin-right: 10px;
      max-width: 253px;
      text-overflow: ellipsis;
      overflow-x: hidden;
      white-space: nowrap;
    }
  }

  .right {
    display: flex;
    justify-content: right;
    align-items: center;

    .tools {
      display: flex;
      align-items: center;

      .ratio {
        width: 40px;
        margin: 0 10px;
        text-align: center;
      }

      .jm-icon-workflow-zoom-in {
        margin-right: 10px;
      }
    }

    .cache {
      height: 20px;
      font-weight: 400;
      font-size: 14px;
      line-height: 20px;
      color: #042749;
      display: flex;
      align-items: center;
      margin: 0 0 0 50px;
      cursor: pointer;
      position: relative;

      .jm-icon-workflow-cache {
        margin-right: 6px;

        &::before {
          color: #6b7b8d;
        }
      }

      .cache-icon {
        display: flex;
        width: 12px;
        height: 12px;
        background: url('../../svgs/cache-waring.svg');
        position: absolute;
        right: -8px;
        top: -4px;
      }
    }

    .configs {
      display: flex;
      align-items: center;
      margin: 0 60px 0 44px;
      position: relative;

      ::v-deep(.el-select) {
        width: 88px;
        height: 36px;

        .el-input__icon {
          display: none;
        }

        .el-input {
          &.is-focus {
            .el-input__inner {
              border-color: #096dd9;
            }
          }

          .el-input__inner {
            border-color: #dde3ee;
          }
        }
      }

      .jm-icon-button-help {
        width: 24px;
        height: 24px;
        margin-right: 8px;
        color: #6b7b8d;
        text-align: center;
        line-height: 24px;
        font-size: 14px;
      }

      .tooltip-popper {
        width: 436px;
        height: 295px;
        padding: 16px;
        background: #ffffff;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
        border-radius: 4px;
        box-sizing: border-box;

        position: absolute;
        top: 51px;
        right: 100px;

        .popper-description {
          font-weight: 500;
          font-size: 18px;
          color: #042749;
        }

        .concurrent-example {
          border: 10px solid #f0f2f5;
          margin-top: 8px;
        }
      }

      > div + div {
        margin-left: 10px;
      }
    }

    .operations {
      .save-return {
        background: #f5f5f5;
        border-radius: 2px;
        color: #082340;
        border: none;
        box-shadow: none;

        &:hover {
          background: #d9d9d9;
        }
      }
    }
  }
}
</style>
