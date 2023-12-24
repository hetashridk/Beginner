// destructing of object

const address = {
    city: "Surat",
    state: "Gujarat",
    country: "India"
}

console.log(address.country);

// if we don't want to write address.country or if we want to write many times address.country then we will destructure as shoown below
const {country} = address;
//     {key/property} = object name
console.log(country);

const {country: cou} = address;
//     {key/property: another name we want to give} = object name
console.log(cou);

// the use of destructing is shown below in react
function navbar({items}) {     //{items} :- destructing
    
}

//in place of props.items we will use {items} that is destructing

navbar(items = "gallery")