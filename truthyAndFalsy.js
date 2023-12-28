// falsy value:- which will return false
// false, 0, -0 0n (BigInt), "", null, undefined, NaN

// truthy value:- which will return true
// "0", "false", '0', 'false', " ", [], {}, function(){}

// to check if array is empty or not
const emptyArray = []
if(emptyArray.length == 0){
    console.log("Empty array");
}

// to check if object is empty or not
const emptyObject = {}
if(Object.keys(emptyObject).length == 0){    //Object.keys(emptyObject):- will convert the object into array so that we have .length method of array
    console.log("Empty Object");
}

// false == 0 => gives output as true
// false == '' => gives output as true
// 0 == '' => gives output as true