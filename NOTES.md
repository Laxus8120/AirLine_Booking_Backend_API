# Steps - 

* we will install few dependencies are required to complete the project .
    ### DEPENDENCIES WE WILL INSTALL
    ##
    * express.
    * body-parser  // TO ACESS THE BODY PARAM
    * nodemon 
    * dotenv   // setup enviroment variable      

## How we creating fodler

    -/src 
        -index.js  // main server file 
        - models/  // how the data base look like
        -controller  // 
        -middleware
        -services
        -utils  // any extra utility fucntion set of constant to add something its like a helper file or helper folder.
        -config  // database configuration
        -repository   //

    -/test (Later)

## To save sensitive information

> to save the sensitive information we use enviroment information.

### what are enviroment information ?
* It is a dynamic name value which can affect the way of running process.
* The value of these value can change over time And we can manually change it .
* And, you dont need to save this variable in your project, what you can do is save these variable in your enviorment.
* To setup enviroment variable in node , we have to install a package called `dotenv`.

### How you can setup dotenv ?

* First thing you have to do in your project create a file `out the src folder`.
* the file name  ==> .env
* Inside this file put any variable and give it a value.
* we create file now we have to require it.
    - To require this we create a diff file (seprated from our index.js) in our config folder.
    - and there we export the enviroment variable.
      
