//  5 apis 1- backslash, 2- app.get search, 3- app.post add user, 4- app.delete 5- app.put

const ip = require('ip')
const fs = require('fs')
const express = require('express')
const hostname= '127.0.0.1'
const port = 3001;

const app = express ()
app.use(express.json())   // middleware

const myMiddleware = (req,res,next) =>{

    const d = new Date();
    fs.appendFile('mylog.txt',`Request from this ${ip.address()} on ${d} \n`,(err)=>{
        console.log(err);
    })
    console.log(ip.address());
    next();   // kuch nhi milra toh aage badh
}

app.use(myMiddleware);

app.get('/', (req,res)=>{
    const name= req.query.name;
    const loc= req.query.location;
    res.send(`I am ${name} and I live ${loc}`)
})
app.get('/search', (req,res)=>{
    res.send('I am a search route')
})
app.post('/adduser', (req,res)=>{
    console.log(req.body);
    res.send('add user')
})
app.delete('/delete', (req,res)=>{
    res.send('delete user')
})
app.put('/', (req,res)=>{
    res.send('I am a route')
})

app.all('*',(req,res) =>{
    res.status(404).send("")
})

app.listen(port, (req,res) =>{
    console.log('app working good');
})