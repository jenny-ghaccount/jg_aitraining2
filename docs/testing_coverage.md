$ npm test

> copilot-bootcamp@1.0.0 test
> npm run test:frontend && npm run test:backend


> copilot-bootcamp@1.0.0 test:frontend
> npm run test --workspace=frontend


> frontend@0.1.0 test
> react-scripts test --coverage --watchAll=false

  console.error
    Error fetching data: Error: Network response was not ok
        at fetchData (/workspaces/jg_test/packages/frontend/src/App.js:22:15)

      27 |     } catch (err) {
      28 |       setError('Failed to fetch data: ' + err.message);
    > 29 |       console.error('Error fetching data:', err);
         |               ^
      30 |     } finally {
      31 |       setLoading(false);
      32 |     }

      at fetchData (src/App.js:29:15)

  console.error
    Error deleting item: Error: Failed to delete item
        at handleDelete (/workspaces/jg_test/packages/frontend/src/App.js:68:15)

      73 |     } catch (err) {
      74 |       setError('Error deleting item: ' + err.message);
    > 75 |       console.error('Error deleting item:', err);
         |               ^
      76 |     }
      77 |   };
      78 |

      at handleDelete (src/App.js:75:15)

 PASS  src/__tests__/App.test.js
  ✓ edits an item when edit form is used (357 ms)
  App Component
    ✓ renders the header (9 ms)
    ✓ loads and displays items (30 ms)
    ✓ adds a new item (122 ms)
    ✓ handles API error (85 ms)
    ✓ shows empty state when no items (12 ms)
    ✓ deletes an item when handleDelete is called (22 ms)
    ✓ shows error if delete fails (21 ms)

----------|---------|----------|---------|---------|-----------------------------
File      | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s           
----------|---------|----------|---------|---------|-----------------------------
All files |   84.21 |    82.75 |    87.5 |   86.11 |                             
 App.js   |   84.21 |    82.75 |    87.5 |   86.11 | ...7,97,106-107,113-115,159 
----------|---------|----------|---------|---------|-----------------------------
Test Suites: 1 passed, 1 total
Tests:       8 passed, 8 total
Snapshots:   0 total
Time:        1.635 s, estimated 2 s
Ran all test suites.

> copilot-bootcamp@1.0.0 test:backend
> npm run test --workspace=backend


> backend@1.0.0 test
> jest --detectOpenHandles

  console.log
    In-memory database initialized with sample data

      at Object.log (src/app.js:35:9)

GET /api/items 200 4.537 ms - 229
POST /api/items 201 0.780 ms - 78
POST /api/items 400 0.217 ms - 33
POST /api/items 400 0.378 ms - 33
POST /api/items 201 0.313 ms - 81
PUT /api/items/5 200 0.779 ms - 88
PUT /api/items/99999 404 0.257 ms - 26
POST /api/items 201 0.246 ms - 81
PUT /api/items/6 400 0.207 ms - 33
POST /api/items 201 0.382 ms - 87
DELETE /api/items/7 200 0.484 ms - 46
DELETE /api/items/7 404 0.206 ms - 26
DELETE /api/items/999999 404 0.228 ms - 26
DELETE /api/items/abc 400 0.148 ms - 37
 PASS  __tests__/app.test.js
  API Endpoints
    GET /api/items
      ✓ should return all items (61 ms)
    POST /api/items
      ✓ should create a new item (59 ms)
      ✓ should return 400 if name is missing (17 ms)
      ✓ should return 400 if name is empty (21 ms)
    PUT /api/items/:id
      ✓ should update an existing item (20 ms)
      ✓ should return 404 if item does not exist (10 ms)
      ✓ should return 400 if name is missing (29 ms)
    DELETE /api/items/:id
      ✓ should delete an existing item (37 ms)
      ✓ should return 404 when item does not exist (26 ms)
      ✓ should return 400 for invalid id (12 ms)

----------|---------|----------|---------|---------|-----------------------------
File      | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s           
----------|---------|----------|---------|---------|-----------------------------
All files |   84.37 |    89.28 |     100 |   84.37 |                             
 app.js   |   84.37 |    89.28 |     100 |   84.37 | ...4,63-64,75,90-91,114-118 
----------|---------|----------|---------|---------|-----------------------------
Test Suites: 1 passed, 1 total
Tests:       10 passed, 10 total
Snapshots:   0 total
Time:        0.734 s, estimated 1 s
Ran all test suites.
@jenny-ghaccount ➜ /workspaces/jg_test (feature/context) $ 