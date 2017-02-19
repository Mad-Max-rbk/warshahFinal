var company = require('./models/companydb.js');
var services = require('./models/servicesdb.js');
module.exports.handleUsers = {
  signin : function(req, res) {
    var username = req.body.username;
    var password = req.body.password;

    company.Comp.findOne({c_username: username,c_password:password})
      .then(function (user) {
        if (user.length===0) {
          res.json("username or password incorrect")
        } 
        else{
          res.json(user)
        }
      });
  },

  // add user to data base
  signup: function(req, res) {
    var username = req.body.username;
    var password = req.body.password;
    var phone = req.body.phone;
    var address = req.body.address;
    var emailAddress = req.body.emailAddress;
    var logoimg= req.body.logoimg;

    // check to see if user already exists
    company.findOne({c_username: username})
      .exec(function (err, user) {
        if (user) {
          res.json('User already exist!');
        } else {
          // make a new user if not one
          return company.create({
            c_username: username,
            c_password: password,
            c_phone: phone,
            c_address: address,
            c_email: emailAddress,
            c_logo:logoimg
          }, function (err, newUser) {
              
              if(err){
                res.json(err);
              } else {
                
                res.json("add is done"); 
              }     
          });
        }
      });
  },

  // get servecies
  getservices: function(req, res) {
    services.find({}, function(err, serv){
      if(err){
        res.json(err);
      } else {
        res.json(serv);
      }
    });
  }

}
