const fs = require('fs');
fs.writeFile('output.txt', "hello",(err)=>{
  if(err) console.log("error occured");
  else console.log("file written succesfully");
})
