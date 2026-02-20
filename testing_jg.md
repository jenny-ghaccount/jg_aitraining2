      432 |       
      433 |       // Check for proper ARIA labels and roles
    > 434 |       expect(screen.getByRole('main')).toBeInTheDocument();
          |                     ^
      435 |       expect(screen.getByRole('banner')).toBeInTheDocument();
      436 |       expect(screen.getAllByRole('button')).toHaveLength.greaterThan(0);
      437 |       

      at Object.getElementError (../../node_modules/@testing-library/react/node_modules/@testing-library/dom/dist/config.js:37:19)
      at ../../node_modules/@testing-library/react/node_modules/@testing-library/dom/dist/query-helpers.js:76:38
      at ../../node_modules/@testing-library/react/node_modules/@testing-library/dom/dist/query-helpers.js:52:17
      at getByRole (../../node_modules/@testing-library/react/node_modules/@testing-library/dom/dist/query-helpers.js:95:19)
      at Object.<anonymous> (src/__tests__/App.test.js:434:21)

 FAIL  src/__tests__/integration/Integration.test.js
  ● Integration Tests › complete user workflow - add, edit, complete, delete tasks

    TestingLibraryElementError: Unable to find an accessible element with the role "button" and name `/create task|save/i`

    Here are the accessible roles:

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
        variant="contained"
      />

      --------------------------------------------------
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
      textbox:

      Name "Task Title":
      <input
        id="task-title"
        inputprops="[object Object]"
        margin="normal"
        name="title"
        placeholder="Enter task title"
        required=""
        value="My First Task"
      />

      Name "Description":
      <input
        id="task-description"
        inputprops="[object Object]"
        margin="normal"
        name="description"
        placeholder="Enter task description (optional)"
        rows="3"
        value="This is a test task"
      />

      --------------------------------------------------

    Ignored nodes: comments, script, style
    <body>
      <div>
        <div
          maxwidth="lg"
        >
          <div
            position="static"
            sx="[object Object]"
          >
            <div>
              <div
                component="h1"
                sx="[object Object]"
                variant="h6"
              >
                Todo App
              </div>
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
            component="main"
            maxwidth="md"
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
                    value="My First Task"
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
                    value="This is a test task"
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

      77 |     }
      78 |
    > 79 |     const submitButton = screen.getByRole('button', { name: /create task|save/i });
         |                                 ^
      80 |     await user.click(submitButton);
      81 |
      82 |     // Verify task was added (this would require the actual task to render)

      at Object.getElementError (../../node_modules/@testing-library/react/node_modules/@testing-library/dom/dist/config.js:37:19)
      at ../../node_modules/@testing-library/react/node_modules/@testing-library/dom/dist/query-helpers.js:76:38
      at ../../node_modules/@testing-library/react/node_modules/@testing-library/dom/dist/query-helpers.js:52:17
      at getByRole (../../node_modules/@testing-library/react/node_modules/@testing-library/dom/dist/query-helpers.js:95:19)
      at Object.<anonymous> (src/__tests__/integration/Integration.test.js:79:33)

  ● Integration Tests › theme integration

    Unable to find role="dialog" and name `/settings/i`

    Ignored nodes: comments, script, style
    <body>
      <div>
        <div
          maxwidth="lg"
        >
          <div
            position="static"
            sx="[object Object]"
          >
            <div>
              <div
                component="h1"
                sx="[object Object]"
                variant="h6"
              >
                Todo App
              </div>
              <button
                aria-expanded="true"
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
            sx="[object Object]"
          >
            <div
              variant="h6"
            >
              Accessibility Themes
            </div>
            <button
              sx="[object Object]"
              variant="outlined"
            >
              Switch to 
              high contrast
               theme
            </button>
            <div
              variant="body2"
            >
              Current theme: 
              standard
            </div>
          </div>
          <div
            component="main"
            maxwidth="md"
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
        </div>
      </div>
    </body>

      140 |     await user.click(settingsButton);
      141 |
    > 142 |     await waitFor(() => {
          |                  ^
      143 |       expect(screen.getByRole('dialog', { name: /settings/i })).toBeInTheDocument();
      144 |       expect(screen.getByText('Accessibility Themes')).toBeInTheDocument();
      145 |     });

      at waitForWrapper (../../node_modules/@testing-library/react/node_modules/@testing-library/dom/dist/wait-for.js:163:27)
      at Object.<anonymous> (src/__tests__/integration/Integration.test.js:142:18)

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
        <div
          maxwidth="lg"
        >
          <div
            position="static"
            sx="[object Object]"
          >
            <div>
              <div
                component="h1"
                sx="[object Object]"
                variant="h6"
              >
                Todo App
              </div>
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
            component="main"
            maxwidth="md"
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
                  2
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
              <ul
                role="list"
              >
                <li
                  elevation="1"
                  role="listitem"
                  sx="[object Object]"
                >
                  <div
                    sx="[object Object]"
                  >
                    <input
                      aria-label="Mark as incomplete"
                      checked=""
                      type="checkbox"
                    />
                  </div>
                  <div>
                    <div>
                      <div
                        sx="[object Object]"
                        variant="h6"
                      >
                        Completed Task
                      </div>
                    </div>
                    <div>
                      <div>
                        <div
                          color="text.secondary"
                          variant="caption"
                        />
                      </div>
                    </div>
                  </div>
                  <div>
                    <div
                      sx="[object Object]"
                    >
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
                  <div
                    sx="[object Object]"
                  >
                    <input
                      aria-label="Mark as complete"
                      type="checkbox"
                    />
                  </div>
                  <div>
                    <div>
                      <div
                        sx="[object Object]"
                        variant="h6"
                      >
                        Active Task
                      </div>
                    </div>
                    <div>
                      <div>
                        <div
                          color="text.secondary"
                          variant="caption"
                        />
                      </div>
                    </div>
                  </div>
                  <div>
                    <div
                      sx="[object Object]"
                    >
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

      169 |
      170 |     // Test filtering to active only
    > 171 |     const activeButton = screen.getByRole('button', { name: /active/i });
          |                                 ^
      172 |     await user.click(activeButton);
      173 |
      174 |     await waitFor(() => {

      at Object.getElementError (../../node_modules/@testing-library/react/node_modules/@testing-library/dom/dist/config.js:37:19)
      at getElementError (../../node_modules/@testing-library/react/node_modules/@testing-library/dom/dist/query-helpers.js:20:35)
      at getMultipleElementsFoundError (../../node_modules/@testing-library/react/node_modules/@testing-library/dom/dist/query-helpers.js:23:10)
      at ../../node_modules/@testing-library/react/node_modules/@testing-library/dom/dist/query-helpers.js:55:13
      at getByRole (../../node_modules/@testing-library/react/node_modules/@testing-library/dom/dist/query-helpers.js:95:19)
      at Object.<anonymous> (src/__tests__/integration/Integration.test.js:171:33)

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
              sx="[object Object]"
            >
              <div>
                <div
                  component="h1"
                  sx="[object Object]"
                  variant="h6"
                >
                  Todo App
                </div>
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
              component="main"
              maxwidth="md"
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

 FAIL  src/__tests__/SimpleApp.test.js
  ● Simple App Tests › shows empty state message

    TestingLibraryElementError: Unable to find an element with the text: No tasks found. This could be because the text is broken up by multiple elements. In this case, you can provide a function for your text matcher to make your matcher more flexible.

    Ignored nodes: comments, script, style
    <body>
      <div>
        <div
          maxwidth="lg"
        >
          <div
            position="static"
            sx="[object Object]"
          >
            <div>
              <div
                component="h1"
                sx="[object Object]"
                variant="h6"
              >
                Todo App
              </div>
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
            component="main"
            maxwidth="md"
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
                role="alert"
                severity="error"
                sx="[object Object]"
              >
                Failed to fetch tasks: No response received from server
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

      56 |     });
      57 |     
    > 58 |     expect(screen.getByText('No tasks found')).toBeInTheDocument();
         |                   ^
      59 |     expect(screen.getByText(/click the \+ button to add your first task/i)).toBeInTheDocument();
      60 |   });
      61 |

      at Object.getElementError (../../node_modules/@testing-library/react/node_modules/@testing-library/dom/dist/config.js:37:19)
      at ../../node_modules/@testing-library/react/node_modules/@testing-library/dom/dist/query-helpers.js:76:38
      at ../../node_modules/@testing-library/react/node_modules/@testing-library/dom/dist/query-helpers.js:52:17
      at getByText (../../node_modules/@testing-library/react/node_modules/@testing-library/dom/dist/query-helpers.js:95:19)
      at Object.<anonymous> (src/__tests__/SimpleApp.test.js:58:19)


Test Suites: 5 failed, 22 skipped, 11 passed, 16 of 38 total
Tests:       24 failed, 23 skipped, 85 passed, 132 total
Snapshots:   0 total
Time:        35.111 s
Ran all test suites.
npm error Lifecycle script `test` failed with error:
npm error code 1
npm error path /workspaces/jg_aitraining2/packages/frontend
npm error workspace frontend@0.1.0
npm error location /workspaces/jg_aitraining2/packages/frontend
npm error command failed
npm error command sh -c react-scripts test --coverage --watchAll=false
@jenny-ghaccount ➜ /workspaces/jg_aitraining2/packages/frontend (feature/context) $ 