// fetch works in two part
// response = fetch('something')

// one part goes to handle web browser/node API request => network request
    //web browser based API handle karse or node based API handle karse
    //from web browser/node, ek network request jai
    //network request we cannot fire directly, we need any resource = resource can be provided by browser or node
    // now we got network request - either data will go or not go
    // if data goes and we want any response it will always go in onFulfilled array           (((((404, 200 etc always counted in onFullied array only)))))
    // if data won't goes then it will always go in onRejection array


// second part goes to space handling of variable etc/ memory space reservation which is data (data is the specific name)
    //we have two array - onFulfilled[] for Promise resolve, onRejection[] for Promise reject
    //we are not allowed to directly push the value innthis two arrays as they are not in our range, they are private
    //Data is also a private field
    // intially data value is empty
    // when the network reuqest wala kam done then in both array you will get the function and that function is responsible to fulfilled the memory
    //ek vara data ma values fulfilled thy gayi then we had made a variable response which available in global memory so have data ni responsibility che ke te response variable ne fulfill kare