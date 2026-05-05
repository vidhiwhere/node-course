const http =require('http');

const server = http.createServer((req,res)=>{
  console.log(req.url, req.method, req.headers);

if(req.url==='/'){
  res.setHeader('Content-Type','text/html');
  res.write('<html>');
  res.write('<body><h1>welcome to my website home page</h1></body>');
  res.end();
  return;



}
else if(req.url==='/men'){
  res.setHeader('Content-Type','text/html'); 
  res.write('<html>');
  res.write('<body><h1>welcome to my website men page</h1></body>');
res.end();
return;
}
else if(req.url==='/women'){
  res.setHeader('Content-Type','text/html');
   res.write('<html>');
  res.write('<body><h1>welcome to my website women page</h1></body>');
  res.end();
  return;

}
else if(req.url==='/kids'){
  res.setHeader('Content-Type','text/html');
   res.write('<html>');
  res.write('<body><h1>welcome to my website kids page</h1></body>');
  res.end();
  return;


}



else {
  res.setHeader('Content-Type','text/html');
   res.write('<html>');
  res.write('<body><h1>error page</h1></body>');
  res.end();
  
}
});

const PORT =5000;
server.listen(PORT,()=>{
  console.log('server is running at port 5000');
});

