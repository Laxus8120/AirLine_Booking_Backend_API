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
/Images/dm_tables

## LETS START CREATING THE TABLE 

### HOW WE CREATE THE TABLE ?

### STEPS for sequelize-cli

*** Step - Creation of table we use  -
*` npx sequelize model:generate --name City --attributes name:String `(we are in our src folder because every config is done here )
* After running upper command a new model name `city.js` will be created in our models folder.
* In this city.js file we have our city class .(NOTE - if you dont use sequelilze-cli you have to create this class manually . So, this is the advantage of using sequelize-CLi).
* THE upper commmand also did one more things - it created a migration file , and this migration folder have our default  coloumn like ID , Updated_AT , Created AT and also it constain the more attribute like it cannot be null . 
* So , we have to sync to see the tables, 
    `npx sequelizq db:migrate ` What is db:migrate ? ==> It migrate your Db , whatever new migration are there  which might not be applied yet will be applied .
* Now , it sync the new migration , now if we do `show tables` it contain the tables we created and a new table which is `sequqlize_meta data ` .
* And this metadata contain all the migration we done in our database.       
< NOTE `Naming CONVENTION ` -   * Table name has to be plural 
                                * Model class have to singular name 
                                *  

> NOTE - IN SEQULIZE CLI every table have attribute like created_AT and updated_AT , ID  coloums by default in every table.

