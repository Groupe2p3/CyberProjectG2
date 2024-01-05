var express = require('express');
var router = express.Router()

var homepageController = require('../controllers/homepageController');

router.get('/solutions', homepageController.solutions);
router.get('/companies', homepageController.companies);
router.get('/companies/:name', homepageController.company);
router.get('/types', homepageController.types);
router.get('/types/:name', homepageController.type);

module.exports = router;