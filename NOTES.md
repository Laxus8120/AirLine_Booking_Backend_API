# Steps - 

* we will install few dependencies are required to complete the project .
    ### DEPENDENCIES WE WILL INSTALL
    ##
    * express.
    * body-parser               // TO ACESS THE BODY PARAM
    * nodemon 
    * dotenv                    // setup enviroment variable      
    * sequilize                 // ORM(object realtional Mapping)

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

## To save sensitive Variable

> to save the sensitive information we use enviroment variable.

### what are enviroment variable?
* It is a dynamic name value which can affect the way of running process.
* The value of these value can change over time And we can manually change it .
* And, you dont need to save this variable in your project, what you can do is save these variable in your enviorment.
* To setup enviroment variable in node , we have to install a package called `dotenv`.

### How you can setup dotenv ?

* First thing you have to do in your project create a file `out the src folder`.
* the file name  ==> .env
* Inside this file put any variable and give it a value.
* we create file now we have to require it.
    - To require this we create a diff file (seprated from our index.js) in our `config folder`.
    - and there we export the enviroment variable.

> NOTE - In .env file you cannot end with anything with semicolon.

## Now we setup Sequileze 

> Sequilize(ORM) will Map that relational model into object oriented model.

## one more package sequilize-cli

> It will setup so many things automatically . like :-
> setup all the server configuration.

## mysql2 package 

> In order to connect sequilize with mysql we need this dependencies 
> It provide the setup of driver to connect to the mysql data base .

*** AFTER WE INSTALL THESE 3 PACKAGE NOW WE NEED TO DO SOME EXTRA STEPS ***
> We need to config sequelize ORM.So, it is able to use mysql2 in order to connect to the corresponding mysql database and create a data base.

> In order to that we can use `sequelize cli` package. - It provide us the command with which we can create the database and other things.

### STEPS TO CONFIGURE SEQUELIZE 

 *** Step 1 ***
> before creating database we have to do configuration using ` npx sequelize init` .
> After we do this we see we get folders like migration , seeders , config.

### Seeders folder

> If you want to put dummy data in your database. 

### Migration Folder
> MIgration help you to do incremental changes(incremental changes means add, update , delette anything ) to your table.
> incremental means it maintain the log of every changes you did in your table , and help you to choose the migration you want 
or wanna remove .


### Config 
>

*** Step 2 ***
> Go to the config file which get created after we `sequelize init` and write the configuaration.
    - password : "**********"
    - username  : "root"
    - database : "Flight_Search_DB_DEV"
> After `config`  now we use the command to create the database ==> `npx sequelize db:create`(NOTE - make sure you are in correct directory where you have your config.json file ).

### ----------------------------------------------------------------------------------------------------------------------------

