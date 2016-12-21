/**
 * Created by xiaodong chen on 12/20/2016.
 */
var mongoose = require('mongoose');
var mongoConfig = require('./../config/config').mongoConfig()

var mongoDB = (function mongodbService(){

    var url = mongoConfig.url;
    mongoose.connect(url);
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

    return {
        mongo : getMongoose,
        test: testModule,
    }

})()

module.exports = mongoDB;
