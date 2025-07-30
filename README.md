# mark-testonly

Importing this file when `NODE_ENV !== 'test'` throws an error.

This allows marking `.js` / `.ts` files as "test only" by importing this
package. Import should be done as a side effect import.

Recommendation: make it the first import in your files.

## Installation

```shell
npm install mark-testonly --save
```

> _**Why not `--save-dev`?** Because this package might get lost in production,
> and instead of throwing it would produce a missing import error, which might
> be a bit more confusing._

## Usage

### Mark a file as test-only

Simply import as a side effect in a test file to mark that file as test-only:

```typescript
// my-test-util.ts
import 'mark-testonly'; // This throws in non-test environment

// .. rest of the file
```

```javascript
// my-legacy-test-util.cjs
require('mark-testonly'); // This throws in non-test environment

// .. rest of the file
```

It doesn't matter where exactly it is imported, however it is recommended to
import it as the first import in the file.

> _**Reminder**: import declarations are
> [hoisted](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import#hoisting)._

### Mark a function as test-only

```typescript
// my-lib.ts
import {setTestOnly} from 'mark-testonly/fn';

export function setTestingHooks() {
  setTestOnly(); // This throws in non-test environment
  // ...function logic...
}
```
