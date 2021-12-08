const express = require('express');
const dotenv = require("dotenv");
const app     = express();
const port    = 3000;

const routes = require("./routes/web");

//config môi trường
dotenv.config();

//router 
app.use("/",routes);

//run server
app.listen(port, () =>{
    console.log('backend server is running');
});