import path from 'node:path';
import {fileURLToPath} from 'node:url';

import {describe, it, expect} from 'vitest';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

describe('index - "prod" environment', () => {
  it('throws in non-test-environment', async () => {
    if (process.env.NODE_ENV !== 'test') {
      throw new Error('testonly import in non-test environment.');
    }

    const filename = path.join(__dirname, 'index.js');
    process.env.NODE_ENV = 'production'; // Set NODE_ENV to a non-test value
    try {
      await import(filename);
      expect.fail('Module did not throw as expected');
    } catch (error) {
      expect(error).toBeInstanceOf(Error);
      expect(error).toHaveProperty('message', 'testonly import in non-test environment.');
    } finally {
      process.env.NODE_ENV = 'test'; // Reset NODE_ENV to test
    }
  });
});
