/**
 * Controller: HomeController
 * Author: ninhtqse
 * Created: 2021-12-08
 */

exports.index = function(req, res) {
    res.render('client/home/index.html',{name:"api"});
};