const checker = require('./propertyCheck');
const properties = {
    "id": "number",
    "name": "string",
    "city": "string",
    "lat": "number",
    "lng": "number",
};

module.exports = function (data, errors) {
    checker(data, errors, 'stadiums', 12, 'Stadium', properties);
};
