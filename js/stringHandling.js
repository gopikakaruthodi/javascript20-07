let a=" 1-2-3-4-5-6-7-8-9 "
console.log(a)
console.log(a.length);
console.log(a.toUpperCase());
console.log(a.toLowerCase());
console.log(a.trim());
console.log(a.trimStart());
console.log(a.trimEnd());
console.log(a.substring(0,6));
console.log(a.replace('world','All'));
console.log(a.slice(2,10));
console.log(a.startsWith(' 1-'));
console.log(a.endsWith('-9 '));


ar=a.split("-")
console.log(ar);

str=ar.join(" ")
console.log(str);

console.log(a.charAt("7"));
console.log(a.slice(2,6));