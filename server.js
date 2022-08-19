//npm install express mongoose ejs dotenv
//npm install --save-dev nodemon

//"start": "nodemon server.js"

// set env
require('dotenv').config({
    path: "./config/.env"
})


//Declare Variables
const express = require("express");
const app = express();
const PORT = 8000;
const connectDB = require('./config/database')
const homeRoutes = require('./routes/home')
const todoRoutes = require('./routes/todo')

// Connect to DB
connectDB()

//Set Middleware
app.set("view engine", "ejs");
app.set('views', './views')
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }));
app.use(express.json())

// Set Routers
app.use('/', homeRoutes)
app.use('/todo', todoRoutes)

//Start Server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));