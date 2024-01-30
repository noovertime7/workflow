import {isValidCronExpression} from 'cron-expression-validator';
import {BaseNode} from './base-node';
import {FailureModeEnum, NodeRefEnum, NodeTypeEnum} from '../enumeration';
import icon from '../../../svgs/shape/dingding.svg';
import {CustomRule} from '../common';

export class Notifications extends BaseNode {
    host: string;
    user: string;
    password: string;
    failureMode: FailureModeEnum;
    constructor(name: string = '通知', host: string = '', user: string = '', password: string = '',failureMode: FailureModeEnum = FailureModeEnum.SUSPEND) {
        super(NodeRefEnum.Notifications, name, NodeTypeEnum.Notifications, icon, 'https://v2.jianmu.dev/guide/cron.html');
        this.host = host;
        this.user = user;
        this.password = password;
        this.failureMode = failureMode;
    }

    static build({name, host, user, password}: any): Notifications {
        return new Notifications(name, host, user, password);
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
        const {host, user, password, name,failureMode} = this;

        return {
            type: NodeTypeEnum.Notifications,
            'on-failure': failureMode === FailureModeEnum.SUSPEND ? undefined : failureMode,
            alias: name,
            host,
            user,
            password,
        };
    }
}

