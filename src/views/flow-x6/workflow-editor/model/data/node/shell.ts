import { BaseNode } from './base-node';
import { FailureModeEnum, NodeRefEnum, NodeTypeEnum, RefTypeEnum } from '../enumeration';
import icon from '../../../svgs/shape/shell.svg';
import { CustomRule, ValidateCacheFn, ValidateParamFn } from '../common';
import { checkDuplicate } from '../../util/reference';

export interface IShellEnv {
  key: string;
  name: string;
  value: string;
}


export class Shell extends BaseNode {
  readonly envs: IShellEnv[];
  script: string;
  failureMode: FailureModeEnum;
  private readonly validateParam?: ValidateParamFn;

  constructor(
    name = '执行脚本',
    envs: IShellEnv[] = [],
    script = '',
    failureMode: FailureModeEnum = FailureModeEnum.SUSPEND,
    validateParam?: ValidateParamFn,
  ) {
    super(NodeRefEnum.SHELL, name, NodeTypeEnum.SHELL, icon, 'https://v2.jianmu.dev/guide/shell-node.html');
    this.envs = envs;
    this.script = script;
    this.failureMode = failureMode;
    this.validateParam = validateParam;
  }

  static build(
    { name,  envs, script, failureMode }: any,
    validateParam: ValidateParamFn | undefined,
  ): Shell {
    return new Shell(name,  envs, script, failureMode, validateParam);
  }

  getFormRules(): Record<string, CustomRule> {
    const rules = super.getFormRules();

    const shellEnvFields: Record<string, CustomRule> = {};
    this.envs.forEach((_, index) => {
      shellEnvFields[index] = {
        type: 'object',
        required: true,
        fields: {
          name: [
            { required: true, message: '请输入变量名', trigger: 'blur' },
            {
              validator: (rule: any, value: any, callback: any) => {
                if (!value) {
                  callback();
                  return;
                }
                try {
                  checkDuplicate(
                    this.envs.map(({ name }) => name),
                    RefTypeEnum.SHELL_ENV,
                  );
                } catch ({ message, ref }) {
                  if (ref === value) {
                    callback(message);
                    return;
                  }
                }
                callback();
              },
              trigger: 'blur',
            },
          ],
          value: [
            { required: true, message: '请输入变量值', trigger: 'blur' },
            {
              validator: (rule: any, value: any, callback: any) => {
                if (value && this.validateParam) {
                  try {
                    this.validateParam(value);
                  } catch ({ message }) {
                    callback(message);
                    return;
                  }
                }
                callback();
              },
              trigger: 'blur',
            },
          ],
        } as Record<string, CustomRule>,
      };
    });

    return {
      ...rules,
      envs: {
        type: 'array',
        required: false,
        len: this.envs.length,
        fields: shellEnvFields,
      },
      failureMode: [{ required: true }],
    };
  }

  // eslint-disable-next-line @typescript-eslint/ban-types
  toDsl(): object {
    const { name, envs, script,failureMode } = this;
    const environment: {
      [key: string]: string;
    } = {};
    envs.forEach(({ name, value }) => (environment[name] = value));

    return {
      alias: name,
      'on-failure': failureMode === FailureModeEnum.SUSPEND ? undefined : failureMode,
      environment: envs.length === 0 ? undefined : environment,
      script: script ? script.split('\n') : undefined,
    };
  }
}
