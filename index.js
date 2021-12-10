const express = require('express');
const dotenv = require("dotenv");
const app     = express();
const port    = 3000;

const routes = require("./routes/web");

//config view
app.set('views', './views/');
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'ejs');

//config môi trường
dotenv.config();

//router 
app.use("/",routes);

//config folder public 
app.use(express.static(`${__dirname}/public`))


//run server
app.listen(port, () =>{
    console.log('backend server is running');
});