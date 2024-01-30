import { IWorkflowNode } from './data/common';
import { Cron } from './data/node/cron';
import { Webhook } from './data/node/webhook';
import { Shell } from './data/node/shell';
import { AsyncTask } from './data/node/async-task';
import { fetchNodeLibraryList, getOfficialNodes } from "../../../../api/node-library";
import {MysqlExport} from "./data/node/mysql_export";
import {MysqlImport} from "./data/node/mysql_import";
import {PostgreSql} from "./data/node/postgre";
import {Notifications} from "./data/node/dingding";
import {ApproveDeploy} from "./data/node/ApproveDeploy";
import {DelayTime} from "./data/node/delay_time";

export enum ParamTypeEnum {
  SECRET = 'SECRET',
  STRING = 'STRING',
  NUMBER = 'NUMBER',
  BOOL = 'BOOL',
}

export enum NodeTypeEnum {
  DOCKER = 'DOCKER',
  SHELL = 'SHELL',
  LOCAL = 'LOCAL',
  COMMUNITY = 'COMMUNITY'
}
 interface INodeParameterVo
    extends Readonly<{
      name: string;
      ref: string;
      type: string;
      description: string;
      value: object;
      required: boolean;
    }> {
}
interface IPageInfo {
  pageNum: number;
  totalPages: number;
  content: IWorkflowNode[];
}

/**
 * push输入/输出参数
 * @param data 原数据
 * @param inputs
 * @param outputs
 * @param versionDescription
 */
export const pushParams = (
  data: AsyncTask,
  inputs: INodeParameterVo[],
  outputs: INodeParameterVo[],
  versionDescription: string,
) => {
  data.versionDescription = versionDescription;
  if (inputs) {
    inputs.forEach(item => {
      data.inputs.push({
        ref: item.ref,
        name: item.name,
        type: item.type as ParamTypeEnum,
        value: (item.value || '').toString(),
        required: item.required,
        description: item.description,
      });
    });
  }
  if (outputs) {
    outputs.forEach(item => {
      data.outputs.push({
        ref: item.ref,
        name: item.name,
        type: item.type as ParamTypeEnum,
        value: (item.value || '').toString(),
        required: item.required,
        description: item.description,
      });
    });
  }
};

export class WorkflowNode {
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  constructor() {}

  loadDevops(keyword?: string): IWorkflowNode[] {
    const arr: IWorkflowNode[] = [new Shell(),new DelayTime(),new ApproveDeploy(), new Notifications()];
    console.log(arr)
    return keyword ? arr.filter(item => item.getName().toLowerCase().includes(keyword.toLowerCase())) : arr;
  }

  loadDatabaseNodes(keyword?: string): IWorkflowNode[] {
    const arr: IWorkflowNode[] = [new MysqlExport(),new MysqlImport(),new PostgreSql()];

    return keyword ? arr.filter(item => item.getName().toLowerCase().includes(keyword.toLowerCase())) : arr;
  }

  async loadLocalNodes(pageNum: number, pageSize: number, keyword?: string): Promise<IPageInfo> {
    const {
      list,
      pageNum: currentPageNum,
      pages: totalPages,
    } = await fetchNodeLibraryList({
      pageNum,
      pageSize,
      type: NodeTypeEnum.LOCAL,
      name: keyword,
    });

    // @ts-ignore
    const arr: IWorkflowNode[] = list.map(item => new AsyncTask(item.ownerRef, item.ref, item.name, item.icon));
    return {
      pageNum: currentPageNum,
      totalPages,
      content: arr,
    };
  }

  async loadOfficialNodes(pageNum: number, pageSize: number, keyword?: string): Promise<IPageInfo> {
    const {
      content,
      pageNum: currentPageNum,
      totalPages,
    } = await getOfficialNodes({
      pageNum,
      pageSize,
      name: keyword,
    });
    const arr: IWorkflowNode[] = content.map(item => new AsyncTask(item.ownerRef, item.ref, item.name, item.icon));
    return {
      pageNum: currentPageNum,
      totalPages,
      content: arr,
    };
  }

  async loadCommunityNodes(pageNum: number, pageSize: number, keyword?: string): Promise<IPageInfo> {
    const {
      content,
      pageNum: currentPageNum,
      totalPages,
    } = await getOfficialNodes({
      pageNum,
      pageSize,
      name: keyword,
      type: NodeTypeEnum.COMMUNITY,
    });
    const arr: IWorkflowNode[] = content.map(item => new AsyncTask(item.ownerRef, item.ref, item.name, item.icon));
    return {
      pageNum: currentPageNum,
      totalPages,
      content: arr,
    };
  }
}
