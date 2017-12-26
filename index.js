var express = require('express')
var app = express();
var mysql = require('mysql');
var bodyParser = require('body-parser');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database:"nodejs_test"
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/api', function(req, res){ 
	con.query("SELECT * FROM `user`", function (err, result) {
	    if (err) throw err;
	    res.json(result)
  	});
});

app.get('/bb', function(req, res){ 
	con.query("SELECT * FROM `user`", function (err, result) {
	    if (err) throw err;
	    res.json(result)
  	});
});

app.post('/insert',function(req, res){
	var name = req.body.name;
	var age = req.body.age;
	var student = req.body.student;
	console.log(name , age, student);
	var sql = "INSERT INTO `user`(`name`, `age`, `student`) VALUES ('"+name+"','"+age+"','"+student+"')";
	con.query(sql, function (err) {
	    if (err) throw err;
	    res.json({'data':'aaa'});
  	});
})

app.listen(3500, () => console.log('Example app listening on port 3000!'))