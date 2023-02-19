const a = [4, 5, 8, 9]
const b = [3, 4, 5, 7]
const countries = ['Finland', 'Sweden', 'Norway']
const A = new Set(a);
const B = new Set(b);

const c = [...a, ...b];
const setUnion = new Set(c);
console.log(setUnion);

const intersect = a.filter((num) => B.has(num));
console.log(intersect);

const AWithB = a.filter((num) => B.has(num));
console.log(AWithB);