import 'mocha';
import * as chai from 'chai';
import {validate} from '../build/index.js';
import {AppExecutionContextDefaults, AppExecutionContext} from '../publish/index.js';


const expect = chai.expect;
const should = chai.should();

describe('app-execution-context tests', () => {
  it('should insert defaults', () => {
    let appConfig: AppExecutionContext = {};
    const result = validate(appConfig);
    result.should.be.true;
    appConfig.appContext.should.equal(AppExecutionContextDefaults.AppContext);
    appConfig.execution.should.exist;
  })
})
