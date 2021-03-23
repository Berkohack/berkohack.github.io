'use strict';

const n = 5;
const d = 3.14;
const big = 5n * 3n - 1n;
const s = 'Berkoshko';
console.log({ n, d, big, s });

const b = true;
{
  const b = 7;
  console.log({ b });
}
console.log({ b });

const a = [1, 2, 3];
a.push(7);
console.log({ a });
