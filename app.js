const express = require('express');
const mongoose = require('mongoose');

const app = express();
app.use(express.json());

mongoose.connect("mongodb+srv://bhoomikahm18:Eb9pD8rgZxthvtsy@cluster0.p374nah.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
    .then(() => app.listen(5000))
    .then(() => console.log("Connected to Database and listening to localhost 5000"))
    .catch((err) => console.log(err))