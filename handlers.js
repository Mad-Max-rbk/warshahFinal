var User = require('./models/companydb.js');
var Serv = require('./models/servicesdb.js');
var jwt = require('jwt-simple');
// check for user in data base
module.exports.handleUsers = {
  signin : function(req, res) {
    var username = req.body.username;
    var password = req.body.password;

    User.findOne({username: username})
      .then(function (user) {
        console.log(user)
       // console.log(user)
        if (!user) {
          res.status(404).json("user not found")
        } else {
          user.comparePasswords(password)
            .then(function (isMatch) {
              if (isMatch) {
                var token = jwt.encode(user, 'secret');
                res.json({token : token, user : user});
              } else {
                res.json("password not matched")
              }
            });
        }
      });
  },

  // add user to data base
  signup: function(req, res) {
    var username = req.body.username;
    var password = req.body.password;
    // check to see if user already exists
    User.findOne({username: username})
      .exec(function (err, user) {
        if (user) {
          res.json('User already exist!');
        } else {
          // make a new user if not one
          return User.create({
            username: username,
            password: password
          }, function (err, newUser) {
              // create token to send back for auth
              if(err){
                res.json(err);
              } else {
                var token = jwt.encode(user, 'secret');
                res.json({token: token}); 
              }     
          });
        }
      });
  },

  // get user in data base
  getUsers: function(req, res) {
    User.find({}, function(err, users){
      if(err){
        res.json(err);
      } else {
        res.json(users);
      }
    });
  }

}


//// handel services
module.exports.handleservice={

  addserv:function(req,res){
    
    var type=req.body.s_type;
    var loc=req.body.s_loc;
    var phone=req.body.s_phone;
    var email=req.body.s_email;
    var img=req.body.img;
    var desc=req.body.s_desc;
    var id=req.body.userId;
     
    Serv.create({
    s_type:type,
    s_desc:desc,
    s_phone:phone,
    s_area:loc,
    s_img:img,
    s_email:email,
    s_cid:id,

    },function(err,ok){
      if(err){
        res.json(err);
      }
      else{
        res.json("add succsees full!!")
      }

    })
  },
  showserv : function (req, res) {
    Serv.find().exec(function (err, allserv) {
      if(err){
        res.status(500).send('err');
      }else{
        res.status(200).send(allserv);
      }
    });
  },

//// edit service by id 
editserv : function(req,res){
console.log(req.body);
    var type=req.body.s_type;
    var loc=req.body.s_loc;
    var phone=req.body.s_phone;
    var email=req.body.s_email;
    var img=req.body.img;
    var desc=req.body.s_desc;
    var id=req.body.id;
    for(var key in req.body){
      if(req.body[key]===""){
        delete req.body[key]
      }
    }
Serv.update(
 
  // {_id:id},
  // {s_type:type,
  //   s_desc:desc,
  //   s_phone:phone,
  //   s_area:loc,
  //   s_img:img,
  //  s_email:email}
  {_id:id},req.body
    
 ,function(err,ok){

  if(err){
     res.json(err)
  }
  else{
     res.json("edit succsees full!!")
  }
  }

)

},
// end edit 
deleteserv:function(req,res){
  var id=req.body.id;
  console.log(id);
  Serv.remove({_id:id},function(err,ok){
    if(err){
      res.json(err)
    }
    else{
      res.json(ok)
    }
  })
}
}