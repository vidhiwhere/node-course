const http=require('http');
const fs = require('fs');



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
    
    res.write('</form>');
    res.write('</body>');
      res.write('</html>');
      res.end();
      return;
 
}
else if (req.url.toLowerCase()==='/submit-details' && req.method== 'POST'){
 req.on('data', chunk=>{
  console.log(chunk);
 });




  let body = '';
  req.on('data', chunk => {
    body += chunk.toString();
  });
  req.on('end', () => {
    const parsedBody = new URLSearchParams(body);
    const username = parsedBody.get('username');
    const gender = parsedBody.get('gender');
    fs.writeFileSync('user.txt', `Username: ${username}, Gender: ${gender}`);
    res.statusCode = 302;
    res.setHeader('Location', '/');
    res.end();
  });
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
else {
 res.setHeader('Content-Type','text/html');
  res.write('<html>');
    res.write('<head><title>My First Page</title></head>');
    res.write('<body><h1> like/share/subscribe</h1></body>');
      res.write('</html>');
      res.end();
}
 


 
});
const PORT=3000;
server.listen(PORT, ()=>{
  console.log('server running at port 3000');
});