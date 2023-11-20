import { MongoClient } from "mongodb";
const connectionString = process.env.ATLAS_URI || "mongodb+srv://robertomejiar7:Peakybl1nder@cluster0.vjyinrm.mongodb.net/";
const client = new MongoClient(connectionString);



let conn;
try {
  conn = await client.connect();
} catch (e) {
  console.error(e);
}

let db = conn.db("Honduran_Restaurantes");//route/path on mdb

export default db;