var express = require('express');
var router = express.Router();
var path = require('path');

/* GET home page. */
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


function sendResource(req,res){

    var html = path.normalize(__dirname + '/../' + req.path);
    //console.log("file path :",html);
    res.sendFile(html)
}

module.exports = router;
