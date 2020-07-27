var express = require('express');
var router = express.Router();

var users = [
  {
    email: 'tahrin@polyunity.com',
    password: 'polyunity123'

  }
]

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send("Welcome to Home Page");
});

router.post('/login', function(req, res){
  if(req.body.password==""& req.body.password=="") {
    req.status(200).send({
    status: 404,
  });
  }
  let result = users.find(user => user.email ==req.body.email);

  if(result) {
    if(result.password ==req.body.password){
      res.status(200).send({
        message: "Login Successful!"
      })
    } else if(result.password !== req.body.password){ 
      res.status(200).send({
        message: "Incorrect Password!"
      })
    }
  } else {
    res.status(200).send({
      message: "User Not Found!"
    })
  }
})

module.exports = router;
