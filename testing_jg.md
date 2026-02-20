    </html>

      146 |     // Modal should close
      147 |     await waitFor(() => {
    > 148 |       expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
          |                                                ^
      149 |     });
      150 |   });
      151 | });

      at src/__tests__/integration/ComponentIntegration.test.js:148:48
      at runWithExpensiveErrorDiagnosticsDisabled (../../node_modules/@testing-library/react/node_modules/@testing-library/dom/dist/config.js:47:12)
      at checkCallback (../../node_modules/@testing-library/react/node_modules/@testing-library/dom/dist/wait-for.js:124:77)
      at checkRealTimersCallback (../../node_modules/@testing-library/react/node_modules/@testing-library/dom/dist/wait-for.js:118:16)
      at Timeout.task [as _onTimeout] (../../node_modules/jsdom/lib/jsdom/browser/Window.js:516:19)

 PASS  src/__tests__/test-utils.js
 PASS  src/__tests__/integration/ComponentIntegration.simple.test.js
  ● Console

    console.error
      Warning: React does not recognize the `maxWidth` prop on a DOM element. If you intentionally want it to appear in the DOM as a custom attribute, spell it as lowercase `maxwidth` instead. If you accidentally passed it from a parent component, remove it from the DOM element.
          at div
          at Container (/workspaces/jg_aitraining2/packages/frontend/src/__mocks__/@mui/material.js:5:29)
          at div
          at Container (/workspaces/jg_aitraining2/packages/frontend/src/__mocks__/@mui/material.js:5:29)
          at AppContent (/workspaces/jg_aitraining2/packages/frontend/src/App.js:30:37)
          at ThemeProvider (/workspaces/jg_aitraining2/packages/frontend/src/__mocks__/@mui/material/styles.js:26:33)
          at ThemeProvider (/workspaces/jg_aitraining2/packages/frontend/src/theme/ThemeProvider.js:68:33)
          at App

      19 | describe('Component Integration Tests (Simple)', () => {
      20 |   test('should render App component without crashing', async () => {
    > 21 |     render(<App />);
         |           ^
      22 |     
      23 |     // Wait for the app to load
      24 |     await waitFor(() => {

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
      at performConcurrentWorkOnRoot (../../node_modules/react-dom/cjs/react-dom.development.js:25777:74)
      at flushActQueue (../../node_modules/react/cjs/react.development.js:2667:24)
      at act (../../node_modules/react/cjs/react.development.js:2582:11)
      at ../../node_modules/@testing-library/react/dist/act-compat.js:47:25
      at renderRoot (../../node_modules/@testing-library/react/dist/pure.js:180:26)
      at render (../../node_modules/@testing-library/react/dist/pure.js:271:10)
      at Object.<anonymous> (src/__tests__/integration/ComponentIntegration.simple.test.js:21:11)

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

      58 |       
      59 |       const tasks = await response.json();
    > 60 |       setTasks(tasks || []);
         |       ^
      61 |       setError(null);
      62 |     } catch (err) {
      63 |       setError('Failed to fetch tasks: ' + err.message);

      at printWarning (../../node_modules/react-dom/cjs/react-dom.development.js:86:30)
      at error (../../node_modules/react-dom/cjs/react-dom.development.js:60:7)
      at warnIfUpdatesNotWrappedWithActDEV (../../node_modules/react-dom/cjs/react-dom.development.js:27628:9)
      at scheduleUpdateOnFiber (../../node_modules/react-dom/cjs/react-dom.development.js:25547:5)
      at setTasks (../../node_modules/react-dom/cjs/react-dom.development.js:16708:7)
      at fetchTasks (src/App.js:60:7)

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

      59 |       const tasks = await response.json();
      60 |       setTasks(tasks || []);
    > 61 |       setError(null);
         |       ^
      62 |     } catch (err) {
      63 |       setError('Failed to fetch tasks: ' + err.message);
      64 |       console.error('Error fetching tasks:', err);

      at printWarning (../../node_modules/react-dom/cjs/react-dom.development.js:86:30)
      at error (../../node_modules/react-dom/cjs/react-dom.development.js:60:7)
      at warnIfUpdatesNotWrappedWithActDEV (../../node_modules/react-dom/cjs/react-dom.development.js:27628:9)
      at scheduleUpdateOnFiber (../../node_modules/react-dom/cjs/react-dom.development.js:25547:5)
      at setError (../../node_modules/react-dom/cjs/react-dom.development.js:16708:7)
      at fetchTasks (src/App.js:61:7)

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

      66 |       setTasks([]);
      67 |     } finally {
    > 68 |       setLoading(false);
         |       ^
      69 |     }
      70 |   };
      71 |

      at printWarning (../../node_modules/react-dom/cjs/react-dom.development.js:86:30)
      at error (../../node_modules/react-dom/cjs/react-dom.development.js:60:7)
      at warnIfUpdatesNotWrappedWithActDEV (../../node_modules/react-dom/cjs/react-dom.development.js:27628:9)
      at scheduleUpdateOnFiber (../../node_modules/react-dom/cjs/react-dom.development.js:25547:5)
      at setLoading (../../node_modules/react-dom/cjs/react-dom.development.js:16708:7)
      at fetchTasks (src/App.js:68:7)

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
      at Object.<anonymous> (src/__tests__/integration/ComponentIntegration.simple.test.js:43:7)

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
      at Object.<anonymous> (src/__tests__/integration/ComponentIntegration.simple.test.js:43:7)

    console.error
      Warning: React does not recognize the `fullWidth` prop on a DOM element. If you intentionally want it to appear in the DOM as a custom attribute, spell it as lowercase `fullwidth` instead. If you accidentally passed it from a parent component, remove it from the DOM element.
          at input
          at div
          at TextField (/workspaces/jg_aitraining2/packages/frontend/src/__mocks__/@mui/material.js:23:29)
          at div
          at Box (/workspaces/jg_aitraining2/packages/frontend/src/__mocks__/@mui/material.js:9:23)
          at div
          at DialogContent (/workspaces/jg_aitraining2/packages/frontend/src/__mocks__/@mui/material.js:36:33)
          at div
          at Dialog (/workspaces/jg_aitraining2/packages/frontend/src/__mocks__/@mui/material.js:32:26)
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
      Warning: React does not recognize the `inputProps` prop on a DOM element. If you intentionally want it to appear in the DOM as a custom attribute, spell it as lowercase `inputprops` instead. If you accidentally passed it from a parent component, remove it from the DOM element.
          at input
          at div
          at TextField (/workspaces/jg_aitraining2/packages/frontend/src/__mocks__/@mui/material.js:23:29)
          at div
          at Box (/workspaces/jg_aitraining2/packages/frontend/src/__mocks__/@mui/material.js:9:23)
          at div
          at DialogContent (/workspaces/jg_aitraining2/packages/frontend/src/__mocks__/@mui/material.js:36:33)
          at div
          at Dialog (/workspaces/jg_aitraining2/packages/frontend/src/__mocks__/@mui/material.js:32:26)
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
      Warning: Received `true` for a non-boolean attribute `multiline`.
      
      If you want to write it to the DOM, pass a string instead: multiline="true" or multiline={value.toString()}.
          at input
          at div
          at TextField (/workspaces/jg_aitraining2/packages/frontend/src/__mocks__/@mui/material.js:23:29)
          at div
          at Box (/workspaces/jg_aitraining2/packages/frontend/src/__mocks__/@mui/material.js:9:23)
          at div
          at DialogContent (/workspaces/jg_aitraining2/packages/frontend/src/__mocks__/@mui/material.js:36:33)
          at div
          at Dialog (/workspaces/jg_aitraining2/packages/frontend/src/__mocks__/@mui/material.js:32:26)
          at TaskForm (/workspaces/jg_aitraining2/packages/frontend/src/TaskForm.js:14:21)
          at div
          at Container (/workspaces/jg_aitraining2/packages/frontend/src/__mocks__/@mui/material.js:5:29)
          at AppContent (/workspaces/jg_aitraining2/packages/frontend/src/App.js:30:37)
          at ThemeProvider (/workspaces/jg_aitraining2/packages/frontend/src/__mocks__/@mui/material/styles.js:26:33)
          at ThemeProvider (/workspaces/jg_aitraining2/packages/frontend/src/theme/ThemeProvider.js:68:33)
          at App

      at printWarning (../../node_modules/react-dom/cjs/react-dom.development.js:86:30)
      at error (../../node_modules/react-dom/cjs/react-dom.development.js:60:7)
      at validateProperty$1 (../../node_modules/react-dom/cjs/react-dom.development.js:3765:9)
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
      Warning: React does not recognize the `InputLabelProps` prop on a DOM element. If you intentionally want it to appear in the DOM as a custom attribute, spell it as lowercase `inputlabelprops` instead. If you accidentally passed it from a parent component, remove it from the DOM element.
          at input
          at div
          at TextField (/workspaces/jg_aitraining2/packages/frontend/src/__mocks__/@mui/material.js:23:29)
          at div
          at Box (/workspaces/jg_aitraining2/packages/frontend/src/__mocks__/@mui/material.js:9:23)
          at div
          at DialogContent (/workspaces/jg_aitraining2/packages/frontend/src/__mocks__/@mui/material.js:36:33)
          at div
          at Dialog (/workspaces/jg_aitraining2/packages/frontend/src/__mocks__/@mui/material.js:32:26)
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

 PASS  src/__tests__/integration/ComponentIntegration.simple.fixed.test.js
  ● Console

    console.error
      Warning: React does not recognize the `maxWidth` prop on a DOM element. If you intentionally want it to appear in the DOM as a custom attribute, spell it as lowercase `maxwidth` instead. If you accidentally passed it from a parent component, remove it from the DOM element.
          at div
          at Container (/workspaces/jg_aitraining2/packages/frontend/src/__mocks__/@mui/material.js:5:29)
          at div
          at Container (/workspaces/jg_aitraining2/packages/frontend/src/__mocks__/@mui/material.js:5:29)
          at AppContent (/workspaces/jg_aitraining2/packages/frontend/src/App.js:30:37)
          at ThemeProvider (/workspaces/jg_aitraining2/packages/frontend/src/__mocks__/@mui/material/styles.js:26:33)
          at ThemeProvider (/workspaces/jg_aitraining2/packages/frontend/src/theme/ThemeProvider.js:68:33)
          at App

      23 | describe('Component Integration Tests (Fixed)', () => {
      24 |   test('should render App component without crashing', async () => {
    > 25 |     render(<App />);
         |           ^
      26 |     
      27 |     // Wait for the app to load
      28 |     await waitFor(() => {

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
      at performConcurrentWorkOnRoot (../../node_modules/react-dom/cjs/react-dom.development.js:25777:74)
      at flushActQueue (../../node_modules/react/cjs/react.development.js:2667:24)
      at act (../../node_modules/react/cjs/react.development.js:2582:11)
      at ../../node_modules/@testing-library/react/dist/act-compat.js:47:25
      at renderRoot (../../node_modules/@testing-library/react/dist/pure.js:180:26)
      at render (../../node_modules/@testing-library/react/dist/pure.js:271:10)
      at Object.<anonymous> (src/__tests__/integration/ComponentIntegration.simple.fixed.test.js:25:11)

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
      at Object.<anonymous> (src/__tests__/integration/ComponentIntegration.simple.fixed.test.js:47:7)

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
      at Object.<anonymous> (src/__tests__/integration/ComponentIntegration.simple.fixed.test.js:47:7)

    console.error
      Warning: React does not recognize the `fullWidth` prop on a DOM element. If you intentionally want it to appear in the DOM as a custom attribute, spell it as lowercase `fullwidth` instead. If you accidentally passed it from a parent component, remove it from the DOM element.
          at input
          at div
          at TextField (/workspaces/jg_aitraining2/packages/frontend/src/__mocks__/@mui/material.js:23:29)
          at div
          at Box (/workspaces/jg_aitraining2/packages/frontend/src/__mocks__/@mui/material.js:9:23)
          at div
          at DialogContent (/workspaces/jg_aitraining2/packages/frontend/src/__mocks__/@mui/material.js:36:33)
          at div
          at Dialog (/workspaces/jg_aitraining2/packages/frontend/src/__mocks__/@mui/material.js:32:26)
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
      Warning: React does not recognize the `inputProps` prop on a DOM element. If you intentionally want it to appear in the DOM as a custom attribute, spell it as lowercase `inputprops` instead. If you accidentally passed it from a parent component, remove it from the DOM element.
          at input
          at div
          at TextField (/workspaces/jg_aitraining2/packages/frontend/src/__mocks__/@mui/material.js:23:29)
          at div
          at Box (/workspaces/jg_aitraining2/packages/frontend/src/__mocks__/@mui/material.js:9:23)
          at div
          at DialogContent (/workspaces/jg_aitraining2/packages/frontend/src/__mocks__/@mui/material.js:36:33)
          at div
          at Dialog (/workspaces/jg_aitraining2/packages/frontend/src/__mocks__/@mui/material.js:32:26)
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
      Warning: Received `true` for a non-boolean attribute `multiline`.
      
      If you want to write it to the DOM, pass a string instead: multiline="true" or multiline={value.toString()}.
          at input
          at div
          at TextField (/workspaces/jg_aitraining2/packages/frontend/src/__mocks__/@mui/material.js:23:29)
          at div
          at Box (/workspaces/jg_aitraining2/packages/frontend/src/__mocks__/@mui/material.js:9:23)
          at div
          at DialogContent (/workspaces/jg_aitraining2/packages/frontend/src/__mocks__/@mui/material.js:36:33)
          at div
          at Dialog (/workspaces/jg_aitraining2/packages/frontend/src/__mocks__/@mui/material.js:32:26)
          at TaskForm (/workspaces/jg_aitraining2/packages/frontend/src/TaskForm.js:14:21)
          at div
          at Container (/workspaces/jg_aitraining2/packages/frontend/src/__mocks__/@mui/material.js:5:29)
          at AppContent (/workspaces/jg_aitraining2/packages/frontend/src/App.js:30:37)
          at ThemeProvider (/workspaces/jg_aitraining2/packages/frontend/src/__mocks__/@mui/material/styles.js:26:33)
          at ThemeProvider (/workspaces/jg_aitraining2/packages/frontend/src/theme/ThemeProvider.js:68:33)
          at App

      at printWarning (../../node_modules/react-dom/cjs/react-dom.development.js:86:30)
      at error (../../node_modules/react-dom/cjs/react-dom.development.js:60:7)
      at validateProperty$1 (../../node_modules/react-dom/cjs/react-dom.development.js:3765:9)
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
      Warning: React does not recognize the `InputLabelProps` prop on a DOM element. If you intentionally want it to appear in the DOM as a custom attribute, spell it as lowercase `inputlabelprops` instead. If you accidentally passed it from a parent component, remove it from the DOM element.
          at input
          at div
          at TextField (/workspaces/jg_aitraining2/packages/frontend/src/__mocks__/@mui/material.js:23:29)
          at div
          at Box (/workspaces/jg_aitraining2/packages/frontend/src/__mocks__/@mui/material.js:9:23)
          at div
          at DialogContent (/workspaces/jg_aitraining2/packages/frontend/src/__mocks__/@mui/material.js:36:33)
          at div
          at Dialog (/workspaces/jg_aitraining2/packages/frontend/src/__mocks__/@mui/material.js:32:26)
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

 PASS  src/__tests__/test-utils-clean.js
 PASS  src/__tests__/testHelpers.js
 PASS  src/__tests__/utils/taskUtils.test.js
 PASS  src/__tests__/hooks/useTaskManager.test.js
 PASS  src/__tests__/test-utils-fixed.js
 PASS  src/__tests__/utils/appUtils.test.js
 PASS  src/__tests__/utils/basicUtils.test.js
--------------------|---------|----------|---------|---------|------------------------------------------------------------------------------------------------------
File                | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s                                                                                    
--------------------|---------|----------|---------|---------|------------------------------------------------------------------------------------------------------
All files           |   56.19 |    44.39 |   50.72 |   59.29 |                                                                                                      
 src                |   48.19 |    42.73 |   45.94 |   52.41 |                                                                                                      
  App.js            |   41.86 |     37.2 |   43.33 |   46.36 | 52,56,63-66,86,94,99-112,117-127,132-144,153-157,164-169,177-183,188-198,213,250,293-339,383-384,388 
  TaskForm.js       |   70.27 |    58.06 |   57.14 |   71.42 | 24,26,30,58-62,112-127                                                                               
 src/hooks          |   66.66 |    58.33 |   52.94 |   71.87 |                                                                                                      
  useTaskManager.js |   66.66 |    58.33 |   52.94 |   71.87 | 17-18,51-52,57,61-67                                                                                 
 src/theme          |   51.89 |    24.19 |   45.45 |   52.56 |                                                                                                      
  ThemeProvider.js  |   47.22 |    24.19 |   45.45 |   47.88 | 16,73,80,88,99,109,119-151,163,171-173,178-181,185-194                                               
  theme.js          |     100 |      100 |     100 |     100 |                                                                                                      
 src/utils          |   96.77 |      100 |     100 |   96.66 |                                                                                                      
  taskUtils.js      |   96.77 |      100 |     100 |   96.66 | 45                                                                                                   
--------------------|---------|----------|---------|---------|------------------------------------------------------------------------------------------------------

=============================== Coverage summary ===============================
Statements   : 56.19% ( 177/315 )
Branches     : 44.39% ( 95/214 )
Functions    : 50.72% ( 35/69 )
Lines        : 59.29% ( 169/285 )
================================================================================
Jest: "global" coverage threshold for statements (80%) not met: 56.19%
Jest: "global" coverage threshold for branches (80%) not met: 44.39%
Jest: "global" coverage threshold for lines (80%) not met: 59.29%
Jest: "global" coverage threshold for functions (80%) not met: 50.72%

Summary of all failing tests
 FAIL  src/__tests__/integration/ComponentIntegration.test.js
  ● Component Integration Tests › should handle Enter key form submission

    expect(element).not.toBeInTheDocument()

    expected document not to contain element, found <div aria-labelledby="task-form-title" maxwidth="sm" role="dialog"><h2 id="task-form-title">Add New Task<button aria-label="Close dialog" sx="[object Object]"><span>✗</span></button></h2><div><div component="form" sx="[object Object]"><div><label for="task-title">Task Title</label><input id="task-title" inputprops="[object Object]" margin="normal" name="title" placeholder="Enter task title" required="" value="Task via Enter" /></div><div><label for="task-description">Description</label><input id="task-description" inputprops="[object Object]" margin="normal" name="description" placeholder="Enter task description (optional)" rows="3" value="" /></div><div><label for="task-due-date">Due Date</label><input id="task-due-date" inputlabelprops="[object Object]" inputprops="[object Object]" margin="normal" name="dueDate" type="date" value="" /></div></div></div><div><button color="secondary">Cancel</button><button color="primary" variant="contained">Add Task</button></div></div> instead

    Ignored nodes: comments, script, style
    <html
      data-theme="standard"
    >
      <head />
      <body>
        <div>
          <div
            maxwidth="lg"
          >
            <div
              position="static"
              role="banner"
              sx="[object Object]"
            >
              <div>
                <h1
                  sx="[object Object]"
                  variant="h6"
                >
                  Todo App
                </h1>
                <button
                  aria-expanded="false"
                  aria-label="Open settings menu"
                  color="inherit"
                  edge="end"
                >
                  <span>
                    ⚙
                  </span>
                </button>
              </div>
            </div>
            <div
              maxwidth="md"
              role="main"
              sx="[object Object]"
            >
              <div>
                <div
                  sx="[object Object]"
                >
                  <div
                    sx="[object Object]"
                    variant="h4"
                  >
                    Your Tasks (
                    0
                    )
                  </div>
                  <div
                    sx="[object Object]"
                  >
                    <button
                      aria-pressed="true"
                      variant="contained"
                    >
                      All
                    </button>
                    <button
                      aria-pressed="false"
                      variant="outlined"
                    >
                      Active
                    </button>
                    <button
                      aria-pressed="false"
                      variant="outlined"
                    >
                      Completed
                    </button>
                  </div>
                </div>
                <div
                  sx="[object Object]"
                >
                  <div
                    sx="[object Object]"
                    variant="h5"
                  >
                    No tasks found
                  </div>
                  <div
                    color="text.secondary"
                    variant="body1"
                  >
                    Click the + button to add your first task!
                  </div>
                </div>
              </div>
            </div>
            <button
              aria-label="Add new task"
              color="primary"
              sx="[object Object]"
            >
              <span>
                +
              </span>
            </button>
            <div
              aria-labelledby="task-form-title"
              maxwidth="sm"
              role="dialog"
            >
              <h2
                id="task-form-title"
              >
                Add New Task
                <button
                  aria-label="Close dialog"
                  sx="[object Object]"
                >
                  <span>
                    ✗
                  </span>
                </button>
              </h2>
              <div>
                <div
                  component="form"
                  sx="[object Object]"
                >
                  <div>
                    <label
                      for="task-title"
                    >
                      Task Title
                    </label>
                    <input
                      id="task-title"
                      inputprops="[object Object]"
                      margin="normal"
                      name="title"
                      placeholder="Enter task title"
                      required=""
                      value="Task via Enter"
                    />
                  </div>
                  <div>
                    <label
                      for="task-description"
                    >
                      Description
                    </label>
                    <input
                      id="task-description"
                      inputprops="[object Object]"
                      margin="normal"
                      name="description"
                      placeholder="Enter task description (optional)"
                      rows="3"
                      value=""
                    />
                  </div>
                  <div>
                    <label
                      for="task-due-date"
                    >
                      Due Date
                    </label>
                    <input
                      id="task-due-date"
                      inputlabelprops="[object Object]"
                      inputprops="[object Object]"
                      margin="normal"
                      name="dueDate"
                      type="date"
                      value=""
                    />
                  </div>
                </div>
              </div>
              <div>
                <button
                  color="secondary"
                >
                  Cancel
                </button>
                <button
                  color="primary"
                  variant="contained"
                >
                  Add Task
                </button>
              </div>
            </div>
          </div>
        </div>
      </body>
    </html>

      146 |     // Modal should close
      147 |     await waitFor(() => {
    > 148 |       expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
          |                                                ^
      149 |     });
      150 |   });
      151 | });

      at src/__tests__/integration/ComponentIntegration.test.js:148:48
      at runWithExpensiveErrorDiagnosticsDisabled (../../node_modules/@testing-library/react/node_modules/@testing-library/dom/dist/config.js:47:12)
      at checkCallback (../../node_modules/@testing-library/react/node_modules/@testing-library/dom/dist/wait-for.js:124:77)
      at checkRealTimersCallback (../../node_modules/@testing-library/react/node_modules/@testing-library/dom/dist/wait-for.js:118:16)
      at Timeout.task [as _onTimeout] (../../node_modules/jsdom/lib/jsdom/browser/Window.js:516:19)


Test Suites: 1 failed, 27 skipped, 10 passed, 11 of 38 total
Tests:       1 failed, 71 skipped, 60 passed, 132 total
Snapshots:   0 total
Time:        7.535 s, estimated 15 s
Ran all test suites.
npm error Lifecycle script `test` failed with error:
npm error code 1
npm error path /workspaces/jg_aitraining2/packages/frontend
npm error workspace frontend@0.1.0
npm error location /workspaces/jg_aitraining2/packages/frontend
npm error command failed
npm error command sh -c react-scripts test --coverage --watchAll=false
@jenny-ghaccount ➜ /workspaces/jg_aitraining2/packages/frontend (feature/context) $ 