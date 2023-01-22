var express = require('express');
const path=require('path')
var app = express();

// app.get('/', function (req, res) {
//   res.sendFile("/Users/masoodahmed/Desktop/HackHer-hackathon/HackHer/Frontend/index.html");
// })

app.use(express.static(path.join(__dirname, "public"), {
	index: "index.html"
}))

var server = app.listen(8081, function () {
  var host = server.address().address;
  var port = server.address().port;
  console.log("Example app listening at http://%s:%s", host, port);
})
