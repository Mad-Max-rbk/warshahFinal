var mongo = require('mongoose')

var comp= new mongo.Schema({
    username:String,
    password:String,
    c_logo:String,
    c_address:String,
    c_email:String,
    c_phone:Number,
},{collection:'company'});

var Comp=mongo.model('companyuser',comp)

module.exports=Comp
////  end  company info


