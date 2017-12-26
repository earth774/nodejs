var http = require('http');
var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database:"nodejs_test"
});


// con.connect(function(err) {
//   if (err) throw err;
//   console.log("Connected!");
  
// });
http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/json'});
    con.query("SELECT * FROM `user`", function (err, result) {
    if (err) throw err;
    console.log(result);
    res.write(JSON.stringify(result));
    res.end();
  	});
    
}).listen(8080);