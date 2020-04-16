var express = require('express');
var router = express.Router();

router.get("/",function(request,response,next){
 response.send("you hit the api route!");
});

module.exports = router;
