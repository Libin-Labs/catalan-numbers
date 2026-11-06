import { catalan } from '@lp-labs/catalan-numbers';
if (catalan(7) !== 429n) throw new Error('Sequence');
// @ts-expect-error invalid argument must be rejected by declarations
catalan('2');
