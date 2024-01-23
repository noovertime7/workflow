export const fetchNodeLibraryList = async (i: any) => {
    return {
        "total": 0,
        "list": [],
        "pageNum": 1,
        "pageSize": 12,
        "size": 0,
        "startRow": 0,
        "endRow": 0,
        "pages": 0,
        "prePage": 0,
        "nextPage": 0,
        "isFirstPage": true,
        "isLastPage": true,
        "hasPreviousPage": false,
        "hasNextPage": false,
        "navigatePages": 8,
        "navigatepageNums": [],
        "navigateFirstPage": 0,
        "navigateLastPage": 0
    }
}


export const getOfficialNodes = async (i: any) => {
  return {
      "totalElements": 67,
      "totalPages": 6,
      "pageNum": 1,
      "size": 12,
      "content": [
          {
              "id": 27,
              "icon": "https://jianmuhub.img.dghub.cn/node-definition/icon/FrwMSLZugtaOsMhzX6OZD-s1zG_B",
              "ref": "acme_ssl_aliyun",
              "name": "acme构建ssl证书-阿里云",
              "creatorRef": "_",
              "creatorName": "老技",
              "creatorPortrait": "/user/avatar/FnXmPZPPb5IPFGudh_jDwhkttY__",
              "ownerId": "1",
              "ownerName": "开源建木",
              "ownerRef": "_",
              "ownerPortrait": "https://jianmuhub.img.dghub.cn/organization/icon/Fp9pxUkxSuOYFCX_UUiDygnLOr5o",
              "ownerType": "ORGANIZATION",
              "description": "自动颁发和更新免费证书，DNS验证方式，用acme构建ssl证书",
              "visibleType": "PUBLIC",
              "lastModifyTime": "2024-01-19T07:52:50.386998Z",
              "downloadCount": 1082,
              "isCollection": false,
              "collectionCount": 1,
              "deprecated": false,
              "certified": true
          },
          {
              "id": 631,
              "icon": "https://jianmuhub.img.dghub.cn/node-definition/icon/FuTqbwLLBjWAsqCV32lN-pOXj_hv",
              "ref": "aliyun_oss",
              "name": "阿里云OSS",
              "creatorRef": "_",
              "creatorName": "老技",
              "creatorPortrait": "/user/avatar/FnXmPZPPb5IPFGudh_jDwhkttY__",
              "ownerId": "1",
              "ownerName": "开源建木",
              "ownerRef": "_",
              "ownerPortrait": "https://jianmuhub.img.dghub.cn/organization/icon/Fp9pxUkxSuOYFCX_UUiDygnLOr5o",
              "ownerType": "ORGANIZATION",
              "description": "封装阿里云OSS API",
              "visibleType": "PUBLIC",
              "lastModifyTime": "2023-10-30T05:29:01.573835Z",
              "downloadCount": 4,
              "isCollection": false,
              "collectionCount": 0,
              "deprecated": false,
              "certified": true
          },
          {
              "id": 160,
              "icon": "https://jianmuhub.img.dghub.cn/node-definition/icon/FoYp6c62VmRSpCjk1Q4at4NHAPGd",
              "ref": "email",
              "name": "发送邮件",
              "creatorRef": "_",
              "creatorName": "老技",
              "creatorPortrait": "/user/avatar/FnXmPZPPb5IPFGudh_jDwhkttY__",
              "ownerId": "1",
              "ownerName": "开源建木",
              "ownerRef": "_",
              "ownerPortrait": "https://jianmuhub.img.dghub.cn/organization/icon/Fp9pxUkxSuOYFCX_UUiDygnLOr5o",
              "ownerType": "ORGANIZATION",
              "description": "自定义发送邮件，使用SMTP协议或SMTP_SSL协议，邮件格式支持plain、html和附件，发送类型支持群发、分别发送、抄送和密送",
              "visibleType": "PUBLIC",
              "lastModifyTime": "2023-10-29T15:28:56.528612Z",
              "downloadCount": 320,
              "isCollection": false,
              "collectionCount": 2,
              "deprecated": false,
              "certified": true
          },
          {
              "id": 74,
              "icon": "https://jianmuhub.img.dghub.cn/node-definition/icon/FinkJWhh_h20FXgPjyYZTAu1qXo1",
              "ref": "redis_export",
              "name": "redis数据导出",
              "creatorRef": "_",
              "creatorName": "老技",
              "creatorPortrait": "/user/avatar/FnXmPZPPb5IPFGudh_jDwhkttY__",
              "ownerId": "1",
              "ownerName": "开源建木",
              "ownerRef": "_",
              "ownerPortrait": "https://jianmuhub.img.dghub.cn/organization/icon/Fp9pxUkxSuOYFCX_UUiDygnLOr5o",
              "ownerType": "ORGANIZATION",
              "description": "通过redis-dump将redis数据库导出为特殊格式的⽂件",
              "visibleType": "PUBLIC",
              "lastModifyTime": "2023-10-29T15:27:58.479138Z",
              "downloadCount": 81,
              "isCollection": false,
              "collectionCount": 1,
              "deprecated": false,
              "certified": true
          },
          {
              "id": 75,
              "icon": "https://jianmuhub.img.dghub.cn/node-definition/icon/FinkJWhh_h20FXgPjyYZTAu1qXo1",
              "ref": "redis_import",
              "name": "redis数据导入",
              "creatorRef": "_",
              "creatorName": "老技",
              "creatorPortrait": "/user/avatar/FnXmPZPPb5IPFGudh_jDwhkttY__",
              "ownerId": "1",
              "ownerName": "开源建木",
              "ownerRef": "_",
              "ownerPortrait": "https://jianmuhub.img.dghub.cn/organization/icon/Fp9pxUkxSuOYFCX_UUiDygnLOr5o",
              "ownerType": "ORGANIZATION",
              "description": "通过redis-dump向redis数据库中导⼊特殊格式的数据⽂件",
              "visibleType": "PUBLIC",
              "lastModifyTime": "2023-10-29T15:27:54.504327Z",
              "downloadCount": 70,
              "isCollection": false,
              "collectionCount": 2,
              "deprecated": false,
              "certified": true
          },
          {
              "id": 71,
              "icon": "https://jianmuhub.img.dghub.cn/node-definition/icon/FkkmDW2a2RQLaivatCTK3yeC0t2k",
              "ref": "mysql_export",
              "name": "mysql数据导出",
              "creatorRef": "_",
              "creatorName": "老技",
              "creatorPortrait": "/user/avatar/FnXmPZPPb5IPFGudh_jDwhkttY__",
              "ownerId": "1",
              "ownerName": "开源建木",
              "ownerRef": "_",
              "ownerPortrait": "https://jianmuhub.img.dghub.cn/organization/icon/Fp9pxUkxSuOYFCX_UUiDygnLOr5o",
              "ownerType": "ORGANIZATION",
              "description": "通过mysql-dump将mysql数据库导出sql⽂件",
              "visibleType": "PUBLIC",
              "lastModifyTime": "2023-10-29T15:27:49.397195Z",
              "downloadCount": 145,
              "isCollection": false,
              "collectionCount": 2,
              "deprecated": false,
              "certified": true
          },
          {
              "id": 72,
              "icon": "https://jianmuhub.img.dghub.cn/node-definition/icon/FkkmDW2a2RQLaivatCTK3yeC0t2k",
              "ref": "mysql_import",
              "name": "mysql数据导入",
              "creatorRef": "_",
              "creatorName": "老技",
              "creatorPortrait": "/user/avatar/FnXmPZPPb5IPFGudh_jDwhkttY__",
              "ownerId": "1",
              "ownerName": "开源建木",
              "ownerRef": "_",
              "ownerPortrait": "https://jianmuhub.img.dghub.cn/organization/icon/Fp9pxUkxSuOYFCX_UUiDygnLOr5o",
              "ownerType": "ORGANIZATION",
              "description": "通过mysql-dump向mysql数据库中导⼊sql⽂件",
              "visibleType": "PUBLIC",
              "lastModifyTime": "2023-10-29T15:27:44.060692Z",
              "downloadCount": 68,
              "isCollection": false,
              "collectionCount": 1,
              "deprecated": false,
              "certified": true
          },
          {
              "id": 4,
              "icon": "https://jianmuhub.img.dghub.cn/node-definition/icon/FikR5g_gILRZjr-olpMqypjhfuj3",
              "ref": "git_clone",
              "name": "git clone",
              "creatorRef": "_",
              "creatorName": "老技",
              "creatorPortrait": "/user/avatar/FnXmPZPPb5IPFGudh_jDwhkttY__",
              "ownerId": "1",
              "ownerName": "开源建木",
              "ownerRef": "_",
              "ownerPortrait": "https://jianmuhub.img.dghub.cn/organization/icon/Fp9pxUkxSuOYFCX_UUiDygnLOr5o",
              "ownerType": "ORGANIZATION",
              "description": "用于向指定的git仓库clone项目",
              "visibleType": "PUBLIC",
              "lastModifyTime": "2023-10-29T15:27:09.387195Z",
              "downloadCount": 17948,
              "isCollection": false,
              "collectionCount": 7,
              "deprecated": false,
              "certified": true
          },
          {
              "id": 9,
              "icon": "https://jianmuhub.img.dghub.cn/node-definition/icon/FvWtndEdOK9WmEc8WCmvKLYpy2Xv",
              "ref": "docker_image_build",
              "name": "docker镜像构建",
              "creatorRef": "_",
              "creatorName": "老技",
              "creatorPortrait": "/user/avatar/FnXmPZPPb5IPFGudh_jDwhkttY__",
              "ownerId": "1",
              "ownerName": "开源建木",
              "ownerRef": "_",
              "ownerPortrait": "https://jianmuhub.img.dghub.cn/organization/icon/Fp9pxUkxSuOYFCX_UUiDygnLOr5o",
              "ownerType": "ORGANIZATION",
              "description": "通过dockerfile构建镜像并推送到指定仓库。",
              "visibleType": "PUBLIC",
              "lastModifyTime": "2023-10-29T15:26:39.525035Z",
              "downloadCount": 1252,
              "isCollection": false,
              "collectionCount": 2,
              "deprecated": false,
              "certified": true
          },
          {
              "id": 207,
              "icon": "https://jianmuhub.img.dghub.cn/node-definition/icon/FikR5g_gILRZjr-olpMqypjhfuj3",
              "ref": "git_log",
              "name": "git log",
              "creatorRef": "_",
              "creatorName": "老技",
              "creatorPortrait": "/user/avatar/FnXmPZPPb5IPFGudh_jDwhkttY__",
              "ownerId": "1",
              "ownerName": "开源建木",
              "ownerRef": "_",
              "ownerPortrait": "https://jianmuhub.img.dghub.cn/organization/icon/Fp9pxUkxSuOYFCX_UUiDygnLOr5o",
              "ownerType": "ORGANIZATION",
              "description": "格式化输出git日志",
              "visibleType": "PUBLIC",
              "lastModifyTime": "2023-10-29T15:26:24.393971Z",
              "downloadCount": 88,
              "isCollection": false,
              "collectionCount": 1,
              "deprecated": false,
              "certified": true
          },
          {
              "id": 494,
              "icon": "https://jianmuhub.img.dghub.cn/node-definition/icon/Fn5ORqJMcNdjZF7YjJqvbD74II2Z",
              "ref": "sync_docker_build_config",
              "name": "同步Docker构建配置",
              "creatorRef": "_",
              "creatorName": "老技",
              "creatorPortrait": "/user/avatar/FnXmPZPPb5IPFGudh_jDwhkttY__",
              "ownerId": "1",
              "ownerName": "开源建木",
              "ownerRef": "_",
              "ownerPortrait": "https://jianmuhub.img.dghub.cn/organization/icon/Fp9pxUkxSuOYFCX_UUiDygnLOr5o",
              "ownerType": "ORGANIZATION",
              "visibleType": "PUBLIC",
              "lastModifyTime": "2023-10-29T15:24:58.904500Z",
              "downloadCount": 9679,
              "isCollection": false,
              "collectionCount": 0,
              "deprecated": false,
              "certified": true
          },
          {
              "id": 403,
              "icon": "https://jianmuhub.img.dghub.cn/node-definition/icon/FqPMgnhPfLRSQMtMDYzpx0inlhhG",
              "ref": "sync_image_commit_id",
              "name": "同步镜像仓库提交id",
              "creatorRef": "_",
              "creatorName": "老技",
              "creatorPortrait": "/user/avatar/FnXmPZPPb5IPFGudh_jDwhkttY__",
              "ownerId": "1",
              "ownerName": "开源建木",
              "ownerRef": "_",
              "ownerPortrait": "https://jianmuhub.img.dghub.cn/organization/icon/Fp9pxUkxSuOYFCX_UUiDygnLOr5o",
              "ownerType": "ORGANIZATION",
              "visibleType": "PUBLIC",
              "lastModifyTime": "2023-10-29T15:24:36.835582Z",
              "downloadCount": 9442,
              "isCollection": false,
              "collectionCount": 0,
              "deprecated": false,
              "certified": true
          }
      ]
  }
}


