/**
 * Created by xiaodong chen on 12/21/2016.
 */
var expressSession = require('express-session');
var sessionConfig = require('./../../config/config').SESSION;
var client = require('./../redis');

var session = (function sessionAPI(){
    sessionConfig.instance = client;

    function start(app){
        app.use(expressSession(sessionConfig));
        console.log("Session has been activated");
    }
    return {
        start: start
    }

}());

module.exports = session;