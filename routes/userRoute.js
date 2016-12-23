var express = require('express');
var router = express.Router();
var userService = require('./../service/userService')

/* GET users listing. */

router.all('*', function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
    next();
});

router.get('/', function(req, res) {

    userService.getAllUser(function(e,o){
        if(e){
            res.send(e);
        }else{
            res.send(o);
        }
    })
});

router.get("/sample/:id",function(req, res){
    var id = req.params.id;

    userService.addSampleUser( id,function(e,o){
        if(e){
            res.send(e);
        }else{
            res.send(o)
        }
    })
});

//get User by id
router.get("/:id",function(req, res){

    userService.getUser(req.params.id,function(e,o){
        if(e){
            res.send(e);
        }else{
            res.send(o)
        }
    })
});

//remove User
router.delete("/:id",function(req, res){
    userService.deleteUser( req.params.id, function(e,o){
        if(e){
            res.send(e)
        }else{
            res.send(o);
        }
    })
})



//add new User
router.post('/',function(req,res){
    userService.addUser(req['body'].user, function(e,o){
        if(e){
            res.send(e);
        }else{
            res.send(o);
        }
    })
})

//update User by id
router.put("/:id",function(req,res){
    userService.updateUserById( req.params.id, req["body"].User,function(e,o){
        console.log("Users for update in function router.put User", req["body"].User);
        if(e){
            res.send(e)
        }else{
            res.send(o);
        }
    })
})


module.exports = router;
