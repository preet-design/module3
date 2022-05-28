

let a = [1, 2, 2, 3, 4, 5, 5];

let s = new Set([...a]);

console.log(s);

for (let i = 1; i < 5; i++) { s.delete(i); }

console.log(s);

s.clear();

for (let i = 1; i < 5; i++) { s.add(i); }

console.log(s);

for (let i = 1; i < 5; i++) { s.add(i); }

console.log(s);