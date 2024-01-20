function Set(name) {
    this.name = name
    console.log("Called");
}

function create(name, surname, mail){
    //Set(name)   //the set is not being called, as the refernce is not hold. So to hold the reference will write .call
    Set.call(name)   //by writing this it isbeing called, the name is not added in object as the variable are being disappeared in exceution context. So now we have to give the reference so we will give this to set.call(this, name). So it will not use the Set wala this (i.e; not this.name = name), but it will use (this, name) and aa this thi current context mali che
    Set.call(this, name)
    this.surname = surname
    this.mail = mail
}

const name1 = new create("Jhone", "Leon", "xyz@mail.com")
console.log(name1);
