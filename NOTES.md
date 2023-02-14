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
* Ceater Model using -  
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
> Doing similar thigs we did for CRUD

## 

### utils Files

* The file which which access in most of the scnerio again and again we can put these types of function in utils
* So, we added a helper file which can be use again.

##

### Adding filter 

// Object.AssignExample.img

### --------------------------------------------------------------------------------------------------------------------------

### implementing CRUD repository

>In our file we have so many models which are generally doing simple action like creating, updating and deleting stuff.
>so CRUD action are common on all these files so we are going to make a singel file which do all this stuff and we dont have any repeattive stuff.

* Creating crudRpository file which will have all the crud basic function.
* in crudRpository file we pass the models we have and perform operation.
* let's similarly create a serviceRepository file which do similar task.

### STEP - 1 - Setting up first middleware 

* the flight-middleware check whether the data coming from client is correct or not.
>NOTE -  A middleware is a fucntion which has the access of `req` object ,`res` object ,`next()` middleware. 

### STEP - 2 - ADDING CHECKING OBJECT IN CONTROLLER

* In our controller folder we know that the middleware check that all the field are available by client but if client send more data then needed then we can check in controller layer too.

*   ```javascript
    try {
            const flightRequestData= {
                flightNumber : req.body.flightNumber,
                airplaneId : req.body.airplaneId,
                departureAirportId : req.body.departureAirportId,
                arrivalAirportId : req.body.arrivalAirportId,
                arrivalTIme : req.body.arrivalTIme,
                departureTime : req.body.departureTime,
                price : req.body.price
            }
            const flight = await flightService.createFlight(flightRequestData);
    ```          
* using this `flightRequestData` object we only take the data from req.body what we needed for createflight().

### ------------------------------------------------------------------------------------------------------------------------------

## SETTING UP AUTH SERVICE (AUTH = AUTHORISATION + AUTHENTICATION)

>NOTE - **Authentication verifies the identity of a user or service, and authorization determines their access rights.**

### HOW TO DO AUTHENTICATION ?

* A moblie no. - authentication because one moblie no. has only one user.
* Omni Auth - it means you have third party service for e.x - gitHub/facbook/Gmail and these service did authentication for you.
* TOken based Authentication - we are going to build this in our project.

### in TOKEN BASED AUTHENTICATION 

* In token absed authentication we generally hear this word often - ( JWT ?)
* // tokenauthentication.img

* Now, the server dont stored the token on server side then whenver the client send the req with his token, how server know the  user is authenticated ? 
* And for this purpose we use somthing called JWT .
> JWT stand for - ***JSON WEB TOKEN(JWT)***
* To generate the JWT token ,we acutally use the  client credentials.
* // JWT token.img

* we know the the server not gonna save any token.
* so what we do is every time the client send the token with req we try to dycrypt it with some algo and from that if we able to get the user and we can identify it because every token identify the unique user.
* We never used the password to generate the token.
* we use user name and user id.
* we never make the token alive for ever. there will be expire time to the token.
* e.g we get automatically get log/out from website and we have to login again.

> SO, using this JWT token only we stored the data about the user and then using that data we actually identify which user is making a request and wether this is a valid req because we only generate this token once the user give the correct `id` and   `password` and if user dont give this id and password the user cannot get the token thats the main line of security and we have a expiry allocated.
> Even if the token is missplaced by the user what will happen is we are going to expire it after sometime. so there is no need of storing this information in backend.
> That's why JWT token become very powerfull, that thye contain the information about the user id or unique user information in themselves .
> there is no need of storing password because the multiple user have same password .
> This is widely used authentication serive in the industry.

## CREATING AUTH - SERVICE FOLDER
* just creating a basic MVC Folders.
* intalling some packages like express, bodyparser, dotenv.
* creating `.env` file our enviroment variable.
* creatin more MVC folders
* setting up sequelize
* setting up sequelize 
    - first we install mysql2
    - then sequelize and sequlize-cli
* Now, we do `npx sequelize init`
    - It creates new folders like config, models, migration,seeders.
    - just copy the folders inside the src folder and we already created a config folder just copy the cofig.json file into you src/config folder.