/**
 * 创建节点
 * @param dto
 */
export const createNode = async () => {

}
/**
 * 删除节点
 * @param ownerRef
 * @param ref
 */

export const deleteNodeLibrary = async (ownerRef: string, ref: string) => {

}


/**
 * 同步节点
 * @param ownerRef
 * @param ref
 */

export const syncNodeLibrary = async (ownerRef: string, ref: string) => {

}


/**
 * 获取节点定义版本列表-本地
 * @param ref
 * @param ownerRef
 */

export const getLocalVersionList = async (ownerRef: string, ref: string) => {
    return {"versions": ["1.0.2", "1.0.1", "1.0.0"]}
}
/**
 * 获取节点定义版本-本地
 * @param ref
 * @param ownerRef
 * @param version
 */

export const getLocalNodeParams = async (ref: string, ownerRef: string, version: string) => {
    return {
        "id": 1218,
        "versionNumber": "1.0.2",
        "description": "该版本修复了邮件发送报错问题：550, b'The \"From\" header is missing or invalid",
        "workflowExample": "email:\n  sources:\n  - \"start\"\n  targets:\n  - \"end\"\n  type: \"email:1.0.2\"\n  param:\n    host: \"xxx\"\n    port: 465\n    sender: \"xxx\"\n    auth_code: \"((xxx.xxx))\"\n    receivers: \"xxx\"\n    cc_receivers: \"[]\"\n    bcc_receivers: \"[]\"\n    separate_delivery: false\n    type: \"plain\"\n    subject: \"xxx\"\n    text: \"xxx\"\n    attach_path: \"\"\n",
        "v2PipelineExample": "- ref: \"email\"\n  task: \"email@1.0.2\"\n  input:\n    host: \"xxx\"\n    port: 465\n    sender: \"xxx\"\n    auth_code: \"((xxx.xxx))\"\n    receivers: \"xxx\"\n    cc_receivers: \"[]\"\n    bcc_receivers: \"[]\"\n    separate_delivery: false\n    type: \"plain\"\n    subject: \"xxx\"\n    text: \"xxx\"\n    attach_path: \"\"\n",
        "v2WorkflowExample": "- ref: \"email\"\n  task: \"email@1.0.2\"\n  input:\n    host: \"xxx\"\n    port: 465\n    sender: \"xxx\"\n    auth_code: \"((xxx.xxx))\"\n    receivers: \"xxx\"\n    cc_receivers: \"[]\"\n    bcc_receivers: \"[]\"\n    separate_delivery: false\n    type: \"plain\"\n    subject: \"xxx\"\n    text: \"xxx\"\n    attach_path: \"\"\n  needs:\n  - \"start\"\n",
        "pipelineExample": "email:\n  type: \"email:1.0.2\"\n  param:\n    host: \"xxx\"\n    port: 465\n    sender: \"xxx\"\n    auth_code: \"((xxx.xxx))\"\n    receivers: \"xxx\"\n    cc_receivers: \"[]\"\n    bcc_receivers: \"[]\"\n    separate_delivery: false\n    type: \"plain\"\n    subject: \"xxx\"\n    text: \"xxx\"\n    attach_path: \"\"\n",
        "inputParams": [
            {
                "ref": "host",
                "name": "host",
                "type": "STRING",
                "required": true,
                "description": "SMTP服务器主机"
            },
            {
                "ref": "port",
                "name": "port",
                "type": "NUMBER",
                "required": false,
                "value": 465,
                "description": "SMTP服务器主机端口号，默认为465，使用SMTP_SSL协议；非465时使用SMTP协议"
            },
            {
                "ref": "sender",
                "name": "发件人邮箱",
                "type": "STRING",
                "required": true,
                "description": "发件人邮箱，如：xxx@qq.com"
            },
            {
                "ref": "auth_code",
                "name": "授权码",
                "type": "SECRET",
                "required": true,
                "description": "发件人邮箱授权码，一般在邮箱设置中获取"
            },
            {
                "ref": "receivers",
                "name": "收件人邮箱",
                "type": "STRING",
                "required": true,
                "description": "收件人邮箱，如：'[\"aaa@qq.com\", \"bbb@163.com\"]'"
            },
            {
                "ref": "cc_receivers",
                "name": "抄送人邮箱",
                "type": "STRING",
                "required": false,
                "value": "[]",
                "description": "抄送人邮箱，同时将这封邮件发送给其他人，如：'[\"aaa@qq.com\", \"bbb@163.com\"]'"
            },
            {
                "ref": "bcc_receivers",
                "name": "密送人邮箱",
                "type": "STRING",
                "required": false,
                "value": "[]",
                "description": "密送人邮箱，同时将这封邮件发送给其他人，但收件人和抄件人不会看到密送人，如：'[\"aaa@qq.com\", \"bbb@163.com\"]'"
            },
            {
                "ref": "separate_delivery",
                "name": "分别发送",
                "type": "BOOL",
                "required": false,
                "value": false,
                "description": "默认为false，表示群发给多个人；true表示对多个人一对一的发送"
            },
            {
                "ref": "type",
                "name": "邮件内容类型",
                "type": "STRING",
                "required": false,
                "value": "plain",
                "description": "邮件内容类型：plain表示普通文本，html表示html标签。默认为plain"
            },
            {
                "ref": "subject",
                "name": "邮件主题",
                "type": "STRING",
                "required": true,
                "description": "邮件主题"
            },
            {
                "ref": "text",
                "name": "邮件内容",
                "type": "STRING",
                "required": true,
                "description": "邮件内容，可以为普通文本或html标签，要和邮件内容类型保持一致"
            },
            {
                "ref": "attach_path",
                "name": "附件路径",
                "type": "STRING",
                "required": false,
                "value": "",
                "description": "附件路径，当路径为文件时，直接发送；当路径为目录时，会压缩为zip文件后再发送"
            }
        ],
        "creatorName": "老技",
        "creatorRef": "_",
        "creatorPortrait": "/user/avatar/FnXmPZPPb5IPFGudh_jDwhkttY__",
        "createTime": "2023-06-13T03:14:14.904224Z"
    }
}

