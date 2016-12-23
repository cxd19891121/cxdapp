/**
 * Created by xiaodong chen on 12/20/2016.
 */
var redis = require('redis');
var redisConfig = require('./../config/config').REDIS;


var client = redis.createClient(redisConfig.client);

client.on("error",function(error){
    console.log("Redis error:",error);
})

client.on("connect", function () {
    console.log('Redis has been connected');
});

module.exports = client;