* NOw, write the the credentials in config.json. like  `db name` and `password` etc.
> NOW in order to create a database in mysql level, write command 

            ` npx sequelize db:create`  (note - madke sure your in directory where you have config folder. for here e.g is src fodler)

> For an Authentication service if take a brief look, the only model we need is `user` model only.

### Lets create user model

* first chage the directory and go in the `src folder` where you have your `config`.
* Then run the command 
        ` npx sequelize model:generate --name User --attributes Email:String,Password:String`

* now you have a new model name user and a new migration.
* Now, add some constraints in our model.
* Now, let's add some `validation` to check whether a person is send a correct email or not .
    ```javascript
    validate{
        isEmail : true
    }
    ```
* In order to see tables in mysql DB level lets migrate our model.
    `npx sequelize db:migrate`
* Now, we have our user table.

### LETS START SIGN/IN AND LOG/IN 

* The first Thing we need to do is 

    **SIGN/IN** - IT is going to be first Time registration
    **LOG/IN**  - It only chect the authentication whether the user is present in our DB or not.

* START CREATING MVC files for user.

### LETS CRYPT THE PASSWORD 

* there is a package called as `bcrypt`
* It is the password hashing fucntion.
>NOTE - WE are trying to our crypt our password, but this is not our problem - 
>NOTE - How to incrypt my password is not my problem ?, When to incrypt my password is my problem.

* but where you write this logic in your folders, --> Service folder?--> ans - No, because it look like business logic but it is not, authentication is like a requirement.
* So, where we write it? 
    Answer- the answer is - your models --> Now, let me tell you why-->Just think about for one moment, that you dont have this code of this express application, you just have the user table --> Now, if you are storing an entity in your database, then whenever you create a new user, and for every new user i have to encrypt my password right ! --> And database give you a feature which actually do it. --> In data there is something called as triggers! , What are triggers ? --> triggers are event in database,for.ex- delete a row, adding a row etc.
    --> now, when we want to add a user, at database level at that time we need to encrypt the password of the user.
    --> so, we are going to write this logic inside our model and we can setup a trigger!.
    --> how we can setup a triggers? - sequelize give us very powerfull fucntions that can dirrectly help us to trigger he function.
    --> THERE  are something called hooks, which generally are lifestyle events of your database which access triggers only.
    ```javascript
        User.beforeCreate( ()=> {
 
        })
     ```
    --> inside this callback function we have access to the `user object` - this user object is the same object that we actually trying to create or going to be created.
    * the object or row before whose creation is going to execute this fucntion , that object is this user object.
    * install bcrypt package now `npm i bcrypt`
    --> Now, bcrypt has two prespective 1- how to encrypt the data.(for.eg - when you are signing up then you need to install the encrypted data.)
                                        2 - now lets say when user is coming for logIn/signIn then user is not sending you encypted password.
    --> generally we dont stored the password in db we stored the hash, and all the hashing is done by bcyrpt so all we need to do is install bcrypt.
    --> there is something called `hashsync` -- hashsync is a syncronous fucntion.

    * what is salt means? -  added extra data that you actually passed for your ecryption.
    * added `salt` variable in your config file.
    * we are generating salt in config file.
    * require this salt and bcryt in your in userModel
    ```javascript
    User.beforeCreate( (user)=> {
 
    const encryptedPassword = bcrypt.hashSync(user.Password,SALT);
    user.Password = encryptedPassword;
    })
    ```
    * here `user` is just the db object.
    * and this user is before user creation.
    --> now you see in your password in db your password is encrypted.
     
## Adding Authentication Logic to auth service post registration

 **How to select a particular coloumn in sequelize**

    ` attributes : ['email', 'id']`

### SETTING UP API THROUGH WHICH USER CAN SIGN/IN

* when the user hit the logIn or signIn api they are going to get the new json token generated for them  they are going to get a new json web token for them 
* In order to generate this token we have to do we are going to use the package called `json web token`
    -`npm i jsonwebtoken`
