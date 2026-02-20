                </h2>
                <button
                  aria-label="Close dialog"
                  class="modal-close-btn"
                  type="button"
                >
                  ×
                </button>
              </div>
              <form
                class="task-form"
              >
                <div
                  class="form-group"
                >
                  <label
                    class="form-label"
                    for="task-title"
                  >
                    Task Title *
                  </label>
                  <input
                    class="form-input "
                    id="task-title"
                    maxlength="255"
                    placeholder="Enter task title"
                    required=""
                    type="text"
                    value="My First Task"
                  />
                </div>
                <div
                  class="form-group"
                >
                  <label
                    class="form-label"
                    for="task-description"
                  >
                    Description
                  </label>
                  <textarea
                    class="form-textarea "
                    id="task-description"
                    maxlength="1000"
                    placeholder="Enter task description (optional)"
                    rows="3"
                  >
                    This is a test task
                  </textarea>
                  <small
                    class="character-count"
                  >
                    19
                    /1000 characters
                  </small>
                </div>
                <div
                  class="form-group"
                >
                  <label
                    class="form-label"
                    for="task-due-date"
                  >
                    Due Date
                  </label>
                  <input
                    class="form-input"
                    id="task-due-date"
                    min="2026-02-20"
                    type="date"
                    value=""
                  />
                  <small
                    class="form-help"
                  >
                    Leave empty if no specific due date is needed
                  </small>
                </div>
                <div
                  class="form-actions"
                >
                  <button
                    class="btn-secondary"
                    type="button"
                  >
                    Cancel
                  </button>
                  <button
                    class="btn-primary"
                    type="submit"
                  >
                    Add Task
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </body>

      72 |     }
      73 |
    > 74 |     const submitButton = screen.getByRole('button', { name: /create task|save/i });
         |                                 ^
      75 |     await user.click(submitButton);
      76 |
      77 |     // Verify task was added (this would require the actual task to render)

      at Object.getElementError (../../node_modules/@testing-library/react/node_modules/@testing-library/dom/dist/config.js:37:19)
      at ../../node_modules/@testing-library/react/node_modules/@testing-library/dom/dist/query-helpers.js:76:38
      at ../../node_modules/@testing-library/react/node_modules/@testing-library/dom/dist/query-helpers.js:52:17
      at getByRole (../../node_modules/@testing-library/react/node_modules/@testing-library/dom/dist/query-helpers.js:95:19)
      at Object.<anonymous> (src/__tests__/integration/Integration.test.js:74:33)

  ● Integration Tests › theme integration

    ReferenceError: THEMES is not defined

      226 |           <h3>Accessibility Themes</h3>
      227 |           <div className="theme-options">
    > 228 |             {Object.entries(THEMES).map(([key, value]) => (
          |                             ^
      229 |               <label key={value} className="theme-option">
      230 |                 <input
      231 |                   type="radio"

      at AppContent (src/App.js:228:29)
      at renderWithHooks (../../node_modules/react-dom/cjs/react-dom.development.js:15486:18)
      at updateFunctionComponent (../../node_modules/react-dom/cjs/react-dom.development.js:19617:20)
      at beginWork (../../node_modules/react-dom/cjs/react-dom.development.js:21640:16)
      at beginWork$1 (../../node_modules/react-dom/cjs/react-dom.development.js:27465:14)
      at performUnitOfWork (../../node_modules/react-dom/cjs/react-dom.development.js:26599:12)
      at workLoopSync (../../node_modules/react-dom/cjs/react-dom.development.js:26505:5)
      at renderRootSync (../../node_modules/react-dom/cjs/react-dom.development.js:26473:7)
      at recoverFromConcurrentError (../../node_modules/react-dom/cjs/react-dom.development.js:25889:20)
      at performSyncWorkOnRoot (../../node_modules/react-dom/cjs/react-dom.development.js:26135:20)
      at flushSyncCallbacks (../../node_modules/react-dom/cjs/react-dom.development.js:12042:22)
      at ../../node_modules/react-dom/cjs/react-dom.development.js:25690:13
      at ../../node_modules/jsdom/lib/jsdom/browser/Window.js:550:9

  ● Integration Tests › theme integration

    Unable to find role="dialog" and name `/settings/i`

    Ignored nodes: comments, script, style
    <body>
      <div />
    </body>

      135 |     await user.click(settingsButton);
      136 |
    > 137 |     await waitFor(() => {
          |                  ^
      138 |       expect(screen.getByRole('dialog', { name: /settings/i })).toBeInTheDocument();
      139 |       expect(screen.getByText('Accessibility Themes')).toBeInTheDocument();
      140 |     });

      at waitForWrapper (../../node_modules/@testing-library/react/node_modules/@testing-library/dom/dist/wait-for.js:163:27)
      at Object.<anonymous> (src/__tests__/integration/Integration.test.js:137:18)

  ● Integration Tests › filter and display integration

    TestingLibraryElementError: Found multiple elements with the role "button" and name `/active/i`

    Here are the matching elements:

    Ignored nodes: comments, script, style
    <button
      aria-pressed="false"
      class="filter-btn "
    >
      Active
    </button>

    Ignored nodes: comments, script, style
    <button
      aria-label="Edit task: Active Task"
      class="task-btn edit"
    >
      ✏️ Edit
    </button>

    Ignored nodes: comments, script, style
    <button
      aria-label="Delete task: Active Task"
      class="task-btn delete"
    >
      �� Delete
    </button>

    (If this is intentional, then use the `*AllBy*` variant of the query (like `queryAllByText`, `getAllByText`, or `findAllByText`)).

    Ignored nodes: comments, script, style
    <body>
      <div>
        <div
          class="App"
        >
          <header
            class="App-header"
          >
            <div>
              <h1>
                Todo App
              </h1>
              <p>
                Stay organized and get things done
              </p>
            </div>
            <button
              aria-expanded="false"
              aria-label="Open settings menu"
              class="settings-btn"
            >
              ⚙️ Settings
            </button>
          </header>
          <main
            class="main-content"
          >
            <div
              class="task-list-container"
            >
              <div
                class="task-list-header"
              >
                <h2>
                  Your Tasks (
                  2
                  )
                </h2>
                <div
                  class="task-filters"
                >
                  <button
                    aria-pressed="true"
                    class="filter-btn active"
                  >
                    All
                  </button>
                  <button
                    aria-pressed="false"
                    class="filter-btn "
                  >
                    Active
                  </button>
                  <button
                    aria-pressed="false"
                    class="filter-btn "
                  >
                    Completed
                  </button>
                </div>
              </div>
              <ul
                class="task-list"
                role="list"
              >
                <li
                  class="task-card completed"
                  role="listitem"
                >
                  <div
                    class="task-content"
                  >
                    <div
                      class="task-header"
                    >
                      <h3
                        class="task-title completed"
                      >
                        Completed Task
                      </h3>
                    </div>
                    <div
                      class="task-meta"
                    >
                      <div
                        class="task-due-date"
                      />
                      <div
                        class="task-actions"
                      >
                        <button
                          aria-label="Mark as incomplete"
                          class="task-btn complete completed"
                        >
                          ↶ Undo
                        </button>
                        <button
                          aria-label="Edit task: Completed Task"
                          class="task-btn edit"
                        >
                          ✏️ Edit
                        </button>
                        <button
                          aria-label="Delete task: Completed Task"
                          class="task-btn delete"
                        >
                          �� Delete
                        </button>
                      </div>
                    </div>
                  </div>
                </li>
                <li
                  class="task-card normal"
                  role="listitem"
                >
                  <div
                    class="task-content"
                  >
                    <div
                      class="task-header"
                    >
                      <h3
                        class="task-title "
                      >
                        Active Task
                      </h3>
                    </div>
                    <div
                      class="task-meta"
                    >
                      <div
                        class="task-due-date"
                      />
                      <div
                        class="task-actions"
                      >
                        <button
                          aria-label="Mark as complete"
                          class="task-btn complete "
                        >
                          ✓ Complete
                        </button>
                        <button
                          aria-label="Edit task: Active Task"
                          class="task-btn edit"
                        >
                          ✏️ Edit
                        </button>
                        <button
                          aria-label="Delete task: Active Task"
                          class="task-btn delete"
                        >
                          �� Delete
                        </button>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </main>
          <button
            aria-label="Add new task"
            class="fab"
            title="Add new task"
          >
            +
          </button>
        </div>
      </div>
    </body>

      164 |
      165 |     // Test filtering to active only
    > 166 |     const activeButton = screen.getByRole('button', { name: /active/i });
          |                                 ^
      167 |     await user.click(activeButton);
      168 |
      169 |     await waitFor(() => {

      at Object.getElementError (../../node_modules/@testing-library/react/node_modules/@testing-library/dom/dist/config.js:37:19)
      at getElementError (../../node_modules/@testing-library/react/node_modules/@testing-library/dom/dist/query-helpers.js:20:35)
      at getMultipleElementsFoundError (../../node_modules/@testing-library/react/node_modules/@testing-library/dom/dist/query-helpers.js:23:10)
      at ../../node_modules/@testing-library/react/node_modules/@testing-library/dom/dist/query-helpers.js:55:13
      at getByRole (../../node_modules/@testing-library/react/node_modules/@testing-library/dom/dist/query-helpers.js:95:19)
      at Object.<anonymous> (src/__tests__/integration/Integration.test.js:166:33)

 FAIL  src/__tests__/integration/ComponentIntegration.test.js
  ● Component Integration Tests › should pass basic accessibility audit

    Unable to find an element with the text: TODO App. This could be because the text is broken up by multiple elements. In this case, you can provide a function for your text matcher to make your matcher more flexible.

    Ignored nodes: comments, script, style
    <body>
      <div>
        <div
          class="App"
        >
          <header
            class="App-header"
          >
            <div>
              <h1>
                Todo App
              </h1>
              <p>
                Stay organized and get things done
              </p>
            </div>
            <button
              aria-expanded="false"
              aria-label="Open settings menu"
              class="settings-btn"
            >
              ⚙️ Settings
            </button>
          </header>
          <main
            class="main-content"
          >
            <div
              class="task-list-container"
            >
              <div
                class="task-list-header"
              >
                <h2>
                  Your Tasks (
                  0
                  )
                </h2>
                <div
                  class="task-filters"
                >
                  <button
                    aria-pressed="true"
                    class="filter-btn active"
                  >
                    All
                  </button>
                  <button
                    aria-pressed="false"
                    class="filter-btn "
                  >
                    Active
                  </button>
                  <button
                    aria-pressed="false"
                    class="filter-btn "
                  >
                    Completed
                  </button>
                </div>
              </div>
              <div
                class="empty-state"
              >
                <h3>
                  No tasks found
                </h3>
                <p>
                  Click the + button to add your first task!
                </p>
              </div>
            </div>
          </main>
          <button
            aria-label="Add new task"
            class="fab"
            title="Add new task"
          >
            +
          </button>
        </div>
      </div>
    </body>

      39 |     const { container } = render(<App />);
      40 |     
    > 41 |     await waitFor(() => {
         |                  ^
      42 |       expect(screen.getByText('TODO App')).toBeInTheDocument();
      43 |     });
      44 |

      at waitForWrapper (../../node_modules/@testing-library/react/node_modules/@testing-library/dom/dist/wait-for.js:163:27)
      at Object.<anonymous> (src/__tests__/integration/ComponentIntegration.test.js:41:18)

  ● Component Integration Tests › should handle form interactions

    TestingLibraryElementError: Unable to find an accessible element with the role "textbox"

    Here are the accessible roles:

      banner:

      Name "":
      <header
        class="App-header"
      />

      --------------------------------------------------
      heading:

      Name "Todo App":
      <h1 />

      Name "Your Tasks (0)":
      <h2 />

      --------------------------------------------------
      button:

      Name "Open settings menu":
      <button
        aria-expanded="false"
        aria-label="Open settings menu"
        class="settings-btn"
      />

      Name "All":
      <button
        aria-pressed="true"
        class="filter-btn active"
      />

      Name "Active":
      <button
        aria-pressed="false"
        class="filter-btn "
      />

      Name "Completed":
      <button
        aria-pressed="false"
        class="filter-btn "
      />

      Name "Add new task":
      <button
        aria-label="Add new task"
        class="fab"
        title="Add new task"
      />

      --------------------------------------------------
      main:

      Name "":
      <main
        class="main-content"
      />

      --------------------------------------------------
      status:

      Name "Loading tasks":
      <div
        aria-label="Loading tasks"
        class="loading"
        role="status"
      />

      --------------------------------------------------

    Ignored nodes: comments, script, style
    <body>
      <div>
        <div
          class="App"
        >
          <header
            class="App-header"
          >
            <div>
              <h1>
                Todo App
              </h1>
              <p>
                Stay organized and get things done
              </p>
            </div>
            <button
              aria-expanded="false"
              aria-label="Open settings menu"
              class="settings-btn"
            >
              ⚙️ Settings
            </button>
          </header>
          <main
            class="main-content"
          >
            <div
              class="task-list-container"
            >
              <div
                class="task-list-header"
              >
                <h2>
                  Your Tasks (
                  0
                  )
                </h2>
                <div
                  class="task-filters"
                >
                  <button
                    aria-pressed="true"
                    class="filter-btn active"
                  >
                    All
                  </button>
                  <button
                    aria-pressed="false"
                    class="filter-btn "
                  >
                    Active
                  </button>
                  <button
                    aria-pressed="false"
                    class="filter-btn "
                  >
                    Completed
                  </button>
                </div>
              </div>
              <div
                aria-label="Loading tasks"
                class="loading"
                role="status"
              >
                Loading tasks...
              </div>
            </div>
          </main>
          <button
            aria-label="Add new task"
            class="fab"
            title="Add new task"
          >
            +
          </button>
        </div>
      </div>
    </body>

      52 |     
      53 |     // Find the task input and button
    > 54 |     const taskInput = screen.getByRole('textbox');
         |                              ^
      55 |     const addButton = screen.getByRole('button', { name: /add task/i });
      56 |     
      57 |     // Type a task and submit

      at Object.getElementError (../../node_modules/@testing-library/react/node_modules/@testing-library/dom/dist/config.js:37:19)
      at ../../node_modules/@testing-library/react/node_modules/@testing-library/dom/dist/query-helpers.js:76:38
      at ../../node_modules/@testing-library/react/node_modules/@testing-library/dom/dist/query-helpers.js:52:17
      at getByRole (../../node_modules/@testing-library/react/node_modules/@testing-library/dom/dist/query-helpers.js:95:19)
      at Object.<anonymous> (src/__tests__/integration/ComponentIntegration.test.js:54:30)

  ● Component Integration Tests › should handle Enter key form submission

    TestingLibraryElementError: Unable to find an accessible element with the role "textbox"

    Here are the accessible roles:

      banner:

      Name "":
      <header
        class="App-header"
      />

      --------------------------------------------------
      heading:

      Name "Todo App":
      <h1 />

      Name "Your Tasks (0)":
      <h2 />

      --------------------------------------------------
      button:

      Name "Open settings menu":
      <button
        aria-expanded="false"
        aria-label="Open settings menu"
        class="settings-btn"
      />

      Name "All":
      <button
        aria-pressed="true"
        class="filter-btn active"
      />

      Name "Active":
      <button
        aria-pressed="false"
        class="filter-btn "
      />

      Name "Completed":
      <button
        aria-pressed="false"
        class="filter-btn "
      />

      Name "Add new task":
      <button
        aria-label="Add new task"
        class="fab"
        title="Add new task"
      />

      --------------------------------------------------
      main:

      Name "":
      <main
        class="main-content"
      />

      --------------------------------------------------
      status:

      Name "Loading tasks":
      <div
        aria-label="Loading tasks"
        class="loading"
        role="status"
      />

      --------------------------------------------------

    Ignored nodes: comments, script, style
    <body>
      <div>
        <div
          class="App"
        >
          <header
            class="App-header"
          >
            <div>
              <h1>
                Todo App
              </h1>
              <p>
                Stay organized and get things done
              </p>
            </div>
            <button
              aria-expanded="false"
              aria-label="Open settings menu"
              class="settings-btn"
            >
              ⚙️ Settings
            </button>
          </header>
          <main
            class="main-content"
          >
            <div
              class="task-list-container"
            >
              <div
                class="task-list-header"
              >
                <h2>
                  Your Tasks (
                  0
                  )
                </h2>
                <div
                  class="task-filters"
                >
                  <button
                    aria-pressed="true"
                    class="filter-btn active"
                  >
                    All
                  </button>
                  <button
                    aria-pressed="false"
                    class="filter-btn "
                  >
                    Active
                  </button>
                  <button
                    aria-pressed="false"
                    class="filter-btn "
                  >
                    Completed
                  </button>
                </div>
              </div>
              <div
                aria-label="Loading tasks"
                class="loading"
                role="status"
              >
                Loading tasks...
              </div>
            </div>
          </main>
          <button
            aria-label="Add new task"
            class="fab"
            title="Add new task"
          >
            +
          </button>
        </div>
      </div>
    </body>

      84 |     render(<App />);
      85 |     
    > 86 |     const taskInput = screen.getByRole('textbox');
         |                              ^
      87 |     
      88 |     // Type task and press Enter
      89 |     await user.type(taskInput, 'Task via Enter{enter}');

      at Object.getElementError (../../node_modules/@testing-library/react/node_modules/@testing-library/dom/dist/config.js:37:19)
      at ../../node_modules/@testing-library/react/node_modules/@testing-library/dom/dist/query-helpers.js:76:38
      at ../../node_modules/@testing-library/react/node_modules/@testing-library/dom/dist/query-helpers.js:52:17
      at getByRole (../../node_modules/@testing-library/react/node_modules/@testing-library/dom/dist/query-helpers.js:95:19)
      at Object.<anonymous> (src/__tests__/integration/ComponentIntegration.test.js:86:30)

 FAIL  src/__tests__/AppIntegration.test.js
  ● App Integration Tests › shows empty state when no tasks

    Unable to find an element with the text: No tasks found. This could be because the text is broken up by multiple elements. In this case, you can provide a function for your text matcher to make your matcher more flexible.

    Ignored nodes: comments, script, style
    <body>
      <div>
        <div
          class="App"
        >
          <header
            class="App-header"
          >
            <div>
              <h1>
                Todo App
              </h1>
              <p>
                Stay organized and get things done
              </p>
            </div>
            <button
              aria-expanded="false"
              aria-label="Open settings menu"
              class="settings-btn"
            >
              ⚙️ Settings
            </button>
          </header>
          <main
            class="main-content"
          >
            <div
              class="task-list-container"
            >
              <div
                class="task-list-header"
              >
                <h2>
                  Your Tasks (
                  0
                  )
                </h2>
                <div
                  class="task-filters"
                >
                  <button
                    aria-pressed="true"
                    class="filter-btn active"
                  >
                    All
                  </button>
                  <button
                    aria-pressed="false"
                    class="filter-btn "
                  >
                    Active
                  </button>
                  <button
                    aria-pressed="false"
                    class="filter-btn "
                  >
                    Completed
                  </button>
                </div>
              </div>
              <div
                class="error-message"
                role="alert"
              >
                Failed to fetch tasks: Cannot read properties of undefined (reading 'ok')
              </div>
            </div>
          </main>
          <button
            aria-label="Add new task"
            class="fab"
            title="Add new task"
          >
            +
          </button>
        </div>
      </div>
    </body>

      29 |     render(<App />);
      30 |     
    > 31 |     await waitFor(() => {
         |                  ^
      32 |       expect(screen.getByText('No tasks found')).toBeInTheDocument();
      33 |     });
      34 |   });

      at waitForWrapper (../../node_modules/@testing-library/react/node_modules/@testing-library/dom/dist/wait-for.js:163:27)
      at Object.<anonymous> (src/__tests__/AppIntegration.test.js:31:18)

 FAIL  src/__tests__/SimpleApp.test.js
  ● Simple App Tests › shows empty state message

    TestingLibraryElementError: Unable to find an element with the text: No tasks found. This could be because the text is broken up by multiple elements. In this case, you can provide a function for your text matcher to make your matcher more flexible.

    Ignored nodes: comments, script, style
    <body>
      <div>
        <div
          class="App"
        >
          <header
            class="App-header"
          >
            <div>
              <h1>
                Todo App
              </h1>
              <p>
                Stay organized and get things done
              </p>
            </div>
            <button
              aria-expanded="false"
              aria-label="Open settings menu"
              class="settings-btn"
            >
              ⚙️ Settings
            </button>
          </header>
          <main
            class="main-content"
          >
            <div
              class="task-list-container"
            >
              <div
                class="task-list-header"
              >
                <h2>
                  Your Tasks (
                  0
                  )
                </h2>
                <div
                  class="task-filters"
                >
                  <button
                    aria-pressed="true"
                    class="filter-btn active"
                  >
                    All
                  </button>
                  <button
                    aria-pressed="false"
                    class="filter-btn "
                  >
                    Active
                  </button>
                  <button
                    aria-pressed="false"
                    class="filter-btn "
                  >
                    Completed
                  </button>
                </div>
              </div>
              <div
                aria-label="Loading tasks"
                class="loading"
                role="status"
              >
                Loading tasks...
              </div>
            </div>
          </main>
          <button
            aria-label="Add new task"
            class="fab"
            title="Add new task"
          >
            +
          </button>
        </div>
      </div>
    </body>

      29 |   test('shows empty state message', () => {
      30 |     render(<App />);
    > 31 |     expect(screen.getByText('No tasks found')).toBeInTheDocument();
         |                   ^
      32 |     expect(screen.getByText(/click the \+ button to add your first task/i)).toBeInTheDocument();
      33 |   });
      34 |

      at Object.getElementError (../../node_modules/@testing-library/react/node_modules/@testing-library/dom/dist/config.js:37:19)
      at ../../node_modules/@testing-library/react/node_modules/@testing-library/dom/dist/query-helpers.js:76:38
      at ../../node_modules/@testing-library/react/node_modules/@testing-library/dom/dist/query-helpers.js:52:17
      at getByText (../../node_modules/@testing-library/react/node_modules/@testing-library/dom/dist/query-helpers.js:95:19)
      at Object.<anonymous> (src/__tests__/SimpleApp.test.js:31:19)


Test Suites: 6 failed, 22 skipped, 10 passed, 16 of 38 total
Tests:       28 failed, 23 skipped, 81 passed, 132 total
Snapshots:   0 total
Time:        36.884 s
Ran all test suites.
npm error Lifecycle script `test` failed with error:
npm error code 1
npm error path /workspaces/jg_aitraining2/packages/frontend
npm error workspace frontend@0.1.0
npm error location /workspaces/jg_aitraining2/packages/frontend
npm error command failed
npm error command sh -c react-scripts test --coverage --watchAll=false
@jenny-ghaccount ➜ /workspaces/jg_aitraining2/packages/frontend (feature/context) $ 