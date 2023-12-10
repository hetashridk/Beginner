console.log("2" > 1);   //true => as it has converted "2" to number
console.log("02" > 1);  //true => as it has converted "02" to number



console.log(null > 0);  //false
console.log(null == 0); //false
console.log(null >= 0); //true
//the reason for above 3 that is false, false, true is equality check (==) and comparison (> < <= >=) work differently
//comparion converts null to a number, treating it as 0, so that why 3rd statement gives true


console.log(undefined == 0);
console.log(undefined > 0);
console.log(undefined >= 0);


//strict check
// ===:- also check data type and their values too
console.log("2" == 2);   //give true
console.log("2" === 2);   //give false