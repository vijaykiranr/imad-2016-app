var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/article-one', function(req,res){
    res.sendFile(path.join(__dirname, 'ui', 'article-one.html'));
});

app.get('/dooTest', function(req,res){
   res.sendFile(path.join(__dirname, 'ui', 'dooTest.html')); 
});

app.get('/article-two', function(req,res){
   res.sendFile(path.join(__dirname, 'ui', 'article-two.html'));
});

app.get('/article-three', function(req,res){
    res.sendFile(path.join(__dirname, 'ui', 'article-three.html'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});

app.get('/ui/image.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'image.png'));
});

app.get('/ui/profile.jpg', function(req,res){
   res.sendFile(path.join(__dirname, 'ui', 'profile.jpg')); 
});

app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});

app.get('/ui/youtubeSearch.html', function(req,res){
    res.sendFile(path.join(__dirname,'ui','youtubeSearch.html'));
});

app.get('/ui/youtubeScript.js', function(req,res){
   res.sendFile(path.join(__dirname,'ui','youtubeScript.js')); 
});

app.get('/ui/youtubeApp.html', function(req,res){
    res.sendFile(path.join(__dirname,'ui','youtubeApp.html'));
});

app.get('/ui/youtubeApp.js', function(req,res){
   res.sendFile(path.join(__dirname,'ui','youtubeApp.js')); 
});



var counter = 0;
app.get('/counter', function(req,res){
   counter = counter+1;
   res.send(counter.toString());
});

var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
