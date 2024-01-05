var db = require('../repositories/db');

exports.getSolutions = async function() {
    const result = await db.query(`
        SELECT t."IdSolution" AS "Id", t."Name" AS "SolutionName", t."Price" AS "Price", c."Name" AS "CompanyName", fa."TypeForm" AS "TypeForm"
        FROM "Cyber"."Solution" t
        INNER JOIN "Cyber"."Company" c
        ON t."IdCompany" = c."IdCompany"
        INNER JOIN "Cyber"."FormAnswer" fa
        ON c."IdFormAnswer" = fa."IdFormAnswer"
    `, []);
    return result;
}

exports.getCompanies = async function() {
    const result = await db.query(`
        SELECT DISTINCT c."Name" AS "CompanyName", c."IdCompany"
        FROM "Cyber"."Company" c
    `, []);
    return result;
}

exports.getCompany = async function(name) {
    const result = await db.query(`
        SELECT t."IdSolution" AS "Id", t."Name" AS "SolutionName", t."Price" AS "Price", c."Name" AS "CompanyName", fa."TypeForm" AS "TypeForm"
        FROM "Cyber"."Solution" t
        INNER JOIN "Cyber"."Company" c
        ON t."IdCompany" = c."IdCompany"
        INNER JOIN "Cyber"."FormAnswer" fa
        ON c."IdFormAnswer" = fa."IdFormAnswer"
        WHERE c."Name" = $1
    `, [name]);
    return result;
}

exports.getTypes = async function() {
    const result = await db.query(`
        SELECT DISTINCT fa."TypeForm", fa."IdFormAnswer"
        FROM "Cyber"."FormAnswer" fa
    `, []);
    return result;
}

exports.getType = async function(name) {
    const result = await db.query(`
        SELECT t."IdSolution" AS "Id", t."Name" AS "SolutionName", t."Price" AS "Price", c."Name" AS "CompanyName", fa."TypeForm" AS "TypeForm"
        FROM "Cyber"."Solution" t
        INNER JOIN "Cyber"."Company" c
        ON t."IdCompany" = c."IdCompany"
        INNER JOIN "Cyber"."FormAnswer" fa
        ON c."IdFormAnswer" = fa."IdFormAnswer"
        WHERE fa."TypeForm" = $1
    `, [name]);
    return result;
}

