const express = require('express');
const mongoose = require('mongoose');
const employeeRouter = require('./routes/emp-routes.js')
const cors = require('cors'); //Installed cors to interact with different domain

const app = express();
app.use(cors()); //Used to allow access from the different domain
app.use(express.json());
app.use("/api", employeeRouter)

//Connecting to database from MongoDB Atlas
//Specifying the port number.
mongoose.connect("mongodb+srv://bhoomikahm18:Eb9pD8rgZxthvtsy@cluster0.p374nah.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
    .then(() => app.listen(5000)) 
    .then(() => console.log("Connected to Database and listening to localhost 5000"))
    .catch((err) => console.log(err))