## IMPLEMENTING TABLES 
![DB_Tables](https://user-images.githubusercontent.com/99763066/209309552-36f32ece-d2a2-442a-8647-4fefbc0cedf8.jpg)


## LETS START CREATING THE TABLE 

### HOW WE CREATE THE TABLE ?

### STEPS for sequelize-cli

*** Step - Creation of table we use  -
*` npx sequelize model:generate --name City --attributes name:String `(we are in our src folder because every config is done here )
* After running upper command a new model name `city.js` will be created in our models folder.
* In this city.js file we have our city class .(NOTE - if you dont use sequelilze-cli you have to create this class manually . So, this is the advantage of using sequelize-CLi).
* THE upper commmand also did one more things - it created a migration file , and this migration folder have our default  coloumn like ID , Updated_AT , Created AT and also it constain the more attribute like it cannot be null . 
* If we try to see the data we cannot see it because ?
*we have to sync to see the tables, 
    `npx sequelizq db:migrate ` What is db:migrate ? ==> It migrate your Db , whatever new migration are there  which might not be applied yet will be applied .
* Now , it sync the new migration , now if we do `show tables` it contain the tables we created and a new table which is `sequqlize_meta data ` .
* And this metadata contain all the migration we done in our database. 

> NOTE `Naming CONVENTION ` -   * Table name has to be plural 
                                * Model class have to singular name 
                                 
*** _Advantage of Using sequelize-Cli_ ***
> NOTE - IN SEQULIZE CLI every table have attribute like created_AT and updated_AT , ID  coloums by default in every table.
> NOTE - sequelize-cli helps us to make models , migration and many more things automatically or else you have to do on your own.

> *** NOTE - What ever you make changes is migration file it is actually in the table level and when you are interacting with your table with javascript file(city.js model) then you dont have to care about it .***

### ------------------------------------------------------------------------------------------------------------------------------

### HOW TO INTERAct WITH THE MODEL  ?

> NOTE - TECHNICALLY ALL THE INTERACTION WITH MODEL SHOULD BE HAPPEN FROM THE REPOSITORY LAYER.

> *** SO WE WRITE THE REPOSITORY CLASS ***

*** _STEPS_ ***

* we create a city-Repository.js in our repo folder.
*NOW, in order to city-repo work properly we need to have access to the model because every model have these function e.x - User.Create().
*So, we require the model - ` const City  = require('/model/index.js') `
> We are requiring the index.js because the index.js file is going to return all the model we are going to put in our Models package.

> *** NOTE - The right way to interact with the model is in the repository, So in the repository we write the code that should help us actually to create the  city , update the city all of these things ***

### ----------------------------------------------------------------------------------------------------------------------------

### SO LETS START WRITING OUR REPOSITORY FOLDER

> In the repository we are going to write all of the code which actually going to interact with the models.
> _NOTE - REPOSITORY Layer is also responsible for communicating with any data source this data source can be your DB or we are fetching data from somewhere else , we are going to fetch it from repository layer._
>For.ex - create city , deleteCity.

< NOTE - if you want to update at a table level then it is better to create a migration >
## -------------------------------------------------------------------------------------------------------------------------------

> NOTE - TO make code clean try to write all the reuire module in one obejct  like we did in `/repository/index.js` and then you can require it by destructured the object .

< NOw lets wrting our city-service layer 
``` class cityService {
    constructor(){

    }
}
```
>

> Here we make a city repo object or key(this.cityRepository = new CityRepository())

* Now, we have cityService in place, this service technically call from controller(right now we dont have multiple service with us but there will be so we can do the same we create a new file index.js and try to export every service as a object and then we  can import this index.js file anywhere).

### now create our first controller (city_controller.js)
* Here we creating our different controller (create, update , destroy , get)
* we are requiring cityService.
* In order to use cityService we need to create the cityservice object.
we create a global cityService Object ` const cityService  = new CityService()` i now we can use this everywhere.

### AFTER Completing our controllers now move on to ROUTES.

### HERE we are going to use express Router.
### WHAT IS EXPRESS ROUTER
> It is a powerfullway in order to write the clean code .
>Use the `exprss.Router` class to create a `modular`(Seprate things at seprate places wherever it concerns), mountable route handler.
> Using this we can reduse the way of writing the redundant piece of code again and again.
> // img/module.exports

### CREATING ROUTE FOLDER
> CREATING new file index.js
> Create a router function.
> creating a viAPiRoute which route to the v1 folder.
> Now, we put all our v1 Api route in this folder.(Creating a index.js file)
> Now , we put a middleware which segregate the v1 route to the v1APiRoute folder.
> NOW, route the v1 folder.
> now lets require our cityController.
> now setup the type of req(create , upadate , delete ).
< Let's say there is just an api call how are we going to route an api call to these v1 and v2 version we made in future, how are we going to route them ? >
> So, we are going to create a new route in our `flightAndSearchService/index.js`.
> Creating a ApiRoutes object which route to the `const ApiRoute = Route/index.js`.
> Now, how can we map this route object we write `app.use('/api',ApiRoutes)`, here every api req req are now map with the ApiRoutes object .




# Now we will be using this city repo in order to actually implement an APi using with which we will create city in our database. 