* Let's create function which helps us to create the token and verify it.
```javascript

        const token = userService.createToken({email: 'hemantrawat812@gmaill.com' , id:'1'});
        console.log(token);
        const newToken ='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImhlbWFudHJhd2F0ODEyQGdtYWlsbC5jb20iLCJpZCI6IjEiLCJpYXQiOjE2NzM4NTAxNDQsImV4cCI6MTY3MzkzNjU0NH0.sYkG0v2ZBsxwKEegwTIP_kCqXQ9Aj5q0bkKWCYtR2g8'
        const response = userService.verifyToken(newToken);
        console.log(response);
```

*** Let's work on middleware ***

### How this authenticaiton service is going to work ?

* So, is you want to use a service and you want to check the user is authenticated, it means they need to send the JWT token.
--> So there is concept of `bearer token`--> it is just a normal authentication, what we do is we send this JWT token inside the `Header` 
> NOTE - lets say you want to access a `resourse` then we want to make some get,post,patch etc req. Then were we will send this token should we send in url, body ? --> So, technically we need to send this in our `Header`.

* to use other services the user has to be authenticated.
* now, we need to setup an api whether a user is authenticated or not and then we can use in our other services.
* So, let's setup an api.
--> setup a route.
--> after route we check whether the user is authenticated by cheching the both tokens.
    `const token = req.headers['x-access-token'];`
--> setting up new fucntion in service layer.
--> ` async isAuthenticated(token) `
--> now checking both token and verifying that the user is valid or not.


### BUILDING AUTHORISATION

* Authorisation is just role given to user.
* SO, users have particular role so in order to that we are going to create a new models. which define the roles of a user.
* `npx sequelize model:generate --name Roles --attributes  name:String`
* Now, after we create a model now, we know that a one user can have multiple roles so it is going to have `many to many association` 
> NOTE - When we have one to many association then we store the Id of one table to other, but in many to many association we need third table. which can helps us and this third table act as a `through table`.
* In this through table waht will happen is  there will be userId and a roleId is associated
```javascript
this.belongsToMany(models.Users,{
        through : 'Users_Roles'
      })
```       
> NOTE - This through table is generally a table in db which automatically generated by the sequelize we can also create this model seperately.
* Now, lets migrate these changes .
    ` npx sequelize db:migrate`
* but the through table is not seen after the migrate, i order to see the table we have to `sync our database also`.
```javascript
if(process.env.DB_SYNC){
            db.sequelize.sync({alter: true})
        }
```
* now in our user_role table we have no data available, let's create a seed file for this because this table not gonna have so many data.
* ` npx sequelize seed:generate --name add_roles`
* Adding seeder data 
```javascript
{
      name: 'ADMIN',
      createdAt : new Date(),
      upadatedAt : new Date()
    },
    {
      name: 'CUSTOMER',
      createdAt : new Date(),
      upadatedAt : new Date()
    },
    {
      name: 'AIRLINE_BUSINESS',
      createdAt : new Date(),
      upadatedAt : new Date()
    }
```
* Now lets make these changes reflect in db level by making seeder migration.
    ` npx sequelize db:seed 20230119073702-add_roles.js`
* now we have our roles in our roles table. now we need to assign these roels to our users.
* ```javascript
    const u1 = await User.findByPk(5);
        const r1 = await Roles.findByPk(2); 
        u1.addRole(r1);
  ```
* Now we added roles in our user_roles.
* creating function to check a user have a admin role or not .
* In service layer creating `isAdmin` fucntion.
* Creating API for checking admin

>Note - whenever we do `db.sequelize.sync` it will not created automatic files for you.(like model file or migration file).

> NOw, in the whole project we build a lot of things, and the erroe can be happe in multiple places e.g diff mircoservices or the fucntion we trying to access right ! .
> So, we need to handle the error gracefully as well as we have to handel the erroe codes.
* Installing a package which gives us the error codes 
        `npm i http-status-code`
* Creating new file for handling the error codes.
* ```javascript
  class AppErrors extends Error{
    constructor(name, message, explanation, statusCode){
        
    }
  }
  ```
* the Error class is inbuild class provided to us .
### ------------------------------------------------------------------------------------------------------------

# CREATING BOOKING SERVICE

