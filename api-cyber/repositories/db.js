const Pool = require('pg').Pool

const pool = new Pool()

exports.query = function(sqlQuery, params) {
    return new Promise((resolve, reject) => {
        pool.connect().then(client => {
            client.query(sqlQuery, params).then(result => {
                resolve(result.rows)
            })
        })
    })
}