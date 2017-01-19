var express = require('express');
var router = express.Router();
var path = require('path');
var session = require('./../service/session/sessionService');
var loginService = require('./../service/loginService/login');

/* GET home page. */

router.get('/', sendFile)

/* Getting resources: css, image, controller, view */
router.get('/app/css/*', sendResource);
router.get('/app/assets/*',sendResource)
router.get('/app/template/*', sendResource)
router.get('/app/component/*',sendResource)
router.get('/bower_components/*', sendResource)
router.get('/app/util/*', sendResource)
router.get('/favicon.ico',sendFavicon);


function sendFile(req,res){
    var file = session.getTemplateFile(req);
    var folder = session.getTemplateFolder(req);
    var html = path.normalize(__dirname + '/../app/template/'+folder +'/'+ file);
    res.sendFile(html);
}


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
