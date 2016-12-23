/**
 * Created by xiaodong chen on 12/20/2016.
 */


var CONFIG = {

    REDIS: {
        client:"redis://redistogo:3d6a66cf0013274281729241e0b3d59b@crestfish.redistogo.com:11319",
        herokuClient: ""
    },

    MONGODB: {
        url: "mongodb://admin:admin@ds041566.mlab.com:41566/heroku_v4dcjtn0"
    },

    SESSION : {
        secret: "faeb4453e5d14fe6f6d04637f78077c76c73d1b4",
        proxy: true,
        resave: true,
        saveUninitialized: true,
        maxAge: 3600000,
    },

    TEMPLATE: [
        {
            level:0,
            name:'admin',
            folder:'admin',
            file:'admin.html',
        },
        {
            level:1,
            name:'user',
            folder:'user',
            file:'user.html',
        },

        {
            level: 2,
            name: 'visitor',
            file: 'visitor.html',
            folder:'visitor',
        }
    ]


}


module.exports = CONFIG;