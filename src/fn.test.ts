import {describe, it, expect, beforeEach, afterEach} from 'vitest';

import {setTestOnly} from './fn';

describe('setTestOnly', () => {
  let originalNodeEnv: string | undefined;

  beforeEach(() => {
    originalNodeEnv = process.env.NODE_ENV;
    process.env.NODE_ENV = 'test';
  });

  afterEach(() => {
    process.env.NODE_ENV = originalNodeEnv;
  });

  it('does not throw in test environment', () => {
    expect(() => setTestOnly()).not.toThrow();
  });

  it('throws in non-test environment', () => {
    process.env.NODE_ENV = 'production'; // Simulate non-test environment

    expect(() => setTestOnly()).toThrow('setTestOnly() executed in a non-test environment.');
  });
});
