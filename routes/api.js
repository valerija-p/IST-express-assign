var express = require('express');
var router = express.Router();

router.get('/',function(request,response,next){
  response.send('You hit the api route');
});

router.get('/endpoint1',function(request,response,next){
  response.send('You hit the endpoint 1 route');
});

module.exports = router;
