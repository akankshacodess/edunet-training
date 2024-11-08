const { isUtf8} = require('buffer')

const fs = require('fs')
fs.readFile('mytest.txt', 'utf-8',(err,data)=>{
    if(err) console.log(err);
    else console.log(data);
    
    
})

const result = fs.readFileSync('mytext1.txt', 'utf-8')
console.log(result);
