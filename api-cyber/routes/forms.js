var express = require('express')
var router = express.Router()

var formsController = require('../controllers/forms')

router.get('/', formsController.getAllForms)

module.exports = router