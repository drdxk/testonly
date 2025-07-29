# testonly

Importing this file when `NODE_ENV !== 'test'` throws an error.

This allows marking `.js` / `.ts` files as "test only" by importing this
package. Import should be done as a side effect import.

Recommendation: make it the first import in your files.

## Usage

```typescript
// my-test-util.ts
import '@drdxk/testonly';
```

```javascript
// my-legacy-test-util.cjs
require('@drdxk/testonly');
```
