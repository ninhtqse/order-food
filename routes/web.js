const router = require("express").Router();

var HomeController = require('../controllers/client/home/HomeController');

//HOME
router.get("/", HomeController.index);

module.exports = router;