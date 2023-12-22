// Methods to declare array

const arr = [1, 2, 3, 4, 5]

const arr1 = ["Hetashri", "Kansariwala"]

const arr2 = new Array(9, 10, 11, 12, 13, 14)


//Array Methods
arr.push(7);
console.log(arr);

arr.pop();
console.log(arr);

arr.unshift(10);    //add this 10 value at the start of array
console.log(arr);

arr.shift();    //remove first value of the array
console.log(arr);

const newArr = arr.join() //convert it into string
console.log(newArr);

//slice
console.log("A ", arr2);
const myslice1 = arr2.slice(1, 4)   //print only that index value which is define excluding last one and don't manipulate original array
console.log("slice", myslice1);
console.log("originalarr2", arr2);

//splice
console.log("B ", arr2);
const mysplice2 = arr2.splice(1, 4)   //print only that index value which is define without excluding last one and manipulate original array
console.log("splice", mysplice2);
console.log("originalarr2", arr2);

const hetu = [1, 2, 3, 4];
const kan = [6, 7, 8, "Hetashri", "dk"]
hetu.push(kan);   //will push the another array in form of array only
console.log(hetu);
console.log(hetu[4][3]);

const join = hetu.concat(kan);    //concat method return new array so that's why we have it in new array
console.log("A", join);


//This is spread operator, will used to join array, we can join any numbers of array usong spread operator just by separating with coma (,)
const spreadUse = [...hetu, ...kan]; 
console.log(spreadUse);

// flat method:- will equal give index if there is depth in array 
// depth:- array inside array
const depthEg = [1, 2, [3, 4, [5, 6, 7, [8]], 10], 9];
const another = depthEg.flat(2);
console.log(another);

const another2 = depthEg.flat(Infinity);
console.log(another2);


// from method:- convert things to array
console.log(Array.from("Hetashri"));

//of:- convert set to array
const score1 = 100;
const score2 = 200;
const score3 = 300;
console.log(Array.of(score1, score3, score2));

//isArray method:- to check if it is array or not
console.log(Array.isArray("Kansariwala"));