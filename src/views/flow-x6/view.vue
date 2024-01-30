<template>
  <div class="project-preview-dialog">
      <div class="content" v-loading="loading">
        <workflow-viewer
            :dsl="dsl"
            readonly
            :node-infos="nodeDefs"
            :trigger-type="triggerType"/>
      </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, getCurrentInstance, onBeforeMount, ref, SetupContext } from 'vue';

import { INodeDefVo } from '@/api/dto/project';
import WorkflowViewer from "./workflow-viewer/index.vue";
export enum TriggerTypeEnum {
  WEBHOOK = 'WEBHOOK',
  CRON = 'CRON',
  MANUAL = 'MANUAL',
}

export default defineComponent({
  components: {WorkflowViewer},
  props: {
    projectId: {
      type: String,
      required: true,
    },
  },
  // 覆盖dialog的close事件
  emits: ['close'],
  setup(props: any, { emit }: SetupContext) {
    const fetchProjectDetail = async (id: string) => {
      return {
        "id": "477b98313ca74aafa9478d77f42a020e",
        "dslSource": "LOCAL",
        "dslType": "PIPELINE",
        "triggerType": "MANUAL",
        "gitRepoId": "",
        "workflowName": "建木Worker-Docker生产环境CD",
        "workflowDescription": "建木Worker-Docker生产环境CD",
        "workflowRef": "1c38eedf9f2844ea98470aa86013c5fc",
        "workflowVersion": "af2df9663ce44d2381c3cf3fbcaa7cad",
        "steps": 3,
        "dslText": "# 部署生产，通过上游打镜像流程，触发（结合chat-ops）\nname: 建木Worker-Docker生产环境CD\ndescription: 建木Worker-Docker生产环境CD\n\nglobal:\n  param:\n    image_name: docker.jianmuhub.com/jianmu/jianmu-worker-docker\n    image_tag: v1.0.9\n\npipeline:\n  deploy_server:\n    type: ssh_cmd:1.0.2\n    param:\n      ssh_ip: 172.16.101.210\n      ssh_user: ubuntu\n      ssh_private_key: ((private_key.210))\n      ssh_cmd: >-\n        docker images\n        &&\n        docker ps\n        &&\n        cd /home/ubuntu/ci\n        &&\n        source ./.env\n        &&\n        echo source version: $worker_version\n        &&\n        echo target version: ${global.image_tag}\n        &&\n        docker-compose stop worker\n        &&\n        docker-compose rm -vf worker\n        &&\n        docker rmi ${global.image_name}:$worker_version\n        &&\n        cp .env .env.$(date +'%Y-%m-%d_%H:%M:%S')\n        &&\n        sed -i '/^worker_version=/d' .env\n        &&\n        echo worker_version=${global.image_tag} >> .env\n        &&\n        docker-compose up -d worker\n        &&\n        docker images\n        &&\n        docker ps\n        &&\n        echo done\n  feishu_notice:\n    type: feishu_notice_interactive:1.0.4\n    param:\n      bot_webhook_url: ((feishu.webhook_url))\n      msg_title: 建木Worker-Docker生产环境更新完成\n      msg_markdown: \"版本：${global.image_tag}\\n\\n网址：[https://ci.jianmu.dev](https://ci.jianmu.dev)\"\n  send_email:\n    type: email:1.0.1\n    param:\n      host: smtp.ym.163.com\n      sender: notice@jianmu.dev\n      auth_code: ((email.notice_auth_code))\n      receivers: '[\"dev@jianmu.dev\"]'\n      type: html\n      subject: 建木Worker-Docker生产环境更新完成:${global.image_tag}\n      text: 建木Worker-Docker生产环境更新完成。<br/>版本：${global.image_tag}<br/><br/>网址：https://ci.jianmu.dev",
        "createdTime": "2022-06-23T16:39:58",
        "lastModifiedBy": "admin",
        "lastModifiedTime": "2023-03-14T15:34:11",
        "projectGroupId": "24f43de0f5b549bca2b3fc30d8c48897",
        "projectGroupName": "建木CI"
      }
    };

    const fetchWorkflow = async (workflowRef: string, workflowVersion: string) => {
      return {
        "name": "建木Worker-Docker生产环境CD",
        "ref": "1c38eedf9f2844ea98470aa86013c5fc",
        "type": "PIPELINE",
        "description": "建木Worker-Docker生产环境CD",
        "version": "af2df9663ce44d2381c3cf3fbcaa7cad",
        "nodes": [
          {
            "name": "飞书通知-消息卡片",
            "ref": "feishu_notice",
            "description": "⻜书⾃定义机器⼈发送消息卡⽚",
            "sources": [
              "deploy_server"
            ],
            "targets": [
              "send_email"
            ],
            "loopPairs": [],
            "type": "feishu_notice_interactive:1.0.4",
            "failureMode": "SUSPEND",
            "metadata": "{\"name\":\"飞书通知-消息卡片\",\"description\":\"⻜书⾃定义机器⼈发送消息卡⽚\",\"icon\":\"https://jianmuhub.img.dghub.cn/node-definition/icon/FhaFsSZDMEklnTnzLc1qcj1IWXH5\",\"ownerName\":\"建木\",\"ownerType\":\"ORGANIZATION\",\"ownerRef\":\"_\",\"creatorName\":\"jianmu\",\"creatorRef\":\"laoji\",\"sourceLink\":\"https://gitee.com/jianmu-runners/jianmu-runner-feishu\",\"documentLink\":\"\",\"type\":\"feishu_notice_interactive:1.0.4\",\"workerType\":\"DOCKER\"}",
            "taskParameters": [
              {
                "ref": "msg_title",
                "type": "STRING",
                "expression": "建木Worker-Docker生产环境更新完成"
              },
              {
                "ref": "bot_webhook_url",
                "type": "SECRET",
                "expression": "((feishu.webhook_url))"
              },
              {
                "ref": "msg_markdown",
                "type": "STRING",
                "expression": "版本：${global.image_tag}\n\n网址：[https://ci.jianmu.dev](https://ci.jianmu.dev)"
              }
            ]
          },
          {
            "name": "Start",
            "ref": "Start",
            "sources": [],
            "targets": [
              "deploy_server"
            ],
            "loopPairs": [],
            "type": "Start",
            "failureMode": "SUSPEND"
          },
          {
            "name": "End",
            "ref": "End",
            "sources": [
              "send_email"
            ],
            "targets": [],
            "loopPairs": [],
            "type": "End",
            "failureMode": "SUSPEND"
          },
          {
            "name": "ssh执行命令",
            "ref": "deploy_server",
            "description": "通过ssh跳转到指定主机执行指定命令。",
            "sources": [
              "Start"
            ],
            "targets": [
              "feishu_notice"
            ],
            "loopPairs": [],
            "type": "ssh_cmd:1.0.2",
            "failureMode": "SUSPEND",
            "metadata": "{\"name\":\"ssh执行命令\",\"description\":\"通过ssh跳转到指定主机执行指定命令。\",\"icon\":\"https://jianmuhub.img.dghub.cn/node-definition/icon/FuR2Q_RwpR-J1vBT5vQ9nhl3cRGG\",\"ownerName\":\"建木\",\"ownerType\":\"ORGANIZATION\",\"ownerRef\":\"_\",\"creatorName\":\"jianmu\",\"creatorRef\":\"laoji\",\"sourceLink\":\"https://gitee.com/jianmu-runners/jianmu-runner-ssh\",\"documentLink\":\"\",\"type\":\"ssh_cmd:1.0.2\",\"workerType\":\"DOCKER\"}",
            "taskParameters": [
              {
                "ref": "ssh_private_key",
                "type": "SECRET",
                "expression": "((private_key.210))"
              },
              {
                "ref": "ssh_cmd",
                "type": "STRING",
                "expression": "docker images && docker ps && cd /home/ubuntu/ci && source ./.env && echo source version: $worker_version && echo target version: ${global.image_tag} && docker-compose stop worker && docker-compose rm -vf worker && docker rmi ${global.image_name}:$worker_version && cp .env .env.$(date +'%Y-%m-%d_%H:%M:%S') && sed -i '/^worker_version=/d' .env && echo worker_version=${global.image_tag} >> .env && docker-compose up -d worker && docker images && docker ps && echo done"
              },
              {
                "ref": "ssh_user",
                "type": "STRING",
                "expression": "ubuntu"
              },
              {
                "ref": "ssh_ip",
                "type": "STRING",
                "expression": "172.16.101.210"
              }
            ]
          },
          {
            "name": "发送邮件",
            "ref": "send_email",
            "description": "自定义发送邮件，使用SMTP协议或SMTP_SSL协议，邮件格式支持plain、html和附件，发送类型支持群发、分别发送、抄送和密送",
            "sources": [
              "feishu_notice"
            ],
            "targets": [
              "End"
            ],
            "loopPairs": [],
            "type": "email:1.0.1",
            "failureMode": "SUSPEND",
            "metadata": "{\"name\":\"发送邮件\",\"description\":\"自定义发送邮件，使用SMTP协议或SMTP_SSL协议，邮件格式支持plain、html和附件，发送类型支持群发、分别发送、抄送和密送\",\"icon\":\"https://jianmuhub.img.dghub.cn/node-definition/icon/FoYp6c62VmRSpCjk1Q4at4NHAPGd\",\"ownerName\":\"建木\",\"ownerType\":\"ORGANIZATION\",\"ownerRef\":\"_\",\"creatorName\":\"jianmu\",\"creatorRef\":\"laoji\",\"sourceLink\":\"https://gitee.com/jianmu-runners/jianmu-runner-email\",\"documentLink\":\"\",\"type\":\"email:1.0.1\",\"workerType\":\"DOCKER\"}",
            "taskParameters": [
              {
                "ref": "host",
                "type": "STRING",
                "expression": "smtp.ym.163.com"
              },
              {
                "ref": "sender",
                "type": "STRING",
                "expression": "notice@jianmu.dev"
              },
              {
                "ref": "subject",
                "type": "STRING",
                "expression": "建木Worker-Docker生产环境更新完成:${global.image_tag}"
              },
              {
                "ref": "text",
                "type": "STRING",
                "expression": "建木Worker-Docker生产环境更新完成。<br/>版本：${global.image_tag}<br/><br/>网址：https://ci.jianmu.dev"
              },
              {
                "ref": "auth_code",
                "type": "SECRET",
                "expression": "((email.notice_auth_code))"
              },
              {
                "ref": "type",
                "type": "STRING",
                "expression": "html"
              },
              {
                "ref": "receivers",
                "type": "STRING",
                "expression": "[\"dev@jianmu.dev\"]"
              }
            ]
          }
        ],
        "globalParameters": [
          {
            "name": "image_tag",
            "type": "STRING",
            "value": "v1.0.9"
          },
          {
            "name": "image_name",
            "type": "STRING",
            "value": "docker.jianmuhub.com/jianmu/jianmu-worker-docker"
          }
        ],
        "dslText": "# 部署生产，通过上游打镜像流程，触发（结合chat-ops）\nname: 建木Worker-Docker生产环境CD\ndescription: 建木Worker-Docker生产环境CD\n\nglobal:\n  param:\n    image_name: docker.jianmuhub.com/jianmu/jianmu-worker-docker\n    image_tag: v1.0.9\n\npipeline:\n  deploy_server:\n    type: ssh_cmd:1.0.2\n    param:\n      ssh_ip: 172.16.101.210\n      ssh_user: ubuntu\n      ssh_private_key: ((private_key.210))\n      ssh_cmd: >-\n        docker images\n        &&\n        docker ps\n        &&\n        cd /home/ubuntu/ci\n        &&\n        source ./.env\n        &&\n        echo source version: $worker_version\n        &&\n        echo target version: ${global.image_tag}\n        &&\n        docker-compose stop worker\n        &&\n        docker-compose rm -vf worker\n        &&\n        docker rmi ${global.image_name}:$worker_version\n        &&\n        cp .env .env.$(date +'%Y-%m-%d_%H:%M:%S')\n        &&\n        sed -i '/^worker_version=/d' .env\n        &&\n        echo worker_version=${global.image_tag} >> .env\n        &&\n        docker-compose up -d worker\n        &&\n        docker images\n        &&\n        docker ps\n        &&\n        echo done\n  feishu_notice:\n    type: feishu_notice_interactive:1.0.4\n    param:\n      bot_webhook_url: ((feishu.webhook_url))\n      msg_title: 建木Worker-Docker生产环境更新完成\n      msg_markdown: \"版本：${global.image_tag}\\n\\n网址：[https://ci.jianmu.dev](https://ci.jianmu.dev)\"\n  send_email:\n    type: email:1.0.1\n    param:\n      host: smtp.ym.163.com\n      sender: notice@jianmu.dev\n      auth_code: ((email.notice_auth_code))\n      receivers: '[\"dev@jianmu.dev\"]'\n      type: html\n      subject: 建木Worker-Docker生产环境更新完成:${global.image_tag}\n      text: 建木Worker-Docker生产环境更新完成。<br/>版本：${global.image_tag}<br/><br/>网址：https://ci.jianmu.dev"
      }
    }


    const { proxy } = getCurrentInstance() as any;
    const dialogVisible = ref<boolean>(true);
    const title = ref<string>('');
    const loading = ref<boolean>(false);
    const dsl = ref<string>();
    const nodeDefs = ref<INodeDefVo[]>([]);
    const triggerType = ref<TriggerTypeEnum>();
    const close = () => emit('close');

    const loadDsl = async () => {
      if (dsl.value) {
        return;
      }

      try {
        loading.value = true;

        const {
          workflowName,
          workflowRef,
          workflowVersion,
          triggerType: _triggerType,
        } = await fetchProjectDetail(props.projectId);
        title.value = workflowName;
        triggerType.value = _triggerType;

        const { nodes, dslText } = await fetchWorkflow(workflowRef, workflowVersion);
        dsl.value = dslText;
        nodeDefs.value = nodes
            .filter(({ metadata }) => metadata)
            .map(({ metadata }) => JSON.parse(metadata as string));

        console.log("nodeDefs = ",nodeDefs.value)

      } catch (err) {
        close();

        proxy.$throw(err, proxy);
      } finally {
        loading.value = false;
      }
    };

    onBeforeMount(() => loadDsl());

    return {
      TriggerTypeEnum,
      dialogVisible,
      title,
      loading,
      dsl,
      nodeDefs,
      triggerType,
      close,
    };
  },
});
</script>

<style scoped lang="less">
.project-preview-dialog {
  ::v-deep(.el-dialog) {
    // 图标
    .el-dialog__header {
      .el-dialog__title::before {
        font-family: 'jm-icon-input';
        content: '\e803';
        margin-right: 10px;
        color: #6b7b8d;
        font-size: 20px;
        vertical-align: bottom;
        position: relative;
        top: 1px;
      }
    }

    .el-dialog__body {
      padding: 0;
    }
  }

  .content {
    height: 60vh;
  }
}
</style>