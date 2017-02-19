var mongo = require('mongoose')

var services= new mongo.Schema({
    s_category:String,
    s_desc:String,
    s_phone:Number,
    s_area:String,
    s_img:String,
    s_cid:String,
},{collection:'services'});

var serv=mongo.model('servecis',services)

module.exports=serv
