<template>
  <div class="el-workflow-editor-cron-panel">
    <el-form
        :model="form"
        :rules="form.getFormRules()"
        ref="formRef"
        @submit.prevent
        label-position="top"
    >
      <el-form-item label="节点名称" prop="name" :rules="nodeData.getFormRules().name" class="node-name">
        <el-input v-model="form.name" show-word-limit :maxlength="36" />
      </el-form-item>
      <el-form-item prop="unit" label="单位">
        <el-select v-model="form.unit" placeholder="时间单位">
          <el-option v-for="unit in TimeUnit" :key="unit" :label="unit" :value="unit"></el-option>
        </el-select>

      </el-form-item>
      <el-form-item prop="unit" label="时间">
        <el-input v-model="form.time" placeholder="时间单位">
        </el-input>
      </el-form-item>

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
import {DelayTime} from "../../model/data/node/delay_time";
import {TimeUnit} from "../../model/data/enumeration";

export default defineComponent({
  computed: {
    TimeUnit() {
      return TimeUnit
    }
  },
  props: {
    nodeData: {
      type: Object as PropType<DelayTime>,
      required: true,
    },
  },
  emits: ['form-created'],
  setup(props, { emit }) {
    const failureVisible = ref<boolean>(false);
    const formRef = ref();
    const form = ref<DelayTime>(props.nodeData);

    onMounted(() => emit('form-created', formRef.value));

    return {
      formRef,
      form,
      failureVisible,
    };
  },
});
</script>
