<template>
  <div class="el-workflow-editor-shell-panel">
    <el-form :model="form" ref="formRef" label-position="top" @submit.prevent>
      <el-form-item label="节点名称" prop="name" :rules="nodeData.getFormRules().name" class="node-name">
        <el-input v-model="form.name" show-word-limit :maxlength="36" />
      </el-form-item>
<!--      <el-form-item label="docker镜像" prop="image" :rules="nodeData.getFormRules().image" class="node-item">-->
<!--        <el-select-->
<!--          ref="imageSelectRef"-->
<!--          @keyup.enter="enterSelect"-->
<!--          v-model="form.image"-->
<!--          filterable-->
<!--          allow-create-->
<!--          clearable-->
<!--          placeholder="请选择或输入镜像"-->
<!--        >-->
<!--          <el-option v-for="item in defaultImages" :key="item.id" :label="item.imageName" :value="item.imageName" />-->
<!--        </el-select>-->
<!--      </el-form-item>-->
      <el-form-item class="shell-env node-item">
        <template #label>
          环境变量
<!--          <el-tooltip placement="top">-->
<!--            <template #content>-->
<!--              <div>可以使用表达式，引用全局参数、事件参</div>-->
<!--              <div>-->
<!--                <span>数或上游节点的输出参数，详见</span>-->
<!--                <a-->
<!--                  href="https://v2.jianmu.dev/guide/expression.html"-->
<!--                  target="_blank"-->
<!--                  style="color: #fff; text-decoration: underline"-->
<!--                  >参数章节</a-->
<!--                >-->
<!--              </div>-->
<!--            </template>-->
<!--            <i class="el-icon-button-help"></i>-->
<!--          </el-tooltip>-->
        </template>
        <div class="shell-env-content">
          <shell-env
            v-for="(shell, index) in form.envs"
            :key="shell.key"
            v-model:name="shell.name"
            v-model:value="shell.value"
            :form-model-name="'envs'"
            :index="index"
            :rules="nodeData.getFormRules().envs.fields[index].fields"
            @change="(newVal, oldVal) => changeEnvName(index, oldVal, 'envs')"
            @delete="deleteShellEnv"
          />
          <div class="add-shell-env" @click="addShellEnv">
            <el-icon><Plus /></el-icon>
            添加环境变量
          </div>
        </div>
      </el-form-item>
      <el-form-item label="脚本" class="script-container">
        <el-input type="textarea" placeholder="请输入shell脚本 #!开头" v-model="form.script" />
      </el-form-item>
<!--      <div class="cache-item">-->
<!--        <div class="cache-label">-->
<!--          缓存挂载-->
<!--          <el-tooltip placement="top" :append-to-body="false" content="在顶部缓存模块中添加缓存后，在此挂载">-->
<!--            <i class="el-icon-button-help"></i>-->
<!--          </el-tooltip>-->
<!--        </div>-->
<!--        <cache-selector-->
<!--          v-for="(item, index) in form.caches"-->
<!--          :key="item.key"-->
<!--          :index="index"-->
<!--          v-model:cache-info="cachesInfo"-->
<!--          v-model:name="item.name"-->
<!--          v-model:value="item.value"-->
<!--          :form-model-name="'caches'"-->
<!--          :rules="form.getFormRules().caches.fields[index].fields"-->
<!--          @update-disable="updateDisable"-->
<!--          @update-cache="updateCache"-->
<!--          @change-dir="changeDir"-->
<!--          @delete-selected="deleteCacheSelector"-->
<!--        />-->
<!--        <div class="add-select-cache-btn">-->
<!--          <span class="add-link" @click="addSelector">-->
<!--            <i class="el-icon-button-add" />-->
<!--            <span>添加</span>-->
<!--          </span>-->
<!--        </div>-->
<!--      </div>-->
      <el-form-item
        label="执行失败时"
        class="node-item"
        prop="failureMode"
        :rules="nodeData.getFormRules().failureMode"
        v-if="failureVisible"
      >
        <el-radio-group v-model="form.failureMode">
          <el-radio :label="'suspend'">挂起</el-radio>
          <el-radio :label="'ignore'">忽略</el-radio>
        </el-radio-group>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, PropType, ref } from 'vue';
import { Shell } from '../../model/data/node/shell';
import ShellEnv from './form/shell-env.vue';
import { v4 as uuidv4 } from 'uuid';
import {Plus} from "@element-plus/icons-vue";

export default defineComponent({
  components: {Plus, ShellEnv },
  props: {
    nodeData: {
      type: Object as PropType<Shell>,
      required: true,
    },
  },
  emits: ['form-created'],
  setup(props, { emit }) {
    // 镜像选择框元素
    const formRef = ref();
    const form = ref<Shell>(props.nodeData);
    const failureVisible = ref<boolean>(true);

    // 用户按下enter键选中镜像
    onMounted(() => emit('form-created', formRef.value));

    return {
      formRef,
      form,
      failureVisible,
      // 添加环境变量
      addShellEnv: () => {
        form.value.envs.push({ key: uuidv4(), name: '', value: '' });
      },
      deleteShellEnv: (index: number) => {
        form.value.envs.splice(index, 1);
      },
      changeEnvName: (index: number, oldVal: string, formModelName: string) => {
        form.value.envs.forEach(({ name }, idx) => {
          if (index === idx || oldVal !== name) {
            return;
          }
          formRef.value.validateField(`${formModelName}.${idx}.name`);
        });
      },
    };
  },
});
</script>

<style scoped lang="less">
@import '../../vars';

.el-workflow-editor-shell-panel {
  color: @label-color;
  font-size: 14px;
  padding: 0 20px;

  .node-name {
    margin-top: 20px;
  }

  .node-item {
    padding-top: 10px;

    &:last-child {
      margin-bottom: 20px;
    }
  }

  .shell-env {
    .el-icon-button-help::before {
      margin: 0;
    }

    .shell-env-content {
      border: 1px solid #e6ebf2;

      .add-shell-env {
        padding: 14px 20px;
        color: @primary-color;
        cursor: pointer;

        .el-icon-button-add::before {
          font-weight: 700;
        }
      }
    }
  }

  .cache-item {
    .cache-label {
      line-height: 20px;
      margin-bottom: 16px;
      padding-top: 10px;
      color: #3f536e;
      font-size: 14px;
    }

    ::v-deep(.cache-selector) {
      margin-bottom: 20px;
    }

    .add-select-cache-btn {
      height: 24px;
      font-weight: 400;
      font-size: 14px;
      line-height: 24px;
      color: #096dd9;
      margin-bottom: 26px;

      .add-link {
        cursor: pointer;
      }
    }
  }

  .script-container {
    padding-top: 10px;
  }
}
</style>
