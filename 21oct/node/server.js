const http = require('http');

const hostname = '127.0.0.1'
const port = 4000;

const app = http.createServer((res) => {
    // response code 
    res.end("hello");
} )

// execute our server through listen()
app.listen(port,hostname,()=>{
    console.log(`Server is running at ${port} number`);
    
})