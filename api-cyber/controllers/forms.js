var formsService = require('../services/forms')

exports.getAllForms= async function(req,res) {
    const forms = await formsService.getAllForms()
    res
    .status(200)
    .json({
        data : forms
    })
}