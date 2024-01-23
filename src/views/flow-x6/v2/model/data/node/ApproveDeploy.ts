import {BaseNode} from './base-node';
import {NodeRefEnum, NodeTypeEnum} from '../enumeration';
import icon from '../../../svgs/shape/async-task.svg';
import {CustomRule} from '../common';

export class ApproveDeploy extends BaseNode {
    host: string;
    user: string;
    password: string;

    constructor(name: string = '审批部署', host: string = '', user: string = '', password: string = '') {
        super(NodeRefEnum.ApproveDeploy, name, NodeTypeEnum.ApproveDeploy, icon, 'https://v2.jianmu.dev/guide/cron.html');
        this.host = host;
        this.user = user;
        this.password = password;
    }

    static build({name, host, user, password}: any): ApproveDeploy {
        return new ApproveDeploy(name, host, user, password);
    }

    getFormRules(): Record<string, CustomRule> {
        const rules = super.getFormRules();

        return {
            ...rules,
            name: [{required: true, message: 'name不能为空', trigger: 'blur'},],
            host: [{required: true, message: 'host不能为空', trigger: 'blur'},],
            user: [{required: true, message: 'user不能为空', trigger: 'blur'},],
            password: [{required: true, message: 'password不能为空', trigger: 'blur'},],
        };
    }

    toDsl(): object {
        const {host, user, password, name} = this;

        return {
            type: NodeTypeEnum.ApproveDeploy,
            name,
            host,
            user,
            password,
        };
    }
}

