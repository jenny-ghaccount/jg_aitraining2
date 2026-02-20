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
      at Object.<anonymous> (src/__tests__/integration/ComponentIntegration.test.js:148:5)

    console.error
      Warning: An update to TaskForm inside a test was not wrapped in act(...).
      
      When testing, code that causes React state updates should be wrapped into act(...):
      
      act(() => {
        /* fire events that update state */
      });
      /* assert on the output */
      
      This ensures that you're testing the behavior the user would see in the browser. Learn more at https://reactjs.org/link/wrap-tests-with-act
          at TaskForm (/workspaces/jg_aitraining2/packages/frontend/src/TaskForm.js:14:21)
          at div
          at Container (/workspaces/jg_aitraining2/packages/frontend/src/__mocks__/@mui/material.js:5:29)
          at AppContent (/workspaces/jg_aitraining2/packages/frontend/src/App.js:30:37)
          at ThemeProvider (/workspaces/jg_aitraining2/packages/frontend/src/__mocks__/@mui/material/styles.js:26:33)
          at ThemeProvider (/workspaces/jg_aitraining2/packages/frontend/src/theme/ThemeProvider.js:68:33)
          at App

      52 |     setDescription('');
      53 |     setDueDate('');
    > 54 |     setErrors({});
         |     ^
      55 |   };
      56 |
      57 |   const handleClose = () => {

      at printWarning (../../node_modules/react-dom/cjs/react-dom.development.js:86:30)
      at error (../../node_modules/react-dom/cjs/react-dom.development.js:60:7)
      at warnIfUpdatesNotWrappedWithActDEV (../../node_modules/react-dom/cjs/react-dom.development.js:27628:9)
      at scheduleUpdateOnFiber (../../node_modules/react-dom/cjs/react-dom.development.js:25547:5)
      at setErrors (../../node_modules/react-dom/cjs/react-dom.development.js:16708:7)
      at handleSubmit (src/TaskForm.js:54:5)
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
      at Object.<anonymous> (src/__tests__/integration/ComponentIntegration.test.js:148:5)

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

      88 |
      89 |       const newTask = await response.json();
    > 90 |       setTasks(prevTasks => [...prevTasks, newTask]);
         |       ^
      91 |       setShowTaskForm(false);
      92 |       setError(null);
      93 |     } catch (err) {

      at printWarning (../../node_modules/react-dom/cjs/react-dom.development.js:86:30)
      at error (../../node_modules/react-dom/cjs/react-dom.development.js:60:7)
      at warnIfUpdatesNotWrappedWithActDEV (../../node_modules/react-dom/cjs/react-dom.development.js:27628:9)
      at scheduleUpdateOnFiber (../../node_modules/react-dom/cjs/react-dom.development.js:25547:5)
      at setTasks (../../node_modules/react-dom/cjs/react-dom.development.js:16708:7)
      at addTask (src/App.js:90:7)

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

      89 |       const newTask = await response.json();
      90 |       setTasks(prevTasks => [...prevTasks, newTask]);
    > 91 |       setShowTaskForm(false);
         |       ^
      92 |       setError(null);
      93 |     } catch (err) {
      94 |       setError('Error adding task: ' + err.message);

      at printWarning (../../node_modules/react-dom/cjs/react-dom.development.js:86:30)
      at error (../../node_modules/react-dom/cjs/react-dom.development.js:60:7)
      at warnIfUpdatesNotWrappedWithActDEV (../../node_modules/react-dom/cjs/react-dom.development.js:27628:9)
      at scheduleUpdateOnFiber (../../node_modules/react-dom/cjs/react-dom.development.js:25547:5)
      at setShowTaskForm (../../node_modules/react-dom/cjs/react-dom.development.js:16708:7)
      at addTask (src/App.js:91:7)

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

      90 |       setTasks(prevTasks => [...prevTasks, newTask]);
      91 |       setShowTaskForm(false);
    > 92 |       setError(null);
         |       ^
      93 |     } catch (err) {
      94 |       setError('Error adding task: ' + err.message);
      95 |     }

      at printWarning (../../node_modules/react-dom/cjs/react-dom.development.js:86:30)
      at error (../../node_modules/react-dom/cjs/react-dom.development.js:60:7)
      at warnIfUpdatesNotWrappedWithActDEV (../../node_modules/react-dom/cjs/react-dom.development.js:27628:9)
      at scheduleUpdateOnFiber (../../node_modules/react-dom/cjs/react-dom.development.js:25547:5)
      at setError (../../node_modules/react-dom/cjs/react-dom.development.js:16708:7)
      at addTask (src/App.js:92:7)

 PASS  src/__tests__/AppIntegration.test.js
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

      248 |                   key={filterType}
      249 |                   variant={filter === filterType ? 'contained' : 'outlined'}
    > 250 |                   onClick={() => setFilter(filterType)}
          |                                  ^
      251 |                   aria-pressed={filter === filterType}
      252 |                 >
      253 |                   {filterType.charAt(0).toUpperCase() + filterType.slice(1)}

      at printWarning (../../node_modules/react-dom/cjs/react-dom.development.js:86:30)
      at error (../../node_modules/react-dom/cjs/react-dom.development.js:60:7)
      at warnIfUpdatesNotWrappedWithActDEV (../../node_modules/react-dom/cjs/react-dom.development.js:27628:9)
      at scheduleUpdateOnFiber (../../node_modules/react-dom/cjs/react-dom.development.js:25547:5)
      at setFilter (../../node_modules/react-dom/cjs/react-dom.development.js:16708:7)
      at onClick (src/App.js:250:34)
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
      at Object.<anonymous> (src/__tests__/AppIntegration.test.js:63:5)

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
      at Object.<anonymous> (src/__tests__/AppIntegration.test.js:76:5)

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
      at Object.<anonymous> (src/__tests__/AppIntegration.test.js:76:5)

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

 PASS  src/__tests__/test-utils-clean.js
 PASS  src/__tests__/testHelpers.js
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
 PASS  src/__tests__/utils/basicUtils.test.js
 PASS  src/__tests__/utils/appUtils.test.js
