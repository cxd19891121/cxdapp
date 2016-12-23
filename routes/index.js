var express = require('express');
var router = express.Router();
var path = require('path');

/* GET home page. */

router.all('*', function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
    next();
});

router.get('/', function (req, res, next) {

    var html = path.normalize(__dirname + '/../app/template/visitor/visitor.html');
    res.sendFile(html);
});

/* Getting resources: css, image, controller, view */
router.get('/app/css/*', sendResource);
router.get('/app/assets/*',sendResource)
router.get('/app/template/*', sendResource)
router.get('/app/component/*',sendResource)
router.get('/bower_components/*', sendResource)
router.get('/app/util/*', sendResource)
router.get('/favicon.ico',sendFavicon);


function sendResource(req,res){

    var html = path.normalize(__dirname + '/../' + req.path);
    //console.log("file path :",html);
    res.sendFile(html)
}

function sendFavicon(req,res){
    var html = path.normalize(__dirname + '/../app/assets/img/favicon-16x16.png');
    res.sendFile(html);
}

module.exports = router;
