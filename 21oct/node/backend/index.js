// const http = require('http');

// const hostname = '127.0.0.1'
// const port = 4000;

// const app = http.createServer((res) => {
//     // response code 
//     res.end("hello");
// } )

// // execute our server through listen()
// app.listen(port,hostname,()=>{
//     console.log(`Server is running at ${port} number`);
// })
const express = require('express')
const hostname = '127.0.0.1';

const port = 3000;

const app = express();

app.get('/home', (req,res) =>{
    res.send('Hiiiiiii')
})

app.post('/home', (req,res) =>{
    res.send('Hii i m post')
})

app.listen(port,()=>{
    console.log(`Hiiiii i m on ${port}`);
    
})