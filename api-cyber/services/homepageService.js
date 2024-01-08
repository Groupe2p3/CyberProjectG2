var homepageRepository = require('../repositories/homepageRepository');

exports.getSolutions = async function() {
    const solutions = await homepageRepository.getSolutions();
    return solutions;
}

exports.getCompanies = async function() {
    const companies = await homepageRepository.getCompanies();
    return companies;
}

exports.getCompany = async function(name) {
    const company = await homepageRepository.getCompany(name);
    return company;
}

exports.getTypes = async function() {
    const types = await homepageRepository.getTypes();
    return types;
}

exports.getType = async function(name) {
    const type = await homepageRepository.getType(name);
    return type;
}   

exports.search = async function(query) {
    const solutions = await homepageRepository.search(query);
    return solutions;
}

