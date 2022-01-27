/* global QUnit */
'use strict';

const fs = require('fs');
const path = require('path');

const { ESLint } = require('eslint');

const FILES_DIR = path.join(__dirname, 'files');

const BAD_SUFFIX = '-bad.js';
const GOOD_SUFFIX = '-good.js';

const linter = new ESLint({ overrideConfigFile: 'index.js' });

const files = fs.readdirSync(FILES_DIR);
QUnit.test('there are testing files', assert => {
  assert.notEqual(files.length, 0, 'there should be some test files');
  for (const file of files) {
    assert.ok(file.endsWith(BAD_SUFFIX) || file.endsWith(GOOD_SUFFIX),
      `test files must end with ${BAD_SUFFIX} or ${GOOD_SUFFIX}`);
  }
});

// set up a QUnit test for each file
for (const file of files) {
  if (file.endsWith(BAD_SUFFIX)) {
    QUnit.test(`file ${file} should fail linting`, async (assert) => {
      const text = fs.readFileSync(path.join(FILES_DIR, file), 'utf8');
      const results = await linter.lintText(text);
      const messages = results[0].messages;

      assert.notEqual(messages.length, 0, 'should report linting errors');
    });
  } else {
    QUnit.test(`file ${file} should be good`, async (assert) => {
      const text = fs.readFileSync(path.join(FILES_DIR, file), 'utf8');
      const results = await linter.lintText(text);
      const messages = results[0].messages;

      assert.equal(messages.length, 0, 'should report no linting errors');
      if (messages.length > 0) {
        console.log({ file, messages });
      }
    });
  }
}
