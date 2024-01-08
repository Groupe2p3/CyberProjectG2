var db = require('./db')

exports.getAllForms = async function() {
    const result = await db.query('SELECT * from Form', [])
    return result
}