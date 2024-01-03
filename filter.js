const nums = [1, 2, 3, 'Hetashri', 'Kansariwala', 6, 7]

// filter will always return so see below thing
const filterVar = nums.filter( (num) => num > 5)
console.log(filterVar);

        //or

const filterVar2 = nums.filter( (num) => {     //as scope comes into picture that is {} so have to write return
    return num > 2
})
console.log(filterVar2);


//  we can do the above thing using forEach but it just we have to add logic
const forEachFilter = []
nums.forEach((num) => {
    if(num > 1){
        forEachFilter.push(num)
    }
})
console.log(forEachFilter);


// filter in object
const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

  const booksFilter = books.filter( (book) => book.genre === 'History')
                                             //or
//   const booksFilter = books.filter( (book) => {return book.genre === 'History'})
console.log(booksFilter);

const twoFilter = books.filter( (book) => book.genre === 'History' && book.publish > 1995)
console.log(twoFilter);