function finite(value: number, min = -Number.MAX_VALUE, max = Number.MAX_VALUE): number {
  if (typeof value !== 'number' || !Number.isFinite(value))
    throw new TypeError('Expected finite number');
  if (value < min || value > max) throw new RangeError('Number outside supported bounds');
  return value;
}
function integer(value: number, min = 0, max = 1000000): number {
  if (!Number.isSafeInteger(value)) throw new RangeError('Expected safe integer');
  return finite(value, min, max);
}
export function catalan(n: number): bigint {
  integer(n, 0, 2000);
  let c = 1n;
  for (let i = 0; i < n; i++) c = (c * 2n * BigInt(2 * i + 1)) / BigInt(i + 2);
  return c;
}
