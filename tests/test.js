import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

import { ESLint } from 'eslint';
import * as prettier from 'prettier';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT_DIR = path.join(__dirname, '..');

const BAD_SUFFIX = '-bad.js';
const GOOD_SUFFIX = '-good.js';

// Fixtures whose relative imports (./package.json, ./index.js, ...) are resolved
// as if the linted text lived in the repository root.
const VIRTUAL_FILE = path.join(ROOT_DIR, '__fixture__.js');

function assertSuffixes(assert, files, label) {
  assert.notEqual(files.length, 0, `there should be some ${label} files`);
  for (const file of files) {
    assert.ok(
      file.endsWith(BAD_SUFFIX) || file.endsWith(GOOD_SUFFIX),
      `${label} files must end with ${BAD_SUFFIX} or ${GOOD_SUFFIX}`,
    );
  }
}

// --- Code-quality fixtures: enforced by ESLint --------------------------------

const FILES_DIR = path.join(__dirname, 'files');
const qualityFiles = fs.readdirSync(FILES_DIR);
const linter = new ESLint({
  overrideConfigFile: path.join(ROOT_DIR, 'index.js'),
});

QUnit.test('there are code-quality testing files', (assert) => {
  assertSuffixes(assert, qualityFiles, 'code-quality');
});

for (const file of qualityFiles) {
  const text = fs.readFileSync(path.join(FILES_DIR, file), 'utf8');
  const lint = async () => {
    const results = await linter.lintText(text, { filePath: VIRTUAL_FILE });
    return results[0].messages;
  };

  if (file.endsWith(BAD_SUFFIX)) {
    QUnit.test(`file ${file} should fail linting`, async (assert) => {
      const messages = await lint();
      assert.notEqual(messages.length, 0, 'should report linting errors');
    });
  } else {
    QUnit.test(`file ${file} should be good`, async (assert) => {
      const messages = await lint();
      assert.equal(messages.length, 0, 'should report no linting errors');
      if (messages.length > 0) {
        console.log({ file, messages });
      }
    });
  }
}

// --- Formatting fixtures: enforced by Prettier --------------------------------

const FORMAT_DIR = path.join(__dirname, 'format');
const formatFiles = fs.readdirSync(FORMAT_DIR);

QUnit.test('there are formatting testing files', (assert) => {
  assertSuffixes(assert, formatFiles, 'formatting');
});

for (const file of formatFiles) {
  const filePath = path.join(FORMAT_DIR, file);
  const text = fs.readFileSync(filePath, 'utf8');
  const isFormatted = async () => {
    const options = await prettier.resolveConfig(filePath);
    return prettier.check(text, { ...options, filepath: filePath });
  };

  if (file.endsWith(BAD_SUFFIX)) {
    QUnit.test(
      `file ${file} should not be Prettier-formatted`,
      async (assert) => {
        assert.notOk(
          await isFormatted(),
          'Prettier should report reformatting needed',
        );
      },
    );
  } else {
    QUnit.test(`file ${file} should be Prettier-formatted`, async (assert) => {
      assert.ok(
        await isFormatted(),
        'Prettier should report no changes needed',
      );
    });
  }
}