--------------------|---------|----------|---------|---------|-------------------------------------------------------
File                | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s                                     
--------------------|---------|----------|---------|---------|-------------------------------------------------------
All files           |   78.41 |    70.09 |   79.71 |   79.64 |                                                       
 src                |   78.31 |    84.61 |   72.97 |   81.37 |                                                       
  App.js            |   73.64 |    80.23 |      70 |   77.27 | 52,99-112,127,132-144,156-157,198,328-339,383-384,388 
  TaskForm.js       |   94.59 |    96.77 |   85.71 |   94.28 | 24,127                                                
 src/hooks          |     100 |      100 |     100 |     100 |                                                       
  useTaskManager.js |     100 |      100 |     100 |     100 |                                                       
 src/theme          |   60.75 |     25.8 |   63.63 |   61.53 |                                                       
  ThemeProvider.js  |   56.94 |     25.8 |   63.63 |   57.74 | 16,73,80,88,99,109,119-151,163,185-194                
  theme.js          |     100 |      100 |     100 |     100 |                                                       
 src/utils          |   96.77 |      100 |     100 |   96.66 |                                                       
  taskUtils.js      |   96.77 |      100 |     100 |   96.66 | 45                                                    
--------------------|---------|----------|---------|---------|-------------------------------------------------------

=============================== Coverage summary ===============================
Statements   : 78.41% ( 247/315 )
Branches     : 70.09% ( 150/214 )
Functions    : 79.71% ( 55/69 )
Lines        : 79.64% ( 227/285 )
================================================================================

Test Suites: 24 skipped, 14 passed, 14 of 38 total
Tests:       32 skipped, 116 passed, 148 total
Snapshots:   0 total
Time:        30.405 s
Ran all test suites.
npm warn Unknown cli config "--coverage". This will stop working in the next major version of npm.

> copilot-bootcamp@1.0.0 test:backend
> npm run test --workspace=backend

npm warn Unknown env config "coverage". This will stop working in the next major version of npm.

