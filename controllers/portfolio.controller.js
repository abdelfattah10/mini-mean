var express = require('express');
var router = express.Router();
var request = require('request');
var config = require('config.json');





router.get('/',function(req,res){

	users.find({},function(err,users){

		if(err) res.json(err);
		else res.render('portfolios',{users: users});
	});
});


/*router.get('/', function (req, res) {

    res.render('portfolio');
}); */



module.exports = router;