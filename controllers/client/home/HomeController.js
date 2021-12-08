/**
 * Controller: HomeController
 * Author: ninhtqse
 * Created: 2021-12-08
 */
var express = require('express');
const app   = express();
app.use(express.static('../../../'));

exports.index = function(req, res) {
    res.render('views/home/index.html');
};