/**
 * Created by xiaodong chen on 12/21/2016.
 *
 */

var tplArr = require('./../../config/config').TEMPLATE;

var sessionService = (function sessionAPI(){

    /* SessionService API: */
    var API = {
        getData: get,
        storeInData: store,
        getTemplate : getTemplate,
        getTemplateFile : getFile,
        getTemplateFolder: getFolder,
    }

    var visitorTemplate = getVisitorTemplate();


    function get(req){
        return req.session.data;
    }

    function store(req, data){
        req.session.data = data;
    }

    function getTemplate(req){
        if(req.session.data == null || req.session.data == undefined){
            return visitorTemplate;
        }

        var level = req.session.data.level;
        return getTemplateByLevel(level);
    }

    function getFile(req){
        var tpl = getTemplate(req)
        return tpl.file;
    }

    function getFolder(req){
        var tpl = getTemplate(req)
        return tpl.folder;
    }


    /* make sure to get visitor template from config*/
    function getVisitorTemplate(){
        tplArr.forEach(function (template){
            if(template.name === 'visitor'){
                return template;
            }
        })
        return tplArr[tplArr.length-1];
    }



    /* get template by level:
    *  function for inner use and return "visitorTemplate" if no level find
    *  */
    function getTemplateByLevel(level){
        if(level == null){
            return visitorTemplate;
        }
        tplArr.forEach(function(template){
            if(template.level === level){
                return template;
            }
        })
        return visitorTemplate;
    }

    return API

})()

module.exports = sessionService;