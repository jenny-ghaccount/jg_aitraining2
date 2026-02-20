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
Time:        28.315 s
Ran all test suites.
npm warn Unknown cli config "--coverage". This will stop working in the next major version of npm.

> copilot-bootcamp@1.0.0 test:backend
> npm run test --workspace=backend

npm warn Unknown env config "coverage". This will stop working in the next major version of npm.

> backend@1.0.0 test
> jest --detectOpenHandles

 FAIL  __tests__/advanced-api.test.js
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

    SyntaxError: /workspaces/jg_aitraining2/packages/backend/__tests__/advanced-api.test.js: Expecting Unicode escape sequence \uXXXX. (1:38)

    > 1 | const request = require('supertest');\nconst app = require('../../src/app');\nconst Database = require('better-sqlite3');\nconst path = require('path');\nconst fs = require('fs');\n\n// Test database setup\nlet db;\nlet testDbPath;\n\nbeforeAll(() => {\n  // Create a unique test database\n  testDbPath = path.join(__dirname, `test_advanced_${Date.now()}.db`);\n  db = new Database(testDbPath);\n  \n  // Override the app's database reference for testing\n  app.locals.db = db;\n  \n  // Create tasks table\n  db.exec(`\n    CREATE TABLE IF NOT EXISTS tasks (\n      id INTEGER PRIMARY KEY AUTOINCREMENT,\n      title TEXT NOT NULL,\n      description TEXT DEFAULT '',\n      completed INTEGER DEFAULT 0,\n      dueDate TEXT DEFAULT NULL,\n      priority INTEGER DEFAULT 1,\n      tags TEXT DEFAULT '[]',\n      sortOrder INTEGER DEFAULT 0,\n      createdAt TEXT DEFAULT CURRENT_TIMESTAMP,\n      updatedAt TEXT DEFAULT CURRENT_TIMESTAMP\n    );\n    \n    CREATE INDEX IF NOT EXISTS idx_tasks_completed ON tasks(completed);\n    CREATE INDEX IF NOT EXISTS idx_tasks_dueDate ON tasks(dueDate);\n    CREATE INDEX IF NOT EXISTS idx_tasks_priority ON tasks(priority);\n    CREATE INDEX IF NOT EXISTS idx_tasks_sortOrder ON tasks(sortOrder);\n  `);\n});\n\nafterAll(() => {\n  if (db) {\n    db.close();\n  }\n  if (fs.existsSync(testDbPath)) {\n    fs.unlinkSync(testDbPath);\n  }\n});\n\nbeforeEach(() => {\n  // Clear tasks table before each test\n  db.exec('DELETE FROM tasks');\n  db.exec('DELETE FROM sqlite_sequence WHERE name = \"tasks\"');\n});\n\n// Helper function to create sample tasks\nconst createSampleTasks = (count = 10) => {\n  const tasks = [];\n  const priorities = [1, 2, 3]; // Low, Medium, High\n  const statuses = [0, 1]; // Incomplete, Complete\n  \n  for (let i = 1; i <= count; i++) {\n    const task = {\n      title: `Task ${i}`,\n      description: `Description for task ${i}`,\n      completed: statuses[i % 2],\n      priority: priorities[i % 3],\n      dueDate: i % 3 === 0 ? new Date(Date.now() + (i * 24 * 60 * 60 * 1000)).toISOString() : null,\n      tags: JSON.stringify(i % 2 === 0 ? ['work', 'urgent'] : ['personal']),\n      sortOrder: i\n    };\n    \n    const stmt = db.prepare(`\n      INSERT INTO tasks (title, description, completed, priority, dueDate, tags, sortOrder)\n      VALUES (?, ?, ?, ?, ?, ?, ?)\n    `);\n    \n    const result = stmt.run(\n      task.title,\n      task.description,\n      task.completed,\n      task.priority,\n      task.dueDate,\n      task.tags,\n      task.sortOrder\n    );\n    \n    tasks.push({ ...task, id: result.lastInsertRowid });\n  }\n  \n  return tasks;\n};\n\ndescribe('Advanced API Endpoint Tests', () => {\n  describe('Pagination', () => {\n    beforeEach(() => {\n      createSampleTasks(25); // Create enough tasks for pagination testing\n    });\n\n    test('should paginate results with limit and offset', async () => {\n      const response = await request(app)\n        .get('/api/tasks?limit=10&offset=0')\n        .expect(200);\n\n      expect(response.body).toHaveProperty('tasks');\n      expect(response.body).toHaveProperty('total');\n      expect(response.body).toHaveProperty('page');\n      expect(response.body).toHaveProperty('totalPages');\n      \n      expect(response.body.tasks).toHaveLength(10);\n      expect(response.body.total).toBe(25);\n      expect(response.body.page).toBe(1);\n      expect(response.body.totalPages).toBe(3);\n    });\n\n    test('should return correct page 2 results', async () => {\n      const response = await request(app)\n        .get('/api/tasks?limit=10&offset=10')\n        .expect(200);\n\n      expect(response.body.tasks).toHaveLength(10);\n      expect(response.body.page).toBe(2);\n      expect(response.body.tasks[0].id).toBeGreaterThan(10);\n    });\n\n    test('should handle last page with partial results', async () => {\n      const response = await request(app)\n        .get('/api/tasks?limit=10&offset=20')\n        .expect(200);\n\n      expect(response.body.tasks).toHaveLength(5); // Only 5 tasks on last page\n      expect(response.body.page).toBe(3);\n    });\n\n    test('should validate pagination parameters', async () => {\n      // Negative limit\n      await request(app)\n        .get('/api/tasks?limit=-1')\n        .expect(400);\n\n      // Negative offset\n      await request(app)\n        .get('/api/tasks?offset=-1')\n        .expect(400);\n\n      // Limit too large\n      await request(app)\n        .get('/api/tasks?limit=1000')\n        .expect(400);\n    });\n\n    test('should handle empty results pagination', async () => {\n      db.exec('DELETE FROM tasks'); // Clear all tasks\n      \n      const response = await request(app)\n        .get('/api/tasks?limit=10&offset=0')\n        .expect(200);\n\n      expect(response.body.tasks).toHaveLength(0);\n      expect(response.body.total).toBe(0);\n      expect(response.body.totalPages).toBe(0);\n    });\n  });\n\n  describe('Advanced Filtering', () => {\n    beforeEach(() => {\n      createSampleTasks(20);\n    });\n\n    test('should filter by multiple criteria', async () => {\n      const response = await request(app)\n        .get('/api/tasks?completed=false&priority=3&tags=urgent')\n        .expect(200);\n\n      response.body.tasks.forEach(task => {\n        expect(task.completed).toBe(false);\n        expect(task.priority).toBe(3);\n        expect(JSON.parse(task.tags)).toContain('urgent');\n      });\n    });\n\n    test('should filter by date range', async () => {\n      const tomorrow = new Date(Date.now() + 24 * 60 * 60 * 1000).toISOString();\n      const nextWeek = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString();\n      \n      const response = await request(app)\n        .get(`/api/tasks?dueDateAfter=${tomorrow}&dueDateBefore=${nextWeek}`)\n        .expect(200);\n\n      response.body.tasks.forEach(task => {\n        if (task.dueDate) {\n          expect(new Date(task.dueDate).getTime()).toBeGreaterThanOrEqual(new Date(tomorrow).getTime());\n          expect(new Date(task.dueDate).getTime()).toBeLessThanOrEqual(new Date(nextWeek).getTime());\n        }\n      });\n    });\n\n    test('should filter by text search in title and description', async () => {\n      const response = await request(app)\n        .get('/api/tasks?search=Task 1')\n        .expect(200);\n\n      response.body.tasks.forEach(task => {\n        const matchesTitle = task.title.toLowerCase().includes('task 1');\n        const matchesDescription = task.description.toLowerCase().includes('task 1');\n        expect(matchesTitle || matchesDescription).toBe(true);\n      });\n    });\n\n    test('should filter by creation date range', async () => {\n      const yesterday = new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString();\n      const tomorrow = new Date(Date.now() + 24 * 60 * 60 * 1000).toISOString();\n      \n      const response = await request(app)\n        .get(`/api/tasks?createdAfter=${yesterday}&createdBefore=${tomorrow}`)\n        .expect(200);\n\n      expect(response.body.tasks.length).toBeGreaterThan(0);\n    });\n\n    test('should combine filters with pagination', async () => {\n      const response = await request(app)\n        .get('/api/tasks?completed=false&limit=5&offset=0')\n        .expect(200);\n\n      expect(response.body.tasks).toHaveLength(5);\n      response.body.tasks.forEach(task => {\n        expect(task.completed).toBe(false);\n      });\n    });\n  });\n\n  describe('Advanced Sorting', () => {\n    beforeEach(() => {\n      createSampleTasks(15);\n    });\n\n    test('should sort by priority descending', async () => {\n      const response = await request(app)\n        .get('/api/tasks?sortBy=priority&sortOrder=desc')\n        .expect(200);\n\n      for (let i = 1; i < response.body.tasks.length; i++) {\n        expect(response.body.tasks[i-1].priority).toBeGreaterThanOrEqual(\n          response.body.tasks[i].priority\n        );\n      }\n    });\n\n    test('should sort by due date with nulls last', async () => {\n      const response = await request(app)\n        .get('/api/tasks?sortBy=dueDate&sortOrder=asc&nullsLast=true')\n        .expect(200);\n\n      let foundNull = false;\n      response.body.tasks.forEach((task, index) => {\n        if (task.dueDate === null) {\n          foundNull = true;\n        } else if (foundNull) {\n          // Once we've found a null, all subsequent tasks should also be null\n          expect(task.dueDate).toBe(null);\n        }\n      });\n    });\n\n    test('should sort by multiple criteria', async () => {\n      const response = await request(app)\n        .get('/api/tasks?sortBy=completed,priority&sortOrder=asc,desc')\n        .expect(200);\n\n      // First sort by completion status (asc), then by priority (desc)\n      for (let i = 1; i < response.body.tasks.length; i++) {\n        const prev = response.body.tasks[i-1];\n        const curr = response.body.tasks[i];\n        \n        if (prev.completed === curr.completed) {\n          // Same completion status, check priority order\n          expect(prev.priority).toBeGreaterThanOrEqual(curr.priority);\n        } else {\n          // Different completion status, incomplete should come first\n          expect(prev.completed).toBeLessThanOrEqual(curr.completed);\n        }\n      }\n    });\n\n    test('should handle custom sort order field', async () => {\n      const response = await request(app)\n        .get('/api/tasks?sortBy=sortOrder&sortOrder=asc')\n        .expect(200);\n\n      for (let i = 1; i < response.body.tasks.length; i++) {\n        expect(response.body.tasks[i-1].sortOrder).toBeLessThanOrEqual(\n          response.body.tasks[i].sortOrder\n        );\n      }\n    });\n  });\n\n  describe('Bulk Operations', () => {\n    beforeEach(() => {\n      createSampleTasks(10);\n    });\n\n    test('should update multiple tasks at once', async () => {\n      const taskIds = [1, 2, 3, 4, 5];\n      \n      const response = await request(app)\n        .patch('/api/tasks/bulk')\n        .send({\n          taskIds,\n          updates: {\n            completed: true,\n            priority: 3\n          }\n        })\n        .expect(200);\n\n      expect(response.body.updated).toBe(5);\n      \n      // Verify updates\n      for (const id of taskIds) {\n        const task = db.prepare('SELECT * FROM tasks WHERE id = ?').get(id);\n        expect(task.completed).toBe(1);\n        expect(task.priority).toBe(3);\n      }\n    });\n\n    test('should delete multiple tasks at once', async () => {\n      const taskIds = [1, 2, 3];\n      \n      const response = await request(app)\n        .delete('/api/tasks/bulk')\n        .send({ taskIds })\n        .expect(200);\n\n      expect(response.body.deleted).toBe(3);\n      \n      // Verify deletions\n      for (const id of taskIds) {\n        const task = db.prepare('SELECT * FROM tasks WHERE id = ?').get(id);\n        expect(task).toBeUndefined();\n      }\n    });\n\n    test('should reorder tasks', async () => {\n      const newOrder = [\n        { id: 3, sortOrder: 1 },\n        { id: 1, sortOrder: 2 },\n        { id: 2, sortOrder: 3 }\n      ];\n      \n      const response = await request(app)\n        .patch('/api/tasks/reorder')\n        .send({ tasks: newOrder })\n        .expect(200);\n\n      expect(response.body.updated).toBe(3);\n      \n      // Verify new order\n      const orderedTasks = db.prepare(\n        'SELECT id, sortOrder FROM tasks WHERE id IN (1, 2, 3) ORDER BY sortOrder'\n      ).all();\n      \n      expect(orderedTasks[0].id).toBe(3);\n      expect(orderedTasks[1].id).toBe(1);\n      expect(orderedTasks[2].id).toBe(2);\n    });\n\n    test('should validate bulk operation limits', async () => {\n      const manyTaskIds = Array.from({ length: 1001 }, (_, i) => i + 1);\n      \n      await request(app)\n        .patch('/api/tasks/bulk')\n        .send({\n          taskIds: manyTaskIds,\n          updates: { completed: true }\n        })\n        .expect(400)\n        .expect((res) => {\n          expect(res.body.error).toMatch(/too many tasks/i);\n        });\n    });\n  });\n\n  describe('Performance and Load Testing', () => {\n    test('should handle large result sets efficiently', async () => {\n      // Create a large number of tasks\n      createSampleTasks(1000);\n      \n      const startTime = Date.now();\n      \n      const response = await request(app)\n        .get('/api/tasks?limit=100')\n        .expect(200);\n\n      const endTime = Date.now();\n      const responseTime = endTime - startTime;\n      \n      expect(responseTime).toBeLessThan(1000); // Should complete within 1 second\n      expect(response.body.tasks).toHaveLength(100);\n    });\n\n    test('should handle concurrent requests without data corruption', async () => {\n      const concurrentRequests = Array.from({ length: 10 }, (_, i) => \n        request(app)\n          .post('/api/tasks')\n          .send({\n            title: `Concurrent Task ${i}`,\n            description: `Created by request ${i}`,\n            priority: (i % 3) + 1\n          })\n      );\n      \n      const responses = await Promise.all(concurrentRequests);\n      \n      // All requests should succeed\n      responses.forEach(response => {\n        expect(response.status).toBe(201);\n        expect(response.body).toHaveProperty('id');\n      });\n      \n      // Verify all tasks were created\n      const allTasks = db.prepare('SELECT COUNT(*) as count FROM tasks').get();\n      expect(allTasks.count).toBe(10);\n    });\n\n    test('should handle database connection limits gracefully', async () => {\n      // Simulate many concurrent database operations\n      const operations = [];\n      \n      for (let i = 0; i < 50; i++) {\n        operations.push(\n          request(app)\n            .get('/api/tasks')\n            .expect(200)\n        );\n      }\n      \n      const responses = await Promise.all(operations);\n      \n      // All operations should succeed\n      expect(responses).toHaveLength(50);\n    });\n  });\n\n  describe('Error Handling and Edge Cases', () => {\n    test('should handle malformed filter parameters', async () => {\n      await request(app)\n        .get('/api/tasks?priority=invalid')\n        .expect(400)\n        .expect((res) => {\n          expect(res.body.error).toMatch(/invalid priority/i);\n        });\n    });\n\n    test('should handle malformed date parameters', async () => {\n      await request(app)\n        .get('/api/tasks?dueDateAfter=not-a-date')\n        .expect(400)\n        .expect((res) => {\n          expect(res.body.error).toMatch(/invalid date/i);\n        });\n    });\n\n    test('should handle SQL injection attempts in search', async () => {\n      const maliciousSearch = \"'; DROP TABLE tasks; --\";\n      \n      const response = await request(app)\n        .get(`/api/tasks?search=${encodeURIComponent(maliciousSearch)}`)\n        .expect(200); // Should not cause an error\n\n      // Verify table still exists\n      const tableExists = db.prepare(\n        \"SELECT name FROM sqlite_master WHERE type='table' AND name='tasks'\"\n      ).get();\n      \n      expect(tableExists).toBeTruthy();\n    });\n\n    test('should handle database errors gracefully', async () => {\n      // Temporarily close database to simulate error\n      const originalDb = app.locals.db;\n      app.locals.db = null;\n      \n      await request(app)\n        .get('/api/tasks')\n        .expect(500)\n        .expect((res) => {\n          expect(res.body.error).toMatch(/database/i);\n        });\n      \n      // Restore database\n      app.locals.db = originalDb;\n    });\n\n    test('should handle non-existent task IDs in bulk operations', async () => {\n      const response = await request(app)\n        .patch('/api/tasks/bulk')\n        .send({\n          taskIds: [999, 1000, 1001], // Non-existent IDs\n          updates: { completed: true }\n        })\n        .expect(200);\n\n      expect(response.body.updated).toBe(0);\n    });\n\n    test('should validate required fields in bulk updates', async () => {\n      await request(app)\n        .patch('/api/tasks/bulk')\n        .send({\n          // Missing taskIds\n          updates: { completed: true }\n        })\n        .expect(400)\n        .expect((res) => {\n          expect(res.body.error).toMatch(/taskIds.*required/i);\n        });\n    });\n  });\n\n  describe('API Rate Limiting and Security', () => {\n    test('should enforce rate limits on task creation', async () => {\n      const rapidRequests = [];\n      \n      // Try to create many tasks rapidly\n      for (let i = 0; i < 100; i++) {\n        rapidRequests.push(\n          request(app)\n            .post('/api/tasks')\n            .send({\n              title: `Rapid Task ${i}`,\n              description: 'Rate limit test'\n            })\n        );\n      }\n      \n      const responses = await Promise.allSettled(rapidRequests);\n      \n      // Some requests should be rate limited (status 429)\n      const rateLimitedRequests = responses.filter(r => \n        r.status === 'fulfilled' && r.value.status === 429\n      );\n      \n      // Depending on rate limiting implementation\n      // expect(rateLimitedRequests.length).toBeGreaterThan(0);\n    });\n\n    test('should sanitize input data', async () => {\n      const maliciousData = {\n        title: '<script>alert(\"XSS\")</script>',\n        description: '<img src=\"x\" onerror=\"alert(1)\">',\n        tags: ['<script>', 'normal-tag']\n      };\n      \n      const response = await request(app)\n        .post('/api/tasks')\n        .send(maliciousData)\n        .expect(201);\n      \n      // Check that the data was sanitized\n      expect(response.body.title).not.toContain('<script>');\n      expect(response.body.description).not.toContain('<img');\n    });\n\n    test('should validate content length limits', async () => {\n      const veryLongTitle = 'x'.repeat(1001); // Assuming 1000 char limit\n      \n      await request(app)\n        .post('/api/tasks')\n        .send({\n          title: veryLongTitle,\n          description: 'Test'\n        })\n        .expect(400)\n        .expect((res) => {\n          expect(res.body.error).toMatch(/title.*too long/i);\n        });\n    });\n  });\n\n  describe('API Versioning and Backward Compatibility', () => {\n    test('should support API versioning headers', async () => {\n      const response = await request(app)\n        .get('/api/tasks')\n        .set('API-Version', 'v1')\n        .expect(200);\n\n      expect(response.headers['api-version']).toBeDefined();\n    });\n\n    test('should maintain backward compatibility for old task format', async () => {\n      // Create task with old format (without some new fields)\n      const oldFormatTask = {\n        title: 'Old Format Task',\n        completed: false\n        // Missing: description, priority, tags, etc.\n      };\n      \n      const response = await request(app)\n        .post('/api/tasks')\n        .send(oldFormatTask)\n        .expect(201);\n\n      // Should fill in default values\n      expect(response.body.description).toBeDefined();\n      expect(response.body.priority).toBeDefined();\n      expect(response.body.tags).toBeDefined();\n    });\n  });\n});
        |                                       ^

      at constructor (../../node_modules/@babel/parser/src/parse-error.ts:95:45)
      at Parser.toParseError [as raise] (../../node_modules/@babel/parser/src/tokenizer/index.ts:1503:19)
      at Parser.raise [as readWord1] (../../node_modules/@babel/parser/src/tokenizer/index.ts:1439:16)
      at Parser.readWord1 [as readWord] (../../node_modules/@babel/parser/src/tokenizer/index.ts:1465:23)
      at Parser.readWord [as getTokenFromCode] (../../node_modules/@babel/parser/src/tokenizer/index.ts:1048:14)
      at Parser.getTokenFromCode [as nextToken] (../../node_modules/@babel/parser/src/tokenizer/index.ts:278:10)
      at Parser.nextToken [as next] (../../node_modules/@babel/parser/src/tokenizer/index.ts:121:10)
      at Parser.next [as eat] (../../node_modules/@babel/parser/src/tokenizer/index.ts:126:12)
      at Parser.eat [as isLineTerminator] (../../node_modules/@babel/parser/src/parser/util.ts:142:17)
      at Parser.isLineTerminator [as semicolon] (../../node_modules/@babel/parser/src/parser/util.ts:149:25)
      at Parser.semicolon [as parseVarStatement] (../../node_modules/@babel/parser/src/parser/statement.ts:1223:10)
      at Parser.parseVarStatement [as parseStatementContent] (../../node_modules/@babel/parser/src/parser/statement.ts:578:21)
      at Parser.parseStatementContent [as parseStatementLike] (../../node_modules/@babel/parser/src/parser/statement.ts:449:17)
      at Parser.parseStatementLike [as parseModuleItem] (../../node_modules/@babel/parser/src/parser/statement.ts:386:17)
      at Parser.parseModuleItem [as parseBlockOrModuleBlockBody] (../../node_modules/@babel/parser/src/parser/statement.ts:1414:16)
      at Parser.parseBlockOrModuleBlockBody [as parseBlockBody] (../../node_modules/@babel/parser/src/parser/statement.ts:1388:10)
      at Parser.parseBlockBody [as parseProgram] (../../node_modules/@babel/parser/src/parser/statement.ts:225:10)
      at Parser.parseProgram [as parseTopLevel] (../../node_modules/@babel/parser/src/parser/statement.ts:203:25)
      at Parser.parseTopLevel [as parse] (../../node_modules/@babel/parser/src/parser/index.ts:93:10)
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
      at sync (../../node_modules/gensync/index.js:89:14)
      at fn (../../node_modules/@babel/core/src/errors/rewrite-stack-trace.ts:99:14)
      at transformSync (../../node_modules/@babel/core/src/transform.ts:66:52)
      at ScriptTransformer.transformSource (node_modules/@jest/transform/build/ScriptTransformer.js:545:31)
      at ScriptTransformer._transformAndBuildScript (node_modules/@jest/transform/build/ScriptTransformer.js:674:40)
      at ScriptTransformer.transform (node_modules/@jest/transform/build/ScriptTransformer.js:726:19)

 FAIL  __tests__/integration-edge-cases.test.js
  ● Test suite failed to run

    TypeError: Cannot read properties of undefined (reading 'run')

      94 |
      95 | initialItems.forEach(item => {
    > 96 |   insertStmt.run(item);
         |              ^
      97 | });
      98 |
      99 | console.log('In-memory database initialized with enhanced schema and sample data');

      at run (src/app.js:96:14)
          at Array.forEach (<anonymous>)
      at Object.forEach (src/app.js:95:14)
      at Object.require (__tests__/integration-edge-cases.test.js:2:21)

 FAIL  __tests__/security.test.js
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

    SyntaxError: /workspaces/jg_aitraining2/packages/backend/__tests__/security.test.js: Expecting Unicode escape sequence \uXXXX. (23:79)

      21 |   describe('Input Validation and Sanitization (FR-048)', () => {
      22 |     test('should sanitize HTML in task title', async () => {
    > 23 |       const maliciousTitle = '<script>alert(\"xss\")</script>Malicious Title';\n      \n      const response = await request(app)\n        .post('/api/tasks')\n        .send({ title: maliciousTitle });\n\n      expect(response.status).toBe(201);\n      // The title should be stored as-is but treated as text, not HTML\n      expect(response.body.title).toBe(maliciousTitle);\n      \n      // Verify it's stored correctly in the database\n      const getResponse = await request(app).get(`/api/tasks/${response.body.id}`);\n      expect(getResponse.body.title).toBe(maliciousTitle);\n    });\n\n    test('should sanitize HTML in task description', async () => {\n      const maliciousDescription = '<img src=x onerror=\"alert(1)\">Description';\n      \n      const response = await request(app)\n        .post('/api/tasks')\n        .send({ \n          title: 'Valid Title',\n          description: maliciousDescription \n        });\n\n      expect(response.status).toBe(201);\n      expect(response.body.description).toBe(maliciousDescription);\n    });\n\n    test('should reject SQL injection attempts in title', async () => {\n      const sqlInjectionAttempts = [\n        \"'; DROP TABLE tasks; --\",\n        \"1' OR '1'='1\",\n        \"'; INSERT INTO tasks (title) VALUES ('injected'); --\"\n      ];\n\n      for (const injection of sqlInjectionAttempts) {\n        const response = await request(app)\n          .post('/api/tasks')\n          .send({ title: injection });\n\n        // Should either succeed (treating as regular text) or fail validation\n        // but should not cause database issues\n        expect([201, 400]).toContain(response.status);\n        \n        if (response.status === 201) {\n          // If accepted, verify it's stored as literal text\n          expect(response.body.title).toBe(injection);\n        }\n      }\n\n      // Verify tasks table still exists and functions\n      const tasksResponse = await request(app).get('/api/tasks');\n      expect(tasksResponse.status).toBe(200);\n    });\n\n    test('should validate and reject malformed JSON', async () => {\n      const response = await request(app)\n        .post('/api/tasks')\n        .set('Content-Type', 'application/json')\n        .send('{ \"title\": \"Incomplete JSON');\n\n      expect(response.status).toBe(400);\n    });\n\n    test('should validate required fields', async () => {\n      const invalidInputs = [\n        {}, // No title\n        { title: '' }, // Empty title\n        { title: '   ' }, // Whitespace only title\n        { title: null }, // Null title\n      ];\n\n      for (const input of invalidInputs) {\n        const response = await request(app)\n          .post('/api/tasks')\n          .send(input);\n\n        expect(response.status).toBe(400);\n        expect(response.body.error).toMatch(/title.*required/i);\n      }\n    });\n\n    test('should validate field length limits', async () => {\n      // Test title length limit (255 chars)\n      const longTitle = 'a'.repeat(256);\n      const titleResponse = await request(app)\n        .post('/api/tasks')\n        .send({ title: longTitle });\n\n      expect(titleResponse.status).toBe(400);\n      expect(titleResponse.body.error).toMatch(/title.*255/i);\n\n      // Test description length limit (1000 chars)\n      const longDescription = 'a'.repeat(1001);\n      const descResponse = await request(app)\n        .post('/api/tasks')\n        .send({ \n          title: 'Valid Title',\n          description: longDescription \n        });\n\n      expect(descResponse.status).toBe(400);\n      expect(descResponse.body.error).toMatch(/description.*1000/i);\n    });\n\n    test('should validate date formats', async () => {\n      const invalidDates = [\n        'invalid-date',\n        '2026-13-01', // Invalid month\n        '2026-02-30', // Invalid day\n        '2026/02/25', // Wrong format\n        '25-02-2026'  // Wrong format\n      ];\n\n      for (const invalidDate of invalidDates) {\n        const response = await request(app)\n          .post('/api/tasks')\n          .send({ \n            title: 'Valid Title',\n            dueDate: invalidDate \n          });\n\n        expect(response.status).toBe(400);\n        expect(response.body.error).toMatch(/date/i);\n      }\n    });\n  });\n\n  describe('CORS Configuration (FR-047)', () => {\n    test('should include proper CORS headers', async () => {\n      const response = await request(app)\n        .options('/api/tasks')\n        .set('Origin', 'http://localhost:3000');\n\n      expect(response.headers['access-control-allow-origin']).toBeDefined();\n      expect(response.headers['access-control-allow-methods']).toBeDefined();\n      expect(response.headers['access-control-allow-headers']).toBeDefined();\n    });\n\n    test('should handle preflight requests correctly', async () => {\n      const response = await request(app)\n        .options('/api/tasks')\n        .set('Origin', 'http://localhost:3000')\n        .set('Access-Control-Request-Method', 'POST')\n        .set('Access-Control-Request-Headers', 'Content-Type');\n\n      expect(response.status).toBe(204);\n    });\n  });\n\n  describe('Authentication and Authorization', () => {\n    // Note: Current implementation doesn't have auth, but these tests\n    // show where it would be tested when implemented\n    \n    test('should accept requests without authentication (current implementation)', async () => {\n      const response = await request(app).get('/api/tasks');\n      expect([200, 404]).toContain(response.status);\n    });\n\n    // Future auth tests would go here:\n    // test('should reject requests without valid token', async () => {\n    //   const response = await request(app).get('/api/tasks');\n    //   expect(response.status).toBe(401);\n    // });\n  });\n\n  describe('Error Information Disclosure (FR-057)', () => {\n    test('should not expose sensitive database information in errors', async () => {\n      // Try to trigger a database error\n      const response = await request(app)\n        .get('/api/tasks/999999999');\n\n      expect(response.status).toBe(404);\n      expect(response.body.error).toBe('Task not found');\n      \n      // Should not contain database schema info, file paths, or stack traces\n      const errorString = JSON.stringify(response.body);\n      expect(errorString).not.toMatch(/sqlite/i);\n      expect(errorString).not.toMatch(/table/i);\n      expect(errorString).not.toMatch(/column/i);\n      expect(errorString).not.toMatch(/\\/.*\\.js/); // File paths\n      expect(errorString).not.toMatch(/at.*\\(/); // Stack traces\n    });\n\n    test('should provide generic error messages for server errors', async () => {\n      // This would need to be tested with actual server errors\n      // For now, test the general principle with validation errors\n      const response = await request(app)\n        .post('/api/tasks')\n        .send({ title: '' });\n\n      expect(response.status).toBe(400);\n      expect(response.body.error).toMatch(/title.*required/i);\n      \n      // Should not expose internal details\n      expect(response.body.error).not.toMatch(/sqlite/i);\n      expect(response.body.error).not.toMatch(/constraint/i);\n    });\n  });\n\n  describe('Request Size and Resource Limits', () => {\n    test('should handle reasonable request sizes', async () => {\n      const normalTask = {\n        title: 'Normal Task',\n        description: 'A'.repeat(500) // 500 chars is reasonable\n      };\n\n      const response = await request(app)\n        .post('/api/tasks')\n        .send(normalTask);\n\n      expect(response.status).toBe(201);\n    });\n\n    test('should reject oversized requests gracefully', async () => {\n      const oversizedTask = {\n        title: 'Oversized Task',\n        description: 'A'.repeat(10000), // Much larger than allowed\n        extraField: 'B'.repeat(50000) // Additional large field\n      };\n\n      const response = await request(app)\n        .post('/api/tasks')\n        .send(oversizedTask);\n\n      // Should either reject due to validation or size limits\n      expect([400, 413]).toContain(response.status);\n    });\n  });\n\n  describe('HTTP Method Security', () => {\n    test('should only allow appropriate HTTP methods', async () => {\n      // Test unsupported methods\n      const unsupportedMethods = ['PATCH', 'HEAD', 'TRACE', 'CONNECT'];\n      \n      // Note: PATCH is actually supported for /api/tasks/:id/status\n      // This test focuses on endpoints that shouldn't support certain methods\n      \n      const response = await request(app)\n        .trace('/api/tasks'); // TRACE should not be supported\n\n      expect([405, 404]).toContain(response.status); // Method not allowed or not found\n    });\n\n    test('should properly handle PUT vs POST semantics', async () => {\n      // POST should create new resources\n      const createResponse = await request(app)\n        .post('/api/tasks')\n        .send({ title: 'Test Task' });\n\n      expect(createResponse.status).toBe(201);\n      const taskId = createResponse.body.id;\n\n      // PUT should update existing resources\n      const updateResponse = await request(app)\n        .put(`/api/tasks/${taskId}`)\n        .send({ \n          title: 'Updated Task',\n          description: 'Updated description'\n        });\n\n      expect(updateResponse.status).toBe(200);\n\n      // PUT to non-existent resource should fail\n      const nonExistentResponse = await request(app)\n        .put('/api/tasks/999999')\n        .send({ title: 'Should fail' });\n\n      expect(nonExistentResponse.status).toBe(404);\n    });\n  });\n\n  describe('Content Type Validation', () => {\n    test('should require proper Content-Type for POST/PUT', async () => {\n      const response = await request(app)\n        .post('/api/tasks')\n        .send('title=Test Task') // Form data instead of JSON\n        .set('Content-Type', 'application/x-www-form-urlencoded');\n\n      // Should handle gracefully - either reject or parse correctly\n      expect([400, 415]).toContain(response.status);\n    });\n\n    test('should accept valid JSON Content-Type', async () => {\n      const response = await request(app)\n        .post('/api/tasks')\n        .send({ title: 'Valid JSON Task' })\n        .set('Content-Type', 'application/json');\n\n      expect(response.status).toBe(201);\n    });\n  });\n\n  describe('Rate Limiting Preparation (FR-050)', () => {\n    // Note: Rate limiting is not yet implemented, but these tests\n    // show how it would be tested when implemented\n    \n    test('should handle multiple requests without rate limiting (current)', async () => {\n      const requests = Array.from({ length: 10 }, () => \n        request(app).get('/api/tasks')\n      );\n\n      const responses = await Promise.all(requests);\n      \n      // All should succeed currently (no rate limiting implemented)\n      responses.forEach(response => {\n        expect(response.status).toBe(200);\n      });\n    });\n\n    // Future rate limiting tests:\n    // test('should implement rate limiting for API abuse prevention', async () => {\n    //   // Make many requests rapidly\n    //   const requests = Array.from({ length: 100 }, () => \n    //     request(app).get('/api/tasks')\n    //   );\n    //   \n    //   const responses = await Promise.all(requests);\n    //   const rateLimited = responses.filter(r => r.status === 429);\n    //   \n    //   expect(rateLimited.length).toBeGreaterThan(0);\n    // });\n  });\n});
         |                                                                                ^

      at constructor (../../node_modules/@babel/parser/src/parse-error.ts:95:45)
      at Parser.toParseError [as raise] (../../node_modules/@babel/parser/src/tokenizer/index.ts:1503:19)
      at Parser.raise [as readWord1] (../../node_modules/@babel/parser/src/tokenizer/index.ts:1439:16)
      at Parser.readWord1 [as readWord] (../../node_modules/@babel/parser/src/tokenizer/index.ts:1465:23)
      at Parser.readWord [as getTokenFromCode] (../../node_modules/@babel/parser/src/tokenizer/index.ts:1048:14)
      at Parser.getTokenFromCode [as nextToken] (../../node_modules/@babel/parser/src/tokenizer/index.ts:278:10)
      at Parser.nextToken [as next] (../../node_modules/@babel/parser/src/tokenizer/index.ts:121:10)
      at Parser.next [as eat] (../../node_modules/@babel/parser/src/tokenizer/index.ts:126:12)
      at Parser.eat [as isLineTerminator] (../../node_modules/@babel/parser/src/parser/util.ts:142:17)
      at Parser.isLineTerminator [as semicolon] (../../node_modules/@babel/parser/src/parser/util.ts:149:25)
      at Parser.semicolon [as parseVarStatement] (../../node_modules/@babel/parser/src/parser/statement.ts:1223:10)
      at Parser.parseVarStatement [as parseStatementContent] (../../node_modules/@babel/parser/src/parser/statement.ts:578:21)
      at Parser.parseStatementContent [as parseStatementLike] (../../node_modules/@babel/parser/src/parser/statement.ts:449:17)
      at Parser.parseStatementLike [as parseStatementListItem] (../../node_modules/@babel/parser/src/parser/statement.ts:398:17)
      at Parser.parseStatementListItem [as parseBlockOrModuleBlockBody] (../../node_modules/@babel/parser/src/parser/statement.ts:1415:16)
      at Parser.parseBlockOrModuleBlockBody [as parseBlockBody] (../../node_modules/@babel/parser/src/parser/statement.ts:1388:10)
      at Parser.parseBlockBody [as parseBlock] (../../node_modules/@babel/parser/src/parser/statement.ts:1356:10)
      at Parser.parseBlock [as parseFunctionBody] (../../node_modules/@babel/parser/src/parser/expression.ts:2579:24)
      at Parser.parseFunctionBody [as parseArrowExpression] (../../node_modules/@babel/parser/src/parser/expression.ts:2520:10)
      at Parser.parseArrowExpression [as parseAsyncArrowFromCallExpression] (../../node_modules/@babel/parser/src/parser/expression.ts:1045:10)
      at Parser.parseAsyncArrowFromCallExpression [as parseCoverCallAndAsyncArrowHead] (../../node_modules/@babel/parser/src/parser/expression.ts:924:27)
      at Parser.parseCoverCallAndAsyncArrowHead [as parseSubscript] (../../node_modules/@babel/parser/src/parser/expression.ts:785:19)
      at Parser.parseSubscript [as parseSubscripts] (../../node_modules/@babel/parser/src/parser/expression.ts:744:19)
      at Parser.parseSubscripts [as parseExprSubscripts] (../../node_modules/@babel/parser/src/parser/expression.ts:729:17)
      at Parser.parseExprSubscripts [as parseUpdate] (../../node_modules/@babel/parser/src/parser/expression.ts:702:21)
      at Parser.parseUpdate [as parseMaybeUnary] (../../node_modules/@babel/parser/src/parser/expression.ts:664:23)
      at Parser.parseMaybeUnary [as parseMaybeUnaryOrPrivate] (../../node_modules/@babel/parser/src/parser/expression.ts:398:14)
      at Parser.parseMaybeUnaryOrPrivate [as parseExprOps] (../../node_modules/@babel/parser/src/parser/expression.ts:410:23)
      at Parser.parseExprOps [as parseMaybeConditional] (../../node_modules/@babel/parser/src/parser/expression.ts:365:23)
      at Parser.parseMaybeConditional [as parseMaybeAssign] (../../node_modules/@babel/parser/src/parser/expression.ts:296:21)
      at parseMaybeAssign (../../node_modules/@babel/parser/src/parser/expression.ts:252:12)
      at Parser.callback [as allowInAnd] (../../node_modules/@babel/parser/src/parser/expression.ts:3136:12)
      at Parser.allowInAnd [as parseMaybeAssignAllowIn] (../../node_modules/@babel/parser/src/parser/expression.ts:251:17)
      at Parser.parseMaybeAssignAllowIn [as parseExprListItem] (../../node_modules/@babel/parser/src/parser/expression.ts:2742:18)
      at Parser.parseExprListItem [as parseCallExpressionArguments] (../../node_modules/@babel/parser/src/parser/expression.ts:1025:14)
      at Parser.parseCallExpressionArguments [as parseCoverCallAndAsyncArrowHead] (../../node_modules/@babel/parser/src/parser/expression.ts:903:29)
      at Parser.parseCoverCallAndAsyncArrowHead [as parseSubscript] (../../node_modules/@babel/parser/src/parser/expression.ts:785:19)
      at Parser.parseSubscript [as parseSubscripts] (../../node_modules/@babel/parser/src/parser/expression.ts:744:19)
      at Parser.parseSubscripts [as parseExprSubscripts] (../../node_modules/@babel/parser/src/parser/expression.ts:729:17)
      at Parser.parseExprSubscripts [as parseUpdate] (../../node_modules/@babel/parser/src/parser/expression.ts:702:21)
      at Parser.parseUpdate [as parseMaybeUnary] (../../node_modules/@babel/parser/src/parser/expression.ts:664:23)
      at Parser.parseMaybeUnary [as parseMaybeUnaryOrPrivate] (../../node_modules/@babel/parser/src/parser/expression.ts:398:14)
      at Parser.parseMaybeUnaryOrPrivate [as parseExprOps] (../../node_modules/@babel/parser/src/parser/expression.ts:410:23)
      at Parser.parseExprOps [as parseMaybeConditional] (../../node_modules/@babel/parser/src/parser/expression.ts:365:23)
      at Parser.parseMaybeConditional [as parseMaybeAssign] (../../node_modules/@babel/parser/src/parser/expression.ts:296:21)
      at Parser.parseMaybeAssign [as parseExpressionBase] (../../node_modules/@babel/parser/src/parser/expression.ts:221:23)
      at parseExpressionBase (../../node_modules/@babel/parser/src/parser/expression.ts:212:39)
      at Parser.callback [as allowInAnd] (../../node_modules/@babel/parser/src/parser/expression.ts:3131:16)
      at Parser.allowInAnd [as parseExpression] (../../node_modules/@babel/parser/src/parser/expression.ts:212:17)
      at Parser.parseExpression [as parseStatementContent] (../../node_modules/@babel/parser/src/parser/statement.ts:654:23)
      at Parser.parseStatementContent [as parseStatementLike] (../../node_modules/@babel/parser/src/parser/statement.ts:449:17)
      at Parser.parseStatementLike [as parseStatementListItem] (../../node_modules/@babel/parser/src/parser/statement.ts:398:17)
      at Parser.parseStatementListItem [as parseBlockOrModuleBlockBody] (../../node_modules/@babel/parser/src/parser/statement.ts:1415:16)
      at Parser.parseBlockOrModuleBlockBody [as parseBlockBody] (../../node_modules/@babel/parser/src/parser/statement.ts:1388:10)
      at Parser.parseBlockBody [as parseBlock] (../../node_modules/@babel/parser/src/parser/statement.ts:1356:10)
      at Parser.parseBlock [as parseFunctionBody] (../../node_modules/@babel/parser/src/parser/expression.ts:2579:24)
      at Parser.parseFunctionBody [as parseArrowExpression] (../../node_modules/@babel/parser/src/parser/expression.ts:2520:10)
      at Parser.parseArrowExpression [as parseParenAndDistinguishExpression] (../../node_modules/@babel/parser/src/parser/expression.ts:1807:12)
      at Parser.parseParenAndDistinguishExpression [as parseExprAtom] (../../node_modules/@babel/parser/src/parser/expression.ts:1146:21)
      at Parser.parseExprAtom [as parseExprSubscripts] (../../node_modules/@babel/parser/src/parser/expression.ts:723:23)
      at Parser.parseExprSubscripts [as parseUpdate] (../../node_modules/@babel/parser/src/parser/expression.ts:702:21)
      at Parser.parseUpdate [as parseMaybeUnary] (../../node_modules/@babel/parser/src/parser/expression.ts:664:23)
      at Parser.parseMaybeUnary [as parseMaybeUnaryOrPrivate] (../../node_modules/@babel/parser/src/parser/expression.ts:398:14)
      at Parser.parseMaybeUnaryOrPrivate [as parseExprOps] (../../node_modules/@babel/parser/src/parser/expression.ts:410:23)
      at Parser.parseExprOps [as parseMaybeConditional] (../../node_modules/@babel/parser/src/parser/expression.ts:365:23)
      at Parser.parseMaybeConditional [as parseMaybeAssign] (../../node_modules/@babel/parser/src/parser/expression.ts:296:21)
      at parseMaybeAssign (../../node_modules/@babel/parser/src/parser/expression.ts:252:12)
      at Parser.callback [as allowInAnd] (../../node_modules/@babel/parser/src/parser/expression.ts:3136:12)
      at Parser.allowInAnd [as parseMaybeAssignAllowIn] (../../node_modules/@babel/parser/src/parser/expression.ts:251:17)
      at Parser.parseMaybeAssignAllowIn [as parseExprListItem] (../../node_modules/@babel/parser/src/parser/expression.ts:2742:18)
      at Parser.parseExprListItem [as parseCallExpressionArguments] (../../node_modules/@babel/parser/src/parser/expression.ts:1025:14)
      at Parser.parseCallExpressionArguments [as parseCoverCallAndAsyncArrowHead] (../../node_modules/@babel/parser/src/parser/expression.ts:903:29)
      at Parser.parseCoverCallAndAsyncArrowHead [as parseSubscript] (../../node_modules/@babel/parser/src/parser/expression.ts:785:19)
      at Parser.parseSubscript [as parseSubscripts] (../../node_modules/@babel/parser/src/parser/expression.ts:744:19)
      at Parser.parseSubscripts [as parseExprSubscripts] (../../node_modules/@babel/parser/src/parser/expression.ts:729:17)
      at Parser.parseExprSubscripts [as parseUpdate] (../../node_modules/@babel/parser/src/parser/expression.ts:702:21)
      at Parser.parseUpdate [as parseMaybeUnary] (../../node_modules/@babel/parser/src/parser/expression.ts:664:23)
      at Parser.parseMaybeUnary [as parseMaybeUnaryOrPrivate] (../../node_modules/@babel/parser/src/parser/expression.ts:398:14)
      at Parser.parseMaybeUnaryOrPrivate [as parseExprOps] (../../node_modules/@babel/parser/src/parser/expression.ts:410:23)
      at Parser.parseExprOps [as parseMaybeConditional] (../../node_modules/@babel/parser/src/parser/expression.ts:365:23)
      at Parser.parseMaybeConditional [as parseMaybeAssign] (../../node_modules/@babel/parser/src/parser/expression.ts:296:21)
      at Parser.parseMaybeAssign [as parseExpressionBase] (../../node_modules/@babel/parser/src/parser/expression.ts:221:23)
      at parseExpressionBase (../../node_modules/@babel/parser/src/parser/expression.ts:212:39)
      at Parser.callback [as allowInAnd] (../../node_modules/@babel/parser/src/parser/expression.ts:3131:16)
      at Parser.allowInAnd [as parseExpression] (../../node_modules/@babel/parser/src/parser/expression.ts:212:17)
      at Parser.parseExpression [as parseStatementContent] (../../node_modules/@babel/parser/src/parser/statement.ts:654:23)
      at Parser.parseStatementContent [as parseStatementLike] (../../node_modules/@babel/parser/src/parser/statement.ts:449:17)
      at Parser.parseStatementLike [as parseStatementListItem] (../../node_modules/@babel/parser/src/parser/statement.ts:398:17)
      at Parser.parseStatementListItem [as parseBlockOrModuleBlockBody] (../../node_modules/@babel/parser/src/parser/statement.ts:1415:16)
      at Parser.parseBlockOrModuleBlockBody [as parseBlockBody] (../../node_modules/@babel/parser/src/parser/statement.ts:1388:10)
      at Parser.parseBlockBody [as parseBlock] (../../node_modules/@babel/parser/src/parser/statement.ts:1356:10)
      at Parser.parseBlock [as parseFunctionBody] (../../node_modules/@babel/parser/src/parser/expression.ts:2579:24)
      at Parser.parseFunctionBody [as parseArrowExpression] (../../node_modules/@babel/parser/src/parser/expression.ts:2520:10)
      at Parser.parseArrowExpression [as parseParenAndDistinguishExpression] (../../node_modules/@babel/parser/src/parser/expression.ts:1807:12)
      at Parser.parseParenAndDistinguishExpression [as parseExprAtom] (../../node_modules/@babel/parser/src/parser/expression.ts:1146:21)
      at Parser.parseExprAtom [as parseExprSubscripts] (../../node_modules/@babel/parser/src/parser/expression.ts:723:23)
      at Parser.parseExprSubscripts [as parseUpdate] (../../node_modules/@babel/parser/src/parser/expression.ts:702:21)
      at Parser.parseUpdate [as parseMaybeUnary] (../../node_modules/@babel/parser/src/parser/expression.ts:664:23)
      at Parser.parseMaybeUnary [as parseMaybeUnaryOrPrivate] (../../node_modules/@babel/parser/src/parser/expression.ts:398:14)
      at Parser.parseMaybeUnaryOrPrivate [as parseExprOps] (../../node_modules/@babel/parser/src/parser/expression.ts:410:23)

 FAIL  __tests__/tasks.test.js
  ● Test suite failed to run

    TypeError: Cannot read properties of undefined (reading 'run')

      94 |
      95 | initialItems.forEach(item => {
    > 96 |   insertStmt.run(item);
         |              ^
      97 | });
      98 |
      99 | console.log('In-memory database initialized with enhanced schema and sample data');

      at run (src/app.js:96:14)
          at Array.forEach (<anonymous>)
      at Object.forEach (src/app.js:95:14)
      at Object.require (__tests__/tasks.test.js:2:21)

 FAIL  __tests__/performance.test.js
  ● Test suite failed to run

    TypeError: Cannot read properties of undefined (reading 'run')

      94 |
      95 | initialItems.forEach(item => {
    > 96 |   insertStmt.run(item);
         |              ^
      97 | });
      98 |
      99 | console.log('In-memory database initialized with enhanced schema and sample data');

      at run (src/app.js:96:14)
          at Array.forEach (<anonymous>)
      at Object.forEach (src/app.js:95:14)
      at Object.require (__tests__/performance.test.js:2:21)

 FAIL  __tests__/test-utils.js
  ● Test suite failed to run

    Your test suite must contain at least one test.

      at onResult (node_modules/@jest/core/build/TestScheduler.js:133:18)
      at node_modules/@jest/core/build/TestScheduler.js:254:19
      at node_modules/emittery/index.js:363:13
          at Array.map (<anonymous>)
      at Emittery.emit (node_modules/emittery/index.js:361:23)

 FAIL  __tests__/app.test.js
  ● Test suite failed to run

    TypeError: Cannot read properties of undefined (reading 'run')

      94 |
      95 | initialItems.forEach(item => {
    > 96 |   insertStmt.run(item);
         |              ^
      97 | });
      98 |
      99 | console.log('In-memory database initialized with enhanced schema and sample data');

      at run (src/app.js:96:14)
          at Array.forEach (<anonymous>)
      at Object.forEach (src/app.js:95:14)
      at Object.require (__tests__/app.test.js:2:21)

----------|---------|----------|---------|---------|-------------------
File      | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s 
----------|---------|----------|---------|---------|-------------------
All files |       0 |        0 |       0 |       0 |                   
 app.js   |       0 |        0 |       0 |       0 | 1-412             
----------|---------|----------|---------|---------|-------------------

=============================== Coverage summary ===============================
Statements   : 0% ( 0/170 )
Branches     : 0% ( 0/82 )
Functions    : 0% ( 0/13 )
Lines        : 0% ( 0/169 )
================================================================================
Jest: "global" coverage threshold for statements (80%) not met: 0%
Jest: "global" coverage threshold for branches (80%) not met: 0%
Jest: "global" coverage threshold for lines (80%) not met: 0%
Jest: "global" coverage threshold for functions (80%) not met: 0%
Test Suites: 7 failed, 7 total
Tests:       0 total
Snapshots:   0 total
Time:        2.57 s
Ran all test suites.
npm error Lifecycle script `test` failed with error:
npm error code 1
npm error path /workspaces/jg_aitraining2/packages/backend
npm error workspace backend@1.0.0
npm error location /workspaces/jg_aitraining2/packages/backend
npm error command failed
npm error command sh -c jest --detectOpenHandles
@jenny-ghaccount ➜ /workspaces/jg_aitraining2 (feature/context) $ 