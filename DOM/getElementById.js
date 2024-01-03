// input => output

// we will get the value
// document.getElementById('title') => <h1 id="title" class="heading">Welcome to DOM</h1>

// by writing dot we can access different value
// document.getElementById('title').id => title
// document.getElementById('title').class => undefined
// document.getElementById('title').className => heading

// we can get attribute
// in getAttribute we have to pass key and as output we will get value 
// document.getElementById('title').getAttribute('id') => title
// document.getElementById('title').getAttribute('class') => heading

// we can set attribute too
// document.getElementById('title').setAttribute('class', 'test') => the attribute (heading) will change to test 

// we can also do styling
// const title = document.getElementById('title') 
// title.style.backgroundColor = 'red'
// title.style.boderRadius = '15px'

// to extract content
// const title = document.getElementById('title') 
// title.textContent => Welcome to DOM   :- will show the text has been hidden by CSS
// title.innerText => Welcome to DOM   :- will show only that content which is visible on browser
// title.innerHTML => Welcome to DOM    :- will show the text and also the html which have been written in between of that attribute