* Installing packages
```json
"dependencies": {
    "body-parser": "^1.20.1",
    "dotenv": "^16.0.3",
    "express": "^4.18.2",
    "http-status-codes": "^2.2.0",
    "morgan": "^1.10.0", // it help us to log with  request 
    "mysql2": "^3.0.1",
    "nodemon": "^2.0.20",
    "sequelize": "^6.28.0",
    "sequelize-cli": "^6.5.2"
  }
```
* Creating source folder `src` and implementing our server means `index.js` or we can say our express server.
```javascript
const setupAndStartServer = () =>{

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: true}));

    app.listen(PORT,() => {

        console.log(`Server Started on ${PORT}`);
    })
}
setupAndStartServer();
```
* setting up sequelize `npx sequelize init`
* setting up our db name and password and then create database in mysql using `npx sequelize db:create`(`cd` to src folder first where your config reside).
* setting up routes.
* Setting utils error folder 
* creating service error file which generally INTERNAL SERVER ERROR.
* creating validation error file.
* creating app error file.

### Creating booking model

* booking is done by the user, so we need a user Id , one booking belong to user , one booking is belong to filght also so it also has a flight Id, booking will also have some status, every booking has a unique Id.
* Creating model `npx sequelize model:generate --name Booking --attributes flightId:integer,userId:Integer,status:enum`
* our status has three value for booking - 1. In process
2. cancelled 
3. Booked
* setting validation in booking model.
* Now, migrate this model in DB - `npx sequelize db:migrate`

* setting up booking rep and booking service folder.
* 

### setting up new migration 

* generally we need to do model:generate to create a migration , but if you want to create a new migration we can also use 
` npx sequelize migration:create  --name modify_booking_add_new_fields`
* Now, a new migration file is created there we can use queryInterface to add details.
* One thing we need to keep in mind is using this migration we need change the model file manually.
* One thing you can do is 

```javascript
await queryInterface.addColumn(
      'Bookings',
      'noOfSeats',
      {
        type : Sequelize.INTEGER,
        allowNull : false,
        defaultValue : 1
      }
    );
    await queryInterface.addColumn(
      'Bookings',
      'totalCost',
      {
        type : Sequelize.INTEGER,
        allowNull : false,
        defaultValue : 0
      }
    );
```
* We also gonna setup the `asynx down` function if we say we remove the migration those changes we meed also get removed;
```javascript
await queryInterface.removeColumn('Bookings', 'noOfSeats');
await queryInterface.removeColumn('Bookings', 'totalCost');
```
* Now, our migration file ready now just do make this migration run `npx sequelize db:migrate`
* Lets sync this changes in our models.
* Now we have new coloumn in our booking table.

## Writing the Logic of booking now,

* now, for booking the price of every flight is different and changes so we need to get the price from the other microservice we created  ` FlightAndSearch`.
* The two microservices communicate with each other using `HTTP`.

* So, we have a function in our `flightAndSerachService` which gives us the details of a particular flight.
* So, now we are going to get the same details from `flightAndSerachService` in our `booking service` 

* Creating a new service file named `BookingService ` in service folder.
*   ```javascript
    async createBooking(data){
        try {
            const flight  = data.flightId;
            let getFlightRequestUrl  = `${FLIGHT_SERVICE_PATH}/api/v1/flights/${flightId}`;
            const flight  = await axios.get()
        } catch (error) {
            
        }
    }
    ```
* In this createBooking funtion the data consist of the flightId and UserId.
* the data.flightId  gonna fetch a flight from flightService and fetch the data from there .

### How can we make a http call to our flightAndsearchService.?

* So, there is a package `axios` which easily helps to make http req.
*  And now , the `axios.get()`, now we have to make the url where we make our get req.
* setting up `FLIGHT_SERVICE_PATH  = 'localhost:3000'`  in our .env  file.
* creating a url like `let getFlightRequestUrl  = `${FLIGHT_SERVICE_PATH}/api/v1/flights/${flightId}`;`
* we are creaing the funtion like updating the booking and after updating the booking we also need a funciton to update the flight data we have in our flightandSearch service .
* so, we are creating a updateFlight in flish repo too.


