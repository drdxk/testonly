/**
 * Throws an error if executed when NODE_ENV !== 'test'.
 *
 * Call this function to mark codepath (usually a function) as test-only.
 *
 * @example
 * ```ts
 * import { setTestOnly } from 'mark-testonly';
 *
 * export function setTestingHooks() {
 *   setTestOnly();
 *   // ...rest of the function logic...
 * }
 * ```
 */
export function setTestOnly() {
  if (process.env.NODE_ENV !== 'test') {
    throw new Error('setTestOnly() executed in a non-test environment.');
  }
}
