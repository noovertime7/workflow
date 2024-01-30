


/**
 * 工作流数据
 */
export interface IWorkflow {
    name: string;
    description?: string;
    groupId: string;
    global: IGlobal;
    data: string;
}

export interface IGlobal {
    concurrent: number | boolean;
    caches: string[];
}