use("CrudDb")

console.log(db);

// create
db.createCollection("courses")

db.courses.insertOne({
    name:"Akanksha's Life",
    price: 0
})

// read
console.log
(db.courses.find({price: 0}).count())

// update
db.courses.updateOne({
    price: 0
}, {$set:{
    price: 100
}})

// delete
db.courses.deleteOne({price: 100})


// mongoose is a js library which builds a connection between nodejs and mongodb