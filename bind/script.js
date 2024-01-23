class React{
    constructor(){
        this.library = "React"
        this.server = "https://localhost:3000"

        document
                .querySelector('button')
                // .addEventListener('click', this.handleClick)   //this will only habe this reference
                .addEventListener('click', this.handleClick.bind(this))   //by writing this, we will get all the access of all this that is         this.library = "React"
                // this.server = "https://localhost:3000" 

    }

    handleClick(){
        console.log("Button clicked");
        console.log(this.server);    //we are not getting this reference as ae kase khovai gayu che but we have this reference  (before writing bind in .addeventlisteners)
        console.log(this);  //by running this we can see that we have this reference   (before writing bind in .addeventlisteners)
    }
}

const app = new React()