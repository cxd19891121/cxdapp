/**
 * Created by xiaodong chen on 12/20/2016.
 */
var mongoose = require('mongoose');
var mongoConfig = require('./../config/config').MONGODB



var mongoDB = (function mongodbService(){

    var options = { server: { socketOptions: { keepAlive: 300000, connectTimeoutMS: 30000 } },
        replset: { socketOptions: { keepAlive: 300000, connectTimeoutMS : 30000 } } };
    var url = mongoConfig.url;
    mongoose.connect(url,options);
    var db = mongoose.connection;

    function getMongoose(){
        return mongoose;
    }

    function testModule(){
        console.log("module test correct");
    }
    function testConnection(){
        db.on('error', console.error.bind(console, 'connection error:'));
        db.once('open', function() {
            console.log("we're connected");
        });
    }

    var mongoServiceAPI = {
        mongo : getMongoose,
        test : testConnection
    };
    return mongoServiceAPI;


})()

module.exports = mongoDB;
