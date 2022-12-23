# WELCOME TO FLIGHT SERVICE 
##
![flightSearch](https://previews.123rf.com/images/visivasnc/visivasnc1710/visivasnc171000047/87935861-booking-and-search-flight-ticket-air-travel-trip-vacation-concept-banner-web-template-.jpg)
### PROJECT SETUP
##

> Clone the Project .
> Execute npm install on the same path of your root directory of the downloaded Project.
>Create a `.env` file in the root directory and add the following enviroment variable .

    *PORT = 3000;
> Insider the `src/config` folder create a new file `config.json` and then add the following piece of json
```json
  "development": {
    "username": "YOUR_DB_LOGIN_NAME",
    "password": "YOUR_DB_PASSWORD",
    "database": "Flight_Search_DB_DEV",
    "host": "127.0.0.1",
    "dialect": "mysql"
    }
```
> Once you added your DB config as listed above , go to the src folder from your terminal and execute `npx sequelize db:create` and then execute `npx sequelize db:migrate`.

### DB Design

  - Airplane Table
  - Flight
  - Airport
  - City 


![DB_Tables](https://user-images.githubusercontent.com/99763066/209309552-36f32ece-d2a2-442a-8647-4fefbc0cedf8.jpg)

  - A flight belongs to an airplane but one airplane can be used in multiple flights
  - A city has many airports but one airport belongs to a city
  - One airport can have many flights, but a flight belongs to one airport


  
## Tables

### City -> id, name, created_at, updated_at
### Airport -> id, name, address, city_id, created_at, updated_at

> Relationship -> City has many airports and Airport belongs to a city (one to many)



