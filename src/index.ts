/**
 * Importing this file when NODE_ENV !== 'test' throws an error.
 *
 * This allows marking .js/ts files as "testonly" by importing this package.
 * Import should be done as a side effect import.
 * Recommendation: make it the first import in the file.
 *
 * @example
 * ```ts
 * import '@drdxk/testonly';
 * ```
 *
 * @example
 * ```ts
 * require('@drdxk/testonly');
 * ```
 */

if (process.env.NODE_ENV !== 'test') {
  throw new Error('@drdxk/testonly import in non-test environment.');
}

export {};
