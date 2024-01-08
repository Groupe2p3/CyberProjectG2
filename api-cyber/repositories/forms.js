var db = require('../repositories/db')

exports.getAllForms = async function() {
    const result = await db.query('SELECT * from form', [])
    return result
}