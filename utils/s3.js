var AWS = require('aws-sdk');
var PropertiesReader = require("properties-reader");
var properties = PropertiesReader("server.properties");

const s3 = new AWS.S3({
    accessKeyId: properties.get("aws.s3key"),
    secretAccessKey: properties.get("aws.s3secret")
});

module.exports = s3;