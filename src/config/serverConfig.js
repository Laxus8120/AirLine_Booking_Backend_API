const dotenv = require('dotenv');

dotenv.config();   // we have to write the .config to access the .env folder.

module.exports = {
    PORT : process.env.PORT
}