> backend@1.0.0 test
> jest --detectOpenHandles

  console.log
    In-memory database initialized with enhanced schema and sample data

      at Object.log (src/app.js:99:9)

GET /api/tasks 200 2.488 ms - 2
POST /api/tasks 201 0.809 ms - 186
POST /api/tasks 201 0.537 ms - 185
GET /api/tasks 200 0.467 ms - 374
POST /api/tasks 201 0.284 ms - 191
POST /api/tasks 201 0.374 ms - 193
GET /api/tasks?status=active 200 0.289 ms - 193
GET /api/tasks?status=completed 200 0.296 ms - 195
POST /api/tasks 201 0.244 ms - 190
POST /api/tasks 201 0.293 ms - 192
POST /api/tasks 201 0.240 ms - 183
GET /api/tasks 200 0.646 ms - 569
POST /api/tasks 201 0.266 ms - 186
POST /api/tasks 201 0.229 ms - 186
GET /api/tasks?sort=title 200 0.309 ms - 375
POST /api/tasks 201 0.255 ms - 190
POST /api/tasks 201 0.287 ms - 193
POST /api/tasks 400 0.262 ms - 54
POST /api/tasks 400 0.252 ms - 51
POST /api/tasks 400 0.197 ms - 58
POST /api/tasks 400 0.177 ms - 49
POST /api/tasks 201 0.271 ms - 193
POST /api/tasks 201 0.230 ms - 190
PUT /api/tasks/13 200 0.710 ms - 188
PUT /api/tasks/999 404 0.175 ms - 26
POST /api/tasks 201 0.239 ms - 190
PATCH /api/tasks/14/status 200 0.534 ms - 189
POST /api/tasks 201 0.266 ms - 190
PATCH /api/tasks/15/status 200 0.360 ms - 189
POST /api/tasks 201 0.247 ms - 190
DELETE /api/tasks/16 200 0.319 ms - 47
GET /api/tasks/16 404 0.355 ms - 26
DELETE /api/tasks/999 404 0.208 ms - 26
DELETE /api/tasks/invalid-id 400 0.124 ms - 37
POST /api/tasks 201 0.229 ms - 187
POST /api/tasks 201 0.211 ms - 187
PUT /api/tasks/18 200 0.248 ms - 155
POST /api/tasks 201 0.188 ms - 187
POST /api/tasks 201 0.128 ms - 187
POST /api/tasks 201 0.117 ms - 187
POST /api/tasks 201 0.133 ms - 187
POST /api/tasks 201 0.187 ms - 187
POST /api/tasks 201 0.121 ms - 187
POST /api/tasks 201 0.186 ms - 187
POST /api/tasks 201 0.122 ms - 187
POST /api/tasks 201 0.160 ms - 187
POST /api/tasks 201 0.122 ms - 187
POST /api/tasks 201 0.162 ms - 188
POST /api/tasks 201 0.168 ms - 188
POST /api/tasks 201 0.160 ms - 188
POST /api/tasks 201 0.123 ms - 188
POST /api/tasks 201 0.161 ms - 188
POST /api/tasks 201 0.139 ms - 188
POST /api/tasks 201 0.170 ms - 188
POST /api/tasks 201 0.153 ms - 188
POST /api/tasks 201 0.178 ms - 188
POST /api/tasks 201 0.179 ms - 188
POST /api/tasks 201 0.181 ms - 188
POST /api/tasks 201 0.117 ms - 188
POST /api/tasks 201 0.145 ms - 188
POST /api/tasks 201 0.156 ms - 188
POST /api/tasks 201 0.139 ms - 188
POST /api/tasks 201 0.201 ms - 188
POST /api/tasks 201 0.179 ms - 188
POST /api/tasks 201 0.160 ms - 188
POST /api/tasks 201 0.159 ms - 188
POST /api/tasks 201 0.159 ms - 188
POST /api/tasks 201 0.169 ms - 188
POST /api/tasks 201 0.164 ms - 188
POST /api/tasks 201 0.209 ms - 188
POST /api/tasks 201 0.170 ms - 188
POST /api/tasks 201 0.167 ms - 188
POST /api/tasks 201 0.200 ms - 188
POST /api/tasks 201 0.186 ms - 188
POST /api/tasks 201 0.163 ms - 188
POST /api/tasks 201 0.158 ms - 188
POST /api/tasks 201 0.156 ms - 188
POST /api/tasks 201 0.156 ms - 188
POST /api/tasks 201 0.159 ms - 188
POST /api/tasks 201 0.184 ms - 188
POST /api/tasks 201 0.180 ms - 188
POST /api/tasks 201 0.164 ms - 188
POST /api/tasks 201 0.160 ms - 188
POST /api/tasks 201 0.193 ms - 188
POST /api/tasks 201 0.118 ms - 188
POST /api/tasks 201 0.111 ms - 188
POST /api/tasks 201 0.136 ms - 188
POST /api/tasks 201 0.159 ms - 188
POST /api/tasks 201 0.169 ms - 188
POST /api/tasks 201 0.163 ms - 188
POST /api/tasks 201 0.162 ms - 188
POST /api/tasks 201 0.163 ms - 188
POST /api/tasks 201 0.158 ms - 188
POST /api/tasks 201 0.158 ms - 188
POST /api/tasks 201 0.115 ms - 188
POST /api/tasks 201 0.157 ms - 188
POST /api/tasks 201 0.156 ms - 188
POST /api/tasks 201 0.167 ms - 188
POST /api/tasks 201 0.160 ms - 188
POST /api/tasks 201 0.158 ms - 188
POST /api/tasks 201 0.183 ms - 188
POST /api/tasks 201 0.154 ms - 188
POST /api/tasks 201 0.187 ms - 188
POST /api/tasks 201 0.150 ms - 188
POST /api/tasks 201 0.163 ms - 188
POST /api/tasks 201 0.180 ms - 188
POST /api/tasks 201 0.197 ms - 188
POST /api/tasks 201 0.163 ms - 188
POST /api/tasks 201 0.117 ms - 188
POST /api/tasks 201 0.178 ms - 188
POST /api/tasks 201 0.155 ms - 188
POST /api/tasks 201 0.164 ms - 188
POST /api/tasks 201 0.175 ms - 188
POST /api/tasks 201 0.174 ms - 188
POST /api/tasks 201 0.159 ms - 188
POST /api/tasks 201 0.185 ms - 188
POST /api/tasks 201 0.158 ms - 188
POST /api/tasks 201 0.157 ms - 188
POST /api/tasks 201 0.118 ms - 189
POST /api/tasks 201 0.129 ms - 189
POST /api/tasks 201 0.161 ms - 189
POST /api/tasks 201 0.147 ms - 189
POST /api/tasks 201 0.177 ms - 189
POST /api/tasks 201 0.199 ms - 189
POST /api/tasks 201 0.189 ms - 189
POST /api/tasks 201 0.451 ms - 189
POST /api/tasks 201 0.169 ms - 189
POST /api/tasks 201 0.164 ms - 189
POST /api/tasks 201 1.076 ms - 189
POST /api/tasks 201 0.145 ms - 189
POST /api/tasks 201 0.199 ms - 189
POST /api/tasks 201 0.115 ms - 189
POST /api/tasks 201 0.130 ms - 189
POST /api/tasks 201 0.116 ms - 189
POST /api/tasks 201 0.130 ms - 189
POST /api/tasks 201 0.155 ms - 189
POST /api/tasks 201 0.161 ms - 189
GET /api/tasks 200 0.737 ms - 20783
 FAIL  __tests__/tasks.test.js
  Task Management API
    GET /api/tasks
      ✓ should return empty array when no tasks exist (65 ms)
      ✓ should return all tasks with correct structure (63 ms)
      ✓ should filter tasks by status (40 ms)
      ✓ should sort tasks by due date by default (63 ms)
      ✓ should sort tasks by different criteria (31 ms)
    POST /api/tasks
      ✓ should create a task with valid data (13 ms)
      ✕ should create task with minimal required data (16 ms)
      ✓ should validate required title field (35 ms)
      ✓ should validate title length limit (255 chars) (56 ms)
      ✓ should validate description length limit (1000 chars) (15 ms)
      ✕ should validate due date format (12 ms)
      ✓ should allow past due dates (14 ms)
    PUT /api/tasks/:id
      ✕ should update existing task completely (29 ms)
      ✓ should return 404 for non-existent task (11 ms)
    PATCH /api/tasks/:id/status
      ✓ should toggle task completion status (20 ms)
      ✓ should only update completion status (49 ms)
    DELETE /api/tasks/:id
      ✓ should delete existing task (25 ms)
      ✓ should return 404 for non-existent task (10 ms)
      ✓ should validate task ID format (9 ms)
    Task Ordering
      ✓ should handle manual task reordering (27 ms)
    Performance Requirements
      ✕ should handle large number of tasks efficiently (778 ms)

  ● Task Management API › POST /api/tasks › should create task with minimal required data

    expect(received).toBe(expected) // Object.is equality

    Expected: ""
    Received: "Test task description"

      130 |       expect(response.status).toBe(201);
      131 |       expect(response.body.title).toBe('Minimal Task');
    > 132 |       expect(response.body.description).toBe('');
          |                                         ^
      133 |       expect(response.body.completed).toBe(false);
      134 |       expect(response.body.dueDate).toBeNull();
      135 |     });

      at Object.toBe (__tests__/tasks.test.js:132:41)

  ● Task Management API › POST /api/tasks › should validate due date format

    expect(received).toContain(expected) // indexOf

    Expected substring: "date format"
    Received string:    "Due date must be in YYYY-MM-DD format"

      180 |       
      181 |       expect(response.status).toBe(400);
    > 182 |       expect(response.body.error).toContain('date format');
          |                                   ^
      183 |     });
      184 |
      185 |     test('should allow past due dates', async () => {

      at Object.toContain (__tests__/tasks.test.js:182:35)

  ● Task Management API › PUT /api/tasks/:id › should update existing task completely

    expect(received).toBe(expected) // Object.is equality

    Expected: true
    Received: 1

      215 |       expect(response.body.title).toBe(updatedData.title);
      216 |       expect(response.body.description).toBe(updatedData.description);
    > 217 |       expect(response.body.completed).toBe(true);
          |                                       ^
      218 |       expect(response.body.dueDate).toBe(updatedData.dueDate);
      219 |       expect(response.body.updatedAt).not.toBe(createResponse.body.updatedAt);
      220 |     });

      at Object.toBe (__tests__/tasks.test.js:217:39)

  ● Task Management API › Performance Requirements › should handle large number of tasks efficiently

    expect(received).toHaveLength(expected)

    Expected length: 100
    Received length: 110
    Received array:  [{"completed": false, "createdAt": "2026-02-20 14:34:53", "description": "Test task description", "dueDate": "2026-01-01", "id": 12, "sortOrder": 0, "title": "Overdue Task", "updatedAt": "2026-02-20 14:34:53"}, {"completed": false, "createdAt": "2026-02-20 14:34:53", "description": "Test task description", "dueDate": "2026-03-01", "id": 8, "sortOrder": 0, "title": "Z Task", "updatedAt": "2026-02-20 14:34:53"}, {"completed": false, "createdAt": "2026-02-20 14:34:53", "description": "Test task description", "dueDate": "2026-03-01", "id": 9, "sortOrder": 0, "title": "A Task", "updatedAt": "2026-02-20 14:34:53"}, {"completed": false, "createdAt": "2026-02-20 14:34:53", "description": "Test task description", "dueDate": "2026-03-01", "id": 10, "sortOrder": 0, "title": "Test Task", "updatedAt": "2026-02-20 14:34:53"}, {"completed": false, "createdAt": "2026-02-20 14:34:53", "description": "Test task description", "dueDate": "2026-03-01", "id": 11, "sortOrder": 0, "title": "Minimal Task", "updatedAt": "2026-02-20 14:34:53"}, {"completed": true, "createdAt": "2026-02-20 14:34:53", "description": "Test task description", "dueDate": "2026-03-01", "id": 14, "sortOrder": 0, "title": "Test Task", "updatedAt": "2026-02-20 14:34:53"}, {"completed": true, "createdAt": "2026-02-20 14:34:53", "description": "Test task description", "dueDate": "2026-03-01", "id": 15, "sortOrder": 0, "title": "Test Task", "updatedAt": "2026-02-20 14:34:53"}, {"completed": false, "createdAt": "2026-02-20 14:34:53", "description": "Test task description", "dueDate": "2026-03-01", "id": 17, "sortOrder": 0, "title": "Task 1", "updatedAt": "2026-02-20 14:34:53"}, {"completed": false, "createdAt": "2026-02-20 14:34:54", "description": "Test task description", "dueDate": "2026-03-01", "id": 19, "sortOrder": 0, "title": "Task 0", "updatedAt": "2026-02-20 14:34:54"}, {"completed": false, "createdAt": "2026-02-20 14:34:54", "description": "Test task description", "dueDate": "2026-03-01", "id": 20, "sortOrder": 0, "title": "Task 1", "updatedAt": "2026-02-20 14:34:54"}, …]

      335 |       
      336 |       expect(response.status).toBe(200);
    > 337 |       expect(response.body).toHaveLength(100);
          |                             ^
      338 |       expect(fetchTime).toBeLessThan(500); // Should be under 500ms per FR-044
      339 |     });
      340 |   });

      at Object.toHaveLength (__tests__/tasks.test.js:337:29)

  console.log
    In-memory database initialized with enhanced schema and sample data

      at Object.log (src/app.js:99:9)

