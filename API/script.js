const requestUrl = 'https://api.github.com/users/hetashridk'

const xhr = new XMLHttpRequest();    //XMLHttpRequest is almost a class so have make object

//open only send an http request
//open takes two parameter 
// -> which type of request
//-> secondly url
xhr.open('GET', requestUrl)

//onreadystatechange tracked the api request
xhr.onreadystatechange = () => {    //function which use to tell what to do when state change
    console.log(xhr.readyState);

    if(xhr.readyState === 4){

        // this.responseText will come in object form

        // convert string to JSON
        const data = JSON.parse(this.responseText)
        console.log(typeof data);
        console.log(data.followers);
    }
}

// by writing below libe open will be called
xhr.send();