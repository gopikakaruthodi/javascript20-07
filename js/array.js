let arr=[1,'hai',true,null,10,'hello',false]
console.log(arr.length);
// console.log(arr.reverse());
console.log(arr.indexOf(false));
console.log(arr.join(" "));
console.log(arr.splice(2,4));
console.log(arr.slice(1,4));
// arr.push(10)
// console.log(arr);

// arr.pop(false)
// console.log(arr);

// console.log(arr.shift());
// arr[2]='hello'
// console.log(arr);

arr[arr.indexOf('hello')]="good"
console.log(arr);