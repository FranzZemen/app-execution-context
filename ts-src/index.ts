import {ExecutionContext, executionContextSchema} from '@franzzemen/execution-context';
import Validator, {ValidationError, ValidationSchema} from 'fastest-validator';
import {isPromise} from 'util/types';
import _ from 'lodash';

export class AppExecutionContextDefaults {
  static AppContext = 'Global';
  static App: App = {
    appContext: AppExecutionContextDefaults.AppContext
  };
  static AppExecutionContext: AppExecutionContext = {
    app: AppExecutionContextDefaults.App
  };
}

export interface App {
  appContext?: string; // The application context, for example, butchersrow
}

export interface AppExecutionContext extends ExecutionContext {
  app?: App;
}

export const appSchema: ValidationSchema = {
  appContext: {
    type: 'string',
    optional: true,
    default: AppExecutionContextDefaults.AppContext
  }
};

export const appSchemaWrapper: ValidationSchema = {
  type: 'object',
  optional: true,
  default: AppExecutionContextDefaults.App,
  props: appSchema
};

export const appExecutionContextSchema: ValidationSchema = _.merge({
  app: appSchemaWrapper
}, executionContextSchema);


export const appExecutionContextSchemaWrapper: ValidationSchema = {
  type: 'object',
  optional: true,
  default: AppExecutionContextDefaults.AppExecutionContext,
  props: appExecutionContextSchema
};

const check = (new Validator({useNewCustomCheckerFunction: true})).compile(appExecutionContextSchema);

export function validate(context: AppExecutionContext, ignoreDefaults: boolean = false): true | ValidationError[] {
  const result = check(context);
  if (isPromise(result)) {
    throw new Error('Unexpected promise validating AppExecutionContext, it should not be async');
  } else {
    context.validated = true;
    return result;
  }
}

export function isAppExecutionContext(context: any | AppExecutionContext): context is AppExecutionContext {
  return context && 'appContext' in context;
}
