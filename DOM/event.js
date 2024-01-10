    // document.getElementById('owl').onclick = function(){
    //     alert("owl clicked")
    // }     => not feasible as onclick on provide some functionality. so to get all functionality we willl use event listener as shown below

    // document.getElementById('owl').addEventListener('click', (e) => {
    //     alert("Helllllllllllllllo")
    // }, false)

    // addEventListener has 3 parameter => first the event
    //                                  => second the call back function
    //                                  => true/false => default is false  => event propgation(EP) => EP has two context
    //                                       ->event bubbling:- in market event bubbling is used which is false which is default value
    //                                       ->event capturing


    // bubbling
    // what is bubble:- bubble je niche thi upar jai
    // script inside thi outside track karse to aene apne loko bubbling kesu which is event propogation
    document.getElementById('owl').addEventListener('click', (e) => {
        console.log("owl clicked");
    }, false)
    document.getElementById('images').addEventListener('click', (e) => {
        console.log("ul clicked");
    }, false)



    // capturing
    // capturing is phela top pachi bottom par jase 
    // capturing mate we have to write 3rd paraemter of event Listener as true 

    //for stopping event propogation we will write e.stopPropogation()


    // now if click on google link it will have to redirect so for that we will write e.preventDefault()


    // as soon as we clcik on img, it should be deleted
    document.querySelector('#images').addEventListener('click', function(e){
        console.log(e.target.tagName);
        if (e.target.tagName === 'IMG') {
            console.log(e.target.id);
            let removeIt = e.target.parentNode
            removeIt.remove()
        }
    
        
    })