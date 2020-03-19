/* global QUnit */
'use strict';

const fs = require('fs');
const path = require('path');

const eslint = require('eslint');

const FILES_DIR = path.join(__dirname, 'files');

const BAD_SUFFIX = '-bad.js';
const GOOD_SUFFIX = '-good.js';

QUnit.test('test files', function (assert) {
  const linter = new eslint.CLIEngine({ configFile: 'index.js' });

  const files = fs.readdirSync(FILES_DIR);
  assert.notEqual(files.length, 0, 'there should be some test files');

  for (const file of files) {
    assert.ok(file.endsWith(BAD_SUFFIX) || file.endsWith(GOOD_SUFFIX),
      `test files must end with ${BAD_SUFFIX} or ${GOOD_SUFFIX}`);

    const text = fs.readFileSync(path.join(FILES_DIR, file), 'utf8');
    const report = linter.executeOnText(text);
    const messages = report.results[0].messages;

    if (file.endsWith(BAD_SUFFIX)) {
      assert.notEqual(messages.length, 0, `file ${file} should be bad but lints as good`);
    } else {
      assert.equal(messages.length, 0, `file ${file} should be good but has linting errors`);
      if (messages.length > 0) {
        console.log({ file, messages });
      }
    }
  }
});


// todo test files in tests/files bad and good; shout if neither good or bad