GET /api/items 200 0.793 ms - 181
POST /api/items 201 0.420 ms - 62
POST /api/items 400 0.161 ms - 33
POST /api/items 400 0.175 ms - 33
POST /api/items 201 0.277 ms - 71
DELETE /api/items/5 200 0.421 ms - 46
DELETE /api/items/5 404 0.305 ms - 26
DELETE /api/items/999999 404 0.306 ms - 26
DELETE /api/items/abc 400 0.139 ms - 37
 PASS  __tests__/app.test.js
  API Endpoints
    GET /api/items
      ✓ should return all items (24 ms)
    POST /api/items
      ✓ should create a new item (14 ms)
      ✓ should return 400 if name is missing (10 ms)
      ✓ should return 400 if name is empty (10 ms)
    DELETE /api/items/:id
      ✓ should delete an existing item (27 ms)
      ✓ should return 404 when item does not exist (12 ms)
      ✓ should return 400 for invalid id (11 ms)

----------|---------|----------|---------|---------|-----------------------------------------------------------------------------
File      | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s                                                           
----------|---------|----------|---------|---------|-----------------------------------------------------------------------------
All files |   80.58 |    84.14 |     100 |   80.47 |                                                                             
 app.js   |   80.58 |    84.14 |     100 |   80.47 | ...-254,264,276,291-292,302,306,311,324-325,347-351,361-362,380-381,404-408 
----------|---------|----------|---------|---------|-----------------------------------------------------------------------------

=============================== Coverage summary ===============================
Statements   : 80.58% ( 137/170 )
Branches     : 84.14% ( 69/82 )
Functions    : 100% ( 13/13 )
Lines        : 80.47% ( 136/169 )
================================================================================
Test Suites: 1 failed, 1 passed, 2 total
Tests:       4 failed, 24 passed, 28 total
Snapshots:   0 total
Time:        2.971 s, estimated 3 s
Ran all test suites.
npm error Lifecycle script `test` failed with error:
npm error code 1
npm error path /workspaces/jg_aitraining2/packages/backend
npm error workspace backend@1.0.0
npm error location /workspaces/jg_aitraining2/packages/backend
npm error command failed
npm error command sh -c jest --detectOpenHandles
@jenny-ghaccount ➜ /workspaces/jg_aitraining2 (feature/context) $ 