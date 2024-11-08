const express = require('express')
const app = express();

const port = 3000

app.set("view engine", "ejs")
app.get('/', (req,res)=>{
    // res.send("Hellooooz so jao")

    
    res.render('home',{name:"Your name"});
})


app.get('/userresponse',(req,res)=>{
  // console.log(req.query.name);

  res.render("user", (name:req.query.name))
  
})
app.listen (port, () => {
    console.log('Helloo chlgyaaa yippeee');
    
})