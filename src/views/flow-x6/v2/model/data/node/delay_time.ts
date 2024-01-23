import {BaseNode} from './base-node';
import {FailureModeEnum, NodeRefEnum, NodeTypeEnum, TimeUnit} from '../enumeration';
import icon from '../../../svgs/shape/time.svg';
import {CustomRule} from '../common';

export class DelayTime extends BaseNode {
    unit: TimeUnit;
    time: string;
    failureMode: FailureModeEnum;

    constructor(name: string = '延迟时间', unit: TimeUnit = TimeUnit.SECOND, time: string = '30', failureMode: FailureModeEnum = FailureModeEnum.SUSPEND,) {
        super(NodeRefEnum.DelayTime, name, NodeTypeEnum.DelayTime, icon, 'https://v2.jianmu.dev/guide/cron.html');
        this.unit = unit;
        this.failureMode = failureMode;
        this.time = time;
    }

    static build({name, unit, time, failureMode}: any): DelayTime {
        return new DelayTime(name, unit, time, failureMode);
    }

    getFormRules(): Record<string, CustomRule> {
        const rules = super.getFormRules();

        return {
            ...rules,
            name: [{required: true, message: 'name不能为空', trigger: 'blur'},],
            unit: [{required: true, message: '单位不能为空', trigger: 'blur'},],
            time: [{required: true, message: '时间不能为空', trigger: 'blur'},],
        };
    }

    toDsl(): object {
        const {unit, time, failureMode, name} = this;

        return {
            alias: name,
            type: NodeTypeEnum.DelayTime,
            'on-failure': failureMode === FailureModeEnum.SUSPEND ? undefined : failureMode,
            unit,
            time,
        };
    }
}

