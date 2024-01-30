<template>
  <div class="el-workflow-editor-cron-panel">
    <el-form
        :model="form"
        :rules="form.getFormRules()"
        ref="formRef"
        @submit.prevent
        label-position="top"
    >
     <el-empty >正在开发中</el-empty>

      <el-form-item
          label="执行失败时"
          prop="failureMode"
          :rules="nodeData.getFormRules().failureMode"
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
import {Notifications} from "../../model/data/node/dingding";
import {TimeUnit} from "../../model/data/enumeration";

export default defineComponent({
  computed: {
    TimeUnit() {
      return TimeUnit
    }
  },
  props: {
    nodeData: {
      type: Object as PropType<Notifications>,
      required: true,
    },
  },
  emits: ['form-created'],
  setup(props, { emit }) {
    const failureVisible = ref<boolean>(false);
    const formRef = ref();
    const form = ref<Notifications>(props.nodeData);

    onMounted(() => emit('form-created', formRef.value));

    return {
      formRef,
      form,
      failureVisible,
    };
  },
});
</script>
