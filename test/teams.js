const checker = require('./propertyCheck');
const properties = {
    "id": "number",
    "name": "string",
    "iso2": "string",
    "flag": "string",
    "emoji": "string"
};

module.exports = function (data, errors) {
    checker(data, errors, 'teams', 32, 'Team', properties);
};
