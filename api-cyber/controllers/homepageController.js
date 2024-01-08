var homepageService = require('../services/homepageService');

exports.solutions = async function(req, res) {
    const solutions = await homepageService.getSolutions();
    res
        .status(200)
        .json(solutions);
        
}

exports.companies = async function(req, res) {
    const companies = await homepageService.getCompanies();
    res
        .status(200)
        .json(companies);
}

exports.company = async function(req, res) {
    const company = await homepageService.getCompany(req.params.name);
    res
        .status(200)
        .json(company);
}

exports.types = async function(req, res) {
    const types = await homepageService.getTypes();
    res
        .status(200)
        .json(types);
}

exports.type = async function(req, res) {
    const type = await homepageService.getType(req.params.name);
    res
        .status(200)
        .json(type);
}

exports.search = async function(req, res) {
    const solutions = await homepageService.search(req.params.content);
    res
        .status(200)
        .json(solutions);
}