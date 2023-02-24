const http = require('http');
const fs =require('fs')
// const y = require('./h');


http.createServer((req,res)=>{
if(req.url=='/'){
    fs.readFile('sha.html',(err,html)=>{
        res.writeHead(200,{'Content-type':'html/text'})
        res.write(html)
        res.end()
    })
   
}
else if(req.url=='/login'){
    res.write('login')
    res.end()
}else{
    
    res.end()
}
    
}).listen(8081,()=>console.log(`server starteed at `))
