#!/bin/sh

echo "🧪 e2e test:"

PADDING="  "

echo "${PADDING}▶️  Testing ESM..."
PADDING="    "
/usr/bin/env node ./dist/esm/index.js > /dev/null 2>&1
if [ $? -eq 1 ]; then
  echo "${PADDING}✔️ (esm) exit code 1 when env is not specified"
else
  echo "${PADDING}❌ (esm) exit code not 1 when env is not specified"
  exit 1
fi

NODE_ENV=test /usr/bin/env node ./dist/esm/index.js > /dev/null 2>&1
if [ $? -eq 0 ]; then
  echo "${PADDING}✔️ (esm) exit code 0 when env is test"
else
  echo "${PADDING}❌ (esm) exit code not 0 when env is test"
  exit 1
fi

PADDING="  "
echo "${PADDING}▶️  Testing CJS..."
PADDING="    "
/usr/bin/env node ./dist/cjs/index.js > /dev/null 2>&1
if [ $? -eq 1 ]; then
  echo "${PADDING}✔️ (cjs) exit code 1 when env is not specified"
else
  echo "${PADDING}❌ (cjs) exit code not 1 when env is not specified"
  exit 1
fi

NODE_ENV=test /usr/bin/env node ./dist/cjs/index.js > /dev/null 2>&1
if [ $? -eq 0 ]; then
  echo "${PADDING}✔️ (cjs) exit code 0 when env is test"
else
  echo "${PADDING}❌ (cjs) exit code not 0 when env is test"
  exit 1
fi

echo "✅ e2e test passed"
echo "🇺🇦  Support Ukraine!"