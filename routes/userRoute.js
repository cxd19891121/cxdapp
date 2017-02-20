var express = require('express');
var router = express.Router();
var userService = require('./../service/userService');

/* GET 跨域请求 （本地调试的时候用得到） */
router.all('*', CROP);

/* GET users listing. */
router.get('/', function(req, res) {
    console.log("user get");
    userService.getAllUser(function(o){
        res.send(o);
    });
});

router.get("/sample/:id", function(req, res){
    var id = req.params.id;
    userService.addSampleUser(id,send(res))
});

router.get("/username/:name",function(req,res){
    var name = req.params.name;
    userService.getByName(name,send(res));
})

//get User by id
router.get("/:id",function(req, res){

    userService.getUser(req.params.id,send(res))
});

//remove User
router.delete("/:id",function(req, res){
    userService.deleteUser( req.params.id, send(res));
})



//add new User
router.post('/',function(req,res){
    userService.addUser(req['body'].user, send(res));
})

//update User by id
router.put("/:id",function(req,res){
    userService.updateUserById( req.params.id, req["body"].user,send(res))
})


function send(res){
    return function(o) {
        res.send(o)
    }
}





function CROP(req,res,next){
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
    next();
}


module.exports = router;
