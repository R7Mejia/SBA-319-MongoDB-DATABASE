
import express from "express";
import db from "../db/connection.mjs";
import { ObjectId } from "mongodb";

const router = express.Router();



/////////////POST METHOD (creating new data -meaning in this casse, adding another restaurant)
router.post("/", async (req, res) => {
  const collection = await db.collection("MyDATA");
  const newDocument = req.body;
  newDocument.date = new Date();
  const result = await collection.insertOne(newDocument);
  res.send(result).status(200);
});

///////////////GET - get all the comedores

router.get('/', async (req, res) => {
    let collection = await db.collection("MyDATA");
    let results = await collection.find({}).limit(10).toArray();

    res.send(results).status(200);
})

///////////////GET - get one comedor at a time?
router.get('/:id', async (req, res) => {
    const collection = await db.collection("MyDATA"); 
  const query = { _id: new ObjectId(req.params.id) }; 
  const result = await collection.findOne(query);

  if (!result)
    res.send("Not found").status(404); 
  else res.send(result).status(200);
});


////////UPDATE//////////////
router.patch("/:id", async (req, res) => {
  const query = { _id: new ObjectId(req.params.id) };
  const newDocument = {
    $set: {
      name: req.body.name,
      address: req.body.address,
      type_of_food: req.body.type_of_food,
      phone: req.body.phone,
      image_url: req.body.image_url
    },
  }
  const collection = await db.collection("MyDATA");
  const result = await collection.updateOne(query, newDocument); 

  res.send(result).status(200);
})

///////////////DELETE
router.delete('/:id', async (req, res) => {
  const query = {_id: new ObjectId(req.params.id)};
  const collection = db.collection('MyDATA');
  const result = await collection.deleteOne(query);

  res.status(200).send(result);
});



export default router;
