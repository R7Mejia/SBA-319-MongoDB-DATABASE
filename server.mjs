// const mongoose = require('mongoose')
// mongoose.connect('mongodb://127.0.0:27017//database name goes here')
// //usethis later: mongoose.set('strictQuery', true);

import express from "express";
const app = express();
const port = 2023
import comedores from "./routes/comedores.mjs";


app.get('/', (req, res) => {
    res.send('Let\'s see!');
});

//console.log(comedores)
//middleware
app.use(express.json()) //this allows is to use req.body
app.use('/comedores', comedores)
//error handeling middleware
app.use((err, req, res, next) => {
    res.status(500).send("Ay joder! An unexpected error occured.");
})



app.listen(port, () => {
    console.log(`Yay!, server is listening on port: ${port}`)
})