/**
 * 通过ownerRef/ref获取版本列表
 * @param ref
 * @param ownerRef
 */

export const getOfficialVersionList = async (ref: string, ownerRef: string) => {

}


/**
 * 获取版本示例
 * @param ref
 * @param ownerRef
 * @param version
 */
export const getOfficialNodeParams = async (ref: string, ownerRef: string, version: string) => {
    return {
        "id": 1218,
        "versionNumber": "1.0.2",
        "description": "该版本修复了邮件发送报错问题：550, b'The \"From\" header is missing or invalid",
        "workflowExample": "email:\n  sources:\n  - \"start\"\n  targets:\n  - \"end\"\n  type: \"email:1.0.2\"\n  param:\n    host: \"xxx\"\n    port: 465\n    sender: \"xxx\"\n    auth_code: \"((xxx.xxx))\"\n    receivers: \"xxx\"\n    cc_receivers: \"[]\"\n    bcc_receivers: \"[]\"\n    separate_delivery: false\n    type: \"plain\"\n    subject: \"xxx\"\n    text: \"xxx\"\n    attach_path: \"\"\n",
        "v2PipelineExample": "- ref: \"email\"\n  task: \"email@1.0.2\"\n  input:\n    host: \"xxx\"\n    port: 465\n    sender: \"xxx\"\n    auth_code: \"((xxx.xxx))\"\n    receivers: \"xxx\"\n    cc_receivers: \"[]\"\n    bcc_receivers: \"[]\"\n    separate_delivery: false\n    type: \"plain\"\n    subject: \"xxx\"\n    text: \"xxx\"\n    attach_path: \"\"\n",
        "v2WorkflowExample": "- ref: \"email\"\n  task: \"email@1.0.2\"\n  input:\n    host: \"xxx\"\n    port: 465\n    sender: \"xxx\"\n    auth_code: \"((xxx.xxx))\"\n    receivers: \"xxx\"\n    cc_receivers: \"[]\"\n    bcc_receivers: \"[]\"\n    separate_delivery: false\n    type: \"plain\"\n    subject: \"xxx\"\n    text: \"xxx\"\n    attach_path: \"\"\n  needs:\n  - \"start\"\n",
        "pipelineExample": "email:\n  type: \"email:1.0.2\"\n  param:\n    host: \"xxx\"\n    port: 465\n    sender: \"xxx\"\n    auth_code: \"((xxx.xxx))\"\n    receivers: \"xxx\"\n    cc_receivers: \"[]\"\n    bcc_receivers: \"[]\"\n    separate_delivery: false\n    type: \"plain\"\n    subject: \"xxx\"\n    text: \"xxx\"\n    attach_path: \"\"\n",
        "inputParams": [
            {
                "ref": "host",
                "name": "host",
                "type": "STRING",
                "required": true,
                "description": "SMTP服务器主机"
            },
            {
                "ref": "port",
                "name": "port",
                "type": "NUMBER",
                "required": false,
                "value": 465,
                "description": "SMTP服务器主机端口号，默认为465，使用SMTP_SSL协议；非465时使用SMTP协议"
            },
            {
                "ref": "sender",
                "name": "发件人邮箱",
                "type": "STRING",
                "required": true,
                "description": "发件人邮箱，如：xxx@qq.com"
            },
            {
                "ref": "auth_code",
                "name": "授权码",
                "type": "SECRET",
                "required": true,
                "description": "发件人邮箱授权码，一般在邮箱设置中获取"
            },
            {
                "ref": "receivers",
                "name": "收件人邮箱",
                "type": "STRING",
                "required": true,
                "description": "收件人邮箱，如：'[\"aaa@qq.com\", \"bbb@163.com\"]'"
            },
            {
                "ref": "cc_receivers",
                "name": "抄送人邮箱",
                "type": "STRING",
                "required": false,
                "value": "[]",
                "description": "抄送人邮箱，同时将这封邮件发送给其他人，如：'[\"aaa@qq.com\", \"bbb@163.com\"]'"
            },
            {
                "ref": "bcc_receivers",
                "name": "密送人邮箱",
                "type": "STRING",
                "required": false,
                "value": "[]",
                "description": "密送人邮箱，同时将这封邮件发送给其他人，但收件人和抄件人不会看到密送人，如：'[\"aaa@qq.com\", \"bbb@163.com\"]'"
            },
            {
                "ref": "separate_delivery",
                "name": "分别发送",
                "type": "BOOL",
                "required": false,
                "value": false,
                "description": "默认为false，表示群发给多个人；true表示对多个人一对一的发送"
            },
            {
                "ref": "type",
                "name": "邮件内容类型",
                "type": "STRING",
                "required": false,
                "value": "plain",
                "description": "邮件内容类型：plain表示普通文本，html表示html标签。默认为plain"
            },
            {
                "ref": "subject",
                "name": "邮件主题",
                "type": "STRING",
                "required": true,
                "description": "邮件主题"
            },
            {
                "ref": "text",
                "name": "邮件内容",
                "type": "STRING",
                "required": true,
                "description": "邮件内容，可以为普通文本或html标签，要和邮件内容类型保持一致"
            },
            {
                "ref": "attach_path",
                "name": "附件路径",
                "type": "STRING",
                "required": false,
                "value": "",
                "description": "附件路径，当路径为文件时，直接发送；当路径为目录时，会压缩为zip文件后再发送"
            }
        ],
        "creatorName": "老技",
        "creatorRef": "_",
        "creatorPortrait": "/user/avatar/FnXmPZPPb5IPFGudh_jDwhkttY__",
        "createTime": "2023-06-13T03:14:14.904224Z"
    }
}
