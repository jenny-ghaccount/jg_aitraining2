der.js:16:11)
          at BrokenConsumer (/workspaces/jg_aitraining2/packages/frontend/src/theme/ThemeProvider.test.js:73:15)
          at renderWithHooks (/workspaces/jg_aitraining2/node_modules/react-dom/cjs/react-dom.development.js:15486:18)
          at mountIndeterminateComponent (/workspaces/jg_aitraining2/node_modules/react-dom/cjs/react-dom.development.js:20103:13)
          at beginWork (/workspaces/jg_aitraining2/node_modules/react-dom/cjs/react-dom.development.js:21626:16)
          at HTMLUnknownElement.callCallback (/workspaces/jg_aitraining2/node_modules/react-dom/cjs/react-dom.development.js:4164:14)
          at HTMLUnknownElement.callTheUserObjectsOperation (/workspaces/jg_aitraining2/node_modules/jsdom/lib/jsdom/living/generated/EventListener.js:26:30)
          at innerInvokeEventListeners (/workspaces/jg_aitraining2/node_modules/jsdom/lib/jsdom/living/events/EventTarget-impl.js:338:25)
          at invokeEventListeners (/workspaces/jg_aitraining2/node_modules/jsdom/lib/jsdom/living/events/EventTarget-impl.js:274:3)
          at HTMLUnknownElementImpl._dispatch (/workspaces/jg_aitraining2/node_modules/jsdom/lib/jsdom/living/events/EventTarget-impl.js:221:9)
          at HTMLUnknownElementImpl.dispatchEvent (/workspaces/jg_aitraining2/node_modules/jsdom/lib/jsdom/living/events/EventTarget-impl.js:94:17)
          at HTMLUnknownElement.dispatchEvent (/workspaces/jg_aitraining2/node_modules/jsdom/lib/jsdom/living/generated/EventTarget.js:231:34)
          at Object.invokeGuardedCallbackDev (/workspaces/jg_aitraining2/node_modules/react-dom/cjs/react-dom.development.js:4213:16)
          at invokeGuardedCallback (/workspaces/jg_aitraining2/node_modules/react-dom/cjs/react-dom.development.js:4277:31)
          at beginWork$1 (/workspaces/jg_aitraining2/node_modules/react-dom/cjs/react-dom.development.js:27490:7)
          at performUnitOfWork (/workspaces/jg_aitraining2/node_modules/react-dom/cjs/react-dom.development.js:26599:12)
          at workLoopSync (/workspaces/jg_aitraining2/node_modules/react-dom/cjs/react-dom.development.js:26505:5)
          at renderRootSync (/workspaces/jg_aitraining2/node_modules/react-dom/cjs/react-dom.development.js:26473:7)
          at performConcurrentWorkOnRoot (/workspaces/jg_aitraining2/node_modules/react-dom/cjs/react-dom.development.js:25777:74)
          at flushActQueue (/workspaces/jg_aitraining2/node_modules/react/cjs/react.development.js:2667:24)
          at act (/workspaces/jg_aitraining2/node_modules/react/cjs/react.development.js:2582:11)
          at /workspaces/jg_aitraining2/node_modules/@testing-library/react/dist/act-compat.js:47:25
          at renderRoot (/workspaces/jg_aitraining2/node_modules/@testing-library/react/dist/pure.js:180:26)
          at render (/workspaces/jg_aitraining2/node_modules/@testing-library/react/dist/pure.js:271:10)
          at /workspaces/jg_aitraining2/packages/frontend/src/theme/ThemeProvider.test.js:76:24
          at Object.<anonymous> (/workspaces/jg_aitraining2/node_modules/expect/build/toThrowMatchers.js:83:11)
          at Object.toThrow (/workspaces/jg_aitraining2/node_modules/expect/build/index.js:382:21)
          at Object.<anonymous> (/workspaces/jg_aitraining2/packages/frontend/src/theme/ThemeProvider.test.js:76:46)
          at Promise.then.completed (/workspaces/jg_aitraining2/node_modules/jest-circus/build/utils.js:391:28)
          at new Promise (<anonymous>)
          at callAsyncCircusFn (/workspaces/jg_aitraining2/node_modules/jest-circus/build/utils.js:316:10)
          at _callCircusTest (/workspaces/jg_aitraining2/node_modules/jest-circus/build/run.js:218:40)
          at _runTest (/workspaces/jg_aitraining2/node_modules/jest-circus/build/run.js:155:3)
          at _runTestsForDescribeBlock (/workspaces/jg_aitraining2/node_modules/jest-circus/build/run.js:66:9)
          at _runTestsForDescribeBlock (/workspaces/jg_aitraining2/node_modules/jest-circus/build/run.js:60:9)
          at run (/workspaces/jg_aitraining2/node_modules/jest-circus/build/run.js:25:3)
          at runAndTransformResultsToJestFormat (/workspaces/jg_aitraining2/node_modules/jest-circus/build/legacy-code-todo-rewrite/jestAdapterInit.js:170:21)
          at jestAdapter (/workspaces/jg_aitraining2/node_modules/jest-circus/build/legacy-code-todo-rewrite/jestAdapter.js:82:19)
          at runTestInternal (/workspaces/jg_aitraining2/node_modules/jest-runner/build/runTest.js:389:16)
          at runTest (/workspaces/jg_aitraining2/node_modules/jest-runner/build/runTest.js:475:34)

      74 |       return null;
      75 |     };
    > 76 |     expect(() => render(<BrokenConsumer />)).toThrow('useTheme must be used within a ThemeProvider');
         |                        ^
      77 |   });
      78 |
      79 |   test('sets theme from localStorage', () => {

      at VirtualConsole.<anonymous> (../../node_modules/jsdom/lib/jsdom/virtual-console.js:29:45)
      at reportException (../../node_modules/jsdom/lib/jsdom/living/helpers/runtime-script-errors.js:70:28)
      at innerInvokeEventListeners (../../node_modules/jsdom/lib/jsdom/living/events/EventTarget-impl.js:341:9)
      at invokeEventListeners (../../node_modules/jsdom/lib/jsdom/living/events/EventTarget-impl.js:274:3)
      at HTMLUnknownElementImpl._dispatch (../../node_modules/jsdom/lib/jsdom/living/events/EventTarget-impl.js:221:9)
      at HTMLUnknownElementImpl.dispatchEvent (../../node_modules/jsdom/lib/jsdom/living/events/EventTarget-impl.js:94:17)
      at HTMLUnknownElement.dispatchEvent (../../node_modules/jsdom/lib/jsdom/living/generated/EventTarget.js:231:34)
      at Object.invokeGuardedCallbackDev (../../node_modules/react-dom/cjs/react-dom.development.js:4213:16)
      at invokeGuardedCallback (../../node_modules/react-dom/cjs/react-dom.development.js:4277:31)
      at beginWork$1 (../../node_modules/react-dom/cjs/react-dom.development.js:27490:7)
      at performUnitOfWork (../../node_modules/react-dom/cjs/react-dom.development.js:26599:12)
      at workLoopSync (../../node_modules/react-dom/cjs/react-dom.development.js:26505:5)
      at renderRootSync (../../node_modules/react-dom/cjs/react-dom.development.js:26473:7)
      at performConcurrentWorkOnRoot (../../node_modules/react-dom/cjs/react-dom.development.js:25777:74)
      at flushActQueue (../../node_modules/react/cjs/react.development.js:2667:24)
      at act (../../node_modules/react/cjs/react.development.js:2582:11)
      at ../../node_modules/@testing-library/react/dist/act-compat.js:47:25
      at renderRoot (../../node_modules/@testing-library/react/dist/pure.js:180:26)
      at render (../../node_modules/@testing-library/react/dist/pure.js:271:10)
      at src/theme/ThemeProvider.test.js:76:24
      at Object.<anonymous> (../../node_modules/expect/build/toThrowMatchers.js:83:11)
      at Object.toThrow (../../node_modules/expect/build/index.js:382:21)
      at Object.<anonymous> (src/theme/ThemeProvider.test.js:76:46)

    console.error
      Error: Uncaught [Error: useTheme must be used within a ThemeProvider]
          at reportException (/workspaces/jg_aitraining2/node_modules/jsdom/lib/jsdom/living/helpers/runtime-script-errors.js:66:24)
          at innerInvokeEventListeners (/workspaces/jg_aitraining2/node_modules/jsdom/lib/jsdom/living/events/EventTarget-impl.js:341:9)
          at invokeEventListeners (/workspaces/jg_aitraining2/node_modules/jsdom/lib/jsdom/living/events/EventTarget-impl.js:274:3)
          at HTMLUnknownElementImpl._dispatch (/workspaces/jg_aitraining2/node_modules/jsdom/lib/jsdom/living/events/EventTarget-impl.js:221:9)
          at HTMLUnknownElementImpl.dispatchEvent (/workspaces/jg_aitraining2/node_modules/jsdom/lib/jsdom/living/events/EventTarget-impl.js:94:17)
          at HTMLUnknownElement.dispatchEvent (/workspaces/jg_aitraining2/node_modules/jsdom/lib/jsdom/living/generated/EventTarget.js:231:34)
          at Object.invokeGuardedCallbackDev (/workspaces/jg_aitraining2/node_modules/react-dom/cjs/react-dom.development.js:4213:16)
          at invokeGuardedCallback (/workspaces/jg_aitraining2/node_modules/react-dom/cjs/react-dom.development.js:4277:31)
          at beginWork$1 (/workspaces/jg_aitraining2/node_modules/react-dom/cjs/react-dom.development.js:27490:7)
          at performUnitOfWork (/workspaces/jg_aitraining2/node_modules/react-dom/cjs/react-dom.development.js:26599:12)
          at workLoopSync (/workspaces/jg_aitraining2/node_modules/react-dom/cjs/react-dom.development.js:26505:5)
          at renderRootSync (/workspaces/jg_aitraining2/node_modules/react-dom/cjs/react-dom.development.js:26473:7)
          at recoverFromConcurrentError (/workspaces/jg_aitraining2/node_modules/react-dom/cjs/react-dom.development.js:25889:20)
          at performConcurrentWorkOnRoot (/workspaces/jg_aitraining2/node_modules/react-dom/cjs/react-dom.development.js:25789:22)
          at flushActQueue (/workspaces/jg_aitraining2/node_modules/react/cjs/react.development.js:2667:24)
          at act (/workspaces/jg_aitraining2/node_modules/react/cjs/react.development.js:2582:11)
          at /workspaces/jg_aitraining2/node_modules/@testing-library/react/dist/act-compat.js:47:25
          at renderRoot (/workspaces/jg_aitraining2/node_modules/@testing-library/react/dist/pure.js:180:26)
          at render (/workspaces/jg_aitraining2/node_modules/@testing-library/react/dist/pure.js:271:10)
          at /workspaces/jg_aitraining2/packages/frontend/src/theme/ThemeProvider.test.js:76:24
          at Object.<anonymous> (/workspaces/jg_aitraining2/node_modules/expect/build/toThrowMatchers.js:83:11)
          at Object.toThrow (/workspaces/jg_aitraining2/node_modules/expect/build/index.js:382:21)
          at Object.<anonymous> (/workspaces/jg_aitraining2/packages/frontend/src/theme/ThemeProvider.test.js:76:46)
          at Promise.then.completed (/workspaces/jg_aitraining2/node_modules/jest-circus/build/utils.js:391:28)
          at new Promise (<anonymous>)
          at callAsyncCircusFn (/workspaces/jg_aitraining2/node_modules/jest-circus/build/utils.js:316:10)
          at _callCircusTest (/workspaces/jg_aitraining2/node_modules/jest-circus/build/run.js:218:40)
          at _runTest (/workspaces/jg_aitraining2/node_modules/jest-circus/build/run.js:155:3)
          at _runTestsForDescribeBlock (/workspaces/jg_aitraining2/node_modules/jest-circus/build/run.js:66:9)
          at _runTestsForDescribeBlock (/workspaces/jg_aitraining2/node_modules/jest-circus/build/run.js:60:9)
          at run (/workspaces/jg_aitraining2/node_modules/jest-circus/build/run.js:25:3)
          at runAndTransformResultsToJestFormat (/workspaces/jg_aitraining2/node_modules/jest-circus/build/legacy-code-todo-rewrite/jestAdapterInit.js:170:21)
          at jestAdapter (/workspaces/jg_aitraining2/node_modules/jest-circus/build/legacy-code-todo-rewrite/jestAdapter.js:82:19)
          at runTestInternal (/workspaces/jg_aitraining2/node_modules/jest-runner/build/runTest.js:389:16)
          at runTest (/workspaces/jg_aitraining2/node_modules/jest-runner/build/runTest.js:475:34) Error: useTheme must be used within a ThemeProvider
          at useTheme (/workspaces/jg_aitraining2/packages/frontend/src/theme/ThemeProvider.js:16:11)
          at BrokenConsumer (/workspaces/jg_aitraining2/packages/frontend/src/theme/ThemeProvider.test.js:73:15)
          at renderWithHooks (/workspaces/jg_aitraining2/node_modules/react-dom/cjs/react-dom.development.js:15486:18)
          at mountIndeterminateComponent (/workspaces/jg_aitraining2/node_modules/react-dom/cjs/react-dom.development.js:20103:13)
          at beginWork (/workspaces/jg_aitraining2/node_modules/react-dom/cjs/react-dom.development.js:21626:16)
          at HTMLUnknownElement.callCallback (/workspaces/jg_aitraining2/node_modules/react-dom/cjs/react-dom.development.js:4164:14)
          at HTMLUnknownElement.callTheUserObjectsOperation (/workspaces/jg_aitraining2/node_modules/jsdom/lib/jsdom/living/generated/EventListener.js:26:30)
          at innerInvokeEventListeners (/workspaces/jg_aitraining2/node_modules/jsdom/lib/jsdom/living/events/EventTarget-impl.js:338:25)
          at invokeEventListeners (/workspaces/jg_aitraining2/node_modules/jsdom/lib/jsdom/living/events/EventTarget-impl.js:274:3)
          at HTMLUnknownElementImpl._dispatch (/workspaces/jg_aitraining2/node_modules/jsdom/lib/jsdom/living/events/EventTarget-impl.js:221:9)
          at HTMLUnknownElementImpl.dispatchEvent (/workspaces/jg_aitraining2/node_modules/jsdom/lib/jsdom/living/events/EventTarget-impl.js:94:17)
          at HTMLUnknownElement.dispatchEvent (/workspaces/jg_aitraining2/node_modules/jsdom/lib/jsdom/living/generated/EventTarget.js:231:34)
          at Object.invokeGuardedCallbackDev (/workspaces/jg_aitraining2/node_modules/react-dom/cjs/react-dom.development.js:4213:16)
          at invokeGuardedCallback (/workspaces/jg_aitraining2/node_modules/react-dom/cjs/react-dom.development.js:4277:31)
          at beginWork$1 (/workspaces/jg_aitraining2/node_modules/react-dom/cjs/react-dom.development.js:27490:7)
          at performUnitOfWork (/workspaces/jg_aitraining2/node_modules/react-dom/cjs/react-dom.development.js:26599:12)
          at workLoopSync (/workspaces/jg_aitraining2/node_modules/react-dom/cjs/react-dom.development.js:26505:5)
          at renderRootSync (/workspaces/jg_aitraining2/node_modules/react-dom/cjs/react-dom.development.js:26473:7)
          at recoverFromConcurrentError (/workspaces/jg_aitraining2/node_modules/react-dom/cjs/react-dom.development.js:25889:20)
          at performConcurrentWorkOnRoot (/workspaces/jg_aitraining2/node_modules/react-dom/cjs/react-dom.development.js:25789:22)
          at flushActQueue (/workspaces/jg_aitraining2/node_modules/react/cjs/react.development.js:2667:24)
          at act (/workspaces/jg_aitraining2/node_modules/react/cjs/react.development.js:2582:11)
          at /workspaces/jg_aitraining2/node_modules/@testing-library/react/dist/act-compat.js:47:25
          at renderRoot (/workspaces/jg_aitraining2/node_modules/@testing-library/react/dist/pure.js:180:26)
          at render (/workspaces/jg_aitraining2/node_modules/@testing-library/react/dist/pure.js:271:10)
          at /workspaces/jg_aitraining2/packages/frontend/src/theme/ThemeProvider.test.js:76:24
          at Object.<anonymous> (/workspaces/jg_aitraining2/node_modules/expect/build/toThrowMatchers.js:83:11)
          at Object.toThrow (/workspaces/jg_aitraining2/node_modules/expect/build/index.js:382:21)
          at Object.<anonymous> (/workspaces/jg_aitraining2/packages/frontend/src/theme/ThemeProvider.test.js:76:46)
          at Promise.then.completed (/workspaces/jg_aitraining2/node_modules/jest-circus/build/utils.js:391:28)
          at new Promise (<anonymous>)
          at callAsyncCircusFn (/workspaces/jg_aitraining2/node_modules/jest-circus/build/utils.js:316:10)
          at _callCircusTest (/workspaces/jg_aitraining2/node_modules/jest-circus/build/run.js:218:40)
          at _runTest (/workspaces/jg_aitraining2/node_modules/jest-circus/build/run.js:155:3)
          at _runTestsForDescribeBlock (/workspaces/jg_aitraining2/node_modules/jest-circus/build/run.js:66:9)
          at _runTestsForDescribeBlock (/workspaces/jg_aitraining2/node_modules/jest-circus/build/run.js:60:9)
          at run (/workspaces/jg_aitraining2/node_modules/jest-circus/build/run.js:25:3)
          at runAndTransformResultsToJestFormat (/workspaces/jg_aitraining2/node_modules/jest-circus/build/legacy-code-todo-rewrite/jestAdapterInit.js:170:21)
          at jestAdapter (/workspaces/jg_aitraining2/node_modules/jest-circus/build/legacy-code-todo-rewrite/jestAdapter.js:82:19)
          at runTestInternal (/workspaces/jg_aitraining2/node_modules/jest-runner/build/runTest.js:389:16)
          at runTest (/workspaces/jg_aitraining2/node_modules/jest-runner/build/runTest.js:475:34)

      74 |       return null;
      75 |     };
    > 76 |     expect(() => render(<BrokenConsumer />)).toThrow('useTheme must be used within a ThemeProvider');
         |                        ^
      77 |   });
      78 |
      79 |   test('sets theme from localStorage', () => {

      at VirtualConsole.<anonymous> (../../node_modules/jsdom/lib/jsdom/virtual-console.js:29:45)
      at reportException (../../node_modules/jsdom/lib/jsdom/living/helpers/runtime-script-errors.js:70:28)
      at innerInvokeEventListeners (../../node_modules/jsdom/lib/jsdom/living/events/EventTarget-impl.js:341:9)
      at invokeEventListeners (../../node_modules/jsdom/lib/jsdom/living/events/EventTarget-impl.js:274:3)
      at HTMLUnknownElementImpl._dispatch (../../node_modules/jsdom/lib/jsdom/living/events/EventTarget-impl.js:221:9)
      at HTMLUnknownElementImpl.dispatchEvent (../../node_modules/jsdom/lib/jsdom/living/events/EventTarget-impl.js:94:17)
      at HTMLUnknownElement.dispatchEvent (../../node_modules/jsdom/lib/jsdom/living/generated/EventTarget.js:231:34)
      at Object.invokeGuardedCallbackDev (../../node_modules/react-dom/cjs/react-dom.development.js:4213:16)
      at invokeGuardedCallback (../../node_modules/react-dom/cjs/react-dom.development.js:4277:31)
      at beginWork$1 (../../node_modules/react-dom/cjs/react-dom.development.js:27490:7)
      at performUnitOfWork (../../node_modules/react-dom/cjs/react-dom.development.js:26599:12)
      at workLoopSync (../../node_modules/react-dom/cjs/react-dom.development.js:26505:5)
      at renderRootSync (../../node_modules/react-dom/cjs/react-dom.development.js:26473:7)
      at recoverFromConcurrentError (../../node_modules/react-dom/cjs/react-dom.development.js:25889:20)
      at performConcurrentWorkOnRoot (../../node_modules/react-dom/cjs/react-dom.development.js:25789:22)
      at flushActQueue (../../node_modules/react/cjs/react.development.js:2667:24)
      at act (../../node_modules/react/cjs/react.development.js:2582:11)
      at ../../node_modules/@testing-library/react/dist/act-compat.js:47:25
      at renderRoot (../../node_modules/@testing-library/react/dist/pure.js:180:26)
      at render (../../node_modules/@testing-library/react/dist/pure.js:271:10)
      at src/theme/ThemeProvider.test.js:76:24
      at Object.<anonymous> (../../node_modules/expect/build/toThrowMatchers.js:83:11)
      at Object.toThrow (../../node_modules/expect/build/index.js:382:21)
      at Object.<anonymous> (src/theme/ThemeProvider.test.js:76:46)

    console.error
      The above error occurred in the <BrokenConsumer> component:
      
          at BrokenConsumer (/workspaces/jg_aitraining2/packages/frontend/src/theme/ThemeProvider.test.js:73:15)
      
      Consider adding an error boundary to your tree to customize error handling behavior.
      Visit https://reactjs.org/link/error-boundaries to learn more about error boundaries.

      74 |       return null;
      75 |     };
    > 76 |     expect(() => render(<BrokenConsumer />)).toThrow('useTheme must be used within a ThemeProvider');
         |                        ^
      77 |   });
      78 |
      79 |   test('sets theme from localStorage', () => {

      at logCapturedError (../../node_modules/react-dom/cjs/react-dom.development.js:18704:23)
      at update.callback (../../node_modules/react-dom/cjs/react-dom.development.js:18737:5)
      at callCallback (../../node_modules/react-dom/cjs/react-dom.development.js:15036:12)
      at commitUpdateQueue (../../node_modules/react-dom/cjs/react-dom.development.js:15057:9)
      at commitLayoutEffectOnFiber (../../node_modules/react-dom/cjs/react-dom.development.js:23430:13)
      at commitLayoutMountEffects_complete (../../node_modules/react-dom/cjs/react-dom.development.js:24727:9)
      at commitLayoutEffects_begin (../../node_modules/react-dom/cjs/react-dom.development.js:24713:7)
      at commitLayoutEffects (../../node_modules/react-dom/cjs/react-dom.development.js:24651:3)
      at commitRootImpl (../../node_modules/react-dom/cjs/react-dom.development.js:26862:5)
      at commitRoot (../../node_modules/react-dom/cjs/react-dom.development.js:26721:5)
      at finishConcurrentRender (../../node_modules/react-dom/cjs/react-dom.development.js:25931:9)
      at performConcurrentWorkOnRoot (../../node_modules/react-dom/cjs/react-dom.development.js:25848:7)
      at flushActQueue (../../node_modules/react/cjs/react.development.js:2667:24)
      at act (../../node_modules/react/cjs/react.development.js:2582:11)
      at ../../node_modules/@testing-library/react/dist/act-compat.js:47:25
      at renderRoot (../../node_modules/@testing-library/react/dist/pure.js:180:26)
      at render (../../node_modules/@testing-library/react/dist/pure.js:271:10)
      at src/theme/ThemeProvider.test.js:76:24
      at Object.<anonymous> (../../node_modules/expect/build/toThrowMatchers.js:83:11)
      at Object.toThrow (../../node_modules/expect/build/index.js:382:21)
      at Object.<anonymous> (src/theme/ThemeProvider.test.js:76:46)

 PASS  src/__tests__/SimpleApp.test.js
  ● Console

    console.error
      Warning: An update to AppContent inside a test was not wrapped in act(...).
      
      When testing, code that causes React state updates should be wrapped into act(...):
      
      act(() => {
        /* fire events that update state */
      });
      /* assert on the output */
      
      This ensures that you're testing the behavior the user would see in the browser. Learn more at https://reactjs.org/link/wrap-tests-with-act
          at AppContent (/workspaces/jg_aitraining2/packages/frontend/src/App.js:30:37)
          at ThemeProvider (/workspaces/jg_aitraining2/packages/frontend/src/__mocks__/@mui/material/styles.js:26:33)
          at ThemeProvider (/workspaces/jg_aitraining2/packages/frontend/src/theme/ThemeProvider.js:68:33)
          at App

      370 |         sx={{ position: 'fixed', bottom: 16, right: 16 }}
      371 |         onClick={() => {
    > 372 |           setEditingTask(null);
          |           ^
      373 |           setShowTaskForm(true);
      374 |         }}
      375 |       >

      at printWarning (../../node_modules/react-dom/cjs/react-dom.development.js:86:30)
      at error (../../node_modules/react-dom/cjs/react-dom.development.js:60:7)
      at warnIfUpdatesNotWrappedWithActDEV (../../node_modules/react-dom/cjs/react-dom.development.js:27628:9)
      at scheduleUpdateOnFiber (../../node_modules/react-dom/cjs/react-dom.development.js:25547:5)
      at setEditingTask (../../node_modules/react-dom/cjs/react-dom.development.js:16708:7)
      at onClick (src/App.js:372:11)
      at HTMLUnknownElement.callCallback (../../node_modules/react-dom/cjs/react-dom.development.js:4164:14)
      at HTMLUnknownElement.callTheUserObjectsOperation (../../node_modules/jsdom/lib/jsdom/living/generated/EventListener.js:26:30)
      at innerInvokeEventListeners (../../node_modules/jsdom/lib/jsdom/living/events/EventTarget-impl.js:338:25)
      at invokeEventListeners (../../node_modules/jsdom/lib/jsdom/living/events/EventTarget-impl.js:274:3)
      at HTMLUnknownElementImpl._dispatch (../../node_modules/jsdom/lib/jsdom/living/events/EventTarget-impl.js:221:9)
      at HTMLUnknownElementImpl.dispatchEvent (../../node_modules/jsdom/lib/jsdom/living/events/EventTarget-impl.js:94:17)
      at HTMLUnknownElement.dispatchEvent (../../node_modules/jsdom/lib/jsdom/living/generated/EventTarget.js:231:34)
      at Object.invokeGuardedCallbackDev (../../node_modules/react-dom/cjs/react-dom.development.js:4213:16)
      at invokeGuardedCallback (../../node_modules/react-dom/cjs/react-dom.development.js:4277:31)
      at invokeGuardedCallbackAndCatchFirstError (../../node_modules/react-dom/cjs/react-dom.development.js:4291:25)
      at executeDispatch (../../node_modules/react-dom/cjs/react-dom.development.js:9041:3)
      at processDispatchQueueItemsInOrder (../../node_modules/react-dom/cjs/react-dom.development.js:9073:7)
      at processDispatchQueue (../../node_modules/react-dom/cjs/react-dom.development.js:9086:5)
      at dispatchEventsForPlugins (../../node_modules/react-dom/cjs/react-dom.development.js:9097:3)
      at ../../node_modules/react-dom/cjs/react-dom.development.js:9288:12
      at batchedUpdates$1 (../../node_modules/react-dom/cjs/react-dom.development.js:26179:12)
      at batchedUpdates (../../node_modules/react-dom/cjs/react-dom.development.js:3991:12)
      at dispatchEventForPluginEventSystem (../../node_modules/react-dom/cjs/react-dom.development.js:9287:3)
      at dispatchEventWithEnableCapturePhaseSelectiveHydrationWithoutDiscreteEventReplay (../../node_modules/react-dom/cjs/react-dom.development.js:6465:5)
      at dispatchEvent (../../node_modules/react-dom/cjs/react-dom.development.js:6457:5)
      at dispatchDiscreteEvent (../../node_modules/react-dom/cjs/react-dom.development.js:6430:5)
      at HTMLDivElement.callTheUserObjectsOperation (../../node_modules/jsdom/lib/jsdom/living/generated/EventListener.js:26:30)
      at innerInvokeEventListeners (../../node_modules/jsdom/lib/jsdom/living/events/EventTarget-impl.js:338:25)
      at invokeEventListeners (../../node_modules/jsdom/lib/jsdom/living/events/EventTarget-impl.js:274:3)
      at HTMLButtonElementImpl._dispatch (../../node_modules/jsdom/lib/jsdom/living/events/EventTarget-impl.js:221:9)
      at HTMLButtonElementImpl.dispatchEvent (../../node_modules/jsdom/lib/jsdom/living/events/EventTarget-impl.js:94:17)
      at HTMLButtonElement.dispatchEvent (../../node_modules/jsdom/lib/jsdom/living/generated/EventTarget.js:231:34)
      at ../../node_modules/@testing-library/user-event/dist/cjs/event/dispatchEvent.js:45:43
      at Object.eventWrapper (../../node_modules/@testing-library/dom/dist/config.js:25:23)
      at Object.wrapEvent (../../node_modules/@testing-library/user-event/dist/cjs/event/wrapEvent.js:6:28)
      at Object.dispatchEvent (../../node_modules/@testing-library/user-event/dist/cjs/event/dispatchEvent.js:45:22)
      at Object.dispatchUIEvent (../../node_modules/@testing-library/user-event/dist/cjs/event/dispatchEvent.js:22:26)
      at Mouse.up (../../node_modules/@testing-library/user-event/dist/cjs/system/pointer/mouse.js:100:30)
      at PointerHost.release (../../node_modules/@testing-library/user-event/dist/cjs/system/pointer/index.js:87:24)
      at pointerAction (../../node_modules/@testing-library/user-event/dist/cjs/pointer/index.js:54:47)
      at Object.pointer (../../node_modules/@testing-library/user-event/dist/cjs/pointer/index.js:27:9)
      at Object.<anonymous> (src/__tests__/SimpleApp.test.js:65:5)

    console.error
      Warning: An update to AppContent inside a test was not wrapped in act(...).
      
      When testing, code that causes React state updates should be wrapped into act(...):
      
      act(() => {
        /* fire events that update state */
      });
      /* assert on the output */
      
      This ensures that you're testing the behavior the user would see in the browser. Learn more at https://reactjs.org/link/wrap-tests-with-act
          at AppContent (/workspaces/jg_aitraining2/packages/frontend/src/App.js:30:37)
          at ThemeProvider (/workspaces/jg_aitraining2/packages/frontend/src/__mocks__/@mui/material/styles.js:26:33)
          at ThemeProvider (/workspaces/jg_aitraining2/packages/frontend/src/theme/ThemeProvider.js:68:33)
          at App

      371 |         onClick={() => {
      372 |           setEditingTask(null);
    > 373 |           setShowTaskForm(true);
          |           ^
      374 |         }}
      375 |       >
      376 |         <AddIcon />

      at printWarning (../../node_modules/react-dom/cjs/react-dom.development.js:86:30)
      at error (../../node_modules/react-dom/cjs/react-dom.development.js:60:7)
      at warnIfUpdatesNotWrappedWithActDEV (../../node_modules/react-dom/cjs/react-dom.development.js:27628:9)
      at scheduleUpdateOnFiber (../../node_modules/react-dom/cjs/react-dom.development.js:25547:5)
      at setShowTaskForm (../../node_modules/react-dom/cjs/react-dom.development.js:16708:7)
      at onClick (src/App.js:373:11)
      at HTMLUnknownElement.callCallback (../../node_modules/react-dom/cjs/react-dom.development.js:4164:14)
      at HTMLUnknownElement.callTheUserObjectsOperation (../../node_modules/jsdom/lib/jsdom/living/generated/EventListener.js:26:30)
      at innerInvokeEventListeners (../../node_modules/jsdom/lib/jsdom/living/events/EventTarget-impl.js:338:25)
      at invokeEventListeners (../../node_modules/jsdom/lib/jsdom/living/events/EventTarget-impl.js:274:3)
      at HTMLUnknownElementImpl._dispatch (../../node_modules/jsdom/lib/jsdom/living/events/EventTarget-impl.js:221:9)
      at HTMLUnknownElementImpl.dispatchEvent (../../node_modules/jsdom/lib/jsdom/living/events/EventTarget-impl.js:94:17)
      at HTMLUnknownElement.dispatchEvent (../../node_modules/jsdom/lib/jsdom/living/generated/EventTarget.js:231:34)
      at Object.invokeGuardedCallbackDev (../../node_modules/react-dom/cjs/react-dom.development.js:4213:16)
      at invokeGuardedCallback (../../node_modules/react-dom/cjs/react-dom.development.js:4277:31)
      at invokeGuardedCallbackAndCatchFirstError (../../node_modules/react-dom/cjs/react-dom.development.js:4291:25)
      at executeDispatch (../../node_modules/react-dom/cjs/react-dom.development.js:9041:3)
      at processDispatchQueueItemsInOrder (../../node_modules/react-dom/cjs/react-dom.development.js:9073:7)
      at processDispatchQueue (../../node_modules/react-dom/cjs/react-dom.development.js:9086:5)
      at dispatchEventsForPlugins (../../node_modules/react-dom/cjs/react-dom.development.js:9097:3)
      at ../../node_modules/react-dom/cjs/react-dom.development.js:9288:12
      at batchedUpdates$1 (../../node_modules/react-dom/cjs/react-dom.development.js:26179:12)
      at batchedUpdates (../../node_modules/react-dom/cjs/react-dom.development.js:3991:12)
      at dispatchEventForPluginEventSystem (../../node_modules/react-dom/cjs/react-dom.development.js:9287:3)
      at dispatchEventWithEnableCapturePhaseSelectiveHydrationWithoutDiscreteEventReplay (../../node_modules/react-dom/cjs/react-dom.development.js:6465:5)
      at dispatchEvent (../../node_modules/react-dom/cjs/react-dom.development.js:6457:5)
      at dispatchDiscreteEvent (../../node_modules/react-dom/cjs/react-dom.development.js:6430:5)
      at HTMLDivElement.callTheUserObjectsOperation (../../node_modules/jsdom/lib/jsdom/living/generated/EventListener.js:26:30)
      at innerInvokeEventListeners (../../node_modules/jsdom/lib/jsdom/living/events/EventTarget-impl.js:338:25)
      at invokeEventListeners (../../node_modules/jsdom/lib/jsdom/living/events/EventTarget-impl.js:274:3)
      at HTMLButtonElementImpl._dispatch (../../node_modules/jsdom/lib/jsdom/living/events/EventTarget-impl.js:221:9)
      at HTMLButtonElementImpl.dispatchEvent (../../node_modules/jsdom/lib/jsdom/living/events/EventTarget-impl.js:94:17)
      at HTMLButtonElement.dispatchEvent (../../node_modules/jsdom/lib/jsdom/living/generated/EventTarget.js:231:34)
      at ../../node_modules/@testing-library/user-event/dist/cjs/event/dispatchEvent.js:45:43
      at Object.eventWrapper (../../node_modules/@testing-library/dom/dist/config.js:25:23)
      at Object.wrapEvent (../../node_modules/@testing-library/user-event/dist/cjs/event/wrapEvent.js:6:28)
      at Object.dispatchEvent (../../node_modules/@testing-library/user-event/dist/cjs/event/dispatchEvent.js:45:22)
      at Object.dispatchUIEvent (../../node_modules/@testing-library/user-event/dist/cjs/event/dispatchEvent.js:22:26)
      at Mouse.up (../../node_modules/@testing-library/user-event/dist/cjs/system/pointer/mouse.js:100:30)
      at PointerHost.release (../../node_modules/@testing-library/user-event/dist/cjs/system/pointer/index.js:87:24)
      at pointerAction (../../node_modules/@testing-library/user-event/dist/cjs/pointer/index.js:54:47)
      at Object.pointer (../../node_modules/@testing-library/user-event/dist/cjs/pointer/index.js:27:9)
      at Object.<anonymous> (src/__tests__/SimpleApp.test.js:65:5)

    console.error
      Warning: React does not recognize the `maxWidth` prop on a DOM element. If you intentionally want it to appear in the DOM as a custom attribute, spell it as lowercase `maxwidth` instead. If you accidentally passed it from a parent component, remove it from the DOM element.
          at div
          at Dialog (/workspaces/jg_aitraining2/packages/frontend/src/__mocks__/@mui/material.js:35:26)
          at TaskForm (/workspaces/jg_aitraining2/packages/frontend/src/TaskForm.js:14:21)
          at div
          at Container (/workspaces/jg_aitraining2/packages/frontend/src/__mocks__/@mui/material.js:5:29)
          at AppContent (/workspaces/jg_aitraining2/packages/frontend/src/App.js:30:37)
          at ThemeProvider (/workspaces/jg_aitraining2/packages/frontend/src/__mocks__/@mui/material/styles.js:26:33)
          at ThemeProvider (/workspaces/jg_aitraining2/packages/frontend/src/theme/ThemeProvider.js:68:33)
          at App

      at printWarning (../../node_modules/react-dom/cjs/react-dom.development.js:86:30)
      at error (../../node_modules/react-dom/cjs/react-dom.development.js:60:7)
      at validateProperty$1 (../../node_modules/react-dom/cjs/react-dom.development.js:3757:7)
      at warnUnknownProperties (../../node_modules/react-dom/cjs/react-dom.development.js:3803:21)
      at validateProperties$2 (../../node_modules/react-dom/cjs/react-dom.development.js:3827:3)
      at validatePropertiesInDevelopment (../../node_modules/react-dom/cjs/react-dom.development.js:9541:5)
      at setInitialProperties (../../node_modules/react-dom/cjs/react-dom.development.js:9830:5)
      at finalizeInitialChildren (../../node_modules/react-dom/cjs/react-dom.development.js:10950:3)
      at completeWork (../../node_modules/react-dom/cjs/react-dom.development.js:22232:17)
      at completeUnitOfWork (../../node_modules/react-dom/cjs/react-dom.development.js:26632:16)
      at performUnitOfWork (../../node_modules/react-dom/cjs/react-dom.development.js:26607:5)
      at workLoopSync (../../node_modules/react-dom/cjs/react-dom.development.js:26505:5)
      at renderRootSync (../../node_modules/react-dom/cjs/react-dom.development.js:26473:7)
      at performSyncWorkOnRoot (../../node_modules/react-dom/cjs/react-dom.development.js:26124:20)
      at flushSyncCallbacks (../../node_modules/react-dom/cjs/react-dom.development.js:12042:22)
      at ../../node_modules/react-dom/cjs/react-dom.development.js:25690:13
      at ../../node_modules/jsdom/lib/jsdom/browser/Window.js:550:9

    console.error
      Warning: React does not recognize the `fullWidth` prop on a DOM element. If you intentionally want it to appear in the DOM as a custom attribute, spell it as lowercase `fullwidth` instead. If you accidentally passed it from a parent component, remove it from the DOM element.
          at div
          at Dialog (/workspaces/jg_aitraining2/packages/frontend/src/__mocks__/@mui/material.js:35:26)
          at TaskForm (/workspaces/jg_aitraining2/packages/frontend/src/TaskForm.js:14:21)
          at div
          at Container (/workspaces/jg_aitraining2/packages/frontend/src/__mocks__/@mui/material.js:5:29)
          at AppContent (/workspaces/jg_aitraining2/packages/frontend/src/App.js:30:37)
          at ThemeProvider (/workspaces/jg_aitraining2/packages/frontend/src/__mocks__/@mui/material/styles.js:26:33)
          at ThemeProvider (/workspaces/jg_aitraining2/packages/frontend/src/theme/ThemeProvider.js:68:33)
          at App

      at printWarning (../../node_modules/react-dom/cjs/react-dom.development.js:86:30)
      at error (../../node_modules/react-dom/cjs/react-dom.development.js:60:7)
      at validateProperty$1 (../../node_modules/react-dom/cjs/react-dom.development.js:3757:7)
      at warnUnknownProperties (../../node_modules/react-dom/cjs/react-dom.development.js:3803:21)
      at validateProperties$2 (../../node_modules/react-dom/cjs/react-dom.development.js:3827:3)
      at validatePropertiesInDevelopment (../../node_modules/react-dom/cjs/react-dom.development.js:9541:5)
      at setInitialProperties (../../node_modules/react-dom/cjs/react-dom.development.js:9830:5)
      at finalizeInitialChildren (../../node_modules/react-dom/cjs/react-dom.development.js:10950:3)
      at completeWork (../../node_modules/react-dom/cjs/react-dom.development.js:22232:17)
      at completeUnitOfWork (../../node_modules/react-dom/cjs/react-dom.development.js:26632:16)
      at performUnitOfWork (../../node_modules/react-dom/cjs/react-dom.development.js:26607:5)
      at workLoopSync (../../node_modules/react-dom/cjs/react-dom.development.js:26505:5)
      at renderRootSync (../../node_modules/react-dom/cjs/react-dom.development.js:26473:7)
      at performSyncWorkOnRoot (../../node_modules/react-dom/cjs/react-dom.development.js:26124:20)
      at flushSyncCallbacks (../../node_modules/react-dom/cjs/react-dom.development.js:12042:22)
      at ../../node_modules/react-dom/cjs/react-dom.development.js:25690:13
      at ../../node_modules/jsdom/lib/jsdom/browser/Window.js:550:9

 PASS  src/__tests__/hooks/useTaskManager.test.js
 PASS  src/__tests__/test-utils-fixed.js
 PASS  src/__tests__/utils/taskUtils.test.js
 PASS  src/__tests__/utils/appUtils.test.js
 PASS  src/__tests__/utils/basicUtils.test.js
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
      96 |     await userEvent.click(addButton);
      97 |     await userEvent.type(screen.getByLabelText(/task title/i), 'New Task');
      98 |     await userEvent.type(screen.getByLabelText(/description/i), 'New Desc');

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

--------------------|---------|----------|---------|---------|--------------------------
File                | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s        
--------------------|---------|----------|---------|---------|--------------------------
All files           |    83.8 |    79.43 |    82.6 |   85.61 |                          
 src                |   78.31 |    84.61 |   72.97 |   81.37 |                          
  App.js            |   73.64 |    80.23 |      70 |   77.27 | ...8,328-339,383-384,388 
  TaskForm.js       |   94.59 |    96.77 |   85.71 |   94.28 | 24,127                   
 src/hooks          |     100 |      100 |     100 |     100 |                          
  useTaskManager.js |     100 |      100 |     100 |     100 |                          
 src/theme          |   82.27 |    58.06 |   81.81 |   83.33 |                          
  ThemeProvider.js  |   80.55 |    58.06 |   81.81 |   81.69 | ...1-126,137,151,163,192 
  theme.js          |     100 |      100 |     100 |     100 |                          
 src/utils          |   96.77 |      100 |     100 |   96.66 |                          
  taskUtils.js      |   96.77 |      100 |     100 |   96.66 | 45                       
--------------------|---------|----------|---------|---------|--------------------------

=============================== Coverage summary ===============================
Statements   : 83.8% ( 264/315 )
Branches     : 79.43% ( 170/214 )
Functions    : 82.6% ( 57/69 )
Lines        : 85.61% ( 244/285 )
================================================================================

Summary of all failing tests
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
      96 |     await userEvent.click(addButton);
      97 |     await userEvent.type(screen.getByLabelText(/task title/i), 'New Task');
      98 |     await userEvent.type(screen.getByLabelText(/description/i), 'New Desc');

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


Test Suites: 1 failed, 24 skipped, 15 passed, 16 of 40 total
Tests:       32 skipped, 121 passed, 153 total
Snapshots:   0 total
Time:        45.534 s
Ran all test suites.
npm error Lifecycle script `test` failed with error:
npm error code 1
npm error path /workspaces/jg_aitraining2/packages/frontend
npm error workspace frontend@0.1.0
npm error location /workspaces/jg_aitraining2/packages/frontend
npm error command failed
npm error command sh -c react-scripts test --coverage --watchAll=false --coverage --watchAll=false
@jenny-ghaccount ➜ /workspaces/jg_aitraining2/packages/frontend (feature/context) $ 