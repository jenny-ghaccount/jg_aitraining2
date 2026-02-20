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
                disabled=""
                variant="contained"
              >
                Add Task
              </button>
            </div>
          </div>
        </div>
      </div>
    </body>

      366 |       
      367 |       // Should show error message
    > 368 |       await waitFor(() => {
          |                    ^
      369 |         expect(screen.getByText(/cannot exceed 255 characters/i)).toBeInTheDocument();
      370 |       });
      371 |     });

      at waitForWrapper (../../node_modules/@testing-library/react/node_modules/@testing-library/dom/dist/wait-for.js:163:27)
      at Object.<anonymous> (src/__tests__/App.test.js:368:20)

  ● App Component › Theme and Accessibility › toggles theme when theme button clicked

    TestingLibraryElementError: Unable to find an accessible element with the role "button" and name `/toggle theme/i`

    Here are the accessible roles:

      banner:

      Name "":
      <div
        position="static"
        role="banner"
        sx="[object Object]"
      />

      --------------------------------------------------
      heading:

      Name "Todo App":
      <h1 />

      --------------------------------------------------
      button:

      Name "Open settings menu":
      <button
        aria-expanded="false"
        aria-label="Open settings menu"
        color="inherit"
        edge="end"
      />

      Name "All":
      <button
        aria-pressed="true"
        variant="contained"
      />

      Name "Active":
      <button
        aria-pressed="false"
        variant="outlined"
      />

      Name "Completed":
      <button
        aria-pressed="false"
        variant="outlined"
      />

      Name "Add new task":
      <button
        aria-label="Add new task"
        color="primary"
        sx="[object Object]"
      />

      --------------------------------------------------
      main:

      Name "":
      <div
        role="main"
      />

      --------------------------------------------------
      status:

      Name "Loading tasks":
      <div
        aria-label="Loading tasks"
        role="status"
      />

      --------------------------------------------------

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
                  0
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
              <div
                aria-label="Loading tasks"
                role="status"
              >
                <div>
                  Loading...
                </div>
                <div>
                  Loading tasks...
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
        </div>
      </div>
    </body>

      380 |       });
      381 |       
    > 382 |       const themeButton = screen.getByRole('button', { name: /toggle theme/i });
          |                                  ^
      383 |       await user.click(themeButton);
      384 |       
      385 |       // Theme should change (this would need theme context testing)

      at Object.getElementError (../../node_modules/@testing-library/react/node_modules/@testing-library/dom/dist/config.js:37:19)
      at ../../node_modules/@testing-library/react/node_modules/@testing-library/dom/dist/query-helpers.js:76:38
      at ../../node_modules/@testing-library/react/node_modules/@testing-library/dom/dist/query-helpers.js:52:17
      at getByRole (../../node_modules/@testing-library/react/node_modules/@testing-library/dom/dist/query-helpers.js:95:19)
      at Object.<anonymous> (src/__tests__/App.test.js:382:34)

  ● App Component › Theme and Accessibility › supports keyboard navigation

    TestingLibraryElementError: Unable to find an accessible element with the role "button" and name `/toggle theme/i`

    Here are the accessible roles:

      banner:

      Name "":
      <div
        position="static"
        role="banner"
        sx="[object Object]"
      />

      --------------------------------------------------
      heading:

      Name "Todo App":
      <h1 />

      --------------------------------------------------
      button:

      Name "Open settings menu":
      <button
        aria-expanded="false"
        aria-label="Open settings menu"
        color="inherit"
        edge="end"
      />

      Name "All":
      <button
        aria-pressed="true"
        variant="contained"
      />

      Name "Active":
      <button
        aria-pressed="false"
        variant="outlined"
      />

      Name "Completed":
      <button
        aria-pressed="false"
        variant="outlined"
      />

      Name "Edit task: Complete project documentation":
      <button
        aria-label="Edit task: Complete project documentation"
        variant="outlined"
      />

      Name "Delete task: Complete project documentation":
      <button
        aria-label="Delete task: Complete project documentation"
        color="error"
        variant="outlined"
      />

      Name "Edit task: Review pull requests":
      <button
        aria-label="Edit task: Review pull requests"
        variant="outlined"
      />

      Name "Delete task: Review pull requests":
      <button
        aria-label="Delete task: Review pull requests"
        color="error"
        variant="outlined"
      />

      Name "Add new task":
      <button
        aria-label="Add new task"
        color="primary"
        sx="[object Object]"
      />

      --------------------------------------------------
      main:

      Name "":
      <div
        role="main"
      />

      --------------------------------------------------
      list:

      Name "":
      <ul
        role="list"
      />

      --------------------------------------------------
      listitem:

      Name "":
      <li
        elevation="1"
        role="listitem"
        sx="[object Object]"
      />

      Name "":
      <li
        elevation="1"
        role="listitem"
        sx="[object Object]"
      />

      --------------------------------------------------
      checkbox:

      Name "Mark as complete":
      <input
        aria-label="Mark as complete"
        type="checkbox"
      />

      Name "Mark as incomplete":
      <input
        aria-label="Mark as incomplete"
        checked=""
        type="checkbox"
      />

      --------------------------------------------------

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

      415 |       // Tab through interactive elements
      416 |       await user.tab();
    > 417 |       expect(screen.getByRole('button', { name: /toggle theme/i })).toHaveFocus();
          |                     ^
      418 |       
      419 |       await user.tab();
      420 |       expect(screen.getByRole('button', { name: /settings/i })).toHaveFocus();

      at Object.getElementError (../../node_modules/@testing-library/react/node_modules/@testing-library/dom/dist/config.js:37:19)
      at ../../node_modules/@testing-library/react/node_modules/@testing-library/dom/dist/query-helpers.js:76:38
      at ../../node_modules/@testing-library/react/node_modules/@testing-library/dom/dist/query-helpers.js:52:17
      at getByRole (../../node_modules/@testing-library/react/node_modules/@testing-library/dom/dist/query-helpers.js:95:19)
      at Object.<anonymous> (src/__tests__/App.test.js:417:21)

  ● App Component › Theme and Accessibility › supports screen reader announcements

    TypeError: expect(...).toHaveLength.greaterThan is not a function

      436 |       expect(screen.getByRole('main')).toBeInTheDocument();
      437 |       expect(screen.getByRole('banner')).toBeInTheDocument();
    > 438 |       expect(screen.getAllByRole('button')).toHaveLength.greaterThan(0);
          |                                                          ^
      439 |       
      440 |       // Check for task list accessibility
      441 |       const taskElements = screen.getAllByRole('listitem');

      at Object.<anonymous> (src/__tests__/App.test.js:438:58)

 FAIL  src/__tests__/integration/ComponentIntegration.test.js
  ● Component Integration Tests › should handle Enter key form submission

    expect(element).not.toBeInTheDocument()

    expected document not to contain element, found <div aria-labelledby="task-form-title" maxwidth="sm" role="dialog"><h2 id="task-form-title">Add New Task<button aria-label="Close dialog" sx="[object Object]"><span>✗</span></button></h2><div><div component="form"><div><label for="task-title">Task Title</label><input id="task-title" inputprops="[object Object]" margin="normal" name="title" placeholder="Enter task title" required="" value="Task via Enter" /></div><div><label for="task-description">Description</label><input id="task-description" inputprops="[object Object]" margin="normal" name="description" placeholder="Enter task description (optional)" rows="3" value="" /></div><div><label for="task-due-date">Due Date</label><input id="task-due-date" inputlabelprops="[object Object]" inputprops="[object Object]" margin="normal" name="dueDate" type="date" value="" /></div></div></div><div><button color="secondary">Cancel</button><button color="primary" variant="contained">Add Task</button></div></div> instead

    Ignored nodes: comments, script, style
    <html
      data-theme="standard"
    >
      <head />
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
                    0
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
                <div
                  sx="[object Object]"
                >
                  <div>
                    No tasks found
                  </div>
                  <div
                    color="text.secondary"
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

 FAIL  src/__tests__/integration/Integration.test.js
  ● Integration Tests › filter and display integration

    TestingLibraryElementError: Found multiple elements with the role "button" and name `/active/i`

    Here are the matching elements:

    Ignored nodes: comments, script, style
    <button
      aria-pressed="false"
      variant="outlined"
    >
      Active
    </button>

    Ignored nodes: comments, script, style
    <button
      aria-label="Edit task: Active Task"
      variant="outlined"
    >
      Edit
    </button>

    Ignored nodes: comments, script, style
    <button
      aria-label="Delete task: Active Task"
      color="error"
      variant="outlined"
    >
      Delete
    </button>

    (If this is intentional, then use the `*AllBy*` variant of the query (like `queryAllByText`, `getAllByText`, or `findAllByText`)).

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
                      aria-label="Mark as incomplete"
                      checked=""
                      type="checkbox"
                    />
                  </div>
                  <div>
                    <div>
                      <div>
                        Completed Task
                      </div>
                    </div>
                    <div>
                      <div>
                        <div
                          color="text.secondary"
                        />
                      </div>
                    </div>
                  </div>
                  <div>
                    <div>
                      <button
                        aria-label="Edit task: Completed Task"
                        variant="outlined"
                      >
                        Edit
                      </button>
                      <button
                        aria-label="Delete task: Completed Task"
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
                      aria-label="Mark as complete"
                      type="checkbox"
                    />
                  </div>
                  <div>
                    <div>
                      <div>
                        Active Task
                      </div>
                    </div>
                    <div>
                      <div>
                        <div
                          color="text.secondary"
                        />
                      </div>
                    </div>
                  </div>
                  <div>
                    <div>
                      <button
                        aria-label="Edit task: Active Task"
                        variant="outlined"
                      >
                        Edit
                      </button>
                      <button
                        aria-label="Delete task: Active Task"
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

      176 |
      177 |     // Test filtering to active only
    > 178 |     const activeButton = screen.getByRole('button', { name: /active/i });
          |                                 ^
      179 |     await user.click(activeButton);
      180 |
      181 |     await waitFor(() => {

      at Object.getElementError (../../node_modules/@testing-library/react/node_modules/@testing-library/dom/dist/config.js:37:19)
      at getElementError (../../node_modules/@testing-library/react/node_modules/@testing-library/dom/dist/query-helpers.js:20:35)
      at getMultipleElementsFoundError (../../node_modules/@testing-library/react/node_modules/@testing-library/dom/dist/query-helpers.js:23:10)
      at ../../node_modules/@testing-library/react/node_modules/@testing-library/dom/dist/query-helpers.js:55:13
      at getByRole (../../node_modules/@testing-library/react/node_modules/@testing-library/dom/dist/query-helpers.js:95:19)
      at Object.<anonymous> (src/__tests__/integration/Integration.test.js:178:33)


Test Suites: 4 failed, 24 skipped, 10 passed, 14 of 38 total
Tests:       18 failed, 29 skipped, 85 passed, 132 total
Snapshots:   0 total
Time:        33.331 s
Ran all test suites.
npm error Lifecycle script `test` failed with error:
npm error code 1
npm error path /workspaces/jg_aitraining2/packages/frontend
npm error workspace frontend@0.1.0
npm error location /workspaces/jg_aitraining2/packages/frontend
npm error command failed
npm error command sh -c react-scripts test --coverage --watchAll=false
@jenny-ghaccount ➜ /workspaces/jg_aitraining2 (feature/context) $ 