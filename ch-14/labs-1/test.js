'use strict';

const { spawnSync } = require('child_process');
const assert = require('assert');

const { status, stdout } = spawnSync(process.argv[0], [__dirname]);

assert.notStrictEqual(status, 0, 'must exit with a non-zero code');
assert(stdout !== null, 'stdout should not be null');
assert.match(
  stdout.toString(),
  /win32/i, // Update the regular expression to match with win32
  'must output OS identifier'
);

console.log('passed!');
