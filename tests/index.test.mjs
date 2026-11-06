import assert from 'node:assert/strict';
import test from 'node:test';
import * as api from '../dist/esm/index.js';
test('reference prefix', () => {
  assert.deepEqual(
    Array.from({ length: 8 }, (_, i) => api.catalan(i)),
    [1n, 1n, 2n, 5n, 14n, 42n, 132n, 429n],
  );
});
test('zero index', () => {
  assert.equal(api.catalan(0), 1n);
});
test('recurrence or independent count', () => {
  for (let n = 1; n < 15; n++) {
    let sum = 0n;
    for (let k = 0; k < n; k++) sum += api.catalan(k) * api.catalan(n - 1 - k);
    assert.equal(api.catalan(n), sum);
  }
});
test('upper bound', () => {
  assert.equal(typeof api.catalan(2000), 'bigint');
});
test('invalid ranges', () => {
  assert.throws(() => api.catalan(-1));
  assert.throws(() => api.catalan(2001));
  assert.throws(() => api.catalan(1.5));
});
test('type contract', () => {
  assert.throws(() => api.catalan('2'));
});
