import path from 'node:path';
import {fileURLToPath} from 'node:url';

import {describe, it, expect, beforeEach, afterEach} from 'vitest';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

describe('index - "test" environment', () => {
  let originalNodeEnv: string | undefined;

  beforeEach(() => {
    originalNodeEnv = process.env.NODE_ENV;
    process.env.NODE_ENV = 'test';
  });

  afterEach(() => {
    process.env.NODE_ENV = originalNodeEnv;
  });

  it('does not throw in test environment', async () => {
    if (process.env.NODE_ENV !== 'test') {
      throw new Error('testonly import in non-test environment.');
    }

    const filename = path.join(__dirname, 'index.js');
    const module: unknown = await import(filename);
    expect(module).toBeDefined();
  });
});
