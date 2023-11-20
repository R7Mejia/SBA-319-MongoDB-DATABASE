
import express from "express";
import db from "../db/connection.mjs";
import { ObjectId } from "mongodb";

const router = express.Router();

//GET - get all the comedores

router.get('/'), async (req, res) => {
    let collection = await db.collection("MyDATA");
    let results = await collection.find({}).limit(10).toArray();

    res.send(results).status(200);
}

//GET - get one comedor at a time?
router.get('/:id', async (req, res) => {
    const collection = await db.collection("MyDATA"); 
  const query = { _id: new ObjectId(req.params.id) }; 
  const result = await collection.findOne(query);

  if (!result)
    res.send("Not found").status(404); 
  else res.send(result).status(200);
});


export default router;
