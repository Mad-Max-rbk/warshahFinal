var mongo = require('mongoose')

var services= new mongo.Schema({
    s_type:String,
    s_desc:String,
    s_phone:Number,
    s_area:String,
    s_img:String,
    s_email:String,
    s_cid:String,


})
//,{collection:'services'});

var serv = mongo.model('services',services)

module.exports=serv
