s: 'return' outside of function. (39:4)

      37 |   open ? <div {...props} role="dialog">{children}</div> : null;
      38 |     const { sx, maxWidth: _maxWidth, fullWidth: _fullWidth, ...domProps } = props;
    > 39 |     return <div {...domProps} role="dialog">{children}</div>;
         |     ^
      40 |
      41 | export const DialogTitle = ({ children, ...props }) => <h2 {...props}>{children}</h2>;
      42 | export const DialogContent = ({ children, ...props }) => <div {...props}>{children}</div>;

      1 | import React, { useState } from 'react';
    > 2 | import {
        | ^
      3 |   Dialog,
      4 |   DialogTitle,
      5 |   DialogContent,

      at toParseError (../../node_modules/@babel/parser/src/parse-error.ts:95:45)
      at FlowParserMixin.raise (../../node_modules/@babel/parser/src/tokenizer/index.ts:1503:19)
      at FlowParserMixin.parseReturnStatement (../../node_modules/@babel/parser/src/parser/statement.ts:1074:12)
      at FlowParserMixin.parseStatementContent (../../node_modules/@babel/parser/src/parser/statement.ts:510:21)
      at FlowParserMixin.parseStatementLike (../../node_modules/@babel/parser/src/parser/statement.ts:449:17)
      at FlowParserMixin.parseStatementLike (../../node_modules/@babel/parser/src/plugins/flow/index.ts:1994:26)
      at FlowParserMixin.parseModuleItem (../../node_modules/@babel/parser/src/parser/statement.ts:386:17)
      at FlowParserMixin.parseBlockOrModuleBlockBody (../../node_modules/@babel/parser/src/parser/statement.ts:1414:16)
      at FlowParserMixin.parseBlockBody (../../node_modules/@babel/parser/src/parser/statement.ts:1388:10)
      at FlowParserMixin.parseProgram (../../node_modules/@babel/parser/src/parser/statement.ts:225:10)
      at FlowParserMixin.parseTopLevel (../../node_modules/@babel/parser/src/parser/statement.ts:203:25)
      at FlowParserMixin.parseTopLevel (../../node_modules/@babel/parser/src/plugins/flow/index.ts:3375:30)
      at FlowParserMixin.parse (../../node_modules/@babel/parser/src/parser/index.ts:93:10)
      at parse (../../node_modules/@babel/parser/src/index.ts:92:38)
      at parser (../../node_modules/@babel/core/src/parser/index.ts:28:19)
          at parser.next (<anonymous>)
      at normalizeFile (../../node_modules/@babel/core/src/transformation/normalize-file.ts:49:24)
          at normalizeFile.next (<anonymous>)
      at run (../../node_modules/@babel/core/src/transformation/index.ts:40:36)
          at run.next (<anonymous>)
      at transform (../../node_modules/@babel/core/src/transform.ts:29:20)
          at transform.next (<anonymous>)
      at evaluateSync (../../node_modules/gensync/index.js:251:28)
      at fn (../../node_modules/gensync/index.js:89:14)
      at stopHiding - secret - don't use this - v1 (../../node_modules/@babel/core/src/errors/rewrite-stack-trace.ts:99:14)
      at transformSync (../../node_modules/@babel/core/src/transform.ts:66:52)
      at ScriptTransformer.transformSource (../../node_modules/@jest/transform/build/ScriptTransformer.js:619:31)
      at ScriptTransformer._transformAndBuildScript (../../node_modules/@jest/transform/build/ScriptTransformer.js:765:40)
      at ScriptTransformer.transform (../../node_modules/@jest/transform/build/ScriptTransformer.js:822:19)
      at Object.<anonymous> (src/TaskForm.js:2:1)
      at Object.<anonymous> (src/__tests__/TaskForm.test.js:4:1)

 FAIL  src/__tests__/App.test.js
  ● Test suite failed to run

    Jest encountered an unexpected token

    Jest failed to parse a file. This happens e.g. when your code or its dependencies use non-standard JavaScript syntax, or when Jest is not configured to support such syntax.

    Out of the box Jest supports Babel, which will be used to transform your files into valid JS based on your Babel configuration.

    By default "node_modules" folder is ignored by transformers.

    Here's what you can do:
     • If you are trying to use ECMAScript Modules, see https://jestjs.io/docs/ecmascript-modules for how to enable it.
     • If you are trying to use TypeScript, see https://jestjs.io/docs/getting-started#using-typescript
     • To have some of your "node_modules" files transformed, you can specify a custom "transformIgnorePatterns" in your config.
     • If you need a custom transformation specify a "transform" option in your config.
     • If you simply want to mock your non-JS modules (e.g. binary assets) you can stub them out with the "moduleNameMapper" config option.

    You'll find more details and examples of these config options in the docs:
    https://jestjs.io/docs/configuration
    For information about custom transformations, see:
    https://jestjs.io/docs/code-transformation

    Details:

    SyntaxError: /workspaces/jg_aitraining2/packages/frontend/src/__mocks__/@mui/material.js: 'return' outside of function. (39:4)

      37 |   open ? <div {...props} role="dialog">{children}</div> : null;
      38 |     const { sx, maxWidth: _maxWidth, fullWidth: _fullWidth, ...domProps } = props;
    > 39 |     return <div {...domProps} role="dialog">{children}</div>;
         |     ^
      40 |
      41 | export const DialogTitle = ({ children, ...props }) => <h2 {...props}>{children}</h2>;
      42 | export const DialogContent = ({ children, ...props }) => <div {...props}>{children}</div>;

      1 | import React, { useState, useEffect } from 'react';
    > 2 | import { 
        | ^
      3 |   Container, 
      4 |   Box, 
      5 |   Typography, 

      at toParseError (../../node_modules/@babel/parser/src/parse-error.ts:95:45)
      at FlowParserMixin.raise (../../node_modules/@babel/parser/src/tokenizer/index.ts:1503:19)
      at FlowParserMixin.parseReturnStatement (../../node_modules/@babel/parser/src/parser/statement.ts:1074:12)
      at FlowParserMixin.parseStatementContent (../../node_modules/@babel/parser/src/parser/statement.ts:510:21)
      at FlowParserMixin.parseStatementLike (../../node_modules/@babel/parser/src/parser/statement.ts:449:17)
      at FlowParserMixin.parseStatementLike (../../node_modules/@babel/parser/src/plugins/flow/index.ts:1994:26)
      at FlowParserMixin.parseModuleItem (../../node_modules/@babel/parser/src/parser/statement.ts:386:17)
      at FlowParserMixin.parseBlockOrModuleBlockBody (../../node_modules/@babel/parser/src/parser/statement.ts:1414:16)
      at FlowParserMixin.parseBlockBody (../../node_modules/@babel/parser/src/parser/statement.ts:1388:10)
      at FlowParserMixin.parseProgram (../../node_modules/@babel/parser/src/parser/statement.ts:225:10)
      at FlowParserMixin.parseTopLevel (../../node_modules/@babel/parser/src/parser/statement.ts:203:25)
      at FlowParserMixin.parseTopLevel (../../node_modules/@babel/parser/src/plugins/flow/index.ts:3375:30)
      at FlowParserMixin.parse (../../node_modules/@babel/parser/src/parser/index.ts:93:10)
      at parse (../../node_modules/@babel/parser/src/index.ts:92:38)
      at parser (../../node_modules/@babel/core/src/parser/index.ts:28:19)
          at parser.next (<anonymous>)
      at normalizeFile (../../node_modules/@babel/core/src/transformation/normalize-file.ts:49:24)
          at normalizeFile.next (<anonymous>)
      at run (../../node_modules/@babel/core/src/transformation/index.ts:40:36)
          at run.next (<anonymous>)
      at transform (../../node_modules/@babel/core/src/transform.ts:29:20)
          at transform.next (<anonymous>)
      at evaluateSync (../../node_modules/gensync/index.js:251:28)
      at fn (../../node_modules/gensync/index.js:89:14)
      at stopHiding - secret - don't use this - v1 (../../node_modules/@babel/core/src/errors/rewrite-stack-trace.ts:99:14)
      at transformSync (../../node_modules/@babel/core/src/transform.ts:66:52)
      at ScriptTransformer.transformSource (../../node_modules/@jest/transform/build/ScriptTransformer.js:619:31)
      at ScriptTransformer._transformAndBuildScript (../../node_modules/@jest/transform/build/ScriptTransformer.js:765:40)
      at ScriptTransformer.transform (../../node_modules/@jest/transform/build/ScriptTransformer.js:822:19)
      at Object.<anonymous> (src/App.js:2:1)
      at Object.<anonymous> (src/__tests__/App.test.js:6:1)

 FAIL  src/__tests__/integration/Integration.test.js
  ● Test suite failed to run

    Jest encountered an unexpected token

    Jest failed to parse a file. This happens e.g. when your code or its dependencies use non-standard JavaScript syntax, or when Jest is not configured to support such syntax.

    Out of the box Jest supports Babel, which will be used to transform your files into valid JS based on your Babel configuration.

    By default "node_modules" folder is ignored by transformers.

    Here's what you can do:
     • If you are trying to use ECMAScript Modules, see https://jestjs.io/docs/ecmascript-modules for how to enable it.
     • If you are trying to use TypeScript, see https://jestjs.io/docs/getting-started#using-typescript
     • To have some of your "node_modules" files transformed, you can specify a custom "transformIgnorePatterns" in your config.
     • If you need a custom transformation specify a "transform" option in your config.
     • If you simply want to mock your non-JS modules (e.g. binary assets) you can stub them out with the "moduleNameMapper" config option.

    You'll find more details and examples of these config options in the docs:
    https://jestjs.io/docs/configuration
    For information about custom transformations, see:
    https://jestjs.io/docs/code-transformation

    Details:

    SyntaxError: /workspaces/jg_aitraining2/packages/frontend/src/__mocks__/@mui/material.js: 'return' outside of function. (39:4)

      37 |   open ? <div {...props} role="dialog">{children}</div> : null;
      38 |     const { sx, maxWidth: _maxWidth, fullWidth: _fullWidth, ...domProps } = props;
    > 39 |     return <div {...domProps} role="dialog">{children}</div>;
         |     ^
      40 |
      41 | export const DialogTitle = ({ children, ...props }) => <h2 {...props}>{children}</h2>;
      42 | export const DialogContent = ({ children, ...props }) => <div {...props}>{children}</div>;

      1 | import React, { useState, useEffect } from 'react';
    > 2 | import { 
        | ^
      3 |   Container, 
      4 |   Box, 
      5 |   Typography, 

      at toParseError (../../node_modules/@babel/parser/src/parse-error.ts:95:45)
      at FlowParserMixin.raise (../../node_modules/@babel/parser/src/tokenizer/index.ts:1503:19)
      at FlowParserMixin.parseReturnStatement (../../node_modules/@babel/parser/src/parser/statement.ts:1074:12)
      at FlowParserMixin.parseStatementContent (../../node_modules/@babel/parser/src/parser/statement.ts:510:21)
      at FlowParserMixin.parseStatementLike (../../node_modules/@babel/parser/src/parser/statement.ts:449:17)
      at FlowParserMixin.parseStatementLike (../../node_modules/@babel/parser/src/plugins/flow/index.ts:1994:26)
      at FlowParserMixin.parseModuleItem (../../node_modules/@babel/parser/src/parser/statement.ts:386:17)
      at FlowParserMixin.parseBlockOrModuleBlockBody (../../node_modules/@babel/parser/src/parser/statement.ts:1414:16)
      at FlowParserMixin.parseBlockBody (../../node_modules/@babel/parser/src/parser/statement.ts:1388:10)
      at FlowParserMixin.parseProgram (../../node_modules/@babel/parser/src/parser/statement.ts:225:10)
      at FlowParserMixin.parseTopLevel (../../node_modules/@babel/parser/src/parser/statement.ts:203:25)
      at FlowParserMixin.parseTopLevel (../../node_modules/@babel/parser/src/plugins/flow/index.ts:3375:30)
      at FlowParserMixin.parse (../../node_modules/@babel/parser/src/parser/index.ts:93:10)
      at parse (../../node_modules/@babel/parser/src/index.ts:92:38)
      at parser (../../node_modules/@babel/core/src/parser/index.ts:28:19)
          at parser.next (<anonymous>)
      at normalizeFile (../../node_modules/@babel/core/src/transformation/normalize-file.ts:49:24)
          at normalizeFile.next (<anonymous>)
      at run (../../node_modules/@babel/core/src/transformation/index.ts:40:36)
          at run.next (<anonymous>)
      at transform (../../node_modules/@babel/core/src/transform.ts:29:20)
          at transform.next (<anonymous>)
      at evaluateSync (../../node_modules/gensync/index.js:251:28)
      at fn (../../node_modules/gensync/index.js:89:14)
      at stopHiding - secret - don't use this - v1 (../../node_modules/@babel/core/src/errors/rewrite-stack-trace.ts:99:14)
      at transformSync (../../node_modules/@babel/core/src/transform.ts:66:52)
      at ScriptTransformer.transformSource (../../node_modules/@jest/transform/build/ScriptTransformer.js:619:31)
      at ScriptTransformer._transformAndBuildScript (../../node_modules/@jest/transform/build/ScriptTransformer.js:765:40)
      at ScriptTransformer.transform (../../node_modules/@jest/transform/build/ScriptTransformer.js:822:19)
      at Object.<anonymous> (src/App.js:2:1)
      at Object.<anonymous> (src/__tests__/integration/Integration.test.js:4:1)

 FAIL  src/__tests__/integration/ComponentIntegration.test.js
  ● Test suite failed to run

    Jest encountered an unexpected token

    Jest failed to parse a file. This happens e.g. when your code or its dependencies use non-standard JavaScript syntax, or when Jest is not configured to support such syntax.

    Out of the box Jest supports Babel, which will be used to transform your files into valid JS based on your Babel configuration.

    By default "node_modules" folder is ignored by transformers.

    Here's what you can do:
     • If you are trying to use ECMAScript Modules, see https://jestjs.io/docs/ecmascript-modules for how to enable it.
     • If you are trying to use TypeScript, see https://jestjs.io/docs/getting-started#using-typescript
     • To have some of your "node_modules" files transformed, you can specify a custom "transformIgnorePatterns" in your config.
     • If you need a custom transformation specify a "transform" option in your config.
     • If you simply want to mock your non-JS modules (e.g. binary assets) you can stub them out with the "moduleNameMapper" config option.

    You'll find more details and examples of these config options in the docs:
    https://jestjs.io/docs/configuration
    For information about custom transformations, see:
    https://jestjs.io/docs/code-transformation

    Details:

    SyntaxError: /workspaces/jg_aitraining2/packages/frontend/src/__mocks__/@mui/material.js: 'return' outside of function. (39:4)

      37 |   open ? <div {...props} role="dialog">{children}</div> : null;
      38 |     const { sx, maxWidth: _maxWidth, fullWidth: _fullWidth, ...domProps } = props;
    > 39 |     return <div {...domProps} role="dialog">{children}</div>;
         |     ^
      40 |
      41 | export const DialogTitle = ({ children, ...props }) => <h2 {...props}>{children}</h2>;
      42 | export const DialogContent = ({ children, ...props }) => <div {...props}>{children}</div>;

      1 | import React, { useState, useEffect } from 'react';
    > 2 | import { 
        | ^
      3 |   Container, 
      4 |   Box, 
      5 |   Typography, 

      at toParseError (../../node_modules/@babel/parser/src/parse-error.ts:95:45)
      at FlowParserMixin.raise (../../node_modules/@babel/parser/src/tokenizer/index.ts:1503:19)
      at FlowParserMixin.parseReturnStatement (../../node_modules/@babel/parser/src/parser/statement.ts:1074:12)
      at FlowParserMixin.parseStatementContent (../../node_modules/@babel/parser/src/parser/statement.ts:510:21)
      at FlowParserMixin.parseStatementLike (../../node_modules/@babel/parser/src/parser/statement.ts:449:17)
      at FlowParserMixin.parseStatementLike (../../node_modules/@babel/parser/src/plugins/flow/index.ts:1994:26)
      at FlowParserMixin.parseModuleItem (../../node_modules/@babel/parser/src/parser/statement.ts:386:17)
      at FlowParserMixin.parseBlockOrModuleBlockBody (../../node_modules/@babel/parser/src/parser/statement.ts:1414:16)
      at FlowParserMixin.parseBlockBody (../../node_modules/@babel/parser/src/parser/statement.ts:1388:10)
      at FlowParserMixin.parseProgram (../../node_modules/@babel/parser/src/parser/statement.ts:225:10)
      at FlowParserMixin.parseTopLevel (../../node_modules/@babel/parser/src/parser/statement.ts:203:25)
      at FlowParserMixin.parseTopLevel (../../node_modules/@babel/parser/src/plugins/flow/index.ts:3375:30)
      at FlowParserMixin.parse (../../node_modules/@babel/parser/src/parser/index.ts:93:10)
      at parse (../../node_modules/@babel/parser/src/index.ts:92:38)
      at parser (../../node_modules/@babel/core/src/parser/index.ts:28:19)
          at parser.next (<anonymous>)
      at normalizeFile (../../node_modules/@babel/core/src/transformation/normalize-file.ts:49:24)
          at normalizeFile.next (<anonymous>)
      at run (../../node_modules/@babel/core/src/transformation/index.ts:40:36)
          at run.next (<anonymous>)
      at transform (../../node_modules/@babel/core/src/transform.ts:29:20)
          at transform.next (<anonymous>)
      at evaluateSync (../../node_modules/gensync/index.js:251:28)
      at fn (../../node_modules/gensync/index.js:89:14)
      at stopHiding - secret - don't use this - v1 (../../node_modules/@babel/core/src/errors/rewrite-stack-trace.ts:99:14)
      at transformSync (../../node_modules/@babel/core/src/transform.ts:66:52)
      at ScriptTransformer.transformSource (../../node_modules/@jest/transform/build/ScriptTransformer.js:619:31)
      at ScriptTransformer._transformAndBuildScript (../../node_modules/@jest/transform/build/ScriptTransformer.js:765:40)
      at ScriptTransformer.transform (../../node_modules/@jest/transform/build/ScriptTransformer.js:822:19)
      at Object.<anonymous> (src/App.js:2:1)
      at Object.<anonymous> (src/__tests__/integration/ComponentIntegration.test.js:5:1)

 FAIL  src/__tests__/AppIntegration.test.js
  ● Test suite failed to run

    Jest encountered an unexpected token

    Jest failed to parse a file. This happens e.g. when your code or its dependencies use non-standard JavaScript syntax, or when Jest is not configured to support such syntax.

    Out of the box Jest supports Babel, which will be used to transform your files into valid JS based on your Babel configuration.

    By default "node_modules" folder is ignored by transformers.

    Here's what you can do:
     • If you are trying to use ECMAScript Modules, see https://jestjs.io/docs/ecmascript-modules for how to enable it.
     • If you are trying to use TypeScript, see https://jestjs.io/docs/getting-started#using-typescript
     • To have some of your "node_modules" files transformed, you can specify a custom "transformIgnorePatterns" in your config.
     • If you need a custom transformation specify a "transform" option in your config.
     • If you simply want to mock your non-JS modules (e.g. binary assets) you can stub them out with the "moduleNameMapper" config option.

    You'll find more details and examples of these config options in the docs:
    https://jestjs.io/docs/configuration
    For information about custom transformations, see:
    https://jestjs.io/docs/code-transformation

    Details:

    SyntaxError: /workspaces/jg_aitraining2/packages/frontend/src/__mocks__/@mui/material.js: 'return' outside of function. (39:4)

      37 |   open ? <div {...props} role="dialog">{children}</div> : null;
      38 |     const { sx, maxWidth: _maxWidth, fullWidth: _fullWidth, ...domProps } = props;
    > 39 |     return <div {...domProps} role="dialog">{children}</div>;
         |     ^
      40 |
      41 | export const DialogTitle = ({ children, ...props }) => <h2 {...props}>{children}</h2>;
      42 | export const DialogContent = ({ children, ...props }) => <div {...props}>{children}</div>;

      1 | import React, { useState, useEffect } from 'react';
    > 2 | import { 
        | ^
      3 |   Container, 
      4 |   Box, 
      5 |   Typography, 

      at toParseError (../../node_modules/@babel/parser/src/parse-error.ts:95:45)
      at FlowParserMixin.raise (../../node_modules/@babel/parser/src/tokenizer/index.ts:1503:19)
      at FlowParserMixin.parseReturnStatement (../../node_modules/@babel/parser/src/parser/statement.ts:1074:12)
      at FlowParserMixin.parseStatementContent (../../node_modules/@babel/parser/src/parser/statement.ts:510:21)
      at FlowParserMixin.parseStatementLike (../../node_modules/@babel/parser/src/parser/statement.ts:449:17)
      at FlowParserMixin.parseStatementLike (../../node_modules/@babel/parser/src/plugins/flow/index.ts:1994:26)
      at FlowParserMixin.parseModuleItem (../../node_modules/@babel/parser/src/parser/statement.ts:386:17)
      at FlowParserMixin.parseBlockOrModuleBlockBody (../../node_modules/@babel/parser/src/parser/statement.ts:1414:16)
      at FlowParserMixin.parseBlockBody (../../node_modules/@babel/parser/src/parser/statement.ts:1388:10)
      at FlowParserMixin.parseProgram (../../node_modules/@babel/parser/src/parser/statement.ts:225:10)
      at FlowParserMixin.parseTopLevel (../../node_modules/@babel/parser/src/parser/statement.ts:203:25)
      at FlowParserMixin.parseTopLevel (../../node_modules/@babel/parser/src/plugins/flow/index.ts:3375:30)
      at FlowParserMixin.parse (../../node_modules/@babel/parser/src/parser/index.ts:93:10)
      at parse (../../node_modules/@babel/parser/src/index.ts:92:38)
      at parser (../../node_modules/@babel/core/src/parser/index.ts:28:19)
          at parser.next (<anonymous>)
      at normalizeFile (../../node_modules/@babel/core/src/transformation/normalize-file.ts:49:24)
          at normalizeFile.next (<anonymous>)
      at run (../../node_modules/@babel/core/src/transformation/index.ts:40:36)
          at run.next (<anonymous>)
      at transform (../../node_modules/@babel/core/src/transform.ts:29:20)
          at transform.next (<anonymous>)
      at evaluateSync (../../node_modules/gensync/index.js:251:28)
      at fn (../../node_modules/gensync/index.js:89:14)
      at stopHiding - secret - don't use this - v1 (../../node_modules/@babel/core/src/errors/rewrite-stack-trace.ts:99:14)
      at transformSync (../../node_modules/@babel/core/src/transform.ts:66:52)
      at ScriptTransformer.transformSource (../../node_modules/@jest/transform/build/ScriptTransformer.js:619:31)
      at ScriptTransformer._transformAndBuildScript (../../node_modules/@jest/transform/build/ScriptTransformer.js:765:40)
      at ScriptTransformer.transform (../../node_modules/@jest/transform/build/ScriptTransformer.js:822:19)
      at Object.<anonymous> (src/App.js:2:1)
      at Object.<anonymous> (src/__tests__/AppIntegration.test.js:3:1)

 FAIL  src/__tests__/integration/ComponentIntegration.simple.fixed.test.js
  ● Test suite failed to run

    Jest encountered an unexpected token

    Jest failed to parse a file. This happens e.g. when your code or its dependencies use non-standard JavaScript syntax, or when Jest is not configured to support such syntax.

    Out of the box Jest supports Babel, which will be used to transform your files into valid JS based on your Babel configuration.

    By default "node_modules" folder is ignored by transformers.

    Here's what you can do:
     • If you are trying to use ECMAScript Modules, see https://jestjs.io/docs/ecmascript-modules for how to enable it.
     • If you are trying to use TypeScript, see https://jestjs.io/docs/getting-started#using-typescript
     • To have some of your "node_modules" files transformed, you can specify a custom "transformIgnorePatterns" in your config.
     • If you need a custom transformation specify a "transform" option in your config.
     • If you simply want to mock your non-JS modules (e.g. binary assets) you can stub them out with the "moduleNameMapper" config option.

    You'll find more details and examples of these config options in the docs:
    https://jestjs.io/docs/configuration
    For information about custom transformations, see:
    https://jestjs.io/docs/code-transformation

    Details:

    SyntaxError: /workspaces/jg_aitraining2/packages/frontend/src/__mocks__/@mui/material.js: 'return' outside of function. (39:4)

      37 |   open ? <div {...props} role="dialog">{children}</div> : null;
      38 |     const { sx, maxWidth: _maxWidth, fullWidth: _fullWidth, ...domProps } = props;
    > 39 |     return <div {...domProps} role="dialog">{children}</div>;
         |     ^
      40 |
      41 | export const DialogTitle = ({ children, ...props }) => <h2 {...props}>{children}</h2>;
      42 | export const DialogContent = ({ children, ...props }) => <div {...props}>{children}</div>;

      1 | import React, { useState, useEffect } from 'react';
    > 2 | import { 
        | ^
      3 |   Container, 
      4 |   Box, 
      5 |   Typography, 

      at toParseError (../../node_modules/@babel/parser/src/parse-error.ts:95:45)
      at FlowParserMixin.raise (../../node_modules/@babel/parser/src/tokenizer/index.ts:1503:19)
      at FlowParserMixin.parseReturnStatement (../../node_modules/@babel/parser/src/parser/statement.ts:1074:12)
      at FlowParserMixin.parseStatementContent (../../node_modules/@babel/parser/src/parser/statement.ts:510:21)
      at FlowParserMixin.parseStatementLike (../../node_modules/@babel/parser/src/parser/statement.ts:449:17)
      at FlowParserMixin.parseStatementLike (../../node_modules/@babel/parser/src/plugins/flow/index.ts:1994:26)
      at FlowParserMixin.parseModuleItem (../../node_modules/@babel/parser/src/parser/statement.ts:386:17)
      at FlowParserMixin.parseBlockOrModuleBlockBody (../../node_modules/@babel/parser/src/parser/statement.ts:1414:16)
      at FlowParserMixin.parseBlockBody (../../node_modules/@babel/parser/src/parser/statement.ts:1388:10)
      at FlowParserMixin.parseProgram (../../node_modules/@babel/parser/src/parser/statement.ts:225:10)
      at FlowParserMixin.parseTopLevel (../../node_modules/@babel/parser/src/parser/statement.ts:203:25)
      at FlowParserMixin.parseTopLevel (../../node_modules/@babel/parser/src/plugins/flow/index.ts:3375:30)
      at FlowParserMixin.parse (../../node_modules/@babel/parser/src/parser/index.ts:93:10)
      at parse (../../node_modules/@babel/parser/src/index.ts:92:38)
      at parser (../../node_modules/@babel/core/src/parser/index.ts:28:19)
          at parser.next (<anonymous>)
      at normalizeFile (../../node_modules/@babel/core/src/transformation/normalize-file.ts:49:24)
          at normalizeFile.next (<anonymous>)
      at run (../../node_modules/@babel/core/src/transformation/index.ts:40:36)
          at run.next (<anonymous>)
      at transform (../../node_modules/@babel/core/src/transform.ts:29:20)
          at transform.next (<anonymous>)
      at evaluateSync (../../node_modules/gensync/index.js:251:28)
      at fn (../../node_modules/gensync/index.js:89:14)
      at stopHiding - secret - don't use this - v1 (../../node_modules/@babel/core/src/errors/rewrite-stack-trace.ts:99:14)
      at transformSync (../../node_modules/@babel/core/src/transform.ts:66:52)
      at ScriptTransformer.transformSource (../../node_modules/@jest/transform/build/ScriptTransformer.js:619:31)
      at ScriptTransformer._transformAndBuildScript (../../node_modules/@jest/transform/build/ScriptTransformer.js:765:40)
      at ScriptTransformer.transform (../../node_modules/@jest/transform/build/ScriptTransformer.js:822:19)
      at Object.<anonymous> (src/App.js:2:1)
      at Object.<anonymous> (src/__tests__/integration/ComponentIntegration.simple.fixed.test.js:7:1)

 FAIL  src/__tests__/integration/ComponentIntegration.simple.test.js
  ● Test suite failed to run

    Jest encountered an unexpected token

    Jest failed to parse a file. This happens e.g. when your code or its dependencies use non-standard JavaScript syntax, or when Jest is not configured to support such syntax.

    Out of the box Jest supports Babel, which will be used to transform your files into valid JS based on your Babel configuration.

    By default "node_modules" folder is ignored by transformers.

    Here's what you can do:
     • If you are trying to use ECMAScript Modules, see https://jestjs.io/docs/ecmascript-modules for how to enable it.
     • If you are trying to use TypeScript, see https://jestjs.io/docs/getting-started#using-typescript
     • To have some of your "node_modules" files transformed, you can specify a custom "transformIgnorePatterns" in your config.
     • If you need a custom transformation specify a "transform" option in your config.
     • If you simply want to mock your non-JS modules (e.g. binary assets) you can stub them out with the "moduleNameMapper" config option.

    You'll find more details and examples of these config options in the docs:
    https://jestjs.io/docs/configuration
    For information about custom transformations, see:
    https://jestjs.io/docs/code-transformation

    Details:

    SyntaxError: /workspaces/jg_aitraining2/packages/frontend/src/__mocks__/@mui/material.js: 'return' outside of function. (39:4)

      37 |   open ? <div {...props} role="dialog">{children}</div> : null;
      38 |     const { sx, maxWidth: _maxWidth, fullWidth: _fullWidth, ...domProps } = props;
    > 39 |     return <div {...domProps} role="dialog">{children}</div>;
         |     ^
      40 |
      41 | export const DialogTitle = ({ children, ...props }) => <h2 {...props}>{children}</h2>;
      42 | export const DialogContent = ({ children, ...props }) => <div {...props}>{children}</div>;

      1 | import React, { useState, useEffect } from 'react';
    > 2 | import { 
        | ^
      3 |   Container, 
      4 |   Box, 
      5 |   Typography, 

      at toParseError (../../node_modules/@babel/parser/src/parse-error.ts:95:45)
      at FlowParserMixin.raise (../../node_modules/@babel/parser/src/tokenizer/index.ts:1503:19)
      at FlowParserMixin.parseReturnStatement (../../node_modules/@babel/parser/src/parser/statement.ts:1074:12)
      at FlowParserMixin.parseStatementContent (../../node_modules/@babel/parser/src/parser/statement.ts:510:21)
      at FlowParserMixin.parseStatementLike (../../node_modules/@babel/parser/src/parser/statement.ts:449:17)
      at FlowParserMixin.parseStatementLike (../../node_modules/@babel/parser/src/plugins/flow/index.ts:1994:26)
      at FlowParserMixin.parseModuleItem (../../node_modules/@babel/parser/src/parser/statement.ts:386:17)
      at FlowParserMixin.parseBlockOrModuleBlockBody (../../node_modules/@babel/parser/src/parser/statement.ts:1414:16)
      at FlowParserMixin.parseBlockBody (../../node_modules/@babel/parser/src/parser/statement.ts:1388:10)
      at FlowParserMixin.parseProgram (../../node_modules/@babel/parser/src/parser/statement.ts:225:10)
      at FlowParserMixin.parseTopLevel (../../node_modules/@babel/parser/src/parser/statement.ts:203:25)
      at FlowParserMixin.parseTopLevel (../../node_modules/@babel/parser/src/plugins/flow/index.ts:3375:30)
      at FlowParserMixin.parse (../../node_modules/@babel/parser/src/parser/index.ts:93:10)
      at parse (../../node_modules/@babel/parser/src/index.ts:92:38)
      at parser (../../node_modules/@babel/core/src/parser/index.ts:28:19)
          at parser.next (<anonymous>)
      at normalizeFile (../../node_modules/@babel/core/src/transformation/normalize-file.ts:49:24)
          at normalizeFile.next (<anonymous>)
      at run (../../node_modules/@babel/core/src/transformation/index.ts:40:36)
          at run.next (<anonymous>)
      at transform (../../node_modules/@babel/core/src/transform.ts:29:20)
          at transform.next (<anonymous>)
      at evaluateSync (../../node_modules/gensync/index.js:251:28)
      at fn (../../node_modules/gensync/index.js:89:14)
      at stopHiding - secret - don't use this - v1 (../../node_modules/@babel/core/src/errors/rewrite-stack-trace.ts:99:14)
      at transformSync (../../node_modules/@babel/core/src/transform.ts:66:52)
      at ScriptTransformer.transformSource (../../node_modules/@jest/transform/build/ScriptTransformer.js:619:31)
      at ScriptTransformer._transformAndBuildScript (../../node_modules/@jest/transform/build/ScriptTransformer.js:765:40)
      at ScriptTransformer.transform (../../node_modules/@jest/transform/build/ScriptTransformer.js:822:19)
      at Object.<anonymous> (src/App.js:2:1)
      at Object.<anonymous> (src/__tests__/integration/ComponentIntegration.simple.test.js:6:1)

 FAIL  src/theme/ThemeProvider.test.js
  ● Test suite failed to run

    Jest encountered an unexpected token

    Jest failed to parse a file. This happens e.g. when your code or its dependencies use non-standard JavaScript syntax, or when Jest is not configured to support such syntax.

    Out of the box Jest supports Babel, which will be used to transform your files into valid JS based on your Babel configuration.

    By default "node_modules" folder is ignored by transformers.

    Here's what you can do:
     • If you are trying to use ECMAScript Modules, see https://jestjs.io/docs/ecmascript-modules for how to enable it.
     • If you are trying to use TypeScript, see https://jestjs.io/docs/getting-started#using-typescript
     • To have some of your "node_modules" files transformed, you can specify a custom "transformIgnorePatterns" in your config.
     • If you need a custom transformation specify a "transform" option in your config.
     • If you simply want to mock your non-JS modules (e.g. binary assets) you can stub them out with the "moduleNameMapper" config option.

    You'll find more details and examples of these config options in the docs:
    https://jestjs.io/docs/configuration
    For information about custom transformations, see:
    https://jestjs.io/docs/code-transformation

    Details:

    SyntaxError: /workspaces/jg_aitraining2/packages/frontend/src/__mocks__/@mui/material.js: 'return' outside of function. (39:4)

      37 |   open ? <div {...props} role="dialog">{children}</div> : null;
      38 |     const { sx, maxWidth: _maxWidth, fullWidth: _fullWidth, ...domProps } = props;
    > 39 |     return <div {...domProps} role="dialog">{children}</div>;
         |     ^
      40 |
      41 | export const DialogTitle = ({ children, ...props }) => <h2 {...props}>{children}</h2>;
      42 | export const DialogContent = ({ children, ...props }) => <div {...props}>{children}</div>;

      1 | import React, { createContext, useContext, useState, useEffect } from 'react';
      2 | import { ThemeProvider as MuiThemeProvider } from '@mui/material/styles';
    > 3 | import { CssBaseline, GlobalStyles } from '@mui/material';
        | ^
      4 | import { themes } from './theme';
      5 |
      6 | /**

      at toParseError (../../node_modules/@babel/parser/src/parse-error.ts:95:45)
      at FlowParserMixin.raise (../../node_modules/@babel/parser/src/tokenizer/index.ts:1503:19)
      at FlowParserMixin.parseReturnStatement (../../node_modules/@babel/parser/src/parser/statement.ts:1074:12)
      at FlowParserMixin.parseStatementContent (../../node_modules/@babel/parser/src/parser/statement.ts:510:21)
      at FlowParserMixin.parseStatementLike (../../node_modules/@babel/parser/src/parser/statement.ts:449:17)
      at FlowParserMixin.parseStatementLike (../../node_modules/@babel/parser/src/plugins/flow/index.ts:1994:26)
      at FlowParserMixin.parseModuleItem (../../node_modules/@babel/parser/src/parser/statement.ts:386:17)
      at FlowParserMixin.parseBlockOrModuleBlockBody (../../node_modules/@babel/parser/src/parser/statement.ts:1414:16)
      at FlowParserMixin.parseBlockBody (../../node_modules/@babel/parser/src/parser/statement.ts:1388:10)
      at FlowParserMixin.parseProgram (../../node_modules/@babel/parser/src/parser/statement.ts:225:10)
      at FlowParserMixin.parseTopLevel (../../node_modules/@babel/parser/src/parser/statement.ts:203:25)
      at FlowParserMixin.parseTopLevel (../../node_modules/@babel/parser/src/plugins/flow/index.ts:3375:30)
      at FlowParserMixin.parse (../../node_modules/@babel/parser/src/parser/index.ts:93:10)
      at parse (../../node_modules/@babel/parser/src/index.ts:92:38)
      at parser (../../node_modules/@babel/core/src/parser/index.ts:28:19)
          at parser.next (<anonymous>)
      at normalizeFile (../../node_modules/@babel/core/src/transformation/normalize-file.ts:49:24)
          at normalizeFile.next (<anonymous>)
      at run (../../node_modules/@babel/core/src/transformation/index.ts:40:36)
          at run.next (<anonymous>)
      at transform (../../node_modules/@babel/core/src/transform.ts:29:20)
          at transform.next (<anonymous>)
      at evaluateSync (../../node_modules/gensync/index.js:251:28)
      at fn (../../node_modules/gensync/index.js:89:14)
      at stopHiding - secret - don't use this - v1 (../../node_modules/@babel/core/src/errors/rewrite-stack-trace.ts:99:14)
      at transformSync (../../node_modules/@babel/core/src/transform.ts:66:52)
      at ScriptTransformer.transformSource (../../node_modules/@jest/transform/build/ScriptTransformer.js:619:31)
      at ScriptTransformer._transformAndBuildScript (../../node_modules/@jest/transform/build/ScriptTransformer.js:765:40)
      at ScriptTransformer.transform (../../node_modules/@jest/transform/build/ScriptTransformer.js:822:19)
      at Object.<anonymous> (src/theme/ThemeProvider.js:3:1)
      at Object.<anonymous> (src/theme/ThemeProvider.test.js:3:1)

 FAIL  src/__tests__/SimpleApp.test.js
  ● Test suite failed to run

    Jest encountered an unexpected token

    Jest failed to parse a file. This happens e.g. when your code or its dependencies use non-standard JavaScript syntax, or when Jest is not configured to support such syntax.

    Out of the box Jest supports Babel, which will be used to transform your files into valid JS based on your Babel configuration.

    By default "node_modules" folder is ignored by transformers.

    Here's what you can do:
     • If you are trying to use ECMAScript Modules, see https://jestjs.io/docs/ecmascript-modules for how to enable it.
     • If you are trying to use TypeScript, see https://jestjs.io/docs/getting-started#using-typescript
     • To have some of your "node_modules" files transformed, you can specify a custom "transformIgnorePatterns" in your config.
     • If you need a custom transformation specify a "transform" option in your config.
     • If you simply want to mock your non-JS modules (e.g. binary assets) you can stub them out with the "moduleNameMapper" config option.

    You'll find more details and examples of these config options in the docs:
    https://jestjs.io/docs/configuration
    For information about custom transformations, see:
    https://jestjs.io/docs/code-transformation

    Details:

    SyntaxError: /workspaces/jg_aitraining2/packages/frontend/src/__mocks__/@mui/material.js: 'return' outside of function. (39:4)

      37 |   open ? <div {...props} role="dialog">{children}</div> : null;
      38 |     const { sx, maxWidth: _maxWidth, fullWidth: _fullWidth, ...domProps } = props;
    > 39 |     return <div {...domProps} role="dialog">{children}</div>;
         |     ^
      40 |
      41 | export const DialogTitle = ({ children, ...props }) => <h2 {...props}>{children}</h2>;
      42 | export const DialogContent = ({ children, ...props }) => <div {...props}>{children}</div>;

      1 | import React, { useState, useEffect } from 'react';
    > 2 | import { 
        | ^
      3 |   Container, 
      4 |   Box, 
      5 |   Typography, 

      at toParseError (../../node_modules/@babel/parser/src/parse-error.ts:95:45)
      at FlowParserMixin.raise (../../node_modules/@babel/parser/src/tokenizer/index.ts:1503:19)
      at FlowParserMixin.parseReturnStatement (../../node_modules/@babel/parser/src/parser/statement.ts:1074:12)
      at FlowParserMixin.parseStatementContent (../../node_modules/@babel/parser/src/parser/statement.ts:510:21)
      at FlowParserMixin.parseStatementLike (../../node_modules/@babel/parser/src/parser/statement.ts:449:17)
      at FlowParserMixin.parseStatementLike (../../node_modules/@babel/parser/src/plugins/flow/index.ts:1994:26)
      at FlowParserMixin.parseModuleItem (../../node_modules/@babel/parser/src/parser/statement.ts:386:17)
      at FlowParserMixin.parseBlockOrModuleBlockBody (../../node_modules/@babel/parser/src/parser/statement.ts:1414:16)
      at FlowParserMixin.parseBlockBody (../../node_modules/@babel/parser/src/parser/statement.ts:1388:10)
      at FlowParserMixin.parseProgram (../../node_modules/@babel/parser/src/parser/statement.ts:225:10)
      at FlowParserMixin.parseTopLevel (../../node_modules/@babel/parser/src/parser/statement.ts:203:25)
      at FlowParserMixin.parseTopLevel (../../node_modules/@babel/parser/src/plugins/flow/index.ts:3375:30)
      at FlowParserMixin.parse (../../node_modules/@babel/parser/src/parser/index.ts:93:10)
      at parse (../../node_modules/@babel/parser/src/index.ts:92:38)
      at parser (../../node_modules/@babel/core/src/parser/index.ts:28:19)
          at parser.next (<anonymous>)
      at normalizeFile (../../node_modules/@babel/core/src/transformation/normalize-file.ts:49:24)
          at normalizeFile.next (<anonymous>)
      at run (../../node_modules/@babel/core/src/transformation/index.ts:40:36)
          at run.next (<anonymous>)
      at transform (../../node_modules/@babel/core/src/transform.ts:29:20)
          at transform.next (<anonymous>)
      at evaluateSync (../../node_modules/gensync/index.js:251:28)
      at fn (../../node_modules/gensync/index.js:89:14)
      at stopHiding - secret - don't use this - v1 (../../node_modules/@babel/core/src/errors/rewrite-stack-trace.ts:99:14)
      at transformSync (../../node_modules/@babel/core/src/transform.ts:66:52)
      at ScriptTransformer.transformSource (../../node_modules/@jest/transform/build/ScriptTransformer.js:619:31)
      at ScriptTransformer._transformAndBuildScript (../../node_modules/@jest/transform/build/ScriptTransformer.js:765:40)
      at ScriptTransformer.transform (../../node_modules/@jest/transform/build/ScriptTransformer.js:822:19)
      at Object.<anonymous> (src/App.js:2:1)
      at Object.<anonymous> (src/__tests__/SimpleApp.test.js:4:1)

 FAIL  src/__tests__/App.coverage.test.js
  ● Test suite failed to run

    Jest encountered an unexpected token

    Jest failed to parse a file. This happens e.g. when your code or its dependencies use non-standard JavaScript syntax, or when Jest is not configured to support such syntax.

    Out of the box Jest supports Babel, which will be used to transform your files into valid JS based on your Babel configuration.

    By default "node_modules" folder is ignored by transformers.

    Here's what you can do:
     • If you are trying to use ECMAScript Modules, see https://jestjs.io/docs/ecmascript-modules for how to enable it.
     • If you are trying to use TypeScript, see https://jestjs.io/docs/getting-started#using-typescript
     • To have some of your "node_modules" files transformed, you can specify a custom "transformIgnorePatterns" in your config.
     • If you need a custom transformation specify a "transform" option in your config.
     • If you simply want to mock your non-JS modules (e.g. binary assets) you can stub them out with the "moduleNameMapper" config option.

    You'll find more details and examples of these config options in the docs:
    https://jestjs.io/docs/configuration
    For information about custom transformations, see:
    https://jestjs.io/docs/code-transformation

    Details:

    SyntaxError: /workspaces/jg_aitraining2/packages/frontend/src/__tests__/App.coverage.test.js: Identifier 'addButton' has already been declared. (95:10)

      93 |       expect(screen.getByText('Test Task')).toBeInTheDocument();
      94 |     });
    > 95 |     const addButton = screen.getByRole('button', { name: /add new task/i });
         |           ^
      96 |     await user.click(addButton);
      97 |     await user.type(screen.getByLabelText(/task title/i), 'New Task');
      98 |     await user.type(screen.getByLabelText(/description/i), 'New Desc');

      at toParseError (../../node_modules/@babel/parser/src/parse-error.ts:95:45)
      at FlowParserMixin.raise (../../node_modules/@babel/parser/src/tokenizer/index.ts:1503:19)
      at FlowScopeHandler.checkRedeclarationInScope (../../node_modules/@babel/parser/src/util/scope.ts:155:19)
      at FlowScopeHandler.declareName (../../node_modules/@babel/parser/src/util/scope.ts:109:12)
      at FlowScopeHandler.declareName (../../node_modules/@babel/parser/src/plugins/flow/scope.ts:26:11)
      at FlowParserMixin.declareNameFromIdentifier (../../node_modules/@babel/parser/src/parser/lval.ts:753:16)
      at FlowParserMixin.checkIdentifier (../../node_modules/@babel/parser/src/parser/lval.ts:748:12)
      at FlowParserMixin.checkLVal (../../node_modules/@babel/parser/src/parser/lval.ts:650:12)
      at FlowParserMixin.parseVarId (../../node_modules/@babel/parser/src/parser/statement.ts:1600:10)
      at FlowParserMixin.parseVarId (../../node_modules/@babel/parser/src/plugins/flow/index.ts:2932:13)
      at FlowParserMixin.parseVar (../../node_modules/@babel/parser/src/parser/statement.ts:1553:12)
      at FlowParserMixin.parseVarStatement (../../node_modules/@babel/parser/src/parser/statement.ts:1222:10)
      at FlowParserMixin.parseStatementContent (../../node_modules/@babel/parser/src/parser/statement.ts:578:21)
      at FlowParserMixin.parseStatementLike (../../node_modules/@babel/parser/src/parser/statement.ts:449:17)
      at FlowParserMixin.parseStatementLike (../../node_modules/@babel/parser/src/plugins/flow/index.ts:1994:26)
      at FlowParserMixin.parseStatementListItem (../../node_modules/@babel/parser/src/parser/statement.ts:398:17)
      at FlowParserMixin.parseBlockOrModuleBlockBody (../../node_modules/@babel/parser/src/parser/statement.ts:1415:16)
      at FlowParserMixin.parseBlockBody (../../node_modules/@babel/parser/src/parser/statement.ts:1388:10)
      at FlowParserMixin.parseBlock (../../node_modules/@babel/parser/src/parser/statement.ts:1356:10)
      at FlowParserMixin.parseFunctionBody (../../node_modules/@babel/parser/src/parser/expression.ts:2579:24)
      at parse (../../node_modules/@babel/parser/src/plugins/flow/index.ts:1947:17)
      at FlowParserMixin.forwardNoArrowParamsConversionAt (../../node_modules/@babel/parser/src/plugins/flow/index.ts:2228:18)
      at FlowParserMixin.parseFunctionBody (../../node_modules/@babel/parser/src/plugins/flow/index.ts:1946:14)
      at FlowParserMixin.parseArrowExpression (../../node_modules/@babel/parser/src/parser/expression.ts:2520:10)
      at FlowParserMixin.parseAsyncArrowFromCallExpression (../../node_modules/@babel/parser/src/parser/expression.ts:1045:10)
      at FlowParserMixin.parseAsyncArrowFromCallExpression (../../node_modules/@babel/parser/src/plugins/flow/index.ts:2951:20)
      at FlowParserMixin.parseCoverCallAndAsyncArrowHead (../../node_modules/@babel/parser/src/parser/expression.ts:924:27)
      at FlowParserMixin.parseSubscript (../../node_modules/@babel/parser/src/parser/expression.ts:785:19)
      at FlowParserMixin.parseSubscript (../../node_modules/@babel/parser/src/plugins/flow/index.ts:3310:20)
      at FlowParserMixin.parseSubscripts (../../node_modules/@babel/parser/src/parser/expression.ts:744:19)
      at FlowParserMixin.parseSubscripts (../../node_modules/@babel/parser/src/plugins/flow/index.ts:3253:20)
      at FlowParserMixin.parseExprSubscripts (../../node_modules/@babel/parser/src/parser/expression.ts:729:17)
      at FlowParserMixin.parseUpdate (../../node_modules/@babel/parser/src/parser/expression.ts:702:21)
      at FlowParserMixin.parseMaybeUnary (../../node_modules/@babel/parser/src/parser/expression.ts:664:23)
      at FlowParserMixin.parseMaybeUnaryOrPrivate (../../node_modules/@babel/parser/src/parser/expression.ts:398:14)
      at FlowParserMixin.parseExprOps (../../node_modules/@babel/parser/src/parser/expression.ts:410:23)
      at FlowParserMixin.parseMaybeConditional (../../node_modules/@babel/parser/src/parser/expression.ts:365:23)
      at FlowParserMixin.parseMaybeAssign (../../node_modules/@babel/parser/src/parser/expression.ts:296:21)
      at FlowParserMixin.parseMaybeAssign (../../node_modules/@babel/parser/src/plugins/flow/index.ts:3097:20)
      at callback (../../node_modules/@babel/parser/src/parser/expression.ts:252:12)
      at FlowParserMixin.allowInAnd (../../node_modules/@babel/parser/src/parser/expression.ts:3136:12)
      at FlowParserMixin.parseMaybeAssignAllowIn (../../node_modules/@babel/parser/src/parser/expression.ts:251:17)
      at FlowParserMixin.parseExprListItem (../../node_modules/@babel/parser/src/parser/expression.ts:2742:18)
      at FlowParserMixin.parseCallExpressionArguments (../../node_modules/@babel/parser/src/parser/expression.ts:1025:14)
      at FlowParserMixin.parseCoverCallAndAsyncArrowHead (../../node_modules/@babel/parser/src/parser/expression.ts:903:29)
      at FlowParserMixin.parseSubscript (../../node_modules/@babel/parser/src/parser/expression.ts:785:19)
      at FlowParserMixin.parseSubscript (../../node_modules/@babel/parser/src/plugins/flow/index.ts:3310:20)
      at FlowParserMixin.parseSubscripts (../../node_modules/@babel/parser/src/parser/expression.ts:744:19)
      at FlowParserMixin.parseSubscripts (../../node_modules/@babel/parser/src/plugins/flow/index.ts:3253:20)
      at FlowParserMixin.parseExprSubscripts (../../node_modules/@babel/parser/src/parser/expression.ts:729:17)


Test Suites: 10 failed, 22 skipped, 8 passed, 18 of 40 total
Tests:       22 skipped, 67 passed, 89 total
Snapshots:   0 total
Time:        6.35 s, estimated 10 s
Ran all test suites.
npm error Lifecycle script `test` failed with error:
npm error code 1
npm error path /workspaces/jg_aitraining2/packages/frontend
npm error workspace frontend@0.1.0
npm error location /workspaces/jg_aitraining2/packages/frontend
npm error command failed
npm error command sh -c react-scripts test --coverage --watchAll=false --coverage
@jenny-ghaccount ➜ /workspaces/jg_aitraining2/packages/frontend (feature/context) $ 