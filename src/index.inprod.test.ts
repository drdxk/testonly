import path from 'node:path';
import {fileURLToPath} from 'node:url';

import {describe, it, expect, beforeEach, afterEach} from 'vitest';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

describe('index - "prod" environment', () => {
  let originalNodeEnv: string | undefined;

  beforeEach(() => {
    originalNodeEnv = process.env.NODE_ENV;
    process.env.NODE_ENV = 'test';
  });

  afterEach(() => {
    process.env.NODE_ENV = originalNodeEnv;
  });

  it('throws in non-test-environment', async () => {
    const filename = path.join(__dirname, 'index.js');
    process.env.NODE_ENV = 'production'; // Set NODE_ENV to a non-test value
    try {
      await import(filename);
      expect.fail('Module did not throw as expected');
    } catch (error) {
      expect(error).toBeInstanceOf(Error);
      expect(error).toHaveProperty('message', 'mark-testonly import in non-test environment.');
    }
  });
});
