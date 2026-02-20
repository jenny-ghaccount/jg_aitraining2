@jenny-ghaccount ➜ /workspaces/jg_aitraining2/packages/frontend (feature/context) $ npm test

> frontend@0.1.0 test
> react-scripts test --coverage --watchAll=false

 PASS  src/__tests__/hooks/useTaskManager.test.js
 PASS  src/__tests__/test-utils-clean.js
 PASS  src/__tests__/utils/taskUtils.test.js
 PASS  src/__tests__/test-utils-fixed.js
 PASS  src/__tests__/testHelpers.js
 PASS  src/__tests__/test-utils.js
 PASS  src/__tests__/utils/appUtils.test.js
 PASS  src/__tests__/utils/basicUtils.test.js
 FAIL  src/__tests__/SimpleApp.test.js
  ● Test suite failed to run

    TypeError: baseTheme.spacing is not a function

      321 |         root: {
      322 |           minHeight: 48, // Material Design minimum
    > 323 |           paddingLeft: baseTheme.spacing(2),
          |                                  ^
      324 |           paddingRight: baseTheme.spacing(2),
      325 |           '&:hover': {
      326 |             backgroundColor: 'rgba(25, 118, 210, 0.04)'

      at Object.<anonymous> (src/theme/theme.js:323:34)
      at Object.<anonymous> (src/theme/ThemeProvider.js:4:1)
      at Object.<anonymous> (src/App.js:18:1)
      at Object.<anonymous> (src/__tests__/SimpleApp.test.js:4:1)

 FAIL  src/__tests__/App.test.js
  ● Test suite failed to run

    TypeError: baseTheme.spacing is not a function

      321 |         root: {
      322 |           minHeight: 48, // Material Design minimum
    > 323 |           paddingLeft: baseTheme.spacing(2),
          |                                  ^
      324 |           paddingRight: baseTheme.spacing(2),
      325 |           '&:hover': {
      326 |             backgroundColor: 'rgba(25, 118, 210, 0.04)'

      at Object.<anonymous> (src/theme/theme.js:323:34)
      at Object.<anonymous> (src/theme/ThemeProvider.js:4:1)
      at Object.<anonymous> (src/App.js:18:1)
      at Object.<anonymous> (src/__tests__/App.test.js:6:1)

 FAIL  src/__tests__/integration/ComponentIntegration.test.js
  ● Test suite failed to run

    TypeError: baseTheme.spacing is not a function

      321 |         root: {
      322 |           minHeight: 48, // Material Design minimum
    > 323 |           paddingLeft: baseTheme.spacing(2),
          |                                  ^
      324 |           paddingRight: baseTheme.spacing(2),
      325 |           '&:hover': {
      326 |             backgroundColor: 'rgba(25, 118, 210, 0.04)'

      at Object.<anonymous> (src/theme/theme.js:323:34)
      at Object.<anonymous> (src/theme/ThemeProvider.js:4:1)
      at Object.<anonymous> (src/App.js:18:1)
      at Object.<anonymous> (src/__tests__/integration/ComponentIntegration.test.js:4:1)

 FAIL  src/__tests__/integration/Integration.test.js
  ● Test suite failed to run

    TypeError: baseTheme.spacing is not a function

      321 |         root: {
      322 |           minHeight: 48, // Material Design minimum
    > 323 |           paddingLeft: baseTheme.spacing(2),
          |                                  ^
      324 |           paddingRight: baseTheme.spacing(2),
      325 |           '&:hover': {
      326 |             backgroundColor: 'rgba(25, 118, 210, 0.04)'

      at Object.<anonymous> (src/theme/theme.js:323:34)
      at Object.<anonymous> (src/theme/ThemeProvider.js:4:1)
      at Object.<anonymous> (src/App.js:18:1)
      at Object.<anonymous> (src/__tests__/integration/Integration.test.js:4:1)

 FAIL  src/__tests__/integration/ComponentIntegration.simple.fixed.test.js
  ● Test suite failed to run

    TypeError: baseTheme.spacing is not a function

      321 |         root: {
      322 |           minHeight: 48, // Material Design minimum
    > 323 |           paddingLeft: baseTheme.spacing(2),
          |                                  ^
      324 |           paddingRight: baseTheme.spacing(2),
      325 |           '&:hover': {
      326 |             backgroundColor: 'rgba(25, 118, 210, 0.04)'

      at Object.<anonymous> (src/theme/theme.js:323:34)
      at Object.<anonymous> (src/theme/ThemeProvider.js:4:1)
      at Object.<anonymous> (src/App.js:18:1)
      at Object.<anonymous> (src/__tests__/integration/ComponentIntegration.simple.fixed.test.js:7:1)

 FAIL  src/__tests__/integration/ComponentIntegration.simple.test.js
  ● Test suite failed to run

    TypeError: baseTheme.spacing is not a function

      321 |         root: {
      322 |           minHeight: 48, // Material Design minimum
    > 323 |           paddingLeft: baseTheme.spacing(2),
          |                                  ^
      324 |           paddingRight: baseTheme.spacing(2),
      325 |           '&:hover': {
      326 |             backgroundColor: 'rgba(25, 118, 210, 0.04)'

      at Object.<anonymous> (src/theme/theme.js:323:34)
      at Object.<anonymous> (src/theme/ThemeProvider.js:4:1)
      at Object.<anonymous> (src/App.js:18:1)
      at Object.<anonymous> (src/__tests__/integration/ComponentIntegration.simple.test.js:6:1)

 FAIL  src/__tests__/TaskForm.test.js
  ● Test suite failed to run

    TypeError: baseTheme.spacing is not a function

      321 |         root: {
      322 |           minHeight: 48, // Material Design minimum
    > 323 |           paddingLeft: baseTheme.spacing(2),
          |                                  ^
      324 |           paddingRight: baseTheme.spacing(2),
      325 |           '&:hover': {
      326 |             backgroundColor: 'rgba(25, 118, 210, 0.04)'

      at Object.<anonymous> (src/theme/theme.js:323:34)
      at Object.<anonymous> (src/theme/ThemeProvider.js:4:1)
      at Object.<anonymous> (src/__tests__/TaskForm.test.js:4:1)

 FAIL  src/__tests__/AppIntegration.test.js
  ● Test suite failed to run

    TypeError: baseTheme.spacing is not a function

      321 |         root: {
      322 |           minHeight: 48, // Material Design minimum
    > 323 |           paddingLeft: baseTheme.spacing(2),
          |                                  ^
      324 |           paddingRight: baseTheme.spacing(2),
      325 |           '&:hover': {
      326 |             backgroundColor: 'rgba(25, 118, 210, 0.04)'

      at Object.<anonymous> (src/theme/theme.js:323:34)
      at Object.<anonymous> (src/theme/ThemeProvider.js:4:1)
      at Object.<anonymous> (src/App.js:18:1)
      at Object.<anonymous> (src/__tests__/AppIntegration.test.js:3:1)

--------------------|---------|----------|---------|---------|----------------------
File                | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s    
--------------------|---------|----------|---------|---------|----------------------
All files           |   17.72 |    16.48 |   17.33 |   18.37 |                      
 src                |       0 |        0 |       0 |       0 |                      
  App.js            |       0 |        0 |       0 |       0 | 23-374               
  TaskForm.js       |       0 |        0 |       0 |       0 | 4-135                
 src/hooks          |   66.66 |    58.33 |   52.94 |   71.87 |                      
  useTaskManager.js |   66.66 |    58.33 |   52.94 |   71.87 | 17-18,51-52,57,61-67 
 src/theme          |       0 |        0 |       0 |       0 |                      
  ThemeProvider.js  |       0 |        0 |       0 |       0 | 11-167               
  theme.js          |       0 |      100 |     100 |       0 | 10-415               
 src/utils          |   96.77 |      100 |     100 |   96.66 |                      
  taskUtils.js      |   96.77 |      100 |     100 |   96.66 | 45                   
--------------------|---------|----------|---------|---------|----------------------

=============================== Coverage summary ===============================
Statements   : 17.72% ( 56/316 )
Branches     : 16.48% ( 30/182 )
Functions    : 17.33% ( 13/75 )
Lines        : 18.37% ( 52/283 )
================================================================================
Jest: "global" coverage threshold for statements (80%) not met: 17.72%
Jest: "global" coverage threshold for branches (80%) not met: 16.48%
Jest: "global" coverage threshold for lines (80%) not met: 18.37%
Jest: "global" coverage threshold for functions (80%) not met: 17.33%

Summary of all failing tests
 FAIL  src/__tests__/SimpleApp.test.js
  ● Test suite failed to run

    TypeError: baseTheme.spacing is not a function

      321 |         root: {
      322 |           minHeight: 48, // Material Design minimum
    > 323 |           paddingLeft: baseTheme.spacing(2),
          |                                  ^
      324 |           paddingRight: baseTheme.spacing(2),
      325 |           '&:hover': {
      326 |             backgroundColor: 'rgba(25, 118, 210, 0.04)'

      at Object.<anonymous> (src/theme/theme.js:323:34)
      at Object.<anonymous> (src/theme/ThemeProvider.js:4:1)
      at Object.<anonymous> (src/App.js:18:1)
      at Object.<anonymous> (src/__tests__/SimpleApp.test.js:4:1)

 FAIL  src/__tests__/App.test.js
  ● Test suite failed to run

    TypeError: baseTheme.spacing is not a function

      321 |         root: {
      322 |           minHeight: 48, // Material Design minimum
    > 323 |           paddingLeft: baseTheme.spacing(2),
          |                                  ^
      324 |           paddingRight: baseTheme.spacing(2),
      325 |           '&:hover': {
      326 |             backgroundColor: 'rgba(25, 118, 210, 0.04)'

      at Object.<anonymous> (src/theme/theme.js:323:34)
      at Object.<anonymous> (src/theme/ThemeProvider.js:4:1)
      at Object.<anonymous> (src/App.js:18:1)
      at Object.<anonymous> (src/__tests__/App.test.js:6:1)

 FAIL  src/__tests__/integration/ComponentIntegration.test.js
  ● Test suite failed to run

    TypeError: baseTheme.spacing is not a function

      321 |         root: {
      322 |           minHeight: 48, // Material Design minimum
    > 323 |           paddingLeft: baseTheme.spacing(2),
          |                                  ^
      324 |           paddingRight: baseTheme.spacing(2),
      325 |           '&:hover': {
      326 |             backgroundColor: 'rgba(25, 118, 210, 0.04)'

      at Object.<anonymous> (src/theme/theme.js:323:34)
      at Object.<anonymous> (src/theme/ThemeProvider.js:4:1)
      at Object.<anonymous> (src/App.js:18:1)
      at Object.<anonymous> (src/__tests__/integration/ComponentIntegration.test.js:4:1)

 FAIL  src/__tests__/integration/Integration.test.js
  ● Test suite failed to run

    TypeError: baseTheme.spacing is not a function

      321 |         root: {
      322 |           minHeight: 48, // Material Design minimum
    > 323 |           paddingLeft: baseTheme.spacing(2),
          |                                  ^
      324 |           paddingRight: baseTheme.spacing(2),
      325 |           '&:hover': {
      326 |             backgroundColor: 'rgba(25, 118, 210, 0.04)'

      at Object.<anonymous> (src/theme/theme.js:323:34)
      at Object.<anonymous> (src/theme/ThemeProvider.js:4:1)
      at Object.<anonymous> (src/App.js:18:1)
      at Object.<anonymous> (src/__tests__/integration/Integration.test.js:4:1)

 FAIL  src/__tests__/integration/ComponentIntegration.simple.fixed.test.js
  ● Test suite failed to run

    TypeError: baseTheme.spacing is not a function

      321 |         root: {
      322 |           minHeight: 48, // Material Design minimum
    > 323 |           paddingLeft: baseTheme.spacing(2),
          |                                  ^
      324 |           paddingRight: baseTheme.spacing(2),
      325 |           '&:hover': {
      326 |             backgroundColor: 'rgba(25, 118, 210, 0.04)'

      at Object.<anonymous> (src/theme/theme.js:323:34)
      at Object.<anonymous> (src/theme/ThemeProvider.js:4:1)
      at Object.<anonymous> (src/App.js:18:1)
      at Object.<anonymous> (src/__tests__/integration/ComponentIntegration.simple.fixed.test.js:7:1)

 FAIL  src/__tests__/integration/ComponentIntegration.simple.test.js
  ● Test suite failed to run

    TypeError: baseTheme.spacing is not a function

      321 |         root: {
      322 |           minHeight: 48, // Material Design minimum
    > 323 |           paddingLeft: baseTheme.spacing(2),
          |                                  ^
      324 |           paddingRight: baseTheme.spacing(2),
      325 |           '&:hover': {
      326 |             backgroundColor: 'rgba(25, 118, 210, 0.04)'

      at Object.<anonymous> (src/theme/theme.js:323:34)
      at Object.<anonymous> (src/theme/ThemeProvider.js:4:1)
      at Object.<anonymous> (src/App.js:18:1)
      at Object.<anonymous> (src/__tests__/integration/ComponentIntegration.simple.test.js:6:1)

 FAIL  src/__tests__/TaskForm.test.js
  ● Test suite failed to run

    TypeError: baseTheme.spacing is not a function

      321 |         root: {
      322 |           minHeight: 48, // Material Design minimum
    > 323 |           paddingLeft: baseTheme.spacing(2),
          |                                  ^
      324 |           paddingRight: baseTheme.spacing(2),
      325 |           '&:hover': {
      326 |             backgroundColor: 'rgba(25, 118, 210, 0.04)'

      at Object.<anonymous> (src/theme/theme.js:323:34)
      at Object.<anonymous> (src/theme/ThemeProvider.js:4:1)
      at Object.<anonymous> (src/__tests__/TaskForm.test.js:4:1)

 FAIL  src/__tests__/AppIntegration.test.js
  ● Test suite failed to run

    TypeError: baseTheme.spacing is not a function

      321 |         root: {
      322 |           minHeight: 48, // Material Design minimum
    > 323 |           paddingLeft: baseTheme.spacing(2),
          |                                  ^
      324 |           paddingRight: baseTheme.spacing(2),
      325 |           '&:hover': {
      326 |             backgroundColor: 'rgba(25, 118, 210, 0.04)'

      at Object.<anonymous> (src/theme/theme.js:323:34)
      at Object.<anonymous> (src/theme/ThemeProvider.js:4:1)
      at Object.<anonymous> (src/App.js:18:1)
      at Object.<anonymous> (src/__tests__/AppIntegration.test.js:3:1)


Test Suites: 8 failed, 22 skipped, 8 passed, 16 of 38 total
Tests:       22 skipped, 51 passed, 73 total
Snapshots:   0 total
Time:        5.03 s
Ran all test suites.
npm error Lifecycle script `test` failed with error:
npm error code 1
npm error path /workspaces/jg_aitraining2/packages/frontend
npm error workspace frontend@0.1.0
npm error location /workspaces/jg_aitraining2/packages/frontend
npm error command failed
npm error command sh -c react-scripts test --coverage --watchAll=false
@jenny-ghaccount ➜ /workspaces/jg_aitraining2/packages/frontend (feature/context) $ 