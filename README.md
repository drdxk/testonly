# testonly

Importing this file when NODE_ENV !== 'test' throws an error.

This allows marking .js/ts files as "testonly" by importing this package. Import
should be done as a side effect import. Recommendation: make it the first import
in the file.

## Usage

```typescript
// my-test-util.ts
import 'testonly';
```

```javascript
// my-legacy.cjs
require('testonly');
```
