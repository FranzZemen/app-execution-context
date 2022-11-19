import 'mocha';
import * as chai from 'chai';
import {validate, AppExecutionContextDefaults, AppExecutionContext} from '../publish/mjs/index.js'


const expect = chai.expect;
const should = chai.should();

describe('app-execution-context tests', () => {
  it('should insert defaults', () => {
    let appConfig: AppExecutionContext = {};
    const result = validate(appConfig);
    result.should.be.true;
    appConfig.app.appContext.should.equal(AppExecutionContextDefaults.AppContext);
    appConfig.execution.should.exist;
  })
})
