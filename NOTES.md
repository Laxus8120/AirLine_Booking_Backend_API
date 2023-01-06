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
    `npx sequelize db:migrate ` What is db:migrate ? ==> It migrate your Db , whatever new migration are there  which might not be applied yet will be applied .
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

## Now , we work on Airport table 

> Note - we have to create a Relationship --> City has many airports and Airports belong to a city (one to many).

Steps 

* Let's create a new model using sequelize 
    `npx sequelize model:generate --name Airport --attributes name:String,addrress:String,cityId:Integer` (make sure we are in src where all our configuration are  done).
* Now, we created a new migration file and a new model name - Airport.js
> Note - Right now you cannot see this change in your Mysql tables.

* We are putting constraints manually like `allowNull` in migration mile and model file.

* Now, we need to do the Association 
    - we need to do one to many association , we want airport belong to the city and City to have many airports.

### How we can build Relationship or Association  Sequelize ?
* Now, open city model,
* Now, in every model file we see a `associate method` in this associate method we define our association one - to - one , one - to - many me generally mention here only .
* In city associate method -
    
        ```javascript
        this.hasMany(models.Airport, {
            foreignKey: 'cityId',
        })


* here, `this` belongs to city object.
* in `hasMany` put the model with which you have hasMany association.
* And we have to put foreignKey .
// We have to do one more association from `airport`

        ``` javascript
        this.belongsTo(models.City, {
        foreignKey :'cityId',
        onDelete : 'CASCADE'
      })
        ```
* here, this belongs to airport class object.
* here , airport  `belongsTo` City.
* what is onDelete ? => if i delete the city from the table all the airports belong to that city also get deleted.
so, we can put this onDelete :'CASCADE' and now if you delete the city you also delete the corresponding airports.
* this is how we setup the assosiation.

>Note - we have to make changes in migration file also,

    ```javascript
    cityId: {
        type: Sequelize.INTEGER,
        onDelete : 'CASCADE',
        references : {
          model :'Cities',
          key : 'id',
          as : 'cityId'
        }
    }
    ```
* we have to put refrences. that this cityId is refering as a foreign key  from a diff table.
* Here we bind it from the city model that, `id` from the city model and that `id` act as `cityId` that we refering here.

>NOTE - The Benefit of doing this association is that now the `JOINS` query are going to be so much easy.
##

### There is a seeder folder ?
* seeder will help you to seed some data or put some starting data or value in your database 
* In order to create a seeder the command we use is 
    `npx sequelize seed:generate --name add_airports`
* A new seeder file created in `seeder folder`
* Writing dummy data in seeder file .
    ```javascript
      await queryInterface.bulkInsert('Airports',[
    {
      name :'Kempegowda International Airport',
      cityId : 2,
      createdAt : new Date(),
      updatedAT : new Date()
    },
    ],{})
    ```
    
    // queyInteface - this helps seeders file to communicate to mysql and execute the query 
    // bulkInsert  - you can insert more than one data.

* After writing seeder file now we need to seed them all 
        `npx sequelize db:seed:all`
* now what it do is , all your seeder file now start seeding.
* Now. we do `Select * FROM AIRPORTS` we can see our dummy data
>NOTE - So  when you are developing you dont need to setup APi every time we can use seeded data

### There something called `include query` ? to see the data with which multiple model is associated. 
### How we can get a custom DATA ? 
### There Something called Model synchronysation?

// Custom_data_sync_modelsjs.img

### Why we need sync of db ?
>Note - Wherever we create a new model we have to do db:sync

## -----------------------------------------------------------------------------------------------------------------------

### Creating Airplane model 

Steps -
* create model with command - `npx sequelize model:generate --name Airplane --attributes modelNumber:String,capacity:integer`
* making changes in aiplane model 
    ```javascript
    Airplane.init({
    modelNumber:{
      type : DataTypes.STRING,
      allowNull : false
    },
    capacity:{
      type : DataTypes.INTEGER,
      allowNull : false,
      defaultValue : 200 
    },
  }
  ```
* Same changes making in `airport Migration`
* Now, migrate these changes in our `Mysql` using commmand 
        ` npx sequelize db:migrate`
* Creating seed file
    `npx sequelize seed:generate`
*Adding some details, in seed file

    ```javascript
    await queryInterface.bulkInsert('Airplanes', [{
      modelNumber : 'Boeing 747',
      capacity    : 320,
      createdAt : new Date(),
      updatedAT : new Date()
    }
    ```
* Adding seeding file to db
        ` npx sequelize db:seed:all`
* Now, these changes are shown in your DB table.

## --------------------------------------------------------------------------------------------------------------------------

### Let's Create Flights Model

Steps
* Create Model using -  
        ` npx sequelize model:generate --name Flights, --attributes flightNumber:String,airplaneId:Integer,departureAirportId:Integer,arrivalAirportId:Integer,arrivalTime:Date,departureTime:Date,price:Integer,boardingGate:String,totalSeats:Integer`
* Adding Constarints in `flight Model file` and `Migration file`.
* to make these changes in db table level we need to use command .
        `npx sequelize db:migrate`
* The table is created in our Mysql in db level.

>NOW, we are doing `MVC files` of flight.
>Repository Layer is has a fucntion to create flight etc.
>Service Layer is going to also have function to create and this fucntion is going to have some  `data` field which it gets from controller.
> Lets's talk about what the controller going to send in `data` =>
        /**
        *{
        *  flightNumber,
        * airplaneid,
        *    departureAirportId,
        *    arrivalAirportId,
        *    arrivalTime,
        *    departureTime,
        *    price,
        *    totalSeats   -->  this field is taken from airplane Repository                
        *}
        */
> here we create a object of airplaneRepository class also .
    ```javascript
        const airplaneRepository = new AirplaneRepository()
        const airplane = airplaneRepository.getAirplane(data.airplaneId)
    ```
