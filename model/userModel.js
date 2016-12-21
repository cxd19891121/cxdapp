/**
 * Created by xiaodong chen on 12/20/2016.
 */
var mongoDB = require('./../Service/mongoService');

var userModule = (function tagSchemaModule() {
    var mongo = mongoDB.mongo();
    var userSchema = new mongo.Schema({
        username: {
            type: String,
            default: null,
            require: true,
            unique: true
        },
        password:{
            type:String,
            default:null,
            require:true,
        },
        email:{
            type:String,
            default: null,
        },
        level:{
            type: Number,
            default:2,
        },
        hidden: {
            type: Boolean,
            default: false
        },
    });

    var userModel = mongo.model("user",userSchema);

    function getSchema(){
        return userSchema;
    }

    function getModel(){
        return userModel;
    }

    function test(){
        mongoDB.test();
    }

    return {
        getSchema: getSchema,
        getModel: getModel,
        test: test,
    }

})()

module.exports = userModule;