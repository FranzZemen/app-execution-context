# Read Me
AppExecutionContext extends ExecutionContext in @franzzemen/execution-context providing global application 
configuration. It is leveraged by nearly all @franzzemen packages.  

AppExecutionContext re-exports a limited number of definitions and functions from ExecutionContext:

    export {ExecutionContext, isExecutionContext, validate as validateExecutionContext} from '@franzzemen/execution-context';

# Install

npm i @franzzemen/app-execution-context

# Usage

This package is published for an ECMAScript module loader.  For CommonJS see below.

### ECMAScript

Create an applicaton execution context, set defaults and validate it

    import {AppExecutionContext, validate} from '@franzzemen/app-execution-context';
    const ec:AppExecutionContext = {};
    validate(ec);

## CommonJS

    // Importing types in typescript from CommonJS is allowed
    import {AppExecutionContext} from '@franzzemen/execution-context';

    import('@franzzemen/execution-context')
        .then(package => {
            const ec:AppExecutionContext = {};
            package.validate(ec);
        }

