// Nullish Coalescing Ooperator (??)

let val1 = 5 ?? 10;
console.log(val1);   //will print 5

let val2 = null ?? 10;
console.log(val2);   //will print 10

let val3 = undefined ?? 10;
console.log(val3);   //will print 10

let val4 = undefined ?? 10 ?? 20;
console.log(val4);   //will print 10 as it will always print first value