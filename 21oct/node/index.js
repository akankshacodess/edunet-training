const express = require('express')
const hostname = '127.0.0.1';

const port = 3000;

const app = express();

app.get('/home', (req,res) =>{
    res.send('Hiiiiiii')
})

app.listen(port,()=>{
    console.log(`Hiiiii i m on ${port}`);
    
})