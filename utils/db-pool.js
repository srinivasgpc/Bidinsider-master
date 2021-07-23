const { Pool } = require("pg");
var PropertiesReader = require("properties-reader");
var properties = PropertiesReader("server.properties");

//Database connection properties
const pool = new Pool({
    user: properties.get("database.user.name"),
    host: properties.get("database.host"),
    database: properties.get("database.name"),
    password: properties.get("database.password"),
    port: properties.get("database.port")
});

module.exports = pool;