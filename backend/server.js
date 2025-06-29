const express = require("express");
const { MongoClient } = require("mongodb");
const dotenv = require("dotenv");
const bodyparser = require("body-parser");
const cors = require("cors");
dotenv.config();

// Connection URL
const url = "mongodb://localhost:27017";
const client = new MongoClient(url);

// Database Name
const dbName = "Lock&Key";
const app = express();
app.use(cors());
const port = 3000;
app.use(bodyparser.json());

client.connect();

//get all the passwords
app.get("/", async (req, res) => {
  const db = client.db(dbName);
  const collection = db.collection("passwords");
  const findResult = await collection.find({}).toArray();
  res.json(findResult);
});

//save a password
app.post("/", async (req, res) => {
  const password = req.body;
  const db = client.db(dbName);
  const collection = db.collection("passwords");
  //   const findResult = await collection.insertOne(password);
  //   res.send({success:true, result: findResult});
  const result = await collection.updateOne(
    { id: password.id }, // match by id
    { $set: password }, // update with new data
    { upsert: true } // insert if it doesn’t exist
  );

  res.send({ success: true, result });
});

//delete a password by id
app.delete("/", async (req, res) => {
  const password = req.body;
  const db = client.db(dbName);
  const collection = db.collection("passwords");
  const findResult = await collection.deleteOne(password);
  res.send({ success: true, result: findResult });
});

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`);
});
