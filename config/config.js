/**
 * Created by xiaodong chen on 12/20/2016.
 */
var config = (function(){

    // var redis = {
    //
    //     cloud: "AWS/us-east-1",
    //     plan: "30MB",
    //     DBName: "redis-cxdapp-8080926",
    //     availableZone:"us-east-1",
    //     password:"GlytOIzdDkiqOPM2",
    //     EndPoint:"//redis-19444.c8.us-east-1-4.ec2.cloud.redislabs.com:19444",
    //
    // };

    var heroku = {
        baseUrl : 'http://cxdapp.herokuapp.com/'
    };

    var mongoDB = {
        url: "mongodb://admin:admin@ds041566.mlab.com:41566/heroku_v4dcjtn0"
    };

    function getHeroku(){
        return heroku;
    }

    function getMongoDB(){
        return mongoDB;
    }
    return {
        mongoConfig : getMongoDB,
        heroku: getHeroku
    }

})();

module.exports = config;