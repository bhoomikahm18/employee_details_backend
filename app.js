const express = require('express');
const mongoose = require('mongoose');
const employeeRouter = require('./routes/emp-routes.js')
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());
app.use("/api", employeeRouter)

mongoose.connect("mongodb+srv://bhoomikahm18:Eb9pD8rgZxthvtsy@cluster0.p374nah.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
    .then(() => app.listen(5000))
    .then(() => console.log("Connected to Database and listening to localhost 5000"))
    .catch((err) => console.log(err))