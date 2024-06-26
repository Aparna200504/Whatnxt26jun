const express = require("express");
const cors = require("cors");
const {MongoClient} = require("mongodb");

const app = express();
app.use(cors());
app.use(express.json());

app.post("/save",(req,res) => {
	const url = "mongodb+srv://aparnaprasad2004:E0XsH0F6WyPjO6Cv@whatnxt.ofanqnh.mongodb.net/?retryWrites=true&w=majority&appName=whatnxt";
	const client = new MongoClient(url);
	const db = client.db("wn25jun24");
	const coll = db.collection("student");
	const record = {"name":req.body.name,"year":req.body.year,"choice":req.body.choice};
	coll.insertOne(record)
	.then(result => res.send(result))
	.catch(error => res.send(error));
});

app.listen(9000, () =>{console.log("ready @ 9000");});