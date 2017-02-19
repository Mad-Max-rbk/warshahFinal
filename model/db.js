var mongo = require('mongoose')
mongo.connect('mongodb://localhost/warshah',function(err,db){
    if(err) throw err
    console.log('database connected...')
})
var comp= new mongo.Schema({
    c_username:String,
    c_password:String,
    c_logo:String,
    c_address:String,
    c_email:String,
    c_phone:Number,
},{collection:'company'})
var Comp=mongo.model('companyuser',comp)

module.exports=Comp