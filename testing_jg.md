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

Summary of all failing tests
 FAIL  src/__tests__/TaskForm.test.js
  ● TaskForm Component › Form Validation › validates required title field

    TestingLibraryElementError: Unable to find an element with the text: /task title is required/i. This could be because the text is broken up by multiple elements. In this case, you can provide a function for your text matcher to make your matcher more flexible.

    Ignored nodes: comments, script, style
    <body>
      <div>
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
            >
              <div>
                <label
                  for="task-title"
                >
                  Task Title
                </label>
                <input
                  id="task-title"
                  name="title"
                  placeholder="Enter task title"
                  required=""
                  value=""
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
                  name="description"
                  placeholder="Enter task description (optional)"
                  value=""
                />
                <div
                  data-testid="helper-text"
                >
                  0/1000 characters
                </div>
              </div>
              <div>
                <label
                  for="task-due-date"
                >
                  Due Date
                </label>
                <input
                  id="task-due-date"
                  name="dueDate"
                  type="date"
                  value=""
                />
                <div
                  data-testid="helper-text"
                >
                  Leave empty if no specific due date is needed
                </div>
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
              disabled=""
              variant="contained"
            >
              Add Task
            </button>
          </div>
        </div>
      </div>
    </body>

      85 |       await user.click(submitButton);
      86 |
    > 87 |       expect(screen.getByText(/task title is required/i)).toBeInTheDocument();
         |                     ^
      88 |       expect(mockOnSubmit).not.toHaveBeenCalled();
      89 |     });
      90 |

      at Object.getElementError (../../node_modules/@testing-library/react/node_modules/@testing-library/dom/dist/config.js:37:19)
      at ../../node_modules/@testing-library/react/node_modules/@testing-library/dom/dist/query-helpers.js:76:38
      at ../../node_modules/@testing-library/react/node_modules/@testing-library/dom/dist/query-helpers.js:52:17
      at getByText (../../node_modules/@testing-library/react/node_modules/@testing-library/dom/dist/query-helpers.js:95:19)
      at Object.<anonymous> (src/__tests__/TaskForm.test.js:87:21)

  ● TaskForm Component › Keyboard Navigation › supports tab navigation through form fields

    expect(element).toHaveFocus()

    Expected element with focus:
      <button color="primary" disabled="" variant="contained">Add Task</button>
    Received element with focus:
      <button color="secondary">Cancel</button>

      249 |
      250 |       await user.tab();
    > 251 |       expect(submitButton).toHaveFocus();
          |                            ^
      252 |     });
      253 |
      254 |     test('submits form on Enter key in title field', async () => {

      at Object.<anonymous> (src/__tests__/TaskForm.test.js:251:28)

  ● TaskForm Component › Keyboard Navigation › submits form on Enter key in title field

    expect(jest.fn()).toHaveBeenCalledWith(...expected)

    Expected: {"description": "", "dueDate": null, "title": "New Task"}

    Number of calls: 0

      265 |       await user.keyboard('{Enter}');
      266 |
    > 267 |       expect(mockOnSubmit).toHaveBeenCalledWith({
          |                            ^
      268 |         title: 'New Task',
      269 |         description: '',
      270 |         dueDate: null

      at Object.<anonymous> (src/__tests__/TaskForm.test.js:267:28)

  ● TaskForm Component › Keyboard Navigation › cancels form on Escape key

    expect(jest.fn()).toHaveBeenCalled()

    Expected number of calls: >= 1
    Received number of calls:    0

      282 |
      283 |       await user.keyboard('{Escape}');
    > 284 |       expect(mockOnClose).toHaveBeenCalled();
          |                           ^
      285 |     });
      286 |   });
      287 |

      at Object.<anonymous> (src/__tests__/TaskForm.test.js:284:27)

  ● TaskForm Component › Accessibility › has proper ARIA labels and roles

    TestingLibraryElementError: Unable to find an accessible element with the role "form"

    Here are the accessible roles:

      dialog:

      Name "Add New Task ✗":
      <div
        aria-labelledby="task-form-title"
        maxwidth="sm"
        role="dialog"
      />

      --------------------------------------------------
      heading:

      Name "Add New Task ✗":
      <h2
        id="task-form-title"
      />

      --------------------------------------------------
      button:

      Name "Close dialog":
      <button
        aria-label="Close dialog"
        sx="[object Object]"
      />

      Name "Cancel":
      <button
        color="secondary"
      />

      Name "Add Task":
      <button
        color="primary"
        disabled=""
        variant="contained"
      />

      --------------------------------------------------
      textbox:

      Name "Task Title":
      <input
        id="task-title"
        name="title"
        placeholder="Enter task title"
        required=""
        value=""
      />

      Name "Description":
      <input
        id="task-description"
        name="description"
        placeholder="Enter task description (optional)"
        value=""
      />

      --------------------------------------------------

    Ignored nodes: comments, script, style
    <body>
      <div>
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
            >
              <div>
                <label
                  for="task-title"
                >
                  Task Title
                </label>
                <input
                  id="task-title"
                  name="title"
                  placeholder="Enter task title"
                  required=""
                  value=""
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
                  name="description"
                  placeholder="Enter task description (optional)"
                  value=""
                />
                <div
                  data-testid="helper-text"
                >
                  0/1000 characters
                </div>
              </div>
              <div>
                <label
                  for="task-due-date"
                >
                  Due Date
                </label>
                <input
                  id="task-due-date"
                  name="dueDate"
                  type="date"
                  value=""
                />
                <div
                  data-testid="helper-text"
                >
                  Leave empty if no specific due date is needed
                </div>
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
              disabled=""
              variant="contained"
            >
              Add Task
            </button>
          </div>
        </div>
      </div>
    </body>

      310 |
      311 |       expect(screen.getByRole('dialog')).toBeInTheDocument();
    > 312 |       expect(screen.getByRole('form')).toBeInTheDocument();
          |                     ^
      313 |       expect(screen.getByLabelText(/task title/i)).toHaveAttribute('required');
      314 |       expect(screen.getByRole('button', { name: /add task/i })).toHaveAttribute('type', 'submit');
      315 |     });

      at Object.getElementError (../../node_modules/@testing-library/react/node_modules/@testing-library/dom/dist/config.js:37:19)
      at ../../node_modules/@testing-library/react/node_modules/@testing-library/dom/dist/query-helpers.js:76:38
      at ../../node_modules/@testing-library/react/node_modules/@testing-library/dom/dist/query-helpers.js:52:17
      at getByRole (../../node_modules/@testing-library/react/node_modules/@testing-library/dom/dist/query-helpers.js:95:19)
      at Object.<anonymous> (src/__tests__/TaskForm.test.js:312:21)

  ● TaskForm Component › Accessibility › announces form errors to screen readers

    TestingLibraryElementError: Unable to find an element with the text: Task title is required. This could be because the text is broken up by multiple elements. In this case, you can provide a function for your text matcher to make your matcher more flexible.

    Ignored nodes: comments, script, style
    <body>
      <div>
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
            >
              <div>
                <label
                  for="task-title"
                >
                  Task Title
                </label>
                <input
                  id="task-title"
                  name="title"
                  placeholder="Enter task title"
                  required=""
                  value=""
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
                  name="description"
                  placeholder="Enter task description (optional)"
                  value=""
                />
                <div
                  data-testid="helper-text"
                >
                  0/1000 characters
                </div>
              </div>
              <div>
                <label
                  for="task-due-date"
                >
                  Due Date
                </label>
                <input
                  id="task-due-date"
                  name="dueDate"
                  type="date"
                  value=""
                />
                <div
                  data-testid="helper-text"
                >
                  Leave empty if no specific due date is needed
                </div>
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
              disabled=""
              variant="contained"
            >
              Add Task
            </button>
          </div>
        </div>
      </div>
    </body>

      329 |
      330 |       // Error should have proper ARIA attributes
    > 331 |       const errorMessage = screen.getByText('Task title is required');
          |                                   ^
      332 |       expect(errorMessage).toHaveAttribute('role', 'alert');
      333 |     });
      334 |   });

      at Object.getElementError (../../node_modules/@testing-library/react/node_modules/@testing-library/dom/dist/config.js:37:19)
      at ../../node_modules/@testing-library/react/node_modules/@testing-library/dom/dist/query-helpers.js:76:38
      at ../../node_modules/@testing-library/react/node_modules/@testing-library/dom/dist/query-helpers.js:52:17
      at getByText (../../node_modules/@testing-library/react/node_modules/@testing-library/dom/dist/query-helpers.js:95:19)
      at Object.<anonymous> (src/__tests__/TaskForm.test.js:331:35)

  ● TaskForm Component › Material-UI Integration › renders Material-UI components correctly

    expect(element).toHaveClass("MuiDialog-root")

    Expected the element to have class:
      MuiDialog-root
    Received:

      343 |
      344 |       // Check for Material-UI specific classes/components
    > 345 |       expect(screen.getByRole('dialog')).toHaveClass('MuiDialog-root');
          |                                          ^
      346 |       expect(screen.getByLabelText(/task title/i)).toHaveClass('MuiInputBase-input');
      347 |     });
      348 |

      at Object.<anonymous> (src/__tests__/TaskForm.test.js:345:42)

 FAIL  src/__tests__/App.test.js
  ● App Component › Initial Loading and Display › loads and displays tasks correctly

    TestingLibraryElementError: Unable to find an element with the text: 2026-02-25. This could be because the text is broken up by multiple elements. In this case, you can provide a function for your text matcher to make your matcher more flexible.

    Ignored nodes: comments, script, style
    <body>
      <div>
        <div>
          <div
            position="static"
            role="banner"
            sx="[object Object]"
          >
            <div>
              <h1>
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
            role="main"
          >
            <div>
              <div>
                <div>
                  Your Tasks (
                  2
                  )
                </div>
                <div>
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
              <ul
                role="list"
              >
                <li
                  elevation="1"
                  role="listitem"
                  sx="[object Object]"
                >
                  <div>
                    <input
                      aria-label="Mark as complete"
                      type="checkbox"
                    />
                  </div>
                  <div>
                    <div>
                      <div>
                        Complete project documentation
                      </div>
                    </div>
                    <div>
                      <div>
                        <div>
                          Write comprehensive documentation for the project
                        </div>
                        <div
                          color="text.secondary"
                        >
                          Due in 5 days
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div>
                      <button
                        aria-label="Edit task: Complete project documentation"
                        variant="outlined"
                      >
                        Edit
                      </button>
                      <button
                        aria-label="Delete task: Complete project documentation"
                        color="error"
                        variant="outlined"
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                </li>
                <li
                  elevation="1"
                  role="listitem"
                  sx="[object Object]"
                >
                  <div>
                    <input
                      aria-label="Mark as incomplete"
                      checked=""
                      type="checkbox"
                    />
                  </div>
                  <div>
                    <div>
                      <div>
                        Review pull requests
                      </div>
                    </div>
                    <div>
                      <div>
                        <div>
                          Review and merge pending pull requests
                        </div>
                        <div
                          color="text.secondary"
                        />
                      </div>
                    </div>
                  </div>
                  <div>
                    <div>
                      <button
                        aria-label="Edit task: Review pull requests"
                        variant="outlined"
                      >
                        Edit
                      </button>
                      <button
                        aria-label="Delete task: Review pull requests"
                        color="error"
                        variant="outlined"
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                </li>
              </ul>
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
        </div>
      </div>
    </body>

      156 |       // Check task details
      157 |       expect(screen.getByText('Write comprehensive documentation for the project')).toBeInTheDocument();
    > 158 |       expect(screen.getByText('2026-02-25')).toBeInTheDocument(); // Due date
          |                     ^
      159 |     });
      160 |   });
      161 |

      at Object.getElementError (../../node_modules/@testing-library/react/node_modules/@testing-library/dom/dist/config.js:37:19)
      at ../../node_modules/@testing-library/react/node_modules/@testing-library/dom/dist/query-helpers.js:76:38
      at ../../node_modules/@testing-library/react/node_modules/@testing-library/dom/dist/query-helpers.js:52:17
      at getByText (../../node_modules/@testing-library/react/node_modules/@testing-library/dom/dist/query-helpers.js:95:19)
      at Object.<anonymous> (src/__tests__/App.test.js:158:21)


Test Suites: 2 failed, 24 skipped, 12 passed, 14 of 38 total
Tests:       8 failed, 30 skipped, 110 passed, 148 total
Snapshots:   0 total
Time:        30.615 s
Ran all test suites.
npm error Lifecycle script `test` failed with error:
npm error code 1
npm error path /workspaces/jg_aitraining2/packages/frontend
npm error workspace frontend@0.1.0
npm error location /workspaces/jg_aitraining2/packages/frontend
npm error command failed
npm error command sh -c react-scripts test --coverage --watchAll=false
@jenny-ghaccount ➜ /workspaces/jg_aitraining2 (feature/context) $ 