const express = require("express");
const { MongoClient } = require("mongodb");
const cors = require('cors')
const app = express();
const port = 4000;

const hostname = new MongoClient("mongodb://localhost:27017/");

let client;
app.use(cors());
const dbconnect = async () => {
  try {
    // client = await MongoClient.connect();
    client = await hostname.connect();
    console.log("DB Connected");
  } catch (err) {
    console.log(err);
  }
};

dbconnect();

// middleware to access values
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.post("/signin", async (req, res) => {
  const { username, password } = req.body; //destructured the code
//   console.log(username);

  // we're going to post data on signin
  const coll = client.db("mernproj").collection("signin");
  //   const cursor = await coll.find({username: req.body.username})
  const cursor = await coll.find({ username: username });
  const result = await cursor.toArray();
  if (result.length == 1 ) {
    if (username == result[0].username && password == result[0].password) {
      res.send({ ok: 1, msg: "Valid User" });
    } else {
      res.send({ ok: 0, msg: "Not Valid user" });
    }
  }
  else {
    res.send({ ok: 0, msg: "Not Valid user" });
  }
  //   res.send(req.body);
});

app.post("/signup", (req, res) => {
  try {
    // we're going to post data on signup
    const abs = client.db("mernproj").collection("signup").insertOne(req.body);
    //   res.send(req.body);
    res.send({ ok: 1, msg: "User Created" });
  } catch (err) {
    res.send({ ok: 0, msg: "User not created try after some time " });
  }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
