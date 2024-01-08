var formsRepository = require('../repositories/forms')

exports.getAllForms = async function() {
    const forms = await formsRepository.getAllForms();
    return forms;
}