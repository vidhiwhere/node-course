const http=require('http');



const server=http.createServer((req, res)=>{
  console.log(req.url , req.method, req.headers);


if(req.url==='/'){
 res.setHeader('Content-Type','text/html');
  res.write('<html>');
    res.write('<head><title>My First Page</title></head>');
    res.write('<body><h1>enter your details</h1>');
    res.write('<form action="/submit-details" method="POST">'); 
    res.write('<input type="text" name="username" placeholder="enter your name"><br>');
res.write('<label for="male">Male</label><br>');
     res.write('<input type="radio" name="gender" value="male" placeholder="male"><br>');
      res.write('<label for="female">Female</label><br>');
     res.write('<input type="radio" name="gender" value="female" placeholder="female"><br>');

     res.write('<input type="submit" value="submit">');
    
    res.write('</form'); 
    res.write('</body>');
      res.write('</html>');
      res.end();
      return;
 
}
else if(req.url==='/about'){
 res.setHeader('Content-Type','text/html');
  res.write('<html>');
    res.write('<head><title>My First Page</title></head>');
    res.write('<body><h1> about</h1></body>');
      res.write('</html>');
      res.end();
 return;
}
else if(req.url==='/contract'){
 res.setHeader('Content-Type','text/html');
  res.write('<html>');
    res.write('<head><title>My First Page</title></head>');
    res.write('<body><h1> contract</h1></body>');
      res.write('</html>');
      res.end();
 return;
}

 res.setHeader('Content-Type','text/html');
  res.write('<html>');
    res.write('<head><title>My First Page</title></head>');
    res.write('<body><h1> like/share/subscribe</h1></body>');
      res.write('</html>');
      res.end();
 


 
});
const PORT=3000;
server.listen(PORT, ()=>{
  console.log('server running at port 3000');
});